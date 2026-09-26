import type { JourneyStep } from "../data/innvoxJourney";

interface TimelineProps {
  steps: JourneyStep[];
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative">
      {steps.map((step, i) => (
        <div key={step.id} className="flex gap-4 pb-8 last:pb-0 relative">
          {/* Connector line */}
          {i < steps.length - 1 && (
            <div
              className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan/50 to-neon-pink/30"
              aria-hidden="true"
            />
          )}

          {/* Icon node */}
          <div className="relative z-10 shrink-0 w-10 h-10 flex items-center justify-center pixel-border-cyan bg-os-bg text-lg">
            {step.icon}
          </div>

          {/* Content */}
          <div className="flex-1 pt-1">
            <h3 className="font-pixel text-[10px] sm:text-xs text-neon-cyan mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
