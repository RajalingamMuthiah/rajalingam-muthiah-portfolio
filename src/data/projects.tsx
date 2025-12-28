import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  mediaPipe: {
    title: "MediaPipe",
    bg: "black",
    fg: "white",
    icon: (
      <span className="font-semibold" aria-label="MediaPipe">
        MP
      </span>
    ),
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: (
      <span className="font-semibold" aria-label="Bootstrap">
        BS
      </span>
    ),
  },
  Dialogflow: {
    title: "Dialogflow",
    bg: "black",
    fg: "white",
    icon: (
      <span className="font-semibold" aria-label="Dialogflow">
        DF
      </span>
    ),
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: (
      <span className="font-semibold" aria-label="PHP">
        PHP
      </span>
    ),
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "ai-codegen",
    category: "AI & ML",
    title: "VIRTUAL WATCH AI",
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    screenshots: ["1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mediaPipe,
      ],
    },
    live: "https://github.com/RajalingamMuthiah/Real-Time-Hand-Tracking-Virtual-Watch-Overlay.git",
    github: "https://github.com/RajalingamMuthiah/Real-Time-Hand-Tracking-Virtual-Watch-Overlay.git",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Developed a computer vision application using MediaPipe to detect and track hand landmarks and wrist coordinates from a live camera feed
            Implemented real-time hand tracking and pose estimation to accurately overlay a virtual watch on the user’s wrist
            Ensured precise alignment, scale adjustment, and smooth responsiveness of the virtual watch for an enhanced user experience
            Optimized performance for low-latency real-time processing using Python-based CV pipelines

          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">AI-Powered Generation</TypographyH3>
          <p className="font-mono mb-2">
            Leverage cutting-edge language models to generate code snippets,
            complete functions, and even entire applications from simple descriptions.
            Support for 20+ programming languages and all major frameworks.
          </p>
        </div>
      );
    },
  },
  {
    id: "blockchain-nft",
    category: "Web3",
    title: "Digital Animal care & Emergency Response Platform",
    src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    screenshots: ["1.png", "2.png"],
    live: "https://github.com/RajalingamMuthiah",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.aceternity,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Developed a full-stack digital platform connecting pet owners, 
            veterinary doctors, and rescue teams to reduce response time in animal emergencies. 
            Integrated Whatsapp API for instant alerts and implemented a Dialogflow chatbot 
            for animal care recommendations and remote veterinary consultations. 
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&h=600&fit=crop",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Blockchain Integration</TypographyH3>
          <p className="font-mono mb-2">
            Developed a full-stack digital platform connecting pet owners, 
            veterinary doctors, and rescue teams to reduce response time in animal emergencies. 
            Integrated Whatsapp API for instant alerts and implemented a Dialogflow chatbot 
            for animal care recommendations and remote veterinary consultations. 
          </p>
        </div>
      );
    },
  },
  {
    id: "collab-whiteboard",
    category: "Confidential",
    title: "AyuSangam---fitness-health-tracker-demo",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://github.com/RajalingamMuthiah/AyuSangam---fitness-health-tracker-demo.git",
    github: "https://github.com/RajalingamMuthiah/AyuSangam---fitness-health-tracker-demo.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.Dialogflow,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.express,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            FastAPI | PostgreSQL | Wearable Integration Gym workout tracker with HRV/RHR/sleep
            analytics from Whoop/Garmin wearables. 
            Real-time progress dashboards. 
            🔒 Personal Project - Live demo available on request some of the file is uploaded in github for ur reference
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Real-Time Collaboration</TypographyH3>
          <p className="font-mono mb-2">
            🔒 Personal Project - Live demo available on request some of the file is uploaded in github for ur reference
          </p>
        </div>
      );
    },
  },
  {
    id: "vr-visualizer",
    category: "Confidential",
    title: "external-examiner-management-system-demo",
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    screenshots: ["1.png"],
    live: "https://github.com/RajalingamMuthiah/external-examiner-management-system-demo.git",
    github: "https://github.com/RajalingamMuthiah/external-examiner-management-system-demo.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.spline,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.php,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            PHP | MySQL | Multi-Role Dashboards Educational platform with Admin/Principal/Teacher/VP/HOD dashboards for exam scheduling and examiner assignment. 🔒 personal Confidential - Demo available on request someof the demo file has been uploaded to this github
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">WebXR Integration</TypographyH3>
          <p className="font-mono mb-2">
            🔒 Personal Project - Live demo available on request some of the file is uploaded in github for ur reference
          </p>
        </div>
      );
    },
  }
  // {
  //   id: "neural-playground",
  //   category: "AI & ML",
  //   title: "Neural Playground",
  //   src: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
  //   screenshots: ["1.png", "2.png", "3.png", "4.png"],
  //   live: "https://neural-playground-demo.vercel.app",
  //   github: "https://github.com/dummy/neural-playground",
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.react,
  //       PROJECT_SKILLS.tailwind,
  //       PROJECT_SKILLS.chakra,
  //     ],
  //     backend: [
  //       PROJECT_SKILLS.node,
  //       PROJECT_SKILLS.python,
  //       PROJECT_SKILLS.mongo,
  //       PROJECT_SKILLS.express,
  //     ],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           Neural Playground is an interactive web-based tool for building,
  //           training, and visualizing neural networks. Drag-and-drop layers, adjust
  //           hyperparameters in real-time, and watch your network learn with live
  //           visualization of weights, activations, and gradients. Perfect for education
  //           and experimentation.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow
  //           images={[
  //             "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
  //             "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Interactive Training</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Visualize how neural networks learn. See activations flow through layers,
  //           watch loss curves update in real-time, and experiment with different
  //           architectures. Built with TensorFlow.js for browser-based computation.
  //         </p>
  //       </div>
  //     );
  //   },
  // },
  // {
  //   id: "retro-emulator",
  //   category: "Gaming",
  //   title: "RetroArcade",
  //   src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
  //   screenshots: ["1.png"],
  //   live: "https://retroarcade-demo.vercel.app",
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.js,
  //       PROJECT_SKILLS.react,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.tailwind,
  //       PROJECT_SKILLS.framerMotion,
  //     ],
  //     backend: [
  //       PROJECT_SKILLS.node,
  //       PROJECT_SKILLS.express,
  //       PROJECT_SKILLS.firebase,
  //     ],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           RetroArcade is a web-based emulator for classic arcade games from the
  //           80s and 90s. Play original ROMs in your browser with authentic pixel-perfect
  //           rendering, CRT shader effects, and controller support. Features include
  //           save states, rewind functionality, and online leaderboards.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow
  //           images={[
  //             "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
  //             "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Classic Games Library</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Play hundreds of retro titles with accurate emulation. Customizable
  //           controls, CRT scanline effects, and authentic sound synthesis bring
  //           the nostalgia of arcade gaming to your browser.
  //         </p>
  //       </div>
  //     );
  //   },
  // },
];
export default projects;
