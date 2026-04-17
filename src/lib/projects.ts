import { Project } from "@/types";

export const projects: Project[] = [
  // === FEATURED (Top 5) ===
  {
    slug: "yurtah-ai",
    title: "Yurtah.AI",
    tagline: "Trust and transaction infrastructure for emerging-market real estate",
    description:
      "The real estate market runs on handshake deals, paper contracts, and zero price transparency. Yurtah.AI is the operating system that construction companies actually use — shahmatka (visual apartment grids), AI-powered pricing, automated contract generation, and Telegram-native buyer flows. Currently processing 800+ residential units across 6 developer projects.",
    category: "Real Estate",
    featured: true,
    year: 2025,
    client: "Multiple Developers",
    location: "Global",
    stack: ["Next.js 16", "React 19", "Firebase", "Claude API", "Telegram Bot API"],
    surfaces: ["Web Dashboard", "Telegram Bot", "Admin Panel"],
    metrics: [
      { label: "Units Managed", value: "828" },
      { label: "Developer Projects", value: "6" },
      { label: "AI Contracts Generated", value: "200+" },
    ],
    challenge:
      "Construction companies sell apartments through brokers, paper ledgers, and endless WhatsApp threads. Buyers have zero price transparency. Developers lose track of which units are sold, reserved, or available. Double-selling happens. Trust is non-existent.",
    solution:
      "We built a shahmatka-first CRM where developers see every unit in a visual grid — color-coded by status. Claude API powers dynamic pricing suggestions based on floor, view, and market comps. AI contract generation turns a unit selection into a legally formatted agreement in seconds. Telegram OTP auth means buyers and brokers never need to download an app.",
    results:
      "6 developer projects onboarded with 828 residential units under management. AI-generated contracts reduced legal review time by 70%. Telegram-native flows mean zero friction for buyers — they book and sign from the same chat app they already use daily.",
    color: "#8b5cf6",
    icon: "🏗️",
  },
  {
    slug: "altaihub",
    title: "AltaiHub.com",
    tagline: "Learn AI by building real products — new drop every week",
    description:
      "An education platform where people learn AI not through tutorials, but by shipping real products. Weekly 'drops' — timed challenges where participants build AI-powered apps with prize pools. Gamification system with 9 builder levels, leaderboards, and study groups. Community-driven with forum, groups, and peer review.",
    category: "Education",
    featured: true,
    year: 2025,
    location: "Remote",
    stack: ["Next.js 16", "React 19", "Stripe", "PostHog", "Resend"],
    surfaces: ["Web", "PWA"],
    metrics: [
      { label: "Builder Levels", value: "9" },
      { label: "Pricing Tiers", value: "3" },
      { label: "Weekly Drops", value: "Active" },
    ],
    challenge:
      "AI education is broken. Courses teach theory. Bootcamps take months. YouTube tutorials don't build accountability. Nobody learns AI by watching — they learn by shipping.",
    solution:
      "We built a platform centered on weekly 'drops' — timed AI building challenges with real prize pools (60/25/15 split). 9-tier gamification system (Freshman → Legend → Boss) tracks builder progression. Community features include forums, study groups, and peer code review. Three pricing tiers with Stripe integration.",
    results:
      "Platform live with active analytics pipeline. Automated database migrations. Community infrastructure supporting forums, groups, and competitive challenges with real monetary incentives.",
    color: "#6366f1",
    icon: "🧪",
  },
  {
    slug: "solo-os",
    title: "Solo OS",
    tagline: "The AI-powered operating system for solopreneurs",
    description:
      "Born from running 10+ products simultaneously. Solo OS is a personal operating system that consolidates work (projects, tasks, calendar), health (habit tracking), finance (income/expense), ideas (max 3 active — forced prioritization), and a daily AI standup powered by Claude Opus. The AI digest reads your entire life context and tells you what to focus on today.",
    category: "SaaS",
    featured: true,
    year: 2025,
    location: "Remote",
    stack: ["Flutter", "Next.js", "Claude Opus API", "PostgreSQL", "Firebase"],
    surfaces: ["iOS", "Android", "Backend API"],
    metrics: [
      { label: "Life Domains", value: "5" },
      { label: "App Store Build", value: "25" },
      { label: "AI Features", value: "6" },
    ],
    challenge:
      "Solopreneurs juggle projects, health, finances, content, and ideas across 15 different apps. Context switching kills productivity. No single tool understands your full life context — so no tool can give you intelligent prioritization.",
    solution:
      "We built a unified mobile OS with 5 integrated domains: Work, Health, Finance, Ideas, and Contacts. Claude Opus powers 6 AI features: Daily Digest (reads all your data and prioritizes your day), Standup Analysis, Idea Validation, Script Writing, Executive Assistant, and Smart Scheduling. The 'max 3 ideas' constraint forces focus — you can't add idea #4 until you ship or kill one.",
    results:
      "Build 25 submitted to App Store. Account deletion and compliance features complete. Daily AI digest provides personalized morning briefings that actually account for your energy levels, deadlines, and financial runway.",
    color: "#10b981",
    icon: "⚡",
  },
  {
    slug: "balam-ai",
    title: "Balam.AI",
    tagline: "Montessori super-app with AI teacher for new parents",
    description:
      "A parenting companion that combines evidence-based Montessori methodology with AI-powered personalization. Covers pregnancy through the first 24 months with milestone tracking, AI teacher consultations, stage-matched community groups, professional network, and curated marketplace. The v1.1 redesign introduced First Moments journaling and an AI teacher that adapts to each child's developmental stage.",
    category: "Parenting",
    featured: true,
    year: 2025,
    location: "Global",
    stack: ["Flutter", "Firebase", "Claude API", "RevenueCat", "Stripe"],
    surfaces: ["iOS", "Android"],
    metrics: [
      { label: "Age Range", value: "0-24mo" },
      { label: "AI Features", value: "Montessori Teacher" },
      { label: "Milestones Tracked", value: "200+" },
    ],
    challenge:
      "New parents are overwhelmed with contradictory advice from family, forums, and outdated medical guidance. Evidence-based parenting resources are fragmented. Montessori education is inaccessible to most families.",
    solution:
      "We built a mobile-first Montessori super-app with Claude-powered AI teacher that provides personalized developmental guidance based on each child's age and milestones. Stage-matched community groups connect parents at the same phase. 'First Moments' journaling captures milestones with photos and developmental context. RevenueCat handles subscription monetization.",
    results:
      "v1.1 Montessori Super App redesign shipped. AI teacher provides contextual Montessori guidance. First Moments feature captures and contextualizes developmental milestones. Community groups auto-match parents by child age.",
    color: "#ec4899",
    icon: "👶",
  },
  {
    slug: "malsat-ai",
    title: "MalSat.AI",
    tagline: "AI-powered livestock and meat marketplace",
    description:
      "The livestock economy is an $800M+ market that runs on roadside bazaars and word-of-mouth. MalSat.AI is the first digital marketplace where farmers photograph their animals and AI extracts breed, weight estimate, age, and suggested price. The meat-first redesign (v1.3) now serves butchers, restaurants, and individual buyers with real-time inventory from verified suppliers.",
    category: "Agriculture",
    featured: true,
    year: 2025,
    location: "Global",
    stack: ["Next.js 16", "Flutter", "Prisma", "PostgreSQL", "Claude Vision API"],
    surfaces: ["iOS", "Android", "Web"],
    metrics: [
      { label: "Livestock Categories", value: "4" },
      { label: "Build Version", value: "1000" },
      { label: "AI Photo Analysis", value: "Real-time" },
    ],
    challenge:
      "Livestock trading is a billion-dollar market with zero digital infrastructure. Farmers can't reach buyers beyond their village. Buyers can't verify animal quality without traveling hours. Pricing is opaque and varies wildly between regions.",
    solution:
      "We built a mobile-first marketplace with Claude Vision API at the core. Farmers take a photo → AI identifies breed, estimates weight, suggests price range, and auto-fills the listing. Dual marketplace model: live animals for farmers/traders and processed meat for restaurants/consumers. Premium listing boosts and featured placements drive monetization.",
    results:
      "TestFlight build 1000 shipped. Meat-first redesign increased engagement with urban buyers. AI photo analysis reduces listing creation from 10 minutes to 30 seconds. Bilingual interface serves both rural farmers and city-based restaurants.",
    color: "#f59e0b",
    icon: "🐎",
  },
  // === OTHER PROJECTS ===
  {
    slug: "app-karven",
    title: "App-Karven",
    tagline: "Vertical resort operating system — 7 surfaces, 5 languages, 1 data model",
    description:
      "A premier lakeside resort needed to unify 7 disconnected operational surfaces — from guest check-in kiosks to kitchen displays — into one intelligent system. We designed and built the entire platform: iOS/Android guest apps, staff operations, admin dashboard, in-room tablets, TV displays, and a WhatsApp/Telegram concierge bot. One data model. One identity graph. One payments layer. Five languages.",
    category: "Hospitality",
    featured: false,
    year: 2025,
    client: "Resort Group",
    location: "Global",
    stack: ["Flutter", "NestJS", "PostgreSQL", "Redis", "Claude API", "Firebase"],
    surfaces: ["iOS", "Android", "Staff App", "Admin Panel", "Kitchen Display", "In-Room Tablet", "Bot"],
    metrics: [
      { label: "Surfaces", value: "7" },
      { label: "Languages", value: "5" },
      { label: "Data Models Unified", value: "1" },
    ],
    challenge:
      "The largest year-round lakeside resort operated on spreadsheets, WhatsApp groups, and disconnected POS terminals. Guests couldn't book amenities digitally. Staff had zero visibility into cross-department operations. Revenue leakage was significant.",
    solution:
      "We architected a monorepo-based vertical OS using Turborepo. Flutter powers all mobile surfaces with shared business logic. NestJS + Prisma handles the unified API. Redis + BullMQ manages real-time kitchen orders and housekeeping queues. Claude API drives the AI concierge that handles guest requests in 5 languages. Every surface — from the guest's phone to the kitchen display — runs off the same event stream.",
    results:
      "Full digital transformation of resort operations. Guest self-service for bookings, dining, spa, and gondola reservations. Staff productivity increased with real-time task queues. Multi-language AI concierge handles 80% of routine guest inquiries without human intervention.",
    color: "#06b6d4",
    icon: "🏔️",
  },
  {
    slug: "ai-ala-archa",
    title: "AiAlaArcha",
    tagline: "AI super-app for a national park — from entry to emergency response",
    description:
      "A national park receiving 200K+ visitors annually managed everything with paper tickets and cash. We built the complete digital infrastructure: QR-based entry passes, accommodation/gondola booking, AI concierge, tour marketplace, trail maps with live conditions, restaurant/sauna reservations, and an SOS emergency system. Three languages. One app.",
    category: "Government",
    featured: false,
    year: 2025,
    location: "Global",
    stack: ["Flutter", "Next.js 15", "Firebase", "Claude API", "Mapbox", "Stripe"],
    surfaces: ["iOS", "Android", "Admin Web", "AI Concierge"],
    metrics: [
      { label: "Annual Visitors", value: "200K+" },
      { label: "Languages", value: "3" },
      { label: "Booking Types", value: "6" },
    ],
    challenge:
      "A flagship national park had zero digital presence. Entry was cash-only with paper tickets. No way to book accommodation, gondola rides, or guides online. Foreign tourists couldn't navigate without a local guide. Emergency response was phone-call-based.",
    solution:
      "We built a multi-platform super-app covering the entire visitor journey: digital entry passes with QR scanning at gates, accommodation booking, gondola reservation system, AI concierge powered by Claude that answers questions about trails/weather/wildlife in 3 languages, marketplace for local tour guides, interactive trail maps with Mapbox, and an SOS button that sends GPS coordinates to park rangers.",
    results:
      "Deployed to TestFlight. Complete digital transformation of park operations from entry to emergency response. AI concierge trained on park-specific knowledge handles visitor inquiries in 3 languages.",
    color: "#22c55e",
    icon: "🏕️",
  },
  {
    slug: "pose-ai-coach",
    title: "PoseAI Coach",
    tagline: "Real-time AI body-tracking fitness coach that runs in your browser",
    description:
      "No gym. No trainer. No app download. PoseAI Coach uses MediaPipe's on-device pose estimation to track your body in real-time through the browser camera. 'Ghost Rep' records your deepest squat and replays it as a transparent overlay so you can match your own best form. Voice coaching via Web Speech API counts reps and corrects form aloud.",
    category: "Fitness",
    featured: false,
    year: 2025,
    location: "Remote",
    stack: ["Next.js 14", "MediaPipe", "Web Speech API", "Capacitor", "Framer Motion"],
    surfaces: ["Web", "iOS", "Android"],
    metrics: [
      { label: "Latency", value: "<50ms" },
      { label: "Processing", value: "On-Device GPU" },
      { label: "Exercises", value: "Squat, Push-up, Lunge" },
    ],
    challenge:
      "Personal trainers are expensive. Fitness apps can't see your form. Gym anxiety is real. People need real-time form correction without leaving home or paying $100/hour for a coach.",
    solution:
      "We built an entirely browser-based AI fitness coach using MediaPipe PoseLandmarker running on device GPU. Zero server costs for inference. 'Ghost Rep' feature records the user's best rep as a transparent overlay — users match their own ideal form on every subsequent rep. Web Speech API provides voice coaching. Capacitor wraps it for App Store/Play Store distribution.",
    results:
      "Ready for App Store and Play Store submission via Capacitor. Sub-50ms pose estimation on modern devices. Ghost Rep feature provides a unique self-coaching mechanism not found in competing apps.",
    color: "#f97316",
    icon: "🏋️",
  },
  {
    slug: "ai-smeta",
    title: "Ai-Smeta",
    tagline: "Voice note → construction estimate in 60 seconds via Telegram",
    description:
      "Construction foremen don't use apps — they use Telegram voice notes. Ai-Smeta meets them where they are: send a voice note describing the job in any language, and the AI agent transcribes it, extracts materials and quantities, applies the firm's private rate memory, and returns a formatted cost estimate for approval — all within Telegram.",
    category: "Construction",
    featured: false,
    year: 2025,
    location: "Global",
    stack: ["FastAPI", "Whisper API", "Claude Sonnet", "PostgreSQL", "Telegram Bot API"],
    surfaces: ["Telegram Bot"],
    metrics: [
      { label: "Input", value: "Voice Note" },
      { label: "Output", value: "Formatted Estimate" },
      { label: "Languages", value: "Multi-language" },
    ],
    challenge:
      "Construction estimation is a manual nightmare. Foremen describe jobs verbally. Office staff translate voice notes into spreadsheets. Rate lookups are done from binders. A single estimate takes hours. Code-switching between languages makes automated transcription unreliable.",
    solution:
      "We built a Telegram bot pipeline: voice note → Whisper API (handles multi-language code-switching) → Claude Sonnet agent extracts materials, quantities, and specifications → queries the firm's private PostgreSQL rate database → generates a formatted estimate with line items, unit costs, and totals → returns it in Telegram for one-tap approval or edit. The rate memory learns from corrections.",
    results:
      "Reduces estimate creation from hours to 60 seconds. Handles mixed-language voice input that defeats standard transcription services. Private rate memory means estimates get more accurate with use. Zero behavior change required — workers keep using Telegram voice notes exactly as before.",
    color: "#eab308",
    icon: "🏠",
  },
  {
    slug: "erkaz",
    title: "ErKaz",
    tagline: "AI casting engine for the film industry",
    description:
      "The film industry is booming but casting is still done through personal networks and spreadsheets. ErKaz digitizes the entire talent pipeline: 5,000+ actor profiles, AI-powered casting (describe a role in natural language → get matched actors), project management with Kanban boards, and a multi-company structure serving 5 production companies under one platform.",
    category: "Entertainment",
    featured: false,
    year: 2025,
    client: "Production Company",
    location: "Global",
    stack: ["Next.js 14", "Flutter", "NLP Engine", "Render"],
    surfaces: ["Web", "iOS", "Android"],
    metrics: [
      { label: "Actor Profiles", value: "5,000+" },
      { label: "Production Companies", value: "5" },
      { label: "Languages", value: "3" },
    ],
    challenge:
      "The film industry relies on personal Rolodexes for casting. Directors describe a role and assistants manually search through headshot folders. No searchable talent database exists. Multi-company production groups can't share talent pools.",
    solution:
      "We built a unified talent platform with AI casting at its core. Directors type a natural language role description → NLP engine matches against 5,000+ tagged actor profiles. Kanban-based project management tracks productions from pre-production to wrap. Multi-company architecture lets 5 production companies share one talent pool with role-based access.",
    results:
      "468 real actors loaded with full profiles. AI casting matches reduce the casting search from weeks to minutes. Unified platform serves 5 production companies with shared talent intelligence.",
    color: "#d946ef",
    icon: "🎬",
  },
  {
    slug: "loyalty-toolor",
    title: "LoyaltyToolor",
    tagline: "Enterprise loyalty and rewards platform for retail chains",
    description:
      "A full-featured loyalty and rewards platform built for enterprise retail. Multi-tiered reward programs, customer segmentation, analytics dashboards, and full localization. Delivered on time, on budget.",
    category: "Enterprise",
    featured: false,
    year: 2025,
    client: "Enterprise Client",
    location: "Global",
    stack: ["Flutter", "Firebase", "Riverpod"],
    surfaces: ["iOS", "Android", "Admin Dashboard"],
    metrics: [
      { label: "Reward Tiers", value: "Multi" },
      { label: "Commits", value: "65" },
      { label: "Status", value: "Delivered" },
    ],
    challenge:
      "The client needed a robust loyalty platform with multi-tiered rewards, customer analytics, and full localization. Off-the-shelf solutions didn't support the required customization or local payment integrations.",
    solution:
      "We designed and built a complete loyalty platform with tiered reward programs, customer segmentation engine, real-time analytics dashboards, and deep localization. Riverpod state management ensures smooth performance across complex reward calculation flows. Firebase backend handles real-time point tracking and reward redemption.",
    results:
      "Delivered on schedule. 65 commits to production. Fully localized with proper date/calendar handling. Ongoing maintenance relationship established.",
    color: "#14b8a6",
    icon: "💎",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
