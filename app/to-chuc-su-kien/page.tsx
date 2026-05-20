"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PhoneCall, PartyPopper, Utensils, Users, Tent, Tv2, Cake, Megaphone, Volume2, Lightbulb, MonitorPlay, Layers, Frame, Armchair } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";

/* ── Section anchor nav ── */
const SECTION_NAV = [
  { id: "loai-hinh-su-kien", label: "Loại hình sự kiện" },
  { id: "thiet-bi-su-kien", label: "Thiết bị sự kiện" },
  { id: "thiet-ke-trang-tri", label: "Thiết kế & Trang trí" },
  { id: "quy-trinh-su-kien", label: "Quy trình tổ chức" },
];

/* ── Event Types ── */
const EVENT_TYPES = [
  {
    id: "khai-truong-khanh-thanh",
    title: "Khai Trương - Khánh Thành",
    desc: "Tổ chức lễ khai trương, khánh thành chuyên nghiệp, mang lại sự khởi đầu may mắn và thu hút sự chú ý mạnh mẽ từ khách hàng mục tiêu.",
    Icon: PartyPopper,
  },
  {
    id: "gala-dinner",
    title: "Gala Dinner / Chương trình biểu diễn",
    desc: "Tổ chức đêm tiệc tri ân, Gala Dinner đầy cảm xúc và gắn kết. Cung cấp kịch bản sáng tạo, nghệ sĩ biểu diễn và không gian tiệc sang trọng.",
    Icon: Utensils,
  },
  {
    id: "hoi-nghi-hoi-thao",
    title: "Hội Nghị - Hội Thảo - Hội Thao - Ký Kết",
    desc: "Cung cấp giải pháp tổ chức hội nghị, hội thảo và lễ ký kết trang trọng, chuyên nghiệp với hệ thống âm thanh, ánh sáng và phiên dịch đạt chuẩn quốc tế.",
    Icon: Users,
  },
  {
    id: "team-building",
    title: "Team Building / Hoạt động ngoài trời",
    desc: "Tổ chức hoạt động Team Building sáng tạo, các trò chơi gắn kết tập thể nhằm nâng cao tinh thần đồng đội và tái tạo năng lượng cho nhân viên.",
    Icon: Tent,
  },
  {
    id: "year-end-party",
    title: "Year End Party / Tổng kết",
    desc: "Tổ chức tiệc tất niên hoành tráng, đánh dấu một năm thành công và tạo động lực cho năm mới với các tiết mục đặc sắc và kịch bản bùng nổ.",
    Icon: Tv2,
  },
  {
    id: "sinh-nhat",
    title: "Sinh Nhật / Lễ Kỷ Niệm",
    desc: "Tổ chức sinh nhật cá nhân, sinh nhật công ty với concept trang trí độc đáo, không gian ấm cúng và kịch bản được cá nhân hóa hoàn toàn.",
    Icon: Cake,
  },
  {
    id: "activation",
    title: "Activation",
    desc: "Tổ chức các chiến dịch Brand Activation, chạy roadshow, booth tương tác nhằm tăng độ nhận diện thương hiệu và kích cầu tiêu dùng trực tiếp.",
    Icon: Megaphone,
  },
];

/* ── Equipment ── */
const EQUIPMENT = [
  {
    id: "am-thanh",
    title: "Âm thanh",
    desc: "Hệ thống âm thanh chuyên nghiệp, đảm bảo chất lượng âm thanh sắc nét, rõ ràng cho mọi quy mô sự kiện.",
    Icon: Volume2,
  },
  {
    id: "anh-sang",
    title: "Ánh sáng",
    desc: "Thiết kế và vận hành hệ thống ánh sáng hiện đại, tạo không gian ấn tượng và phù hợp với từng loại chương trình.",
    Icon: Lightbulb,
  },
  {
    id: "man-hinh-led",
    title: "Màn hình LED",
    desc: "Màn hình LED độ phân giải cao, hiển thị nội dung sinh động phục vụ trình chiếu, quảng bá và truyền thông sự kiện.",
    Icon: MonitorPlay,
  },
  {
    id: "san-khau",
    title: "Sân khấu",
    desc: "Thi công và lắp đặt sân khấu theo thiết kế, đảm bảo an toàn và thẩm mỹ cho toàn bộ không gian chương trình.",
    Icon: Layers,
  },
  {
    id: "backdrop",
    title: "Backdrop",
    desc: "Thiết kế và thi công backdrop sự kiện theo yêu cầu nhận diện thương hiệu, phù hợp với từng chủ đề chương trình.",
    Icon: Frame,
  },
  {
    id: "ban-ghe",
    title: "Bàn ghế & Hạng mục đi kèm",
    desc: "Cung cấp bàn ghế, bục, rạp và các hạng mục đi kèm chất lượng cao, đáp ứng đa dạng phong cách và quy mô sự kiện.",
    Icon: Armchair,
  },
];

