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
    id: "conversational-calling-ai",
    name: "Conversational Calling AI",
    category: "AI",
    description:
      "AI voice agents that can call, talk, understand conversations and get things done.",
    techStack: [
      "FastAPI",
      "Python",
      "TypeScript",
      "PostgreSQL",
      "LiveKit",
      "ElevenLabs",
      "Deepgram",
      "Gemini",
      "Docker",
      "GCP",
      "Twilio",
    ],
    status: "In Development",
    featured: true,
    details:
      "Building voice agents that don't just respond — they act. Calls, understands context, executes tasks. The future of conversational interfaces.",
  },
  {
    id: "innvox-solutions",
    name: "Innvox Solutions",
    category: "Agency",
    description:
      "The agency arm — web development, AI automation, and digital products for clients.",
    techStack: ["React", "Next.js", "FastAPI", "Python", "PostgreSQL"],
    status: "Active",
    details: "[CONTENT TO BE ADDED]",
  },
  {
    id: "trackshift-2026",
    name: "Trackshift 2026",
    category: "Web",
    description: "[CONTENT TO BE ADDED]",
    techStack: ["React", "TypeScript", "Tailwind"],
    status: "[CONTENT TO BE ADDED]",
    details: "[CONTENT TO BE ADDED]",
  },
  {
    id: "ai-automation",
    name: "AI Automation Projects",
    category: "AI",
    description: "Various AI and automation projects — n8n workflows, LLM integrations, and more.",
    techStack: ["Python", "n8n", "Gemini", "FastAPI"],
    status: "Ongoing",
    details: "[CONTENT TO BE ADDED]",
  },
  {
    id: "web-projects",
    name: "Web Projects",
    category: "Web",
    description: "Full-stack web applications and client websites.",
    techStack: ["React", "Next.js", "Tailwind", "Node.js"],
    status: "Various",
    details: "[CONTENT TO BE ADDED]",
  },
  {
    id: "hackathon",
    name: "Hackathon Projects",
    category: "Hackathons",
    description: "Built under pressure, shipped in 48 hours (maybe).",
    techStack: ["React", "Python", "Firebase"],
    status: "Completed",
    details: "[CONTENT TO BE ADDED]",
  },
];

export const projectCategories: ProjectCategory[] = [
  "All",
  "AI",
  "Web",
  "Agency",
  "Hackathons",
];
