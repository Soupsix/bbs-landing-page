export interface EventService {
  id: string;
  title: string;
  desc: string;
  equipment: string[];
  design: string;
  process: string[];
  cta: string;
  images: string[];
}

const COMMON_PROCESS_VI = ["Khảo sát", "Lên Concept", "Setup", "Vận hành", "Tháo dỡ"];
const COMMON_PROCESS_EN = ["Survey", "Concept", "Setup", "Operation", "Dismantle"];

const COMMON_EQUIPMENT_VI = ["Âm Thanh", "Ánh Sáng", "Màn Hình LED", "Sân Khấu", "Backdrop", "Bàn Ghế"];
const COMMON_EQUIPMENT_EN = ["Sound System", "Lighting", "LED Screen", "Stage", "Backdrop", "Tables & Chairs"];

const COMMON_DESIGN_VI = "Thiết kế sân khấu 2D 3D / Trang Trí Sân Khấu / Trang trí sự kiện";
const COMMON_DESIGN_EN = "2D 3D Stage Design / Stage Decoration / Event Decoration";

const COMMON_IMAGES = [
  "/casestudy/ICHAM.webp",
  "/casestudy/ICHAM.webp",
  "/casestudy/ICHAM.webp",
  "/casestudy/ICHAM.webp",
];

export const EVENT_SERVICES_VI: EventService[] = [
  {
    id: "khai-truong-khanh-thanh",
    title: "Khai Trương - Khánh Thành",
    desc: "Tổ chức lễ khai trương, khánh thành chuyên nghiệp, mang lại sự khởi đầu may mắn và thu hút sự chú ý mạnh mẽ từ khách hàng mục tiêu.",
    equipment: COMMON_EQUIPMENT_VI,
    design: COMMON_DESIGN_VI,
    process: COMMON_PROCESS_VI,
    cta: "Nhận báo giá sự kiện",
    images: COMMON_IMAGES,
  },
  {
    id: "gala-dinner",
    title: "Gala Dinner",
    desc: "Tổ chức đêm tiệc tri ân, Gala Dinner đầy cảm xúc và gắn kết. Cung cấp kịch bản sáng tạo, nghệ sĩ biểu diễn và không gian tiệc sang trọng.",
    equipment: COMMON_EQUIPMENT_VI,
    design: COMMON_DESIGN_VI,
    process: COMMON_PROCESS_VI,
    cta: "Lên kế hoạch Gala",
    images: COMMON_IMAGES,
  },
  {
    id: "hoi-nghi-hoi-thao",
    title: "Hội Nghị - Hội Thảo - Kí Kết",
    desc: "Cung cấp giải pháp tổ chức hội nghị, hội thảo và lễ kí kết trang trọng, chuyên nghiệp với hệ thống âm thanh, ánh sáng và phiên dịch đạt chuẩn quốc tế.",
    equipment: COMMON_EQUIPMENT_VI,
    design: COMMON_DESIGN_VI,
    process: COMMON_PROCESS_VI,
    cta: "Nhận báo giá hội nghị",
    images: COMMON_IMAGES,
  },
  {
    id: "team-building",
    title: "Team Building",
    desc: "Tổ chức hoạt động Team Building sáng tạo, các trò chơi gắn kết tập thể nhằm nâng cao tinh thần đồng đội và tái tạo năng lượng cho nhân viên.",
    equipment: COMMON_EQUIPMENT_VI,
    design: COMMON_DESIGN_VI,
    process: COMMON_PROCESS_VI,
    cta: "Lên kế hoạch Team Building",
    images: COMMON_IMAGES,
  },
  {
    id: "year-end-party",
    title: "Year End Party",
    desc: "Tổ chức tiệc tất niên hoành tráng, đánh dấu một năm thành công và tạo động lực cho năm mới với các tiết mục đặc sắc và kịch bản bùng nổ.",
    equipment: COMMON_EQUIPMENT_VI,
    design: COMMON_DESIGN_VI,
    process: COMMON_PROCESS_VI,
    cta: "Báo giá Year End Party",
    images: COMMON_IMAGES,
  },
  {
    id: "sinh-nhat",
    title: "Sinh Nhật",
    desc: "Tổ chức sinh nhật cá nhân, sinh nhật công ty với concept trang trí độc đáo, không gian ấm cúng và kịch bản được cá nhân hóa hoàn toàn.",
    equipment: COMMON_EQUIPMENT_VI,
    design: COMMON_DESIGN_VI,
    process: COMMON_PROCESS_VI,
    cta: "Đặt lịch sinh nhật",
    images: COMMON_IMAGES,
  },
  {
    id: "activation",
    title: "Activation",
    desc: "Tổ chức các chiến dịch Brand Activation, chạy roadshow, booth tương tác nhằm tăng độ nhận diện thương hiệu và kích cầu tiêu dùng trực tiếp.",
    equipment: COMMON_EQUIPMENT_VI,
    design: COMMON_DESIGN_VI,
    process: COMMON_PROCESS_VI,
    cta: "Nhận báo giá Activation",
    images: COMMON_IMAGES,
  },
  {
    id: "thiet-bi-su-kien",
    title: "Thiết Bị Sự Kiện",
    desc: "Cho thuê hệ thống âm thanh, ánh sáng, màn hình LED, bàn ghế và các hạng mục đi kèm với chất lượng cao nhất, đảm bảo sự kiện diễn ra hoàn hảo.",
    equipment: COMMON_EQUIPMENT_VI,
    design: COMMON_DESIGN_VI,
    process: COMMON_PROCESS_VI,
    cta: "Nhận báo giá thiết bị",
    images: COMMON_IMAGES,
  },
];

