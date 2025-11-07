"use client";

import { Card } from "@/components";
import { cvData } from "@/constants";
import CVHeading from "./CVHeading";

const CVEducation = () => {
  const education = cvData.education as Education[];

  return (
    <div>
      <CVHeading level="h3" className="border-b border-gray-400 uppercase">
        Education
      </CVHeading>

      <div className="mt-4 space-y-4 text-sm">
        {education.map((e, i) => (
          <Card
            key={i}
            className="flex flex-col md:flex-row md:items-start md:justify-between"
          >
            <div>
              <h4 className="text-base font-semibold">{e.degree}</h4>
              <span className="text-sm text-gray-600">{e.school}</span>
            </div>

            <div className="text-sm text-gray-600">{e.date}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CVEducation;
