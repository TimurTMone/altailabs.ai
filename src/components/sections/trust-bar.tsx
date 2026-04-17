"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TECH_STACK } from "@/lib/constants";

export function TrustBar() {
  return (
    <section className="border-y border-border py-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Tech stack */}
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Built with
              </span>
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono text-muted-foreground border border-border rounded-md hover:text-foreground hover:border-accent-cyan/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 text-sm">
              <span className="text-muted-foreground">
                <strong className="text-foreground">12</strong> ventures
              </span>
              <span className="text-border">|</span>
              <span className="text-muted-foreground">
                <strong className="text-foreground">7</strong> industries
              </span>
              <span className="text-border">|</span>
              <span className="text-muted-foreground">
                <strong className="text-foreground">0</strong> VC dollars
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
