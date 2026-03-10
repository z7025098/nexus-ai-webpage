"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Head of Engineering",
    company: "Vercel",
    avatar: "SC",
    quote:
      "Nexus AI cut our sprint planning time in half. The AI suggestions are eerily accurate — it's like having a senior PM embedded in every meeting.",
    stars: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "Linear",
    avatar: "MR",
    quote:
      "We onboarded 200 people in a week without a single support ticket. The UI is so intuitive that nobody needed training.",
    stars: 5,
  },
  {
    name: "Aisha Patel",
    role: "Director of Data",
    company: "Stripe",
    avatar: "AP",
    quote:
      "Nexus Insights replaced three separate BI tools. Now anyone on my team can build a dashboard in minutes, not days.",
    stars: 5,
  },
  {
    name: "Tom Nakamura",
    role: "VP of Product",
    company: "Figma",
    avatar: "TN",
    quote:
      "The workflow automation has saved us an estimated 800 hours per quarter. The ROI was immediate and obvious from day one.",
    stars: 5,
  },
  {
    name: "Elena Volkov",
    role: "CTO",
    company: "Loom",
    avatar: "EV",
    quote:
      "Security was our #1 concern. Nexus's SOC 2 compliance and transparent audit logs gave our legal team full confidence.",
    stars: 5,
  },
  {
    name: "James Liu",
    role: "Engineering Manager",
    company: "Notion",
    avatar: "JL",
    quote:
      "The Claude-powered chat assistant is magic. Our team asks it complex data questions and gets accurate answers instantly.",
    stars: 5,
  },
];

const logos = ["Vercel", "Linear", "Stripe", "Figma", "Loom", "Notion", "Shopify", "Airbnb"];

export default function Testimonials() {
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
            Loved by teams everywhere
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Don&apos;t take our word for it
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Join 50,000+ teams who use Nexus AI to work smarter every day.
          </motion.p>
        </div>

        {/* Logo strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 mb-16 opacity-40"
        >
          {logos.map((logo) => (
            <span key={logo} className="text-lg font-bold tracking-tight">
              {logo}
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
              <Card className="card-hover border-border/60">
                <CardContent className="pt-6">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed text-foreground/80 mb-5">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {t.role} · {t.company}
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
