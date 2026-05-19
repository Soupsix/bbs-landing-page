"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";

const CONTENT = {
  vi: {
    heading: "Sẵn sàng xây dựng thương hiệu\nvới nội dung sáng tạo?",
    sub: "Hãy để BBS Media đồng hành cùng bạn trên hành trình xây dựng hình ảnh thương hiệu ấn tượng.",
    cta: "Liên hệ ngay",
  },
  en: {
    heading: "Ready To Build Your Brand\nWith Creative Content?",
    sub: "Let BBS Media accompany you on your journey to building an impressive brand image.",
    cta: "Contact Now",
  },
};

export function CTABanner() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <section className="relative overflow-hidden bg-[#f4f8fb] py-20 md:py-28">
      {/* Subtle decorative blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-bbs-blue/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-bbs-red/6 blur-3xl pointer-events-none" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(39,171,222,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(39,171,222,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Tag */}
        <span className="inline-block text-bbs-blue text-sm font-semibold tracking-widest uppercase mb-6 border border-bbs-blue/30 rounded-full px-4 py-1">
          BBS Media
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl lg:text-[52px] font-bold text-deep-navy leading-tight whitespace-pre-line mb-6">
          {t.heading}
        </h2>

        {/* Sub text */}
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-10">
          {t.sub}
        </p>

        {/* CTA Button */}
        <Link
          href="/lien-he"
          className="inline-flex items-center gap-3 bg-bbs-red hover:bg-bbs-red/90 active:scale-[0.98] text-white font-bold tracking-widest uppercase text-sm px-10 py-4 rounded-button transition-all duration-200 shadow-[0_0_30px_rgba(216,30,37,0.2)] hover:shadow-[0_0_40px_rgba(216,30,37,0.35)]"
        >
          {t.cta}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
