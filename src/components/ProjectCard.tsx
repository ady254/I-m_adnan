import type { Project } from "../data/projects";
import { PixelButton } from "./PixelButton";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="pixel-border bg-os-panel/80 p-4 hover:border-neon-cyan/50 transition-all group">
      <div className="flex items-start justify-between gap-2 mb-3">
        <div>
          <span className="font-pixel text-[6px] text-neon-pink uppercase">
            {project.category}
          </span>
          <h3 className="font-pixel text-[10px] sm:text-xs text-neon-cyan mt-1 group-hover:neon-text-cyan">
            {project.name}
          </h3>
        </div>
        {project.featured && (
          <span className="font-pixel text-[6px] px-2 py-0.5 bg-neon-pink/20 text-neon-pink border border-neon-pink/40 shrink-0">
            ★ FEATURED
          </span>
        )}
      </div>

      <p className="text-sm text-text-muted mb-3 line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-3">
        {project.techStack.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="font-pixel text-[6px] px-1.5 py-0.5 bg-os-bg border border-os-border text-text-muted"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 5 && (
          <span className="font-pixel text-[6px] text-text-muted">
            +{project.techStack.length - 5}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <span className="font-pixel text-[6px] text-neon-green">
          {project.status}
        </span>
        <PixelButton variant="cyan" size="sm" onClick={() => onOpen(project)}>
          [ OPEN ]
        </PixelButton>
      </div>
    </article>
  );
}
