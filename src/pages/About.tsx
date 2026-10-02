import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Target, Lightbulb, Shield, Code, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { FounderCard } from '../components/FounderCard';

export const About: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header */}
      <section className="pt-10 sm:pt-16 border-b border-neutral-200 dark:border-neutral-800 pb-12 bg-neutral-50/50 dark:bg-neutral-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <SectionHeading
            as="h1"
            kicker="Company & Vision"
            title="Technology With Purpose"
            subtitle="KeerTech Technologies is an independent, founder-led software development company founded by Manoj Keer in Rajasthan, India."
          />
        </div>
      </section>

      {/* Main Narrative & Founder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
              Building Useful, Reliable & Scalable Digital Products
            </h2>

            <p>
              KeerTech Technologies was established to solve a very specific problem: businesses, founders, and students often struggle to find technical partners who provide honest engineering guidance without excessive agency markups or fragile template solutions.
            </p>

            <p>
              Operating directly from Rajasthan, India, KeerTech operates as a high-discipline digital practice. We specialize in modern web technologies, responsive software applications, and practical AI integrations that deliver immediate business utility.
            </p>

            <p>
              We do not present ourselves as a fake global mega-corporation with hundreds of phantom employees. KeerTech is proudly founder-led: when you engage KeerTech, you collaborate directly with founder and software developer Manoj Keer from the initial requirement breakdown to the final production deployment.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 dark:text-white">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>Rajasthan, India</span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Headquartered in Rajasthan, collaborating with clients across India and globally through modern digital workflows.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 dark:text-white">
                  <Target className="w-4 h-4 text-blue-500" />
                  <span>Target Audience</span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  Individuals, students, startups, small businesses, growing businesses, and educational institutions.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <FounderCard />
          </div>
        </div>
      </section>

      {/* Core Values / Operational Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Our Standards"
          title="What Guides Our Work"
          subtitle="How we make architectural, design, and partnership decisions on every project."
          className="mb-10"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Lightbulb className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">
              Practical Innovation
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              We leverage modern tools like Generative AI and edge cloud computing where they create real user value, never just for marketing buzzwords.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Shield className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">
              Uncompromising Transparency
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Clear timelines, documented technical decisions, and direct code ownership. You receive full access to your repositories and deployment platforms.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Code className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">
              Scalable Foundations
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              We structure code with strict type-safety, clean modular separation, and predictable data models so future developers or expanding teams can easily extend it.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-12 rounded-2xl sm:rounded-3xl bg-neutral-900 text-white border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold break-words">
              Looking for a technical partner for your next initiative?
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl leading-relaxed break-words">
              Discuss your project directly with Manoj Keer and get realistic technical advice.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors shrink-0 w-full sm:w-auto min-h-[44px]"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};
