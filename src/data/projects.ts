export type ProjectCategory = "All" | "AI" | "Web" | "Agency" | "Hackathons";

export interface Project {
  id: string;
  name: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
  techStack: string[];
  status: string;
  featured?: boolean;
  details?: string;
}

export const projects: Project[] = [
  {
    id: "ai-voice-calling-platform",
    name: "AI Voice Calling Platform",
    category: "AI",
    description:
      "AI voice agent backend for automated outbound campaigns — call, talk, understand, and execute.",
    techStack: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Redis",
      "ARQ",
      "Docker",
      "Twilio",
      "LiveKit",
      "Deepgram",
      "Gemini",
      "ElevenLabs",
    ],
    status: "Personal Project · 2026",
    featured: true,
    details: `Built a backend for an AI voice agent platform for automated outbound campaigns.

• Async REST API with FastAPI + PostgreSQL — load-tested for 100 concurrent users with 0% error.
• Outbound call orchestration via Redis and ARQ workers.
• Low-latency WebRTC pipeline: Deepgram (Nova-3), Gemini 2.5 Flash, ElevenLabs Turbo (~1.0s latency).
• Local-dialect support (including Arabic) with ~690ms Time-To-First-Byte.
• Multi-service architecture containerized with Docker.`,
  },
  {
    id: "innvox-manufacturing",
    name: "Manufacturing Catalog & Quotes",
    category: "Agency",
    description:
      "Web app with integrated catalog and WhatsApp quote generation for a manufacturing client.",
    techStack: ["React", "Next.js", "WhatsApp Integration"],
    status: "Shipped · InnVox",
    details:
      "Reduced quote turnaround from 2 days to under 2 hours. Generated 300+ leads and ₹25 lakh+ revenue for the client.",
  },
  {
    id: "innvox-ecommerce",
    name: "Retailer E-Commerce Migration",
    category: "Agency",
    description:
      "Migrated an Instagram-based retailer to a centralized e-commerce platform with admin, payments, and inventory.",
    techStack: ["React", "Next.js", "PostgreSQL"],
    status: "Shipped · InnVox",
    details:
      "Reduced order processing time from ~4 hours to under 1 hour with a unified admin panel.",
  },
  {
    id: "innvox-admissions",
    name: "Multilingual Admissions App",
    category: "Web",
    description:
      "Admissions web app with multilingual support and automated email workflows.",
    techStack: ["React", "Next.js", "Email Automation"],
    status: "Shipped · InnVox",
    details:
      "Increased admissions by ~25% and cut response time to same-day.",
  },
  {
    id: "trackshift-2026",
    name: "TrackShift Innovation Hackathon",
    category: "Hackathons",
    description: "Finalist in the TrackShift Innovation Hackathon Challenge.",
    techStack: ["React", "TypeScript"],
    status: "Finalist",
    details:
      "Built under hackathon pressure — shipped an innovation-focused solution and reached the finalist stage.",
  },
];

export const projectCategories: ProjectCategory[] = [
  "All",
  "AI",
  "Web",
  "Agency",
  "Hackathons",
];
