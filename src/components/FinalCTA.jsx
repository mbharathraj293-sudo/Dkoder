import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Send, CheckCircle2, Zap } from "lucide-react";
import confetti from "canvas-confetti";

export default function FinalCTA({ onExploreClick, onStartLearningClick }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#FACC15", "#A855F7", "#FFE500"]
    });
    setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-28 relative bg-[#FAF9F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Call to Action Container */}
        <div className="relative rounded-3xl bg-gradient-to-br from-brand-purple-deep via-brand-purple-900 to-brand-purple-950 p-8 sm:p-14 lg:p-20 text-white shadow-2xl border border-brand-purple-700/40 text-center overflow-hidden">
          
          {/* Subtle Ambient Golden Spotlight */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-yellow-400/20 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 right-10 w-80 h-80 bg-brand-purple-600/30 blur-3xl rounded-full pointer-events-none" />

          {/* Section Subtitle Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow-400/15 border border-brand-yellow-400/40 text-brand-yellow-300 text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Join 50,000+ Motivated Student Builders
          </div>

          {/* Main Headline */}
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight max-w-4xl mx-auto mb-6 leading-tight">
            Your next opportunity is{" "}
            <span className="text-brand-yellow-400 relative inline-block">
              closer than you think.
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-purple-200 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Learn something new. Build something real. Take the next step.
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand-yellow-400 text-brand-purple-darkest font-bold text-base hover:bg-brand-yellow-300 active:scale-95 transition-all shadow-[0_6px_25px_rgba(250,204,21,0.4)] hover:shadow-[0_8px_30px_rgba(250,204,21,0.6)]"
            >
              <span>Explore Opportunities</span>
              <ArrowRight className="w-5 h-5 text-brand-purple-darkest group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onStartLearningClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-purple-950/70 hover:bg-purple-900 text-white font-semibold text-base transition-colors border border-purple-700/50"
            >
              <Zap className="w-4 h-4 text-brand-yellow-400" />
              <span>Start Learning</span>
            </button>
          </div>

          {/* Fast-Track Opportunity Radar Email Bar */}
          <div className="max-w-md mx-auto pt-8 border-t border-purple-800/60">
            <div className="text-xs text-purple-300 font-mono mb-3">
              Get weekly verified hackathons & fellowships in your inbox
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>You're on the radar! First opportunity digest sent.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your student email..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-purple-950/90 border border-purple-700/70 text-white placeholder-purple-400 text-xs sm:text-sm focus:outline-none focus:border-brand-yellow-400 focus:ring-1 focus:ring-brand-yellow-400 font-sans"
                />
                <button
                  type="submit"
                  className="shrink-0 px-5 py-3 rounded-xl bg-white text-brand-purple-deep hover:bg-brand-yellow-300 hover:text-brand-purple-darkest font-bold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>Join Radar</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            <div className="text-[10px] text-purple-400 mt-2 font-mono">
              Zero spam. Verified hackathons, campus challenges, and grants only.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
