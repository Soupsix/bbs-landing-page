"use client";
import { MessageSquare, Lightbulb, Clapperboard, Sparkles, HandshakeIcon } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";

const CONTENT = {
  vi: {
    header: "Quy trình làm việc",
    subHeader: "Đơn giản, minh bạch và tập trung vào hiệu quả thực tế cho từng khách hàng.",
    steps: [
      {
        num: "01",
        title: "Tiếp nhận & Tư vấn",
        points: [
          "Lắng nghe chi tiết nhu cầu, mong muốn và mục tiêu cốt lõi của khách hàng.",
          "Nghiên cứu thị trường & đối tượng mục tiêu để đề xuất giải pháp tối ưu nhất.",
        ],
        icon: MessageSquare,
      },
      {
        num: "02",
        title: "Xây dựng ý tưởng & Kịch bản",
        points: [
          "Đội ngũ Creative lên ý tưởng độc bản, phác thảo concept riêng biệt cho từng thương hiệu.",
          "Xây dựng kịch bản chi tiết (script) hoặc bản kế hoạch tổ chức (proposal) để khách hàng phê duyệt.",
        ],
        icon: Lightbulb,
      },
      {
        num: "03",
        title: "Triển khai sản xuất",
        points: [
          "Huy động nhân sự chuyên môn cùng thiết bị hiện đại: Camera Cinema, Flycam, âm thanh/ánh sáng chuẩn.",
          "Trực tiếp thực thi quay phim, chụp ảnh hoặc dàn dựng sự kiện, giám sát kỹ thuật & mỹ thuật.",
        ],
        icon: Clapperboard,
      },
      {
        num: "04",
        title: "Hậu kỳ & Hoàn thiện",
        points: [
          "Dựng phim, chỉnh sửa hình ảnh trên trạm máy cấu hình cao — đảm bảo tiến độ nhanh chóng.",
          "Ứng dụng AI tạo hiệu ứng độc đáo; tinh chỉnh âm thanh, màu sắc đạt chuẩn quốc tế.",
        ],
        icon: Sparkles,
      },
      {
        num: "05",
        title: "Bàn giao & Đồng hành",
        points: [
          "Nghiệm thu và bàn giao sản phẩm hoàn thiện đúng tiến độ đã thỏa thuận.",
          "Tiếp tục hỗ trợ triển khai chiến dịch truyền thông sau dự án để tối đa hiệu quả chuyển đổi.",
        ],
        icon: HandshakeIcon,
      },
    ]
  },
  en: {
    header: "Workflow",
    subHeader: "Simple, transparent, and focused on practical effectiveness for each client.",
    steps: [
      {
        num: "01",
        title: "Reception & Consultation",
        points: [
          "Listen in detail to the core needs, desires, and goals of the client.",
          "Research the market & target audience to propose the most optimal solution.",
        ],
        icon: MessageSquare,
      },
      {
        num: "02",
        title: "Ideation & Scripting",
        points: [
          "The Creative team brainstorms unique ideas, sketching separate concepts for each brand.",
          "Develop detailed scripts or event proposals for client approval.",
        ],
        icon: Lightbulb,
      },
      {
        num: "03",
        title: "Production Execution",
        points: [
          "Mobilize professional personnel and modern equipment: Cinema Camera, Drone, standard audio/lighting.",
          "Directly execute filming, photography, or event staging, supervising technical & artistic aspects.",
        ],
        icon: Clapperboard,
      },
      {
        num: "04",
        title: "Post-Production & Finalization",
        points: [
          "Edit videos, refine images on high-configuration workstations — ensuring fast progress.",
          "Apply AI to create unique effects; refine sound and color to international standards.",
        ],
        icon: Sparkles,
      },
      {
        num: "05",
        title: "Handover & Companionship",
        points: [
          "Accept and handover the finished product exactly on the agreed schedule.",
          "Continue to support media campaign deployment post-project to maximize conversion effectiveness.",
        ],
        icon: HandshakeIcon,
      },
    ]
  }
};

export function Process() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];
  return (
    <section id="process" className="py-20 md:py-32 bg-transparent border-t border-border-gray/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-navy mb-4">{t.header}</h2>
          <p className="text-lg text-gray-600">{t.subHeader}</p>
        </div>

        {/* Steps grid — 5 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
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
