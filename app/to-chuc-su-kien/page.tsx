"use client";

import Link from "next/link";
import { ArrowRight, PartyPopper, Utensils, Users, Tent, Tv2, Cake, Megaphone, Radio } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { EVENT_SERVICES_VI, EVENT_SERVICES_EN } from "./data";

const PAGE_CONTENT = {
  vi: {
    badge: "Tổ Chức Sự Kiện",
    title: "TỔ CHỨC SỰ KIỆN",
    subtitle: "Trọn gói - Chuyên nghiệp - Hiệu quả",
    viewMore: "Xem thêm",
  },
  en: {
    badge: "Event Organization",
    title: "EVENT ORGANIZATION",
    subtitle: "Comprehensive - Professional - Effective",
    viewMore: "View more",
  },
};

// Map event service ID to Lucide icon components
const ICON_MAP: Record<string, React.ElementType> = {
  "khai-truong-khanh-thanh": PartyPopper,
  "gala-dinner": Utensils,
  "hoi-nghi-hoi-thao": Users,
  "team-building": Tent,
  "year-end-party": Tv2,
  "sinh-nhat": Cake,
  "activation": Megaphone,
  "thiet-bi-su-kien": Radio,
};

export default function EventOverviewPage() {
  const { lang } = useLanguage();
  const services = lang === "vi" ? EVENT_SERVICES_VI : EVENT_SERVICES_EN;
  const page = PAGE_CONTENT[lang];

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* ═══════ HEADER SECTION ═══════ */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-b from-bbs-red/[0.02] via-white to-white pointer-events-none" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-bbs-blue/[0.01] rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute top-20 right-0 w-80 h-80 bg-bbs-red/[0.02] rounded-full blur-3xl pointer-events-none translate-x-1/2" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-2 bg-bbs-red/10 text-bbs-red text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <PartyPopper className="w-4 h-4" />
              {page.badge}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-deep-navy mb-4 tracking-tight uppercase">
              {page.title}
            </h1>
            {/* Elegant small accent underline */}
            <div className="w-16 h-[3px] bg-bbs-red rounded-full mb-6" />
            <p className="text-gray-500 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl font-medium">
              {page.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ EVENT SERVICES GRID ═══════ */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-16">
            {services.map((service, idx) => {
              const IconComponent = ICON_MAP[service.id] || PartyPopper;
              // Alternate branding colors (start with red first for events)
              const isEven = idx % 2 === 0;
              const brandColor = isEven ? "bg-bbs-red" : "bg-bbs-blue";
              const hoverTextColor = isEven ? "group-hover:text-bbs-red" : "group-hover:text-bbs-blue";
              const hoverArrowColor = isEven ? "group-hover:bg-bbs-red group-hover:text-white" : "group-hover:bg-bbs-blue group-hover:text-white";

              return (
                <Link
                  key={service.id}
                  href={`/to-chuc-su-kien/${service.id}`}
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
