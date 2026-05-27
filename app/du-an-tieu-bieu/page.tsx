"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project, PROJECT_GROUPS, PROJECTS, CATEGORIES } from "./data";
import { getOptimizedCloudinaryUrl, CLOUDINARY_WIDTHS } from "@/lib/cloudinary";
import { LayoutGrid, X, Eye, ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  /* Set page title dynamically */
  useEffect(() => {
    document.title = "Dự án tiêu biểu | BBS Media";
  }, []);

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
              Dự Án Tiêu Biểu
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight uppercase">
              DỰ ÁN TIÊU BIỂU
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

      {/* ═══════ PROJECT SHOWCASE BY GROUPS ═══════ */}
      <div className="w-full">
        {PROJECT_GROUPS.map((group, groupIdx) => {
          const bgSectionClass = groupIdx % 2 === 0 ? "bg-white" : "bg-[#f8fafc]";
          return (
            <section
              key={group.id}
              className={`py-16 md:py-24 border-b border-gray-100 last:border-0 ${bgSectionClass}`}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                {/* ── Light editorial Category Heading ── */}
                <div className="mb-14 text-left relative z-10">
                  <span className="inline-flex rounded-full bg-[#27abde]/10 text-[#27abde] border border-[#27abde]/20 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] mb-3.5">
                    Danh mục dự án
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#101827] uppercase tracking-wide">
                    {group.label}
                  </h2>
                  <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#27abde] to-[#d81e25] mt-3.5" />
                </div>

                {/* ── Project List inside Group ── */}
                <div className="space-y-20 md:space-y-28">
                  {group.projects.map((project) => {
                    const flatIdx = PROJECTS.findIndex((p) => p.id === project.id);
                    const globalNumber = String(flatIdx + 1).padStart(2, "0");
                    const previewImages = project.images.slice(0, 5);

                    return (
                      <div
                        key={project.id}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
                      >

                        {/* Left column: Text details */}
                        <div className="lg:col-span-5 flex flex-col gap-5 relative">
                          <div className="flex flex-col md:flex-row md:items-end gap-3 md:gap-4 mb-1">
                            <span className="text-5xl md:text-6xl font-black text-[#101827] leading-none select-none shrink-0 inline-block">
                              {globalNumber}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#101827] uppercase tracking-wide">
                              {project.title}
                            </h3>
                          </div>

                          {project.subtitle && (
                            <p className="text-[#27abde] font-semibold text-base md:text-lg -mt-2">
                              {project.subtitle}
                            </p>
                          )}

                          <div className="w-16 h-1 bg-gradient-to-r from-[#d81e25] to-[#27abde] rounded-full my-1" />

                          <div className="space-y-5">
                            {/* Scale or Type */}
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-widest text-[#27abde] mb-1">
                                {project.scaleLabel}
                              </h4>
                              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                {project.scaleOrType}
                              </p>
                            </div>

                            {/* Capability */}
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-widest text-[#27abde] mb-1">
                                Năng lực triển khai
                              </h4>
                              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                {project.capability}
                              </p>
                            </div>

                            {/* Result */}
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-widest text-[#27abde] mb-1">
                                Kết quả
                              </h4>
                              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                {project.result}
                              </p>
                            </div>
                          </div>

                          <div className="pt-4">
                            <button
                              onClick={() => setSelectedProject(project)}
                              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold text-white bg-[#101827] hover:bg-[#d81e25] transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto cursor-pointer"
                            >
                              <Eye className="w-4 h-4" />
                              Xem toàn bộ hình ảnh
                            </button>
                          </div>
                        </div>

                        {/* Right column: Gallery Preview */}
                        <div className="lg:col-span-7 flex flex-col gap-4">
                          {/* Top large image */}
                          <div
                            className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-sm group cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                          >
                            <Image
                              src={getOptimizedCloudinaryUrl(previewImages[0], CLOUDINARY_WIDTHS.showcase)}
                              alt={`${project.title} - Main Preview`}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                              sizes="(max-width: 1024px) 100vw, 60vw"
                              loading={flatIdx === 0 ? "eager" : "lazy"}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                          </div>

                          {/* Bottom 4 images grid */}
                          {previewImages.length >= 5 && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              {previewImages.slice(1, 5).map((img, i) => (
                                <div
                                  key={i}
                                  className="relative aspect-video rounded-xl overflow-hidden shadow-sm group cursor-pointer"
                                  onClick={() => setSelectedProject(project)}
                                >
                                  <Image
                                    src={getOptimizedCloudinaryUrl(img, CLOUDINARY_WIDTHS.thumbnail)}
                                    alt={`${project.title} - Preview ${i + 2}`}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    sizes="(max-width: 768px) 50vw, 15vw"
                                    loading="lazy"
                                  />
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>
            </section>
          );
        })}
      </div>

      {/* ═══════ CTA ═══════ */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#27abde]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#d81e25]/10 blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl border border-gray-100 bg-white/90 p-8 md:p-12 text-center shadow-xl relative overflow-hidden backdrop-blur">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#27abde]/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#d81e25]/10 blur-3xl" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center rounded-full border border-[#27abde]/20 bg-[#27abde]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#27abde] mb-5">
                BBS Media
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#101827] mb-5">
                Sẵn sàng đồng hành cùng BBS Media?
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                Hãy để chúng tôi cùng bạn xây dựng hình ảnh thương hiệu chuyên nghiệp, sáng tạo và hiệu quả.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/lien-he" className="inline-flex items-center justify-center rounded-xl bg-[#d81e25] px-7 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-[#d81e25]/90 transition-colors">
                  Liên hệ tư vấn
                </Link>
                <Link href="/khach-hang" className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-4 text-sm font-bold uppercase tracking-widest text-[#101827] hover:border-[#27abde]/30 hover:bg-[#27abde]/5 transition-colors">
                  Khách hàng & Đối tác <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PROJECT DETAIL MODAL ═══════ */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedProject(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Modal container */}
          <div
            className="relative z-10 w-full max-w-6xl max-h-[90vh] bg-white text-[#101827] rounded-3xl border border-gray-100 shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white text-[#101827] border border-gray-200 shadow-md hover:bg-[#f8fafc] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">

                {/* Left column: Project info */}
                <div className="lg:col-span-2 p-6 md:p-8 lg:p-10 flex flex-col gap-6 bg-[#f8fafc] relative">
                  {/* Subtle glow */}
                  <div className="absolute top-0 left-0 w-48 h-48 bg-[#27abde]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

                  <div className="relative z-10">
                    {/* Category badge */}
                    <span className="inline-block px-3 py-1 rounded-full bg-[#d81e25]/10 text-[#d81e25] border border-[#d81e25]/20 text-xs font-bold uppercase tracking-widest mb-4">
                      {CATEGORIES.find((c) => c.key === selectedProject.category)?.label ?? selectedProject.category}
                    </span>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#101827] leading-tight mb-2">
                      {selectedProject.title}
                    </h2>

                    {/* Subtitle */}
                    {selectedProject.subtitle && (
                      <p className="text-[#27abde] text-sm font-semibold mb-4">
                        {selectedProject.subtitle}
                      </p>
                    )}

                    <div className="w-12 h-1 bg-gradient-to-r from-[#27abde] to-[#d81e25] rounded-full mb-6" />

                    {/* Info blocks */}
                    <div className="space-y-5">
                      {/* Scale / Type */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#27abde] mb-1.5">
                          {selectedProject.scaleLabel}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {selectedProject.scaleOrType}
                        </p>
                      </div>

                      {/* Capability */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#27abde] mb-1.5">
                          Năng lực triển khai
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {selectedProject.capability}
                        </p>
                      </div>

                      {/* Result */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#27abde] mb-1.5">
                          Kết quả
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {selectedProject.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column: Gallery */}
                <div className="lg:col-span-3 p-4 md:p-6 lg:p-8 bg-white border-t lg:border-t-0 lg:border-l border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-4">
                    HÌNH ẢNH DỰ ÁN
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {selectedProject.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden group/img bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <Image
                          src={getOptimizedCloudinaryUrl(img, CLOUDINARY_WIDTHS.showcase)}
                          alt={`${selectedProject.title} - Ảnh ${idx + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        {/* Overlay with number */}
                        <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-white/95 border border-gray-100 shadow-sm backdrop-blur-sm flex items-center justify-center">
                          <span className="text-[#27abde] text-[10px] font-bold">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
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
