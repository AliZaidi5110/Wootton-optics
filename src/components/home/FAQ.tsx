"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const displayFaqs = faqs.slice(0, 6);

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted text-lg">Common questions about our hearing and eye care services</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {displayFaqs.map((faq, i) => (
            <div key={i} className="bg-sky/30 rounded-xl border border-primary/20 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left min-h-[56px] gap-3"
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-navy text-sm sm:text-base pr-2">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <p className="px-5 pb-5 text-muted text-sm leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
