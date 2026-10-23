import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  LayoutGrid,
  BarChart3,
  Cpu,
  ShieldAlert,
  CloudCog,
  Clock,
  FolderGit2,
  ArrowRight,
  Sparkles,
  CheckCircle,
  X,
  Code
} from "lucide-react";
import { SKILLS_DATA } from "../data/mockData";

export default function LearnSection({ onSelectPath }) {
  const [filterDifficulty, setFilterDifficulty] = useState("All");
  const [activeModalSkill, setActiveModalSkill] = useState(null);

  const iconMap = {
    BrainCircuit: BrainCircuit,
    LayoutGrid: LayoutGrid,
    BarChart3: BarChart3,
    Cpu: Cpu,
    ShieldAlert: ShieldAlert,
    CloudCog: CloudCog,
  };

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (filterDifficulty === "All") return true;
    if (filterDifficulty === "Beginner") return skill.difficulty.includes("Beginner");
    if (filterDifficulty === "Intermediate") return skill.difficulty.includes("Intermediate");
    if (filterDifficulty === "Advanced") return skill.difficulty.includes("Advanced");
    return true;
  });

  return (
    <section id="learn" className="py-20 md:py-28 relative bg-white border-t border-brand-purple-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple-100/70 text-brand-purple-900 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow-500" />
              02 • Practical Competencies
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-purple-deep tracking-tight mb-4">
              Learn Skills That{" "}
              <span className="text-brand-purple-700">Move You Forward</span>
            </h2>
            <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
              Go beyond courses. Build practical skills around the opportunities you want.
            </p>
          </div>

          {/* Difficulty Filter Tabs */}
          <div className="flex items-center gap-1.5 bg-brand-base-subtle p-1.5 rounded-xl border border-brand-purple-900/10 self-start md:self-auto">
            {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
              <button
                key={level}
                onClick={() => setFilterDifficulty(level)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 ${
                  filterDifficulty === level
                    ? "bg-white text-brand-purple-deep shadow-sm font-bold"
                    : "text-brand-text-muted hover:text-brand-purple-950"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || BrainCircuit;

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative bg-[#FAF9F5] rounded-3xl p-6 sm:p-7 border border-brand-purple-900/10 hover:border-brand-purple-600/40 hover:bg-white transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(88,28,135,0.12)] flex flex-col justify-between"
              >
                {/* Top Row: Icon + Difficulty Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-brand-purple-900/10 flex items-center justify-center text-brand-purple-900 group-hover:scale-105 group-hover:bg-brand-purple-900 group-hover:text-brand-yellow-400 transition-all duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full border ${
                        skill.difficulty.includes("Beginner")
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : skill.difficulty.includes("Advanced")
                          ? "bg-amber-50 text-amber-800 border-amber-200"
                          : "bg-purple-50 text-brand-purple-900 border-brand-purple-200"
                      }`}
                    >
                      {skill.difficulty}
                    </span>
                  </div>

                  {/* Category & Title */}
                  <div className="text-[11px] font-mono uppercase tracking-wider text-brand-purple-700 font-bold mb-1">
                    {skill.category}
                  </div>
                  <h3 className="font-display font-bold text-xl text-brand-purple-deep mb-3 group-hover:text-brand-purple-800 transition-colors">
                    {skill.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-text-secondary leading-relaxed mb-5">
                    {skill.description}
                  </p>

                  {/* Key Metrics: Learning Time & Project Count */}
                  <div className="flex items-center gap-4 py-3 px-3.5 rounded-xl bg-white/80 border border-brand-purple-900/5 mb-5">
                    <div className="flex items-center gap-1.5 text-xs text-brand-text-primary font-medium">
                      <Clock className="w-3.5 h-3.5 text-brand-purple-700" />
                      <span>{skill.duration}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-brand-border-medium" />
                    <div className="flex items-center gap-1.5 text-xs text-brand-text-primary font-medium">
                      <FolderGit2 className="w-3.5 h-3.5 text-brand-yellow-600" />
                      <span>{skill.projectsCount} projects</span>
                    </div>
                  </div>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono bg-white px-2 py-0.5 rounded border border-brand-purple-900/10 text-brand-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 border-t border-brand-purple-900/5 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalSkill(skill)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-purple-deep hover:text-brand-purple-700 group-hover:gap-2.5 transition-all"
                  >
                    <span>Explore Path</span>
                    <ArrowRight className="w-4 h-4 text-brand-yellow-500 group-hover:text-brand-yellow-600" />
                  </button>
                  <span className="text-[10px] font-mono text-brand-text-muted">Verified Track</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skill Details Modal */}
        <AnimatePresence>
          {activeModalSkill && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-purple-darkest/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-brand-purple-900/15 relative overflow-hidden"
              >
                <button
                  onClick={() => setActiveModalSkill(null)}
                  className="absolute top-5 right-5 p-2 rounded-full hover:bg-brand-purple-50 text-brand-purple-deep transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-yellow-600 uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Project Milestones
                </div>

                <h3 className="font-display font-bold text-2xl text-brand-purple-deep mb-2">
                  {activeModalSkill.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-text-secondary mb-6">
                  {activeModalSkill.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="text-xs font-mono font-bold uppercase text-brand-purple-950">
                    Flagship Projects You Will Build ({activeModalSkill.projectsCount})
                  </div>
                  {activeModalSkill.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF9F5] border border-brand-purple-900/5 text-xs text-brand-text-primary"
                    >
                      <span className="w-5 h-5 rounded-md bg-brand-yellow-400 text-brand-purple-darkest font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">
                        0{idx + 1}
                      </span>
                      <span className="font-medium pt-0.5">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      const skill = activeModalSkill;
                      setActiveModalSkill(null);
                      onSelectPath?.(skill);
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-brand-yellow-400 text-brand-purple-darkest font-bold text-sm hover:bg-brand-yellow-300 transition-colors text-center"
                  >
                    Enroll in This Opportunity Path
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
