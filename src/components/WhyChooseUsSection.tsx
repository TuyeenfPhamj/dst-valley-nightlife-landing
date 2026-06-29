import { Camera, Megaphone, Palette, RadioTower } from "lucide-react";
import { assets } from "../data/venue";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    icon: Camera,
    title: "Hình ảnh thật làm trung tâm",
    text: "DST khai thác hình ảnh, video và visual thực tế để biến từng khoảnh khắc của sự kiện thành chất liệu truyền thông có sức lan tỏa.",
  },
  {
    icon: Palette,
    title: "Thiết kế theo concept",
    text: "DST phát triển poster và ấn phẩm theo concept beach club, giữ nhất quán tinh thần mùa hè, âm nhạc và trải nghiệm về đêm.",
  },
  {
    icon: Megaphone,
    title: "Quản trị kênh truyền thông",
    text: "DST đồng hành cùng Valley trong quản trị Fanpage, xây dựng nội dung, thiết kế hình ảnh và triển khai quảng cáo để duy trì nhịp truyền thông cho từng chương trình.",
  },
  {
    icon: RadioTower,
    title: "Tăng độ phủ tại Quảng Ninh",
    text: "DST định hướng nội dung và kênh truyền thông để tiếp cận khách địa phương lẫn du khách đang tìm kiếm trải nghiệm giải trí tại Hạ Long.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-[#0b0c0c] py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          label="Điểm mạnh"
          title="DST xây dựng hệ sinh thái truyền thông từ hình ảnh, nội dung đến các kênh triển khai."
        />
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-lg">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={assets.heroStage}
              alt="Không gian sân khấu Valley Beach Club"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-black/55 p-6 backdrop-blur">
              <p className="text-3xl font-light leading-tight text-white md:text-4xl">
                DST biến ánh sáng sân khấu thành visual. Biến đám đông thành câu chuyện thương hiệu.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <article
                  className={`rounded-lg p-6 ${
                    index === 1 ? "bg-dst-amber text-black" : index === 2 ? "bg-dst-teal text-white" : "bg-[#171717]"
                  }`}
                  key={reason.title}
                >
                  <Icon size={28} strokeWidth={1.6} />
                  <h3 className="mt-8 text-xl font-medium">{reason.title}</h3>
                  <p className="mt-4 leading-7 opacity-80">{reason.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
