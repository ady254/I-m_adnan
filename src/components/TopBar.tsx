import { useEffect, useState } from "react";
import { Menu, Battery } from "lucide-react";

interface TopBarProps {
  onMenuClick: () => void;
}

export function TopBar({ onMenuClick }: TopBarProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const dateStr = time
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();

  const timeStr = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <header className="h-10 sm:h-12 border-b-2 border-os-border bg-os-surface/80 flex items-center justify-between px-3 sm:px-4 shrink-0">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="lg:hidden text-neon-cyan p-1 hover:bg-neon-cyan/10 rounded"
          onClick={onMenuClick}
          aria-label="Open navigation menu"
        >
          <Menu size={20} />
        </button>
        <span className="font-pixel text-[8px] sm:text-[10px] text-neon-cyan lg:hidden">
          ADNAN.OS
        </span>
      </div>

      <div className="flex items-center gap-3 sm:gap-6 font-pixel text-[7px] sm:text-[8px]">
        <span className="text-text-muted hidden sm:inline">{dateStr}</span>
        <span className="text-neon-cyan">{timeStr}</span>
        <div className="flex items-center gap-1.5" title="Caffeine level">
          <Battery size={14} className="text-neon-orange" aria-hidden="true" />
          <span className="text-neon-orange hidden sm:inline">CAFFEINE</span>
          <div className="w-12 sm:w-16 h-2 bg-os-bg border border-os-border">
            <div
              className="h-full bg-neon-orange energy-bar-fill"
              style={{ width: "25%" }}
              role="progressbar"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Caffeine meter at 25 percent"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
