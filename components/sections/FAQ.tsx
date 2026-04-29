"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";

const CONTENT = {
  vi: {
    header: "Câu hỏi thường gặp",
    subHeader: "Giải đáp các thắc mắc phổ biến nhất của khách hàng khi làm việc với BBS Media.",
    faqs: [
      {
        question: "BBS Media có ứng dụng công nghệ AI để tối ưu chi phí sản xuất cho khách hàng không?",
        answer: "Có. BBS Media là đơn vị tiên phong ứng dụng Trí tuệ nhân tạo (AI) trong sản xuất nội dung hình ảnh, video và khâu xử lý hậu kỳ. Công nghệ này không chỉ tạo ra các hiệu ứng thị giác độc đáo, sáng tạo độc bản mà còn giúp rút ngắn thời gian xử lý, từ đó tối ưu hóa đáng kể chi phí đầu tư cho các đối tác so với phương pháp truyền thống.",
      },
      {
        question: "Nếu doanh nghiệp tôi chưa có kịch bản hoặc ý tưởng truyền thông sẵn, BBS Media có hỗ trợ không?",
        answer: "Hoàn toàn có. Theo quy trình làm việc 5 bước, đội ngũ Creative của BBS Media sẽ đóng vai trò tư vấn chiến lược. Chúng tôi sẽ lắng nghe mục tiêu của bạn, nghiên cứu thị trường để phác thảo ý tưởng concept độc quyền và xây dựng kịch bản (script) chi tiết để bạn phê duyệt trước khi bước vào giai đoạn thực thi sản xuất.",
      },
      {
        question: "Dịch vụ tổ chức sự kiện trọn gói của BBS Media bao gồm những gì?",
        answer: "Sự kiện của BBS Media là sự kết hợp nhịp nhàng giữa ý tưởng sáng tạo và kỹ thuật vận hành. Dịch vụ trọn gói bao gồm: thiết kế concept, lên kịch bản, và cung cấp toàn bộ giải pháp kỹ thuật tiêu chuẩn (Âm thanh, Ánh sáng công suất lớn, Màn hình LED sắc nét). Ngoài ra, chúng tôi sở hữu hệ thống máy quay chuyên nghiệp để hỗ trợ Livestream đa nền tảng và làm media hậu kỳ cho dự án.",
      },
      {
        question: "Thời gian hoàn thiện và bàn giao sản phẩm có được đảm bảo theo đúng tiến độ không?",
        answer: "BBS Media luôn cam kết nghiệm thu và bàn giao sản phẩm đúng thời hạn đã thỏa thuận. Chúng tôi sở hữu hệ thống trạm dựng phim cấu hình cao chuyên xử lý mượt mà video chất lượng 4K/8K, giúp tiến độ khâu hậu kỳ diễn ra nhanh chóng mà vẫn đảm bảo tiêu chuẩn khắt khe nhất về màu sắc và âm thanh chuẩn quốc tế.",
      },
    ]
  },
  en: {
    header: "Frequently Asked Questions",
    subHeader: "Answering the most common questions from clients when working with BBS Media.",
    faqs: [
      {
        question: "Does BBS Media use AI technology to optimize production costs for clients?",
        answer: "Yes. BBS Media is a pioneer in applying Artificial Intelligence (AI) in producing visual content, videos, and post-production. This technology not only creates unique visual effects and exclusive creativity but also helps shorten processing time, thereby significantly optimizing investment costs for partners compared to traditional methods.",
      },
      {
        question: "If my business doesn't have a ready script or media idea, does BBS Media provide support?",
        answer: "Absolutely. According to our 5-step workflow, BBS Media's Creative team will play the role of a strategic consultant. We will listen to your goals, research the market to sketch out exclusive concept ideas, and build detailed scripts for your approval before entering the production execution phase.",
      },
      {
        question: "What does BBS Media's comprehensive event organization service include?",
        answer: "BBS Media's events are a harmonious combination of creative ideas and operational techniques. The comprehensive service includes: concept design, scriptwriting, and providing standard technical solutions (High-power Audio, Lighting, Sharp LED Screens). Additionally, we own a professional camera system to support multi-platform Livestreaming and perform post-production media for the project.",
      },
      {
        question: "Is the product completion and handover time guaranteed on schedule?",
        answer: "BBS Media always commits to accepting and handing over products exactly on the agreed schedule. We own a high-configuration editing station system specialized in smoothly processing 4K/8K quality videos, helping the post-production stage proceed quickly while still ensuring the strictest standards of international standard color and sound.",
      },
    ]
  }
};

export function FAQ() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-32 bg-transparent border-t border-border-gray/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-navy mb-4">{t.header}</h2>
          <p className="text-lg text-gray-600">{t.subHeader}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {t.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border border-border-gray rounded-card overflow-hidden transition-colors ${isOpen ? 'bg-white shadow-sm border-bbs-blue/30' : 'bg-transparent'}`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`font-semibold pr-4 ${isOpen ? 'text-bbs-blue' : 'text-deep-navy'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-bbs-blue' : ''}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 leading-relaxed pt-2 border-t border-border-gray/50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
