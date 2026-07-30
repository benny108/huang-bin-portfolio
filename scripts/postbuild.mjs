import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = process.cwd();
const dist = resolve(root, "dist");
const workerPath = resolve(dist, "server/index.js");
const hostingSource = resolve(root, ".openai/hosting.json");
const hostingTarget = resolve(dist, ".openai/hosting.json");

await mkdir(dirname(workerPath), { recursive: true });
await mkdir(dirname(hostingTarget), { recursive: true });

const worker = `export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
`;

await writeFile(workerPath, worker, "utf8");
await cp(hostingSource, hostingTarget);

const hosting = JSON.parse(await readFile(hostingSource, "utf8"));
if (!Object.prototype.hasOwnProperty.call(hosting, "d1")) {
  throw new Error("Invalid .openai/hosting.json");
}
