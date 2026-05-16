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
    desc: "BBS Media cung cấp giải pháp tư vấn truyền thông toàn diện: xây dựng chiến lược thương hiệu, lập kế hoạch nội dung, quản lý hình ảnh doanh nghiệp trên các nền tảng số. Giúp doanh nghiệp truyền tải thông điệp đúng đối tượng, đúng thời điểm.",
    process: ["Khảo sát & phân tích thương hiệu", "Lên chiến lược truyền thông", "Triển khai nội dung", "Đo lường & tối ưu"],
    cta: "Nhận tư vấn miễn phí",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "quay-chup-event",
    title: "Quay Chụp Event",
    desc: "Đội ngũ quay chụp chuyên nghiệp với thiết bị hiện đại, đảm bảo ghi lại mọi khoảnh khắc quan trọng trong sự kiện của bạn: hội nghị, lễ ra mắt, team building, gala dinner và nhiều hơn nữa.",
    process: ["Trao đổi kịch bản sự kiện", "Chuẩn bị thiết bị & nhân sự", "Quay chụp trực tiếp", "Hậu kỳ & bàn giao"],
    cta: "Báo giá quay chụp event",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "quay-chup-wedding",
    title: "Quay Chụp Wedding",
    desc: "Lưu giữ khoảnh khắc đẹp nhất trong ngày trọng đại. BBS Media mang đến phong cách quay chụp cưới cinematic, tự nhiên và giàu cảm xúc — từ lễ ăn hỏi, tiệc cưới đến pre-wedding.",
    process: ["Tư vấn concept & timeline", "Khảo sát địa điểm", "Quay chụp chuyên nghiệp", "Chỉnh sửa & bàn giao album/video"],
    cta: "Đặt lịch quay chụp cưới",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "studio-sang-tao",
    title: "Studio Sáng Tạo",
    desc: "Studio chuyên nghiệp của BBS Media phục vụ chụp ảnh lookbook, ảnh profile, ảnh sản phẩm và sản xuất nội dung sáng tạo. Không gian hiện đại, linh hoạt với đầy đủ ánh sáng và phụ kiện.",
    process: ["Trao đổi ý tưởng & mood board", "Setup studio & ánh sáng", "Thực hiện chụp/quay", "Retouching & bàn giao"],
    cta: "Đặt lịch studio",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "tvc-doanh-nghiep",
    title: "TVC Doanh Nghiệp",
    desc: "Sản xuất TVC quảng cáo, phim giới thiệu doanh nghiệp, phim tài liệu với chất lượng hình ảnh cinematic. Từ kịch bản, casting đến quay dựng — BBS Media đảm nhận trọn gói.",
    process: ["Viết kịch bản & storyboard", "Casting & chuẩn bị sản xuất", "Quay phim chuyên nghiệp", "Dựng phim, VFX & color grading"],
    cta: "Báo giá sản xuất TVC",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "viral-video",
    title: "Viral Video",
    desc: "Tạo ra những video có sức lan tỏa mạnh mẽ trên mạng xã hội. BBS Media kết hợp storytelling sáng tạo với xu hướng mới nhất để giúp thương hiệu tiếp cận hàng triệu người xem.",
    process: ["Nghiên cứu trend & insight", "Sáng tạo nội dung & kịch bản", "Sản xuất video", "Tối ưu & phân phối"],
    cta: "Tạo viral video ngay",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "tiktok-reels",
    title: "TikTok/Reels Content",
    desc: "Sản xuất nội dung ngắn dành riêng cho TikTok, Instagram Reels và YouTube Shorts. Từ concept đến editing — mọi thứ được tối ưu cho thuật toán và tương tác người dùng.",
    process: ["Lên ý tưởng theo trend", "Quay nội dung ngắn", "Edit theo format nền tảng", "Lên lịch đăng & tracking"],
    cta: "Đặt gói content ngắn",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "livestream",
    title: "Livestream",
    desc: "Dịch vụ livestream chuyên nghiệp với nhiều camera, âm thanh chất lượng cao, đồ họa overlay real-time. Phù hợp cho sự kiện, ra mắt sản phẩm, đào tạo và bán hàng trực tuyến.",
    process: ["Khảo sát & lên kế hoạch", "Setup thiết bị multi-cam", "Livestream trực tiếp", "Lưu trữ & highlight"],
    cta: "Đặt lịch livestream",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "flycam",
    title: "Flycam",
    desc: "Dịch vụ quay flycam chuyên nghiệp cho sự kiện, bất động sản, du lịch và phóng sự doanh nghiệp. Góc quay aerial ấn tượng với thiết bị flycam thế hệ mới, gimbal chống rung.",
    process: ["Xin phép bay & khảo sát", "Lên kế hoạch góc quay", "Thực hiện quay aerial", "Hậu kỳ & bàn giao"],
    cta: "Báo giá quay flycam",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "chup-anh-san-pham",
    title: "Chụp Ảnh Sản Phẩm",
    desc: "Chụp ảnh sản phẩm chuyên nghiệp cho e-commerce, catalogue và quảng cáo. Từ flatlay, packshot đến lifestyle — BBS Media giúp sản phẩm của bạn nổi bật và tăng tỷ lệ chuyển đổi.",
    process: ["Trao đổi yêu cầu & style", "Setup bối cảnh & ánh sáng", "Thực hiện chụp", "Retouching & bàn giao ảnh"],
    cta: "Báo giá chụp sản phẩm",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
];

