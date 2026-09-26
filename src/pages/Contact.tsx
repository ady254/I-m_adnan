import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { profile } from "../data/profile";
import { Window } from "../components/Window";
import { PixelAvatar } from "../components/PixelAvatar";
import { PixelButton } from "../components/PixelButton";

const links = [
  {
    label: "EMAIL",
    value: profile.contact.email,
    icon: Mail,
    href: profile.contact.email.startsWith("[")
      ? undefined
      : `mailto:${profile.contact.email}`,
  },
  {
    label: "LINKEDIN",
    value: profile.contact.linkedin,
    icon: Linkedin,
    href: profile.contact.linkedin.startsWith("[")
      ? undefined
      : profile.contact.linkedin.startsWith("http")
        ? profile.contact.linkedin
        : `https://${profile.contact.linkedin}`,
  },
  {
    label: "GITHUB",
    value: profile.contact.github,
    icon: Github,
    href: profile.contact.github.startsWith("[")
      ? undefined
      : profile.contact.github,
  },
  {
    label: "INSTAGRAM",
    value: profile.contact.instagram,
    icon: Instagram,
    href: profile.contact.instagram.startsWith("[")
      ? undefined
      : profile.contact.instagram,
  },
];

export function Contact() {
  return (
    <Window title="CONTACT.EXE" className="max-w-2xl mx-auto animate-[fadeIn_0.3s_ease]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="font-pixel text-sm text-neon-pink neon-text-pink mb-3">
            Let's build something awesome.
          </h2>
          <p className="text-sm text-text-muted mb-6 leading-relaxed">
            Whether it's a project, opportunity, collaboration, or just a random
            idea...
            <br />
            <br />
            I'm probably interested.
          </p>

          <div className="space-y-3">
            {links.map(({ label, value, icon: Icon, href }) => (
              <div key={label}>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <PixelButton variant="cyan" size="md" className="w-full flex items-center justify-center gap-2">
                      <Icon size={14} />
                      [ {label} ]
                    </PixelButton>
                  </a>
                ) : (
                  <PixelButton
                    variant="ghost"
                    size="md"
                    className="w-full flex items-center justify-center gap-2 opacity-60 cursor-not-allowed"
                    disabled
                  >
                    <Icon size={14} />
                    [ {label} ] — {value}
                  </PixelButton>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <PixelAvatar variant="contact" className="w-48 h-48" />
        </div>
      </div>
    </Window>
  );
}
