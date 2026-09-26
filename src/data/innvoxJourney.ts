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
      "Innvox started from a simple thought: what if I could turn caffeine into software? Web dev, AI automation, digital products — all under one roof.",
    icon: "💡",
  },
  {
    id: "first-client",
    title: "FIRST CLIENT",
    description:
      "[CONTENT TO BE ADDED] — The moment theory became reality. First real project, first real deadline, first real panic.",
    icon: "🤝",
  },
  {
    id: "first-revenue",
    title: "FIRST REVENUE",
    description:
      "[CONTENT TO BE ADDED] — Proof that someone actually valued the work. Motivation unlocked.",
    icon: "💰",
  },
  {
    id: "failures",
    title: "FAILURES & BUGS",
    description:
      "Not everything worked. Projects broke. Clients ghosted. Code caught fire. Each failure was a free lesson (expensive, but free).",
    icon: "🐛",
  },
  {
    id: "learning",
    title: "LEARNING",
    description:
      "Stack grew. Skills sharpened. Learned that 'it works on my machine' is not a valid deployment strategy.",
    icon: "📚",
  },
  {
    id: "projects",
    title: "PROJECTS",
    description:
      "From web apps to AI automation — Innvox took on projects across domains. Each one added a new scar and a new skill.",
    icon: "🔧",
  },
  {
    id: "today",
    title: "INNVOX TODAY",
    description:
      "Growing. Building. Still caffeinated. Focused on AI, web development, and helping businesses ship faster.",
    icon: "🚀",
  },
];

export const innvoxServices = [
  "Web Development",
  "AI Automation",
  "Digital Products",
  "Custom Software",
  "[CONTENT TO BE ADDED]",
];

export const innvoxLessons = [
  "Ship early, fix later (within reason)",
  "Communication > Code (sometimes)",
  "Every bug is a story",
  "Clients remember how you made them feel",
  "[CONTENT TO BE ADDED]",
];
