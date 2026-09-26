interface PixelAvatarProps {
  variant?: "hero" | "about" | "contact" | "bot";
  className?: string;
}

export function PixelAvatar({ variant = "hero", className = "" }: PixelAvatarProps) {
  if (variant === "bot") {
    return (
      <svg
        viewBox="0 0 32 32"
        className={`${className}`}
        aria-hidden="true"
      >
        <rect x="8" y="6" width="16" height="14" fill="#1a0030" stroke="#00f0ff" strokeWidth="2" />
        <rect x="11" y="10" width="4" height="4" fill="#00f0ff" />
        <rect x="17" y="10" width="4" height="4" fill="#00f0ff" />
        <rect x="13" y="16" width="6" height="2" fill="#ff2d95" />
        <rect x="6" y="20" width="4" height="8" fill="#1a0030" stroke="#b026ff" strokeWidth="1" />
        <rect x="22" y="20" width="4" height="8" fill="#1a0030" stroke="#b026ff" strokeWidth="1" />
        <rect x="10" y="22" width="12" height="6" fill="#1a0030" stroke="#b026ff" strokeWidth="1" />
      </svg>
    );
  }

  if (variant === "contact") {
    return (
      <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
        <rect x="20" y="8" width="24" height="20" fill="#ff6b2b" />
        <rect x="24" y="14" width="4" height="4" fill="#0a0014" />
        <rect x="36" y="14" width="4" height="4" fill="#0a0014" />
        <rect x="28" y="22" width="8" height="2" fill="#0a0014" />
        <rect x="16" y="28" width="32" height="20" fill="#1a0030" stroke="#00f0ff" strokeWidth="2" />
        <rect x="20" y="32" width="24" height="12" fill="#0a0014" stroke="#b026ff" strokeWidth="1" />
        <rect x="8" y="36" width="48" height="4" fill="#3d0066" />
        <rect x="12" y="40" width="8" height="4" fill="#ff2d95" />
        <rect x="22" y="40" width="8" height="4" fill="#39ff14" />
        <rect x="32" y="40" width="8" height="4" fill="#00f0ff" />
        <rect x="42" y="40" width="8" height="4" fill="#b026ff" />
      </svg>
    );
  }

  if (variant === "about") {
    return (
      <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
        <rect x="16" y="6" width="16" height="16" fill="#ff6b2b" />
        <rect x="20" y="12" width="3" height="3" fill="#0a0014" />
        <rect x="25" y="12" width="3" height="3" fill="#0a0014" />
        <rect x="21" y="18" width="6" height="2" fill="#0a0014" />
        <rect x="12" y="22" width="24" height="16" fill="#1a0030" stroke="#ff2d95" strokeWidth="2" />
        <rect x="14" y="38" width="8" height="8" fill="#1a0030" stroke="#b026ff" strokeWidth="1" />
        <rect x="26" y="38" width="8" height="8" fill="#1a0030" stroke="#b026ff" strokeWidth="1" />
      </svg>
    );
  }

  // Hero - character at desk with cat
  return (
    <svg viewBox="0 0 120 80" className={className} aria-hidden="true">
      {/* Desk */}
      <rect x="10" y="55" width="100" height="6" fill="#3d0066" />
      <rect x="15" y="48" width="40" height="8" fill="#1a0030" stroke="#00f0ff" strokeWidth="1" />
      <rect x="18" y="50" width="34" height="5" fill="#0a0014" />
      {/* Character head */}
      <rect x="55" y="22" width="14" height="14" fill="#ff6b2b" />
      <rect x="58" y="26" width="3" height="3" fill="#0a0014" />
      <rect x="63" y="26" width="3" height="3" fill="#0a0014" />
      <rect x="59" y="32" width="6" height="2" fill="#0a0014" />
      {/* Body */}
      <rect x="52" y="36" width="20" height="14" fill="#1a0030" stroke="#ff2d95" strokeWidth="1" />
      {/* Cat */}
      <rect x="78" y="48" width="10" height="8" fill="#b026ff" />
      <rect x="76" y="46" width="3" height="3" fill="#b026ff" />
      <rect x="87" y="46" width="3" height="3" fill="#b026ff" />
      <rect x="80" y="52" width="2" height="2" fill="#00f0ff" />
      <rect x="84" y="52" width="2" height="2" fill="#00f0ff" />
      {/* Monitor glow */}
      <rect x="20" y="46" width="2" height="2" fill="#39ff14" className="animate-pulse" />
    </svg>
  );
}
