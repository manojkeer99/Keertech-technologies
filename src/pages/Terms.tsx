import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { siteConfig } from '../config/siteConfig';

export const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      <SectionHeading
        as="h1"
        kicker="Legal & Transparency"
        title="Terms & Conditions"
        subtitle={`Last updated: October 2026 · ${siteConfig.name}`}
      />

      <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 space-y-6 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900 dark:text-white">
            1. Agreement to Terms
          </h2>
          <p>
            By accessing the website of {siteConfig.name} or commissioning software engineering services from us, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, please contact us prior to initiating project work.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900 dark:text-white">
            2. Scope of Services & Development
          </h2>
          <p>
            KeerTech Technologies provides website development, web applications, custom software development, AI integrations, UI/UX architecture, and technical consulting. All client engagements are governed by specific project proposals detailing agreed milestones, deliverables, timelines, and payment terms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900 dark:text-white">
            3. Intellectual Property Rights & Ownership
          </h2>
          <p>
            Upon receipt of full payment for agreed milestones:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>The client retains full ownership of the bespoke software code, database models, and assets created specifically for their project.</li>
            <li>KeerTech retains the right to display non-confidential project case studies and architectural overviews in our portfolio, unless an explicit NDA prohibits public disclosure.</li>
            <li>Any open-source libraries or third-party frameworks utilized remain subject to their respective open-source licenses (e.g., MIT, Apache 2.0).</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900 dark:text-white">
            4. Estimates, Revisions & Changes
          </h2>
          <p>
            We pride ourselves on direct communication and accurate estimates. If changes to project requirements or scope arise during development, we discuss any potential timeline or cost impacts proactively before proceeding.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900 dark:text-white">
            5. Limitation of Liability
          </h2>
          <p>
            While we apply rigorous engineering and testing to all software deliveries, {siteConfig.name} is not liable for third-party hosting outages, upstream API changes (such as breaking updates from external cloud or payment providers), or damages arising from improper maintenance not managed by KeerTech.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-neutral-900 dark:text-white">
            6. Governing Jurisdiction
          </h2>
          <p>
            These terms are governed by the laws applicable in Rajasthan, India.
          </p>
        </section>

        <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <Link
            to="/"
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};
