import { ArrowUpRight, Check } from "lucide-react";
import { assets, venue } from "../data/venue";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="van-de" className="bg-dst-ink py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          label="Vì sao venue cần truyền thông"
          title={
            <>
              Một venue tốt chưa chắc đã trở thành <span className="gradient-text">điểm hẹn</span>.
            </>
          }
          description={venue.description}
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div className="image-frame overflow-hidden rounded-lg">
            <img
              className="h-full min-h-[360px] w-full object-cover object-[center_38%] transition duration-700 hover:scale-105"
              src={assets.crowdImage}
              alt="Khách tham gia một chương trình nightlife"
              loading="lazy"
            />
          </div>
          <div className="grid gap-6">
            <div className="rounded-lg bg-dst-teal p-7 text-white">
              <p className="text-sm uppercase tracking-[0.24em] text-stone-300">Vấn đề thường gặp</p>
              <ul className="mt-6 grid gap-4">
                {venue.conceptPoints.map((point) => (
                  <li className="flex gap-3 text-base leading-7 text-stone-100" key={point}>
                    <Check className="mt-1 shrink-0 text-dst-amber" size={18} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img
                className="h-64 w-full object-cover object-[center_65%] transition duration-700 hover:scale-105"
                src={assets.lightsImage}
                alt="Ánh sáng và không khí của venue về đêm"
                loading="lazy"
              />
              <a
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-stone-100"
                href="#dich-vu"
              >
                Xem dịch vụ DST
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
