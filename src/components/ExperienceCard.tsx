import type { ExperienceItem } from "../types/venue";

interface ExperienceCardProps {
  item: ExperienceItem;
  featured?: boolean;
}

const toneClass: Record<ExperienceItem["tone"], string> = {
  amber: "bg-gradient-to-br from-[#e9a441] via-dst-amber to-[#b96b22] text-black",
  teal: "bg-gradient-to-br from-dst-teal via-[#244d51] to-[#142829] text-white",
  dark: "bg-gradient-to-br from-[#202020] via-[#151515] to-[#0d1717] text-white",
};

export default function ExperienceCard({ item, featured = false }: ExperienceCardProps) {
  const Icon = item.icon;

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-lg shadow-[0_22px_70px_rgba(0,0,0,0.24)] ring-1 ring-white/5 ${toneClass[item.tone]}`}
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          src={item.src}
          alt={item.alt}
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] opacity-70">{item.tag}</span>
          <Icon size={24} strokeWidth={1.6} />
        </div>
        <h3 className="text-2xl font-medium">{item.title}</h3>
        <p className="mt-4 leading-7 opacity-80">{item.description}</p>
      </div>
    </article>
  );
}
