/**
 * Starts headless Chrome and connects puppeteer to it, retrying a few times:
 * on GitHub's runners Chrome sometimes dies right after starting, which made
 * the checks fail for no reason related to the site.
 * Returns { chrome, browser }; call `await browser.disconnect(); await chrome.kill();` when done.
 */
const puppeteer = require("puppeteer-core");
const chromeLauncher = require("chrome-launcher");

const FLAGS = [
  "--headless=new",
  // CI only: no user namespaces for the sandbox on Ubuntu runners, and a small /dev/shm.
  ...(process.env.CI ? ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"] : []),
];

async function launchChrome(attempts = 3) {
  let lastError;
  for (let i = 1; i <= attempts; i++) {
    let chrome;
    try {
      chrome = await chromeLauncher.launch({ chromeFlags: FLAGS });
      const browser = await puppeteer.connect({ browserURL: `http://127.0.0.1:${chrome.port}` });
      return { chrome, browser };
    } catch (err) {
      lastError = err;
      console.warn(`Chrome start failed (attempt ${i}/${attempts}): ${err.code || err.message}`);
      try {
        await chrome?.kill();
      } catch {
        /* already gone */
      }
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
  throw lastError;
}

module.exports = { launchChrome };
