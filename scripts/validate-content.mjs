import { readdir, readFile, stat } from "node:fs/promises";
import { extname, join, relative, resolve } from "node:path";

const root = process.cwd();
const contentRoot = resolve(root, "src/content");
const publicRoot = resolve(root, "public");
const collections = ["publications", "projects", "writing", "awards"];
const forbidden = [
  ["13710", "095285"].join(""),
  ["192.168", ".111."].join(""),
  ["/Users/", "benny/"].join(""),
  ["33150", "0903"].join(""),
  ["4401822", "00306131213"].join(""),
  ["adpc", "2303097"].join(""),
  ["JTS_", "56107168241702"].join("")
];

let failed = false;

for (const collection of collections) {
  const zh = await readdir(join(contentRoot, collection, "zh"));
  const en = await readdir(join(contentRoot, collection, "en"));
  const zhSet = new Set(zh);
  const enSet = new Set(en);
  for (const file of new Set([...zh, ...en])) {
    if (!zhSet.has(file) || !enSet.has(file)) {
      console.error(`[i18n] Missing pair: ${collection}/${file}`);
      failed = true;
    }
  }
}

async function walk(dir) {
  const files = [];
  for (const name of await readdir(dir)) {
    const path = join(dir, name);
    const info = await stat(path);
    if (info.isDirectory()) files.push(...(await walk(path)));
    else files.push(path);
  }
  return files;
}

const sourceFiles = (await walk(root)).filter((file) => {
  const rel = relative(root, file);
  return !rel.startsWith("node_modules/") &&
    !rel.startsWith(".git/") &&
    !rel.startsWith("dist/") &&
    [".astro", ".md", ".mdx", ".ts", ".js", ".json", ".css", ".yml", ".yaml"].includes(extname(file));
});

for (const file of sourceFiles) {
  const text = await readFile(file, "utf8");
  for (const token of forbidden) {
    if (text.includes(token)) {
      console.error(`[privacy] Forbidden token "${token}" in ${relative(root, file)}`);
      failed = true;
    }
  }
}

const publicFiles = await walk(publicRoot);
for (const file of publicFiles) {
  if (extname(file).toLowerCase() === ".pdf") {
    console.error(`[privacy] Public PDF is not allowed: ${relative(root, file)}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log(`Validated ${collections.length} bilingual collections and ${publicFiles.length} public assets.`);
