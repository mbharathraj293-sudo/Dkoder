export const SKILLS_DATA = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    category: "AI & ML",
    difficulty: "Intermediate",
    difficultyLevel: 2,
    duration: "6 weeks",
    projectsCount: 4,
    description: "Master modern transformers, diffusion models, PyTorch foundations, and autonomous agent frameworks.",
    tags: ["PyTorch", "Hugging Face", "LangChain", "Vector DBs"],
    highlights: ["Build an Autonomous Research Agent", "Fine-tune an Open LLM", "Deploy on Modal/AWS", "Vision Transformer Pipeline"],
    icon: "BrainCircuit",
    accentColor: "#7E22CE"
  },
  {
    id: "web-dev",
    title: "Modern Web & Cloud Systems",
    category: "Web Development",
    difficulty: "Beginner–Adv",
    difficultyLevel: 1,
    duration: "8 weeks",
    projectsCount: 6,
    description: "Engineer production-ready distributed web applications with Next.js, real-time WebSockets, and edge runtimes.",
    tags: ["React 19", "Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    highlights: ["Real-time Collaborative Canvas", "Multi-tenant SaaS Architecture", "Edge Authentication Engine", "Global CDN Streaming"],
    icon: "LayoutGrid",
    accentColor: "#9333EA"
  },
  {
    id: "data-science",
    title: "Data Science & Predictive AI",
    category: "Data Science",
    difficulty: "Intermediate",
    difficultyLevel: 2,
    duration: "7 weeks",
    projectsCount: 5,
    description: "Harness complex datasets, engineer high-dimensional features, and construct production predictive pipelines.",
    tags: ["Pandas", "Scikit-Learn", "Apache Spark", "XGBoost"],
    highlights: ["Real-time Market Anomaly Detector", "High-frequency Time-series Forecasting", "Customer Intelligence Graph", "Automated EDA Toolkit"],
    icon: "BarChart3",
    accentColor: "#6B21A8"
  },
  {
    id: "iot-robotics",
    title: "IoT & Embedded Edge Systems",
    category: "IoT",
    difficulty: "Beginner",
    difficultyLevel: 1,
    duration: "5 weeks",
    projectsCount: 3,
    description: "Connect physical hardware to the cloud with microcontrollers, MQTT streaming, and on-device tinyML models.",
    tags: ["ESP32", "TinyML", "MQTT", "C++", "Sensors"],
    highlights: ["Smart Campus Environmental Mesh", "On-Device Acoustic Anomaly Sentry", "Low-power BLE Tracking Beacon"],
    icon: "Cpu",
    accentColor: "#7E22CE"
  },
  {
    id: "cyber-security",
    title: "Cyber Security & Threat Defense",
    category: "Cyber Security",
    difficulty: "Advanced",
    difficultyLevel: 3,
    duration: "8 weeks",
    projectsCount: 4,
    description: "Unravel attack vectors, conduct penetration testing, build blue-team defenses, and conquer CTF challenges.",
    tags: ["Wireshark", "Burp Suite", "CTF Ops", "Reverse Eng", "SIEM"],
    highlights: ["Automated Zero-Day Vulnerability Scanner", "Secure Multi-Party Cryptographic Vault", "Enterprise Honeynet Architecture"],
    icon: "ShieldAlert",
    accentColor: "#9333EA"
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    category: "Cloud & DevOps",
    difficulty: "Intermediate",
    difficultyLevel: 2,
    duration: "6 weeks",
    projectsCount: 4,
    description: "Automate containerized deployments, manage Kubernetes clusters, and orchestrate zero-downtime CI/CD pipelines.",
    tags: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "AWS"],
    highlights: ["Self-healing Kubernetes Microservices", "Multi-region Infrastructure as Code", "Continuous Delivery Observability Suite"],
    icon: "CloudCog",
    accentColor: "#581C87"
  }
];

