"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";
import {
  MessageSquare,
  Ruler,
  FileText,
  HardHat,
  CheckSquare,
  Monitor,
} from "lucide-react";

const stepIcons = [MessageSquare, Ruler, FileText, HardHat, CheckSquare, Monitor];

export default function Process() {
  const { t } = useTranslation();

  const steps = [1, 2, 3, 4, 5, 6].map((n) => ({
    number: n,
    icon: stepIcons[n - 1],
    title: t(`process.step${n}.title`),
    description: t(`process.step${n}.description`),
  }));

  return (
    <section id="process" className="py-24 sm:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-primary uppercase tracking-widest mb-3"
          >
            {t("process.subtitle")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            {t("process.title")}
          </motion.h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Connector line (desktop) */}
                {idx < 5 && idx % 3 !== 2 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%_-_1rem)] w-[calc(100%_-_2rem)] z-0">
                    <div className="h-0.5 bg-gradient-to-r from-primary/30 to-primary/10" />
                  </div>
                )}

                <div className="relative z-10 bg-card/60 border border-border/40 rounded-2xl p-6 card-hover">
                  {/* Step number + icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  <h3 className="font-semibold text-base mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
