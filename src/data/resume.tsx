import { Icons } from "@/components/icons";
import { FileTextIcon, HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Csharp } from "@/components/ui/svgs/csharp";
import ofLogo from "@/components/ui/of_profile.png";
import sihLogo from "@/components/ui/sih.png";
import bvLogo from "@/components/ui/bv.png";
import perpLogo from "@/components/ui/perp_photo.png";
import skillRecLogo from "@/components/ui/skill_rec_photo.png";
import funshikshaLogo from "@/components/ui/funshiksha_photo.png";

export const DATA = {
  name: "Shreya Jha",
  initials: "SJ",
  url: "https://github.com/meshreyy",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "Full-Stack Engineer building low-latency systems, AI applications, and developer tools.",
  summary:
    "Full-Stack Engineer focused on low-latency systems, AI products, and developer tools. Recently shipped a [Skill Recommendation System](/#projects) with TF-IDF and cosine similarity, placed in the Top 45 teams at SIH 2025, and merged a production feature during GSSoC 2025. Also climbed from ~Rank 500 to Top 10 in the TLE Eliminators competitive programming course.",
  avatarUrl: "/profile_photo.webp",
  skills: [
    { name: "C++", icon: Csharp },
    { name: "JavaScript" },
    { name: "TypeScript", icon: Typescript },
    { name: "Python", icon: Python },
    { name: "React", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
    { name: "FastAPI" },
    { name: "Tailwind CSS" },
    { name: "Prisma" },
    { name: "Postgres", icon: Postgresql },
    { name: "Supabase" },
    { name: "BigQuery" },
    { name: "Redis Streams" },
    { name: "Websockets" },
    { name: "Docker", icon: Docker },
    { name: "Git" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "/Shreya_Jha_Resume.pdf",
      icon: FileTextIcon,
      label: "Resume",
    },
  ],
  contact: {
    email: "iamjhashreya@gmail.com",
    tel: "+917014706401",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/meshreyy",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shreyajha02/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Shreyaa0207",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:iamjhashreya@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Ocean Friends",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Data Analytics Intern",
      
      logoUrl: ofLogo,
      start: "Oct 2025",
      end: "Present",
      description:
        "Worked on large-scale data pipelines using BigQuery, built automated reporting systems, and helped recover ~100k claims by identifying a critical data issue.",
    },
  ],
  education: [
    {
      school: "Banasthali Vidyapith University",
      href: "https://www.banasthali.org/",
      degree: "Bachelor of Computer Applications (BCA) · CGPA 8.6",
      logoUrl: bvLogo,
      start: "2023",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Perp CEX",
      href: "https://prep-cex-backend.vercel.app/",
      dates: "May 2026 - Jun 2026",
      active: true,
      description:
        "Built a low-latency, event-driven perpetual futures exchange using Express, Bun, Redis Streams, and PostgreSQL (Prisma). Implemented in-memory order matching with margin/position management, JWT auth, live Binance WebSocket market data ingestion, and real-time price-feed handling for liquidation logic — with an event-driven command flow (backend → engine → DB) using Redis consumer groups for durable order handling.",
      technologies: [
        "Express",
        "Bun",
        "Redis Streams",
        "PostgreSQL",
        "Prisma",
        "WebSockets",
        "JWT",
      ],
      links: [
        {
          type: "Website",
          href: "https://prep-cex-backend.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/meshreyy/prep_cex",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: perpLogo,
      video: "",
    },
    {
      title: "AI Skill Recommendation System",
      href: "https://career-compass-xi-ivory.vercel.app/",
      dates: "Feb 2026 - Apr 2026",
      active: true,
      description:
        "Python-based recommendation system that uses TF-IDF and cosine similarity to match user profiles against job requirements, recommending missing skills, relevant companies, and salary insights.",
      technologies: [
        "Python",
        "TF-IDF",
        "Cosine Similarity",
      ],
      links: [
        {
          type: "Website",
          href: "https://career-compass-xi-ivory.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://drive.google.com/file/d/1kT2bmfWKYw8GLTdctiWO3RejeOjAfTPx/view?usp=drive_link",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: skillRecLogo,
      video: "",
    },
    {
      title: "FunShiksha",
      href: "https://zesty-valkyrie-025e82.netlify.app/class-selection",
      dates: "Oct 2025 - Nov 2025",
      active: true,
      description:
        "Offline-first multilingual PWA for rural STEM education with dynamic translation and a teacher dashboard for progress tracking. Built for Smart India Hackathon 2025 (Top 45 nationwide) and delivered in 3–4 days with a 6-member team.",
      technologies: [
        "PWA",
        "React",
        "Multilingual",
        "Offline-first",
      ],
      links: [
        {
          type: "Website",
          href: "https://zesty-valkyrie-025e82.netlify.app/class-selection",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://docs.google.com/videos/d/1W_oHag32VRjUVw7pcY6Fx4RZJfFEIlVgn2zs_PvxwfM/edit?usp=drive_link",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: funshikshaLogo,
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Smart India Hackathon 2025",
      dates: "October - November 2025",
      location: "India",
      description:
        "Built FunShiksha, an offline-first multilingual PWA for rural STEM education with dynamic translation and a teacher dashboard. Selected among the Top 45 teams nationwide; delivered in 3–4 days with a 6-member team.",
      image: sihLogo,
      win: "Top 45 Nationwide",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://zesty-valkyrie-025e82.netlify.app/class-selection",
        },
        {
          title: "Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://docs.google.com/videos/d/1W_oHag32VRjUVw7pcY6Fx4RZJfFEIlVgn2zs_PvxwfM/edit?usp=drive_link",
        },
      ],
    },
  ],
} as const;