export const HACKATHONS_DATA = [
  {
    id: "ai-for-good-2026",
    title: "AI FOR GOOD HACKATHON",
    category: "AI",
    mode: "ONLINE",
    prize: "₹1,50,000",
    status: "REGISTRATIONS OPEN",
    daysLeft: 12,
    dates: "Nov 14 - Nov 16, 2026",
    host: "Apex Tech Consortium & IIT Madras",
    description: "Develop generative AI and computer vision solutions tackling healthcare accessibility, climate resilience, and assistive tech.",
    tracks: ["Healthcare Diagnostics", "Climate & AgriTech", "Assistive Intelligence"],
    participantsCount: "1,420+",
    featured: true
  },
  {
    id: "web3-beyond-2026",
    title: "DEVSPHERE FULLSTACK BEYOND",
    category: "Web",
    mode: "HYBRID • Bengaluru",
    prize: "₹2,00,000",
    status: "CLOSING SOON",
    daysLeft: 4,
    dates: "Nov 02 - Nov 04, 2026",
    host: "Global Dev Guild & PES University",
    description: "Push modern web boundaries with collaborative real-time architectures, edge computing, and decentralized storage.",
    tracks: ["Real-time Collaboration", "Edge AI Applications", "High-throughput APIs"],
    participantsCount: "2,180+",
    featured: true
  },
  {
    id: "smart-campus-iot",
    title: "SMART CAMPUS IoT LEAGUE",
    category: "IoT",
    mode: "OFFLINE • Hyderabad",
    prize: "₹75,000",
    status: "REGISTRATIONS OPEN",
    daysLeft: 18,
    dates: "Nov 20 - Nov 22, 2026",
    host: "IIIT Hyderabad Maker Lab",
    description: "Deploy physical sensor meshes, intelligent energy grid optimizers, and automated lab safety monitoring stations.",
    tracks: ["Autonomous Campus Mobility", "Energy Harvesting", "Smart Sensor Meshes"],
    participantsCount: "890+",
    featured: false
  },
  {
    id: "cyber-ctf-league",
    title: "NATIONAL CYBERDEFENSE CTF",
    category: "Cyber",
    mode: "ONLINE",
    prize: "₹1,00,000",
    status: "REGISTRATIONS OPEN",
    daysLeft: 9,
    dates: "Nov 10 - Nov 11, 2026",
    host: "CyberTrust Foundation & BITS Pilani",
    description: "48-hour competitive capture-the-flag tournament testing cryptography, web exploits, binary analysis, and forensic triage.",
    tracks: ["Web Application Exploits", "Binary Exploitation", "Network Forensics"],
    participantsCount: "1,650+",
    featured: false
  },
  {
    id: "national-youth-innovation",
    title: "NEXTGEN STUDENT INNOVATION CUP",
    category: "Open Innovation",
    mode: "ONLINE",
    prize: "₹3,00,000",
    status: "EARLY BIRD",
    daysLeft: 24,
    dates: "Dec 01 - Dec 05, 2026",
    host: "National Youth Tech Council & DTU",
    description: "Flagship cross-disciplinary challenge inviting students to solve urgent national infrastructure, education, and fin-tech hurdles.",
    tracks: ["Fintech Inclusion", "GovTech Digital Rails", "EdTech Personalization"],
    participantsCount: "3,200+",
    featured: true
  },
  {
    id: "agentic-ai-sprint",
    title: "AGENTIC AI BUILDATHON",
    category: "AI",
    mode: "ONLINE",
    prize: "₹1,20,000",
    status: "REGISTRATIONS OPEN",
    daysLeft: 7,
    dates: "Nov 06 - Nov 08, 2026",
    host: "VectorLabs & IIT Bombay WnCC",
    description: "Build autonomous multi-agent swarms capable of complex reasoning, web automation, coding workflows, and tool execution.",
    tracks: ["Autonomous Dev Tools", "Enterprise Workflow Agents", "Multimodal Reasoning"],
    participantsCount: "1,140+",
    featured: false
  }
];

