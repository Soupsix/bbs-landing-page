"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

// ─── Video Data ────────────────────────────────────────────────────────────────
// Replace the `youtubeEmbedUrl` and `thumbnail` values once you have the real links.
const featuredVideos = [
  {
    id: "video-01",
    title: "Recap Hành trình bất tử",
    category: "Event Recap",
    thumbnail: "https://img.youtube.com/vi/Rsb4py8Bsqg/hqdefault.jpg",
    youtubeEmbedUrl: "https://www.youtube.com/embed/Rsb4py8Bsqg",
  },
  {
    id: "video-02",
    title: "Khai trương VINFAST Lê Trọng Tấn - Hà Đông",
    category: "Event Production",
    thumbnail: "https://img.youtube.com/vi/Ji3WJDQMD2k/hqdefault.jpg",
    youtubeEmbedUrl: "https://www.youtube.com/embed/Ji3WJDQMD2k",
  },
  {
    id: "video-03",
    title: "KHAI TRƯƠNG VĂN PHÒNG XWORLD",
    category: "Event Production",
    thumbnail: "https://img.youtube.com/vi/19OiVzEqcnM/hqdefault.jpg",
    youtubeEmbedUrl: "https://www.youtube.com/embed/19OiVzEqcnM",
  },
  {
    id: "video-04",
    title: "Khai trương cơ sở Domino Pizza",
    category: "Event Production",
    thumbnail: "https://img.youtube.com/vi/1by2mo5Fxjc/hqdefault.jpg",
    youtubeEmbedUrl: "https://www.youtube.com/embed/1by2mo5Fxjc",
  },
  {
    id: "video-05",
    title: "TVC CONG TY IN THANH BINH 4K",
    category: "TVC",
    thumbnail: "https://img.youtube.com/vi/3i4aKBhNPrU/hqdefault.jpg",
    youtubeEmbedUrl: "https://www.youtube.com/embed/3i4aKBhNPrU",
  },
  {
    id: "video-06",
    title: "Mộng K12_QLVH NUAE",
    category: "Creative Production",
    thumbnail: "https://img.youtube.com/vi/M3Rvs8SvUl8/hqdefault.jpg",
    youtubeEmbedUrl: "https://www.youtube.com/embed/M3Rvs8SvUl8",
  },
  {
    id: "video-07",
    title: "PSC Minh Tâm & Thái Bình",
    category: "Wedding Film",
    thumbnail: "https://img.youtube.com/vi/NIwvQ6ZQt6Q/hqdefault.jpg",
    youtubeEmbedUrl: "https://www.youtube.com/embed/NIwvQ6ZQt6Q",
  },
  {
    id: "video-08",
    title: "PSC Viet Anh - Ha Phuong",
    category: "Wedding Film",
    thumbnail: "https://img.youtube.com/vi/dBMQzZiw5U4/hqdefault.jpg",
    youtubeEmbedUrl: "https://www.youtube.com/embed/dBMQzZiw5U4",
  },
] as const;

type FeaturedVideo = (typeof featuredVideos)[number];

// ─── Play Button (mirrors VideoShowcase glassmorphism style exactly) ────────────
function PlayButton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-14 h-14 md:w-18 md:h-18 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/35 shadow-[0_12px_40px_0_rgba(255,255,255,0.22)] ring-8 ring-white/10 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-white/30 ${className}`}
    >
      <Play className="w-5 h-5 md:w-6 md:h-6 text-white ml-1 drop-shadow-md" fill="currentColor" />
    </div>
  );
}

// ─── Video Card ────────────────────────────────────────────────────────────────
function VideoCard({
  video,
  onOpen,
}: {
  video: FeaturedVideo;
  onOpen: (v: FeaturedVideo) => void;
}) {
  return (
    <div
      className="group relative cursor-pointer rounded-2xl overflow-hidden border border-gray-100 bg-deep-navy shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-16px_rgba(16,24,39,0.35)]"
      onClick={() => onOpen(video)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(video)}
      aria-label={`Phát video: ${video.title}`}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-black/30 transition-all duration-500 group-hover:bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Category tag */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center bg-bbs-blue/90 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
            {video.category}
          </span>
        </div>

        {/* Play Button — same glassmorphism as VideoShowcase */}
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayButton />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 py-3 bg-white">
        <h3 className="text-sm font-bold text-deep-navy leading-snug line-clamp-2">
          {video.title}
        </h3>
      </div>
    </div>
  );
}

// ─── Modal ─────────────────────────────────────────────────────────────────────
function VideoModal({
  video,
  onClose,
}: {
  video: FeaturedVideo | null;
  onClose: () => void;
}) {
  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
          aria-label="Đóng video"
        >
          <X className="w-4 h-4" />
        </button>

        {/* iframe embed */}
        <div className="aspect-video">
          <iframe
            src={`${video.youtubeEmbedUrl}?autoplay=1&modestbranding=1&rel=0`}
            title={video.title}
            className="w-full h-full border-0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Modal footer */}
        <div className="px-5 py-3 bg-deep-navy">
          <p className="text-white font-semibold text-sm">{video.title}</p>
          <p className="text-bbs-blue text-xs mt-0.5">{video.category}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────────
export function FeaturedProducts() {
  const [activeVideo, setActiveVideo] = useState<FeaturedVideo | null>(null);

  return (
    <>
      <section
        id="san-pham-noi-bat"
        className="py-16 md:py-24 bg-gradient-to-b from-white via-sky-50/40 to-white relative overflow-hidden"
      >
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-bbs-blue/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-bbs-blue/5 blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ── Section Header ── */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-bbs-blue/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-bbs-blue mb-5">
              Sản phẩm nổi bật
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.12] tracking-tight text-deep-navy mb-5 [text-wrap:balance]">
              Chất lượng sản phẩm luôn là tiêu chí{" "}
              <span className="text-bbs-blue">hàng đầu</span> của BBS MEDIA
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
              BBS Media mang đến giải pháp truyền thông hình ảnh hiện đại dành cho doanh
              nghiệp và thương hiệu thông qua dịch vụ Media, Event và Creative Production.
            </p>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed mt-3">
              Chúng tôi tập trung vào việc xây dựng hình ảnh chuyên nghiệp, sản xuất nội
              dung sáng tạo và triển khai các dự án truyền thông theo phong cách cinematic
              hiện đại.
            </p>
          </div>

          {/* ── Video Grid ── */}
          {/* mobile: 1 col | tablet: 2 col | desktop: 4 col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
            {featuredVideos.map((video) => (
              <VideoCard key={video.id} video={video} onOpen={setActiveVideo} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal (portal-like, outside section) ── */}
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  );
}
