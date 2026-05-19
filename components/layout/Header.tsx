"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MessageCircle, Camera, Heart, Aperture, Film, Zap, Smartphone, Radio, Wind, Package, PartyPopper, Utensils, Users, Tent, Cake, Megaphone, Tv2, ArrowRight } from "lucide-react";
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

/* ── Mega-menu data for "Dịch vụ Media" ── */
type MenuCard = { href: string; label: string; desc: string; Icon: React.ElementType };

const MEDIA_CARDS_VI: MenuCard[] = [
  { href: "/dich-vu-media/tu-van-truyen-thong", label: "Tư Vấn Truyền Thông", desc: "Chiến lược & kế hoạch truyền thông tổng thể", Icon: MessageCircle },
  { href: "/dich-vu-media/quay-chup-event", label: "Quay Chụp Event", desc: "Ghi lại mọi khoảnh khắc sự kiện chuyên nghiệp", Icon: Camera },
  { href: "/dich-vu-media/quay-chup-wedding", label: "Quay Chụp Wedding", desc: "Phong cách cinematic, tự nhiên & cảm xúc", Icon: Heart },
  { href: "/dich-vu-media/studio-sang-tao", label: "Studio Sáng Tạo", desc: "Không gian studio hiện đại, đầy đủ tiện nghi", Icon: Aperture },
  { href: "/dich-vu-media/tvc-doanh-nghiep", label: "TVC Doanh Nghiệp", desc: "Sản xuất TVC & phim quảng cáo trọn gói", Icon: Film },
  { href: "/dich-vu-media/viral-video", label: "Viral Video", desc: "Video có sức lan tỏa mạnh trên mạng xã hội", Icon: Zap },
  { href: "/dich-vu-media/tiktok-reels", label: "TikTok / Reels", desc: "Content ngắn tối ưu cho mọi nền tảng số", Icon: Smartphone },
  { href: "/dich-vu-media/livestream", label: "Livestream", desc: "Multi-cam, đồ họa real-time, âm thanh chuẩn", Icon: Radio },
  { href: "/dich-vu-media/flycam", label: "Flycam", desc: "Góc aerial ấn tượng với thiết bị thế hệ mới", Icon: Wind },
  { href: "/dich-vu-media/chup-anh-san-pham", label: "Chụp Ảnh Sản Phẩm", desc: "Packshot, flatlay & lifestyle chuẩn e-commerce", Icon: Package },
];

const MEDIA_CARDS_EN: MenuCard[] = [
  { href: "/dich-vu-media/tu-van-truyen-thong", label: "Media Consulting", desc: "Strategy & comprehensive communication planning", Icon: MessageCircle },
  { href: "/dich-vu-media/quay-chup-event", label: "Event Filming", desc: "Professional capture of every event moment", Icon: Camera },
  { href: "/dich-vu-media/quay-chup-wedding", label: "Wedding Filming", desc: "Cinematic, natural & emotional wedding style", Icon: Heart },
  { href: "/dich-vu-media/studio-sang-tao", label: "Creative Studio", desc: "Modern studio with full equipment", Icon: Aperture },
  { href: "/dich-vu-media/tvc-doanh-nghiep", label: "Corporate TVC", desc: "Full-package TVC & ad film production", Icon: Film },
  { href: "/dich-vu-media/viral-video", label: "Viral Video", desc: "Powerful social media reach videos", Icon: Zap },
  { href: "/dich-vu-media/tiktok-reels", label: "TikTok / Reels", desc: "Short content optimized for every platform", Icon: Smartphone },
  { href: "/dich-vu-media/livestream", label: "Livestream", desc: "Multi-cam, real-time graphics, clear audio", Icon: Radio },
  { href: "/dich-vu-media/flycam", label: "Flycam / Drone", desc: "Impressive aerial shots with next-gen drones", Icon: Wind },
  { href: "/dich-vu-media/chup-anh-san-pham", label: "Product Photography", desc: "Packshot, flatlay & e-commerce lifestyle", Icon: Package },
];

