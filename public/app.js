const modulesEl = document.querySelector("#modules");
const mainEl = document.querySelector("#main");
const statusEl = document.querySelector("#status");
const warningsEl = document.querySelector("#warnings");
const liveEl = document.querySelector("#live");
const refreshButton = document.querySelector("#refresh");

const MODULES = [
  ["models", "模型总览", "", "layers"],
  ["issues", "Issue 总览", "", "issue"],
  ["features", "特性介绍", "", "feature"],
  ["community", "社区状态", "", "activity"],
];

const PR_CATEGORIES = [
  ["bugfix", "修复"],
  ["feature", "功能"],
  ["performance", "性能"],
  ["other", "其他"],
];

const ISSUE_LABELS = {
  bugfix: "Bug",
  feature: "Feature",
  performance: "Perf",
  doc: "Docs",
  question: "Question",
  other: "Other",
};

const ISSUE_BOARD_ORDER = ["bugfix", "feature", "doc", "performance", "question", "other"];

const ICONS = {
  activity: "M3 12h4l2.5-6 4 12L16 8h5",
  layers: "M12 3l9 5-9 5L3 8l9-5zm0 9l9 5-9 5-9-5 9-5z",
  issue: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 5v4m0 4h.01",
  merge: "M6 4v8a4 4 0 0 0 4 4h1M6 4a2 2 0 1 0 0.01 0M18 20a2 2 0 1 0 .01 0M18 8a2 2 0 1 0 .01 0M18 8v6a4 4 0 0 1-4 4h-3",
  people: "M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 7a3 3 0 1 0 0.01 0M19 8v6M16 11h6",
  shield: "M12 3l7 3v6c0 4.5-2.8 7.4-7 9-4.2-1.6-7-4.5-7-9V6l7-3z",
  pen: "M4 20h4l10-10-4-4L4 16v4zm9-13l4 4",
  bug: "M8 8a4 4 0 0 1 8 0v2a4 4 0 0 1-8 0V8zM4 10h4M16 10h4M5 16l3-2M19 16l-3-2M12 14v6",
  spark: "M12 3l1.6 5.2L19 10l-5.4 1.8L12 17l-1.6-5.2L5 10l5.4-1.8L12 3z",
  gauge: "M5 16a7 7 0 1 1 14 0M12 13l3-3",
  file: "M6 3h8l4 4v14H6V3zm8 0v4h4",
  help: "M12 17h.01M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.8.4-1 .8-1 1.7",
  more: "M5 12h.01M12 12h.01M19 12h.01",
  feature: "M4 5h6v4H4zM14 5h6v4h-6zM9 15h6v4H9zM7 9v3M17 9v3M12 12v3",
  diagram: "M4 7h5v4H4zM15 7h5v4h-5zM9.5 15h5v4h-5zM6.5 11v2.2L12 15M17.5 11v2.2L12 15",
};

let state = null;
let selected = "models";
let modelQuery = "";
let issueQuery = "";
let activeModel = "";
let activeFeature = "";
let activePrinciple = "";
const featureFamily = new Map();
const FEATURE_FAMILIES = ["DeepSeek", "Qwen", "GLM", "Kimi", "MiniMax", "Gemma", "Step", "Bailing", "其他"];

const timeFormat = new Intl.DateTimeFormat("zh-CN", {
  timeZone: "Asia/Shanghai",
  month: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

function icon(name) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  svg.classList.add("icon");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", ICONS[name] || ICONS.more);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "currentColor");
  path.setAttribute("stroke-width", "1.8");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  svg.append(path);
  return svg;
}

function stageTerms(text) {
  return String(text)
    .replaceAll("预填充", "Prefill")
    .replaceAll("发行说明", "release note")
    .replaceAll("投机解码", "\uE000")
    .replaceAll("解码器", "\uE001")
    .replaceAll("解码", "Decode")
    .replaceAll("\uE000", "投机解码")
    .replaceAll("\uE001", "解码器")
    .replace(/([\u4e00-\u9fff])(Prefill|Decode|release note)/g, "$1 $2")
    .replace(/(Prefill|Decode|release note)([\u4e00-\u9fff])/g, "$1 $2");
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = stageTerms(text);
  return node;
}

function richNode(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  for (const part of stageTerms(text).split(/(\*\*[^*]+\*\*)/g)) {
    if (!part) continue;
    if (part.startsWith("**") && part.endsWith("**")) {
      node.append(el("strong", null, part.slice(2, -2)));
    } else {
      node.append(document.createTextNode(part));
    }
  }
  return node;
}

function supportCellClass(cell) {
  if (cell === "✅") return "mark ok";
  if (cell === "🔵") return "mark exp";
  if (cell === "🔴") return "mark retired";
  if (cell === "🟡") return "mark unverified";
  if (cell === "❌") return "mark no";
  return "";
}

function shiftDay(day, delta) {
  const [year, month, date] = day.split("-").map(Number);
  const utc = new Date(Date.UTC(year, month - 1, date));
  utc.setUTCDate(utc.getUTCDate() + delta);
  return utc.toISOString().slice(0, 10);
}

function classify(item) {
  const text = `${item.title || ""} ${item.titleZh || ""} ${(item.labels || []).join(" ")}`;
  if (/【文档】|\[doc\]|documentation/i.test(text)) return "doc";
  if (/【缺陷】|\[bug|bugfix|\bbug\b/i.test(text)) return "bugfix";
  if (/提问|咨询|\bquestion\b/i.test(text)) return "question";
  if (/性能|perf|optim|吞吐/i.test(text)) return "performance";
  if (/功能|feat|feature|enhancement|\brfc\b/i.test(text)) return "feature";
  return "other";
}

function prCategory(item) {
  const category = classify(item);
  return PR_CATEGORIES.some(([id]) => id === category) ? category : "other";
}

function sameTitle(a, b) {
  const norm = (text) => String(text).toLowerCase().replace(/[\[\]【】()（）：:，,.\s]/g, "");
  return norm(a) === norm(b);
}

function translatedTitle(item) {
  const original = String(item.title || "").trim();
  let zh = String(item.titleZh || "").trim();
  if (!zh) return "";
  const tags = [...original.matchAll(/\[([^\]\n]+)\]/g)].map((match) => match[1].trim()).filter(Boolean);
  if (!tags.length) return zh;
  zh = zh.replace(/^(?:\s*(?:【[^】]*】|\[[^\]]*\])\s*)+/, "").replace(/^[：:]\s*/, "").trim();
  return `${tags.map((tag) => `[${tag}]`).join("")} ${zh}`.trim();
}

