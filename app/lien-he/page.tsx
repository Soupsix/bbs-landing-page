"use client";

import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

/* ─── SVG Icon helpers ─────────────────────────────────────── */
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.769-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
  </svg>
);

/* ─── Page ─────────────────────────────────────────────────── */
export default function ContactPage() {

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* ══════════════════════════ HERO ══════════════════════════ */}
      <section className="relative pt-24 pb-14 md:pt-22 md:pb-20 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-b from-[#27abde]/[0.03] via-white to-white pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-2 bg-[#27abde]/10 text-[#27abde] text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#27abde] animate-pulse" />
              Liên Hệ
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#101827] mb-4 tracking-tight">
              Kết Nối Cùng BBS Media
            </h1>
            <div className="w-16 h-[3px] bg-[#27abde] rounded-full mb-6" />
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
              Chúng tôi luôn sẵn sàng lắng nghe và đưa ra giải pháp truyền thông tối ưu nhất cho doanh nghiệp của bạn.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ MAIN BLOCK ══════════════════════════ */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-8 md:p-12 lg:p-16 relative">
            {/* Subtle elegant glowing blobs */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-bbs-blue/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-bbs-red/5 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10 flex flex-col">
              {/* Brand Header */}
              <div className="mb-10 text-left">
                <p className="text-bbs-blue text-sm font-extrabold tracking-widest uppercase mb-3">Thông tin liên hệ</p>
                <h3 className="text-deep-navy text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  CÔNG TY TNHH TRUYỀN THÔNG BBS MEDIA
                </h3>
                <p className="text-gray-500 text-base md:text-lg mt-4 leading-relaxed max-w-3xl">
                  Giải pháp truyền thông & sự kiện giúp doanh nghiệp tăng trưởng nhanh. Triển khai nhanh, tối ưu chi phí và tạo ra kết quả đo lường rõ ràng.
                </p>
              </div>

              {/* Info Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {/* Item: Address */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-bbs-blue/10 group-hover:bg-bbs-blue flex items-center justify-center shrink-0 transition-all duration-300">
                    <MapPin className="w-5 h-5 text-bbs-blue group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-wider mb-1">Địa chỉ</p>
                    <p className="text-deep-navy font-bold text-base md:text-lg lg:text-xl leading-relaxed">
                      21/08/103 Vạn Phúc, Hà Đông, Hà Nội
                    </p>
                  </div>
                </div>

                {/* Item: Hotline */}
                <a href="tel:0343603760" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-bbs-blue/10 group-hover:bg-bbs-blue flex items-center justify-center shrink-0 transition-all duration-300">
                    <Phone className="w-5 h-5 text-bbs-blue group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-wider mb-1">Hotline</p>
                    <p className="text-deep-navy font-bold text-base md:text-lg lg:text-xl group-hover:text-bbs-blue transition-colors leading-relaxed">
                      034.360.3760 - 0345.868.556
                    </p>
                  </div>
                </a>

                {/* Item: Email */}
                <a href="mailto:bbsmedia1368@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-bbs-red/10 group-hover:bg-bbs-red flex items-center justify-center shrink-0 transition-all duration-300">
                    <Mail className="w-5 h-5 text-bbs-red group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-wider mb-1">Email</p>
                    <p className="text-deep-navy font-bold text-base md:text-lg lg:text-xl group-hover:text-bbs-red transition-colors break-all leading-relaxed">
                      bbsmedia1368@gmail.com
                    </p>
                  </div>
                </a>

                {/* Item: Fanpage */}
                <a
                  href="https://www.facebook.com/BBSProduction.media"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-bbs-blue/10 group-hover:bg-blue-600 flex items-center justify-center shrink-0 transition-all duration-300">
                    <FacebookIcon className="w-5 h-5 text-blue-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-wider mb-1">Fanpage</p>
                    <p className="text-deep-navy font-bold text-base md:text-lg lg:text-xl group-hover:text-blue-600 transition-colors leading-relaxed">
                      BBSProduction.media
                    </p>
                  </div>
                </a>
              </div>

              {/* Company Details Footer */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                  <div>
                    <span className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-wider mb-1 block">Mã số thuế:</span>
                    <span className="text-deep-navy font-bold text-base md:text-lg">0111450131</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-wider mb-1 block">Đại diện:</span>
                    <span className="text-deep-navy font-bold text-base md:text-lg">Hà Khánh (Owner and CEO)</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-wider mb-1 block">Lĩnh vực hoạt động:</span>
                    <span className="text-deep-navy font-bold text-base md:text-lg leading-relaxed">
                      Tư vấn truyền thông – Sản xuất Media – Tổ chức sự kiện
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ FINAL CTA ══════════════════════════ */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8fafc] to-white pointer-events-none" />
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-bbs-blue/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-bbs-red/10 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-5xl rounded-3xl border border-gray-100 bg-white/90 p-8 text-center shadow-xl backdrop-blur md:p-12">
            <span className="inline-flex items-center rounded-full border border-bbs-blue/20 bg-bbs-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-bbs-blue mb-5">
              BBS Media
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-deep-navy mb-5 tracking-tight">
              Sẵn sàng đồng hành cùng BBS Media?
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Hãy để chúng tôi cùng bạn xây dựng hình ảnh thương hiệu chuyên nghiệp, sáng tạo và hiệu quả.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="tel:0343603760" className="inline-flex items-center justify-center rounded-xl bg-bbs-red px-7 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-bbs-red/90">
                Liên hệ tư vấn
              </Link>
              <Link href="/du-an-tieu-bieu" className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-4 text-sm font-bold uppercase tracking-widest text-deep-navy transition-colors hover:border-bbs-blue/30 hover:bg-bbs-blue/5">
                Xem dự án <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
