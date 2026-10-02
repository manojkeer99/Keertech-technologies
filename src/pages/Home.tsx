import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Laptop, Smartphone, Cpu, Sparkles, ChevronRight, Layers, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SectionHeading } from '../components/SectionHeading';
import { HeroVisual } from '../components/HeroVisual';
import { FounderCard } from '../components/FounderCard';
import { ProjectMockup } from '../components/ProjectMockup';

export const Home: React.FC = () => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 lg:pt-20 overflow-hidden">
        {/* Subtle background radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 radial-glow pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust/Status Indicator */}
              <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 px-3 py-1.5 rounded-full max-w-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Based in Rajasthan, India</span>
                <span aria-hidden="true" className="text-neutral-400">·</span>
                <span>Working with clients digitally</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.12] break-words" style={{ textWrap: 'balance' }}>
                Turning Ideas Into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                  Reliable Digital Solutions
                </span>
              </h1>

              {/* Supporting Subtitle */}
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed break-words" style={{ textWrap: 'balance' }}>
                KeerTech Technologies builds modern websites, web applications, custom software, and AI-powered workflows for individuals, startups, and growing businesses.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 min-h-[44px]"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <Link
                  to="/projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white font-medium text-sm border border-neutral-200 dark:border-neutral-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 min-h-[44px]"
                >
                  <span>Explore Our Work</span>
                  <ChevronRight className="w-4 h-4 text-neutral-400" aria-hidden="true" />
                </Link>
              </div>

              {/* Key Bullet Highlights (Zero Pills) */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800/80 flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" aria-hidden="true" />
                  <span>Type-Safe TypeScript</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" aria-hidden="true" />
                  <span>Founder-Led Quality</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" aria-hidden="true" />
                  <span>No Unnecessary Bloat</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Visual */}
            <div className="lg:col-span-5">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITY STRIP */}
      <section className="border-y border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/30 py-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-y-2.5 gap-x-3 sm:gap-x-4 text-xs font-medium text-neutral-600 dark:text-neutral-400 tracking-wide text-center sm:text-left">
            {siteConfig.capabilitiesList.map((cap, i) => (
              <React.Fragment key={cap}>
                <span className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {cap}
                </span>
                {i < siteConfig.capabilitiesList.length - 1 && (
                  <span className="hidden sm:inline text-neutral-400 dark:text-neutral-600" aria-hidden="true">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <SectionHeading
            kicker="Our Core Solutions"
            title="Technology Solutions Built Around Your Needs"
            subtitle="From responsive landing pages to full-stack web applications and AI-driven automation workflows, we engineer solutions designed to perform."
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline shrink-0"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Highlight 6 marquee services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.slice(0, 6).map((service) => (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              className="group p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-200 flex flex-col justify-between shadow-2xs hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-150">
                  {service.id.includes('website') && <Laptop className="w-5 h-5" />}
                  {service.id.includes('web-app') && <Layers className="w-5 h-5" />}
                  {service.id.includes('software') && <Code className="w-5 h-5" />}
                  {service.id.includes('mobile') && <Smartphone className="w-5 h-5" />}
                  {service.id.includes('ai') && <Cpu className="w-5 h-5" />}
                  {service.id.includes('automation') && <Sparkles className="w-5 h-5" />}
                </div>

                <h3 className="text-base font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs font-medium text-neutral-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <span>Explore capability</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. WHY WORK WITH KEERTECH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Engineering Principles"
          title="Why Work With KeerTech?"
          subtitle="We focus on substance, clean craftsmanship, and honest communication over empty corporate buzzwords."
          className="mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.whyChooseUs.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 space-y-2.5"
            >
              <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
                0{idx + 1}.
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="How We Work"
          title="A Structured 5-Step Process"
          subtitle="From initial discovery to launch and post-release support, every phase is transparent and milestone-driven."
          className="mb-10"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {siteConfig.processSteps.map((step) => (
            <div
              key={step.number}
              className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="text-2xl font-extrabold font-mono text-blue-600 dark:text-blue-400">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {step.tagline}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 text-[11px] text-neutral-500 space-y-1">
                <div className="font-semibold text-neutral-700 dark:text-neutral-300">Outputs:</div>
                {step.deliverables.map((d) => (
                  <div key={d}>• {d}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FEATURED PROJECTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <SectionHeading
            kicker="Portfolio & Proof"
            title="Selected Projects & Engineering Work"
            subtitle="Real software products and solutions built with modern technology stacks."
          />
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.projects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
            >
              {/* Interactive Mockup Preview Frame */}
              <div className="h-56 sm:h-64 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-950">
                <ProjectMockup projectId={project.id} />
              </div>

              <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mt-1">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1 text-xs text-neutral-500 min-w-0">
                    <span className="truncate">{project.tags.slice(0, 3).join(' · ')}</span>
                  </div>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline shrink-0"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PRICING & ENGAGEMENT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Flexible Engagement"
          title="Project-Based Pricing"
          subtitle="Every project is different. Pricing depends on scope, features, complexity and requirements."
          className="mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.pricingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between shadow-2xs hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {pkg.name}
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/40 shrink-0">
                    {pkg.priceLabel}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {pkg.shortDesc}
                </p>

                {/* For list */}
                <div className="space-y-1.5 pt-3 border-t border-neutral-100 dark:border-neutral-800/80">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    For:
                  </div>
                  <ul className="space-y-1 text-xs text-neutral-700 dark:text-neutral-300">
                    {pkg.idealFor.map((item) => (
                      <li key={item} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Highlights */}
                <div className="space-y-1.5 pt-3 border-t border-neutral-100 dark:border-neutral-800/80">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Scope & Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800/80 space-y-3">
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  {pkg.timelineNote}
                </div>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-100 hover:bg-blue-600 hover:text-white dark:bg-neutral-800 dark:hover:bg-blue-600 dark:hover:text-white text-neutral-900 dark:text-white font-semibold text-xs transition-colors min-h-[42px]"
                >
                  <span>{pkg.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mt-6">
          {siteConfig.pricingNote}
        </p>
      </section>

      {/* 8. FOUNDER & ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Founder-Led Initiative"
          title="Technology With Purpose"
          subtitle="KeerTech Technologies is an independent, founder-led software development company founded by Manoj Keer in Rajasthan, India."
          className="mb-8"
        />

        <FounderCard />
      </section>

      {/* 8. FINAL HIGH-IMPACT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl bg-neutral-900 text-white p-6 sm:p-12 lg:p-16 overflow-hidden border border-neutral-800 shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Ready to start?
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white break-words" style={{ textWrap: 'balance' }}>
              Have an idea? Let's build it.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed break-words" style={{ textWrap: 'balance' }}>
              Tell us what you are trying to build, improve, or automate. We will review your goals and provide an honest architectural assessment with zero pressure.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-3 w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-xs min-h-[44px]"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-medium text-sm transition-colors min-h-[44px]"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
