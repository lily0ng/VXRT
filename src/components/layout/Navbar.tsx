import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { VXRTLogo } from '../shared/VXRTLogo';
import {
  Server,
  Network,
  HardDrive,
  Cpu,
  Database,
  Shield,
  Target,
  AlertTriangle,
  CloudLightning,
  TerminalSquare,
  Users,
  FileText,
  Bug,
  BookOpen,
  Wrench,
  MessageSquare,
  Trophy,
  Mail,
  ChevronDown,
  Menu,
  X,
  Zap,
  Globe,
  Layers,
  Smartphone,
  Siren,
  ClipboardCheck } from
'lucide-react';
// Dropdown Content Components
const ProductDropdown = () =>
<div className="w-[700px] p-6 grid grid-cols-2 gap-4">
    {[
  {
    icon: <Cpu size={20} />,
    title: 'Compute',
    desc: 'High-performance bare metal'
  },
  {
    icon: <Server size={20} />,
    title: 'VPS',
    desc: 'Scalable virtual instances'
  },
  {
    icon: <Network size={20} />,
    title: 'Load Balancer',
    desc: 'Global traffic distribution'
  },
  {
    icon: <Database size={20} />,
    title: 'Kubernetes',
    desc: 'Managed orchestration'
  },
  {
    icon: <HardDrive size={20} />,
    title: 'Block Storage',
    desc: 'NVMe attached storage'
  },
  {
    icon: <CloudLightning size={20} />,
    title: 'Auto Scaling',
    desc: 'Dynamic resource allocation'
  },
  {
    icon: <Network size={20} />,
    title: 'DNS Management',
    desc: 'Global Anycast network'
  },
  {
    icon: <Database size={20} />,
    title: 'Object Storage',
    desc: 'S3-compatible storage'
  },
  {
    icon: <Zap size={20} />,
    title: 'Bare Metal',
    desc: 'Dedicated physical servers'
  },
  {
    icon: <Database size={20} />,
    title: 'Database',
    desc: 'Managed PostgreSQL, MySQL, Redis'
  },
  {
    icon: <Globe size={20} />,
    title: 'CDN',
    desc: 'Global content delivery'
  },
  {
    icon: <Layers size={20} />,
    title: 'Message Queue',
    desc: 'Kafka, RabbitMQ, Redis Streams'
  }].
  map((item, idx) =>
  <Link
    to={`/product/${item.title.toLowerCase().replace(' ', '-')}`}
    key={idx}
    className="group flex items-start gap-3 p-3 rounded-md transition-all duration-200 hover:bg-accent border-l-4 border-transparent hover:border-exploit-red">

        <div className="text-muted-text group-hover:text-ghost-white transition-colors mt-1">
          {item.icon}
        </div>
        <div>
          <h4 className="text-sm font-bold text-ghost-white mb-1">
            {item.title}
          </h4>
          <p className="text-xs text-muted-text">{item.desc}</p>
        </div>
      </Link>
  )}
  </div>;

