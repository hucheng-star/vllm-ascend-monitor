import fs from "node:fs/promises";
import path from "node:path";
import { TRANSLATION_PATH } from "./config.js";

const PHRASES = [
  ["tool-call parsing", "工具调用解析"],
  ["tool-call", "工具调用"],
  ["tool call", "工具调用"],
  ["request backlog", "请求积压"],
  ["graph mode", "图模式"],
  ["eager mode", "eager 模式"],
  ["context parallel", "上下文并行"],
  ["tensor parallel", "张量并行"],
  ["pipeline parallel", "流水线并行"],
  ["expert parallel", "专家并行"],
  ["shared expert", "共享专家"],
  ["prefix cache", "前缀缓存"],
  ["prefix caching", "前缀缓存"],
  ["kv cache", "KV 缓存"],
  ["kv offload", "KV 卸载"],
  ["block table", "块表"],
  ["block tables", "块表"],
  ["custom op", "自定义算子"],
  ["long context", "长上下文"],
  ["speculative decoding", "投机解码"],
  ["speculative", "投机"],
  ["disaggregated prefill", "分离式预填充"],
  ["nightly case", "夜间用例"],
  ["nightly cases", "夜间用例"],
  ["weekly case", "每周用例"],
  ["test case", "测试用例"],
  ["test cases", "测试用例"],
  ["execution optimizations", "执行优化"],
  ["recompilation", "重新编译"],
  ["postprocessing", "后处理"],
  ["checkpoint", "检查点"],
  ["checkpoints", "检查点"],
  ["quantization", "量化"],
  ["metadata", "元数据"],
  ["optimization", "优化"],
  ["optimizations", "优化"],
  ["performance", "性能"],
  ["precision", "精度"],
  ["accuracy", "精度"],
  ["regression", "回退"],
  ["throughput", "吞吐"],
  ["scheduler", "调度器"],
  ["communication", "通信"],
  ["overlap", "重叠"],
  ["attention", "注意力"],
  ["indexer", "索引器"],
  ["compressor", "压缩器"],
  ["decoding", "解码"],
  ["prefill", "预填充"],
  ["decode", "解码"],
  ["kernel", "内核"],
  ["kernels", "内核"],
  ["routing", "路由"],
  ["sparse", "稀疏"],
  ["retention", "保留"],
  ["configuration", "配置"],
  ["config", "配置"],
  ["weights", "权重"],
  ["weight", "权重"],
  ["loading", "加载"],
  ["support", "支持"],
  ["restore", "恢复"],
  ["restored", "恢复"],
  ["caused", "导致"],
  ["per-step", "每步"],
  ["per-prefill", "每次预填充"],
  ["copies", "拷贝"],
  ["optimize", "优化"],
  ["platform-default", "平台默认"],
  ["initialize", "初始化"],
  ["align", "对齐"],
  ["shared", "共享"],
  ["visible", "可见"],
  ["honor", "遵循"],
  ["interleaved", "交错"],
  ["document", "补充文档"],
  ["serving", "服务"],
  ["runtime", "运行时"],
  ["feature", "特性"],
  ["updates", "更新"],
  ["freezes", "卡住"],
  ["running requests", "正在运行的请求"],
  ["recompile", "重编译"],
  ["checklist", "清单"],
  ["weekly", "每周"],
  ["nightly", "夜间"],
  ["remove", "移除"],
  ["removed", "移除"],
  ["rename", "重命名"],
  ["migrate", "迁移"],
  ["update", "更新"],
  ["updated", "更新"],
  ["enable", "启用"],
  ["enabled", "启用"],
  ["disable", "禁用"],
  ["avoid", "避免"],
  ["reduce", "减少"],
  ["improve", "改进"],
  ["improved", "改进"],
  ["propagate", "传递"],
  ["resolved", "已解析"],
  ["fuse", "融合"],
  ["fused", "融合"],
  ["split", "拆分"],
  ["add", "新增"],
  ["added", "新增"],
  ["fix", "修复"],
  ["fixed", "修复"],
  ["switch", "切换"],
  ["switches", "切换"],
  ["merge", "合并"],
  ["merges", "合并"],
  ["prune", "清理"],
  ["debug", "调试"],
  ["required", "必填"],
  ["strict", "严格"],
  ["parsing", "解析"],
  ["prefix", "前缀"],
  ["cache", "缓存"],
  ["caching", "缓存"],
  ["offload", "卸载"],
  ["pooling", "池化"],
  ["hang", "挂起"],
  ["crash", "崩溃"],
  ["memory", "显存"],
  ["sequence", "序列"],
];

const TAGS = [
  [/^bugfix$/i, "修复"],
  [/^bug$/i, "缺陷"],
  [/^perf(ormance)?$/i, "性能"],
  [/^feature$/i, "功能"],
  [/^ci$/i, "持续集成"],
  [/^tests?$/i, "测试"],
  [/^docs?$/i, "文档"],
  [/^refactor$/i, "重构"],
  [/^misc$/i, "杂项"],
  [/^model$/i, "模型"],
  [/^quant(ization)?$/i, "量化"],
  [/^ops$/i, "算子"],
  [/^attention$/i, "注意力"],
  [/^kv cache$/i, "KV 缓存"],
  [/^kv offload$/i, "KV 卸载"],
  [/^toolparser$/i, "工具解析"],
  [/^mrv2$/i, "MRV2"],
];

