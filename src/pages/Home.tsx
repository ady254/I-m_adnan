import { profile } from "../data/profile";
import { PixelAvatar } from "../components/PixelAvatar";
import { StatusPanel } from "../components/StatusPanel";

export function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 h-full animate-[fadeIn_0.4s_ease]">
      {/* Hero */}
      <section className="lg:col-span-8 pixel-border bg-os-panel/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
        <div className="flex-1 text-center sm:text-left">
          <p className="font-pixel text-[8px] text-neon-pink mb-2">
            HEY, I'M
          </p>
          <h1 className="font-pixel text-lg sm:text-xl md:text-2xl text-neon-cyan neon-text-cyan mb-3">
            {profile.name.toUpperCase()}
          </h1>
          <p className="font-pixel text-[10px] sm:text-xs text-neon-pink neon-text-pink mb-4">
            {profile.tagline.toUpperCase()}
          </p>
          <p className="text-sm sm:text-base text-text-muted max-w-md">
            {profile.subtitle}
          </p>
        </div>
        <div className="shrink-0">
          <PixelAvatar variant="hero" className="w-40 sm:w-48 md:w-56 h-auto" />
        </div>
      </section>

      {/* Status panel */}
      <aside className="lg:col-span-4 min-h-[200px]">
        <StatusPanel />
      </aside>
    </div>
  );
}
