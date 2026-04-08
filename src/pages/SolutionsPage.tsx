import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow } from
'../components/ui/table';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
'../components/ui/accordion';
import { AnimatedGridBackground } from '../components/shared/AnimatedGridBackground';
import { SectionHeading } from '../components/shared/SectionHeading';
import {
  Building2,
  Landmark,
  Stethoscope,
  Shield,
  Check,
  ArrowRight } from
'lucide-react';
export function SolutionsPage() {
  return (
    <div className="w-full bg-void-black min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <AnimatedGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            badge="SOLUTIONS"
            title="Security solutions for every scale."
            description="From high-growth startups to global enterprises and defense contractors, VXRT scales offensive operations to match your threat model." />
          
        </div>
      </section>

      {/* Who Uses VXRT */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            {
              icon: Building2,
              name: 'Enterprise',
              desc: 'Continuous adversary simulation and red teaming for complex global networks.'
            },
            {
              icon: Landmark,
              name: 'Financial Services',
              desc: 'Rigorous penetration testing meeting strict regulatory compliance requirements.'
            },
            {
              icon: Stethoscope,
              name: 'Healthcare',
              desc: 'Securing patient data and medical devices against advanced persistent threats.'
            },
            {
              icon: Shield,
              name: 'Government / Defense',
              desc: 'Cleared operators executing highly classified offensive assessments.'
            }].
            map((ind, i) =>
            <Card
              key={i}
              className="bg-dark-base border-steel-gray hover:border-exploit-red/50 transition-colors group cursor-pointer">
              
                <CardContent className="p-6">
                  <ind.icon className="w-10 h-10 text-exploit-red mb-4" />
                  <h3 className="text-xl font-heading font-bold text-ghost-white mb-2">
                    {ind.name}
                  </h3>
                  <p className="text-sm text-muted-gray font-body mb-6">
                    {ind.desc}
                  </p>
                  <span className="text-sm font-mono text-ghost-white group-hover:text-exploit-red transition-colors flex items-center gap-1">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Enterprise Solution */}
      <section className="py-20 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge
                variant="outline"
                className="border-exploit-red text-exploit-red font-mono">
                
                ENTERPRISE
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ghost-white">
                Full-Scope Adversary Simulation
              </h2>
              <p className="text-lg text-muted-gray font-body leading-relaxed">
                For mature organizations needing to test their SOC and incident
                response capabilities against advanced, stealthy adversaries
                mimicking real-world APTs.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                'Dedicated red team operators assigned to your organization',
                'Custom malware and C2 infrastructure development',
                'Physical, social engineering, and cyber attack vectors',
                'Detailed debriefs and purple teaming remediation sessions'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-exploit-red flex-shrink-0 mt-0.5" />
                    <span className="text-ghost-white">{item}</span>
                  </li>
                )}
              </ul>
              <Button className="mt-4 bg-exploit-red text-ghost-white">
                Contact Enterprise Sales
              </Button>
            </div>
            <div className="relative h-[400px] bg-dark-base border border-steel-gray rounded-xl overflow-hidden flex items-center justify-center p-8">
              {/* Abstract Enterprise Network SVG */}
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <circle
                  cx="200"
                  cy="150"
                  r="100"
                  fill="none"
                  stroke="#3a3a42"
                  strokeWidth="1"
                  strokeDasharray="4 4" />
                
                <circle
                  cx="200"
                  cy="150"
                  r="60"
                  fill="none"
                  stroke="#3a3a42"
                  strokeWidth="1" />
                

                {/* Core */}
                <rect
                  x="180"
                  y="130"
                  width="40"
                  height="40"
                  rx="4"
                  fill="#1a1a1e"
                  stroke="#c0392b"
                  strokeWidth="2" />
                
                <circle cx="200" cy="150" r="4" fill="#c0392b" />

                {/* Nodes */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const rad = angle * Math.PI / 180;
                  const x = 200 + 100 * Math.cos(rad);
                  const y = 150 + 100 * Math.sin(rad);
                  return (
                    <g key={i}>
                      <line
                        x1="200"
                        y1="150"
                        x2={x}
                        y2={y}
                        stroke="#3a3a42"
                        strokeWidth="1" />
                      
                      <circle
                        cx={x}
                        cy={y}
                        r="8"
                        fill="#1a1a1e"
                        stroke="#6b6b72"
                        strokeWidth="2" />
                      
                      {i === 1 &&
                      <motion.circle
                        cx={x}
                        cy={y}
                        r="12"
                        fill="none"
                        stroke="#c0392b"
                        strokeWidth="1"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }} />

                      }
                    </g>);

                })}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Security Solution */}
      <section className="py-20 border-t border-steel-gray/30 bg-dark-base/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] bg-void-black border border-steel-gray rounded-xl overflow-hidden flex items-center justify-center p-8">
              {/* Abstract Cloud SVG */}
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <path
                  d="M100,150 Q100,100 150,100 Q180,60 230,80 Q280,60 300,110 Q340,120 320,170 Q340,220 280,220 L130,220 Q80,220 100,150"
                  fill="none"
                  stroke="#3a3a42"
                  strokeWidth="2"
                  strokeDasharray="5 5" />
                
                <rect
                  x="180"
                  y="130"
                  width="40"
                  height="40"
                  rx="4"
                  fill="#1a1a1e"
                  stroke="#6b6b72"
                  strokeWidth="2" />
                
                <rect
                  x="130"
                  y="160"
                  width="30"
                  height="30"
                  rx="4"
                  fill="#1a1a1e"
                  stroke="#6b6b72"
                  strokeWidth="2" />
                
                <rect
                  x="240"
                  y="150"
                  width="30"
                  height="30"
                  rx="4"
                  fill="#1a1a1e"
                  stroke="#6b6b72"
                  strokeWidth="2" />
                

                <motion.path
                  d="M190,130 L150,160"
                  stroke="#c0392b"
                  strokeWidth="2"
                  fill="none"
                  initial={{
                    pathLength: 0
                  }}
                  whileInView={{
                    pathLength: 1
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }} />
                
              </svg>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <Badge
                variant="outline"
                className="border-exploit-red text-exploit-red font-mono">
                
                CLOUD-NATIVE
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ghost-white">
                Multi-Cloud Exploitation
              </h2>
              <p className="text-lg text-muted-gray font-body leading-relaxed">
                Specialized assessments targeting AWS, Azure, GCP, and
                Kubernetes environments, focusing on IAM misconfigurations and
                lateral movement.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                'Comprehensive IAM privilege escalation mapping',
                'Container escape and Kubernetes cluster takeover',
                'Serverless function exploitation',
                'Cloud-to-on-premise pivot testing'].
                map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-exploit-red flex-shrink-0 mt-0.5" />
                    <span className="text-ghost-white">{item}</span>
                  </li>
                )}
              </ul>
              <Button className="mt-4 bg-exploit-red text-ghost-white">
                Explore Cloud Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Startup & Gov Cards */}
      <section className="py-20 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-dark-base border-steel-gray">
              <CardContent className="p-8">
                <Badge
                  variant="outline"
                  className="border-steel-gray text-ghost-white font-mono mb-6">
                  
                  STARTUP / SME
                </Badge>
                <h3 className="text-2xl font-heading font-bold text-ghost-white mb-4">
                  Agile Security Assessments
                </h3>
                <p className="text-muted-gray font-body mb-6">
                  Fast, focused penetration testing designed to meet compliance
                  requirements (SOC2, ISO27001) and unblock enterprise sales
                  deals without breaking the bank.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-sm text-ghost-white">
                    <Check className="w-4 h-4 text-exploit-red" /> Rapid
                    scheduling & execution
                  </li>
                  <li className="flex items-center gap-2 text-sm text-ghost-white">
                    <Check className="w-4 h-4 text-exploit-red" />{' '}
                    Developer-friendly remediation guides
                  </li>
                  <li className="flex items-center gap-2 text-sm text-ghost-white">
                    <Check className="w-4 h-4 text-exploit-red" /> Free
                    retesting within 30 days
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-steel-gray text-ghost-white">
                  
                  View SME Pricing
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-dark-base border-steel-gray">
              <CardContent className="p-8">
                <Badge
                  variant="outline"
                  className="border-steel-gray text-ghost-white font-mono mb-6">
                  
                  GOVERNMENT / DEFENSE
                </Badge>
                <h3 className="text-2xl font-heading font-bold text-ghost-white mb-4">
                  Cleared Operations
                </h3>
                <p className="text-muted-gray font-body mb-6">
                  Highly sensitive assessments for federal agencies and defense
                  contractors. Our operators hold active security clearances and
                  follow strict OPSEC protocols.
                </p>
                <div className="flex gap-2 mb-8">
                  <Badge className="bg-steel-gray text-ghost-white">
                    FedRAMP
                  </Badge>
                  <Badge className="bg-steel-gray text-ghost-white">CMMC</Badge>
                  <Badge className="bg-steel-gray text-ghost-white">
                    NIST 800-53
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-steel-gray text-ghost-white">
                  
                  Contact Federal Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 border-t border-steel-gray/30 bg-dark-base/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-3xl font-heading font-bold text-ghost-white text-center mb-12">
            Engagement Tiers
          </h3>
          <div className="rounded-xl border border-steel-gray overflow-hidden">
            <Table>
              <TableHeader className="bg-void-black">
                <TableRow className="border-steel-gray">
                  <TableHead className="w-1/4"></TableHead>
                  <TableHead className="w-1/4 text-center font-heading text-ghost-white text-lg py-6">
                    Starter
                  </TableHead>
                  <TableHead className="w-1/4 text-center font-heading text-exploit-red text-lg py-6 bg-exploit-red/5 border-x border-exploit-red/20">
                    Professional
                  </TableHead>
                  <TableHead className="w-1/4 text-center font-heading text-ghost-white text-lg py-6">
                    Enterprise
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-dark-base">
                {[
                {
                  feature: 'Assessments / Year',
                  s: '1-2',
                  p: '3-4',
                  e: 'Continuous'
                },
                {
                  feature: 'Team Size',
                  s: '1-2 Operators',
                  p: '2-4 Operators',
                  e: 'Dedicated Red Team'
                },
                {
                  feature: 'Response Time',
                  s: '48 Hours',
                  p: '24 Hours',
                  e: '1 Hour SLA'
                },
                {
                  feature: 'Custom Exploits',
                  s: '-',
                  p: 'Included',
                  e: 'Included + 0-day research'
                },
                {
                  feature: 'Compliance Reports',
                  s: 'Included',
                  p: 'Included',
                  e: 'Included'
                },
                {
                  feature: 'Starting Price',
                  s: '$15k',
                  p: '$45k',
                  e: 'Custom'
                }].
                map((row, i) =>
                <TableRow
                  key={i}
                  className="border-steel-gray hover:bg-transparent">
                  
                    <TableCell className="font-mono text-muted-gray py-4">
                      {row.feature}
                    </TableCell>
                    <TableCell className="text-center text-ghost-white">
                      {row.s}
                    </TableCell>
                    <TableCell className="text-center text-ghost-white font-bold bg-exploit-red/5 border-x border-exploit-red/20">
                      {row.p}
                    </TableCell>
                    <TableCell className="text-center text-ghost-white">
                      {row.e}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-steel-gray/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-3xl font-heading font-bold text-ghost-white text-center mb-12">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {[
            {
              q: 'How do you price your engagements?',
              a: 'Pricing is based on the scope, complexity, and duration of the assessment. We offer fixed-fee engagements for specific scopes and retainer models for continuous testing.'
            },
            {
              q: 'What is your typical engagement process?',
              a: 'Scoping -> Rules of Engagement (RoE) sign-off -> Execution -> Draft Report -> Debrief Call -> Final Report -> Free Retest (within 30 days).'
            },
            {
              q: 'Do you provide remediation support?',
              a: 'Yes. Every finding includes detailed remediation guidance. Our Professional and Enterprise tiers include direct access to operators for remediation assistance.'
            },
            {
              q: 'Are your operators certified?',
              a: 'All lead operators hold advanced certifications (OSCP, OSWE, OSEP, etc.) and have a minimum of 5 years of dedicated offensive security experience.'
            },
            {
              q: 'How do you handle sensitive data?',
              a: 'We use end-to-end encrypted communication channels, secure dedicated infrastructure for each client, and strict data retention/destruction policies post-engagement.'
            },
            {
              q: 'Do you offer free retesting?',
              a: 'Yes, all standard penetration tests include one round of free retesting for identified vulnerabilities within 30 days of the final report.'
            }].
            map((item, i) =>
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-steel-gray">
              
                <AccordionTrigger className="text-ghost-white hover:text-exploit-red font-heading text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-gray font-body leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>
      </section>
    </div>);

}