import { timelineItems } from "../data/experiences";
import SectionHeading from "./SectionHeading";

export default function BookingProcessSection() {
  return (
    <section className="bg-dst-ink py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          label="Quy trình"
          title="Từ concept đến nội dung, mỗi bước đều hướng về một đêm có khả năng lan tỏa."
          description="Quy trình dưới đây bám theo các dịch vụ được liệt kê trong hồ sơ và báo giá: content, thiết kế, media, quảng cáo và quản trị kênh."
        />
        <div className="grid gap-4 md:grid-cols-4">
          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <article className="relative rounded-lg bg-[#121414] p-6" key={item.title}>
                <span className="text-5xl font-light text-dst-amber/35">{String(index + 1).padStart(2, "0")}</span>
                <Icon className="mt-8 text-dst-amber" size={26} strokeWidth={1.6} />
                <h3 className="mt-5 text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-stone-400">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
