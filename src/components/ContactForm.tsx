import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, ArrowRight, Copy, Check, Mail, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  description: string;
  preferredMethod: 'Email' | 'WhatsApp' | 'Phone';
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: siteConfig.services[0]?.title || 'Website Development',
    budget: 'Flexible / To Be Discussed',
    description: '',
    preferredMethod: 'Email',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isValidated, setIsValidated] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const contactEmail = (siteConfig.contact.email || '').trim();
  const rawWhatsApp = (siteConfig.contact.whatsapp || siteConfig.contact.whatsappNumber || '').trim();
  const cleanWhatsApp = rawWhatsApp.replace(/[^0-9]/g, '');

  const mailtoUrl = contactEmail
    ? `mailto:${contactEmail}?subject=${encodeURIComponent(`Project Inquiry: ${formData.service} - ${formData.name}`)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nCompany: ${formData.company || 'N/A'}\nService: ${formData.service}\nBudget: ${formData.budget}\nPreferred Method: ${formData.preferredMethod}\n\nProject Scope:\n${formData.description}`
      )}`
    : '';

  const whatsappUrl = cleanWhatsApp
    ? `https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
        `Hello Manoj Keer, I would like to discuss a project with KeerTech:\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nScope: ${formData.description}`
      )}`
    : '';

  const handleCopySummary = () => {
    const summary = `Project Inquiry for KeerTech Technologies\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nCompany: ${formData.company || 'N/A'}\nService: ${formData.service}\nBudget: ${formData.budget}\nScope: ${formData.description}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedDescription = formData.description.trim();

    if (!trimmedName) {
      errs.name = 'Please enter your name.';
    } else if (trimmedName.length < 2) {
      errs.name = 'Please enter at least 2 characters.';
    }

    if (!trimmedEmail) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.service.trim()) {
      errs.service = 'Please select a service.';
    }

    if (!trimmedDescription) {
      errs.description = 'Please tell us a little about your project.';
    } else if (trimmedDescription.length < 10) {
      errs.description = 'Please provide a little more detail (at least 10 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setIsValidated(false);
      setFormError('Please check the highlighted fields and complete the required information.');
      return;
    }
    setFormError(null);
    setIsValidated(true);
  };

  const handleInputChange = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    if (formError) {
      setFormError(null);
    }
    if (isValidated) {
      setIsValidated(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-5 sm:p-8 space-y-5 shadow-sm"
    >
      {formError && (
        <div
          role="alert"
          aria-live="assertive"
          className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2"
        >
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" aria-hidden="true" />
          <span>{formError}</span>
        </div>
      )}

      {/* Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5"
          >
            Full Name <span className="text-rose-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            autoCapitalize="words"
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-neutral-50/50 dark:bg-neutral-950/50 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
              errors.name
                ? 'border-rose-500 dark:border-rose-500'
                : 'border-neutral-200 dark:border-neutral-800'
            }`}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" /> {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5"
          >
            Email Address <span className="text-rose-500" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            autoCapitalize="none"
            spellCheck={false}
            placeholder="yourname@domain.com"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-neutral-50/50 dark:bg-neutral-950/50 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
              errors.email
                ? 'border-rose-500 dark:border-rose-500'
                : 'border-neutral-200 dark:border-neutral-800'
            }`}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" /> {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Phone / WhatsApp & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5"
          >
            Phone / WhatsApp Number <span className="text-neutral-400">(Optional)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="Your phone or WhatsApp number"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="contact-company"
            className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5"
          >
            Company / Organization <span className="text-neutral-400">(Optional)</span>
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company or personal project"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Service Selection and Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-service"
            className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5"
          >
            Primary Service Needed <span className="text-rose-500" aria-hidden="true">*</span>
          </label>
          <select
            id="contact-service"
            name="service"
            value={formData.service}
            onChange={(e) => handleInputChange('service', e.target.value)}
            aria-invalid={errors.service ? 'true' : 'false'}
            aria-describedby={errors.service ? 'service-error' : undefined}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            {siteConfig.services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" role="alert" className="mt-1 text-xs text-rose-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" /> {errors.service}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-budget"
            className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5"
          >
            Project Engagement Scope <span className="text-neutral-400">(Optional)</span>
          </label>
          <select
            id="contact-budget"
            name="budget"
            value={formData.budget}
            onChange={(e) => handleInputChange('budget', e.target.value)}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          >
            <option value="Flexible / To Be Discussed">Flexible / To Be Discussed</option>
            <option value="Starter (Personal / Simple Site)">Starter (Personal / Simple Site)</option>
            <option value="Business (Web App / Custom Features)">Business (Web App / Custom Features)</option>
            <option value="Custom (Software / AI / Automation)">Custom (Software / AI / Automation)</option>
            <option value="Ongoing Technical Support & Maintenance">Ongoing Support / Retainer</option>
          </select>
        </div>
      </div>

      {/* Preferred Contact Method */}
      <div>
        <label id="preferred-method-label" className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
          Preferred Contact Method
        </label>
        <div role="radiogroup" aria-labelledby="preferred-method-label" className="grid grid-cols-3 gap-1.5 sm:gap-2">
          {(['Email', 'WhatsApp', 'Phone'] as const).map((method) => (
            <button
              type="button"
              role="radio"
              aria-checked={formData.preferredMethod === method}
              key={method}
              onClick={() => handleInputChange('preferredMethod', method)}
              className={`py-2 px-1 sm:px-3 text-[11px] sm:text-xs font-medium rounded-lg border transition-colors min-h-[38px] flex items-center justify-center truncate ${
                formData.preferredMethod === method
                  ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-500 text-blue-600 dark:text-blue-400 font-semibold'
                  : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/50 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              {method}
            </button>
          ))}
        </div>
      </div>

      {/* Project Description */}
      <div>
        <label
          htmlFor="contact-description"
          className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1.5"
        >
          Project Description & Scope <span className="text-rose-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-description"
          name="description"
          rows={4}
          required
          placeholder="Briefly describe what you're trying to build, key features required, any existing designs, or timeline goals..."
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          aria-invalid={errors.description ? 'true' : 'false'}
          aria-describedby={errors.description ? 'description-error' : undefined}
          className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-neutral-50/50 dark:bg-neutral-950/50 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
            errors.description
              ? 'border-rose-500 dark:border-rose-500'
              : 'border-neutral-200 dark:border-neutral-800'
          }`}
        />
        {errors.description && (
          <p id="description-error" role="alert" className="mt-1 text-xs text-rose-500 flex items-center gap-1">
            <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" /> {errors.description}
          </p>
        )}
      </div>

      {/* Honest Validation Notification (Frontend-Only) */}
      {isValidated && (
        <div
          role="status"
          aria-live="polite"
          className="p-4 sm:p-5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 text-neutral-800 dark:text-neutral-200 space-y-3"
        >
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                Inquiry Requirements Validated
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Your project details have been checked. Live database transmission services are currently disconnected on this frontend-only build. You can copy your prepared project brief below or reach out directly to Manoj Keer.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            {mailtoUrl && (
              <a
                href={mailtoUrl}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs min-h-[38px] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Send via Email App</span>
              </a>
            )}

            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs min-h-[38px] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Send via WhatsApp</span>
              </a>
            )}

            <button
              type="button"
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white shadow-2xs min-h-[38px] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Copy Prepared Brief</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm transition-colors shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 min-h-[44px]"
        >
          <span>Validate Inquiry Details</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <p className="text-[11px] text-center text-neutral-500 dark:text-neutral-400 mt-2">
          Direct review by founder Manoj Keer. No spam, no automated sales calls.
        </p>
      </div>
    </form>
  );
};
