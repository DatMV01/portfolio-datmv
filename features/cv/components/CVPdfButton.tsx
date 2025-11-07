"use client";

import clsx from "clsx";
import { Download, FileText } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Fragment } from "react/jsx-runtime";

/* -------------------- Utility Functions -------------------- */
const handleDownload = async (fileUrl: string): Promise<void> => {
  if (!fileUrl) return;

  const res = await fetch(fileUrl);
  if (!res.ok) throw new Error(`Failed to fetch ${fileUrl}`);

  const blob = await res.blob();
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;

  const fileName = fileUrl.split("/").pop()?.split("?")[0] ?? "download.pdf";
  a.download = decodeURIComponent(fileName);

  a.click();
  window.URL.revokeObjectURL(url);
};

const handleCreatePDF = async (): Promise<void> => {
  const res = await fetch("/api/generate-pdf");
  if (!res.ok) throw new Error("Failed to generate PDF");

  const blob = await res.blob();
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;

  const timestamp = new Date().toLocaleString("en-GB").replace(/[/:, ]+/g, "_");
  const fileName = `DatMaiVan_Developer_CV_${timestamp}.pdf`;

  a.download = decodeURIComponent(fileName);
  a.click();

  window.URL.revokeObjectURL(url);
};

const CVPdfButton = () => {
  const searchParams = useSearchParams();

  const createPDF = searchParams.has("createPDF");
  const generatePDF = searchParams.has("generatePDF");

  return (
    <Fragment>
      {!generatePDF && (
        <button
          onClick={() =>
            handleDownload(
              process.env.NEXT_PUBLIC_CV_HREF || "/documents/DatMaiVan-CV.pdf"
            )
          }
          className={clsx(
            "rounded-md border",
            "flex items-center justify-center gap-2 p-2",
            "text-sky-400",
            "hover:border-sky-500 hover:text-sky-500"
          )}
        >
          <Download size={18} /> <span>Download</span>
        </button>
      )}
      {!generatePDF && createPDF && (
        <button
          onClick={() => handleCreatePDF()}
          className={clsx(
            "rounded-md border",
            "flex items-center justify-center gap-1 p-2",
            "text-green-400",
            "hover:border-green-500 hover:text-green-500"
          )}
        >
          <FileText size={18} />
          <span>Create PDF</span>
        </button>
      )}
    </Fragment>
  );
};

export default CVPdfButton;
