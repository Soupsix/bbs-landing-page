"use client";
import Link from "next/link";
import { useState } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";

const CONTENT = {
  vi: {
    description: "Giải pháp truyền thông & sự kiện giúp doanh nghiệp tăng trưởng nhanh. Triển khai nhanh, tối ưu chi phí và tạo ra kết quả đo lường rõ ràng.",
    quickLinksTitle: "Dịch vụ",
    links: [
      { href: "/dich-vu-media/tu-van-truyen-thong", label: "Tư Vấn Truyền Thông" },
      { href: "/to-chuc-su-kien", label: "Tổ Chức Sự Kiện" },
      { href: "/dich-vu-media/quay-chup-event", label: "Quay Chụp Event" },
      { href: "/dich-vu-media/quay-chup-wedding", label: "Wedding Cinematic" },
      { href: "/dich-vu-media/studio-sang-tao", label: "Studio Creative" },
      { href: "/dich-vu-media/tvc-doanh-nghiep", label: "TVC Doanh Nghiệp" },
    ],
    contactTitle: "Liên hệ",
    privacy: "Chính sách bảo mật",
    terms: "Điều khoản sử dụng",
  },
  en: {
    description: "Media & event solutions to help businesses grow quickly. Fast deployment, cost optimization, and clear measurable results.",
    quickLinksTitle: "Services",
    links: [
      { href: "/dich-vu-media/tu-van-truyen-thong", label: "Media Consulting" },
      { href: "/to-chuc-su-kien", label: "Event Organization" },
      { href: "/dich-vu-media/quay-chup-event", label: "Event Filming" },
      { href: "/dich-vu-media/quay-chup-wedding", label: "Wedding Cinematic" },
      { href: "/dich-vu-media/studio-sang-tao", label: "Creative Studio" },
      { href: "/dich-vu-media/tvc-doanh-nghiep", label: "Corporate TVC" },
    ],
    contactTitle: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
  }
};

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const SERVICES = [
  "Tư Vấn Truyền Thông",
  "Tổ Chức Sự Kiện",
  "Quay Chụp Event",
  "Livestream",
  "Quay Chụp Wedding",
  "Sản Phẩm / Thương Hiệu",
  "Studio Sáng Tạo",
  "TVC Doanh Nghiệp",
  "Viral Video / TikTok / Reels",
  "Sản Xuất Video AI",
];

const inputCls =
  "w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none transition-all hover:border-white/25 focus:border-bbs-blue focus:bg-white/15 focus:ring-2 focus:ring-bbs-blue/25";

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.769-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
  </svg>
);

