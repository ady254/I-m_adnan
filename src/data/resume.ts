export const resume = {
  name: "Adnan Ahmad",
  title: "Full-Stack Developer · AI Builder",
  location: "New Delhi, India",
  email: "itsadnanahmad5@gmail.com",
  links: {
    github: "https://github.com/adnanahmad001",
    linkedin: "https://www.linkedin.com/in/adnanahmad-io",
  },
  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Jamia Hamdard University",
      period: "Expected graduation 2027",
      note: "GPA: 7.5/10 (up to 6th semester)",
    },
  ],
  experience: [
    {
      role: "Developer",
      company: "InnVox",
      location: "New Delhi",
      period: "Jun 2025 – Present · Part-time",
      context:
        "Startup co-founded with friends to digitize workflows for small-to-mid-size businesses.",
      highlights: [
        "Built a manufacturing web app with an integrated catalog and WhatsApp quote-generation system — reduced turnaround from 2 days to under 2 hours; generated 300+ leads and ₹25 lakh+ revenue.",
        "Migrated an Instagram-based retailer to a centralized e-commerce platform with an admin panel for payments and inventory — reduced processing time from ~4 hours to under 1 hour.",
        "Developed a multilingual admissions web app with automated emails — increased admissions by ~25% and reduced response time to same-day.",
      ],
    },
  ],
  projects: [
    {
      name: "AI Voice Calling Platform",
      period: "2026 · Personal Project",
      techStack: [
        "FastAPI (Async)",
        "PostgreSQL",
        "Redis",
        "ARQ",
        "Docker",
        "Twilio",
        "WebRTC (LiveKit)",
        "Python",
      ],
      highlights: [
        "Built a backend for an AI voice agent platform for automated outbound campaigns.",
        "Implemented an asynchronous REST API using FastAPI and PostgreSQL, load-tested for 100 concurrent users with 0% error.",
        "Orchestrated outbound calls using Redis and ARQ workers to keep the API responsive.",
        "Developed a low-latency WebRTC pipeline integrating Deepgram (Nova-3), Gemini 2.5 Flash, and ElevenLabs Turbo (~1.0s latency).",
        "Configured local-dialect language support (including Arabic) with optimized Time-To-First-Byte (~690ms).",
        "Containerized the multi-service architecture using Docker.",
      ],
    },
  ],
  skills: {
    languages: ["Python", "TypeScript"],
    frontend: ["React", "Next.js", "Tailwind CSS"],
    backend: ["FastAPI", "REST APIs"],
    databases: ["PostgreSQL", "SQLAlchemy", "Alembic"],
    cloudDevOps: ["GCP", "Docker (Basic)", "Terraform (Basic)"],
    tools: [
      "Git",
      "GitHub",
      "WebRTC",
      "JWT Auth",
      "RBAC",
      "Claude Code",
      "Cursor",
    ],
    fundamentals: [
      "DSA",
      "OOP",
      "DBMS",
      "OS",
      "CN",
      "System Design (Basic)",
    ],
  },
  achievements: [
    "Finalist — TrackShift Innovation Hackathon Challenge",
    "Anthropic — AI Fluency (Framework & Foundations)",
    "Anthropic — Claude 101",
  ],
  downloadPath: "/Adnan-Ahmad-Resume.pdf",
};