const cache = new Map();
let quotaOpen = true;
let loaded = false;

function mostlyChinese(text) {
  const han = (String(text).match(/[\u4e00-\u9fff]/g) || []).length;
  const letters = (String(text).match(/[A-Za-z]/g) || []).length;
  return han >= 4 && han >= letters;
}

export function glossText(text) {
  const tags = [];
  let rest = String(text || "").replace(/\[([^\]]+)\]/g, (_, tag) => {
    const hit = TAGS.find(([pattern]) => pattern.test(tag.trim()));
    tags.push(hit ? hit[1] : tag.trim());
    return " ";
  });
  const ordered = [...PHRASES].sort((a, b) => b[0].length - a[0].length);
  for (const [phrase, zh] of ordered) {
    rest = rest.replace(new RegExp(`\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi"), zh);
  }
  rest = rest.replace(/\s+/g, " ").replace(/\s+([，。])/g, "$1").trim();
  const prefix = tags.length ? `【${tags.join("】【")}】` : "";
  if (prefix.includes("修复")) rest = rest.replace(/^修复\s*/, "");
  if (prefix.includes("功能")) rest = rest.replace(/^新增\s*/, "");
  return polish(`${prefix}${rest}`);
}

function polish(text) {
  return String(text || "")
    .replace(/公关/g, "PR")
    .replace(/病例/g, "用例")
    .replace(/图形模式/g, "图模式")
    .replace(/每晚/g, "夜间")
    .replace(/\s+/g, " ")
    .trim();
}

export function cleanExcerpt(text) {
  return String(text || "")
    .replace(/What this PR does\s*\/\s*why we need it\??/gi, " ")
    .replace(/Does this PR introduce any user-facing change\??/gi, " ")
    .replace(/How was this patch tested\??/gi, " ")
    .replace(/Thanks for sending a pull request!/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function englishWordsLeft(text) {
  return (String(text).match(/\b[A-Za-z]{3,}\b/g) || []).filter((word) => !/^(DeepSeek|Qwen|GLM|Kimi|MiniMax|Gemma|Bailing|Ascend|Mooncake|Atlas|CANN|NPU|MTP|EPLB|DSA|DSpark|Triton|MRV2|PCP|DCP|Flash|Eagle|Graph|PR|CI|PD|EP|TP|PP|MLA|SFA|MXFP|W8A8|A2|A3)$/i.test(word));
}

async function loadCache() {
  if (loaded) return;
  loaded = true;
  try {
    const saved = JSON.parse(await fs.readFile(TRANSLATION_PATH, "utf8"));
    for (const [key, value] of Object.entries(saved)) cache.set(key, value);
  } catch {
    // first run
  }
}

async function saveCache() {
  await fs.mkdir(path.dirname(TRANSLATION_PATH), { recursive: true });
  await fs.writeFile(TRANSLATION_PATH, JSON.stringify(Object.fromEntries(cache)), "utf8");
}

async function machineTranslate(text) {
  if (!quotaOpen) return "";
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text.slice(0, 420))}&langpair=en|zh-CN`;
  const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
  if (!response.ok) return "";
  const payload = await response.json();
  const translated = payload.responseData?.translatedText?.trim() || "";
  if (payload.quotaFinished || /MYMEMORY WARNING/i.test(translated) || /QUERY LENGTH LIMIT/i.test(translated)) {
    quotaOpen = false;
    return "";
  }
  if (!/[\u4e00-\u9fff]/.test(translated)) return "";
  cache.set(text, translated);
  return translated;
}

async function translateOne(text, preferMachine) {
  const source = String(text || "").trim();
  if (!source) return "";
  if (mostlyChinese(source)) return source;
  if (cache.has(source)) return polish(cache.get(source));
  const gloss = glossText(source);
  const needsMachine = preferMachine || englishWordsLeft(gloss).length >= 3;
  if (needsMachine && quotaOpen) {
    try {
      const translated = await machineTranslate(source);
      if (translated) return polish(translated);
    } catch {
      quotaOpen = false;
    }
  }
  return polish(gloss);
}

export async function translateItems(items) {
  await loadCache();
  const ordered = [...items].sort((a, b) => Date.parse(b.updatedAt || 0) - Date.parse(a.updatedAt || 0));
  for (const item of ordered) {
    item.excerpt = cleanExcerpt(item.excerpt);
    if (cache.has(item.title)) item.titleZh = polish(cache.get(item.title));
    else if (!mostlyChinese(item.title)) item.titleZh = "";
    if (cache.has(item.excerpt)) item.excerptZh = polish(cache.get(item.excerpt));
    else item.excerptZh = "";
  }
  let machineBudget = 24;
  for (const item of ordered) {
    if (item.titleZh) continue;
    const gloss = glossText(item.title);
    const useMachine = machineBudget > 0 && !cache.has(item.title) && englishWordsLeft(gloss).length >= 4;
    if (useMachine) machineBudget -= 1;
    item.titleZh = await translateOne(item.title, useMachine);
  }
  for (const item of ordered) {
    if (!item.excerpt || item.excerptZh) continue;
    const useMachine = machineBudget > 0 && !cache.has(item.excerpt);
    if (useMachine) machineBudget -= 1;
    item.excerptZh = await translateOne(item.excerpt, useMachine);
  }
  await saveCache();
}
