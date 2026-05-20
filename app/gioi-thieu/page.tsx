"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Camera,
  CheckCircle2,
  Clapperboard,
  Cpu,
  Crown,
  Eye,
  Film,
  Headphones,
  MonitorUp,
  Radio,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Video,
} from "lucide-react";

const heroImage = "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779185868/HeroImage_gqbqle.jpg";
const cinematicImage = "https://res.cloudinary.com/dss1zawkj/image/upload/v1779247498/DAT01767_sgfji5.webp";
const crewImage = "https://res.cloudinary.com/dss1zawkj/image/upload/v1779247740/MHH03182_c9ecpw.webp";
const placeholderImage = "https://res.cloudinary.com/dss1zawkj/image/upload/v1779162613/BBS-Event_ng54cv.webp";
const logoPlaceholder = "https://res.cloudinary.com/dss1zawkj/image/upload/v1779170871/logo_sqohf8.jpg";

const coreValues = [
  {
    title: "Uy tín",
    icon: ShieldCheck,
    color: "blue",
    description:
      "Chúng tôi cam kết sự minh bạch và rõ ràng trong từng bước triển khai dự án. Mỗi sản phẩm media bàn giao đều là lời khẳng định về giá trị và uy tín mà BBS Media đã dày công xây dựng đối với từng khách hàng.",
  },
  {
    title: "Sáng tạo",
    icon: Sparkles,
    color: "red",
    description:
      "Đội ngũ BBS Media là những người trẻ, năng động và luôn tràn đầy tinh thần đổi mới. Chúng tôi không ngừng cập nhật thị hiếu thị trường và đầu tư vào công nghệ AI tiên tiến để tạo ra những sản phẩm hình ảnh, video độc đáo, sắc nét và hợp thời.",
  },
  {
    title: "Hiệu quả",
    icon: Target,
    color: "blue",
    description:
      "Chúng tôi luôn đặt khách hàng làm trung tâm, tập trung thấu hiểu nhu cầu thực tế để đưa ra những giải pháp tối ưu nhất. Tư duy làm việc thực tế giúp BBS Media tạo ra những giá trị hữu hình, giúp thương hiệu nổi bật và rút ngắn hành trình chinh phục khách hàng của bạn.",
  },
];

const missionItems = [
  {
    title: "Đối với khách hàng",
    description:
      "Không chỉ dừng lại ở việc cung cấp dịch vụ, sứ mệnh của chúng tôi là trở thành người đồng hành chiến lược. BBS Media cam kết rút ngắn hành trình chinh phục khách hàng của doanh nghiệp bằng những sản phẩm nội dung chỉnh chu, chuyên nghiệp và giàu cảm xúc.",
  },
  {
    title: "Đối với sản phẩm",
    description:
      "Mỗi thước phim, mỗi khung hình hay mỗi sự kiện đều là một lời khẳng định về sự đầu tư nghiêm túc. Chúng tôi sứ mệnh hóa việc đưa những giá trị thực tế và hiệu quả kinh doanh lên hàng đầu trong mọi quy trình triển khai.",
  },
  {
    title: "Đối với đội ngũ",
    description:
      "Xây dựng môi trường làm việc sáng tạo, nơi sự tận tâm và am hiểu khách hàng được đặt làm trung tâm, thúc đẩy sự phát triển không ngừng của từng cá nhân và tập thể.",
  },
];

const departments = [
  {
    title: "Ban Điều hành",
    icon: Crown,
    description: "Định hướng chiến lược, lên ý tưởng độc bản và kiểm soát chất lượng nghệ thuật.",
  },
  {
    title: "Phòng Sản xuất",
    icon: Clapperboard,
    description: "Chịu trách nhiệm thực thi tại hiện trường bao gồm quay phim, chụp ảnh và tổ chức sự kiện.",
  },
  {
    title: "Phòng Kỹ thuật & Hậu kỳ",
    icon: Cpu,
    description: "Xử lý hình ảnh, âm thanh bằng công nghệ cao và vận hành hệ thống thiết bị sân khấu.",
  },
];

