"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { experiences } from "@/data/experience";
import Link from "next/link";
import { BoxReveal } from "../reveal-animations";

const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="w-full py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <Link href="#experience">
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-transparent md:text-6xl font-bold",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20"
              )}
            >
              💼 Experience
            </h2>
          </BoxReveal>
        </Link>

        {/* Experience Items */}
        <motion.div
          className="mt-12 space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group relative border-l-2 border-slate-400 dark:border-slate-600 pl-8 pb-8 last:pb-0 rounded-lg overflow-hidden"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3.5 top-0 h-6 w-6 rounded-full bg-gradient-to-b from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 ring-4 ring-slate-100 dark:ring-slate-900 z-10" />

              {/* Semi-transparent Overlay Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent dark:from-slate-950/40 dark:via-slate-900/30 dark:to-transparent rounded-lg" />

              {/* Content */}
              <div className="relative space-y-2 z-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-[22px] md:text-[22px] font-bold text-white drop-shadow-lg">
                    {exp.jobTitle}
                  </h3>
                  <span className="text-sm font-semibold text-gray-100 drop-shadow-md uppercase tracking-wide">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-lg font-semibold text-gray-100 drop-shadow-md">
                  {exp.company}
                </p>

                <p className="text-sm text-gray-200 drop-shadow-md">
                  {exp.period.start} – {exp.period.end}
                </p>

                {/* Description Bullets */}
                <ul className="mt-4 space-y-2 bg-black/20 dark:bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                  {exp.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-100 flex items-start gap-3 drop-shadow-md"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 rounded-full bg-black/30 dark:bg-black/40 px-3 py-1.5 text-xs font-medium text-white drop-shadow-md border border-white/20 dark:border-white/10 backdrop-blur-sm"
                    >
                      {skill.icon && <span className="text-sm">{skill.icon}</span>}
                      {skill.title}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
