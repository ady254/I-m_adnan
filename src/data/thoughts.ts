export interface Thought {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: "Posts" | "Notes" | "Ideas";
}

export const thoughts: Thought[] = [
  {
    id: "conversational-ai",
    title: "WHY I WANT TO BUILD CONVERSATIONAL AI",
    date: "[CONTENT TO BE ADDED]",
    excerpt: "Because buttons are boring and talking is natural.",
    content: `[CONTENT TO BE ADDED]

There's something magical about software that talks back. Not chatbots that feel like forms — actual conversational agents that understand context, take action, and get things done.

That's what I'm building. And yes, I'm drinking too much coffee while doing it.`,
    category: "Posts",
  },
  {
    id: "first-client",
    title: "WHAT I LEARNED FROM MY FIRST CLIENT",
    date: "[CONTENT TO BE ADDED]",
    excerpt: "Scope creep is real. So is imposter syndrome.",
    content: `[CONTENT TO BE ADDED]

First client taught me more than any tutorial. Deadlines, communication, saying 'no' politely, and the art of 'it'll be done tomorrow' (it wasn't).`,
    category: "Notes",
  },
  {
    id: "dsa-pain",
    title: "DSA IS PAINFUL BUT...",
    date: "[CONTENT TO BE ADDED]",
    excerpt: "Arrays hate me. I hate arrays back.",
    content: `[CONTENT TO BE ADDED]

Learning DSA feels like solving puzzles designed by someone who doesn't like you. But every solved problem makes the next bug slightly less terrifying.`,
    category: "Notes",
  },
  {
    id: "building-public",
    title: "BUILDING IN PUBLIC",
    date: "[CONTENT TO BE ADDED]",
    excerpt: "Sharing the mess, not just the wins.",
    content: `[CONTENT TO BE ADDED]

Building in public is scary. People see your bugs. Your half-finished ideas. Your 2 AM commits. But it also means you're not building alone.`,
    category: "Posts",
  },
  {
    id: "random-2am",
    title: "RANDOM THOUGHTS AT 2 AM",
    date: "[CONTENT TO BE ADDED]",
    excerpt: "What if CSS was sentient?",
    content: `[CONTENT TO BE ADDED]

Why do we call it 'debugging' when we're really just guessing? Why does margin: auto work sometimes and betray you other times? These are the questions that keep me up.`,
    category: "Ideas",
  },
];
