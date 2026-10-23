import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  X,
  Compass,
  Building2,
  ChevronRight,
  Bot
} from "lucide-react";
import { TOP_COMPANIES, CANDIDATE_THOUGHTS } from "../data/dkoderData";

export default function DkoderHero({ onTryFiltersClick }) {
  const [selectedThought, setSelectedThought] = useState(CANDIDATE_THOUGHTS[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [dialogueDomain, setDialogueDomain] = useState("ethical-hacker");

  const dialogueOptions = [
    { id: "ethical-hacker", student: "I want to be an ethical hacker. Can you guide me?", response: "I will frame a roadmap for you." },
    { id: "product-sde", student: "I want to crack a ₹15+ LPA Product SDE role. Where do I start?", response: "Practice our Advanced DSA and System Design track." },
    { id: "tcs-digital", student: "I have the TCS NQT Digital drive next week. Can I prepare in 7 days?", response: "Work through our high-frequency TCS Digital 50-problem sprint." },
  ];

  const currentDialogue = dialogueOptions.find((d) => d.id === dialogueDomain) || dialogueOptions[0];

  const handleThoughtClick = (thoughtObj) => {
    setSelectedThought(thoughtObj);
    setModalOpen(true);
  };

  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#FAF9F5] text-brand-purple-deep relative overflow-hidden">
      
      {/* 1. Top Roadmap Dialogue Ribbon (Authentic Dkoder Feature) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative rounded-3xl bg-gradient-to-r from-brand-yellow-400 via-amber-400 to-brand-yellow-300 p-6 sm:p-8 lg:p-10 shadow-lg border-2 border-brand-purple-darkest/10 overflow-hidden">
          
          {/* Subtle background rays */}
          <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            
            {/* Left: Interactive Student Speech Bubble */}
            <div className="lg:col-span-6 flex flex-col gap-3">
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-purple-darkest flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-purple-deep animate-pulse" />
                Dkoder Career Roadmap Engine
              </div>

              {/* Student speech bubble */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-md border-2 border-brand-purple-deep text-left relative">
                <p className="font-display font-extrabold text-lg sm:text-2xl text-brand-purple-deep leading-snug">
                  "{currentDialogue.student}"
                </p>
                {/* Speech tail */}
                <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-brand-purple-deep" />
                <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white" />
              </div>

              {/* Switch roadmap query */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                <span className="text-[11px] font-mono text-brand-purple-900 font-bold self-center mr-1">Try asking:</span>
                {dialogueOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setDialogueDomain(opt.id)}
                    className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-all ${
                      dialogueDomain === opt.id
                        ? "bg-brand-purple-deep text-brand-yellow-300 font-bold shadow-sm"
                        : "bg-white/80 text-brand-purple-900 hover:bg-white"
                    }`}
                  >
                    {opt.id.replace("-", " ")}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Dkoder AI Robot Response Bubble */}
            <div className="lg:col-span-6 flex items-center justify-end gap-4">
              <div className="bg-[#FEFCE8] rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-md border-2 border-brand-purple-deep text-left relative max-w-md flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Bot className="w-4 h-4 text-brand-purple-900" />
                  <span className="text-[11px] font-mono font-bold uppercase text-brand-purple-800">
                    Dkoder AI Mentor
                  </span>
                </div>
                <p className="font-display font-bold text-base sm:text-xl text-brand-purple-deep leading-snug">
                  "{currentDialogue.response}"
                </p>
                {/* Speech tail to right */}
                <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[12px] border-l-brand-purple-deep" />
              </div>

              {/* Robot Mascot Icon / Badge */}
              <div className="hidden sm:flex w-20 h-20 rounded-2xl bg-brand-purple-deep border-2 border-brand-yellow-300 items-center justify-center text-white shadow-xl shrink-0">
                <div className="text-center">
                  <Bot className="w-8 h-8 text-brand-yellow-300 mx-auto" />
                  <div className="text-[9px] font-mono font-bold text-brand-yellow-200 uppercase mt-0.5">Dkoder Bot</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Top Companies Hiring Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="py-3 px-5 rounded-2xl bg-white border border-brand-purple-900/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-purple-900 shrink-0 flex items-center gap-2">
            <Building2 className="w-4 h-4 text-brand-yellow-600" />
            <span>Prepare for roles at top companies:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-7">
            {TOP_COMPANIES.map((comp) => (
              <span
                key={comp.name}
                className="font-display font-bold text-xs sm:text-sm text-brand-purple-deep hover:text-brand-purple-700 transition-colors cursor-default"
              >
                {comp.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. The Authentic Dkoder "Mind Everywhere?" Candidate Thought Cloud */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-brand-purple-deep tracking-tight mb-2 leading-tight">
            Interview tomorrow.{" "}
            <span className="block text-brand-purple-900">
              Mind everywhere?
            </span>
          </h1>
          <p className="text-base sm:text-lg text-brand-text-secondary font-medium">
            Tap a thought below to see how to handle it.
          </p>
        </div>

        {/* Interactive Candidate Thoughts Matrix */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#F5F3EC]/80 via-white/80 to-[#F5F3EC]/80 p-6 sm:p-10 border border-brand-purple-900/10 shadow-lg mb-12">
          
          {/* Subtle Candidate Center Illustration Badge */}
          <div className="flex flex-col items-center justify-center mb-10 text-center">
            <div className="w-20 h-20 rounded-full bg-brand-purple-deep text-brand-yellow-400 border-4 border-brand-yellow-400 flex items-center justify-center shadow-xl mb-3">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                <path d="M4 21V19C4 16.5 7.5 15 12 15C16.5 15 20 19 20 21" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-purple-900 bg-brand-yellow-100 px-3 py-1 rounded-full border border-brand-yellow-400/50">
              The Night Before Campus Drive
            </span>
          </div>

          {/* 12 Interactive Thought Bubbles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 max-w-5xl mx-auto">
            {CANDIDATE_THOUGHTS.map((t, idx) => (
              <motion.button
                key={t.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleThoughtClick(t)}
                className="group relative p-4 rounded-2xl bg-white border border-brand-purple-900/10 hover:border-brand-purple-600 hover:bg-brand-purple-50/40 text-left shadow-sm hover:shadow-md transition-all flex items-start justify-between gap-3"
              >
                <div>
                  <span className="text-[10px] font-mono text-brand-text-muted uppercase tracking-wider">
                    {t.category}
                  </span>
                  <div className="font-display font-bold text-sm sm:text-base text-brand-purple-deep mt-0.5 group-hover:text-brand-purple-900">
                    "{t.thought}"
                  </div>
                </div>

                <div className="w-6 h-6 rounded-full bg-brand-yellow-100 group-hover:bg-brand-yellow-400 flex items-center justify-center shrink-0 transition-colors text-brand-purple-darkest">
                  <HelpCircle className="w-3.5 h-3.5" />
                </div>
              </motion.button>
            ))}
          </div>

        </div>

        {/* 4. Solution Banner (Exact Dkoder Text & CTA) */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#FAF9F5] border-2 border-brand-purple-deep p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left max-w-2xl">
            <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-brand-purple-900">
              WANT A SOLUTION?
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-purple-deep mt-1 mb-2">
              One goal can narrow the next question.
            </h2>
            <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed">
              Start with a target, then filter by company, package, mode and level. A smaller shortlist makes the next action easier to choose.
            </p>
          </div>

          <button
            onClick={onTryFiltersClick}
            className="shrink-0 px-8 py-4 rounded-2xl bg-brand-yellow-400 text-brand-purple-darkest hover:bg-brand-yellow-300 font-extrabold text-sm sm:text-base transition-all shadow-[0_4px_16px_rgba(250,204,21,0.4)] active:scale-95 flex items-center gap-2 border border-brand-yellow-500/50"
          >
            <span>Try the filters</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Thought Solution Modal */}
      <AnimatePresence>
        {modalOpen && selectedThought && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-purple-darkest/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-brand-purple-deep relative overflow-hidden text-left"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-brand-purple-50 text-brand-purple-deep transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-yellow-100 text-brand-purple-950 font-mono text-[11px] font-bold uppercase mb-3">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow-600" />
                {selectedThought.category}
              </div>

              <h3 className="font-display font-bold text-2xl text-brand-purple-deep mb-4">
                "{selectedThought.thought}"
              </h3>

              <div className="p-4 rounded-2xl bg-brand-purple-50 border border-brand-purple-100 text-sm text-brand-purple-deep leading-relaxed mb-6">
                <span className="font-bold block text-xs uppercase font-mono text-brand-purple-700 mb-1">
                  How Dkoder Solves This:
                </span>
                {selectedThought.solution}
              </div>

              <button
                onClick={() => {
                  setModalOpen(false);
                  onTryFiltersClick();
                }}
                className="w-full py-3 px-5 rounded-xl bg-brand-yellow-400 text-brand-purple-darkest font-bold text-sm hover:bg-brand-yellow-300 transition-colors text-center shadow-md flex items-center justify-center gap-2"
              >
                <span>Apply Dkoder Target Filters</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
