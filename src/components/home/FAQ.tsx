"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white" id="faq" aria-labelledby="faq-heading">
      <div className="container">
        <div className="text-center mb-14">
          <h2 id="faq-heading" className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Common questions about eye tests, hearing care, and ear wax removal in Northampton
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="bg-sky/30 rounded-xl border border-primary/20 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left min-h-[56px] gap-3"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                >
                  <span className="font-medium text-navy text-sm sm:text-base pr-2">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {/* Keep answers in the DOM for crawlability; animate visibility only */}
                <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-button-${i}`}>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="open"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-muted text-sm leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    ) : (
                      <p className="sr-only">{faq.answer}</p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
