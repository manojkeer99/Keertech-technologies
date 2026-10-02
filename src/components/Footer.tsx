import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Mail, MessageSquare, MapPin } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const whatsappNumber = (siteConfig.contact.whatsapp || siteConfig.contact.whatsappNumber || '').trim();
  const cleanWhatsAppNumber = whatsappNumber.replace(/[^0-9]/g, '');

  const whatsappUrl = cleanWhatsAppNumber
    ? `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
        siteConfig.contact.whatsappDefaultMessage || 'Hello KeerTech, I would like to discuss a project.'
      )}`
    : '';

  const email = (siteConfig.contact.email || '').trim();
  const githubUrl = (siteConfig.social.github || '').trim();
  const linkedinUrl = (siteConfig.social.linkedin || '').trim();
  const instagramUrl = (siteConfig.social.instagram || '').trim();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 text-neutral-900 dark:text-white inline-block">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-xs shadow-xs">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4v16" />
                  <path d="m4 12 12-8" />
                  <path d="m8 10 10 10" />
                </svg>
              </div>
              <span className="text-base font-bold tracking-tight">
                {siteConfig.name}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
              Engineering modern websites, web applications, custom software, and practical AI integrations for individuals, startups, and growing organizations.
            </p>

            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span>{siteConfig.contact.location} · Working digitally with clients</span>
            </div>
          </div>

          {/* Navigation / Company */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
              Company
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About KeerTech
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Solutions & Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Projects & Work
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
              Solutions
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  UI/UX Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Legal */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200">
              Connect & Legal
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm">
              {email && (
                <li>
                  <a
                    href={`mailto:${email}`}
                    aria-label={`Send email to ${email}`}
                    className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Email Inquiry</span>
                  </a>
                </li>
              )}
              {whatsappUrl && (
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Message KeerTech on WhatsApp (opens in new tab)"
                    className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>WhatsApp Message</span>
                  </a>
                </li>
              )}
              {githubUrl && (
                <li>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit KeerTech on GitHub (opens in new tab)"
                    className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>GitHub</span>
                  </a>
                </li>
              )}
              {linkedinUrl && (
                <li>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit KeerTech on LinkedIn (opens in new tab)"
                    className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>LinkedIn</span>
                  </a>
                </li>
              )}
              {instagramUrl && (
                <li>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit KeerTech on Instagram (opens in new tab)"
                    className="inline-flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Instagram</span>
                  </a>
                </li>
              )}
              <li>
                <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Project Inquiry
                </Link>
              </li>
              <li className="pt-2">
                <Link to="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 text-center sm:text-left">
          <div>
            © 2026 {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
            <span>Founder-led by {siteConfig.founder.name}</span>
            <span aria-hidden="true">·</span>
            <span>Based in {siteConfig.founder.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
