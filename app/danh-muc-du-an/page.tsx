"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";
import { CATEGORIES, Category, PROJECTS } from "./data";
import { LayoutGrid } from "lucide-react";

export default function ProjectsPage() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");

  // Filter projects based on active category
  const filteredProjects = activeCategory === "ALL" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* ═══════ PAGE HEADER ═══════ */}
      <section className="relative pt-24 pb-12 overflow-hidden bg-deep-navy text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-bbs-blue/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20 backdrop-blur-md">
              <LayoutGrid className="w-4 h-4" />
              {lang === "vi" ? "Danh Mục Dự Án" : "Our Projects"}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              {lang === "vi" ? "Dấu Ấn Sáng Tạo" : "Creative Footprints"}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              {lang === "vi" 
                ? "Khám phá những dự án nổi bật mà BBS Media đã đồng hành cùng các thương hiệu lớn nhỏ trên hành trình kiến tạo giá trị."
                : "Explore the outstanding projects that BBS Media has accompanied with big and small brands on the journey of creating value."}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ FILTER CATEGORIES ═══════ */}
      <section className="py-8 md:py-12 bg-white border-b border-border-gray/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-bbs-blue text-white shadow-md shadow-bbs-blue/20 scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-deep-navy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PINTEREST/GRID CINEMATIC ═══════ */}
      <section className="pt-12 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          {/* 
            Using CSS Columns for Pinterest-style masonry layout.
            Elements break naturally across columns. 
          */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative w-full overflow-hidden rounded-2xl bg-gray-100 break-inside-avoid cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* 
                  Instead of a fixed height, we use a padding trick or aspect-ratio 
                  to simulate different height images in masonry. 
                */}
                <div className={`relative w-full ${project.aspectRatio}`}>
                  <Image
                    src={project.image}
                    alt={project.title[lang]}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  
                  {/* Cinematic Overlay - Appears on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    {/* Content translates up slightly on hover */}
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 bg-bbs-red text-white text-xs font-bold uppercase rounded-md mb-3 tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 line-clamp-2">
                        {project.title[lang]}
                      </h3>
                      <p className="text-gray-300 text-sm font-medium">
                        {lang === "vi" ? "Khách hàng:" : "Client:"} <span className="text-white">{project.client}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">
                {lang === "vi" 
                  ? "Chưa có dự án nào trong danh mục này." 
                  : "No projects found in this category."}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
