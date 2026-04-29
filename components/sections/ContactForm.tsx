"use client";
import { useState } from "react";
import { Loader2, Send, MapPin, Phone, Mail } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase text-deep-navy">
            Liên hệ tư vấn
          </h2>
        </div>

        {/* 2-column layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ===== Cột 1 – Thông tin liên hệ ===== */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xl md:text-2xl font-bold text-deep-navy leading-snug mb-6">
                "Kiến tạo hình ảnh – Nâng tầm thương hiệu"
              </p>

            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-bbs-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-bbs-blue" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Địa chỉ</p>
                  <p className="text-deep-navy font-medium">21/08/103 Vạn Phúc, Hà Đông, Hà Nội</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-bbs-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-bbs-blue" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Hotline</p>
                  <a href="tel:0343603760" className="block text-deep-navy font-medium hover:text-bbs-blue transition-colors">
                    034.360.3760
                  </a>
                  <a href="tel:0368248696" className="block text-deep-navy font-medium hover:text-bbs-blue transition-colors">
                    0368.24.8696
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-bbs-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-bbs-blue" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Email</p>
                  <a href="mailto:bbsmedia1368@gmail.com" className="text-deep-navy font-medium hover:text-bbs-blue transition-colors break-all">
                    bbsmedia1368@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map embed */}
            <div className="rounded-[16px] overflow-hidden border border-border-gray shadow-sm w-full h-74">
              <iframe
                title="BBS Media Location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d167.30641154682363!2d105.770344!3d20.981068999999998!2m2!1f0!2f1.9092642779217295!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x3135ad43cc1397ef%3A0xc819f2d66fcfa455!2sBBS%20Studio%20%26%20Concepts!5e1!3m2!1svi!2s!4v1777444056146!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ===== Cột 2 – Form liên hệ ===== */}
          <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-xl border border-border-gray/50">
            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Đăng ký thành công!</h3>
                <p className="text-green-800">Cảm ơn bạn đã quan tâm. Chúng tôi sẽ gọi lại trong thời gian sớm nhất.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-deep-navy mb-2">Họ và tên *</label>
                    <input type="text" required disabled={isSubmitting} className="w-full h-12 px-4 rounded-button border border-border-gray bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-bbs-blue/50 disabled:opacity-50 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-navy mb-2">Tên công ty</label>
                    <input type="text" disabled={isSubmitting} className="w-full h-12 px-4 rounded-button border border-border-gray bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-bbs-blue/50 disabled:opacity-50 transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-deep-navy mb-2">Số điện thoại *</label>
                    <input type="tel" required disabled={isSubmitting} className="w-full h-12 px-4 rounded-button border border-border-gray bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-bbs-blue/50 disabled:opacity-50 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-navy mb-2">Email công ty *</label>
                    <input type="email" required disabled={isSubmitting} className="w-full h-12 px-4 rounded-button border border-border-gray bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-bbs-blue/50 disabled:opacity-50 transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-navy mb-2">Dịch vụ quan tâm *</label>
                  <select required disabled={isSubmitting} className="w-full h-12 px-4 rounded-button border border-border-gray bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-bbs-blue/50 text-gray-700 disabled:opacity-50 transition-colors">
                    <option value="">Chọn dịch vụ</option>
                    <option value="tvc">Sản xuất TVC/Video Quảng Cáo</option>
                    <option value="event">Tổ chức Sự Kiện (Event)</option>
                    <option value="livestream">Dịch vụ Livestream</option>
                    <option value="ai">Video AI</option>
                    <option value="other">Tư vấn tổng thể</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-navy mb-2">Yêu cầu cụ thể (Không bắt buộc)</label>
                  <textarea disabled={isSubmitting} rows={4} className="w-full p-4 rounded-[16px] border border-border-gray bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-bbs-blue/50 disabled:opacity-50 transition-colors resize-none" />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-13 bg-bbs-red text-white rounded-button font-bold tracking-widest uppercase flex items-center justify-center transition-colors hover:bg-bbs-red/90 disabled:opacity-70 shadow-lg shadow-red-500/20 py-4"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Đang xử lý...
                      </>
                    ) : (
                      <>
                        Nhận tư vấn ngay
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
