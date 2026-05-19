"use client";

import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";

/* ─── Cloudinary logos (Exactly 61 items grouped into 4 sections) ─── */
const CL = (url: string, name: string) => ({ src: url, name });

const DOANH_NGHIEP = [
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163173/FPT_logo_2010.svg_pe1vtq.png", "FPT"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163060/1200px-Vietcombank_logo.svg_wprsrm.png", "Vietcombank"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163059/Vinfast-logo-new_NO_Tagline_-2D-Horizontal_black_bywtjw.png", "Vinfast"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163060/14535363_Generali20Group_y4rbkp.jpg", "Generali"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163160/Hyundai_Motor_Company_logo.svg_dbl929.png", "Hyundai"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163170/Bodor_xscfqq.webp", "Bodor"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163163/Logo_Carpla-logo-primary.e8ad81d0_izq82v.png", "Carpla"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163056/tcgroup-logo_pl0a0j.png", "TC Group"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163057/Thuan-Phat_khqff0.png", "Thuận Phát"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163050/Logo-Agribank-V_hfus6k.webp", "Agribank"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163051/logo-gac-motor_zpwz2i.webp", "GAC Motor"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163171/chu-dau-tu-sunshine-city-saigon_d0grfn.png", "Sunshine City"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163052/Logo-the-manor-central-park_p0a09n.png", "The Manor Central Park"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163165/72eae98fc6c1217ce40389e3e4766791450070bf.DOMINO_LOGO_t2v9fc.png", "Domino"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163054/Mixue_Ice_Cream___Tea.svg_vab7yv.png", "Mixue"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163055/tatgolf_lxwl5g.png", "Tat Golf"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163180/images_5_ypifk1.jpg", "Thương hiệu 7"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163180/images_4_v4b9lm.png", "Thương hiệu 8"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163179/images_4_bk67r3.jpg", "Thương hiệu 9"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163178/images_2_orlifz.png", "Thương hiệu 10"),
];

const LOCAL_BRAND = [
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163168/170355719_anh-logo-mai-viet_of1n9b.jpg", "Mai Việt"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163171/Cong-liem_vwgouq.png", "Công Liêm"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163053/Long-Tu_ung22q.png", "Long Tự"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163172/cropped-LOGO_gt5unu.png", "Thương hiệu 16"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163169/165044687014_ndqdlu.jpg", "Thương hiệu 17"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163168/11224950_gnvpka.png", "Thương hiệu 18"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163167/102250z1887583661223_aa765ad62ce27a80e4a89294e2e87b42_ewcjvn.webp", "Thương hiệu 19"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163166/5103f1b8fc622e866c58357af040363b_uqac6i.png", "Thương hiệu 20"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163164/6dbafc802be2a70856a7106f01b60c2e_uo487s.webp", "Thương hiệu 21"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163164/4-2019-32741_psbo2x.jpg", "Thương hiệu 22"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163162/logo_1_nhpfzh.png", "Thương hiệu 23"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163162/images_d8r13z.png", "Thương hiệu 24"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163161/images_3_nr2488.png", "Thương hiệu 25"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163160/images_3_otdlp8.jpg", "Thương hiệu 26"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163058/unnamed_ebmrkr.png", "Thương hiệu 29"),
];

const DOI_TAC = [
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163185/logo_ICHAM_-_CDC_transparent_vtod3k.png", "ICHAM CDC"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163174/ICHAM_logo_new_hz5qxq.png", "ICHAM"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163054/Minh_Vu_Media_jej3sl.png", "Minh Vũ Media"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163184/Logo_1_bqstog.avif", "Thương hiệu 1"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163184/IrwALtnLhz1631596356_dirpbp.jpg", "Thương hiệu 2"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163183/images_c6rohb.jpg", "Thương hiệu 3"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163182/images_7_uwrlwj.png", "Thương hiệu 4"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163182/images_6_ppvon6.png", "Thương hiệu 5"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163181/images_5_tu7oqh.png", "Thương hiệu 6"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163177/images_2_hacecs.jpg", "Thương hiệu 11"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163176/images_1_ypvgw6.png", "Thương hiệu 12"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163175/images_1_luqiun.jpg", "Thương hiệu 13"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163175/icon-default-637611572204066377_wrrlgu.jpg", "Thương hiệu 14"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163173/Frame-1_x5vkyn.png", "Thương hiệu 15"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163058/unnamed_ptlvfn.jpg", "Thương hiệu 30"),
];

