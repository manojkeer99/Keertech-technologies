import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Mail, MapPin, Code, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FounderCard: React.FC = () => {
  const githubUrl = (siteConfig.social.github || '').trim();
  const linkedinUrl = (siteConfig.social.linkedin || '').trim();
  const instagramUrl = (siteConfig.social.instagram || '').trim();
  const email = (siteConfig.contact.email || '').trim();

  const hasAnyLink = Boolean(githubUrl || linkedinUrl || instagramUrl || email);

  return (
    <div className="relative rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-5 sm:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        {/* Founder Avatar / Profile Graphic */}
        <div className="relative shrink-0">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-neutral-900 p-0.5 shadow-md">
            <div className="w-full h-full rounded-[14px] bg-neutral-950 flex flex-col items-center justify-center text-white relative overflow-hidden">
              {/* Abstract developer emblem */}
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-lg">
                MK
              </div>
              <span className="text-[10px] text-neutral-400 mt-2 font-mono">
                Software Dev
              </span>
            </div>
          </div>
          {/* Location indicator */}
          <div className="mt-2 text-center">
            <span className="inline-flex items-center gap-1 text-[11px] text-neutral-500 dark:text-neutral-400">
              <MapPin className="w-3 h-3 text-blue-500" /> {siteConfig.founder.location}
            </span>
          </div>
        </div>

        {/* Founder Details */}
        <div className="space-y-4 flex-1">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Founder & Software Developer
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mt-1 break-words">
              {siteConfig.founder.name}
            </h3>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              {siteConfig.founder.role} · {siteConfig.founder.location}
            </div>
          </div>

          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed break-words">
            {siteConfig.founder.bio}
          </p>

          {/* Core Philosophy / Approach */}
          <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
            <div className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-2 flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-blue-500" />
              Direct Engineering Engagement
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Every project at KeerTech is scoped, engineered, and reviewed directly by Manoj Keer. You communicate directly with the engineer translating your requirements into clean, scalable software.
            </p>
          </div>

          {/* Social and Contact Links - Only rendered if configured */}
          {hasAnyLink ? (
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Manoj Keer on GitHub (opens in new tab)"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors min-h-[36px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Github className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" aria-hidden="true" />
                </a>
              )}

              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Manoj Keer on LinkedIn (opens in new tab)"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors min-h-[36px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" aria-hidden="true" />
                </a>
              )}

              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Manoj Keer on Instagram (opens in new tab)"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors min-h-[36px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" aria-hidden="true" />
                </a>
              )}

              {email && (
                <a
                  href={`mailto:${email}`}
                  aria-label={`Send email to Manoj Keer at ${email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors min-h-[36px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Direct Email</span>
                </a>
              )}
            </div>
          ) : (
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                <span>Discuss a project with Manoj Keer</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
