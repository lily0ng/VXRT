import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { AnimatedGridBackground } from '../components/shared/AnimatedGridBackground';
import { SectionHeading } from '../components/shared/SectionHeading';
import { Github, Twitter, Linkedin, ArrowRight, Hexagon } from 'lucide-react';
const teamMembers = [
{
  name: 'Alex Chen',
  role: 'Lead Penetration Tester',
  specialty: 'Web & API Exploitation',
  certs: ['OSCP', 'OSWE', 'BSCP'],
  initials: 'AC',
  color: 'text-blue-500'
},
{
  name: 'Sarah Kovacs',
  role: 'Red Team Lead',
  specialty: 'Adversary Simulation',
  certs: ['OSEP', 'CRTP', 'CRTO'],
  initials: 'SK',
  color: 'text-red-500'
},
{
  name: 'Marcus Webb',
  role: 'Cloud Security Engineer',
  specialty: 'AWS & Azure Architecture',
  certs: ['AWS Security', 'AZ-500', 'CKS'],
  initials: 'MW',
  color: 'text-yellow-500'
},
{
  name: 'Priya Sharma',
  role: 'Exploit Developer',
  specialty: '0-day Research & Weaponization',
  certs: ['OSED', 'GXPN'],
  initials: 'PS',
  color: 'text-purple-500'
},
{
  name: "James O'Brien",
  role: 'Purple Team Lead',
  specialty: 'Detection Engineering',
  certs: ['CRTP', 'GPEN'],
  initials: 'JO',
  color: 'text-green-500'
},
{
  name: 'Yuki Tanaka',
  role: 'Security Researcher',
  specialty: 'Vulnerability Discovery',
  certs: ['OSCP', 'eWPTX'],
  initials: 'YT',
  color: 'text-pink-500'
},
{
  name: 'David Kim',
  role: 'Infrastructure Engineer',
  specialty: 'Kubernetes & Container Security',
  certs: ['CKS', 'AWS Security'],
  initials: 'DK',
  color: 'text-indigo-500'
},
{
  name: 'Elena Volkov',
  role: 'Threat Intelligence Analyst',
  specialty: 'APT Tracking & Analysis',
  certs: ['GPEN', 'GXPN'],
  initials: 'EV',
  color: 'text-orange-500'
}];

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};
export function TeamPage() {
  return (
    <div className="w-full bg-void-black min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <AnimatedGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            badge="THE TEAM"
            title="Elite operators. Relentless researchers."
            description="We are a collective of offensive security experts dedicated to finding the flaws before the adversaries do." />
          
        </div>
      </section>

      {/* Interactive Org Chart */}
      <section className="py-16 border-y border-steel-gray/30 bg-dark-base/30">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-heading font-bold text-ghost-white text-center mb-12">
            Command Structure
          </h3>
          <div className="relative h-[400px] w-full max-w-4xl mx-auto flex items-center justify-center">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 800 400">
              
              <motion.path
                d="M400,100 L400,180"
                stroke="#c0392b"
                strokeWidth="2"
                fill="none"
                initial={{
                  pathLength: 0
                }}
                whileInView={{
                  pathLength: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 1,
                  delay: 0.2
                }} />
              
              <motion.path
                d="M400,180 L200,180 L200,260"
                stroke="#c0392b"
                strokeWidth="2"
                fill="none"
                initial={{
                  pathLength: 0
                }}
                whileInView={{
                  pathLength: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 1,
                  delay: 0.5
                }} />
              
              <motion.path
                d="M400,180 L600,180 L600,260"
                stroke="#c0392b"
                strokeWidth="2"
                fill="none"
                initial={{
                  pathLength: 0
                }}
                whileInView={{
                  pathLength: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 1,
                  delay: 0.5
                }} />
              
              <motion.path
                d="M400,180 L400,260"
                stroke="#c0392b"
                strokeWidth="2"
                fill="none"
                initial={{
                  pathLength: 0
                }}
                whileInView={{
                  pathLength: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 1,
                  delay: 0.5
                }} />
              
            </svg>

            {/* Nodes */}
            <div className="absolute top-[60px] left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="w-16 h-16 bg-dark-base border-2 border-exploit-red flex items-center justify-center rotate-45 rounded-lg shadow-[0_0_15px_rgba(192,57,43,0.5)]">
                <span className="text-ghost-white font-heading font-bold -rotate-45">
                  0xff
                </span>
              </div>
              <span className="mt-4 text-sm font-mono text-muted-gray">
                Founder
              </span>
            </div>

            <div className="absolute top-[260px] left-[200px] -translate-x-1/2 flex flex-col items-center">
              <div className="w-12 h-12 bg-dark-base border border-steel-gray flex items-center justify-center rotate-45 rounded-lg">
                <span className="text-ghost-white font-heading text-xs -rotate-45">
                  RT
                </span>
              </div>
              <span className="mt-3 text-xs font-mono text-muted-gray">
                Red Team
              </span>
            </div>

            <div className="absolute top-[260px] left-[400px] -translate-x-1/2 flex flex-col items-center">
              <div className="w-12 h-12 bg-dark-base border border-steel-gray flex items-center justify-center rotate-45 rounded-lg">
                <span className="text-ghost-white font-heading text-xs -rotate-45">
                  PT
                </span>
              </div>
              <span className="mt-3 text-xs font-mono text-muted-gray">
                Pen Testing
              </span>
            </div>

            <div className="absolute top-[260px] left-[600px] -translate-x-1/2 flex flex-col items-center">
              <div className="w-12 h-12 bg-dark-base border border-steel-gray flex items-center justify-center rotate-45 rounded-lg">
                <span className="text-ghost-white font-heading text-xs -rotate-45">
                  ED
                </span>
              </div>
              <span className="mt-3 text-xs font-mono text-muted-gray">
                Exploit Dev
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Mega-Card */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
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
            }}>
            
            <Card className="bg-dark-base border-steel-gray overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-exploit-red" />
              <CardContent className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="flex-shrink-0 relative">
                  <div className="w-32 h-32 bg-void-black border-2 border-exploit-red flex items-center justify-center rotate-45 rounded-xl shadow-[0_0_30px_rgba(192,57,43,0.2)]">
                    <span className="text-4xl font-heading font-bold text-ghost-white -rotate-45">
                      0xff
                    </span>
                  </div>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h2 className="text-3xl font-heading font-bold text-ghost-white mb-2">
                    0xff
                  </h2>
                  <p className="text-exploit-red font-mono text-sm mb-6">
                    Founder & Chief Offensive Officer
                  </p>
                  <p className="text-muted-gray font-body leading-relaxed mb-6 max-w-2xl">
                    With over 15 years of experience in offensive security, 0xff
                    has led red team operations against Fortune 500 companies,
                    discovered critical zero-days in enterprise infrastructure,
                    and architected the VXRT platform to provide scalable
                    offensive capabilities.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                    {['OSCP', 'OSWE', 'OSEP', 'OSED'].map((cert) =>
                    <Badge
                      key={cert}
                      variant="outline"
                      className="border-steel-gray text-ghost-white font-mono text-xs">
                      
                        {cert}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-gray hover:text-ghost-white">
                      
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-gray hover:text-ghost-white">
                      
                      <Twitter className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-gray hover:text-ghost-white">
                      
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {teamMembers.map((member, i) =>
            <motion.div key={i} variants={itemVariants}>
                <Card className="bg-dark-base border-steel-gray h-full hover:border-exploit-red/50 transition-colors">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-6 bg-void-black border border-steel-gray flex items-center justify-center rotate-45 rounded-lg">
                      <span
                      className={`font-heading font-bold text-lg -rotate-45 ${member.color}`}>
                      
                        {member.initials}
                      </span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-ghost-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-exploit-red font-mono text-xs mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-gray font-body text-sm mb-6 flex-grow">
                      {member.specialty}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center mt-auto">
                      {member.certs.map((cert) =>
                    <Badge
                      key={cert}
                      variant="outline"
                      className="border-steel-gray/50 text-muted-gray font-mono text-[10px] px-1.5 py-0">
                      
                          {cert}
                        </Badge>
                    )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-heading font-bold text-ghost-white">
              Want to join the team?
            </h2>
            <p className="text-muted-gray font-body text-lg">
              We're always looking for exceptional talent. If you live for the
              shell, dream in assembly, or find joy in bypassing the
              un-bypassable, we want to talk.
            </p>
            <Button className="bg-exploit-red hover:bg-exploit-red/90 text-ghost-white mt-4">
              View open positions <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>);

}