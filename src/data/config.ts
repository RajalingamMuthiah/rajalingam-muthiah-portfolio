const config = {
  title: "I'm Huzaif | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Huzaif, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Huzaif, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Huzaif",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Huzaif Ahmed",
  email: "dev.huzaif@gmail.com",
  site: "https://imhuzaifportfolio.vercel.app",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    github: "https://github.com/huzaifahmedz",
  },
};
export { config };
