import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Building2,
  TrendingUp,
  Layers,
  CheckCircle2,
  BookOpen
} from "lucide-react";
import { CAREER_TRACKS } from "../data/dkoderData";

export default function DkoderCareerTracks({ onPracticeTrackClick }) {
  const [selectedTrackId, setSelectedTrackId] = useState("service");

  const currentTrack = CAREER_TRACKS.find((t) => t.id === selectedTrackId) || CAREER_TRACKS[0];

  return (
    <section id="career-tracks" className="py-20 md:py-28 bg-[#FAF9F5] text-brand-purple-deep relative overflow-hidden border-t border-brand-purple-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Controls & Right Career Focus Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Track Selector Pills & Headings (Exact Dkoder Content) */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between">
            <div>
              {/* Heading */}
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-brand-purple-deep tracking-tight mb-6 leading-[1.05]">
                Right filter.{" "}
                <span className="block text-brand-purple-900 underline decoration-brand-yellow-400 decoration-wavy decoration-2">
                  Right career.
                </span>
              </h2>

              {/* 5 Career Track Pills with Count Badges */}
              <div className="flex flex-col gap-2.5 mb-8">
                {CAREER_TRACKS.map((track) => {
                  const isSelected = selectedTrackId === track.id;
                  return (
                    <button
                      key={track.id}
                      onClick={() => setSelectedTrackId(track.id)}
                      className={`group p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between ${
                        isSelected
                          ? "bg-brand-yellow-400 border-brand-yellow-500 text-brand-purple-darkest font-bold shadow-md scale-[1.02]"
                          : "bg-white border-brand-purple-900/10 hover:border-brand-purple-400 text-brand-purple-deep shadow-sm"
                      }`}
                    >
                      <span className="text-sm sm:text-base font-display font-bold">
                        {track.title}
                      </span>

                      <span
                        className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-brand-purple-deep text-brand-yellow-300"
                            : "bg-brand-purple-50 text-brand-purple-900 border border-brand-purple-200/50"
                        }`}
                      >
                        {track.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Aggregation Stats */}
              <div className="text-xs sm:text-sm text-brand-text-muted font-sans mb-8">
                3,254 questions from 44 companies • 12 prep bundles
              </div>

              {/* Primary & Secondary Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onPracticeTrackClick(currentTrack)}
                  className="px-7 py-3.5 rounded-2xl bg-brand-purple-deep text-brand-yellow-300 hover:bg-brand-purple-900 font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Practice this track</span>
                  <ArrowRight className="w-4 h-4 text-brand-yellow-400" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById("pricing");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-3.5 rounded-2xl bg-white border border-brand-purple-900/15 hover:bg-brand-purple-50 text-brand-purple-deep font-bold text-sm transition-colors text-center shadow-sm"
                >
                  Browse all bundles
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Career Focus Card (Exact Dkoder structure) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTrack.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-purple-deep shadow-xl text-left"
              >
                {/* Header */}
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-purple-700 mb-1">
                  CAREER FOCUS
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-purple-deep mb-2">
                  {currentTrack.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed mb-6">
                  {currentTrack.headline}
                </p>

                {/* Package & Questions Metric Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  
                  {/* PACKAGE Box */}
                  <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-brand-purple-900/10">
                    <div className="text-[10px] font-mono font-bold uppercase text-brand-text-muted mb-1">
                      PACKAGE
                    </div>
                    <div className="font-display font-black text-2xl text-brand-purple-deep mb-2">
                      {currentTrack.package}
                    </div>
                    {/* Visual Salary Tier Slider */}
                    <div className="h-2 w-full bg-brand-purple-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand-yellow-400 rounded-full"
                        style={{ width: `${Math.min((currentTrack.packageMax / 45) * 100, 100)}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[9px] font-mono text-brand-text-muted mt-1">
                      <span>0</span>
                      <span>25</span>
                      <span>50+ LPA</span>
                    </div>
                  </div>

                  {/* QUESTIONS & DIFFICULTY Box */}
                  <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-brand-purple-900/10">
                    <div className="text-[10px] font-mono font-bold uppercase text-brand-text-muted mb-1">
                      QUESTIONS & DIFFICULTY
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="font-display font-black text-2xl text-brand-purple-deep">
                        {currentTrack.questionsTotal.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-brand-text-muted">
                        {currentTrack.mcqCount} MCQ • {currentTrack.codingCount} coding • {currentTrack.platformCount} platform
                      </span>
                    </div>

                    {/* Tri-color Difficulty Bar */}
                    <div className="h-2 w-full bg-brand-purple-100 rounded-full flex overflow-hidden mb-1.5">
                      <div style={{ width: `${(currentTrack.easy / currentTrack.questionsTotal) * 100}%` }} className="bg-emerald-500" />
                      <div style={{ width: `${(currentTrack.medium / currentTrack.questionsTotal) * 100}%` }} className="bg-amber-400" />
                      <div style={{ width: `${(currentTrack.hard / currentTrack.questionsTotal) * 100}%` }} className="bg-rose-500" />
                    </div>

                    <div className="flex items-center gap-3 text-[10px] font-mono text-brand-text-secondary">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Easy {currentTrack.easy}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Medium {currentTrack.medium}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Hard {currentTrack.hard}
                      </span>
                    </div>
                  </div>

                </div>

                {/* HIRING FOR THIS TRACK */}
                <div className="mb-6">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-purple-900 mb-2.5">
                    HIRING FOR THIS TRACK • {currentTrack.count} COMPANIES
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {currentTrack.hiringCompanies.map((comp) => (
                      <span
                        key={comp.name}
                        className="px-3 py-1.5 rounded-xl bg-[#FAF9F5] border border-brand-purple-900/15 text-xs font-semibold text-brand-purple-deep flex items-center gap-2"
                      >
                        <span>{comp.name}</span>
                        <span className="text-[10px] font-mono font-bold bg-brand-yellow-100 text-brand-purple-950 px-1.5 py-0.5 rounded border border-brand-yellow-400/50">
                          {comp.salary}
                        </span>
                      </span>
                    ))}
                    <span className="px-3 py-1.5 rounded-xl bg-brand-purple-50 text-xs font-mono font-bold text-brand-purple-700">
                      +{currentTrack.count - currentTrack.hiringCompanies.length} more
                    </span>
                  </div>
                </div>

                {/* YOUR NEXT MOVE & PREP BUNDLES */}
                <div className="pt-5 border-t border-brand-purple-900/10">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-purple-900 mb-1">
                    YOUR NEXT MOVE
                  </div>
                  <p className="text-xs text-brand-text-secondary mb-3">
                    {currentTrack.nextMove}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentTrack.bundles.map((bundle) => (
                      <div
                        key={bundle.title}
                        className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-brand-purple-900/10 flex items-center justify-between hover:border-brand-purple-400 transition-colors"
                      >
                        <div>
                          <div className="font-display font-bold text-xs sm:text-sm text-brand-purple-deep">
                            {bundle.title}
                          </div>
                          <div className="text-[10px] text-brand-text-muted">{bundle.questions}</div>
                        </div>

                        <button
                          onClick={() => alert(`Opening ${bundle.title} (${bundle.price})`)}
                          className="px-2.5 py-1 rounded-lg bg-brand-yellow-400 text-brand-purple-darkest font-mono font-bold text-xs hover:bg-brand-yellow-300 transition-colors flex items-center gap-1 shrink-0"
                        >
                          <span>{bundle.price}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
