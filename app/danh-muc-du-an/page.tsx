"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { CATEGORIES, Category, Project, PROJECTS } from "./data";
import { LayoutGrid, X, Eye, ChevronRight } from "lucide-react";

export default function ProjectsPage() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  /* Lock body scroll when modal is open */
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  /* Close on Escape */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    },
    []
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const filteredProjects =
    activeCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-white min-h-screen pb-20">

      {/* ═══════ PAGE HEADER ═══════ */}
      <section className="relative pt-32 pb-16 md:pb-20 overflow-hidden bg-[#101827] text-white">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#27abde]/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#d81e25]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20 backdrop-blur-md uppercase tracking-wider">
              <LayoutGrid className="w-4 h-4" />
              Danh Mục Dự Án
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight uppercase">
              Dự Án Tiêu Biểu
            </h1>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              BBS Media mang đến những dự án hình ảnh và video được đầu tư chỉn chu về ý tưởng, hình ảnh và cảm xúc nhằm tạo nên trải nghiệm truyền thông chuyên nghiệp cho doanh nghiệp và thương hiệu.
            </p>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto mt-4">
              Chúng tôi tập trung vào phong cách cinematic hiện đại, visual sáng tạo và chất lượng sản xuất cao trong từng dự án.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ FILTER CATEGORIES ═══════ */}
      <section className="py-8 md:py-10 bg-white border-b border-gray-100 sticky top-[80px] z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-[#27abde] text-white shadow-md shadow-[#27abde]/20 scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-[#101827]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ MASONRY GRID ═══════ */}
      <section className="pt-12 pb-24 bg-gradient-to-b from-white to-[#f8fafc]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative w-full overflow-hidden rounded-2xl bg-gray-100 break-inside-avoid cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className={`relative w-full ${project.aspectRatio}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Cinematic overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101827]/90 via-[#101827]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 bg-[#d81e25] text-white text-xs font-bold uppercase rounded-md mb-3 tracking-wider">
                        {CATEGORIES.find((c) => c.key === project.category)?.label ?? project.category}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1 line-clamp-2">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-gray-400 text-xs mb-2">{project.subtitle}</p>
                      )}
                      <p className="text-gray-300 text-sm line-clamp-2 mb-4">
                        {project.scaleOrType}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[#27abde] text-sm font-semibold">
                        <Eye className="w-4 h-4" />
                        Xem chi tiết
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                Chưa có dự án nào trong danh mục này.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════ PROJECT DETAIL MODAL ═══════ */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedProject(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Modal container */}
          <div
            className="relative z-10 w-full max-w-6xl max-h-[90vh] bg-[#101827] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">

                {/* ── Left column: Project info ── */}
                <div className="lg:col-span-2 p-6 md:p-8 lg:p-10 flex flex-col gap-6 relative">
                  {/* Subtle glow */}
                  <div className="absolute top-0 left-0 w-48 h-48 bg-[#27abde]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

                  <div className="relative z-10">
                    {/* Category badge */}
                    <span className="inline-block px-3 py-1 rounded-full bg-[#d81e25]/20 text-[#d81e25] border border-[#d81e25]/30 text-xs font-bold uppercase tracking-widest mb-4">
                      {CATEGORIES.find((c) => c.key === selectedProject.category)?.label ?? selectedProject.category}
                    </span>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2">
                      {selectedProject.title}
                    </h2>

                    {/* Subtitle */}
                    {selectedProject.subtitle && (
                      <p className="text-[#27abde] text-sm font-medium mb-4">
                        {selectedProject.subtitle}
                      </p>
                    )}

                    <div className="w-12 h-1 bg-gradient-to-r from-[#d81e25] to-[#27abde] rounded-full mb-6" />

                    {/* Info blocks */}
                    <div className="space-y-5">
                      {/* Scale/Type */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#27abde] mb-1.5">
                          Quy mô / Đặc thù
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {selectedProject.scaleOrType}
                        </p>
                      </div>

                      {/* Capability */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#27abde] mb-1.5">
                          Năng lực triển khai
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {selectedProject.capability}
                        </p>
                      </div>

                      {/* Result */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#27abde] mb-1.5">
                          Kết quả
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {selectedProject.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Right column: Gallery ── */}
                <div className="lg:col-span-3 p-4 md:p-6 lg:p-8 bg-white/5 border-t lg:border-t-0 lg:border-l border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">
                    Hình ảnh dự án
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden group/img bg-white/5"
                      >
                        <Image
                          src={img}
                          alt={`${selectedProject.title} - Ảnh ${idx + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        {/* Overlay with number */}
                        <div className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold">{String(idx + 1).padStart(2, "0")}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
