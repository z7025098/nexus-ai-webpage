"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Sun, Zap, Award } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";
import { cn } from "@/lib/utils";

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  };
}

function SolarVisual() {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Main visual container */}
      <div className="relative rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-sm shadow-2xl overflow-hidden p-8">
        {/* Amber glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

        {/* Solar panel grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 border border-primary/20 rounded-xl" />
              {/* Panel grid lines */}
              <div className="absolute inset-0 grid grid-cols-4 gap-[2px] p-1">
                {[...Array(12)].map((_, j) => (
                  <div
                    key={j}
                    className="rounded-sm"
                    style={{ background: "oklch(0.30 0.06 255)" }}
                  />
                ))}
              </div>
              {/* Shimmer effect */}
              <div
                className="absolute inset-0 opacity-20 rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.82 0.15 90 / 0.3) 0%, transparent 50%, oklch(0.75 0.17 75 / 0.2) 100%)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-muted/40 rounded-xl p-3 border border-border/40 text-center">
            <Sun className="w-5 h-5 text-primary mx-auto mb-1" />
            <div className="text-lg font-bold text-primary">98%</div>
            <div className="text-xs text-muted-foreground">Efficiency</div>
          </div>
          <div className="bg-primary/10 rounded-xl p-3 border border-primary/20 text-center">
            <Zap className="w-5 h-5 text-primary mx-auto mb-1" />
            <div className="text-lg font-bold text-primary">13.5kWh</div>
            <div className="text-xs text-muted-foreground">Daily Output</div>
          </div>
          <div className="bg-muted/40 rounded-xl p-3 border border-border/40 text-center">
            <Shield className="w-5 h-5 text-primary mx-auto mb-1" />
            <div className="text-lg font-bold text-primary">25yr</div>
            <div className="text-xs text-muted-foreground">Warranty</div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg glow">
        <Award className="w-3 h-3 inline mr-1" />
        Tesla Certified
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useTranslation();

  const stats = [
    { value: t("hero.stat1Value"), label: t("hero.stat1Label") },
    { value: t("hero.stat2Value"), label: t("hero.stat2Label") },
    { value: t("hero.stat3Value"), label: t("hero.stat3Label") },
    { value: t("hero.stat4Value"), label: t("hero.stat4Label") },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl" />
        {/* Engineering grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(0.75 0.17 75) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.75 0.17 75) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <motion.div {...fadeUp(0)}>
              <Badge
                variant="secondary"
                className="mb-6 px-4 py-1.5 text-sm font-medium border border-primary/30 bg-primary/10 text-primary"
              >
                <Shield className="w-3.5 h-3.5 mr-1.5" />
                {t("hero.badge")}
              </Badge>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              {t("hero.title1")}
              <br />
              <span className="gradient-text">{t("hero.title2")}</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-col sm:flex-row items-start gap-4 mb-14"
            >
              <a
                href="#contact"
                className={cn(buttonVariants({ size: "lg" }), "gap-2 glow px-8 h-12 text-base bg-primary text-primary-foreground")}
              >
                {t("hero.cta1")}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#process"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "gap-2 px-8 h-12 text-base border-border/60 text-foreground")}
              >
                {t("hero.cta2")}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.4)}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{s.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Solar visual */}
          <motion.div {...fadeUp(0.5)}>
            <SolarVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
