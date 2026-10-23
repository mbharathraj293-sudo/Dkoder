import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  Users,
  CheckCircle2,
  X,
  ExternalLink,
  Flame
} from "lucide-react";
import { HACKATHONS_DATA } from "../data/mockData";

export default function HackathonsSection({ onSelectHackathon }) {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeChallengeModal, setActiveChallengeModal] = useState(null);

  const filterTabs = ["All", "AI", "Web", "IoT", "Cyber", "Open Innovation"];

  const filteredHackathons = HACKATHONS_DATA.filter((hackathon) => {
    if (selectedFilter === "All") return true;
    return hackathon.category.toLowerCase() === selectedFilter.toLowerCase();
  });

  return (
    <section id="hackathons" className="py-20 md:py-28 relative bg-[#FAF9F5] border-t border-brand-purple-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow-100 text-brand-purple-950 text-xs font-mono font-semibold uppercase tracking-wider mb-3 border border-brand-yellow-400/40">
              <Flame className="w-3.5 h-3.5 text-brand-yellow-600" />
              04 • Competitive Arena
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-purple-deep tracking-tight mb-4">
              Find Your Next <span className="text-brand-purple-700">Challenge</span>
            </h2>
            <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
              Step into competitive arenas, build under pressure, win grants, and get scouted by top tech teams.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none self-start md:self-auto max-w-full">
            {filterTabs.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-full whitespace-nowrap transition-all duration-200 ${
                  selectedFilter === cat
                    ? "bg-brand-purple-deep text-brand-yellow-300 shadow-md font-bold"
                    : "bg-white text-brand-text-secondary hover:text-brand-purple-950 border border-brand-purple-900/10 hover:border-brand-purple-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Hackathons Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-14">
          {filteredHackathons.map((item, index) => {
            const isClosingSoon = item.daysLeft <= 5;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="group relative bg-white rounded-3xl p-6 border border-brand-purple-900/10 hover:border-brand-purple-600/40 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(88,28,135,0.15)] flex flex-col justify-between"
              >
                {/* Top Row: Category + Mode + Live status */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold bg-brand-purple-50 text-brand-purple-900 px-2.5 py-1 rounded-md border border-brand-purple-200/60 uppercase">
                        {item.category}
                      </span>
                      <span className="text-[11px] font-mono font-medium text-brand-text-muted flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-brand-purple-600" />
                        {item.mode}
                      </span>
                    </div>

                    {/* Status indicator with pulsing dot */}
                    <div className="flex items-center gap-1.5">
                      <span className="flex h-2 w-2 relative">
                        <span
                          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                            isClosingSoon ? "bg-amber-400" : "bg-emerald-400"
                          }`}
                        />
                        <span
                          className={`relative inline-flex rounded-full h-2 w-2 ${
                            isClosingSoon ? "bg-amber-500" : "bg-emerald-500"
                          }`}
                        />
                      </span>
                      <span
                        className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                          isClosingSoon ? "text-amber-700" : "text-emerald-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>

                  {/* Title & Host */}
                  <h3 className="font-display font-bold text-xl text-brand-purple-deep group-hover:text-brand-purple-800 transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-xs text-brand-text-muted mb-4 font-sans">
                    Hosted by <span className="font-medium text-brand-text-primary">{item.host}</span>
                  </div>

                  <p className="text-xs text-brand-text-secondary leading-relaxed mb-6 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Stats & Action Block */}
                <div>
                  {/* Prize & Countdown Row */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF9F5] border border-brand-purple-900/5 mb-5">
                    <div>
                      <div className="text-[10px] font-mono uppercase text-brand-text-muted">Total Prize Pool</div>
                      <div className="font-display font-black text-lg text-brand-purple-deep flex items-center gap-1">
                        <span className="text-brand-yellow-500 font-bold">🏆</span>
                        <span className="bg-brand-yellow-300/40 px-1.5 py-0.5 rounded text-brand-purple-darkest">
                          {item.prize}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] font-mono uppercase text-brand-text-muted">Time Remaining</div>
                      <div
                        className={`font-mono font-bold text-xs flex items-center justify-end gap-1 ${
                          isClosingSoon ? "text-amber-600" : "text-brand-purple-900"
                        }`}
                      >
                        <Clock className="w-3 h-3" />
                        <span>{item.daysLeft} days left</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => setActiveChallengeModal(item)}
                    className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-brand-purple-900 text-brand-purple-deep hover:text-white border border-brand-purple-900/15 font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-sm"
                  >
                    <span>View Challenge</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-yellow-500 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Hackathons CTA Banner */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-brand-purple-deep via-brand-purple-900 to-brand-purple-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-brand-purple-700/30">
          <div className="text-left">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-yellow-300 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              Continuous Hackathon Radar
            </div>
            <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
              Looking for collegiate or international challenges?
            </h4>
            <p className="text-xs sm:text-sm text-purple-200 mt-1">
              We sync with 48+ active hackathon organizers daily across national college circuits.
            </p>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById("opportunity-match");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="shrink-0 px-6 py-3 rounded-xl bg-brand-yellow-400 text-brand-purple-darkest font-bold text-xs sm:text-sm hover:bg-brand-yellow-300 transition-colors shadow-md flex items-center gap-2"
          >
            <span>Match with Relevant Hackathons</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Challenge Modal Details */}
        <AnimatePresence>
          {activeChallengeModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-purple-darkest/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-brand-purple-900/15 relative overflow-hidden"
              >
                <button
                  onClick={() => setActiveChallengeModal(null)}
                  className="absolute top-5 right-5 p-2 rounded-full hover:bg-brand-purple-50 text-brand-purple-deep transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-brand-yellow-100 text-brand-purple-950 border border-brand-yellow-400/50">
                    {activeChallengeModal.category}
                  </span>
                  <span className="text-xs font-mono text-brand-text-muted">
                    {activeChallengeModal.mode}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-brand-purple-deep mb-2">
                  {activeChallengeModal.title}
                </h3>
                <div className="text-xs text-brand-text-muted mb-4">
                  Organized by <span className="text-brand-purple-900 font-semibold">{activeChallengeModal.host}</span>
                </div>

                <p className="text-xs sm:text-sm text-brand-text-secondary mb-6 leading-relaxed">
                  {activeChallengeModal.description}
                </p>

                {/* Challenge Tracks */}
                <div className="mb-6">
                  <div className="text-xs font-mono font-bold uppercase text-brand-purple-950 mb-2.5">
                    Official Challenge Tracks
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeChallengeModal.tracks.map((track) => (
                      <span
                        key={track}
                        className="text-xs font-medium px-3 py-1.5 rounded-lg bg-brand-purple-50 text-brand-purple-900 border border-brand-purple-100"
                      >
                        {track}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#FAF9F5] border border-brand-purple-900/5 mb-6 text-center">
                  <div>
                    <div className="text-[10px] font-mono text-brand-text-muted uppercase">Prize</div>
                    <div className="font-bold text-xs sm:text-sm text-brand-purple-deep">{activeChallengeModal.prize}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-brand-text-muted uppercase">Dates</div>
                    <div className="font-bold text-xs sm:text-sm text-brand-purple-deep">{activeChallengeModal.dates}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-brand-text-muted uppercase">Participants</div>
                    <div className="font-bold text-xs sm:text-sm text-brand-purple-deep">{activeChallengeModal.participantsCount}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      alert(`Registered interest for ${activeChallengeModal.title}! You will be matched with squad teammates.`);
                      setActiveChallengeModal(null);
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-brand-yellow-400 text-brand-purple-darkest font-bold text-sm hover:bg-brand-yellow-300 transition-colors text-center shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Register / Join Squad</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
