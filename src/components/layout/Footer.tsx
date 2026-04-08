import React from 'react';
import { Link } from 'react-router-dom';
import { VXRTLogo } from '../shared/VXRTLogo';
import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';
export function Footer() {
  const productLinks = [
  {
    name: 'Compute',
    href: '/product/compute'
  },
  {
    name: 'VPS',
    href: '/product/vps'
  },
  {
    name: 'Kubernetes',
    href: '/product/kubernetes'
  },
  {
    name: 'Storage',
    href: '/product/block-storage'
  }];

  const serviceLinks = [
  {
    name: 'Penetration Testing',
    href: '/services/penetration-testing'
  },
  {
    name: 'Red Teaming',
    href: '/services/red-teaming'
  },
  {
    name: 'Exploit Development',
    href: '/services/exploit-development'
  },
  {
    name: 'Purple Teaming',
    href: '/services/purple-teaming'
  }];

  const resourceLinks = [
  {
    name: 'Research Papers',
    href: '/resources#papers'
  },
  {
    name: 'CVE Database',
    href: '/resources#cve'
  },
  {
    name: 'Security Blog',
    href: '/resources#blog'
  },
  {
    name: 'Tools & Scripts',
    href: '/resources#tools'
  }];

  const companyLinks = [
  {
    name: 'Team',
    href: '/team'
  },
  {
    name: 'Community',
    href: '/community'
  },
  {
    name: 'Solutions',
    href: '/solutions'
  },
  {
    name: 'Contact',
    href: '/contact'
  }];

  return (
    <footer className="border-t border-steel-gray bg-void-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <VXRTLogo size="md" showWordmark className="mb-4" />
            <p className="text-muted-gray font-body text-sm mb-4">
              Exploit everything. Leave nothing.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-gray hover:text-exploit-red transition-colors">
                
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-gray hover:text-exploit-red transition-colors">
                
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-gray hover:text-exploit-red transition-colors">
                
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-gray hover:text-exploit-red transition-colors">
                
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading font-semibold text-ghost-white mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              {productLinks.map((link) =>
              <li key={link.name}>
                  <Link
                  to={link.href}
                  className="text-sm text-muted-gray hover:text-exploit-red transition-colors font-body">
                  
                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-ghost-white mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) =>
              <li key={link.name}>
                  <Link
                  to={link.href}
                  className="text-sm text-muted-gray hover:text-exploit-red transition-colors font-body">
                  
                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold text-ghost-white mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) =>
              <li key={link.name}>
                  <Link
                  to={link.href}
                  className="text-sm text-muted-gray hover:text-exploit-red transition-colors font-body">
                  
                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-ghost-white mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) =>
              <li key={link.name}>
                  <Link
                  to={link.href}
                  className="text-sm text-muted-gray hover:text-exploit-red transition-colors font-body">
                  
                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-steel-gray">
          <p className="text-sm text-muted-gray text-center font-body">
            © {new Date().getFullYear()} VXRT Offensive Security. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>);

}