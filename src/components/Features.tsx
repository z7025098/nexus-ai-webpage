"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sun, Building2, Battery, Plug, Car, Landmark } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

const services = [
  {
    icon: Sun,
    key: "residential",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: Building2,
    key: "commercial",
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    icon: Battery,
    key: "battery",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Plug,
    key: "ev",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    icon: Car,
    key: "carport",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    icon: Landmark,
    key: "farm",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
];

export default function Features() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 sm:py-32 bg-muted/20">
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
            {t("services.subtitle")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            {t("services.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            {t("services.description")}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Card className="h-full card-hover border-border/40 bg-card/80">
                  <CardHeader className="pb-3">
                    <div className={`w-11 h-11 rounded-xl ${s.bg} flex items-center justify-center mb-4`}>
                      <Icon className={`w-5 h-5 ${s.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {t(`services.${s.key}.title`)}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`services.${s.key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
