import { X } from "lucide-react";
import { navigationItems } from "../data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/70 px-6 pt-6 backdrop-blur-sm lg:hidden" role="dialog" aria-modal="true">
      <div className="liquid-glass rounded-xl p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium uppercase tracking-[0.24em] text-stone-300">Menu</span>
          <button
            type="button"
            aria-label="Đóng menu"
            className="rounded-lg p-2 text-white transition hover:bg-white/10"
            onClick={onClose}
          >
            <X size={22} />
          </button>
        </div>
        <nav className="mt-8 grid gap-2" aria-label="Điều hướng di động">
          {navigationItems.map((item) => (
            <a
              className="rounded-lg px-3 py-3 text-lg text-white transition hover:bg-white hover:text-black"
              href={item.href}
              key={item.href}
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-stone-100"
          href="#lien-he"
          onClick={onClose}
        >
          Nhận tư vấn cho venue
        </a>
      </div>
    </div>
  );
}
