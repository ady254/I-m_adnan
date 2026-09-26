import { useState } from "react";
import {
  innvoxJourney,
  innvoxServices,
  innvoxLessons,
} from "../data/innvoxJourney";
import { Window } from "../components/Window";
import { Timeline } from "../components/Timeline";
import { PixelButton } from "../components/PixelButton";

type Tab = "journey" | "services" | "lessons";

export function Innvox() {
  const [tab, setTab] = useState<Tab>("journey");

  const tabs: { id: Tab; label: string }[] = [
    { id: "journey", label: "JOURNEY" },
    { id: "services", label: "SERVICES" },
    { id: "lessons", label: "LESSONS" },
  ];

  return (
    <Window title="INNVOX.EXE" className="max-w-3xl mx-auto animate-[fadeIn_0.3s_ease]">
      <header className="mb-6">
        <h2 className="font-pixel text-sm text-neon-pink neon-text-pink mb-2">
          INNVOX
        </h2>
        <p className="text-sm text-text-muted">
          Adnan's attempt at turning caffeine into software. A game progression
          through building, breaking, and learning.
        </p>
      </header>

      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(({ id, label }) => (
          <PixelButton
            key={id}
            variant={tab === id ? "pink" : "ghost"}
            size="sm"
            onClick={() => setTab(id)}
          >
            [ {label} ]
          </PixelButton>
        ))}
      </div>

      {tab === "journey" && (
        <div className="animate-[fadeIn_0.3s_ease]">
          <Timeline steps={innvoxJourney} />
        </div>
      )}

      {tab === "services" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-[fadeIn_0.3s_ease]">
          {innvoxServices.map((service) => (
            <div
              key={service}
              className="pixel-border bg-os-bg/50 p-4 flex items-center gap-3 hover:border-neon-cyan transition-colors"
            >
              <span className="text-neon-cyan font-pixel text-lg">▸</span>
              <span className="font-pixel text-[8px] text-text-muted">
                {service}
              </span>
            </div>
          ))}
        </div>
      )}

      {tab === "lessons" && (
        <ul className="space-y-3 animate-[fadeIn_0.3s_ease]">
          {innvoxLessons.map((lesson) => (
            <li
              key={lesson}
              className="flex gap-3 text-sm text-text-muted pixel-border bg-os-bg/40 p-3"
            >
              <span className="text-neon-orange font-pixel">!</span>
              {lesson}
            </li>
          ))}
        </ul>
      )}
    </Window>
  );
}
