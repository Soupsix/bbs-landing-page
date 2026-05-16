export type Category = "ALL" | "EVENT" | "WEDDING" | "TVC" | "COMMERCIAL" | "TIKTOK" | "BRANDING";

export const CATEGORIES: Category[] = [
  "ALL",
  "EVENT",
  "WEDDING",
  "TVC",
  "COMMERCIAL",
  "TIKTOK",
  "BRANDING"
];

export interface Project {
  id: string;
  title: {
    vi: string;
    en: string;
  };
  client: string;
  category: Category;
  image: string;
  aspectRatio: string; // Used to create Pinterest-like varied heights
}

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: { vi: "Lễ Kỷ Niệm 10 Năm", en: "10th Anniversary Ceremony" },
    client: "Tập đoàn Vingroup",
    category: "EVENT",
    image: "/casestudy/ICHAM.webp",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "p2",
    title: { vi: "Phim Quảng Cáo Tết 2024", en: "Lunar New Year Commercial 2024" },
    client: "Samsung Vietnam",
    category: "TVC",
    image: "/casestudy/ICHAM.webp",
    aspectRatio: "aspect-[16/9]"
  },
  {
    id: "p3",
    title: { vi: "Đám Cưới Cổ Tích", en: "Fairy Tale Wedding" },
    client: "Mr. & Mrs. Smith",
    category: "WEDDING",
    image: "/casestudy/ICHAM.webp",
    aspectRatio: "aspect-[4/5]"
  },
  {
    id: "p4",
    title: { vi: "Chiến Dịch Branding TikTok", en: "TikTok Branding Campaign" },
    client: "Shopee",
    category: "TIKTOK",
    image: "/casestudy/ICHAM.webp",
    aspectRatio: "aspect-[9/16]"
  },
  {
    id: "p5",
    title: { vi: "Ra Mắt Sản Phẩm Mới", en: "New Product Launch" },
    client: "Honda Vietnam",
    category: "EVENT",
    image: "/casestudy/ICHAM.webp",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: "p6",
    title: { vi: "Bộ Ảnh Thương Mại Xuân Hè", en: "Spring Summer Commercial Lookbook" },
    client: "Elise Fashion",
    category: "COMMERCIAL",
    image: "/casestudy/ICHAM.webp",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "p7",
    title: { vi: "Tái Định Vị Thương Hiệu", en: "Brand Repositioning" },
    client: "Viettel",
    category: "BRANDING",
    image: "/casestudy/ICHAM.webp",
    aspectRatio: "aspect-square"
  },
  {
    id: "p8",
    title: { vi: "Hội Nghị Khách Hàng", en: "Customer Conference" },
    client: "Vietcombank",
    category: "EVENT",
    image: "/casestudy/ICHAM.webp",
    aspectRatio: "aspect-[16/9]"
  },
  {
    id: "p9",
    title: { vi: "Viral Dance Challenge", en: "Viral Dance Challenge" },
    client: "Pepsi",
    category: "TIKTOK",
    image: "/casestudy/ICHAM.webp",
    aspectRatio: "aspect-[9/16]"
  },
  {
    id: "p10",
    title: { vi: "Phim Giới Thiệu Doanh Nghiệp", en: "Corporate Profile Video" },
    client: "FPT Software",
    category: "TVC",
    image: "/casestudy/ICHAM.webp",
    aspectRatio: "aspect-[4/3]"
  }
];
