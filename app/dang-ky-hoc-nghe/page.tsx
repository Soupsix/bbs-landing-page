"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  PhoneCall,
  ChevronDown,
  GraduationCap,
  Users,
  Award,
  Briefcase,
  CheckCircle2,
  Calendar,
  Clock,
  Video,
  Bot,
  Star,
  Heart,
  Sparkles,
  TrendingUp,
  Zap,
  BookOpen,
  Camera,
  Wrench
} from "lucide-react";
import { getOptimizedCloudinaryUrl, CLOUDINARY_WIDTHS } from "@/lib/cloudinary";

/* ── Images for sections ── */
const HERO_IMG = "https://res.cloudinary.com/dss1zawkj/image/upload/v1787728775/HeroDangKyNghe_tgztuv.webp";

const ACADEMY_IMAGES = [
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1787728777/giangvienhuongdan_q0v5wl.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1787728778/Khonggianhoctap_t9bvqm.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1787728778/thietbihoctap_ekzlt7.webp",
];

const BENEFITS_IMAGES = [
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1787728776/Hoc_Vien_Thuc_Hanh_1_yz6nv3.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1787728776/Hoc_Vien_Thuc_Hanh_2_ypw6yk.webp",
];

const ROADMAP_IMAGE = "https://res.cloudinary.com/dss1zawkj/image/upload/v1787876150/Thiet_bi_1_1_dzfaqy.jpg";

const SOCIAL_PROOF_IMAGES = [
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1787728776/Hoc_Vien_BBS_Academy_1_qd35ou.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1787728776/Hoc_Vien_BBS_Academy_2_ankc7j.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1787728777/Hoc_Vien_BBS_Academy_3_svu84c.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1787728777/Hoc_Vien_BBS_Academy_4_tdgo0v.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1787728777/Hoc_Vien_BBS_Academy_5_ubx9si.webp",
  "https://res.cloudinary.com/dss1zawkj/image/upload/v1787728777/Hoc_Vien_BBS_Academy_6_srcldu.webp",
];

/* ── Section anchor nav ── */
const SECTION_NAV = [
  { id: "doi-tuong-tuyen-sinh", label: "Đối tượng tuyển sinh" },
  { id: "cac-khoa-hoc", label: "Các khóa học" },
  { id: "giang-vien", label: "Giảng viên" },
  { id: "quyen-loi", label: "Quyền lợi" },
  { id: "lo-trinh", label: "Lộ trình" },
  { id: "faq", label: "FAQ" },
  { id: "dang-ky", label: "Đăng ký" },
];

/* ── Section IDs for scroll ── */
const SECTION_IDS = [
  "doi-tuong-tuyen-sinh",
  "cac-khoa-hoc",
  "giang-vien",
  "quyen-loi",
  "lo-trinh",
  "faq",
  "dang-ky",
];

/* ── Target audience data ── */
const TARGET_AUDIENCE = [
  {
    icon: UserAdd,
    title: "Người chưa có nghề",
    desc: "Yêu thích quay phim - dựng phim, chưa có kiến thức hoặc kinh nghiệm (bắt đầu từ \"tờ giấy trắng\").",
  },
  {
    icon: GraduationCap,
    title: "Học sinh, sinh viên",
    desc: "Từ 16 tuổi trở lên, có nhu cầu học nghề để làm thêm hoặc định hướng nghề nghiệp lâu dài.",
  },
  {
    icon: Briefcase,
    title: "Người đi làm",
    desc: "Muốn học thêm một nghề tay trái để tăng thu nhập hoặc tận dụng thời gian rảnh.",
  },
  {
    icon: Camera,
    title: "Người có thiết bị",
    desc: "Đã có máy ảnh, máy quay hoặc đang có kế hoạch đầu tư thiết bị để theo nghề.",
  },
  {
    icon: Sparkles,
    title: "Người yêu thích sáng tạo",
    desc: "Thích môi trường năng động, thường xuyên tham gia các hoạt động, sự kiện.",
  },
];

function UserAdd(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <line x1="19" x2="19" y1="8" y2="14"/>
      <line x1="22" x2="16" y1="11" y2="11"/>
    </svg>
  );
}

