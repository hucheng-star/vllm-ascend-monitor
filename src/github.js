import { REPO, USER_AGENT } from "./config.js";
import { matchModelIds } from "./models.js";

const DAY_FORMAT = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export function shanghaiDay(value = new Date()) {
  const date = value instanceof Date ? value : new Date(value);
  return DAY_FORMAT.format(date);
}

export function shanghaiToday(now = new Date()) {
  const day = shanghaiDay(now);
  return {
    day,
    startMs: new Date(`${day}T00:00:00+08:00`).getTime(),
  };
}

export function sinceDay(days = 30, now = new Date()) {
  return shanghaiDay(now.getTime() - days * 24 * 60 * 60 * 1000);
}

function authHeaders() {
  const headers = {
    "User-Agent": USER_AGENT,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  return headers;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function githubJson(url) {
  let lastError = null;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const response = await fetch(url, { headers: authHeaders(), signal: AbortSignal.timeout(60000) });
      const rateRemaining = response.headers.get("x-ratelimit-remaining");
      const rateReset = Number(response.headers.get("x-ratelimit-reset")) || 0;
      if (response.status === 403 || response.status === 429) {
        const wait = Math.min(Math.max(rateReset * 1000 - Date.now(), 5000), 70000);
        await sleep(wait);
        continue;
      }
      if (!response.ok) {
        const detail = await response.text();
        const error = new Error(`GitHub ${response.status} ${url}: ${detail.slice(0, 180)}`);
        error.status = response.status;
        error.rateRemaining = rateRemaining;
        throw error;
      }
      return { data: await response.json(), rateRemaining, rateReset };
    } catch (error) {
      lastError = error;
      if (error.status) throw error;
    }
  }
  throw lastError;
}

