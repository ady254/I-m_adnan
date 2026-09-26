import { useState } from "react";
import { profile } from "../data/profile";
import { Window } from "../components/Window";
import { PixelAvatar } from "../components/PixelAvatar";
import { PixelButton } from "../components/PixelButton";

type Tab = "story" | "timeline" | "interests";

export function About() {
  const [tab, setTab] = useState<Tab>("story");

  const tabs: { id: Tab; label: string }[] = [
    { id: "story", label: "STORY" },
    { id: "timeline", label: "TIMELINE" },
    { id: "interests", label: "INTERESTS" },
  ];

  return (
    <Window title="ABOUT.EXE" className="max-w-4xl mx-auto animate-[fadeIn_0.3s_ease]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile card */}
        <div className="md:col-span-1 flex flex-col items-center text-center">
          <PixelAvatar variant="about" className="w-24 h-24 mb-4" />
          <h2 className="font-pixel text-xs text-neon-cyan mb-2">
            {profile.name.toUpperCase()}
          </h2>
          <div className="space-y-1 mb-4">
            {profile.roles.map((role) => (
              <p key={role} className="font-pixel text-[8px] text-neon-pink">
                {role}
              </p>
            ))}
          </div>

          <div className="w-full space-y-2 text-left text-sm">
            <div className="flex justify-between border-b border-os-border pb-1">
              <span className="font-pixel text-[8px] text-text-muted">AGE</span>
              <span>{profile.stats.age}</span>
            </div>
            <div className="flex justify-between border-b border-os-border pb-1">
              <span className="font-pixel text-[8px] text-text-muted">LOCATION</span>
              <span>{profile.stats.location}</span>
            </div>
            <div className="flex justify-between border-b border-os-border pb-1">
              <span className="font-pixel text-[8px] text-text-muted">EDUCATION</span>
              <span className="text-right text-xs">{profile.stats.education}</span>
            </div>
            <div className="flex justify-between border-b border-os-border pb-1">
              <span className="font-pixel text-[8px] text-text-muted">STATUS</span>
              <span className="text-neon-green">{profile.stats.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-pixel text-[8px] text-text-muted">GOAL</span>
              <span>{profile.stats.goal}</span>
            </div>
          </div>
        </div>

        {/* Tabbed content */}
        <div className="md:col-span-2">
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

          {tab === "story" && (
            <div className="space-y-4 animate-[fadeIn_0.3s_ease]">
              <p className="text-sm text-text-muted whitespace-pre-line leading-relaxed">
                {profile.story}
              </p>
              <div className="pixel-border bg-os-bg/50 p-4">
                <h3 className="font-pixel text-[8px] text-neon-orange mb-2">
                  FUN FACTS
                </h3>
                <ul className="space-y-2">
                  {profile.funFacts.map((fact) => (
                    <li key={fact} className="text-sm text-text-muted flex gap-2">
                      <span className="text-neon-pink">→</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {tab === "timeline" && (
            <div className="space-y-4 animate-[fadeIn_0.3s_ease]">
              {profile.timeline.map((item) => (
                <div
                  key={item.event}
                  className="flex gap-4 items-start pixel-border bg-os-bg/40 p-3"
                >
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <span className="font-pixel text-[8px] text-neon-cyan">
                      {item.year}
                    </span>
                    <p className="text-sm text-text-muted mt-1">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "interests" && (
            <div className="animate-[fadeIn_0.3s_ease]">
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="font-pixel text-[8px] px-3 py-2 pixel-border text-neon-cyan hover:bg-neon-cyan/10 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Window>
  );
}
