/* global console, fetch, AbortSignal */
import { Buffer } from "node:buffer";
import { createHash } from "node:crypto";
import { promises as fs } from "node:fs";
import process from "node:process";
import path from "node:path";

const ROOT = process.cwd();
const EXCLUDED = new Set([".git", "node_modules", "dist", "build", ".tanstack", ".output"]);
const SOURCE_EXTENSIONS = new Set([".html", ".htm", ".tsx", ".jsx", ".ts", ".js", ".mdx"]);
const IMAGE_DIR = path.join(ROOT, "public", "images");

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory() && EXCLUDED.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (SOURCE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) files.push(full);
  }
  return files;
}

function attr(tag, name) {
  const match = tag.match(new RegExp("\\b" + name + "\\s*=\\s*([\"'])([\\s\\S]*?)\\1", "i"));
  return match?.[2] ?? null;
}

function extensionFor(contentType) {
  if (contentType.includes("image/png")) return "png";
  if (contentType.includes("image/jpeg")) return "jpg";
  if (contentType.includes("image/webp")) return "webp";
  if (contentType.includes("image/avif")) return "avif";
  return null;
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48) || "generated-visual";
}

async function main() {
  await fs.mkdir(IMAGE_DIR, { recursive: true });
  const sourceFiles = await walk(ROOT);
  let processed = 0;
  const failures = [];

  for (const file of sourceFiles) {
    let source = await fs.readFile(file, "utf8");
    let changed = false;
    const tags = [...source.matchAll(/<img\b[^>]*>/gi)];
    for (const match of tags) {
      const tag = match[0];
      const prompt = attr(tag, "data-prompt");
      if (!prompt?.trim()) continue;
      const currentSrc = attr(tag, "src") ?? "";
      const localPath = currentSrc.startsWith("/")
        ? path.join(ROOT, "public", currentSrc.slice(1))
        : path.resolve(path.dirname(file), currentSrc);
      let existing = false;
      if (currentSrc && !currentSrc.includes("placeholder") && !/^https?:\/\//i.test(currentSrc)) {
        try {
          existing = (await fs.stat(localPath)).isFile();
        } catch {
          // A missing local asset is the reason this prompt needs generation.
        }
      }
      if (existing) continue;

      const digest = createHash("sha256").update(prompt.trim()).digest("hex").slice(0, 10);
      const filenameBase = slug(prompt);
      const url = "https://image.pollinations.ai/prompt/" + encodeURIComponent(prompt.trim()) + "?width=1200&height=800&nologo=true";
      try {
        const response = await fetch(url, {
          headers: { Accept: "image/*" },
          signal: AbortSignal.timeout(90000),
        });
        if (!response.ok) throw new Error("image service returned HTTP " + response.status);
        const contentType = (response.headers.get("content-type") ?? "").toLowerCase();
        const extension = extensionFor(contentType);
        if (!extension) throw new Error("unexpected content type: " + (contentType || "missing"));
        const bytes = Buffer.from(await response.arrayBuffer());
        if (bytes.length < 1024) throw new Error("image response too small (" + bytes.length + " bytes)");
        const filename = filenameBase + "-" + digest + "." + extension;
        await fs.writeFile(path.join(IMAGE_DIR, filename), bytes);
        const replacement = tag.replace(/\bsrc\s*=\s*(["']).*?\1/i, 'src="/images/' + filename + '"');
        source = source.replace(tag, replacement);
        changed = true;
        processed++;
        console.log("Generated /images/" + filename + " (" + bytes.length + " bytes) for " + path.relative(ROOT, file));
      } catch (error) {
        failures.push({ file: path.relative(ROOT, file), prompt: prompt.trim(), error: String(error) });
        console.error("Failed prompt in " + path.relative(ROOT, file) + ": " + String(error));
      }
    }
    if (changed) await fs.writeFile(file, source);
  }

  console.log("Image prompt scan complete: " + processed + " generated, " + failures.length + " failed.");
  if (failures.length) {
    console.error(JSON.stringify(failures, null, 2));
    process.exitCode = 1;
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
