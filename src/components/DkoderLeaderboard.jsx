import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Flame, Zap, Award, Sparkles, ChevronRight, RotateCcw } from "lucide-react";
import { STUDENT_LEADERBOARD } from "../data/dkoderData";

export default function DkoderLeaderboard() {
  const [selectedStudent, setSelectedStudent] = useState(STUDENT_LEADERBOARD[0]);

  return (
    <section id="leaderboard" className="py-20 md:py-28 bg-[#FAF9F5] text-brand-purple-deep relative overflow-hidden border-t border-brand-purple-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow-100 text-brand-purple-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 border border-brand-yellow-400/50">
            <Trophy className="w-3.5 h-3.5 text-brand-yellow-600" />
            Live Practice Benchmark
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-purple-deep tracking-tight mb-3">
            Campus Leaderboard
          </h2>
          <p className="text-base sm:text-lg text-brand-text-secondary leading-relaxed">
            See where engineering students rank across daily practice streaks, platform problems, and verified XP.
          </p>
        </div>

        {/* Authentic Dkoder Leaderboard Table Card */}
        <div className="rounded-3xl bg-white border-2 border-brand-purple-deep shadow-xl overflow-hidden max-w-5xl mx-auto">
          
          {/* Table Header Bar */}
          <div className="grid grid-cols-12 gap-2 px-6 py-4 bg-[#FAF9F5] border-b border-brand-purple-900/10 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-text-muted text-left">
            <div className="col-span-1 text-center">RANK</div>
            <div className="col-span-4 sm:col-span-3">STUDENT</div>
            <div className="col-span-3 hidden sm:block">COLLEGE</div>
            <div className="col-span-3 sm:col-span-2 text-center">STREAK</div>
            <div className="col-span-4 sm:col-span-3 text-right">XP & PROGRESS</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-brand-purple-900/5">
            {STUDENT_LEADERBOARD.map((student) => {
              const isSelected = selectedStudent.rank === student.rank;

              return (
                <div
                  key={student.rank}
                  onClick={() => setSelectedStudent(student)}
                  className={`grid grid-cols-12 gap-2 px-6 py-4 items-center text-left cursor-pointer transition-colors ${
                    isSelected ? "bg-brand-yellow-50/70" : "hover:bg-brand-purple-50/40"
                  }`}
                >
                  {/* Rank badge */}
                  <div className="col-span-1 text-center">
                    <span className="w-7 h-7 rounded-full bg-brand-purple-50 border border-brand-purple-200 text-brand-purple-900 font-mono font-bold text-xs inline-flex items-center justify-center">
                      {student.rank}
                    </span>
                  </div>

                  {/* Student */}
                  <div className="col-span-4 sm:col-span-3 flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 shadow-sm"
                      style={{ backgroundColor: student.avatarColor }}
                    >
                      {student.name.charAt(0)}
                    </div>
                    <span className="font-display font-bold text-sm text-brand-purple-deep truncate">
                      {student.name}
                    </span>
                  </div>

                  {/* College */}
                  <div className="col-span-3 hidden sm:block text-xs text-brand-text-muted truncate">
                    {student.college}
                  </div>

                  {/* Streak */}
                  <div className="col-span-3 sm:col-span-2 text-center">
                    {student.streak !== "No streak" ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-mono font-bold">
                        <Flame className="w-3 h-3 text-amber-600 fill-amber-500" />
                        {student.streak}
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-brand-text-muted">
                        No streak
                      </span>
                    )}
                  </div>

                  {/* XP & Progress */}
                  <div className="col-span-4 sm:col-span-3 text-right">
                    <div className="font-mono font-extrabold text-sm text-brand-purple-deep">
                      {student.xp}
                    </div>
                    <div className="text-[10px] text-brand-text-muted font-mono">
                      {student.progress}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Table Footer */}
          <div className="px-6 py-4 bg-[#FAF9F5] border-t border-brand-purple-900/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-text-muted">
            <span className="font-mono">
              Showing ranks 4–10 of 50 below podium • Click a row for details
            </span>
            <span className="font-mono text-brand-purple-700 font-semibold flex items-center gap-1">
              <RotateCcw className="w-3 h-3" />
              Updated real-time
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
