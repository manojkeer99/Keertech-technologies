import React from 'react';
import { CheckCircle2, Clock, Flame, Calendar, MapPin, Compass, ShieldCheck, Terminal } from 'lucide-react';

interface ProjectMockupProps {
  projectId: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ projectId }) => {
  switch (projectId) {
    case 'studyrise':
      return (
        <div className="w-full h-full bg-neutral-900 text-neutral-100 p-4 sm:p-5 flex flex-col justify-between select-none">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-blue-400 tracking-tight">StudyRise</span>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-400">Student Dashboard</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded text-[11px] font-mono">
              <Flame className="w-3.5 h-3.5" />
              <span>Habit Tracker</span>
            </div>
          </div>

          {/* Center Content */}
          <div className="grid grid-cols-2 gap-3 my-3">
            {/* Focus Session Box */}
            <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800 flex flex-col justify-between">
              <div className="flex items-center justify-between text-[11px] text-neutral-400">
                <span>Focus Session</span>
                <Clock className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <div className="text-2xl font-mono font-bold text-white my-1">
                25:00
              </div>
              <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Core Algorithms
              </div>
            </div>

            {/* Daily Tasks */}
            <div className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800 space-y-1.5 text-[11px]">
              <div className="text-neutral-400 font-medium">Daily Goals</div>
              <div className="flex items-center gap-1.5 text-neutral-200">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                <span className="line-through text-neutral-500">Data Structures Review</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-200">
                <div className="w-3 h-3 rounded-full border border-blue-500" />
                <span>Operating Systems Module</span>
              </div>
            </div>
          </div>

          {/* Bottom Progress */}
          <div className="border-t border-neutral-800/80 pt-2 flex items-center justify-between text-[11px] text-neutral-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-neutral-500" /> Semester Study Goals
            </span>
            <span className="text-blue-400 font-mono text-[11px]">In Progress</span>
          </div>
        </div>
      );

    case 'sih-hackathon':
      return (
        <div className="w-full h-full bg-neutral-900 text-neutral-100 p-4 sm:p-5 flex flex-col justify-between select-none">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-indigo-400 tracking-tight">SIH Project</span>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-400">Hackathon Prototype</span>
            </div>
            <div className="flex items-center gap-1 text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Prototype Build</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 my-3 text-center">
            <div className="p-2.5 rounded bg-neutral-950/80 border border-neutral-800">
              <div className="text-[10px] text-neutral-400">Workflow</div>
              <div className="text-xs font-mono font-bold text-white mt-1">Structured</div>
              <div className="text-[9px] text-emerald-400 mt-0.5">Forms & Data</div>
            </div>
            <div className="p-2.5 rounded bg-neutral-950/80 border border-neutral-800">
              <div className="text-[10px] text-neutral-400">Access</div>
              <div className="text-xs font-mono font-bold text-white mt-1">Role-Based</div>
              <div className="text-[9px] text-blue-400 mt-0.5">Admin & User</div>
            </div>
            <div className="p-2.5 rounded bg-neutral-950/80 border border-neutral-800">
              <div className="text-[10px] text-neutral-400">Design</div>
              <div className="text-xs font-mono font-bold text-white mt-1">Modular</div>
              <div className="text-[9px] text-indigo-400 mt-0.5">Responsive</div>
            </div>
          </div>

          <div className="border-t border-neutral-800/80 pt-2 flex items-center justify-between text-[11px] text-neutral-400">
            <span className="flex items-center gap-1 text-indigo-300">
              <ShieldCheck className="w-3.5 h-3.5" /> Problem Solving Case Study
            </span>
            <span className="font-mono text-[10px]">Smart India Hackathon</span>
          </div>
        </div>
      );

    case 'travel-experience':
      return (
        <div className="w-full h-full bg-neutral-900 text-neutral-100 p-4 sm:p-5 flex flex-col justify-between select-none">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-cyan-400 tracking-tight">Travel Explorer</span>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-400">Trip Planner</span>
            </div>
            <div className="flex items-center gap-1 text-cyan-400 text-[11px]">
              <Compass className="w-3.5 h-3.5 animate-spin duration-3000" />
              <span>Rajasthan Circuit</span>
            </div>
          </div>

          <div className="space-y-2 my-2.5 text-xs">
            <div className="p-2 rounded bg-neutral-950/80 border border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span className="font-medium">Jaipur · Heritage City</span>
              </div>
              <span className="text-[11px] text-neutral-400">Day 1–2</span>
            </div>

            <div className="p-2 rounded bg-neutral-950/80 border border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                <span className="font-medium">Udaipur · Lake City</span>
              </div>
              <span className="text-[11px] text-neutral-400">Day 3–4</span>
            </div>
          </div>

          <div className="border-t border-neutral-800/80 pt-2 flex items-center justify-between text-[11px] text-neutral-400">
            <span>Dynamic Itinerary & Route Maps</span>
            <span className="text-cyan-400 font-mono">Synced</span>
          </div>
        </div>
      );

    case 'developer-portfolio':
    default:
      return (
        <div className="w-full h-full bg-neutral-900 text-neutral-100 p-4 sm:p-5 flex flex-col justify-between select-none font-mono">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3 text-xs">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-bold text-white tracking-tight">developer.portfolio</span>
            </div>
            <div className="text-[11px] text-emerald-400 font-sans">
              Web Standards
            </div>
          </div>

          <div className="p-3 my-2.5 rounded bg-neutral-950 border border-neutral-800 text-[11px] text-neutral-300 space-y-1">
            <div className="text-blue-400">const developer = {'{'}</div>
            <div className="pl-4">name: <span className="text-emerald-400">'Manoj Keer'</span>,</div>
            <div className="pl-4">role: <span className="text-emerald-400">'Software Developer'</span>,</div>
            <div className="pl-4">focus: <span className="text-emerald-400">'Web & Digital Solutions'</span></div>
            <div className="text-blue-400">{'}'};</div>
          </div>

          <div className="border-t border-neutral-800/80 pt-2 flex items-center justify-between text-[11px] text-neutral-400 font-sans">
            <span>Responsive & Type-Safe</span>
            <span className="font-mono text-neutral-400 text-[10px]">Semantic Architecture</span>
          </div>
        </div>
      );
  }
};
