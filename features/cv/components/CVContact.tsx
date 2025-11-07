"use client";

import { cvData } from "@/constants";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import CVHeading from "./CVHeading";

const CVContact = () => {
  const profile = cvData.profile as Profile;

  return (
    <div className="flex w-full flex-col text-sm">
      <CVHeading level="h4" className="border-none uppercase">
        Contact
      </CVHeading>

      <ul className="border-border flex flex-col gap-1 rounded-md border-2 p-4">
        {[
          {
            icon: <MapPin size={16} />,
            content: <span>{profile.location}</span>,
          },
          {
            icon: <Mail size={16} />,
            content: <a href={`mailto:${profile.email}`}>{profile.email}</a>,
          },
          {
            icon: <Phone size={16} />,
            content: <a href={`tel:${profile.phone}`}>{profile.phone}</a>,
          },
          {
            icon: <Globe size={16} />,
            content: (
              <a href={profile.website} target="_blank" rel="noreferrer">
                {profile.website}
              </a>
            ),
          },
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            {item.icon}
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CVContact;