/* ── Design & Decoration ── */
const DECORATIONS = [
  {
    id: "thiet-ke-san-khau-2d-3d",
    title: "Thiết kế sân khấu 2D/3D",
    desc: "Xây dựng bản thiết kế sân khấu 2D và 3D chuyên nghiệp, giúp khách hàng hình dung tổng thể không gian và phong cách sự kiện trước khi thi công.",
  },
  {
    id: "trang-tri-san-khau",
    title: "Trang trí sân khấu",
    desc: "Trang trí sân khấu theo concept đã duyệt, đảm bảo sự đồng bộ hình ảnh thương hiệu và tạo điểm nhấn thẩm mỹ ấn tượng cho sự kiện.",
  },
  {
    id: "trang-tri-su-kien",
    title: "Trang trí sự kiện",
    desc: "Trang trí toàn bộ không gian sự kiện từ sảnh đón khách, bàn tiệc đến backdrop và các điểm tương tác theo phong cách hiện đại và sáng tạo.",
  },
];

/* ── Process steps ── */
const PROCESS_STEPS = [
  {
    title: "KHẢO SÁT",
    desc: "Khảo sát địa điểm tổ chức, quy mô chương trình và yêu cầu của khách hàng.",
  },
  {
    title: "LÊN CONCEPT",
    desc: "Xây dựng ý tưởng, thiết kế sân khấu và lập kế hoạch vận hành chương trình.",
  },
  {
    title: "SETUP",
    desc: "Triển khai thi công sân khấu, âm thanh, ánh sáng và toàn bộ hạng mục sự kiện.",
  },
  {
    title: "VẬN HÀNH",
    desc: "Điều phối chương trình, vận hành kỹ thuật và kiểm soát sự kiện trong suốt quá trình diễn ra.",
  },
  {
    title: "THÁO DỠ",
    desc: "Thu dọn, tháo dỡ thiết bị và hoàn thiện bàn giao sau chương trình.",
  },
];

const PLACEHOLDER_IMG = "/casestudy/hanhtrinhbattu.webp";