function tagKind(name) {
  const text = String(name || "").trim();
  if (/^(bugfix|bug|缺陷|修复)$/i.test(text)) return "bug";
  if (/^(feat|feature|features|enhancement|功能|特性)$/i.test(text)) return "feature";
  if (/^(perf|performance|性能)$/i.test(text)) return "perf";
  if (/^(doc|docs|文档)$/i.test(text)) return "doc";
  if (/^rfc$/i.test(text)) return "rfc";
  if (/^(ci|tests?|测试)$/i.test(text)) return "ci";
  if (/^(refactor|misc|chore|重构|杂项)$/i.test(text)) return "misc";
  return "other";
}

function appendTaggedText(parent, text) {
  const source = stageTerms(String(text || ""));
  const pattern = /\[([^\]\n]+)\]|【([^】\n]+)】/g;
  let last = 0;
  for (const match of source.matchAll(pattern)) {
    const label = String(match[1] || match[2] || "").trim();
    const mark = label.length > 0 && label.length <= 28 && !/[：:，。,.!?？！]/.test(label);
    if (match.index > last) parent.append(document.createTextNode(source.slice(last, match.index)));
    if (!mark) {
      parent.append(document.createTextNode(match[0]));
      last = match.index + match[0].length;
      continue;
    }
    const chip = document.createElement("span");
    chip.className = `term tag-${tagKind(label)}`;
    chip.textContent = match[0];
    parent.append(chip);
    last = match.index + match[0].length;
  }
  if (last < source.length) parent.append(document.createTextNode(source.slice(last)));
}

function titlePair(item, prefix = "#", className = "") {
  const original = String(item.title || "").trim();
  const zh = translatedTitle(item);
  const distinct = zh && original && !sameTitle(zh, original);
  const wrap = el("div", ["title-pair", className].filter(Boolean).join(" "));
  const link = externalLink(item.url, "");
  appendTaggedText(link, `${prefix}${item.number} ${distinct ? zh : (zh || original)}`);
  wrap.append(link);
  if (distinct) {
    const line = el("p", "original");
    appendTaggedText(line, original);
    wrap.append(line);
  }
  return wrap;
}

function externalLink(href, text, className) {
  const link = el("a", className, text);
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer";
  return link;
}

function renderModules() {
  modulesEl.replaceChildren();
  for (const [id, label, hint, iconName] of MODULES) {
    const button = el("button", `module${selected === id ? " active" : ""}`);
    button.type = "button";
    const mark = el("span", "module-icon");
    mark.append(icon(iconName));
    const copy = el("span", "module-copy");
    copy.append(el("strong", null, label));
    if (hint) copy.append(el("small", null, hint));
    button.append(mark, copy);
    button.addEventListener("click", () => select(id));
    modulesEl.append(button);
  }
}

function metric(iconName, value, label, hint) {
  const card = el("article", "metric");
  const mark = el("span", "metric-icon");
  mark.append(icon(iconName));
  card.append(mark);
  card.append(el("b", null, String(value)));
  card.append(el("span", null, label));
  if (hint) card.append(el("small", null, hint));
  return card;
}

function trend(current, previous) {
  if (current > previous) return "高于上周";
  if (current < previous) return "低于上周";
  return "与上周持平";
}

function formatDay(day) {
  const [, month, date] = String(day).split("-");
  return `${month}/${date}`;
}

function bars(series, className) {
  const max = Math.max(1, ...series.map((entry) => entry.count));
  const chart = el("div", `bars ${className || ""}`);
  for (const entry of series) {
    const column = el("div", "bar");
    const stick = el("i");
    stick.style.height = `${Math.max(4, Math.round((entry.count / max) * 64))}px`;
    stick.title = `${entry.day} · ${entry.count}`;
    column.append(stick, el("span", null, formatDay(entry.day)));
    chart.append(column);
  }
  return chart;
}

function personLink(login) {
  return externalLink(`https://github.com/${login}`, login, "person");
}

function renderPeopleList(logins, empty) {
  if (!logins.length) return el("p", "empty", empty);
  const row = el("div", "people");
  for (const login of logins) row.append(personLink(login));
  return row;
}

function names(logins, limit = 6) {
  return logins.slice(0, limit).join("、") || "无";
}

