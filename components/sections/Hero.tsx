"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/components/contexts/LanguageContext";

const CONTENT = {
  vi: {
    brand: "BBS MEDIA",
    tagline1: "Creative Production",
    tagline2: "& Event Agency",
    description: "Chuyên sản xuất hình ảnh, tổ chức sự kiện\nvà phát triển nội dung sáng tạo dành cho doanh nghiệp.",
    btnPrimary: "Xem dự án",
    btnSecondary: "Nhận tư vấn",
  },
  en: {
    brand: "BBS MEDIA",
    tagline1: "Creative Production",
    tagline2: "& Event Agency",
    description: "Specializing in visual production, event organization\nand creative content development for businesses.",
    btnPrimary: "View Projects",
    btnSecondary: "Get Consultation",
  },
};

export function Hero() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <section className="relative flex items-center overflow-hidden min-h-[560px] lg:min-h-[680px] pt-12 md:pt-16 lg:pt-24 pb-12 lg:pb-24 bg-[url('/HeroImage.jpg')] bg-cover bg-center">
      {/* Overlay mờ để dễ đọc chữ */}
      <div className="absolute inset-0 bg-white/80 md:bg-white/70"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="max-w-5xl lg:col-span-8 xl:col-span-9">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight tracking-tight text-bbs-blue mb-4 uppercase">
              {t.brand}
            </h1>
            <p className="text-2xl md:text-3xl lg:text-[40px] font-semibold leading-snug text-deep-navy mb-6">
              {t.tagline1}
              <br />
              {t.tagline2}
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl whitespace-pre-line">
              {t.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/danh-muc-du-an"
                className="inline-flex h-13 items-center justify-center rounded-button bg-bbs-red px-8 py-4 text-sm font-bold tracking-widest uppercase text-white transition-colors hover:bg-bbs-red/90 w-full sm:w-auto"
              >
                {t.btnPrimary}
              </Link>
              <Link
                href="/lien-he"
                className="inline-flex h-13 items-center justify-center rounded-button border border-border-gray bg-white px-8 py-4 text-sm font-bold tracking-widest uppercase text-deep-navy transition-colors hover:bg-gray-50 hover:border-gray-300 w-full sm:w-auto"
              >
                {t.btnSecondary}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-bbs-blue/5 to-transparent pointer-events-none hidden lg:block" />
    </section>
  );
}