/* ── Courses data ── */
const COURSES = [
  {
    id: "co-ban",
    title: "Khoá quay & Dựng Cơ Bản",
    badge: "Lớp cơ bản",
    badgeColor: "#27abde",
    duration: "03 tháng",
    sessions: "24 buổi",
    schedule: "02 buổi/tuần",
    timePerSession: "03 - 04 giờ/buổi",
    maxStudents: "07 học viên/lớp",
    instructors: "01 Giảng viên chính + 01-02 Trợ giảng",
    format: "Học theo giáo trình chuẩn BBS Academy, kết hợp lý thuyết, thực hành tại lớp và tham gia các buổi thực chiến",
    equipment: "Trung tâm cung cấp đầy đủ thiết bị phục vụ quá trình học và thực hành",
    suitable: "Người đi làm · Học sinh, sinh viên · Người có lịch cố định",
    icon: Video,
    features: [
      "Nền tảng quay phim từ A-Z",
      "Kỹ thuật dựng phim cơ bản",
      "Thực hành trên thiết bị chuyên nghiệp",
      "Tham gia buổi thực chiến",
    ],
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1787729611/0_Quay_va_dung_co_ban_pv39fl.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1787729611/Quay_va_dung_co_ban_1_pg1gxb.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1787729610/Quay_va_dung_co_ban_3_w8vw4s.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1787729610/Quay_va_dung_co_ban_2_fezq9p.webp",
    ],
  },
  {
    id: "cap-toc",
    title: "Khoá quay & Dựng Cấp Tốc",
    badge: "Kèm 1:1",
    badgeColor: "#d81e25",
    duration: "02 tháng",
    sessions: "24 buổi",
    schedule: "03 buổi/tuần",
    timePerSession: "04 - 05 giờ/buổi",
    maxStudents: "01 học viên/lớp",
    instructors: "01 Giảng viên chính kèm trực tiếp 1:1",
    format: "Đào tạo 1 giảng viên - 1 học viên. Nội dung được điều chỉnh theo trình độ, mục tiêu và định hướng nghề nghiệp của từng học viên",
    equipment: "Trung tâm cung cấp đầy đủ thiết bị trong suốt quá trình học",
    suitable: "Người cần học nhanh · Chuyển nghề trong thời gian ngắn · Content Creator, Freelancer",
    icon: Zap,
    features: [
      "Học 1-1 với giảng viên",
      "Lộ trình cá nhân hóa",
      "Tăng cường thực hành thực tế",
      "Tham gia dự án BBS Media",
    ],
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1787729652/0_Quay_va_dung_cap_toc_gjnnnm.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1787729651/Quay_Dung_Cap_Toc_1_uhhw1u.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1787729651/Quay_Dung_Cap_Toc_2_prf23v.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1787729651/Quay_Dung_Cap_Toc_3_stnnxf.webp",
    ],
  },
  {
    id: "nang-cao",
    title: "Khoá quay & Dựng Nâng Cao",
    badge: "Kèm 1:1",
    badgeColor: "#d81e25",
    duration: "Theo lộ trình",
    sessions: "Theo lộ trình",
    schedule: "Linh hoạt",
    timePerSession: "04 - 05 giờ/buổi",
    maxStudents: "01 học viên/lớp",
    instructors: "01 Giảng viên chính kèm trực tiếp 1:1",
    format: "Giáo trình riêng và dự án thực tế. Đào sâu chuyển động máy, color grading, kể chuyện bằng hình ảnh theo phong cách cinematic.",
    equipment: "Thực hành trên thiết bị chuyên nghiệp của BBS Media",
    suitable: "Đã có nền tảng quay dựng · Muốn nâng cao kỹ năng chuyên sâu",
    icon: TrendingUp,
    features: [
      "Quay chuyên nghiệp nâng cao",
      "Color grading chuyên sâu",
      "Kỹ thuật máy nâng cao",
      "Trải nghiệm nghề trực tiếp",
    ],
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1787728774/0_Quay_va_dung_nang_cao_jdzebw.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1787728774/Quay_Dung_Nang_Cao_1_w2fcfz.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1787728775/Quay_Dung_Nang_Cao_2_y86syz.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1787728775/Quay_Dung_Nang_Cao_3_mu85ej.webp",
    ],
  },
  {
    id: "ai",
    title: "Sáng Tạo Nội Dung AI",
    badge: "Online",
    badgeColor: "#27abde",
    duration: "Theo lộ trình",
    sessions: "Theo lộ trình",
    schedule: "Linh hoạt",
    timePerSession: "Theo thỏa thuận",
    maxStudents: "01 học viên/lớp",
    instructors: "01 Giảng viên chuyên AI",
    format: "Học Online, teamview hỗ trợ trực tuyến. Ứng dụng công cụ AI vào quy trình sản xuất.",
    equipment: "Cần có máy tính và internet",
    suitable: "Muốn tối ưu quy trình sản xuất · Thử sức với AI",
    icon: Bot,
    features: [
      "Viết kịch bản bằng AI",
      "Tạo hình ảnh/video AI",
      "Làm phim ngắn hoàn chỉnh từ AI",
      "Tối ưu workflow sản xuất",
    ],
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1787728776/0_Sang_Tao_Noi_Dung_AI_jgqadw.webp",
    ],
  },
];

