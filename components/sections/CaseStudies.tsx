"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";

const CONTENT = {
  vi: {
    header: "Dự án tiêu biểu",
    subHeader: "Những dự án thực tế minh chứng cho năng lực triển khai và cam kết hiệu quả từ BBS Media.",
    linkText: "Nhận tư vấn ngay",
    cases: [
      {
        id: 1,
        title: "Lễ Hội Áo Dài 2025",
        badge: "Sự kiện văn hóa cấp Tỉnh/Thành phố",
        description: "Thu hút hàng chục nghìn lượt khách tham dự cùng nhiều đơn vị thông tấn báo chí, giúp lan tỏa mạnh mẽ các giá trị văn hóa truyền thống.",
        tags: ["Tổ chức sự kiện", "Văn hóa", "Quy mô lớn"],
        image: "/casestudy/sukienaodai.webp",
      },
      {
        id: 2,
        title: "Hành Trình Bất Tử 2025",
        badge: "Sự kiện trải nghiệm văn hóa & lịch sử",
        description: "Tạo nên một hành trình vô cùng giàu cảm xúc, kết nối chân thực những giá trị di sản với thế hệ hiện tại thông qua kịch bản độc bản và các thước phim tư liệu.",
        tags: ["Trải nghiệm", "Di sản", "Phim tư liệu"],
        image: "/casestudy/hanhtrinhbattu.webp",
      },
      {
        id: 3,
        title: "Chuỗi Sự Kiện & Hoạt Động A80",
        badge: "Chuỗi sự kiện doanh nghiệp & khách hàng thân thiết",
        description: "Nâng tầm đẳng cấp và đảm bảo sự chỉn chu cho thương hiệu trong suốt chuỗi hành trình nhờ vận hành mượt mà hệ thống Âm thanh – Ánh sáng – Màn hình LED và Livestream chuyên nghiệp.",
        tags: ["Doanh nghiệp", "Livestream", "Âm thanh & Ánh sáng"],
        image: "/casestudy/sukiena80.webp",
      },
    ]
  },
  en: {
    header: "Case Studies",
    subHeader: "Real-world projects demonstrating BBS Media's implementation capacity and commitment to effectiveness.",
    linkText: "Get consultation now",
    cases: [
      {
        id: 1,
        title: "Ao Dai Festival 2025",
        badge: "Provincial/City cultural event",
        description: "Attracting tens of thousands of visitors and many press agencies, helping to strongly spread traditional cultural values.",
        tags: ["Event organization", "Culture", "Large scale"],
        image: "/casestudy/sukienaodai.webp",
      },
      {
        id: 2,
        title: "Immortal Journey 2025",
        badge: "Cultural & historical experience event",
        description: "Creating an extremely emotional journey, authentically connecting heritage values with the current generation through a unique script and documentary films.",
        tags: ["Experience", "Heritage", "Documentary"],
        image: "/casestudy/hanhtrinhbattu.webp",
      },
      {
        id: 3,
        title: "A80 Event & Activity Series",
        badge: "Corporate & loyal customer event series",
        description: "Elevating the class and ensuring meticulousness for the brand throughout the journey thanks to the smooth operation of professional Audio - Lighting - LED Screen and Livestream systems.",
        tags: ["Corporate", "Livestream", "Audio & Lighting"],
        image: "/casestudy/sukiena80.webp",
      },
    ]
  }
};

export function CaseStudies() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <section id="cases" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-navy mb-4">
            {t.header}
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {t.subHeader}
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center font-semibold text-bbs-blue hover:text-blue-700 transition-colors"
          >
            {t.linkText} <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Cards — vertical, full-width like container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.cases.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-[24px] border border-border-gray hover:border-bbs-blue/40 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Badge overlay */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                    <MapPin className="w-3 h-3" />
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-deep-navy mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-2.5 py-1 rounded-full bg-bbs-blue/10 text-bbs-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-start gap-2 flex-grow">
                  <Sparkles className="w-4 h-4 text-bbs-red shrink-0 mt-0.5" />
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
