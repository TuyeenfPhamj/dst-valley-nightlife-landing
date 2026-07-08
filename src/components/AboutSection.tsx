import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { assets, venue } from "../data/venue";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="van-de" className="bg-dst-ink py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          label="Thách thức thị trường nightlife"
          title={
            <>
              Một venue đầu tư mạnh chưa chắc đã tự biến thành <span className="gradient-text">điểm hẹn bùng nổ</span>.
            </>
          }
          description={venue.description}
        />

        <div className="grid gap-6 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.1fr_0.9fr] md:items-stretch">
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
              <p className="text-sm uppercase tracking-[0.24em] text-stone-300">Điểm nghẽn truyền thông thường gặp</p>
              <ul className="mt-6 grid gap-4">
                {venue.conceptPoints.map((point) => (
                  <li className="flex gap-3 text-base leading-7 text-stone-100" key={point}>
                    <Check className="mt-1 shrink-0 text-dst-amber" size={18} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-[#121414] p-7">
              <Sparkles className="text-dst-amber" size={28} strokeWidth={1.6} />
              <h3 className="mt-6 text-2xl font-medium text-white">
                Truyền thông cần nối liền trải nghiệm thật với lý do đặt bàn.
              </h3>
              <p className="mt-4 leading-7 text-stone-400">
                DST giúp venue chuyển không gian, line-up, ưu đãi và khoảnh khắc khách hàng thành một mạch nội dung dễ hiểu, dễ nhớ và dễ hành động.
              </p>
              <a
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-stone-100"
                href="#dich-vu"
              >
                Khám phá giải pháp DST
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
