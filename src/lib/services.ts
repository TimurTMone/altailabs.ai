import { ServiceTier } from "@/types";

export const services: ServiceTier[] = [
  {
    name: "Co-Found With Us",
    price: "Equity",
    period: "long-term",
    description:
      "You have deep industry expertise and market access. We have the engineering team and AI thesis. Together we build a venture — you own the domain, we own the code, everyone owns the outcome.",
    features: [
      "You bring: industry knowledge, distribution, network",
      "We bring: full engineering team, AI systems, product",
      "Shared equity in a new AI-native company",
      "From zero to production in 8 weeks",
      "Ongoing R&D partnership",
    ],
    cta: "Propose a Venture",
    highlight: false,
  },
  {
    name: "Commission a Venture",
    price: "Project-based",
    period: "6–16 weeks",
    description:
      "You're a founder, operator, or enterprise who sees an AI opportunity in your industry. We design, engineer, and ship the product end-to-end. You own it. We move on to the next frontier.",
    features: [
      "Full product vision to production deployment",
      "Multi-platform: Web + iOS + Android",
      "Proprietary AI agents, not GPT wrappers",
      "Admin dashboards + analytics + CI/CD",
      "Source code transfer + IP ownership",
      "Ongoing technical advisory",
    ],
    cta: "Start a Venture",
    highlight: true,
    badge: "Most Common",
  },
  {
    name: "Invest in the Lab",
    price: "For LPs & Funds",
    period: "invite-only",
    description:
      "We are building a portfolio of AI-native ventures across underserved industries. For funds and strategic partners interested in backing a builder-led lab with a thesis-driven deal flow — let's talk.",
    features: [
      "Access to a portfolio of 12+ active ventures",
      "Builder-led, not capital-led",
      "Vertical AI focus, emerging markets",
      "Follow-on opportunities in breakout ventures",
      "Quarterly venture updates",
    ],
    cta: "Request Deck",
    highlight: false,
  },
];
