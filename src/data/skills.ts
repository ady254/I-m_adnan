export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillInventory: SkillCategory[] = [
  {
    name: "LANGUAGES",
    skills: ["Python", "TypeScript"],
  },
  {
    name: "FRONTEND",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "BACKEND",
    skills: ["FastAPI", "REST APIs"],
  },
  {
    name: "DATABASE",
    skills: ["PostgreSQL", "SQLAlchemy", "Alembic", "Redis"],
  },
  {
    name: "CLOUD / DEVOPS",
    skills: ["GCP", "Docker", "Terraform"],
  },
  {
    name: "AI / VOICE",
    skills: [
      "Gemini",
      "ElevenLabs",
      "Deepgram",
      "LiveKit",
      "Twilio",
      "WebRTC",
    ],
  },
  {
    name: "TOOLS & CONCEPTS",
    skills: ["Git", "GitHub", "JWT Auth", "RBAC", "Claude Code", "Cursor"],
  },
  {
    name: "CS FUNDAMENTALS",
    skills: ["DSA", "OOP", "DBMS", "OS", "CN", "System Design"],
  },
];