export const EVENT_SERVICES_EN: EventService[] = [
  {
    id: "khai-truong-khanh-thanh",
    title: "Grand Opening",
    desc: "Professional grand opening event organization, bringing an auspicious start and attracting strong attention from your target audience.",
    equipment: COMMON_EQUIPMENT_EN,
    design: COMMON_DESIGN_EN,
    process: COMMON_PROCESS_EN,
    cta: "Get event quote",
    images: COMMON_IMAGES,
  },
  {
    id: "gala-dinner",
    title: "Gala Dinner",
    desc: "Organizing emotional and engaging appreciation nights and Gala Dinners. Providing creative scripts, performers, and luxurious banquet spaces.",
    equipment: COMMON_EQUIPMENT_EN,
    design: COMMON_DESIGN_EN,
    process: COMMON_PROCESS_EN,
    cta: "Plan your Gala",
    images: COMMON_IMAGES,
  },
  {
    id: "hoi-nghi-hoi-thao",
    title: "Conferences & Seminars",
    desc: "Providing solutions for organizing formal, professional conferences, seminars, and signing ceremonies with international standard AV systems.",
    equipment: COMMON_EQUIPMENT_EN,
    design: COMMON_DESIGN_EN,
    process: COMMON_PROCESS_EN,
    cta: "Get conference quote",
    images: COMMON_IMAGES,
  },
  {
    id: "team-building",
    title: "Team Building",
    desc: "Organizing creative Team Building activities and group bonding games to enhance team spirit and recharge employees' energy.",
    equipment: COMMON_EQUIPMENT_EN,
    design: COMMON_DESIGN_EN,
    process: COMMON_PROCESS_EN,
    cta: "Plan Team Building",
    images: COMMON_IMAGES,
  },
  {
    id: "year-end-party",
    title: "Year End Party",
    desc: "Organizing spectacular year-end parties, marking a successful year and motivating the new year with special performances and explosive scripts.",
    equipment: COMMON_EQUIPMENT_EN,
    design: COMMON_DESIGN_EN,
    process: COMMON_PROCESS_EN,
    cta: "Get YEP quote",
    images: COMMON_IMAGES,
  },
  {
    id: "sinh-nhat",
    title: "Birthday Party",
    desc: "Organizing personal and corporate birthdays with unique decoration concepts, cozy spaces, and fully personalized scripts.",
    equipment: COMMON_EQUIPMENT_EN,
    design: COMMON_DESIGN_EN,
    process: COMMON_PROCESS_EN,
    cta: "Book birthday party",
    images: COMMON_IMAGES,
  },
  {
    id: "activation",
    title: "Brand Activation",
    desc: "Organizing Brand Activation campaigns, roadshows, and interactive booths to increase brand awareness and stimulate direct consumption.",
    equipment: COMMON_EQUIPMENT_EN,
    design: COMMON_DESIGN_EN,
    process: COMMON_PROCESS_EN,
    cta: "Get Activation quote",
    images: COMMON_IMAGES,
  },
  {
    id: "thiet-bi-su-kien",
    title: "Event Equipment",
    desc: "Renting high-quality sound, lighting, LED screens, tables, chairs, and accompanying items, ensuring a perfect event.",
    equipment: COMMON_EQUIPMENT_EN,
    design: COMMON_DESIGN_EN,
    process: COMMON_PROCESS_EN,
    cta: "Get equipment quote",
    images: COMMON_IMAGES,
  },
];
