"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a recent 2023 graduate with a BS in{" "}
        <span className="font-medium">Mathematics</span> and{" "}
        <span className="font-medium">Economics</span>, and a minor in{" "}
        <span className="font-medium">Computer Science</span> from{" "}
        <span className="italic">Iowa State University</span>. My technical
        expertise spans <span className="italic">JavaScript</span>,{" "}
        <span className="italic">TypeScript</span>,{" "}
        <span className="italic">Java</span>,{" "}
        <span className="italic">React.js</span>, and{" "}
        <span className="italic">Node.js</span>. Throughout my academic career,
        I have been actively engaged in multiple internships, allowing me to
        contribute to a variety of projects and gain valuable experience. I am
        currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Software
        Developer.
      </p>
    </motion.section>
  );
}
