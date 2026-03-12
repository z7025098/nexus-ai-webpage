"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, Wrench, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/i18n/useTranslation";

const blocks = [
  {
    key: "block1",
    icon: Wrench,
    accent: "from-amber-500/15 to-orange-500/15",
    reverse: false,
    visual: "team",
  },
  {
    key: "block2",
    icon: Users,
    accent: "from-blue-500/15 to-indigo-500/15",
    reverse: true,
    visual: "veteran",
  },
  {
    key: "block3",
    icon: Award,
    accent: "from-emerald-500/15 to-teal-500/15",
    reverse: false,
    visual: "certified",
  },
];

function BlockVisual({ type, accent }: { type: string; accent: string }) {
  return (
    <div
      className={`relative rounded-2xl bg-gradient-to-br ${accent} border border-border/40 p-6 aspect-[4/3] overflow-hidden`}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, oklch(0.75 0.17 75) 0%, transparent 70%)",
        }}
      />

      {type === "team" && (
        <div className="space-y-3">
          {/* Blueprint-style layout */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-primary/40" />
            <div className="h-4 w-36 rounded bg-primary/20" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {["Engineer", "Electrician", "PM", "QC"].map((r) => (
              <div key={r} className="bg-card/40 rounded-lg p-3 border border-border/30">
                <div className="w-8 h-8 rounded-full bg-primary/20 mb-2 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary/50" />
                </div>
                <div className="h-2.5 rounded bg-primary/30 w-3/4 mb-1" />
                <div className="h-2 rounded bg-muted w-1/2" />
              </div>
            ))}
          </div>
          <div className="mt-2 flex items-center gap-2 bg-primary/10 rounded-lg p-2 border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="h-2.5 rounded bg-primary/30 flex-1" />
          </div>
        </div>
      )}

      {type === "veteran" && (
        <div className="space-y-3">
          <div className="flex items-center justify-center mb-2">
            <div className="w-16 h-16 rounded-full border-2 border-primary/40 bg-primary/10 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-primary/30" />
              </div>
            </div>
          </div>
          {["On-Time Delivery", "Safety First", "Zero Shortcuts", "Clear Comms"].map((v, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary/60" />
              </div>
              <div className="h-2.5 rounded bg-primary/25" style={{ width: `${75 + i * 5}%` }} />
            </div>
          ))}
        </div>
      )}

      {type === "certified" && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2 mb-2">
            {[
              { label: "Tesla", color: "bg-red-500/20 border-red-500/30" },
              { label: "Enphase", color: "bg-amber-500/20 border-amber-500/30" },
            ].map((b) => (
              <div key={b.label} className={`rounded-xl ${b.color} border p-3 text-center`}>
                <div className="h-4 rounded bg-primary/30 w-3/4 mx-auto mb-1" />
                <div className="text-xs font-bold text-primary/60">{b.label}</div>
              </div>
            ))}
          </div>
          {["Powerwall 3", "IQ Battery 10", "Tier-1 Panels", "25-yr Warranty"].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-card/30 rounded-lg p-2 border border-border/20">
              <div className="w-4 h-4 rounded-full bg-primary/20 flex-shrink-0" />
              <div className="h-2.5 rounded bg-primary/25 flex-1" />
              <span className="text-[10px] text-primary/50 font-medium">{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Products() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 sm:py-32 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-primary uppercase tracking-widest mb-3"
          >
            {t("whyUs.subtitle")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            {t("whyUs.title")}
          </motion.h2>
        </div>

        <div className="space-y-24">
          {blocks.map((b, idx) => {
            const blockKey = b.key as "block1" | "block2" | "block3";
            const features = [
              t(`whyUs.${blockKey}.feature1`),
              t(`whyUs.${blockKey}.feature2`),
              t(`whyUs.${blockKey}.feature3`),
              t(`whyUs.${blockKey}.feature4`),
            ];

            return (
              <motion.div
                key={b.key}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  b.reverse ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={b.reverse ? "lg:col-start-2" : ""}>
                  <Badge
                    variant="secondary"
                    className="mb-4 text-primary border-primary/20 bg-primary/10"
                  >
                    {t(`whyUs.${blockKey}.badge`)}
                  </Badge>
                  <h3 className="text-3xl font-bold mb-2">
                    {t(`whyUs.${blockKey}.name`)}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {t(`whyUs.${blockKey}.tagline`)}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t(`whyUs.${blockKey}.description`)}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  {idx === 0 && (
                    <a href="#contact" className={cn(buttonVariants(), "gap-2 bg-primary text-primary-foreground")}>
                      Get a Free Quote
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <div className={b.reverse ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <BlockVisual type={b.visual} accent={b.accent} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
