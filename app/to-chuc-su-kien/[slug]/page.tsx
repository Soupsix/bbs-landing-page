"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

// All child routes redirect to the single /to-chuc-su-kien page with the correct anchor
const SLUG_TO_ANCHOR: Record<string, string> = {
  "khai-truong-khanh-thanh": "#loai-hinh-su-kien",
  "gala-dinner": "#loai-hinh-su-kien",
  "hoi-nghi-hoi-thao": "#loai-hinh-su-kien",
  "team-building": "#loai-hinh-su-kien",
  "year-end-party": "#loai-hinh-su-kien",
  "sinh-nhat": "#loai-hinh-su-kien",
  "activation": "#loai-hinh-su-kien",
  "thiet-bi-su-kien": "#thiet-bi-su-kien",
  "thiet-ke-san-khau": "#thiet-ke-trang-tri",
  "thiet-ke-trang-tri": "#thiet-ke-trang-tri",
  "quy-trinh": "#quy-trinh-su-kien",
};

export default function EventSlugRedirect() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  useEffect(() => {
    const anchor = SLUG_TO_ANCHOR[slug] ?? "#loai-hinh-su-kien";
    router.replace(`/to-chuc-su-kien${anchor}`);
  }, [router, slug]);

  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-white">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-[#d81e25] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-500 text-sm">Đang chuyển hướng...</p>
      </div>
    </div>
  );
}