function renderCommunity() {
  const community = state.community;
  const wrap = document.createDocumentFragment();
  const head = el("div", "page-head");
  head.append(el("h2", null, "社区状态"));
  head.append(el("p", null, community
    ? `统计到 ${community.today}。合入按合并日，Issue 按提出日。`
    : "社区汇总还在生成。"));
  wrap.append(head);
  if (!community) {
    wrap.append(el("p", "empty", "同步一次后，这里会显示合入、Issue 和人员。"));
    mainEl.replaceChildren(wrap);
    return;
  }

  const activity = community.activity;
  const pair = el("section", "pair");
  const prBox = el("article", "statbox");
  prBox.append(el("h3", null, "PR 合入"));
  const prLine = el("div", "statline");
  for (const [title, value, hint] of [
    ["今日合入", activity.prMerged.day, "当日合并"],
    ["本周合入", activity.prMerged.week, trend(activity.prMerged.week, activity.previousWeekMerges)],
    ["本月合入", activity.prMerged.month, `${Number(community.month.slice(5, 7))} 月起`],
  ]) {
    const cell = el("div");
    cell.append(el("span", "stat-title", title), el("b", null, String(value)), el("small", null, hint));
    prLine.append(cell);
  }
  prBox.append(prLine);
  const issueBox = el("article", "statbox");
  issueBox.append(el("h3", null, "Issue"));
  const issueLine = el("div", "statline");
  for (const [title, value, hint] of [
    ["今日新增", activity.issuesOpened.day, "当日提出"],
    ["本周新增", activity.issuesOpened.week, trend(activity.issuesOpened.week, activity.previousWeekIssues)],
    ["本月新增", activity.issuesOpened.month, "本月提出"],
  ]) {
    const cell = el("div");
    cell.append(el("span", "stat-title", title), el("b", null, String(value)), el("small", null, hint));
    issueLine.append(cell);
  }
  issueBox.append(issueLine);
  pair.append(prBox, issueBox);
  wrap.append(pair);

  const charts = el("section", "charts");
  const prChart = el("article", "panel");
  prChart.append(el("h3", null, "近 14 天 PR 合入"));
  prChart.append(bars(activity.prDaily, "merge-bars"));
  const issueChart = el("article", "panel");
  issueChart.append(el("h3", null, "近 14 天新 Issue"));
  issueChart.append(bars(activity.issueDaily, "issue-bars"));
  charts.append(prChart, issueChart);
  wrap.append(charts);

  const issues = el("section", "issue-line");
  for (const category of community.issues.categories) {
    const card = el("button");
    card.type = "button";
    card.append(el("strong", null, ISSUE_LABELS[category.id] || category.name), el("b", null, String(category.month)), el("small", null, `开放 ${category.open}`));
    card.addEventListener("click", () => select("issues"));
    issues.append(card);
  }
  wrap.append(issues);

  const people = community.people;
  const foot = el("section", "foot");
  const flow = el("article", "panel");
  flow.append(el("h3", null, "人员流动"));
  flow.append(el("p", null, `本周 ${people.activeWeek} 人有动态，上周 ${people.activePrevious} 人。`));
  flow.append(el("p", null, `新出现：${names(people.joined)}`));
  flow.append(el("p", null, `未再出现：${names(people.quiet)}`));
  const maintainers = el("article", "panel");
  maintainers.append(el("h3", null, "维护者"));
  maintainers.append(el("p", null, "来自 CODEOWNERS。"));
  maintainers.append(el("p", null, names(people.maintainers.map((person) => person.login), 8)));
  const committers = el("article", "panel");
  committers.append(el("h3", null, "本月提交者"));
  committers.append(el("p", null, people.committers.slice(0, 6).map((person) => `${person.login} ${person.merged}`).join("、") || "无"));
  foot.append(flow, maintainers, committers);
  wrap.append(foot);
  mainEl.replaceChildren(wrap);
}

function uniqueHistory(kind) {
  const map = new Map();
  for (const group of state.history?.groups || []) {
    for (const day of group.days || []) {
      for (const item of day.items || []) {
        if (kind && item.kind !== kind) continue;
        const key = `${item.kind}:${item.number}`;
        if (!map.has(key)) map.set(key, { ...item, modelNames: [], families: [] });
        const row = map.get(key);
        if (group.id !== "platform" && group.name && !row.modelNames.includes(group.name)) row.modelNames.push(group.name);
        const family = group.family || "";
        if (group.id !== "platform" && family && family !== "平台与通用" && !row.families.includes(family)) row.families.push(family);
      }
    }
  }
  return [...map.values()];
}

function briefItems(day) {
  const map = new Map();
  for (const group of state.history?.groups || []) {
    const bucket = (group.days || []).find((entry) => entry.day === day);
    if (!bucket) continue;
    for (const item of bucket.items || []) {
      const key = `${item.kind}:${item.number}`;
      if (!map.has(key)) map.set(key, { ...item, families: [] });
      const row = map.get(key);
      if (group.id !== "platform" && group.family && group.family !== "平台与通用" && !row.families.includes(group.family)) {
        row.families.push(group.family);
      }
    }
  }
  const rank = (item) => (item.kind === "pr" && (item.mergedAt || item.progressAction === "merged") ? 0 : 1);
  return [...map.values()].sort((a, b) => rank(a) - rank(b) || b.number - a.number);
}

function briefLabel(item) {
  if (item.kind === "pr" && (item.mergedAt || item.progressAction === "merged")) return ["已合并", "badge merged"];
  if (item.progressAction === "closed") return ["已关闭", "badge open"];
  if (item.progressAction === "draft") return ["草稿", "badge open"];
  if (item.kind === "issue") return ["Issue", "badge open"];
  return ["讨论中", "badge open"];
}

