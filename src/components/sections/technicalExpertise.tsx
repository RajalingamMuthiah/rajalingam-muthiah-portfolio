"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { technicalExpertise } from "@/data/technicalExpertise";
import Link from "next/link";
import { BoxReveal } from "../reveal-animations";

const TechnicalExpertiseSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="technical-expertise" className="w-full py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <Link href="#technical-expertise">
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-4xl text-transparent md:text-6xl font-bold",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20"
              )}
            >
              🛠️ Technical Expertise
            </h2>
          </BoxReveal>
        </Link>

        {/* Categories Grid */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {technicalExpertise.map((category) => (
            <motion.div
              key={category.id}
              variants={categoryVariants}
              className="space-y-6 relative rounded-lg overflow-hidden"
            >
              {/* Subtle Overlay Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5 dark:from-slate-950/20 dark:via-transparent dark:to-slate-950/10 rounded-lg pointer-events-none z-0" />

              {/* Category Header */}
              <div className="relative z-10 space-y-2 px-4 py-3 bg-black/30 dark:bg-slate-900/40 rounded-lg backdrop-blur-sm border border-white/10 dark:border-white/5">
                <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                  {category.label}
                </h3>
                <p className="text-sm text-gray-100 drop-shadow-md">
                  {category.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    variants={skillVariants}
                    className="group relative"
                  >
                    <div className="flex flex-col items-center gap-3 rounded-lg border border-white/20 dark:border-white/10 p-4 transition-all duration-300 hover:border-white/40 dark:hover:border-white/20 hover:bg-white/10 dark:hover:bg-white/5 bg-black/20 dark:bg-slate-900/30 backdrop-blur-sm">
                      {/* Skill Icon */}
                      {skill.iconUrl ? (
                        <div className="h-8 w-8 relative">
                          <img
                            src={skill.iconUrl}
                            alt={skill.name}
                            className="object-contain w-full h-full drop-shadow-md"
                            loading="lazy"
                            onError={(e) => {
                              // Fallback to text if image fails
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        </div>
                      ) : (
                        <div className="h-8 w-8 flex items-center justify-center text-lg font-bold text-gray-100 drop-shadow-md">
                          {skill.name.charAt(0)}
                        </div>
                      )}

                      {/* Skill Name */}
                      <p className="text-xs font-semibold text-center text-white drop-shadow-md">
                        {skill.name}
                      </p>

                      {/* Proficiency Badge */}
                      <span
                        className={cn(
                          "text-xs font-medium px-2 py-1 rounded-full uppercase tracking-wide backdrop-blur-sm border",
                          skill.proficiency === "expert" &&
                            "bg-amber-500/30 text-amber-100 border-amber-400/50 dark:bg-amber-600/30 dark:text-amber-200 dark:border-amber-500/50",
                          skill.proficiency === "advanced" &&
                            "bg-blue-500/30 text-blue-100 border-blue-400/50 dark:bg-blue-600/30 dark:text-blue-200 dark:border-blue-500/50",
                          skill.proficiency === "intermediate" &&
                            "bg-slate-500/30 text-slate-100 border-slate-400/50 dark:bg-slate-600/30 dark:text-slate-200 dark:border-slate-500/50",
                          skill.proficiency === "beginner" &&
                            "bg-gray-500/30 text-gray-100 border-gray-400/50 dark:bg-gray-600/30 dark:text-gray-200 dark:border-gray-500/50"
                        )}
                      >
                        {skill.proficiency}
                      </span>

                      {/* Tooltip */}
                      {skill.description && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black/90 dark:bg-slate-950/95 text-gray-100 text-xs rounded px-3 py-2 whitespace-normal max-w-xs z-20 backdrop-blur-sm border border-white/20 drop-shadow-lg">
                          {skill.description}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalExpertiseSection;
