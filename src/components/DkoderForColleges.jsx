import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, CheckCircle2, ShieldCheck, FileCheck, Layers } from "lucide-react";
import { COLLEGE_MOU_PIPELINE } from "../data/dkoderData";

export default function DkoderForColleges({ onApplyMouClick }) {
  return (
    <section id="for-colleges" className="py-20 md:py-28 bg-[#FAF9F5] text-brand-purple-deep relative overflow-hidden border-t border-brand-purple-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Institutional Actions */}
          <div className="lg:col-span-6 text-left">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-purple-700 mb-2">
              SEE EXACTLY WHAT YOU'D BE USING
            </div>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-brand-purple-deep tracking-tight mb-6 leading-tight">
              Proof should be something{" "}
              <span className="block text-brand-purple-900 underline decoration-brand-yellow-400 decoration-4">
                you can inspect.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed mb-8 max-w-lg">
              Empower your college's training & placement cell with campus-wide question banks, batch analytics, real-time code execution, and company-specific mock entrance series.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onApplyMouClick}
                className="px-8 py-4 rounded-2xl bg-brand-yellow-400 text-brand-purple-darkest font-extrabold text-sm sm:text-base hover:bg-brand-yellow-300 transition-all shadow-[0_4px_20px_rgba(250,204,21,0.4)] active:scale-95 flex items-center gap-2 border border-brand-yellow-500/50"
              >
                <span>Apply for MOU</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("question-bank");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-4 rounded-2xl bg-white border border-brand-purple-900/15 text-brand-purple-deep font-bold text-sm hover:bg-brand-purple-50 transition-colors shadow-sm"
              >
                Visit the live product ↗
              </button>
            </div>
          </div>

          {/* Right Column: 3 Institutional Steps Card (Exact Dkoder structure) */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-white border-2 border-brand-purple-deep p-6 sm:p-8 shadow-xl text-left relative overflow-hidden">
              
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-purple-900 mb-5 flex items-center justify-between">
                <span>Dkoder Institutional Operating Blueprint</span>
                <span className="text-brand-purple-700">For Colleges</span>
              </div>

              <div className="space-y-4 mb-6">
                {COLLEGE_MOU_PIPELINE.map((pipe) => (
                  <div
                    key={pipe.step}
                    className="p-5 rounded-2xl bg-[#FAF9F5] border border-brand-purple-900/10 hover:border-brand-purple-400 transition-colors"
                  >
                    <div className="text-[10px] font-mono font-bold uppercase text-brand-purple-700 tracking-wider mb-1">
                      STEP {pipe.step} • {pipe.label}
                    </div>
                    <div className="font-display font-extrabold text-lg text-brand-purple-deep mb-1">
                      {pipe.sub}
                    </div>
                    <div className="text-xs text-brand-text-secondary leading-relaxed">
                      {pipe.description}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-[10.5px] text-brand-text-muted font-sans italic border-t border-brand-purple-900/10 pt-3">
                Illustration of product areas, not a screenshot or a student outcome.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
