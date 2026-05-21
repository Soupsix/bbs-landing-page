"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, PhoneCall, PartyPopper, Utensils, Users, Tent, Tv2, Cake, Megaphone, Volume2, Lightbulb, MonitorPlay, Layers, Frame, Armchair } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";

const PLACEHOLDER_IMG = "/casestudy/hanhtrinhbattu.webp";

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
    desc: "Tổ chức lễ khai trương và khánh thành chuyên nghiệp với setup sân khấu, âm thanh ánh sáng và kịch bản chương trình hiện đại giúp nâng cao hình ảnh thương hiệu.",
    Icon: PartyPopper,
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779301712/z7761932268536_f65c9478084d4901dd1f47da064293b6_tz24sg.jpg",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779301712/2025_02_08_10_32_IMG_9244_yrhr9k.jpg",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779301714/DAT08622_dsptlf.jpg",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779301714/DSC06126_umeawd.jpg",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779301715/IMG_3554_result_bebjom.jpg"
    ]
  },
  {
    id: "gala-dinner",
    title: "Gala Dinner / Chương trình biểu diễn",
    desc: "Thiết kế và tổ chức Gala Dinner sang trọng với concept sáng tạo, visual hiện đại và trải nghiệm chuyên nghiệp dành cho khách mời.",
    Icon: Utensils,
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779302040/z7761932268536_f65c9478084d4901dd1f47da064293b6_lsokxf.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779302038/2026_01_14_18_21_IMG_9713_ojuv1s.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779302037/BBS02934_esqhqv.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779302036/DSC02616_qmfxx2.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779302154/z7761935107134_1f1c8bf4feaaf2cda78d29d18ce37b59_tn6yhm.webp"
    ]
  },
  {
    id: "hoi-nghi-hoi-thao",
    title: "Hội Nghị - Hội Thảo - Hội Thao - Ký Kết",
    desc: "Triển khai hội nghị, hội thảo và lễ ký kết với hệ thống sân khấu, LED và vận hành kỹ thuật chuyên nghiệp.",
    Icon: Users,
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779302328/BBS04977_rlluz3.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779302326/DSC08112_qodq20.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779302324/BBS07962_a8oikw.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779302323/DSC09636_xlqlbg.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779302322/DSC09994_xzfe4f.webp"
    ]
  },
  {
    id: "team-building",
    title: "Team Building / Hoạt động ngoài trời",
    desc: "Xây dựng chương trình team building sáng tạo giúp kết nối tập thể và nâng cao tinh thần đội nhóm.",
    Icon: Tent,
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779302737/DSC03878_gpr1jr.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779302735/IMG_0050_result_rvfurd.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779302734/TVA_7009_result_wxsbj4.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779302722/TVA_7246_result_1_marzso.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779302722/TVA_7204_result_pkx1c6.webp"
    ]
  },
  {
    id: "year-end-party",
    title: "Year End Party / Tổng kết",
    desc: "Tổ chức tiệc cuối năm với concept hiện đại, sân khấu chuyên nghiệp và hệ thống vận hành đồng bộ.",
    Icon: Tv2,
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779302926/DAT09815_nlfeed.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779303299/DAT09784_rrkd7i.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779302924/DSC09335_hollaz.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779302912/IMG_1398_result_fswgtw.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779302910/IMG_1380_result_cx2fm3.webp"
    ]
  },
  {
    id: "sinh-nhat",
    title: "Sinh Nhật / Lễ Kỷ Niệm",
    desc: "Thiết kế và trang trí tiệc sinh nhật theo nhiều phong cách từ sang trọng, hiện đại đến trẻ trung và sáng tạo.",
    Icon: Cake,
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779303313/BBS00164_kkagcx.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779303312/BBS07889_result_kvocdp.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779303309/BBS08135_result_fbe87m.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779303307/IMG_0597_result_nq69gu.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779303305/mec5_result_qnhu8l.webp"
    ]
  },
  {
    id: "activation",
    title: "Activation",
    desc: "Triển khai activation thương hiệu nhằm tăng trải nghiệm khách hàng và nâng cao khả năng nhận diện thương hiệu tại sự kiện.",
    Icon: Megaphone,
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779303457/IMG_3140_result_rjyhgq.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779303454/IMG_3144_result_azteub.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779303452/NAM03661_yfxpaa.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779303450/NAM06079_dgcgxt.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779303439/NAM03668_jwgve9.webp"
    ]
  },
];