const ServicesDropdown = () =>
<div className="w-[800px] p-6">
    <h3 className="text-xs font-heading font-bold text-muted-text uppercase tracking-widest mb-4 pb-2 border-b border-border">
      Offensive Security Services
    </h3>
    <div className="grid grid-cols-2 gap-4 mb-6">
      {[
    {
      icon: <Shield size={20} />,
      title: 'Penetration Testing',
      desc: 'Web, API, Net, Mobile, Cloud'
    },
    {
      icon: <Target size={20} />,
      title: 'Red Teaming',
      desc: 'Full adversary simulation'
    },
    {
      icon: <AlertTriangle size={20} />,
      title: 'Vulnerability Assessment',
      desc: 'Risk scoring & triage'
    },
    {
      icon: <CloudLightning size={20} />,
      title: 'Cloud Penetration Testing',
      desc: 'AWS/Azure/GCP full scope'
    },
    {
      icon: <TerminalSquare size={20} />,
      title: 'Exploit Development',
      desc: '0-day & CVE development'
    },
    {
      icon: <Users size={20} />,
      title: 'Purple Teaming',
      desc: 'Offensive-focused collaboration'
    },
    {
      icon: <Globe size={20} />,
      title: 'Web App Testing',
      desc: 'OWASP Top 10 assessment'
    },
    {
      icon: <Smartphone size={20} />,
      title: 'Mobile App Testing',
      desc: 'iOS & Android security'
    },
    {
      icon: <Siren size={20} />,
      title: 'Incident Response',
      desc: '24/7 emergency response'
    },
    {
      icon: <ClipboardCheck size={20} />,
      title: 'Security Audit',
      desc: 'Compliance assessments'
    }].
    map((item, idx) =>
    <Link
      to={`/services/${item.title.toLowerCase().replace(/ /g, '-')}`}
      key={idx}
      className="group flex items-start gap-3 p-3 rounded-md transition-all duration-200 hover:bg-accent border-l-4 border-transparent hover:border-exploit-red">

          <div className="text-muted-text group-hover:text-exploit-red transition-colors mt-1">
            {item.icon}
          </div>
          <div>
            <h4 className="text-sm font-bold text-ghost-white mb-1">
              {item.title}
            </h4>
            <p className="text-xs text-muted-text">{item.desc}</p>
          </div>
        </Link>
    )}
    </div>
    <div className="flex justify-between items-center pt-4 border-t border-border">
      <Link
      to="/services"
      className="text-sm text-muted-text hover:text-ghost-white transition-colors">

        → View all services
      </Link>
      <Link
      to="/contact"
      className="text-sm text-exploit-red hover:text-white transition-colors font-medium">

        → Book assessment
      </Link>
    </div>
  </div>;

const ResourcesDropdown = () =>
<div className="w-[500px] p-6 grid grid-cols-2 gap-4">
    {[
  {
    icon: <FileText size={20} />,
    title: 'Research Papers',
    badge: '142 papers'
  },
  {
    icon: <Database size={20} />,
    title: 'CVE Database',
    badge: '500+ entries'
  },
  {
    icon: <AlertTriangle size={20} />,
    title: 'Zero-Day Reports',
    badge: '28 active'
  },
  {
    icon: <BookOpen size={20} />,
    title: 'PDF Library',
    badge: '85 docs'
  },
  {
    icon: <FileText size={20} />,
    title: 'Security Blog',
    badge: '200+ posts'
  },
  {
    icon: <Wrench size={20} />,
    title: 'Tools & Scripts',
    badge: '45 tools'
  }].
  map((item, idx) =>
  <Link
    to="/resources"
    key={idx}
    className="group flex items-center gap-3 p-3 rounded-md transition-all duration-200 hover:bg-accent border-l-4 border-transparent hover:border-exploit-red">
    
        <div className="text-muted-text group-hover:text-ghost-white transition-colors">
          {item.icon}
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-bold text-ghost-white">{item.title}</h4>
        </div>
        <span className="text-[10px] py-0.5 px-2 bg-dark-base rounded-full text-muted-text border border-border group-hover:border-steel-gray">
          {item.badge}
        </span>
      </Link>
  )}
  </div>;

