import { Card } from "@/components";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const CustomLink = ({
  icon,
  link,
  text,
  className,
}: {
  icon?: ReactNode;
  link: string;
  text: string;
  className?: string;
}) => {
  return (
    <Link
      href={link}
      className={clsx(
        "group inline-flex items-center gap-2",
        "border-border rounded-md border",
        "p-2 hover:font-semibold hover:border-foreground/50",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {text}
    </Link>
  );
};

const Project = ({
  image = "/projects/default.jpg",
  title = "Project Title",
  desc = "Project description",
  demoLink = "#",
  githubLink = "#",
}: {
  image?: string;
  title?: string;
  desc?: string;
  demoLink?: string;
  githubLink?: string;
}) => {
  return (
    <Card className="flex flex-col gap-2">
      <div className="relative aspect-video w-full rounded-md overflow-hidden">
        <Image src={image} alt="Project Image" fill className="object-cover" />
      </div>

      <h4 className="text-xl font-semibold">{title}</h4>
      <p>{desc}</p>

      <div className="flex w-full items-center justify-center gap-4">
        <CustomLink
          icon={
            <FiExternalLink className="stroke-muted-foreground group-hover:stroke-foreground" />
          }
          link={demoLink}
          text="Demo"
        />

        <CustomLink
          icon={
            <FiGithub className="stroke-muted-foreground group-hover:stroke-foreground" />
          }
          link={githubLink}
          text="Github"
        />
      </div>
    </Card>
  );
};

export default Project;
