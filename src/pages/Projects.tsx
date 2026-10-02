import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectMockup } from '../components/ProjectMockup';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = ['All', 'Web App', 'Productivity', 'Full-Stack', 'Interactive UI'];

  const filteredProjects = activeFilter === 'All'
    ? siteConfig.projects
    : siteConfig.projects.filter(p => p.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase())));

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Header */}
      <section className="pt-10 sm:pt-16 border-b border-neutral-200 dark:border-neutral-800 pb-12 bg-neutral-50/50 dark:bg-neutral-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <SectionHeading
            as="h1"
            kicker="Portfolio & Case Studies"
            title="Projects Engineered With Real Care"
            subtitle="Explore software applications and digital platforms engineered by Manoj Keer at KeerTech Technologies. Clean code, real-world utility, and modern architecture."
          />

          {/* Interactive filter tabs */}
          <div role="group" aria-label="Project category filters" className="flex flex-wrap items-center gap-2 pt-4">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                aria-pressed={activeFilter === opt}
                onClick={() => setActiveFilter(opt)}
                className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg text-xs font-medium transition-colors min-h-[38px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  activeFilter === opt
                    ? 'bg-blue-600 text-white font-semibold shadow-xs'
                    : 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 px-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 space-y-3">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              No projects found matching the selected filter.
            </p>
            <button
              type="button"
              onClick={() => setActiveFilter('All')}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                aria-labelledby={`project-title-${project.id}`}
                className="rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-md transition-all duration-200 group"
              >
                {/* Top Mockup Area with subtle zoom container */}
                <div className="h-64 sm:h-72 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-950 overflow-hidden relative">
                  <div className="w-full h-full transform group-hover:scale-[1.01] transition-transform duration-300">
                    <ProjectMockup projectId={project.id} />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {project.category}
                      </span>
                      <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                        {project.status}
                      </span>
                    </div>

                    <h2
                      id={`project-title-${project.id}`}
                      className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-words"
                    >
                      {project.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {project.fullDesc}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
                      <div className="text-[11px] font-semibold text-neutral-800 dark:text-neutral-200">
                        Key Highlights:
                      </div>
                      {project.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer with tags and actions */}
                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 space-y-3">
                    <div className="text-xs text-neutral-500 leading-relaxed break-words">
                      {project.tags.join(' · ')}
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live preview of ${project.title} (opens in new tab)`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors min-h-[36px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                          <span>Live Preview</span>
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View source code of ${project.title} on GitHub (opens in new tab)`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors min-h-[36px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                          <Github className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Source Code</span>
                        </a>
                      )}

                      <Link
                        to="/contact"
                        className="w-full sm:w-auto sm:ml-auto pt-1 sm:pt-0 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                      >
                        <span>Inquire Similar Solution</span>
                        <ArrowRight className="w-3 h-3" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Future Projects Callout (Section 19: More projects are on the way) */}
        <div className="mt-12 p-8 rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/20 text-center space-y-3">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 mx-auto">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
            More projects are on the way.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto leading-relaxed">
            We're continuously building and experimenting with new ideas.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              <span>Discuss a new project with Manoj Keer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
