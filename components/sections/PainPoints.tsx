import { AlertCircle, Clock, TrendingDown, LayoutTemplate } from "lucide-react";

const PAIN_POINTS = [
  {
    title: "Nội dung truyền thông kém hiệu quả",
    description: "Đầu tư nhiều ngân sách nhưng video không có người xem, không tạo ra chuyển đổi.",
    icon: TrendingDown
  },
  {
    title: "Thiếu ý tưởng sáng tạo",
    description: "Nội dung lặp đi lặp lại, nhàm chán, không thu hút được tệp khách hàng mục tiêu.",
    icon: LayoutTemplate
  },
  {
    title: "Triển khai chậm, tốn chi phí",
    description: "Làm việc với nhiều agency khác nhau khiến quy trình phức tạp và phát sinh chi phí.",
    icon: Clock
  },
  {
    title: "Event thiếu điểm nhấn",
    description: "Sự kiện được tổ chức nhưng không để lại ấn tượng mạnh mẽ cho khách mời và đối tác.",
    icon: AlertCircle
  }
];

export function PainPoints() {
  return (
    <section className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-deep-navy mb-4">Bạn đang gặp khó khăn trong truyền thông?</h2>
          <p className="text-lg text-gray-600">Những vấn đề doanh nghiệp thường xuyên đối mặt khi tự triển khai hoặc thuê ngoài không hiệu quả.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAIN_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="bg-white rounded-card p-8 border border-border-gray hover:border-bbs-blue/50 transition-colors h-full">
                <div className="w-12 h-12 bg-red-50 text-bbs-red rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-deep-navy mb-3">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
