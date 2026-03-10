"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const products = [
  {
    badge: "Core Product",
    name: "Nexus Studio",
    tagline: "The AI workspace for your entire team",
    description:
      "A unified canvas where your team can write, plan, and automate — powered by real-time AI assistance that understands your entire workflow context.",
    features: [
      "Collaborative AI editor with version history",
      "Auto-generated summaries and action items",
      "Smart task assignment based on team capacity",
      "Connected to all your tools via native integrations",
    ],
    image: "studio",
    cta: "Try Studio free",
    accent: "from-indigo-500/20 to-violet-500/20",
    reverse: false,
  },
  {
    badge: "Data Product",
    name: "Nexus Insights",
    tagline: "Your data, finally understandable",
    description:
      "Connect any database, warehouse, or SaaS tool and ask questions in plain English. Nexus Insights translates your queries into SQL and visualizes results instantly.",
    features: [
      "Natural language to SQL, no coding required",
      "Auto-refreshing dashboards and alerts",
      "Anomaly detection and trend forecasting",
      "Share reports with one click",
    ],
    image: "insights",
    cta: "Explore Insights",
    accent: "from-blue-500/20 to-cyan-500/20",
    reverse: true,
  },
  {
    badge: "Automation",
    name: "Nexus Flow",
    tagline: "Automate workflows without code",
    description:
      "Describe what you want to automate in plain language and Nexus Flow builds the workflow for you. From simple triggers to complex multi-step processes.",
    features: [
      "AI workflow generation from natural language",
      "200+ pre-built templates to get started fast",
      "Real-time monitoring and error recovery",
      "Scales to millions of executions per month",
    ],
    image: "flow",
    cta: "Build your first flow",
    accent: "from-emerald-500/20 to-teal-500/20",
    reverse: false,
  },
];

function ProductVisual({ type, accent }: { type: string; accent: string }) {
  return (
    <div className={`relative rounded-2xl bg-gradient-to-br ${accent} border border-border p-6 aspect-[4/3] overflow-hidden`}>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, oklch(0.46 0.22 264) 0%, transparent 70%)",
      }} />
      {type === "studio" && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-primary/40" />
            <div className="h-4 w-32 rounded bg-primary/20" />
          </div>
          {[80, 100, 65, 90, 75].map((w, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 mt-0.5" />
              <div className="flex-1 space-y-1">
                <div className={`h-3 rounded bg-primary/20`} style={{ width: `${w}%` }} />
                {i % 2 === 0 && <div className="h-3 rounded bg-primary/10 w-3/4" />}
              </div>
            </div>
          ))}
          <div className="mt-4 p-3 rounded-xl bg-primary/10 border border-primary/20">
            <div className="h-3 rounded bg-primary/30 w-1/2 mb-2" />
            <div className="h-3 rounded bg-primary/20 w-full" />
            <div className="h-3 rounded bg-primary/20 w-4/5 mt-1" />
          </div>
        </div>
      )}
      {type === "insights" && (
        <div className="space-y-3">
          <div className="flex items-end gap-2 h-32">
            {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md bg-primary/30"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {["$2.4M", "14.2%", "8.1K"].map((v, i) => (
              <div key={i} className="bg-primary/10 rounded-lg p-2 text-center">
                <div className="font-bold text-sm text-primary">{v}</div>
                <div className="h-2 rounded bg-primary/20 mt-1 w-2/3 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      )}
      {type === "flow" && (
        <div className="space-y-3">
          {[
            { label: "Trigger", color: "bg-blue-500/30" },
            { label: "Condition", color: "bg-yellow-500/30" },
            { label: "Action", color: "bg-green-500/30" },
            { label: "Notify", color: "bg-primary/30" },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg ${step.color} flex items-center justify-center text-xs font-bold`}>
                {i + 1}
              </div>
              <div className="flex-1 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center px-3">
                <div className="h-2 rounded bg-primary/30 w-1/2" />
              </div>
              {i < 3 && (
                <div className="absolute left-10 mt-8 h-3 w-0.5 bg-primary/30" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-primary uppercase tracking-widest mb-3"
          >
            Our products
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            One platform, three powerful products
          </motion.h2>
        </div>

        <div className="space-y-24">
          {products.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                p.reverse ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={p.reverse ? "lg:col-start-2" : ""}>
                <Badge variant="secondary" className="mb-4 text-primary border-primary/20 bg-primary/5">
                  {p.badge}
                </Badge>
                <h3 className="text-3xl font-bold mb-2">{p.name}</h3>
                <p className="text-primary font-medium mb-4">{p.tagline}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {p.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className="gap-2">
                  {p.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <div className={p.reverse ? "lg:col-start-1 lg:row-start-1" : ""}>
                <ProductVisual type={p.image} accent={p.accent} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