/* ── Equipment ── */
const EQUIPMENT = [
  {
    id: "am-thanh",
    title: "Âm thanh",
    desc: "Hệ thống loa, mixer và micro chuyên nghiệp phù hợp cho hội nghị, sân khấu và sự kiện ngoài trời.",
    Icon: Volume2,
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779325304/IMG_1724229438416_1724229519159_wdqbwh.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779325304/IMG_1724229438295_1724229509529_tkbb2s.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779325304/IMG_1724229438385_1724229518346_ztygb4.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779325305/MARRIOTT_21_08_84_qd64iw.webp"
    ]
  },
  {
    id: "anh-sang",
    title: "Ánh sáng",
    desc: "Setup lighting hiện đại với moving light, beam light, par led và hiệu ứng sân khấu chuyên nghiệp.",
    Icon: Lightbulb,
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779325682/z7761932000303_c1316fd9e0a4bf98880a024365762b9a_aeomle.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779325681/JAEYOUNG_B%E1%BA%AEC_NINH_5_rnejsy.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779325681/z7761932530724_4f22413b0f860ca297e3b497ab226d75_ilu0w1.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779325681/MARRIOTT_21_08_88_hozumt.webp"
    ]
  },
  {
    id: "man-hinh-led",
    title: "Màn hình LED",
    desc: "Cho thuê màn hình LED indoor và outdoor với khả năng hiển thị sắc nét và chuyên nghiệp P2, P3.",
    Icon: MonitorPlay,
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779325895/JAEYOUNG_B%E1%BA%AEC_NINH_-_Copy_gkcpbz.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779325896/MARRIOTT_21_08_68_r9esx1.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779325896/IMG_1724229438223_1724229503048_fkfull.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779325896/IMG_1724229438099_1724229498024_gctvti.webp"
    ]
  },
  {
    id: "san-khau",
    title: "Sân khấu",
    desc: "Thi công sân khấu theo concept riêng phù hợp với từng loại hình chương trình và quy mô sự kiện.",
    Icon: Layers,
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779326198/JAEYOUNG_B%E1%BA%AEC_NINH_18_iea9tx.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779326201/JAEYOUNG_B%E1%BA%AEC_NINH_10_qppwxs.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779326199/JAEYOUNG_B%E1%BA%AEC_NINH_13_vqhw8w.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779326200/JAEYOUNG_B%E1%BA%AEC_NINH_1_ayobym.webp"
    ]
  },
  {
    id: "backdrop",
    title: "Backdrop",
    desc: "Thiết kế và thi công backdrop theo nhận diện thương hiệu và concept chương trình.",
    Icon: Frame,
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779326412/2025_11_10_13_10_IMG_4500_nbbtqd.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779326410/CHI07914_xdwjhf.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779326410/TVB07422_ymvhjr.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779326411/BBS06417_idmzki.webp"
    ]
  },
  {
    id: "ban-ghe",
    title: "Bàn ghế & Hạng mục đi kèm",
    desc: "Cung cấp bàn ghế, nhà bạt, thảm sân khấu và các hạng mục hỗ trợ sự kiện khác.",
    Icon: Armchair,
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779326491/IMG_6829_mplzcb.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779326491/IMG_7228_result_xaetjn.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779326492/IMG_6828_nyzksi.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779326493/_NVT1197_yrtpbr.webp"
    ]
  },
];

/* ── Design & Decoration ── */
const DECORATIONS = [
  {
    id: "thiet-ke-khong-gian-su-kien",
    title: "Thiết kế không gian sự kiện",
    desc: "BBS Media hỗ trợ thiết kế và thi công không gian sự kiện với phong cách hiện đại và đồng bộ hình ảnh thương hiệu.",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779328250/Image4_001_hgwldc.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779328251/CHI08753_b3tbg2.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779328252/CHI08544_pvmpx9.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779328253/CHI08494_ykhjob.webp"
    ]
  },
  {
    id: "thiet-ke-san-khau-2d-3d",
    title: "Thiết kế sân khấu 2D/3D",
    desc: "Thiết kế mô phỏng sân khấu chuyên nghiệp giúp khách hàng dễ dàng hình dung không gian thực tế trước khi thi công.",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779328492/z7815631462237_9ec0b3914f95a9e62fe928f70ad4117f_qvshwk.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779328492/z7815631444170_de9b09c9ab5f05ae17fc3831f3ff7aef_ls5uni.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779328494/z7815622939419_decbead7efc42e8d9f57383c0d9d2014_iesbcs.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779329079/z7815631471600_17f07b064e3d906d80a75610e0089ac6_mame0y.webp"
    ]
  },
  {
    id: "trang-tri-san-khau",
    title: "Trang trí sân khấu",
    desc: "Setup sân khấu theo concept riêng với hệ thống hình ảnh, ánh sáng và bố cục hiện đại.",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779329357/z7815631535218_bdc7a94489a53656fa269509e49b1dfd_lj587j.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779329360/z7815631498959_109efe2ad6227d31ac19eb24a80aab57_ma5vdg.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779329357/z7815631957828_ecb6628ca78c1fd0d0bec89907db5c75_ei0dmt.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779329360/z7815627456363_a5f4b2f74e528e993a9936d2997f1daf_smi5mi.webp"
    ]
  },
  {
    id: "trang-tri-su-kien",
    title: "Trang trí sự kiện",
    desc: "Thi công khu vực check-in, photobooth, bàn gallery và không gian sự kiện chuyên nghiệp.",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779329453/BBS07630_q0yyms.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779329457/BBS07541_qmkjvc.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779329454/BBS07623_vduwxw.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/v1779329458/BBS07527_utqazp.webp"
    ]
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

