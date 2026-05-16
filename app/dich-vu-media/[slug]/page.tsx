"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { SERVICES_VI, SERVICES_EN } from "../data";

export default function ServiceDetailPage() {
  const { lang } = useLanguage();
  const params = useParams();
  const slug = params.slug as string;

  const services = lang === "vi" ? SERVICES_VI : SERVICES_EN;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white text-center px-4">
        <h1 className="text-3xl font-bold text-deep-navy mb-4">
          {lang === "vi" ? "Không tìm thấy dịch vụ" : "Service not found"}
        </h1>
        <Link
          href="/dich-vu-media"
          className="text-bbs-blue hover:underline font-medium"
        >
          {lang === "vi" ? "← Trở lại danh sách dịch vụ" : "← Back to services"}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* ═══════ 1. BANNER LỚN ═══════ */}
      {/* Chiều cao khoảng 60vh (thấp hơn màn hình Hero chính) */}
      <section className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Lấy ảnh đầu tiên trong mảng images làm banner */}
        <Image
          src={service.images[0]}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient theo màu thương hiệu để chữ hiển thị rõ */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 via-deep-navy/70 to-bbs-blue/40" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-bbs-blue/20 text-white text-sm font-semibold mb-6 border border-white/20 backdrop-blur-sm uppercase tracking-wider">
            {lang === "vi" ? "Dịch vụ Media" : "Media Services"}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-md">
            {service.title}
          </h1>
        </div>
      </section>

      {/* ═══════ 2. MÔ TẢ DỊCH VỤ ═══════ */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-bbs-blue/10 mb-8">
            <span className="w-8 h-1 bg-bbs-blue rounded-full" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
            {lang === "vi" ? "Tổng Quan Dịch Vụ" : "Service Overview"}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {service.desc}
          </p>
        </div>
      </section>

      {/* ═══════ 3. QUY TRÌNH (PROCESS) ═══════ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-bbs-blue/5 border-t border-border-gray/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              {lang === "vi" ? "Quy Trình Thực Hiện" : "Implementation Process"}
            </h2>
            <p className="text-gray-500">
              {lang === "vi"
                ? "Các bước chuyên nghiệp để tạo ra sản phẩm tốt nhất."
                : "Professional steps to create the best product."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-8 border border-border-gray shadow-sm hover:shadow-lg hover:border-bbs-blue/30 transition-all duration-300"
              >
                {/* Connecting line for desktop */}
                {idx < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-bbs-blue/20" />
                )}

                <div className="w-12 h-12 rounded-full bg-bbs-blue text-white font-bold text-xl flex items-center justify-center mb-6 shadow-md">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-deep-navy leading-snug">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 4. HÌNH ẢNH (GALLERY) ═══════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              {lang === "vi" ? "Hình Ảnh Thực Tế" : "Project Gallery"}
            </h2>
            <p className="text-gray-500">
              {lang === "vi"
                ? "Một số khoảnh khắc và dự án tiêu biểu."
                : "Some typical moments and projects."}
            </p>
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
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-deep-navy/0 group-hover:bg-deep-navy/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 5. CTA LIÊN HỆ ═══════ */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-white border-t border-border-gray/30">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-bbs-red/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-bbs-blue/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-deep-navy mb-6">
            {lang === "vi" ? "Sẵn Sàng Bắt Đầu Dự Án?" : "Ready to Start Your Project?"}
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            {lang === "vi"
              ? "Hãy để BBS Media đồng hành cùng bạn tạo nên những giá trị truyền thông khác biệt."
              : "Let BBS Media accompany you to create distinctive media values."}
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-deep-navy font-bold px-8 py-4 rounded-button hover:text-bbs-blue hover:border-bbs-blue transition-colors border border-border-gray shadow-sm"
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
