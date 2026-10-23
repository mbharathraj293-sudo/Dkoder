// Authentic Dkoder Content Inventory & Data

export const DKODER_BRAND = {
  name: "Dkoder",
  motto: "Practice • Learn • Achieve",
  description: "Dkoder is a placement-readiness platform for students and colleges across India: real company questions, live coding practice, courses and campus programmes.",
  office: "Campus 1A, No. 143, Dr. M.G.R. Road, Perungudi, Chennai 600096, Tamil Nadu",
  phone: "+91 87542 00247",
  email: "support@dkoder.co.in",
  cin: "U85500TN2025PTC182250",
  msme: "UDYAM-TN-08-0120538",
  dpiit: "DIPP218224",
  iso: "QMS/0A86/0825"
};

export const TOP_COMPANIES = [
  { name: "Cognizant", logo: "Cognizant", hiring: "GenC & GenC Next" },
  { name: "Accenture", logo: "Accenture", hiring: "ASE & FSE" },
  { name: "IBM", logo: "IBM", hiring: "Associate System Engineer" },
  { name: "Oracle", logo: "Oracle", hiring: "Server Technology SDE" },
  { name: "Cisco", logo: "Cisco", hiring: "Network Software Engineer" },
  { name: "Zoho", logo: "Zoho", hiring: "Software Developer" },
  { name: "HCLTech", logo: "HCLTech", hiring: "Graduate Engineer Trainee" }
];

export const CANDIDATE_THOUGHTS = [
  {
    id: "t1",
    thought: "Where do I even begin?",
    category: "Starting Point",
    solution: "Start with our Company-Specific Diagnostic Test. In 30 minutes, Dkoder maps your exact gaps in DSA, Aptitude, and Core CS."
  },
  {
    id: "t2",
    thought: "Can I reach that ₹10 LPA goal?",
    category: "Package Target",
    solution: "Filter by 'Digital & Specialist' or 'Product SDE'. We group questions by package tier (0-3L, 3-7L, 7-15L, 15L+) so you practice at the exact difficulty required."
  },
  {
    id: "t3",
    thought: "Have I really improved?",
    category: "Progress",
    solution: "Your Dkoder Scorecard tracks accuracy by topic, runtime performance in coding labs, and percentile against 50,000+ engineering students."
  },
  {
    id: "t4",
    thought: "Is this the right role for me?",
    category: "Role Alignment",
    solution: "Explore our 5 Career Tracks: Chip & Systems, Service-Company Developer, Digital Specialist, Product SDE, and Big Tech."
  },
  {
    id: "t5",
    thought: "Will they ask me to code?",
    category: "Technical Rounds",
    solution: "Every major company round is tagged: MCQ aptitude, live coding, and platform problem rounds with compiler test cases."
  },
  {
    id: "t6",
    thought: "What if I fail the aptitude round?",
    category: "Aptitude Round",
    solution: "Over 1,527 high-frequency aptitude questions from TCS NQT, InfyTQ, and Accenture with step-by-step visual explanations."
  },
  {
    id: "t7",
    thought: "What should I revise tonight?",
    category: "Last-Minute Prep",
    solution: "Open your target company bundle (e.g. Infosys Complete Prep) and toggle 'High Frequency' to revise only the top 50 recurring concepts."
  },
  {
    id: "t8",
    thought: "What if I forget everything?",
    category: "Anxiety",
    solution: "Simulate real test pressure in our timed CodeArena platform problems with identical compiler environments and edge-case testing."
  },
  {
    id: "t9",
    thought: "Can I explain my projects?",
    category: "Interview Round",
    solution: "Access Dkoder's Technical Interview Guides with model architectural explanations for Web, AI, IoT, and Systems projects."
  },
  {
    id: "t10",
    thought: "Will I sound confident in there?",
    category: "HR & Tech Mocks",
    solution: "Practice with peer mock rooms and AI report cards evaluating your problem-solving reasoning and communication."
  },
  {
    id: "t11",
    thought: "Did I practise the right questions?",
    category: "Curated Content",
    solution: "All 12,500+ questions on Dkoder are tagged with company year, recruitment cycle, and verified student submissions."
  },
  {
    id: "t12",
    thought: "Is everyone else better prepared?",
    category: "Benchmark",
    solution: "Check the Live Campus Leaderboard to see where you stand among top colleges and institutional peers across India."
  }
];

