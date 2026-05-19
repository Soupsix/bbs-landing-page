import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURED_MEDIA_SERVICES } from "@/components/sections/FeaturedMediaServices";

const DETAILS: Record<string, string[]> = {
  "tu-van-truyen-thong": [
    "Phân tích mục tiêu thương hiệu và định hướng thông điệp truyền thông.",
    "Xây dựng kế hoạch nội dung, hình ảnh và kênh triển khai phù hợp.",
  ],
  "quay-chup-event": [
    "Ghi hình, chụp ảnh hội nghị, gala, ra mắt sản phẩm và hoạt động nội bộ.",
    "Bàn giao tư liệu, highlight video và album ảnh theo phong cách chuyên nghiệp.",
  ],
  livestream: [
    "Thiết lập hệ thống livestream đa camera, âm thanh, ánh sáng và đường truyền.",
    "Vận hành kỹ thuật trực tiếp cho sự kiện online, hybrid và bán hàng trực tuyến.",
  ],
  "quay-chup-wedding": [
    "Quay phim, chụp ảnh cưới, phóng sự cưới và pre-wedding giàu cảm xúc.",
    "Kể câu chuyện ngày cưới bằng ngôn ngữ hình ảnh cinematic, tự nhiên.",
  ],
  "quay-chup-san-pham-thuong-hieu": [
    "Sản xuất hình ảnh sản phẩm, profile thương hiệu, lookbook và campaign visual.",
    "Tối ưu bối cảnh, ánh sáng, styling để làm nổi bật giá trị sản phẩm.",
  ],
  "studio-sang-tao": [
    "Không gian studio linh hoạt cho chụp ảnh, quay video và sản xuất nội dung.",
    "Hỗ trợ concept, set design, ánh sáng và ekip vận hành theo từng dự án.",
  ],
  "tvc-doanh-nghiep": [
    "Sản xuất TVC quảng cáo, phim giới thiệu doanh nghiệp và video thương hiệu.",
    "Triển khai từ ý tưởng, kịch bản, quay dựng đến hậu kỳ hoàn thiện.",
  ],
  "viral-video-tiktok-reels-content": [
    "Sáng tạo video ngắn phù hợp TikTok, Reels, Shorts và các nền tảng social.",
    "Tối ưu hook, nhịp dựng và thông điệp để tăng khả năng lan tỏa.",
  ],
  "san-xuat-video-ai": [
    "Ứng dụng AI trong xây dựng hình ảnh, motion, voice và video sáng tạo.",
    "Giúp rút ngắn thời gian sản xuất, mở rộng ý tưởng và tối ưu ngân sách.",
  ],
};

export default function FeaturedServicesPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bbs-blue/5 via-white to-white pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <p className="text-bbs-blue text-sm font-bold tracking-[0.25em] uppercase mb-4">
            Chuyên nghiệp - Sáng tạo - Tận tâm
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-deep-navy tracking-tight mb-6">
            DỊCH VỤ TIÊU BIỂU MEDIA
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            BBS Media cung cấp các giải pháp Media, Event và Creative Production giúp doanh nghiệp xây dựng hình ảnh chuyên nghiệp, hiện đại và nhất quán.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {FEATURED_MEDIA_SERVICES.map((service, index) => {
              const Icon = service.icon;
              const isRed = index % 3 === 1;

              return (
                <article
                  id={service.slug}
                  key={service.slug}
                  className="scroll-mt-28 rounded-3xl border border-gray-100 bg-white p-7 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg ${isRed ? "bg-bbs-red shadow-bbs-red/20" : "bg-bbs-blue shadow-bbs-blue/20"}`}
                    >
                      <Icon className="h-8 w-8" strokeWidth={2.2} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-deep-navy mb-3">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-5">
                        {DETAILS[service.slug].map((item) => (
                          <li key={item} className="flex gap-3 text-sm md:text-base text-gray-600 leading-relaxed">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-bbs-blue shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/lien-he"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-bbs-red hover:text-bbs-blue transition-colors"
                      >
                        Nhận tư vấn
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
