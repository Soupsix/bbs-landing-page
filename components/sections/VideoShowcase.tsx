"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { useLanguage } from "@/components/contexts/LanguageContext";

const videoId = "OmV4zmJCG3s";

const CONTENT = {
    vi: {
    heading1: "BBS Media mang đến giải pháp truyền thông hình ảnh hiện đại",
    heading2: "dành cho doanh nghiệp và thương hiệu.",
    description: "Thông qua dịch vụ Media, Event và Creative Production.\nChúng tôi tập trung vào việc xây dựng hình ảnh chuyên nghiệp, sản xuất nội dung sáng tạo và triển khai các dự án truyền thông theo phong cách cinematic hiện đại.",
  },
  en: {
    heading1: "BBS Media operates in the fields of",
    heading2: "Media, Event, and Creative Production.",
    description: "We provide modern visual and communication solutions\nfor businesses, brands, and individuals.",
  },
};

export function VideoShowcase() {
  const { lang } = useLanguage();
  const t = CONTENT[lang];

  const [playVideo, setPlayVideo] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bbs-blue/5 to-transparent pointer-events-none" />
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">

          {/* Content Left */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-bbs-blue/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-bbs-blue mb-5">
              Media • Event • Creative Production
            </div>
            <h2 className="max-w-2xl text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-gray-900 mb-5 lg:mb-6 [text-wrap:balance]">
              {t.heading1}
              <span className="text-bbs-blue block mt-2">{t.heading2}</span>
            </h2>
            <p className="max-w-xl text-base text-gray-600 leading-relaxed whitespace-pre-line">
              {t.description}
            </p>
          </div>

          {/* Video Right */}
          <div
            className={`lg:col-span-7 xl:col-span-7 group relative w-full aspect-video rounded-[28px] overflow-hidden border border-black/5 bg-deep-navy shadow-[0_28px_70px_-24px_rgba(16,24,39,0.55)] transition-all duration-700 ${!playVideo ? 'cursor-pointer hover:-translate-y-1 hover:shadow-[0_36px_90px_-28px_rgba(16,24,39,0.7)]' : ''}`}
            onClick={() => !playVideo && setPlayVideo(true)}
          >
            {!playVideo ? (
              <>
                {/* Thumbnail */}
                <Image
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="BBS Media Showcase"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />

                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/25 transition-all duration-500 group-hover:bg-black/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-90" />
                <div className="absolute left-5 bottom-5 right-5 hidden md:block">
                  <p className="text-white text-sm font-semibold tracking-wide drop-shadow-md">BBS Media Showcase</p>
                  <p className="text-white/70 text-xs mt-1">Cinematic visual production for brands & events</p>
                </div>

                {/* Play Button - Glassmorphism */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/35 shadow-[0_12px_40px_0_rgba(255,255,255,0.22)] ring-8 ring-white/10 transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-white/30">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1 drop-shadow-md" fill="currentColor" />
                  </div>
                </div>
              </>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0 absolute inset-0 bg-black"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
