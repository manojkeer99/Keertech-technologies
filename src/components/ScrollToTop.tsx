import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PAGE_TITLES: Record<string, string> = {
  '/': 'KeerTech Technologies | Software & Technology Solutions',
  '/about': 'About KeerTech Technologies | KeerTech',
  '/services': 'Software & Technology Services | KeerTech Technologies',
  '/projects': 'Projects | KeerTech Technologies',
  '/contact': 'Contact KeerTech Technologies | KeerTech',
  '/faq': 'FAQ | KeerTech Technologies',
  '/privacy': 'Privacy Policy | KeerTech Technologies',
  '/terms': 'Terms & Conditions | KeerTech Technologies',
};

const PAGE_DESCRIPTIONS: Record<string, string> = {
  '/': 'KeerTech Technologies is a founder-led software and technology company building websites, web applications, software solutions, AI integrations and digital products.',
  '/about': 'Learn about KeerTech Technologies, founded by Manoj Keer in Rajasthan, India. Founder-led engineering, direct collaboration, and transparent digital delivery.',
  '/services': 'Explore software engineering services by KeerTech Technologies: modern websites, web applications, custom software solutions, and practical AI integrations.',
  '/projects': 'Browse software and web application projects built by KeerTech Technologies across productivity, full-stack tools, and digital solutions.',
  '/contact': 'Contact KeerTech Technologies and founder Manoj Keer to discuss your website, web application, custom software development, or digital project.',
  '/faq': 'Frequently asked questions about KeerTech Technologies, our software development services, project process, pricing, and technical capabilities.',
  '/privacy': 'Privacy policy for KeerTech Technologies detailing our commitment to client confidentiality, data protection, and transparent practices.',
  '/terms': 'Terms and conditions governing the use of the KeerTech Technologies website and software engineering service engagements.',
};

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const title = PAGE_TITLES[pathname] || 'Page Not Found | KeerTech Technologies';
    const description = PAGE_DESCRIPTIONS[pathname] || PAGE_DESCRIPTIONS['/'];

    document.title = title;

    // Dynamically synchronize meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Dynamically synchronize Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    // Dynamically synchronize Twitter card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
      twitterDesc.setAttribute('content', description);
    }

    if (hash) {
      const targetId = hash.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      // On initial page load or direct URL access, wait for DOM nodes to mount
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
