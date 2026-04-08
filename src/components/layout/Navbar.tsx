import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Server,
  Cloud,
  Network,
  Database,
  Scale,
  Globe,
  HardDrive,
  Shield,
  Target,
  Search,
  CloudCog,
  Code,
  Users,
  FileText,
  AlertTriangle,
  Lock,
  BookOpen,
  Newspaper,
  Wrench,
  MessageSquare,
  Trophy,
  DollarSign,
  UserPlus,
  Mail,
  BoxIcon } from
'lucide-react';
import { VXRTLogo } from '../shared/VXRTLogo';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger } from
'../ui/navigation-menu';
export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;
  const productItems = [
  {
    name: 'Compute',
    icon: Server,
    desc: 'High-performance compute for offensive ops',
    href: '/product/compute'
  },
  {
    name: 'VPS',
    icon: Cloud,
    desc: 'Isolated virtual private servers',
    href: '/product/vps'
  },
  {
    name: 'Load Balancer',
    icon: Network,
    desc: 'Distribute traffic across infrastructure',
    href: '/product/load-balancer'
  },
  {
    name: 'Kubernetes',
    icon: BoxIcon,
    desc: 'Container orchestration at scale',
    href: '/product/kubernetes'
  },
  {
    name: 'Block Storage',
    icon: HardDrive,
    desc: 'Persistent storage volumes',
    href: '/product/block-storage'
  },
  {
    name: 'Auto Scaling',
    icon: Scale,
    desc: 'Dynamic resource scaling',
    href: '/product/auto-scaling'
  },
  {
    name: 'DNS Management',
    icon: Globe,
    desc: 'Global DNS infrastructure',
    href: '/product/dns-management'
  },
  {
    name: 'Object Storage',
    icon: Database,
    desc: 'Scalable object storage',
    href: '/product/object-storage'
  }];

  const serviceItems = [
  {
    name: 'Penetration Testing',
    icon: Shield,
    desc: 'Comprehensive security assessments',
    href: '/services/penetration-testing'
  },
  {
    name: 'Red Teaming',
    icon: Target,
    desc: 'Adversary simulation exercises',
    href: '/services/red-teaming'
  },
  {
    name: 'Vulnerability Assessment',
    icon: Search,
    desc: 'Systematic vulnerability discovery',
    href: '/services/vulnerability-assessment'
  },
  {
    name: 'Cloud Penetration Testing',
    icon: CloudCog,
    desc: 'Cloud-native security testing',
    href: '/services/cloud-penetration-testing'
  },
  {
    name: 'Exploit Development',
    icon: Code,
    desc: 'Custom exploit creation',
    href: '/services/exploit-development'
  },
  {
    name: 'Purple Teaming',
    icon: Users,
    desc: 'Collaborative defense improvement',
    href: '/services/purple-teaming'
  }];

  const resourceItems = [
  {
    name: 'Research Papers',
    icon: FileText,
    badge: '24',
    href: '/resources#papers'
  },
  {
    name: 'CVE Database',
    icon: AlertTriangle,
    badge: '142',
    href: '/resources#cve'
  },
  {
    name: 'Zero-Day Reports',
    icon: Lock,
    badge: '8',
    href: '/resources#zero-day'
  },
  {
    name: 'PDF Library',
    icon: BookOpen,
    badge: '56',
    href: '/resources#library'
  },
  {
    name: 'Security Blog',
    icon: Newspaper,
    badge: '89',
    href: '/resources#blog'
  },
  {
    name: 'Tools & Scripts',
    icon: Wrench,
    badge: '31',
    href: '/resources#tools'
  }];

  const communityItems = [
  {
    name: 'Discord',
    icon: MessageSquare,
    featured: true,
    desc: 'Join 10K+ members',
    href: 'https://discord.gg/vxrt'
  },
  {
    name: 'Forums',
    icon: Users,
    href: '/community#forums'
  },
  {
    name: 'CTF Events',
    icon: Trophy,
    href: '/community#ctf'
  },
  {
    name: 'Bug Bounty Tips',
    icon: DollarSign,
    href: '/community#bounty'
  },
  {
    name: 'Research Groups',
    icon: UserPlus,
    href: '/community#research'
  },
  {
    name: 'Newsletter',
    icon: Mail,
    href: '/community#newsletter'
  }];

  return (
    <nav className="sticky top-0 z-50 h-14 border-b border-steel-gray bg-void-black/85 backdrop-blur-xl">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <VXRTLogo size="sm" showWordmark />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-ghost-white hover:text-exploit-red data-[state=open]:text-exploit-red">
                  Product
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[720px] p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {productItems.map((item) =>
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-dark-base hover:border-l-2 hover:border-exploit-red transition-all group">
                        
                          <item.icon className="w-5 h-5 text-exploit-red mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-heading font-semibold text-ghost-white group-hover:text-exploit-red mb-1">
                              {item.name}
                            </div>
                            <div className="text-sm text-muted-gray font-body">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      )}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-ghost-white hover:text-exploit-red data-[state=open]:text-exploit-red">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[720px] p-4">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {serviceItems.map((item) =>
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-dark-base hover:border-l-2 hover:border-exploit-red transition-all group">
                        
                          <item.icon className="w-5 h-5 text-exploit-red mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-heading font-semibold text-ghost-white group-hover:text-exploit-red mb-1">
                              {item.name}
                            </div>
                            <div className="text-sm text-muted-gray font-body">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      )}
                    </div>
                    <div className="flex gap-3 pt-3 border-t border-steel-gray">
                      <Link
                        to="/services"
                        className="text-sm text-exploit-red hover:underline font-body">
                        
                        → View all services
                      </Link>
                      <Link
                        to="/contact"
                        className="text-sm text-exploit-red hover:underline font-body">
                        
                        → Book assessment
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/team"
                  className={`px-4 py-2 text-sm font-body transition-colors ${isActive('/team') ? 'text-exploit-red' : 'text-ghost-white hover:text-exploit-red'}`}>
                  
                  Team
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-ghost-white hover:text-exploit-red data-[state=open]:text-exploit-red">
                  Resource Center
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[480px] p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {resourceItems.map((item) =>
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-dark-base transition-all group">
                        
                          <item.icon className="w-5 h-5 text-exploit-red flex-shrink-0" />
                          <div className="flex-1">
                            <div className="font-heading text-sm font-semibold text-ghost-white group-hover:text-exploit-red">
                              {item.name}
                            </div>
                          </div>
                          <div className="text-xs font-mono text-muted-gray bg-steel-gray/30 px-2 py-0.5 rounded">
                            {item.badge}
                          </div>
                        </Link>
                      )}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-ghost-white hover:text-exploit-red data-[state=open]:text-exploit-red">
                  Community
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[480px] p-4">
                    {communityItems.map((item) =>
                    item.featured ?
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center gap-3 p-4 mb-3 rounded-lg bg-gradient-to-r from-[#5865F2]/10 to-transparent border border-[#5865F2]/30 hover:border-[#5865F2]/50 transition-all group">
                      
                          <item.icon className="w-6 h-6 text-[#5865F2]" />
                          <div>
                            <div className="font-heading font-semibold text-ghost-white group-hover:text-[#5865F2] mb-1">
                              {item.name}
                            </div>
                            <div className="text-sm text-muted-gray font-body">
                              {item.desc}
                            </div>
                          </div>
                        </Link> :

                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-dark-base transition-all group">
                      
                          <item.icon className="w-4 h-4 text-exploit-red" />
                          <div className="font-body text-sm text-ghost-white group-hover:text-exploit-red">
                            {item.name}
                          </div>
                        </Link>

                    )}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/solutions"
                  className={`px-4 py-2 text-sm font-body transition-colors ${isActive('/solutions') ? 'text-exploit-red' : 'text-ghost-white hover:text-exploit-red'}`}>
                  
                  Solutions
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/contact"
                  className={`px-4 py-2 text-sm font-body transition-colors ${isActive('/contact') ? 'text-exploit-red' : 'text-ghost-white hover:text-exploit-red'}`}>
                  
                  Contact Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="border border-steel-gray text-ghost-white hover:text-exploit-red">
            
            Sign In
          </Button>
          <Button
            size="sm"
            className="bg-exploit-red hover:bg-exploit-red/90 text-ghost-white">
            
            Sign Up →
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] bg-void-black border-steel-gray overflow-y-auto">
            
            <div className="flex flex-col gap-6 pt-8">
              <div className="space-y-4">
                <div className="font-heading text-sm font-semibold text-muted-gray mb-2">
                  PRODUCT
                </div>
                {productItems.map((item) =>
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 text-ghost-white hover:text-exploit-red transition-colors">
                  
                    <item.icon className="w-4 h-4" />
                    <span className="font-body text-sm">{item.name}</span>
                  </Link>
                )}
              </div>

              <div className="space-y-4">
                <div className="font-heading text-sm font-semibold text-muted-gray mb-2">
                  SERVICES
                </div>
                {serviceItems.map((item) =>
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 text-ghost-white hover:text-exploit-red transition-colors">
                  
                    <item.icon className="w-4 h-4" />
                    <span className="font-body text-sm">{item.name}</span>
                  </Link>
                )}
              </div>

              <div className="space-y-4">
                <Link
                  to="/team"
                  onClick={() => setMobileOpen(false)}
                  className="block text-ghost-white hover:text-exploit-red font-body">
                  
                  Team
                </Link>
                <Link
                  to="/resources"
                  onClick={() => setMobileOpen(false)}
                  className="block text-ghost-white hover:text-exploit-red font-body">
                  
                  Resource Center
                </Link>
                <Link
                  to="/community"
                  onClick={() => setMobileOpen(false)}
                  className="block text-ghost-white hover:text-exploit-red font-body">
                  
                  Community
                </Link>
                <Link
                  to="/solutions"
                  onClick={() => setMobileOpen(false)}
                  className="block text-ghost-white hover:text-exploit-red font-body">
                  
                  Solutions
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-ghost-white hover:text-exploit-red font-body">
                  
                  Contact Us
                </Link>
              </div>

              <div className="pt-6 border-t border-steel-gray space-y-3">
                <Button
                  variant="ghost"
                  className="w-full border border-steel-gray text-ghost-white">
                  
                  Sign In
                </Button>
                <Button className="w-full bg-exploit-red hover:bg-exploit-red/90 text-ghost-white">
                  Sign Up →
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>);

}