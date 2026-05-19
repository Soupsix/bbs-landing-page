"use client";
import { Lightbulb, Sparkles, Clapperboard, PackageCheck } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";

const CONTENT = {
  vi: {
    header: "Quy trình làm việc",
    subHeader: "Đơn giản, minh bạch và tập trung vào hiệu quả thực tế cho từng khách hàng.",
    steps: [
      {
        num: "01",
        title: "IDEA",
        points: [
          "Lắng nghe nhu cầu & mục tiêu của khách hàng.",
          "Nghiên cứu thị trường, đề xuất ý tưởng độc đáo phù hợp thương hiệu.",
        ],
        icon: Lightbulb,
      },
      {
        num: "02",
        title: "CREATIVE",
        points: [
          "Đội ngũ Creative xây dựng concept, kịch bản và mood board chi tiết.",
          "Lên kế hoạch sản xuất & phê duyệt nội dung cùng khách hàng.",
        ],
        icon: Sparkles,
      },
      {
        num: "03",
        title: "PRODUCTION",
        points: [
          "Triển khai quay phim, chụp ảnh hoặc tổ chức sự kiện với thiết bị Cinema, Flycam hiện đại.",
          "Hậu kỳ chuyên nghiệp: dựng phim, chỉnh màu, AI effect chuẩn quốc tế.",
        ],
        icon: Clapperboard,
      },
      {
        num: "04",
        title: "DELIVERY",
        points: [
          "Bàn giao sản phẩm hoàn thiện đúng tiến độ đã cam kết.",
          "Hỗ trợ triển khai chiến dịch sau dự án, đồng hành lâu dài cùng thương hiệu.",
        ],
        icon: PackageCheck,
      },
    ]
  },
  en: {
    header: "Workflow",
    subHeader: "Simple, transparent, and focused on practical effectiveness for each client.",
    steps: [
      {
        num: "01",
        title: "IDEA",
        points: [
          "Listen to client needs & core objectives.",
          "Research the market and propose unique ideas tailored to each brand.",
        ],
        icon: Lightbulb,
      },
      {
        num: "02",
        title: "CREATIVE",
        points: [
          "Creative team builds concept, script, and detailed mood board.",
          "Plan production & approve content together with the client.",
        ],
        icon: Sparkles,
      },
      {
        num: "03",
        title: "PRODUCTION",
        points: [
          "Execute filming, photography or event setup with Cinema & Drone equipment.",
          "Professional post-production: editing, color grading, AI effects to international standards.",
        ],
        icon: Clapperboard,
      },
      {
        num: "04",
        title: "DELIVERY",
        points: [
          "Handover the finished product on the agreed schedule.",
          "Support post-project campaign deployment, partnering with the brand long-term.",
        ],
        icon: PackageCheck,
      },
    ]
  }
};

export function Process() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];
  return (
    <section id="process" className="py-16 md:py-24 bg-transparent border-t border-border-gray/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-navy mb-4">{t.header}</h2>
          <p className="text-lg text-gray-600">{t.subHeader}</p>
        </div>

        {/* Steps grid — 4 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-border-gray" />

          {t.steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative z-10 flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-zinc-50 shadow-sm mb-5 relative shrink-0">
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-bbs-blue text-white rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
                    {step.num}
                  </div>
                  <Icon className="w-8 h-8 text-bbs-red" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-deep-navy mb-3 leading-snug">{step.title}</h3>

                {/* Bullet points */}
                <ul className="text-left space-y-2 text-sm text-gray-500 leading-relaxed w-full px-2">
                  {step.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-bbs-blue shrink-0" />
                      {pt}
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
