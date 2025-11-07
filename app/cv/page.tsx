"use client";

import {
  CVAvatar,
  CVContact,
  CVEducation,
  CVExperience,
  CVPdfButton,
  CVProjects,
  CVSkills,
} from "@/features/cv";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";

export default function CVPage() {
  const searchParams = useSearchParams();
  const generatePDF = searchParams.has("generatePDF");

  const pdfMode = generatePDF ? "generate" : "normal";

  return (
    <main
      className={clsx(
        "min-h-screen bg-white font-sans text-black",
        pdfMode == "generate" && "p-2",
        pdfMode == "normal" && " p-4"
      )}
    >
      <div
        className={clsx(
          "mx-auto grid max-w-[794px] rounded-md border md:grid-cols-3",
          pdfMode == "generate" && "border-none",
          pdfMode == "normal" && "border-border"
        )}
      >
        <aside
          aria-label="Sidebar with contact and skills"
          className="flex flex-col gap-4 p-4 border-border border-r md:col-span-1"
        >
          <CVAvatar />
          <CVPdfButton />
          <CVContact />
          <CVSkills />
        </aside>

        <section className="flex flex-col gap-4 p-4 md:col-span-2">
          <CVExperience />
          <CVProjects />
          <CVEducation />
        </section>
      </div>
    </main>
  );
}
