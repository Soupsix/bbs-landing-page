"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  category: string;
  catColor: string;
  images?: string[];
  href?: string;
}

export function ServiceCard({
  title,
  description,
  category,
  catColor,
  images = [],
  href = "#contact",
}: ServiceCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasImages = images.length > 0;
  const displayImages = images.slice(0, 4);
  const extraCount = images.length > 4 ? images.length - 4 : 0;
  const isEventCategory = category === "Tổ chức Sự kiện";

  const openLightbox = (index: number) => {
    if (!hasImages) return;
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, prev, next]);

  return (
    <>
      <div className="bg-white rounded-[24px] h-full min-h-[400px] shadow-sm border border-border-gray hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group">
        {/* ===== Image Grid ===== */}
        {hasImages ? (
          <div
            className="grid grid-cols-2 gap-1 p-2 cursor-zoom-in"
            onClick={() => openLightbox(0)}
          >
            {displayImages.map((src, idx) => (
              <div
                key={idx}
                className="relative aspect-square overflow-hidden rounded-lg bg-gray-100"
              >
                <Image
                  src={src}
                  alt={`${title} ảnh ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 17vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* "+X" overlay on last cell when there are more images */}
                {idx === 3 && extraCount > 0 && (
                  <div className="absolute inset-0 bg-black/55 flex items-center justify-center rounded-lg">
                    <span className="text-white text-2xl font-bold">+{extraCount}</span>
                  </div>
                )}
              </div>
            ))}
            {/* Fill empty cells if < 4 images */}
            {Array.from({ length: Math.max(0, 4 - displayImages.length) }).map(
              (_, idx) => (
                <div
                  key={`ph-${idx}`}
                  className="aspect-square bg-gray-100 rounded-lg"
                />
              )
            )}
          </div>
        ) : (
          /* Fallback placeholder when no images provided */
          <div className="grid grid-cols-2 gap-1 p-2">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center"
              >
                <ImageIcon className="w-8 h-8 text-gray-200" />
              </div>
            ))}
          </div>
        )}

        {/* ===== Badge ===== */}
        <div className="px-5 pt-2">
          <span
            className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${catColor}`}
          >
            {category}
          </span>
        </div>

        {/* ===== Content ===== */}
        <div className="p-5 pt-3 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-deep-navy mb-2 leading-snug">
            {title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">
            {description}
          </p>
          <Link
            href={href}
            className={`inline-flex items-center text-sm font-semibold mt-auto transition-colors ${
              isEventCategory
                ? "text-bbs-red hover:text-red-700"
                : "text-bbs-blue hover:text-blue-700"
            }`}
          >
            Nhận tư vấn ngay
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </div>

      {/* ===== Lightbox Modal ===== */}
      {lightboxOpen && hasImages && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              aria-label="Đóng"
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Main image */}
            <div className="relative w-full overflow-hidden rounded-xl bg-black/40"
              style={{ aspectRatio: "16/9" }}>
              <Image
                src={images[currentIndex]}
                alt={`${title} - ${currentIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain transition-opacity duration-300"
              />
            </div>

            {/* Prev / Next */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Ảnh trước"
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/35 text-white rounded-full p-2.5 transition-all duration-200 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Ảnh tiếp"
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/35 text-white rounded-full p-2.5 transition-all duration-200 backdrop-blur-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Counter */}
            <p className="text-center text-white/50 text-sm mt-3">
              {currentIndex + 1} / {images.length}
            </p>

            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-3 justify-center overflow-x-auto pb-1">
              {images.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    idx === currentIndex
                      ? "border-bbs-blue scale-105"
                      : "border-transparent opacity-50 hover:opacity-90"
                  }`}
                >
                  <Image src={src} alt="" fill sizes="56px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
