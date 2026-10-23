import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  BookOpen,
  Code2,
  Trophy,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Zap
} from "lucide-react";
import { JOURNEY_STEPS } from "../data/mockData";

export default function Journey({ onExploreClick }) {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);

  const iconMap = {
    Compass: Compass,
    BookOpen: BookOpen,
    Code2: Code2,
    Trophy: Trophy,
    Users: Users,
    TrendingUp: TrendingUp,
  };

  const currentStep = JOURNEY_STEPS[selectedStepIndex];
  const CurrentIcon = iconMap[currentStep.icon] || Compass;

  return (
    <section id="journey" className="py-20 md:py-28 relative bg-[#FAF9F5] border-t border-brand-purple-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple-100/70 text-brand-purple-900 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple-700" />
            The Opportunity Progression
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-purple-deep tracking-tight mb-4">
            One Journey.{" "}
            <span className="text-brand-purple-700 underline decoration-brand-yellow-400 decoration-wavy decoration-2">
              Infinite Possibilities.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
            From a spark of curiosity in your dorm room to high-impact hackathon podiums and career-launching fellowships.
          </p>
        </div>

        {/* The Connected Journey Navigation Pipeline */}
        <div className="relative mb-12">
          
          {/* Visual Connecting Line Track (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[6%] right-[6%] h-[3px] bg-brand-purple-100 -z-0">
            {/* Animated Active Progress Fill */}
            <motion.div
              className="h-full bg-gradient-to-r from-brand-purple-700 via-brand-purple-500 to-brand-yellow-400"
              initial={{ width: "0%" }}
              animate={{ width: `${(selectedStepIndex / (JOURNEY_STEPS.length - 1)) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>

          {/* Interactive Steps Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {JOURNEY_STEPS.map((item, idx) => {
              const StepIcon = iconMap[item.icon] || Compass;
              const isSelected = selectedStepIndex === idx;
              const isPassed = idx <= selectedStepIndex;

              return (
                <button
                  key={item.step}
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`group relative text-left p-3.5 sm:p-4 rounded-2xl transition-all duration-300 focus:outline-none ${
                    isSelected
                      ? "bg-white shadow-[0_12px_30px_-8px_rgba(88,28,135,0.18)] border-2 border-brand-purple-600 scale-[1.02]"
                      : "bg-white/60 hover:bg-white border border-brand-purple-900/10 hover:border-brand-purple-300 shadow-sm"
                  }`}
                >
                  {/* Step Marker Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md transition-colors ${
                        isSelected
                          ? "bg-brand-yellow-400 text-brand-purple-deep font-extrabold"
                          : "bg-brand-purple-50 text-brand-purple-700"
                      }`}
                    >
                      {item.step}
                    </span>

                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-brand-purple-900 text-brand-yellow-300 shadow-sm"
                          : "bg-brand-purple-50 text-brand-purple-800 group-hover:bg-brand-purple-100"
                      }`}
                    >
                      <StepIcon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Title & Phase */}
                  <div className="font-display font-bold text-sm tracking-wide text-brand-purple-deep mb-1">
                    {item.phase}
                  </div>
                  <p className="text-[11px] text-brand-text-muted line-clamp-2 leading-snug">
                    {item.shortDesc}
                  </p>

                  {/* Visual active bottom glow pill */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeJourneyPill"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-brand-yellow-400 rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Inspection Showcase Pane for Selected Step */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl border border-brand-purple-900/15 shadow-[0_20px_45px_-12px_rgba(28,13,58,0.08)] p-6 sm:p-8 lg:p-10 relative overflow-hidden"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-purple-900 via-brand-purple-600 to-brand-yellow-400" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Detail Column */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-brand-purple-100 flex items-center justify-center text-brand-purple-900 font-mono font-bold text-base border border-brand-purple-200">
                    {currentStep.step}
                  </span>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-yellow-600 bg-brand-yellow-50 px-2.5 py-1 rounded-md border border-brand-yellow-300">
                      Phase {currentStep.step}: {currentStep.phase}
                    </span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand-purple-deep mb-3">
                  {currentStep.headline}
                </h3>

                <p className="text-base text-brand-text-secondary leading-relaxed mb-6">
                  {currentStep.details}
                </p>

                {/* What You Achieve / Deliverables in this stage */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-brand-purple-50/50 border border-brand-purple-100/60">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple-700 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-brand-purple-950">Action Blueprint</div>
                      <div className="text-[11px] text-brand-text-muted mt-0.5">Hands-on roadmap tailored to stage goals</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-brand-purple-50/50 border border-brand-purple-100/60">
                    <Zap className="w-4 h-4 text-brand-yellow-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-brand-purple-950">Verified Validation</div>
                      <div className="text-[11px] text-brand-text-muted mt-0.5">Automated code & submission checks</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={onExploreClick}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-purple-900 text-white font-semibold text-sm hover:bg-brand-purple-800 transition-colors shadow-sm"
                  >
                    <span>Explore {currentStep.phase} Phase</span>
                    <ArrowRight className="w-4 h-4 text-brand-yellow-400" />
                  </button>

                  <span className="text-xs text-brand-text-muted">
                    Step {parseInt(currentStep.step, 10)} of 6 in the OS
                  </span>
                </div>
              </div>

              {/* Right Visual Data Box */}
              <div className="lg:col-span-5 bg-gradient-to-br from-brand-purple-deep via-brand-purple-900 to-brand-purple-950 rounded-2xl p-6 sm:p-8 text-white relative shadow-lg">
                <div className="absolute top-4 right-4 text-brand-yellow-400">
                  <CurrentIcon className="w-10 h-10 opacity-30" />
                </div>

                <div className="text-xs font-mono font-medium text-brand-yellow-300 uppercase tracking-widest mb-1">
                  Active Ecosystem Metric
                </div>

                <div className="font-display font-extrabold text-4xl sm:text-5xl text-brand-yellow-400 mb-2">
                  {currentStep.statValue}
                </div>

                <div className="text-sm text-purple-200 mb-6 font-medium">
                  {currentStep.statLabel}
                </div>

                <div className="space-y-3 pt-4 border-t border-purple-800/80">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-purple-300">Target Audience</span>
                    <span className="font-mono font-bold text-white">Undergrads & Builders</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-purple-300">Verification Model</span>
                    <span className="font-mono font-bold text-brand-yellow-300">Automated GitHub Proof</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-purple-300">Next Step</span>
                    <span className="font-mono font-bold text-white">
                      {selectedStepIndex < 5 ? JOURNEY_STEPS[selectedStepIndex + 1].phase : "OPPORTUNITY UNLOCKED"}
                    </span>
                  </div>
                </div>

                {/* Progress bar inside card */}
                <div className="mt-6 pt-4 border-t border-purple-800/60">
                  <div className="flex justify-between text-[11px] text-purple-300 font-mono mb-1.5">
                    <span>Ecosystem Progression</span>
                    <span>{Math.round(((selectedStepIndex + 1) / 6) * 100)}%</span>
                  </div>
                  <div className="h-2 w-full bg-purple-950/80 rounded-full overflow-hidden p-0.5 border border-purple-700/50">
                    <div
                      className="h-full bg-brand-yellow-400 rounded-full transition-all duration-300"
                      style={{ width: `${((selectedStepIndex + 1) / 6) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
