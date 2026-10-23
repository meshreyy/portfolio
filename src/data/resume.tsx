import { Icons } from "@/components/icons";
import { FileTextIcon, HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
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
    "Built React trading features across four networks and backend integrations spanning Go, Redis, REST/WebSocket APIs, and EVM data pipelines.",
  summary:
    "At [Interstate](https://interstate.trade/landing), I built a Trenches experience for live Solana, BNB, Base, and Robinhood feeds; connected Go indexers and Redis-backed token services to React clients; and delivered holder-count provenance across four EVM chains. Other work includes idempotent ingestion for 1,064 KOL wallets, resumable ERC-20 balance backfills, and UI infrastructure supporting 56 venues and 53 smart-contract integrations. Outside work, I’m building a [perpetual futures exchange](/#projects) with Express/Bun, Redis Streams, and PostgreSQL. I also built a TF-IDF-based job-matching prototype.",
  avatarUrl: "/profile_photo.webp",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript" },
    { name: "Go" },
    { name: "Node.js", icon: Nodejs },
    { name: "Express" },
    { name: "Python", icon: Python },
    { name: "Redis Streams" },
    { name: "Postgres", icon: Postgresql },
    { name: "Prisma" },
    { name: "WebSockets" },
    { name: "Tailwind CSS" },
    { name: "Docker", icon: Docker },
    { name: "BigQuery" },
    { name: "Supabase" },
    { name: "EVM" },
    { name: "ERC-20" },
    { name: "RPC" },
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
        "Built React product features and connected them to Go indexers, Redis-backed token services, and REST/WebSocket APIs across a multi-chain trading product.",
      highlights: [
        "Unified four live feeds—Solana, BNB, Base, and Robinhood—in the Trenches view while preserving chain-specific filters, trade routes, and quick-buy behavior.",
        "Added quote-token badges that hide native-token legs and link to quote charts only when OHLC candles are available.",
        "Connected holder-count provenance across four EVM chains by integrating Go indexers, Redis token services, REST/WebSocket APIs, and React clients.",
        "Supported 56 venues and validated 53 smart-contract integrations with reusable chain/launchpad UI, typed configuration, and automated tests.",
        "Prevented duplicate records across 1,064 KOL wallet ingestions using strict address validation and transactional upserts.",
        "Made ERC-20 balance backfills resumable through incremental watermarks, reconciliation, adaptive RPC scanning, and execution-budget planning."
      ],
    },
    {
      company: "Ocean Friends",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Data Analyst",
      logoUrl: ofLogo,
      start: "October 2025",
      end: "March 2026",
      description:
        "Used BigQuery to trace missing ERA records and identify affected claims; the analysis supported recovery of 100,000 claims and recurring data-quality reporting.",
      highlights: [
        "Helped identify records associated with the recovery of 100,000 claims by tracing missing Electronic Remittance Advice (ERA) data in BigQuery.",
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
        "Built an event-driven perpetual-futures exchange with Express/Bun, Redis Streams, and PostgreSQL/Prisma. Implemented in-memory order matching, margin and position management, JWT authentication, and live Binance market-data ingestion over WebSockets for price updates and liquidation logic. Routed order commands through the backend, matching engine, and database with Redis consumer groups for durable handling.",
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
      title: "FunShiksha — Offline-First STEM PWA",
      href: "https://zesty-valkyrie-025e82.netlify.app/class-selection",
      dates: "Oct 2025 - Nov 2025",
      active: true,
      description:
        "Built an offline-first multilingual STEM-learning PWA for rural learners, with dynamic translation and a teacher dashboard. Delivered with a 6-member team in 3–4 days for Smart India Hackathon 2025; selected among the Top 45 teams nationwide.",
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
    {
      title: "Content-Based Job Matcher",
      href: "https://career-compass-xi-ivory.vercel.app/",
      dates: "Feb 2026 - Apr 2026",
      active: true,
      description:
        "Python prototype using TF-IDF and cosine similarity to rank profile/job-description matches and surface potential skill gaps, related companies, and salary insights.",
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
