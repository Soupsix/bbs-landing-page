"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { useLanguage } from "@/components/contexts/LanguageContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CONTENT = {
  vi: {
    header: "Giải pháp của BBS Media",
    subHeader: "Cung cấp các dịch vụ chuyên biệt giúp giải quyết triệt để bài toán truyền thông của doanh nghiệp.",
    solutions: [
      {
        id: 1,
        title: "Sản xuất TVC & Video Quảng cáo",
        description: "Kiến tạo những thước phim chất lượng cao, sắc nét giúp thương hiệu nổi bật và ghi dấu ấn đậm nét trong tâm trí khách hàng.",
        category: "Sản xuất Truyền thông",
        catColor: "bg-bbs-blue text-white",
        images: ["/tvc/tvc.jpg", "/tvc/tvc02.jpeg", "/tvc/tvc03.JPG", "/tvc/tvc04.jpeg"],
      },
      {
        id: 2,
        title: "Sản xuất Nội dung bằng AI",
        description: "Tiên phong ứng dụng trí tuệ nhân tạo (AI) để tối ưu hóa quy trình, tạo ra những sản phẩm hình ảnh và video sáng tạo độc bản, dẫn đầu xu hướng thị trường.",
        category: "Sản xuất Truyền thông",
        catColor: "bg-bbs-blue text-white",
        images: ["/aiproduction/a04.jpg", "/aiproduction/ai01.jpg", "/aiproduction/ai02.jpg", "/aiproduction/ai03.jpg"],
      },
      {
        id: 3,
        title: "Quay phim & Chụp ảnh chuyên nghiệp",
        description: "Ghi lại những khoảnh khắc đắt giá dưới góc nhìn nghệ thuật, phục vụ nhu cầu làm Profile, Lookbook và phóng sự doanh nghiệp.",
        category: "Sản xuất Truyền thông",
        catColor: "bg-bbs-blue text-white",
        images: ["/media_professional/media_professional1.jpeg", "/media_professional/media_professional2.jpeg", "/media_professional/media_professional3.JPG", "/media_professional/media_professional4.png"],
      },
      {
        id: 4,
        title: "Tư vấn Chiến lược Truyền thông",
        description: "Đồng hành cùng các doanh nghiệp xây dựng lộ trình hình ảnh bài bản, giúp rút ngắn hành trình từ quảng bá đến chốt sale.",
        category: "Sản xuất Truyền thông",
        catColor: "bg-bbs-blue text-white",
        images: ["/tuvantruyenthong/tuvantruyenthong1.jpg", "/tuvantruyenthong/tuvantruyenthong2.jpg", "/tuvantruyenthong/tuvantruyenthong3.jpeg", "/tuvantruyenthong/tuvantruyenthong4.jpeg"],
      },
      {
        id: 5,
        title: "Công nghệ Hậu kỳ",
        description: "Cung cấp trạm dựng phim cấu hình cao chuyên xử lý mượt mà video 4K/8K, kết hợp AI để tạo hiệu ứng độc đáo và tinh chỉnh âm thanh, màu sắc đạt tiêu chuẩn quốc tế.",
        category: "Sản xuất Truyền thông",
        catColor: "bg-bbs-blue text-white",
        images: ["/congnghehauky/hauky1.jpeg", "/congnghehauky/hauky2.jpeg", "/congnghehauky/hauky3.jpeg", "/congnghehauky/hauky4.jpeg"],
      },
      {
        id: 6,
        title: "Tổ chức Sự kiện trọn gói",
        description: "Thực thi chuyên nghiệp từ khâu lên ý tưởng đến vận hành cho các chương trình đa dạng quy mô như: Lễ hội, sự kiện doanh nghiệp, lễ khởi công, khánh thành, và Gala Dinner.",
        category: "Tổ chức Sự kiện",
        catColor: "bg-bbs-red text-white",
        images: ["/sukientrongoi/sukientrongoi.JPG", "/sukientrongoi/sukientrongoi2.JPG", "/sukientrongoi/sukientrongoi3.jpeg", "/sukientrongoi/sukientrongoi4.JPG"],
      },
      {
        id: 7,
        title: "Sự kiện Trải nghiệm",
        description: "Thiết kế và tổ chức các chương trình đặc thù như Team building sinh tồn hay các sự kiện văn hóa, lịch sử mang lại giá trị kết nối thực tế cao.",
        category: "Tổ chức Sự kiện",
        catColor: "bg-bbs-red text-white",
        images: ["/sukientrainghiem/sukien1.JPG", "/sukientrainghiem/sukien2.JPG", "/sukientrainghiem/sukien3.JPG", "/sukientrainghiem/sukien4.JPG"],
      },
      {
        id: 8,
        title: "Livestream Đa nền tảng",
        description: "Cung cấp hệ thống truyền hình trực tiếp chuyên nghiệp với trạm máy Livestream kết hợp bàn trộn hình ảnh, đảm bảo hình ảnh chuẩn truyền hình.",
        category: "Tổ chức Sự kiện",
        catColor: "bg-bbs-red text-white",
        images: ["/livestream/livestream.jpeg", "/livestream/livestream2.jpeg", "/livestream/livestream3.jpeg", "/livestream/livestream4.jpeg"],
      },
      {
        id: 9,
        title: "Giải pháp Kỹ thuật Sự kiện",
        description: "Cho thuê và trực tiếp vận hành hệ thống Âm thanh – Ánh sáng công suất lớn cùng Màn hình LED độ phân giải cao, đáp ứng tiêu chuẩn khắt khe.",
        category: "Tổ chức Sự kiện",
        catColor: "bg-bbs-red text-white",
        images: ["/giaiphapkythuat/giaiphapkythuat1.JPG", "/giaiphapkythuat/giaiphapkythuat2.JPG", "/giaiphapkythuat/giaiphapkythuat3.jpeg", "/giaiphapkythuat/giaiphapkythuat4.jpeg"],
      },
    ]
  },
  en: {
    header: "Solutions by BBS Media",
    subHeader: "Providing specialized services to comprehensively solve your business communication challenges.",
    solutions: [
      {
        id: 1,
        title: "TVC & Video Commercial Production",
        description: "Creating high-quality, sharp films that help brands stand out and make a deep impression on customers' minds.",
        category: "Media Production",
        catColor: "bg-bbs-blue text-white",
        images: ["/tvc/tvc.jpg", "/tvc/tvc02.jpeg", "/tvc/tvc03.JPG", "/tvc/tvc04.jpeg"],
      },
      {
        id: 2,
        title: "AI-Powered Content Production",
        description: "Pioneering the application of Artificial Intelligence (AI) to optimize processes, creating uniquely creative image and video products that lead market trends.",
        category: "Media Production",
        catColor: "bg-bbs-blue text-white",
        images: ["/aiproduction/a04.jpg", "/aiproduction/ai01.jpg", "/aiproduction/ai02.jpg", "/aiproduction/ai03.jpg"],
      },
      {
        id: 3,
        title: "Professional Photography & Videography",
        description: "Capturing priceless moments from an artistic perspective, serving needs for Profiles, Lookbooks, and corporate reportage.",
        category: "Media Production",
        catColor: "bg-bbs-blue text-white",
        images: ["/media_professional/media_professional1.jpeg", "/media_professional/media_professional2.jpeg", "/media_professional/media_professional3.JPG", "/media_professional/media_professional4.png"],
      },
      {
        id: 4,
        title: "Media Strategy Consulting",
        description: "Accompanying businesses to build a methodical image roadmap, helping shorten the journey from promotion to sales conversion.",
        category: "Media Production",
        catColor: "bg-bbs-blue text-white",
        images: ["/tuvantruyenthong/tuvantruyenthong1.jpg", "/tuvantruyenthong/tuvantruyenthong2.jpg", "/tuvantruyenthong/tuvantruyenthong3.jpeg", "/tuvantruyenthong/tuvantruyenthong4.jpeg"],
      },
      {
        id: 5,
        title: "Post-Production Technology",
        description: "Providing high-configuration editing stations specialized in smoothly processing 4K/8K videos, combining AI for unique effects and refining audio and color to international standards.",
        category: "Media Production",
        catColor: "bg-bbs-blue text-white",
        images: ["/congnghehauky/hauky1.jpeg", "/congnghehauky/hauky2.jpeg", "/congnghehauky/hauky3.jpeg", "/congnghehauky/hauky4.jpeg"],
      },
      {
        id: 6,
        title: "Comprehensive Event Organization",
        description: "Professional execution from ideation to operation for diverse scale programs such as: Festivals, corporate events, groundbreaking ceremonies, inaugurations, and Gala Dinners.",
        category: "Event Organization",
        catColor: "bg-bbs-red text-white",
        images: ["/sukientrongoi/sukientrongoi.JPG", "/sukientrongoi/sukientrongoi2.JPG", "/sukientrongoi/sukientrongoi3.jpeg", "/sukientrongoi/sukientrongoi4.JPG"],
      },
      {
        id: 7,
        title: "Experiential Events",
        description: "Designing and organizing specific programs like survival Team building or cultural and historical events that bring high practical connection value.",
        category: "Event Organization",
        catColor: "bg-bbs-red text-white",
        images: ["/sukientrainghiem/sukien1.JPG", "/sukientrainghiem/sukien2.JPG", "/sukientrainghiem/sukien3.JPG", "/sukientrainghiem/sukien4.JPG"],
      },
      {
        id: 8,
        title: "Multi-Platform Livestreaming",
        description: "Providing professional live broadcasting systems with Livestream camera stations combined with image mixing desks, ensuring broadcast-standard imagery.",
        category: "Event Organization",
        catColor: "bg-bbs-red text-white",
        images: ["/livestream/livestream.jpeg", "/livestream/livestream2.jpeg", "/livestream/livestream3.jpeg", "/livestream/livestream4.jpeg"],
      },
      {
        id: 9,
        title: "Event Technical Solutions",
        description: "Renting and directly operating high-power Audio - Lighting systems and high-resolution LED Screens, meeting strict standards.",
        category: "Event Organization",
        catColor: "bg-bbs-red text-white",
        images: ["/giaiphapkythuat/giaiphapkythuat1.JPG", "/giaiphapkythuat/giaiphapkythuat2.JPG", "/giaiphapkythuat/giaiphapkythuat3.jpeg", "/giaiphapkythuat/giaiphapkythuat4.jpeg"],
      },
    ]
  }
};

