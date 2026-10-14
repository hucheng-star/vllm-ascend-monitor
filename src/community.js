import { USER_AGENT } from "./config.js";
import { shanghaiDay } from "./github.js";

const CODEOWNERS_URL = "https://api.github.com/repos/vllm-project/vllm-ascend/contents/.github/CODEOWNERS";

const ISSUE_CATEGORIES = [
  { id: "bugfix", name: "Bug" },
  { id: "feature", name: "Feature" },
  { id: "performance", name: "Perf" },
  { id: "doc", name: "Docs" },
  { id: "question", name: "Question" },
  { id: "other", name: "Other" },
];

export function shiftDay(day, delta) {
  const [year, month, date] = day.split("-").map(Number);
  const utc = new Date(Date.UTC(year, month - 1, date));
  utc.setUTCDate(utc.getUTCDate() + delta);
  return utc.toISOString().slice(0, 10);
}

export function weekStart(day) {
  const [year, month, date] = day.split("-").map(Number);
  const utc = new Date(Date.UTC(year, month - 1, date));
  const weekday = utc.getUTCDay();
  const delta = weekday === 0 ? 6 : weekday - 1;
  utc.setUTCDate(utc.getUTCDate() - delta);
  return utc.toISOString().slice(0, 10);
}

export function classifyItem(item) {
  const text = `${item.title || ""} ${item.titleZh || ""} ${(item.labels || []).join(" ")}`;
  if (/【文档】|\[doc\]|documentation/i.test(text)) return "doc";
  if (/【缺陷】|\[bug|bugfix|\bbug\b/i.test(text)) return "bugfix";
  if (/提问|咨询|\bquestion\b/i.test(text)) return "question";
  if (/性能|perf|optim|吞吐/i.test(text)) return "performance";
  if (/功能|feat|feature|enhancement|\brfc\b/i.test(text)) return "feature";
  return "other";
}

export function parseCodeowners(text) {
  const areas = new Map();
  for (const line of String(text || "").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const parts = trimmed.split(/\s+/);
    const area = parts[0];
    for (const token of parts.slice(1)) {
      if (!token.startsWith("@")) continue;
      const login = token.slice(1);
      if (!areas.has(login)) areas.set(login, []);
      areas.get(login).push(area);
    }
  }
  return [...areas.entries()]
    .map(([login, paths]) => ({
      login,
      areas: paths.slice(0, 2),
      areaCount: paths.length,
    }))
    .sort((a, b) => b.areaCount - a.areaCount || a.login.localeCompare(b.login));
}

export async function loadMaintainers(fallback = []) {
  try {
    const response = await fetch(CODEOWNERS_URL, {
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "application/vnd.github+json",
      },
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) return fallback;
    const data = await response.json();
    const text = Buffer.from(data.content || "", "base64").toString("utf8");
    const people = parseCodeowners(text);
    return people.length ? people : fallback;
  } catch {
    return fallback;
  }
}

function inRange(day, start, end) {
  return Boolean(day) && day >= start && day <= end;
}

function isBot(login) {
  return /(?:bot|\[bot\]|-ci|_ci)$/i.test(login || "");
}

function brief(item) {
  return {
    number: item.number,
    title: item.title,
    titleZh: item.titleZh || "",
    url: item.url,
    author: item.author || "",
    createdAt: item.createdAt,
    state: item.state,
  };
}

export function buildCommunity(items, { today = shanghaiDay(), maintainers = [] } = {}) {
  const week = weekStart(today);
  const month = `${today.slice(0, 8)}01`;
  const previousWeekStart = shiftDay(week, -7);
  const previousWeekEnd = shiftDay(week, -1);
  const quietStart = shiftDay(week, -21);
  const chartDays = Array.from({ length: 14 }, (_, index) => shiftDay(today, index - 13));

  const prMerged = { day: 0, week: 0, month: 0 };
  const issuesOpened = { day: 0, week: 0, month: 0 };
  const prDaily = new Map(chartDays.map((day) => [day, 0]));
  const issueDaily = new Map(chartDays.map((day) => [day, 0]));
  const issueBuckets = new Map(ISSUE_CATEGORIES.map((category) => [category.id, {
    ...category,
    day: 0,
    week: 0,
    month: 0,
    open: 0,
    recent: [],
  }]));

  const authorEvents = new Map();
  const committers = new Map();

  for (const item of items) {
    const author = isBot(item.author) ? "" : (item.author || "");
    const created = shanghaiDay(item.createdAt);
    const merged = item.mergedAt ? shanghaiDay(item.mergedAt) : "";
    if (author) {
      if (!authorEvents.has(author)) authorEvents.set(author, []);
      const stamp = merged || created;
      if (stamp) authorEvents.get(author).push(stamp);
    }

    if (item.kind === "pr" && merged) {
      if (merged === today) prMerged.day += 1;
      if (inRange(merged, week, today)) prMerged.week += 1;
      if (inRange(merged, month, today)) prMerged.month += 1;
      if (prDaily.has(merged)) prDaily.set(merged, prDaily.get(merged) + 1);
      if (author && inRange(merged, month, today)) committers.set(author, (committers.get(author) || 0) + 1);
    }

    if (item.kind !== "issue") continue;
    const category = issueBuckets.get(classifyItem(item));
    if (created === today) {
      issuesOpened.day += 1;
      category.day += 1;
    }
    if (inRange(created, week, today)) {
      issuesOpened.week += 1;
      category.week += 1;
    }
    if (inRange(created, month, today)) {
      issuesOpened.month += 1;
      category.month += 1;
    }
    if (issueDaily.has(created)) issueDaily.set(created, issueDaily.get(created) + 1);
    if (item.state !== "closed") category.open += 1;
    if (category.recent.length < 8) category.recent.push(brief(item));
  }

  for (const category of issueBuckets.values()) {
    category.recent.sort((a, b) => Date.parse(b.createdAt || 0) - Date.parse(a.createdAt || 0));
  }

  const joined = [];
  const quiet = [];
  let activeWeek = 0;
  let activePrevious = 0;
  for (const [login, days] of authorEvents) {
    const unique = [...new Set(days)].sort();
    const first = unique[0];
    const thisWeek = unique.some((day) => inRange(day, week, today));
    const previous = unique.some((day) => inRange(day, previousWeekStart, previousWeekEnd));
    const earlier = unique.some((day) => inRange(day, quietStart, previousWeekEnd));
    if (thisWeek) activeWeek += 1;
    if (previous) activePrevious += 1;
    if (thisWeek && first >= week) joined.push(login);
    else if (earlier && !thisWeek) quiet.push(login);
  }

  const previousWeekMerges = items.filter((item) => item.kind === "pr" && item.mergedAt && inRange(shanghaiDay(item.mergedAt), previousWeekStart, previousWeekEnd)).length;
  const previousWeekIssues = items.filter((item) => item.kind === "issue" && inRange(shanghaiDay(item.createdAt), previousWeekStart, previousWeekEnd)).length;

  return {
    today,
    week,
    month,
    activity: {
      prMerged,
      issuesOpened,
      previousWeekMerges,
      previousWeekIssues,
      prDaily: chartDays.map((day) => ({ day, count: prDaily.get(day) })),
      issueDaily: chartDays.map((day) => ({ day, count: issueDaily.get(day) })),
    },
    people: {
      activeWeek,
      activePrevious,
      joined: joined.slice(0, 12),
      quiet: quiet.slice(0, 12),
      committers: [...committers.entries()]
        .map(([login, merged]) => ({ login, merged }))
        .sort((a, b) => b.merged - a.merged || a.login.localeCompare(b.login))
        .slice(0, 12),
      maintainers,
    },
    issues: {
      categories: [...issueBuckets.values()],
    },
  };
}
