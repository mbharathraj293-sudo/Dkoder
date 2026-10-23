import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Building2, Trophy, BookOpen, Award, CheckCircle } from "lucide-react";

function CounterItem({ endValue, label, subtitle, prefix = "", suffix = "", icon: Icon }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const duration = 2000; // 2 seconds

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * endValue));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, endValue]);

  return (
    <div
      ref={ref}
      className="p-6 sm:p-8 rounded-3xl bg-white border border-brand-purple-900/10 shadow-[0_10px_30px_-10px_rgba(28,13,58,0.06)] hover:border-brand-purple-300 transition-all text-left group"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono font-bold text-brand-purple-800 uppercase tracking-wider">
          {label}
        </span>
        <div className="w-10 h-10 rounded-xl bg-brand-purple-50 flex items-center justify-center text-brand-purple-900 group-hover:bg-brand-purple-900 group-hover:text-brand-yellow-400 transition-colors">
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="font-display font-extrabold text-4xl sm:text-5xl text-brand-purple-deep tracking-tight mb-2">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>

      <p className="text-xs sm:text-sm text-brand-text-secondary">
        {subtitle}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 md:py-24 relative bg-white border-t border-brand-purple-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple-100/70 text-brand-purple-900 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-brand-purple-700" />
            Empirical Platform Scale
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-purple-deep tracking-tight mb-4">
            Ecosystem Metrics That{" "}
            <span className="text-brand-purple-700">Matter</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
            Measuring the tangible pipeline connecting motivated learners to validated real-world opportunities.
          </p>
        </div>

        {/* 4 Core Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <CounterItem
            endValue={50000}
            suffix="+"
            label="Verified Students"
            subtitle="Undergrad developers, designers, and AI researchers actively building."
            icon={Users}
          />
          <CounterItem
            endValue={500}
            suffix="+"
            label="Partner Campuses"
            subtitle="Tier-1 institutions, autonomous universities, and active student clubs."
            icon={Building2}
          />
          <CounterItem
            endValue={1200}
            suffix="+"
            label="Live Challenges"
            subtitle="Hackathons, design sprints, and algorithmic CTFs hosted across chapters."
            icon={Trophy}
          />
          <CounterItem
            endValue={300}
            suffix="+"
            label="Learning Tracks"
            subtitle="Modular skill paths mapped directly to real hackathon problem statements."
            icon={BookOpen}
          />
        </div>

        {/* Secondary Impact Banner */}
        <div className="rounded-2xl p-6 bg-[#FAF9F5] border border-brand-purple-900/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center justify-center">
            <span className="font-display font-black text-2xl sm:text-3xl text-brand-purple-deep">₹2.4 Cr+</span>
            <span className="text-xs text-brand-text-muted mt-1">Cash Prizes & Pre-Seed Grants Distributed</span>
          </div>
          <div className="flex flex-col items-center justify-center md:border-x md:border-brand-purple-900/10">
            <span className="font-display font-black text-2xl sm:text-3xl text-brand-purple-deep">88.4%</span>
            <span className="text-xs text-brand-text-muted mt-1">Flagship Project Shipped-to-Completion Rate</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-display font-black text-2xl sm:text-3xl text-brand-purple-deep">4.9 / 5.0</span>
            <span className="text-xs text-brand-text-muted mt-1">Average Student Developer Experience Rating</span>
          </div>
        </div>

      </div>
    </section>
  );
}
