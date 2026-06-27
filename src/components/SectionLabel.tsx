interface SectionLabelProps {
  children: string;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-dst-amber">
      <span className="h-px w-8 bg-dst-amber" />
      {children}
    </p>
  );
}
