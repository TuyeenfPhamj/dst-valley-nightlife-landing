import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
  return (
    <div className={`animate-fade-up opacity-0 ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
