"use client";
import { useState } from "react";
import { Loader2, Send } from "lucide-react";

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
        <div className="max-w-4xl mx-auto bg-white rounded-[32px] p-8 md:p-16 shadow-2xl border border-border-gray/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-deep-navy mb-4">Sẵn sàng bứt phá doanh thu?</h2>
            <p className="text-lg text-gray-600">Để lại thông tin, đội ngũ chuyên gia của BBS Media sẽ liên hệ tư vấn chiến lược miễn phí cho bạn.</p>
          </div>

          {isSuccess ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-8 md:p-12 rounded-2xl text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Đăng ký thành công!</h3>
              <p className="text-lg text-green-800">Cảm ơn bạn đã quan tâm. Chúng tôi sẽ gọi lại theo số điện thoại đã đăng ký trong thời gian sớm nhất.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-deep-navy mb-2">Họ và tên *</label>
                  <input type="text" required disabled={isSubmitting} className="w-full h-14 px-4 rounded-button border border-border-gray bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-bbs-blue/50 disabled:opacity-50 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-deep-navy mb-2">Tên công ty</label>
                  <input type="text" disabled={isSubmitting} className="w-full h-14 px-4 rounded-button border border-border-gray bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-bbs-blue/50 disabled:opacity-50 transition-colors" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-deep-navy mb-2">Số điện thoại *</label>
                  <input type="tel" required disabled={isSubmitting} className="w-full h-14 px-4 rounded-button border border-border-gray bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-bbs-blue/50 disabled:opacity-50 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-deep-navy mb-2">Email công ty *</label>
                  <input type="email" required disabled={isSubmitting} className="w-full h-14 px-4 rounded-button border border-border-gray bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-bbs-blue/50 disabled:opacity-50 transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-deep-navy mb-2">Bạn đang quan tâm đến dịch vụ nào? *</label>
                <select required disabled={isSubmitting} className="w-full h-14 px-4 rounded-button border border-border-gray bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-bbs-blue/50 text-gray-700 disabled:opacity-50 transition-colors">
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
                <textarea disabled={isSubmitting} rows={4} className="w-full p-4 rounded-[16px] border border-border-gray bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-bbs-blue/50 disabled:opacity-50 transition-colors resize-none"></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto md:min-w-[240px] mx-auto h-14 bg-bbs-red text-white rounded-button font-medium flex items-center justify-center text-lg transition-colors hover:bg-bbs-red/90 disabled:opacity-70 shadow-lg shadow-red-500/30"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin mr-2" />
                      Đang xử lý...
                    </>
                  ) : (
                    <>
                      Nhận tư vấn ngay
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