// Reusable Showcase Component
interface ShowcaseBlockProps {
  title: string;
  desc: string;
  images: string[];
  Icon?: any;
  index?: number;
}

function ShowcaseBlock({ title, desc, images, Icon, index = 0 }: ShowcaseBlockProps) {
  const isEven = index % 2 === 0;
  const brandColor = isEven ? "#d81e25" : "#27abde";
  const bgClass = isEven ? "bg-white" : "bg-[#f8fafc]";
  
  const mainImage = images[0] || PLACEHOLDER_IMG;
  const supportingImages = images.slice(1, 5);
  
  const paddedSupportingImages = [...supportingImages];
  while (paddedSupportingImages.length < 4) {
    paddedSupportingImages.push(PLACEHOLDER_IMG);
  }

  return (
    <div className={`w-full py-12 md:py-16 ${bgClass} border-b border-gray-100 last:border-b-0`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Main Banner Image */}
        <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden shadow-md group/main">
          <Image
            src={mainImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover/main:scale-[1.02]"
            loading="lazy"
          />
        </div>

        {/* Text Details Row */}
        <div className="mt-6 mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              {Icon && (
                <div
                  className="p-2 rounded-xl flex items-center justify-center text-white"
                  style={{ backgroundColor: brandColor }}
                >
                  <Icon className="w-6 h-6" />
                </div>
              )}
              <h3 className="text-2xl md:text-3xl font-bold text-[#101827] uppercase tracking-wide">
                {title}
              </h3>
            </div>
            <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
              {desc}
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/lien-he?service=to-chuc-su-kien"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-md"
              style={{ backgroundColor: brandColor }}
            >
              Nhận tư vấn
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Supporting Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {paddedSupportingImages.map((img, i) => (
            <div key={i} className="relative aspect-video rounded-xl overflow-hidden shadow-sm group/support">
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover/support:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EquipmentShowcaseBlock({ title, desc, images, Icon, index = 0 }: ShowcaseBlockProps) {
  const isEven = index % 2 === 0;
  const brandColor = isEven ? "#d81e25" : "#27abde";
  const bgClass = isEven ? "bg-white" : "bg-[#f8fafc]";
  
  return (
    <div className={`w-full py-12 md:py-16 ${bgClass} border-b border-gray-100 last:border-b-0`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-md overflow-hidden">
          {/* Text Area */}
          <div className="p-6 md:p-8 lg:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-gray-50">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                {Icon && (
                  <div
                    className="p-2.5 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: brandColor }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                )}
                <h3 className="text-2xl md:text-3xl font-bold text-[#101827] uppercase tracking-wide">
                  {title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base mt-4 leading-relaxed">
                {desc}
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto mt-2 md:mt-0">
              <Link
                href="/lien-he?service=to-chuc-su-kien"
                className="inline-flex w-full md:w-auto items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-md"
                style={{ backgroundColor: brandColor }}
              >
                Nhận tư vấn
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Image Area */}
          <div className="p-6 md:p-8 lg:p-10 bg-gray-50/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {images.map((img, i) => (
                <div key={i} className="relative aspect-video rounded-xl overflow-hidden shadow-sm group">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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

      {/* ═══════ SECTION 1: LOẠI HÌNH SỰ KIỆN ═══════ */}
      <section id="loai-hinh-su-kien" className="pt-20 md:pt-28 bg-white scroll-mt-[130px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12">
          <div className="text-center flex flex-col items-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#d81e25]/10 text-[#d81e25] border border-[#d81e25]/20 text-xs font-semibold uppercase tracking-widest mb-3">
              Dịch vụ
            </span>
            <h2 className="text-3xl md:text-5xl pt-8 font-bold text-[#101827]">
              CÁC LOẠI HÌNH TỔ CHỨC SỰ KIỆN
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#d81e25] to-[#27abde] rounded-full mt-4 mb-6" />
            <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
              BBS Media tổ chức đa dạng các loại hình sự kiện từ quy mô nhỏ đến lớn, trong nhà và ngoài trời.
            </p>
          </div>
        </div>

        {/* Vertical Showcase Rows */}
        <div className="w-full">
          {EVENT_TYPES.map((event, idx) => {
            const isEven = idx % 2 === 0;
            const brandColor = isEven ? "#d81e25" : "#27abde";
            const bgClass = isEven ? "bg-white" : "bg-[#f8fafc]";
            
            const mainImage = event.images[0];
            const supportingImages = event.images.slice(1, 5);

            return (
              <div
                key={event.id}
                className={`w-full py-12 md:py-16 ${bgClass} border-b border-gray-100 last:border-b-0`}
              >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                  {/* Main Banner Image */}
                  <div className="relative w-full aspect-[16/7] md:aspect-[16/7] rounded-2xl overflow-hidden shadow-md group/main">
                    <Image
                      src={mainImage}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/main:scale-[1.02]"
                      priority={idx === 0}
                      loading={idx === 0 ? undefined : "lazy"}
                    />
                  </div>

                  {/* Text Details Row */}
                  <div className="mt-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-3">
                        <div
                          className="p-2 rounded-xl flex items-center justify-center text-white"
                          style={{ backgroundColor: brandColor }}
                        >
                          <event.Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#101827] uppercase tracking-wide">
                          {event.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm md:text-base mt-3 leading-relaxed">
                        {event.desc}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <Link
                        href="/lien-he?service=to-chuc-su-kien"
                        className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-md"
                        style={{ backgroundColor: brandColor }}
                      >
                        Nhận tư vấn
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Supporting Images Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {supportingImages.map((img, i) => (
                      <div key={i} className="relative aspect-video rounded-xl overflow-hidden shadow-sm group/support">
                        <Image
                          src={img}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover/support:scale-105"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════ SECTION 2: THIẾT BỊ SỰ KIỆN ═══════ */}
      <section id="thiet-bi-su-kien" className="pt-20 md:pt-28 bg-white scroll-mt-[130px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12">
          <div className="text-center flex flex-col items-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#27abde]/10 text-[#27abde] border border-[#27abde]/20 text-xs font-semibold uppercase tracking-widest mb-3">
              Thiết bị
            </span>
            <h2 className="text-3xl md:text-5xl pt-8 font-bold text-[#101827]">
              HỆ THỐNG THIẾT BỊ SỰ KIỆN
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#27abde] to-[#d81e25] rounded-full mt-4 mb-6" />
            <p className="text-gray-500 max-w-xl text-sm md:text-base leading-relaxed">
              BBS Media cung cấp hệ thống thiết bị sự kiện chuyên nghiệp phục vụ đa dạng chương trình với chất lượng vận hành ổn định và hiện đại.
            </p>
          </div>
        </div>

        {/* Vertical Showcase Rows */}
        <div className="w-full">
          {EQUIPMENT.map((item, idx) => (
            <EquipmentShowcaseBlock
              key={item.id}
              title={item.title}
              desc={item.desc}
              images={item.images}
              Icon={item.Icon}
              index={idx}
            />
          ))}
        </div>
      </section>

      {/* ═══════ SECTION 3: THIẾT KẾ & TRANG TRÍ ═══════ */}
      <section id="thiet-ke-trang-tri" className="pt-20 md:pt-28 bg-white border-t border-gray-100 scroll-mt-[130px] relative overflow-hidden">
        {/* Subtle glow blobs */}
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#27abde]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#d81e25]/5 rounded-full blur-3xl pointer-events-none translate-x-1/2" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12 relative z-10">
          <div className="text-center flex flex-col items-center">
            <span className="inline-block px-3 py-1 rounded-full bg-[#27abde]/10 text-[#27abde] border border-[#27abde]/20 text-xs font-semibold uppercase tracking-widest mb-3">
              Thiết kế & Trang trí
            </span>
            <h2 className="text-3xl md:text-5xl pt-8 font-bold text-[#101827] text-center">
              THIẾT KẾ SÂN KHẤU / BỐI CẢNH & TRANG TRÍ SỰ KIỆN
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#27abde] to-[#d81e25] rounded-full mt-4 mb-6" />
            <p className="text-gray-600 max-w-xl text-sm md:text-base leading-relaxed">
              BBS Media hỗ trợ thiết kế và thi công không gian sự kiện với phong cách hiện đại và đồng bộ hình ảnh thương hiệu.
            </p>
          </div>
        </div>

        {/* Vertical Showcase Rows */}
        <div className="w-full relative z-10">
          {DECORATIONS.map((item, idx) => (
            <EquipmentShowcaseBlock
              key={item.id}
              title={item.title}
              desc={item.desc}
              images={item.images}
              index={idx}
            />
          ))}
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
