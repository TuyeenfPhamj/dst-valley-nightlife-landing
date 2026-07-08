import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { venue } from "../data/venue";

export default function ContactCTA() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !message.trim()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const authHeader = "Basic " + btoa("phamtuyen201:Tuyen201");
      const res = await fetch("https://tuyen.halongxanh.info/wp-json/dst/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": authHeader,
        },
        body: JSON.stringify({
          name: name.trim(),
          contact: contact.trim(),
          message: message.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok || data?.success || data?.id) {
        setStatus("success");
        setName("");
        setContact("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMessage(data?.message || "Có lỗi xảy ra khi gửi dữ liệu vào hệ thống CRM. Vui lòng thử lại.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Không thể kết nối đến máy chủ CRM. Vui lòng kiểm tra đường truyền và thử lại.");
    }
  };

  return (
    <section id="lien-he" className="bg-dst-ink py-20 md:py-28">
      <div className="section-shell">
        <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#0b0c0c] shadow-2xl md:grid-cols-[1.05fr_0.95fr]">
          {/* Left Column: Strategy Branding & Contact Info */}
          <div className="flex flex-col justify-between bg-dst-amber p-8 text-black md:p-12 lg:p-14">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] opacity-80">Hợp Tác Chiến Lược</p>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-normal leading-tight md:text-5xl">
                Bạn sở hữu venue đẳng cấp. DST Group tạo dựng vị thế và sức hút.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 opacity-85 md:text-lg">
                Kết nối ngay với đội ngũ chuyên gia của DST Group để nhận giải pháp định vị thương hiệu, lập kế hoạch truyền thông sự kiện và tối ưu hóa doanh thu cho venue của bạn.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-black/15 bg-black/10 p-5 backdrop-blur-sm transition hover:bg-black/15">
                <Phone className="mb-2 text-black" size={22} />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-75">Hotline</p>
                <a className="mt-1 block text-lg font-bold tracking-tight" href={`tel:${venue.contact.hotline.replace(/\s/g, "")}`}>
                  {venue.contact.hotline}
                </a>
              </div>
              <div className="rounded-xl border border-black/15 bg-black/10 p-5 backdrop-blur-sm transition hover:bg-black/15">
                <Mail className="mb-2 text-black" size={22} />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-75">Email</p>
                <a className="mt-1 block text-base font-bold tracking-tight truncate" href={`mailto:${venue.contact.email}`}>
                  {venue.contact.email}
                </a>
              </div>
              <div className="rounded-xl border border-black/15 bg-black/10 p-5 backdrop-blur-sm sm:col-span-2 transition hover:bg-black/15">
                <MapPin className="mb-2 text-black" size={22} />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-75">Văn phòng DST Group</p>
                <p className="mt-1 text-sm font-medium leading-6">{venue.contact.address}</p>
              </div>
            </div>
          </div>

          {/* Right Column: CRM Contact Form */}
          <div className="flex flex-col justify-center bg-[#121414] p-8 text-white md:p-12 lg:p-14">
            <div className="mb-8">
              <h3 className="text-2xl font-medium text-white md:text-3xl">Đăng Ký Tư Vấn & Nhận Báo Giá</h3>
              <p className="mt-2 text-sm leading-6 text-stone-400">
                Dữ liệu được đồng bộ trực tiếp vào hệ thống quản trị CRM (WordPress & Google Sheets) của DST Group.
              </p>
            </div>

            {status === "success" ? (
              <div className="rounded-2xl border border-dst-teal/30 bg-dst-teal/10 p-8 text-center backdrop-blur-md">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-dst-teal/20 text-dst-teal">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="mt-4 text-xl font-medium text-white">Đã Ghi Nhận Yêu Cầu Thành Công!</h4>
                <p className="mt-3 text-sm leading-6 text-stone-300">
                  Dữ liệu của bạn đã được lưu trữ an toàn vào hệ thống quản trị khách hàng tập trung. Đội ngũ chuyên gia DST Group sẽ liên hệ phản hồi trong thời gian sớm nhất.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white/20"
                >
                  Gửi thêm yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div>
                  <label htmlFor="crm-name" className="mb-2 block text-sm font-medium text-stone-300">
                    Họ tên / Tên Venue <span className="text-dst-amber">*</span>
                  </label>
                  <input
                    id="crm-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="VD: Nguyễn Văn A (Valley Beach Club)..."
                    className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3.5 text-white placeholder:text-stone-500 focus:border-dst-amber focus:bg-black/60 focus:outline-none focus:ring-1 focus:ring-dst-amber transition"
                  />
                </div>

                <div>
                  <label htmlFor="crm-contact" className="mb-2 block text-sm font-medium text-stone-300">
                    Số điện thoại hoặc Email <span className="text-dst-amber">*</span>
                  </label>
                  <input
                    id="crm-contact"
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="VD: 090xxxxxxx hoặc email@venue.com..."
                    className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3.5 text-white placeholder:text-stone-500 focus:border-dst-amber focus:bg-black/60 focus:outline-none focus:ring-1 focus:ring-dst-amber transition"
                  />
                </div>

                <div>
                  <label htmlFor="crm-message" className="mb-2 block text-sm font-medium text-stone-300">
                    Nhu cầu tư vấn / Lời nhắn <span className="text-dst-amber">*</span>
                  </label>
                  <textarea
                    id="crm-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Chia sẻ mô hình venue, quy mô khách mời, lịch sự kiện hoặc vấn đề truyền thông đang gặp phải..."
                    className="w-full resize-y rounded-xl border border-white/15 bg-black/40 px-4 py-3.5 text-white placeholder:text-stone-500 focus:border-dst-amber focus:bg-black/60 focus:outline-none focus:ring-1 focus:ring-dst-amber transition"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                    <AlertCircle className="mt-0.5 shrink-0 text-red-400" size={18} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-2 flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-dst-amber to-[#f7d08a] px-6 py-4 font-semibold text-black shadow-lg shadow-dst-amber/20 transition duration-300 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="animate-spin text-black" size={20} />
                      <span>Đang Gửi Dữ Liệu Vào CRM...</span>
                    </>
                  ) : (
                    <>
                      <span>Gửi thông tin liên hệ</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
