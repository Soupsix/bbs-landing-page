import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/contexts/LanguageContext";
import { FloatingContact } from "@/components/ui/FloatingContact";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "BBS Media - Giải pháp truyền thông & sự kiện",
  description: "BBS Media giúp bạn triển khai nhanh, tối ưu chi phí và tạo ra kết quả đo lường rõ ràng.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans relative">
        <LanguageProvider>
          {children}
          <FloatingContact />
        </LanguageProvider>
      </body>
    </html>
  );
}