/* ── Instructors data ── */
const INSTRUCTORS = [
  {
    name: "Vũ Hải",
    role: "Giảng viên trực tiếp của BBS Media",
    experience: "Hơn 8 năm kinh nghiệm trong nghề",
    quote: "Học đi đôi với hành, thực chiến từ ngày đầu",
    image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1787728778/Giang-Vien-Vu-Hai_bl44im.webp",
  },
  {
    name: "Hà Khánh",
    role: "Giám đốc trung tâm BBS Media kiêm CEO công ty BBS Media",
    experience: "10 năm kinh nghiệm trong lĩnh vực Media",
    quote: "Một chiếc cần câu cơm vẫn luôn tốt hơn một chén cơm",
    image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1787728778/Giang-Vien-Ha-Khanh_q7fxbp.webp",
  },
  {
    name: "Bảo Nguyễn",
    role: "Giảng viên thực hành - Trưởng phòng Media BBS Media",
    experience: "Leader thực chiến tại BBS Media",
    quote: "Giá trị của một người làm nghề là giá trị mà bạn có thể tạo ra",
    image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1787875978/Bao-Ng-----Giang-Vien-Thuc-Hanh_1_zvcbet.jpg",
  },
  {
    name: "Mã Đức Thành",
    role: "Giảng viên chuyên về AI - Đào tạo và sáng tạo về AI từ đời sống tới thương mại",
    experience: "Chuyên gia AI Media",
    quote: "Đón đầu xu hướng để bản thân sớm hơn một bước",
    image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1787875978/Ma-Duc-Thanh_1_plvdvw.jpg",
  },
];

/* ── Benefits data ── */
const BENEFITS = [
  {
    icon: Star,
    title: "Giảng viên thực chiến",
    desc: "Trực tiếp giảng dạy bởi quay phim, dựng phim đang sản xuất dự án thật tại BBS Media.",
  },
  {
    icon: CheckCircle2,
    title: "Thiết bị chuyên nghiệp",
    desc: "Thực hành trên hệ thống máy quay, ánh sáng, âm thanh mà BBS Media dùng cho Event và TVC.",
  },
  {
    icon: Video,
    title: "Thực hành trên dự án thật",
    desc: "Có cơ hội tham gia hỗ trợ các buổi quay Event, Wedding thực tế trong quá trình học.",
  },
  {
    icon: Award,
    title: "Chứng nhận hoàn thành",
    desc: "Nhận chứng nhận từ BBS Academy sau khi hoàn thành khóa học.",
  },
  {
    icon: Briefcase,
    title: "Kết nối cơ hội làm việc",
    desc: "Học viên xuất sắc được ưu tiên giới thiệu cộng tác cùng ekip BBS Media.",
  },
  {
    icon: Heart,
    title: "Đồng hành sau khóa học",
    desc: "Được hỗ trợ, tham vấn thêm kiến thức và công cụ sau khóa học.",
  },
];

/* ── Roadmap data ── */
const ROADMAP = [
  {
    icon: Briefcase,
    title: "Cộng tác cùng BBS Media",
    desc: "Học viên xuất sắc được ưu tiên giới thiệu tham gia các dự án Event, TVC, Wedding.",
    color: "#d81e25",
  },
  {
    icon: Building2,
    title: "Làm việc tại đơn vị Media",
    desc: "Ứng tuyển vào các công ty truyền thông, studio sản xuất nội dung.",
    color: "#27abde",
  },
  {
    icon: TrendingUp,
    title: "Phát triển freelancer",
    desc: "Tự nhận dự án quay dựng cá nhân: sự kiện, đám cưới, sản phẩm, nội dung mạng xã hội.",
    color: "#d81e25",
  },
  {
    icon: Wallet,
    title: "Nghề tay trái tăng thu nhập",
    desc: "Khai thác kỹ năng vào cuối tuần hoặc ngoài giờ để tạo thêm nguồn thu nhập.",
    color: "#27abde",
  },
];

function Building2(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
      <path d="M9 22v-4h6v4"/>
      <path d="M8 6h.01"/>
      <path d="M16 6h.01"/>
      <path d="M12 6h.01"/>
      <path d="M12 10h.01"/>
      <path d="M12 14h.01"/>
      <path d="M16 10h.01"/>
      <path d="M16 14h.01"/>
      <path d="M8 10h.01"/>
      <path d="M8 14h.01"/>
    </svg>
  );
}

function Wallet(props: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>
    </svg>
  );
}

