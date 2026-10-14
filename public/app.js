const treeEl = document.querySelector("#tree");
const mainEl = document.querySelector("#main");
const statusEl = document.querySelector("#status");
const warningsEl = document.querySelector("#warnings");
const liveEl = document.querySelector("#live");
const filterEl = document.querySelector("#filter");
const refreshButton = document.querySelector("#refresh");

const ACTION = {
  merged: "已合并",
  opened: "新开",
  closed: "已关闭",
  updated: "有更新",
  open: "进行中",
  draft: "草稿",
};

let state = null;
let selected = "today";
let filter = "";

const timeFormat = new Intl.DateTimeFormat("zh-CN", {
  timeZone: "Asia/Shanghai",
  month: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

function ago(iso) {
  if (!iso) return "";
  const minutes = Math.max(0, Math.round((Date.now() - Date.parse(iso)) / 60000));
  if (minutes < 1) return "刚刚";
  if (minutes < 60) return `${minutes} 分钟前`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} 小时前`;
  return `${Math.round(hours / 24)} 天前`;
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function linkify(text) {
  const fragment = document.createDocumentFragment();
  const pattern = /#(\d{3,6})/g;
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    fragment.append(text.slice(last, match.index));
    const link = el("a", null, `#${match[1]}`);
    link.href = `https://github.com/vllm-project/vllm-ascend/issues/${match[1]}`;
    link.target = "_blank";
    link.rel = "noreferrer";
    fragment.append(link);
    last = match.index + match[0].length;
  }
  fragment.append(text.slice(last));
  return fragment;
}

function modelById(id) {
  return (state?.models || []).find((model) => model.id === id) || null;
}

function todayCount(id) {
  const group = (state?.today?.groups || []).find((entry) => entry.id === id);
  return group?.items?.length || 0;
}

function renderTree() {
  treeEl.replaceChildren();
  const overview = el("button", `overview-button${selected === "today" ? " active" : ""}`);
  overview.type = "button";
  const todayTotal = (state?.today?.groups || []).reduce((sum, group) => sum + group.items.length, 0);
  overview.append(el("span", null, "今日进展"), el("small", null, String(todayTotal)));
  overview.addEventListener("click", () => select("today"));
  treeEl.append(overview);
  const historyButton = el("button", `overview-button${selected === "history" ? " active" : ""}`);
  historyButton.type = "button";
  historyButton.append(el("span", null, "历史进展"), el("small", null, String(state?.history?.count || 0)));
  historyButton.addEventListener("click", () => select("history"));
  treeEl.append(historyButton);

  const query = filter.trim().toLowerCase();
  const families = [];
  for (const model of state?.models || []) {
    if (query && !`${model.name} ${model.family}`.toLowerCase().includes(query)) continue;
    let family = families.find((entry) => entry.name === model.family);
    if (!family) {
      family = { name: model.family, models: [] };
      families.push(family);
    }
    family.models.push(model);
  }

  for (const family of families) {
    const details = el("details", "family");
    details.open = true;
    details.append(el("summary", null, family.name));
    for (const model of family.models) {
      const button = el("button", `model-button${selected === model.id ? " active" : ""}`);
      button.type = "button";
      const count = todayCount(model.id);
      button.append(el("span", null, model.name), el("small", null, count ? `今日 ${count}` : `${model.versions.length} 版`));
      button.addEventListener("click", () => select(model.id));
      details.append(button);
    }
    treeEl.append(details);
  }
}

function itemLabel(item) {
  if (item.progressAction && ACTION[item.progressAction]) return ACTION[item.progressAction];
  return ACTION[item.action] || item.action || "";
}

function renderItem(item) {
  const block = el("article", "item");
  const badges = el("div", "badges");
  const kind = item.kind === "pr" ? "PR" : "Issue";
  badges.append(el("span", `badge ${item.progressAction || item.action}`, `${kind} · ${itemLabel(item)}`));
  if (item.draft) badges.append(el("span", "badge", "草稿"));
  for (const label of item.labels.slice(0, 3)) badges.append(el("span", "badge", label));
  badges.append(el("span", "badge", ago(item.updatedAt)));
  block.append(badges);

  const title = el("a", null, item.titleZh || item.title);
  title.href = item.url;
  title.target = "_blank";
  title.rel = "noreferrer";
  const heading = el("strong");
  heading.append(`#${item.number} `, title);
  block.append(heading);
  if (item.titleZh && item.titleZh !== item.title) block.append(el("p", "original", item.title));
  if (item.excerptZh) block.append(el("p", null, item.excerptZh));
  else if (item.excerpt) block.append(el("p", "muted", item.excerpt));
  return block;
}

