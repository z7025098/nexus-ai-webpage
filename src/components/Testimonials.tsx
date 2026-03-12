"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Homeowner",
    location: "Arcadia, CA",
    avatar: "MC",
    project: "12kW system + 2× Powerwall",
    quote:
      "Nason Solar handled everything from permits to installation in 6 weeks. Our electric bill went from $380/month to near zero. The team was professional and cleaned up perfectly after every day's work.",
    stars: 5,
  },
  {
    name: "Jennifer Park",
    role: "Property Manager",
    location: "Pasadena, CA",
    avatar: "JP",
    project: "Commercial 85kW system",
    quote:
      "We installed solar on three commercial properties. Nason delivered on time and under budget for all three. Their in-house team made coordination seamless — one call handled everything.",
    stars: 5,
  },
  {
    name: "Robert Garcia",
    role: "Restaurant Owner",
    location: "Los Angeles, CA",
    avatar: "RG",
    project: "30kW system + EV chargers",
    quote:
      "Being a veteran myself, I wanted to work with a fellow vet-owned business. These guys brought the same standards I recognize from service — structured, thorough, no excuses. Highly recommend.",
    stars: 5,
  },
  {
    name: "Lisa Wang",
    role: "HOA President",
    location: "San Gabriel, CA",
    avatar: "LW",
    project: "Solar carport, 45 spaces",
    quote:
      "The solar carport project for our community was complex — 45 parking spaces, permits, HOA board approvals. Nason navigated every challenge smoothly. Residents are thrilled with both the shade and the savings.",
    stars: 5,
  },
  {
    name: "David Kim",
    role: "Homeowner",
    location: "Temple City, CA",
    avatar: "DK",
    project: "10kW + Enphase IQ Battery 10",
    quote:
      "After the power outages we've had, backup storage was non-negotiable. The Enphase system has kept our house running through three outages since install. Worth every penny.",
    stars: 5,
  },
  {
    name: "Sarah Thompson",
    role: "CFO",
    location: "Monrovia, CA",
    avatar: "ST",
    project: "50kW commercial + BESS",
    quote:
      "The ROI analysis they provided was detailed and accurate. We hit payback in 4.2 years, exactly as projected. Their transparency about costs and savings is rare in this industry.",
    stars: 5,
  },
];

const certBadges = ["Tesla Certified", "Enphase Platinum", "NABCEP", "CSLB", "BBB A+"];

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="py-24 sm:py-32">
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
            {t("testimonials.subtitle")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            {t("testimonials.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            {t("testimonials.description")}
          </motion.p>
        </div>

        {/* Certification badges strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          {certBadges.map((badge) => (
            <span
              key={badge}
              className="text-sm font-semibold text-primary/70 border border-primary/20 bg-primary/5 px-3 py-1 rounded-full"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Testimonials grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="break-inside-avoid"
            >
              <Card className="card-hover border-border/40 bg-card/80">
                <CardContent className="pt-6">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed text-foreground/80 mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="text-xs text-primary/70 font-medium mb-4 italic">
                    {t.project}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {t.role} · {t.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
