import { useEffect, useState } from "react";
import { useBoot } from "../context/BootContext";
import { PixelButton } from "./PixelButton";

const bootLines = [
  { text: "> Loading projects.............", delay: 300, status: "✓" },
  { text: "> Initializing Lazy.exe........", delay: 500, status: "✓" },
  { text: "> Loading Innvox...............", delay: 700, status: "✓" },
  { text: "> Checking caffeine............", delay: 900, status: "CRITICAL" },
  { text: "> Checking sleep...............", delay: 1100, status: "NOT FOUND" },
  { text: "> Welcome, human.", delay: 1300, status: "" },
];

export function BootScreen() {
  const { completeBoot } = useBoot();
  const [visibleLines, setVisibleLines] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    if (skipped) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    bootLines.forEach((line, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines(i + 1);
          if (i === bootLines.length - 1) {
            setTimeout(() => setShowButton(true), 200);
          }
        }, line.delay)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [skipped]);

  const handleSkip = () => {
    setSkipped(true);
    setVisibleLines(bootLines.length);
    setShowButton(true);
  };

  const handleEnter = () => {
    completeBoot();
  };

  return (
    <div className="fixed inset-0 z-50 boot-bg flex items-center justify-center p-4">
      {/* City silhouette */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-0 right-0 h-1/3 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 bg-os-panel border-t border-neon-purple/30"
              style={{
                left: `${i * 5.5}%`,
                width: `${3 + (i % 4) * 2}%`,
                height: `${20 + (i % 5) * 15}%`,
              }}
            />
          ))}
        </div>
        {/* Neon signs */}
        <div className="absolute bottom-[35%] left-[15%] font-pixel text-[8px] text-neon-pink neon-text-pink opacity-60">
          BUILD
        </div>
        <div className="absolute bottom-[40%] right-[20%] font-pixel text-[8px] text-neon-cyan neon-text-cyan opacity-60">
          SHIP REPEAT
        </div>
      </div>

      <div className="relative w-full max-w-lg pixel-border-pink bg-os-panel/95 p-6 sm:p-8">
        <h1 className="font-pixel text-neon-cyan text-xs sm:text-sm neon-text-cyan mb-6">
          ADNAN.OS v2.6
        </h1>

        <div
          className="font-mono text-sm space-y-1 min-h-[180px]"
          role="log"
          aria-live="polite"
          aria-label="Boot sequence"
        >
          {bootLines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="flex gap-2 flex-wrap">
              <span className="text-terminal">{line.text}</span>
              {line.status && (
                <span
                  className={
                    line.status === "CRITICAL"
                      ? "text-neon-orange"
                      : line.status === "NOT FOUND"
                        ? "text-neon-pink"
                        : "text-neon-green"
                  }
                >
                  {line.status}
                </span>
              )}
            </div>
          ))}
          {visibleLines < bootLines.length && !skipped && (
            <span className="text-terminal cursor-blink" aria-hidden="true">
              {" "}
            </span>
          )}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
          {showButton && (
            <PixelButton
              variant="pink"
              size="lg"
              onClick={handleEnter}
              className="w-full sm:w-auto animate-[fadeIn_0.4s_ease]"
            >
             [ CONTINUE ]
            </PixelButton>
          )}
          {!showButton && (
            <button
              type="button"
              onClick={handleSkip}
              className="font-pixel text-[8px] text-text-muted hover:text-neon-cyan transition-colors"
            >
              Skip boot →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
