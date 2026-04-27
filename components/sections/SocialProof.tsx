export function SocialProof() {
  return (
    <section className="py-12 bg-transparent border-y border-border-gray/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-deep-navy mb-2">100+</span>
            <span className="text-gray-500 font-medium">Dự án thành công</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-border-gray"></div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-deep-navy mb-2">50+</span>
            <span className="text-gray-500 font-medium">Khách hàng tin tưởng</span>
          </div>
          <div className="hidden md:block w-px h-16 bg-border-gray"></div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-deep-navy mb-2">5+</span>
            <span className="text-gray-500 font-medium">Năm kinh nghiệm</span>
          </div>
        </div>
      </div>
    </section>
  );
}
