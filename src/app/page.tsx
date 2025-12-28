"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import ExperienceSection from "@/components/sections/experience";
import TechnicalExpertiseSection from "@/components/sections/technicalExpertise";
import EducationSection from "@/components/sections/education";

// Mark as dynamic to prevent static generation timeout with Spline
export const dynamic = 'force-dynamic';

function MainPage() {
  return (
    <>
      <SmoothScroll>
        <main className={cn("bg-slate-100 dark:bg-transparent")}>
          <div className="top-0 z-0 fixed w-full h-screen">
            <AnimatedBackground />
          </div>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <TechnicalExpertiseSection />
          <EducationSection />
          <ContactSection />
        </main>
      </SmoothScroll>
    </>
  );
}

export default MainPage;
