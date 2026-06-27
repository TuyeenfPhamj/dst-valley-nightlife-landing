import stage from "../assets/valley-stage.jpg";
import crowd from "../assets/valley-crowd.jpg";
import lights from "../assets/valley-lights.jpg";
import posterMinami from "../assets/valley-poster-minami.jpg";
import posterShenlongz from "../assets/valley-poster-shenlongz.jpg";
import posterPhiLong from "../assets/valley-poster-philong.jpg";
import combo from "../assets/valley-combo.jpg";
import summer from "../assets/valley-summer.jpg";
import type { GalleryItem } from "../types/venue";

export const galleryItems: GalleryItem[] = [
  {
    title: "Sân khấu ánh sáng",
    caption: "Không gian sự kiện ngoài trời với hệ thống màn hình và ánh sáng mạnh.",
    src: stage,
    alt: "Sân khấu Valley Beach Club với ánh sáng và màn hình lớn",
    span: "large",
  },
  {
    title: "Đám đông sự kiện",
    caption: "Không khí khách tham gia trong một chương trình tại Valley Beach Club.",
    src: crowd,
    alt: "Khách tham gia sự kiện tại Valley Beach Club",
  },
  {
    title: "Ánh sáng beach club",
    caption: "Chi tiết ánh sáng, trang trí và sắc thái ngoài trời về đêm.",
    src: lights,
    alt: "Ánh sáng và trang trí tại Valley Beach Club",
  },
  {
    title: "Visual chương trình",
    caption: "Ấn phẩm truyền thông cho chương trình âm nhạc.",
    src: posterMinami,
    alt: "Poster chương trình Minami tại Valley Beach Club",
    span: "tall",
  },
  {
    title: "DJ Shenlongz",
    caption: "Poster truyền thông sự kiện âm nhạc.",
    src: posterShenlongz,
    alt: "Poster DJ Shenlongz tại Valley Beach Club",
  },
  {
    title: "Phi Long",
    caption: "Ấn phẩm sự kiện biểu diễn được thiết kế cho Valley Beach Club.",
    src: posterPhiLong,
    alt: "Poster Phi Long tại Valley Beach Club",
  },
  {
    title: "Combo dịch vụ",
    caption: "Thiết kế gói đồ uống và món ăn trong nội dung truyền thông.",
    src: combo,
    alt: "Poster combo đồ uống và món ăn của Valley Beach Club",
  },
  {
    title: "Quẩy xuyên đêm",
    caption: "Visual truyền thông theo phong cách mùa hè của Valley Beach Club.",
    src: summer,
    alt: "Ấn phẩm quẩy xuyên đêm tại Valley Beach Club",
    span: "wide",
  },
];
