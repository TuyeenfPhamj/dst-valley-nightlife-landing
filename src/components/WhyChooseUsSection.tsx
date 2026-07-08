import { solutionItems } from "../data/experiences";
import { assets } from "../data/venue";
import SectionHeading from "./SectionHeading";

const toneClass = ["bg-[#171717] text-white", "bg-dst-amber text-black", "bg-dst-teal text-white", "bg-[#121414] text-white"];

export default function WhyChooseUsSection() {
  return (
    <section id="giai-phap" className="bg-[#0b0c0c] py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          label="Chiến lược khác biệt"
          title={
            <>
              Kiến tạo vị thế và sức hút cho từng <span className="gradient-text">đêm diễn</span>, không chỉ dừng ở hình ảnh đẹp.
            </>
          }
          description="Mỗi điểm chạm tiếp thị đều được thiết kế với mục tiêu rõ ràng: định danh bản sắc của venue, tạo hiệu ứng chờ đợi cho sự kiện và thúc đẩy quyết định đặt bàn nhanh hơn."
        />
        <div className="grid gap-6 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="relative min-h-[520px] overflow-hidden rounded-lg">
            <img
              className="absolute inset-0 h-full w-full object-cover object-[center_top]"
              src={assets.heroStage}
              alt="Ánh sáng sân khấu và không khí của một venue nightlife"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-black/60 p-6 backdrop-blur">
              <p className="text-3xl font-light leading-tight text-white md:text-4xl">
                DST biến ánh sáng sân khấu thành visual. Biến đám đông thành câu chuyện thương hiệu.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {solutionItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className={`rounded-lg p-6 ${toneClass[index % toneClass.length]}`} key={item.title}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/20">
                    <Icon size={26} strokeWidth={1.6} />
                  </div>
                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] opacity-70">{item.tag}</p>
                  <h3 className="mt-4 text-xl font-medium leading-tight">{item.title}</h3>
                  <p className="mt-4 leading-7 opacity-80">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
