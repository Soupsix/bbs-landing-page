"use client";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";

const CONTENT = {
  vi: {
    description: "Giải pháp truyền thông & sự kiện giúp doanh nghiệp tăng trưởng nhanh. Triển khai nhanh, tối ưu chi phí và tạo ra kết quả đo lường rõ ràng.",
    quickLinksTitle: "Liên kết nhanh",
    links: [
      { href: "#services", label: "Dịch vụ" },
      { href: "#cases", label: "Case Study" },
      { href: "#process", label: "Quy trình" },
      { href: "#faq", label: "FAQ" },
    ],
    contactTitle: "Liên hệ",
    privacy: "Chính sách bảo mật",
    terms: "Điều khoản sử dụng",
  },
  en: {
    description: "Media & event solutions to help businesses grow quickly. Fast deployment, cost optimization, and clear measurable results.",
    quickLinksTitle: "Quick Links",
    links: [
      { href: "#services", label: "Services" },
      { href: "#cases", label: "Case Studies" },
      { href: "#process", label: "Workflow" },
      { href: "#faq", label: "FAQ" },
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

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.769-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
  </svg>
);

export function Footer() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <footer className="relative text-white pt-16 pb-8 border-t border-white/10 min-h-[400px] bg-[url('/FlycamFooter.jpeg')] bg-cover bg-bottom">
      {/* Overlay để làm nổi bật text */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-bbs-blue mb-4">BBS Media</h3>
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

          {/* Quick Links */}
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

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{t.contactTitle}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-bbs-blue shrink-0 mt-0.5" />
                <span>21/08/103 Vạn Phúc, Hà Đông, Hà Nội</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-bbs-blue shrink-0 mt-0.5" />
                <span>
                  <a href="tel:0343603760" className="hover:text-white transition-colors block">034.360.3760</a>
                  <a href="tel:0368248696" className="hover:text-white transition-colors block">0368.24.8696</a>
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-bbs-blue shrink-0" />
                <a href="mailto:bbsmedia1368@gmail.com" className="hover:text-white transition-colors break-all">bbsmedia1368@gmail.com</a>
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