export const SERVICES_EN: Service[] = [
  {
    id: "tu-van-truyen-thong",
    title: "Media Consulting",
    desc: "BBS Media provides comprehensive media consulting solutions: brand strategy development, content planning, and corporate image management across digital platforms. Helping businesses deliver the right message to the right audience at the right time.",
    process: ["Brand survey & analysis", "Communication strategy", "Content deployment", "Measurement & optimization"],
    cta: "Get free consultation",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "quay-chup-event",
    title: "Event Photography & Videography",
    desc: "Professional filming team with modern equipment, ensuring every important moment of your event is captured: conferences, launches, team building, gala dinners and more.",
    process: ["Event script discussion", "Equipment & staff preparation", "Live filming", "Post-production & delivery"],
    cta: "Get event filming quote",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "quay-chup-wedding",
    title: "Wedding Photography & Videography",
    desc: "Preserve the most beautiful moments of your big day. BBS Media brings a cinematic, natural and emotionally rich wedding filming style — from engagement ceremonies to receptions and pre-wedding shoots.",
    process: ["Concept & timeline consultation", "Location scouting", "Professional filming", "Editing & album/video delivery"],
    cta: "Book wedding filming",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "studio-sang-tao",
    title: "Creative Studio",
    desc: "BBS Media's professional studio serves lookbook photography, profile shots, product photography and creative content production. Modern, flexible space with full lighting and accessories.",
    process: ["Idea exchange & mood board", "Studio & lighting setup", "Shooting/filming", "Retouching & delivery"],
    cta: "Book studio session",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "tvc-doanh-nghiep",
    title: "Corporate TVC",
    desc: "Producing advertising TVCs, corporate introduction films, and documentaries with cinematic image quality. From scripts, casting to filming — BBS Media handles the full package.",
    process: ["Script & storyboard", "Casting & pre-production", "Professional filming", "Editing, VFX & color grading"],
    cta: "Get TVC production quote",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "viral-video",
    title: "Viral Video",
    desc: "Creating videos with powerful social media reach. BBS Media combines creative storytelling with the latest trends to help brands reach millions of viewers.",
    process: ["Trend & insight research", "Creative content & script", "Video production", "Optimization & distribution"],
    cta: "Create viral video now",
    images: ["/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp", "/casestudy/hanhtrinhbattu.webp"],
  },
  {
    id: "tiktok-reels",
    title: "TikTok/Reels Content",
    desc: "Short-form content production specifically for TikTok, Instagram Reels and YouTube Shorts. From concept to editing — everything is optimized for algorithms and user engagement.",
    process: ["Trend-based ideation", "Short content filming", "Platform-format editing", "Scheduling & tracking"],
    cta: "Order short content package",
    images: ["/HeroImage.jpg", "/HeroImage.jpg", "/HeroImage.jpg", "/HeroImage.jpg"],
  },
  {
    id: "livestream",
    title: "Livestream",
    desc: "Professional livestream service with multi-camera, high-quality audio, real-time graphics overlay. Suitable for events, product launches, training and online sales.",
    process: ["Survey & planning", "Multi-cam equipment setup", "Live streaming", "Storage & highlights"],
    cta: "Book livestream",
    images: ["/HeroImage.jpg", "/HeroImage.jpg", "/HeroImage.jpg", "/HeroImage.jpg"],
  },
  {
    id: "flycam",
    title: "Flycam / Drone",
    desc: "Professional drone filming service for events, real estate, tourism and corporate reportage. Impressive aerial angles with next-gen drones and anti-shake gimbals.",
    process: ["Flight permits & scouting", "Shot planning", "Aerial filming", "Post-production & delivery"],
    cta: "Get drone filming quote",
    images: ["/HeroImage.jpg", "/HeroImage.jpg", "/HeroImage.jpg", "/HeroImage.jpg"],
  },
  {
    id: "chup-anh-san-pham",
    title: "Product Photography",
    desc: "Professional product photography for e-commerce, catalogues and advertising. From flatlay, packshot to lifestyle — BBS Media helps your products stand out and increase conversion rates.",
    process: ["Requirements & style discussion", "Setup scene & lighting", "Photography session", "Retouching & photo delivery"],
    cta: "Get product photography quote",
    images: ["/HeroImage.jpg", "/HeroImage.jpg", "/HeroImage.jpg", "/HeroImage.jpg"],
  },
];
