"use client";


import { useLanguage } from "@/components/contexts/LanguageContext";

/* ─── Static content ─────────────────────────────────────────── */
const CONTENT = {
  vi: {
    badge: "Khách Hàng & Đối Tác",
    heading: "BBS Media luôn là đối tác tin cậy",
    subtitle:
      "BBS Media luôn là đối tác tin cậy của rất nhiều doanh nghiệp, đài truyền hình, cơ quan thông tấn, báo chí lớn trên cả nước.",
    slogan: "Chúng tôi không chỉ cung cấp sản phẩm, dịch vụ mà còn đồng hành cùng Quý khách hàng",
    count: "61+",
    countLabel: "doanh nghiệp đã tin tưởng",
  },
  en: {
    badge: "Clients & Partners",
    heading: "BBS Media is always a trusted partner",
    subtitle:
      "BBS Media is a trusted partner of many businesses, television stations, news agencies, and major press organizations nationwide.",
    slogan: "We do not only provide products and services, but also accompany our valued customers",
    count: "61+",
    countLabel: "businesses have trusted us",
  },
};

const logos: { name: string; src: string }[] = [
  { name: "ICHAM CDC", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163185/logo_ICHAM_-_CDC_transparent_vtod3k.png" },
  { name: "Logo 1", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163184/Logo_1_bqstog.avif" },
  { name: "Logo 2", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163184/IrwALtnLhz1631596356_dirpbp.jpg" },
  { name: "Logo 3", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163183/images_c6rohb.jpg" },
  { name: "Logo 4", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163182/images_7_uwrlwj.png" },
  { name: "Logo 5", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163182/images_6_ppvon6.png" },
  { name: "Logo 6", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163181/images_5_tu7oqh.png" },
  { name: "Logo 7", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163180/images_5_ypifk1.jpg" },
  { name: "Logo 8", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163180/images_4_v4b9lm.png" },
  { name: "Logo 9", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163179/images_4_bk67r3.jpg" },
  { name: "Logo 10", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163178/images_2_orlifz.png" },
  { name: "Logo 11", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163177/images_2_hacecs.jpg" },
  { name: "Logo 12", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163176/images_1_ypvgw6.png" },
  { name: "Logo 13", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163175/images_1_luqiun.jpg" },
  { name: "Logo 14", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163175/icon-default-637611572204066377_wrrlgu.jpg" },
  { name: "ICHAM", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163174/ICHAM_logo_new_hz5qxq.png" },
  { name: "Logo 15", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163173/Frame-1_x5vkyn.png" },
  { name: "FPT", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163173/FPT_logo_2010.svg_pe1vtq.png" },
  { name: "Logo 16", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163172/cropped-LOGO_gt5unu.png" },
  { name: "Công Liêm", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163171/Cong-liem_vwgouq.png" },
  { name: "Sunshine City", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163171/chu-dau-tu-sunshine-city-saigon_d0grfn.png" },
  { name: "Bodor", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163170/Bodor_xscfqq.webp" },
  { name: "Logo 17", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163169/165044687014_ndqdlu.jpg" },
  { name: "Mai Việt", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163168/170355719_anh-logo-mai-viet_of1n9b.jpg" },
  { name: "Logo 18", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163168/11224950_gnvpka.png" },
  { name: "Logo 19", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163167/102250z1887583661223_aa765ad62ce27a80e4a89294e2e87b42_ewcjvn.webp" },
  { name: "Logo 20", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163166/5103f1b8fc622e866c58357af040363b_uqac6i.png" },
  { name: "Domino", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163165/72eae98fc6c1217ce40389e3e4766791450070bf.DOMINO_LOGO_t2v9fc.png" },
  { name: "Logo 21", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163164/6dbafc802be2a70856a7106f01b60c2e_uo487s.webp" },
  { name: "Logo 22", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163164/4-2019-32741_psbo2x.jpg" },
  { name: "Carpla", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163163/Logo_Carpla-logo-primary.e8ad81d0_izq82v.png" },
  { name: "Logo 23", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163162/logo_1_nhpfzh.png" },
  { name: "Logo 24", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163162/images_d8r13z.png" },
  { name: "Logo 25", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163161/images_3_nr2488.png" },
  { name: "Logo 26", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163160/images_3_otdlp8.jpg" },
  { name: "Hyundai", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163160/Hyundai_Motor_Company_logo.svg_dbl929.png" },
  { name: "Đoàn TNCS", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163068/Huy_Hi%E1%BB%87u_%C4%90o%C3%A0n_bplzas.png" },
  { name: "Logo 27", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163064/1630652401283_vhgw6w.jpg" },
  { name: "Logo 28", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163061/105520687_z2499380802166-b6235e3e278e1a2207c83e136d796fe3_mlrkqc.jpg" },
  { name: "Generali", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163060/14535363_Generali20Group_y4rbkp.jpg" },
  { name: "Vietcombank", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163060/1200px-Vietcombank_logo.svg_wprsrm.png" },
  { name: "Vinfast", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163059/Vinfast-logo-new_NO_Tagline_-2D-Horizontal_black_bywtjw.png" },
  { name: "Logo 29", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163058/unnamed_ebmrkr.png" },
  { name: "Logo 30", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163058/unnamed_ptlvfn.jpg" },
  { name: "Thuận Phát", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163057/Thuan-Phat_khqff0.png" },
  { name: "TC Group", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163056/tcgroup-logo_pl0a0j.png" },
  { name: "Tat Golf", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163055/tatgolf_lxwl5g.png" },
  { name: "Logo 31", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163055/share_fb_home_i3vans.png" },
  { name: "Mixue", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163054/Mixue_Ice_Cream___Tea.svg_vab7yv.png" },
  { name: "Minh Vũ Media", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163054/Minh_Vu_Media_jej3sl.png" },
  { name: "Long Tự", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163053/Long-Tu_ung22q.png" },
  { name: "The Manor Central Park", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163052/Logo-the-manor-central-park_p0a09n.png" },
  { name: "NEU", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163052/Logo-NEU_tam4ec.png" },
  { name: "Bộ Công An", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163051/Logo-B%E1%BB%99-C%C3%B4ng-an-vector-01-e1632909148729_txgwuk.jpg" },
  { name: "GAC Motor", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163051/logo-gac-motor_zpwz2i.webp" },
  { name: "Logo 32", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163050/logo-cp-tron2x-5361_m7svex.png" },
  { name: "Agribank", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163050/Logo-Agribank-V_hfus6k.webp" },
  { name: "Logo 33", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163050/logo2_tz7r4k.png" },
  { name: "Sao Nhập Ngũ", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163049/Logo_Sao_nh%E1%BA%ADp_ng%C5%A9_s97qjp.png" },
  { name: "Logo 34", src: "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779163049/logo_tyhioh.png" },
];

/* ─── Main component ──────────────────────────────────────────── */
export function Clients() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 text-bbs-blue text-xs font-bold tracking-[0.18em] uppercase mb-4">
            {t.badge}
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug mb-4 max-w-2xl mx-auto">
            {t.heading}
          </h2>

          <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
            {t.subtitle}
          </p>

          {/* Counter pill */}
          <div className="inline-flex items-center gap-2 bg-bbs-blue/10 border border-bbs-blue/20 rounded-full px-5 py-2">
            <span className="text-2xl font-bold text-bbs-blue">{t.count}</span>
            <span className="text-sm text-gray-500">{t.countLabel}</span>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="w-12 h-px bg-border-gray mx-auto mb-10" />

        {/* ── Logo wall — desktop: 9 columns x 6 rows ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 justify-items-center gap-3 md:gap-4">
          {logos.slice(0, 54).map((logo) => (
            <div
              key={logo.name}
              title={logo.name}
              className="
                group flex items-center justify-center
                w-full h-[52px]
                sm:h-[56px]
                md:h-[60px]
                rounded-xl border border-border-gray bg-white
                px-3 py-2
                hover:border-bbs-blue/30 hover:shadow-md hover:scale-[1.06]
                transition-all duration-300 ease-out
                cursor-pointer
              "
            >
              <img
                src={logo.src}
                alt={logo.name}
                width={90}
                height={36}
                loading="lazy"
                decoding="async"
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-lg md:text-xl font-semibold italic text-gray-900 max-w-4xl mx-auto leading-relaxed">
          “{t.slogan}”
        </p>

      </div>
    </section>
  );
}
