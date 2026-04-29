"use client";
import { Camera, Wind, Cpu, Speaker } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";

const CONTENT = {
  vi: {
    header: "Năng lực kỹ thuật & Thiết bị",
    subHeader: "BBS Media làm chủ toàn bộ công nghệ sản xuất — từ ghi hình đến hậu kỳ và vận hành sự kiện.",
    equipment: [
      {
        icon: Camera,
        title: "Camera Cinema 4K/8K",
        description: "Hệ thống máy quay Cinema chuyên nghiệp, cho ra những thước phim sắc nét chuẩn điện ảnh — phục vụ TVC, phim doanh nghiệp và nội dung thương hiệu cao cấp.",
        tags: ["4K / 8K", "Cinema Grade", "RAW Output"],
      },
      {
        icon: Wind,
        title: "Flycam thế hệ mới",
        description: "Flycam chuyên dụng với camera gimbal ổn định cho góc quay trên không ấn tượng — lý tưởng cho sự kiện ngoài trời, quay aerial và phóng sự doanh nghiệp.",
        tags: ["Góc quay aerial", "Gimbal chống rung", "Phép bay chuyên nghiệp"],
      },
      {
        icon: Cpu,
        title: "Trạm dựng phim AI Hậu kỳ",
        description: "Trạm máy cấu hình cao xử lý mượt mà video 4K/8K, tích hợp AI tạo hiệu ứng thị giác độc đáo, tinh chỉnh màu sắc và âm thanh đạt chuẩn quốc tế.",
        tags: ["AI Color Grading", "4K/8K Editing", "Chuẩn quốc tế"],
      },
      {
        icon: Speaker,
        title: "Âm thanh – Ánh sáng – LED",
        description: "Hệ thống âm thanh công suất lớn, dàn ánh sáng stage chuyên nghiệp và màn hình LED độ phân giải cao — đáp ứng mọi quy mô sự kiện từ hội nghị đến Gala.",
        tags: ["Line Array", "Stage Lighting", "Màn hình LED P2/P3"],
      },
    ]
  },
  en: {
    header: "Technical Capacity & Equipment",
    subHeader: "BBS Media masters the entire production technology — from filming to post-production and event operation.",
    equipment: [
      {
        icon: Camera,
        title: "4K/8K Cinema Camera",
        description: "Professional Cinema camera system producing sharp, cinematic footage — serving TVCs, corporate films, and premium brand content.",
        tags: ["4K / 8K", "Cinema Grade", "RAW Output"],
      },
      {
        icon: Wind,
        title: "Next-gen Drone",
        description: "Specialized drones with stable gimbal cameras for impressive aerial shots — ideal for outdoor events, aerial filming, and corporate reportage.",
        tags: ["Aerial shots", "Anti-shake Gimbal", "Professional flying permits"],
      },
      {
        icon: Cpu,
        title: "AI Post-Production Editing Station",
        description: "High-configuration workstation smoothly processing 4K/8K videos, integrating AI to create unique visual effects, and refining colors and sound to international standards.",
        tags: ["AI Color Grading", "4K/8K Editing", "International standards"],
      },
      {
        icon: Speaker,
        title: "Audio – Lighting – LED",
        description: "High-power audio system, professional stage lighting, and high-resolution LED screens — catering to all event scales from conferences to Galas.",
        tags: ["Line Array", "Stage Lighting", "P2/P3 LED Screen"],
      },
    ]
  }
};

export function TechCapabilities() {
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

        {/* Equipment grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.equipment.map((eq, i) => {
            const Icon = eq.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-[20px] p-6 border border-border-gray hover:border-bbs-blue/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-deep-navy flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-bbs-blue" />
                </div>

                {/* Title + Description */}
                <h3 className="text-base font-bold text-deep-navy mb-2 leading-snug">{eq.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">{eq.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {eq.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
