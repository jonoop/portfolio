"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";

export default function About() {
  const ref = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After completing my bachelor&apos;s degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to follow my
        true passion for programming. I taught myself{" "}
        <span className="font-medium">C++ and algorithms</span>,and further
        developed my skills in{" "}
        <span className="font-medium">full-stack web development</span>. The
        aspect of programming I enjoy most is{" "}
        <span className="italic">problem-solving</span> - there&apos;s a
        thrilling sense of accomplishment in cracking tough challenges. My
        technical forte includes
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . and I&apos;m proficient in TypeScript and Prisma. I&apos;m always
        eager to learn and adapt to new technologies. At present, I&apos;m on
        the lookout for opportunities in
        <span className="font-medium"> remote software development</span>.
        I&apos;m also open to freelance work.
      </p>

      <p>
        <span className="italic">Outside of coding</span>, my interests include
        reading, watching films, and staying active. I&apos;m particularly fond
        of
        <span className="font-medium"> traveling</span>, especially when it
        involves creating memories with{" "}
        <span className="italic">my family.</span>
      </p>
    </motion.section>
  );
}
