import { galleryItems } from "../data/gallery";
import SectionHeading from "./SectionHeading";

const spanClass: Record<string, string> = {
  large: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2",
  tall: "md:row-span-2",
};

export default function GallerySection() {
  return (
    <section id="portfolio-gallery" className="bg-[#0b0c0c] py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          label="Portfolio"
          title={
            <>
              Hình ảnh, ánh sáng và khoảnh khắc thật được DST chuyển thành <span className="gradient-text">tài sản truyền thông</span>.
            </>
          }
          description="Các asset dưới đây thuộc dự án Valley Beach Club, được sắp đặt để thể hiện cách DST dùng sân khấu, crowd, poster và visual ưu đãi trong một hệ thống truyền thông nightlife."
        />
        <div className="grid auto-rows-[280px] gap-4 md:grid-cols-4">
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
