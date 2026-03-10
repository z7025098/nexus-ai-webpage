"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Brain,
  Workflow,
  BarChart3,
  Shield,
  Plug,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Automation",
    description:
      "Let Claude handle repetitive tasks — from data extraction to report generation. Set it once and let it run.",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    icon: Workflow,
    title: "Visual Workflow Builder",
    description:
      "Drag-and-drop workflow editor with 200+ pre-built templates. Connect any tool in your stack without code.",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Live dashboards that surface what matters. From team velocity to revenue impact — all in one place.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II, GDPR compliant, SSO/SAML, audit logs, and end-to-end encryption. Security built in.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Plug,
    title: "300+ Integrations",
    description:
      "Slack, GitHub, Jira, Salesforce, Notion and more. Connect your entire stack with one-click integrations.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: MessageSquare,
    title: "AI Chat Assistant",
    description:
      "Ask questions about your data, get summaries, and trigger actions — all through a natural conversation.",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
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
            Everything you need
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Features built for modern teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            From startups to Fortune 500 companies, Nexus AI adapts to how your
            team works.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Card className="h-full card-hover border-border/60 bg-card/80">
                  <CardHeader className="pb-3">
                    <div className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                      <Icon className={`w-5 h-5 ${f.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg">{f.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {f.description}
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
