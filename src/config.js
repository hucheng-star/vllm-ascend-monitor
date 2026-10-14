import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

export const ROOT = root;
export const DATA_DIR = path.join(root, "data");
export const PUBLIC_DIR = path.join(root, "public");
export const DAILY_DIR = path.join(DATA_DIR, "daily");
export const STATE_PATH = path.join(DATA_DIR, "state.json");
export const TREE_PATH = path.join(DATA_DIR, "model-tree.md");
export const HISTORY_PATH = path.join(DATA_DIR, "history.json");
export const HISTORY_MD_PATH = path.join(DATA_DIR, "progress-history.md");
export const TRANSLATION_PATH = path.join(DATA_DIR, "translations.json");
export const PID_PATH = path.join(DATA_DIR, "server.pid");
export const LOG_PATH = path.join(DATA_DIR, "server.log");

export const PORT = Number(process.env.PORT || 8765);
export const HOST = "127.0.0.1";
export const REFRESH_MS = 10 * 60 * 1000;
export const TIMEZONE = "Asia/Shanghai";

export const REPO = "vllm-project/vllm-ascend";
export const RELEASE_MD_URL =
  "https://raw.githubusercontent.com/vllm-project/vllm-ascend/main/docs/source/user_guide/release_notes.md";
export const ZH_DOC_URLS = [
  "https://docs.vllm.ai/projects/ascend/zh-cn/latest/user_guide/release_notes.html",
  "https://docs.vllm.ai/projects/ascend/zh-cn/v0.23.0/user_guide/release_notes.html",
];
export const PR_LIST_URL = "https://github.com/vllm-project/vllm-ascend/pulls";
export const ISSUE_LIST_URL = "https://github.com/vllm-project/vllm-ascend/issues";

export const USER_AGENT = "vllm-ascend-monitor";
