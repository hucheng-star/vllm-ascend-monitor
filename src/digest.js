import fs from "node:fs/promises";
import path from "node:path";
import { DAILY_DIR, TREE_PATH } from "./config.js";
import { actionLabel } from "./github.js";
import { FAMILY_ORDER, PLATFORM, modelById } from "./models.js";

function prLinks(text, prs) {
  const pending = new Set(prs || []);
  const linked = String(text).replace(/#(\d{3,6})/g, (match, id) => {
    pending.delete(Number(id));
    return `[#${id}](https://github.com/vllm-project/vllm-ascend/issues/${id})`;
  });
  const extra = [...pending]
    .map((id) => `[#${id}](https://github.com/vllm-project/vllm-ascend/issues/${id})`)
    .join(" ");
  return extra ? `${linked} ${extra}` : linked;
}

export async function writeModelTree(state) {
  const lines = [
    "# vLLM-Ascend 模型版本树",
    "",
    `更新时间：${state.generatedAt}`,
    "",
    "版本按日期由近到远排列。同一条说明若点名多个模型，会同时出现在这些模型下。",
    "",
    `- 英文原文：${state.sources.releaseMarkdown}`,
    `- 中文文档：${state.sources.chineseDocs.join(" 、 ")}`,
    "",
  ];

  const groups = new Map();
  for (const model of state.models) {
    const family = model.family || "其他";
    if (!groups.has(family)) groups.set(family, []);
    groups.get(family).push(model);
  }

  const families = [...FAMILY_ORDER, PLATFORM.family].filter((family) => groups.has(family));
  for (const family of families) {
    lines.push(`## ${family}`, "");
    for (const model of groups.get(family)) {
      lines.push(`### ${model.name}`, "");
      if (!model.versions.length) {
        lines.push("暂无点名该模型的版本说明。", "");
        continue;
      }
      for (const version of model.versions) {
        const lang = version.lang === "zh" ? "中文" : "英文原文";
        lines.push(`#### ${version.version} · ${version.date}（${lang}）`, "");
        for (const line of version.intro || []) lines.push(line, "");
        for (const section of version.sections) {
          lines.push(`##### ${section.titleZh}`, "");
          for (const item of section.items) {
            const links = prLinks(item.text, item.prs);
            lines.push(`- ${links}`);
          }
          lines.push("");
        }
      }
    }
  }

  await fs.mkdir(path.dirname(TREE_PATH), { recursive: true });
  await fs.writeFile(TREE_PATH, lines.join("\n"), "utf8");
}

export async function writeDaily(state) {
  await fs.mkdir(DAILY_DIR, { recursive: true });
  const day = state.today.day;
  const lines = [
    `# ${day} 各模型主要进展`,
    "",
    `更新时间：${state.generatedAt}`,
    "",
    "统计口径：Asia/Shanghai 自然日。来源为 GitHub PR 与 Issue 的最近更新。",
    "",
    `- PR 列表：${state.sources.pulls}`,
    `- Issue 列表：${state.sources.issues}`,
    "",
  ];

  if (!state.today.groups.length) {
    lines.push("今天还没有识别到模型相关的 PR 或 Issue 更新。", "");
  }

  for (const group of state.today.groups) {
    lines.push(`## ${group.name}`, "");
    for (const item of group.items) {
      const kind = item.kind === "pr" ? "PR" : "Issue";
      const labels = item.labels.length ? ` · ${item.labels.join(", ")}` : "";
      lines.push(
        `- [${kind} #${item.number}](${item.url}) ${actionLabel(item.action)}${item.draft ? " · 草稿" : ""}${labels}`,
      );
      lines.push(`  - 中文：${item.titleZh || item.title}`);
      if (item.titleZh && item.titleZh !== item.title) lines.push(`  - 原文：${item.title}`);
      if (item.excerptZh) lines.push(`  - 说明：${item.excerptZh}`);
      else if (item.excerpt) lines.push(`  - ${item.excerpt}`);
    }
    lines.push("");
  }

  const markdown = lines.join("\n");
  const json = JSON.stringify(state.today, null, 2);
  await fs.writeFile(path.join(DAILY_DIR, `${day}.md`), markdown, "utf8");
  await fs.writeFile(path.join(DAILY_DIR, `${day}.json`), json, "utf8");
}

export function groupToday(items) {
  const todayItems = items
    .filter((item) => item.action !== "older")
    .sort((a, b) => b.score - a.score || Date.parse(b.updatedAt) - Date.parse(a.updatedAt));

  const buckets = new Map();
  const ensure = (id) => {
    if (!buckets.has(id)) {
      const model = modelById(id);
      buckets.set(id, {
        id,
        name: model?.name || id,
        family: model?.family || "其他",
        items: [],
      });
    }
    return buckets.get(id);
  };

  for (const item of todayItems) {
    const ids = item.modelIds.length ? item.modelIds : ["platform"];
    for (const id of ids) {
      const bucket = ensure(id);
      if (bucket.items.length >= 8) continue;
      if (id === "platform") {
        if (/^\[(CI|Test|Doc|Docs|Chore|Misc)\]/i.test(item.title)) continue;
        if (item.score < 5) continue;
      }
      bucket.items.push(item);
    }
  }

  return [...buckets.values()].filter((group) => group.items.length);
}
