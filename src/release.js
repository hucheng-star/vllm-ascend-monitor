import { PLATFORM, matchModelIds, modelById } from "./models.js";

const VERSION_RE = /^##\s+(v\d+(?:\.\d+)+(?:rc\d+|\.post\d+)?)\s*-\s*(\d{4}\.\d{2}\.\d{2})/;

const SECTION_ZH = new Map([
  ["highlights", "亮点"],
  ["features", "功能特性"],
  ["feature", "功能特性"],
  ["hardware and operator support", "硬件和算子支持"],
  ["performance", "性能"],
  ["stability and bug fixes", "稳定性与错误修复"],
  ["bug fixes", "Bug 修复"],
  ["bug修复", "Bug 修复"],
  ["dependencies", "依赖项"],
  ["deprecation and configuration changes", "弃用和配置更改"],
  ["deprecation and breaking changes", "弃用与重大变更"],
  ["deprecation & breaking changes", "弃用与重大变更"],
  ["upcoming deprecation", "即将弃用"],
  ["documentation", "文档"],
  ["known issues", "已知问题"],
  ["other changes", "其他变更"],
  ["other", "其他"],
  ["experimental features or optimizations", "实验性功能或优化"],
  ["experimental", "实验性"],
  ["model support", "模型支持"],
  ["models", "模型"],
  ["model improvements", "模型改进"],
  ["core", "核心"],
  ["misc", "其他"],
  ["upgrade notes", "升级说明"],
  ["new contributors", "新贡献者"],
  ["full changelog", "完整变更日志"],
  ["graph mode improvements", "图模式改进"],
  ["operator improvements", "算子改进"],
  ["changes", "变更"],
  ["功能特性", "功能特性"],
  ["亮点", "亮点"],
  ["硬件和算子支持", "硬件和算子支持"],
  ["性能", "性能"],
  ["稳定性与错误修复", "稳定性与错误修复"],
  ["依赖项", "依赖项"],
  ["弃用和配置更改", "弃用和配置更改"],
  ["弃用与重大变更", "弃用与重大变更"],
  ["即将弃用", "即将弃用"],
  ["文档", "文档"],
  ["已知问题", "已知问题"],
  ["其他变更", "其他变更"],
  ["实验性功能或优化", "实验性功能或优化"],
  ["模型支持", "模型支持"],
]);

const SKIP_SECTION = /new contributors|full changelog|完整变更日志|升级说明|upgrade notes|新贡献者/i;

