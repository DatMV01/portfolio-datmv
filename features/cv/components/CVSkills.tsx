"use client";

import { Card } from "@/components";
import { cvData } from "@/constants";
import { useSearchParams } from "next/navigation";
import { Fragment } from "react";
import CVHeading from "./CVHeading";
import CVHighlightText from "./CVHighlightText";

const CVSkills = () => {
  const searchParams = useSearchParams();
  const generatePDF = searchParams.has("generatePDF");

  const skills = cvData.skills as SkillCategory[];

  return (
    <div className="flex w-full flex-col">
      <CVHeading level="h4" className="border-none text-sm uppercase">
        Skills
      </CVHeading>

      <div className="flex w-full flex-col gap-4 text-left text-sm">
        {skills.map((skill, i) => (
          <Fragment key={i}>
            <Card>
              <CVHeading level="h5" className="border-none text-sm">
                {skill.category}
              </CVHeading>

              <ul className="list-outside list-disc pl-4 text-xs leading-5">
                {skill.items.map((item, idx) => (
                  <li
                    key={idx}
                    dangerouslySetInnerHTML={{
                      __html: CVHighlightText(item),
                    }}
                  />
                ))}
              </ul>
            </Card>

            {generatePDF && i == 0 && <div className="page-break"></div>}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default CVSkills;
