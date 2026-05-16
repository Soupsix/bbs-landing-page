"use client";

import { useLanguage } from "@/components/contexts/LanguageContext";
import { Phone, Mail, MapPin, Send } from "lucide-react";

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

const PAGE_CONTENT = {
  vi: {
    badge: "Liên Hệ",
    title: "Kết Nối Cùng BBS Media",
    subtitle: "Chúng tôi luôn sẵn sàng lắng nghe và đưa ra giải pháp truyền thông tối ưu nhất cho doanh nghiệp của bạn.",
    infoTitle: "Thông Tin Liên Hệ",
    formTitle: "Gửi Yêu Cầu Tư Vấn",
    name: "Họ và tên",
    phone: "Số điện thoại",
    email: "Email",
    message: "Nội dung cần tư vấn",
    submit: "GỬI THÔNG TIN",
    address: "21/08/103 Vạn Phúc, Hà Đông, Hà Nội",
  },
  en: {
    badge: "Contact",
    title: "Connect With BBS Media",
    subtitle: "We are always ready to listen and provide the most optimal media solutions for your business.",
    infoTitle: "Contact Information",
    formTitle: "Send A Request",
    name: "Full Name",
    phone: "Phone Number",
    email: "Email",
    message: "Message",
    submit: "SEND MESSAGE",
    address: "21/08/103 Van Phuc, Ha Dong, Hanoi",
  },
};

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = PAGE_CONTENT[lang];

  return (
    <div className="bg-white min-h-screen">
      {/* 
        Sử dụng pt-24 để bù khoảng cách do fixed/sticky header, 
        kèm mt-12 mb-16 như yêu cầu 
      */}
      <section className="pt-24 pb-16 mt-4 md:mt-0 mb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-bbs-blue/10 text-bbs-blue text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-bbs-blue" />
              {t.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-6 tracking-tight">
              {t.title}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* 
            Main Layout:
            - Desktop: Grid 2 cột (Left: Form + Info, Right: Map)
            - Mobile: Xếp dọc (Flex/Grid 1 cột) 
          */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* ════ LEFT COLUMN: CONTACT INFO & FORM ════ */}
            <div className="flex flex-col gap-12">

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-deep-navy mb-6">
                  {t.infoTitle}
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-bbs-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-bbs-blue transition-colors">
                      <Phone className="w-5 h-5 text-bbs-blue group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">BBS MEDIA</p>
                      <a href="tel:0343603760" className="text-lg font-semibold text-deep-navy hover:text-bbs-blue transition-colors">
                        0343.603.760
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-bbs-red/10 flex items-center justify-center flex-shrink-0 group-hover:bg-bbs-red transition-colors">
                      <Mail className="w-5 h-5 text-bbs-red group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">Email</p>
                      <a href="mailto:bbsmedia1368@gmail.com" className="text-lg font-semibold text-deep-navy hover:text-bbs-red transition-colors">
                        bbsmedia1368@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-deep-navy transition-colors">
                      <MapPin className="w-5 h-5 text-deep-navy group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium mb-1">{lang === "vi" ? "Địa chỉ" : "Address"}</p>
                      <p className="text-lg font-semibold text-deep-navy">
                        {t.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 mt-8 pt-6 border-t border-border-gray/50">
                  <a
                    href="https://www.facebook.com/BBSProduction.media"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@bbs.event"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-50 text-deep-navy flex items-center justify-center hover:bg-deep-navy hover:text-white transition-all shadow-sm"
                    aria-label="TikTok"
                  >
                    <TikTokIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* ════ RIGHT COLUMN: GOOGLE MAPS ════ */}
            <div className="h-full w-full min-h-[420px] lg:min-h-full rounded-[24px] overflow-hidden shadow-lg border border-border-gray sticky top-32">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17728.75000344749!2d105.770344!3d20.981068999999998!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad43cc1397ef%3A0xc819f2d66fcfa455!2sBBS%20Studio%20%26%20Concepts!5e1!3m2!1svi!2s!4v1778930442433!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[420px] lg:h-full object-cover"
                title="BBS Media Google Maps"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
