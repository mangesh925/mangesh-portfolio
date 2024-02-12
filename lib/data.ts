import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/docuchatter.png";
import rmtdevImg from "@/public/collab.png";
import wordanalyticsImg from "@/public/taskmate.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer Intern (GlobalBees)",
    location: "Remote",
    description: [
      "Developed an admin dashboard with React, implementing RESTful API integration for real-time data visualization, leading to a 20% boost in data accessibility and decision-making speed. ",
      "Collaborated on UIs for dashboard and CMS using React Hooks, enhancing user interaction and contributing to a 15% rise in daily active users. ",
      "Improved system performance by refining SQL queries and implementing Redis caching, reducing load times by 25% and enhancing system responsiveness.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2023 - July 2023",
  },
  {
    title:
      "Software Application Developer (Information Technology Services, ISU)",
    location: "Ames, IA",
    description: [
      "Coordinated a 5-member team to upgrade web applications leveraging React and Node.js to enhance admin and academic workflows, significantly improving key business workflows by 30%. ",
      "Enhanced security vulnerabilities and performance output by transitioning the project from JavaScript to TypeScript. ",
      "Assisted in optimizing a 90% acceleration in deployment process with Jenkins, enhancing CI/CD efficiency for front-end updates and improving site reliability. ",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "May 2022 - December 2022",
  },
  {
    title: "Front-End Developer (Thielen Health Center, ISU)",
    location: "Ames, IA",
    description: [
      "Built the RT-PCR test booking portal at Thielen Health Center using Java, Spring Boot, and React, improving UI. ",
      "Implemented a Java-based RESTful API for online scheduling, reducing phone appointments by 50%. ",
      "Created a responsive, ADA-compliant user interface, boosting portal usage by 40%.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "August 2020 - May 2021",
  },
] as const;

export const projectsData = [
  {
    title: "DocuChatter-AI",
    description:
      " Created a Next.js 13 & TypeScript-based SaaS with GPT-3.5 Turbo, enhancing PDF interactions by 40%, & incorporating tRPC, Zod, LangChain, Pinecone, Stripe, & shadcn-ui.",
    tags: ["React.js", "Next.js", "LangChain", "Pinecone", "Stripe"],
    imageUrl: corpcommentImg,
    githubUrl: "https://docuchatter.vercel.app/",
  },
  {
    title: "Collab",
    description:
      "Developed a Next.js 14, Tailwind CSS, & React-based collaborative whiteboarding tool with Clerk Auth & Convex for real-time features, enhancing remote teamwork.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Clerk-Auth"],
    imageUrl: rmtdevImg,
    githubUrl: "https://collab-app-kappa.vercel.app/",
  },
  {
    title: "TaskMate",
    description:
      "An AI-note taking app made with TypeScript, integrating GPT-3.5 Turbo for language processing and DALL·E API for image generation, with Firebase storage and Drizzle ORM for database management.",
    tags: ["Drizzle ORM", "Firebase", "SQL", "DALL·E"],
    imageUrl: wordanalyticsImg,
    githubUrl: "https://taskmate-ai.vercel.app/",
  },
] as const;

export const skillsData = [
  "Java",
  "JavaScript",
  "TypeScript",
  "Python",
  "React.js",
  "Next.js",
  "Node.js",
  "Git/GitHub",
  "HTML/CSS",
  "Tailwind CSS",
  "Bootstrap",
  "MongoDB",
  "Jenkins",
  "Redux",
  "Express",
  "PostgreSQL",
  "VSCode",
] as const;