function renderVersion(version, open) {
  const details = el("details", "version");
  details.open = open;
  const summary = el("summary");
  summary.append(`${version.version} · ${version.date}`);
  summary.append(el("span", "lang", version.lang === "zh" ? "中文文档" : "仓库原文"));
  details.append(summary);
  for (const line of version.intro || []) details.append(el("p", null, line));
  version.sections.forEach((section, index) => {
    const sectionDetails = el("details", "section");
    sectionDetails.open = open && index < 2;
    sectionDetails.append(el("summary", null, `${section.titleZh} · ${section.items.length}`));
    const list = el("ul");
    for (const item of section.items) {
      const li = el("li");
      li.append(linkify(item.text));
      list.append(li);
    }
    sectionDetails.append(list);
    details.append(sectionDetails);
  });
  return details;
}

function renderSources() {
  const sources = el("footer", "sources");
  const release = state.sources?.releaseMarkdown;
  const docs = state.sources?.chineseDocs || [];
  sources.append("版本说明来自仓库 ");
  if (release) {
    const link = el("a", null, "release_notes.md");
    link.href = release;
    link.target = "_blank";
    sources.append(link);
  }
  sources.append("，中文优先采用文档页 ");
  docs.forEach((url, index) => {
    if (index) sources.append("、");
    const link = el("a", null, url.includes("v0.23.0") ? "v0.23.0 中文" : "latest 中文");
    link.href = url;
    link.target = "_blank";
    sources.append(link);
  });
  sources.append("。社区进展来自 ");
  const pulls = el("a", null, "Pull requests");
  pulls.href = state.sources?.pulls || "https://github.com/vllm-project/vllm-ascend/pulls";
  pulls.target = "_blank";
  const issues = el("a", null, "Issues");
  issues.href = state.sources?.issues || "https://github.com/vllm-project/vllm-ascend/issues";
  issues.target = "_blank";
  sources.append(pulls, " 与 ", issues, "。本地全文在 data/model-tree.md、data/progress-history.md 和 data/daily/。");
  return sources;
}

function renderHistoryDays(days) {
  const fragment = document.createDocumentFragment();
  if (!days.length) {
    fragment.append(el("p", "empty", "这个模型还没有写入历史进展。"));
    return fragment;
  }
  days.forEach((day, index) => {
    const details = el("details", "day");
    details.open = index === 0;
    details.append(el("summary", null, `${day.day} · ${day.items.length} 条`));
    for (const item of day.items) details.append(renderItem(item));
    fragment.append(details);
  });
  return fragment;
}

function renderHistory() {
  const wrap = document.createDocumentFragment();
  const hero = el("div", "hero");
  const titleBox = el("div");
  titleBox.append(el("h2", null, "历史进展"));
  titleBox.append(el("p", "muted", `${state.history?.since || ""} 起按日期由近到远。全文在 data/progress-history.md。`));
  hero.append(titleBox, stats());
  wrap.append(hero);

  const byDay = new Map();
  for (const group of state.history?.groups || []) {
    for (const day of group.days) {
      if (!byDay.has(day.day)) byDay.set(day.day, []);
      byDay.get(day.day).push({ name: group.name, id: group.id, items: day.items });
    }
  }
  const days = [...byDay.keys()].sort((a, b) => b.localeCompare(a));
  if (!days.length) wrap.append(el("p", "empty", "历史进展还在同步。"));
  days.forEach((day, index) => {
    const details = el("details", "day");
    details.open = index < 2;
    const models = byDay.get(day);
    const count = models.reduce((sum, model) => sum + model.items.length, 0);
    details.append(el("summary", null, `${day} · ${count} 条`));
    for (const model of models) {
      const heading = el("h3");
      const jump = el("a", null, model.name);
      jump.href = `#${model.id}`;
      jump.addEventListener("click", (event) => {
        event.preventDefault();
        select(model.id);
      });
      heading.append(jump);
      details.append(heading);
      for (const item of model.items.slice(0, 6)) details.append(renderItem(item));
    }
    wrap.append(details);
  });
  wrap.append(renderSources());
  mainEl.replaceChildren(wrap);
}

