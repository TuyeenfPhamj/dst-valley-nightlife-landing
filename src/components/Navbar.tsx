import { Menu } from "lucide-react";
import { useState } from "react";
import { navigationItems } from "../data/navigation";
import { assets } from "../data/venue";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-6 pt-6 md:px-12 lg:px-16">
      <div className="liquid-glass pointer-events-auto flex items-center justify-between rounded-xl px-4 py-2">
        <a className="flex items-center gap-3" href="#top" aria-label="Về đầu trang">
          <img className="h-10 w-auto object-contain md:h-12" src={assets.logoDst} alt="Logo DST Group" />
        </a>

        <nav className="hidden items-center gap-8 text-sm text-stone-200 md:flex" aria-label="Điều hướng chính">
          {navigationItems.map((item) => (
            <a className="transition hover:text-stone-400" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="hidden rounded-lg bg-white px-6 py-2 text-sm font-medium text-black transition hover:bg-stone-100 md:inline-flex"
            href="#lien-he"
          >
            Liên hệ đặt lịch
          </a>
          <button
            type="button"
            aria-label="Mở menu"
            className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
