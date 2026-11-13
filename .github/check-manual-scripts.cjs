const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const { Script } = require("node:vm");

const site = process.argv[2] || "_site";
for (const page of ["llm-for-zotero/index.html", "llm-for-zotero/zh/index.html"]) {
  const html = readFileSync(join(site, page), "utf8");
  const scripts = Array.from(html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi))
    .map(match => match[1])
    .filter(script => script.includes("video.rtd-demo"));
  if (scripts.length !== 1) {
    throw new Error(`${page}: expected one manual playback script, found ${scripts.length}`);
  }
  // Parse the actual production output so HTML compression cannot silently break playback.
  new Script(scripts[0], { filename: page });
  console.log(`${page}: production playback script parses successfully`);
}
