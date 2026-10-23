import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowUpRight, Star, ChevronDown } from "lucide-react";

export default function DkoderNavbar({ onGetStartedClick, onApplyMouClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    setLearnDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF9F5]/95 backdrop-blur-md py-3 shadow-[0_4px_20px_-4px_rgba(28,13,58,0.08)] border-b border-brand-purple-950/10"
          : "bg-[#FAF9F5]/80 backdrop-blur-sm py-4 border-b border-brand-purple-950/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Authentic Dkoder Brand Mark */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            {/* Dkoder Graduation Cap + Code glyph */}
            <div className="relative w-9 h-9 rounded-xl bg-brand-yellow-400 border border-brand-yellow-500/50 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                {/* Graduation cap */}
                <path
                  d="M12 3L2 8L12 13L22 8L12 3Z"
                  fill="#1C0D3A"
                />
                <path
                  d="M6 10.5V15C6 17 9 19 12 19C15 19 18 17 18 15V10.5"
                  stroke="#1C0D3A"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Code brackets <> inside */}
                <path
                  d="M10 9L8.5 10.5L10 12M14 9L15.5 10.5L14 12"
                  stroke="#FACC15"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="flex flex-col text-left">
              <span className="font-display font-extrabold text-2xl tracking-tight text-brand-purple-deep">
                Dkoder
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            <button
              onClick={() => scrollTo("hero")}
              className="px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-brand-purple-deep hover:text-brand-purple-700 rounded-full transition-colors"
            >
              Home
            </button>

            {/* Learn Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLearnDropdownOpen(!learnDropdownOpen)}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-brand-text-secondary hover:text-brand-purple-deep rounded-full transition-colors flex items-center gap-1"
              >
                <span>Learn</span>
                <ChevronDown className="w-3.5 h-3.5 text-brand-text-muted" />
              </button>

              {learnDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-white shadow-xl border border-brand-purple-900/10 p-2 z-50 text-left animate-fadeIn">
                  <button
                    onClick={() => scrollTo("question-bank")}
                    className="w-full text-left px-3 py-2 text-xs font-semibold text-brand-purple-deep hover:bg-brand-purple-50 rounded-lg transition-colors"
                  >
                    <div>Practice Questions</div>
                    <div className="text-[10px] text-brand-text-muted font-normal">Company-tagged question bank</div>
                  </button>
                  <button
                    onClick={() => scrollTo("career-tracks")}
                    className="w-full text-left px-3 py-2 text-xs font-semibold text-brand-purple-deep hover:bg-brand-purple-50 rounded-lg transition-colors"
                  >
                    <div>Career Tracks</div>
                    <div className="text-[10px] text-brand-text-muted font-normal">Service, Product & Big Tech roles</div>
                  </button>
                  <button
                    onClick={() => scrollTo("leaderboard")}
                    className="w-full text-left px-3 py-2 text-xs font-semibold text-brand-purple-deep hover:bg-brand-purple-50 rounded-lg transition-colors"
                  >
                    <div>Student Leaderboard</div>
                    <div className="text-[10px] text-brand-text-muted font-normal">Rankings, streaks and XP</div>
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollTo("hackathons")}
              className="px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-brand-text-secondary hover:text-brand-purple-deep rounded-full transition-colors"
            >
              Hackathons
            </button>

            <button
              onClick={() => scrollTo("for-colleges")}
              className="px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-brand-text-secondary hover:text-brand-purple-deep rounded-full transition-colors"
            >
              For Colleges
            </button>

            <button
              onClick={onApplyMouClick}
              className="px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-brand-text-secondary hover:text-brand-purple-deep rounded-full transition-colors"
            >
              Apply for MOU
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scrollTo("question-bank")}
              aria-label="Practice Questions Star"
              className="w-9 h-9 rounded-full bg-white border border-brand-purple-900/10 flex items-center justify-center text-brand-purple-900 hover:bg-brand-yellow-50 hover:border-brand-yellow-400 transition-colors shadow-sm"
            >
              <Star className="w-4 h-4 text-brand-yellow-500 fill-brand-yellow-400" />
            </button>

            <button
              onClick={onGetStartedClick}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-purple-darkest text-white hover:bg-brand-purple-900 font-bold text-xs lg:text-sm transition-all shadow-md active:scale-95"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4 text-brand-yellow-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
              className="p-2 rounded-xl bg-white border border-brand-purple-900/10 text-brand-purple-deep"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white rounded-2xl shadow-xl border border-brand-purple-900/10 flex flex-col gap-2 text-left animate-fadeIn">
            <button
              onClick={() => scrollTo("hero")}
              className="px-3 py-2 text-sm font-bold text-brand-purple-deep hover:bg-brand-purple-50 rounded-lg text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo("question-bank")}
              className="px-3 py-2 text-sm font-semibold text-brand-text-secondary hover:bg-brand-purple-50 rounded-lg text-left"
            >
              Learn & Practice
            </button>
            <button
              onClick={() => scrollTo("career-tracks")}
              className="px-3 py-2 text-sm font-semibold text-brand-text-secondary hover:bg-brand-purple-50 rounded-lg text-left"
            >
              Career Tracks
            </button>
            <button
              onClick={() => scrollTo("hackathons")}
              className="px-3 py-2 text-sm font-semibold text-brand-text-secondary hover:bg-brand-purple-50 rounded-lg text-left"
            >
              Hackathons
            </button>
            <button
              onClick={() => scrollTo("for-colleges")}
              className="px-3 py-2 text-sm font-semibold text-brand-text-secondary hover:bg-brand-purple-50 rounded-lg text-left"
            >
              For Colleges
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onApplyMouClick();
              }}
              className="px-3 py-2 text-sm font-semibold text-brand-text-secondary hover:bg-brand-purple-50 rounded-lg text-left"
            >
              Apply for MOU
            </button>
            <div className="pt-2 border-t border-brand-purple-900/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onGetStartedClick();
                }}
                className="w-full py-2.5 rounded-xl bg-brand-yellow-400 text-brand-purple-darkest font-bold text-sm shadow-sm"
              >
                Get Started
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
