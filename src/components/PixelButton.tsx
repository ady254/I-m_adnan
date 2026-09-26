import type { ButtonHTMLAttributes, ReactNode } from "react";

interface PixelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "pink" | "cyan" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function PixelButton({
  children,
  variant = "pink",
  size = "md",
  className = "",
  ...props
}: PixelButtonProps) {
  const variants = {
    pink: "bg-neon-pink/20 border-neon-pink text-neon-pink hover:bg-neon-pink/30 hover:shadow-[0_0_20px_rgba(255,45,149,0.4)]",
    cyan: "bg-neon-cyan/10 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]",
    ghost: "bg-transparent border-text-muted text-text-muted hover:border-neon-cyan hover:text-neon-cyan",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-[8px]",
    md: "px-4 py-2 text-[10px]",
    lg: "px-6 py-3 text-xs",
  };

  return (
    <button
      className={`font-pixel border-2 transition-all duration-200 glitch-hover ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
