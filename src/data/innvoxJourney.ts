export interface JourneyStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const innvoxJourney: JourneyStep[] = [
  {
    id: "idea",
    title: "THE IDEA",
    description:
      "InnVox started with friends who wanted to digitize workflows for small and mid-size businesses — web apps, automation, and products that actually save time.",
    icon: "💡",
  },
  {
    id: "first-client",
    title: "FIRST CLIENT",
    description:
      "Manufacturing client needed quotes faster than 2-day email threads. We built a catalog + WhatsApp quote system and watched turnaround drop to under 2 hours.",
    icon: "🤝",
  },
  {
    id: "first-revenue",
    title: "FIRST REVENUE",
    description:
      "Real projects, real impact — 300+ leads and ₹25 lakh+ revenue generated for one client alone. Caffeine officially became a business expense.",
    icon: "💰",
  },
  {
    id: "failures",
    title: "FAILURES & BUGS",
    description:
      "Not every migration was smooth. Scope grew. Edge cases appeared at 1 AM. Each mess taught us to document better and test earlier.",
    icon: "🐛",
  },
  {
    id: "learning",
    title: "LEARNING",
    description:
      "E-commerce migrations, multilingual admissions flows, admin panels — each project added stack depth and client-trust scars.",
    icon: "📚",
  },
  {
    id: "projects",
    title: "PROJECTS",
    description:
      "Manufacturing quotes, retailer e-commerce, admissions automation — InnVox shipped across domains while staying part-time and student-paced.",
    icon: "🔧",
  },
  {
    id: "today",
    title: "INNVOX TODAY",
    description:
      "Jun 2025 – Present · Developer at InnVox, New Delhi. Still building for SMBs — faster workflows, less manual chaos.",
    icon: "🚀",
  },
];

export const innvoxServices = [
  "Web Development",
  "E-Commerce Platforms",
  "WhatsApp & Quote Automation",
  "Multilingual Web Apps",
  "Admin Panels & Workflows",
];

export const innvoxLessons = [
  "Speed for clients beats perfect architecture (until it doesn't)",
  "WhatsApp integrations can replace days of email ping-pong",
  "Same-day response time wins admissions — and trust",
  "Every bug is a story (usually told at 2 AM)",
];
