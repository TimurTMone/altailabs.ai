"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Camera, Mic, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const demos = [
  {
    icon: Camera,
    title: "Photo → Livestock Valuation",
    project: "MalSat.AI",
    input: "Farmer photographs a horse",
    processing: "Claude Vision API",
    output: "Breed, weight, age, market price",
    color: "#f59e0b",
    description:
      "A farmer takes a photo of their horse at a village bazaar. In 3 seconds, the AI identifies the breed (Kyrgyz Native), estimates weight (380kg), age (4-5 years), and suggests a market price range (120,000–150,000 KGS) based on regional data.",
  },
  {
    icon: Mic,
    title: "Voice → Construction Estimate",
    project: "Ai-Smeta",
    input: "Foreman sends Telegram voice note",
    processing: "Whisper + Claude Agent",
    output: "Formatted smeta with line items",
    color: "#eab308",
    description:
      "A construction foreman sends a 40-second voice note in mixed Kyrgyz/Russian: 'Нам надо 200 квадрат штукатурки жана 50 метр трубы...' The AI transcribes, extracts materials, looks up the firm's private rates, and returns a formatted cost estimate — all in Telegram.",
  },
  {
    icon: FileText,
    title: "Click → Real Estate Contract",
    project: "Yurtah.AI",
    input: "Developer selects apartment unit",
    processing: "Claude API + Legal Templates",
    output: "Complete sales agreement",
    color: "#8b5cf6",
    description:
      "A developer clicks on unit 4B-12 in the shahmatka grid. Claude generates a complete sales agreement with buyer details, payment schedule, penalties, and legal clauses — formatted for Kyrgyz law, ready for signature. What used to take a lawyer 3 hours happens in 8 seconds.",
  },
];

export function AIShowcase() {
  return (
    <section id="rd" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            badge="R&amp;D in Production"
            title="From Lab to Live"
            subtitle="Not demos. Not chatbots. Not GPT wrappers. Real AI agents researched, engineered, and deployed into production — running inside our ventures right now."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {demos.map((demo, i) => (
            <ScrollReveal key={demo.title} delay={i * 0.15}>
              <div className="glow-card p-8 h-full flex flex-col">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${demo.color}15`,
                    color: demo.color,
                  }}
                >
                  <demo.icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold">{demo.title}</h3>
                <p className="mt-1 text-xs font-mono text-muted-foreground">
                  {demo.project}
                </p>

                {/* Flow */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    <span className="text-muted-foreground">{demo.input}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <motion.span
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: demo.color }}
                    />
                    <span className="font-mono text-xs" style={{ color: demo.color }}>
                      {demo.processing}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0" />
                    <span className="text-foreground font-medium">{demo.output}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-5 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {demo.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
