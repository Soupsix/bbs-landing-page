export type Category = "ALL" | "EVENT" | "MEDIA" | "BRANDING";

export const CATEGORIES: { key: Category; label: string }[] = [
  { key: "ALL", label: "Tất cả" },
  { key: "EVENT", label: "Sự kiện" },
  { key: "MEDIA", label: "Media" },
  { key: "BRANDING", label: "Truyền thông" },
];

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: Category;
  client?: string;
  scaleLabel: "Quy mô" | "Đặc thù";
  scaleOrType: string;
  capability: string;
  result: string;
  image: string;
  images: string[];
  aspectRatio: string;
}

export interface ProjectGroup {
  id: string;
  label: string;
  projects: Project[];
}

export const PROJECT_GROUPS: ProjectGroup[] = [
  {
    id: "su-kien-quoc-te-cap-cao",
    label: "I. SỰ KIỆN QUỐC TẾ & CẤP CAO",
    projects: [
      {
        id: "su-kien-thuong-dinh-asean",
        slug: "su-kien-thuong-dinh-asean",
        title: "Sự kiện Thượng đỉnh ASEAN",
        category: "EVENT",
        scaleLabel: "Đặc thù",
        scaleOrType: "Hội nghị quốc tế cấp cao.",
        capability:
          "Ghi hình, tư liệu hóa và hỗ trợ kỹ thuật truyền thông cho sự kiện mang tầm vóc ngoại giao quốc tế.",
        result:
          "Đảm bảo tính chuyên nghiệp, bảo mật và chất lượng hình ảnh đạt chuẩn quốc gia/quốc tế.",
        image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354156/_DSC6703_rm3slw.webp",
        images: [
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354156/_DSC6703_rm3slw.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354130/DSC06605_phqyhh.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354130/DSC06624_ahef7k.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354130/DSC06784_vocrup.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354130/DSC06731_z7udbn.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354124/DSC06835_okehpn.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354123/DSC06864_ic2ksf.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354122/DSC07382_xtk1dx.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354122/DSC06874_d1ozg8.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354122/DSC07145_klszrn.webp"
        ],
        aspectRatio: "aspect-[4/3]",
      },
      {
        id: "doi-tac-truyen-thong-icham",
        slug: "doi-tac-truyen-thong-icham",
        title: "Đối tác Truyền thông ICHAM",
        subtitle: "Hiệp hội Thương mại Italia - Việt Nam",
        category: "BRANDING",
        scaleLabel: "Đặc thù",
        scaleOrType: "Dự án hợp tác truyền thông và kết nối giao thương quốc tế.",
        capability:
          "Tư vấn chiến lược hình ảnh, sản xuất nội dung đa phương tiện và bảo trợ truyền thông cho các sự kiện xúc tiến thương mại giữa hai quốc gia.",
        result:
          "Nâng cao nhận thức thương hiệu, khẳng định vị thế và uy tín của BBS Media trong mạng lưới các tổ chức quốc tế.",
        image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354066/CHI08132_n8nz0o.webp",
        images: [
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354066/CHI08132_n8nz0o.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354067/17-3-Italyin10257_pmrj6q.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354067/17-3-Italyin10103_result_vjhtzt.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354066/17-3-Italyin10342_ideawk.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354066/CHI08059_bxjv7t.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354066/DSC00037_k5roub.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354066/DSC09999_fusdbu.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354066/TVA_0031_result_otjtmx.webp"
        ],
        aspectRatio: "aspect-[16/9]",
      },
    ],
  },
  {
    id: "le-hoi-su-kien-van-hoa-lon",
    label: "II. LỄ HỘI & SỰ KIỆN VĂN HÓA LỚN",
    projects: [
      {
        id: "le-hoi-ao-dai-2025",
        slug: "le-hoi-ao-dai-2025",
        title: "Lễ Hội Áo Dài 2025",
        category: "EVENT",
        scaleLabel: "Quy mô",
        scaleOrType: "Sự kiện văn hóa quy mô lớn cấp Tỉnh/Thành phố.",
        capability:
          "Tư vấn truyền thông, sản xuất nội dung hình ảnh và tổ chức vận hành trọn gói.",
        result:
          "Lan tỏa mạnh mẽ giá trị văn hóa truyền thống, thu hút sự quan tâm của hàng chục nghìn lượt khách và các đơn vị thông tấn báo chí.",
        image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779353999/NTN03611_t7cbqh.webp",
        images: [
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779353999/NTN03611_t7cbqh.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779353999/NTN03698_l12rhg.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779353999/NTN03804_qcuge8.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779353998/NAM09205_ofvyiy.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779353997/DSC07275_ipvvut.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779353997/DSC07619_f5n5hr.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779353997/DSC07439_wlur20.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779353997/BBS00893_vs6pdg.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779353997/DSC06657_oythpr.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779353996/DSC06641_cdk7ij.webp"
        ],
        aspectRatio: "aspect-[3/4]",
      },
      {
        id: "hanh-trinh-bat-tu-2025",
        slug: "hanh-trinh-bat-tu-2025",
        title: "Chương trình: Hành Trình Bất Tử 2025",
        category: "EVENT",
        scaleLabel: "Đặc thù",
        scaleOrType: "Sự kiện trải nghiệm văn hóa và lịch sử.",
        capability:
          "Lên ý tưởng kịch bản độc bản, sản xuất phim tư liệu và tổ chức hoạt động trải nghiệm thực tế.",
        result:
          "Tạo nên một hành trình giàu cảm xúc, kết nối giá trị di sản với thế hệ hiện tại một cách chân thực nhất.",
        image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354230/DAT08986_eejgea.webp",
        images: [
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354230/DAT08986_eejgea.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354231/DJI_0611_y39ztb.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354232/DSC08217_wxv5xn.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354230/DSC08592_joz4gg.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354229/BAP_2645_gkspb8.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354229/BAP_2603_nd9tuw.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354229/BAP_2577_nwdxhw.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354228/BAP_2235_k8wdh8.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354227/BAP_2191_lpwicj.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354227/BAP_1566_n5uuyp.webp"
        ],
        aspectRatio: "aspect-[16/9]",
      },
    ],
  },
  {
    id: "chuoi-su-kien-doanh-nghiep-nhan-hang",
    label: "III. CHUỒI SỰ KIỆN DOANH NGHIỆP & NHÃN HÀNG",
    projects: [
      {
        id: "chicken-plus-khai-truong",
        slug: "chicken-plus-khai-truong",
        title: "Chuỗi sự kiện khai trương CHICKEN PLUS toàn quốc",
        category: "EVENT",
        scaleLabel: "Đặc thù",
        scaleOrType: "Chiến dịch khai trương chuỗi hệ thống F&B quy mô lớn.",
        capability:
          "Tổ chức sự kiện trọn gói, sản xuất nội dung quảng bá, quản lý vận hành khai trương đồng loạt tại nhiều tỉnh thành.",
        result:
          "Tạo hiệu ứng truyền thông bùng nổ, giúp thương hiệu tiếp cận nhanh chóng với khách hàng tại các điểm bán mới.",
        image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354269/Chicken_8_sfvacw.jpg",
        images: [
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354269/Chicken_8_sfvacw.jpg",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354268/Chicken_Plus_2_kgcjtt.jpg",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354271/Chicken_Plus_1_yey4bf.jpg",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354272/Chicken_Plus_4_bw22zz.jpg",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354268/Chicken_Plus_5_ezvgmk.jpg",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354267/Chicken_1_r4wjzh.jpg",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354267/Chicken_7_zqkbwi.jpg",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354267/Chicken_6_czktnj.jpg",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354264/Chicken_4_clftlz.jpg",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354256/Chicken_2_gcz8zk.jpg"
        ],
        aspectRatio: "aspect-[3/4]",
      },
      {
        id: "chuoi-su-kien-a80",
        slug: "chuoi-su-kien-a80",
        title: "Chuỗi sự kiện & Hoạt động A80",
        category: "EVENT",
        scaleLabel: "Đặc thù",
        scaleOrType: "Chuỗi sự kiện doanh nghiệp và khách hàng thân thiết.",
        capability:
          "Vận hành hệ thống kỹ thuật Âm thanh – Ánh sáng – Màn hình LED tiêu chuẩn cao, Livestream chuyên nghiệp và sản xuất media hậu kỳ.",
        result:
          "Đảm bảo sự chỉn chu và đẳng cấp cho thương hiệu trong suốt chuỗi hành trình sự kiện.",
        image: "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354284/DSC02350_w9tedl.webp",
        images: [
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354284/DSC02350_w9tedl.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354286/DSC02541_ifoyvg.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354286/DSC02486_luubja.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354286/DSC02833_lomdp3.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354288/DAT04372_kkvo1w.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354289/DJI_20250816173019_0188_D_sbfycc.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354290/DSC03148_qofze3.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354291/DJI_20250816180815_0221_D_wykfl1.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354292/DJI_20250816181159_0234_D_tyitv6.webp",
          "https://res.cloudinary.com/dss1zawkj/image/upload/v1779354293/DJI_20250816181422_0242_D_bn0wip.webp"
        ],
        aspectRatio: "aspect-[4/5]",
      },
    ],
  },
];

// Re-export flat PROJECTS array for compatibility if needed elsewhere
export const PROJECTS: Project[] = PROJECT_GROUPS.reduce<Project[]>((acc, group) => {
  return [...acc, ...group.projects];
}, []);
