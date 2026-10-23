import React from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  CheckCircle2,
  ArrowUp,
  ShieldCheck,
  Building2,
  Award
} from "lucide-react";
import { DKODER_BRAND, RECOGNITIONS } from "../data/dkoderData";

export default function DkoderFooter({ onPartnerClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-purple-deep text-white pt-16 pb-10 border-t border-brand-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Authentic Top Contact Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {/* CALL US */}
          <a
            href="tel:+918754200247"
            className="p-5 rounded-2xl bg-purple-950/80 border border-purple-800/80 hover:border-brand-yellow-400 transition-colors flex items-center justify-between group text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-brand-yellow-400 text-brand-purple-darkest flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-300">
                  CALL US
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-white">
                  {DKODER_BRAND.phone}
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover:text-brand-yellow-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/918754200247"
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-2xl bg-purple-950/80 border border-purple-800/80 hover:border-brand-yellow-400 transition-colors flex items-center justify-between group text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-brand-yellow-400 text-brand-purple-darkest flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-300">
                  WHATSAPP
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-white">
                  Chat with our team
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover:text-brand-yellow-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* EMAIL SUPPORT */}
          <a
            href="mailto:support@dkoder.co.in"
            className="p-5 rounded-2xl bg-purple-950/80 border border-purple-800/80 hover:border-brand-yellow-400 transition-colors flex items-center justify-between group text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-brand-yellow-400 text-brand-purple-darkest flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-300">
                  EMAIL SUPPORT
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-white">
                  {DKODER_BRAND.email}
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover:text-brand-yellow-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 2. Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16 text-left">
          
          {/* Company Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Dkoder Logo */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl bg-brand-yellow-400 flex items-center justify-center text-brand-purple-darkest shadow-md">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3L2 8L12 13L22 8L12 3Z" fill="#1C0D3A" />
                    <path d="M6 10.5V15C6 17 9 19 12 19C15 19 18 17 18 15V10.5" stroke="#1C0D3A" strokeWidth="2" strokeLinecap="round" />
                    <path d="M10 9L8.5 10.5L10 12M14 9L15.5 10.5L14 12" stroke="#FACC15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="font-display font-extrabold text-2xl text-white">
                  Dkoder
                </span>
              </div>

              <p className="text-xs sm:text-sm text-purple-200 leading-relaxed max-w-md mb-6">
                {DKODER_BRAND.description}
              </p>

              {/* Office Address */}
              <div className="p-4 rounded-2xl bg-purple-950/60 border border-purple-800/80 mb-6 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-yellow-400 shrink-0 mt-0.5" />
                <div className="text-xs text-purple-200">
                  <span className="font-bold text-white block">Our office:</span>
                  {DKODER_BRAND.office}
                </div>
              </div>

              <button
                onClick={onPartnerClick}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-yellow-400 text-brand-purple-darkest font-extrabold text-xs hover:bg-brand-yellow-300 transition-colors shadow-md"
              >
                <span>Partner with us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Navigation Links Columns (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
            
            {/* For students */}
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-yellow-300 mb-4 flex items-center gap-1.5">
                <span>🎓 For students</span>
              </div>
              <ul className="space-y-2 text-xs text-purple-200">
                <li><a href="#question-bank" className="hover:text-white transition-colors">Practice</a></li>
                <li><a href="#question-bank" className="hover:text-white transition-colors">Coding practice</a></li>
                <li><a href="#career-tracks" className="hover:text-white transition-colors">Platform arena</a></li>
                <li><a href="#hackathons" className="hover:text-white transition-colors">Challenges</a></li>
                <li><a href="#leaderboard" className="hover:text-white transition-colors">Leaderboard</a></li>
                <li><a href="#career-tracks" className="hover:text-white transition-colors">Courses</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* For institutions */}
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-yellow-300 mb-4 flex items-center gap-1.5">
                <span>🏛️ For institutions</span>
              </div>
              <ul className="space-y-2 text-xs text-purple-200">
                <li><a href="#for-colleges" className="hover:text-white transition-colors">Dkoder for colleges</a></li>
                <li><button onClick={onPartnerClick} className="hover:text-white transition-colors text-left">Apply for MOU</button></li>
                <li><a href="#hackathons" className="hover:text-white transition-colors">Host a hackathon</a></li>
                <li><a href="#for-colleges" className="hover:text-white transition-colors">Benefits for institutions</a></li>
                <li><a href="#hero" className="hover:text-white transition-colors">Institution sign-in</a></li>
              </ul>
            </div>

            {/* Programmes */}
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-yellow-300 mb-4 flex items-center gap-1.5">
                <span>🏆 Programmes</span>
              </div>
              <ul className="space-y-2 text-xs text-purple-200">
                <li><a href="#hackathons" className="hover:text-white transition-colors">Hackathons</a></li>
                <li><a href="#hackathons" className="hover:text-white transition-colors">100 Days of Sustainability</a></li>
                <li><a href="#career-tracks" className="hover:text-white transition-colors">Final Year Projects</a></li>
                <li><a href="#question-bank" className="hover:text-white transition-colors">Topic certifications</a></li>
                <li><a href="#career-tracks" className="hover:text-white transition-colors">Technology certifications</a></li>
              </ul>
            </div>

            {/* Help & support */}
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-yellow-300 mb-4 flex items-center gap-1.5">
                <span>🎧 Help & support</span>
              </div>
              <ul className="space-y-2 text-xs text-purple-200">
                <li><a href="mailto:support@dkoder.co.in" className="hover:text-white transition-colors">Contact support</a></li>
                <li><a href="https://wa.me/918754200247" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Chat on WhatsApp</a></li>
                <li><a href="#hero" className="hover:text-white transition-colors">Sign in</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Create an account</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* 3. Authentic Recognitions & Registrations Grid */}
        <div className="pt-10 pb-8 border-t border-purple-800/80">
          <div className="text-left text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-5 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-yellow-400" />
            <span>RECOGNITIONS & REGISTRATIONS</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {RECOGNITIONS.map((rec) => (
              <div
                key={rec.name}
                className="p-3 rounded-xl bg-purple-950/70 border border-purple-800/60 text-center flex flex-col items-center justify-center min-h-[72px]"
              >
                <div className="text-[11px] font-bold text-white leading-tight">
                  {rec.name}
                </div>
                <div className="text-[9px] font-mono text-brand-yellow-300 mt-1">
                  {rec.badge}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Statutory Numbers Bar */}
        <div className="py-4 px-6 rounded-2xl bg-purple-950 border border-purple-800/80 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-purple-300 mb-8">
          <div><span className="text-white font-bold">CIN:</span> {DKODER_BRAND.cin}</div>
          <div><span className="text-white font-bold">MSME Udyam:</span> {DKODER_BRAND.msme}</div>
          <div><span className="text-white font-bold">DPIIT recognition:</span> {DKODER_BRAND.dpiit}</div>
          <div><span className="text-white font-bold">ISO 9001:2015:</span> {DKODER_BRAND.iso}</div>
        </div>

        {/* 5. Bottom Copyright & Back to Top */}
        <div className="pt-6 border-t border-purple-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300">
          <div>© 2026 Dkoder. All rights reserved.</div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-brand-yellow-300 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow-400" />
            <span>Practice • Learn • Achieve</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors font-mono text-xs"
          >
            <ArrowUp className="w-4 h-4 text-brand-yellow-400" />
            <span>Back to top</span>
          </button>
        </div>

      </div>
    </footer>
  );
}
