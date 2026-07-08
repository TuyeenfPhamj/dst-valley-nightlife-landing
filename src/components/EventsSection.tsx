import { ArrowUpRight } from "lucide-react";
import { eventItems } from "../data/experiences";
import SectionHeading from "./SectionHeading";

export default function EventsSection() {
  return (
    <section id="portfolio" className="bg-dst-ink py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          label="Case study thực chiến"
          title={
            <>
              Chiến dịch định vị thương hiệu nightlife: <span className="gradient-text">Valley Beach Club</span>.
            </>
          }
          description="Valley Beach Club là dự án portfolio tiêu biểu của DST Group, tập trung vào key visual sự kiện, hình ảnh sân khấu, crowd, social content và nội dung hỗ trợ booking."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {eventItems.map((event) => (
            <article className="liquid-glass flex h-full flex-col overflow-hidden rounded-lg" key={event.title}>
              <div className="bg-black p-3">
                <img
                  className="mx-auto aspect-[4/3] h-full max-h-[260px] w-full rounded-lg object-contain"
                  src={event.src}
                  alt={event.alt}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-dst-amber">{event.client}</p>
                <p className="mt-2 text-sm text-stone-400">{event.category}</p>
                <h3 className="mt-4 text-2xl font-medium leading-tight text-white">{event.title}</h3>
                <p className="mt-4 flex-1 leading-8 text-stone-300">{event.description}</p>
                <a
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-dst-amber transition hover:text-white"
                  href="#portfolio-gallery"
                >
                  {event.cta ?? "Khám phá dự án"}
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <a
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-dst-amber px-6 py-3 font-medium text-black transition hover:bg-[#efaa50]"
          href="#lien-he"
        >
          Nhận đề xuất chiến lược cho venue
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
