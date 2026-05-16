"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { SERVICES_VI, SERVICES_EN } from "./data";

const PAGE_CONTENT = {
  vi: {
    badge: "Tất cả dịch vụ",
    title: "Hệ Sinh Thái Dịch Vụ",
    subtitle: "Khám phá các giải pháp truyền thông và sự kiện toàn diện, được thiết kế chuyên biệt để nâng tầm giá trị thương hiệu của bạn.",
    viewDetail: "Xem chi tiết",
  },
  en: {
    badge: "All Services",
    title: "Service Ecosystem",
    subtitle: "Explore our comprehensive media and event solutions, specially designed to elevate your brand value.",
    viewDetail: "View details",
  },
};

export default function DichVuMediaOverviewPage() {
  const { lang } = useLanguage();
  const services = lang === "vi" ? SERVICES_VI : SERVICES_EN;
  const page = PAGE_CONTENT[lang];

  return (
    <div className="bg-white min-h-screen">
      {/* ═══════ PAGE HEADER ═══════ */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-b from-bbs-blue/[0.04] via-white to-white pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-bbs-red/[0.03] rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute top-20 left-0 w-80 h-80 bg-bbs-blue/[0.04] rounded-full blur-3xl pointer-events-none -translate-x-1/2" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-bbs-blue/10 text-bbs-blue text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-bbs-blue animate-pulse" />
              {page.badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-navy mb-6 tracking-tight">
              {page.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {page.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES GRID ═══════ */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => {
              // Alternate subtle border colors
              const accentColor = idx % 2 === 0 ? "group-hover:border-bbs-blue/50" : "group-hover:border-bbs-red/50";
              const titleColor = idx % 2 === 0 ? "group-hover:text-bbs-blue" : "group-hover:text-bbs-red";
              const iconBg = idx % 2 === 0 ? "bg-bbs-blue" : "bg-bbs-red";

              return (
                <Link
                  key={service.id}
                  href={`/dich-vu-media/${service.id}`}
                  className={`group bg-white rounded-3xl overflow-hidden border border-border-gray shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col ${accentColor}`}
                >
                  {/* Thumbnail */}
                  <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={service.images[0]}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    {/* Index Number Badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold flex items-center justify-center">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                    <h2 className={`text-xl font-bold text-deep-navy mb-3 transition-colors ${titleColor}`}>
                      {service.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {service.desc}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-semibold text-deep-navy mt-auto">
                      {page.viewDetail}
                      <span className={`w-6 h-6 rounded-full ${iconBg} text-white flex items-center justify-center transition-transform group-hover:translate-x-1`}>
                        <ArrowRight className="w-3 h-3" />
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