/* ── Mega-menu data for "Tổ Chức Sự Kiện" ── */
const EVENT_CARDS_VI: MenuCard[] = [
  { href: "/to-chuc-su-kien/khai-truong-khanh-thanh", label: "Khai Trương - Khánh Thành", desc: "Lễ khai trương ấn tượng, chuyên nghiệp", Icon: PartyPopper },
  { href: "/to-chuc-su-kien/gala-dinner", label: "Gala Dinner", desc: "Tiệc gala sang trọng, đẳng cấp", Icon: Utensils },
  { href: "/to-chuc-su-kien/hoi-nghi-hoi-thao", label: "Hội Nghị - Hội Thảo", desc: "Tổ chức hội nghị, kí kết chuyên nghiệp", Icon: Users },
  { href: "/to-chuc-su-kien/team-building", label: "Team Building", desc: "Hoạt động gắn kết, sáng tạo cho doanh nghiệp", Icon: Tent },
  { href: "/to-chuc-su-kien/year-end-party", label: "Year End Party", desc: "Tiệc cuối năm ấm áp, đáng nhớ", Icon: Tv2 },
  { href: "/to-chuc-su-kien/sinh-nhat", label: "Sinh Nhật", desc: "Tổ chức sinh nhật độc đáo, riêng biệt", Icon: Cake },
  { href: "/to-chuc-su-kien/activation", label: "Brand Activation", desc: "Kích hoạt thương hiệu, tiếp cận khách hàng", Icon: Megaphone },
  { href: "/to-chuc-su-kien/thiet-bi-su-kien", label: "Thiết Bị Sự Kiện", desc: "Âm thanh, ánh sáng, màn hình LED chuyên dụng", Icon: Radio },
];

const EVENT_CARDS_EN: MenuCard[] = [
  { href: "/to-chuc-su-kien/khai-truong-khanh-thanh", label: "Grand Opening", desc: "Impressive, professional grand opening events", Icon: PartyPopper },
  { href: "/to-chuc-su-kien/gala-dinner", label: "Gala Dinner", desc: "Luxurious and prestigious gala dinners", Icon: Utensils },
  { href: "/to-chuc-su-kien/hoi-nghi-hoi-thao", label: "Conferences & Seminars", desc: "Professional conferences & signing ceremonies", Icon: Users },
  { href: "/to-chuc-su-kien/team-building", label: "Team Building", desc: "Creative bonding activities for businesses", Icon: Tent },
  { href: "/to-chuc-su-kien/year-end-party", label: "Year End Party", desc: "Warm, memorable year-end celebrations", Icon: Tv2 },
  { href: "/to-chuc-su-kien/sinh-nhat", label: "Birthday Party", desc: "Unique and personalized birthday events", Icon: Cake },
  { href: "/to-chuc-su-kien/activation", label: "Brand Activation", desc: "Brand activation & customer engagement", Icon: Megaphone },
  { href: "/to-chuc-su-kien/thiet-bi-su-kien", label: "Event Equipment", desc: "Sound, lighting & LED screen rental", Icon: Radio },
];

/* Legacy flat lists kept for mobile sidebar */
const MEDIA_SUBS_VI = MEDIA_CARDS_VI.map(({ href, label }) => ({ href, label }));
const MEDIA_SUBS_EN = MEDIA_CARDS_EN.map(({ href, label }) => ({ href, label }));
const EVENT_SUBS_VI = EVENT_CARDS_VI.map(({ href, label }) => ({ href, label }));
const EVENT_SUBS_EN = EVENT_CARDS_EN.map(({ href, label }) => ({ href, label }));


type NavLink = { href: string; label: string; dropdownId?: "media" | "event" };

const NAV_LINKS_VI: NavLink[] = [
  { href: "/", label: "TRANG CHỦ" },
  { href: "/gioi-thieu", label: "GIỚI THIỆU" },
  { href: "/dich-vu-media", label: "DỊCH VỤ MEDIA", dropdownId: "media" },
  { href: "/to-chuc-su-kien", label: "TỔ CHỨC SỰ KIỆN", dropdownId: "event" },
  { href: "/danh-muc-du-an", label: "DANH MỤC DỰ ÁN" },
  { href: "/khach-hang", label: "KHÁCH HÀNG" },
  { href: "/lien-he", label: "LIÊN HỆ" },
];

