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
    <section id="su-kien" className="bg-dst-ink py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          label="Sự kiện"
          title="Ấn phẩm và hình ảnh sự kiện được thiết kế để kéo người xem vào nhịp đêm."
          description="Tài liệu có poster chương trình và hình ảnh sân khấu thực tế. Website chỉ hiển thị các chương trình đã xuất hiện trong tư liệu, không tự dựng lịch mới."
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid grid-cols-3 gap-3">
            {posters.map((poster, index) => (
              <img
                className={`h-full min-h-[320px] w-full rounded-lg object-cover ${index === 1 ? "mt-10" : ""}`}
                src={poster.src}
                alt={poster.alt}
                loading="lazy"
                key={poster.alt}
              />
            ))}
          </div>
          <div className="grid gap-4">
            {eventItems.map((event) => (
              <article className="liquid-glass rounded-lg p-6" key={event.title}>
                <h3 className="text-2xl font-medium text-white">{event.title}</h3>
                <p className="mt-4 leading-8 text-stone-300">{event.description}</p>
              </article>
            ))}
            <a
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-dst-amber px-6 py-3 font-medium text-black transition hover:bg-[#efaa50]"
              href="#lien-he"
            >
              Trao đổi kế hoạch truyền thông
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