export const COLLEGES_DATA = [
  {
    id: "iit-bombay",
    name: "Indian Institute of Technology, Bombay",
    shortName: "IIT Bombay",
    city: "Mumbai, Maharashtra",
    activeChallenges: 14,
    upcomingEvents: 6,
    studentCommunity: "4,200+",
    leadClub: "Web & Coding Club (WnCC)",
    tier: "Tier-1 Hub",
    badge: "Top Active Campus",
    popularTracks: ["Autonomous AI", "Quantum Computing", "Deep Tech Sprints"],
    gradient: "from-purple-900 via-indigo-900 to-purple-950"
  },
  {
    id: "bits-pilani",
    name: "Birla Institute of Technology and Science",
    shortName: "BITS Pilani",
    city: "Pilani, Rajasthan",
    activeChallenges: 9,
    upcomingEvents: 4,
    studentCommunity: "3,100+",
    leadClub: "ACM Student Chapter",
    tier: "Innovation Hub",
    badge: "Premier Partner",
    popularTracks: ["Algorithmic Trading", "Distributed Systems", "Robotics"],
    gradient: "from-purple-950 via-purple-900 to-indigo-950"
  },
  {
    id: "dtu-delhi",
    name: "Delhi Technological University",
    shortName: "DTU Delhi",
    city: "New Delhi, Delhi",
    activeChallenges: 11,
    upcomingEvents: 5,
    studentCommunity: "3,800+",
    leadClub: "IEEE DTU Student Branch",
    tier: "Regional Center",
    badge: "High Growth",
    popularTracks: ["Fullstack Web", "Open Source Sprints", "IoT Prototyping"],
    gradient: "from-indigo-950 via-purple-900 to-slate-900"
  },
  {
    id: "nit-surathkal",
    name: "National Institute of Technology, Karnataka",
    shortName: "NIT Surathkal",
    city: "Mangaluru, Karnataka",
    activeChallenges: 8,
    upcomingEvents: 3,
    studentCommunity: "2,700+",
    leadClub: "HackSlash & E-Cell",
    tier: "Innovation Hub",
    badge: "Rising Talent",
    popularTracks: ["Cloud Native DevOps", "Cyber Defense", "Smart Mobility"],
    gradient: "from-purple-900 via-slate-900 to-purple-950"
  }
];

export const JOURNEY_STEPS = [
  {
    step: "01",
    phase: "DISCOVER",
    headline: "Uncover Tailored Trajectories",
    shortDesc: "Stop browsing random forums. Discover high-signal hackathons, trending tech tracks, and active campus challenges aligned with your baseline.",
    details: "Our discovery engine aggregates verified hackathons, inter-college challenges, and industry fellowship deadlines into a personalized opportunity feed.",
    statLabel: "Live Opportunities Tracked",
    statValue: "1,200+",
    color: "#7E22CE",
    accent: "#FACC15",
    icon: "Compass"
  },
  {
    step: "02",
    phase: "LEARN",
    headline: "Build Production Competencies",
    shortDesc: "No endless generic video lectures. Dive straight into project-driven modular tracks curated around real competition requirements.",
    details: "Learn the exact stacks used in winning submissions: PyTorch transformer setups, Next.js 19 edge caching, Docker orchestration, and micro-APIs.",
    statLabel: "Curated Learning Sprints",
    statValue: "300+",
    color: "#9333EA",
    accent: "#FACC15",
    icon: "BookOpen"
  },
  {
    step: "03",
    phase: "BUILD",
    headline: "Ship Tangible Flagship Projects",
    shortDesc: "Translate newfound knowledge into deployed, tested, and starred GitHub repositories that prove your engineering craft.",
    details: "Every sprint guides you through architecture design, Git hygiene, API documentation, and live hosting on Vercel, Modal, or AWS.",
    statLabel: "Student Repositories Shipped",
    statValue: "18,400+",
    color: "#6B21A8",
    accent: "#FFE500",
    icon: "Code2"
  },
  {
    step: "04",
    phase: "COMPETE",
    headline: "Enter National Arenas & Sprints",
    shortDesc: "Form cross-campus squads, enter 48-hour hackathons, and pitch your prototypes to industry judges and venture evaluators.",
    details: "Direct one-click team matching, team sync rooms, automated submission verification, and real-time mentor office hours during sprint weekends.",
    statLabel: "Active Hackathon Squads",
    statValue: "4,600+",
    color: "#7E22CE",
    accent: "#FACC15",
    icon: "Trophy"
  },
  {
    step: "05",
    phase: "CONNECT",
    headline: "Plug Into Elite Campus Networks",
    shortDesc: "Bridge the gap between your hostel room and top college tech clubs, student developers, and university incubators.",
    details: "Connect with lead organizers from IIT Bombay, BITS Pilani, DTU, and 500+ campus societies looking for driven collaborators.",
    statLabel: "Verified Campus Chapters",
    statValue: "500+",
    color: "#9333EA",
    accent: "#FFE500",
    icon: "Users"
  },
  {
    step: "06",
    phase: "GROW",
    headline: "Unlock Fast-Track Careers",
    shortDesc: "Convert competition podium finishes and shipped repositories into high-impact internships, pre-seed grants, and research fellowships.",
    details: "Your public DKODER OS Proof-of-Skill portfolio bypasses traditional resume filters, placing you directly in front of engineering founders.",
    statLabel: "Prizes & Grants Distributed",
    statValue: "₹2.4 Cr+",
    color: "#581C87",
    accent: "#FACC15",
    icon: "TrendingUp"
  }
];

