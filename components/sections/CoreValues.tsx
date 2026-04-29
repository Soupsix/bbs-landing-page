"use client";
import { ShieldCheck, Lightbulb, TrendingUp } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";

const CONTENT = {
  vi: {
    header: "Tại sao chọn BBS Media?",
    subHeader: "3 giá trị cốt lõi định hình mọi sản phẩm và dịch vụ chúng tôi mang đến cho khách hàng.",
    values: [
      {
        icon: ShieldCheck,
        color: "bg-bbs-blue/10 text-bbs-blue",
        accent: "border-bbs-blue/30",
        title: "Uy tín",
        subtitle: "Cam kết minh bạch",
        description: "Chúng tôi đặt sự tin tưởng của khách hàng lên hàng đầu. Mọi cam kết về tiến độ, chất lượng và ngân sách đều được thực thi minh bạch — không phát sinh ẩn, không bất ngờ.",
        highlights: ["Hợp đồng rõ ràng", "Báo cáo tiến độ định kỳ", "Bảo hành sản phẩm"],
      },
      {
        icon: Lightbulb,
        color: "bg-amber-50 text-amber-500",
        accent: "border-amber-200",
        title: "Sáng tạo",
        subtitle: "Ứng dụng AI & cập nhật thị hiếu",
        description: "Đội ngũ Creative liên tục cập nhật xu hướng và ứng dụng trí tuệ nhân tạo để tạo ra những sản phẩm hình ảnh độc bản, đứng vững trước sự thay đổi nhanh chóng của thị trường.",
        highlights: ["AI-assisted Production", "Concept độc bản cho từng thương hiệu", "Cập nhật xu hướng liên tục"],
      },
      {
        icon: TrendingUp,
        color: "bg-bbs-red/10 text-bbs-red",
        accent: "border-bbs-red/30",
        title: "Hiệu quả",
        subtitle: "Tạo giá trị hữu hình",
        description: "Mọi sản phẩm media và sự kiện đều hướng đến kết quả đo lường được — rút ngắn hành trình chinh phục khách hàng, tăng chuyển đổi và xây dựng giá trị thương hiệu bền vững.",
        highlights: ["Kết quả đo lường rõ ràng", "Tối ưu hóa chi phí đầu tư", "Hỗ trợ triển khai sau dự án"],
      },
    ]
  },
  en: {
    header: "Why choose BBS Media?",
    subHeader: "3 core values shape every product and service we deliver to our clients.",
    values: [
      {
        icon: ShieldCheck,
        color: "bg-bbs-blue/10 text-bbs-blue",
        accent: "border-bbs-blue/30",
        title: "Prestige",
        subtitle: "Commitment to transparency",
        description: "We put customer trust first. Every commitment regarding schedule, quality, and budget is executed transparently — no hidden costs, no surprises.",
        highlights: ["Clear contracts", "Regular progress reports", "Product warranty"],
      },
      {
        icon: Lightbulb,
        color: "bg-amber-50 text-amber-500",
        accent: "border-amber-200",
        title: "Creativity",
        subtitle: "AI Application & Trend Updates",
        description: "Our Creative team continuously updates trends and applies artificial intelligence to create unique visual products, standing firm amidst rapid market changes.",
        highlights: ["AI-assisted Production", "Unique concept for each brand", "Continuous trend updates"],
      },
      {
        icon: TrendingUp,
        color: "bg-bbs-red/10 text-bbs-red",
        accent: "border-bbs-red/30",
        title: "Efficiency",
        subtitle: "Creating tangible value",
        description: "Every media product and event aims for measurable results — shortening the customer acquisition journey, increasing conversions, and building sustainable brand value.",
        highlights: ["Clear measurable results", "Investment cost optimization", "Post-project implementation support"],
      },
    ]
  }
};

export function CoreValues() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <section className="py-20 md:py-32 bg-transparent border-t border-border-gray/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-navy mb-4">
            {t.header}
          </h2>
          <p className="text-lg text-gray-600">
            {t.subHeader}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className={`relative bg-white rounded-[24px] p-8 border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col ${v.accent}`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${v.color}`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Heading */}
                <h3 className="text-2xl font-bold text-deep-navy mb-1">{v.title}</h3>
                <p className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">{v.subtitle}</p>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed mb-6 flex-grow">{v.description}</p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {v.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${v.color.includes("bbs-blue") ? "bg-bbs-blue" : v.color.includes("amber") ? "bg-amber-400" : "bg-bbs-red"}`} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
