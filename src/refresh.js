import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import {
  DATA_DIR,
  ISSUE_LIST_URL,
  PR_LIST_URL,
  RELEASE_MD_URL,
  STATE_PATH,
  USER_AGENT,
  ZH_DOC_URLS,
} from "./config.js";
import { groupToday, writeDaily, writeModelTree } from "./digest.js";
import { buildCommunity, loadMaintainers } from "./community.js";
import { fetchCommunity, scoreItem, shanghaiToday } from "./github.js";
import { groupHistory, mergeHistory, readHistory, shouldDeep, writeHistoryFiles } from "./history.js";
import { FAMILY_ORDER, MODELS, PLATFORM } from "./models.js";
import { buildModelTree, htmlToMarkdown, mergeReleaseNotes, parseReleaseMarkdown, platformNotes } from "./release.js";
import { translateItems } from "./translate.js";

let refreshing = null;

async function fetchText(url, accept, { attempts = 2, timeoutMs = 20000 } = {}) {
  let lastError = null;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent": USER_AGENT,
          Accept: accept,
        },
        signal: AbortSignal.timeout(timeoutMs),
      });
      if (!response.ok) {
        const error = new Error(`${response.status} ${response.statusText}`);
        error.status = response.status;
        throw error;
      }
      return await response.text();
    } catch (error) {
      lastError = error;
      if (error.status) break;
    }
  }
  throw lastError;
}

async function loadChineseVersions() {
  const versions = [];
  const errors = [];
  for (const url of ZH_DOC_URLS) {
    try {
      const html = await fetchText(url, "text/html");
      const parsed = parseReleaseMarkdown(htmlToMarkdown(html), "zh");
      if (parsed.length) versions.push(...parsed);
      else errors.push({ url, message: "页面里没有解析到版本标题" });
    } catch (error) {
      errors.push({ url, message: error.message });
    }
  }
  return { versions, errors };
}

function orderModels(models) {
  const familyRank = new Map(FAMILY_ORDER.map((family, index) => [family, index]));
  const modelRank = new Map(MODELS.map((model, index) => [model.id, index]));
  return [...models].sort((a, b) => {
    const familyDelta = (familyRank.get(a.family) ?? 50) - (familyRank.get(b.family) ?? 50);
    if (familyDelta) return familyDelta;
    return (modelRank.get(a.id) ?? 999) - (modelRank.get(b.id) ?? 999);
  });
}

export async function readState() {
  try {
    return JSON.parse(await fs.readFile(STATE_PATH, "utf8"));
  } catch {
    return null;
  }
}

async function writeState(state) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const temp = `${STATE_PATH}.tmp`;
  await fs.writeFile(temp, JSON.stringify(state), "utf8");
  await fs.rename(temp, STATE_PATH);
}

export function refreshInFlight() {
  return Boolean(refreshing);
}

export function refresh() {
  if (!refreshing) {
    refreshing = runRefresh().finally(() => {
      refreshing = null;
    });
  }
  return refreshing;
}