export function sectionTitleZh(title) {
  const cleaned = String(title || "")
    .replace(/&para;|&#182;|¶/gi, "")
    .replace(/#+\s*$/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const key = cleaned.toLowerCase();
  return SECTION_ZH.get(key) || SECTION_ZH.get(cleaned) || cleaned;
}

function plainText(raw) {
  return String(raw || "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`¶]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function pullNumbers(raw) {
  const found = new Set();
  for (const match of String(raw).matchAll(/\/pull\/(\d+)/g)) found.add(Number(match[1]));
  for (const match of String(raw).matchAll(/(?:#|\[#)(\d{3,6})/g)) found.add(Number(match[1]));
  return [...found];
}

export function parseReleaseMarkdown(markdown, lang) {
  const versions = [];
  let current = null;
  let section = null;
  let bullet = null;

  const flushBullet = () => {
    if (!bullet || !section) {
      bullet = null;
      return;
    }
    const text = plainText(bullet);
    if (text) {
      section.items.push({
        text,
        prs: pullNumbers(bullet),
        modelIds: matchModelIds(text),
      });
    }
    bullet = null;
  };

  for (const line of String(markdown).split(/\r?\n/)) {
    const versionMatch = line.match(VERSION_RE);
    if (versionMatch) {
      flushBullet();
      current = {
        version: versionMatch[1],
        date: versionMatch[2],
        lang,
        intro: [],
        sections: [],
      };
      versions.push(current);
      section = null;
      continue;
    }

    const heading = line.match(/^###\s+(.+?)\s*$/);
    if (heading && current) {
      flushBullet();
      section = {
        title: heading[1].replace(/#+\s*$/g, "").trim(),
        titleZh: sectionTitleZh(heading[1]),
        items: [],
      };
      current.sections.push(section);
      continue;
    }

    if (!current || line.startsWith("#")) continue;

    if (/^\s*[-*]\s+/.test(line)) {
      flushBullet();
      bullet = line.replace(/^\s*[-*]\s+/, "");
      continue;
    }

    if (bullet && /^\s{2,}\S/.test(line)) {
      bullet += ` ${line.trim()}`;
      continue;
    }

    if (bullet && line.trim() === "") {
      flushBullet();
      continue;
    }

    if (!section && line.trim()) {
      const text = plainText(line);
      if (text) current.intro.push(text);
    }
  }

  flushBullet();
  return versions;
}

export function htmlToMarkdown(html) {
  let source = String(html);
  const article = source.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  if (article) source = article[1];
  return source
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<h2[^>]*>/gi, "\n## ")
    .replace(/<h3[^>]*>/gi, "\n### ")
    .replace(/<\/h[23]>/gi, "\n")
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<\/li>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&para;|&#182;|&#x0*B6;/gi, " ")
    .replace(/¶/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n");
}

function bulletCount(version) {
  return version.sections.reduce((sum, section) => sum + section.items.length, 0);
}

function usableTranslation(version) {
  const items = version.sections.flatMap((section) => section.items);
  if (items.length < 3) return false;
  const average = items.reduce((sum, item) => sum + item.text.length, 0) / items.length;
  return average > 24;
}

export function mergeReleaseNotes(englishVersions, chineseVersions) {
  const chineseByVersion = new Map();
  for (const version of chineseVersions) {
    const existing = chineseByVersion.get(version.version);
    if (!existing || bulletCount(version) > bulletCount(existing)) {
      chineseByVersion.set(version.version, version);
    }
  }

  const seen = new Set();
  const merged = [];
  for (const version of englishVersions) {
    seen.add(version.version);
    const chinese = chineseByVersion.get(version.version);
    if (chinese && usableTranslation(chinese)) merged.push({ ...chinese, lang: "zh" });
    else merged.push({ ...version, lang: "en" });
  }
  for (const version of chineseByVersion.values()) {
    if (!seen.has(version.version) && usableTranslation(version)) merged.push({ ...version, lang: "zh" });
  }

  return merged
    .map((version, index) => ({ ...version, order: index }))
    .sort((a, b) => b.date.localeCompare(a.date) || a.order - b.order)
    .map(({ order, ...version }) => version);
}

export function buildModelTree(versions) {
  const buckets = new Map();

  const ensure = (id) => {
    if (!buckets.has(id)) {
      const model = modelById(id);
      buckets.set(id, {
        id,
        name: model?.name || id,
        family: model?.family || "其他",
        versions: [],
      });
    }
    return buckets.get(id);
  };

  for (const version of versions) {
    const perModel = new Map();
    for (const section of version.sections) {
      if (SKIP_SECTION.test(section.title) || SKIP_SECTION.test(section.titleZh)) continue;
      for (const item of section.items) {
        const ids = item.modelIds.length ? item.modelIds : [];
        for (const id of ids) {
          if (!perModel.has(id)) perModel.set(id, []);
          const sections = perModel.get(id);
          let bucket = sections.find((entry) => entry.title === section.title);
          if (!bucket) {
            bucket = { title: section.title, titleZh: section.titleZh, items: [] };
            sections.push(bucket);
          }
          bucket.items.push({ text: item.text, prs: item.prs });
        }
      }
    }

    for (const [id, sections] of perModel) {
      const node = ensure(id);
      node.versions.push({
        version: version.version,
        date: version.date,
        lang: version.lang,
        intro: version.intro.filter((line) => matchModelIds(line).includes(id)).slice(0, 1),
        sections,
      });
    }
  }

  return [...buckets.values()];
}

export function platformNotes(versions) {
  const result = [];
  for (const version of versions) {
    const sections = [];
    for (const section of version.sections) {
      if (SKIP_SECTION.test(section.title)) continue;
      const items = section.items.filter((item) => item.modelIds.length === 0);
      if (items.length) {
        sections.push({
          title: section.title,
          titleZh: section.titleZh,
          items: items.map((item) => ({ text: item.text, prs: item.prs })),
        });
      }
    }
    if (sections.length) {
      result.push({
        version: version.version,
        date: version.date,
        lang: version.lang,
        intro: [],
        sections,
      });
    }
  }
  return {
    id: PLATFORM.id,
    name: PLATFORM.name,
    family: PLATFORM.family,
    versions: result,
  };
}
