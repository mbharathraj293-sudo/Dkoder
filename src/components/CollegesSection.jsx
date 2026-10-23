import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Trophy,
  Calendar,
  Users,
  ArrowRight,
  Sparkles,
  Share2,
  CheckCircle2,
  Compass
} from "lucide-react";
import { COLLEGES_DATA } from "../data/mockData";

export default function CollegesSection({ onExploreCampus }) {
  const [selectedCampus, setSelectedCampus] = useState(COLLEGES_DATA[0]);

  return (
    <section id="colleges" className="py-20 md:py-28 relative bg-white border-t border-brand-purple-900/5 overflow-hidden">
      
      {/* Decorative Network constellation SVG in background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
          <circle cx="200" cy="150" r="4" fill="#7E22CE" />
          <circle cx="450" cy="180" r="5" fill="#FACC15" />
          <circle cx="700" cy="120" r="4" fill="#9333EA" />
          <circle cx="350" cy="380" r="4" fill="#6B21A8" />
          <circle cx="600" cy="420" r="5" fill="#EAB308" />
          <circle cx="850" cy="350" r="4" fill="#7E22CE" />
          
          <path
            d="M200 150 L450 180 L700 120 M450 180 L350 380 L600 420 L850 350 M700 120 L850 350"
            stroke="#7E22CE"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple-100/70 text-brand-purple-900 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Share2 className="w-3.5 h-3.5 text-brand-purple-700" />
            05 • Campus Ecosystem
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-purple-deep tracking-tight mb-4">
            Where Students &{" "}
            <span className="text-brand-purple-700">Campuses Connect</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
            Discover colleges, communities, challenges and events that match your interests.
          </p>
        </div>

        {/* Network Constellation & Campus Cards Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Interactive Campus Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {COLLEGES_DATA.map((college, idx) => {
              const isSelected = selectedCampus.id === college.id;

              return (
                <div
                  key={college.id}
                  onClick={() => setSelectedCampus(college)}
                  className={`group cursor-pointer rounded-3xl p-5 sm:p-6 transition-all duration-300 relative text-left border ${
                    isSelected
                      ? "bg-white border-brand-purple-600 shadow-[0_15px_35px_-10px_rgba(88,28,135,0.18)] ring-2 ring-brand-purple-200"
                      : "bg-[#FAF9F5] border-brand-purple-900/10 hover:border-brand-purple-300 hover:bg-white shadow-sm"
                  }`}
                >
                  {/* Top: Badge + City */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-purple-50 text-brand-purple-800 border border-brand-purple-100">
                      {college.badge}
                    </span>
                    <span className="text-xs font-medium text-brand-text-muted flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-brand-purple-600" />
                      {college.city.split(",")[0]}
                    </span>
                  </div>

                  {/* College Name */}
                  <h3 className="font-display font-bold text-lg text-brand-purple-deep group-hover:text-brand-purple-800 transition-colors mb-2">
                    {college.shortName}
                  </h3>
                  <div className="text-[11px] text-brand-text-muted mb-4 line-clamp-1">
                    {college.name}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-xl bg-white/90 border border-brand-purple-900/5 mb-4 text-center">
                    <div>
                      <div className="font-mono font-bold text-xs text-brand-purple-900">
                        {college.activeChallenges}
                      </div>
                      <div className="text-[9px] text-brand-text-muted uppercase">Challenges</div>
                    </div>
                    <div>
                      <div className="font-mono font-bold text-xs text-brand-purple-900">
                        {college.upcomingEvents}
                      </div>
                      <div className="text-[9px] text-brand-text-muted uppercase">Events</div>
                    </div>
                    <div>
                      <div className="font-mono font-bold text-xs text-brand-purple-900">
                        {college.studentCommunity}
                      </div>
                      <div className="text-[9px] text-brand-text-muted uppercase">Students</div>
                    </div>
                  </div>

                  {/* Lead Club & Action */}
                  <div className="flex items-center justify-between pt-2 border-t border-brand-purple-900/5">
                    <span className="text-[11px] text-brand-text-secondary truncate font-medium">
                      Club: {college.leadClub}
                    </span>
                    <span className="text-xs font-bold text-brand-purple-700 flex items-center gap-1 group-hover:text-brand-purple-900 shrink-0">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 text-brand-yellow-500" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Campus Spotlight & Network Visual Hub */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-purple-deep via-brand-purple-900 to-brand-purple-950 rounded-3xl p-6 sm:p-8 text-white relative shadow-xl border border-brand-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-yellow-300">
                ✦ Campus Chapter Spotlight
              </span>
              <span className="text-xs font-mono text-purple-200 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800">
                {selectedCampus.tier}
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl text-white mb-2">
              {selectedCampus.name}
            </h3>
            <p className="text-xs text-purple-200 mb-6 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-yellow-400" />
              {selectedCampus.city}
            </p>

            {/* Network Node Mini Illustration */}
            <div className="relative h-32 rounded-2xl bg-purple-950/60 border border-purple-800/80 p-3 mb-6 overflow-hidden flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 300 100">
                <line x1="50" y1="50" x2="150" y2="50" stroke="#7E22CE" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="150" y1="50" x2="250" y2="50" stroke="#EAB308" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="14" fill="#1C0D3A" stroke="#7E22CE" strokeWidth="2" />
                <circle cx="150" cy="50" r="22" fill="#7E22CE" stroke="#FACC15" strokeWidth="2.5" />
                <circle cx="250" cy="50" r="14" fill="#1C0D3A" stroke="#EAB308" strokeWidth="2" />
                
                <text x="50" y="54" fill="#E9D5FF" fontSize="9" textAnchor="middle" fontFamily="sans-serif">LABS</text>
                <text x="150" y="54" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">HUB</text>
                <text x="250" y="54" fill="#FEF08A" fontSize="9" textAnchor="middle" fontFamily="sans-serif">CLUBS</text>
              </svg>
            </div>

            {/* Popular Tracks on Campus */}
            <div className="space-y-3 mb-6">
              <div className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
                Active Student Focus Areas
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedCampus.popularTracks.map((trk) => (
                  <span
                    key={trk}
                    className="text-xs font-medium px-3 py-1 rounded-lg bg-purple-800/50 text-white border border-purple-700/50"
                  >
                    {trk}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                alert(`Connecting to ${selectedCampus.shortName} Student Chapter! Opening collegiate challenge feed.`);
              }}
              className="w-full py-3 px-4 rounded-xl bg-brand-yellow-400 text-brand-purple-darkest font-bold text-xs sm:text-sm hover:bg-brand-yellow-300 transition-colors text-center shadow-md flex items-center justify-center gap-2"
            >
              <span>Connect with {selectedCampus.shortName} Community</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Global Campus Network Metric Bar */}
        <div className="border border-brand-purple-900/10 rounded-2xl p-4 bg-[#FAF9F5] flex flex-wrap items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-purple-100 flex items-center justify-center text-brand-purple-900 font-bold">
              🏛️
            </div>
            <div>
              <div className="text-xs font-bold text-brand-purple-deep">Are you a campus club lead or organizer?</div>
              <div className="text-[11px] text-brand-text-muted">Host your college hackathons and community challenges on DKODER OS.</div>
            </div>
          </div>

          <button
            onClick={() => alert("Campus Partner Portal: Registering student club lead...")}
            className="px-4 py-2 rounded-lg bg-white border border-brand-purple-900/15 text-brand-purple-900 text-xs font-bold hover:bg-brand-purple-50 transition-colors"
          >
            Apply for Campus Chapter →
          </button>
        </div>

      </div>
    </section>
  );
}
