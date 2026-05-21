export interface Service {
  id: string;
  title: string;
  mainHeading?: string;
  desc: string;
  includedServices: { name: string; detail: string }[];
  process: string[];
  cta: string;
  images: string[];
}

export const SERVICES_VI: Service[] = [
  {
    id: "tu-van-truyen-thong",
    title: "Tư Vấn Truyền Thông",
    mainHeading: "CHIẾN LƯỢC TRUYỀN THÔNG HIỆN ĐẠI DÀNH CHO THƯƠNG HIỆU",
    desc: "BBS Media hỗ trợ doanh nghiệp xây dựng chiến lược truyền thông, định hướng hình ảnh thương hiệu và phát triển nội dung hiện đại trên các nền tảng số nhằm nâng cao độ nhận diện và tiếp cận khách hàng hiệu quả hơn. Chúng tôi mang đến giải pháp truyền thông chuyên nghiệp, sáng tạo và phù hợp với từng lĩnh vực kinh doanh, giúp thương hiệu phát triển hình ảnh đồng bộ và nổi bật hơn trong môi trường số.",
    includedServices: [
      { name: "Xây dựng chiến lược truyền thông phù hợp với thương hiệu", detail: "Phân tích thương hiệu và xây dựng định hướng truyền thông phù hợp với mục tiêu phát triển của doanh nghiệp." },
      { name: "Định hướng hình ảnh và phong cách truyền thông", detail: "Thiết lập phong cách hình ảnh, màu sắc và nội dung nhằm tạo sự chuyên nghiệp và đồng bộ trên các nền tảng." },
      { name: "Lên kế hoạch nội dung cho Social Media", detail: "Xây dựng kế hoạch nội dung cho Facebook, TikTok và Instagram nhằm tăng tương tác và tiếp cận khách hàng." },
      { name: "Triển khai Facebook & TikTok Ads", detail: "Hỗ trợ triển khai quảng cáo giúp tăng độ nhận diện thương hiệu và tiếp cận khách hàng tiềm năng hiệu quả hơn." },
      { name: "Xây dựng concept và nội dung video hiện đại", detail: "Xây dựng ý tưởng và concept video hiện đại phù hợp với thương hiệu và xu hướng mạng xã hội." }
    ],
    process: [
      "KHẢO SÁT: Tìm hiểu thương hiệu, sản phẩm và nhu cầu truyền thông của khách hàng.",
      "PHÂN TÍCH: Nghiên cứu khách hàng mục tiêu và xu hướng thị trường phù hợp.",
      "XÂY DỰNG CHIẾN LƯỢC: Lên kế hoạch truyền thông và định hướng nội dung tổng thể.",
      "TRIỂN KHAI NỘI DUNG: Thực hiện sản xuất nội dung hình ảnh, video và truyền thông trên nền tảng số.",
      "TỐI ƯU & PHÁT TRIỂN: Đánh giá hiệu quả và tối ưu chiến dịch để nâng cao hiệu quả truyền thông lâu dài."
    ],
    cta: "Nhận tư vấn",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779272812/MHH03120_jrb0fo.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779272814/MHH03157_wgmqrn.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779272812/MHH03120_jrb0fo.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779272812/NAM06703_ttn2gp.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779272812/MHH02626_u34q3q.webp"
    ]
  },
  {
    id: "quay-chup-event",
    title: "Quay Chụp Event",
    desc: "BBS Media cung cấp dịch vụ quay phim và chụp ảnh sự kiện chuyên nghiệp với phong cách hiện đại, cinematic và giàu cảm xúc nhằm lưu giữ những khoảnh khắc quan trọng một cách chân thực và ấn tượng.",
    includedServices: [
      { name: "Quay Highlight Event", detail: "Sản xuất video highlight chuyên nghiệp với góc quay sáng tạo và màu sắc hiện đại." },
      { name: "Quay Full Chương Trình", detail: "Ghi hình toàn bộ chương trình với hệ thống máy quay chuyên nghiệp." },
      { name: "Chụp Ảnh Sự Kiện", detail: "Lưu giữ các khoảnh khắc nổi bật của chương trình bằng hình ảnh sắc nét và chuyên nghiệp." },
      { name: "Livestream", detail: "Phát sóng trực tiếp sự kiện trên Facebook, YouTube và TikTok với hệ thống livestream hiện đại." },
      { name: "Flycam", detail: "Thực hiện các góc quay toàn cảnh giúp sự kiện trở nên cinematic và hoành tráng hơn." }
    ],
    process: [
      "KHẢO SÁT SỰ KIỆN: Tìm hiểu địa điểm, quy mô và yêu cầu quay chụp của khách hàng trực tiếp hoặc gián tiếp.",
      "LÊN KỊCH BẢN QUAY / SẮP XẾP KẾ HOẠCH RÕ RÀNG: Xây dựng timeline và định hướng hình ảnh phù hợp với chương trình.",
      "GHI HÌNH: Triển khai quay phim và chụp ảnh bằng thiết bị chuyên nghiệp.",
      "EDIT VIDEO & RETOUCH: Dựng video highlight, chỉnh màu cinematic và hoàn thiện hình ảnh.",
      "BÀN GIAO THÀNH PHẨM: Bàn giao video và hình ảnh hoàn chỉnh theo timeline đã thống nhất."
    ],
    cta: "Nhận tư vấn",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779278537/MHH03645_ly0uqx.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779278537/MHH03645_ly0uqx.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779278537/DAT05514_vhthmj.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779278537/MHH03737_mlbco9.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779278537/DSC08589_oev7hp.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779278538/MHH03528_xm1j5k.webp"
    ]
  },
  {
    id: "livestream",
    title: "Livestream",
    desc: "BBS Media triển khai hệ thống livestream chuyên nghiệp dành cho sự kiện, bán hàng và chương trình trực tuyến với nhiều góc máy và chất lượng hình ảnh ổn định. Hỗ trợ đa kênh, đa nền tảng.",
    includedServices: [
      { name: "Livestream Event", detail: "Livestream sự kiện chuyên nghiệp với nhiều góc máy và chất lượng hình ảnh ổn định lên màn led hoặc phát sóng trực tiếp." },
      { name: "Livestream Bán Hàng", detail: "Hỗ trợ livestream bán hàng giúp tăng tương tác và tiếp cận khách hàng hiệu quả hơn." },
      { name: "Multi-Camera Setup", detail: "Hệ thống nhiều máy quay giúp chương trình trực tiếp chuyên nghiệp và linh hoạt hơn." },
      { name: "Streaming Facebook / YouTube / TikTok / Zoom", detail: "Phát sóng trực tiếp đa nền tảng với hệ thống đường truyền ổn định." },
      { name: "Hỗ Trợ Kỹ Thuật", detail: "Đội ngũ kỹ thuật vận hành và xử lý hệ thống trong suốt chương trình livestream." }
    ],
    process: [
      "LẮP ĐẶT HỆ THỐNG: Chuẩn bị máy quay, ánh sáng, âm thanh và hệ thống livestream chuyên nghiệp.",
      "KIỂM TRA TÍN HIỆU / VẬN HÀNH THỬ: Kiểm tra đường truyền, âm thanh và hình ảnh trước khi phát sóng.",
      "TRIỂN KHAI LIVESTREAM: Tiến hành phát sóng trực tiếp và vận hành chương trình.",
      "THEO DÕI & XỬ LÝ KỸ THUẬT: Giám sát hệ thống và xử lý các vấn đề kỹ thuật trong quá trình livestream.",
      "KẾT THÚC & BÀN GIAO: Hoàn thiện chương trình và bàn giao file video livestream đã thực hiện trong chương trình."
    ],
    cta: "Nhận tư vấn",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779280814/DSC07712_cfg3mo.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779280814/DSC07712_cfg3mo.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779280813/DSC07878_vw5fz4.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779280807/DSC07957_wmb46m.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779280806/DSC08165_zmcrfo.webp"
    ]
  },
  {
    id: "quay-chup-wedding",
    title: "Quay Chụp Wedding",
    desc: "BBS Media mang đến dịch vụ quay chụp cưới theo phong cách cảm xúc từ truyền thống tới hiện đại, tập trung vào những khoảnh khắc chân thật và giàu tính nghệ thuật.",
    includedServices: [
      { name: "Wedding Highlight", detail: "Sản xuất video cưới cinematic với phong cách hiện đại và cảm xúc, giúp lưu giữ những khoảnh khắc đẹp nhất trong ngày trọng đại của cặp đôi. Từ ngày ăn hỏi tới ngày cưới, quay phim nhà BBS sẽ luôn sẵn sàng hỗ trợ cho bạn." },
      { name: "Phóng Sự Cưới", detail: "Ghi lại toàn bộ diễn biến và cảm xúc chân thật trong lễ cưới theo phong cách documentary tự nhiên và giàu cảm xúc." },
      { name: "Chụp Ảnh Cưới", detail: "Thực hiện bộ ảnh cưới theo concept riêng với phong cách hiện đại, lãng mạn và phù hợp với cá tính của cặp đôi." },
      { name: "Flycam Wedding", detail: "Sử dụng flycam để tạo nên những góc quay toàn cảnh cinematic giúp video cưới trở nên nghệ thuật và ấn tượng hơn." },
      { name: "Livestream Tiệc Cưới", detail: "Hỗ trợ livestream lễ cưới chuyên nghiệp dành cho khách mời không thể tham dự trực tiếp với hệ thống hình ảnh ổn định và sắc nét." }
    ],
    process: [
      "TƯ VẤN CONCEPT: Trao đổi phong cách quay chụp và ý tưởng phù hợp với cặp đôi.",
      "LÊN TIMELINE: Sắp xếp timeline quay chụp cho ngày cưới.",
      "GHI HÌNH & CHỤP ẢNH: Thực hiện quay phim và chụp ảnh với ekip chuyên nghiệp.",
      "HẬU KỲ: Dựng phim cưới, chỉnh màu và hoàn thiện hình ảnh.",
      "BÀN GIAO THÀNH PHẨM: Bàn giao video cưới và album hoàn chỉnh cho khách hàng."
    ],
    cta: "Nhận tư vấn",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779281089/IMG_6500_ch5ism.jpg",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779281089/IMG_6500_ch5ism.jpg",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779281089/IMG_6519_vwxl8u.jpg",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779281088/IMG_6517_ryvitt.jpg",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779281088/IMG_6516_lkroo7.jpg"
    ]
  },
  {
    id: "quay-chup-san-pham-thuong-hieu",
    title: "Quay Chụp Sản Phẩm / Thương Hiệu",
    desc: "BBS Media sản xuất hình ảnh và video sản phẩm chuyên nghiệp phục vụ quảng cáo, social media và xây dựng hình ảnh thương hiệu.",
    includedServices: [
      { name: "Chụp Ảnh Sản Phẩm", detail: "Thực hiện hình ảnh sản phẩm chuyên nghiệp phục vụ quảng cáo, social media và thương mại điện tử với visual hiện đại và sắc nét." },
      { name: "Video Sản Phẩm", detail: "Sản xuất video giới thiệu sản phẩm với góc quay sáng tạo giúp tăng khả năng thu hút và nâng cao giá trị thương hiệu." },
      { name: "Chụp Branding", detail: "Xây dựng hình ảnh sản phẩm theo định hướng branding nhằm tạo sự đồng bộ và chuyên nghiệp cho thương hiệu." },
      { name: "Quay Chụp F&B", detail: "Chủ đề về ẩm thực, đồ uống và hình ảnh ngành F&B." },
      { name: "Chụp Concept", detail: "Thiết kế và thực hiện concept hình ảnh sáng tạo phù hợp với từng sản phẩm và chiến dịch truyền thông." },
      { name: "Commercial Visual", detail: "Sản xuất visual quảng cáo hiện đại phục vụ marketing, social media và các chiến dịch quảng bá thương hiệu." }
    ],
    process: [
      "XÂY DỰNG CONCEPT: Lên ý tưởng hình ảnh phù hợp với sản phẩm và thương hiệu.",
      "SETUP BỐI CẢNH: Chuẩn bị ánh sáng, background và bố cục sản phẩm.",
      "TIẾN HÀNH SHOOTING: Thực hiện quay phim và chụp ảnh bằng thiết bị chuyên nghiệp.",
      "CHỈNH SỬA HÌNH ẢNH / DỰNG VIDEO: Retouch hình ảnh và dựng video sản phẩm.",
      "BÀN GIAO THÀNH PHẨM: Bàn giao hình ảnh và video hoàn chỉnh cho khách hàng."
    ],
    cta: "Nhận tư vấn",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779281466/IMG_9583_u3qz7x.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779281466/IMG_9583_u3qz7x.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779281466/e9ebc2a0ef01265f7f10_i45rzu.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779281467/IMG_1056_g8trqa.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779281466/IMG_0197_u1jnur.webp"
    ]
  },
  {
    id: "studio-sang-tao",
    title: "Studio Sáng Tạo",
    desc: "BBS Media cung cấp không gian studio hiện đại phục vụ chụp ảnh concept, lookbook, sản phẩm và quay video thương mại chuyên nghiệp.",
    includedServices: [
      { name: "Chụp Concept", detail: "Xây dựng và thực hiện các concept hình ảnh sáng tạo phù hợp với thương hiệu, sản phẩm hoặc cá nhân theo phong cách hiện đại và chuyên nghiệp." },
      { name: "Quay Video Studio", detail: "Sản xuất video tại studio với hệ thống ánh sáng và setup chuyên nghiệp phục vụ quảng cáo, social media và branding." },
      { name: "Chụp Lookbook", detail: "Thực hiện lookbook thời trang với bố cục, ánh sáng và visual hiện đại giúp nâng cao hình ảnh thương hiệu." },
      { name: "Setup Ánh Sáng", detail: "Thiết kế hệ thống ánh sáng phù hợp với từng concept nhằm tạo nên chất lượng hình ảnh tốt nhất." },
      { name: "Makeup & Stylist", detail: "Hỗ trợ makeup và stylist giúp hoàn thiện tổng thể hình ảnh trong quá trình quay chụp." }
    ],
    process: [
      "LÊN Ý TƯỞNG: Xây dựng concept và phong cách hình ảnh phù hợp.",
      "CHUẨN BỊ STUDIO: Setup ánh sáng, background và thiết bị quay chụp.",
      "THỰC HIỆN SHOOTING: Tiến hành chụp ảnh và quay video tại studio.",
      "CHỈNH SỬA & RETOUCH: Chỉnh sửa hình ảnh và hoàn thiện video hậu kỳ.",
      "BÀN GIAO THÀNH PHẨM: Bàn giao sản phẩm hoàn chỉnh với chất lượng cao."
    ],
    cta: "Nhận tư vấn",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779289515/C0082.MP4_snapshot_00.00.558_jwwqrs.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779289515/C0082.MP4_snapshot_00.00.558_jwwqrs.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779289515/WAXI5770_iaw1ju.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779289516/IMG_8851_sedb5w.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779289515/IMG_7188_cwfplj.webp"
    ]
  },
  {
    id: "tvc-doanh-nghiep",
    title: "TVC Doanh Nghiệp",
    desc: "BBS Media sản xuất TVC và video doanh nghiệp chuyên nghiệp giúp thương hiệu truyền tải thông điệp một cách sáng tạo và hiệu quả.",
    includedServices: [
      { name: "TVC Thương Hiệu", detail: "Sản xuất TVC giúp doanh nghiệp truyền tải hình ảnh, thông điệp và giá trị thương hiệu một cách chuyên nghiệp và ấn tượng." },
      { name: "TVC Sản Phẩm", detail: "Thực hiện video quảng cáo sản phẩm với visual hiện đại nhằm tăng khả năng thu hút khách hàng và nâng cao giá trị sản phẩm." },
      { name: "Corporate Video", detail: "Sản xuất video giới thiệu doanh nghiệp, văn phòng, quy trình làm việc và văn hóa công ty theo phong cách chuyên nghiệp." },
      { name: "Commercial Video", detail: "Thực hiện video quảng bá phục vụ chiến dịch marketing, social media và truyền thông thương hiệu." },
      { name: "Branding Video", detail: "Xây dựng video nhận diện thương hiệu giúp doanh nghiệp tạo dấu ấn riêng trên nền tảng số." }
    ],
    process: [
      "PHÁT TRIỂN Ý TƯỞNG: Xây dựng concept và định hướng hình ảnh cho TVC.",
      "VIẾT KỊCH BẢN: Lên nội dung chi tiết và storyboard cho video.",
      "TRIỂN KHAI GHI HÌNH: Tiến hành quay TVC với ekip và thiết bị chuyên nghiệp.",
      "HẬU KỲ VIDEO: Dựng phim, chỉnh màu, âm thanh và hiệu ứng hình ảnh.",
      "HOÀN THIỆN & BÀN GIAO: Hoàn thiện và bàn giao TVC cho khách hàng."
    ],
    cta: "Nhận tư vấn",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290665/IMG_0131_e8smzg.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290665/IMG_0131_e8smzg.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290666/IMG_1131_eahvds.jpg",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290646/IMG_9207_jzljjz.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290646/IMG_0343_w5ooct.webp"
    ]
  },
  {
    id: "viral-video-tiktok-reels-content",
    title: "Viral Video / TikTok / Reels Content",
    desc: "BBS Media phát triển nội dung video ngắn theo xu hướng hiện đại nhằm tăng tương tác, nâng cao khả năng lan truyền và nhận diện thương hiệu trên mạng xã hội.",
    includedServices: [
      { name: "Viral Campaign", detail: "Xây dựng chiến dịch video viral theo xu hướng hiện đại giúp tăng tương tác và khả năng lan truyền trên mạng xã hội." },
      { name: "TikTok Content", detail: "Sản xuất nội dung TikTok sáng tạo, bắt trend và phù hợp với định hướng thương hiệu." },
      { name: "Reels Production", detail: "Thực hiện video Reels chuyên nghiệp với phong cách hiện đại và tối ưu khả năng tiếp cận người xem." },
      { name: "Trend Video", detail: "Xây dựng nội dung theo xu hướng mạng xã hội nhằm tăng lượt xem và độ nhận diện thương hiệu." },
      { name: "Social Media Video", detail: "Sản xuất hệ thống video dành cho Facebook, TikTok và Instagram với định hướng hình ảnh đồng bộ." }
    ],
    process: [
      "TREND ANALYSIS: Nghiên cứu trend và hành vi người xem trên mạng xã hội.",
      "CONTENT IDEA: Lên concept nội dung phù hợp với thương hiệu và xu hướng.",
      "SHOOTING: Thực hiện quay video với phong cách hiện đại và sáng tạo.",
      "EDITING: Dựng video ngắn tối ưu cho TikTok, Reels và Shorts.",
      "POSTING SUPPORT: Hỗ trợ định hướng đăng tải và phát triển nội dung trên social media."
    ],
    cta: "Nhận tư vấn",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290708/487510392_3253901588083131_4457287277890233134_n_qe7uoh.jpg",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290708/487510392_3253901588083131_4457287277890233134_n_qe7uoh.jpg",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290707/IMG_7351_vm2mov.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290708/DAT08919_cjbemj.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290709/IMG_6062_noqs93.jpg"
    ]
  },
  {
    id: "san-xuat-video-ai",
    title: "Sản Xuất Video AI",
    desc: "BBS Media ứng dụng công nghệ AI trong sản xuất video sáng tạo giúp tối ưu chi phí, thời gian và tạo nên những nội dung hình ảnh hiện đại, khác biệt.",
    includedServices: [
      { name: "AI Video Content", detail: "Ứng dụng công nghệ AI để sản xuất video sáng tạo với phong cách hiện đại và tối ưu thời gian thực hiện. Từ truyền thông tới giáo dục, hướng dẫn, vận hành kỹ thuật." },
      { name: "AI Commercial Video", detail: "Thực hiện video quảng cáo bằng AI giúp tạo nên visual độc đáo và khác biệt cho thương hiệu." },
      { name: "AI Visual Concept", detail: "Xây dựng concept hình ảnh bằng công nghệ AI phù hợp với định hướng truyền thông hiện đại." },
      { name: "AI Animation", detail: "Sản xuất animation và motion graphic bằng AI với phong cách sáng tạo và futuristic." },
      { name: "AI Social Media Content", detail: "Tạo nội dung AI dành cho TikTok, Reels và social media nhằm nâng cao khả năng thu hút người xem." }
    ],
    process: [
      "PHÁT TRIỂN Ý TƯỞNG: Xây dựng concept video phù hợp với định hướng thương hiệu.",
      "TẠO NỘI DUNG AI: Ứng dụng AI để tạo hình ảnh, animation và video sáng tạo.",
      "XỬ LÝ VISUAL: Tinh chỉnh hình ảnh và hiệu ứng bằng công nghệ AI hiện đại.",
      "HẬU KỲ VIDEO: Dựng video, chỉnh âm thanh và hoàn thiện nội dung.",
      "BÀN GIAO THÀNH PHẨM: Bàn giao video hoàn chỉnh theo yêu cầu khách hàng."
    ],
    cta: "Nhận tư vấn",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290916/%C4%90%E1%BB%81n_C%E1%BB%ADa_T%C3%A2y.mp4_snapshot_00.21.556_oiyya7.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290916/%C4%90%E1%BB%81n_C%E1%BB%ADa_T%C3%A2y.mp4_snapshot_00.21.556_oiyya7.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290915/B%C3%A1nh_Tr%C3%A1ng_tr%E1%BB%99n.mp4_snapshot_00.26.092_sd1rjg.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290915/T%E1%BA%A5m_C%C3%A1m_01.mp4_snapshot_01.30.000_cltnb4.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290917/Video_04.mp4_snapshot_00.25.940_1_scu436.jpg"
    ]
  }
];

