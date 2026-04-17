"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TechBadge } from "@/components/ui/tech-badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Project } from "@/types";

interface CaseStudyPageProps {
  project: Project;
  prev: Project | null;
  next: Project | null;
}

export function CaseStudyPage({ project, prev, next }: CaseStudyPageProps) {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(ellipse at center, ${project.color}40, transparent 70%)`,
            }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all work
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{project.icon}</span>
                <span
                  className="px-3 py-1 text-xs font-mono rounded-full border"
                  style={{
                    color: project.color,
                    borderColor: `${project.color}30`,
                    background: `${project.color}10`,
                  }}
                >
                  {project.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {project.title}
              </h1>

              <p className="mt-4 text-xl text-muted-foreground max-w-3xl leading-relaxed">
                {project.tagline}
              </p>

              {/* Meta bar */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
                {project.client && (
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider mb-1">
                      Client
                    </span>
                    <span className="text-foreground">{project.client}</span>
                  </div>
                )}
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider mb-1">
                    Year
                  </span>
                  <span className="text-foreground">{project.year}</span>
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider mb-1">
                    Location
                  </span>
                  <span className="text-foreground">{project.location}</span>
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider mb-1">
                    Surfaces
                  </span>
                  <span className="text-foreground">
                    {project.surfaces.join(", ")}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Metrics */}
        <ScrollReveal>
          <section className="border-y border-border py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-3 gap-8">
                {project.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div
                      className="text-3xl md:text-4xl font-bold font-mono"
                      style={{ color: project.color }}
                    >
                      {m.value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          {/* Description */}
          <ScrollReveal>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </ScrollReveal>

          {/* Challenge */}
          <ScrollReveal>
            <div className="mt-16">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span
                  className="w-1 h-8 rounded-full"
                  style={{ background: project.color }}
                />
                The Challenge
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </ScrollReveal>

          {/* Solution */}
          <ScrollReveal>
            <div className="mt-16">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span
                  className="w-1 h-8 rounded-full"
                  style={{ background: project.color }}
                />
                The Solution
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </ScrollReveal>

          {/* Results */}
          <ScrollReveal>
            <div className="mt-16">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span
                  className="w-1 h-8 rounded-full"
                  style={{ background: project.color }}
                />
                The Results
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {project.results}
              </p>
            </div>
          </ScrollReveal>

          {/* Tech Stack */}
          <ScrollReveal>
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <TechBadge key={t}>{t}</TechBadge>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Live URL */}
          {project.liveUrl && (
            <ScrollReveal>
              <div className="mt-8">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent-cyan hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  View live project
                </a>
              </div>
            </ScrollReveal>
          )}

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-20 p-8 glow-card text-center">
              <h3 className="text-xl font-bold">
                Have a similar project in mind?
              </h3>
              <p className="mt-2 text-muted-foreground">
                We build AI-powered products for businesses ready to
                digitize their operations.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 text-sm font-medium bg-accent-cyan text-black rounded-lg hover:bg-accent-cyan/90 transition-colors"
              >
                Let&apos;s Talk
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>

          {/* Prev/Next */}
          <div className="mt-16 pt-8 border-t border-border grid grid-cols-2 gap-6">
            {prev ? (
              <Link
                href={`/cases/${prev.slug}`}
                className="group flex flex-col items-start"
              >
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <ArrowLeft className="w-3 h-3" /> Previous
                </span>
                <span className="mt-1 text-sm font-medium group-hover:text-accent-cyan transition-colors">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/cases/${next.slug}`}
                className="group flex flex-col items-end text-right"
              >
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  Next <ArrowRight className="w-3 h-3" />
                </span>
                <span className="mt-1 text-sm font-medium group-hover:text-accent-cyan transition-colors">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
