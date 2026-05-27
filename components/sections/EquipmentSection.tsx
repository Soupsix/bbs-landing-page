"use client";

import { getOptimizedCloudinaryUrl, CLOUDINARY_WIDTHS } from "@/lib/cloudinary";

const equipmentImages = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779237609/MHH03100_p18xhr.webp",
    alt: "Hệ thống thiết bị sản xuất chuyên nghiệp BBS Media",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779237610/MHH02943_emw6ea.webp",
    alt: "Thiết bị ghi hình sự kiện BBS Media",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779237609/DAT01774_l8ysmy.webp",
    alt: "Thiết bị sản xuất hình ảnh BBS Media",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779237608/DAT01966_zjbi6q.webp",
    alt: "Hậu trường sản xuất BBS Media",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779238091/z7797166026274_3e163d42f175d9d9fd77931d6133f44a_mp1ewh.webp",
    alt: "Ekip và thiết bị BBS Media",
  },
];

export function EquipmentSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h3 className="text-[#27abde] font-bold tracking-widest text-sm md:text-base uppercase mb-4">
            TRANG THIẾT BỊ
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Hệ Thống Thiết Bị Sản Xuất Chuyên Nghiệp
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
            BBS MEDIA đầu tư hệ thống thiết bị ghi hình, ánh sáng, âm thanh và hậu kỳ hiện đại, đáp ứng đa dạng nhu cầu sản xuất hình ảnh, livestream, TVC, sự kiện và các dự án truyền thông chuyên nghiệp.
          </p>
          <div className="inline-block px-6 py-3 rounded-full bg-red-50 border border-[#d81e25]/20 shadow-sm">
            <p className="text-[#d81e25] font-semibold text-sm md:text-base">
              Thiết bị hiện đại - Vận hành chuyên nghiệp - Hình ảnh chuẩn cinematic
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Main Large Image */}
          <div className="relative group overflow-hidden rounded-2xl lg:rounded-3xl h-[400px] lg:h-[600px] shadow-md">
            <img
              src={getOptimizedCloudinaryUrl(equipmentImages[0].src, CLOUDINARY_WIDTHS.showcase)}
              alt={equipmentImages[0].alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
          </div>

          {/* 4 Small Images Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6 h-[400px] lg:h-[600px]">
            {equipmentImages.slice(1).map((item, index) => (
              <div key={item.id} className="relative group overflow-hidden rounded-2xl lg:rounded-3xl shadow-md">
                <img
                  src={getOptimizedCloudinaryUrl(item.src, CLOUDINARY_WIDTHS.card)}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-65 group-hover:opacity-85 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
