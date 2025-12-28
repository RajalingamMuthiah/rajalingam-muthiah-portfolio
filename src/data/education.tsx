export type EducationEntry = {
  id: string;
  degree: string;
  institution: string;
  specialization?: string;
  focus?: string;
  coursework: string[];
  duration?: string;
  year?: {
    start?: string;
    end?: string;
  };
  achievements?: string[];
  animation?: {
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right";
  };
};

export const education: EducationEntry[] = [
  {
    id: "edu-001",
    degree: "Master of Science (M.S.)",
    institution: "University",
    specialization: "Data Science",
    focus: "Machine Learning & Statistical Analysis",
    coursework: [
      "Advanced Statistics & Probability",
      "Machine Learning & Deep Learning",
      "Data Visualization & Analytics",
      "Statistical Methods for Data Science",
      "Python for Data Analysis",
      "Database Management Systems",
      "Big Data Technologies",
      "Natural Language Processing",
    ],
    duration: "2 Years",
    year: {
      start: "2021",
      end: "2023",
    },
    achievements: [
      "Specialized in machine learning applications and statistical analysis",
      "Developed expertise in Python ecosystem for data science",
      "Completed capstone project on predictive modeling",
    ],
    animation: {
      delay: 0,
      duration: 0.6,
      direction: "up",
    },
  },
  {
    id: "edu-002",
    degree: "Bachelor of Science (B.S.)",
    institution: "University",
    specialization: "Computer Science",
    focus: "Software Development & Web Technologies",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Web Technologies & Development",
      "Software Engineering",
      "Computer Networks",
      "System Design",
      "Discrete Mathematics",
    ],
    duration: "4 Years",
    year: {
      start: "2017",
      end: "2021",
    },
    achievements: [
      "Strong foundation in computer science fundamentals",
      "Hands-on experience with web development technologies",
      "Developed multiple full-stack projects",
    ],
    animation: {
      delay: 0.2,
      duration: 0.6,
      direction: "up",
    },
  },
];

export default education;
