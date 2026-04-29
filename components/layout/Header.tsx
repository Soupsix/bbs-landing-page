"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/contexts/LanguageContext";

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

const NAV_LINKS_VI = [
  { href: null, label: "TRANG CHỦ" },
  { href: "team", label: "GIỚI THIỆU" },
  { href: "services", label: "DỊCH VỤ" },
  { href: "cases", label: "SẢN PHẨM" },
  { href: "contact", label: "LIÊN HỆ" },
  { href: "faq", label: "BLOGS" },
];

const NAV_LINKS_EN = [
  { href: null, label: "HOME" },
  { href: "team", label: "ABOUT" },
  { href: "services", label: "SERVICES" },
  { href: "cases", label: "PORTFOLIO" },
  { href: "contact", label: "CONTACT" },
  { href: "faq", label: "BLOGS" },
];

function scrollToSection(id: string | null) {
  if (!id) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    const headerOffset = 80; // height of sticky header
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  const NAV_LINKS = lang === "vi" ? NAV_LINKS_VI : NAV_LINKS_EN;

  // Đóng sidebar khi resize lên desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Khoá scroll body khi sidebar mở
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  const handleNavClick = (href: string | null) => {
    closeMenu();
    scrollToSection(href);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border-gray backdrop-blur-md" style={{ backgroundColor: "rgba(243, 248, 242, 0.85)" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className={`flex-shrink-0 transition-all duration-300 ${mobileOpen ? 'opacity-0 invisible lg:opacity-100 lg:visible' : 'opacity-100 visible'}`}>
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo/logo.png"
                  alt="BBS Media Logo"
                  width={180}
                  height={60}
                  className="h-[70px] w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-semibold text-deep-navy hover:text-bbs-blue transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right Area */}
            <div className="flex items-center gap-5">
              {/* Social Icons */}
              <div className="hidden md:flex items-center gap-3">
                <a href="https://www.facebook.com/BBSProduction.media" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bbs-blue transition-colors">
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/watch?v=vgPUtfnfsyk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bbs-red transition-colors">
                  <YoutubeIcon className="w-5 h-5" />
                </a>
              </div>

              <div className="hidden md:block w-px h-6 bg-border-gray"></div>

              {/* Language Switcher */}
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => setLang("vi")}
                  aria-label="Tiếng Việt"
                  className={`relative w-8 h-6 overflow-hidden rounded-[4px] transition-all ${lang === "vi"
                    ? "border-2 border-bbs-blue shadow-sm scale-110"
                    : "border border-gray-200 hover:opacity-80"
                    }`}
                >
                  <Image src="/vn-flag.jpg" alt="Vietnamese" fill sizes="32px" className="object-cover" />
                </button>
                <button
                  onClick={() => setLang("en")}
                  aria-label="English"
                  className={`relative w-8 h-6 overflow-hidden rounded-[4px] transition-all ${lang === "en"
                    ? "border-2 border-bbs-blue shadow-sm scale-110"
                    : "border border-gray-200 hover:opacity-80"
                    }`}
                >
                  <Image src="/uk-flag.jpg" alt="English" fill sizes="32px" className="object-cover" />
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 text-deep-navy hover:text-bbs-blue transition-colors"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 shadow-2xl lg:hidden flex flex-col transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ backgroundColor: "rgba(243, 248, 242, 0.97)" }}
        aria-label="Mobile navigation"
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-gray">
          <Image
            src="/logo/logo.png"
            alt="BBS Media Logo"
            width={180}
            height={60}
            className="h-[70px] w-auto object-contain"
          />
          <button
            onClick={closeMenu}
            className="p-2 text-deep-navy hover:text-bbs-blue transition-colors"
            aria-label="Đóng menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col px-4 py-6 gap-1 flex-grow">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-semibold text-deep-navy hover:text-bbs-blue hover:bg-bbs-blue/5 px-4 py-3 rounded-lg transition-colors text-left cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Bottom: Socials + Language */}
        <div className="px-6 py-5 border-t border-border-gray space-y-4">
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/BBSProduction.media" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bbs-blue transition-colors">
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/watch?v=vgPUtfnfsyk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-bbs-red transition-colors">
              <YoutubeIcon className="w-5 h-5" />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang("vi")}
              aria-label="Tiếng Việt"
              className={`relative w-8 h-6 overflow-hidden rounded-[4px] transition-all ${lang === "vi"
                ? "border-2 border-bbs-blue shadow-sm scale-110"
                : "border border-gray-200 hover:opacity-80"
                }`}
            >
              <Image src="/vn-flag.jpg" alt="Vietnamese" fill sizes="32px" className="object-cover" />
            </button>
            <button
              onClick={() => setLang("en")}
              aria-label="English"
              className={`relative w-8 h-6 overflow-hidden rounded-[4px] transition-all ${lang === "en"
                ? "border-2 border-bbs-blue shadow-sm scale-110"
                : "border border-gray-200 hover:opacity-80"
                }`}
            >
              <Image src="/uk-flag.jpg" alt="English" fill sizes="32px" className="object-cover" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}