export default function EventPage() {
  const { lang } = useLanguage();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white">

      {/* ═══════ HERO ═══════ */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src={PLACEHOLDER_IMG}
          alt="Tổ chức sự kiện BBS Media"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101827]/95 via-[#101827]/75 to-[#d81e25]/30" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 mt-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#d81e25]/20 text-white text-sm font-semibold mb-6 border border-white/20 backdrop-blur-sm uppercase tracking-wider">
            BBS Media
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-md uppercase">
            Tổ Chức Sự Kiện
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-4">
            BBS Media cung cấp giải pháp tổ chức sự kiện chuyên nghiệp dành cho doanh nghiệp và cá nhân với concept hiện đại, hệ thống thiết bị chuyên nghiệp và quy trình vận hành bài bản.
          </p>
          <p className="text-white/75 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Chúng tôi tập trung vào việc xây dựng trải nghiệm sự kiện ấn tượng thông qua hình ảnh chuyên nghiệp, sân khấu hiện đại và khả năng vận hành ổn định cho từng chương trình.
          </p>
        </div>
      </section>

      {/* ═══════ ANCHOR NAV ═══════ */}
      <nav className="sticky top-[80px] z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-3 no-scrollbar">
            {SECTION_NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className="flex-shrink-0 px-4 py-2 text-sm font-semibold text-[#101827] rounded-lg border border-gray-200 hover:bg-[#d81e25] hover:text-white hover:border-[#d81e25] transition-all duration-200 whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ═══════ SECTION 1: LOẠI HÌNH SỰ KIỆN ═══════ */}
      <section id="loai-hinh-su-kien" className="py-20 md:py-28 bg-white scroll-mt-[130px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#d81e25]/10 text-[#d81e25] border border-[#d81e25]/20 text-xs font-semibold uppercase tracking-widest mb-3">
              Dịch vụ
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#101827]">
              CÁC LOẠI HÌNH TỔ CHỨC SỰ KIỆN
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#d81e25] to-[#27abde] rounded-full mt-4 mb-6" />
            <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
              BBS Media tổ chức đa dạng các loại hình sự kiện từ quy mô nhỏ đến lớn, trong nhà và ngoài trời.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {EVENT_TYPES.map((event, idx) => {
              const isEven = idx % 2 === 0;
              const brandColor = isEven ? "#d81e25" : "#27abde";
              return (
                <div
                  key={event.id}
                  className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col p-6 pt-14 mt-6"
                >
                  {/* Icon badge */}
                  <div className="absolute top-0 left-6 -translate-y-1/2">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: brandColor }}
                    >
                      <event.Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#101827] mb-3 leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-5">
                    {event.desc}
                  </p>

                  {/* Gallery placeholder */}
                  <div className="grid grid-cols-3 gap-1.5 mb-5">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="relative h-16 rounded-lg overflow-hidden">
                        <Image src={PLACEHOLDER_IMG} alt={`${event.title} ${i + 1}`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/lien-he?service=to-chuc-su-kien"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-md"
                    style={{ backgroundColor: brandColor }}
                  >
                    Nhận tư vấn
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 2: THIẾT BỊ SỰ KIỆN ═══════ */}
      <section id="thiet-bi-su-kien" className="py-20 md:py-28 bg-gray-50 border-t border-gray-100 scroll-mt-[130px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#27abde]/10 text-[#27abde] border border-[#27abde]/20 text-xs font-semibold uppercase tracking-widest mb-3">
              Thiết bị
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#101827]">
              HỆ THỐNG THIẾT BỊ SỰ KIỆN
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#27abde] to-[#d81e25] rounded-full mt-4 mb-6" />
            <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
              BBS Media cung cấp hệ thống thiết bị sự kiện chuyên nghiệp phục vụ đa dạng chương trình với chất lượng vận hành ổn định và hiện đại.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EQUIPMENT.map((item, idx) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Image placeholder */}
                <div className="relative h-48 overflow-hidden">
                  <Image src={PLACEHOLDER_IMG} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[#101827]/30" />
                  <div
                    className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                    style={{ backgroundColor: idx % 2 === 0 ? "#27abde" : "#d81e25" }}
                  >
                    <item.Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#101827] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3: THIẾT KẾ & TRANG TRÍ ═══════ */}
      <section id="thiet-ke-trang-tri" className="py-20 md:py-28 bg-gradient-to-b from-white via-[#f8fafc] to-white border-t border-gray-100 scroll-mt-[130px] relative overflow-hidden">
        {/* Subtle glow blobs */}
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#27abde]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#d81e25]/5 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#27abde]/10 text-[#27abde] border border-[#27abde]/20 text-xs font-semibold uppercase tracking-widest mb-3">
              Thiết kế & Trang trí
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#101827]">
              THIẾT KẾ SÂN KHẤU / BỐI CẢNH
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold text-[#101827] mt-1">
              & TRANG TRÍ SỰ KIỆN
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#27abde] to-[#d81e25] rounded-full mt-4 mb-6" />
            <p className="text-gray-600 max-w-xl text-sm md:text-base leading-relaxed">
              BBS Media hỗ trợ thiết kế và thi công không gian sự kiện với phong cách hiện đại và đồng bộ hình ảnh thương hiệu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DECORATIONS.map((item, idx) => {
              const accentColor = idx === 1 ? "#d81e25" : "#27abde";
              return (
                <div
                  key={item.id}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-[#27abde]/30 transition-all duration-300"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image src={PLACEHOLDER_IMG} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-[#101827]/10" />
                    {/* Accent bar at top */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ backgroundColor: accentColor }}
                    />
                    {/* Number badge */}
                    <div
                      className="absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: accentColor }}
                    >
                      <span className="text-white text-xs font-bold">{String(idx + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-bold text-[#101827] mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4: QUY TRÌNH ═══════ */}
      <section id="quy-trinh-su-kien" className="py-20 md:py-28 bg-white border-t border-gray-100 scroll-mt-[130px] relative overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#27abde]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#d81e25]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-20 flex flex-col items-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#d81e25]/10 text-[#d81e25] border border-[#d81e25]/20 text-xs font-semibold uppercase tracking-widest mb-3">
              Quy trình
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#101827]">
              QUY TRÌNH TỔ CHỨC SỰ KIỆN
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#27abde] to-[#d81e25] rounded-full mt-4 mb-6" />
            <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
              5 bước chuẩn hóa đảm bảo sự kiện được triển khai hoàn hảo từ đầu đến cuối.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 items-stretch pt-8">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="relative h-full min-h-[220px] rounded-2xl border border-gray-100 bg-white px-6 pt-12 pb-6 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#27abde]/40 flex flex-col justify-start"
              >
                {/* Badge */}
                <div
                  className="absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full text-white font-bold shadow-lg"
                  style={{ backgroundColor: idx % 2 === 0 ? "#27abde" : "#d81e25" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-[#101827] leading-snug">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-16 md:py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Light floating card */}
          <div className="relative rounded-3xl bg-white border border-gray-100 shadow-xl overflow-hidden p-8 md:p-12 lg:p-14 text-center hover:shadow-2xl transition-shadow duration-300">
            {/* Decorative blobs inside card */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#27abde]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#d81e25]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full bg-[#d81e25]/10 text-[#d81e25] border border-[#d81e25]/20 text-xs font-semibold uppercase tracking-widest mb-6">
                Liên hệ
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#101827] mb-5 leading-tight">
                Bạn cần tổ chức một sự kiện chuyên nghiệp?
              </h2>
              <p className="text-gray-500 text-base md:text-lg mb-10 leading-relaxed">
                BBS Media sẵn sàng đồng hành từ concept, thiết kế, thiết bị đến vận hành trọn gói.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/lien-he?service=to-chuc-su-kien"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#d81e25] hover:bg-[#b91920] text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-[#d81e25]/25"
                >
                  Nhận tư vấn sự kiện
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:0981234567"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#101827] font-bold px-8 py-4 rounded-xl transition-colors border border-gray-200 shadow-sm hover:border-[#d81e25]/30 hover:text-[#d81e25]"
                >
                  <PhoneCall className="w-5 h-5" />
                  Gọi Tư Vấn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
