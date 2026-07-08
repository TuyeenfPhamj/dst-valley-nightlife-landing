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
    title: "Valley Beach Club - sân khấu & ánh sáng LED",
    caption: "Hệ thống màn hình và ánh sáng được dùng như chất liệu visual chính cho các đêm diễn.",
    src: stage,
    alt: "Sân khấu Valley Beach Club với ánh sáng và màn hình lớn",
    span: "large",
    fit: "cover",
    position: "center top",
  },
  {
    title: "Valley Beach Club - crowd",
    caption: "Khoảnh khắc khách tham gia giúp dự án có chất liệu truyền thông thật và giàu cảm xúc.",
    src: crowd,
    alt: "Khách tham gia sự kiện tại Valley Beach Club",
    fit: "cover",
    position: "center 38%",
  },
  {
    title: "Valley Beach Club - không gian đêm",
    caption: "Ánh sáng, trang trí và sắc thái ngoài trời hỗ trợ nhận diện nightlife cho venue.",
    src: lights,
    alt: "Ánh sáng và trang trí tại Valley Beach Club",
    fit: "cover",
    position: "center center",
  },
  {
    title: "Valley Beach Club - poster Minami",
    caption: "Ấn phẩm line-up được giữ trọn tỉ lệ để người xem đọc được thông tin chính.",
    src: posterMinami,
    alt: "Poster chương trình Minami tại Valley Beach Club",
    fit: "contain",
  },
  {
    title: "Valley Beach Club - DJ Shenlongz",
    caption: "Key visual nghệ sĩ cho chiến dịch truyền thông sự kiện.",
    src: posterShenlongz,
    alt: "Poster DJ Shenlongz tại Valley Beach Club",
    fit: "contain",
  },
  {
    title: "Valley Beach Club - DJ Phi Long",
    caption: "Ấn phẩm teaser và line-up phục vụ truyền thông trước chương trình.",
    src: posterPhiLong,
    alt: "Poster Phi Long tại Valley Beach Club",
    fit: "contain",
  },
  {
    title: "Valley Beach Club - combo dịch vụ",
    caption: "Visual đồ uống và món ăn hỗ trợ nội dung ưu đãi, booking và bán hàng.",
    src: combo,
    alt: "Poster combo đồ uống và món ăn của Valley Beach Club",
    fit: "contain",
  },
  {
    title: "Valley Beach Club - chiến dịch mùa hè",
    caption: "Visual theo mùa giúp venue duy trì nhịp truyền thông đều đặn.",
    src: summer,
    alt: "Ấn phẩm truyền thông mùa hè tại Valley Beach Club",
    span: "wide",
    fit: "contain",
  },
];
