import fs from "fs-extra";
import path from "path";
import { minify as minifyHTML } from "html-minifier-terser";
import { minify as minifyJS } from "terser";
import postcss from "postcss";
import cssnano from "cssnano";
import sharp from "sharp";

const srcDir = path.resolve("./src");
const distDir = path.resolve("./dist");

// 清空 dist
fs.removeSync(distDir);
fs.mkdirSync(distDir, { recursive: true });

// --- 1. 压缩 HTML ---
const htmlFile = path.join(srcDir, "index.html");
const html = fs.readFileSync(htmlFile, "utf-8");

const minifiedHTML = await minifyHTML(html, {
  collapseWhitespace: true,
  removeComments: true,
  minifyJS: true,
  minifyCSS: true,
});
fs.writeFileSync(path.join(distDir, "index.html"), minifiedHTML);
console.log("HTML 压缩完成");

// --- 2. 压缩 CSS ---
const cssSrcDir = path.join(srcDir, "styles");
const cssDistDir = path.join(distDir, "styles");
fs.mkdirSync(cssDistDir, { recursive: true });

for (const file of fs.readdirSync(cssSrcDir)) {
  if (file.endsWith(".css")) {
    const css = fs.readFileSync(path.join(cssSrcDir, file), "utf-8");
    const result = await postcss([cssnano]).process(css, { from: undefined });
    fs.writeFileSync(path.join(cssDistDir, file), result.css);
    console.log(`CSS 压缩完成: ${file}`);
  }
}

// --- 3. 压缩 JS ---
const jsSrcDir = path.join(srcDir, "js");
const jsDistDir = path.join(distDir, "js");
fs.mkdirSync(jsDistDir, { recursive: true });

for (const file of fs.readdirSync(jsSrcDir)) {
  if (file.endsWith(".js")) {
    const js = fs.readFileSync(path.join(jsSrcDir, file), "utf-8");
    const result = await minifyJS(js, { compress: true, mangle: true });
    fs.writeFileSync(path.join(jsDistDir, file), result.code);
    console.log(`JS 压缩完成: ${file}`);
  }
}

// --- 4. 图片转换 WebP ---
const imgSrcDir = path.join(srcDir, "images");
const imgDistDir = path.join(distDir, "images");
fs.mkdirSync(imgDistDir, { recursive: true });

for (const file of fs.readdirSync(imgSrcDir)) {
  const ext = path.extname(file).toLowerCase();
  if ([".png", ".jpg", ".jpeg"].includes(ext)) {
    const input = path.join(imgSrcDir, file);
    const output = path.join(imgDistDir, file.replace(ext, ".webp"));
    await sharp(input).webp({ quality: 80 }).toFile(output);
    console.log(`图片转换完成: ${file} -> ${path.basename(output)}`);
  } else {
    // 其他类型直接复制
    fs.copySync(path.join(imgSrcDir, file), path.join(imgDistDir, file));
  }
}

console.log("所有资源打包完成，输出目录: dist/");
