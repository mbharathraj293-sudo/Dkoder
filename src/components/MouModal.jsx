import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Building2, CheckCircle2, Send, FileCheck } from "lucide-react";
import confetti from "canvas-confetti";

export default function MouModal({ isOpen, onClose }) {
  const [collegeName, setCollegeName] = useState("");
  const [officerName, setOfficerName] = useState("");
  const [email, setEmail] = useState("");
  const [studentCount, setStudentCount] = useState("500-1000");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#FACC15", "#7E22CE", "#1C0D3A"]
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
            <Building2 className="w-4 h-4" />
          </div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-purple-900">
            Institutional Partnership
          </span>
        </div>

        <h3 className="font-display font-extrabold text-2xl text-brand-purple-deep mb-2">
          Apply for Dkoder MOU
        </h3>
        <p className="text-xs text-brand-text-secondary leading-relaxed mb-6">
          Equip your engineering college with campus-wide question banks, batch performance analytics, and placement entrance prep series.
        </p>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h4 className="font-display font-bold text-lg text-emerald-900 mb-1">
              MOU Application Received!
            </h4>
            <p className="text-xs text-emerald-700 leading-relaxed mb-4">
              Our Institutional Partnerships team will contact {officerName || "your placement office"} within 24 hours to schedule the platform walkthrough.
            </p>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-emerald-700 text-white font-bold text-xs"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-[11px] font-mono font-bold uppercase text-brand-purple-950 block mb-1">
                College / University Name
              </label>
              <input
                type="text"
                required
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                placeholder="e.g. Madras Institute of Technology"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-brand-purple-900/15 text-xs text-brand-purple-deep focus:outline-none focus:border-brand-purple-700 font-sans"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-mono font-bold uppercase text-brand-purple-950 block mb-1">
                  Placement Officer / Dean Name
                </label>
                <input
                  type="text"
                  required
                  value={officerName}
                  onChange={(e) => setOfficerName(e.target.value)}
                  placeholder="Dr. S. Raman"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-brand-purple-900/15 text-xs text-brand-purple-deep focus:outline-none focus:border-brand-purple-700 font-sans"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono font-bold uppercase text-brand-purple-950 block mb-1">
                  Official Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="placement@college.edu.in"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-brand-purple-900/15 text-xs text-brand-purple-deep focus:outline-none focus:border-brand-purple-700 font-sans"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-mono font-bold uppercase text-brand-purple-950 block mb-1">
                Annual Student Batch Size
              </label>
              <select
                value={studentCount}
                onChange={(e) => setStudentCount(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF9F5] border border-brand-purple-900/15 text-xs font-semibold text-brand-purple-deep focus:outline-none focus:border-brand-purple-700"
              >
                <option value="200-500">200–500 Students</option>
                <option value="500-1000">500–1,000 Students</option>
                <option value="1000-2500">1,000–2,500 Students</option>
                <option value="2500+">2,500+ Campus Group</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-brand-yellow-400 text-brand-purple-darkest font-extrabold text-sm hover:bg-brand-yellow-300 transition-colors shadow-md flex items-center justify-center gap-2 mt-4"
            >
              <span>Submit Institutional MOU Request</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
