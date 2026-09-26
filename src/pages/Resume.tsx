import { resume } from "../data/resume";
import { Window } from "../components/Window";
import { PixelButton } from "../components/PixelButton";

export function Resume() {
  const skillGroups = [
    { label: "Languages", items: resume.skills.languages },
    { label: "Frontend", items: resume.skills.frontend },
    { label: "Backend", items: resume.skills.backend },
    { label: "Databases", items: resume.skills.databases },
    { label: "Cloud / DevOps", items: resume.skills.cloudDevOps },
    { label: "Tools", items: resume.skills.tools },
    { label: "CS Fundamentals", items: resume.skills.fundamentals },
  ];

  return (
    <Window title="RESUME.EXE" className="max-w-2xl mx-auto animate-[fadeIn_0.3s_ease]">
      <div className="bg-white text-gray-900 p-6 sm:p-8 shadow-inner min-h-[400px] font-body">
        <header className="border-b-2 border-gray-300 pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{resume.name}</h1>
          <p className="text-gray-600 mt-1">{resume.title}</p>
          <p className="text-sm text-gray-500 mt-2">
            {resume.location} ·{" "}
            <a
              href={`mailto:${resume.email}`}
              className="text-blue-700 hover:underline"
            >
              {resume.email}
            </a>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            <a
              href={resume.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline mr-3"
            >
              GitHub
            </a>
            <a
              href={resume.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </header>

        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-3 border-b border-gray-200 pb-1">
            Education
          </h2>
          {resume.education.map((edu) => (
            <div key={edu.degree} className="mb-2">
              <p className="font-semibold">{edu.degree}</p>
              <p className="text-sm text-gray-600">
                {edu.institution} · {edu.period}
              </p>
              {edu.note && (
                <p className="text-sm text-gray-500">{edu.note}</p>
              )}
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-3 border-b border-gray-200 pb-1">
            Experience
          </h2>
          {resume.experience.map((exp) => (
            <div key={exp.role + exp.company} className="mb-4">
              <p className="font-semibold">
                {exp.role} — {exp.company}
              </p>
              <p className="text-xs text-gray-500">
                {exp.location} · {exp.period}
              </p>
              <p className="text-sm text-gray-600 mt-1 italic">{exp.context}</p>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                {exp.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-3 border-b border-gray-200 pb-1">
            Projects
          </h2>
          {resume.projects.map((project) => (
            <div key={project.name} className="mb-4">
              <p className="font-semibold">
                {project.name}{" "}
                <span className="font-normal text-gray-500 text-sm">
                  | {project.period}
                </span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {project.techStack.join(" · ")}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-3 border-b border-gray-200 pb-1">
            Technical Skills
          </h2>
          <div className="space-y-2 text-sm text-gray-600">
            {skillGroups.map((group) => (
              <p key={group.label}>
                <span className="font-semibold text-gray-700">
                  {group.label}:
                </span>{" "}
                {group.items.join(", ")}
              </p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-3 border-b border-gray-200 pb-1">
            Achievements & Certifications
          </h2>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {resume.achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-6 flex justify-center">
        <a href={resume.downloadPath} download>
          <PixelButton variant="pink" size="lg">
            [ DOWNLOAD RESUME ]
          </PixelButton>
        </a>
      </div>
      <p className="text-center font-pixel text-[6px] text-text-muted mt-3">
        Add your PDF at public/Adnan-Ahmad-Resume.pdf
      </p>
    </Window>
  );
}
