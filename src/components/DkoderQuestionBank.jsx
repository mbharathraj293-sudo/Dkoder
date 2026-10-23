import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Filter,
  RotateCcw,
  Shuffle,
  Lock,
  ArrowRight,
  Code2,
  ListOrdered,
  Layers,
  Sparkles,
  ChevronDown
} from "lucide-react";
import { QUESTION_BANK_MOCK } from "../data/dkoderData";

export default function DkoderQuestionBank({ onSeeTargetsClick }) {
  const [company, setCompany] = useState("Any company");
  const [salaryPackage, setSalaryPackage] = useState("Any package");
  const [mode, setMode] = useState("All practice");
  const [level, setLevel] = useState("All levels");
  const [questions, setQuestions] = useState(QUESTION_BANK_MOCK);
  const [surpriseSeed, setSurpriseSeed] = useState(0);

  const quickTargets = ["TCS", "Microsoft", "Infosys", "Google", "Intuit"];

  const handleQuickTarget = (targetName) => {
    setCompany(targetName);
  };

  const handleReset = () => {
    setCompany("Any company");
    setSalaryPackage("Any package");
    setMode("All practice");
    setLevel("All levels");
    setQuestions(QUESTION_BANK_MOCK);
  };

  const handleSurpriseMe = () => {
    const shuffled = [...QUESTION_BANK_MOCK].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setSurpriseSeed((prev) => prev + 1);
  };

  // Filter questions based on selections
  const filteredQuestions = questions.filter((q) => {
    if (company !== "Any company" && !q.company.toLowerCase().includes(company.toLowerCase())) {
      return false;
    }
    if (level !== "All levels" && q.difficulty.toLowerCase() !== level.toLowerCase()) {
      return false;
    }
    if (mode !== "All practice") {
      if (mode === "MCQ Practice" && q.type !== "MCQ") return false;
      if (mode === "Coding Labs" && q.type !== "Coding") return false;
      if (mode === "Platform Arena" && q.type !== "Platform") return false;
    }
    return true;
  });

  return (
    <section id="question-bank" className="py-20 md:py-28 bg-brand-purple-deep text-white relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Exact Dkoder Headline) */}
        <div className="text-left mb-12">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            A deep question bank.{" "}
            <span className="block text-brand-yellow-400">
              Only a few for you.
            </span>
          </h2>
        </div>

        {/* The Two-Column Practice Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Filter Controls (Exact Dkoder content) */}
          <div className="lg:col-span-6 bg-white text-brand-purple-deep rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-purple-900/10">
            
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-purple-700 mb-1">
              A FOCUSED PRACTICE DEMO
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-purple-deep mb-2">
              Choose the destination. Cut the noise.
            </h3>
            <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed mb-6">
              MCQs, coding rounds and platform problems, tagged by company, package and level. Pick a target and watch the noise fall away.
            </p>

            {/* QUICK TARGETS */}
            <div className="mb-6">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-purple-950 block mb-2">
                QUICK TARGETS
              </span>
              <div className="flex flex-wrap gap-2">
                {quickTargets.map((target) => (
                  <button
                    key={target}
                    onClick={() => handleQuickTarget(target)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      company === target
                        ? "bg-brand-purple-deep text-brand-yellow-300 font-bold shadow-sm"
                        : "bg-[#FAF9F5] text-brand-purple-deep hover:bg-brand-purple-100 border border-brand-purple-900/10"
                    }`}
                  >
                    {target}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Selectors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {/* Company */}
              <div>
                <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-text-muted block mb-1.5">
                  COMPANY
                </label>
                <div className="relative">
                  <select
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-brand-purple-900/15 text-xs font-semibold text-brand-purple-deep focus:outline-none focus:border-brand-purple-700 appearance-none pr-8"
                  >
                    <option value="Any company">Any company</option>
                    <option value="TCS">TCS</option>
                    <option value="Microsoft">Microsoft</option>
                    <option value="Infosys">Infosys</option>
                    <option value="Intuit">Intuit</option>
                    <option value="SAP Labs">SAP Labs</option>
                    <option value="Google">Google</option>
                    <option value="Salesforce">Salesforce</option>
                    <option value="Qualcomm">Qualcomm</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-brand-text-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Package */}
              <div>
                <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-text-muted block mb-1.5">
                  PACKAGE
                </label>
                <div className="relative">
                  <select
                    value={salaryPackage}
                    onChange={(e) => setSalaryPackage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-brand-purple-900/15 text-xs font-semibold text-brand-purple-deep focus:outline-none focus:border-brand-purple-700 appearance-none pr-8"
                  >
                    <option value="Any package">Any package</option>
                    <option value="2.5-7.5 LPA">₹2.5–7.5 LPA</option>
                    <option value="8-18 LPA">₹8.0–18.0 LPA</option>
                    <option value="18-25 LPA">₹18.0–25.0 LPA</option>
                    <option value="25+ LPA">₹25.0+ LPA</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-brand-text-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Mode */}
              <div>
                <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-text-muted block mb-1.5">
                  MODE
                </label>
                <div className="relative">
                  <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-brand-purple-900/15 text-xs font-semibold text-brand-purple-deep focus:outline-none focus:border-brand-purple-700 appearance-none pr-8"
                  >
                    <option value="All practice">All practice</option>
                    <option value="MCQ Practice">MCQ Practice</option>
                    <option value="Coding Labs">Coding Labs</option>
                    <option value="Platform Arena">Platform Arena</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-brand-text-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Level */}
              <div>
                <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-text-muted block mb-1.5">
                  LEVEL
                </label>
                <div className="relative">
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-brand-purple-900/15 text-xs font-semibold text-brand-purple-deep focus:outline-none focus:border-brand-purple-700 appearance-none pr-8"
                  >
                    <option value="All levels">All levels</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-brand-text-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Action Buttons: Reset & Surprise Me */}
            <div className="flex items-center justify-between pt-4 border-t border-brand-purple-900/10">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-text-secondary hover:text-brand-purple-deep transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>

              <button
                onClick={handleSurpriseMe}
                className="px-4 py-2 rounded-xl bg-brand-purple-deep text-brand-yellow-300 hover:bg-brand-purple-900 font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Surprise me</span>
              </button>
            </div>

            <div className="text-[11px] text-brand-text-muted font-sans mt-3 text-left">
              Your plan decides which companies you can open.
            </div>

          </div>

          {/* Right Column: Question Bank Stream (Exact Dkoder items) */}
          <div className="lg:col-span-6 bg-[#FAF9F5] text-brand-purple-deep rounded-3xl p-6 sm:p-8 border-2 border-brand-yellow-400 shadow-xl">
            
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-purple-900">
                FROM THE FULL BANK
              </span>
              <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-brand-yellow-100 text-brand-purple-950 border border-brand-yellow-400/50">
                WIDE OPEN DEMO
              </span>
            </div>

            {/* Dynamic Question Cards */}
            <div className="space-y-3 mb-6">
              <AnimatePresence mode="popLayout">
                {filteredQuestions.slice(0, 4).map((q) => (
                  <motion.div
                    key={`${q.id}-${surpriseSeed}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="p-4 rounded-2xl bg-white border border-brand-purple-900/10 shadow-sm hover:border-brand-purple-400 transition-all flex items-center justify-between gap-3 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-brand-purple-50 flex items-center justify-center text-brand-purple-900 shrink-0">
                        {q.type === "Coding" ? (
                          <Code2 className="w-4 h-4 text-brand-purple-700" />
                        ) : q.type === "Platform" ? (
                          <Layers className="w-4 h-4 text-amber-600" />
                        ) : (
                          <ListOrdered className="w-4 h-4 text-emerald-600" />
                        )}
                      </div>

                      <div>
                        <div className="font-display font-bold text-sm sm:text-base text-brand-purple-deep">
                          {q.title}
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5 mt-1">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-brand-purple-100 text-brand-purple-900">
                            {q.type}
                          </span>
                          <span
                            className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                              q.difficulty === "Easy"
                                ? "bg-emerald-100 text-emerald-800"
                                : q.difficulty === "Medium"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-rose-100 text-rose-800"
                            }`}
                          >
                            {q.difficulty}
                          </span>
                          <span className="text-[10.5px] font-sans font-medium text-brand-purple-800">
                            {q.company}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-brand-text-muted hover:text-brand-purple-deep p-1.5">
                      <Lock className="w-4 h-4" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredQuestions.length === 0 && (
                <div className="p-6 text-center text-xs text-brand-text-muted">
                  No questions match this specific combination. Click Reset or Surprise me.
                </div>
              )}
            </div>

            {/* Sub-CTA: Show others & See why target matters */}
            <div className="flex items-center justify-between text-xs text-brand-text-secondary mb-4">
              <span>Plus every other match, ready on the practice page.</span>
              <button
                onClick={handleSurpriseMe}
                className="font-bold text-brand-purple-deep hover:text-brand-purple-700 flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Show others</span>
              </button>
            </div>

            {/* Big Yellow CTA Button (Exact Dkoder text) */}
            <button
              onClick={onSeeTargetsClick}
              className="w-full py-4 px-6 rounded-2xl bg-brand-yellow-400 text-brand-purple-darkest hover:bg-brand-yellow-300 font-extrabold text-sm sm:text-base transition-colors shadow-md flex items-center justify-center gap-2 border border-brand-yellow-500/50"
            >
              <span>See why the target matters</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
