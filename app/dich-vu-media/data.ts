export interface Service {
  id: string;
  title: string;
  desc: string;
  process: string[];
  cta: string;
  images: string[];
}

export const SERVICES_VI: Service[] = [
  {
    id: "tu-van-truyen-thong",
    title: "Tư Vấn Truyền Thông",
    desc: "BBS Media cung cấp giải pháp tư vấn truyền thông toàn diện: xây dựng chiến lược thương hiệu, lập kế hoạch nội dung, quản lý hình ảnh doanh nghiệp trên các nền tảng số.",
    process: ["Khảo sát & phân tích thương hiệu", "Lên chiến lược truyền thông", "Triển khai nội dung", "Đo lường & tối ưu"],
    cta: "Nhận tư vấn miễn phí",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "quay-chup-event",
    title: "Quay Chụp Event",
    desc: "Đội ngũ quay chụp chuyên nghiệp với thiết bị hiện đại, đảm bảo ghi lại mọi khoảnh khắc quan trọng trong sự kiện của bạn: hội nghị, lễ ra mắt, team building, gala dinner.",
    process: ["Trao đổi kịch bản sự kiện", "Chuẩn bị thiết bị & nhân sự", "Quay chụp trực tiếp", "Hậu kỳ & bàn giao"],
    cta: "Báo giá quay chụp event",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "livestream",
    title: "Livestream",
    desc: "Dịch vụ livestream chuyên nghiệp với nhiều camera, âm thanh chất lượng cao, đồ họa overlay real-time. Phù hợp cho sự kiện, ra mắt sản phẩm và bán hàng trực tuyến.",
    process: ["Khảo sát & lên kế hoạch", "Setup thiết bị multi-cam", "Livestream trực tiếp", "Lưu trữ & highlight"],
    cta: "Đặt lịch livestream",
    images: ["/HeroImage.jpg", "/HeroImage.jpg", "/HeroImage.jpg", "/HeroImage.jpg"],
  },
  {
    id: "quay-chup-wedding",
    title: "Quay Chụp Wedding",
    desc: "Lưu giữ khoảnh khắc đẹp nhất trong ngày trọng đại. BBS Media mang đến phong cách quay chụp cưới cinematic, tự nhiên và giàu cảm xúc.",
    process: ["Tư vấn concept & timeline", "Khảo sát địa điểm", "Quay chụp chuyên nghiệp", "Chỉnh sửa & bàn giao album/video"],
    cta: "Đặt lịch quay chụp cưới",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "quay-chup-san-pham-thuong-hieu",
    title: "Quay Chụp Sản Phẩm / Thương Hiệu",
    desc: "Chụp ảnh, quay video sản phẩm và thương hiệu chuyên nghiệp cho e-commerce, catalogue và quảng cáo. Tôn vinh giá trị sản phẩm bằng hình ảnh chất lượng cao.",
    process: ["Trao đổi yêu cầu & style", "Setup bối cảnh & ánh sáng", "Thực hiện chụp/quay", "Retouching & bàn giao ảnh/video"],
    cta: "Báo giá quay chụp",
    images: ["/HeroImage.jpg", "/HeroImage.jpg", "/HeroImage.jpg", "/HeroImage.jpg"],
  },
  {
    id: "studio-sang-tao",
    title: "Studio Sáng Tạo",
    desc: "Studio chuyên nghiệp của BBS Media phục vụ chụp ảnh lookbook, ảnh profile, ảnh sản phẩm và sản xuất nội dung sáng tạo. Không gian hiện đại với đầy đủ ánh sáng.",
    process: ["Trao đổi ý tưởng & mood board", "Setup studio & ánh sáng", "Thực hiện chụp/quay", "Retouching & bàn giao"],
    cta: "Đặt lịch studio",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "tvc-doanh-nghiep",
    title: "TVC Doanh Nghiệp",
    desc: "Sản xuất TVC quảng cáo, phim giới thiệu doanh nghiệp, phim tài liệu với chất lượng hình ảnh cinematic. Từ kịch bản, casting đến quay dựng.",
    process: ["Viết kịch bản & storyboard", "Casting & chuẩn bị sản xuất", "Quay phim chuyên nghiệp", "Dựng phim, VFX & color grading"],
    cta: "Báo giá sản xuất TVC",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "viral-video-tiktok-reels-content",
    title: "Viral Video / TikTok / Reels Content",
    desc: "Sản xuất nội dung ngắn lan tỏa mạnh mẽ dành riêng cho TikTok, Instagram Reels và YouTube Shorts. Tối ưu cho thuật toán và tương tác người dùng.",
    process: ["Lên ý tưởng theo trend", "Sáng tạo kịch bản ngắn", "Quay & Edit định dạng dọc", "Tối ưu & phân phối nền tảng"],
    cta: "Nhận tư vấn nội dung ngắn",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "san-xuat-video-ai",
    title: "Sản Xuất Video AI",
    desc: "Ứng dụng công nghệ AI tiên tiến để sản xuất video tự động, ấn tượng và tối ưu chi phí. Giải pháp hiện đại giúp doanh nghiệp bứt phá nội dung số.",
    process: ["Xây dựng kịch bản & concept", "Thiết lập mô hình AI", "Tạo sinh & Render hình ảnh/video", "Hậu kỳ & ghép âm thanh chuyên nghiệp"],
    cta: "Trải nghiệm dịch vụ AI",
    images: ["/HeroImage.jpg", "/HeroImage.jpg", "/HeroImage.jpg", "/HeroImage.jpg"],
  },
];

