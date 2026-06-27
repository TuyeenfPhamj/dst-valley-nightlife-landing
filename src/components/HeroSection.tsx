import { ArrowDown, ArrowUpRight } from "lucide-react";
import { assets, venue } from "../data/venue";
import AnimatedHeading from "./AnimatedHeading";
import FadeIn from "./FadeIn";

export default function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-screen overflow-hidden">
      <img
        className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
        src={assets.heroStage}
        alt="Sân khấu ánh sáng tại Valley Beach Club"
      />
      <div className="pointer-events-none absolute inset-y-0 left-[-28%] w-1/2 animate-light-sweep bg-white/20 blur-2xl" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.58),rgba(0,0,0,0.16)_48%,rgba(0,0,0,0.04))]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1520px] flex-1 flex-col justify-end px-6 pb-12 pt-32 md:px-10 lg:grid lg:grid-cols-2 lg:items-end lg:gap-12 lg:px-14 lg:pb-16 xl:px-20">
        <div className="lg:max-w-[620px]">
          <FadeIn delay={80}>
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-stone-200 backdrop-blur">
              {venue.eyebrow}
            </p>
          </FadeIn>
          <AnimatedHeading
            text={venue.headline}
            className="mb-4 max-w-2xl text-4xl font-normal leading-[0.95] tracking-[-0.04em] text-white md:text-5xl lg:text-6xl xl:text-7xl"
          />
          <FadeIn delay={800}>
            <p className="mb-5 max-w-2xl text-base leading-8 text-stone-200 md:text-lg">{venue.subheading}</p>
          </FadeIn>
          <FadeIn className="flex flex-wrap gap-4" delay={1200}>
            <a
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-medium text-black transition hover:bg-stone-100"
              href="#lien-he"
            >
              Liên hệ tư vấn
              <ArrowUpRight size={18} />
            </a>
            <a
              className="liquid-glass inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition hover:bg-white hover:text-black"
              href="#khong-gian"
            >
              Khám phá không gian
              <ArrowDown size={18} />
            </a>
          </FadeIn>
        </div>

        <FadeIn className="mt-10 flex items-end justify-start lg:mt-0 lg:justify-end lg:pr-0 xl:pr-2" delay={1400}>
          <div className="liquid-glass max-w-sm rounded-xl border border-white/20 px-6 py-4">
            <p className="text-lg font-light leading-8 text-white md:text-xl lg:text-2xl">{venue.glassNote}</p>
            <p className="mt-3 text-sm leading-6 text-stone-300">{venue.location}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
