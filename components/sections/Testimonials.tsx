"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";

const CONTENT = {
  vi: {
    header: "Khách hàng nói gì về chúng tôi?",
    subHeader: "Những chia sẻ thực tế từ các thương hiệu đã đồng hành cùng BBS Media.",
    testimonials: [
      {
        quote:
          "Dịch vụ chuyên nghiệp, hình ảnh đẹp, đội ngũ hỗ trợ nhiệt tình. BBS Media đã giúp chúng tôi truyền tải đúng thông điệp thương hiệu một cách ấn tượng nhất.",
        name: "Nguyễn Minh Khoa",
        title: "Marketing Director",
        company: "Highlands Coffee",
        initials: "NK",
      },
      {
        quote:
          "Tốc độ thực hiện nhanh, ý tưởng sáng tạo và luôn đúng deadline. Chúng tôi đã tin tưởng BBS Media cho toàn bộ chiến dịch ra mắt sản phẩm năm nay.",
        name: "Trần Thị Lan",
        title: "Brand Manager",
        company: "Vingroup",
        initials: "TL",
      },
      {
        quote:
          "Ekip rất am hiểu về sự kiện và media. Không chỉ sản xuất nội dung đẹp mà còn tư vấn chiến lược rất bài bản, giúp thương hiệu của chúng tôi nổi bật hẳn.",
        name: "Lê Hoàng Phúc",
        title: "CEO",
        company: "Local Brand VN",
        initials: "LP",
      },
      {
        quote:
          "Từ concept đến final product đều vượt kỳ vọng. BBS Media là đối tác truyền thông đáng tin cậy mà chúng tôi sẽ tiếp tục gắn bó dài hạn.",
        name: "Phạm Thu Hà",
        title: "Communications Manager",
        company: "Masan Group",
        initials: "PH",
      },
    ],
  },
  en: {
    header: "What Our Clients Say",
    subHeader: "Real feedback from brands who have partnered with BBS Media.",
    testimonials: [
      {
        quote:
          "Professional service, beautiful visuals, and a very enthusiastic support team. BBS Media helped us convey our brand message in the most impressive way.",
        name: "Nguyen Minh Khoa",
        title: "Marketing Director",
        company: "Highlands Coffee",
        initials: "NK",
      },
      {
        quote:
          "Fast execution, creative ideas, and always on deadline. We trusted BBS Media for our entire product launch campaign this year.",
        name: "Tran Thi Lan",
        title: "Brand Manager",
        company: "Vingroup",
        initials: "TL",
      },
      {
        quote:
          "The team truly understands events and media. They don't just create beautiful content — they also provide strategic advice that helps our brand stand out.",
        name: "Le Hoang Phuc",
        title: "CEO",
        company: "Local Brand VN",
        initials: "LP",
      },
      {
        quote:
          "From concept to final product, everything exceeded expectations. BBS Media is a trusted media partner we will continue to work with long-term.",
        name: "Pham Thu Ha",
        title: "Communications Manager",
        company: "Masan Group",
        initials: "PH",
      },
    ],
  },
};

const avatarColors = ["#27abde", "#d81e25", "#f97316", "#7c3aed"];

export function Testimonials() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];
  const [current, setCurrent] = useState(0);
  const total = t.testimonials.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const visible = [
    t.testimonials[(current + total - 1) % total],
    t.testimonials[current],
    t.testimonials[(current + 1) % total],
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle decorative blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-bbs-blue/5 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-bbs-red/5 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-bbs-blue text-sm font-semibold tracking-widest uppercase mb-3">
            Feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
            {t.header}
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            {t.subHeader}
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {visible.map((item, idx) => {
              const isCenter = idx === 1;
              return (
                <div
                  key={`${current}-${idx}`}
                  className={`relative rounded-card p-6 md:p-8 transition-all duration-500 ${
                    isCenter
                      ? "bg-deep-navy shadow-2xl scale-[1.02] z-10"
                      : "bg-white border border-border-gray shadow-md opacity-60 scale-95"
                  }`}
                >
                  {/* Quote icon */}
                  <Quote
                    className={`w-8 h-8 mb-4 ${isCenter ? "text-bbs-blue" : "text-gray-300"}`}
                    fill="currentColor"
                  />

                  {/* Quote text */}
                  <p
                    className={`text-sm md:text-base leading-relaxed mb-6 ${
                      isCenter ? "text-gray-200" : "text-gray-600"
                    }`}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ backgroundColor: avatarColors[idx % 2 === 0 ? 0 : 1] }}
                    >
                      {item.initials}
                    </div>
                    <div>
                      <p
                        className={`font-semibold text-sm ${
                          isCenter ? "text-white" : "text-deep-navy"
                        }`}
                      >
                        {item.name}
                      </p>
                      <p
                        className={`text-xs ${
                          isCenter ? "text-bbs-blue" : "text-gray-400"
                        }`}
                      >
                        {item.title} · {item.company}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-11 h-11 rounded-full border border-border-gray bg-white flex items-center justify-center hover:border-bbs-blue hover:text-bbs-blue transition-colors duration-200 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {t.testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-bbs-blue"
                      : "w-2 bg-border-gray hover:bg-bbs-blue/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="w-11 h-11 rounded-full border border-border-gray bg-white flex items-center justify-center hover:border-bbs-blue hover:text-bbs-blue transition-colors duration-200 shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
