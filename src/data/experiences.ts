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
import summer from "../assets/valley-summer.jpg";
import combo from "../assets/valley-combo.jpg";
import posterMinami from "../assets/valley-poster-minami.jpg";
import posterShenlongz from "../assets/valley-poster-shenlongz.jpg";
import type { EventItem, ExperienceItem, TimelineItem } from "../types/venue";

export const experienceItems: ExperienceItem[] = [
  {
    title: "Hình ảnh & video venue",
    tag: "Media",
    description:
      "Khai thác sân khấu, crowd, ánh sáng, đồ uống, không gian và khoảnh khắc khách hàng để tạo chất liệu truyền thông có cảm xúc.",
    src: stage,
    alt: "Sân khấu và ánh sáng của một venue nightlife",
    icon: Camera,
    tone: "teal",
    position: "center top",
  },
  {
    title: "Poster, key visual & line-up",
    tag: "Visual",
    description:
      "Thiết kế poster chương trình, visual nghệ sĩ, ưu đãi và booking theo concept riêng của từng bar, club, lounge hoặc beach club.",
    src: posterShenlongz,
    alt: "Poster line-up cho chương trình nightlife",
    icon: FileImage,
    tone: "amber",
    fit: "contain",
  },
  {
    title: "Nội dung social media",
    tag: "Social media",
    description:
      "Xây nhịp nội dung cho fanpage: giới thiệu line-up, không khí đêm diễn, ưu đãi, recap và các điểm chạm giữ khách quay lại.",
    src: crowd,
    alt: "Crowd và không khí bùng nổ trong đêm diễn",
    icon: MessageCircle,
    tone: "dark",
    position: "center 38%",
  },
  {
    title: "Quảng cáo & landing page",
    tag: "Chuyển đổi",
    description:
      "Triển khai quảng cáo, landing page sự kiện, thông tin line-up, ưu đãi và nội dung hỗ trợ đặt bàn hoặc bán vé khi dự án có nhu cầu.",
    src: combo,
    alt: "Ấn phẩm ưu đãi và booking cho mô hình nightlife",
    icon: Megaphone,
    tone: "teal",
    fit: "contain",
  },
];

export const solutionItems: ExperienceItem[] = [
  {
    title: "Tạo lý do để khách muốn đến",
    tag: "Định vị",
    description:
      "DST giúp venue diễn đạt rõ tối nay có gì, khác biệt ở đâu và vì sao trải nghiệm đó đáng để khách dành một buổi tối.",
    src: crowd,
    alt: "Đám đông tham gia một đêm nhạc tại venue",
    icon: Sparkles,
    tone: "teal",
    position: "center 38%",
  },
  {
    title: "Kết nối trước, trong và sau đêm diễn",
    tag: "Chiến dịch",
    description:
      "Thông điệp không dừng ở poster. DST kết nối teaser, line-up, recap, ảnh khách và ưu đãi thành một nhịp truyền thông liên tục.",
    src: stage,
    alt: "Sân khấu đêm diễn với ánh sáng và màn hình lớn",
    icon: RadioTower,
    tone: "amber",
    position: "center top",
  },
  {
    title: "Vận hành kênh có nhịp",
    tag: "Kênh triển khai",
    description:
      "Fanpage, quảng cáo, website và nội dung bán hàng được sắp xếp để hỗ trợ cùng một mục tiêu thay vì chạy rời rạc.",
    src: lights,
    alt: "Không gian ánh sáng của một venue nightlife",
    icon: Globe2,
    tone: "dark",
    position: "center center",
  },
  {
    title: "Theo dõi và tối ưu đợt tiếp theo",
    tag: "Vận hành",
    description:
      "Sau mỗi đợt triển khai, DST ghi nhận phản hồi, rà lại nội dung và đề xuất ưu tiên cho chương trình kế tiếp.",
    src: summer,
    alt: "Visual truyền thông cho chiến dịch nightlife",
    icon: BarChart3,
    tone: "teal",
    fit: "contain",
  },
];

export const timelineItems: TimelineItem[] = [
  {
    title: "Tiếp nhận brief venue",
    description: "Làm rõ mô hình, nhóm khách mục tiêu, lịch event, điểm mạnh hiện có và vấn đề truyền thông đang gặp phải.",
    icon: AudioLines,
  },
  {
    title: "Định hướng concept",
    description: "Xác định thông điệp, tinh thần hình ảnh, nhịp nội dung và các điểm chạm cần ưu tiên cho từng giai đoạn.",
    icon: Sparkles,
  },
  {
    title: "Sản xuất nội dung",
    description: "Triển khai hình ảnh, video, poster, key visual, caption, bài đăng và nội dung hỗ trợ booking hoặc bán vé.",
    icon: Camera,
  },
  {
    title: "Triển khai kênh",
    description: "Vận hành social media, quảng cáo, landing page và các nội dung dẫn khách đến hành động cụ thể.",
    icon: Megaphone,
  },
  {
    title: "Tối ưu sau chiến dịch",
    description: "Theo dõi phản hồi, rà hiệu quả nội dung và đề xuất nhịp truyền thông cho chương trình tiếp theo.",
    icon: CalendarDays,
  },
];

export const eventItems: EventItem[] = [
  {
    client: "Valley Beach Club",
    category: "Poster line-up & visual sự kiện",
    title: "Tạo nhận diện cho từng đêm diễn",
    description:
      "Các visual chương trình được phát triển để làm rõ nghệ sĩ, tinh thần âm nhạc và lý do khách nên chú ý trước khi sự kiện diễn ra.",
    src: posterMinami,
    alt: "Poster line-up của dự án Valley Beach Club",
    cta: "Xem dự án",
  },
  {
    client: "Valley Beach Club",
    category: "Hình ảnh sân khấu & crowd",
    title: "Biến không khí thật thành tài sản truyền thông",
    description:
      "Hình ảnh sân khấu, ánh sáng và khách tham gia được dùng như chất liệu kể chuyện cho những đêm diễn giàu năng lượng.",
    src: crowd,
    alt: "Khách tham gia sự kiện tại Valley Beach Club",
    cta: "Xem dự án",
  },
  {
    client: "Valley Beach Club",
    category: "Ưu đãi, booking & chương trình",
    title: "Kết nối nội dung với hành động đặt chỗ",
    description:
      "Ấn phẩm combo, ưu đãi và thông tin chương trình giúp khách nắm nhanh lựa chọn trước khi liên hệ hoặc đặt bàn.",
    src: combo,
    alt: "Ấn phẩm combo và booking của Valley Beach Club",
    cta: "Xem dự án",
  },
];
