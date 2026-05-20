"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past Hero section (approx 500px)
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      {/* Scroll to Top Button */}
      <div 
        className={`group relative flex items-center transition-all duration-500 ${
          showScrollTop ? "translate-y-0 opacity-100 visible" : "translate-y-10 opacity-0 invisible"
        }`}
      >
        {/* Tooltip */}
        <span className="absolute right-full mr-4 hidden whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 md:block">
          Lên đầu trang
          {/* Tooltip Arrow */}
          <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
        </span>

        <button
          onClick={scrollToTop}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-500 shadow-md transition-all duration-300 hover:scale-105 hover:text-gray-700 hover:shadow-lg sm:h-12 sm:w-12 lg:h-14 lg:w-14"
          aria-label="Lên đầu trang"
        >
          <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" strokeWidth={1.5} />
        </button>
      </div>

      {/* Facebook Messenger Button */}
      <div className="group relative flex items-center">
        {/* Tooltip */}
        <span className="absolute right-full mr-4 hidden whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 md:block">
          Chat Facebook
          {/* Tooltip Arrow */}
          <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
        </span>

        <Link
          href="https://www.messenger.com/t/107488542199286/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-gray-100 bg-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg sm:h-12 sm:w-12 lg:h-14 lg:w-14"
        >
          <Image
            src="https://res.cloudinary.com/dss1zawkj/image/upload/v1779250277/facebook_vi3kpa.png"
            alt="Facebook Messenger"
            width={48}
            height={48}
            className="h-7 w-7 object-contain sm:h-8 sm:w-8 lg:h-9 lg:w-9"
          />
        </Link>
      </div>

      {/* Phone Button with Pulse */}
      <div className="group relative flex items-center">
        {/* Tooltip */}
        <span className="absolute right-full mr-4 hidden whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 md:block">
          Gọi ngay
          {/* Tooltip Arrow */}
          <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
        </span>

        {/* Pulse Background */}
        <div className="absolute inset-0 animate-ping rounded-full bg-bbs-blue/30 opacity-60 duration-1000"></div>

        <Link
          href="tel:0343603760"
          className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-gray-100 bg-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg sm:h-12 sm:w-12 lg:h-14 lg:w-14"
        >
          <Image
            src="https://res.cloudinary.com/dss1zawkj/image/upload/v1779250275/phone_phyxtr.webp"
            alt="Gọi điện thoại"
            width={48}
            height={48}
            className="h-7 w-7 object-contain sm:h-8 sm:w-8 lg:h-9 lg:w-9"
          />
        </Link>
      </div>

      {/* Zalo Button */}
      <div className="group relative flex items-center">
        {/* Tooltip */}
        <span className="absolute right-full mr-4 hidden whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 md:block">
          Chat Zalo
          {/* Tooltip Arrow */}
          <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
        </span>

        <Link
          href="https://zalo.me/0368248696"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-gray-100 bg-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg sm:h-12 sm:w-12 lg:h-14 lg:w-14"
        >
          <Image
            src="https://res.cloudinary.com/dss1zawkj/image/upload/v1779250276/zalo-icon_fmm3au.png"
            alt="Zalo"
            width={48}
            height={48}
            className="h-7 w-7 object-contain sm:h-8 sm:w-8 lg:h-9 lg:w-9"
          />
        </Link>
      </div>
    </div>
  );
}
