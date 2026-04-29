"use client";
import { useLanguage } from "@/components/contexts/LanguageContext";

const CONTENT = {
  vi: {
    badge: "Đối tác truyền thông",
    desc: "Cơ quan & tổ chức trong và ngoài nhà nước",
    stat1: "Khách hàng",
    stat2: "Nhãn hàng"
  },
  en: {
    badge: "Media Partner",
    desc: "Domestic and international organizations",
    stat1: "Clients",
    stat2: "Brands"
  }
};

export function SocialProof() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <section className="py-12 bg-transparent border-y border-border-gray/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 text-center">

          {/* Stat 1 — Badge style */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2 bg-bbs-blue/10 text-bbs-blue px-4 py-1.5 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span className="text-sm font-semibold">{t.badge}</span>
            </div>
            <span className="text-gray-500 font-medium text-sm leading-snug max-w-[180px]">
              {lang === "vi" ? (
                <>Cơ quan & tổ chức trong<br className="hidden md:block" /> và ngoài nhà nước</>
              ) : (
                <>Domestic and international<br className="hidden md:block" /> organizations</>
              )}
            </span>
          </div>

          <div className="hidden md:block w-px h-16 bg-border-gray"></div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-deep-navy mb-2">1000+</span>
            <span className="text-gray-500 font-medium">{t.stat1}</span>
          </div>

          <div className="hidden md:block w-px h-16 bg-border-gray"></div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-deep-navy mb-2">100+</span>
            <span className="text-gray-500 font-medium">{t.stat2}</span>
          </div>

        </div>
      </div>
    </section>
  );
}