export const QUESTION_BANK_MOCK = [
  {
    id: "q1",
    title: "Pointer to Structure",
    type: "MCQ",
    difficulty: "Hard",
    company: "Intuit India SDE-1",
    category: "C / C++ Systems",
    package: "₹18-24 LPA",
    status: "Premium Verified"
  },
  {
    id: "q2",
    title: "Arrays — From Zero to Index",
    type: "Coding",
    difficulty: "Easy",
    company: "SAP Labs",
    category: "Data Structures",
    package: "₹9-12 LPA",
    status: "Open Practice"
  },
  {
    id: "q3",
    title: "Min Heap",
    type: "Platform",
    difficulty: "Hard",
    company: "Google",
    category: "Algorithms",
    package: "₹25+ LPA",
    status: "Company Tagged"
  },
  {
    id: "q4",
    title: "Character Operations",
    type: "MCQ",
    difficulty: "Easy",
    company: "Salesforce India SDE-1",
    category: "Strings & Bits",
    package: "₹14-18 LPA",
    status: "High Frequency"
  },
  {
    id: "q5",
    title: "Longest Substring Without Repeating",
    type: "Coding",
    difficulty: "Medium",
    company: "Microsoft",
    category: "Sliding Window",
    package: "₹16-22 LPA",
    status: "Frequently Asked"
  },
  {
    id: "q6",
    title: "Virtual Memory & Page Replacement",
    type: "MCQ",
    difficulty: "Medium",
    company: "Qualcomm",
    category: "Operating Systems",
    package: "₹12-16 LPA",
    status: "Chip & Systems"
  }
];