async function runRefresh() {
  const previous = await readState();
  const warnings = [];
  const [english, chinese] = await Promise.all([
    fetchText(RELEASE_MD_URL, "*/*", { attempts: 1, timeoutMs: 15000 })
      .then(async (englishMarkdown) => {
        await fs.mkdir(DATA_DIR, { recursive: true });
        await fs.writeFile(path.join(DATA_DIR, "release_notes.md"), englishMarkdown, "utf8");
        return parseReleaseMarkdown(englishMarkdown, "en");
      })
      .catch(() => []),
    loadChineseVersions(),
  ]);

  const versions = chinese.versions.length ? mergeReleaseNotes(english, chinese.versions) : [];
  const previousAge = previous?.generatedAt ? Date.now() - Date.parse(previous.generatedAt) : Number.POSITIVE_INFINITY;
  if (!versions.length && !previous?.models) warnings.push("版本说明暂时拉不下来，也没有可用的本地快照");
  if (!versions.length && previous?.models && previousAge > 12 * 60 * 60 * 1000) {
    warnings.push("文档站暂时限流，版本树仍是上次成功的同步。");
  }

  let community = null;
  const storedHistory = await readHistory();
  const deep = shouldDeep(storedHistory);
  try {
    community = await fetchCommunity({ deep });
  } catch (error) {
    warnings.push(`GitHub 拉取失败：${error.message}`);
  }

  const recent = (community?.items || previous?.items || []).map((item) => ({
    ...item,
    score: item.score ?? scoreItem(item),
  }));
  for (const item of recent) item.score = scoreItem(item);
  const incomingHistory = (community?.historyItems || []).map((item) => ({ ...item, score: scoreItem(item) }));
  const historyItems = mergeHistory(storedHistory.items, [...recent, ...incomingHistory]);
  await translateItems(historyItems);
  const translated = new Map(historyItems.map((item) => [`${item.kind}:${item.number}`, item]));
  for (const item of recent) {
    const hit = translated.get(`${item.kind}:${item.number}`);
    if (!hit) continue;
    item.titleZh = hit.titleZh;
    item.excerptZh = hit.excerptZh;
  }
  await translateItems(recent.filter((item) => !item.titleZh));
  const historyGroups = groupHistory(historyItems);

  const builtModels = versions.length
    ? [...orderModels(buildModelTree(versions)), platformNotes(versions)]
    : previous?.models || [];
  const todayGroups = groupToday(recent);
  const versionIndex = versions.length
    ? versions.map((version) => ({
        version: version.version,
        date: version.date,
        lang: version.lang,
      }))
    : previous?.versions || [];
  const knownModels = new Set(builtModels.map((model) => model.id));
  for (const group of [...todayGroups, ...historyGroups]) {
    if (knownModels.has(group.id)) continue;
    builtModels.push({
      id: group.id,
      name: group.name,
      family: group.family,
      versions: [],
    });
    knownModels.add(group.id);
  }
  const models = orderModels(builtModels);
  const maintainers = await loadMaintainers(previous?.community?.people?.maintainers || []);
  const communitySummary = buildCommunity(historyItems, {
    today: community?.day || shanghaiToday().day,
    maintainers,
  });

  const todayKeys = new Set();
  for (const group of todayGroups) {
    for (const item of group.items) todayKeys.add(`${item.kind}:${item.number}`);
  }
  const state = {
    generatedAt: new Date().toISOString(),
    warnings,
    sources: {
      releaseMarkdown: RELEASE_MD_URL,
      chineseDocs: ZH_DOC_URLS,
      pulls: PR_LIST_URL,
      issues: ISSUE_LIST_URL,
    },
    versions: versionIndex,
    models,
    items: recent,
    today: {
      day: community?.day || shanghaiToday().day,
      timezone: "Asia/Shanghai",
      groups: todayGroups,
    },
    history: {
      since: community?.since || storedHistory.since || "",
      count: historyItems.length,
      groups: historyGroups,
    },
    stats: {
      versionCount: versionIndex.length,
      modelCount: models.filter((model) => model.id !== PLATFORM.id && (model.versions.length || todayGroups.some((group) => group.id === model.id) || historyGroups.some((group) => group.id === model.id))).length,
      chineseVersionCount: versionIndex.filter((version) => version.lang === "zh").length,
      openIssuesIncludingPrs: community?.openIssuesIncludingPrs ?? previous?.stats?.openIssuesIncludingPrs ?? null,
      todayCount: todayKeys.size,
      historyCount: historyItems.length,
      rateRemaining: community?.rateRemaining ?? previous?.stats?.rateRemaining ?? null,
    },
    community: communitySummary,
  };

  await writeState(state);
  await writeModelTree(state);
  if (state.today.day) await writeDaily(state);
  await writeHistoryFiles({
    items: historyItems,
    groups: historyGroups,
    generatedAt: state.generatedAt,
    since: state.history.since,
    deepAt: deep && community ? new Date().toISOString() : storedHistory.deepAt,
  });
  return state;
}

const invokedDirectly = process.argv[1]
  && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url;
if (invokedDirectly) {
  refresh()
    .then((state) => {
      console.log(`已更新 ${state.today.day}，版本 ${state.stats.versionCount}，今日 ${state.stats.todayCount}，历史 ${state.stats.historyCount}`);
      if (state.warnings.length) console.log(state.warnings.join("\n"));
    })
    .catch((error) => {
      console.error(error);
      process.exitCode = 1;
    });
}
