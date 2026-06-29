import { galleryItems } from "../data/gallery";
import SectionHeading from "./SectionHeading";

const spanClass: Record<string, string> = {
  large: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2",
  tall: "md:row-span-2",
};

export default function GallerySection() {
  return (
    <section id="khong-gian" className="bg-[#0b0c0c] py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          label="Không gian"
          title="Không gian thương hiệu được kể bằng những khoảnh khắc thật."
          description="DST chọn lọc, xử lý và sắp đặt hình ảnh từ sân khấu, khách tham gia và ấn phẩm để tạo nên một gallery nhất quán, giàu cảm xúc cho Valley Beach Club."
        />
        <div className="grid auto-rows-[240px] gap-4 md:grid-cols-4">
          {galleryItems.map((item) => (
            <article
              className={`group relative overflow-hidden rounded-lg ${item.span ? spanClass[item.span] : ""}`}
              key={item.title}
            >
              <img
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                src={item.src}
                alt={item.alt}
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5">
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-300">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
