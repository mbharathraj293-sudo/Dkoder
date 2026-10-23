import React, { useState, useEffect } from "react";
import { ArrowUp, CheckCircle2 } from "lucide-react";
import DkoderNavbar from "./components/DkoderNavbar";
import DkoderHero from "./components/DkoderHero";
import DkoderQuestionBank from "./components/DkoderQuestionBank";
import DkoderCareerTracks from "./components/DkoderCareerTracks";
import DkoderHackathons from "./components/DkoderHackathons";
import DkoderLeaderboard from "./components/DkoderLeaderboard";
import DkoderPricing from "./components/DkoderPricing";
import DkoderForColleges from "./components/DkoderForColleges";
import DkoderFooter from "./components/DkoderFooter";
import MouModal from "./components/MouModal";
import ScholarshipModal from "./components/ScholarshipModal";

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [mouModalOpen, setMouModalOpen] = useState(false);
  const [scholarshipModalOpen, setScholarshipModalOpen] = useState(false);
  const [selectedPlanForScholarship, setSelectedPlanForScholarship] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStarted = () => {
    scrollToSection("question-bank");
    triggerToast("Welcome to Dkoder! Pick a company target to begin practice.");
  };

  const handleTryFilters = () => {
    scrollToSection("question-bank");
  };

  const handlePracticeTrack = (track) => {
    triggerToast(`Active track: ${track.title} (${track.package}). Questions loaded.`);
    scrollToSection("question-bank");
  };

  const handleRegisterHackathon = (hackathon) => {
    triggerToast(`Registered interest for ${hackathon.title}! Schedule details sent.`);
  };

  const handlePurchasePlan = (plan) => {
    triggerToast(`Initiating checkout for Dkoder ${plan.name} (${plan.priceYear}/year)...`);
  };

  const handleOpenScholarship = (plan) => {
    setSelectedPlanForScholarship(plan);
    setScholarshipModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-brand-purple-deep flex flex-col font-sans selection:bg-brand-yellow-400 selection:text-brand-purple-darkest">
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed top-24 right-4 sm:right-8 z-50 animate-fadeIn">
          <div className="bg-brand-purple-deep text-white px-5 py-3 rounded-2xl shadow-2xl border-2 border-brand-yellow-400 flex items-center gap-3 backdrop-blur-md">
            <CheckCircle2 className="w-5 h-5 text-brand-yellow-400 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
          </div>
        </div>
      )}

      {/* 1. Authentic Dkoder Sticky Navigation */}
      <DkoderNavbar
        onGetStartedClick={handleGetStarted}
        onApplyMouClick={() => setMouModalOpen(true)}
      />

      {/* Main Authentic Dkoder Experience */}
      <main className="flex-1">
        {/* 2. Dkoder Hero (Dialogue Banner, Company Ticker, "Interview tomorrow. Mind everywhere?" Candidate Thought Cloud) */}
        <DkoderHero
          onTryFiltersClick={handleTryFilters}
        />

        {/* 3. "A deep question bank. Only a few for you." with Live Target Filtering */}
        <DkoderQuestionBank
          onSeeTargetsClick={() => scrollToSection("career-tracks")}
        />

        {/* 4. "Right filter. Right career." with Interactive 5 Career Tracks & Bundles */}
        <DkoderCareerTracks
          onPracticeTrackClick={handlePracticeTrack}
        />

        {/* 5. Authentic Dkoder Hackathons (100 Days of Sustainability, Campus Coding League) */}
        <DkoderHackathons
          onRegisterHackathon={handleRegisterHackathon}
        />

        {/* 6. Authentic Dkoder Student Leaderboard (Rankings, streaks, and XP) */}
        <DkoderLeaderboard />

        {/* 7. "Pick your price, not a maybe." Authentic 5 Pricing Tiers */}
        <DkoderPricing
          onPurchaseClick={handlePurchasePlan}
          onScholarshipClick={handleOpenScholarship}
        />

        {/* 8. "Proof should be something you can inspect." Institutional 3-Step Pipeline */}
        <DkoderForColleges
          onApplyMouClick={() => setMouModalOpen(true)}
        />
      </main>

      {/* 9. Authentic Dkoder Footer with Contact, Recognitions, Statutory Numbers */}
      <DkoderFooter
        onPartnerClick={() => setMouModalOpen(true)}
      />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to Top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-brand-purple-deep text-brand-yellow-300 shadow-xl border border-brand-purple-700/50 hover:bg-brand-purple-900 hover:scale-105 active:scale-95 transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Institutional MOU Application Modal */}
      <MouModal
        isOpen={mouModalOpen}
        onClose={() => setMouModalOpen(false)}
      />

      {/* Student Scholarship Application Modal */}
      <ScholarshipModal
        isOpen={scholarshipModalOpen}
        plan={selectedPlanForScholarship}
        onClose={() => setScholarshipModalOpen(false)}
      />

    </div>
  );
}
