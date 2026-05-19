import Link from "next/link";
import {
  Bot,
  Camera,
  Clapperboard,
  Lightbulb,
  Radio,
  Sparkles,
  Tv,
  Video,
  WandSparkles,
} from "lucide-react";

export const FEATURED_MEDIA_SERVICES = [
  {
    title: "Tư Vấn Truyền Thông",
    slug: "tu-van-truyen-thong",
    description: "Định hướng chiến lược truyền thông, xây dựng hình ảnh thương hiệu chuyên nghiệp.",
    icon: Lightbulb,
  },
  {
    title: "Quay Chụp Event",
    slug: "quay-chup-event",
    description: "Ghi lại khoảnh khắc sự kiện với hình ảnh sắc nét, cảm xúc và cinematic.",
    icon: Camera,
  },
  {
    title: "Livestream",
    slug: "livestream",
    description: "Triển khai livestream đa nền tảng với thiết bị hiện đại và vận hành ổn định.",
    icon: Radio,
  },
  {
    title: "Quay Chụp Wedding",
    slug: "quay-chup-wedding",
    description: "Sản xuất hình ảnh cưới tự nhiên, tinh tế và giàu cảm xúc theo phong cách điện ảnh.",
    icon: Video,
  },
  {
    title: "Quay Chụp Sản Phẩm / Thương Hiệu",
    slug: "quay-chup-san-pham-thuong-hieu",
    description: "Tạo bộ ảnh và video sản phẩm nổi bật, phù hợp nhận diện thương hiệu.",
    icon: Clapperboard,
  },
  {
    title: "Studio Sáng Tạo",
    slug: "studio-sang-tao",
    description: "Không gian sáng tạo cho lookbook, profile, campaign và nội dung social media.",
    icon: Sparkles,
  },
  {
    title: "TVC Doanh Nghiệp",
    slug: "tvc-doanh-nghiep",
    description: "Sản xuất TVC, phim doanh nghiệp và video quảng cáo chuyên nghiệp.",
    icon: Tv,
  },
  {
    title: "Viral Video / TikTok / Reels Content",
    slug: "viral-video-tiktok-reels-content",
    description: "Phát triển nội dung ngắn bắt trend, tối ưu cho TikTok, Reels và social platforms.",
    icon: WandSparkles,
  },
  {
    title: "Sản Xuất Video AI",
    slug: "san-xuat-video-ai",
    description: "Ứng dụng AI để tạo video sáng tạo, hiện đại và tối ưu chi phí sản xuất.",
    icon: Bot,
  },
];

export function FeaturedMediaServices() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-bbs-blue/20 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-bbs-blue text-sm font-bold tracking-[0.25em] uppercase mb-3">
            Chuyên nghiệp - Sáng tạo - Tận tâm
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-deep-navy tracking-tight">
            DỊCH VỤ TIÊU BIỂU MEDIA
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {FEATURED_MEDIA_SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isRed = index % 3 === 1;

            return (
              <article
                key={service.slug}
                className="group relative pt-10 rounded-2xl border border-gray-100 bg-white px-6 pb-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-bbs-blue/10"
              >
                <div
                  className={`absolute left-1/2 top-0 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${isRed ? "bg-bbs-red shadow-bbs-red/25" : "bg-bbs-blue shadow-bbs-blue/25"}`}
                >
                  <Icon className="h-8 w-8" strokeWidth={2.2} />
                </div>

                <h3 className="min-h-[56px] text-lg md:text-xl font-bold text-deep-navy leading-snug mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5">
                  {service.description}
                </p>
                <Link
                  href={`/dich-vu-tieu-bieu#${service.slug}`}
                  className="inline-flex items-center justify-center text-sm font-bold uppercase tracking-wider text-bbs-blue transition-colors hover:text-bbs-red"
                >
                  Xem thêm
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
