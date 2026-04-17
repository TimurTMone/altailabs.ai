"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient mesh background */}
      <div className="gradient-mesh" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono font-medium tracking-wider uppercase text-accent-cyan bg-accent-cyan-glow border border-accent-cyan/20 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            Altai Labs — AI Software Factory
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          We don&apos;t take projects.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-[#8b5cf6]">
            We build companies.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          An independent AI software factory. We research, design, and ship
          AI-native ventures into industries the world&apos;s tech giants
          ignore. 12 products shipped. Zero VC. One thesis: software
          multiplied by AI rewrites every industry — and we&apos;re the
          builders.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium bg-accent-cyan text-black rounded-lg hover:bg-accent-cyan/90 transition-all"
          >
            See Our Ventures
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium border border-border rounded-lg hover:bg-muted transition-all"
          >
            Build With Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 mt-1.5 bg-muted-foreground/50 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
