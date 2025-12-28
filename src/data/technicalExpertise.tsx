export type TechnicalSkill = {
  id: string;
  name: string;
  category: "frontend" | "backend" | "data" | "devops";
  proficiency: "expert" | "advanced" | "intermediate" | "beginner";
  iconUrl: string;
  description?: string;
  animation?: {
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right";
  };
};

export type SkillCategory = {
  id: string;
  name: string;
  label: string;
  description: string;
  skills: TechnicalSkill[];
};

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const CUSTOM_ICONS = {
  powerbi: "https://img.icons8.com/color/96/power-bi.png",
  gsap: "https://gsap.com/images/logo.svg",
  opencv: "https://opencv.org/images/opencv-logo.png",
  mediapipe: "https://www.gstatic.com/devrel-devsite/prod/v2210deb7920cd4a55bd580441aa58e7853afc04b39a9d9ac4198e1cd7fbe04ef/tensorflow/images/favicon.ico",
  socketio: "https://socket.io/images/logo.svg",
  yolo: "https://raw.githubusercontent.com/ultralytics/assets/main/logo/Ultralytics_Logotype_Original.svg",
};

const frontendSkills: TechnicalSkill[] = [
  {
    id: "skill-001",
    name: "React.js",
    category: "frontend",
    proficiency: "expert",
    iconUrl: `${ICON_BASE}/react/react-original.svg`,
    description: "Component-based UI library for building interactive interfaces",
    animation: { delay: 0, duration: 0.5 },
  },
  {
    id: "skill-002",
    name: "Next.js",
    category: "frontend",
    proficiency: "expert",
    iconUrl: `${ICON_BASE}/nextjs/nextjs-original.svg`,
    description: "Full-stack React framework with SSR and SSG capabilities",
    animation: { delay: 0.1, duration: 0.5 },
  },
  {
    id: "skill-003",
    name: "TypeScript",
    category: "frontend",
    proficiency: "expert",
    iconUrl: `${ICON_BASE}/typescript/typescript-original.svg`,
    description: "Typed superset of JavaScript for safer, scalable code",
    animation: { delay: 0.2, duration: 0.5 },
  },
  {
    id: "skill-004",
    name: "JavaScript",
    category: "frontend",
    proficiency: "expert",
    iconUrl: `${ICON_BASE}/javascript/javascript-original.svg`,
    description: "Core language for interactive web development",
    animation: { delay: 0.3, duration: 0.5 },
  },
  {
    id: "skill-005",
    name: "Tailwind CSS",
    category: "frontend",
    proficiency: "expert",
    iconUrl: `${ICON_BASE}/tailwindcss/tailwindcss-plain.svg`,
    description: "Utility-first CSS framework for rapid UI development",
    animation: { delay: 0.4, duration: 0.5 },
  },
  {
    id: "skill-006",
    name: "HTML5",
    category: "frontend",
    proficiency: "expert",
    iconUrl: `${ICON_BASE}/html5/html5-original.svg`,
    description: "Semantic markup and modern web standards",
    animation: { delay: 0.5, duration: 0.5 },
  },
  {
    id: "skill-007",
    name: "CSS3",
    category: "frontend",
    proficiency: "advanced",
    iconUrl: `${ICON_BASE}/css3/css3-original.svg`,
    description: "Advanced styling, animations, and responsive design",
    animation: { delay: 0.6, duration: 0.5 },
  },
  {
    id: "skill-008",
    name: "Framer Motion",
    category: "frontend",
    proficiency: "advanced",
    iconUrl: CUSTOM_ICONS.gsap,
    description: "Production-ready animation library for React",
    animation: { delay: 0.7, duration: 0.5 },
  },
  {
    id: "skill-009",
    name: "GSAP",
    category: "frontend",
    proficiency: "advanced",
    iconUrl: CUSTOM_ICONS.gsap,
    description: "Professional animation platform for sophisticated interactions",
    animation: { delay: 0.8, duration: 0.5 },
  },
  {
    id: "skill-010",
    name: "Vue.js",
    category: "frontend",
    proficiency: "intermediate",
    iconUrl: `${ICON_BASE}/vuejs/vuejs-original.svg`,
    description: "Progressive JavaScript framework for UI components",
    animation: { delay: 0.9, duration: 0.5 },
  },
];

const backendSkills: TechnicalSkill[] = [
  {
    id: "skill-101",
    name: "Node.js",
    category: "backend",
    proficiency: "expert",
    iconUrl: `${ICON_BASE}/nodejs/nodejs-original.svg`,
    description: "JavaScript runtime for server-side development",
    animation: { delay: 0, duration: 0.5 },
  },
  {
    id: "skill-102",
    name: "Express.js",
    category: "backend",
    proficiency: "expert",
    iconUrl: `${ICON_BASE}/express/express-original.svg`,
    description: "Minimal and flexible web application framework",
    animation: { delay: 0.1, duration: 0.5 },
  },
  {
    id: "skill-103",
    name: "PostgreSQL",
    category: "backend",
    proficiency: "advanced",
    iconUrl: `${ICON_BASE}/postgresql/postgresql-original.svg`,
    description: "Powerful relational database with advanced features",
    animation: { delay: 0.2, duration: 0.5 },
  },
  {
    id: "skill-104",
    name: "MongoDB",
    category: "backend",
    proficiency: "advanced",
    iconUrl: `${ICON_BASE}/mongodb/mongodb-original.svg`,
    description: "NoSQL document database for flexible data storage",
    animation: { delay: 0.3, duration: 0.5 },
  },
  {
    id: "skill-105",
    name: "Prisma",
    category: "backend",
    proficiency: "advanced",
    iconUrl: `${ICON_BASE}/prisma/prisma-original.svg`,
    description: "Modern ORM for type-safe database access",
    animation: { delay: 0.4, duration: 0.5 },
  },
  {
    id: "skill-106",
    name: "Firebase",
    category: "backend",
    proficiency: "intermediate",
    iconUrl: `${ICON_BASE}/firebase/firebase-plain.svg`,
    description: "Backend-as-a-Service platform with real-time database",
    animation: { delay: 0.5, duration: 0.5 },
  },
  {
    id: "skill-107",
    name: "Socket.io",
    category: "backend",
    proficiency: "advanced",
    iconUrl: CUSTOM_ICONS.socketio,
    description: "Real-time bidirectional communication library",
    animation: { delay: 0.6, duration: 0.5 },
  },
];

