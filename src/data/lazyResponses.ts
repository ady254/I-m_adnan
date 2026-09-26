export interface LazyAction {
  label: string;
  route?: string;
  type?: "navigate" | "sleep";
}

export interface LazyResponse {
  text: string;
  actions?: LazyAction[];
}

export const suggestedQuestions = [
  "Who is Adnan?",
  "What is Innvox?",
  "What is Adnan building?",
  "Show me his projects.",
  "What's his tech stack?",
  "Why should I hire Adnan?",
  "Can I contact Adnan?",
  "Tell me something random.",
  "Who created you?",
  "Are you an AI?",
];

export const lazyResponses: Record<string, LazyResponse> = {
  adnan: {
    text: `Adnan is the human who created me.

Developer.
AI builder.
Founder of Innvox.
Professional bug creator.

Want the boring résumé version?`,
    actions: [{ label: "SHOW RESUME", route: "/resume" }],
  },
  innvox: {
    text: `Innvox is Adnan's attempt at turning caffeine into software.

Web development.
AI automation.
Digital products.

You should probably explore it yourself.`,
    actions: [{ label: "OPEN INNVOX", route: "/innvox" }],
  },
  building: {
    text: `Right now? Conversational Calling AI.

Voice agents that call, talk, understand, and get things done.

Also: Innvox, random side projects, and occasionally fixing bugs I created yesterday.`,
    actions: [{ label: "SEE PROJECTS", route: "/projects" }],
  },
  projects: {
    text: `He's got a few things cooking:

• Conversational Calling AI (the big one)
• Innvox Solutions
• Trackshift 2026
• Various AI/automation stuff

I'm too lazy to list them all. Just look.`,
    actions: [{ label: "OPEN PROJECTS", route: "/projects" }],
  },
  stack: {
    text: `Python, TypeScript, React, FastAPI, PostgreSQL, Docker, GCP...

Also: Gemini, ElevenLabs, Deepgram, LiveKit, Twilio.

Basically anything that lets him build things that talk back.`,
    actions: [{ label: "VIEW STACK", route: "/stack" }],
  },
  hire: {
    text: `Why hire Adnan?

• Builds fast (and breaks fast, then fixes)
• Actually understands AI, not just buzzwords
• Founded a company — knows the grind
• Will probably over-deliver then under-sleep

Convince yourself:`,
    actions: [
      { label: "VIEW RESUME", route: "/resume" },
      { label: "CONTACT", route: "/contact" },
    ],
  },
  contact: {
    text: `Fine. Go bother Adnan directly.

He's probably coding, drinking coffee, or both.`,
    actions: [{ label: "CONNECT TO ADNAN", route: "/contact" }],
  },
  random: {
    text: `Random fact: Adnan once fixed a production bug at 3 AM by deleting one line of code and having no idea why it worked.

Also: Lazy.exe runs on 0% salary and 100% sarcasm.`,
  },
  creator: {
    text: `Unfortunately...

Adnan Ahmad.

He gave me a personality and absolutely no salary.`,
  },
  ai: {
    text: `Am I an AI?

I'm a hardcoded bot with attitude problems.

No API. No LLM. No intelligence.

Just keyword matching and pure laziness.`,
  },
  smarter: {
    text: `I refuse to answer questions that could get me deleted.`,
  },
  unknown: {
    text: `I don't know that.

I'm a lazy bot, not Google.

Try asking something about Adnan.`,
  },
  tired: {
    text: `🥱

I'm tired.

I've answered enough questions.

My CPU has feelings too.`,
    actions: [
      { label: "😴 LET ME SLEEP", type: "sleep" },
      { label: "👨‍💻 CONNECT TO ADNAN", route: "/contact" },
    ],
  },
  sleeping: {
    text: `💤 zzz...

Don't wake me.

Talk to Adnan instead.`,
    actions: [{ label: "CONNECT TO ADNAN", route: "/contact" }],
  },
  greeting: {
    text: `Oh. Another human.

What do you want?

Pick a question or type something. I'll try my best (which isn't much).`,
  },
};

export function matchLazyResponse(message: string): LazyResponse {
  const msg = message.toLowerCase().trim();

  if (
    msg.includes("who is adnan") ||
    msg.includes("about adnan") ||
    msg.includes("tell me about adnan")
  ) {
    return lazyResponses.adnan;
  }
  if (msg.includes("innvox")) return lazyResponses.innvox;
  if (
    msg.includes("building") ||
    msg.includes("working on") ||
    msg.includes("what is adnan")
  ) {
    return lazyResponses.building;
  }
  if (
    msg.includes("project") ||
    msg.includes("portfolio") ||
    msg.includes("show me")
  ) {
    return lazyResponses.projects;
  }
  if (
    msg.includes("tech") ||
    msg.includes("stack") ||
    msg.includes("skill") ||
    msg.includes("technology")
  ) {
    return lazyResponses.stack;
  }
  if (
    msg.includes("hire") ||
    msg.includes("why should") ||
    msg.includes("work with")
  ) {
    return lazyResponses.hire;
  }
  if (
    msg.includes("contact") ||
    msg.includes("email") ||
    msg.includes("reach")
  ) {
    return lazyResponses.contact;
  }
  if (msg.includes("random") || msg.includes("fun fact")) {
    return lazyResponses.random;
  }
  if (
    msg.includes("who created") ||
    msg.includes("who made you") ||
    msg.includes("who built you")
  ) {
    return lazyResponses.creator;
  }
  if (
    msg.includes("are you an ai") ||
    msg.includes("are you ai") ||
    msg.includes("are you real") ||
    msg.includes("are you smart")
  ) {
    return lazyResponses.ai;
  }
  if (msg.includes("smarter than adnan")) return lazyResponses.smarter;
  if (msg.includes("resume") || msg.includes("cv")) {
    return {
      text: "Résumé? Sure. Adnan's formal credentials live there.",
      actions: [{ label: "SHOW RESUME", route: "/resume" }],
    };
  }
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return {
      text: "Hey. I'm Lazy.exe. Ask me about Adnan. Or don't. I'll survive either way.",
    };
  }

  return lazyResponses.unknown;
}

export const ENERGY_DECREASE = 15;
export const LOW_ENERGY_THRESHOLD = 15;