export function excerpt(body) {
  if (!body) return "";
  let text = String(body).split(/###\s+Your current environment/i)[0];
  text = text.replace(/<details[\s\S]*?<\/details>/gi, " ");
  text = text.replace(/```[\s\S]*?```/g, " ");
  const described = text.match(/###[^\n]*(?:bug|描述|problem|summary|feature|背景)[^\n]*\n+([\s\S]{0,700})/i);
  const source = described ? described[1] : text;
  return source
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/[#>*_`|]/g, " ")
    .replace(/What this PR does\s*\/\s*why we need it\??/gi, " ")
    .replace(/Does this PR introduce any user-facing change\??/gi, " ")
    .replace(/How was this patch tested\??/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<img\b[^>]*>/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 240);
}

function classifyAction(item, startMs) {
  const merged = item.mergedAt ? Date.parse(item.mergedAt) : 0;
  const created = Date.parse(item.createdAt);
  const closed = item.closedAt ? Date.parse(item.closedAt) : 0;
  const updated = Date.parse(item.updatedAt);
  if (merged >= startMs) return "merged";
  if (created >= startMs) return "opened";
  if (closed >= startMs) return "closed";
  if (updated >= startMs) return "updated";
  return "older";
}

function normalize(raw, kind, startMs) {
  const title = raw.title || "";
  const summary = excerpt(raw.body);
  const labels = (raw.labels || []).map((label) => label.name).filter(Boolean);
  const titleIds = matchModelIds(`${title}\n${labels.join(" ")}`);
  const bodyIds = matchModelIds(summary.slice(0, 160));
  const modelIds = titleIds.length ? titleIds : bodyIds.length <= 2 ? bodyIds : [];
  const item = {
    kind,
    number: raw.number,
    title,
    url: raw.html_url,
    author: raw.user?.login || "",
    labels,
    state: raw.state,
    draft: Boolean(raw.draft),
    createdAt: raw.created_at,
    updatedAt: raw.updated_at,
    closedAt: raw.closed_at,
    mergedAt: raw.merged_at || null,
    comments: raw.comments || 0,
    excerpt: summary,
    modelIds,
  };
  item.action = classifyAction(item, startMs);
  return item;
}

async function fetchPages(baseUrl, { maxPages = 2, horizonMs = 7 * 24 * 60 * 60 * 1000 } = {}) {
  const rows = [];
  let rateRemaining = null;
  for (let page = 1; page <= maxPages; page += 1) {
    const { data, rateRemaining: remaining } = await githubJson(`${baseUrl}&per_page=40&page=${page}`);
    rateRemaining = remaining;
    if (!Array.isArray(data) || data.length === 0) break;
    rows.push(...data);
    const oldest = data[data.length - 1];
    const oldestMs = Date.parse(oldest.updated_at || oldest.created_at || 0);
    if (oldestMs < Date.now() - horizonMs) break;
  }
  return { rows, rateRemaining };
}

const HISTORY_KEYWORDS = [
  ["DeepSeek", 2],
  ["Qwen", 2],
  ["GLM", 1],
  ["Kimi", 1],
  ["MiniMax", 1],
  ["Gemma", 1],
  ["Step3", 1],
  ["Bailing", 1],
];

async function searchIssues(query, page) {
  const url = `https://api.github.com/search/issues?q=${encodeURIComponent(query)}&sort=updated&order=desc&per_page=20&page=${page}`;
  try {
    const { data, rateRemaining } = await githubJson(url);
    if (Number(rateRemaining) === 0) await sleep(15000);
    return { items: data.items || [], total: data.total_count || 0, rateRemaining };
  } catch (error) {
    return { items: [], total: 0, rateRemaining: null, error };
  }
}

async function fetchHistorySearch(since) {
  const rows = [];
  let rateRemaining = null;
  for (const [keyword, pages] of HISTORY_KEYWORDS) {
    for (let page = 1; page <= pages; page += 1) {
      const merged = await searchIssues(
        `repo:${REPO} is:pr is:merged ${keyword} updated:>=${since}`,
        page,
      );
      rateRemaining = merged.rateRemaining;
      rows.push(...merged.items.map((item) => ({ ...item, merged_at: item.closed_at })));
      if (merged.items.length < 20) break;
    }
  }
  const open = await searchIssues(`repo:${REPO} is:pr is:open DeepSeek updated:>=${since}`, 1);
  const issues = await searchIssues(`repo:${REPO} is:issue Qwen updated:>=${since}`, 1);
  const glmIssues = await searchIssues(`repo:${REPO} is:issue GLM updated:>=${since}`, 1);
  rows.push(...open.items, ...issues.items, ...glmIssues.items);
  return { rows, rateRemaining: glmIssues.rateRemaining ?? issues.rateRemaining ?? open.rateRemaining ?? rateRemaining };
}

export async function fetchCommunity({ deep = false } = {}) {
  const { startMs, day } = shanghaiToday();
  const since = sinceDay(30);
  const recentTask = Promise.all([
    fetchPages(`https://api.github.com/repos/${REPO}/pulls?state=all&sort=updated&direction=desc`),
    fetchPages(`https://api.github.com/repos/${REPO}/issues?state=all&sort=updated&direction=desc`),
    githubJson(`https://api.github.com/repos/${REPO}`),
  ]);
  const historyTask = deep
    ? fetchHistorySearch(since)
    : Promise.resolve({ rows: [], rateRemaining: null });
  const [recentResult, history] = await Promise.all([recentTask, historyTask]);
  const [pulls, issues, repo] = recentResult;

  const recent = [
    ...pulls.rows.map((row) => normalize(row, "pr", startMs)),
    ...issues.rows.filter((row) => !row.pull_request).map((row) => normalize(row, "issue", startMs)),
  ];
  const historyItems = history.rows.map((row) => normalize(row, row.pull_request ? "pr" : "issue", startMs));

  recent.sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));
  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const rates = [pulls.rateRemaining, issues.rateRemaining, repo.rateRemaining, history.rateRemaining]
    .map((value) => Number(value))
    .filter((value) => Number.isFinite(value));

  return {
    day,
    since,
    items: recent.filter((item) => Date.parse(item.updatedAt) >= weekAgo),
    historyItems,
    openIssuesIncludingPrs: repo.data.open_issues_count ?? null,
    rateRemaining: rates.length ? Math.min(...rates) : null,
  };
}

export function scoreItem(item) {
  let score = 0;
  if (item.action === "merged") score += 5;
  if (item.action === "opened") score += 4;
  if (item.action === "closed") score += 2;
  if (item.action === "updated") score += 1;
  if (item.labels.some((label) => /bug|feature|model|rfc/i.test(label))) score += 2;
  if (item.comments >= 2) score += 1;
  if (item.draft) score -= 1;
  if (item.modelIds.length) score += 2;
  if (/dependabot/i.test(item.author)) score -= 3;
  if (/^\[(CI|Test|Doc|Docs|Chore|Misc)\]/i.test(item.title)) score -= 3;
  return score;
}

const ACTION_ZH = {
  merged: "已合并",
  opened: "新开",
  closed: "已关闭",
  updated: "有更新",
  older: "更早",
};

export function actionLabel(action) {
  return ACTION_ZH[action] || action;
}