export const CAREER_TRACKS = [
  {
    id: "service",
    title: "Service-company developer",
    count: 24,
    headline: "High-volume drives. Aptitude speed and clean basics decide the shortlist.",
    package: "₹2.5–7.5 LPA",
    packageMin: 2.5,
    packageMax: 7.5,
    questionsTotal: 1869,
    mcqCount: 1527,
    codingCount: 299,
    platformCount: 43,
    easy: 781,
    medium: 771,
    hard: 317,
    hiringCompanies: [
      { name: "IBM Associate System Engineer", salary: "₹4.5–6L" },
      { name: "Accenture Associate Software Engineer", salary: "₹4.5–6.5L" },
      { name: "TCS NQT Digital", salary: "₹7–7.3L" },
      { name: "Infosys DSE Trainee", salary: "₹6.25L" },
      { name: "Cognizant GenC Elevate", salary: "₹5.5L" },
      { name: "Wipro Turbo SDE", salary: "₹6.5L" }
    ],
    nextMove: "Start with C programming, then work through the Infosys Complete Prep bundle.",
    bundles: [
      { title: "Infosys Complete Prep", questions: "473 questions", price: "₹199" },
      { title: "Accenture Complete Prep", questions: "446 questions", price: "₹199" }
    ]
  },
  {
    id: "chip",
    title: "Chip & systems engineer",
    count: 6,
    headline: "Low-level architectures, bitwise precision, and OS internals for core silicon engineering.",
    package: "₹8.0–18.0 LPA",
    packageMin: 8.0,
    packageMax: 18.0,
    questionsTotal: 642,
    mcqCount: 410,
    codingCount: 182,
    platformCount: 50,
    easy: 120,
    medium: 340,
    hard: 182,
    hiringCompanies: [
      { name: "Qualcomm Hardware/Software SDE", salary: "₹14–18L" },
      { name: "Texas Instruments Systems Engineer", salary: "₹15–20L" },
      { name: "Intel Firmware Trainee", salary: "₹12–16L" }
    ],
    nextMove: "Master C pointers, bitwise manipulation, and Operating Systems page tables.",
    bundles: [
      { title: "Embedded & Systems Master", questions: "320 questions", price: "₹249" },
      { title: "VLSI & Digital Logic Essentials", questions: "210 questions", price: "₹199" }
    ]
  },
  {
    id: "digital",
    title: "Digital & specialist roles",
    count: 12,
    headline: "Higher package service drives requiring algorithmic aptitude, clean OOP, and SQL mastery.",
    package: "₹6.5–11.0 LPA",
    packageMin: 6.5,
    packageMax: 11.0,
    questionsTotal: 1140,
    mcqCount: 680,
    codingCount: 390,
    platformCount: 70,
    easy: 280,
    medium: 610,
    hard: 250,
    hiringCompanies: [
      { name: "TCS Innovator / Digital", salary: "₹9–11L" },
      { name: "Infosys Specialist Programmer (SP)", salary: "₹9.5L" },
      { name: "LTIMindtree YDP Track", salary: "₹8.5L" }
    ],
    nextMove: "Tackle medium-level LeetCode equivalents and advanced dynamic programming.",
    bundles: [
      { title: "TCS Digital Specialist Pack", questions: "510 questions", price: "₹249" },
      { title: "Infosys SP High-Package Prep", questions: "380 questions", price: "₹249" }
    ]
  },
  {
    id: "product",
    title: "Product-company SDE",
    count: 9,
    headline: "Deep Data Structures, System Design foundations, and multi-round live coding interviews.",
    package: "₹12.0–25.0 LPA",
    packageMin: 12.0,
    packageMax: 25.0,
    questionsTotal: 1420,
    mcqCount: 320,
    codingCount: 890,
    platformCount: 210,
    easy: 210,
    medium: 790,
    hard: 420,
    hiringCompanies: [
      { name: "Zoho Software Developer", salary: "₹8.5–12L" },
      { name: "SAP Labs Associate Developer", salary: "₹14–16L" },
      { name: "Oracle Cloud Infrastructure SDE", salary: "₹18–22L" }
    ],
    nextMove: "Focus on Trees, Graphs, Heap optimizations, and clean modular code design.",
    bundles: [
      { title: "Product SDE DSA Accelerator", questions: "620 questions", price: "₹299" },
      { title: "Zoho Live Coding Round Simulator", questions: "340 questions", price: "₹199" }
    ]
  },
  {
    id: "bigtech",
    title: "Big Tech SDE",
    count: 25,
    headline: "Challenging platform problems, algorithmic efficiency, and scale-ready system design.",
    package: "₹24.0–45.0+ LPA",
    packageMin: 24.0,
    packageMax: 45.0,
    questionsTotal: 1680,
    mcqCount: 140,
    codingCount: 1120,
    platformCount: 420,
    easy: 140,
    medium: 840,
    hard: 700,
    hiringCompanies: [
      { name: "Microsoft SWE-1", salary: "₹24–32L" },
      { name: "Amazon SDE-1", salary: "₹28–34L" },
      { name: "Google Software Engineer", salary: "₹35–45L+" }
    ],
    nextMove: "Conquer Hard DP, Advanced Graph Theory, and Concurrency problems.",
    bundles: [
      { title: "FAANG / Big Tech Elite Sprint", questions: "750 questions", price: "₹399" },
      { title: "System Design for Entry-Level SDE", questions: "180 questions", price: "₹299" }
    ]
  }
];

