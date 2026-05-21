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

// Custom helper to generate exactly 10 images starting with the main image
const makeTenImages = (mainImage: string): string[] => {
  return [
    mainImage,
    "/casestudy/sukienaodai2.webp",
    "/casestudy/hanhtrinhbattu.webp",
    "/casestudy/sukiena80.webp",
    "/casestudy/asean.webp",
    "/casestudy/chickenplus.webp",
    "/casestudy/ICHAM.webp",
    "/casestudy/sukienaodai2.webp",
    "/casestudy/hanhtrinhbattu.webp",
    mainImage,
  ];
};

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
        image: "/casestudy/asean.webp",
        images: makeTenImages("/casestudy/asean.webp"),
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
        image: "/casestudy/ICHAM.webp",
        images: makeTenImages("/casestudy/ICHAM.webp"),
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
        image: "/casestudy/sukienaodai2.webp",
        images: makeTenImages("/casestudy/sukienaodai2.webp"),
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
        image: "/casestudy/hanhtrinhbattu.webp",
        images: makeTenImages("/casestudy/hanhtrinhbattu.webp"),
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
        image: "/casestudy/chickenplus.webp",
        images: makeTenImages("/casestudy/chickenplus.webp"),
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
        image: "/casestudy/sukiena80.webp",
        images: makeTenImages("/casestudy/sukiena80.webp"),
        aspectRatio: "aspect-[4/5]",
      },
    ],
  },
];

// Re-export flat PROJECTS array for compatibility if needed elsewhere
export const PROJECTS: Project[] = PROJECT_GROUPS.reduce<Project[]>((acc, group) => {
  return [...acc, ...group.projects];
}, []);
