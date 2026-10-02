import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { siteConfig } from '../config/siteConfig';

export const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      <SectionHeading
        as="h1"
        kicker="Legal & Transparency"
        title="Privacy Policy"
        subtitle={`Last updated: October 2026 · ${siteConfig.name}`}
      />

      <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 space-y-6 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900 dark:text-white">
            1. Overview & Commitment
          </h2>
          <p>
            {siteConfig.name} ("KeerTech", "we", "us", or "our") respects your privacy. We are committed to handling any project details, contact information, or client data with absolute confidentiality and care. This Privacy Policy outlines what information we collect when you visit our website or submit project inquiries.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900 dark:text-white">
            2. Information We Collect
          </h2>
          <p>
            When you interact with our website or contact us, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your name and contact details (email address, phone/WhatsApp number).</li>
            <li>Organization or business name (if provided).</li>
            <li>Project specifications, requirements, budget indicators, and scope details.</li>
            <li>Basic technical logs and analytics (such as browser type and screen resolution) used solely to ensure website responsiveness and error prevention.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900 dark:text-white">
            3. How We Use Your Information
          </h2>
          <p>
            We use the information you submit strictly to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Evaluate project feasibility and prepare honest technical proposals.</li>
            <li>Communicate with you regarding your inquiry, ongoing project milestones, and software delivery.</li>
            <li>Maintain software codebases and deployments commissioned by you.</li>
          </ul>
          <p className="font-semibold text-neutral-900 dark:text-white">
            We will never sell, rent, or trade your contact information or intellectual property to third-party advertisers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900 dark:text-white">
            4. Client Intellectual Property & Confidentiality
          </h2>
          <p>
            Any proprietary ideas, business logic, workflows, design mockups, or codebase repositories shared with KeerTech for project evaluation or development remain your confidential property. We are happy to review and execute standard Non-Disclosure Agreements (NDAs) prior to detailed discovery.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900 dark:text-white">
            5. Contact Us
          </h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to request the deletion of your inquiry details, please reach out directly:
          </p>
          <p className="text-neutral-900 dark:text-white font-medium">
            {siteConfig.contact.email && (
              <>
                Email: {siteConfig.contact.email} <br />
              </>
            )}
            Founder: Manoj Keer, {siteConfig.contact.location}
          </p>
        </section>
      </div>

      <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
        <Link
          to="/"
          className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Return to Homepage
        </Link>
      </div>
    </div>
  );
};
