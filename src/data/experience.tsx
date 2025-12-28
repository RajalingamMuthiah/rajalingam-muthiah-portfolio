import { ReactNode } from "react";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiPython,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export type ExperienceSkill = {
  title: string;
  icon: ReactNode;
};

export type Experience = {
  id: string;
  jobTitle: string;
  company: string;
  employmentType: string;
  duration: string;
  period: {
    start: string;
    end: string;
  };
  description: string[];
  skills: ExperienceSkill[];
  animation?: {
    delay?: number;
    duration?: number;
    stagger?: number;
  };
};

export const experiences: Experience[] = [
  {
    id: "exp-001",
    jobTitle: "UI/UX Developer & Frontend Engineer",
    company: "Tata Consultancy Services (TCS)",
    employmentType: "Full-time",
    duration: "2+ Years",
    period: {
      start: "2023",
      end: "Present",
    },
    description: [
      "Designed and developed responsive, interactive web applications using React and Next.js",
      "Built scalable component libraries and design systems with Tailwind CSS and Shadcn UI",
      "Implemented smooth animations and micro-interactions using GSAP and Framer Motion",
      "Optimized web performance and accessibility (A11y) standards",
      "Collaborated with designers and product managers to translate wireframes into pixel-perfect implementations",
      "Created real-time applications using Socket.io and modern state management patterns",
    ],
    skills: [
      { title: "React.js", icon: <RiReactjsFill /> },
      { title: "Next.js", icon: <RiNextjsFill /> },
      { title: "TypeScript", icon: <SiTypescript /> },
      { title: "Tailwind CSS", icon: <SiTailwindcss /> },
      { title: "Framer Motion", icon: <TbBrandFramerMotion /> },
    ],
    animation: {
      delay: 0,
      duration: 0.6,
      stagger: 0.1,
    },
  },
  {
    id: "exp-002",
    jobTitle: "Data Analyst",
    company: "Tata Consultancy Services (TCS)",
    employmentType: "Full-time",
    duration: "1+ Year",
    period: {
      start: "July 2022",
      end: "July 2023",
    },
    description: [
      "Analyzed large datasets using Python (Pandas, NumPy) and SQL",
      "Developed interactive dashboards and reports in Power BI",
      "Created data visualizations to communicate insights to non-technical stakeholders",
      "Performed statistical analysis and predictive modeling",
      "Automated data extraction and ETL pipelines using Python scripts",
      "Supported data-driven decision-making across business teams",
    ],
    skills: [
      { title: "Python", icon: <SiPython /> },
      { title: "SQL", icon: <SiPostgresql /> },
      { title: "Power BI", icon: null },
    ],
    animation: {
      delay: 0.2,
      duration: 0.6,
      stagger: 0.1,
    },
  },
  {
    id: "exp-003",
    jobTitle: "Workflow Analyst & Designer",
    company: "Tata Consultancy Services (TCS)",
    employmentType: "Full-time",
    duration: "1 Year",
    period: {
      start: "July 2021",
      end: "July 2022",
    },
    description: [
      "Created UI graphics, logos, and workflow visualizations using Adobe Illustrator & Photoshop",
      "Designed visual narratives and documentation for internal tools and processes",
      "Maintained design consistency across multiple platforms and applications",
      "Collaborated with stakeholders to translate requirements into visual designs",
      "Established and documented design guidelines and best practices",
    ],
    skills: [
      { title: "UI Design", icon: null },
      { title: "Adobe Creative Suite", icon: null },
      { title: "Visual Documentation", icon: null },
    ],
    animation: {
      delay: 0.4,
      duration: 0.6,
      stagger: 0.1,
    },
  },
];

export default experiences;
