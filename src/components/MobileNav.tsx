import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  Building2,
  FolderKanban,
  Layers,
  MessageSquare,
  FileText,
  Mail,
} from "lucide-react";

const items = [
  { path: "/", label: "Home", icon: Home },
  { path: "/about", label: "About", icon: User },
  { path: "/innvox", label: "Innvox", icon: Building2 },
  { path: "/projects", label: "Projects", icon: FolderKanban },
  { path: "/stack", label: "Stack", icon: Layers },
  { path: "/thoughts", label: "Thoughts", icon: MessageSquare },
  { path: "/resume", label: "Resume", icon: FileText },
  { path: "/contact", label: "Contact", icon: Mail },
];

export function MobileNav() {
  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-os-surface border-t-2 border-os-border safe-area-pb"
      aria-label="Mobile navigation"
    >
      <ul className="flex overflow-x-auto gap-0 px-1 py-1 scrollbar-none">
        {items.map(({ path, label, icon: Icon }) => (
          <li key={path} className="shrink-0">
            <NavLink
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 px-2.5 py-2 min-w-[56px] font-pixel text-[6px] transition-colors ${
                  isActive
                    ? "text-neon-pink"
                    : "text-text-muted hover:text-neon-cyan"
                }`
              }
            >
              <Icon size={16} aria-hidden="true" />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
