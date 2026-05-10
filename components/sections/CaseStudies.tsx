"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      {
        id: 4,
        title: "Sự kiện Thượng đỉnh ASEAN",
        badge: "Ngoại giao & Chính trị",
        description: "Thực thi giải pháp kỹ thuật sự kiện tiêu chuẩn cao cho các tổ chức quốc tế hàng đầu.",
        tags: ["Ngoại giao", "Quốc tế"],
        image: "/casestudy/asean.webp",
      },
      {
        id: 5,
        title: "Đối tác truyền thông ICHAM",
        badge: "Đối tác Quốc tế",
        description: "Đối tác chiến lược truyền thông dài hạn cho Phòng Thương mại Ý tại Việt Nam.",
        tags: ["Truyền thông", "Quốc tế"],
        image: "/casestudy/ICHAM.webp",
      },
      {
        id: 6,
        title: "Chuỗi khai trương Chicken Plus",
        badge: "F&B & Thương mại",
        description: "Tổ chức sự kiện trọn gói và sản xuất truyền thông cho chuỗi F&B toàn quốc.",
        tags: ["F&B", "Khai trương"],
        image: "/casestudy/chickenplus.webp",
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
      {
        id: 4,
        title: "ASEAN Summit Event",
        badge: "Diplomacy & Politics",
        description: "Executing high-standard event technical solutions for top-tier international organizations.",
        tags: ["Diplomacy", "International"],
        image: "/casestudy/asean.webp",
      },
      {
        id: 5,
        title: "ICHAM Media Partner",
        badge: "International Partner",
        description: "Long-term media strategy partner for the Italian Chamber of Commerce in Vietnam.",
        tags: ["Media", "International"],
        image: "/casestudy/ICHAM.webp",
      },
      {
        id: 6,
        title: "Chicken Plus Grand Opening",
        badge: "F&B & Commercial",
        description: "Full-package event organization and media production for a nationwide F&B chain.",
        tags: ["F&B", "Grand Opening"],
        image: "/casestudy/chickenplus.webp",
      },
    ]
  }
};

export function CaseStudies() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <section id="cases" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-navy mb-4">
            {t.header}
          </h2>
          <p className="text-lg text-gray-600">
            {t.subHeader}
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="max-w-[1400px] mx-auto relative px-4 md:px-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={28}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-20 !px-2 md:!px-16 swiper-case-studies swiper-equal-height swiper-with-blur"
          >
            {t.cases.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto flex flex-col">
                <div
                  className="group bg-white rounded-[24px] border border-border-gray hover:border-bbs-blue/40 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
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
                    {item.tags && item.tags.length > 0 && (
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
                    )}

                    <div className="flex items-start gap-2 flex-grow">
                      <Sparkles className="w-4 h-4 text-bbs-red shrink-0 mt-0.5" />
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Global CSS cho Swiper Pagination & Navigation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .swiper-with-blur .swiper-slide {
          opacity: 0.3;
          filter: blur(3px);
          transition: opacity 0.4s ease, filter 0.4s ease;
          pointer-events: none;
        }
        .swiper-with-blur .swiper-slide.swiper-slide-active {
          opacity: 1;
          filter: blur(0);
          pointer-events: auto;
        }
        @media (min-width: 640px) {
          .swiper-with-blur .swiper-slide.swiper-slide-active + .swiper-slide {
            opacity: 1;
            filter: blur(0);
            pointer-events: auto;
          }
        }
        @media (min-width: 1024px) {
          .swiper-with-blur .swiper-slide.swiper-slide-active + .swiper-slide + .swiper-slide {
            opacity: 1;
            filter: blur(0);
            pointer-events: auto;
          }
        }

        /* Equal height cards */
        .swiper-equal-height .swiper-wrapper {
          align-items: stretch;
        }
        .swiper-equal-height .swiper-slide {
          height: auto !important;
        }
        .swiper-case-studies .swiper-pagination {
          bottom: 0px !important;
        }
        .swiper-case-studies .swiper-pagination-bullet {
          background: #27abde;
          opacity: 0.2;
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
        }
        .swiper-case-studies .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .swiper-case-studies .swiper-button-next, 
        .swiper-case-studies .swiper-button-prev {
          color: #27abde;
          margin-top: -40px;
        }
        .swiper-case-studies .swiper-button-next {
          right: 0px !important;
        }
        .swiper-case-studies .swiper-button-prev {
          left: 0px !important;
        }
        .swiper-case-studies .swiper-button-next:after, 
        .swiper-case-studies .swiper-button-prev:after {
          font-size: 24px;
        }
        @media (max-width: 768px) {
          .swiper-case-studies .swiper-button-next, 
          .swiper-case-studies .swiper-button-prev {
            display: none !important;
          }
        }
        `
      }} />
    </section>
  );
}
