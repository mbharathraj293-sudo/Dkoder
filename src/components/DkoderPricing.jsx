import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, GraduationCap } from "lucide-react";
import { PRICING_PLANS } from "../data/dkoderData";

export default function DkoderPricing({ onPurchaseClick, onScholarshipClick }) {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white text-brand-purple-deep relative overflow-hidden border-t border-brand-purple-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact Dkoder Headline) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-purple-700 mb-2">
            WHAT EACH PLAN ACTUALLY COSTS
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-brand-purple-deep tracking-tight mb-4">
            Pick your <span className="bg-brand-yellow-400 px-2 py-0.5 rounded-lg text-brand-purple-darkest">price</span>, not a maybe.
          </h2>
          <p className="text-base sm:text-lg text-brand-text-secondary">
            Transparent annual access. Tagged company questions, compiler practice, and placement entrance prep.
          </p>
        </div>

        {/* 5 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-12 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPlatinum = plan.popular;
            const isSuperDream = plan.bestValue;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-5 sm:p-6 border-2 transition-all flex flex-col justify-between text-left relative ${
                  isPlatinum
                    ? "bg-[#FAF5FF] border-brand-purple-700 shadow-xl scale-[1.02] z-10"
                    : isSuperDream
                    ? "bg-[#FEFCE8] border-brand-yellow-500 shadow-xl scale-[1.02] z-10"
                    : "bg-[#FAF9F5] border-brand-purple-900/15 hover:border-brand-purple-400 shadow-sm"
                }`}
              >
                {/* Top Badge for Popular or Best Value */}
                {isPlatinum && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-purple-deep text-brand-yellow-300 px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider shadow">
                    MOST POPULAR
                  </div>
                )}
                {isSuperDream && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-yellow-400 text-brand-purple-darkest px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider shadow">
                    BEST VALUE
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <div className="font-display font-black text-xl text-center text-brand-purple-deep uppercase tracking-wider mb-4 pb-2 border-b border-brand-purple-900/10">
                    {plan.name}
                  </div>

                  {/* Price Row: Year & Rate per day */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="p-2.5 rounded-xl bg-white border border-brand-purple-900/10 text-center">
                      <div className="font-display font-extrabold text-base sm:text-lg text-brand-purple-deep">
                        {plan.priceYear}
                      </div>
                      <div className="text-[10px] text-brand-text-muted">/ year</div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-brand-yellow-400 text-brand-purple-darkest font-extrabold text-xs sm:text-sm text-center flex items-center justify-center">
                      {plan.rateDay}
                    </div>
                  </div>

                  {/* Target Package Box */}
                  <div className="p-3 rounded-2xl bg-brand-purple-deep text-white mb-5 text-left">
                    <div className="font-display font-bold text-sm text-brand-yellow-300">
                      {plan.targetLPA}
                    </div>
                    <div className="text-[10.5px] text-purple-200 leading-snug mt-0.5">
                      {plan.targetSub}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-brand-purple-deep">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Buttons: Purchase & Get Scholarship */}
                <div className="space-y-2 pt-4 border-t border-brand-purple-900/10">
                  <button
                    onClick={() => onPurchaseClick(plan)}
                    className="w-full py-2.5 px-3 rounded-xl bg-brand-purple-deep hover:bg-brand-purple-900 text-brand-yellow-300 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Purchase</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={() => onScholarshipClick(plan)}
                    className="w-full py-2 px-3 rounded-xl bg-white hover:bg-brand-purple-50 text-brand-purple-deep font-semibold text-[11px] border border-brand-purple-900/15 transition-colors flex items-center justify-center gap-1"
                  >
                    <GraduationCap className="w-3 h-3 text-brand-purple-700" />
                    <span>Get Scholarship</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Comparison Link */}
        <div className="text-center">
          <button
            onClick={() => alert("Dkoder Feature Comparison Matrix: All plans include 365-day access, company-tagged questions, and placement exam notifications.")}
            className="text-xs sm:text-sm font-bold text-brand-purple-deep hover:text-brand-purple-700 inline-flex items-center gap-1.5 underline decoration-brand-yellow-400 decoration-2"
          >
            <span>See the full comparison</span>
            <ArrowRight className="w-4 h-4 text-brand-yellow-500" />
          </button>
        </div>

      </div>
    </section>
  );
}
