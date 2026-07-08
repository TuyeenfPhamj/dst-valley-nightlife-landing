import type { ReactNode } from "react";
import SectionLabel from "./SectionLabel";

interface SectionHeadingProps {
  label: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  children,
  className = "",
  titleClassName = "",
  contentClassName = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 grid gap-6 md:grid-cols-[1fr_1fr] lg:grid-cols-[0.95fr_1.05fr] md:items-end ${className}`}>
      <div>
        <SectionLabel>{label}</SectionLabel>
        <h2 className={`max-w-3xl text-balance text-3xl font-normal leading-tight text-white md:text-5xl ${titleClassName}`}>
          {title}
        </h2>
      </div>
      <div className={`max-w-2xl text-base leading-8 text-stone-300 md:text-lg ${contentClassName}`}>
        {description && <p>{description}</p>}
        {children}
      </div>
    </div>
  );
}
