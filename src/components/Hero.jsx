import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  Trophy,
  Code2,
  Building2,
  Compass,
  CheckCircle2,
  TrendingUp,
  Zap
} from "lucide-react";

export default function Hero({ onExploreClick, onStartLearningClick }) {
  const [activeNode, setActiveNode] = useState(null);

  const ecosystemNodes = [
    {
      id: "learn",
      label: "LEARN",
      subtitle: "6 Core Tracks",
      icon: BookOpen,
      svgX: 125,
      svgY: 90,
      pctLeft: "25%",
      pctTop: "18%",
      color: "#9333EA",
    },
    {
      id: "hackathons",
      label: "HACKATHONS",
      subtitle: "₹8.4L+ Active",
      icon: Trophy,
      svgX: 375,
      svgY: 90,
      pctLeft: "75%",
      pctTop: "18%",
      color: "#EAB308",
    },
    {
      id: "projects",
      label: "PROJECTS",
      subtitle: "18.4K Shipped",
      icon: Code2,
      svgX: 400,
      svgY: 300,
      pctLeft: "80%",
      pctTop: "60%",
      color: "#7E22CE",
    },
    {
      id: "colleges",
      label: "COLLEGES",
      subtitle: "500+ Hubs",
      icon: Building2,
      svgX: 250,
      svgY: 410,
      pctLeft: "50%",
      pctTop: "82%",
      color: "#9333EA",
    },
    {
      id: "opportunities",
      label: "OPPORTUNITIES",
      subtitle: "Fast Pipeline",
      icon: Compass,
      svgX: 100,
      svgY: 300,
      pctLeft: "20%",
      pctTop: "60%",
      color: "#6B21A8",
    }
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-brand-base-warm via-white to-brand-base-warm">
      {/* Subtle background ambient glow and grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-purple-200/40 via-purple-100/20 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-32 right-10 w-96 h-96 bg-brand-yellow-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 flex flex-col text-left">
            {/* Live Indicator Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-brand-purple-900/10 shadow-sm w-fit mb-6"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow-500" />
              </span>
              <span className="text-xs font-semibold text-brand-purple-950 font-mono tracking-wide uppercase">
                Student Opportunity OS
              </span>
              <span className="text-[11px] text-brand-text-muted font-sans border-l border-brand-border-light pl-2">
                1,240+ Active Opportunities Live
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-purple-deep tracking-tight leading-[1.08] mb-6"
            >
              Your Next Opportunity{" "}
              <span className="relative inline-block text-brand-purple-900">
                Starts Here.
                {/* Strategic yellow underline highlighter */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-brand-yellow-400 opacity-90 -z-10"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 8.5C50 2 150 2 197 9.5"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-brand-text-secondary leading-relaxed font-normal max-w-xl mb-8"
            >
              Learn skills. Build projects. Discover hackathons. Connect with colleges. Turn curiosity into opportunities.
            </motion.p>

            {/* Primary & Secondary CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <button
                onClick={onExploreClick}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-brand-yellow-400 text-brand-purple-darkest font-bold text-base hover:bg-brand-yellow-300 active:scale-95 transition-all duration-200 shadow-[0_6px_20px_rgba(250,204,21,0.35)] hover:shadow-[0_8px_25px_rgba(250,204,21,0.5)] border border-brand-yellow-500/30"
              >
                <span>Explore Opportunities</span>
                <ArrowRight className="w-5 h-5 text-brand-purple-darkest group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onStartLearningClick}
                className="group inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-brand-purple-deep hover:bg-brand-purple-50/80 active:scale-95 font-semibold text-base transition-all duration-200 border border-brand-purple-900/15 shadow-sm hover:shadow"
              >
                <Sparkles className="w-4 h-4 text-brand-purple-600 group-hover:rotate-12 transition-transform" />
                <span>Start Learning</span>
              </button>
            </motion.div>

            {/* Quick Proof Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-border-light max-w-lg"
            >
              <div>
                <div className="font-display font-bold text-xl sm:text-2xl text-brand-purple-deep">50,000+</div>
                <div className="text-xs text-brand-text-muted mt-0.5">Active Students</div>
              </div>
              <div>
                <div className="font-display font-bold text-xl sm:text-2xl text-brand-purple-deep">500+</div>
                <div className="text-xs text-brand-text-muted mt-0.5">Campuses Connected</div>
              </div>
              <div>
                <div className="font-display font-bold text-xl sm:text-2xl text-brand-purple-deep">₹2.4 Cr+</div>
                <div className="text-xs text-brand-text-muted mt-0.5">Grants & Prizes</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Original Opportunity Ecosystem Visualization */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[500px]">
            {/* The Responsive Canvas of the Connected Ecosystem */}
            <div className="relative w-full max-w-[500px] aspect-square rounded-3xl bg-gradient-to-br from-white/95 via-purple-50/40 to-white/95 p-4 border border-brand-purple-900/10 shadow-[0_15px_40px_-15px_rgba(28,13,58,0.08)] overflow-hidden">
              
              {/* Radar Grid Circles */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[180px] h-[180px] rounded-full border border-dashed border-brand-purple-200/80 animate-[spin_30s_linear_infinite]" />
                <div className="absolute w-[320px] h-[320px] rounded-full border border-brand-purple-100/70" />
                <div className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-brand-purple-100/50" />
              </div>

              {/* Connected Lines SVG using viewBox 500x500 */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
                <defs>
                  <linearGradient id="heroLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7E22CE" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#FACC15" stopOpacity="0.85" />
                  </linearGradient>
                </defs>
                {/* Connecting lines from center (250, 240) to nodes */}
                {ecosystemNodes.map((node) => (
                  <g key={`line-${node.id}`}>
                    <line
                      x1="250"
                      y1="240"
                      x2={node.svgX}
                      y2={node.svgY}
                      stroke="url(#heroLineGrad)"
                      strokeWidth={activeNode === node.id ? "2.5" : "1.5"}
                      className="animate-dash"
                      strokeOpacity={activeNode === node.id ? "1" : "0.55"}
                    />
                    {/* Pulsing signal packet traveling along line */}
                    <circle
                      cx={250 + (node.svgX - 250) * 0.55}
                      cy={240 + (node.svgY - 240) * 0.55}
                      r="3"
                      fill="#FACC15"
                      className="animate-pulse"
                    />
                  </g>
                ))}
              </svg>

              {/* Central Glowing Core: "YOUR JOURNEY" */}
              <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="relative cursor-pointer flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-brand-purple-deep via-brand-purple-900 to-brand-purple-950 text-white shadow-[0_0_35px_rgba(107,33,168,0.5)] border-2 border-brand-yellow-400 p-2 text-center"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-brand-yellow-400/20 flex items-center justify-center mb-0.5">
                    <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-yellow-300 fill-brand-yellow-300" />
                  </div>
                  <span className="font-display font-extrabold text-[11px] sm:text-[12px] tracking-wider uppercase text-white leading-tight">
                    YOUR
                  </span>
                  <span className="font-display font-black text-[12px] sm:text-[13px] tracking-wider uppercase text-brand-yellow-300 leading-tight">
                    JOURNEY
                  </span>
                  
                  {/* Subtle pulsing outer ring */}
                  <span className="absolute -inset-1 rounded-full border border-brand-yellow-400/40 animate-ping opacity-30 pointer-events-none" />
                </motion.div>
              </div>

              {/* Surrounding Orbit Satellite Nodes positioned with percentages */}
              {ecosystemNodes.map((node) => {
                const IconComponent = node.icon;
                const isActive = activeNode === node.id;
                return (
                  <div
                    key={node.id}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                    style={{ left: node.pctLeft, top: node.pctTop }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white border transition-all duration-200 shadow-md flex items-center gap-1.5 sm:gap-2 ${
                        isActive
                          ? "border-brand-purple-600 shadow-lg ring-2 ring-brand-purple-200"
                          : "border-brand-purple-900/10 hover:border-brand-purple-300"
                      }`}
                    >
                      <div
                        className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-white shrink-0"
                        style={{ backgroundColor: node.color }}
                      >
                        <IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-display font-bold text-[11px] sm:text-xs tracking-wide text-brand-purple-deep">
                          {node.label}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-mono text-brand-text-muted">
                          {node.subtitle}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                );
              })}

              {/* Floating Opportunity Cards with Framer Motion subtle floats */}

              {/* Floating Card 1: AI Hackathon */}
              <motion.div
                animate={{
                  y: [-3, 5, -3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden sm:block absolute top-3 right-3 z-30"
              >
                <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-brand-yellow-400/60 shadow-[0_6px_20px_rgba(28,13,58,0.1)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-brand-purple-deep">AI Hackathon</span>
                      <span className="text-[9px] font-mono font-bold bg-brand-yellow-100 text-brand-purple-950 px-1 rounded">
                        ₹1.5L
                      </span>
                    </div>
                    <div className="text-[9.5px] text-brand-text-muted">12 Days Left • Online</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2: Web Dev Sprint */}
              <motion.div
                animate={{
                  y: [4, -4, 4],
                }}
                transition={{
                  duration: 5.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="hidden sm:block absolute bottom-4 left-4 z-30"
              >
                <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-brand-purple-200 shadow-[0_6px_20px_rgba(28,13,58,0.08)] flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-brand-purple-100 flex items-center justify-center text-brand-purple-800">
                    <Code2 className="w-3 h-3" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-brand-purple-deep">Web Development</div>
                    <div className="text-[9.5px] text-brand-purple-700 font-medium">Sprint • 6 Projects</div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
