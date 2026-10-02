import React from 'react';
import { Mail, MessageCircle, MapPin, Clock, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';

export const Contact: React.FC = () => {
  const rawWhatsApp = (siteConfig.contact.whatsapp || siteConfig.contact.whatsappNumber || '').trim();
  const cleanWhatsApp = rawWhatsApp.replace(/[^0-9]/g, '');

  const whatsappUrl = cleanWhatsApp
    ? `https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
        siteConfig.contact.whatsappDefaultMessage || 'Hello KeerTech, I would like to discuss a project.'
      )}`
    : '';

  const email = (siteConfig.contact.email || '').trim();
  const hasDirectChannels = Boolean(whatsappUrl || email);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header */}
      <section className="pt-10 sm:pt-16 border-b border-neutral-200 dark:border-neutral-800 pb-12 bg-neutral-50/50 dark:bg-neutral-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <SectionHeading
            as="h1"
            kicker="Project Inquiry"
            title="Let's Build Something Useful."
            subtitle="Tell us about your project, idea, or challenge. We respond directly with honest technical feasibility and transparent pricing."
          />
        </div>
      </section>

      {/* Main Content: Form + Direct Contact Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Direct Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="sr-only">Direct Communication Channels</h2>
            {/* Direct WhatsApp Card - Only if configured */}
            {whatsappUrl && (
              <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-4 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                    Quick Chat on WhatsApp
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                    Prefer direct messaging? Reach out on WhatsApp to discuss ideas, send reference links, or schedule a quick audio call.
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open WhatsApp Chat with KeerTech (opens in new tab)"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-xs min-h-[42px] w-full sm:w-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <span>Open WhatsApp Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            )}

            {/* Direct Email Card - Only if configured */}
            {email && (
              <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-4 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                    Direct Email
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                    Send project briefs, RFP documents, or design files directly to our inbox.
                  </p>
                </div>

                <a
                  href={`mailto:${email}`}
                  aria-label={`Send email directly to ${email}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline max-w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                >
                  <span className="break-all">{email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            )}

            {/* If direct channels are not yet configured, show direct inquiry process card */}
            {!hasDirectChannels && (
              <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-4 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                    Direct Engineering Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                    Submit your requirements using the inquiry form. Every submission is reviewed directly by Manoj Keer for technical feasibility and scope breakdown.
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>Free architectural feasibility review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>Confidentiality & NDA readiness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>Clear milestone pricing</span>
                  </div>
                </div>
              </div>
            )}

            {/* Location & Working Mode */}
            <div className="p-6 rounded-2xl bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 space-y-3 text-xs text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-semibold">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>Headquarters: {siteConfig.contact.location}</span>
              </div>
              <p>
                {siteConfig.contact.workingMode}. All code reviews, project updates, and demos are conducted directly online.
              </p>
              <div className="flex items-center gap-2 pt-2 border-t border-neutral-200 dark:border-neutral-800 text-neutral-500">
                <Clock className="w-3.5 h-3.5 text-blue-500" />
                <span>Typical response time: Within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