/* ── FAQ data ── */
const FAQS = [
  {
    question: "Học xong có được giới thiệu việc làm không?",
    answer: "Học viên có thành tích tốt trong quá trình học được BBS Academy ưu tiên giới thiệu tham gia cộng tác các dự án thực tế của BBS Media. Đây không phải cam kết tuyển dụng chính thức, mà là cơ hội để học viên tích lũy kinh nghiệm và xây dựng mối quan hệ nghề nghiệp.",
  },
  {
    question: "Không có máy quay thì có học được không?",
    answer: "Học được. Trung tâm cung cấp đầy đủ thiết bị (máy quay, ánh sáng, âm thanh) phục vụ toàn bộ quá trình học và thực hành. Học viên có thiết bị cá nhân được khuyến khích mang theo để làm quen, nhưng không bắt buộc.",
  },
  {
    question: "Học viên bao nhiêu tuổi có thể đăng ký?",
    answer: "BBS Academy nhận học viên từ 16 tuổi trở lên, không giới hạn độ tuổi tối đa. Phù hợp với cả học sinh, sinh viên lẫn người đi làm muốn học thêm nghề tay trái.",
  },
  {
    question: "Nên chọn khóa Cơ bản hay khóa Cấp tốc?",
    answer: "Khóa Cơ bản (lớp cơ bản, 3 tháng) phù hợp nếu bạn có thể sắp xếp học đều đặn 2 buổi/tuần và muốn học chắc nền tảng theo giáo trình chuẩn. Khóa Cấp tốc (kèm 1:1, 2 tháng) phù hợp nếu bạn cần học nhanh hơn, muốn giáo viên bám sát theo mục tiêu cá nhân, hoặc đã có ít nhiều nền tảng và cần rút ngắn thời gian.",
  },
  {
    question: "Học viên chưa có laptop dùng cho dựng phim thì sao?",
    answer: "Trung tâm có trang bị thiết bị cho các buổi học tại lớp. Với các bài tập cần thực hành tại nhà, học viên nên chuẩn bị laptop cá nhân đáp ứng yêu cầu tối thiểu cho phần mềm dựng phim — trung tâm sẽ tư vấn cụ thể trước khi khai giảng.",
  },
  {
    question: "Đăng ký như thế nào và khi nào cần đăng ký?",
    answer: "Điền thông tin qua form đăng ký trên website hoặc liên hệ trực tiếp hotline/Zalo. Vì lớp khai giảng tháng 9 giới hạn số lượng học viên, nên đăng ký sớm để được tư vấn và giữ suất học.",
  },
];

