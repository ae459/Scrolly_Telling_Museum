import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceDir = path.join(root, "docs");
const outDir = path.join(root, "out");

if (!fs.existsSync(sourceDir)) {
  console.error(`build failed: missing source directory ${sourceDir}`);
  process.exit(1);
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.cpSync(sourceDir, outDir, { recursive: true });

const indexPath = path.join(outDir, "index.html");
if (!fs.existsSync(indexPath)) {
  console.error("build failed: out/index.html was not generated");
  process.exit(1);
}

console.log("build ok: copied docs/ to out/");
