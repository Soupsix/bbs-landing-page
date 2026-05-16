"use client";

import { useLanguage } from "@/components/contexts/LanguageContext";

const CONTENT = {
  vi: {
    title: "Khách hàng",
    description: "Trang khách hàng của BBS Media đang được phát triển.",
  },
  en: {
    title: "Clients",
    description: "The BBS Media clients page is under development.",
  },
};

export default function KhachHangPage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <section className="min-h-[60vh] flex items-center justify-center py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6">
          {t.title}
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          {t.description}
        </p>
      </div>
    </section>
  );
}
