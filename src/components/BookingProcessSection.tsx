import { timelineItems } from "../data/experiences";
import SectionHeading from "./SectionHeading";

export default function BookingProcessSection() {
  return (
    <section id="quy-trinh" className="bg-dst-ink py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          label="Cách DST triển khai"
          title={
            <>
              Từ brief venue đến nhịp truyền thông <span className="gradient-text">trước, trong và sau đêm diễn</span>.
            </>
          }
          description="Quy trình giúp đội vận hành biết nội dung nào cần ưu tiên, hình ảnh nào cần sản xuất, kênh nào cần triển khai và đợt tiếp theo nên tối ưu điều gì."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
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
