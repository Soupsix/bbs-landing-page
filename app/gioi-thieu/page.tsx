"use client";

import Image from "next/image";
import {
  Eye,
  Target,
  Users,
  Cpu,
  Lightbulb,
  Film,
  Headphones,
  Zap,
  Camera,
  Wind,
  Speaker,
} from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";

/* ──────────────────── i18n Content ──────────────────── */

const CONTENT = {
  vi: {
    /* ── Section 1: About ── */
    aboutBadge: "Về chúng tôi",
    aboutTitle: "BBS MEDIA",
    aboutDesc:
      "BBS Media là đơn vị chuyên cung cấp giải pháp sản xuất hình ảnh, tổ chức sự kiện và phát triển nội dung sáng tạo dành cho doanh nghiệp. Với đội ngũ trẻ, nhiệt huyết cùng hệ thống thiết bị hiện đại, chúng tôi cam kết mang đến những sản phẩm chỉn chu, chuyên nghiệp và hiệu quả cho mỗi dự án.",

    /* ── Section 2: Vision & Mission ── */
    vmTitle: "Tầm nhìn & Sứ mệnh",
    visionLabel: "Vision",
    visionTitle: "Tầm nhìn",
    visionDesc:
      "Trở thành đơn vị Media & Event sáng tạo và chuyên nghiệp hàng đầu.",
    missionLabel: "Mission",
    missionTitle: "Sứ mệnh",
    missionDesc:
      "Mang đến giải pháp hình ảnh và truyền thông hiệu quả cho thương hiệu.",

    /* ── Section 3: Why Choose Us ── */
    whyTitle: "Tại sao chọn BBS Media?",
    whySubtitle:
      "Những yếu tố tạo nên sự khác biệt trong mỗi dự án chúng tôi triển khai.",
    whyItems: [
      {
        icon: Users,
        title: "Đội ngũ trẻ sáng tạo",
        desc: "Đội ngũ năng động, luôn cập nhật xu hướng mới nhất trong ngành truyền thông và sự kiện.",
      },
      {
        icon: Cpu,
        title: "Thiết bị hiện đại",
        desc: "Hệ thống camera cinema 4K, flycam, trạm dựng AI và âm thanh ánh sáng chuyên nghiệp.",
      },
      {
        icon: Lightbulb,
        title: "Tư duy Social Media",
        desc: "Nội dung được thiết kế tối ưu cho các nền tảng số, tăng tương tác và chuyển đổi.",
      },
      {
        icon: Film,
        title: "Hình ảnh Cinematic",
        desc: "Mỗi thước phim đều đạt chuẩn điện ảnh — sắc nét, giàu cảm xúc và chuyên nghiệp.",
      },
      {
        icon: Headphones,
        title: "Hỗ trợ nhanh chóng",
        desc: "Phản hồi tức thì, đồng hành xuyên suốt dự án từ khâu tư vấn đến bàn giao sản phẩm.",
      },
    ],

    /* ── Section 4: Our Team ── */
    teamTitle: "Đội ngũ lãnh đạo",
    teamSubtitle:
      "Những con người tâm huyết đứng sau mỗi dự án truyền thông và sự kiện của BBS Media.",
    members: [
      {
        name: "Hà Khánh",
        role: "CEO - Founder",
        description:
          "Thuyền trưởng dẫn dắt cũng như chèo lái con thuyền của công ty BBS Media. Với 7 năm kinh nghiệm trong lĩnh vực truyền thông. Sẵn sàng hỗ trợ khách hàng những giá trị tốt nhất.",
        avatar: "/teammember/hakhanh.webp",
      },
      {
        name: "Bùi Thiện Hoàng",
        role: "Co - Founder",
        description:
          "Phó lãnh đạo công ty với sự nhiệt huyết, sức trẻ. Giàu kinh nghiệm về quản lý cũng như vận hành tổ chức sản xuất. Luôn là thành viên không thể thiếu trong những sự kiện quan trọng.",
        avatar: "/teammember/thienhoang.webp",
      },
      {
        name: "BBS Media",
        role: "Creative Team",
        description:
          "Tập hợp những người trẻ năng động, sáng tạo và nhiệt huyết, luôn sẵn sàng cống hiến để mang lại những sản phẩm truyền thông và sự kiện chất lượng, đột phá nhất.",
        avatar: "/teammember/logo.jpg",
      },
    ],

    /* ── Section 5: Equipment ── */
    equipTitle: "Năng lực kỹ thuật & Thiết bị",
    equipSubtitle:
      "BBS Media làm chủ toàn bộ công nghệ sản xuất — từ ghi hình đến hậu kỳ và vận hành sự kiện.",
    equipment: [
      {
        icon: Camera,
        title: "Camera Cinema 4K",
        description:
          "Hệ thống máy quay Cinema chuyên nghiệp, cho ra những thước phim sắc nét chuẩn điện ảnh — phục vụ TVC, phim doanh nghiệp và nội dung thương hiệu cao cấp.",
        tags: ["4K", "Cinema Grade", "RAW Output"],
      },
      {
        icon: Wind,
        title: "Flycam thế hệ mới",
        description:
          "Flycam chuyên dụng với camera gimbal ổn định cho góc quay trên không ấn tượng — lý tưởng cho sự kiện ngoài trời, quay aerial và phóng sự doanh nghiệp.",
        tags: ["Góc quay aerial", "Gimbal chống rung", "Phép bay chuyên nghiệp"],
      },
      {
        icon: Cpu,
        title: "Trạm dựng phim AI Hậu kỳ",
        description:
          "Trạm máy cấu hình cao xử lý mượt mà video 4K, tích hợp AI tạo hiệu ứng thị giác độc đáo, tinh chỉnh màu sắc và âm thanh đạt chuẩn quốc tế.",
        tags: ["AI Color Grading", "4K Editing", "Chuẩn quốc tế"],
      },
      {
        icon: Speaker,
        title: "Âm thanh – Ánh sáng – LED",
        description:
          "Hệ thống âm thanh công suất lớn, dàn ánh sáng stage chuyên nghiệp và màn hình LED độ phân giải cao — đáp ứng mọi quy mô sự kiện từ hội nghị đến Gala.",
        tags: ["Line Array", "Stage Lighting", "Màn hình LED P2/P3"],
      },
    ],
  },

  en: {
    aboutBadge: "About Us",
    aboutTitle: "About BBS Media",
    aboutDesc:
      "BBS Media is a company specializing in visual production solutions, event organization, and creative content development for businesses. With a young, passionate team and modern equipment, we are committed to delivering meticulous, professional, and effective products for every project.",

    vmTitle: "Vision & Mission",
    visionLabel: "Vision",
    visionTitle: "Vision",
    visionDesc:
      "To become the leading creative and professional Media & Event agency.",
    missionLabel: "Mission",
    missionTitle: "Mission",
    missionDesc:
      "To deliver effective visual and communication solutions for brands.",

    whyTitle: "Why Choose BBS Media?",
    whySubtitle:
      "The factors that make a difference in every project we execute.",
    whyItems: [
      {
        icon: Users,
        title: "Young Creative Team",
        desc: "A dynamic team, always updated with the latest trends in media and events.",
      },
      {
        icon: Cpu,
        title: "Modern Equipment",
        desc: "4K cinema camera system, drones, AI editing stations, and professional audio-lighting.",
      },
      {
        icon: Lightbulb,
        title: "Social Media Mindset",
        desc: "Content designed and optimized for digital platforms, increasing engagement and conversion.",
      },
      {
        icon: Film,
        title: "Cinematic Visuals",
        desc: "Every frame meets cinematic standards — sharp, emotionally rich, and professional.",
      },
      {
        icon: Headphones,
        title: "Quick Support",
        desc: "Instant response, accompanying throughout the project from consultation to delivery.",
      },
    ],

    teamTitle: "Leadership Team",
    teamSubtitle:
      "The dedicated individuals behind every media and event project at BBS Media.",
    members: [
      {
        name: "Hà Khánh",
        role: "CEO - Founder",
        description:
          "The captain leading and steering the BBS Media ship. With 7 years of experience in the media industry. Always ready to support clients with the best values.",
        avatar: "/teammember/hakhanh.webp",
      },
      {
        name: "Bùi Thiện Hoàng",
        role: "Co - Founder",
        description:
          "Deputy leader with enthusiasm and youthful energy. Rich experience in management and production operation. An indispensable member in important events.",
        avatar: "/teammember/thienhoang.webp",
      },
      {
        name: "BBS Media",
        role: "Creative Team",
        description:
          "A gathering of dynamic, creative, and enthusiastic young people, always ready to dedicate themselves to bringing the highest quality and breakthrough media and event products.",
        avatar: "/teammember/logo.jpg",
      },
    ],

    equipTitle: "Technical Capacity & Equipment",
    equipSubtitle:
      "BBS Media masters the entire production technology — from filming to post-production and event operation.",
    equipment: [
      {
        icon: Camera,
        title: "4K Cinema Camera",
        description:
          "Professional Cinema camera system producing sharp, cinematic footage — serving TVCs, corporate films, and premium brand content.",
        tags: ["4K", "Cinema Grade", "RAW Output"],
      },
      {
        icon: Wind,
        title: "Next-gen Drone",
        description:
          "Specialized drones with stable gimbal cameras for impressive aerial shots — ideal for outdoor events, aerial filming, and corporate reportage.",
        tags: ["Aerial shots", "Anti-shake Gimbal", "Professional flying permits"],
      },
      {
        icon: Cpu,
        title: "AI Post-Production Editing Station",
        description:
          "High-configuration workstation smoothly processing 4K videos, integrating AI to create unique visual effects, and refining colors and sound to international standards.",
        tags: ["AI Color Grading", "4K Editing", "International standards"],
      },
      {
        icon: Speaker,
        title: "Audio – Lighting – LED",
        description:
          "High-power audio system, professional stage lighting, and high-resolution LED screens — catering to all event scales from conferences to Galas.",
        tags: ["Line Array", "Stage Lighting", "P2/P3 LED Screen"],
      },
    ],
  },
};

