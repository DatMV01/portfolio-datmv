import { headers } from "next/headers";
import { generatePdf } from "@/features/cv/index.server";

export async function GET() {
  const headerList = await headers();
  const host = headerList.get("host") || "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  try {
    const pdfBuffer = await generatePdf(`${baseUrl}/cv?generatePDF`);

    return new Response(Buffer.from(pdfBuffer), {
      headers: {
        "Content-Type": "application/pdf",
      },
    });
  } catch (error) {
    console.error("❌ PDF generation error:", error);
    return new Response("Failed to generate PDF", { status: 500 });
  }
}
