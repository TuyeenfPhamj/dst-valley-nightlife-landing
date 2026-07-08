import { solutionItems } from "../data/experiences";
import { assets } from "../data/venue";
import ExperienceCard from "./ExperienceCard";
import SectionHeading from "./SectionHeading";

export default function WhyChooseUsSection() {
  return (
    <section id="giai-phap" className="bg-[#0b0c0c] py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          label="Giải pháp truyền thông"
          title={
            <>
              DST xây hệ thống truyền thông cho từng <span className="gradient-text">nhịp đêm</span>, không chỉ làm đẹp kênh.
            </>
          }
          description="Mỗi điểm chạm cần phục vụ cùng một câu chuyện: khách thấy venue khác biệt, hiểu chương trình đang diễn ra và biết bước tiếp theo để đặt bàn, mua vé hoặc rủ bạn bè cùng đến."
        />
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
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
            {solutionItems.map((item) => (
              <ExperienceCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