function displayDate(day) {
  const [, month, date] = String(day).split("-");
  return `${Number(month)}月${Number(date)}日`;
}

function shanghaiDate(iso) {
  const time = Date.parse(iso || "");
  if (Number.isNaN(time)) return String(iso || "").slice(0, 10);
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(time);
}

function issueMatches(item, query) {
  if (!query) return true;
  const hay = `${item.number} ${item.title || ""} ${item.titleZh || ""} ${item.excerpt || ""} ${item.excerptZh || ""}`.toLowerCase();
  return hay.includes(query);
}

function renderBriefColumn(day) {
  const items = briefItems(day);
  const merged = items.filter((item) => item.kind === "pr" && (item.mergedAt || item.progressAction === "merged")).length;
  const article = el("article", "brief-day");
  const head = el("header", "brief-day-head");
  head.append(el("h3", null, displayDate(day)));
  head.append(el("small", null, `合入 ${merged} · 共 ${items.length} 条`));
  article.append(head);
  const body = el("div", "brief-body");
  if (!items.length) body.append(el("p", "empty", "这一天没有记录到进展。"));
  for (const item of items) {
    const row = el("div", "brief-item");
    const [label, badge] = briefLabel(item);
    row.append(el("span", badge, label));
    row.append(titlePair(item));
    if (item.families.length) row.append(el("small", null, item.families.slice(0, 3).join(" · ")));
    body.append(row);
  }
  article.append(body);
  return article;
}

function modelRecords(model) {
  const month = state.community?.month || "";
  const group = (state.history?.groups || []).find((entry) => entry.id === model.id);
  const merged = [];
  const open = [];
  const seen = new Set();
  for (const day of group?.days || []) {
    for (const item of day.items) {
      if (item.kind !== "pr" || seen.has(item.number)) continue;
      const landed = Boolean(item.mergedAt || item.progressAction === "merged");
      if (landed && month && day.day < month) continue;
      seen.add(item.number);
      if (landed) merged.push(item);
      else if (item.progressAction === "open" || item.progressAction === "draft" || item.state === "open") open.push(item);
    }
  }
  const buckets = new Map(PR_CATEGORIES.map(([id]) => [id, []]));
  for (const item of merged) buckets.get(prCategory(item)).push(item);
  return { merged, open, buckets };
}

function renderModelDetail(model) {
  const { merged, open, buckets } = modelRecords(model);
  const wrap = document.createDocumentFragment();
  const head = el("div", "detail-head");
  const title = el("div");
  title.append(el("p", "kicker", model.family));
  title.append(el("h2", null, model.name));
  title.append(el("p", "kicker", `本月合入 ${merged.length} 条，仍在讨论 ${open.length} 条`));
  const back = el("button", "back", "返回全部模型");
  back.type = "button";
  back.addEventListener("click", () => {
    activeModel = "";
    render();
  });
  head.append(title, back);
  wrap.append(head);

  const grid = el("div", "cat-grid");
  for (const [id, name] of PR_CATEGORIES) {
    const list = buckets.get(id);
    const section = el("section");
    section.append(el("h3", null, `${name} · ${list.length}`));
    if (!list.length) section.append(el("p", "empty", "本月没有这一类合入。"));
    for (const item of list.slice(0, 12)) {
      section.append(titlePair(item, "#", "pr-line"));
    }
    if (list.length > 12) section.append(el("p", "empty", `还有 ${list.length - 12} 条`));
    grid.append(section);
  }
  wrap.append(grid);

  const talk = el("section", "talk");
  talk.append(el("h3", null, `仍在讨论 · ${open.length}`));
  if (!open.length) talk.append(el("p", "empty", "没有还开着的 PR。"));
  for (const item of open.slice(0, 10)) {
    talk.append(titlePair(item, "#", "pr-line"));
  }
  wrap.append(talk);
  mainEl.replaceChildren(wrap);
}

