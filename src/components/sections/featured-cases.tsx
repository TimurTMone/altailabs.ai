"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { getFeaturedProjects } from "@/lib/projects";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export function FeaturedCases() {
  const featured = getFeaturedProjects();

  return (
    <section id="work" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            badge="Our Ventures"
            title="What We&apos;ve Built"
            subtitle="Not client work. Not case studies. Ventures we designed, built, and shipped. Each one is a working thesis about an industry waiting to be rebuilt."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <ScrollReveal
              key={project.slug}
              delay={i * 0.1}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <Link href={`/cases/${project.slug}`}>
                <div className="group glow-card overflow-hidden">
                  {/* Color accent bar */}
                  <div
                    className="h-1 w-full"
                    style={{ background: project.color }}
                  />

                  <div className="p-8">
                    {/* Top row */}
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                          {project.category}
                        </span>
                        <h3 className="mt-2 text-2xl font-bold group-hover:text-accent-cyan transition-colors">
                          <span className="mr-3">{project.icon}</span>
                          {project.title}
                        </h3>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </div>

                    {/* Tagline */}
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Metrics */}
                    <div className="mt-6 flex flex-wrap gap-6">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <div
                            className="text-xl font-bold font-mono"
                            style={{ color: project.color }}
                          >
                            {m.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.slice(0, 5).map((tech) => (
                        <TechBadge key={tech}>{tech}</TechBadge>
                      ))}
                      {project.surfaces.length > 0 && (
                        <TechBadge className="text-accent-amber border-accent-amber/20 bg-accent-amber-glow">
                          {project.surfaces.length} surfaces
                        </TechBadge>
                      )}
                    </div>

                    {/* Client & Location */}
                    {project.client && (
                      <div className="mt-4 text-xs text-muted-foreground">
                        {project.client} &middot; {project.location}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View all link */}
        <ScrollReveal>
          <div className="mt-12 text-center">
            <a
              href="#all-work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              View all 12 ventures
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
