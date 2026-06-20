import { execSync } from 'child_process';
import { existsSync } from 'fs';

// Use puppeteer-core with system Chrome if available
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

// Simple approach: use Chrome headless CLI to take screenshots
const pages = [
  { url: 'http://localhost:4321/', out: 'screenshot-home.png', width: 1440, height: 900 },
  { url: 'http://localhost:4321/lecture/1-1', out: 'screenshot-lecture.png', width: 1440, height: 900 },
  { url: 'http://localhost:4321/students', out: 'screenshot-students.png', width: 1440, height: 900 },
];

for (const { url, out, width, height } of pages) {
  try {
    execSync(
      `"${chromePath}" --headless=new --disable-gpu --no-sandbox --window-size=${width},${height} --screenshot="${out}" "${url}"`,
      { cwd: process.cwd(), timeout: 15000 }
    );
    console.log(`✓ ${out}`);
  } catch (e) {
    console.error(`✗ ${out}:`, e.message.slice(0, 200));
  }
}
