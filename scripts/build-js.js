// Concatenates the site's client JS into public/assets/js/bundle.js.
// Replaces the old hand-maintained bundle. Run: npm run build:js
// Dropped vs. the original bundle: Bootstrap JS (~80 KB) and Swiper (~154 KB).
// Bootstrap collapse/tab are replaced by collapse-tabs.js; Swiper was unused
// (the partner strip is a CSS marquee), so swiper-script.js is dropped too.
const fs = require('fs');
const path = require('path');

const jsDir = path.join(process.cwd(), 'public', 'assets', 'js');

// Order matters: jQuery first (script.js / video_embedded.js use `$`).
const parts = [
  'vendor/jquery.min.js',
  'collapse-tabs.js',
  'script.js',
  'submit-form.js',
  'video_embedded.js',
];

const out = parts
  .map((rel) => {
    const p = path.join(jsDir, rel);
    return `/* ==== ${rel} ==== */\n` + fs.readFileSync(p, 'utf8');
  })
  .join('\n\n');

fs.writeFileSync(path.join(jsDir, 'bundle.js'), out);
console.log(`bundle.js rebuilt from ${parts.length} parts (${out.length} bytes)`);
