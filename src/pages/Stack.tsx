import { Window } from "../components/Window";
import { SkillInventory } from "../components/SkillInventory";

export function Stack() {
  return (
    <Window title="STACK.EXE" className="max-w-3xl mx-auto animate-[fadeIn_0.3s_ease]">
      <header className="mb-6">
        <h2 className="font-pixel text-sm text-neon-cyan neon-text-cyan mb-2">
          ADNAN'S INVENTORY
        </h2>
        <p className="text-sm text-text-muted">
          Skills, tools, and technologies — organized like a game inventory.
          Hover to inspect. Levels are decorative, not factual.
        </p>
      </header>
      <SkillInventory />
    </Window>
  );
}
