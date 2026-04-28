import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const docsDir = path.join(root, "docs");

if (!fs.existsSync(docsDir)) {
  fail([`Missing docs directory: ${docsDir}`]);
}

const htmlFiles = walk(docsDir).filter((file) => file.endsWith(".html"));
const errors = [];

if (htmlFiles.length === 0) {
  errors.push("No HTML files found under docs/");
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const relative = path.relative(root, file);

  if (!/<!doctype\s+html>/i.test(html)) {
    errors.push(`${relative}: missing <!doctype html>`);
  }

  if (!/<title>[\s\S]*?<\/title>/i.test(html)) {
    errors.push(`${relative}: missing <title> tag`);
  }

  const attrRegex = /(href|src)="([^"]+)"/gi;
  let match;
  while ((match = attrRegex.exec(html)) !== null) {
    const target = match[2].trim();
    if (shouldSkip(target)) continue;

    const clean = target.split("#")[0].split("?")[0];
    if (!clean) continue;

    const resolved = path.resolve(path.dirname(file), clean);
    if (!fs.existsSync(resolved)) {
      errors.push(`${relative}: broken ${match[1]} -> ${target}`);
    }
  }
}

if (errors.length > 0) {
  fail(errors);
}

console.log(`lint ok: ${htmlFiles.length} HTML files checked`);

function shouldSkip(target) {
  return (
    target.startsWith("http://") ||
    target.startsWith("https://") ||
    target.startsWith("mailto:") ||
    target.startsWith("tel:") ||
    target.startsWith("data:") ||
    target.startsWith("javascript:") ||
    target.startsWith("#")
  );
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function fail(errorsList) {
  console.error("lint failed:");
  for (const err of errorsList) {
    console.error(`- ${err}`);
  }
  process.exit(1);
}