function renderModelBoard() {
  if (activeModel) {
    const model = (state.models || []).find((entry) => entry.id === activeModel);
    if (model) {
      renderModelDetail(model);
      return;
    }
    activeModel = "";
  }

  const query = modelQuery.trim().toLowerCase();
  const models = (state.models || []).filter((model) => model.id !== "platform" && (!query || `${model.name} ${model.family}`.toLowerCase().includes(query)));
  const today = state.community?.today || state.today?.day || "";
  const stage = el("div", "model-stage");

  const left = el("aside", "family-pane");
  const familyHead = el("header", "pane-head");
  familyHead.append(el("h2", null, "模型家族"));
  const input = el("input");
  input.type = "search";
  input.placeholder = "搜索模型";
  input.value = modelQuery;
  input.addEventListener("input", () => {
    modelQuery = input.value;
    render();
    const next = mainEl.querySelector(".family-pane input");
    if (next) {
      next.focus();
      const end = next.value.length;
      next.setSelectionRange(end, end);
    }
  });
  familyHead.append(input);
  left.append(familyHead);

  const familyScroll = el("div", "family-scroll");
  const families = [];
  for (const model of models) {
    let family = families.find((entry) => entry.name === model.family);
    if (!family) {
      family = { name: model.family, models: [] };
      families.push(family);
    }
    family.models.push(model);
  }
  if (!families.length) familyScroll.append(el("p", "empty", "没有匹配的模型。"));
  for (const family of families) {
    const block = el("section", "family-block");
    const title = el("h3", "family-name");
    title.append(el("span", null, family.name), el("b", null, String(family.models.length)));
    block.append(title);
    const tiles = el("div", "tiles");
    for (const model of family.models) {
      const { merged } = modelRecords(model);
      const tile = el("button", `tile${merged.length ? "" : " quiet"}`);
      tile.type = "button";
      tile.append(el("strong", null, model.name));
      const count = el("div");
      count.append(el("b", null, String(merged.length)));
      count.append(el("small", null, "本月合入"));
      tile.append(count);
      tile.addEventListener("click", () => {
        activeModel = model.id;
        render();
      });
      tiles.append(tile);
    }
    block.append(tiles);
    familyScroll.append(block);
  }
  left.append(familyScroll);

  const right = el("section", "brief-pane");
  const briefHead = el("header", "pane-head");
  briefHead.append(el("h2", null, "早报"));
  briefHead.append(el("p", null, "连续三天，按上海时间。"));
  right.append(briefHead);
  const grid = el("div", "brief-grid");
  if (today) {
    for (const day of [today, shiftDay(today, -1), shiftDay(today, -2)]) grid.append(renderBriefColumn(day));
  } else {
    grid.append(el("p", "empty", "同步一次后，这里会显示最近三天的早报。"));
  }
  right.append(grid);
  stage.append(left, right);

  const keptFamily = mainEl.querySelector(".family-scroll")?.scrollTop || 0;
  const keptBriefs = [...mainEl.querySelectorAll(".brief-body")].map((node) => node.scrollTop);
  mainEl.classList.add("pin-models");
  mainEl.replaceChildren(stage);
  const nextFamily = mainEl.querySelector(".family-scroll");
  if (nextFamily) nextFamily.scrollTop = keptFamily;
  [...mainEl.querySelectorAll(".brief-body")].forEach((node, index) => {
    node.scrollTop = keptBriefs[index] || 0;
  });
}

function issueEntry(item) {
  const block = el("article", "issue-entry");
  block.append(titlePair(item));
  if (item.author) block.append(el("p", "muted", item.author));
  return block;
}

function monthIssues(categoryId) {
  const month = state.community?.month || "";
  return uniqueHistory("issue")
    .filter((item) => classify(item) === categoryId)
    .filter((item) => !month || shanghaiDate(item.createdAt).slice(0, 7) === month.slice(0, 7))
    .sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
}

function renderIssues() {
  const community = state.community;
  const wrap = document.createDocumentFragment();
  const hero = el("div", "page-head issue-hero");
  const copy = el("div");
  copy.append(el("h2", null, "Issue 总览"));
  copy.append(el("p", null, "六个类别同屏。每格标题固定，条目在格子里滚动。"));
  const search = el("input", "issue-search");
  search.type = "search";
  search.placeholder = "搜索类似问题";
  search.value = issueQuery;
  search.addEventListener("input", () => {
    issueQuery = search.value;
    render();
    const next = mainEl.querySelector(".issue-search");
    if (next) {
      next.focus();
      const end = next.value.length;
      next.setSelectionRange(end, end);
    }
  });
  hero.append(copy, search);
  wrap.append(hero);
  if (!community) {
    wrap.append(el("p", "empty", "同步一次后，这里会按类别列出 Issue。"));
    mainEl.replaceChildren(wrap);
    return;
  }

  const categories = ISSUE_BOARD_ORDER
    .map((id) => community.issues.categories.find((category) => category.id === id))
    .filter(Boolean);
  const summary = el("section", "issue-summary");
  const line = el("div", "issue-line");
  for (const category of categories) {
    const card = el("article");
    const count = el("div", "count");
    count.append(el("b", null, String(category.month)));
    count.append(el("small", null, "本月"));
    card.append(el("strong", null, ISSUE_LABELS[category.id] || category.id), count);
    line.append(card);
  }
  summary.append(line);
  wrap.append(summary);

  const query = issueQuery.trim().toLowerCase();
  const board = el("section", "issue-board");
  for (const category of categories) {
    const section = el("section");
    section.id = `issue-${category.id}`;
    const heading = el("header", "issue-card-head");
    const title = el("h3");
    title.append(el("strong", null, ISSUE_LABELS[category.id] || category.id));
    title.append(el("span", null, `本月 ${category.month} · 开放 ${category.open}`));
    heading.append(title);
    section.append(heading);
    const body = el("div", "issue-card-body");
    const pool = query
      ? uniqueHistory("issue").filter((item) => classify(item) === category.id && issueMatches(item, query)).sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")))
      : monthIssues(category.id);
    if (!pool.length) body.append(el("p", "empty", query ? "没有类似问题。" : "本月还没有这一类。"));
    for (const item of pool) body.append(issueEntry(item));
    section.append(body);
    board.append(section);
  }
  wrap.append(board);

  const kept = [...mainEl.querySelectorAll(".issue-card-body")].map((node) => node.scrollTop);
  mainEl.classList.add("pin-issues");
  mainEl.replaceChildren(wrap);
  [...mainEl.querySelectorAll(".issue-card-body")].forEach((node, index) => {
    node.scrollTop = kept[index] || 0;
  });
}

function appendFeatureName(parent, feature, titleTag) {
  parent.append(el(titleTag, null, feature.english || feature.title));
  if (feature.title && feature.title !== feature.english) parent.append(el("small", null, feature.title));
}

function allFeatures() {
  return (window.FEATURE_CATALOG || []).flatMap((group) => group.items || []);
}

