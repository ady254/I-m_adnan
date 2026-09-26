import { resume } from "../data/resume";
import { Window } from "../components/Window";
import { PixelButton } from "../components/PixelButton";

export function Resume() {
  return (
    <Window title="RESUME.EXE" className="max-w-2xl mx-auto animate-[fadeIn_0.3s_ease]">
      <div className="bg-white text-gray-900 p-6 sm:p-8 shadow-inner min-h-[400px] font-body">
        <header className="border-b-2 border-gray-300 pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">{resume.name}</h1>
          <p className="text-gray-600 mt-1">{resume.title}</p>
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
              <p className="text-xs text-gray-500">{exp.period}</p>
              <p className="text-sm text-gray-600 mt-1">{exp.description}</p>
            </div>
          ))}
        </section>

        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-3 border-b border-gray-200 pb-1">
            Projects
          </h2>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {resume.projects.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-3 border-b border-gray-200 pb-1">
            Skills
          </h2>
          <p className="text-sm text-gray-600">{resume.skills.join(" · ")}</p>
        </section>

        <section>
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-3 border-b border-gray-200 pb-1">
            Achievements
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
        Place your PDF at public/Adnan-Ahmad-Resume.pdf
      </p>
    </Window>
  );
}
