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

  const galleryImages = service.images.slice(1);
  const gridCols = (galleryImages.length === 4 || galleryImages.length === 5)
    ? "grid-cols-1 sm:grid-cols-2"
    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

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
            {service.mainHeading || (lang === "vi" ? "Tổng Quan Dịch Vụ" : "Service Overview")}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {service.desc}
          </p>
        </div>
      </section>

      {/* ═══════ 2.5 CÁC DỊCH VỤ BAO GỒM ═══════ */}
      {service.includedServices && service.includedServices.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
                {lang === "vi" ? "Các Dịch Vụ Bao Gồm" : "Included Services"}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.includedServices.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-bbs-blue shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-deep-navy mb-2">{item.name}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════ 3. QUY TRÌNH (PROCESS) ═══════ */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-bbs-blue/5 to-white border-t border-border-gray/30 relative overflow-hidden">
        {/* Glow decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-bbs-blue/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-bbs-red/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-20 flex flex-col items-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#27abde]/10 text-[#27abde] border border-[#27abde]/20 text-xs font-semibold uppercase tracking-widest mb-3">
              {lang === "vi" ? "Quy trình" : "Process"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-deep-navy">
              {lang === "vi" ? "Quy Trình Thực Hiện" : "Implementation Process"}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#27abde] to-[#d81e25] rounded-full mt-4 mb-6" />
            <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
              {lang === "vi"
                ? "Các bước chuyên nghiệp để tạo ra sản phẩm tốt nhất."
                : "Professional steps to create the best product."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 items-stretch pt-8">
            {service.process.map((step, idx) => {
              const hasColon = step.includes(":");
              const title = hasColon ? step.split(":")[0].trim() : step;
              const desc = hasColon ? step.split(":").slice(1).join(":").trim() : "";
              const stepNumber = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={idx}
                  className="relative h-full min-h-[220px] rounded-2xl border border-gray-100 bg-white px-6 pt-12 pb-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#27abde]/40 flex flex-col justify-start"
                >
                  {/* Glowing Circular Number Badge */}
                  <div className={`absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full text-white font-bold shadow-lg ${idx % 2 === 0 ? "bg-[#27abde]" : "bg-[#d81e25]"}`}>
                    {stepNumber}
                  </div>

                  <h3 className="text-sm font-bold uppercase tracking-wide text-[#101827] leading-snug">
                    {title}
                  </h3>
                  {desc && (
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ 4. HÌNH ẢNH (GALLERY) ═══════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#101827]">
              {lang === "vi" ? "Hình Ảnh Thực Tế" : "Project Gallery"}
            </h2>
            <p className="mt-3 text-gray-600">
              {lang === "vi"
                ? "Một số khoảnh khắc và dự án tiêu biểu."
                : "Some typical moments and projects."}
            </p>
          </div>

          <div className={`grid ${gridCols} gap-5 md:gap-6`}>
            {galleryImages.map((img, idx) => {
              const isLastAndOdd = galleryImages.length === 5 && idx === 4;
              return (
                <div
                  key={idx}
                  className={`group relative aspect-video overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 ${
                    isLastAndOdd ? "sm:col-span-2" : ""
                  }`}
                >
                  <Image
                    src={img}
                    alt={lang === "vi" ? `Hình ảnh thực tế ${idx + 1}` : `Project Gallery ${idx + 1}`}
                    fill
                    sizes="(max-w: 768px) 100vw, (max-w: 1200px) 50vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end justify-start p-6">
                    <span className="text-white font-medium text-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 select-none">
                      {lang === "vi" ? `Dự án thực tế ${idx + 1}` : `Project Showcase ${idx + 1}`}
                    </span>
                  </div>
                </div>
              );
            })}
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
              href={`/lien-he?service=${service.id}`}
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
