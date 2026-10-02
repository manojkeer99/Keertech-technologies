import React, { useState } from 'react';
import { Code2, Cpu, Layers, CheckCircle2, Terminal } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'code' | 'stack'>('architecture');

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-cyan-500/20 rounded-2xl blur-xl opacity-75 dark:opacity-50 pointer-events-none" />

      {/* Main Container Card */}
      <div className="relative rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden transition-all duration-200">
        {/* Window Chrome Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-950/60">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
              keertech-core.engine
            </span>
          </div>

          {/* Interactive Mode Tabs */}
          <div role="tablist" aria-label="Engine Views" className="flex items-center gap-1 bg-neutral-200/60 dark:bg-neutral-800/60 p-0.5 rounded-md text-xs">
            <button
              type="button"
              role="tab"
              id="tab-architecture"
              aria-selected={activeTab === 'architecture'}
              aria-controls="panel-architecture"
              onClick={() => setActiveTab('architecture')}
              className={`px-2.5 py-1 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                activeTab === 'architecture'
                  ? 'bg-white dark:bg-neutral-900 text-blue-600 dark:text-blue-400 font-medium shadow-2xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              System
            </button>
            <button
              type="button"
              role="tab"
              id="tab-code"
              aria-selected={activeTab === 'code'}
              aria-controls="panel-code"
              onClick={() => setActiveTab('code')}
              className={`px-2.5 py-1 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                activeTab === 'code'
                  ? 'bg-white dark:bg-neutral-900 text-blue-600 dark:text-blue-400 font-medium shadow-2xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Code
            </button>
            <button
              type="button"
              role="tab"
              id="tab-stack"
              aria-selected={activeTab === 'stack'}
              aria-controls="panel-stack"
              onClick={() => setActiveTab('stack')}
              className={`px-2.5 py-1 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                activeTab === 'stack'
                  ? 'bg-white dark:bg-neutral-900 text-blue-600 dark:text-blue-400 font-medium shadow-2xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              Stack
            </button>
          </div>
        </div>

        {/* Tab 1: System Architecture View */}
        {activeTab === 'architecture' && (
          <div
            role="tabpanel"
            id="panel-architecture"
            aria-labelledby="tab-architecture"
            tabIndex={0}
            className="p-4 sm:p-6 space-y-4 sm:space-y-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-b-2xl"
          >
            {/* Top Stat Row */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
              <div className="p-2 sm:p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950/70 border border-neutral-100 dark:border-neutral-800/80 min-w-0">
                <div className="text-[10px] sm:text-[11px] font-medium text-neutral-500 dark:text-neutral-400 truncate">
                  Performance
                </div>
                <div className="text-base sm:text-lg font-bold font-mono text-neutral-900 dark:text-white mt-0.5">
                  100<span className="text-[11px] sm:text-xs text-blue-500 font-sans font-normal">/100</span>
                </div>
                <div className="text-[9px] sm:text-[10px] text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1 truncate">
                  <CheckCircle2 className="w-3 h-3 shrink-0" /> <span className="truncate">Core Web Vitals</span>
                </div>
              </div>

              <div className="p-2 sm:p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950/70 border border-neutral-100 dark:border-neutral-800/80 min-w-0">
                <div className="text-[10px] sm:text-[11px] font-medium text-neutral-500 dark:text-neutral-400 truncate">
                  Architecture
                </div>
                <div className="text-base sm:text-lg font-bold font-mono text-neutral-900 dark:text-white mt-0.5 truncate">
                  TypeScript
                </div>
                <div className="text-[9px] sm:text-[10px] text-blue-600 dark:text-blue-400 mt-1 truncate">
                  Strict Type Safety
                </div>
              </div>

              <div className="p-2 sm:p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950/70 border border-neutral-100 dark:border-neutral-800/80 min-w-0">
                <div className="text-[10px] sm:text-[11px] font-medium text-neutral-500 dark:text-neutral-400 truncate">
                  Deployment
                </div>
                <div className="text-base sm:text-lg font-bold font-mono text-neutral-900 dark:text-white mt-0.5 truncate">
                  Edge Cloud
                </div>
                <div className="text-[9px] sm:text-[10px] text-neutral-500 dark:text-neutral-400 mt-1 truncate">
                  Global CDN
                </div>
              </div>
            </div>

            {/* Interactive Flow Diagram */}
            <div className="space-y-2 sm:space-y-2.5">
              <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Delivery Pipeline
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/60 gap-2">
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                    <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span className="font-medium text-neutral-800 dark:text-neutral-200 truncate sm:text-clip">
                      Discovery & Technical Blueprint
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 shrink-0">Ready</span>
                </div>

                <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/60 gap-2">
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                    <Code2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span className="font-medium text-neutral-800 dark:text-neutral-200 truncate sm:text-clip">
                      Modular Full-Stack Development
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 shrink-0">Automated</span>
                </div>

                <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/60 gap-2">
                  <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                    <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span className="font-medium text-neutral-800 dark:text-neutral-200 truncate sm:text-clip">
                      AI Workflow & API Grounding
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500 shrink-0">Connected</span>
                </div>
              </div>
            </div>

            {/* Bottom Status Ribbon */}
            <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Active Engineering</span>
              </span>
              <span className="font-mono text-[11px]">KeerTech Systems v1</span>
            </div>
          </div>
        )}

        {/* Tab 2: Clean Code View */}
        {activeTab === 'code' && (
          <div
            role="tabpanel"
            id="panel-code"
            aria-labelledby="tab-code"
            tabIndex={0}
            className="p-3.5 sm:p-5 font-mono text-xs overflow-x-auto bg-neutral-950 text-neutral-300 space-y-1.5 leading-relaxed focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-b-2xl"
          >
            <div className="text-neutral-500">// KeerTech Digital Solution Schema</div>
            <div>
              <span className="text-blue-400">export interface</span>{' '}
              <span className="text-amber-300">SolutionArchitecture</span> {'{'}
            </div>
            <div className="pl-4">
              <span className="text-cyan-300">founder</span>: <span className="text-emerald-300">'Manoj Keer'</span>;
            </div>
            <div className="pl-4">
              <span className="text-cyan-300">headquarters</span>: <span className="text-emerald-300">'Rajasthan, India'</span>;
            </div>
            <div className="pl-4">
              <span className="text-cyan-300">standards</span>: {'['}
              <span className="text-emerald-300">'Zero Bloat'</span>,{' '}
              <span className="text-emerald-300">'Accessible'</span>,{' '}
              <span className="text-emerald-300">'Type-Safe'</span>{']'};
            </div>
            <div className="pl-4">
              <span className="text-cyan-300">deliverables</span>: {'['}
            </div>
            <div className="pl-8">
              <span className="text-emerald-300">'Modern Websites'</span>,
            </div>
            <div className="pl-8">
              <span className="text-emerald-300">'Interactive Web Apps'</span>,
            </div>
            <div className="pl-8">
              <span className="text-emerald-300">'AI & Process Automation'</span>
            </div>
            <div className="pl-4">{']'};</div>
            <div>{'}'}</div>
            <div className="pt-2 text-neutral-500">// Ready for production deployment</div>
          </div>
        )}

        {/* Tab 3: Technology Stack */}
        {activeTab === 'stack' && (
          <div
            role="tabpanel"
            id="panel-stack"
            aria-labelledby="tab-stack"
            tabIndex={0}
            className="p-5 sm:p-6 space-y-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-b-2xl"
          >
            <div className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Curated, production-tested technology stacks implemented according to exact client project requirements.
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <div className="font-semibold text-neutral-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-500" />
                  Frontend & Architecture
                </div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  React · TypeScript · Tailwind CSS · Vite · Next.js ready
                </div>
              </div>

              <div>
                <div className="font-semibold text-neutral-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-500" />
                  Backend & Database
                </div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  Node.js · Express · Python · PostgreSQL · REST APIs
                </div>
              </div>

              <div>
                <div className="font-semibold text-neutral-900 dark:text-white mb-1.5 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-500" />
                  AI & Automation
                </div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  Google Gemini APIs · Automated Data Pipelines · Webhooks
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
