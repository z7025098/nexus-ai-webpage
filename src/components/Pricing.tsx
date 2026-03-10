"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for individuals and small projects.",
    cta: "Start for free",
    ctaVariant: "outline" as const,
    popular: false,
    features: [
      "Up to 3 users",
      "5 active workflows",
      "1,000 AI credits / month",
      "10 GB storage",
      "Community support",
      "Basic integrations (10)",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: "For growing teams that need more power and flexibility.",
    cta: "Start Pro trial",
    ctaVariant: "default" as const,
    popular: true,
    features: [
      "Up to 25 users",
      "Unlimited workflows",
      "50,000 AI credits / month",
      "100 GB storage",
      "Priority email support",
      "All integrations (300+)",
      "Advanced analytics",
      "Custom AI prompts",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    yearlyPrice: null,
    description: "For large organizations with advanced security and scale.",
    cta: "Contact sales",
    ctaVariant: "outline" as const,
    popular: false,
    features: [
      "Unlimited users",
      "Unlimited everything",
      "Custom AI credit limits",
      "Unlimited storage",
      "24/7 dedicated support",
      "SSO / SAML / SCIM",
      "Custom contracts & SLA",
      "On-premise option",
      "Audit logs & compliance",
    ],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-primary uppercase tracking-widest mb-3"
          >
            Transparent pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Simple plans, no surprises
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mb-8"
          >
            Start free, scale as you grow. Cancel any time.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-3 bg-muted rounded-full p-1"
          >
            <button
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                !yearly ? "bg-background shadow text-foreground" : "text-muted-foreground"
              }`}
              onClick={() => setYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                yearly ? "bg-background shadow text-foreground" : "text-muted-foreground"
              }`}
              onClick={() => setYearly(true)}
            >
              Yearly
              <Badge className="text-[10px] py-0 px-1.5 bg-emerald-100 text-emerald-700 border-0">
                Save 20%
              </Badge>
            </button>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex"
            >
              <Card
                className={`flex flex-col w-full ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/10 relative"
                    : "border-border/60"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-3 shadow">
                      Most popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <h3 className="font-bold text-lg">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                  <div className="mt-4">
                    {plan.monthlyPrice === null ? (
                      <div className="text-4xl font-bold">Custom</div>
                    ) : plan.monthlyPrice === 0 ? (
                      <div className="text-4xl font-bold">Free</div>
                    ) : (
                      <div className="flex items-end gap-1">
                        <span className="text-4xl font-bold">
                          ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-muted-foreground mb-1.5">/mo</span>
                      </div>
                    )}
                    {yearly && plan.monthlyPrice !== null && plan.monthlyPrice > 0 && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Billed annually · ${(plan.yearlyPrice! * 12).toLocaleString()}/yr
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex flex-col flex-1">
                  <Button
                    variant={plan.ctaVariant}
                    className="w-full mb-6 gap-2"
                    size="lg"
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                  <Separator className="mb-6" />

                  <ul className="space-y-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
