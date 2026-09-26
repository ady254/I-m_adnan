import { skillInventory } from "../data/skills";

export function SkillInventory() {
  return (
    <div className="space-y-6">
      {skillInventory.map((category) => (
        <section key={category.name}>
          <h3 className="font-pixel text-[10px] text-neon-pink mb-3 flex items-center gap-2">
            <span className="text-neon-cyan">▸</span>
            {category.name}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <div
                key={skill}
                className="group relative px-3 py-2 pixel-border bg-os-bg/60 hover:border-neon-cyan hover:bg-neon-cyan/5 transition-all cursor-default"
              >
                <span className="font-pixel text-[8px] text-text-muted group-hover:text-neon-cyan transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
