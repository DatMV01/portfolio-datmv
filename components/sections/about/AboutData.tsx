import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";

export const certificates = [
  "AWS Certified Developer - Associate",
  "AWS Cloud Practitioner",
  "React Advanced Certificate",
  "AWS Certified Solutions Architect - Associate",
];

export const skills = [
  { src: "/assets/icons8-java-96.png", name: "Java" },
  { src: "/assets/icons8-spring-boot-96.png", name: "Spring" },
  { src: "/assets/icons8-react-96.png", name: "ReactJS" },
  { src: "/assets/icons8-nextjs-96.png", name: "NextJS" },
  { src: "/assets/icons8-nodejs-96.png", name: "NodeJS" },
  { src: "/assets/icons8-aws-96.png", name: "AWS" },
  { src: "/assets/icons8-docker-96.png", name: "Docker" },
  { src: "/assets/icons8-mysql-96.png", name: "MySQL" },
  { src: "/assets/icons8-solidity-96.png", name: "Solidity" },
  { src: "/assets/icons8-nestjs-96.png", name: "NestJS" },
  { src: "/assets/icons8-javascript-96.png", name: "JavaScript" },
  { src: "/assets/icons8-mongodb-96.png", name: "Mongo" },
  { src: "/assets/icons8-wordpress-96.png", name: "WordPress" },
];

export const aboutData = [
  {
    icon: <Award />,
    title: "Experience",
    content: "1+ Years Working",
  },
  {
    icon: <GraduationCap />,
    title: "Education",
    content: "B.Sc. in Software Engineering",
  },
  {
    icon: <BriefcaseBusiness />,
    title: "Projects",
    content: "5+ Completed",
  },
];
