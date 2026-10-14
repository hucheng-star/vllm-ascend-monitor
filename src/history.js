import fs from "node:fs/promises";
import path from "node:path";
import { HISTORY_MD_PATH, HISTORY_PATH } from "./config.js";
import { actionLabel, shanghaiDay } from "./github.js";
import { FAMILY_ORDER, PLATFORM, modelById } from "./models.js";

const KEEP_MS = 120 * 24 * 60 * 60 * 1000;

export function itemKey(item) {
  return `${item.kind}:${item.number}`;
}

export async function readHistory() {
  try {
    const saved = JSON.parse(await fs.readFile(HISTORY_PATH, "utf8"));
    return {
      deepAt: saved.deepAt || null,
      since: saved.since || "",
      items: Array.isArray(saved.items) ? saved.items : [],
    };
  } catch {
    return { deepAt: null, since: "", items: [] };
  }
}

export function shouldDeep(history) {
  if (!history?.deepAt) return true;
  return Date.now() - Date.parse(history.deepAt) > 12 * 60 * 60 * 1000;
}

function keep(item) {
  if (/dependabot/i.test(item.author || "")) return false;
  if (item.modelIds?.length) return true;
  if (/^\[(CI|Test|Doc|Docs|Chore|Misc)\]/i.test(item.title || "")) return false;
  return (item.score || 0) >= 5 || Boolean(item.mergedAt);
}

function progressAction(item) {
  if (item.mergedAt) return "merged";
  if (item.state === "closed" || item.closedAt) return "closed";
  if (item.draft) return "draft";
  return "open";
}

function eventTime(item) {
  return Date.parse(item.mergedAt || item.closedAt || item.createdAt || item.updatedAt || 0);
}

export function mergeHistory(existing, incoming) {
  const map = new Map(existing.map((item) => [itemKey(item), item]));
  for (const item of incoming) {
    if (!keep(item)) continue;
    const key = itemKey(item);
    const prev = map.get(key);
    map.set(key, {
      kind: item.kind,
      number: item.number,
      title: item.title,
      titleZh: item.title === prev?.title ? (item.titleZh || prev?.titleZh || "") : (item.titleZh || ""),
      excerpt: item.excerpt || "",
      excerptZh: item.excerpt === prev?.excerpt ? (item.excerptZh || prev?.excerptZh || "") : (item.excerptZh || ""),
      url: item.url,
      author: item.author,
      labels: item.labels || [],
      state: item.state,
      draft: Boolean(item.draft),
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      closedAt: item.closedAt,
      mergedAt: item.mergedAt || prev?.mergedAt || null,
      modelIds: item.modelIds?.length ? item.modelIds : (prev?.modelIds || []),
      score: item.score ?? prev?.score ?? 0,
    });
  }
  const cutoff = Date.now() - KEEP_MS;
  return [...map.values()]
    .filter((item) => eventTime(item) >= cutoff)
    .sort((a, b) => eventTime(b) - eventTime(a))
    .slice(0, 1500);
}

export function groupHistory(items) {
  const buckets = new Map();
  const ensure = (id) => {
    if (!buckets.has(id)) {
      const model = modelById(id);
      buckets.set(id, {
        id,
        name: model?.name || id,
        family: model?.family || "其他",
        days: [],
      });
    }
    return buckets.get(id);
  };

  for (const item of items) {
    const ids = item.modelIds?.length ? item.modelIds : ["platform"];
    const day = shanghaiDay(eventTime(item));
    const view = {
      ...item,
      progressAction: progressAction(item),
      day,
    };
    for (const id of ids) {
      const bucket = ensure(id);
      let group = bucket.days.find((entry) => entry.day === day);
      if (!group) {
        group = { day, items: [] };
        bucket.days.push(group);
      }
      if (group.items.length < 20) group.items.push(view);
    }
  }

  for (const bucket of buckets.values()) {
    bucket.days.sort((a, b) => b.day.localeCompare(a.day));
  }
  return [...buckets.values()];
}

function progressLabel(item) {
  if (item.progressAction === "draft") return "草稿";
  if (item.progressAction === "open") return "进行中";
  return actionLabel(item.progressAction);
}

export async function writeHistoryFiles({ items, groups, generatedAt, since, deepAt }) {
  await fs.mkdir(path.dirname(HISTORY_PATH), { recursive: true });
  const payload = { deepAt, since, generatedAt, items };
  const temp = `${HISTORY_PATH}.tmp`;
  await fs.writeFile(temp, JSON.stringify(payload), "utf8");
  await fs.rename(temp, HISTORY_PATH);

  const lines = [
    "# vLLM-Ascend 各模型历史进展",
    "",
    `更新时间：${generatedAt}`,
    "",
    `收录 ${since} 以来仍被提到的模型相关 PR 与 Issue，按事件日期由近到远。中文在前，原文在后。`,
    "",
  ];
  const byFamily = new Map();
  for (const group of groups) {
    const family = group.family || "其他";
    if (!byFamily.has(family)) byFamily.set(family, []);
    byFamily.get(family).push(group);
  }
  const families = [...FAMILY_ORDER, PLATFORM.family].filter((family) => byFamily.has(family));
  for (const family of families) {
    lines.push(`## ${family}`, "");
    for (const group of byFamily.get(family)) {
      lines.push(`### ${group.name}`, "");
      if (!group.days.length) {
        lines.push("暂无历史进展。", "");
        continue;
      }
      for (const day of group.days) {
        lines.push(`#### ${day.day}`, "");
        for (const item of day.items) {
          const kind = item.kind === "pr" ? "PR" : "Issue";
          lines.push(`- [${kind} #${item.number}](${item.url}) ${progressLabel(item)}`);
          lines.push(`  - 中文：${item.titleZh || item.title}`);
          if (item.titleZh && item.titleZh !== item.title) lines.push(`  - 原文：${item.title}`);
          if (item.excerptZh) lines.push(`  - 说明：${item.excerptZh}`);
        }
        lines.push("");
      }
    }
  }
  await fs.writeFile(HISTORY_MD_PATH, lines.join("\n"), "utf8");
}
