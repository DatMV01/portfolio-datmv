"use client";

import { Card } from "@/components";
import { cvData } from "@/constants";
import CVHeading from "./CVHeading";
import CVHighlightText from "./CVHighlightText";

const CVExperience = () => {
  const experience = cvData.experience as Experience[];

  return (
    <div>
      <CVHeading level="h3" className="border-b border-gray-400 uppercase">
        Experience
      </CVHeading>

      <div className="mt-4 space-y-4">
        {experience.map((exp, idx) => (
          <Card key={idx}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h4 className="text-base font-semibold">{exp.role}</h4>
                <span className="text-sm text-gray-600">@ {exp.company}</span>
              </div>
              <div className="mt-1 text-sm text-gray-600 md:mt-0">
                {exp.date}
              </div>
            </div>
            <ul className="mt-3 list-outside list-disc space-y-1 pl-4 text-sm text-gray-700">
              {exp.bullets.map((b, i) => (
                <li
                  key={i}
                  dangerouslySetInnerHTML={{ __html: CVHighlightText(b) }}
                />
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CVExperience;
