import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowUpRight, Compass, ShieldCheck } from "lucide-react";

export default function Navbar({ onExploreClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Journey", href: "#journey" },
    { name: "Learn", href: "#learn" },
    { name: "Hackathons", href: "#hackathons" },
    { name: "Colleges", href: "#colleges" },
    { name: "Match", href: "#opportunity-match" },
    { name: "Outcomes", href: "#outcomes" },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF9F5]/90 backdrop-blur-md py-3 shadow-[0_4px_20px_-4px_rgba(28,13,58,0.08)] border-b border-[#2E1065]/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand mark */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple-600 rounded-lg"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple-deep via-brand-purple-900 to-brand-purple-950 flex items-center justify-center shadow-md shadow-brand-purple-deep/20 border border-brand-purple-700/30 group-hover:scale-105 transition-transform duration-200">
              {/* Custom geometric logo mark */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
                  stroke="#FACC15"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="3.5" fill="#FAF9F5" />
                <path
                  d="M12 8.5V15.5M8.5 12H15.5"
                  stroke="#1C0D3A"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              {/* Subtle indicator dot */}
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-yellow-400"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-xl tracking-tight text-brand-purple-deep">
                  DKODER<span className="text-brand-purple-700 font-medium">OS</span>
                </span>
                <span className="bg-brand-yellow-100 text-brand-purple-950 text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border border-brand-yellow-400/50">
                  v2.6
                </span>
              </div>
              <span className="text-[10.5px] uppercase tracking-wider font-semibold text-brand-text-muted">
                Student Opportunity OS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-brand-purple-950/10 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-brand-text-secondary hover:text-brand-purple-950 hover:bg-brand-purple-50/80 rounded-full transition-colors duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Side CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onExploreClick}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs lg:text-sm font-semibold rounded-full bg-brand-yellow-400 text-brand-purple-darkest hover:bg-brand-yellow-300 active:scale-95 transition-all duration-200 shadow-[0_2px_12px_rgba(250,204,21,0.35)] hover:shadow-[0_4px_18px_rgba(250,204,21,0.55)] border border-brand-yellow-500/40"
            >
              <span>Explore Opportunities</span>
              <ArrowUpRight className="w-4 h-4 text-brand-purple-darkest group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg bg-white/80 border border-brand-purple-950/10 text-brand-purple-deep hover:bg-brand-purple-50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white/95 backdrop-blur-xl border border-brand-purple-950/10 rounded-2xl shadow-xl flex flex-col gap-2 animate-fadeIn">
            <div className="text-[11px] font-mono uppercase tracking-wider text-brand-purple-700 font-semibold px-3 pb-1 border-b border-brand-purple-100">
              Ecosystem Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-sm font-medium text-brand-text-primary hover:bg-brand-purple-50 hover:text-brand-purple-900 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-brand-text-muted">→</span>
              </a>
            ))}
            <div className="pt-2 border-t border-brand-purple-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onExploreClick();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-brand-yellow-400 text-brand-purple-darkest font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Explore Opportunities</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
