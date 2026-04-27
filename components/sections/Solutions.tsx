"use client";

import { ArrowRight, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SOLUTIONS = [
  {
    id: 1,
    title: "Sản xuất TVC & Video Quảng cáo",
    description: "Kiến tạo những thước phim chất lượng cao, sắc nét giúp thương hiệu nổi bật và ghi dấu ấn đậm nét trong tâm trí khách hàng.",
    category: "Sản xuất Truyền thông",
    catColor: "bg-bbs-blue text-white",
  },
  {
    id: 2,
    title: "Sản xuất Nội dung bằng AI",
    description: "Tiên phong ứng dụng trí tuệ nhân tạo (AI) để tối ưu hóa quy trình, tạo ra những sản phẩm hình ảnh và video sáng tạo độc bản, dẫn đầu xu hướng thị trường.",
    category: "Sản xuất Truyền thông",
    catColor: "bg-bbs-blue text-white",
  },
  {
    id: 3,
    title: "Quay phim & Chụp ảnh chuyên nghiệp",
    description: "Ghi lại những khoảnh khắc đắt giá dưới góc nhìn nghệ thuật, phục vụ nhu cầu làm Profile, Lookbook và phóng sự doanh nghiệp.",
    category: "Sản xuất Truyền thông",
    catColor: "bg-bbs-blue text-white",
  },
  {
    id: 4,
    title: "Tư vấn Chiến lược Truyền thông",
    description: "Đồng hành cùng các doanh nghiệp xây dựng lộ trình hình ảnh bài bản, giúp rút ngắn hành trình từ quảng bá đến chốt sale.",
    category: "Sản xuất Truyền thông",
    catColor: "bg-bbs-blue text-white",
  },
  {
    id: 5,
    title: "Công nghệ Hậu kỳ",
    description: "Cung cấp trạm dựng phim cấu hình cao chuyên xử lý mượt mà video 4K/8K, kết hợp AI để tạo hiệu ứng độc đáo và tinh chỉnh âm thanh, màu sắc đạt tiêu chuẩn quốc tế.",
    category: "Sản xuất Truyền thông",
    catColor: "bg-bbs-blue text-white",
  },
  {
    id: 6,
    title: "Tổ chức Sự kiện trọn gói",
    description: "Thực thi chuyên nghiệp từ khâu lên ý tưởng đến vận hành cho các chương trình đa dạng quy mô như: Lễ hội, sự kiện doanh nghiệp, lễ khởi công, khánh thành, và Gala Dinner.",
    category: "Tổ chức Sự kiện",
    catColor: "bg-bbs-red text-white",
  },
  {
    id: 7,
    title: "Sự kiện Trải nghiệm",
    description: "Thiết kế và tổ chức các chương trình đặc thù như Team building sinh tồn hay các sự kiện văn hóa, lịch sử mang lại giá trị kết nối thực tế cao.",
    category: "Tổ chức Sự kiện",
    catColor: "bg-bbs-red text-white",
  },
  {
    id: 8,
    title: "Livestream Đa nền tảng",
    description: "Cung cấp hệ thống truyền hình trực tiếp chuyên nghiệp với trạm máy Livestream kết hợp bàn trộn hình ảnh, đảm bảo hình ảnh chuẩn truyền hình.",
    category: "Tổ chức Sự kiện",
    catColor: "bg-bbs-red text-white",
  },
  {
    id: 9,
    title: "Giải pháp Kỹ thuật Sự kiện",
    description: "Cho thuê và trực tiếp vận hành hệ thống Âm thanh – Ánh sáng công suất lớn cùng Màn hình LED độ phân giải cao, đáp ứng tiêu chuẩn khắt khe.",
    category: "Tổ chức Sự kiện",
    catColor: "bg-bbs-red text-white",
  }
];

export function Solutions() {
  return (
    <section id="services" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-navy mb-4">Giải pháp của BBS Media</h2>
          <p className="text-lg text-gray-600">Cung cấp các dịch vụ chuyên biệt giúp giải quyết triệt để bài toán truyền thông của doanh nghiệp.</p>
        </div>

        <div className="max-w-[1400px] mx-auto relative px-4 md:px-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-20 !px-2 md:!px-20 swiper-with-blur"
          >
            {SOLUTIONS.map((solution) => (
              <SwiperSlide key={solution.id} className="h-auto">
                <div className="bg-white rounded-[24px] h-full min-h-[550px] shadow-sm border border-border-gray hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="w-full h-[260px] bg-gray-100 flex items-center justify-center relative">
                    <ImageIcon className="w-16 h-16 text-gray-300" />
                    {/* Category Badge */}
                    <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1.5 rounded-full ${solution.catColor}`}>
                      {solution.category}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-deep-navy mb-4 leading-tight">{solution.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow text-base">{solution.description}</p>
                    
                    <Link 
                      href="#contact" 
                      className={`inline-flex items-center font-semibold mt-auto ${solution.category === 'Tổ chức Sự kiện' ? 'text-bbs-red hover:text-red-700' : 'text-bbs-blue hover:text-blue-700'} transition-colors`}
                    >
                      Nhận tư vấn ngay
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      {/* Global CSS cho Swiper Pagination & Navigation */}
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-with-blur .swiper-slide {
          opacity: 0.3;
          filter: blur(3px);
          transition: opacity 0.4s ease, filter 0.4s ease;
          pointer-events: none; /* Không cho phép click thẻ bị mờ */
        }
        
        /* Thẻ 1 luôn rõ */
        .swiper-with-blur .swiper-slide.swiper-slide-active {
          opacity: 1;
          filter: blur(0);
          pointer-events: auto;
        }
        
        /* Thẻ 2 rõ trên Tablet trở lên */
        @media (min-width: 640px) {
          .swiper-with-blur .swiper-slide.swiper-slide-active + .swiper-slide {
            opacity: 1;
            filter: blur(0);
            pointer-events: auto;
          }
        }
        
        /* Thẻ 3 rõ trên Desktop trở lên */
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