const TRUONG_HOC = [
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163052/Logo-NEU_tam4ec.png", "NEU"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163068/Huy_Hi%E1%BB%87u_%C4%90o%C3%A0n_bplzas.png", "Đoàn TNCS"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163049/Logo_Sao_nh%E1%BA%ADp_ng%C5%A9_s97qjp.png", "Sao Nhập Ngũ"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163051/Logo-B%E1%BB%99-C%C3%B4ng-an-vector-01-e1632909148729_txgwuk.jpg", "Bộ Công An"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163064/1630652401283_vhgw6w.jpg", "Thương hiệu 27"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163061/105520687_z2499380802166-b6235e3e278e1a2207c83e136d796fe3_mlrkqc.jpg", "Thương hiệu 28"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163055/share_fb_home_i3vans.png", "Thương hiệu 31"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163050/logo-cp-tron2x-5361_m7svex.png", "Thương hiệu 32"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163050/logo2_tz7r4k.png", "Thương hiệu 33"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163049/logo_tyhioh.png", "Thương hiệu 34"),
  CL("https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163050/logo-cp-tron2x-5361_m7svex.png", "Thương hiệu 32 (Dup)"),
];

/* ─── Section definitions ────────────────────────────────────── */
const SECTIONS = [
  {
    key: "doanh-nghiep",
    label_vi: "Doanh Nghiệp",
    label_en: "Enterprises",
    accent: "bg-bbs-blue",
    border: "border-bbs-blue/30",
    badge: "bg-bbs-blue/10 text-bbs-blue",
    logos: DOANH_NGHIEP,
  },
  {
    key: "local-brand",
    label_vi: "Local Brand",
    label_en: "Local Brand",
    accent: "bg-bbs-red",
    border: "border-bbs-red/30",
    badge: "bg-bbs-red/10 text-bbs-red",
    logos: LOCAL_BRAND,
  },
  {
    key: "doi-tac",
    label_vi: "Đối Tác",
    label_en: "Partners",
    accent: "bg-deep-navy",
    border: "border-deep-navy/20",
    badge: "bg-deep-navy/10 text-deep-navy",
    logos: DOI_TAC,
  },
  {
    key: "truong-hoc",
    label_vi: "Trường Học & Tổ Chức",
    label_en: "Schools & Organizations",
    accent: "bg-bbs-blue",
    border: "border-bbs-blue/30",
    badge: "bg-bbs-blue/10 text-bbs-blue",
    logos: TRUONG_HOC,
  },
];

/* ─── Logo card ───────────────────────────────────────────────── */
function LogoCard({ src, name }: { src: string; name: string }) {
  return (
    <div
      title={name}
      className="
        group flex items-center justify-center
        w-[110px] h-[56px]
        sm:w-[120px] sm:h-[60px]
        md:w-[130px] md:h-[64px]
        rounded-xl border border-gray-100 bg-white
        px-3 py-2
        shadow-sm
        hover:shadow-md hover:border-bbs-blue/30 hover:scale-[1.06]
        transition-all duration-300 ease-out cursor-pointer
        flex-shrink-0
      "
    >
      <Image
        src={src}
        alt={name}
        width={100}
        height={40}
        className="object-contain w-full h-full"
      />
    </div>
  );
}

/* ─── Main page ───────────────────────────────────────────────── */
export default function KhachHangPage() {
  const { lang } = useLanguage();

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* ── Page Header ── */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-b from-bbs-blue/[0.02] via-white to-white pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-2 bg-bbs-blue/10 text-bbs-blue text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-bbs-blue animate-pulse" />
              {lang === "vi" ? "Khách Hàng & Đối Tác" : "Clients & Partners"}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-deep-navy mb-4 tracking-tight">
              {lang === "vi" ? "Những thương hiệu đã đồng hành" : "Brands That Partnered With Us"}
            </h1>
            <div className="w-16 h-[3px] bg-bbs-blue rounded-full mb-6" />
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl text-center">
              {lang === "vi"
                ? "Chúng tôi tự hào được hợp tác cùng các doanh nghiệp, local brand, đối tác truyền thông và các tổ chức giáo dục trong nhiều dự án sáng tạo."
                : "We are proud to collaborate with enterprises, local brands, media partners, and educational organizations across many creative projects."}
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              {[
                { num: "61+", label: lang === "vi" ? "THƯƠNG HIỆU" : "Clients" },
                { num: "4", label: lang === "vi" ? "Nhóm đối tác" : "Partner Groups" },
                { num: "100+", label: lang === "vi" ? "Dự án hoàn thành" : "Projects Delivered" },
              ].map(({ num, label }) => (
                <div key={label} className="text-center">
                  <p className="text-3xl font-extrabold text-bbs-blue">{num}</p>
                  <p className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Logo Wall Sections ── */}
      <div className="py-16 md:py-20 space-y-16 md:space-y-20">
        {SECTIONS.map((section) => (
          <section key={section.key} className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Section label */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-1 h-8 rounded-full ${section.accent}`} />
              <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${section.badge}`}>
                {lang === "vi" ? section.label_vi : section.label_en} ({section.logos.length})
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Logo grid */}
            <div className="flex flex-wrap justify-start items-center gap-3 md:gap-4">
              {section.logos.map((logo, index) => (
                <LogoCard key={logo.name + logo.src + index} src={logo.src} name={logo.name} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
