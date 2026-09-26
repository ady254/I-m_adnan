import { profile } from "../data/profile";
import { Window } from "./Window";

export function StatusPanel() {
  return (
    <Window title="CURRENTLY:" className="h-full" showControls={false}>
      <ul className="space-y-2">
        {profile.currently.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-text-muted"
          >
            <span className="text-neon-green font-pixel text-[10px] mt-0.5">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Window>
  );
}