export const SUCCESS_STORIES = [
  {
    id: "story-1",
    studentName: "Arjun Sharma",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    role: "2nd Year CSE • IIT Bombay Chapter",
    focus: "Autonomous AI & Transformers",
    outcomeSummary: "Won ₹1.5L Prize & Secured Summer AI Research Fellowship",
    pathway: [
      { step: "DISCOVERED", label: "National AI for Good Hackathon via Campus Feed" },
      { step: "BUILT", label: "Autonomous Medical Image Diagnostics Agent using PyTorch" },
      { step: "COMPETED", label: "1st Place Grand Winner among 420 national teams" },
      { step: "CONNECTED", label: "Directly recruited as Research Fellow by Frontier AI Labs" }
    ],
    quote: "DKODER OS took away the friction of wondering what to build next. The path connected my theoretical interest directly into a winning prototype."
  },
  {
    id: "story-2",
    studentName: "Sneha Patel",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    role: "3rd Year IT • BITS Pilani Chapter",
    focus: "Modern Fullstack & Distributed Systems",
    outcomeSummary: "Pre-placement Offer as Fullstack Engineer at VC-backed Scaleup",
    pathway: [
      { step: "DISCOVERED", label: "Fullstack Beyond Architecture Sprint" },
      { step: "BUILT", label: "Distributed Real-time Whiteboard with CRDTs and WebSockets" },
      { step: "COMPETED", label: "Top 3 Finalist at DevSphere Hackathon 2025" },
      { step: "CONNECTED", label: "Founder reached out on campus demo day with an SDE role" }
    ],
    quote: "Building practical projects aligned with real hackathon standards transformed my resume from zero GitHub commits to three flagship deployed apps."
  },
  {
    id: "story-3",
    studentName: "Rohan Verma",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    role: "Final Year ECE • DTU Delhi Chapter",
    focus: "IoT Edge & AgriTech Automation",
    outcomeSummary: "Secured ₹5 Lakh Pre-Seed Grant & Incubator Acceptance",
    pathway: [
      { step: "DISCOVERED", label: "Smart Campus IoT Sprint Challenge" },
      { step: "BUILT", label: "Solar-Powered Mesh Soil Sentry running TinyML on ESP32" },
      { step: "COMPETED", label: "Runners-Up in Hardware Innovation Category" },
      { step: "CONNECTED", label: "Accepted into University Incubator with ₹5L proof-of-concept capital" }
    ],
    quote: "The ecosystem connected our campus hardware lab to real industry problems. We went from tinkering in the dorm to pitching to venture partners."
  }
];

