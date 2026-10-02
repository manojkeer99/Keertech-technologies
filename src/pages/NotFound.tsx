import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, ArrowLeft } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto text-2xl font-mono font-bold">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight break-words">
            Page Not Found
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed break-words">
            The page you are looking for does not exist, has been removed, or has been relocated to another address.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full sm:w-auto">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors shadow-xs w-full sm:w-auto min-h-[42px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 font-medium text-xs hover:text-neutral-900 dark:hover:text-white transition-colors w-full sm:w-auto min-h-[42px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <Compass className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Explore Projects</span>
          </Link>
        </div>

        <div className="pt-4">
          <Link
            to="/contact"
            className="text-xs text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
          >
            <ArrowLeft className="w-3 h-3" aria-hidden="true" /> Report a broken link or ask for help
          </Link>
        </div>
      </div>
    </div>
  );
};
