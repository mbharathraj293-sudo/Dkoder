import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Quote,
  Sparkles,
  ArrowRight,
  Trophy,
  CheckCircle,
  GraduationCap,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { SUCCESS_STORIES } from "../data/mockData";

export default function SuccessStories() {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const activeStory = SUCCESS_STORIES[activeStoryIdx];

  return (
    <section id="outcomes" className="py-20 md:py-28 relative bg-[#FAF9F5] border-t border-brand-purple-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow-100 text-brand-purple-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-brand-yellow-400/50">
            <Sparkles className="w-3.5 h-3.5 text-brand-yellow-600" />
            06 • Real Transformations
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-purple-deep tracking-tight mb-4">
            From Curiosity to{" "}
            <span className="text-brand-purple-700">Opportunity</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
            Tangible transformation pathways charted by students who started with a single step.
          </p>
        </div>

        {/* Story Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {SUCCESS_STORIES.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => setActiveStoryIdx(idx)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2.5 ${
                activeStoryIdx === idx
                  ? "bg-brand-purple-deep text-brand-yellow-300 shadow-md font-bold"
                  : "bg-white text-brand-text-secondary hover:text-brand-purple-950 border border-brand-purple-900/10 hover:border-brand-purple-300"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-brand-yellow-400" />
              <span>{story.studentName}</span>
              <span className="text-[11px] text-purple-300 font-mono hidden sm:inline">({story.focus})</span>
            </button>
          ))}
        </div>

        {/* Selected Transformation Card */}
        <div className="bg-white rounded-3xl border border-brand-purple-900/10 shadow-[0_20px_45px_-12px_rgba(28,13,58,0.08)] p-6 sm:p-10 relative overflow-hidden">
          
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-yellow-400 via-brand-purple-600 to-brand-purple-deep" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Student Profile & Outcome (5 cols) */}
            <div className="lg:col-span-5 flex flex-col text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-brand-yellow-400 shadow-md">
                  <img
                    src={activeStory.avatar}
                    alt={activeStory.studentName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-brand-purple-deep">
                    {activeStory.studentName}
                  </h3>
                  <div className="text-xs text-brand-text-muted">{activeStory.role}</div>
                  <div className="text-[11px] font-mono text-brand-purple-700 font-bold mt-0.5">
                    {activeStory.focus}
                  </div>
                </div>
              </div>

              {/* Outcome Badge Box */}
              <div className="p-4 rounded-2xl bg-brand-yellow-50 border border-brand-yellow-300/80 mb-6">
                <div className="text-[10px] font-mono uppercase tracking-wider text-brand-yellow-800 font-bold mb-1">
                  Verified Outcome Achieved
                </div>
                <div className="font-display font-bold text-base sm:text-lg text-brand-purple-darkest">
                  {activeStory.outcomeSummary}
                </div>
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-brand-text-secondary italic leading-relaxed pl-3 border-l-2 border-brand-purple-300">
                "{activeStory.quote}"
              </p>
            </div>

            {/* Right: Step-by-Step Transformation Pipeline (7 cols) */}
            <div className="lg:col-span-7 bg-[#FAF9F5] rounded-2xl p-6 sm:p-8 border border-brand-purple-900/5">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-purple-950 mb-6 flex items-center justify-between">
                <span>The 4-Stage Pathway Trajectory</span>
                <span className="text-brand-purple-700 font-mono text-[11px]">Validated Record</span>
              </div>

              <div className="space-y-4">
                {activeStory.pathway.map((stepItem, idx) => (
                  <div
                    key={stepItem.step}
                    className="relative flex items-start gap-4 p-3.5 rounded-xl bg-white border border-brand-purple-900/10 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-purple-deep text-brand-yellow-300 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </div>

                    <div className="text-left flex-1">
                      <div className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-brand-purple-700">
                        {stepItem.step}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-brand-purple-deep mt-0.5">
                        {stepItem.label}
                      </div>
                    </div>

                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
