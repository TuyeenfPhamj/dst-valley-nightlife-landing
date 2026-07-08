import { timelineItems } from "../data/experiences";
import SectionHeading from "./SectionHeading";

export default function BookingProcessSection() {
  return (
    <section id="quy-trinh" className="bg-dst-ink py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          label="Quy Trình Thực Chiến"
          title={
            <>
              Đồng hành từ khâu định hướng chiến lược đến bùng nổ <span className="gradient-text">trước, trong và sau sự kiện</span>.
            </>
          }
          description="Quy trình làm việc chuẩn hóa giúp chủ đầu tư và ban điều hành kiểm soát hoàn toàn tiến độ, chất lượng ấn phẩm sản xuất, hiệu quả phân phối kênh và chỉ số ROI thực tế."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-5">
          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            let spanClass = "sm:col-span-1 lg:col-span-2 xl:col-span-1";
            if (index === 3) {
              spanClass = "sm:col-span-1 lg:col-span-3 xl:col-span-1";
            } else if (index === 4) {
              spanClass = "sm:col-span-2 lg:col-span-3 xl:col-span-1";
            }
            return (
              <article className={`relative rounded-lg bg-[#121414] p-6 ${spanClass}`} key={item.title}>
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
