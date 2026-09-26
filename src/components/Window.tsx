import type { ReactNode } from "react";
import { Minus, Square, X } from "lucide-react";

interface WindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  onClose?: () => void;
  showControls?: boolean;
}

export function Window({
  title,
  children,
  className = "",
  onClose,
  showControls = true,
}: WindowProps) {
  return (
    <div
      className={`pixel-border bg-os-panel/90 backdrop-blur-sm flex flex-col overflow-hidden animate-[fadeIn_0.3s_ease] ${className}`}
      role="region"
      aria-label={title}
    >
      <div className="window-titlebar flex items-center justify-between px-3 py-2 shrink-0">
        <span className="font-pixel text-[8px] sm:text-[10px] text-neon-cyan neon-text-cyan truncate">
          {title}
        </span>
        {showControls && (
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              className="w-5 h-5 flex items-center justify-center border border-os-border text-text-muted hover:text-neon-cyan transition-colors"
              aria-label="Minimize"
              tabIndex={-1}
            >
              <Minus size={10} />
            </button>
            <button
              type="button"
              className="w-5 h-5 flex items-center justify-center border border-os-border text-text-muted hover:text-neon-cyan transition-colors"
              aria-label="Maximize"
              tabIndex={-1}
            >
              <Square size={8} />
            </button>
            <button
              type="button"
              className="w-5 h-5 flex items-center justify-center border border-os-border text-text-muted hover:text-neon-pink transition-colors"
              aria-label="Close"
              onClick={onClose}
              tabIndex={-1}
            >
              <X size={10} />
            </button>
          </div>
        )}
      </div>
      <div className="flex-1 overflow-auto p-4 sm:p-6">{children}</div>
    </div>
  );
}
