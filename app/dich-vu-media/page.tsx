"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Camera, Heart, Aperture, Film, Zap, Smartphone, Radio, Wind, Package } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { SERVICES_VI, SERVICES_EN } from "./data";

const PAGE_CONTENT = {
  vi: {
    badge: "Tất cả dịch vụ",
    title: "DỊCH VỤ MEDIA",
    subtitle: "Chuyên nghiệp - Sáng tạo - Tận tâm",
    viewMore: "Xem thêm",
  },
  en: {
    badge: "All Services",
    title: "MEDIA SERVICES",
    subtitle: "Professional - Creative - Dedicated",
    viewMore: "View more",
  },
};

// Map service ID to Lucide icon components
const ICON_MAP: Record<string, React.ElementType> = {
  "tu-van-truyen-thong": MessageCircle,
  "quay-chup-event": Camera,
  "livestream": Radio,
  "quay-chup-wedding": Heart,
  "quay-chup-san-pham-thuong-hieu": Package,
  "studio-sang-tao": Aperture,
  "tvc-doanh-nghiep": Film,
  "viral-video-tiktok-reels-content": Smartphone,
  "san-xuat-video-ai": Zap,
};

export default function DichVuMediaOverviewPage() {
  const { lang } = useLanguage();
  const services = lang === "vi" ? SERVICES_VI : SERVICES_EN;
  const page = PAGE_CONTENT[lang];

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* ═══════ HEADER SECTION ═══════ */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-b from-bbs-blue/[0.02] via-white to-white pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-bbs-red/[0.01] rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute top-20 left-0 w-80 h-80 bg-bbs-blue/[0.02] rounded-full blur-3xl pointer-events-none -translate-x-1/2" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-2 bg-bbs-blue/10 text-bbs-blue text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-bbs-blue animate-pulse" />
              {page.badge}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-deep-navy mb-4 tracking-tight uppercase">
              {page.title}
            </h1>
            {/* Elegant small accent underline */}
            <div className="w-16 h-[3px] bg-bbs-blue rounded-full mb-6" />
            <p className="text-gray-500 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl font-medium">
              {page.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES GRID ═══════ */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-16">
            {services.map((service, idx) => {
              const IconComponent = ICON_MAP[service.id] || MessageCircle;
              // Alternate branding colors
              const isEven = idx % 2 === 0;
              const brandColor = isEven ? "bg-bbs-blue" : "bg-bbs-red";
              const hoverTextColor = isEven ? "group-hover:text-bbs-blue" : "group-hover:text-bbs-red";
              const hoverIconBg = isEven ? "group-hover:bg-bbs-blue/10" : "group-hover:bg-bbs-red/10";
              const hoverArrowColor = isEven ? "group-hover:bg-bbs-blue group-hover:text-white" : "group-hover:bg-bbs-red group-hover:text-white";

              return (
                <Link
                  key={service.id}
                  href={`/dich-vu-media/${service.id}`}
                  className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-[6px] transition-all duration-300 flex flex-col p-6 pt-12 mt-8 w-full sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)]"
                >
                  {/* Circular Icon Overlapping Slightly Above */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className={`w-16 h-16 rounded-full ${brandColor} text-white flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-deep-navy mb-3 line-clamp-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-4 flex-grow">
                      {service.desc}
                    </p>

                    {/* Xem thêm Link/Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                      <span className={`text-sm font-semibold text-gray-700 transition-colors ${hoverTextColor}`}>
                        {page.viewMore}
                      </span>
                      <span className={`w-8 h-8 rounded-full bg-gray-50 text-gray-500 flex items-center justify-center transition-all ${hoverArrowColor}`}>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
