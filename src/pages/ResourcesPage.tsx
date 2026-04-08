import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription } from
'../components/ui/card';
import { Button } from '../components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow } from
'../components/ui/table';
import { AnimatedGridBackground } from '../components/shared/AnimatedGridBackground';
import { SectionHeading } from '../components/shared/SectionHeading';
import {
  FileText,
  ShieldAlert,
  Code,
  ExternalLink,
  Star,
  GitBranch,
  Terminal } from
'lucide-react';
const researchPapers = [
{
  title: 'Bypassing Modern EDR via Direct Syscalls',
  authors: '0xff, Priya Sharma',
  date: 'Oct 2025',
  category: 'Endpoint',
  abstract:
  'An analysis of techniques to evade modern Endpoint Detection and Response solutions using direct system calls and memory manipulation.'
},
{
  title: 'Cloud IAM Privilege Escalation Paths',
  authors: 'Marcus Webb',
  date: 'Aug 2025',
  category: 'Cloud',
  abstract:
  'Comprehensive mapping of misconfigurations in AWS and Azure IAM that lead to full environment compromise.'
},
{
  title: 'Advanced Active Directory Attack Paths',
  authors: 'Sarah Kovacs',
  date: 'Jun 2025',
  category: 'Network',
  abstract:
  'Novel approaches to lateral movement and privilege escalation in complex multi-forest AD environments.'
},
{
  title: 'Zero-Day in Enterprise VPN Appliances',
  authors: 'Yuki Tanaka',
  date: 'Apr 2025',
  category: 'Network',
  abstract:
  'Technical breakdown of CVE-2025-XXXX, an unauthenticated RCE in a widely used enterprise VPN solution.'
},
{
  title: 'Exploiting Deserialization in Java Microservices',
  authors: 'Alex Chen',
  date: 'Feb 2025',
  category: 'Web',
  abstract:
  'A deep dive into identifying and weaponizing insecure deserialization vulnerabilities in modern microservice architectures.'
},
{
  title: 'IoT Firmware Reverse Engineering Methodologies',
  authors: 'Priya Sharma',
  date: 'Dec 2024',
  category: 'IoT',
  abstract:
  'Standardized approaches for extracting, analyzing, and finding vulnerabilities in embedded device firmware.'
}];

const cveDatabase = [
{
  id: 'CVE-2025-8492',
  severity: 'Critical',
  product: 'Enterprise Secure Gateway',
  desc: 'Unauthenticated RCE via crafted HTTP request',
  date: '2025-10-12'
},
{
  id: 'CVE-2025-7381',
  severity: 'High',
  product: 'CloudOps Orchestrator',
  desc: 'Privilege escalation via insecure API endpoint',
  date: '2025-09-05'
},
{
  id: 'CVE-2025-6299',
  severity: 'Medium',
  product: 'DataVault Pro',
  desc: 'Information disclosure in error logs',
  date: '2025-08-22'
},
{
  id: 'CVE-2025-5104',
  severity: 'Critical',
  product: 'NetShield Firewall',
  desc: 'Authentication bypass in management interface',
  date: '2025-07-14'
},
{
  id: 'CVE-2025-4822',
  severity: 'High',
  product: 'IdentitySync Server',
  desc: 'LDAP injection leading to credential theft',
  date: '2025-06-30'
},
{
  id: 'CVE-2025-3911',
  severity: 'Low',
  product: 'TeamChat Client',
  desc: 'Local denial of service via malformed payload',
  date: '2025-05-18'
},
{
  id: 'CVE-2025-2745',
  severity: 'Critical',
  product: 'VirtualManager Hypervisor',
  desc: 'VM escape vulnerability',
  date: '2025-04-02'
},
{
  id: 'CVE-2025-1888',
  severity: 'Medium',
  product: 'CodeRepo Enterprise',
  desc: 'Stored XSS in repository description',
  date: '2025-03-15'
}];