const dataSkills: TechnicalSkill[] = [
  {
    id: "skill-201",
    name: "Python",
    category: "data",
    proficiency: "expert",
    iconUrl: `${ICON_BASE}/python/python-original.svg`,
    description: "Versatile language for data science and AI/ML",
    animation: { delay: 0, duration: 0.5 },
  },
  {
    id: "skill-202",
    name: "SQL",
    category: "data",
    proficiency: "expert",
    iconUrl: `${ICON_BASE}/mysql/mysql-original.svg`,
    description: "Database querying and manipulation",
    animation: { delay: 0.1, duration: 0.5 },
  },
  {
    id: "skill-203",
    name: "Pandas",
    category: "data",
    proficiency: "expert",
    iconUrl: `${ICON_BASE}/pandas/pandas-original.svg`,
    description: "Data manipulation and analysis library",
    animation: { delay: 0.2, duration: 0.5 },
  },
  {
    id: "skill-204",
    name: "NumPy",
    category: "data",
    proficiency: "advanced",
    iconUrl: "https://numpy.org/doc/stable/_static/numpylogo.svg",
    description: "Numerical computing with powerful array operations",
    animation: { delay: 0.3, duration: 0.5 },
  },
  {
    id: "skill-205",
    name: "OpenCV",
    category: "data",
    proficiency: "advanced",
    iconUrl: CUSTOM_ICONS.opencv,
    description: "Computer vision library for image processing",
    animation: { delay: 0.4, duration: 0.5 },
  },
  {
    id: "skill-206",
    name: "MediaPipe",
    category: "data",
    proficiency: "advanced",
    iconUrl: CUSTOM_ICONS.mediapipe,
    description: "Framework for building perception pipelines",
    animation: { delay: 0.5, duration: 0.5 },
  },
  {
    id: "skill-207",
    name: "Power BI",
    category: "data",
    proficiency: "advanced",
    iconUrl: CUSTOM_ICONS.powerbi,
    description: "Business analytics and data visualization tool",
    animation: { delay: 0.6, duration: 0.5 },
  },
  {
    id: "skill-208",
    name: "Matplotlib",
    category: "data",
    proficiency: "advanced",
    iconUrl: "https://matplotlib.org/_images/sphx_glr_logos2_003.png",
    description: "Python visualization library for charts and plots",
    animation: { delay: 0.7, duration: 0.5 },
  },
];

const devopsSkills: TechnicalSkill[] = [
  {
    id: "skill-301",
    name: "Git",
    category: "devops",
    proficiency: "expert",
    iconUrl: `${ICON_BASE}/git/git-original.svg`,
    description: "Version control system for collaborative development",
    animation: { delay: 0, duration: 0.5 },
  },
  {
    id: "skill-302",
    name: "GitHub",
    category: "devops",
    proficiency: "expert",
    iconUrl: `${ICON_BASE}/github/github-original.svg`,
    description: "Collaborative version control and repository hosting",
    animation: { delay: 0.1, duration: 0.5 },
  },
  {
    id: "skill-303",
    name: "Docker",
    category: "devops",
    proficiency: "intermediate",
    iconUrl: `${ICON_BASE}/docker/docker-original.svg`,
    description: "Containerization platform for consistent deployments",
    animation: { delay: 0.2, duration: 0.5 },
  },
  {
    id: "skill-304",
    name: "Vercel",
    category: "devops",
    proficiency: "expert",
    iconUrl: `${ICON_BASE}/vercel/vercel-original.svg`,
    description: "Platform for deploying Next.js and static sites",
    animation: { delay: 0.3, duration: 0.5 },
  },
  {
    id: "skill-305",
    name: "AWS",
    category: "devops",
    proficiency: "intermediate",
    iconUrl: `${ICON_BASE}/aws/aws-original.svg`,
    description: "Cloud computing services for scalable infrastructure",
    animation: { delay: 0.4, duration: 0.5 },
  },
  {
    id: "skill-306",
    name: "Linux",
    category: "devops",
    proficiency: "intermediate",
    iconUrl: `${ICON_BASE}/linux/linux-original.svg`,
    description: "Open-source operating system for server environments",
    animation: { delay: 0.5, duration: 0.5 },
  },
];

export const technicalExpertise: SkillCategory[] = [
  {
    id: "category-001",
    name: "Frontend",
    label: "Frontend Technologies",
    description: "Client-side technologies and frameworks for building interactive user interfaces",
    skills: frontendSkills,
  },
  {
    id: "category-002",
    name: "Backend",
    label: "Backend & Full-Stack",
    description: "Server-side technologies and databases for robust application infrastructure",
    skills: backendSkills,
  },
  {
    id: "category-003",
    name: "Data",
    label: "Data, Analytics & AI",
    description: "Tools and libraries for data analysis, visualization, and machine learning",
    skills: dataSkills,
  },
  {
    id: "category-004",
    name: "DevOps",
    label: "DevOps & Tools",
    description: "Development operations, version control, and deployment infrastructure",
    skills: devopsSkills,
  },
];

export default technicalExpertise;