export const SERVICES_EN: Service[] = [
  {
    id: "tu-van-truyen-thong",
    title: "Media Consulting",
    desc: "BBS Media provides comprehensive media consulting solutions: brand strategy development, content planning, and corporate image management across digital platforms.",
    process: ["Brand survey & analysis", "Communication strategy", "Content deployment", "Measurement & optimization"],
    cta: "Get free consultation",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "quay-chup-event",
    title: "Event Videography",
    desc: "Professional filming team with modern equipment, ensuring every important moment of your event is captured: conferences, launches, team building, gala dinners.",
    process: ["Event script discussion", "Equipment & staff preparation", "Live filming", "Post-production & delivery"],
    cta: "Get event filming quote",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "livestream",
    title: "Livestream",
    desc: "Professional livestream service with multi-camera, high-quality audio, real-time graphics overlay. Suitable for events, product launches and online sales.",
    process: ["Survey & planning", "Multi-cam equipment setup", "Live streaming", "Storage & highlights"],
    cta: "Book livestream",
    images: ["/HeroImage.jpg", "/HeroImage.jpg", "/HeroImage.jpg", "/HeroImage.jpg"],
  },
  {
    id: "quay-chup-wedding",
    title: "Wedding Cinematic",
    desc: "Preserve the most beautiful moments of your big day. BBS Media brings a cinematic, natural and emotionally rich wedding filming style.",
    process: ["Concept & timeline consultation", "Location scouting", "Professional filming", "Editing & album/video delivery"],
    cta: "Book wedding filming",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "quay-chup-san-pham-thuong-hieu",
    title: "Product / Brand Media",
    desc: "Professional product and brand photography & videography for e-commerce, catalogues and advertising. Elevating your product's value with high-quality media.",
    process: ["Requirements & style discussion", "Setup scene & lighting", "Photography/Filming session", "Retouching & delivery"],
    cta: "Get media quote",
    images: ["/HeroImage.jpg", "/HeroImage.jpg", "/HeroImage.jpg", "/HeroImage.jpg"],
  },
  {
    id: "studio-sang-tao",
    title: "Creative Studio",
    desc: "BBS Media's professional studio serves lookbook photography, profile shots, product photography and creative content production. Modern space with full lighting.",
    process: ["Idea exchange & mood board", "Studio & lighting setup", "Shooting/filming", "Retouching & delivery"],
    cta: "Book studio session",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "tvc-doanh-nghiep",
    title: "Corporate TVC",
    desc: "Producing advertising TVCs, corporate introduction films, and documentaries with cinematic image quality. From scripts, casting to filming.",
    process: ["Script & storyboard", "Casting & pre-production", "Professional filming", "Editing, VFX & color grading"],
    cta: "Get TVC quote",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "viral-video-tiktok-reels-content",
    title: "Viral Video / TikTok / Reels",
    desc: "Producing powerful short-form content specifically for TikTok, Instagram Reels and YouTube Shorts. Optimized for platform algorithms and user engagement.",
    process: ["Trend-based ideation", "Short content script", "Vertical filming & editing", "Optimization & distribution"],
    cta: "Get short content consultation",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "san-xuat-video-ai",
    title: "AI Video Production",
    desc: "Applying advanced AI technology for automated, impressive, and cost-effective video production. A modern solution helping businesses breakthrough in digital content.",
    process: ["Script & concept building", "AI model configuration", "Image/Video generation & rendering", "Post-production & pro audio mixing"],
    cta: "Experience AI services",
    images: ["/HeroImage.jpg", "/HeroImage.jpg", "/HeroImage.jpg", "/HeroImage.jpg"],
  },
];