export function Footer() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { hoTen, tenCongTy, linhVuc, email, soDienThoai, dichVu, noiDung } = form;

    if (!hoTen || !email || !soDienThoai || !dichVu || !noiDung) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc.");
      return;
    }

    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      alert("Chưa cấu hình đường dẫn nhận form.");
      return;
    }

    setLoading(true);

    const payload = {
      fullName: hoTen,
      companyName: tenCongTy,
      businessField: linhVuc,
      email,
      phone: soDienThoai,
      service: dichVu,
      message: noiDung,
      sourcePage: window.location.href,
      submittedAt: new Date().toISOString(),
    };

    try {
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
      setForm({ hoTen: "", tenCongTy: "", linhVuc: "", email: "", soDienThoai: "", dichVu: "", noiDung: "" });
    } catch (error) {
      alert("Gửi thông tin chưa thành công. Vui lòng thử lại hoặc liên hệ hotline.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative text-white pt-16 pb-8 border-t border-white/10 min-h-[400px] bg-[url('https://res.cloudinary.com/dss1zawkj/image/upload/v1779249740/FlycamFooter_he9qmj.webp')] bg-cover bg-bottom">
      {/* Overlay để làm nổi bật text */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_2.2fr_1.4fr] xl:grid-cols-[1.4fr_1fr_2.2fr_1.5fr] gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-bbs-blue mb-4">Công ty TNHH truyền thông BBS Media</h3>
            <p className="text-gray-400 mb-2">MST: 0111450131</p>
            <p className="text-gray-400 mb-6 max-w-sm">
              {t.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-bbs-blue transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bbs-red transition-colors">
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{t.quickLinksTitle}</h4>
            <ul className="space-y-3">
              {t.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-6 text-white shadow-2xl shadow-black/20 backdrop-blur-md">
            <p className="text-bbs-blue text-xs font-bold tracking-widest uppercase mb-2">Liên hệ ngay</p>
            <h4 className="text-white text-xl font-bold mb-5">Kết Nối Ngay Với Chúng Tôi</h4>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-3">
                <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-green-400" />
                </div>
                <p className="text-white font-semibold">Gửi thông tin thành công!</p>
                <p className="text-gray-400 text-sm">Cảm ơn bạn! BBS Media đã nhận được thông tin và sẽ liên hệ sớm nhất.</p>
                <button
                  onClick={() => { setSubmitted(false); }}
                  className="mt-1 text-bbs-blue text-sm font-semibold hover:underline"
                >
                  Gửi thêm yêu cầu
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input required name="hoTen" value={form.hoTen} onChange={handleChange} placeholder="Họ tên *" className={inputCls} />
                  <input name="tenCongTy" value={form.tenCongTy} onChange={handleChange} placeholder="Tên công ty" className={inputCls} />
                </div>
                <input name="linhVuc" value={form.linhVuc} onChange={handleChange} placeholder="Lĩnh vực hoạt động" className={inputCls} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email *" className={inputCls} />
                  <input required type="tel" name="soDienThoai" value={form.soDienThoai} onChange={handleChange} placeholder="Số điện thoại *" className={inputCls} />
                </div>
                <select required name="dichVu" value={form.dichVu} onChange={handleChange} className={inputCls}>
                  <option className="text-gray-900" value="">-- Chọn dịch vụ bạn quan tâm --</option>
                  {SERVICES.map((svc) => (
                    <option className="text-gray-900" key={svc} value={svc}>{svc}</option>
                  ))}
                </select>
                <textarea required name="noiDung" value={form.noiDung} onChange={handleChange} rows={3} placeholder="Nội dung cần tư vấn *" className={`${inputCls} resize-none`} />
                <button disabled={loading} type="submit" className="w-full flex items-center justify-center gap-2 bg-[#d81e25] hover:bg-[#b71920] text-white font-bold text-sm py-3.5 rounded-lg transition-all shadow-lg shadow-red-950/30 disabled:opacity-70 disabled:cursor-not-allowed">
                  <Send className="w-4 h-4" />
                  {loading ? "Đang gửi..." : "GỬI THÔNG TIN"}
                </button>
              </form>
            )}
          </div>

          {/* Contact */}
          <div className="min-w-[260px]">
            <h4 className="text-lg font-semibold mb-4 text-white">{t.contactTitle}</h4>
            <ul className="space-y-4 text-sm leading-relaxed">
              <li className="flex items-start gap-3 text-gray-400 min-w-0">
                <MapPin className="w-5 h-5 text-bbs-blue shrink-0 mt-0.5" />
                <span className="min-w-0 break-words">21/08/103 Vạn Phúc, Hà Đông, Hà Nội</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 min-w-0">
                <Phone className="w-5 h-5 text-bbs-blue shrink-0 mt-0.5" />
                <div className="min-w-0 break-words">
                  <a href="tel:0343603760" className="hover:text-white transition-colors block">SĐT Hotline: 0343603760</a>
                  <a href="https://zalo.me/0368248696" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block mt-1">Zalo hỗ trợ: 0368248696</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400 min-w-0">
                <Mail className="w-5 h-5 text-bbs-blue shrink-0 mt-0.5" />
                <a href="mailto:bbsmedia1368@gmail.com" className="hover:text-white transition-colors break-words min-w-0 block">bbsmedia1368@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} BBS Media. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">{t.privacy}</Link>
            <Link href="#" className="hover:text-white transition-colors">{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}