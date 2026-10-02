import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Normalize WhatsApp number from siteConfig
  const rawNumber = (siteConfig.contact.whatsapp || siteConfig.contact.whatsappNumber || '').trim();

  // If the WhatsApp number is currently empty or unconfigured, hide the button gracefully
  if (!rawNumber) {
    return null;
  }

  // Strip non-digit characters for a valid wa.me URL
  const cleanNumber = rawNumber.replace(/[^0-9]/g, '');
  if (!cleanNumber) {
    return null;
  }

  const encodedMessage = encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage || 'Hello KeerTech, I would like to discuss a project.'
  );
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

  return (
    <div
      style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))' }}
      className="fixed right-4 sm:bottom-6 sm:right-6 z-40 flex items-end flex-col gap-2"
    >
      {/* Tooltip on hover or mobile tap */}
      {showTooltip && (
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs px-3 py-2 rounded-lg shadow-lg mb-1 max-w-[calc(100vw-2.5rem)] sm:max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-150 flex items-center justify-between gap-2">
          <span>Chat directly with KeerTech on WhatsApp</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Close WhatsApp chat prompt"
            className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 shrink-0 p-1 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <X className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        aria-label="Chat with KeerTech on WhatsApp (opens in new tab)"
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white flex items-center justify-center shadow-lg hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-emerald-600" aria-hidden="true" />
      </a>
    </div>
  );
};