export function Solutions() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <section id="services" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-navy mb-4">
            {t.header}
          </h2>
          <p className="text-lg text-gray-600">
            {t.subHeader}
          </p>
        </div>

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
            className="!pb-20 !px-2 md:!px-20 swiper-with-blur swiper-equal-height"
          >
            {t.solutions.map((solution) => (
              <SwiperSlide key={solution.id} className="!h-auto flex flex-col">
                <div className="flex flex-col flex-1 h-full">
                  <ServiceCard
                    title={solution.title}
                    description={solution.description}
                    category={solution.category}
                    catColor={solution.catColor}
                    images={solution.images}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Global CSS cho Swiper Pagination & Navigation */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Equal height cards */
        .swiper-equal-height .swiper-wrapper {
          align-items: stretch;
        }
        .swiper-equal-height .swiper-slide {
          height: auto !important;
        }
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
        .swiper-pagination {
          bottom: 0px !important;
        }
        .swiper-pagination-bullet {
          background: #27abde;
          opacity: 0.2;
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .swiper-button-next, .swiper-button-prev {
          color: #27abde;
          margin-top: -40px;
        }
        .swiper-button-next {
          right: 0px !important;
        }
        .swiper-button-prev {
          left: 0px !important;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 24px;
        }
        @media (max-width: 768px) {
          .swiper-button-next, .swiper-button-prev {
            display: none;
          }
        }
      `}} />
    </section>
  );
}
