"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";

import { useLanguage } from "@/components/contexts/LanguageContext";

const CONTENT = {
  vi: {
    title1: "Kiến tạo hình ảnh – ",
    title2: "Nâng tầm thương hiệu",
    description: "BBS Media là đối tác chiến lược chuyên cung cấp giải pháp tư vấn truyền thông, sản xuất nội dung hình ảnh và tổ chức sự kiện chuyên nghiệp. Chúng tôi cam kết đồng hành cùng doanh nghiệp kiến tạo sản phẩm chỉn chu, mang lại hiệu quả thực tế.",
    btnPrimary: "Nhận tư vấn giải pháp",
    btnSecondary: "Xem sản phẩm"
  },
  en: {
    title1: "Crafting Visions – ",
    title2: "Elevating Brands",
    description: "BBS Media is a strategic partner specializing in media consulting, visual content production, and professional event organization. We are committed to accompanying businesses in creating meticulous products that deliver practical results.",
    btnPrimary: "Get Consultation",
    btnSecondary: "View Portfolio"
  }
};

export function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="relative overflow-hidden min-h-[560px] lg:min-h-[680px] pt-16 md:pt-24 lg:pt-32 pb-16 lg:pb-32 bg-[url('/HeroImage.jpg')] bg-cover bg-center">
      {/* Overlay mờ để dễ đọc chữ */}
      <div className="absolute inset-0 bg-white/80 md:bg-white/70"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight tracking-tight text-bbs-blue mb-6 uppercase">
              {t.title1}
              <span className="text-deep-navy">{t.title2}</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              {t.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex h-13 items-center justify-center rounded-button bg-bbs-red px-8 py-4 text-sm font-bold tracking-widest uppercase text-white transition-colors hover:bg-bbs-red/90 w-full sm:w-auto"
              >
                {t.btnPrimary}
              </Link>
              <Link
                href="#cases"
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
