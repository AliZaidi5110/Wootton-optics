"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Ear, Eye, Volume2, Glasses, Heart, Contact } from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  ear: Ear,
  volume: Volume2,
  heart: Heart,
  eye: Eye,
  glasses: Glasses,
  contact: Contact,
};

export function ServicesOverview() {
  return (
    <section className="py-20 bg-surface-warm dark:bg-neutral-900">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
            Comprehensive Hearing &amp; Vision Care
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            From free hearing tests to designer eyewear, our Northampton clinic provides
            everything your ears and eyes need under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Ear;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="block bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-200 dark:border-neutral-700 group h-full"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-neutral-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  {service.price && (
                    <p className="text-primary font-semibold text-sm">{service.price}</p>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