const NAV_LINKS_EN: NavLink[] = [
  { href: "/", label: "HOME" },
  { href: "/gioi-thieu", label: "ABOUT" },
  { href: "/dich-vu-media", label: "MEDIA SERVICES", dropdownId: "media" },
  { href: "/to-chuc-su-kien", label: "EVENT ORGANIZATION", dropdownId: "event" },
  { href: "/danh-muc-du-an", label: "PROJECTS" },
  { href: "/khach-hang", label: "CLIENTS" },
  { href: "/lien-he", label: "CONTACT" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const NAV_LINKS = lang === "vi" ? NAV_LINKS_VI : NAV_LINKS_EN;
  const MEDIA_SUBS = lang === "vi" ? MEDIA_SUBS_VI : MEDIA_SUBS_EN;
  const EVENT_SUBS = lang === "vi" ? EVENT_SUBS_VI : EVENT_SUBS_EN;
  const MEDIA_CARDS = lang === "vi" ? MEDIA_CARDS_VI : MEDIA_CARDS_EN;
  const EVENT_CARDS = lang === "vi" ? EVENT_CARDS_VI : EVENT_CARDS_EN;

  const getSubLinks = (dropdownId?: string) => {
    if (dropdownId === "media") return MEDIA_SUBS;
    if (dropdownId === "event") return EVENT_SUBS;
    return [];
  };

  const getMegaCards = (dropdownId?: string) => {
    if (dropdownId === "media") return MEDIA_CARDS;
    if (dropdownId === "event") return EVENT_CARDS;
    return [];
  };

  const getMegaMeta = (dropdownId?: string) => {
    if (dropdownId === "media") return {
      title: lang === "vi" ? "DỊCH VỤ MEDIA" : "MEDIA SERVICES",
      subtitle: lang === "vi" ? "Chuyên nghiệp · Sáng tạo · Tận tâm" : "Professional · Creative · Dedicated",
      accent: "#27abde",
      allHref: "/dich-vu-media",
      allLabel: lang === "vi" ? "Xem tất cả dịch vụ Media" : "View all Media services",
    };
    if (dropdownId === "event") return {
      title: lang === "vi" ? "TỔ CHỨC SỰ KIỆN" : "EVENT ORGANIZATION",
      subtitle: lang === "vi" ? "Trọn gói · Chuyên nghiệp · Hiệu quả" : "Full-package · Professional · Effective",
      accent: "#d81e25",
      allHref: "/to-chuc-su-kien",
      allLabel: lang === "vi" ? "Xem tất cả dịch vụ Sự kiện" : "View all Event services",
    };
    return null;
  };

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

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const closeMenu = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleDropdownEnter = (id: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDesktopDropdown(id);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDesktopDropdown(null);
    }, 150);
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
            <nav className="hidden lg:flex items-center gap-5">
              {NAV_LINKS.map((link) =>
                link.dropdownId ? (
                  /* ── Dropdown trigger ── */
                  <div
                    key={link.href}
                    ref={desktopDropdown === link.dropdownId ? dropdownRef : null}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(link.dropdownId!)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors ${
                        isActive(link.href)
                          ? "text-bbs-blue"
                          : "text-deep-navy hover:text-bbs-blue"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${desktopDropdown === link.dropdownId ? "rotate-180" : ""}`} />
                    </Link>

                    {/* Mega-menu panel */}
                    {(() => {
                      const meta = getMegaMeta(link.dropdownId);
                      const cards = getMegaCards(link.dropdownId);
                      const isMedia = link.dropdownId === "media";
                      const cols = isMedia ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" : "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4";
                      return (
                        <div
                          className={`fixed left-0 right-0 top-[80px] transition-all duration-200 z-50 ${
                            desktopDropdown === link.dropdownId
                              ? "opacity-100 visible translate-y-0"
                              : "opacity-0 invisible -translate-y-2"
                          }`}
                        >
                          <div className="bg-white border-t border-border-gray shadow-2xl">
                            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                              {/* Header */}
                              {meta && (
                                <div className="text-center mb-6">
                                  <h3 className="text-lg font-bold tracking-widest text-deep-navy mb-1">
                                    {meta.title}
                                  </h3>
                                  <p className="text-xs text-gray-400 mb-2">{meta.subtitle}</p>
                                  <div className="mx-auto h-0.5 w-10 rounded-full" style={{ backgroundColor: meta.accent }} />
                                </div>
                              )}
                              {/* Cards grid */}
                              <div className={`grid ${cols} gap-3`}>
                                {cards.map(({ href, label, desc, Icon }) => (
                                  <Link
                                    key={href}
                                    href={href}
                                    onClick={() => setDesktopDropdown(null)}
                                    className="group flex flex-col items-center text-center p-4 rounded-xl border border-transparent hover:border-border-gray hover:bg-[#f8fafc] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                                  >
                                    <div
                                      className="w-12 h-12 rounded-full flex items-center justify-center mb-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                                      style={{ backgroundColor: link.dropdownId === "media" ? "#27abde" : "#d81e25" }}
                                    >
                                      <Icon className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-sm font-semibold text-deep-navy group-hover:text-bbs-blue mb-1 leading-tight transition-colors">
                                      {label}
                                    </span>
                                    <span className="text-xs text-gray-400 leading-snug line-clamp-2">{desc}</span>
                                  </Link>
                                ))}
                              </div>
                              {/* Footer link */}
                              {meta && (
                                <div className="mt-6 pt-4 border-t border-border-gray flex justify-center">
                                  <Link
                                    href={meta.allHref}
                                    onClick={() => setDesktopDropdown(null)}
                                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase transition-colors hover:opacity-80"
                                    style={{ color: meta.accent }}
                                  >
                                    {meta.allLabel}
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </Link>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-semibold transition-colors ${
                      isActive(link.href)
                        ? "text-bbs-blue"
                        : "text-deep-navy hover:text-bbs-blue"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
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
        <nav className="flex flex-col px-4 py-6 gap-1 flex-grow overflow-y-auto">
          {NAV_LINKS.map((link) =>
            link.dropdownId ? (
              <div key={link.href}>
                {/* Parent link + toggle */}
                <button
                  onClick={() => setMobileExpanded((prev) => prev === link.dropdownId ? null : link.dropdownId!)}
                  className={`w-full flex items-center justify-between text-sm font-semibold px-4 py-3 rounded-lg transition-colors text-left ${
                    isActive(link.href)
                      ? "text-bbs-blue bg-bbs-blue/5"
                      : "text-deep-navy hover:text-bbs-blue hover:bg-bbs-blue/5"
                  }`}
                >
                  {link.label}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === link.dropdownId ? "rotate-180" : ""}`} />
                </button>

                {/* Collapsible sub-items */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileExpanded === link.dropdownId ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4 border-l-2 border-bbs-blue/20 ml-6 mt-1 mb-2 flex flex-col gap-0.5">
                    {/* Link to main page */}
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="text-xs font-semibold text-bbs-blue px-3 py-2 rounded-md hover:bg-bbs-blue/5 transition-colors"
                    >
                      {lang === "vi" ? "Tất cả dịch vụ" : "All services"}
                    </Link>
                    {getSubLinks(link.dropdownId).map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={closeMenu}
                        className="text-xs text-deep-navy hover:text-bbs-blue px-3 py-2 rounded-md hover:bg-bbs-blue/5 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`text-sm font-semibold px-4 py-3 rounded-lg transition-colors text-left ${
                  isActive(link.href)
                    ? "text-bbs-blue bg-bbs-blue/5"
                    : "text-deep-navy hover:text-bbs-blue hover:bg-bbs-blue/5"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
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