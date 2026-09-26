interface EnergyMeterProps {
  energy: number;
  compact?: boolean;
}

export function EnergyMeter({ energy, compact = false }: EnergyMeterProps) {
  const filled = Math.round(energy / 10);
  const empty = 10 - filled;
  const bar = "█".repeat(filled) + "░".repeat(empty);

  return (
    <div className={compact ? "text-[8px]" : "text-[10px]"}>
      <div className="font-pixel text-text-muted mb-1 flex justify-between">
        <span>ENERGY</span>
        <span className={energy <= 15 ? "text-neon-orange" : "text-neon-green"}>
          {energy}%
        </span>
      </div>
      <div
        className="font-pixel text-neon-cyan tracking-wider energy-bar-fill"
        role="progressbar"
        aria-valuenow={energy}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Lazy.exe energy at ${energy} percent`}
      >
        {bar}
      </div>
    </div>
  );
}