function renderToday() {
  const wrap = document.createDocumentFragment();
  const hero = el("div", "hero");
  const titleBox = el("div");
  titleBox.append(el("h2", null, `${state.today?.day || ""} 各模型进展`));
  titleBox.append(el("p", "muted", "按 Asia/Shanghai 自然日汇总。历史进展按事件日期由近到远，写在 data/progress-history.md。"));
  hero.append(titleBox, stats());
  wrap.append(hero);

  const groups = state.today?.groups || [];
  if (!groups.length) {
    wrap.append(el("p", "empty", "今天还没有归到模型上的 PR 或 Issue。下方仍保留最近版本索引。"));
  }
  for (const group of groups) {
    const section = el("section", "group");
    const heading = el("h3");
    const jump = el("a", null, group.name);
    jump.href = `#${group.id}`;
    jump.addEventListener("click", (event) => {
      event.preventDefault();
      select(group.id);
    });
    heading.append(jump);
    section.append(heading);
    for (const item of group.items) section.append(renderItem(item));
    wrap.append(section);
  }

  const recentVersions = el("section", "group");
  recentVersions.append(el("h3", null, "最近版本"));
  const list = el("ul");
  for (const version of (state.versions || []).slice(0, 8)) {
    const li = el("li");
    li.append(`${version.version} · ${version.date} · ${version.lang === "zh" ? "中文" : "英文原文"}`);
    list.append(li);
  }
  recentVersions.append(list);
  wrap.append(recentVersions, renderSources());
  mainEl.replaceChildren(wrap);
}

function stats() {
  const row = el("div", "stats");
  const cards = [
    [state.stats?.versionCount ?? "–", "个版本"],
    [state.stats?.modelCount ?? "–", "个模型"],
    [state.stats?.todayCount ?? "–", "条今日进展"],
    [state.stats?.historyCount ?? "–", "条历史进展"],
  ];
  for (const [value, label] of cards) {
    const card = el("div", "stat");
    card.append(el("b", null, String(value)), el("span", null, label));
    row.append(card);
  }
  return row;
}

function renderModel(model) {
  const wrap = document.createDocumentFragment();
  const hero = el("div", "hero");
  const titleBox = el("div");
  titleBox.append(el("h2", null, model.name));
  titleBox.append(el("p", "muted", `${model.family} · 版本由近到远 · ${model.versions.length} 个版本提到该模型`));
  hero.append(titleBox, stats());
  wrap.append(hero);

  const today = (state.today?.groups || []).find((group) => group.id === model.id);
  const todaySection = el("section", "group");
  todaySection.append(el("h3", null, "今日进展"));
  if (!today) todaySection.append(el("p", "empty", "今天没有归到这个模型的 PR 或 Issue。"));
  else for (const item of today.items) todaySection.append(renderItem(item));
  wrap.append(todaySection);

  const past = el("section", "group");
  past.append(el("h3", null, "历史进展"));
  const modelHistory = (state.history?.groups || []).find((group) => group.id === model.id);
  past.append(renderHistoryDays(modelHistory?.days || []));
  wrap.append(past);

  const history = el("section", "group");
  history.append(el("h3", null, "版本树"));
  if (!model.versions.length) history.append(el("p", "empty", "版本说明里还没有点名这个模型。"));
  model.versions.forEach((version, index) => history.append(renderVersion(version, index === 0)));
  wrap.append(history, renderSources());
  mainEl.replaceChildren(wrap);
}

function render() {
  if (!state?.generatedAt) {
    statusEl.textContent = state?.pending ? "正在从 GitHub 和文档站同步…" : "等待第一次同步";
    mainEl.replaceChildren(el("p", "empty", "第一次同步会拉取版本说明、PR 和 Issue，通常需要十几秒。"));
    treeEl.replaceChildren();
    return;
  }
  const when = timeFormat.format(new Date(state.generatedAt));
  const age = Date.now() - Date.parse(state.generatedAt);
  liveEl.classList.toggle("stale", age > 20 * 60 * 1000);
  statusEl.textContent = `同步于今天 ${when}（上海）${state.pending ? " · 正在更新" : " · 每 10 分钟自动更新"}`;
  warningsEl.hidden = !state.warnings?.length;
  warningsEl.textContent = (state.warnings || []).join("；");
  renderTree();
  if (selected === "today") renderToday();
  else if (selected === "history") renderHistory();
  else renderModel(modelById(selected) || { name: selected, family: "", versions: [] });
}

function select(id) {
  selected = id;
  history.replaceState(null, "", id === "today" ? "#today" : `#${id}`);
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

filterEl.addEventListener("input", () => {
  filter = filterEl.value;
  renderTree();
});
refreshButton.addEventListener("click", () => {
  requestRefresh().catch((error) => {
    statusEl.textContent = `同步失败：${error.message}`;
    refreshButton.disabled = false;
  });
});

const hash = location.hash.replace("#", "");
if (hash) selected = hash;

load().catch((error) => {
  statusEl.textContent = `无法连接本地监控：${error.message}`;
});
setInterval(() => load().catch(() => {}), 60000);

const events = new EventSource("/api/events");
events.onmessage = (event) => {
  const payload = JSON.parse(event.data);
  if (payload.type === "update") load().catch(() => {});
};