const tools = [
{
  name: 'vxrt-scanner',
  desc: 'High-speed asynchronous network scanner optimized for large subnets.',
  lang: 'Rust',
  stars: '2.4k'
},
{
  name: 'cloud-enum',
  desc: 'Multi-cloud asset enumeration and misconfiguration detection tool.',
  lang: 'Python',
  stars: '1.8k'
},
{
  name: 'ad-pathfinder',
  desc: 'Active Directory attack path mapping and visualization utility.',
  lang: 'C#',
  stars: '3.1k'
},
{
  name: 'payload-gen',
  desc: 'Polymorphic payload generator for evading static analysis.',
  lang: 'Go',
  stars: '1.2k'
},
{
  name: 'dns-recon',
  desc: 'Advanced DNS enumeration and subdomain takeover detection.',
  lang: 'Python',
  stars: '950'
},
{
  name: 'exploit-framework',
  desc: 'Modular framework for developing and testing custom exploits.',
  lang: 'Ruby',
  stars: '4.5k'
}];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'Critical':
      return 'bg-red-500/10 text-red-500 border-red-500/20';
    case 'High':
      return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
    case 'Medium':
      return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
    case 'Low':
      return 'bg-green-500/10 text-green-500 border-green-500/20';
    default:
      return 'bg-steel-gray text-ghost-white';
  }
};
export function ResourcesPage() {
  return (
    <div className="w-full bg-void-black min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <AnimatedGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            badge="RESOURCE CENTER"
            title="Research. Intelligence. Tools."
            description="Access our public research, vulnerability disclosures, and open-source offensive tooling." />
          
        </div>
      </section>

      {/* Featured / Latest */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-heading font-bold text-ghost-white mb-8">
            Featured Research
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
            {
              title: 'Zero-Day in Enterprise VPN Appliances',
              date: 'Oct 24, 2025',
              cat: 'Vulnerability',
              icon: ShieldAlert
            },
            {
              title: 'Cloud IAM Privilege Escalation Techniques',
              date: 'Sep 12, 2025',
              cat: 'Cloud Security',
              icon: Terminal
            },
            {
              title: 'Advanced Active Directory Attack Paths',
              date: 'Aug 05, 2025',
              cat: 'Red Teaming',
              icon: GitBranch
            }].
            map((item, i) =>
            <Card
              key={i}
              className="bg-dark-base border-steel-gray hover:border-exploit-red/50 transition-colors group cursor-pointer overflow-hidden">
              
                <div className="h-32 bg-gradient-to-br from-void-black to-steel-gray/20 flex items-center justify-center border-b border-steel-gray">
                  <item.icon className="w-12 h-12 text-muted-gray group-hover:text-exploit-red transition-colors" />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <Badge
                    variant="outline"
                    className="border-steel-gray text-xs">
                    
                      {item.cat}
                    </Badge>
                    <span className="text-xs font-mono text-muted-gray">
                      {item.date}
                    </span>
                  </div>
                  <h4 className="text-lg font-heading font-bold text-ghost-white group-hover:text-exploit-red transition-colors">
                    {item.title}
                  </h4>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Research Papers */}
      <section className="py-16 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h3 className="text-2xl font-heading font-bold text-ghost-white">
              Research Papers
            </h3>
            <div className="flex flex-wrap gap-2">
              {['All', 'Web', 'Cloud', 'Network', 'Endpoint', 'IoT'].map(
                (cat) =>
                <Button
                  key={cat}
                  variant={cat === 'All' ? 'default' : 'outline'}
                  size="sm"
                  className={
                  cat === 'All' ?
                  'bg-exploit-red text-ghost-white' :
                  'border-steel-gray text-muted-gray'
                  }>
                  
                    {cat}
                  </Button>

              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchPapers.map((paper, i) =>
            <Card key={i} className="bg-dark-base border-steel-gray">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <Badge
                    variant="outline"
                    className="border-steel-gray text-xs">
                    
                      {paper.category}
                    </Badge>
                    <span className="text-xs font-mono text-muted-gray">
                      {paper.date}
                    </span>
                  </div>
                  <h4 className="text-xl font-heading font-bold text-ghost-white mb-2">
                    {paper.title}
                  </h4>
                  <p className="text-sm font-mono text-exploit-red mb-4">
                    {paper.authors}
                  </p>
                  <p className="text-sm text-muted-gray font-body mb-6 flex-grow">
                    {paper.abstract}
                  </p>
                  <Button
                  variant="ghost"
                  className="w-fit text-ghost-white hover:text-exploit-red p-0 h-auto">
                  
                    <FileText className="w-4 h-4 mr-2" /> Read PDF{' '}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CVE Database */}
      <section className="py-16 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-heading font-bold text-ghost-white mb-8">
            Discovered Vulnerabilities
          </h3>
          <div className="rounded-md border border-steel-gray overflow-hidden">
            <Table>
              <TableHeader className="bg-dark-base">
                <TableRow className="border-steel-gray hover:bg-transparent">
                  <TableHead className="font-mono text-ghost-white">
                    CVE ID
                  </TableHead>
                  <TableHead className="font-mono text-ghost-white">
                    Severity
                  </TableHead>
                  <TableHead className="font-mono text-ghost-white">
                    Product
                  </TableHead>
                  <TableHead className="font-mono text-ghost-white">
                    Description
                  </TableHead>
                  <TableHead className="font-mono text-ghost-white text-right">
                    Date
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cveDatabase.map((cve) =>
                <TableRow
                  key={cve.id}
                  className="border-steel-gray hover:bg-dark-base/50">
                  
                    <TableCell className="font-mono text-exploit-red font-medium">
                      {cve.id}
                    </TableCell>
                    <TableCell>
                      <Badge
                      variant="outline"
                      className={getSeverityColor(cve.severity)}>
                      
                        {cve.severity}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-ghost-white">
                      {cve.product}
                    </TableCell>
                    <TableCell className="text-muted-gray text-sm">
                      {cve.desc}
                    </TableCell>
                    <TableCell className="text-right font-mono text-muted-gray text-sm">
                      {cve.date}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Zero-Day Reports & Tools */}
      <section className="py-16 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Zero-Days */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-ghost-white mb-8">
                Zero-Day Reports
              </h3>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) =>
                <Card key={i} className="bg-dark-base border-steel-gray">
                    <CardContent className="p-5 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge
                          variant="outline"
                          className={
                          i % 2 === 0 ?
                          'border-red-500 text-red-500' :
                          'border-steel-gray text-muted-gray'
                          }>
                          
                            {i % 2 === 0 ? 'NDA' : 'PUBLIC'}
                          </Badge>
                          <span className="text-xs font-mono text-muted-gray">
                            Target:{' '}
                            {i % 2 === 0 ? '[REDACTED]' : 'Open Source CMS'}
                          </span>
                        </div>
                        <h4 className="font-heading font-bold text-ghost-white">
                          Unauthenticated RCE in Core Module
                        </h4>
                      </div>
                      <Button
                      variant="ghost"
                      size="icon"
                      disabled={i % 2 === 0}
                      className="text-muted-gray hover:text-ghost-white">
                      
                        {i % 2 === 0 ?
                      <Lock className="w-4 h-4" /> :

                      <ExternalLink className="w-4 h-4" />
                      }
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-ghost-white mb-8">
                Tools & Scripts
              </h3>
              <div className="space-y-4">
                {tools.map((tool, i) =>
                <Card
                  key={i}
                  className="bg-dark-base border-steel-gray hover:border-exploit-red/50 transition-colors">
                  
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <Code className="w-4 h-4 text-exploit-red" />
                          <h4 className="font-mono font-bold text-ghost-white">
                            {tool.name}
                          </h4>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 text-xs text-muted-gray font-mono">
                            <Star className="w-3 h-3" /> {tool.stars}
                          </div>
                          <Badge
                          variant="outline"
                          className="border-steel-gray text-xs">
                          
                            {tool.lang}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-gray mb-4">
                        {tool.desc}
                      </p>
                      <a
                      href="#"
                      className="text-xs font-mono text-exploit-red hover:underline flex items-center gap-1 w-fit">
                      
                        View on GitHub <ExternalLink className="w-3 h-3" />
                      </a>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}