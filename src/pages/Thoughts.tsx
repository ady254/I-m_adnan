import { useState } from "react";
import { thoughts, type Thought } from "../data/thoughts";
import { Window } from "../components/Window";
import { PixelButton } from "../components/PixelButton";

type Tab = "Posts" | "Notes" | "Ideas";

export function Thoughts() {
  const [tab, setTab] = useState<Tab>("Posts");
  const [selected, setSelected] = useState<Thought | null>(null);

  const tabs: Tab[] = ["Posts", "Notes", "Ideas"];
  const filtered = thoughts.filter((t) => t.category === tab);

  if (selected) {
    return (
      <Window
        title="THOUGHTS.EXE"
        className="max-w-2xl mx-auto animate-[fadeIn_0.3s_ease]"
        onClose={() => setSelected(null)}
      >
        <article>
          <span className="font-pixel text-[8px] text-neon-pink">
            {selected.date}
          </span>
          <h2 className="font-pixel text-xs sm:text-sm text-neon-cyan mt-2 mb-4">
            {selected.title}
          </h2>
          <p className="text-sm text-text-muted whitespace-pre-line leading-relaxed">
            {selected.content}
          </p>
          <div className="mt-6">
            <PixelButton variant="ghost" size="sm" onClick={() => setSelected(null)}>
              ← BACK TO NOTEBOOK
            </PixelButton>
          </div>
        </article>
      </Window>
    );
  }

  return (
    <Window title="THOUGHTS.EXE" className="max-w-2xl mx-auto animate-[fadeIn_0.3s_ease]">
      <p className="text-sm text-text-muted mb-6">
        A digital notebook of ideas, observations, and 2 AM thoughts.
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((t) => (
          <PixelButton
            key={t}
            variant={tab === t ? "pink" : "ghost"}
            size="sm"
            onClick={() => setTab(t)}
          >
            {t}
          </PixelButton>
        ))}
      </div>

      <ul className="space-y-2">
        {filtered.map((thought) => (
          <li key={thought.id}>
            <button
              type="button"
              onClick={() => setSelected(thought)}
              className="w-full text-left pixel-border bg-os-bg/40 p-4 hover:border-neon-cyan hover:bg-neon-cyan/5 transition-all group"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-pixel text-[8px] sm:text-[10px] text-neon-cyan group-hover:neon-text-cyan">
                    {thought.title}
                  </h3>
                  <p className="text-xs text-text-muted mt-1 line-clamp-1">
                    {thought.excerpt}
                  </p>
                </div>
                <span className="font-pixel text-[6px] text-text-muted shrink-0">
                  {thought.date}
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </Window>
  );
}
