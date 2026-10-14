/** Model taxonomy. More specific names use lookaheads so they do not swallow parents. */
export const MODELS = [
  {
    id: "ds-v4-flash",
    name: "DeepSeek V4 Flash",
    family: "DeepSeek",
    patterns: [/deepseek[\s-]*v4[\s-]*flash/i, /\bdsv4[\s-]*flash/i, /v4[\s-]*flash[\s-]*0731/i],
  },
  {
    id: "ds-v4-pro",
    name: "DeepSeek V4 Pro",
    family: "DeepSeek",
    patterns: [/deepseek[\s-]*v4[\s-]*pro/i, /v4[\s-]*pro[\s-]*0813/i],
  },
  {
    id: "ds-v4.1",
    name: "DeepSeek V4.1",
    family: "DeepSeek",
    patterns: [/deepseek[\s-]*v4\.1/i],
  },
  {
    id: "ds-v4",
    name: "DeepSeek V4",
    family: "DeepSeek",
    patterns: [/deepseek[\s-]*v4(?![\s-]*(?:flash|pro)|\.\d)/i, /\bdsv4\b/i],
  },
  {
    id: "ds-v3.2",
    name: "DeepSeek V3.2",
    family: "DeepSeek",
    patterns: [/deepseek[\s-]*v3\.2/i],
  },
  {
    id: "ds-v3.1",
    name: "DeepSeek V3.1",
    family: "DeepSeek",
    patterns: [/deepseek[\s-]*v3\.1/i],
  },
  {
    id: "ds-v3",
    name: "DeepSeek V3",
    family: "DeepSeek",
    patterns: [/deepseek[\s-]*v3(?!\.\d)/i],
  },
  {
    id: "ds-r1",
    name: "DeepSeek R1",
    family: "DeepSeek",
    patterns: [/deepseek[\s-]*r1/i],
  },
  {
    id: "ds-ocr2",
    name: "DeepSeek OCR2",
    family: "DeepSeek",
    patterns: [/deepseek[\s-]*ocr\s?2/i],
  },
  {
    id: "ds-ocr",
    name: "DeepSeek OCR",
    family: "DeepSeek",
    patterns: [/deepseek[\s-]*ocr(?!\s?2)/i],
  },
  {
    id: "qwen3.8",
    name: "Qwen3.8",
    family: "Qwen",
    patterns: [/qwen3\.8/i],
  },
  {
    id: "qwen3.6",
    name: "Qwen3.6",
    family: "Qwen",
    patterns: [/qwen3\.6/i],
  },
  {
    id: "qwen3.5",
    name: "Qwen3.5",
    family: "Qwen",
    patterns: [/qwen3\.5/i, /qwen3_5/i],
  },
  {
    id: "qwen3-omni",
    name: "Qwen3-Omni",
    family: "Qwen",
    patterns: [/qwen3[\s-]*omni/i],
  },
  {
    id: "qwen3-asr",
    name: "Qwen3-ASR",
    family: "Qwen",
    patterns: [/qwen3[\s-]*asr/i],
  },
  {
    id: "qwen3-vl",
    name: "Qwen3-VL",
    family: "Qwen",
    patterns: [/qwen3[\s-]*vl/i],
  },
  {
    id: "qwen3-next",
    name: "Qwen3-Next",
    family: "Qwen",
    patterns: [/qwen3[\s-]*next/i],
  },
  {
    id: "qwen3-moe",
    name: "Qwen3 MoE",
    family: "Qwen",
    patterns: [/qwen3[\s-]*moe/i, /qwen3[\s-]*coder/i, /qwen3[\s-]*30b/i, /qwen3[\s-]*235b/i],
  },
  {
    id: "qwen3",
    name: "Qwen3",
    family: "Qwen",
    patterns: [/qwen3(?![\.\d]|[\s-]*(?:vl|asr|omni|next|coder|moe|\d))/i],
  },
  {
    id: "qwen2.5",
    name: "Qwen2.5",
    family: "Qwen",
    patterns: [/qwen2\.5/i],
  },
  {
    id: "qwen2-vl",
    name: "Qwen2-VL",
    family: "Qwen",
    patterns: [/qwen2[\s-]*vl/i],
  },
  {
    id: "glm-5.2",
    name: "GLM-5.2",
    family: "GLM",
    patterns: [/glm[\s-]*5\.2/i],
  },
  {
    id: "glm-5.1",
    name: "GLM-5.1",
    family: "GLM",
    patterns: [/glm[\s-]*5\.1/i],
  },
  {
    id: "glm-5",
    name: "GLM-5",
    family: "GLM",
    patterns: [/glm[\s-]*5(?!\.\d)/i],
  },
  {
    id: "glm-4.7",
    name: "GLM-4.7",
    family: "GLM",
    patterns: [/glm[\s-]*4\.7/i],
  },
  {
    id: "glm-4",
    name: "GLM-4",
    family: "GLM",
    patterns: [/glm[\s-]*4(?!\.\d)/i, /glm[\s-]*4\.5/i, /glm[\s-]*4\.6/i],
  },
  {
    id: "kimi-k3",
    name: "Kimi K3",
    family: "Kimi",
    patterns: [/kimi[\s-]*k3/i],
  },
  {
    id: "kimi-k2",
    name: "Kimi K2",
    family: "Kimi",
    patterns: [/kimi[\s-]*k2/i],
  },
  {
    id: "minimax-m2.7",
    name: "MiniMax-M2.7",
    family: "MiniMax",
    patterns: [/minimax[\s-]*m2\.7/i],
  },
  {
    id: "minimax-m2.5",
    name: "MiniMax-M2.5",
    family: "MiniMax",
    patterns: [/minimax[\s-]*m2\.5/i],
  },
  {
    id: "minimax-m2",
    name: "MiniMax-M2",
    family: "MiniMax",
    patterns: [/minimax[\s-]*m2(?!\.\d)/i, /minimax[\s-]*2\.x/i],
  },
  {
    id: "gemma4",
    name: "Gemma4",
    family: "Gemma",
    patterns: [/gemma\s?4/i],
  },
  {
    id: "step3",
    name: "Step3",
    family: "Step",
    patterns: [/step3/i],
  },
  {
    id: "bailing",
    name: "Bailing",
    family: "Bailing",
    patterns: [/bailing/i],
  },
  {
    id: "llama",
    name: "Llama",
    family: "其他",
    patterns: [/llama/i],
  },
  {
    id: "internvl",
    name: "InternVL",
    family: "其他",
    patterns: [/internvl/i],
  },
  {
    id: "pangu",
    name: "Pangu",
    family: "其他",
    patterns: [/pangu|盘古/i],
  },
];

export const FAMILY_ORDER = ["DeepSeek", "Qwen", "GLM", "Kimi", "MiniMax", "Gemma", "Step", "Bailing", "其他"];

export const PLATFORM = {
  id: "platform",
  name: "平台与通用",
  family: "平台与通用",
};

const BY_ID = new Map(MODELS.map((model) => [model.id, model]));

export function modelById(id) {
  if (id === PLATFORM.id) return PLATFORM;
  return BY_ID.get(id) || null;
}

export function matchModelIds(text) {
  if (!text) return [];
  const hits = [];
  for (const model of MODELS) {
    if (model.patterns.some((pattern) => pattern.test(text))) hits.push(model.id);
  }
  return hits;
}
