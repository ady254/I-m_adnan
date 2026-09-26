import { useState } from "react";
import {
  projects,
  projectCategories,
  type Project,
  type ProjectCategory,
} from "../data/projects";
import { Window } from "../components/Window";
import { ProjectCard } from "../components/ProjectCard";
import { PixelButton } from "../components/PixelButton";

export function Projects() {
  const [category, setCategory] = useState<ProjectCategory>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    category === "All"
      ? projects
      : projects.filter((p) => p.category === category);

  if (selected) {
    return (
      <Window
        title={`PROJECTS.EXE — ${selected.name}`}
        className="max-w-3xl mx-auto animate-[fadeIn_0.3s_ease]"
        onClose={() => setSelected(null)}
      >
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="font-pixel text-[8px] px-2 py-1 bg-neon-pink/20 text-neon-pink border border-neon-pink/40">
              {selected.category}
            </span>
            <span className="font-pixel text-[8px] px-2 py-1 bg-neon-green/10 text-neon-green border border-neon-green/30">
              {selected.status}
            </span>
          </div>

          <p className="text-base text-text-muted leading-relaxed">
            {selected.details || selected.description}
          </p>

          <div>
            <h3 className="font-pixel text-[8px] text-neon-cyan mb-2">
              TECH STACK
            </h3>
            <div className="flex flex-wrap gap-2">
              {selected.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-pixel text-[8px] px-2 py-1 pixel-border text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <PixelButton variant="ghost" size="sm" onClick={() => setSelected(null)}>
            ← BACK TO EXPLORER
          </PixelButton>
        </div>
      </Window>
    );
  }

  return (
    <Window title="PROJECTS.EXE" className="max-w-5xl mx-auto animate-[fadeIn_0.3s_ease]">
      <div className="flex flex-wrap gap-2 mb-6">
        {projectCategories.map((cat) => (
          <PixelButton
            key={cat}
            variant={category === cat ? "pink" : "ghost"}
            size="sm"
            onClick={() => setCategory(cat)}
          >
            {cat}
          </PixelButton>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={setSelected}
          />
        ))}
      </div>
    </Window>
  );
}
