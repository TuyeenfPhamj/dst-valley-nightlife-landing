import { ArrowUpRight } from "lucide-react";
import { eventItems } from "../data/experiences";
import posterMinami from "../assets/valley-poster-minami.jpg";
import posterPhiLong from "../assets/valley-poster-philong.jpg";
import posterShenlongz from "../assets/valley-poster-shenlongz.jpg";
import SectionHeading from "./SectionHeading";

const posters = [
  { src: posterPhiLong, alt: "Poster Phi Long tại Valley Beach Club" },
  { src: posterShenlongz, alt: "Poster DJ Shenlongz tại Valley Beach Club" },
  { src: posterMinami, alt: "Poster Minami tại Valley Beach Club" },
];

export default function EventsSection() {
  return (
    <section id="portfolio" className="bg-dst-ink py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          label="Dự án tiêu biểu"
          title={
            <>
              Dự án nightlife DST đã triển khai: <span className="gradient-text">Valley Beach Club</span>.
            </>
          }
          description="Valley Beach Club được đặt trong khu vực portfolio như một ví dụ dự án thực tế, tập trung vào visual sự kiện, hình ảnh sân khấu, crowd và nội dung hỗ trợ truyền thông chương trình."
        />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid grid-cols-3 gap-3">
            {posters.map((poster, index) => (
              <img
                className={`h-full min-h-[320px] w-full rounded-lg bg-black object-contain p-2 ${
                  index === 1 ? "mt-10" : ""
                }`}
                src={poster.src}
                alt={poster.alt}
                loading="lazy"
                key={poster.alt}
              />
            ))}
          </div>
          <div className="grid gap-4">
            {eventItems.map((event) => (
              <article className="liquid-glass grid gap-5 rounded-lg p-6 md:grid-cols-[180px_1fr]" key={event.title}>
                <img
                  className="h-44 w-full rounded-lg bg-black object-contain p-2 md:h-full"
                  src={event.src}
                  alt={event.alt}
                  loading="lazy"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-dst-amber">{event.client}</p>
                  <p className="mt-2 text-sm text-stone-400">{event.category}</p>
                  <h3 className="mt-4 text-2xl font-medium text-white">{event.title}</h3>
                  <p className="mt-4 leading-8 text-stone-300">{event.description}</p>
                  <a
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-dst-amber transition hover:text-white"
                    href="#portfolio-gallery"
                  >
                    {event.cta ?? "Xem dự án"}
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
            <a
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-dst-amber px-6 py-3 font-medium text-black transition hover:bg-[#efaa50]"
              href="#lien-he"
            >
              Nhận tư vấn truyền thông cho venue
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