function featureItems(feature) {
  const textOf = (item) => `${item.title || ""} ${item.titleZh || ""}`;
  return uniqueHistory()
    .filter((item) => feature.pattern.test(textOf(item)))
    .sort((a, b) => (b.day || "").localeCompare(a.day || ""));
}

function featureFamilyChoices(items) {
  const present = new Set(items.flatMap((item) => item.families || []));
  const ordered = FEATURE_FAMILIES.filter((name) => present.has(name));
  for (const name of present) if (!ordered.includes(name)) ordered.push(name);
  return ordered;
}

function selectedFeatureFamily(featureId) {
  return featureFamily.get(featureId) || "";
}

function featureFilterBar(feature, matched) {
  const selected = selectedFeatureFamily(feature.id);
  const bar = el("div", "feature-filters");
  const choices = [["", "全部", matched.length]];
  for (const name of featureFamilyChoices(matched)) {
    choices.push([name, name, matched.filter((item) => item.families?.includes(name)).length]);
  }
  for (const [id, label, count] of choices) {
    const button = el("button", id === selected ? "active" : "");
    button.type = "button";
    button.append(el("span", "filter-name", label));
    if (count) button.append(el("span", "filter-count", String(count)));
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (id) featureFamily.set(feature.id, id);
      else featureFamily.delete(feature.id);
      render();
    });
    bar.append(button);
  }
  return bar;
}

function featureEntry(item) {
  const block = el("article", "issue-entry");
  const kind = item.kind === "pr" ? "PR #" : "Issue #";
  block.append(titlePair(item, kind));
  if (item.day) block.append(el("p", "muted", item.day));
  return block;
}

function renderFeatureDetail(feature) {
  const wrap = document.createDocumentFragment();
  const head = el("div", "detail-head");
  const copy = el("div");
  appendFeatureName(copy, feature, "h2");
  const actions = el("div", "detail-actions");
  const back = el("button", "back", "返回全部特性");
  back.type = "button";
  back.addEventListener("click", () => {
    activeFeature = "";
    render();
    mainEl.scrollTop = 0;
  });
  actions.append(back, externalLink(feature.doc, "官方说明"));
  head.append(copy, actions);
  wrap.append(head);
  const today = state.today?.day || "";
  const picked = selectedFeatureFamily(feature.id);
  const matched = featureItems(feature).filter((item) => !picked || item.families?.includes(picked));
  wrap.append(featureFilterBar(feature, featureItems(feature)));
  const start = today ? shiftDay(today, -13) : "";
  const recent = matched.filter((item) => !start || (item.day && item.day >= start && item.day <= today));
  const byDay = new Map();
  for (const item of recent) {
    if (!byDay.has(item.day)) byDay.set(item.day, []);
    byDay.get(item.day).push(item);
  }
  if (!byDay.size) wrap.append(el("p", "empty", "近 14 天没有匹配到相关 PR 或 Issue。"));
  for (const [day, items] of byDay) {
    const section = el("section", "feature-day");
    section.append(el("h3", null, day === today ? `${day} · 今天` : day));
    for (const item of items.slice(0, 8)) section.append(featureEntry(item));
    if (items.length > 8) section.append(el("p", "muted", `还有 ${items.length - 8} 条`));
    wrap.append(section);
  }
  mainEl.replaceChildren(wrap);
}

function renderPrinciple(feature) {
  const entry = (window.FEATURE_PRINCIPLES || {})[feature.id] || {
    scene: "flow",
    paragraphs: [feature.principle],
    nodes: [[feature.english || feature.title, ""], ["vLLM-Ascend", "按官方实现"], ["昇腾", "NPU 上执行"]],
  };
  const wrap = document.createDocumentFragment();
  const head = el("div", "detail-head");
  const copy = el("div");
  copy.append(el("p", "kicker", "原理解读"));
  appendFeatureName(copy, feature, "h2");
  const back = el("button", "back", "返回特性介绍");
  back.type = "button";
  back.addEventListener("click", () => {
    activePrinciple = "";
    render();
    mainEl.scrollTop = 0;
  });
  head.append(copy, back);
  wrap.append(head);

  const layout = el("div", "principle-layout");
  const diagram = el("section", "principle-box");
  diagram.append(el("h3", null, "原理图"));
  const stage = el("div", "principle-stage");
  if (window.mountPrincipleScene) window.mountPrincipleScene(stage, entry);
  diagram.append(stage);
  layout.append(diagram);

  const text = el("div", "principle-copy");
  if (entry.paragraphs?.length) {
    const box = el("section", "principle-box");
    box.append(el("h3", null, "原理"));
    for (const paragraph of entry.paragraphs) box.append(richNode("p", null, paragraph));
    text.append(box);
  }
  if (entry.points?.length) {
    const box = el("section", "principle-box tone-key");
    box.append(el("h3", null, "要点"));
    const list = el("ul", "principle-points");
    for (const point of entry.points) list.append(richNode("li", null, point));
    box.append(list);
    text.append(box);
  }
  if (entry.support?.rows?.length) {
    const box = el("section", "principle-box");
    box.append(el("h3", null, "支持范围"));
    if (entry.support.note) box.append(richNode("p", "muted", entry.support.note));
    const table = el("table", "support-table");
    const headRow = el("tr");
    for (const column of entry.support.columns || []) headRow.append(el("th", null, column));
    table.append(headRow);
    for (const cells of entry.support.rows) {
      const row = el("tr");
      for (const cell of cells) row.append(el("td", supportCellClass(cell), cell));
      table.append(row);
    }
    box.append(table);
    text.append(box);
  }
  if (entry.example?.length) {
    const box = el("section", "principle-box");
    box.append(el("h3", null, entry.exampleTitle || "对照"));
    const table = el("table");
    for (const [label, value] of entry.example) {
      const row = el("tr");
      row.append(el("th", null, label), richNode("td", null, value));
      table.append(row);
    }
    box.append(table);
    text.append(box);
  }
  if (entry.applies) {
    const box = el("section", "principle-box tone-key");
    box.append(el("h3", null, "适用范围"));
    box.append(richNode("p", null, entry.applies));
    text.append(box);
  }
  if (entry.code) {
    const box = el("section", "principle-box");
    box.append(el("h3", null, "怎么启用"));
    const pre = el("pre", "principle-code");
    pre.textContent = entry.code;
    box.append(pre);
    text.append(box);
  }
  if (entry.notes?.length) {
    const box = el("section", "principle-box tone-warn");
    box.append(el("h3", null, "注意"));
    for (const note of entry.notes) {
      const line = el("div", `principle-note ${note.level || ""}`);
      line.append(richNode("p", null, note.text));
      for (const ref of note.refs || []) line.append(externalLink(ref.url, `${ref.kind} #${ref.n}`, "ref-chip"));
      box.append(line);
    }
    text.append(box);
  }
  const sources = el("section", "principle-box");
  sources.append(el("h3", null, "依据"));
  const links = el("div", "principle-sources");
  links.append(externalLink(feature.doc, "官方特性说明"));
  for (const [label, href] of entry.sources || []) links.append(externalLink(href, label));
  sources.append(links);
  text.append(sources);
  layout.append(text);
  wrap.append(layout);
  mainEl.replaceChildren(wrap);
}

