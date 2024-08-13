import puppeteer, { type PDFOptions } from "puppeteer";

type Props = {
  data: { content: string } | { url: string };
  options?: PDFOptions;
};

async function generatePdf({ data, options }: Props) {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  // Load content or navigate to URL
  if ("content" in data) {
    await page.setContent(data.content, { waitUntil: "networkidle0" });
  } else if ("url" in data) {
    await page.goto(data.url, { waitUntil: "networkidle0" });
  } else {
    throw new Error("Either 'content' or 'url' must be provided.");
  }

  // Generate PDF
  const pdf = await page.pdf(options);
  await browser.close();
  return pdf;
}

export { generatePdf };
