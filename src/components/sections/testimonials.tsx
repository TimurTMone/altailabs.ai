"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Zap, Target, Rocket, GitCommit, Brain, Eye } from "lucide-react";

const principles = [
  {
    icon: Zap,
    title: "Speed is the moat.",
    body:
      "We ship in weeks what consulting firms quote in quarters. In the age of AI, speed to deployment compounds into market dominance. We don&apos;t optimize for perfect — we optimize for shipped.",
  },
  {
    icon: Target,
    title: "Underserved beats oversaturated.",
    body:
      "Every Altai Labs venture targets an industry that Silicon Valley overlooks. Less competition. Higher intent. Customers starving for the product we build.",
  },
  {
    icon: Brain,
    title: "AI is a substrate, not a feature.",
    body:
      "We don&apos;t bolt AI onto CRUD apps. Every venture is designed around AI from the first line of code. Different math. Different product. Different moat.",
  },
  {
    icon: Rocket,
    title: "Revenue over rounds.",
    body:
      "Zero VC dollars taken. Every venture must justify itself through traction or cashflow. This forces discipline. It also forces honesty about which products deserve to exist.",
  },
  {
    icon: GitCommit,
    title: "Built, not assembled.",
    body:
      "We engineer from fundamentals — custom architectures, proprietary agents, real integrations. No drag-and-drop. No white-labels. No shortcuts that compromise product quality.",
  },
  {
    icon: Eye,
    title: "The lab stays small on purpose.",
    body:
      "A handful of generals of full-stack engineering beats a hundred specialists. We stay small so decisions stay fast, ownership stays deep, and quality stays obsessive.",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            badge="Principles"
            title="How We Think"
            subtitle="These aren&apos;t taglines. They&apos;re operating principles. Every decision — every venture, every hire, every line of code — is measured against them."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.08}>
              <div className="glow-card p-8 h-full">
                <div className="w-11 h-11 rounded-xl bg-accent-cyan-glow border border-accent-cyan/20 flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-accent-cyan" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                <p
                  className="mt-3 text-sm leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