function renderFeatures() {
  if (activePrinciple) {
    const explained = allFeatures().find((item) => item.id === activePrinciple);
    if (explained) {
      renderPrinciple(explained);
      return;
    }
    activePrinciple = "";
  }
  const current = allFeatures().find((item) => item.id === activeFeature);
  if (current) {
    mainEl.classList.remove("pin-overview");
    renderFeatureDetail(current);
    return;
  }
  const wrap = document.createDocumentFragment();
  const hero = el("div", "page-head");
  hero.append(el("h2", null, "特性介绍"));
  hero.append(el("p", null, "左边是特性总览，右边是每条特性的最近动态。方块上的图标可以打开原理解读。"));
  wrap.append(hero);
  const glossary = el("details", "glossary");
  glossary.append(el("summary", null, "名词说明"));
  const terms = el("dl", "glossary-grid");
  for (const [term, meaning] of [
    ["Prefill", "把整段提示一次算完、写出 KV、得到第一个输出 token 之前的阶段。"],
    ["Decode", "已经产出第一个 token 之后，一次再生成一个新 token 的阶段。"],
    ["release note", "某个版本发布时附带的说明，记录新能力和已知限制。"],
    ["NPU", "昇腾上实际算模型的芯片。一台 Atlas 800 A2 有 8 张 NPU。"],
    ["rank", "并行进程的编号。它不一定等于 NPU 编号。TP 大于 1 时，一个 rank 可以占多张 NPU。"],
    ["TP", "张量并行。同一层的权重沿隐藏维切开，多张 NPU 一起算这一层。"],
    ["PP", "流水线并行。前半层和后半层放在不同的 rank 上，中间只传递激活值。"],
    ["PCP", "Prefill 上下文并行。长提示按 token 分到额外 rank 上，各自只算自己那一段。"],
    ["DCP", "Decode 上下文并行。历史 KV 按序列分片存放。新 token 仍然是一个，不会再被切成几段提示。"],
    ["EP", "专家并行。MoE 的路由专家分到不同 NPU，token 按路由送到对应专家。"],
  ]) {
    terms.append(el("dt", null, term), el("dd", null, meaning));
  }
  glossary.append(terms);
  wrap.append(glossary);
  const rows = allFeatures().map((feature) => ({ feature, matched: featureItems(feature) }));
  const index = el("section", "feature-index");
  const indexHead = el("div", "feature-index-head");
  indexHead.append(el("h3", null, "总览"));
  indexHead.append(el("p", null, `${rows.length} 个特性，${rows.filter((row) => row.matched.length).length} 个最近有动态`));
  const links = el("div", "feature-index-grid");
  const ranked = [...rows].sort((a, b) => b.matched.length - a.matched.length);
  for (const { feature, matched } of ranked) {
    const button = el("div", `feature-jump${matched.length ? "" : " quiet"}`);
    button.tabIndex = 0;
    button.setAttribute("role", "button");
    const open = el("button", "principle-open");
    open.type = "button";
    open.setAttribute("aria-label", `原理解读：${feature.english || feature.title}`);
    open.append(icon("diagram"));
    open.addEventListener("click", (event) => {
      event.stopPropagation();
      activePrinciple = feature.id;
      render();
      mainEl.scrollTop = 0;
    });
    const names = el("span", "feature-name");
    appendFeatureName(names, feature, "strong");
    button.append(open, names, el("b", null, matched.length ? `${matched.length} 条` : "暂无"));
    button.addEventListener("click", () => {
      const target = document.getElementById(`feature-${feature.id}`);
      if (!target) return;
      for (const card of board.querySelectorAll(".feature-card.active")) card.classList.remove("active");
      target.classList.add("active");
      target.scrollIntoView({ block: "start" });
    });
    links.append(button);
  }
  index.append(indexHead, links);
  const stage = el("div", "feature-stage");
  const board = el("section", "feature-board");
  stage.append(index, board);
  for (const { feature, matched } of rows) {
    const card = el("article", "feature-card");
    card.id = `feature-${feature.id}`;
    const head = el("div", "feature-head");
    const titles = el("div");
    appendFeatureName(titles, feature, "h3");
    head.append(titles, externalLink(feature.doc, "文档"));
    card.append(head);
    card.append(featureFilterBar(feature, matched));
    const picked = selectedFeatureFamily(feature.id);
    const visible = picked ? matched.filter((item) => item.families?.includes(picked)) : matched;
    const daily = el("div", "feature-daily");
    daily.append(el("strong", null, picked ? `${picked} 的最近动态` : "最近动态"));
    if (!visible.length) daily.append(el("p", "empty", picked ? "这个类别还没有相关动态。" : "还没有相关动态。"));
    for (const item of visible) daily.append(featureEntry(item));
    card.append(daily);
    card.addEventListener("click", (event) => {
      if (event.target.closest("a, button")) return;
      activeFeature = feature.id;
      render();
      mainEl.scrollTop = 0;
    });
    board.append(card);
  }
  wrap.append(stage);
  const keptIndex = mainEl.querySelector(".feature-index")?.scrollTop || 0;
  const kept = mainEl.querySelector(".feature-board")?.scrollTop || 0;
  mainEl.classList.add("pin-overview");
  mainEl.replaceChildren(wrap);
  const nextIndex = mainEl.querySelector(".feature-index");
  const nextBoard = mainEl.querySelector(".feature-board");
  if (nextIndex) nextIndex.scrollTop = keptIndex;
  if (nextBoard && kept) nextBoard.scrollTop = kept;
}

