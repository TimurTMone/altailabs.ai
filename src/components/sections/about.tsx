"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { STATS } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <ScrollReveal>
            <div>
              <span className="inline-block mb-4 px-4 py-1.5 text-xs font-mono font-medium tracking-wider uppercase text-accent-cyan bg-accent-cyan-glow border border-accent-cyan/20 rounded-full">
                Our Thesis
              </span>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Altai Labs is a factory for AI-native companies.
              </h2>

              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We are builders. Founders. Generals of full-stack engineering
                  and AI vibecoding. We do not sell hours. We do not write
                  decks. We ship products — the kind of vertical operating
                  systems that rewrite how entire industries function.
                </p>
                <p>
                  Every Altai Labs venture begins with the same question: where
                  is the largest market still running on spreadsheets,
                  paperwork, and brokered trust? That&apos;s where we move. Real
                  estate. Hospitality. Agriculture. Education. Industries
                  hiding in plain sight from Silicon Valley.
                </p>
                <p>
                  We believe AI is not a feature. It&apos;s a new substrate —
                  cheaper, faster, more intelligent than any layer of software
                  that came before. We use it to collapse ten-person teams into
                  one product. To turn voice notes into contracts. Photos into
                  valuations. Industries into software.
                </p>
                <p className="text-foreground font-medium">
                  We are small on purpose. Fast on purpose. Independent on
                  purpose. We don&apos;t raise rounds — we raise revenue. And
                  we ship.
                </p>
              </div>

              {/* Currently building */}
              <div className="mt-8 flex items-center gap-3 text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-muted-foreground">
                  In the lab right now:{" "}
                  <strong className="text-foreground">3 ventures in active R&amp;D</strong>
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="glow-card p-6 text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold font-mono text-accent-cyan">
                    {stat.value === 0 ? (
                      <span>$0</span>
                    ) : (
                      <>
                        {stat.label === "Revenue Generated" && "$"}
                        <AnimatedCounter
                          value={stat.value}
                          suffix={stat.suffix || ""}
                        />
                      </>
                    )}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
