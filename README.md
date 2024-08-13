# HTML to PDF

Utility function to generate a PDF from either HTML content or a URL using Puppeteer.

**Note:** This function allows converting an HTML string or a public URL into a PDF. It is designed to work with Node.js.

---

## **Installation**

```bash
npm install @dgymbook/html-to-pdf
```

---

## **Usage**

To generate a PDF using the `generatePdf` function:

```typescript
import { generatePdf } from "@dgymbook/html-to-pdf";

let options = { format: "A4" };
// Example of options with additional arguments //
// let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };

let data = { content: "<h1>Hello World</h1>" };
// or //
let data = { url: "https://example.com" };

generatePdf({ data, options }).then((pdfBuffer) => {
  console.log("PDF Buffer:", pdfBuffer);
});
```

---

### **`generatePdf` Method**

```typescript
generatePdf({ data, options }): Promise<Buffer>
```

#### **Parameters**

- **`data`** <`Object`> – File object should have one of the following properties:

  - **`content`** <`string`> – HTML content to render into the PDF.
  - **`url`** <`string`> – Any public URL of the page to be converted into the PDF.

- **`options`** <`Object`> – Optional Puppeteer PDF generation options. This object can include:
  - **`args`** <`Array<string>`> – Additional arguments to pass to the browser instance. See the list of [Chromium flags here](https://peter.sh/experiments/chromium-command-line-switches/). This will override the default arguments. Default: `['--no-sandbox', '--disable-setuid-sandbox']`.
  - **`path`** <`string`> – The file path to save the PDF to. If not provided, the PDF won't be saved anywhere.
  - **`format`** <`string`> – Paper format. Defaults to `'Letter'`.
  - **Other PDF options** – Refer to the [Puppeteer PDFOptions](https://pptr.dev/api/puppeteer.pdfoptions) for full details on other available options like `scale`, `printBackground`, `displayHeaderFooter`, etc.

#### **Return Value**

- **`Promise<Buffer>`** – A promise that resolves with the generated PDF as a buffer.

---

### **Example**

```typescript
let options = { format: "A4" };
let data = { content: "<h1>Hello World</h1>" };

generatePdf({ data, options }).then((pdfBuffer) => {
  console.log("PDF Buffer:", pdfBuffer);
});
```

---

### **Notes**

- The `generatePdf` function handles both HTML content and URLs. If neither `content` nor `url` is provided, an error will be thrown.

---

### **Readme**

This plugin is intended for use in Node.js environments to facilitate the conversion of HTML content or web pages into PDF format using Puppeteer. It provides flexibility through options and can be easily integrated into server-side applications.
