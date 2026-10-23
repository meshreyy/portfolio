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
import interstateLogo from "@/components/ui/interstate.png";

export const DATA = {
  name: "Shreya Jha",
  initials: "SJ",
  url: "https://github.com/meshreyy",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "Full-stack engineer building customer-facing products and the backend systems behind them—from multi-chain trading interfaces to data pipelines and real-time services.",
  summary:
    "I like working across the product: understanding where a workflow is frustrating, building the interface, and following the data through the services behind it. At [Interstate](https://interstate.trade/landing), I built a multi-chain Trenches experience so users can scan Solana, BNB, Base, and Robinhood tokens together, and worked across React, Go, Redis, REST/WebSocket APIs, and EVM data pipelines. I have also built an idempotent wallet-ingestion pipeline and resumable ERC-20 balance-backfill tooling. Outside work, I am building a [perpetual futures exchange](/#projects) and an AI-based skill recommendation project.",
  avatarUrl: "/profile_photo.webp",
  skills: [
    { name: "C++", icon: Csharp },
    { name: "Go" },
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
      href: "/Shreya_Jha.pdf",
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
      company: "Interstate",
      href: "https://interstate.trade/landing",
      badges: [],
      location: "Remote",
      title: "Full Stack Engineer",
      logoUrl: interstateLogo,
      start: "July 2026",
      end: "Present",
      description:
        "Built product features and backend systems across Interstate's multi-chain trading experience. The work spans React interfaces, Go indexers, Redis, token services, and REST/WebSocket APIs.",
      highlights: [
        "Built a multi-chain Trenches experience combining live Solana, BNB, Base, and Robinhood feeds, so users can scan tokens across chains without switching views. Kept filters, trade routes, and quick-buy amounts chain-specific.",
        "Added verified quote-token badges to trade pages, hiding native-token badges and linking to a quote asset's chart only when candle data is available.",
        "Connected Go indexers, Redis, token services, REST/WebSocket APIs, and React clients to preserve holder-count provenance across four EVM chains.",
        "Built an idempotent ingestion pipeline for 1,064 KOL wallets, using strict address validation and transactional upserts to prevent duplicate records.",
        "Developed resumable ERC-20 balance-backfill tooling with incremental watermarks, reconciliation, adaptive RPC scanning, and execution-budget planning.",
        "Built reusable chain and launchpad UI infrastructure across Pulse, search, portfolio, and trade pages for 56 venues; validated 53 smart-contract integrations with typed configuration and automated tests."
      ],
    },
    {
      company: "Ocean Friends",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Data Scientist",
      logoUrl: ofLogo,
      start: "October 2025",
      end: "March 2026",
      description:
        "Used BigQuery to investigate claims and operational data, trace missing ERA records, and identify the claims affected. The analysis supported the recovery of 100,000 claims and informed recurring data-quality reporting.",
      highlights: [
        "Analyzed claims and operational datasets in BigQuery to surface data-quality problems and claim-processing discrepancies for investigation.",
        "Identified records affected by missing Electronic Remittance Advice (ERA) data, contributing to the recovery of 100,000 claims.",
        "Automated recurring reports, exception alerts, and stakeholder emails to reduce manual data extraction and reporting work."
      ],
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
      dates: "May 2026 - Present",
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