/* ──────────────────── Page Component ──────────────────── */

export default function GioiThieuPage() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <>
      {/* ═══════ SECTION 1: ABOUT BBS MEDIA ═══════ */}
      <section className="relative pt-14 pb-12 md:pt-20 md:pb-14 overflow-hidden">
        {/* Gradient nền nhẹ */}
        <div className="absolute inset-0 bg-gradient-to-b from-bbs-blue/[0.04] via-white to-white pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-bbs-blue/10 text-bbs-blue text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-bbs-blue" />
              {t.aboutBadge}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-navy mb-6 tracking-tight">
              {t.aboutTitle}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t.aboutDesc}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 2: VISION & MISSION ═══════ */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Gradient nền chuyển tiếp nhẹ nhàng */}
        <div className="absolute inset-0 bg-gradient-to-br from-bbs-blue/[0.06] via-white to-bbs-red/[0.04] pointer-events-none" />
        {/* Decorative shapes */}
        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-bbs-blue/[0.06] blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-bbs-red/[0.06] blur-2xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy text-center mb-10 tracking-tight">
            {t.vmTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Vision Card */}
            <div className="relative bg-white rounded-[24px] p-8 md:p-9 border border-bbs-blue/15 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group">
              {/* Top accent bar */}
              <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-bbs-blue via-bbs-blue/60 to-transparent rounded-b-full" />

              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-bbs-blue/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-bbs-blue" />
                </div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-bbs-blue">
                  {t.visionLabel}
                </span>
              </div>

              <h3 className="text-xl font-bold text-deep-navy mb-3">
                {t.visionTitle}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.visionDesc}
              </p>
            </div>

            {/* Mission Card */}
            <div className="relative bg-white rounded-[24px] p-8 md:p-9 border border-bbs-red/15 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group">
              {/* Top accent bar */}
              <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-bbs-red via-bbs-red/60 to-transparent rounded-b-full" />

              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-bbs-red/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-bbs-red" />
                </div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-bbs-red">
                  {t.missionLabel}
                </span>
              </div>

              <h3 className="text-xl font-bold text-deep-navy mb-3">
                {t.missionTitle}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.missionDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3: WHY CHOOSE US — Orbital Layout ═══════ */}
      <section className="py-12 md:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-deep-navy mb-3">
              {t.whyTitle}
            </h2>
            <p className="text-lg text-gray-600">{t.whySubtitle}</p>
          </div>

          {/* ── Desktop: Orbital ring ── */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative" style={{ width: 680, height: 680 }}>
              {/* Orbit ring (decorative) */}
              <div className="absolute inset-8 rounded-full border-2 border-dashed border-bbs-blue/15" />
              <div className="absolute inset-20 rounded-full border border-border-gray/40" />

              {/* Center logo */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-white shadow-xl border border-border-gray flex items-center justify-center z-10">
                <Image
                  src="/logo/logo.png"
                  alt="BBS Media"
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>

              {/* Cards positioned in a circle */}
              {t.whyItems.map((item, i) => {
                const Icon = item.icon;
                const colors = [
                  { bg: "bg-bbs-blue/10", text: "text-bbs-blue", border: "border-bbs-blue/20" },
                  { bg: "bg-bbs-red/10", text: "text-bbs-red", border: "border-bbs-red/20" },
                  { bg: "bg-amber-50", text: "text-amber-500", border: "border-amber-200" },
                  { bg: "bg-bbs-blue/10", text: "text-bbs-blue", border: "border-bbs-blue/20" },
                  { bg: "bg-bbs-red/10", text: "text-bbs-red", border: "border-bbs-red/20" },
                ];
                const c = colors[i];

                // Position each card evenly around the circle
                const angle = (i * 360) / 5 - 90; // Start from top
                const radius = 270; // Distance from center
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;

                return (
                  <div
                    key={i}
                    className={`absolute w-[180px] bg-white rounded-2xl p-5 border ${c.border} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 z-20`}
                    style={{
                      left: `calc(50% + ${x}px - 90px)`,
                      top: `calc(50% + ${y}px - 70px)`,
                    }}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${c.bg} flex items-center justify-center mb-3`}
                    >
                      <Icon className={`w-5 h-5 ${c.text}`} />
                    </div>
                    <h3 className="text-sm font-bold text-deep-navy mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}

              {/* Connecting lines from center to each card */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 680 680"
              >
                {t.whyItems.map((_, i) => {
                  const angle = (i * 360) / 5 - 90;
                  const rad = (angle * Math.PI) / 180;
                  const endX = 340 + Math.cos(rad) * 200;
                  const endY = 340 + Math.sin(rad) * 200;
                  return (
                    <line
                      key={i}
                      x1="340"
                      y1="340"
                      x2={endX}
                      y2={endY}
                      stroke="#27abde"
                      strokeWidth="1"
                      strokeOpacity="0.15"
                      strokeDasharray="4 4"
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* ── Mobile/Tablet: Standard cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto lg:hidden">
            {t.whyItems.map((item, i) => {
              const Icon = item.icon;
              const colors = [
                { bg: "bg-bbs-blue/10", text: "text-bbs-blue" },
                { bg: "bg-bbs-red/10", text: "text-bbs-red" },
                { bg: "bg-amber-50", text: "text-amber-500" },
                { bg: "bg-bbs-blue/10", text: "text-bbs-blue" },
                { bg: "bg-bbs-red/10", text: "text-bbs-red" },
              ];
              const c = colors[i];

              return (
                <div
                  key={i}
                  className="bg-white rounded-[20px] p-6 border border-border-gray hover:border-bbs-blue/40 hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  <div
                    className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-5 h-5 ${c.text}`} />
                  </div>
                  <h3 className="text-base font-bold text-deep-navy mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4: OUR TEAM ═══════ */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Subtle background tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-bbs-blue/[0.03] to-white pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-bbs-blue mb-3">
              {t.teamTitle}
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {t.teamSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.members.map((member, index) => (
              <div
                key={index}
                className="rounded-[16px] overflow-hidden shadow-md border border-border-gray hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
              >
                <div className="h-28 bg-gradient-to-r from-bbs-blue to-bbs-blue/80" />

                <div className="relative px-6 pb-7 pt-0 text-center bg-white">
                  <div className="relative mx-auto -mt-14 w-28 h-28 rounded-full border-4 border-white overflow-hidden shadow-md">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-3">
                    <h3 className="text-lg font-bold text-bbs-blue">
                      {member.name}
                    </h3>
                    <p className="text-bbs-blue/70 italic text-sm mt-0.5 mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5: EQUIPMENT ═══════ */}
      <section className="relative py-12 md:py-16 overflow-hidden mb-15">
        {/* Gradient chuyển tiếp nhẹ ở cuối trang */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-bbs-red/[0.02] to-bbs-blue/[0.04] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-deep-navy mb-3">
              {t.equipTitle}
            </h2>
            <p className="text-lg text-gray-600">{t.equipSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.equipment.map((eq, i) => {
              const Icon = eq.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-[20px] p-6 border border-border-gray hover:border-bbs-blue/40 hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="w-11 h-11 rounded-xl bg-bbs-blue/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-bbs-blue" />
                  </div>

                  <h3 className="text-base font-bold text-deep-navy mb-2 leading-snug">
                    {eq.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                    {eq.description}
                  </p>

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
    </>
  );
}
