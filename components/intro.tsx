"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/portrait.png"
              alt="Jonathan portrait"
              width="192"
              height="192"
              quality="80"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white border-opacity-40 shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute  text-3xl bottom-0 -right-[0.5rem]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
    </section>
  );
}
