import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { BaseCrudService } from '@/integrations';
import { OfficialGovernmentLinks, HealthHelplines } from '@/entities';

export default function Footer() {
  const [govLinks, setGovLinks] = useState<OfficialGovernmentLinks[]>([]);
  const [helplines, setHelplines] = useState<HealthHelplines[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { items: links } = await BaseCrudService.getAll<OfficialGovernmentLinks>('officialgovernmentlinks');
      const { items: lines } = await BaseCrudService.getAll<HealthHelplines>('healthhelplines');
      
      setGovLinks(links.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0)));
      setHelplines(lines);
    };
    fetchData();
  }, []);

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Environment & Air Health', href: '/environment' },
        { name: 'Mental Wellness', href: '/mental-wellness' },
        { name: 'Health AI Assistant', href: '/ai-assistant' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Dashboards', href: '/dashboards' },
        { name: 'Alerts & Notifications', href: '/alerts' },
        { name: 'Awareness Hub', href: '/awareness' },
        { name: 'About & Impact', href: '/about' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Disclaimer', href: '/disclaimer' },
        { name: 'Accessibility', href: '/accessibility' },
      ],
    },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-background to-primary/5 border-t border-white/10">
      <div className="max-w-[120rem] mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-health-green rounded-lg flex items-center justify-center">
                <span className="text-2xl font-heading font-bold text-secondary-foreground">DC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold text-foreground">Delhi Care Grid</span>
                <span className="text-xs text-foreground/60 font-paragraph">Government of NCT of Delhi</span>
              </div>
            </div>
            <p className="text-sm font-paragraph text-foreground/70 mb-6 leading-relaxed">
              An AI-powered, government-grade preventive health platform for Delhi, aligned with Indian government health, environment, education, and digital missions.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm text-foreground/70">
                <MapPin className="w-4 h-4 mt-1 text-secondary flex-shrink-0" />
                <span className="font-paragraph">Delhi Secretariat, I.P. Estate, New Delhi - 110002</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-foreground/70">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="font-paragraph">support@delhicaregrid.gov.in</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-foreground/70">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="font-paragraph">1800-XXX-XXXX (Toll Free)</span>
              </div>
            </div>
          </div>

          {/* Quick Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-2">
              <h3 className="text-base font-heading font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm font-paragraph text-foreground/70 hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Health Helplines */}
          <div className="lg:col-span-4">
            <h3 className="text-base font-heading font-semibold text-foreground mb-4">Emergency Helplines</h3>
            <div className="space-y-4">
              {helplines.slice(0, 3).map((helpline) => (
                <div key={helpline._id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                  <h4 className="text-sm font-paragraph font-semibold text-foreground mb-1">{helpline.helplineName}</h4>
                  <p className="text-lg font-heading font-bold text-secondary mb-1">{helpline.contactNumber}</p>
                  <p className="text-xs font-paragraph text-foreground/60">{helpline.operatingHours}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Official Government Links */}
        {govLinks.length > 0 && (
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-base font-heading font-semibold text-foreground mb-4">Official Government Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {govLinks.map((link) => (
                <a
                  key={link._id}
                  href={link.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-secondary/50 hover:bg-secondary/5 transition-all group"
                >
                  <div className="flex-1">
                    <h4 className="text-sm font-paragraph font-medium text-foreground group-hover:text-secondary transition-colors">
                      {link.linkTitle}
                    </h4>
                    {link.description && (
                      <p className="text-xs font-paragraph text-foreground/60 mt-1">{link.description}</p>
                    )}
                  </div>
                  <ExternalLink className="w-4 h-4 text-foreground/40 group-hover:text-secondary transition-colors flex-shrink-0 ml-2" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm font-paragraph text-foreground/60 text-center md:text-left">
              © {new Date().getFullYear()} Delhi Care Grid. All rights reserved. Government of NCT of Delhi.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-xs font-paragraph text-foreground/50">Last Updated: {new Date().toLocaleDateString('en-IN')}</span>
              <span className="text-xs font-paragraph text-foreground/50">Version 1.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
