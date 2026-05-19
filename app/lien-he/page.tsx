"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";

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

/* ─── Static data ──────────────────────────────────────────── */
const SERVICES = [
  "Tư Vấn Truyền Thông",
  "Tổ Chức Sự Kiện",
  "Quay Chụp Event",
  "Wedding Cinematic",
  "Studio Creative",
  "TVC Doanh Nghiệp",
  "Viral Video",
  "TikTok/Reels Content",
  "Livestream",
  "Flycam",
  "Chụp Ảnh Sản Phẩm",
];

/* ─── Input styles ─────────────────────────────────────────── */
const inputCls =
  "w-full bg-white text-gray-900 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 border-2 border-gray-200 focus:outline-none focus:border-bbs-blue focus:ring-2 focus:ring-bbs-blue/20 hover:border-gray-300 transition-all";

/* ─── Page ─────────────────────────────────────────────────── */
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    hoTen: "",
    tenCongTy: "",
    linhVuc: "",
    email: "",
    soDienThoai: "",
    dichVu: "",
    noiDung: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* ══════════════════════════ HERO ══════════════════════════ */}
      <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 overflow-hidden bg-white border-b border-gray-100">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

              {/* ── Left: DỊCH VỤ ─────────────────────────────────── */}
              <div className="lg:col-span-3 px-8 pt-10 pb-8 lg:py-12 bg-[#f8fafc] border-b border-gray-100 lg:border-b-0 lg:border-r lg:border-gray-100">
                <p className="text-bbs-blue text-xs font-bold tracking-widest uppercase mb-6">
                  Dịch Vụ
                </p>
                <ul className="space-y-3">
                  {SERVICES.map((svc) => (
                    <li key={svc} className="flex items-start gap-2 text-gray-600 text-sm hover:text-bbs-blue transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 mt-0.5 text-bbs-blue shrink-0" />
                      {svc}
                    </li>
                  ))}
                </ul>

                {/* Social */}
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">Theo dõi chúng tôi</p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.facebook.com/BBSProduction.media"
                      target="_blank" rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#27abde] text-white flex items-center justify-center transition-all"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@bbs.event"
                      target="_blank" rel="noopener noreferrer"
                      aria-label="TikTok"
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all"
                    >
                      <TikTokIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.youtube.com/@bbsmedia"
                      target="_blank" rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center transition-all"
                    >
                      <YoutubeIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* ── Middle: FORM ───────────────────────────────────── */}
              <div className="lg:col-span-5 px-8 py-10 lg:py-12 border-b border-gray-100 lg:border-b-0 lg:border-r lg:border-gray-100">
                <p className="text-bbs-blue text-xs font-bold tracking-widest uppercase mb-2">
                  Liên hệ ngay
                </p>
                <h2 className="text-deep-navy text-xl md:text-2xl font-bold mb-8 leading-snug">
                  Kết Nối Ngay Với Chúng Tôi
                </h2>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <p className="text-gray-500 font-semibold text-lg">Gửi thông tin thành công!</p>
                    <p className="text-gray-400 text-sm max-w-xs">
                      Cảm ơn bạn! BBS Media sẽ liên hệ lại trong thời gian sớm nhất.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ hoTen: "", tenCongTy: "", linhVuc: "", email: "", soDienThoai: "", dichVu: "", noiDung: "" }); }}
                      className="mt-2 text-bbs-blue text-sm font-semibold hover:underline"
                    >
                      Gửi thêm yêu cầu
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-600 text-xs font-medium mb-1.5">Họ tên <span className="text-bbs-red">*</span></label>
                        <input
                          required name="hoTen" value={form.hoTen} onChange={handleChange}
                          placeholder="Nguyễn Văn A"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-600 text-xs font-medium mb-1.5">Tên công ty</label>
                        <input
                          name="tenCongTy" value={form.tenCongTy} onChange={handleChange}
                          placeholder="BBS Company..."
                          className={inputCls}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-600 text-xs font-medium mb-1.5">Lĩnh vực hoạt động</label>
                      <input
                        name="linhVuc" value={form.linhVuc} onChange={handleChange}
                        placeholder="Bất động sản, Thực phẩm, Công nghệ..."
                        className={inputCls}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-600 text-xs font-medium mb-1.5">Email <span className="text-bbs-red">*</span></label>
                        <input
                          required type="email" name="email" value={form.email} onChange={handleChange}
                          placeholder="email@company.com"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-600 text-xs font-medium mb-1.5">Số điện thoại <span className="text-bbs-red">*</span></label>
                        <input
                          required type="tel" name="soDienThoai" value={form.soDienThoai} onChange={handleChange}
                          placeholder="0343.603.760"
                          className={inputCls}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-600 text-xs font-medium mb-1.5">Chọn dịch vụ <span className="text-bbs-red">*</span></label>
                      <select
                        required name="dichVu" value={form.dichVu} onChange={handleChange}
                        className={inputCls}
                      >
                        <option value="">-- Chọn dịch vụ bạn quan tâm --</option>
                        {SERVICES.map((svc) => (
                          <option key={svc} value={svc}>{svc}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-600 text-xs font-medium mb-1.5">Nội dung cần tư vấn <span className="text-bbs-red">*</span></label>
                      <textarea
                        required name="noiDung" value={form.noiDung} onChange={handleChange}
                        rows={4}
                        placeholder="Bạn muốn hợp tác cùng BBS Media ở dịch vụ nào? Mô tả ngắn gọn nhu cầu của bạn..."
                        className={`${inputCls} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-[#d81e25] hover:bg-[#b71920] text-white font-bold text-sm py-3.5 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-red-900/20"
                    >
                      <Send className="w-4 h-4" />
                      GỬI THÔNG TIN
                    </button>
                  </form>
                )}
              </div>

              {/* ── Right: CONTACT INFO ────────────────────────────── */}
              <div className="lg:col-span-4 px-8 py-10 lg:py-12 bg-[#f8fafc]">
                {/* Brand */}
                <div className="mb-8">
                  <p className="text-bbs-blue text-xs font-bold tracking-widest uppercase mb-3">Thông tin</p>
                  <h3 className="text-deep-navy text-2xl font-extrabold tracking-tight">BBS MEDIA</h3>
                  <p className="text-gray-500 text-sm mt-1">Creative Production & Event Agency</p>
                </div>

                {/* Info items */}
                <div className="space-y-6">
                  <a href="tel:0343603760" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-bbs-blue/10 group-hover:bg-bbs-blue flex items-center justify-center shrink-0 transition-colors">
                      <Phone className="w-4 h-4 text-bbs-blue group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">Điện thoại</p>
                      <p className="text-deep-navy font-semibold text-sm group-hover:text-bbs-blue transition-colors">0343.603.760</p>
                    </div>
                  </a>

                  <a href="mailto:bbsmedia1368@gmail.com" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-bbs-red/10 group-hover:bg-bbs-red flex items-center justify-center shrink-0 transition-colors">
                      <Mail className="w-4 h-4 text-bbs-red group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">Email</p>
                      <p className="text-deep-navy font-semibold text-sm group-hover:text-bbs-red transition-colors break-all">bbsmedia1368@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/BBSProduction.media"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-bbs-blue/10 group-hover:bg-blue-600 flex items-center justify-center shrink-0 transition-colors">
                      <FacebookIcon className="w-4 h-4 text-blue-500 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">Facebook</p>
                      <p className="text-deep-navy font-semibold text-sm group-hover:text-blue-600 transition-colors">BBSProduction.media</p>
                    </div>
                  </a>

                  <a
                    href="https://www.tiktok.com/@bbs.event"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gray-100 group-hover:bg-deep-navy flex items-center justify-center shrink-0 transition-colors">
                      <TikTokIcon className="w-4 h-4 text-deep-navy group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">TikTok</p>
                      <p className="text-deep-navy font-semibold text-sm group-hover:text-gray-600 transition-colors">@bbs.event</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">Địa chỉ</p>
                      <p className="text-deep-navy font-semibold text-sm leading-relaxed">21/08/103 Vạn Phúc,<br />Hà Đông, Hà Nội</p>
                    </div>
                  </div>
                </div>

                {/* Divider + tagline */}
                <div className="mt-10 pt-6 border-t border-gray-100">
                  <p className="text-gray-400 text-xs leading-relaxed italic">
                    "Chúng tôi không chỉ sản xuất nội dung — chúng tôi tạo ra những câu chuyện thương hiệu đáng nhớ."
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ══════════════════ GOOGLE MAP ══════════════════ */}
          <div className="mt-10 rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-[300px] md:h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17728.75000344749!2d105.770344!3d20.981068999999998!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad43cc1397ef%3A0xc819f2d66fcfa455!2sBBS%20Studio%20%26%20Concepts!5e1!3m2!1svi!2s!4v1778930442433!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BBS Media Google Maps"
            />
          </div>

        </div>
      </section>
    </div>
  );
}
