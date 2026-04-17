"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Send,
  Mail,
  GitFork,
  Globe,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { SITE } from "@/lib/constants";

const budgetRanges = [
  "Equity partnership",
  "$25K – $80K",
  "$80K – $200K",
  "$200K – $500K",
  "$500K+",
  "Investment inquiry",
];

const projectTypes = [
  "Co-found a venture",
  "Commission a venture",
  "Invest in the lab",
  "Industry partnership",
  "Advisory / speaking",
  "Other",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // Collect form data
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Fallback: open mailto
      window.location.href = `mailto:${SITE.email}?subject=Project Inquiry&body=${encodeURIComponent(
        `Name: ${data.name}\nProject: ${data.projectType}\nBudget: ${data.budget}\n\n${data.message}`
      )}`;
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            badge="Collaborate"
            title="Build With The Lab"
            subtitle="Co-founder, commissioner, or investor — if you see an AI venture worth building, we&apos;re listening. Response within 24 hours."
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <ScrollReveal className="lg:col-span-3">
            {submitted ? (
              <div className="glow-card p-12 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                <h3 className="mt-4 text-xl font-bold">Message Sent</h3>
                <p className="mt-2 text-muted-foreground">
                  We&apos;ll review your project and respond within 24 hours
                  with a concrete plan.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent-cyan/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent-cyan/50 transition-all"
                    />
                  </div>
                </div>

                {/* Project Type & Budget */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Collaboration Type
                    </label>
                    <select
                      name="projectType"
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent-cyan/50 transition-all"
                    >
                      <option value="">Select type...</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Scope
                    </label>
                    <select
                      name="budget"
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent-cyan/50 transition-all"
                    >
                      <option value="">Select range...</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tell us about the venture
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="What industry? What AI thesis? What's the opportunity nobody else sees?"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent-cyan/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium bg-accent-cyan text-black rounded-lg hover:bg-accent-cyan/90 disabled:opacity-50 transition-all"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* Sidebar */}
          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <div className="space-y-6">
              {/* Direct contact */}
              <div className="glow-card p-6">
                <h3 className="font-bold text-sm mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4 text-accent-cyan" />
                    {SITE.email}
                  </a>
                  <a
                    href={SITE.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Send className="w-4 h-4 text-accent-cyan" />
                    @timurmone on Telegram
                  </a>
                  <a
                    href={SITE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <GitFork className="w-4 h-4 text-accent-cyan" />
                    TimurTMone
                  </a>
                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Globe className="w-4 h-4 text-accent-cyan" />
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Response time */}
              <div className="glow-card p-6">
                <h3 className="font-bold text-sm mb-3">What happens next?</h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs flex items-center justify-center font-mono shrink-0 mt-0.5">
                      1
                    </span>
                    We review your message and research your industry
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs flex items-center justify-center font-mono shrink-0 mt-0.5">
                      2
                    </span>
                    Within 24h: tailored plan + timeline in your inbox
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs flex items-center justify-center font-mono shrink-0 mt-0.5">
                      3
                    </span>
                    30-min call to align on scope
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs flex items-center justify-center font-mono shrink-0 mt-0.5">
                      4
                    </span>
                    We start building. You start seeing results.
                  </li>
                </ol>
              </div>

              {/* Availability */}
              <div className="glow-card p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-medium">
                    Taking new ventures
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  2 founder slots open. 3 commissioned builds available for Q2.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
