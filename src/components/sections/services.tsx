"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/services";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="collaborate" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            badge="Collaborate"
            title="Three Ways to Build With Us"
            subtitle="We don't sell hours. We build ventures. Choose the shape of the partnership."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.name} delay={i * 0.1}>
              <div
                className={cn(
                  "glow-card p-8 h-full flex flex-col",
                  service.highlight && "ring-1 ring-accent-cyan/30"
                )}
              >
                {/* Badge */}
                {service.badge && (
                  <span className="self-start mb-4 px-3 py-1 text-xs font-mono font-medium text-accent-cyan bg-accent-cyan-glow border border-accent-cyan/20 rounded-full">
                    {service.badge}
                  </span>
                )}

                {/* Name */}
                <h3 className="text-xl font-bold">{service.name}</h3>

                {/* Price */}
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-bold font-mono text-accent-cyan">
                    {service.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {service.period}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-6 flex-1 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 mt-0.5 text-accent-cyan shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={cn(
                    "group mt-8 flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-lg transition-all",
                    service.highlight
                      ? "bg-accent-cyan text-black hover:bg-accent-cyan/90"
                      : "border border-border hover:bg-muted"
                  )}
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
