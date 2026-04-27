import { ArrowRight, TrendingUp, Users, PlayCircle } from "lucide-react";
import Link from "next/link";

const CASES = [
  {
    id: 1,
    client: "TechCorp Vietnam",
    title: "Chiến dịch ra mắt sản phẩm công nghệ mới",
    description: "Sản xuất chuỗi TVC và Livestream sự kiện ra mắt thu hút hàng chục ngàn lượt xem trực tiếp.",
    metrics: [
      { label: "Lượt xem", value: "500K+", icon: PlayCircle },
      { label: "Tương tác", value: "50K+", icon: Users },
      { label: "Chuyển đổi", value: "+150%", icon: TrendingUp },
    ]
  },
  {
    id: 2,
    client: "EduSmart",
    title: "Chuỗi video viral giáo dục",
    description: "Xây dựng kịch bản và sản xuất chuỗi video ngắn trên đa nền tảng giúp tăng nhận diện thương hiệu mạnh mẽ.",
    metrics: [
      { label: "Lượt xem", value: "2M+", icon: PlayCircle },
      { label: "Đăng ký mới", value: "10K+", icon: Users },
      { label: "Chi phí/Lead", value: "-40%", icon: TrendingUp },
    ]
  }
];

export function CaseStudies() {
  return (
    <section id="cases" className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-deep-navy mb-4">Kết quả thực tế</h2>
            <p className="text-lg text-gray-600">Những dự án tiêu biểu minh chứng cho năng lực triển khai và cam kết hiệu quả từ BBS Media.</p>
          </div>
          <Link href="#contact" className="inline-flex items-center font-semibold text-bbs-blue hover:text-blue-700 transition-colors">
            Xem thêm dự án <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="space-y-12">
          {CASES.map((item) => (
            <div key={item.id} className="group rounded-[24px] overflow-hidden border border-border-gray hover:border-bbs-blue/50 transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Placeholder */}
                <div className="bg-zinc-200 aspect-video lg:aspect-auto relative overflow-hidden flex items-center justify-center">
                  <div className="text-gray-400 font-medium flex items-center gap-2">
                    <PlayCircle className="w-6 h-6" />
                    <span>Video/Image Placeholder</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-sm font-semibold text-bbs-red mb-3">{item.client}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-deep-navy mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">{item.description}</p>
                  
                  <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border-gray">
                    {item.metrics.map((metric, i) => {
                      const Icon = metric.icon;
                      return (
                        <div key={i}>
                          <div className="flex items-center gap-2 text-gray-500 mb-2 text-sm">
                            <Icon className="w-4 h-4" />
                            {metric.label}
                          </div>
                          <div className="text-2xl font-bold text-deep-navy">{metric.value}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
