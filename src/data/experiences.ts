import {
  AudioLines,
  BarChart3,
  CalendarDays,
  Camera,
  FileImage,
  Globe2,
  Megaphone,
  MessageCircle,
  RadioTower,
  Sparkles,
} from "lucide-react";
import stage from "../assets/valley-stage.jpg";
import crowd from "../assets/valley-crowd.jpg";
import lights from "../assets/valley-lights.jpg";
import posterMinami from "../assets/valley-poster-minami.jpg";
import posterShenlongz from "../assets/valley-poster-shenlongz.jpg";
import combo from "../assets/valley-combo.jpg";
import type { EventItem, ExperienceItem, TimelineItem } from "../types/venue";

export const experienceItems: ExperienceItem[] = [
  {
    title: "Sản xuất media & visual venue",
    tag: "Media production",
    description:
      "Bắt trọn không khí sân khấu, ánh sáng, crowd và khoảnh khắc khách hàng để biến trải nghiệm tại venue thành chất liệu truyền thông có sức lan tỏa.",
    src: stage,
    alt: "Sân khấu và ánh sáng của venue nightlife",
    icon: Camera,
    tone: "teal",
    position: "center top",
  },
  {
    title: "Thiết kế key visual & poster line-up",
    tag: "Brand identity",
    description:
      "Quy chuẩn hệ thống ấn phẩm từ poster nghệ sĩ, key visual sự kiện đến combo ưu đãi để mỗi chương trình có nhận diện riêng.",
    src: posterShenlongz,
    alt: "Poster line-up cho chương trình nightlife",
    icon: FileImage,
    tone: "amber",
    fit: "contain",
  },
  {
    title: "Chiến lược social media & hype marketing",
    tag: "Social growth",
    description:
      "Xây nhịp nội dung trên fanpage và kênh social: teaser, line-up, recap, ảnh khách và ưu đãi để giữ khách theo dõi trước lẫn sau đêm diễn.",
    src: crowd,
    alt: "Crowd và không khí bùng nổ trong đêm diễn",
    icon: MessageCircle,
    tone: "dark",
    position: "center 38%",
  },
  {
    title: "Quảng cáo chuyển đổi & booking",
    tag: "Performance",
    description:
      "Triển khai quảng cáo, landing page, ưu đãi và nội dung hỗ trợ đặt bàn hoặc bán vé để kết nối truyền thông với hành động cụ thể.",
    src: combo,
    alt: "Ấn phẩm combo và booking cho venue nightlife",
    icon: Megaphone,
    tone: "teal",
    fit: "contain",
  },
];

export const solutionItems: ExperienceItem[] = [
  {
    title: "Định vị điểm khác biệt",
    tag: "Định vị",
    description:
      "DST giúp venue trả lời rõ: tối nay có gì, khác biệt ở đâu và vì sao khách nên chọn nơi này thay vì một điểm hẹn khác.",
    src: lights,
    alt: "Ánh sáng và không khí venue nightlife",
    icon: Sparkles,
    tone: "teal",
  },
  {
    title: "Truyền thông 3 giai đoạn",
    tag: "Chiến dịch",
    description:
      "Từ teaser trước sự kiện, nội dung trong đêm diễn đến recap sau chương trình, mọi điểm chạm đều cùng đẩy một câu chuyện.",
    src: stage,
    alt: "Sân khấu âm nhạc sự kiện",
    icon: RadioTower,
    tone: "amber",
  },
  {
    title: "Phân phối đa kênh",
    tag: "Hệ sinh thái kênh",
    description:
      "Fanpage, social media, quảng cáo, website và điểm chạm tại venue được sắp xếp để hỗ trợ cùng một mục tiêu truyền thông.",
    src: crowd,
    alt: "Khách tham gia sự kiện nightlife",
    icon: Globe2,
    tone: "dark",
  },
  {
    title: "Đo lường và tối ưu",
    tag: "Vận hành",
    description:
      "Sau mỗi chiến dịch, DST rà lại phản hồi, hiệu quả nội dung và đề xuất nhịp triển khai phù hợp cho đợt tiếp theo.",
    src: posterMinami,
    alt: "Visual sự kiện dùng cho đo lường chiến dịch",
    icon: BarChart3,
    tone: "teal",
  },
];

export const timelineItems: TimelineItem[] = [
  {
    title: "Nghiên cứu brief venue",
    description: "Làm rõ mô hình kinh doanh, nhóm khách mục tiêu, lịch event, vấn đề truyền thông và mục tiêu cần ưu tiên.",
    icon: AudioLines,
  },
  {
    title: "Xây concept truyền thông",
    description: "Định hướng thông điệp, phong cách hình ảnh, nhịp nội dung và các điểm chạm cần triển khai theo từng giai đoạn.",
    icon: Sparkles,
  },
  {
    title: "Sản xuất media & visual",
    description: "Triển khai hình ảnh, video, key visual, poster line-up, nội dung social và ấn phẩm hỗ trợ booking.",
    icon: Camera,
  },
  {
    title: "Phân phối đa kênh",
    description: "Vận hành social media, quảng cáo, landing page và nội dung dẫn khách đến hành động đặt bàn hoặc mua vé.",
    icon: Megaphone,
  },
  {
    title: "Báo cáo & tối ưu",
    description: "Theo dõi phản hồi, rà hiệu quả nội dung và đề xuất ưu tiên cho các chương trình kế tiếp.",
    icon: CalendarDays,
  },
];

export const eventItems: EventItem[] = [
  {
    client: "Valley Beach Club",
    category: "Key visual & poster line-up",
    title: "Tạo nhận diện riêng cho từng đêm diễn",
    description:
      "Thiết kế hệ thống poster và visual nghệ sĩ để truyền tải tinh thần âm nhạc, tạo sự chú ý trước giờ sự kiện.",
    src: posterMinami,
    alt: "Poster line-up của Valley Beach Club",
    cta: "Khám phá dự án",
  },
  {
    client: "Valley Beach Club",
    category: "Media production & hype marketing",
    title: "Biến năng lượng sân khấu thành chất liệu truyền thông",
    description:
      "Khai thác ánh sáng, màn hình, sân khấu và crowd để xây kho hình ảnh phục vụ recap, social content và truyền thông sau sự kiện.",
    src: stage,
    alt: "Sân khấu và ánh sáng tại Valley Beach Club",
    cta: "Khám phá dự án",
  },
  {
    client: "Valley Beach Club",
    category: "Ưu đãi, booking & chuyển đổi",
    title: "Kết nối visual với quyết định đặt bàn",
    description:
      "Các ấn phẩm combo, ưu đãi và thông tin chương trình được trình bày rõ ràng để khách dễ nắm lựa chọn trước khi liên hệ.",
    src: combo,
    alt: "Ấn phẩm combo và booking của Valley Beach Club",
    cta: "Khám phá dự án",
  },
];
