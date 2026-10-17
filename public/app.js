const modulesEl = document.querySelector("#modules");
const mainEl = document.querySelector("#main");
const statusEl = document.querySelector("#status");
const warningsEl = document.querySelector("#warnings");
const liveEl = document.querySelector("#live");
const refreshButton = document.querySelector("#refresh");

const MODULES = [
  ["models", "模型总览", "按家族查看合入", "layers"],
  ["community", "社区状态", "合入、Issue 与人员", "activity"],
  ["issues", "Issue 总览", "按类别统计和浏览", "issue"],
  ["features", "特性介绍", "最近的 PR 与 Issue", "feature"],
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
};

let state = null;
let selected = "models";
let issueFilter = "all";
let modelQuery = "";
let activeModel = "";
let activeFeature = "";
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

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
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

function sentence(item) {
  return (item.titleZh || item.title || "").trim();
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
    copy.append(el("strong", null, label), el("small", null, hint));
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
    card.addEventListener("click", () => {
      issueFilter = category.id;
      select("issues");
    });
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

function renderBrief() {
  const today = state.today?.day;
  const yesterday = today ? shiftDay(today, -1) : "";
  const items = uniqueHistory();
  const merged = items.filter((item) => item.kind === "pr" && (item.progressAction === "merged" || item.mergedAt) && [today, yesterday].includes(item.day)).slice(0, 4);
  const fresh = items.filter((item) => item.day === today && item.progressAction !== "merged" && !item.mergedAt).slice(0, 3);
  const band = el("section", "brief");
  const copy = el("div");
  copy.append(el("h2", null, `${today || ""} 早报`));
  copy.append(el("p", "lead", `昨天到今天记录了 ${merged.length} 条已合并改动，${fresh.length} 条仍在讨论。下面按模型看本月合入。`));
  band.append(copy);
  const list = el("div", "brief-list");
  for (const item of [...merged, ...fresh]) {
    const row = el("p");
    row.append(el("span", item.mergedAt || item.progressAction === "merged" ? "badge merged" : "badge open", item.mergedAt || item.progressAction === "merged" ? "已合并" : "讨论中"));
    row.append(externalLink(item.url, `#${item.number} ${sentence(item)}`));
    list.append(row);
  }
  if (!merged.length && !fresh.length) list.append(el("p", "empty", "这两天没有新的模型进展。"));
  band.append(list);
  return band;
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
      section.append(externalLink(item.url, `#${item.number} ${sentence(item)}`, "pr-line"));
    }
    if (list.length > 12) section.append(el("p", "empty", `还有 ${list.length - 12} 条`));
    grid.append(section);
  }
  wrap.append(grid);

  const talk = el("section", "talk");
  talk.append(el("h3", null, `仍在讨论 · ${open.length}`));
  if (!open.length) talk.append(el("p", "empty", "没有还开着的 PR。"));
  for (const item of open.slice(0, 10)) {
    talk.append(externalLink(item.url, `#${item.number} ${sentence(item)}`, "pr-line"));
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
  const wrap = document.createDocumentFragment();
  wrap.append(renderBrief());

  const toolbar = el("div", "toolbar");
  const input = el("input");
  input.type = "search";
  input.placeholder = "筛选模型，例如 DeepSeek、Qwen、GLM";
  input.value = modelQuery;
  input.addEventListener("input", () => {
    modelQuery = input.value;
    render();
    const next = mainEl.querySelector("input");
    if (next) {
      next.focus();
      const end = next.value.length;
      next.setSelectionRange(end, end);
    }
  });
  toolbar.append(el("h3", null, "模型家族"), input);
  wrap.append(toolbar);

  const families = [];
  for (const model of models) {
    let family = families.find((entry) => entry.name === model.family);
    if (!family) {
      family = { name: model.family, models: [] };
      families.push(family);
    }
    family.models.push(model);
  }

  for (const family of families) {
    wrap.append(el("h3", "family-name", family.name));
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
    wrap.append(tiles);
  }
  mainEl.replaceChildren(wrap);
}

function issueEntry(item) {
  const block = el("article", "issue-entry");
  const zh = (item.titleZh || "").trim();
  const en = (item.title || "").trim();
  block.append(externalLink(item.url, `#${item.number} ${zh || en}`));
  if (zh && en && zh !== en) block.append(el("p", "original", en));
  if (item.author) block.append(el("p", "muted", item.author));
  return block;
}

