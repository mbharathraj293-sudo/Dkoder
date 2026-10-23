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
  Flame,
  Award,
  Layers
} from "lucide-react";
import { HACKATHONS_DKODER } from "../data/dkoderData";

export default function DkoderHackathons({ onRegisterHackathon }) {
  const [selectedHackathon, setSelectedHackathon] = useState(HACKATHONS_DKODER[0]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenChallenge = (hackathon) => {
    setSelectedHackathon(hackathon);
    setModalOpen(true);
  };

  return (
    <section id="hackathons" className="py-20 md:py-28 bg-white text-brand-purple-deep relative overflow-hidden border-t border-brand-purple-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow-100 text-brand-purple-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-brand-yellow-400/50">
              <Flame className="w-3.5 h-3.5 text-brand-yellow-600" />
              Dkoder Campus Competitions
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-purple-deep tracking-tight mb-3">
              Hackathons & Campus Challenges
            </h2>
            <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
              Real problem statements, campus hackathons, cash prizes, and direct corporate recruitment shortcuts.
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs font-mono font-bold text-brand-purple-700 bg-brand-purple-50 px-3 py-1.5 rounded-full border border-brand-purple-200">
              Official Collegiate Hackathon Circuit
            </span>
          </div>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {HACKATHONS_DKODER.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between text-left relative ${
                item.id === "6ac87549e82640524bc8c1fe"
                  ? "bg-[#FEFCE8] border-2 border-brand-yellow-500 shadow-xl"
                  : "bg-[#FAF9F5] border-brand-purple-900/10 hover:border-brand-purple-400 hover:bg-white shadow-sm"
              }`}
            >
              {item.id === "6ac87549e82640524bc8c1fe" && (
                <div className="absolute -top-3.5 right-6 bg-brand-purple-deep text-brand-yellow-300 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider shadow">
                  ✦ Featured Challenge
                </div>
              )}

              <div>
                {/* Category & Mode */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider bg-white text-brand-purple-900 px-2.5 py-1 rounded-lg border border-brand-purple-200">
                    {item.category.split("•")[0]}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase">
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Title & Host */}
                <h3 className="font-display font-extrabold text-xl text-brand-purple-deep mb-2 leading-tight">
                  {item.title}
                </h3>
                <div className="text-xs text-brand-text-muted mb-4">
                  Organized by <span className="font-semibold text-brand-purple-900">{item.host}</span>
                </div>

                <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>

                {/* Challenge Tracks */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tracks.map((trk) => (
                    <span
                      key={trk}
                      className="text-[10.5px] font-medium bg-white px-2 py-0.5 rounded border border-brand-purple-900/10 text-brand-purple-deep"
                    >
                      {trk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Prize & CTA */}
              <div className="pt-4 border-t border-brand-purple-900/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-brand-text-muted">Total Prize</div>
                    <div className="font-display font-black text-xl text-brand-purple-deep text-left">
                      {item.prize}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase text-brand-text-muted">Time Left</div>
                    <div className="text-xs font-mono font-bold text-brand-purple-900 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-yellow-600" />
                      <span>{item.daysLeft} days left</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenChallenge(item)}
                  className="w-full py-3 px-4 rounded-xl bg-brand-purple-deep hover:bg-brand-purple-900 text-brand-yellow-300 font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>View Challenge Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Hackathon Detail Modal */}
        <AnimatePresence>
          {modalOpen && selectedHackathon && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-purple-darkest/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border-2 border-brand-purple-deep relative overflow-hidden text-left"
              >
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute top-5 right-5 p-2 rounded-full hover:bg-brand-purple-50 text-brand-purple-deep transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-brand-yellow-100 text-brand-purple-950 border border-brand-yellow-400">
                    {selectedHackathon.category}
                  </span>
                  <span className="text-xs font-mono text-brand-text-muted">
                    {selectedHackathon.mode}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl text-brand-purple-deep mb-2">
                  {selectedHackathon.title}
                </h3>
                <div className="text-xs text-brand-text-muted mb-4">
                  Hosted by {selectedHackathon.host} • {selectedHackathon.dates}
                </div>

                <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed mb-6">
                  {selectedHackathon.description}
                </p>

                {/* Competition Rounds */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-mono font-bold uppercase text-brand-purple-950">
                    Challenge Schedule & Rounds
                  </div>
                  {selectedHackathon.rounds.map((round, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#FAF9F5] border border-brand-purple-900/10 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-md bg-brand-yellow-400 text-brand-purple-darkest font-mono font-bold text-[10px] flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="font-bold text-brand-purple-deep">{round.name}</span>
                      </div>
                      <span className="font-mono text-brand-purple-700 font-semibold">{round.date}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setModalOpen(false);
                    onRegisterHackathon(selectedHackathon);
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-brand-yellow-400 text-brand-purple-darkest font-extrabold text-sm hover:bg-brand-yellow-300 transition-colors text-center shadow-md flex items-center justify-center gap-2"
                >
                  <span>Register for {selectedHackathon.title}</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
