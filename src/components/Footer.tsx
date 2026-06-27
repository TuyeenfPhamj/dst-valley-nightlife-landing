import { assets, venue } from "../data/venue";
import { navigationItems } from "../data/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <img className="h-12 w-auto object-contain" src={assets.logoDstMarketing} alt="Logo DST Marketing Media" />
          <p className="mt-4 max-w-lg text-sm leading-6 text-stone-400">
            {venue.partnerName} đồng hành cùng các thương hiệu trong hình ảnh, nội dung, media và truyền thông sự kiện.
          </p>
        </div>
        <nav className="flex flex-wrap gap-5 text-sm text-stone-300" aria-label="Liên kết cuối trang">
          {navigationItems.map((item) => (
            <a className="transition hover:text-white" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
