"use client";
import Image from "next/image";
import Link from "next/link";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 md:bottom-8 md:right-8">
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
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl transition-transform duration-300 hover:scale-110 md:h-16 md:w-16"
        >
          <Image
            src="/logo/facebook.png"
            alt="Facebook Messenger"
            width={40}
            height={40}
            className="h-10 w-10 object-contain md:h-12 md:w-12"
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
        <div className="absolute inset-0 animate-ping rounded-full bg-bbs-blue/40 opacity-75 duration-1000"></div>

        <Link
          href="tel:0343603760"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl transition-transform duration-300 hover:scale-110 md:h-16 md:w-16"
        >
          <Image
            src="/logo/phone.webp"
            alt="Gọi điện thoại"
            width={40}
            height={40}
            className="h-9 w-9 object-contain md:h-10 md:w-10"
          />
        </Link>
      </div>
    </div>
  );
}
