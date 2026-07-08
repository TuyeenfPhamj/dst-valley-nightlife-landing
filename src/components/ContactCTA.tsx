import { Mail, MapPin, Phone, Send } from "lucide-react";
import { venue } from "../data/venue";

export default function ContactCTA() {
  return (
    <section id="lien-he" className="bg-dst-ink py-20 md:py-28">
      <div className="section-shell">
        <div className="grid overflow-hidden rounded-lg bg-dst-amber text-black lg:grid-cols-[1fr_0.8fr]">
          <div className="p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] opacity-70">Liên hệ</p>
            <h2 className="mt-6 max-w-3xl text-balance text-4xl font-normal leading-tight md:text-6xl">
              Bạn có venue. DST giúp khách hàng có lý do để đến.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 opacity-80">
              Chia sẻ mô hình venue, nhóm khách mục tiêu, lịch event hoặc vấn đề truyền thông đang gặp phải. DST sẽ đề xuất các hạng mục cần ưu tiên.
            </p>
            <a
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-black px-7 py-3 font-medium text-white transition hover:bg-[#202020]"
              href={`mailto:${venue.contact.email}`}
            >
              Nhận tư vấn cho venue
              <Send size={18} />
            </a>
          </div>
          <div className="bg-black p-8 text-white md:p-12">
            <div className="grid gap-6">
              <div>
                <Phone className="mb-3 text-dst-amber" size={24} />
                <p className="text-sm uppercase tracking-[0.22em] text-stone-400">Hotline</p>
                <a className="mt-2 block text-2xl font-medium" href={`tel:${venue.contact.hotline.replace(/\s/g, "")}`}>
                  {venue.contact.hotline}
                </a>
              </div>
              <div>
                <Mail className="mb-3 text-dst-amber" size={24} />
                <p className="text-sm uppercase tracking-[0.22em] text-stone-400">Email</p>
                <a className="mt-2 block text-xl font-medium" href={`mailto:${venue.contact.email}`}>
                  {venue.contact.email}
                </a>
              </div>
              <div>
                <MapPin className="mb-3 text-dst-amber" size={24} />
                <p className="text-sm uppercase tracking-[0.22em] text-stone-400">Địa chỉ DST</p>
                <p className="mt-2 leading-7 text-stone-200">{venue.contact.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
