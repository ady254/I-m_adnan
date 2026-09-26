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
  X,
} from "lucide-react";

const navItems = [
  { path: "/", label: "HOME", icon: Home },
  { path: "/about", label: "ABOUT.EXE", icon: User },
  { path: "/innvox", label: "INNVOX.EXE", icon: Building2 },
  { path: "/projects", label: "PROJECTS.EXE", icon: FolderKanban },
  { path: "/stack", label: "STACK.EXE", icon: Layers },
  { path: "/thoughts", label: "THOUGHTS.EXE", icon: MessageSquare },
  { path: "/resume", label: "RESUME.EXE", icon: FileText },
  { path: "/contact", label: "CONTACT.EXE", icon: Mail },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-56 lg:w-48 xl:w-52
          bg-os-surface border-r-2 border-os-border
          flex flex-col shrink-0
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
        aria-label="Application navigation"
      >
        <div className="p-4 border-b border-os-border flex items-center justify-between">
          <div>
            <h1 className="font-pixel text-[10px] text-neon-pink neon-text-pink">
              ADNAN.OS
            </h1>
            <p className="font-pixel text-[6px] text-text-muted mt-1">v2.6</p>
          </div>
          <button
            type="button"
            className="lg:hidden text-text-muted hover:text-neon-pink p-1"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 p-2 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === "/"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-3 py-2.5 font-pixel text-[8px] transition-all border-l-2 ${
                      isActive
                        ? "bg-neon-pink/10 border-neon-pink text-neon-pink"
                        : "border-transparent text-text-muted hover:text-neon-cyan hover:bg-neon-cyan/5 hover:border-neon-cyan/50"
                    }`
                  }
                >
                  <Icon size={14} aria-hidden="true" />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
