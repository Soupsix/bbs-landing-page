"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";

export function Hero() {
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
    <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-16 lg:pb-32 bg-[url('/HeroImage.jpg')] bg-cover bg-center">
      {/* Overlay mờ để dễ đọc chữ */}
      <div className="absolute inset-0 bg-white/80 md:bg-white/70"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-semibold leading-tight tracking-tight text-deep-navy mb-6">
              Giải pháp truyền thông & sự kiện giúp doanh nghiệp <span className="text-bbs-blue">tăng trưởng nhanh</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Từ TVC, Video AI đến Livestream & Event — BBS Media giúp bạn triển khai nhanh, tối ưu chi phí và tạo ra kết quả đo lường rõ ràng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#contact" 
                className="inline-flex h-14 items-center justify-center rounded-button bg-bbs-red px-8 text-base font-medium text-white transition-colors hover:bg-bbs-red/90 w-full sm:w-auto"
              >
                Nhận tư vấn miễn phí
              </Link>
              <Link 
                href="#cases" 
                className="inline-flex h-14 items-center justify-center rounded-button border border-border-gray bg-white px-8 text-base font-medium text-deep-navy transition-colors hover:bg-gray-50 hover:border-gray-300 w-full sm:w-auto"
              >
                Xem case study
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Form Mini */}
          <div className="w-full max-w-md mx-auto lg:ml-auto">
            <div className="bg-white rounded-card p-8 shadow-xl border border-border-gray/50">
              <div className="mb-6 text-center">
                <h3 className="text-2xl font-semibold text-deep-navy mb-2">Để lại thông tin</h3>
                <p className="text-gray-500 text-sm">Chúng tôi sẽ liên hệ lại trong vòng 30 phút</p>
              </div>

              {isSuccess ? (
                <div className="bg-green-50 text-green-700 p-6 rounded-lg text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Gửi thành công!</h4>
                  <p className="text-sm">Chuyên viên của chúng tôi sẽ gọi lại cho bạn sớm nhất.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input type="text" placeholder="Họ và tên *" required disabled={isSubmitting} className="w-full h-12 px-4 rounded-button border border-border-gray bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-bbs-blue/50 disabled:opacity-50" />
                  </div>
                  <div>
                    <input type="tel" placeholder="Số điện thoại *" required disabled={isSubmitting} className="w-full h-12 px-4 rounded-button border border-border-gray bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-bbs-blue/50 disabled:opacity-50" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email công ty" disabled={isSubmitting} className="w-full h-12 px-4 rounded-button border border-border-gray bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-bbs-blue/50 disabled:opacity-50" />
                  </div>
                  <div>
                    <select required disabled={isSubmitting} className="w-full h-12 px-4 rounded-button border border-border-gray bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-bbs-blue/50 text-gray-600 disabled:opacity-50">
                      <option value="">Nhu cầu của bạn *</option>
                      <option value="tvc">Sản xuất TVC/Video</option>
                      <option value="event">Tổ chức Event</option>
                      <option value="livestream">Livestream</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-12 bg-bbs-red text-white rounded-button font-medium flex items-center justify-center transition-colors hover:bg-bbs-red/90 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Đang xử lý...
                      </>
                    ) : (
                      "Nhận báo giá ngay"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-bbs-blue/5 to-transparent pointer-events-none hidden lg:block" />
    </section>
  );
}
