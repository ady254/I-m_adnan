export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillInventory: SkillCategory[] = [
  {
    name: "LANGUAGES",
    skills: ["Python", "JavaScript", "TypeScript"],
  },
  {
    name: "FRONTEND",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "BACKEND",
    skills: ["FastAPI", "Node.js", "Express"],
  },
  {
    name: "DATABASE",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    name: "DEVOPS",
    skills: ["Docker", "GitHub Actions", "GCP", "AWS"],
  },
  {
    name: "AI / APIs",
    skills: ["Gemini", "ElevenLabs", "Deepgram", "LiveKit", "n8n", "Twilio"],
  },
];
