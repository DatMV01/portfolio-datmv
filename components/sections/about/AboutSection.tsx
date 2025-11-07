import { Card, Container } from "@/components";
import { assets } from "@/constants";
import clsx from "clsx";
import { List, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { aboutData, certificates, skills } from "./AboutData";
import SpinLogoTitle from "./SpinLogoTitle";

const CertificateCard = () => {
  return (
    <Card>
      <div className="flex items-center gap-2 font-semibold">
        <ShieldCheck />
        <span>Certificate</span>
      </div>
      <div>
        <ul className="list-outside list-disc space-y-1 px-5">
          {certificates.map((certificate) => (
            <li key={certificate}>{certificate}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

const SkillsCard = () => {
  return (
    <Card>
      <div className="flex items-center gap-2 font-semibold">
        <List />
        <span>Skills</span>
      </div>

      <div className="grid grid-cols-4 gap-2 md:grid-cols-10">
        {skills.map(({ src, name }) => (
          <p
            key={name}
            className={clsx(
              "flex flex-col items-center justify-center",
              "aspect-square w-full"
            )}
          >
            <Image
              src={src}
              alt={name}
              className="w-10"
              width={10}
              height={10}
            />
            <span>{name}</span>
          </p>
        ))}
      </div>
    </Card>
  );
};

const AboutSection = () => {
  return (
    <Container
      as="section"
      className="min-h-screen flex flex-col gap-4 justify-center items-center"
      id="about"
    >
      <h2 className="text-3xl md:text-4xl">About me</h2>

      <h3 className=" gap-2 text-3xl md:text-4xl">
        <span>Hi! I&apos;m Dat Mai 👋</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="relative mx-auto mb-10">
          <Image
            src={assets.images.avatar}
            alt="Profile"
            className="w-64 rounded-2xl shadow-md"
          />
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/3">
            <SpinLogoTitle />
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="px-4 text-center text-xl leading-8">
            I am a web developer from Ho Chi Minh City, VietNam with 1 year of
            experience in multiple companies like Microsoft, Tesla, and Apple.
          </p>

          <p className="hidden md:inline text-center text-xl leading-8">
            I am an experienced Frontend Developer with years of professional
            experience in building modern web applications. I’ve had the
            privilege of collaborating with great teams and contributing to
            successful projects.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              href="#contact"
              className={clsx(
                "block cursor-pointer h-12 w-35 text-white",
                "flex items-center justify-center gap-x-2 rounded-full ",
                "bg-linear-to-r from-purple-600 to-orange-500",
                "hover:scale-105 hover:shadow-md transition-transform duration-300"
              )}
            >
              <span>Contact Me</span>
              <FaArrowRight size={14} />
            </Link>

            {/* <a
            download
            href="/documents/cv.pdf"
            className={clsx(
              "block h-12 w-38",
              "flex items-center justify-center gap-x-2 rounded-full text-white",
              "bg-gradient-to-r from-orange-600 to-purple-500",
              "hover:scale-105 hover:shadow-md",
              "cursor-pointer transition-transform duration-300",
            )}
            >
              <span>My Resume</span>
              <Download />
            </a> */}

            <Link
              href="/cv"
              target="_blank"
              className={clsx(
                "block cursor-pointer h-12 w-35 text-white",
                "flex items-center justify-center gap-x-2 rounded-full ",
                "bg-linear-to-r from-purple-600 to-orange-500",
                "hover:scale-105 hover:shadow-md transition-transform duration-300"
              )}
            >
              <span>My CV</span>
              <FaExternalLinkAlt size={14} />
            </Link>
          </div>
        </div>
      </div>

      <div className="my-4 grid w-full gap-4 md:grid-cols-3">
        {aboutData.map(({ icon, title, content }, index) => (
          <Card key={index}>
            <div className="flex items-center gap-2 font-semibold">
              {icon}
              <span>{title}</span>
            </div>
            <div>{content}</div>
          </Card>
        ))}
      </div>

      <div className="flex w-full flex-col gap-4">
        <CertificateCard />

        <SkillsCard />
      </div>
    </Container>
  );
};

export default AboutSection;