export const MATCH_CONFIGS = {
  // Interest: AI
  "AI": {
    "Beginner": {
      "Learn": {
        title: "AI Foundations to Practical ML",
        time: "4 Weeks",
        step1: "Master Python for AI, NumPy & PyTorch fundamentals",
        step2: "Build a Sentiment Analysis & Image Classifier micro-service",
        step3: "Submit project to National AI Novice Sprint",
        step4: "Join Campus AI Discord Study Group & weekly mentor hours",
        matchScore: "96%",
        outcome: "Confidently build and evaluate basic neural network pipelines."
      },
      "Build": {
        title: "Generative AI Prototype Fast-Track",
        time: "5 Weeks",
        step1: "Learn OpenAI APIs, LangChain, & Vector DB Embeddings",
        step2: "Build an Intelligent PDF Research Co-pilot with streaming chat",
        step3: "Showcase prototype in Open Innovation Showcase",
        step4: "Share repository on DKODER Student Showcase for peer review",
        matchScore: "98%",
        outcome: "A deployed, production-grade GenAI portfolio application."
      },
      "Compete": {
        title: "Hackathon Ready AI Kickstart",
        time: "3 Weeks",
        step1: "Speed-run FastAPI, Gradio UI, and pre-trained HuggingFace models",
        step2: "Build a computer-vision powered accessibility prototype",
        step3: "Register for the AI For Good Hackathon (Novice Track)",
        step4: "Match with a front-end developer on the DKODER Squad Finder",
        matchScore: "95%",
        outcome: "First hackathon submission submitted with working live demo."
      },
      "Get Opportunities": {
        title: "Junior AI Engineering Pipeline",
        time: "6 Weeks",
        step1: "Study End-to-End MLOps, Model Serving & Dockerization",
        step2: "Deploy an automated tabular prediction API with monitoring",
        step3: "Enter university Kaggle / campus challenge",
        step4: "Unlock verified Proof-of-Skill badge for early internship referrals",
        matchScore: "97%",
        outcome: "Stand out in entry-level AI internship screening pipelines."
      }
    },
    "Intermediate": {
      "Learn": {
        title: "Deep Learning & Transformer Architecture",
        time: "6 Weeks",
        step1: "Implement Attention Mechanisms & LoRA fine-tuning from scratch",
        step2: "Fine-tune a lightweight 7B model for domain-specific coding",
        step3: "Participate in Open LLM Benchmarking Challenge",
        step4: "Publish technical write-up to the DKODER Developer Journal",
        matchScore: "99%",
        outcome: "Advanced understanding of model architectures and fine-tuning."
      },
      "Build": {
        title: "Multi-Agent System & Reasoning Engine",
        time: "5 Weeks",
        step1: "Architect agent tool-calling loops with state persistence",
        step2: "Build an Autonomous Code Review & Refactoring Bot",
        step3: "Demonstrate live agent in the Agentic AI Buildathon",
        step4: "Connect with tech leads from partner AI venture studios",
        matchScore: "98%",
        outcome: "Flagship resume project demonstrating modern autonomous agent tech."
      },
      "Compete": {
        title: "Podium-Track AI Hackathon Sprint",
        time: "4 Weeks",
        step1: "Refine rapid-prototyping toolkits (Next.js + FastEmbed + Modal)",
        step2: "Create a Multimodal Real-time Audio/Video Assistant",
        step3: "Compete in AI FOR GOOD 2026 (Prize: ₹1,50,000)",
        step4: "Direct demo session with hackathon sponsor engineering leads",
        matchScore: "99%",
        outcome: "Strong candidate for national finalist and prize placement."
      },
      "Get Opportunities": {
        title: "Applied AI Specialist Track",
        time: "6 Weeks",
        step1: "Deploy low-latency RAG systems with rerankers & hybrid search",
        step2: "Build an Enterprise Knowledge Intelligence Graph",
        step3: "Compete in the National Youth Tech Innovation Cup",
        step4: "Fast-track interview referral with top partner AI startups",
        matchScore: "98%",
        outcome: "Direct pipeline into high-growth AI engineering internships."
      }
    },
    "Advanced": {
      "Learn": {
        title: "Distributed Training & LLM Systems",
        time: "8 Weeks",
        step1: "Master DeepSpeed, vLLM inference engine, and CUDA basics",
        step2: "Train a custom domain model across multi-GPU cloud nodes",
        step3: "Benchmark inference latency against commercial APIs",
        step4: "Co-author a research note with campus university lab",
        matchScore: "97%",
        outcome: "Cutting-edge skills in distributed model training and serving."
      },
      "Build": {
        title: "Autonomous Developer Assistant Engine",
        time: "6 Weeks",
        step1: "Design tree-of-thought planning and self-correction mechanics",
        step2: "Ship a full-fledged CLI agent that debugs and tests codebases",
        step3: "Submit to Global Open Source Innovation Sprint",
        step4: "Pitch project to angel syndicate & university venture partners",
        matchScore: "99%",
        outcome: "High-visibility open-source tool with potential for pre-seed funding."
      },
      "Compete": {
        title: "Championship AI Hackathon Squad",
        time: "3 Weeks",
        step1: "Form cross-campus dream team with UI specialist & domain expert",
        step2: "Pre-build high-fidelity design system and scalable backends",
        step3: "Compete in National Youth Tech Council ₹3,00,000 Cup",
        step4: "Host post-hackathon keynote at campus partner summits",
        matchScore: "100%",
        outcome: "National podium finish and extensive industry visibility."
      },
      "Get Opportunities": {
        title: "Founding Engineer & Fellow Trajectory",
        time: "6 Weeks",
        step1: "Package portfolio into production metrics and benchmark stats",
        step2: "Publish benchmark reports and open-source models",
        step3: "Participate in private invite-only VC hackathon demo day",
        step4: "Interview for founding engineer or US/India frontier fellow roles",
        matchScore: "99%",
        outcome: "Elite placement, fellowship offers, or incubator admission."
      }
    }
  },

  // Default fallback generator for Web, Data, IoT, Cyber
  "Web": {
    "default": {
      title: "Modern Fullstack & Distributed Edge Web",
      time: "5 Weeks",
      step1: "Master Next.js 19, TypeScript, Server Actions & Tailwind",
      step2: "Build a Collaborative Real-time Multiplayer Workspace",
      step3: "Compete in DevSphere Fullstack Beyond (Prize: ₹2,00,000)",
      step4: "Network with senior engineers and campus club leads",
      matchScore: "97%",
      outcome: "Production portfolio piece with real-time WebSockets and edge auth."
    }
  },
  "Data": {
    "default": {
      title: "Predictive Analytics & High-Throughput Data Systems",
      time: "6 Weeks",
      step1: "Deep dive into feature engineering, XGBoost & Apache Spark",
      step2: "Build a Real-time Financial Anomaly & Fraud Detection Engine",
      step3: "Compete in Campus Predictive Challenge & Open Datathon",
      step4: "Connect with quantitative and data intelligence mentors",
      matchScore: "96%",
      outcome: "Verified statistical modeling skills with high-throughput API endpoints."
    }
  },
  "IoT": {
    "default": {
      title: "Edge Microcontrollers & Smart Sensor Networks",
      time: "5 Weeks",
      step1: "Program ESP32 / Arduino with MQTT, Bluetooth Low Energy & C++",
      step2: "Build a Solar-Powered Campus Environmental Mesh Sentry",
      step3: "Compete in Smart Campus IoT League at IIIT Hyderabad",
      step4: "Access hardware maker spaces and university innovation grants",
      matchScore: "95%",
      outcome: "Functional hardware-software prototype with live telemetry cloud dashboard."
    }
  },
  "Cyber": {
    "default": {
      title: "Offensive Security & Cloud Defense Operations",
      time: "6 Weeks",
      step1: "Master web application security, OWASP Top 10, & CTF tools",
      step2: "Construct an Automated Zero-Day Vulnerability Scanning Engine",
      step3: "Compete in the National CyberDefense CTF (Prize: ₹1,00,000)",
      step4: "Join elite student security circles and bug bounty networks",
      matchScore: "98%",
      outcome: "Validated CTF ranking and deep blue/red team engineering pedigree."
    }
  }
};