function renderIssues() {
  const community = state.community;
  const wrap = document.createDocumentFragment();
  const hero = el("div", "page-head");
  hero.append(el("h2", null, "Issue 总览"));
  hero.append(el("p", null, "类别保持 Bug、Feature、Perf、Docs、Question、Other。每条先显示中文，下面是英文原标题。"));
  wrap.append(hero);
  if (!community) {
    wrap.append(el("p", "empty", "同步一次后，这里会按类别列出 Issue。"));
    mainEl.replaceChildren(wrap);
    return;
  }

  const summary = el("section", "issue-line");
  for (const category of community.issues.categories) {
    const card = el("button", issueFilter === category.id ? "active" : "");
    card.type = "button";
    card.append(
      el("strong", null, ISSUE_LABELS[category.id] || category.id),
      el("b", null, String(category.month)),
      el("small", null, `本月 · 开放 ${category.open}`),
    );
    card.addEventListener("click", () => {
      issueFilter = issueFilter === category.id ? "all" : category.id;
      render();
      const target = document.getElementById(`issue-${category.id}`);
      if (target) target.scrollIntoView({ block: "nearest" });
    });
    summary.append(card);
  }
  wrap.append(summary);

  const board = el("section", "issue-board");
  for (const category of community.issues.categories) {
    if (issueFilter !== "all" && issueFilter !== category.id) continue;
    const section = el("section", issueFilter === category.id ? "active" : "");
    section.id = `issue-${category.id}`;
    const heading = el("h3");
    heading.append(el("strong", null, ISSUE_LABELS[category.id] || category.id));
    heading.append(el("span", null, String(category.month)));
    section.append(heading);
    const rows = category.recent || [];
    if (!rows.length) section.append(el("p", "empty", "这个类别还没有记录。"));
    for (const item of rows) section.append(issueEntry(item));
    if (category.month > rows.length) section.append(el("p", "muted", `本月还有 ${category.month - rows.length} 条`));
    board.append(section);
  }
  wrap.append(board);
  mainEl.replaceChildren(wrap);
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
  const zh = (item.titleZh || "").trim();
  const en = (item.title || "").trim();
  const kind = item.kind === "pr" ? "PR" : "Issue";
  block.append(externalLink(item.url, `${kind} #${item.number} ${zh || en}`));
  if (zh && en && zh !== en) block.append(el("p", "original", en));
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

function renderFeatures() {
  const current = allFeatures().find((item) => item.id === activeFeature);
  if (current) {
    mainEl.classList.remove("pin-overview");
    renderFeatureDetail(current);
    return;
  }
  const wrap = document.createDocumentFragment();
  const hero = el("div", "page-head");
  hero.append(el("h2", null, "特性介绍"));
  hero.append(el("p", null, "先从总览跳到某个特性。每块默认显示该特性的全部最近动态，也可以按模型类别查看。"));
  wrap.append(hero);
  const rows = allFeatures().map((feature) => ({ feature, matched: featureItems(feature) }));
  const index = el("section", "feature-index");
  const indexHead = el("div", "feature-index-head");
  indexHead.append(el("h3", null, "总览"));
  indexHead.append(el("p", null, `${rows.length} 个特性，${rows.filter((row) => row.matched.length).length} 个最近有动态`));
  const links = el("div", "feature-index-grid");
  const ranked = [...rows].sort((a, b) => b.matched.length - a.matched.length);
  for (const { feature, matched } of ranked) {
    const button = el("button", matched.length ? "" : "quiet");
    button.type = "button";
    const names = el("span", "feature-name");
    appendFeatureName(names, feature, "strong");
    button.append(names, el("b", null, matched.length ? `${matched.length} 条` : "暂无"));
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
  wrap.append(index);
  const board = el("section", "feature-board");
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
  wrap.append(board);
  const kept = mainEl.querySelector(".feature-board")?.scrollTop || 0;
  mainEl.classList.add("pin-overview");
  mainEl.replaceChildren(wrap);
  if (kept) mainEl.querySelector(".feature-board").scrollTop = kept;
}

mainEl.addEventListener("wheel", (event) => {
  if (!mainEl.classList.contains("pin-overview")) return;
  const board = mainEl.querySelector(".feature-board");
  if (!board || board.contains(event.target)) return;
  const index = mainEl.querySelector(".feature-index");
  if (index?.contains(event.target) && index.scrollHeight > index.clientHeight + 1) return;
  board.scrollTop += event.deltaY;
  event.preventDefault();
}, { passive: false });

function render() {
  if (!state?.generatedAt) {
    mainEl.classList.remove("pin-overview");
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
  mainEl.classList.remove("pin-overview");
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
