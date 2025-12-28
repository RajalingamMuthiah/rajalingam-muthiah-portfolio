"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { education } from "@/data/education";
import Link from "next/link";
import { BoxReveal } from "../reveal-animations";

const EducationSection = () => {
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
    <section id="education" className="w-full py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <Link href="#education">
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-transparent md:text-6xl font-bold",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20"
              )}
            >
              🎓 Education
            </h2>
          </BoxReveal>
        </Link>

        {/* Education Items */}
        <motion.div
          className="mt-12 space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="group relative border-l-2 border-blue-300 dark:border-blue-600 pl-8 pb-8 last:pb-0 rounded-lg overflow-hidden"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3.5 top-0 h-6 w-6 rounded-full bg-gradient-to-b from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-600 ring-4 ring-slate-100 dark:ring-slate-900 z-10" />

              {/* Semi-transparent Overlay Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-transparent dark:from-slate-950/50 dark:via-slate-900/40 dark:to-transparent rounded-lg" />

              {/* Content */}
              <div className="relative space-y-3 z-5">
                {/* Degree and Year */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                    {edu.degree} in {edu.specialization}
                  </h3>
                  {edu.year?.start && edu.year?.end && (
                    <span className="text-sm font-semibold text-gray-100 drop-shadow-md">
                      {edu.year.start} – {edu.year.end}
                    </span>
                  )}
                </div>

                {/* Institution */}
                <p className="text-lg font-semibold text-gray-100 drop-shadow-md">
                  {edu.institution}
                </p>

                {/* Focus/Specialization */}
                {edu.focus && (
                  <p className="text-sm text-gray-200 italic drop-shadow-md">
                    Focus: <span className="font-medium">{edu.focus}</span>
                  </p>
                )}

                {/* Coursework */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="mt-4 space-y-2 bg-black/20 dark:bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                    <p className="text-sm font-semibold text-white drop-shadow-md">
                      Relevant Coursework:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {edu.coursework.map((course, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-100 drop-shadow-md"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-300 flex-shrink-0" />
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mt-4 space-y-2 bg-black/20 dark:bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                    <p className="text-sm font-semibold text-white drop-shadow-md">
                      Achievements:
                    </p>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-100 flex items-start gap-2 drop-shadow-md"
                        >
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-300 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
