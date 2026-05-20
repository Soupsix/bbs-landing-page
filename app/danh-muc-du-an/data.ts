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
  scaleOrType: string;
  capability: string;
  result: string;
  image: string;
  images: string[];
  aspectRatio: string;
}

const PLACEHOLDER = "/casestudy/hanhtrinhbattu.webp";
const tenImages = Array.from({ length: 10 }, () => PLACEHOLDER);

export const PROJECTS: Project[] = [
  {
    id: "p1",
    slug: "le-hoi-ao-dai-2025",
    title: "Lễ Hội Áo Dài 2025",
    category: "EVENT",
    scaleOrType: "Sự kiện văn hóa quy mô lớn cấp Tỉnh/Thành phố.",
    capability:
      "Tư vấn truyền thông, sản xuất nội dung hình ảnh và tổ chức vận hành trọn gói.",
    result:
      "Lan tỏa mạnh mẽ giá trị văn hóa truyền thống, thu hút sự quan tâm của hàng chục nghìn lượt khách và các đơn vị thông tấn báo chí.",
    image: PLACEHOLDER,
    images: [...tenImages],
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: "p2",
    slug: "hanh-trinh-bat-tu-2025",
    title: "Chương trình: Hành Trình Bất Tử 2025",
    category: "EVENT",
    scaleOrType: "Sự kiện trải nghiệm văn hóa và lịch sử.",
    capability:
      "Lên ý tưởng kịch bản độc bản, sản xuất phim tư liệu và tổ chức hoạt động trải nghiệm thực tế.",
    result:
      "Tạo nên một hành trình giàu cảm xúc, kết nối giá trị di sản với thế hệ hiện tại một cách chân thực nhất.",
    image: PLACEHOLDER,
    images: [...tenImages],
    aspectRatio: "aspect-[16/9]",
  },
  {
    id: "p3",
    slug: "chuoi-su-kien-a80",
    title: "Chuỗi sự kiện & Hoạt động A80",
    category: "EVENT",
    scaleOrType: "Chuỗi sự kiện doanh nghiệp và khách hàng thân thiết.",
    capability:
      "Vận hành hệ thống kỹ thuật Âm thanh – Ánh sáng – Màn hình LED tiêu chuẩn cao, Livestream chuyên nghiệp và sản xuất media hậu kỳ.",
    result:
      "Đảm bảo sự chỉn chu và đẳng cấp cho thương hiệu trong suốt chuỗi hành trình sự kiện.",
    image: PLACEHOLDER,
    images: [...tenImages],
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: "p4",
    slug: "su-kien-thuong-dinh-asean",
    title: "Sự kiện Thượng đỉnh ASEAN",
    category: "EVENT",
    scaleOrType: "Hội nghị quốc tế cấp cao.",
    capability:
      "Ghi hình, tư liệu hóa và hỗ trợ kỹ thuật truyền thông cho sự kiện mang tầm vóc ngoại giao quốc tế.",
    result:
      "Đảm bảo tính chuyên nghiệp, bảo mật và chất lượng hình ảnh đạt chuẩn quốc gia/quốc tế.",
    image: PLACEHOLDER,
    images: [...tenImages],
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: "p5",
    slug: "chicken-plus-khai-truong",
    title: "Chuỗi sự kiện khai trương CHICKEN PLUS toàn quốc",
    category: "EVENT",
    scaleOrType: "Chiến dịch khai trương chuỗi hệ thống F&B quy mô lớn.",
    capability:
      "Tổ chức sự kiện trọn gói, sản xuất nội dung quảng bá, quản lý vận hành khai trương đồng loạt tại nhiều tỉnh thành.",
    result:
      "Tạo hiệu ứng truyền thông bùng nổ, giúp thương hiệu tiếp cận nhanh chóng với khách hàng tại các điểm bán mới.",
    image: PLACEHOLDER,
    images: [...tenImages],
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: "p6",
    slug: "doi-tac-truyen-thong-icham",
    title: "Đối tác Truyền thông ICHAM",
    subtitle: "Hiệp hội Thương mại Italia - Việt Nam",
    category: "BRANDING",
    scaleOrType:
      "Dự án hợp tác truyền thông và kết nối giao thương quốc tế.",
    capability:
      "Tư vấn chiến lược hình ảnh, sản xuất nội dung đa phương tiện và bảo trợ truyền thông cho các sự kiện xúc tiến thương mại giữa hai quốc gia.",
    result:
      "Nâng cao nhận thức thương hiệu, khẳng định vị thế và uy tín của BBS Media trong mạng lưới các tổ chức quốc tế.",
    image: "/casestudy/ICHAM.webp",
    images: [...tenImages],
    aspectRatio: "aspect-[16/9]",
  },
];
