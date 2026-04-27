import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.769-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
  </svg>
);

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-gray bg-[#F3F8F2]/90 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-bbs-blue">BBS Media</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-sm font-semibold text-deep-navy hover:text-bbs-blue transition-colors">TRANG CHỦ</Link>
            <Link href="#about" className="text-sm font-semibold text-deep-navy hover:text-bbs-blue transition-colors">GIỚI THIỆU</Link>
            <Link href="#services" className="text-sm font-semibold text-deep-navy hover:text-bbs-blue transition-colors">DỊCH VỤ</Link>
            <Link href="#products" className="text-sm font-semibold text-deep-navy hover:text-bbs-blue transition-colors">SẢN PHẨM</Link>
            <Link href="#contact" className="text-sm font-semibold text-deep-navy hover:text-bbs-blue transition-colors">LIÊN HỆ</Link>
            <Link href="#blogs" className="text-sm font-semibold text-deep-navy hover:text-bbs-blue transition-colors">BLOGS</Link>
          </nav>

          {/* Right Area: Language & Socials & Mobile Toggle */}
          <div className="flex items-center gap-5">
            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="text-gray-400 hover:text-bbs-blue transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bbs-red transition-colors">
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="hidden md:block w-px h-6 bg-border-gray"></div>

            {/* Language Switcher */}
            <div className="hidden md:flex items-center gap-2">
              <button className="relative w-8 h-6 overflow-hidden rounded-[4px] border border-gray-200 hover:opacity-80 transition-opacity">
                <Image
                  src="/vn-flag.jpg"
                  alt="Vietnamese"
                  fill
                  className="object-cover"
                />
              </button>
              <button className="relative w-8 h-6 overflow-hidden rounded-[4px] border border-gray-200 hover:opacity-80 transition-opacity">
                <Image
                  src="/uk-flag.jpg"
                  alt="English"
                  fill
                  className="object-cover"
                />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden p-2 text-deep-navy hover:text-bbs-blue">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}