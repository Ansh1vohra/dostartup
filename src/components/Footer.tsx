import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

// TypeScript interfaces for type safety
interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'STARTUP',
    links: [
      { name: 'Fssai & Eating License', href: '/services/fssai-license' },
      { name: 'Business Registration', href: '/services/business-registration' },
      { name: 'Secretarial Compliances', href: '/services/secretarial-compliances' },
      { name: 'IT Services', href: '/services/it-services' },
      { name: 'Government Licenses', href: '/services/govt-licenses' },
      { name: 'Government Registration', href: '/services/govt-registration' },
      { name: 'NGO', href: '/services/ngo' },
      { name: 'ISO', href: '/services/iso' },
    ],
  },
  {
    title: 'TAX',
    links: [
      { name: 'Tax Filing', href: '/services/tax-filing' },
      { name: 'Service Related', href: '/services/service-related' },
      { name: 'Property Related', href: '/services/property-related' },
      { name: 'Legal Services', href: '/services/legal-services' },
      { name: 'Accounting & Book Keeping', href: '/services/accounting' },
      { name: 'Advisory Service', href: '/services/advisory' },
      { name: 'Business Templates', href: '/services/business-templates' },
    ],
  },
  {
    title: 'REGULATORY',
    links: [
      { name: 'Legal Metrology', href: '/services/legal-metrology' },
      { name: 'BIS', href: '/services/bis' },
      { name: 'CDSCO', href: '/services/cdsco' },
      { name: 'IRDA', href: '/services/irda' },
      { name: 'SEBI', href: '/services/sebi' },
      { name: 'RBI', href: '/services/rbi' },
      { name: 'FEMA', href: '/services/fema' },
      { name: 'Telecom', href: '/services/telecom' },
    ],
  },
  {
    title: 'ENVIRONMENTAL',
    links: [
      { name: 'Pollution NOC', href: '/services/pollution-noc' },
      { name: 'E-Waste Management', href: '/services/e-waste' },
      { name: 'Plastic Waste Management', href: '/services/plastic-waste' },
      { name: 'Hazardous Waste Management', href: '/services/hazardous-waste' },
      { name: 'Battery Waste Management', href: '/services/battery-waste' },
      { name: 'Environmental Licensing', href: '/services/environmental-licensing' },
      { name: 'Environmental Advisory', href: '/services/environmental-advisory' },
      { name: 'EIA', href: '/services/eia' },
      { name: 'Environmental Industry', href: '/services/environmental-industry' },
    ],
  },
];

const socialLinks = [
  {
    Icon: FaFacebookF,
    url: 'https://facebook.com/yourpage',
    label: 'Facebook',
  },
  {
    Icon: FaTwitter,
    url: 'https://twitter.com/yourhandle',
    label: 'Twitter',
  },
  {
    Icon: FaInstagram,
    url: 'https://instagram.com/yourprofile',
    label: 'Instagram',
  },
  {
    Icon: FaLinkedinIn,
    url: 'https://linkedin.com/company/yourcompany',
    label: 'LinkedIn',
  },
  {
    Icon: FaYoutube,
    url: 'https://youtube.com/yourchannel',
    label: 'YouTube',
  },
];

const bottomLinks = [
  { text: 'About Us', href: '/about' },
  { text: 'Pay Now', href: '/pay' },
  { text: 'Learning', href: '/learning' },
  { text: 'Privacy Policy', href: '/privacy' },
  { text: 'Refund Policy', href: '/refund' },
  { text: 'Terms & Conditions', href: '/terms' },
  { text: 'Sitemap', href: '/sitemap' },
  { text: 'Contact Us', href: '/contact' },
];

const policyLinks = [
  { text: 'Terms & Conditions', href: '/terms' },
  { text: 'Privacy Policy', href: '/privacy' },
  { text: 'Refund Policy', href: '/refund' },
  { text: 'Confidentiality Policy', href: '/confidentiality' },
  { text: 'Disclaimer', href: '/disclaimer' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-bold text-orange-500 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-10"></div>

        {/* Social and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map(({ Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {bottomLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm font-medium"
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Policies and Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <div className="mb-4">
            By continuing past this page, you agree to our{' '}
            {policyLinks.map((policy, idx) => (
              <span key={policy.text}>
                <a
                  href={policy.href}
                  className="text-orange-400 hover:underline"
                >
                  {policy.text}
                </a>
                {idx < policyLinks.length - 1 && ', '}
              </span>
            ))}
          </div>
          <p>© {new Date().getFullYear()} DoStartup Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;