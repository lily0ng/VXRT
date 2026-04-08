import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { AnimatedGridBackground } from '../shared/AnimatedGridBackground';
import { SectionHeading } from '../shared/SectionHeading';
import {
  FileText,
  Code,
  Headset,
  CheckCircle,
  ShieldAlert,
  Download } from
'lucide-react';
interface Phase {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}
interface Deliverable {
  title: string;
  description: string;
  icon: React.ReactNode;
}
interface CaseFile {
  client: string;
  industry: string;
  scope: string;
  findings: string;
  evidenceSvg: React.ReactNode;
}
interface TeamMember {
  initials: string;
  color: string;
}
interface ServicePageData {
  name: string;
  tagline: string;
  description: string;
  heroSvg: React.ReactNode;
  phases: Phase[];
  killChainSvg: React.ReactNode;
  deliverables: Deliverable[];
  caseFiles: CaseFile[];
  team: TeamMember[];
  certs: string[];
}
export function ServicePageTemplate({ data }: {data: ServicePageData;}) {
  return (
    <div className="w-full bg-void-black min-h-screen pb-24">
      {/* Section 1: Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden flex flex-col items-center text-center">
        <AnimatedGridBackground />
        <div className="absolute inset-0 opacity-20 pointer-events-none flex justify-center items-center">
          {data.heroSvg}
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Badge
            variant="outline"
            className="mb-6 border-exploit-red text-exploit-red bg-exploit-red/10">
            
            OFFENSIVE SERVICE
          </Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-ghost-white mb-6">
            {data.name}
          </h1>
          <p className="text-2xl font-heading text-exploit-red mb-6">
            {data.tagline}
          </p>
          <p className="text-lg text-muted-gray mb-10 max-w-2xl mx-auto font-body">
            {data.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-exploit-red hover:bg-exploit-red/90 text-ghost-white">
              
              Book assessment →
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-steel-gray text-ghost-white hover:bg-dark-base">
              
              View methodology →
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: Engagement Overview */}
      <section className="py-20 bg-dark-base/50 border-y border-steel-gray">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Engagement Overview"
            description="Our systematic approach to identifying and exploiting vulnerabilities."
            className="mb-16" />
          
          <div className="relative">
            {/* Animated Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-steel-gray -translate-y-1/2 hidden lg:block" />
            <motion.div
              className="absolute top-1/2 left-0 h-0.5 bg-exploit-red -translate-y-1/2 hidden lg:block"
              initial={{
                width: 0
              }}
              whileInView={{
                width: '100%'
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut'
              }} />
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {data.phases.map((phase, index) =>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: index * 0.2
                }}
                className="bg-dark-base border border-steel-gray p-6 rounded-lg relative">
                
                  <div className="w-10 h-10 rounded-full bg-void-black border border-exploit-red flex items-center justify-center text-exploit-red font-heading font-bold mb-4">
                    {phase.number}
                  </div>
                  <div className="text-exploit-red mb-3">{phase.icon}</div>
                  <h3 className="text-lg font-heading font-bold text-ghost-white mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-muted-gray font-body">
                    {phase.description}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Kill Chain / Attack Graph */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Attack Methodology"
            description="Visualizing the execution path and objective progression."
            className="mb-12" />
          
          <Card className="bg-dark-base border-steel-gray overflow-hidden">
            <CardContent className="p-0">
              <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center bg-void-black/50 relative">
                {/* Grid background for the SVG container */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                    'linear-gradient(to right, rgba(58, 58, 66, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(58, 58, 66, 0.2) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                
                <div className="relative z-10 w-full h-full p-8">
                  {data.killChainSvg}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 4: Deliverables Wall */}
      <section className="py-20 bg-dark-base/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Engagement Deliverables"
            description="Actionable intelligence and remediation guidance."
            className="mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.deliverables.map((item, index) =>
            <Card
              key={index}
              className="bg-dark-base border-steel-gray hover:border-exploit-red/50 transition-colors">
              
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-void-black border border-steel-gray text-exploit-red">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-ghost-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-gray font-body">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Section 5: Case Files */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Declassified Case Files"
            description="Real-world engagement outcomes (anonymized)."
            className="mb-12" />
          
          <div className="space-y-12">
            {data.caseFiles.map((caseFile, index) =>
            <Card
              key={index}
              className="bg-dark-base border-steel-gray overflow-hidden">
              
                <div className="grid md:grid-cols-2">
                  <div className="p-8 border-b md:border-b-0 md:border-r border-steel-gray">
                    <div className="flex items-center gap-3 mb-6">
                      <Badge
                      variant="outline"
                      className="border-steel-gray text-ghost-white">
                      
                        {caseFile.client}
                      </Badge>
                      <Badge
                      variant="outline"
                      className="border-exploit-red text-exploit-red">
                      
                        {caseFile.industry}
                      </Badge>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-heading text-muted-gray mb-1">
                          SCOPE
                        </h5>
                        <p className="text-ghost-white font-body">
                          {caseFile.scope}
                        </p>
                      </div>
                      <div>
                        <h5 className="text-sm font-heading text-muted-gray mb-1">
                          KEY FINDINGS
                        </h5>
                        <p className="text-ghost-white font-body">
                          {caseFile.findings}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 bg-void-black/50 flex items-center justify-center relative min-h-[200px]">
                    {caseFile.evidenceSvg}
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Section 6: Team & Credentials */}
      <section className="py-20 bg-dark-base/50 border-y border-steel-gray">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-heading font-bold text-ghost-white mb-8">
            Executed by Elite Operators
          </h3>

          {/* Hex Avatars */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {data.team.map((member, index) =>
            <div
              key={index}
              className="relative w-16 h-16 flex items-center justify-center">
              
                <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full drop-shadow-lg">
                
                  <polygon
                  points="50 3, 93 28, 93 72, 50 97, 7 72, 7 28"
                  fill={member.color}
                  stroke="#3a3a42"
                  strokeWidth="2" />
                
                </svg>
                <span className="relative z-10 font-heading font-bold text-void-black text-xl">
                  {member.initials}
                </span>
              </div>
            )}
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {data.certs.map((cert, index) =>
            <Badge
              key={index}
              variant="outline"
              className="border-steel-gray text-muted-gray hover:text-ghost-white hover:border-ghost-white transition-colors">
              
                {cert}
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section className="py-32 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-6">
            Ready to find your blind spots?
          </h2>
          <p className="text-xl text-muted-gray mb-10 max-w-2xl mx-auto font-body">
            Schedule a confidential consultation to discuss your security
            objectives and how our offensive operations can harden your
            defenses.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-exploit-red hover:bg-exploit-red/90 text-ghost-white">
              
              Schedule a call →
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-steel-gray text-ghost-white hover:bg-dark-base">
              
              <Download className="mr-2 h-4 w-4" />
              Download service brief PDF
            </Button>
          </div>
        </div>
      </section>
    </div>);

}