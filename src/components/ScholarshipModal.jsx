import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, GraduationCap, CheckCircle2, Send, Award } from "lucide-react";
import confetti from "canvas-confetti";

export default function ScholarshipModal({ isOpen, plan, onClose }) {
  const [studentName, setStudentName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 65,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#FACC15", "#10B981", "#7E22CE"]
    });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-purple-darkest/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-brand-purple-deep relative overflow-hidden text-left"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-brand-purple-50 text-brand-purple-deep transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-lg bg-brand-yellow-400 text-brand-purple-darkest flex items-center justify-center">
            <GraduationCap className="w-4 h-4" />
          </div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-purple-900">
            Dkoder Student Scholarship Aid
          </span>
        </div>

        <h3 className="font-display font-extrabold text-2xl text-brand-purple-deep mb-1">
          Apply for {plan ? plan.name : "Plan"} Scholarship
        </h3>
        <p className="text-xs text-brand-text-secondary leading-relaxed mb-6">
          Dkoder provides merit and financial scholarships up to 100% tuition waiver for motivated engineering students across India.
        </p>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h4 className="font-display font-bold text-lg text-emerald-900 mb-1">
              Application Under Review!
            </h4>
            <p className="text-xs text-emerald-700 leading-relaxed mb-4">
              Your scholarship request for {plan ? plan.name : "Dkoder"} has been queued. Our verification team will review your academic record and notify you within 48 hours.
            </p>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[11px] font-mono font-bold uppercase text-brand-purple-950 block mb-1">
                Student Full Name
              </label>
              <input
                type="text"
                required
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="e.g. Kavipriya E"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-brand-purple-900/15 text-xs text-brand-purple-deep focus:outline-none focus:border-brand-purple-700 font-sans"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-mono font-bold uppercase text-brand-purple-950 block mb-1">
                  College / Branch
                </label>
                <input
                  type="text"
                  required
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  placeholder="e.g. CEG Anna Univ, CSE"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-brand-purple-900/15 text-xs text-brand-purple-deep focus:outline-none focus:border-brand-purple-700 font-sans"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono font-bold uppercase text-brand-purple-950 block mb-1">
                  Current CGPA / Percentage
                </label>
                <input
                  type="text"
                  required
                  value={cgpa}
                  onChange={(e) => setCgpa(e.target.value)}
                  placeholder="e.g. 8.6 / 10"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-brand-purple-900/15 text-xs text-brand-purple-deep focus:outline-none focus:border-brand-purple-700 font-sans"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-mono font-bold uppercase text-brand-purple-950 block mb-1">
                Why are you seeking Dkoder scholarship assistance?
              </label>
              <textarea
                required
                rows={3}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Briefly describe your target company drives and financial background..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-brand-purple-900/15 text-xs text-brand-purple-deep focus:outline-none focus:border-brand-purple-700 font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-brand-yellow-400 text-brand-purple-darkest font-extrabold text-sm hover:bg-brand-yellow-300 transition-colors shadow-md flex items-center justify-center gap-2 mt-4"
            >
              <span>Submit Scholarship Application</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