mainEl.addEventListener("wheel", (event) => {
  if (mainEl.classList.contains("pin-issues")) {
    const card = event.target.closest(".issue-board section");
    const scroller = card?.querySelector(":scope > .issue-card-body");
    if (!scroller || scroller.contains(event.target)) return;
    scroller.scrollTop += event.deltaY;
    event.preventDefault();
    return;
  }
  if (mainEl.classList.contains("pin-models")) {
    const pane = event.target.closest(".family-pane, .brief-day");
    const scroller = pane?.querySelector(":scope > .family-scroll, :scope > .brief-body");
    if (!scroller || scroller.contains(event.target)) return;
    scroller.scrollTop += event.deltaY;
    event.preventDefault();
    return;
  }
  if (!mainEl.classList.contains("pin-overview")) return;
  const board = mainEl.querySelector(".feature-board");
  if (!board || board.contains(event.target)) return;
  const index = mainEl.querySelector(".feature-index");
  if (index?.contains(event.target) && index.scrollHeight > index.clientHeight + 1) return;
  const glossary = mainEl.querySelector(".glossary");
  if (glossary?.open && glossary.contains(event.target) && glossary.scrollHeight > glossary.clientHeight + 1) return;
  board.scrollTop += event.deltaY;
  event.preventDefault();
}, { passive: false });

function render() {
  if (!state?.generatedAt) {
    mainEl.classList.remove("pin-overview", "pin-models", "pin-issues");
    statusEl.textContent = state?.pending ? "正在从 GitHub 和文档站同步…" : "等待第一次同步";
    mainEl.replaceChildren(el("p", "empty", "第一次同步会拉取版本说明、PR 和 Issue，通常需要十几秒。"));
    modulesEl.replaceChildren();
    return;
  }
  const when = timeFormat.format(new Date(state.generatedAt));
  const age = Date.now() - Date.parse(state.generatedAt);
  liveEl.classList.toggle("stale", age > 20 * 60 * 1000);
  statusEl.textContent = `同步于今天 ${when}（上海）${state.pending ? " · 正在更新" : " · 每 10 分钟自动更新"}`;
  warningsEl.hidden = !state.warnings?.length;
  warningsEl.textContent = (state.warnings || []).join("；");
  renderModules();
  mainEl.classList.remove("pin-overview", "pin-models", "pin-issues");
  if (selected === "models") renderModelBoard();
  else if (selected === "issues") renderIssues();
  else if (selected === "features") renderFeatures();
  else renderCommunity();
}

function select(id) {
  selected = id;
  history.replaceState(null, "", `#${id}`);
  render();
}

async function load() {
  const response = await fetch("/api/state", { cache: "no-store" });
  state = await response.json();
  render();
}

async function requestRefresh() {
  refreshButton.disabled = true;
  statusEl.textContent = "正在同步…";
  await fetch("/api/refresh", { method: "POST" });
  const started = Date.now();
  while (Date.now() - started < 180000) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await load();
    if (!state.pending && state.generatedAt && Date.parse(state.generatedAt) >= started - 2000) break;
  }
  refreshButton.disabled = false;
}

refreshButton.addEventListener("click", () => {
  requestRefresh().catch((error) => {
    statusEl.textContent = `同步失败：${error.message}`;
    refreshButton.disabled = false;
  });
});

const hash = location.hash.replace("#", "");
if (MODULES.some(([id]) => id === hash)) selected = hash;

load().catch((error) => {
  statusEl.textContent = `无法连接本地监控：${error.message}`;
});
setInterval(() => load().catch(() => {}), 60000);

const events = new EventSource("/api/events");
events.onmessage = (event) => {
  const payload = JSON.parse(event.data);
  if (payload.type === "update") load().catch(() => {});
};
