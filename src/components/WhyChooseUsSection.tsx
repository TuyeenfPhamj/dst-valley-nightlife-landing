import { Camera, Megaphone, Palette, RadioTower } from "lucide-react";
import { assets } from "../data/venue";
import SectionHeading from "./SectionHeading";

const reasons = [
  {
    icon: Camera,
    title: "Hình ảnh thật làm trung tâm",
    text: "Hồ sơ thể hiện cách DST triển khai hình ảnh, video và visual cho các thương hiệu nhà hàng, khách sạn, sự kiện.",
  },
  {
    icon: Palette,
    title: "Thiết kế theo concept",
    text: "Các poster và ấn phẩm Valley bám sát tinh thần beach club, mùa hè và âm nhạc về đêm.",
  },
  {
    icon: Megaphone,
    title: "Quản trị kênh truyền thông",
    text: "DST đồng hành với Valley bằng quản trị Fanpage, viết content, thiết kế hình ảnh và chạy ADS.",
  },
  {
    icon: RadioTower,
    title: "Phủ sóng tại Quảng Ninh",
    text: "Tài liệu nhấn mạnh mục tiêu tiếp cận khách địa phương và du khách đến với Quảng Ninh.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-[#0b0c0c] py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          label="Điểm mạnh"
          title="Một hệ sinh thái truyền thông vừa có ảnh, vừa có nhịp, vừa có kênh triển khai."
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
                Ánh sáng sân khấu là visual. Đám đông là câu chuyện.
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
