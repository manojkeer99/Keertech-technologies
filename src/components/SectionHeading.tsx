import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  align = 'left',
  className = '',
  as = 'h2',
}) => {
  const HeadingTag = as;
  return (
    <div className={`space-y-3 ${align === 'center' ? 'text-center mx-auto' : ''} ${className}`}>
      {kicker && (
        <div className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400">
          {kicker}
        </div>
      )}
      <HeadingTag className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white max-w-3xl break-words" style={{ textWrap: 'balance' }}>
        {title}
      </HeadingTag>
      {subtitle && (
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed break-words" style={{ textWrap: 'balance' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
