"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const videoId = "OmV4zmJCG3s";

export function VideoShowcase() {
  const [playVideo, setPlayVideo] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Cinematic Thumbnail Card / Inline Video */}
        <div
          className={`group relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-700 ${!playVideo ? 'cursor-pointer hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)]' : ''}`}
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
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 transition-all duration-500 group-hover:bg-black/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

              {/* Play Button - Glassmorphism */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_8px_32px_0_rgba(255,255,255,0.2)] transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-white/30">
                  <Play className="w-8 h-8 md:w-12 md:h-12 text-white ml-2 drop-shadow-md" fill="currentColor" />
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
    </section>
  );
}
