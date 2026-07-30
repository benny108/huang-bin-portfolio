import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { test } from "node:test";
import { resolve } from "node:path";

const root = process.cwd();
const dist = resolve(root, "dist");

async function text(path) {
  return readFile(resolve(dist, path), "utf8");
}

test("build emits Sites worker and metadata", async () => {
  assert.equal((await stat(resolve(dist, "server/index.js"))).isFile(), true);
  assert.equal((await stat(resolve(dist, ".openai/hosting.json"))).isFile(), true);
});

test("Chinese and English home pages contain the positioning", async () => {
  const zh = await text("client/zh/index.html");
  const en = await text("client/en/index.html");
  assert.match(zh, /把 LLM 研究做成可运行系统/);
  assert.match(en, /I turn LLM research into working systems/);
  assert.match(zh, /\/profile\/huang-bin-avatar\.jpg/);
  assert.match(en, /Portrait of Bin Huang/);
  assert.equal((await stat(resolve(dist, "client/profile/huang-bin.jpg"))).isFile(), true);
});

test("primary routes and content details are generated", async () => {
  const paths = [
    "client/zh/research/index.html",
    "client/en/projects/index.html",
    "client/zh/writing/radad-deep-dive/index.html",
    "client/en/research/firewallm/index.html",
    "client/zh/about/index.html"
  ];
  for (const path of paths) {
    assert.equal((await stat(resolve(dist, path))).isFile(), true, path);
  }
});

test("public HTML excludes private identifiers", async () => {
  const pages = [
    await text("client/zh/index.html"),
    await text("client/en/index.html"),
    await text("client/zh/about/index.html")
  ].join("\n");
  for (const token of [
    ["13710", "095285"].join(""),
    ["192.168", ".111."].join(""),
    ["33150", "0903"].join(""),
    ["4401822", "00306131213"].join("")
  ]) {
    assert.equal(pages.includes(token), false, token);
  }
});