const CommunityDropdown = () =>
<div className="w-[600px] p-6 grid grid-cols-2 gap-6">
    <div className="col-span-2">
      <Link
      to="/community"
      className="block p-4 rounded-lg bg-[#5865F2]/10 border border-[#5865F2]/30 hover:border-[#5865F2]/60 transition-colors group">
      
        <div className="flex items-center gap-3 mb-2">
          <MessageSquare size={24} className="text-[#5865F2]" />
          <h4 className="text-base font-bold text-ghost-white">
            Discord Server
          </h4>
        </div>
        <p className="text-sm text-muted-text mb-3">
          Join our active community of security researchers, red teamers, and
          engineers.
        </p>
        <span className="inline-block text-xs font-medium text-[#5865F2] bg-[#5865F2]/20 px-2 py-1 rounded">
          Join 10K+ members
        </span>
      </Link>
    </div>
    {[
  {
    icon: <MessageSquare size={20} />,
    title: 'Forums'
  },
  {
    icon: <Trophy size={20} />,
    title: 'CTF Events'
  },
  {
    icon: <Bug size={20} />,
    title: 'Bug Bounty Tips'
  },
  {
    icon: <Users size={20} />,
    title: 'Research Groups'
  },
  {
    icon: <Mail size={20} />,
    title: 'Newsletter'
  }].
  map((item, idx) =>
  <Link
    to="/community"
    key={idx}
    className="group flex items-center gap-3 p-2 rounded-md transition-all duration-200 hover:text-ghost-white text-muted-text">
    
        <div className="group-hover:text-exploit-red transition-colors">
          {item.icon}
        </div>
        <span className="text-sm font-medium">{item.title}</span>
      </Link>
  )}
  </div>;

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
  {
    name: 'Product',
    hasDropdown: true,
    dropdown: <ProductDropdown />
  },
  {
    name: 'Services',
    hasDropdown: true,
    dropdown: <ServicesDropdown />
  },
  {
    name: 'Team',
    path: '/team'
  },
  {
    name: 'Resource Center',
    hasDropdown: true,
    dropdown: <ResourcesDropdown />
  },
  {
    name: 'Community',
    hasDropdown: true,
    dropdown: <CommunityDropdown />
  },
  {
    name: 'Solutions',
    path: '/solutions'
  },
  {
    name: 'Pricing',
    path: '/pricing'
  },
  {
    name: 'Contact Us',
    path: '/contact'
  }];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-14 bg-void-black/85 backdrop-blur-[12px] border-b border-border z-50 flex items-center justify-between px-6">
        <Link to="/" className="flex-shrink-0">
          <VXRTLogo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 h-full">
          {navItems.map((item) =>
          <div
            key={item.name}
            className="relative h-full flex items-center"
            onMouseEnter={() =>
            item.hasDropdown && setActiveDropdown(item.name)
            }
            onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}>
            
              {item.path ?
            <Link
              to={item.path}
              className="text-sm font-medium text-muted-text hover:text-ghost-white transition-colors">
              
                  {item.name}
                </Link> :

            <button
              className={`text-sm font-medium flex items-center gap-1 transition-colors ${activeDropdown === item.name ? 'text-ghost-white' : 'text-muted-text hover:text-ghost-white'}`}>
              
                  {item.name}
                  <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
              
                </button>
            }

              {/* Dropdown Panel */}
              {item.hasDropdown &&
            <AnimatePresence>
                  {activeDropdown === item.name &&
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{
                  opacity: 0,
                  y: 10
                }}
                transition={{
                  duration: 0.2
                }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-dark-base border border-border rounded-lg shadow-2xl overflow-hidden">
                
                      {item.dropdown}
                    </motion.div>
              }
                </AnimatePresence>
            }
            </div>
          )}
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/signin"
            className="text-sm font-medium text-ghost-white px-4 py-1.5 rounded border border-border hover:bg-accent transition-colors">
            
            Sign In
          </Link>
          <Link
            to="/signup"
            className="text-sm font-medium text-ghost-white bg-exploit-red px-4 py-1.5 rounded hover:bg-red-700 transition-colors flex items-center gap-1">
            
            Sign Up <span className="text-xs">→</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-ghost-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          className="fixed inset-0 top-14 bg-void-black z-40 overflow-y-auto p-6 lg:hidden">
          
            <div className="flex flex-col gap-6">
              {navItems.map((item) =>
            <div key={item.name} className="border-b border-border pb-4">
                  {item.path ?
              <Link
                to={item.path}
                className="text-lg font-medium text-ghost-white block"
                onClick={() => setMobileMenuOpen(false)}>
                
                      {item.name}
                    </Link> :

              <div className="text-lg font-medium text-ghost-white mb-2">
                      {item.name}
                    </div>
              }
                  {/* Simplified mobile dropdown content could go here if needed */}
                </div>
            )}
              <div className="flex flex-col gap-4 mt-4">
                <Link
                to="/signin"
                className="text-center text-sm font-medium text-ghost-white py-3 rounded border border-border">
                
                  Sign In
                </Link>
                <Link
                to="/signup"
                className="text-center text-sm font-medium text-ghost-white bg-exploit-red py-3 rounded">
                
                  Sign Up →
                </Link>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}