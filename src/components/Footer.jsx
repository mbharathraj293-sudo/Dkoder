import React from "react";
import {
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Heart,
  Globe,
  Send
} from "lucide-react";

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-purple-deep text-white pt-16 pb-12 border-t border-brand-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-yellow-400 to-amber-500 flex items-center justify-center text-brand-purple-deep shadow-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
                    stroke="#0F0624"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="3" fill="#0F0624" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                DKODER<span className="text-brand-yellow-400">OS</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-purple-200 leading-relaxed max-w-sm mb-6">
              The Next-Gen Student Opportunity Operating System. Connecting student ambition to real skills, hackathons, campuses, and career-launching milestones.
            </p>

            {/* Operational Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950 border border-purple-800/80 text-[11px] font-mono text-purple-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Opportunity Feeds Operational</span>
            </div>
          </div>

          {/* Nav Column 1: Explore */}
          <div className="text-left">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-yellow-300 mb-4">
              Explore
            </div>
            <ul className="space-y-2.5 text-xs text-purple-200">
              <li>
                <button onClick={() => scrollTo("#journey")} className="hover:text-white transition-colors">
                  Opportunity Journey
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#opportunity-match")} className="hover:text-white transition-colors">
                  AI Match Engine
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#hackathons")} className="hover:text-white transition-colors">
                  Live Hackathons
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#colleges")} className="hover:text-white transition-colors">
                  Campus Chapters
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Column 2: Learn */}
          <div className="text-left">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-yellow-300 mb-4">
              Learn Tracks
            </div>
            <ul className="space-y-2.5 text-xs text-purple-200">
              <li>
                <button onClick={() => scrollTo("#learn")} className="hover:text-white transition-colors">
                  AI & Transformers
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#learn")} className="hover:text-white transition-colors">
                  Modern Web Edge
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#learn")} className="hover:text-white transition-colors">
                  Predictive Data Science
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#learn")} className="hover:text-white transition-colors">
                  IoT Edge Microcontrollers
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#learn")} className="hover:text-white transition-colors">
                  Cyber Defense CTF
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Column 3: Campuses */}
          <div className="text-left">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-yellow-300 mb-4">
              Campuses
            </div>
            <ul className="space-y-2.5 text-xs text-purple-200">
              <li>
                <button onClick={() => scrollTo("#colleges")} className="hover:text-white transition-colors">
                  IIT Bombay Hub
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#colleges")} className="hover:text-white transition-colors">
                  BITS Pilani Chapter
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#colleges")} className="hover:text-white transition-colors">
                  DTU Delhi Circle
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#colleges")} className="hover:text-white transition-colors">
                  NIT Surathkal Squad
                </button>
              </li>
              <li>
                <span className="text-[11px] font-mono text-brand-yellow-400">
                  +496 More Hubs
                </span>
              </li>
            </ul>
          </div>

          {/* Nav Column 4: About & Socials */}
          <div className="text-left">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-yellow-300 mb-4">
              Connect
            </div>
            <p className="text-xs text-purple-200 mb-4 leading-relaxed">
              Have questions or want to partner your college club with DKODER OS?
            </p>

            <div className="flex items-center gap-2 mb-4">
              {/* GitHub SVG */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Community"
                className="w-8 h-8 rounded-lg bg-purple-900 flex items-center justify-center text-purple-200 hover:text-white hover:bg-brand-purple-700 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* Twitter / X SVG */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-lg bg-purple-900 flex items-center justify-center text-purple-200 hover:text-white hover:bg-brand-purple-700 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn SVG */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-purple-900 flex items-center justify-center text-purple-200 hover:text-white hover:bg-brand-purple-700 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Discord / Community */}
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Community"
                className="w-8 h-8 rounded-lg bg-purple-900 flex items-center justify-center text-purple-200 hover:text-white hover:bg-brand-purple-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            <div className="text-[11px] font-mono text-purple-300">
              contact@dkoder.co.in
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 border-t border-brand-purple-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300">
          <div className="flex items-center gap-2">
            <span>© 2026 DKODER OS. Designed for ambition. Built for impact.</span>
          </div>

          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Opportunity</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Campus Guidelines</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
