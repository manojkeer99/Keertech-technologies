import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Laptop, 
  Layers, 
  Code, 
  Smartphone, 
  Cpu, 
  Sparkles, 
  ShoppingCart, 
  Palette, 
  Server, 
  Cloud, 
  Wrench, 
  Settings, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare 
} from 'lucide-react';
import { siteConfig, ServiceItem } from '../config/siteConfig';
import { SectionHeading } from '../components/SectionHeading';

const iconMap: { [key: string]: React.ReactNode } = {
  'website-development': <Laptop className="w-5 h-5" />,
  'web-application-development': <Layers className="w-5 h-5" />,
  'software-development': <Code className="w-5 h-5" />,
  'mobile-app-development': <Smartphone className="w-5 h-5" />,
  'ai-solutions': <Cpu className="w-5 h-5" />,
  'automation': <Sparkles className="w-5 h-5" />,
  'ecommerce-solutions': <ShoppingCart className="w-5 h-5" />,
  'ui-ux-design': <Palette className="w-5 h-5" />,
  'api-backend-solutions': <Server className="w-5 h-5" />,
  'cloud-deployment': <Cloud className="w-5 h-5" />,
  'maintenance-support': <Wrench className="w-5 h-5" />,
  'deployment-maintenance': <Wrench className="w-5 h-5" />,
  'custom-solutions': <Settings className="w-5 h-5" />,
};

export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Development', 'AI & Automation', 'Design & Deployment'];

  const filteredServices = selectedCategory === 'All'
    ? siteConfig.services
    : siteConfig.services.filter(s => s.category === selectedCategory);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header */}
      <section className="pt-10 sm:pt-16 border-b border-neutral-200 dark:border-neutral-800 pb-12 bg-neutral-50/50 dark:bg-neutral-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <SectionHeading
            as="h1"
            kicker="Solutions & Capabilities"
            title="Technology Solutions Built Around Your Needs"
            subtitle="We provide end-to-end digital engineering across modern web technologies, custom software architectures, and practical AI integrations."
          />

          {/* Interactive Category Filter */}
          <div role="group" aria-label="Service category filters" className="flex flex-wrap items-center gap-2 pt-4">
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

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredServices.length === 0 ? (
          <div className="text-center py-12 px-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 space-y-3">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              No services found matching the selected category.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service: ServiceItem) => (
              <article
                key={service.id}
                id={service.id}
                aria-labelledby={`service-title-${service.id}`}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-200 flex flex-col justify-between shadow-2xs group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-150">
                      {iconMap[service.id] || <Code className="w-5 h-5" aria-hidden="true" />}
                    </div>
                    <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                      {service.category}
                    </span>
                  </div>

                  <div>
                    <h2
                      id={`service-title-${service.id}`}
                      className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                    >
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                      {service.fullDesc}
                    </p>
                  </div>

                  {/* Key Features List (Zero Pills) */}
                  <div className="space-y-2 pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
                    <div className="text-[11px] font-semibold text-neutral-800 dark:text-neutral-200">
                      Key Deliverables:
                    </div>
                    <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies & CTA */}
                <div className="pt-4 mt-6 border-t border-neutral-100 dark:border-neutral-800/80 space-y-3">
                  <div className="text-[11px] text-neutral-500 leading-normal break-words">
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">Stack: </span>
                    <span>{service.techTags.join(' · ')}</span>
                  </div>

                  <div className="flex items-center justify-between pt-1 gap-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <span>Request this solution</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {(siteConfig.contact.whatsapp || siteConfig.contact.whatsappNumber) && (
                      <a
                        href={`https://wa.me/${(siteConfig.contact.whatsapp || siteConfig.contact.whatsappNumber).replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                          `Hello KeerTech, I am interested in discussing your ${service.title} service.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Quick WhatsApp inquiry about ${service.title} (opens in new tab)`}
                        className="text-neutral-400 hover:text-emerald-500 transition-colors p-1 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-sm"
                        title="Quick WhatsApp Inquiry"
                      >
                        <MessageSquare className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Technical Capabilities Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 space-y-6">
          <SectionHeading
            kicker="Tooling & Stack"
            title="Technologies We Work With"
            subtitle="Capabilities and production tools used across KeerTech projects. We choose stable, maintainable technologies that match your needs."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                Frontend
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {siteConfig.technologies.frontend.join(' · ')}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                Backend & APIs
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {siteConfig.technologies.backend.join(' · ')}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                Database & Cloud
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {siteConfig.technologies.database.concat(siteConfig.technologies.deployment).join(' · ')}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                AI & Automation
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {siteConfig.technologies.ai.join(' · ')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
          Not sure which service fits your exact need?
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
          We can discuss your goals and recommend a practical, budget-aligned technology strategy.
        </p>
        <div className="pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors w-full sm:w-auto min-h-[44px]"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};
