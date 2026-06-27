import { experienceItems } from "../data/experiences";
import ExperienceCard from "./ExperienceCard";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section
      id="trai-nghiem"
      className="relative scroll-mt-28 overflow-hidden bg-[radial-gradient(circle_at_18%_16%,rgba(220,150,60,0.16),transparent_30rem),radial-gradient(circle_at_82%_18%,rgba(56,113,119,0.24),transparent_34rem),linear-gradient(135deg,#080a0a_0%,#101818_48%,#050505_100%)] py-24 md:py-32"
    >
      <div className="section-shell">
        <SectionHeading
          label="Trải nghiệm"
          title="Không chỉ là một đêm nhạc, mà là cách venue kể câu chuyện của mình."
          description="Các điểm chạm hình ảnh được xây từ những gì tài liệu ghi nhận: beach bar Bohemian, sân khấu ánh sáng, nội dung truyền thông và khoảnh khắc khách hàng."
          className="mb-12 lg:items-start"
          titleClassName="md:text-[2.625rem] lg:max-w-[36rem]"
          contentClassName="lg:pt-8"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:items-start">
          {experienceItems.map((item, index) => (
            <ExperienceCard item={item} featured={index === 1} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