export const SERVICES_EN: Service[] = [
  {
    id: "tu-van-truyen-thong",
    title: "Media Consulting",
    desc: "BBS Media provides comprehensive media consulting solutions: brand strategy development, content planning, and corporate image management across digital platforms.",
    includedServices: [
      { name: "Brand Strategy Development", detail: "Analyze the brand and build a communication direction aligned with business growth goals." },
      { name: "Image and Communication Style Orientation", detail: "Establish visual styles, colors, and content to create a professional and cohesive presence across platforms." },
      { name: "Social Media Content Planning", detail: "Develop content plans for Facebook, TikTok, and Instagram to increase engagement and customer reach." },
      { name: "Facebook & TikTok Ads Implementation", detail: "Support the execution of ad campaigns to boost brand awareness and effectively reach potential customers." },
      { name: "Modern Video Concept and Content Creation", detail: "Develop modern video ideas and concepts tailored to the brand and social media trends." }
    ],
    process: ["Brand survey & analysis", "Communication strategy", "Content deployment", "Measurement & optimization"],
    cta: "Get free consultation",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779272812/MHH03120_jrb0fo.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779272814/MHH03157_wgmqrn.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779272812/MHH03120_jrb0fo.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779272812/NAM06703_ttn2gp.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779272812/MHH02626_u34q3q.webp"
    ]
  },
  {
    id: "quay-chup-event",
    title: "Event Videography",
    desc: "Professional filming team with modern equipment, ensuring every important moment of your event is captured: conferences, launches, team building, gala dinners.",
    includedServices: [
      { name: "Event Highlight Video", detail: "Produce professional highlight videos with creative angles and modern grading." },
      { name: "Full Event Recording", detail: "Record the entire program with a professional camera system." },
      { name: "Event Photography", detail: "Preserve the outstanding moments of the program with sharp and professional images." },
      { name: "Livestream", detail: "Broadcast the event live on Facebook, YouTube, and TikTok using a modern livestream system." },
      { name: "Drone/Flycam", detail: "Execute panoramic aerial shots to make the event more cinematic and grand." }
    ],
    process: ["Event script discussion", "Equipment & staff preparation", "Live filming", "Post-production & delivery"],
    cta: "Get event filming quote",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779278537/MHH03645_ly0uqx.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779278537/MHH03645_ly0uqx.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779278537/DAT05514_vhthmj.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779278537/MHH03737_mlbco9.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779278537/DSC08589_oev7hp.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779278538/MHH03528_xm1j5k.webp"
    ]
  },
  {
    id: "livestream",
    title: "Livestream",
    desc: "Professional livestream service with multi-camera, high-quality audio, real-time graphics overlay. Suitable for events, product launches and online sales.",
    includedServices: [
      { name: "Event Livestream", detail: "Professional event livestreaming with multi-cam setups and stable image quality on LED screens or direct broadcasts." },
      { name: "Sales Livestream", detail: "Support sales livestreaming to increase engagement and effectively reach customers." },
      { name: "Multi-Camera Setup", detail: "A multi-camera system to make live programs more professional and flexible." },
      { name: "Streaming on Facebook / YouTube / TikTok / Zoom", detail: "Multi-platform live broadcasting with stable internet connections." },
      { name: "Technical Support", detail: "Technical team to operate and troubleshoot the system throughout the livestream program." }
    ],
    process: ["Survey & planning", "Multi-cam equipment setup", "Live streaming", "Storage & highlights"],
    cta: "Book livestream",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779280814/DSC07712_cfg3mo.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779280814/DSC07712_cfg3mo.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779280813/DSC07878_vw5fz4.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779280807/DSC07957_wmb46m.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779280806/DSC08165_zmcrfo.webp"
    ]
  },
  {
    id: "quay-chup-wedding",
    title: "Wedding Cinematic",
    desc: "Preserve the most beautiful moments of your big day. BBS Media brings a cinematic, natural and emotionally rich wedding filming style.",
    includedServices: [
      { name: "Wedding Highlight", detail: "Produce cinematic wedding videos with a modern and emotional style, capturing the best moments of the couple's big day." },
      { name: "Wedding Documentary", detail: "Record the authentic progression and emotions of the wedding ceremony in a natural documentary style." },
      { name: "Wedding Photography", detail: "Capture a custom concept wedding photoshoot featuring a modern, romantic style suited to the couple's personality." },
      { name: "Drone Wedding Video", detail: "Use flycams to capture cinematic panoramic views, making the wedding video more artistic and impressive." },
      { name: "Wedding Party Livestream", detail: "Support professional wedding livestreams with stable, clear visuals for guests unable to attend in person." }
    ],
    process: ["Concept & timeline consultation", "Location scouting", "Professional filming", "Editing & album/video delivery"],
    cta: "Book wedding filming",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779281089/IMG_6500_ch5ism.jpg",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779281089/IMG_6500_ch5ism.jpg",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779281089/IMG_6519_vwxl8u.jpg",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779281088/IMG_6517_ryvitt.jpg",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779281088/IMG_6516_lkroo7.jpg"
    ]
  },
  {
    id: "quay-chup-san-pham-thuong-hieu",
    title: "Product / Brand Media",
    desc: "Professional product and brand photography & videography for e-commerce, catalogues and advertising. Elevating your product's value with high-quality media.",
    includedServices: [
      { name: "Product Photography", detail: "Create professional product images for advertising, social media, and e-commerce featuring modern, sharp visuals." },
      { name: "Product Videos", detail: "Produce product introduction videos using creative angles to enhance appeal and elevate brand value." },
      { name: "Brand Photography", detail: "Build product imagery aligned with brand guidelines to create a cohesive, professional identity." },
      { name: "F&B Photography/Videography", detail: "Capture food, beverages, and visual assets for the F&B industry." },
      { name: "Concept Photography", detail: "Design and execute creative visual concepts tailored to specific products and media campaigns." },
      { name: "Commercial Visuals", detail: "Produce modern advertising visuals for marketing, social media, and brand promotion campaigns." }
    ],
    process: ["Requirements & style discussion", "Setup scene & lighting", "Photography/Filming session", "Retouching & delivery"],
    cta: "Get media quote",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779281466/IMG_9583_u3qz7x.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779281466/IMG_9583_u3qz7x.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779281466/e9ebc2a0ef01265f7f10_i45rzu.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779281467/IMG_1056_g8trqa.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779281466/IMG_0197_u1jnur.webp"
    ]
  },
  {
    id: "studio-sang-tao",
    title: "Creative Studio",
    desc: "BBS Media's professional studio serves lookbook photography, profile shots, product photography and creative content production. Modern space with full lighting.",
    includedServices: [
      { name: "Concept Photography", detail: "Develop and execute creative visual concepts tailored to brands, products, or individuals in a modern, professional style." },
      { name: "Studio Video Production", detail: "Produce videos at the studio with professional lighting and setups for advertising, social media, and branding." },
      { name: "Lookbook Photography", detail: "Shoot fashion lookbooks using modern composition, lighting, and visuals to enhance brand image." },
      { name: "Lighting Setup", detail: "Design lighting systems customized for each concept to ensure optimal image quality." },
      { name: "Makeup & Styling", detail: "Provide makeup and styling support to perfect the overall look during the photoshoot or video recording." }
    ],
    process: ["Idea exchange & mood board", "Studio & lighting setup", "Shooting/filming", "Retouching & delivery"],
    cta: "Book studio session",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779289515/C0082.MP4_snapshot_00.00.558_jwwqrs.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779289515/C0082.MP4_snapshot_00.00.558_jwwqrs.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779289515/WAXI5770_iaw1ju.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779289516/IMG_8851_sedb5w.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779289515/IMG_7188_cwfplj.webp"
    ]
  },
  {
    id: "tvc-doanh-nghiep",
    title: "Corporate TVC",
    desc: "Producing advertising TVCs, corporate introduction films, and documentaries with cinematic image quality. From scripts, casting to filming.",
    includedServices: [
      { name: "Brand TVC", detail: "Produce TVCs that help businesses convey their brand image, message, and value professionally and impressively." },
      { name: "Product TVC", detail: "Create product advertising videos featuring modern visuals to attract customers and enhance product value." },
      { name: "Corporate Video", detail: "Produce introduction videos showcasing the company, office, workflow, and corporate culture in a professional style." },
      { name: "Commercial Video", detail: "Create promotional videos designed for marketing campaigns, social media, and brand communications." },
      { name: "Branding Video", detail: "Develop brand identity videos to help businesses establish a unique presence across digital platforms." }
    ],
    process: ["Script & storyboard", "Casting & pre-production", "Professional filming", "Editing, VFX & color grading"],
    cta: "Get TVC quote",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290665/IMG_0131_e8smzg.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290665/IMG_0131_e8smzg.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290666/IMG_1131_eahvds.jpg",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290646/IMG_9207_jzljjz.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290646/IMG_0343_w5ooct.webp"
    ]
  },
  {
    id: "viral-video-tiktok-reels-content",
    title: "Viral Video / TikTok / Reels",
    desc: "Producing powerful short-form content specifically for TikTok, Instagram Reels and YouTube Shorts. Optimized for platform algorithms and user engagement.",
    includedServices: [
      { name: "Viral Campaigns", detail: "Build viral video campaigns aligned with modern trends to increase engagement and shareability on social media." },
      { name: "TikTok Content", detail: "Produce creative, trend-catching TikTok content that fits the brand's direction." },
      { name: "Reels Production", detail: "Create professional Reels videos with a modern style, optimized to reach viewers effectively." },
      { name: "Trend Videos", detail: "Develop content based on social media trends to boost views and brand awareness." },
      { name: "Social Media Videos", detail: "Produce a unified visual video system designed for Facebook, TikTok, and Instagram." }
    ],
    process: ["Trend-based ideation", "Short content script", "Vertical filming & editing", "Optimization & distribution"],
    cta: "Get short content consultation",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290708/487510392_3253901588083131_4457287277890233134_n_qe7uoh.jpg",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290708/487510392_3253901588083131_4457287277890233134_n_qe7uoh.jpg",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290707/IMG_7351_vm2mov.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290708/DAT08919_cjbemj.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290709/IMG_6062_noqs93.jpg"
    ]
  },
  {
    id: "san-xuat-video-ai",
    title: "AI Video Production",
    desc: "Applying advanced AI technology for automated, impressive, and cost-effective video production. A modern solution helping businesses breakthrough in digital content.",
    includedServices: [
      { name: "AI Video Content", detail: "Use AI technology to produce creative videos with modern styles and optimized timelines, spanning communications, education, tutorials, and technical operations." },
      { name: "AI Commercial Videos", detail: "Create advertising videos using AI to deliver unique and distinctive visuals for the brand." },
      { name: "AI Visual Concepts", detail: "Develop visual concepts using AI technology that align with modern communication strategies." },
      { name: "AI Animation", detail: "Produce AI-driven animations and motion graphics with creative, futuristic aesthetics." },
      { name: "AI Social Media Content", detail: "Generate AI content for TikTok, Reels, and other platforms to enhance viewer engagement." }
    ],
    process: ["Script & concept building", "AI model configuration", "Image/Video generation & rendering", "Post-production & pro audio mixing"],
    cta: "Experience AI services",
    images: [
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290916/%C4%90%E1%BB%81n_C%E1%BB%ADa_T%C3%A2y.mp4_snapshot_00.21.556_oiyya7.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290916/%C4%90%E1%BB%81n_C%E1%BB%ADa_T%C3%A2y.mp4_snapshot_00.21.556_oiyya7.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290915/B%C3%A1nh_Tr%C3%A1ng_tr%E1%BB%99n.mp4_snapshot_00.26.092_sd1rjg.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290915/T%E1%BA%A5m_C%C3%A1m_01.mp4_snapshot_01.30.000_cltnb4.webp",
      "https://res.cloudinary.com/dss1zawkj/image/upload/q_auto/f_auto/v1779290917/Video_04.mp4_snapshot_00.25.940_1_scu436.jpg"
    ]
  }
];
