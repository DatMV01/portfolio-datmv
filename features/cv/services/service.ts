import chromium from "@sparticuz/chromium";
import { join } from "node:path";
import puppeteer from "puppeteer";
import puppeteerCore, { Browser } from "puppeteer-core";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

let _browser: Browser | null = null;

/**
 * Get browser instance (reuse between requests)
 */
async function getBrowser(): Promise<Browser> {
  if (_browser) return _browser;

  if (process.env.NODE_ENV === "production") {
    const remoteExecutablePath = join(
      process.cwd(),
      "node_modules/@sparticuz/chromium/bin"
    );

    _browser = await puppeteerCore.launch({
      args: chromium.args,
      headless: true,
      executablePath: await chromium.executablePath(remoteExecutablePath),
    });
  } else {
    _browser = await puppeteer.launch({
      headless: true,  
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  }

  return _browser;
}

/**
 * Generate a PDF buffer from the /cv?generatePDF page
 */
export async function generatePdf(baseUrl: string): Promise<Uint8Array> {
  const browser = await getBrowser();
  const page = await browser.newPage();

  try {
    await page.goto(baseUrl, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: false,
      preferCSSPageSize: true,
    });

    return pdfBuffer;
  } finally {
    await page.close();
  }
}
