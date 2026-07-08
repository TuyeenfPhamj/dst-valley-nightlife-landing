import { galleryItems } from "../data/gallery";
import SectionHeading from "./SectionHeading";

const spanClass: Record<string, string> = {
  large: "sm:col-span-2 sm:row-span-2",
  wide: "sm:col-span-2",
  tall: "sm:row-span-2",
};

export default function GallerySection() {
  return (
    <section id="portfolio-gallery" className="bg-[#0b0c0c] py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          label="Creative Portfolio"
          title={
            <>
              Quy chuẩn hóa âm thanh, ánh sáng và khoảnh khắc thực chiến thành <span className="gradient-text">tài sản thương hiệu</span>.
            </>
          }
          description="Khám phá kho tài sản truyền thông thực chiến từ dự án Valley Beach Club. Từng hình ảnh sân khấu, kỹ xảo ánh sáng, video sự kiện đến Key Visual đều được DST quy chuẩn hóa để tối đa hóa nhận diện thương hiệu và gia tăng tỷ lệ chuyển đổi."
        />
        <div className="grid auto-rows-[280px] gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-flow-dense">
          {galleryItems.map((item) => (
            <article
              className={`group relative overflow-hidden rounded-lg bg-black ${item.span ? spanClass[item.span] : ""}`}
              key={item.title}
            >
              <img
                className={`h-full w-full transition duration-700 group-hover:scale-105 ${
                  item.fit === "contain" ? "object-contain p-2" : "object-cover"
                }`}
                src={item.src}
                alt={item.alt}
                loading="lazy"
                style={{ objectPosition: item.position ?? "center" }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5">
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
