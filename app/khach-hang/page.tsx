"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { Building2, ShieldCheck, Cpu, ArrowRight, Handshake, Building } from "lucide-react";

const STATS = [
  { num: "1000+", label: "Khách hàng" },
  { num: "100+", label: "Nhãn hàng" },
  { num: "Đa lĩnh vực", label: "Cơ quan, tổ chức, doanh nghiệp và thương hiệu" },
];

const PARTNER_GROUPS = [
  {
    icon: <Building className="w-8 h-8 text-bbs-red" />,
    title: "Cơ quan & Tổ chức",
    desc: "Đối tác truyền thông tin cậy của nhiều cơ quan, tổ chức chính phủ trong các sự kiện văn hóa và chính trị."
  },
  {
    icon: <Building2 className="w-8 h-8 text-bbs-blue" />,
    title: "Doanh nghiệp & Nhãn hàng",
    desc: "Đồng hành cùng các thương hiệu trong việc rút ngắn hành trình chinh phục khách hàng thông qua hình ảnh và video sản phẩm chuyên nghiệp."
  }
];

const REASONS = [
  {
    icon: <ShieldCheck className="w-7 h-7 text-bbs-blue" />,
    title: "Chất lượng thực tế",
    desc: "Chất lượng không đến từ lời nói, mà đến từ từng sản phẩm cụ thể."
  },
  {
    icon: <Handshake className="w-7 h-7 text-bbs-blue" />,
    title: "Tư duy đồng hành",
    desc: "Chúng tôi đặt mình vào vị thế của khách hàng để tối ưu hóa hiệu quả và chi phí."
  },
  {
    icon: <Cpu className="w-7 h-7 text-bbs-blue" />,
    title: "Công nghệ tiên phong",
    desc: "Ứng dụng AI và thiết bị Cinema hiện đại giúp sản phẩm luôn dẫn đầu xu hướng."
  }
];

/* ─── Main page ───────────────────────────────────────────────── */
export default function KhachHangPage() {
  const { lang } = useLanguage();

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* ── 1. Hero / Intro ── */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-b from-bbs-blue/[0.02] via-white to-white pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-2 bg-bbs-blue/10 text-bbs-blue text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-bbs-blue animate-pulse" />
              {lang === "vi" ? "ĐỐI TÁC & KHÁCH HÀNG" : "CLIENTS & PARTNERS"}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-deep-navy mb-6 tracking-tight">
              {lang === "vi" ? "NIỀM TIN TỪ SỰ ĐỒNG HÀNH BỀN VỮNG" : "TRUST THROUGH SUSTAINABLE PARTNERSHIP"}
            </h1>
            <div className="w-16 h-[3px] bg-bbs-blue rounded-full mb-6" />
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl text-center">
              {lang === "vi"
                ? "Với hơn 1000+ khách hàng và 100+ nhãn hàng đã tin tưởng, BBS Media khẳng định uy tín thông qua sự hợp tác với các cơ quan Nhà nước và các tập đoàn đa lĩnh vực."
                : "With over 1000+ clients and 100+ trusted brands, BBS Media affirms its reputation through collaboration with government agencies and multi-sector corporations."}
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Stats Cards ── */}
      <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl md:rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center flex flex-col justify-center items-center">
              <span className={`text-4xl md:text-5xl font-extrabold mb-3 ${i === 1 ? 'text-bbs-red' : 'text-bbs-blue'}`}>
                {stat.num}
              </span>
              <span className="text-gray-600 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Strategic Partner Network ── */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-deep-navy mb-4">
              {lang === "vi" ? "Mạng lưới đối tác chiến lược" : "Strategic Partner Network"}
            </h2>
            <div className="w-12 h-1 bg-bbs-blue mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PARTNER_GROUPS.map((group, i) => (
              <div key={i} className="group bg-[#f8fafc] rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-deep-navy mb-4">{group.title}</h3>
                <p className="text-gray-600 leading-relaxed">{group.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Why Choose BBS Media ── */}
      <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-deep-navy mb-4">
            {lang === "vi" ? "Tại sao các đối tác chọn BBS Media?" : "Why choose BBS Media?"}
          </h2>
          <div className="w-12 h-1 bg-bbs-red mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REASONS.map((reason, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 relative overflow-hidden">
              <div className="w-14 h-14 rounded-full bg-bbs-blue/10 flex items-center justify-center mb-6 relative z-10">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-deep-navy mb-3 relative z-10">{reason.title}</h3>
              <p className="text-gray-600 relative z-10 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-bbs-blue/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-bbs-red/10 blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl border border-gray-100 bg-white/90 p-8 md:p-12 text-center shadow-xl relative overflow-hidden backdrop-blur">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-bbs-blue/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-bbs-red/10 blur-3xl" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center rounded-full border border-bbs-blue/20 bg-bbs-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-bbs-blue mb-5">
                BBS Media
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-deep-navy mb-5">
                {lang === "vi" ? "Sẵn sàng đồng hành cùng BBS Media?" : "Ready to partner with BBS Media?"}
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                {lang === "vi" 
                  ? "Hãy để chúng tôi cùng bạn xây dựng hình ảnh thương hiệu chuyên nghiệp, sáng tạo và hiệu quả." 
                  : "Let us help you build a professional, creative, and effective brand image."}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/lien-he" className="inline-flex items-center justify-center rounded-xl bg-bbs-red px-7 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-bbs-red/90 transition-colors">
                  {lang === "vi" ? "Liên hệ tư vấn" : "Contact Us"}
                </Link>
                <Link href="/du-an-tieu-bieu" className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-4 text-sm font-bold uppercase tracking-widest text-deep-navy hover:border-bbs-blue/30 hover:bg-bbs-blue/5 transition-colors">
                  {lang === "vi" ? "Xem dự án" : "View Projects"} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
