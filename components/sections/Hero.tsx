"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";

export function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32 pb-16 lg:pb-32 bg-[url('/HeroImage.jpg')] bg-cover bg-center">
      {/* Overlay mờ để dễ đọc chữ */}
      <div className="absolute inset-0 bg-white/80 md:bg-white/70"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight tracking-tight text-bbs-blue mb-6 uppercase">
              Kiến tạo hình ảnh –{" "}
              <span className="text-deep-navy">Nâng tầm thương hiệu</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              BBS Media là đối tác chiến lược chuyên cung cấp giải pháp tư vấn truyền thông, sản xuất nội dung hình ảnh và tổ chức sự kiện chuyên nghiệp. Chúng tôi cam kết đồng hành cùng doanh nghiệp kiến tạo những sản phẩm media chỉn chu, mang lại hiệu quả thực tế và xây dựng giá trị thương hiệu phát triển bền vững.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex h-13 items-center justify-center rounded-button bg-bbs-red px-8 py-4 text-sm font-bold tracking-widest uppercase text-white transition-colors hover:bg-bbs-red/90 w-full sm:w-auto"
              >
                Nhận tư vấn giải pháp
              </Link>
              <Link
                href="#cases"
                className="inline-flex h-13 items-center justify-center rounded-button border border-border-gray bg-white px-8 py-4 text-sm font-bold tracking-widest uppercase text-deep-navy transition-colors hover:bg-gray-50 hover:border-gray-300 w-full sm:w-auto"
              >
                Xem sản phẩm
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>


        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-bbs-blue/5 to-transparent pointer-events-none hidden lg:block" />
    </section>
  );
}
