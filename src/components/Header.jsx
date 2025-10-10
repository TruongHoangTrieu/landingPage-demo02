import React, { useState, useEffect } from "react";
import { Sparkles, Layers, Download } from "lucide-react";
import { AnimatedBadge } from "./Effect/AnimatedBadge";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      label: "Tính năng",
      href: "#features",
      icon: <Sparkles className="w-5 h-5" />,
    },
    { label: "Thẻ bài", href: "#cards", icon: <Layers className="w-5 h-5" /> },
    {
      label: "Tải xuống",
      href: "#download",
      icon: <Download className="w-5 h-5" />,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
        scrolled
          ? "bg-black border-b border-white/10 shadow-md"
          : "bg-black/5 border-b border-transparent"
      }`}
    >
      <nav className="py-4 px-4 lg:px-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group transition-transform"
          >
            <div className="w-15 h-15 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 shadow-[0_4px_12px_rgba(102,126,234,0.4)] overflow-hidden flex items-center justify-center transform group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-300">
              <img
                src="/kado.png"
                alt="Kado Logo"
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-3xl font-bold text-white bg-clip-text text-transparent tracking-widest">
              KĀDO
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-3">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-2 text-white/90 hover:text-white px-5 py-2 text-xl font-bold rounded-lg transition-all duration-300 hover:bg-white/10"
              >
                <span className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.label}</span>
                </span>
              </a>
            ))}

            <a href="#download" className="ml-3">
              <AnimatedBadge text="Tải ứng dụng" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden bg-white/10 border border-white/20 rounded-lg p-2 flex flex-col justify-center items-center space-y-1.5 transition duration-300"
          >
            <div
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height,margin-top] duration-500 ${
            mobileMenuOpen ? "max-h-96 mt-4" : "max-h-0 mt-0"
          }`}
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 space-y-3">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white/90 hover:text-white hover:bg-white/10 hover:pl-6 pl-4 py-3 text-base font-medium rounded-lg transition-all duration-300"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-gradient-to-r from-orange-500 to-rose-500 text-white py-3 rounded-xl font-semibold shadow-[0_4px_16px_rgba(249,115,22,0.4)] mt-3"
            >
              Tải ứng dụng
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
