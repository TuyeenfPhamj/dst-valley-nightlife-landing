import { AudioLines, CalendarDays, Camera, Megaphone, Palmtree, Sparkles } from "lucide-react";
import stage from "../assets/valley-stage.jpg";
import crowd from "../assets/valley-crowd.jpg";
import lights from "../assets/valley-lights.jpg";
import summer from "../assets/valley-summer.jpg";
import type { EventItem, ExperienceItem, TimelineItem } from "../types/venue";

export const experienceItems: ExperienceItem[] = [
  {
    title: "Beach bar Bohemian",
    tag: "Không gian",
    description:
      "Tinh thần bar bãi biển Châu Âu được đưa vào bố cục ngoài trời, tạo cảm giác thoáng đãng và giàu chất nghỉ dưỡng.",
    src: lights,
    alt: "Không gian ánh sáng ngoài trời của Valley Beach Club",
    icon: Palmtree,
    tone: "teal",
  },
  {
    title: "Sân khấu sự kiện",
    tag: "Âm thanh ánh sáng",
    description:
      "Sân khấu, màn hình và hiệu ứng ánh sáng được dùng như điểm nhấn chính cho các đêm nhạc và chương trình đông khách.",
    src: stage,
    alt: "Sân khấu sự kiện tại Valley Beach Club",
    icon: AudioLines,
    tone: "amber",
  },
  {
    title: "Nội dung phủ sóng",
    tag: "Marketing",
    description:
      "DST đồng hành bằng quản trị Fanpage, viết content, thiết kế hình ảnh và chạy ADS cho hình ảnh thương hiệu.",
    src: summer,
    alt: "Ấn phẩm truyền thông Valley Beach Club",
    icon: Megaphone,
    tone: "dark",
  },
  {
    title: "Khoảnh khắc khách hàng",
    tag: "Trải nghiệm",
    description:
      "Các hình ảnh sự kiện tập trung vào năng lượng đám đông, không khí biển đêm và cảm giác kết nối tại venue.",
    src: crowd,
    alt: "Khách hàng trong sự kiện Valley Beach Club",
    icon: Camera,
    tone: "teal",
  },
];

export const timelineItems: TimelineItem[] = [
  {
    title: "Nhận diện nhu cầu",
    description: "Xác định concept truyền thông, mục tiêu sự kiện và nhóm khách cần tiếp cận.",
    icon: Sparkles,
  },
  {
    title: "Sản xuất nội dung",
    description: "Triển khai content, hình ảnh, video ngắn hoặc visual chương trình theo từng chiến dịch.",
    icon: Camera,
  },
  {
    title: "Phủ sóng quảng cáo",
    description: "Chạy ADS và quản trị kênh để tăng khả năng tiếp cận khách hàng tại Quảng Ninh.",
    icon: Megaphone,
  },
  {
    title: "Theo nhịp sự kiện",
    description: "Cập nhật hình ảnh, poster và nội dung mới khi venue có chương trình cần truyền thông.",
    icon: CalendarDays,
  },
];

export const eventItems: EventItem[] = [
  {
    title: "Đêm nhạc đầy năng lượng",
    description:
      "Từ những giai điệu sôi động đến không khí bùng nổ bên bờ biển, mỗi chương trình là một điểm hẹn để gặp gỡ, tận hưởng và sống trọn cùng nhịp nhạc.",
    src: stage,
    alt: "Sân khấu âm nhạc tại Valley Beach Club",
  },
  {
    title: "Nghệ sĩ & line-up nổi bật",
    description:
      "Mỗi line-up mang đến một màu sắc riêng, kết nối những cá tính âm nhạc nổi bật với nguồn năng lượng sẵn sàng khuấy động cả không gian.",
    src: crowd,
    alt: "Khách tại một sự kiện âm nhạc của Valley Beach Club",
  },
];
