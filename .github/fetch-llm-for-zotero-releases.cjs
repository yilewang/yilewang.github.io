#!/usr/bin/env node
/*
 * Writes the published llm-for-zotero GitHub releases to
 * _data/llm_for_zotero_releases.json, newest first, for the landing page and
 * the manual's release notes. The deploy workflow runs it before every build,
 * including the daily scheduled build, so the site follows new releases.
 *
 * Run it locally before `jekyll build` too:
 *   node .github/fetch-llm-for-zotero-releases.cjs
 * GITHUB_TOKEN is optional; without it GitHub allows 60 requests an hour.
 */
const fs = require("fs");
const path = require("path");

const REPO = "yilewang/llm-for-zotero";
const OUT = path.join(__dirname, "..", "_data", "llm_for_zotero_releases.json");

async function fetchAllReleases() {
  const releases = [];
  for (let page = 1; ; page++) {
    const res = await fetch(
      `https://api.github.com/repos/${REPO}/releases?per_page=100&page=${page}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "release-notes-sync",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
      },
    );
    if (!res.ok) {
      throw new Error(`GitHub releases request failed: ${res.status} ${await res.text()}`);
    }
    const batch = await res.json();
    if (!batch.length) return releases;
    releases.push(...batch);
  }
}

const HEADING = /^(#{1,6})\s+(.*?)\s*#*\s*$/;

/* Drops the opening title lines GitHub shows anyway: "# What's new in …" or a heading that repeats the version. */
function dropTitleHeadings(lines, version) {
  let i = 0;
  while (i < lines.length && !lines[i].trim()) i++;
  while (i < lines.length) {
    const m = lines[i].match(HEADING);
    if (!m) break;
    const text = m[2].toLowerCase();
    if (!text.startsWith("what's new") && !text.replace(/^v/, "").startsWith(version)) break;
    i++;
    while (i < lines.length && !lines[i].trim()) i++;
  }
  return lines.slice(i);
}

/* Links #123 to the plugin's issues and @name to GitHub profiles, outside code spans and existing links. */
function linkify(line) {
  return line
    .split(/(`[^`]*`|\[[^\]]*\]\([^)]*\)|<[^>]+>)/)
    .map((part, idx) => {
      if (idx % 2 === 1) return part;
      return part
        .replace(/(^|[\s(])#(\d+)\b/g, `$1[#$2](https://github.com/${REPO}/issues/$2)`)
        .replace(/(^|[\s(])@([A-Za-z0-9](?:[A-Za-z0-9-]{0,38}))\b/g, "$1[@$2](https://github.com/$2)");
    })
    .join("");
}

/* Strips Markdown emphasis and links so a heading reads as plain text. */
function plain(text) {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_`]/g, "")
    .trim();
}

function cleanRelease(release) {
  const version = release.tag_name.replace(/^v/i, "");
  let lines = (release.body || "").replace(/\r\n?/g, "\n").split("\n");
  lines = dropTitleHeadings(lines, version);

  let inFence = false;
  const headingLevels = [];
  lines = lines.map((line) => {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    if (inFence) return line;
    const m = line.match(HEADING);
    if (m) headingLevels.push(m[1].length);
    return linkify(line);
  });

  /* The page gives each release an h3, so the body's top headings become h4. */
  const top = headingLevels.length ? Math.min(...headingLevels) : 4;
  const sections = [];
  let lead = null;
  let paragraph = [];
  let seenHeading = false;
  inFence = false;
  lines = lines.map((line) => {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    const m = !inFence && line.match(HEADING);
    if (m) {
      seenHeading = true;
      if (m[1].length === top) sections.push(plain(m[2]));
      return `${"#".repeat(Math.min(6, m[1].length - top + 4))} ${m[2]}`;
    }
    if (!seenHeading && lead === null) {
      const isText = line.trim() && !/^\s*(<|!\[|[-*+]\s|\d+\.\s|>)/.test(line);
      if (isText) paragraph.push(line.trim());
      else if (paragraph.length) {
        /* A paragraph that is one italic note, like "*Changes since 3.9.19.*", is not the summary. */
        const text = paragraph.join(" ");
        if (/^([*_])[^*_].*\1$/.test(text)) paragraph = [];
        else lead = text;
      }
    }
    return line;
  });
  if (lead === null && paragraph.length) lead = paragraph.join(" ");

  return {
    tag: release.tag_name,
    version,
    series: version.split(".").slice(0, 2).join("."),
    anchor: `v${version.replace(/[^0-9A-Za-z]+/g, "-")}`,
    date: release.published_at.slice(0, 10),
    url: release.html_url,
    lead: lead || "",
    sections,
    body: lines.join("\n").trim(),
  };
}

async function main() {
  const releases = (await fetchAllReleases())
    .filter((r) => !r.draft && !r.prerelease && r.published_at)
    .sort((a, b) => b.published_at.localeCompare(a.published_at))
    .map(cleanRelease);
  if (!releases.length) throw new Error("No published releases found.");
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, `${JSON.stringify(releases, null, 2)}\n`);
  console.log(`Wrote ${releases.length} releases (latest ${releases[0].tag}) to ${path.relative(process.cwd(), OUT)}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
