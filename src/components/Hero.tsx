"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  };
}

const stats = [
  { value: "50K+", label: "Teams worldwide" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "10×", label: "Faster workflows" },
  { value: "SOC 2", label: "Type II certified" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-3xl" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(0.46 0.22 264) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.46 0.22 264) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <motion.div {...fadeUp(0)}>
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-1.5 text-sm font-medium border border-primary/20 bg-primary/5 text-primary"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Now with Claude-powered intelligence
          </Badge>
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          Build smarter.
          <br />
          <span className="gradient-text">Ship faster.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Nexus AI gives your team the intelligence to automate complex
          workflows, surface insights from your data, and collaborate in real
          time — all in one unified platform.
        </motion.p>

        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button size="lg" className="gap-2 glow px-8 h-12 text-base">
            Start for free
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 px-8 h-12 text-base"
          >
            <PlayCircle className="w-4 h-4" />
            Watch demo
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.4)}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold gradient-text">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Hero visual */}
        <motion.div {...fadeUp(0.5)} className="mt-20 relative">
          <div className="relative mx-auto max-w-5xl rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60 z-10 pointer-events-none" />
            {/* Fake dashboard UI */}
            <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-4">
                <div className="h-5 rounded-md bg-border/50 w-48 mx-auto" />
              </div>
            </div>
            <div className="p-8 grid grid-cols-3 gap-4 min-h-[280px]">
              <div className="col-span-2 space-y-3">
                <div className="h-8 rounded-lg bg-primary/10 w-3/4" />
                <div className="h-4 rounded bg-muted w-full" />
                <div className="h-4 rounded bg-muted w-5/6" />
                <div className="h-4 rounded bg-muted w-4/5" />
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-20 rounded-xl bg-muted border border-border p-3">
                      <div className="h-3 rounded bg-primary/20 w-1/2 mb-2" />
                      <div className="h-6 rounded bg-primary/10 w-3/4" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-full rounded-xl bg-primary/5 border border-primary/20 p-4">
                  <div className="h-4 rounded bg-primary/20 w-2/3 mb-3" />
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0" />
                      <div className="h-3 rounded bg-muted flex-1" />
                    </div>
                  ))}
                  <div className="mt-4 h-8 rounded-lg bg-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
