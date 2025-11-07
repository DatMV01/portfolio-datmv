"use client";

import { assets, cvData } from "@/constants";
import Image from "next/image";

const CVAvatar = () => {
  const profile = cvData.profile as Profile;

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="relative h-40 w-40">
        <Image
          src={assets.images.avatar}
          alt="Project Image"
          fill
          className="object-cover rounded-full object-[50%_25%]"
        />
      </div>

      <h1 className="text-2xl font-semibold">{profile.name}</h1>
      <p className="text-center text-xl text-gray-600">{profile.title}</p>
      <p className="max-w-xs text-center text-sm leading-relaxed text-gray-700">
        {profile.summary}
      </p>
    </div>
  );
};
 
export default CVAvatar;
