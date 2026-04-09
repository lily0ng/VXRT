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
  ArrowRight,
  Search,
  Target,
  Zap,
  FileText } from
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

      {/* Section: Our Methodology */}
      <section className="py-20 border-t border-steel-gray/30 bg-gradient-to-b from-void-black to-dark-base">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <SectionHeading
              badge="PROCESS"
              title="Our Offensive Methodology"
              description="A battle-tested approach to uncovering critical vulnerabilities"
              align="center" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                step: '01',
                title: 'Reconnaissance',
                desc: 'Deep OSINT gathering, infrastructure mapping, and attack surface analysis.',
                icon: Search
              },
              {
                step: '02',
                title: 'Weaponization',
                desc: 'Custom exploit development, payload crafting, and tool preparation.',
                icon: Target
              },
              {
                step: '03',
                title: 'Execution',
                desc: 'Controlled exploitation with real-time monitoring and risk mitigation.',
                icon: Zap
              },
              {
                step: '04',
                title: 'Reporting',
                desc: 'Executive summaries, technical findings, and actionable remediation.',
                icon: FileText
              }
            ].map((phase, i) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-dark-base border border-steel-gray rounded-xl p-6 relative overflow-hidden group hover:border-exploit-red/50 transition-all">
                
                <div className="absolute -top-4 -right-4 text-6xl font-heading font-bold text-steel-gray/20 group-hover:text-exploit-red/10 transition-colors">
                  {phase.step}
                </div>
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-exploit-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-exploit-red/20 transition-colors">
                  <phase.icon className="w-6 h-6 text-exploit-red" />
                </motion.div>
                
                <h3 className="text-lg font-heading font-bold text-ghost-white mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-gray">{phase.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Process Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '98%', label: 'Success Rate', sub: 'Initial access achieved' },
              { value: '24hrs', label: 'Avg. Detection', sub: 'Time to compromise' },
              { value: '<48hrs', label: 'Report Delivery', sub: 'From test completion' },
              { value: '30d', label: 'Free Retest', sub: 'Included with all tests' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-center p-4 bg-void-black/50 rounded-lg border border-steel-gray/30">
                <div className="text-2xl font-heading font-bold text-exploit-red mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-ghost-white">{stat.label}</div>
                <div className="text-xs text-muted-gray">{stat.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section: Success Stories */}
      <section className="py-20 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <SectionHeading
              badge="RESULTS"
              title="Success Stories"
              description="Real impact from our offensive security operations"
              align="center" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                client: 'Fortune 500 Financial',
                industry: 'Banking',
                result: '$2.3M Saved',
                desc: 'Identified critical RCE vulnerability in trading platform before Q4 earnings release.',
                metric: '3 Critical CVEs',
                icon: Landmark
              },
              {
                client: 'Global Healthcare System',
                industry: 'Healthcare',
                result: 'Zero Breaches',
                desc: 'Continuous red team operations for 18 months with no successful real-world attacks.',
                metric: '500+ Beds Protected',
                icon: Stethoscope
              },
              {
                client: 'Defense Contractor',
                industry: 'Defense',
                result: 'Compliance Met',
                desc: 'Achieved CMMC Level 3 compliance through adversary simulation and gap remediation.',
                metric: '100% Pass Rate',
                icon: Shield
              }
            ].map((story, i) => (
              <motion.div
                key={story.client}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-dark-base to-void-black border border-steel-gray rounded-2xl p-8 relative overflow-hidden group hover:border-exploit-red/50 transition-all">
                
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    className="w-12 h-12 bg-exploit-red/10 rounded-xl flex items-center justify-center group-hover:bg-exploit-red/20 transition-colors">
                    <story.icon className="w-6 h-6 text-exploit-red" />
                  </motion.div>
                  <div>
                    <p className="text-xs text-muted-gray uppercase tracking-wider">{story.industry}</p>
                    <h4 className="font-heading font-bold text-ghost-white">{story.client}</h4>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-3xl font-heading font-bold text-exploit-red">{story.result}</span>
                </div>
                
                <p className="text-sm text-muted-gray mb-4 leading-relaxed">{story.desc}</p>
                
                <div className="flex items-center gap-2 text-sm text-ghost-white/80">
                  <Check className="w-4 h-4 text-green-500" />
                  {story.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Technology Stack */}
      <section className="py-20 border-t border-steel-gray/30 bg-dark-base">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <SectionHeading
              badge="TOOLS"
              title="Our Arsenal"
              description="Industry-leading tools and custom-developed exploits"
              align="center" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
            {[
              { name: 'Burp Suite', category: 'Web' },
              { name: 'Cobalt Strike', category: 'C2' },
              { name: 'Metasploit', category: 'Exploitation' },
              { name: 'BloodHound', category: 'AD' },
              { name: 'Nmap', category: 'Recon' },
              { name: 'Wireshark', category: 'Network' },
              { name: 'IDA Pro', category: 'Reverse' },
              { name: 'Ghidra', category: 'Reverse' },
              { name: 'Hashcat', category: 'Crypto' },
              { name: 'Impacket', category: 'AD' },
              { name: 'SQLMap', category: 'Web' },
              { name: 'Custom Tools', category: 'Internal' }
            ].map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: 'spring', stiffness: 150 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="bg-void-black border border-steel-gray/50 rounded-xl p-4 text-center group hover:border-exploit-red/50 transition-all cursor-default">
                <p className="text-sm font-semibold text-ghost-white group-hover:text-exploit-red transition-colors">{tool.name}</p>
                <p className="text-xs text-muted-gray mt-1">{tool.category}</p>
              </motion.div>
            ))}
          </div>

          {/* Custom Tools Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 bg-gradient-to-r from-exploit-red/5 to-transparent border border-steel-gray rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-heading font-bold text-ghost-white mb-4">Proprietary Exploit Framework</h3>
                <p className="text-muted-gray mb-6">
                  Our in-house developed framework contains over 200+ private exploits and zero-day research. 
                  This gives us capabilities that off-the-shelf tools simply cannot match.
                </p>
                <div className="flex flex-wrap gap-4">
                  {['200+ Private Exploits', 'Zero-day Research', 'Custom C2 Infrastructure', 'Stealth Evasion'].map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="px-4 py-2 bg-void-black border border-steel-gray/50 rounded-full text-sm text-ghost-white/80">
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="w-32 h-32 bg-exploit-red/10 rounded-full flex items-center justify-center border border-exploit-red/30">
                <span className="text-4xl font-heading font-bold text-exploit-red">200+</span>
              </motion.div>
            </div>
          </motion.div>
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