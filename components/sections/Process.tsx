import { MessageSquare, Lightbulb, Clapperboard, LineChart } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Tư vấn & Phân tích",
    description: "Lắng nghe nhu cầu, phân tích thị trường và đối tượng mục tiêu của doanh nghiệp.",
    icon: MessageSquare
  },
  {
    num: "02",
    title: "Lên ý tưởng (Concept)",
    description: "Đề xuất kịch bản, định hướng sáng tạo và kế hoạch triển khai chi tiết.",
    icon: Lightbulb
  },
  {
    num: "03",
    title: "Sản xuất & Triển khai",
    description: "Thực thi quay dựng video hoặc tổ chức sự kiện chuyên nghiệp với thiết bị hiện đại.",
    icon: Clapperboard
  },
  {
    num: "04",
    title: "Báo cáo & Tối ưu",
    description: "Đo lường hiệu quả, báo cáo số liệu và tối ưu hóa để đạt kết quả tốt nhất.",
    icon: LineChart
  }
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-transparent border-t border-border-gray/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-navy mb-4">Quy trình làm việc chuẩn mực</h2>
          <p className="text-lg text-gray-600">Đơn giản, minh bạch và tập trung vào hiệu quả cuối cùng cho khách hàng.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-border-gray" />

          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-zinc-50 shadow-sm mb-6 relative">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-bbs-blue text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                    {step.num}
                  </div>
                  <Icon className="w-10 h-10 text-bbs-red" />
                </div>
                <h3 className="text-xl font-bold text-deep-navy mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