export const HACKATHONS_DKODER = [
  {
    id: "6ac87549e82640524bc8c1fe",
    title: "100 Days of Sustainability Hackathon",
    category: "Open Innovation • Sustainability",
    mode: "ONLINE & CAMPUS FINALE",
    prize: "₹1,50,000",
    status: "REGISTRATIONS OPEN",
    daysLeft: 14,
    dates: "Nov 15 - Nov 28, 2026",
    host: "Dkoder Campus Network & Partner Universities",
    description: "Build technical prototypes solving carbon footprint tracking, campus renewable energy monitoring, and circular economy digital rails.",
    tracks: ["Energy & Carbon Accounting", "Clean Mobility Systems", "Campus Waste Reduction"],
    eligibility: "Open to all engineering college students across India. Individual or teams of 2–4.",
    rounds: [
      { name: "Round 1: Idea Abstract & Architecture", date: "Nov 15" },
      { name: "Round 2: Live Prototype & Git Repository", date: "Nov 22" },
      { name: "Round 3: Grand Jury Pitch & Code Defense", date: "Nov 28" }
    ]
  },
  {
    id: "campus-coding-league",
    title: "National Campus Coding League 2026",
    category: "DSA & Platform Speed",
    mode: "ONLINE",
    prize: "₹1,00,000",
    status: "CLOSING SOON",
    daysLeft: 5,
    dates: "Nov 08 - Nov 10, 2026",
    host: "Dkoder CodeArena",
    description: "48-hour competitive algorithmic hackathon designed to simulate Big Tech coding interview rounds with automated compiler execution.",
    tracks: ["Dynamic Programming", "Graph Traversal", "High-Concurrency Data Pipelines"],
    eligibility: "Engineering students (1st to 4th year). College leaderboard ranking enabled.",
    rounds: [
      { name: "Qualifier Round: 6 Algorithmic Problems", date: "Nov 08" },
      { name: "Final Sprint: Speed & Edge-Case Arena", date: "Nov 10" }
    ]
  },
  {
    id: "fintech-security-sprint",
    title: "Digital Rails FinTech & Security Challenge",
    category: "Cyber Security & Web3",
    mode: "HYBRID • Chennai / Online",
    prize: "₹2,00,000",
    status: "REGISTRATIONS OPEN",
    daysLeft: 21,
    dates: "Dec 01 - Dec 04, 2026",
    host: "Dkoder Perungudi Innovation Lab",
    description: "Engineer resilient payment rails, anti-fraud anomaly detectors, and zero-trust authentication workflows.",
    tracks: ["Transaction Fraud Prevention", "UPI & Fast-Checkout Resilience", "Zero-Knowledge Proofs"],
    eligibility: "All accredited engineering colleges with active MOU or individual student pass.",
    rounds: [
      { name: "Phase 1: Security Architecture Review", date: "Dec 01" },
      { name: "Phase 2: Live Deployment & Stress Testing", date: "Dec 04" }
    ]
  }
];

export const STUDENT_LEADERBOARD = [
  { rank: 4, name: "Kavipriya E", college: "Non-Institutional Student", streak: "1d", progress: "17% of leader", xp: "475.64 XP", avatarColor: "#0D9488" },
  { rank: 5, name: "A Sri Mathi", college: "Non-Institutional Student", streak: "2d", progress: "17% of leader", xp: "473.84 XP", avatarColor: "#9333EA" },
  { rank: 6, name: "Rishi Easwaran", college: "Non-Institutional Student", streak: "2d", progress: "16% of leader", xp: "438.99 XP", avatarColor: "#EA580C" },
  { rank: 7, name: "SHAIK KARIMULLA", college: "Non-Institutional Student", streak: "1d", progress: "16% of leader", xp: "437.26 XP", avatarColor: "#16A34A" },
  { rank: 8, name: "Rasul", college: "Non-Institutional Student", streak: "No streak", progress: "15% of leader", xp: "420.38 XP", avatarColor: "#475569" },
  { rank: 9, name: "Santhoshini C", college: "Non-Institutional Student", streak: "1d", progress: "14% of leader", xp: "387.03 XP", avatarColor: "#0284C7" },
  { rank: 10, name: "Fawwaz Ahamed", college: "Non-Institutional Student", streak: "1d", progress: "14% of leader", xp: "381.83 XP", avatarColor: "#DB2777" }
];