/* ── FAQ Accordion Component ── */
function FAQAccordion({ faqs }: { faqs: typeof FAQS }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-200"
        >
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50/50 transition-colors"
          >
            <span className="font-semibold text-[#101827] text-sm md:text-base leading-relaxed pr-4">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 flex-shrink-0 text-[#d81e25] transition-transform duration-300 ${
                openIndex === idx ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === idx ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="px-5 pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Course Showcase Block ── */
function CourseShowcaseBlock({
  course,
  index
}: {
  course: typeof COURSES[0];
  index: number;
}) {
  const isEven = index % 2 === 0;
  const brandColor = course.badgeColor;
  const bgClass = isEven ? "bg-white" : "bg-[#f8fafc]";
  const isAiCourse = course.id === "ai";

  return (
    <div className={`w-full py-12 md:py-16 ${bgClass} border-b border-gray-100 last:border-b-0`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Main Banner Image - centered */}
        <div className="relative w-fit mx-auto rounded-2xl overflow-hidden shadow-md group/main bg-gray-100 max-w-full">
          <Image
            src={getOptimizedCloudinaryUrl(course.images[0], CLOUDINARY_WIDTHS.showcase)}
            alt={course.title}
            width={isAiCourse ? 1402 : 2873}
            height={isAiCourse ? 1122 : 3427}
            className={`block w-auto h-auto ${isAiCourse ? "max-h-[500px]" : "max-h-[700px]"} object-contain transition-transform duration-500 group-hover/main:scale-[1.02]`}
            loading="lazy"
          />
          {/* Badge overlay */}
          <div
            className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-md"
            style={{ backgroundColor: brandColor }}
          >
            {course.badge}
          </div>
        </div>

        {/* Text Details Row */}
        <div className="mt-6 mb-6">
          {/* Title + Info + Button */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <div
                  className="p-2.5 rounded-xl flex items-center justify-center text-white shadow-sm"
                  style={{ backgroundColor: brandColor }}
                >
                  <course.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#101827] uppercase tracking-wide">
                  {course.title}
                </h3>
              </div>

              {/* Course Info Grid */}
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4 text-[#d81e25]" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-[#d81e25]" />
                  <span>{course.sessions}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4 text-[#d81e25]" />
                  <span>{course.maxStudents}</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed">
                {course.format}
              </p>

              {/* Features */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                {course.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Suitable for */}
              <div className="mt-4 p-3 bg-gray-50 rounded-xl">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phù hợp với: </span>
                <span className="text-sm text-gray-700">{course.suitable}</span>
              </div>
            </div>

            {/* Button */}
            <div className="flex-shrink-0 flex justify-center md:justify-end">
              <Link
                href="/lien-he?service=dao-tao-nghe"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-md"
                style={{ backgroundColor: brandColor }}
              >
                Đăng ký ngay
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Roadmap + Supporting Images - Full width, centered */}
          <div className="mt-10 pt-8 border-t border-gray-100/80 flex flex-col items-center w-full">
            {/* Roadmap Checkpoints */}
            <div className="flex flex-col items-center w-full">
              <div className="flex items-center justify-center gap-2 mb-5">
                <TrendingUp className="w-4 h-4 text-[#27abde]" />
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Lộ trình học</span>
              </div>
              <div className="flex items-center justify-center w-full max-w-3xl px-2">
                {/* Step 1 */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#27abde]/10 border-2 border-[#27abde] flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-[#27abde]" />
                  </div>
                  <span className="mt-2 text-[10px] font-medium text-[#27abde] uppercase tracking-tight text-center whitespace-nowrap">Lý thuyết</span>
                </div>
                {/* Connector */}
                <div className="flex-1 h-[2px] bg-gradient-to-r from-[#27abde] to-[#d81e25] mx-1 min-w-[20px]"></div>
                {/* Step 2 */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#27abde]/10 border-2 border-[#27abde] flex items-center justify-center">
                    <Camera className="w-4 h-4 text-[#27abde]" />
                  </div>
                  <span className="mt-2 text-[10px] font-medium text-[#27abde] uppercase tracking-tight text-center whitespace-nowrap">Thiết bị</span>
                </div>
                {/* Connector */}
                <div className="flex-1 h-[2px] bg-gradient-to-r from-[#d81e25]/60 to-[#d81e25] mx-1 min-w-[20px]"></div>
                {/* Step 3 */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#d81e25]/10 border-2 border-[#d81e25] flex items-center justify-center">
                    <Wrench className="w-4 h-4 text-[#d81e25]" />
                  </div>
                  <span className="mt-2 text-[10px] font-medium text-[#d81e25] uppercase tracking-tight text-center whitespace-nowrap">Thực hành</span>
                </div>
                {/* Connector */}
                <div className="flex-1 h-[2px] bg-gradient-to-r from-[#d81e25] to-[#d81e25] mx-1 min-w-[20px]"></div>
                {/* Step 4 */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#d81e25] border-2 border-[#d81e25] flex items-center justify-center shadow-lg shadow-[#d81e25]/30">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="mt-2 text-[10px] font-bold text-[#d81e25] uppercase tracking-tight text-center whitespace-nowrap">Thực chiến</span>
                </div>
              </div>
            </div>

            {/* Supporting Images Grid - Only show for non-AI courses */}
            {!isAiCourse && course.images.length > 1 && (
              <div className="mt-8 flex justify-center w-full">
                <div className="grid grid-cols-3 gap-4 max-w-4xl w-full">
                  {course.images.slice(1, 4).map((img, i) => (
                    <div key={`support-${course.id}-${i}`} className="relative aspect-video rounded-xl overflow-hidden shadow-sm group/support">
                      <Image
                        src={getOptimizedCloudinaryUrl(img, CLOUDINARY_WIDTHS.thumbnail)}
                        alt={`${course.title} ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 33vw, 20vw"
                        className="object-cover transition-transform duration-300 group-hover/support:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DangKyHocNghePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
          src={getOptimizedCloudinaryUrl(HERO_IMG, CLOUDINARY_WIDTHS.hero)}
          alt="BBS Academy - Đào tạo nghề quay dựng"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101827]/95 via-[#101827]/75 to-[#27abde]/40" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 mt-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#27abde]/20 text-white text-sm font-semibold mb-6 border border-white/20 backdrop-blur-sm uppercase tracking-wider">
            BBS Academy
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-md uppercase">
            Đăng Ký Học Nghề
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-4">
            BBS Academy — Trung tâm đào tạo nghề quay dựng thuộc BBS Media. Học từ thiết bị, thông số máy quay, bố cục khung hình, đến dựng phim và ứng dụng AI.
          </p>
          <p className="text-white/75 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            100% giảng viên là Leader Media đang trực tiếp sản xuất tại BBS Media.
          </p>
        </div>
      </section>

      {/* ═══════ TUYỂN SINH BANNER ═══════ */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#d81e25] to-[#b91920] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Thông báo tuyển sinh
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                KHAI GIẢNG LIÊN TỤC 3 THÁNG/KHÓA
              </h2>
              <p className="text-white/90 text-base md:text-lg">
                BBS Academy chính thức mở lớp mới — <strong>Khai giảng tháng 9/2026</strong>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center min-w-[140px]">
                <div className="text-3xl font-bold text-white">07</div>
                <div className="text-white/80 text-xs uppercase tracking-wide">Học viên/lớp</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center min-w-[140px]">
                <div className="text-3xl font-bold text-white">1:1</div>
                <div className="text-white/80 text-xs uppercase tracking-wide">Kèm riêng</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center min-w-[140px]">
                <div className="text-lg font-bold text-white">Hotline</div>
                <div className="text-white/90 text-sm">034.360.3760</div>
                <div className="text-white/90 text-sm">034.586.8556</div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#contact-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#d81e25] font-bold px-8 py-4 rounded-xl transition-all hover:bg-gray-100 shadow-lg"
            >
              Đăng ký ngay
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:0343603760"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all border border-white/30"
            >
              <PhoneCall className="w-5 h-5" />
              034.360.3760
            </a>
            <a
              href="tel:0345868556"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all border border-white/30"
            >
              <PhoneCall className="w-5 h-5" />
              034.586.8556
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ GIỚI THIỆU CHUNG ═══════ */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#27abde]/10 text-[#27abde] border border-[#27abde]/20 text-xs font-semibold uppercase tracking-widest mb-4">
                Về BBS Academy
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#101827] mb-4">
                BBS Academy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Trung tâm đào tạo nghề quay dựng thuộc BBS Media — đơn vị sản xuất hình ảnh và tổ chức sự kiện cho hàng nghìn khách hàng trên cả nước. Giáo trình bám sát quy trình sản xuất thật: thiết bị, thông số máy quay, bố cục khung hình, dựng phim và ứng dụng AI — do Leader Media đang trực tiếp sản xuất giảng dạy.
              </p>
              {/* Highlight Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 bg-[#f8fafc] rounded-xl p-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Thời gian linh động</span>
                </div>
                <div className="flex items-center gap-3 bg-[#f8fafc] rounded-xl p-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Hỗ trợ sau khóa học</span>
                </div>
                <div className="flex items-center gap-3 bg-[#f8fafc] rounded-xl p-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Tặng công cụ, tài nguyên</span>
                </div>
                <div className="flex items-center gap-3 bg-[#f8fafc] rounded-xl p-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Giảm giá khóa nâng cao</span>
                </div>
              </div>
            </div>
            {/* 3 Academy Images - 2 on top, 1 on bottom */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={getOptimizedCloudinaryUrl(ACADEMY_IMAGES[0], CLOUDINARY_WIDTHS.card)}
                  alt="BBS Academy - Giảng viên hướng dẫn"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={getOptimizedCloudinaryUrl(ACADEMY_IMAGES[2], CLOUDINARY_WIDTHS.card)}
                  alt="BBS Academy - Thiết bị học tập"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="col-span-2 relative aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={getOptimizedCloudinaryUrl(ACADEMY_IMAGES[1], CLOUDINARY_WIDTHS.showcase)}
                  alt="BBS Academy - Không gian học tập"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ ANCHOR NAV ═══════ */}
      <nav className="sticky top-[80px] z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-center gap-3 sm:gap-4 overflow-x-auto py-3 no-scrollbar w-full">
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

      {/* ═══════ SECTION: ĐỐI TƯỢNG TUYỂN SINH ═══════ */}
      <section id="doi-tuong-tuyen-sinh" className="pt-20 md:pt-28 bg-white scroll-mt-[130px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12">
          <div className="text-center flex flex-col items-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#27abde]/10 text-[#27abde] border border-[#27abde]/20 text-xs font-semibold uppercase tracking-widest mb-3">
              Tuyển sinh
            </span>
            <h2 className="text-3xl md:text-5xl pt-8 font-bold text-[#101827]">
              ĐỐI TƯỢNG TUYỂN SINH
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#27abde] to-[#d81e25] rounded-full mt-4 mb-6" />
            <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
              BBS Academy hướng đến những học viên có mong muốn học thêm nghề và phát triển trong lĩnh vực Media.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {TARGET_AUDIENCE.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-[#27abde]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#27abde]/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#27abde]" />
                </div>
                <h3 className="text-lg font-bold text-[#101827] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          {/* Row 2: 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {TARGET_AUDIENCE.slice(3, 5).map((item, idx) => (
              <div
                key={idx + 3}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-[#27abde]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#27abde]/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#27abde]" />
                </div>
                <h3 className="text-lg font-bold text-[#101827] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: CÁC KHÓA HỌC ═══════ */}
      <section id="cac-khoa-hoc" className="pt-20 md:pt-28 bg-[#f8fafc] scroll-mt-[130px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12">
          <div className="text-center flex flex-col items-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#d81e25]/10 text-[#d81e25] border border-[#d81e25]/20 text-xs font-semibold uppercase tracking-widest mb-3">
              Khóa học
            </span>
            <h2 className="text-3xl md:text-5xl pt-8 font-bold text-[#101827]">
              CÁC KHÓA HỌC ĐANG ÁP DỤNG
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#d81e25] to-[#27abde] rounded-full mt-4 mb-6" />
            <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
              4 khóa học từ cơ bản đến nâng cao, phù hợp với mọi trình độ và mục tiêu nghề nghiệp.
            </p>
          </div>
        </div>

        <div className="w-full">
          {COURSES.map((course, idx) => (
            <CourseShowcaseBlock
              key={course.id}
              course={course}
              index={idx}
            />
          ))}
        </div>
      </section>

      {/* ═══════ SECTION: GIẢNG VIÊN ═══════ */}
      <section id="giang-vien" className="pt-20 md:pt-28 bg-white border-t border-gray-100 scroll-mt-[130px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12">
          <div className="text-center flex flex-col items-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#27abde]/10 text-[#27abde] border border-[#27abde]/20 text-xs font-semibold uppercase tracking-widest mb-3">
              Đội ngũ
            </span>
            <h2 className="text-3xl md:text-5xl pt-8 font-bold text-[#101827]">
              GIẢNG VIÊN
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#27abde] to-[#d81e25] rounded-full mt-4 mb-6" />
            <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
              BBS Academy được giảng dạy trực tiếp bởi đội ngũ đang sản xuất tại BBS Media — không phải giảng viên lý thuyết thuần túy, mà là những người đang thực chiến trên các dự án Event, TVC, Wedding mỗi tuần.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {INSTRUCTORS.map((instructor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-56 aspect-square flex-shrink-0 bg-gray-100">
                    <Image
                      src={getOptimizedCloudinaryUrl(instructor.image, CLOUDINARY_WIDTHS.card)}
                      alt={instructor.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 224px"
                      className="object-cover object-top rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="text-2xl font-bold text-[#101827] mb-1">{instructor.name}</h3>
                    <p className="text-[#d81e25] font-medium text-sm mb-3">{instructor.role}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <Award className="w-4 h-4" />
                      <span>{instructor.experience}</span>
                    </div>
                    <blockquote className="border-l-4 border-[#27abde] pl-4 italic text-gray-600 text-sm">
                      &ldquo;{instructor.quote}&rdquo;
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: QUYỀN LỢI HỌC VIÊN ═══════ */}
      <section id="quyen-loi" className="pt-20 md:pt-28 bg-[#f8fafc] border-t border-gray-100 scroll-mt-[130px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12">
          <div className="text-center flex flex-col items-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#d81e25]/10 text-[#d81e25] border border-[#d81e25]/20 text-xs font-semibold uppercase tracking-widest mb-3">
              Quyền lợi
            </span>
            <h2 className="text-3xl md:text-5xl pt-8 font-bold text-[#101827]">
              QUYỀN LỢI HỌC VIÊN
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#d81e25] to-[#27abde] rounded-full mt-4 mb-6" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Benefits Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {BENEFITS.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm"
                    style={{ backgroundColor: idx % 2 === 0 ? "#d81e25" : "#27abde" }}
                  >
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#101827] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
            {/* Right: Benefits Images */}
            <div className="grid grid-rows-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={getOptimizedCloudinaryUrl(BENEFITS_IMAGES[0], CLOUDINARY_WIDTHS.card)}
                  alt="Học viên thực hành tại BBS Academy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={getOptimizedCloudinaryUrl(BENEFITS_IMAGES[1], CLOUDINARY_WIDTHS.card)}
                  alt="Học viên thực chiến tại BBS Academy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-12 text-center">
            <blockquote className="text-xl md:text-2xl text-[#101827] italic max-w-3xl mx-auto">
              &ldquo;Chúng tôi không chỉ cung cấp sản phẩm, dịch vụ mà còn đồng hành cùng học viên như đồng hành cùng khách hàng.&rdquo;
            </blockquote>
            <p className="mt-2 text-[#d81e25] font-semibold">— BBS Media</p>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: LỘ TRÌNH SAU KHÓA HỌC ═══════ */}
      <section id="lo-trinh" className="pt-20 md:pt-28 bg-white border-t border-gray-100 scroll-mt-[130px] relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#27abde]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#d81e25]/5 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12 relative z-10">
          <div className="text-center flex flex-col items-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#27abde]/10 text-[#27abde] border border-[#27abde]/20 text-xs font-semibold uppercase tracking-widest mb-3">
              Tương lai
            </span>
            <h2 className="text-3xl md:text-5xl pt-8 font-bold text-[#101827]">
              LỘ TRÌNH SAU KHÓA HỌC
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#27abde] to-[#d81e25] rounded-full mt-4 mb-6" />
            <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
              Hoàn thành khóa học tại BBS Academy, học viên có thể lựa chọn một trong các hướng đi sau:
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Roadmap Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {ROADMAP.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-[#27abde]/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
                      style={{ backgroundColor: item.color }}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#101827] mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Right: Roadmap Image */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={getOptimizedCloudinaryUrl(ROADMAP_IMAGE, CLOUDINARY_WIDTHS.card)}
                alt="Học viên BBS Academy sau khóa học"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: HỌC VIÊN TIÊU BIỂU ═══════ */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12">
          <div className="text-center flex flex-col items-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#27abde]/10 text-[#27abde] border border-[#27abde]/20 text-xs font-semibold uppercase tracking-widest mb-3">
              Thành quả
            </span>
            <h2 className="text-3xl md:text-5xl pt-8 font-bold text-[#101827]">
              HỌC VIÊN TIÊU BIỂU
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#27abde] to-[#d81e25] rounded-full mt-4 mb-6" />
            <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
              Những thành quả từ quá trình học tập và thực chiến tại BBS Academy
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SOCIAL_PROOF_IMAGES.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-video rounded-2xl overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={getOptimizedCloudinaryUrl(img, CLOUDINARY_WIDTHS.thumbnail)}
                  alt={`Học viên BBS Academy ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION: FAQ ═══════ */}
      <section id="faq" className="pt-20 md:pt-28 bg-[#f8fafc] border-t border-gray-100 scroll-mt-[130px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12">
          <div className="text-center flex flex-col items-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#d81e25]/10 text-[#d81e25] border border-[#d81e25]/20 text-xs font-semibold uppercase tracking-widest mb-3">
              Hỏi đáp
            </span>
            <h2 className="text-3xl md:text-5xl pt-8 font-bold text-[#101827]">
              CÂU HỎI THƯỜNG GẶP
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#d81e25] to-[#27abde] rounded-full mt-4 mb-6" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <FAQAccordion faqs={FAQS} />
        </div>
      </section>

      {/* ═══════ CÁCH ĐĂNG KÝ / NHẬN TƯ VẤN ═══════ */}
      <section id="dang-ky" className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#d81e25] to-[#b91920] border border-[#d81e25]/20 shadow-2xl overflow-hidden p-8 md:p-12 lg:p-14 text-center">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-widest mb-6">
                Xác nhận đăng ký
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                Xác nhận đăng ký
              </h2>
              <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed">
                Nhận lịch học, làm thủ tục nhập học và khai giảng sớm nhất.
              </p>

              {/* 3 Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="w-10 h-10 rounded-full bg-white text-[#d81e25] font-bold flex items-center justify-center mx-auto mb-3">1</div>
                  <h4 className="text-white font-semibold mb-1">Điền thông tin</h4>
                  <p className="text-white/70 text-sm">Gửi họ tên, số điện thoại và khóa học bạn quan tâm</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="w-10 h-10 rounded-full bg-white text-[#d81e25] font-bold flex items-center justify-center mx-auto mb-3">2</div>
                  <h4 className="text-white font-semibold mb-1">Nhận tư vấn 1:1</h4>
                  <p className="text-white/70 text-sm">Đội ngũ BBS Academy gọi điện hoặc nhắn Zalo tư vấn</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                  <div className="w-10 h-10 rounded-full bg-white text-[#d81e25] font-bold flex items-center justify-center mx-auto mb-3">3</div>
                  <h4 className="text-white font-semibold mb-1">Xác nhận khai giảng</h4>
                  <p className="text-white/70 text-sm">Nhận lịch học, làm thủ tục nhập học và khai giảng sớm nhất</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#contact-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#d81e25] font-bold px-8 py-4 rounded-xl transition-all hover:bg-gray-100 shadow-lg"
                >
                  Đăng ký tư vấn
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href={isMobile ? "tel:0343603760" : "https://www.messenger.com/t/107488542199286/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0"}
                  target={isMobile ? undefined : "_blank"}
                  rel={isMobile ? undefined : "noopener noreferrer"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all border border-white/30"
                >
                  <PhoneCall className="w-5 h-5" />
                  Liên hệ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
