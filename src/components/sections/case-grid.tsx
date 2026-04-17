"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { projects } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export function CaseGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="all-work" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            badge="Portfolio"
            title="The Full Venture Portfolio"
            subtitle="Twelve AI-native companies built inside the lab. Each one is a bet on an industry ready to be rebuilt."
          />
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "px-4 py-1.5 text-xs font-mono rounded-full border transition-all",
                  active === cat
                    ? "bg-accent-cyan text-black border-accent-cyan"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.05}>
              <Link href={`/cases/${project.slug}`}>
                <div className="group glow-card overflow-hidden h-full">
                  <div
                    className="h-0.5 w-full"
                    style={{ background: project.color }}
                  />
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-2xl">{project.icon}</span>
                        <h3 className="mt-2 text-lg font-bold group-hover:text-accent-cyan transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent-cyan transition-colors shrink-0" />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {project.tagline}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 3).map((t) => (
                        <TechBadge key={t}>{t}</TechBadge>
                      ))}
                    </div>
                    <div className="mt-3 text-xs text-muted-foreground font-mono">
                      {project.category} &middot; {project.year}
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