export const PRICING_PLANS = [
  {
    id: "bronze",
    name: "BRONZE",
    priceYear: "₹699",
    rateDay: "₹2 a day",
    targetLPA: "0–3 LPA",
    targetSub: "Service Based Company Interview Questions",
    features: [
      "Daily challenges",
      "MCQ Practice",
      "Coding Questions"
    ],
    popular: false,
    bestValue: false
  },
  {
    id: "silver",
    name: "SILVER",
    priceYear: "₹999",
    rateDay: "₹3 a day",
    targetLPA: "0–5 LPA",
    targetSub: "Service Based Company Interview Questions",
    features: [
      "Daily challenges",
      "MCQ Practice",
      "Coding Questions"
    ],
    popular: false,
    bestValue: false
  },
  {
    id: "gold",
    name: "GOLD",
    priceYear: "₹1,599",
    rateDay: "₹5 a day",
    targetLPA: "0–7 LPA",
    targetSub: "Service & Product Based Interview Questions",
    features: [
      "Daily challenges",
      "MCQ Practice",
      "Coding Questions",
      "Advanced AI Report card",
      "Topic-wise and platform-wise filter enabled"
    ],
    popular: false,
    bestValue: false
  },
  {
    id: "platinum",
    name: "PLATINUM",
    priceYear: "₹1,999",
    rateDay: "₹6 a day",
    targetLPA: "0–15 LPA",
    targetSub: "Service & Product Interview Questions",
    features: [
      "Daily challenges",
      "MCQ Practice",
      "Coding Questions",
      "Advanced AI Report card",
      "Topic-wise and platform-wise filter enabled",
      "Company-wise filter",
      "Package-wise filter"
    ],
    popular: true,
    popularBadge: "MOST POPULAR",
    bestValue: false
  },
  {
    id: "superdream",
    name: "SUPER DREAM PACK",
    priceYear: "₹2,999",
    rateDay: "₹9 a day",
    targetLPA: "15+ LPA",
    targetSub: "Product & Service Interview Questions",
    features: [
      "Daily challenges",
      "Coding Questions",
      "Topic-wise and platform-wise filter enabled",
      "Package-wise filter",
      "Year-wise, Quarter-wise filter",
      "Early Access to all Exam series & notifications",
      "MCQ Practice",
      "Advanced AI Report card",
      "Company-wise filter",
      "Frequency-wise filter",
      "All Bundles will be unlocked"
    ],
    popular: false,
    bestValue: true,
    bestValueBadge: "BEST VALUE"
  }
];

export const COLLEGE_MOU_PIPELINE = [
  {
    step: "01",
    label: "SELECT A TARGET",
    sub: "Company • Exam • Package",
    description: "Align your batch with verified company syllabi (TCS, Infosys, Cognizant, Product SDE)."
  },
  {
    step: "02",
    label: "PRACTISE",
    sub: "Questions • Coding • Mocks",
    description: "Real platform coding labs with automated test cases, compiler evaluation, and timed MCQ suites."
  },
  {
    step: "03",
    label: "REVIEW",
    sub: "Progress • Scorecards • Next focus",
    description: "Faculty dashboards, student analytics, company readiness indexes, and automated placement insights."
  }
];

export const RECOGNITIONS = [
  { name: "Ministry of MSME", badge: "Government of India" },
  { name: "DPIIT #startupindia", badge: "Recognized Startup" },
  { name: "ISO 9001:2015 CERTIFIED", badge: "Quality Management" },
  { name: "Ministry of Corporate Affairs", badge: "Govt of India" },
  { name: "AICTE Internship Portal", badge: "Partner Platform" },
  { name: "National Career Service", badge: "NCS Portal" },
  { name: "NAPS", badge: "National Apprenticeship" },
  { name: "Skill India", badge: "Skill Development" }
];
