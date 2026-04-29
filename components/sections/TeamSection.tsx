"use client";
import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";

const CONTENT = {
  vi: {
    header: "Đội ngũ lãnh đạo",
    subHeader: "Những con người tâm huyết đứng sau mỗi dự án truyền thông và sự kiện của BBS Media.",
    members: [
      {
        name: "Hà Khánh",
        role: "CEO - Founder",
        description: "Thuyền trưởng dẫn dắt cũng như chèo lái con thuyền của công ty BBS Media. Với 7 năm kinh nghiệm trong lĩnh vực truyền thông. Sẵn sàng hỗ trợ khách hàng những giá trị tốt nhất.",
        avatar: "/teammember/hakhanh.webp",
      },
      {
        name: "Bùi Thiện Hoàng",
        role: "Co - Founder",
        description: "Phó lãnh đạo công ty với sự nhiệt huyết, sức trẻ. Giàu kinh nghiệm về quản lý cũng như vận hành tổ chức sản xuất. Luôn là thành viên không thể thiếu trong những sự kiện quan trọng.",
        avatar: "/teammember/thienhoang.webp",
      },
      {
        name: "BBS Media",
        role: "Creative Team",
        description: "Tập hợp những người trẻ năng động, sáng tạo và nhiệt huyết, luôn sẵn sàng cống hiến để mang lại những sản phẩm truyền thông và sự kiện chất lượng, đột phá nhất.",
        avatar: "/teammember/logo.jpg",
      },
    ]
  },
  en: {
    header: "Leadership Team",
    subHeader: "The dedicated individuals behind every media and event project at BBS Media.",
    members: [
      {
        name: "Hà Khánh",
        role: "CEO - Founder",
        description: "The captain leading and steering the BBS Media ship. With 7 years of experience in the media industry. Always ready to support clients with the best values.",
        avatar: "/teammember/hakhanh.webp",
      },
      {
        name: "Bùi Thiện Hoàng",
        role: "Co - Founder",
        description: "Deputy leader with enthusiasm and youthful energy. Rich experience in management and production operation. An indispensable member in important events.",
        avatar: "/teammember/thienhoang.webp",
      },
      {
        name: "BBS Media",
        role: "Creative Team",
        description: "A gathering of dynamic, creative, and enthusiastic young people, always ready to dedicate themselves to bringing the highest quality and breakthrough media and event products.",
        avatar: "/teammember/logo.jpg",
      },
    ]
  }
};

export function TeamSection() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <section id="team" className="py-20 md:py-32 bg-transparent border-t border-border-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-bbs-blue mb-4">
            {t.header}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t.subHeader}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.members.map((member, index) => (
            <div
              key={index}
              className="rounded-[16px] overflow-hidden shadow-lg border border-border-gray hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
            >
              {/* Card Header — blue background */}
              <div className="h-32 bg-bbs-blue" />

              {/* Card Body */}
              <div className="relative px-6 pb-8 pt-0 text-center bg-white">
                {/* Avatar overlapping header */}
                <div className="relative mx-auto -mt-16 w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-md">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>

                {/* Text content */}
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-bbs-blue">{member.name}</h3>
                  <p className="text-bbs-blue/70 italic text-sm mt-1 mb-4">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
