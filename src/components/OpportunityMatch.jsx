import React, { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Compass,
  CheckCircle2,
  Zap,
  Target,
  Trophy,
  Brain,
  Code2,
  Database,
  Cpu,
  ShieldCheck,
  Check
} from "lucide-react";
import confetti from "canvas-confetti";
import { MATCH_CONFIGS } from "../data/mockData";

export default function OpportunityMatch({ onPathStarted }) {
  const [interest, setInterest] = useState("AI");
  const [skillLevel, setSkillLevel] = useState("Intermediate");
  const [goal, setGoal] = useState("Build");
  const [enrolled, setEnrolled] = useState(false);

  const interestOptions = [
    { id: "AI", label: "AI & Machine Learning", icon: Brain },
    { id: "Web", label: "Modern Web & Systems", icon: Code2 },
    { id: "Data", label: "Data Science & AI", icon: Database },
    { id: "IoT", label: "IoT & Embedded Edge", icon: Cpu },
    { id: "Cyber", label: "Cyber Security & Defense", icon: ShieldCheck },
  ];

  const skillOptions = [
    { id: "Beginner", label: "Beginner", desc: "Exploring concepts" },
    { id: "Intermediate", label: "Intermediate", desc: "Active builder" },
    { id: "Advanced", label: "Advanced", desc: "Hackathon competitor" },
  ];

  const goalOptions = [
    { id: "Learn", label: "Master Core Skills", badge: "01 Foundation" },
    { id: "Build", label: "Build Flagship Project", badge: "02 Portfolio" },
    { id: "Compete", label: "Win a Hackathon", badge: "03 Arena" },
    { id: "Get Opportunities", label: "Unlock Fellowships & Grants", badge: "04 Career" },
  ];

  // Resolve dynamic match outcome based on selections
  const getRecommendation = () => {
    const interestConfig = MATCH_CONFIGS[interest];
    if (interestConfig && interestConfig[skillLevel] && interestConfig[skillLevel][goal]) {
      return interestConfig[skillLevel][goal];
    }
    if (interestConfig && interestConfig.default) {
      return interestConfig.default;
    }
    // Generic high-grade fallback
    return {
      title: `${interest} • High Impact Trajectory`,
      time: "5 Weeks",
      step1: `Master foundational ${interest} core design patterns`,
      step2: `Engineer a production-ready ${interest} prototype repository`,
      step3: `Compete in national collegiate ${interest} challenge`,
      step4: `Connect with campus mentors and partner tech leads`,
      matchScore: "98%",
      outcome: `Validated proof-of-work in ${interest} ready for competition review.`
    };
  };

  const currentMatch = getRecommendation();

  const handleStartPath = () => {
    // Fire celebratory confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#7E22CE", "#FACC15", "#FFE500", "#9333EA"]
    });
    setEnrolled(true);
    setTimeout(() => {
      onPathStarted?.(currentMatch);
    }, 400);
  };

  return (
    <section id="opportunity-match" className="py-20 md:py-28 relative bg-[#FAF9F5] border-t border-brand-purple-900/5 overflow-hidden">
      
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-yellow-200/20 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow-100 text-brand-purple-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-brand-yellow-400/50">
            <Target className="w-3.5 h-3.5 text-brand-yellow-600" />
            AI Opportunity Engine • Interactive Match
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-purple-deep tracking-tight mb-4">
            What Should You{" "}
            <span className="text-brand-purple-700 underline decoration-brand-yellow-400 decoration-4">
              Do Next?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
            Tell us what you're interested in. We'll show you where to go next.
          </p>
        </div>

        {/* The Interactive Match Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-brand-purple-900/10 shadow-[0_12px_35px_-10px_rgba(28,13,58,0.06)] flex flex-col justify-between">
            
            <div className="space-y-8">
              {/* Question 1: Interest */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-brand-purple-950 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-brand-purple-100 text-brand-purple-900 flex items-center justify-center text-[10px]">1</span>
                    Choose Your Primary Domain
                  </label>
                  <span className="text-[11px] font-mono text-brand-text-muted">Domain Filter</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {interestOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = interest === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => {
                          setInterest(opt.id);
                          setEnrolled(false);
                        }}
                        className={`p-3 rounded-2xl text-left border transition-all duration-200 flex items-center gap-2.5 ${
                          isSelected
                            ? "bg-brand-purple-deep text-white border-brand-purple-deep shadow-md"
                            : "bg-[#FAF9F5] text-brand-text-primary border-brand-purple-900/10 hover:border-brand-purple-300 hover:bg-white"
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected ? "bg-brand-yellow-400 text-brand-purple-darkest" : "bg-white text-brand-purple-800"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold leading-tight line-clamp-1">{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Question 2: Skill Level */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-brand-purple-950 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-brand-purple-100 text-brand-purple-900 flex items-center justify-center text-[10px]">2</span>
                    Current Experience Level
                  </label>
                  <span className="text-[11px] font-mono text-brand-text-muted">Pacing</span>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  {skillOptions.map((opt) => {
                    const isSelected = skillLevel === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => {
                          setSkillLevel(opt.id);
                          setEnrolled(false);
                        }}
                        className={`p-3.5 rounded-2xl text-left border transition-all duration-200 ${
                          isSelected
                            ? "bg-brand-purple-50 border-brand-purple-600 ring-2 ring-brand-purple-200 shadow-sm"
                            : "bg-[#FAF9F5] border-brand-purple-900/10 hover:border-brand-purple-300"
                        }`}
                      >
                        <div className="font-display font-bold text-xs sm:text-sm text-brand-purple-deep mb-0.5">
                          {opt.label}
                        </div>
                        <div className="text-[10.5px] text-brand-text-muted">{opt.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Question 3: Goal */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-brand-purple-950 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-brand-purple-100 text-brand-purple-900 flex items-center justify-center text-[10px]">3</span>
                    What is Your Immediate 60-Day Goal?
                  </label>
                  <span className="text-[11px] font-mono text-brand-text-muted">Target Objective</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {goalOptions.map((opt) => {
                    const isSelected = goal === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => {
                          setGoal(opt.id);
                          setEnrolled(false);
                        }}
                        className={`p-3.5 rounded-2xl text-left border transition-all duration-200 flex items-center justify-between ${
                          isSelected
                            ? "bg-brand-purple-deep text-white border-brand-purple-deep shadow-md"
                            : "bg-[#FAF9F5] text-brand-text-primary border-brand-purple-900/10 hover:border-brand-purple-300 hover:bg-white"
                        }`}
                      >
                        <div>
                          <div className="text-xs font-bold">{opt.label}</div>
                          <div
                            className={`text-[10px] font-mono ${
                              isSelected ? "text-brand-yellow-300" : "text-brand-text-muted"
                            }`}
                          >
                            {opt.badge}
                          </div>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs ${
                            isSelected ? "bg-brand-yellow-400 text-brand-purple-darkest font-bold" : "border border-brand-purple-200"
                          }`}
                        >
                          {isSelected ? "✓" : ""}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Micro Helper Note */}
            <div className="pt-6 mt-6 border-t border-brand-purple-900/5 flex items-center justify-between text-xs text-brand-text-muted">
              <span>Dynamic state synthesis • Updates instantaneously</span>
              <span className="font-mono text-brand-purple-700 font-bold">100% Client-Side Engine</span>
            </div>

          </div>

          {/* Right Column: Dynamically Generated Recommendation Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${interest}-${skillLevel}-${goal}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-3xl bg-gradient-to-br from-brand-purple-deep via-brand-purple-900 to-brand-purple-950 p-6 sm:p-8 text-white shadow-2xl border-2 border-brand-yellow-400/50 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-brand-yellow-400/15 rounded-full blur-2xl pointer-events-none" />

                <div>
                  {/* Top Matching Status Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-yellow-300 bg-brand-yellow-400/10 px-2.5 py-1 rounded-full border border-brand-yellow-400/30">
                      YOUR RECOMMENDED PATH
                    </span>
                    <div className="flex items-center gap-1.5 bg-purple-950/80 px-2.5 py-1 rounded-full border border-purple-800 text-xs font-mono font-bold text-white">
                      <Sparkles className="w-3.5 h-3.5 text-brand-yellow-400" />
                      <span>{currentMatch.matchScore} Match</span>
                    </div>
                  </div>

                  {/* Path Title & Estimated Timeline */}
                  <h3 className="font-display font-bold text-2xl text-white mb-2 leading-tight">
                    {currentMatch.title}
                  </h3>
                  <div className="text-xs font-mono text-purple-200 mb-6 flex items-center gap-2">
                    <span className="bg-purple-800/80 px-2 py-0.5 rounded text-white font-semibold">
                      ⏱ {currentMatch.time} Sprint
                    </span>
                    <span>•</span>
                    <span className="text-brand-yellow-300 font-medium">Curated for {skillLevel} level</span>
                  </div>

                  {/* 4 Connected Step Nodes */}
                  <div className="space-y-3 mb-6 relative">
                    {/* Step 1 */}
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-purple-950/60 border border-purple-800/60 hover:border-purple-600 transition-colors">
                      <div className="w-6 h-6 rounded-md bg-brand-yellow-400 text-brand-purple-darkest font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        1
                      </div>
                      <div className="text-xs">
                        <div className="text-[10px] font-mono uppercase text-brand-yellow-300 font-bold">Foundation Sprint</div>
                        <div className="text-purple-100 font-medium">{currentMatch.step1}</div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-purple-950/60 border border-purple-800/60 hover:border-purple-600 transition-colors">
                      <div className="w-6 h-6 rounded-md bg-brand-yellow-400 text-brand-purple-darkest font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        2
                      </div>
                      <div className="text-xs">
                        <div className="text-[10px] font-mono uppercase text-brand-yellow-300 font-bold">Build Phase</div>
                        <div className="text-purple-100 font-medium">{currentMatch.step2}</div>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-purple-950/60 border border-purple-800/60 hover:border-purple-600 transition-colors">
                      <div className="w-6 h-6 rounded-md bg-brand-yellow-400 text-brand-purple-darkest font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        3
                      </div>
                      <div className="text-xs">
                        <div className="text-[10px] font-mono uppercase text-brand-yellow-300 font-bold">Competition Arena</div>
                        <div className="text-purple-100 font-medium">{currentMatch.step3}</div>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-purple-950/60 border border-purple-800/60 hover:border-purple-600 transition-colors">
                      <div className="w-6 h-6 rounded-md bg-brand-yellow-400 text-brand-purple-darkest font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        4
                      </div>
                      <div className="text-xs">
                        <div className="text-[10px] font-mono uppercase text-brand-yellow-300 font-bold">Network & Placement</div>
                        <div className="text-purple-100 font-medium">{currentMatch.step4}</div>
                      </div>
                    </div>
                  </div>

                  {/* Projected Outcome Summary */}
                  <div className="p-3 rounded-xl bg-purple-900/50 border border-purple-700/60 text-xs text-purple-200 mb-6 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-yellow-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white">Projected Outcome: </span>
                      {currentMatch.outcome}
                    </div>
                  </div>
                </div>

                {/* Primary Action Button */}
                <div>
                  <button
                    onClick={handleStartPath}
                    disabled={enrolled}
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg ${
                      enrolled
                        ? "bg-emerald-500 text-white cursor-default"
                        : "bg-brand-yellow-400 text-brand-purple-darkest hover:bg-brand-yellow-300 active:scale-95 shadow-[0_4px_20px_rgba(250,204,21,0.4)]"
                    }`}
                  >
                    {enrolled ? (
                      <>
                        <Check className="w-5 h-5 text-white" />
                        <span>Path Enrolled! Roadmap Activated</span>
                      </>
                    ) : (
                      <>
                        <span>Start This Path</span>
                        <ArrowRight className="w-5 h-5 text-brand-purple-darkest" />
                      </>
                    )}
                  </button>

                  {enrolled && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center text-[11px] text-brand-yellow-300 font-mono mt-2"
                    >
                      ✓ Saved to your Opportunity OS. Ready to begin Step 1!
                    </motion.div>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
