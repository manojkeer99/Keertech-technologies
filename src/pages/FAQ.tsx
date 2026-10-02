import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, MessageSquare } from 'lucide-react';
import { siteConfig, FAQItem } from '../config/siteConfig';
import { SectionHeading } from '../components/SectionHeading';

export const FAQ: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]); // First two open by default
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Services', 'Process', 'Pricing & Delivery'];

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredFaqs = selectedCategory === 'All'
    ? siteConfig.faqs
    : siteConfig.faqs.filter((f) => f.category === selectedCategory);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header */}
      <section className="pt-10 sm:pt-16 border-b border-neutral-200 dark:border-neutral-800 pb-12 bg-neutral-50/50 dark:bg-neutral-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <SectionHeading
            as="h1"
            kicker="Answers & Clarifications"
            title="Frequently Asked Questions"
            subtitle="Clear, straightforward answers about how we build software, handle pricing, and collaborate with our clients."
          />

          {/* Category Tabs */}
          <div role="group" aria-label="FAQ categories" className="flex flex-wrap items-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg text-xs font-medium transition-colors min-h-[38px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white font-semibold shadow-xs'
                    : 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 px-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-3">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              No questions found under this category.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory('All')}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq: FAQItem, idx: number) => {
            const isOpen = openIndices.includes(idx);
            const buttonId = `faq-trigger-${idx}`;
            const panelId = `faq-panel-${idx}`;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden transition-all duration-200"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full text-left px-4 sm:px-6 py-3.5 sm:py-4.5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 min-h-[44px]"
                  >
                    <span className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white break-words">
                      {faq.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`w-4 h-4 text-neutral-500 shrink-0 transform transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 border-t border-neutral-100 dark:border-neutral-800/80 leading-relaxed break-words"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}

        {/* Still Have Questions CTA */}
        <div className="pt-8 text-center space-y-3">
          <h2 className="text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300">
            Have a question that isn't answered here?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors min-h-[38px] w-full sm:w-auto"
            >
              <span>Ask KeerTech a Question</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {(siteConfig.contact.whatsapp || siteConfig.contact.whatsappNumber) && (
              <a
                href={`https://wa.me/${(siteConfig.contact.whatsapp || siteConfig.contact.whatsappNumber).replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  'Hello KeerTech, I have a specific question about your software services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 text-xs font-medium hover:text-neutral-900 dark:hover:text-white transition-colors min-h-[38px] w-full sm:w-auto"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                <span>Ask on WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
