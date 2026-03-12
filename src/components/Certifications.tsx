"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";

const certs = [
  { key: "tesla", icon: "⚡" },
  { key: "enphase", icon: "☀" },
  { key: "nabcep", icon: "🏅" },
  { key: "cslb", icon: "📋" },
  { key: "bbb", icon: "✓" },
];

export default function Certifications() {
  const { t } = useTranslation();

  return (
    <section className="py-12 border-y border-border/40 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-8"
        >
          {t("certifications.title")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-10"
        >
          {certs.map((cert, i) => (
            <motion.div
              key={cert.key}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/20"
            >
              <span className="text-primary text-base">{cert.icon}</span>
              <span className="text-sm font-semibold text-foreground/80">
                {t(`certifications.${cert.key}`)}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