const founders = [
  {
    name: "Hà Khánh",
    role: "CEO - Founder",
    image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779171072/Ha_Khanh_wuzset.webp",
    description:
      "Thuyền trưởng dẫn dắt cũng như chèo lái con thuyền của công ty BBS Media. Với 7 năm kinh nghiệm trong lĩnh vực truyền thông, luôn sẵn sàng hỗ trợ khách hàng những giá trị tốt nhất.",
  },
  {
    name: "Bùi Thiện Hoàng",
    role: "Co-Founder",
    image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779171073/Bui_Thien_Hoang_vbmzq6.webp",
    description:
      "Phó lãnh đạo công ty với sự nhiệt huyết, sức trẻ và kinh nghiệm về quản lý cũng như vận hành tổ chức sản xuất. Luôn là thành viên không thể thiếu trong những sự kiện quan trọng.",
  },
];

const equipmentItems = [
  { title: "Máy quay & máy ảnh", icon: Camera, image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779237609/MHH03100_p18xhr.webp" },
  { title: "Ống kính & gimbal", icon: Video, image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779237609/DAT01774_l8ysmy.webp" },
  { title: "Hệ thống ánh sáng", icon: Sparkles, image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779237608/DAT01966_zjbi6q.webp" },
  { title: "Thiết bị livestream", icon: MonitorUp, image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779238091/z7797166026274_3e163d42f175d9d9fd77931d6133f44a_mp1ewh.webp" },
  { title: "Âm thanh & sự kiện", icon: Headphones, image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779237609/z7797166013820_25697fedff92f3e89ab1d761eacc16a5_sf698x.webp" },
  { title: "Hậu trường & sản xuất", icon: Film, image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779237610/MHH02943_emw6ea.webp" },
];

const crewHighlights = [
  "Sáng tạo trong từng ý tưởng",
  "Tận tâm trong từng dự án",
  "Chuyên nghiệp trong từng khâu sản xuất",
];

const partnerLogos = [
  { name: "FPT", image: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163173/FPT_logo_2010.svg_pe1vtq.png" },
  { name: "Vietcombank", image: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163060/1200px-Vietcombank_logo.svg_wprsrm.png" },
  { name: "Vinfast", image: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163059/Vinfast-logo-new_NO_Tagline_-2D-Horizontal_black_bywtjw.png" },
  { name: "Hyundai", image: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163160/Hyundai_Motor_Company_logo.svg_dbl929.png" },
  { name: "Agribank", image: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163050/Logo-Agribank-V_hfus6k.webp" },
  { name: "Generali", image: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163060/14535363_Generali20Group_y4rbkp.jpg" },
  { name: "NEU", image: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163052/Logo-NEU_tam4ec.png" },
  { name: "ICHAM", image: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163174/ICHAM_logo_new_hz5qxq.png" },
];

const categories = ["Sự kiện", "Hậu trường", "Sản xuất", "Livestream", "Team", "Studio"];
const activityUrls = [
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1779240192/DAT01764_gellyl.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1779240191/DAT01965_vrba93.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1779240190/DAT03583_wkf6vz.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1779240189/DAT03649_fzwaxg.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1779240188/DAT03700_azh9hs.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1779240187/DAT04148_ofq9zf.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1779240187/DSC02319_o4p5kk.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1779240186/DAT01966_acpxl1.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1779240185/DAT01967_zb0reg.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1779240185/DAT02029_pqfqj0.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1779240184/DAT03881_baoxrx.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1779240183/DAT04202_jehsdu.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1779240182/DSC08589_rxofy0.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1779240182/DSC08637_d76kay.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1779240181/BAP_1435_zmeznn.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1779240180/DAT03657_zsrlew.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1779240180/DAT01775_fujxh7.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1779240180/DAT01845_nssmhl.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1779240179/DSC04587_gk33j8.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1779240179/DSC04436_t5ilv6.webp"
];

const facebookChannels = [
  {
    name: "BBS Media",
    label: "Page Chính",
    url: "https://www.facebook.com/BBSProduction.media",
    image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779170871/logo_sqohf8.jpg",
  },
  {
    name: "BBS Media Product",
    label: "Quay phim chụp ảnh sản phẩm, TVC, Quảng cáo",
    url: "https://www.facebook.com/QuayphimchupanhspBBSmedia",
    image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779170871/logo_sqohf8.jpg",
  },
  {
    name: "BBS Wedding",
    label: "Phóng Sự Cưới & Ăn hỏi",
    url: "https://www.facebook.com/BBSWedding/",
    image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779170871/logo_sqohf8.jpg",
  },
  {
    name: "BBS Event & Wedding",
    label: "Quay phim chụp ảnh sự kiện & cưới hỏi",
    url: "https://www.facebook.com/QuayChupSuKienCuoiHoiBBSMedia/",
    image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779170871/logo_sqohf8.jpg",
  },
  {
    name: "BBS Plus",
    label: "Page phụ đăng video",
    url: "https://www.facebook.com/BBSPlus136",
    image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779170871/logo_sqohf8.jpg",
  },
];

const youtubeChannels = [
  {
    name: "BBS Media YouTube",
    label: "Wedding & Event Channel",
    url: "https://www.youtube.com/@bbsmedia-weddingevent6738/featured",
    image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779170871/logo_sqohf8.jpg",
  },
];

const tiktokChannels = [
  {
    name: "BBS Event TikTok",
    label: "TikTok Channel",
    url: "https://www.tiktok.com/@bbs.event?_r=1&_t=ZS-96PWcTtX2eL",
    image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779170871/logo_sqohf8.jpg",
  },
];

const activityImages = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  title: `Hoạt động BBS Media ${index + 1}`,
  category: categories[index % categories.length],
  image: activityUrls[index] || placeholderImage,
}));

function SectionHeader({ eyebrow, title, description, light = false }: { eyebrow?: string; title: string; description?: string; light?: boolean }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      {eyebrow && <p className="text-bbs-blue text-sm font-bold tracking-[0.25em] uppercase mb-3">{eyebrow}</p>}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight ${light ? "text-white" : "text-deep-navy"}`}>{title}</h2>
      {description && <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? "text-gray-300" : "text-gray-600"}`}>{description}</p>}
    </div>
  );
}

export default function GioiThieuPage() {
  const fbScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (fbScrollRef.current) {
      const { scrollLeft, clientWidth } = fbScrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      fbScrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <main className="bg-white">
      <section className="relative min-h-[560px] flex items-center overflow-hidden">
        <Image src={heroImage} alt="BBS Media" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-deep-navy/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-28">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md mb-6">
              <span className="h-2 w-2 rounded-full bg-bbs-blue" />
              Về Chúng Tôi
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight [text-wrap:balance]">
              BBS Media - Đơn Vị Media & Event Chuyên Nghiệp
            </h1>
            <p className="mt-6 max-w-3xl text-base md:text-xl text-gray-200 leading-relaxed">
              BBS Media đồng hành cùng doanh nghiệp trong việc xây dựng hình ảnh thương hiệu thông qua tư vấn truyền thông, sản xuất nội dung hình ảnh và tổ chức sự kiện.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: HỆ SINH THÁI KÊNH TRUYỀN THÔNG */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-[#050b14] via-[#0d1527] to-[#180913] overflow-hidden">
        {/* Background Decorative Blur Circles */}
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-bbs-blue/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-bbs-red/10 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-bbs-blue/20 bg-bbs-blue/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-bbs-blue mb-4">
              Kênh truyền thông
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Hệ sinh thái kênh truyền thông BBS Media
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-300">
              Kết nối cùng BBS Media qua các nền tảng chính thức, nơi chúng tôi chia sẻ dự án, sản phẩm và các hoạt động truyền thông mới nhất.
            </p>
          </div>

          {/* Facebook Group */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h3 className="text-sm font-extrabold tracking-[0.25em] uppercase text-white/60 mb-3">
                FACEBOOK FANPAGE
              </h3>
              <div className="relative inline-flex items-center justify-center">
                <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-bbs-blue to-transparent" />
                <div className="h-1.5 w-1.5 rounded-full bg-bbs-blue mx-2" />
                <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-bbs-blue to-transparent" />
              </div>
            </div>

            {/* Slider Container */}
            <div className="relative group/scroll px-4 md:px-12">
              {/* Left Arrow */}
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 border border-white/10 text-white opacity-0 group-hover/scroll:opacity-100 transition-opacity duration-300 hover:bg-black/80 hover:scale-105 active:scale-95"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Scroll Area */}
              <div
                ref={fbScrollRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scroll-smooth scrollbar-none scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {facebookChannels.map((channel) => (
                  <a
                    key={channel.name}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col justify-end aspect-square w-64 md:w-72 rounded-2xl overflow-hidden bg-gray-950 border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-bbs-blue/20 hover:border-white/10 shrink-0 snap-start cursor-pointer"
                  >
                    <Image
                      src={channel.image}
                      alt={channel.name}
                      fill
                      className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-40"
                      sizes="(max-width: 768px) 256px, 288px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-blue-600" />

                    {/* Facebook Icon SVG */}
                    <div className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white transition-transform duration-500 group-hover:scale-110">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                      </svg>
                    </div>

                    <div className="relative z-10 p-5 md:p-6 transition-transform duration-500 group-hover:translate-y-[-4px]">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase mb-2 border bg-blue-500/10 border-blue-500/20 text-blue-400">
                        {channel.label}
                      </span>
                      <h4 className="text-lg md:text-xl font-bold text-white leading-tight tracking-tight">
                        {channel.name}
                      </h4>
                    </div>
                  </a>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 border border-white/10 text-white opacity-0 group-hover/scroll:opacity-100 transition-opacity duration-300 hover:bg-black/80 hover:scale-105 active:scale-95"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* YouTube & TikTok side-by-side or centering */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* YouTube Group */}
            <div className="flex flex-col items-center">
              <div className="text-center mb-10 w-full">
                <h3 className="text-sm font-extrabold tracking-[0.25em] uppercase text-white/60 mb-3">
                  YOUTUBE CHANNEL
                </h3>
                <div className="relative inline-flex items-center justify-center">
                  <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                  <div className="h-1.5 w-1.5 rounded-full bg-red-500 mx-2" />
                  <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                </div>
              </div>

              {youtubeChannels.map((channel) => (
                <a
                  key={channel.name}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-end aspect-square w-64 md:w-72 rounded-2xl overflow-hidden bg-gray-950 border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-bbs-red/20 hover:border-white/10 cursor-pointer"
                >
                  <Image
                    src={channel.image}
                    alt={channel.name}
                    fill
                    className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-40"
                    sizes="(max-width: 768px) 256px, 288px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-red-600" />

                  {/* YouTube Icon SVG */}
                  <div className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white transition-transform duration-500 group-hover:scale-110">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.483 20.455 12 20.455 12 20.455s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>

                  <div className="relative z-10 p-5 md:p-6 transition-transform duration-500 group-hover:translate-y-[-4px]">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase mb-2 border bg-red-500/10 border-red-500/20 text-red-400">
                      {channel.label}
                    </span>
                    <h4 className="text-lg md:text-xl font-bold text-white leading-tight tracking-tight">
                      {channel.name}
                    </h4>
                  </div>
                </a>
              ))}
            </div>

            {/* TikTok Group */}
            <div className="flex flex-col items-center">
              <div className="text-center mb-10 w-full">
                <h3 className="text-sm font-extrabold tracking-[0.25em] uppercase text-white/60 mb-3">
                  TIKTOK CHANNEL
                </h3>
                <div className="relative inline-flex items-center justify-center">
                  <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 mx-2" />
                  <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                </div>
              </div>

              {tiktokChannels.map((channel) => (
                <a
                  key={channel.name}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-end aspect-square w-64 md:w-72 rounded-2xl overflow-hidden bg-gray-950 border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-400/20 hover:border-white/10 cursor-pointer"
                >
                  <Image
                    src={channel.image}
                    alt={channel.name}
                    fill
                    className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-40"
                    sizes="(max-width: 768px) 256px, 288px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-cyan-500" />

                  {/* TikTok Icon SVG */}
                  <div className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white transition-transform duration-500 group-hover:scale-110">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.18 1.13 1.2 2.7 1.94 4.41 2.06v3.83c-1.87-.14-3.64-.97-4.88-2.4-.04 2.87-.02 5.73-.03 8.6-.07 2.04-.77 4.13-2.18 5.61-1.6 1.76-4.04 2.72-6.43 2.5-2.73-.13-5.28-1.84-6.42-4.32-1.34-2.73-.83-6.22 1.26-8.38 1.65-1.78 4.2-2.58 6.58-2.12v3.95c-1.18-.32-2.52-.07-3.47.74-.89.73-1.31 1.95-1.11 3.08.2 1.29 1.15 2.41 2.4 2.73 1.34.37 2.92-.23 3.65-1.42.34-.58.46-1.28.45-1.95V.02z" />
                    </svg>
                  </div>

                  <div className="relative z-10 p-5 md:p-6 transition-transform duration-500 group-hover:translate-y-[-4px]">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase mb-2 border bg-cyan-500/10 border-cyan-500/20 text-cyan-400">
                      {channel.label}
                    </span>
                    <h4 className="text-lg md:text-xl font-bold text-white leading-tight tracking-tight">
                      {channel.name}
                    </h4>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-bbs-blue text-sm font-bold tracking-[0.25em] uppercase mb-3">Giới thiệu</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-deep-navy mb-6">Giới thiệu BBS Media</h2>
              <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>BBS Media là một đơn vị hoạt động trong lĩnh vực tư vấn truyền thông và sản xuất nội dung hình ảnh, tổ chức sự kiện. Chúng tôi tập trung vào việc tạo ra các sản phẩm media chỉnh chu và chất lượng.</p>
                <p>Với định hướng rõ ràng, BBS Media không chỉ cung cấp dịch vụ mà còn đồng hành cùng khách hàng trong việc xây dựng hình ảnh thương hiệu. Mỗi dự án đều được triển khai với sự đầu tư nghiêm túc và quy trình làm việc chuyên nghiệp.</p>
                <p>Đội ngũ luôn đặt hiệu quả và giá trị thực tế lên hàng đầu. BBS Media hướng đến sự phát triển bền vững và lâu dài trong ngành truyền thông.</p>
              </div>
            </div>
            <div className="relative h-[360px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src={cinematicImage} alt="Giới thiệu BBS Media" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Giá trị cốt lõi" description="Ba giá trị định hướng cách BBS Media tư duy, sáng tạo và đồng hành cùng khách hàng." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((item) => {
              const Icon = item.icon;
              const isRed = item.color === "red";
              return (
                <article key={item.title} className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${isRed ? "bg-bbs-red shadow-bbs-red/20" : "bg-bbs-blue shadow-bbs-blue/20"}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-deep-navy mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-bbs-blue/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-bbs-red/10 blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="Tầm nhìn - Sứ mệnh" description="BBS Media phát triển với định hướng dài hạn, kết hợp công nghệ sản xuất hiện đại và tư duy nghệ thuật." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-bbs-blue/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-bbs-blue text-white mb-6"><Eye className="h-7 w-7" /></div>
              <h3 className="text-2xl font-bold text-deep-navy mb-4">Tầm nhìn</h3>
              <p className="text-gray-600 leading-relaxed">Trở thành đơn vị tiên phong và biểu tượng cho chất lượng trong ngành truyền thông đa phương tiện tại Việt Nam. BBS Media định hướng phát triển thành một hệ sinh thái sáng tạo toàn diện, nơi công nghệ sản xuất hiện đại và tư duy nghệ thuật giao thoa để tạo ra những giá trị bền vững, giúp mọi thương hiệu khẳng định vị thế và vươn tầm mạnh mẽ.</p>
            </div>
            <div className="rounded-3xl border border-bbs-red/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-bbs-red text-white mb-6"><Rocket className="h-7 w-7" /></div>
              <h3 className="text-2xl font-bold text-deep-navy mb-5">Sứ mệnh</h3>
              <div className="space-y-4">
                {missionItems.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-gray-50 p-4 border border-gray-100">
                    <h4 className="font-bold text-bbs-blue mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Năng lực nhân sự & tổ chức" description="BBS Media xây dựng đội ngũ theo hướng linh hoạt, chuyên môn hóa và thực chiến, đảm bảo mỗi dự án đều được triển khai với quy trình rõ ràng từ ý tưởng, sản xuất đến hậu kỳ và bàn giao." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {departments.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl bg-gray-50 border border-gray-100 p-7 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <Icon className="h-10 w-10 text-bbs-blue mb-5" />
                  <h3 className="text-xl font-bold text-deep-navy mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Đội ngũ điều hành" description="Những người định hướng chiến lược, văn hóa sáng tạo và chất lượng triển khai của BBS Media." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {founders.map((founder) => (
              <article key={founder.name} className="rounded-3xl bg-white border border-gray-100 p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative mx-auto mb-6 h-48 w-48 md:h-56 md:w-56 rounded-full border-4 border-white bg-gray-100 shadow-xl ring-1 ring-gray-100 overflow-hidden">
                  <Image src={founder.image} alt={founder.name} fill className="object-cover" sizes="224px" />
                </div>
                <div>
                  <p className="text-bbs-blue font-bold uppercase tracking-widest text-xs mb-2">{founder.role}</p>
                  <h3 className="text-2xl font-bold text-deep-navy mb-3">{founder.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{founder.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Trang thiết bị" description="BBS Media đầu tư hệ thống trang thiết bị phục vụ quay chụp, livestream, hậu kỳ và tổ chức sự kiện nhằm đảm bảo chất lượng sản phẩm ổn định trong từng dự án." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 33vw" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
              <Image src={crewImage} alt="Ê-kíp tác nghiệp" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div>
              <p className="text-bbs-blue text-sm font-bold tracking-[0.25em] uppercase mb-3">Ê-kíp</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-deep-navy mb-5">Ê-kíp tác nghiệp</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">Sự đam mê, sáng tạo và tận tâm của ê-kíp đã mang đến những sản phẩm chất lượng cao</p>
              <div className="space-y-3">
                {crewHighlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white border border-gray-100 p-4 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-bbs-red shrink-0" />
                    <span className="font-semibold text-deep-navy">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Đối tác và khách hàng" description="BBS MEDIA luôn là đối tác tin cậy của rất nhiều doanh nghiệp, đài truyền hình, cơ quan thông tấn, báo chí lớn trên cả nước." />
          <div className="flex flex-wrap justify-center gap-4">
            {partnerLogos.map((logo) => (
              <div key={logo.name} className="flex h-20 w-36 items-center justify-center rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:shadow-md">
                <Image src={logo.image || logoPlaceholder} alt={logo.name} width={112} height={48} className="max-h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-lg md:text-xl font-semibold italic text-deep-navy max-w-4xl mx-auto leading-relaxed">“Chúng tôi không chỉ cung cấp sản phẩm, dịch vụ mà còn đồng hành cùng Quý khách hàng”</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#101827]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader light title="Hình ảnh hoạt động" description="Không gian lưu trữ những khoảnh khắc trong quá trình sản xuất, vận hành sự kiện và đồng hành cùng khách hàng." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {activityImages.map((item, index) => (
              <article key={item.id} className={`group relative overflow-hidden rounded-2xl bg-gray-900 ${index % 5 === 0 ? "lg:row-span-2" : ""}`}>
                <div className={`relative ${index % 5 === 0 ? "h-96" : "h-56"}`}>
                  <Image src={item.image} alt={item.title} fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute left-4 right-4 bottom-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-bbs-blue text-xs font-bold uppercase tracking-widest mb-1">{item.category}</p>
                    <h3 className="text-white font-bold">{item.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-bbs-blue/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-bbs-red/10 blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl border border-gray-100 bg-white/90 p-8 md:p-12 text-center shadow-xl relative overflow-hidden backdrop-blur">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-bbs-blue/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-bbs-red/10 blur-3xl" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center rounded-full border border-bbs-blue/20 bg-bbs-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-bbs-blue mb-5">
                BBS Media
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-deep-navy mb-5">Sẵn sàng đồng hành cùng BBS Media?</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">Hãy để chúng tôi cùng bạn xây dựng hình ảnh thương hiệu chuyên nghiệp, sáng tạo và hiệu quả.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/lien-he" className="inline-flex items-center justify-center rounded-xl bg-bbs-red px-7 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-bbs-red/90 transition-colors">Liên hệ tư vấn</Link>
                <Link href="/danh-muc-du-an" className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-4 text-sm font-bold uppercase tracking-widest text-deep-navy hover:border-bbs-blue/30 hover:bg-bbs-blue/5 transition-colors">Xem dự án <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
