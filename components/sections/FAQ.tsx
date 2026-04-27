"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "Chi phí để sản xuất một TVC là bao nhiêu?",
    answer: "Chi phí phụ thuộc vào kịch bản, địa điểm quay, diễn viên và yêu cầu hậu kỳ. Tại BBS Media, chúng tôi có các gói linh hoạt từ cơ bản đến cao cấp, giúp tối ưu hóa ngân sách của bạn trong khi vẫn đảm bảo chất lượng."
  },
  {
    question: "Thời gian hoàn thành một video mất bao lâu?",
    answer: "Thông thường, quy trình từ lên ý tưởng đến bản Final kéo dài từ 7-14 ngày. Với các yêu cầu gấp, chúng tôi có đội ngũ sẵn sàng đẩy nhanh tiến độ xuống 3-5 ngày tuỳ mức độ phức tạp."
  },
  {
    question: "Tôi không có kịch bản sẵn, BBS Media có hỗ trợ không?",
    answer: "Có! BBS Media có đội ngũ Creative/Copywriter chuyên nghiệp. Chúng tôi sẽ hỗ trợ bạn 100% từ khâu lên ý tưởng, viết kịch bản phân cảnh chi tiết cho đến khi hoàn thiện sản phẩm."
  },
  {
    question: "Dịch vụ tổ chức Event bao gồm những gì?",
    answer: "Dịch vụ của chúng tôi mang tính toàn diện (turn-key): bao gồm lên concept, thiết kế không gian, cung cấp thiết bị âm thanh/ánh sáng, nhân sự (MC, ca sĩ, PG), điều phối chương trình và sản xuất media trong/sau sự kiện."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-32 bg-transparent border-t border-border-gray/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-navy mb-4">Câu hỏi thường gặp</h2>
          <p className="text-lg text-gray-600">Giải đáp các thắc mắc phổ biến nhất của khách hàng khi làm việc với BBS Media.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => {
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
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
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
