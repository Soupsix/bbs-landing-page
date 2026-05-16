"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ArrowRight, CheckCircle2, PhoneCall, Speaker, MonitorPlay, Box, LayoutPanelLeft } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { EVENT_SERVICES_VI, EVENT_SERVICES_EN } from "../data";

// Custom icons mapping for equipment
const getEquipmentIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes("âm thanh") || n.includes("sound")) return <Speaker className="w-6 h-6" />;
  if (n.includes("ánh sáng") || n.includes("light")) return <MonitorPlay className="w-6 h-6" />; // Example
  if (n.includes("màn hình led") || n.includes("screen")) return <MonitorPlay className="w-6 h-6" />;
  if (n.includes("bàn ghế") || n.includes("tables")) return <Box className="w-6 h-6" />;
  return <LayoutPanelLeft className="w-6 h-6" />;
};

export default function EventDetailPage() {
  const { lang } = useLanguage();
  const params = useParams();
  const slug = params.slug as string;

  const services = lang === "vi" ? EVENT_SERVICES_VI : EVENT_SERVICES_EN;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white text-center px-4">
        <h1 className="text-3xl font-bold text-deep-navy mb-4">
          {lang === "vi" ? "Không tìm thấy sự kiện" : "Event not found"}
        </h1>
        <Link
          href="/to-chuc-su-kien"
          className="text-bbs-red hover:underline font-medium"
        >
          {lang === "vi" ? "← Trở lại danh sách" : "← Back to list"}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* ═══════ 1. BANNER LỚN ═══════ */}
      <section className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        <Image
          src={service.images[0]}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 via-deep-navy/70 to-bbs-red/40" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-bbs-red/20 text-white text-sm font-semibold mb-6 border border-white/20 backdrop-blur-sm uppercase tracking-wider">
            {lang === "vi" ? "Tổ Chức Sự Kiện" : "Event Organization"}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-md">
            {service.title}
          </h1>
        </div>
      </section>

      {/* ═══════ 2. TỔNG QUAN DỊCH VỤ ═══════ */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-bbs-red/10 mb-8">
            <span className="w-8 h-1 bg-bbs-red rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
            {lang === "vi" ? "Tổng Quan Sự Kiện" : "Event Overview"}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {service.desc}
          </p>
        </div>
      </section>

      {/* ═══════ 3. THIẾT KẾ & TRANG TRÍ ═══════ */}
      <section className="py-16 md:py-20 bg-gray-50 border-y border-border-gray/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-deep-navy mb-4">
            {lang === "vi" ? "Thiết Kế & Không Gian" : "Design & Space"}
          </h2>
          <div className="inline-block px-6 py-3 bg-white rounded-full shadow-sm border border-border-gray">
            <p className="text-bbs-red font-semibold text-lg">
              ✨ {service.design}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ 4. THIẾT BỊ SỰ KIỆN ═══════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              {lang === "vi" ? "Hạng Mục Thiết Bị" : "Event Equipment"}
            </h2>
            <p className="text-gray-500">
              {lang === "vi"
                ? "Hệ thống thiết bị hiện đại, chất lượng cao đáp ứng mọi quy mô."
                : "Modern, high-quality equipment system for all scales."}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {service.equipment.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-border-gray hover:border-bbs-red/30 hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center text-deep-navy group-hover:bg-bbs-red group-hover:text-white transition-colors mb-4">
                  {getEquipmentIcon(item)}
                </div>
                <h3 className="font-semibold text-deep-navy">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 5. QUY TRÌNH EVENT ═══════ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-bbs-red/5 border-t border-border-gray/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              {lang === "vi" ? "Quy Trình Triển Khai" : "Implementation Process"}
            </h2>
            <p className="text-gray-500">
              {lang === "vi"
                ? "5 bước chuẩn hóa đảm bảo sự kiện diễn ra thành công."
                : "5 standardized steps to ensure a successful event."}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 lg:gap-6">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="relative flex-1 bg-white rounded-2xl p-6 lg:p-8 border border-border-gray shadow-sm hover:shadow-md hover:border-bbs-red/30 transition-all duration-300 z-10"
              >
                {/* Connecting arrow for desktop */}
                {idx < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-5 w-8 lg:w-10 h-[2px] bg-bbs-red/20 -z-10" />
                )}

                <div className="w-12 h-12 rounded-full bg-bbs-red text-white font-bold text-xl flex items-center justify-center mb-6 shadow-md shadow-bbs-red/20 mx-auto md:mx-0">
                  {idx + 1}
                </div>
                <h3 className="text-center md:text-left text-base lg:text-lg font-bold text-deep-navy leading-snug">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 6. HÌNH ẢNH (GALLERY) ═══════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              {lang === "vi" ? "Hình Ảnh Sự Kiện" : "Event Gallery"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.images.slice(1).map((img, idx) => (
              <div
                key={idx}
                className="group relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-sm"
              >
                <Image
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-deep-navy/0 group-hover:bg-deep-navy/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 7. CTA LIÊN HỆ ═══════ */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-white border-t border-border-gray/30">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-bbs-red/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-bbs-blue/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-deep-navy mb-6">
            {lang === "vi" ? "Tổ Chức Sự Kiện Đẳng Cấp?" : "Host A Premium Event?"}
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            {lang === "vi"
              ? "BBS Media cam kết mang đến giải pháp tối ưu và trải nghiệm khác biệt nhất."
              : "BBS Media is committed to providing optimal solutions and the most distinctive experiences."}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/lien-he"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-bbs-red text-white font-bold px-8 py-4 rounded-button hover:bg-bbs-red/90 transition-colors shadow-lg shadow-bbs-red/20"
            >
              {service.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:0981234567"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-deep-navy font-bold px-8 py-4 rounded-button hover:text-bbs-red hover:border-bbs-red transition-colors border border-border-gray shadow-sm"
            >
              <PhoneCall className="w-5 h-5" />
              {lang === "vi" ? "Gọi Tư Vấn" : "Call Now"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
