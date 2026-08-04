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
  assert.match(zh, /我研究 Agent 和医疗 AI/);
  assert.match(en, /I work on Agents and medical AI/);
  assert.match(zh, /研究、工程和产品/);
  assert.match(en, /Research, engineering, and product/);
  assert.match(zh, /data-ambient-toggle/);
  assert.doesNotMatch(zh, /autoplay/);
  assert.match(zh, /\/profile\/huang-bin-avatar\.jpg/);
  assert.match(en, /Portrait of Bin Huang/);
  assert.match(zh, /<style>/);
  assert.doesNotMatch(zh, /<link[^>]+rel="stylesheet"/);
  assert.doesNotMatch(en, /<link[^>]+rel="stylesheet"/);
  assert.equal((await stat(resolve(dist, "client/profile/huang-bin.jpg"))).isFile(), true);
});

test("primary routes and content details are generated", async () => {
  const paths = [
    "client/zh/research/index.html",
    "client/en/projects/index.html",
    "client/zh/research/skillscope/index.html",
    "client/zh/research/storybook-lock/index.html",
    "client/zh/writing/radad-deep-dive/index.html",
    "client/en/research/firewallm/index.html",
    "client/zh/about/index.html"
  ];
  for (const path of paths) {
    assert.equal((await stat(resolve(dist, path))).isFile(), true, path);
  }
});

test("research, project, and writing pages share the editorial system", async () => {
  const zhResearch = await text("client/zh/research/index.html");
  const enProjects = await text("client/en/projects/index.html");
  const zhWriting = await text("client/zh/writing/index.html");
  const researchDetail = await text("client/en/research/firewallm/index.html");
  const projectDetail = await text("client/zh/projects/tcm-knowledge-graph/index.html");
  const writingDetail = await text("client/zh/writing/radad-deep-dive/index.html");

  assert.match(zhResearch, /我在研究什么，以及每项工作具体做了什么/);
  assert.match(enProjects, /Systems I have built and the problems they addressed/);
  assert.match(zhWriting, /我怎样记录实验，也怎样把技术讲给更多人听/);

  for (const page of [zhResearch, enProjects, zhWriting, researchDetail, projectDetail, writingDetail]) {
    assert.match(page, /editorial-site/);
    assert.match(page, /<style>/);
    assert.doesNotMatch(page, /<link[^>]+rel="stylesheet"/);
  }

  assert.match(zhResearch, /01 \/ RESEARCH/);
  assert.match(enProjects, /02 \/ PROJECTS/);
  assert.match(zhWriting, /03 \/ WRITING/);
  assert.match(researchDetail, /editorial-back/);
  assert.match(projectDetail, /editorial-back/);
  assert.match(writingDetail, /editorial-back/);
});

test("new COLING manuscript is listed without distributing submission PDFs", async () => {
  const zh = await text("client/zh/research/skillscope/index.html");
  const en = await text("client/en/research/skillscope/index.html");
  assert.match(zh, /SkillScope/);
  assert.match(zh, /COLING 2026 投稿准备中/);
  assert.match(en, /Preparing for COLING 2026/);
  assert.match(zh, /不公开 COLING 投稿 PDF/);
  assert.doesNotMatch(zh, /skillscope_arr_anonymous\.pdf/);
  assert.doesNotMatch(zh, /skillscope_arr_supplementary\.pdf/);
});

test("new Storybook-Lock manuscript is listed without distributing its anonymous PDF", async () => {
  const zh = await text("client/zh/research/storybook-lock/index.html");
  const en = await text("client/en/research/storybook-lock/index.html");
  assert.match(zh, /Storybook-Lock/);
  assert.match(zh, /COLING 2026 投稿准备中/);
  assert.match(en, /Preparing for COLING 2026/);
  assert.match(zh, /不提供 PDF 或补充材料原文/);
  assert.doesNotMatch(zh, /storybook_lock_packed_arr2026/);
  assert.doesNotMatch(zh, /paper\.pdf/);
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
