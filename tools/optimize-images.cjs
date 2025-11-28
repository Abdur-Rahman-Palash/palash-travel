// CommonJS version so it runs when package.json has "type": "module"
const fs = require('fs');
const path = require('path');
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('sharp is not installed. Run `npm install --save-dev sharp` and try again.');
  process.exit(1);
}

const srcDirs = [path.join(__dirname, '..', 'public', 'images'), path.join(__dirname, '..', 'src', 'assets', 'images')];
const sizes = [480, 768, 1200];

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const basename = path.basename(filePath, ext);
  const dir = path.dirname(filePath);
  // create webp
  await sharp(filePath).webp({ quality: 80 }).toFile(path.join(dir, `${basename}.webp`));
  // resized webp variants
  for (const w of sizes) {
    const outName = path.join(dir, `${basename}-${w}.webp`);
    await sharp(filePath).resize({ width: w }).webp({ quality: 75 }).toFile(outName);
  }
  console.log('Optimized', filePath);
}

(async () => {
  for (const d of srcDirs) {
    if (!fs.existsSync(d)) continue;
    const items = fs.readdirSync(d).filter(f => /\.(jpe?g|png)$/i.test(f));
    for (const it of items) {
      try {
        await processFile(path.join(d, it));
      } catch (err) {
        console.error('Failed to process', it, err.message);
      }
    }
  }
  console.log('Done.');
})();
