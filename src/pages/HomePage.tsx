import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/shared/SectionHeading';
import { AnimatedCounter } from '../components/shared/AnimatedCounter';
import { HexNetworkGraph } from '../components/shared/HexNetworkGraph';
import {
  Server,
  Network,
  HardDrive,
  Hexagon,
  Shield,
  Target,
  AlertTriangle,
  CloudLightning,
  TerminalSquare,
  Users,
  Building2,
  Quote,
  ArrowRight,
  FileText,
  Bug,
  Search,
  Lock,
  Award,
  ChevronRight } from
'lucide-react';

export function HomePage() {
  return (
    <div className="w-full bg-void-black min-h-screen">
      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex items-center pt-6 overflow-hidden bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-void-black/0 via-void-black/50 to-void-black pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-start">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.5
                }}
                className="flex items-center gap-2 mb-6 bg-dark-base/50 border border-border rounded-full px-4 py-1.5 backdrop-blur-sm">
                
                <div className="w-2 h-2 rounded-full bg-exploit-red animate-pulse" />
                <span className="text-xs font-heading font-semibold text-exploit-red tracking-widest uppercase">
                  Elite Offensive Security Operations
                </span>
              </motion.div>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1
                }}
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-ghost-white leading-tight mb-6">
                
                Attack first.
                <br />
                <span className="text-muted-text">Defend always.</span>
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2
                }}
                className="text-lg text-muted-text max-w-xl mb-10 leading-relaxed">
                
                We simulate real-world adversaries to expose critical
                vulnerabilities before they do. Offensive security, zero-day
                research, and red team ops for global clients.
              </motion.p>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.3
                }}
                className="flex flex-wrap items-center gap-4">
                
                <Link
                  to="/contact"
                  className="bg-exploit-red text-ghost-white px-8 py-4 rounded font-medium hover:bg-red-700 transition-colors flex items-center gap-2">
                  
                  GET ASSESSMENT <span className="text-xl leading-none">→</span>
                </Link>
                <Link
                  to="/resources"
                  className="bg-transparent border border-border text-ghost-white px-8 py-4 rounded font-medium hover:bg-dark-base transition-colors">
                  
                  VIEW RESEARCH
                </Link>
              </motion.div>
            </div>

            <div className="hidden lg:block h-[720px]">
              <HexNetworkGraph />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 w-full border-t border-border bg-void-black/80 backdrop-blur-md">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
              {[
              {
                value: '200+',
                label: 'Engagements'
              },
              {
                value: '98%',
                label: 'Success Rate'
              },
              {
                value: '40+',
                label: 'CVEs Found'
              },
              {
                value: '15+',
                label: 'Certs'
              }].
              map((stat, idx) =>
              <div key={idx} className="py-6 text-center">
                  <div className="text-2xl font-heading font-bold text-ghost-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-text uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Product Overview */}
      <section className="py-32 bg-void-black">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Infrastructure built for security teams"
            description="High-performance compute and networking designed specifically for offensive operations and heavy workloads."
            align="center"
            className="mb-16" />
          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            {
              icon: <Server size={32} />,
              title: 'Compute',
              desc: 'Bare metal and VPS instances optimized for heavy scanning and exploitation.'
            },
            {
              icon: <Network size={32} />,
              title: 'Networking',
              desc: 'Global load balancing and resilient DNS for C2 infrastructure.'
            },
            {
              icon: <HardDrive size={32} />,
              title: 'Storage',
              desc: 'Encrypted block and object storage for sensitive engagement data.'
            },
            {
              icon: <Hexagon size={32} />,
              title: 'Orchestration',
              desc: 'Managed Kubernetes clusters for scalable attack infrastructure.'
            }].
            map((product, idx) =>
            <motion.div
              key={idx}
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
                delay: idx * 0.1
              }}
              className="group bg-[#111115] border border-border rounded-lg p-8 relative overflow-hidden transition-all hover:border-border/80">
              
                <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-exploit-red transition-colors" />
                <div className="text-muted-text mb-6 group-hover:text-ghost-white transition-colors">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-ghost-white mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-text text-sm mb-6 line-clamp-2">
                  {product.desc}
                </p>
                <Link
                to={`/product/${product.title.toLowerCase()}`}
                className="text-sm font-medium text-exploit-red flex items-center gap-1 group-hover:gap-2 transition-all">
                
                  Learn more <span>→</span>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Section 3: Services Showcase */}
      <section className="py-32 bg-dark-base border-y border-border">
        <div className="container mx-auto px-6">
          <SectionHeading
            badge="Capabilities"
            title="Offensive Security Services"
            description=""
            className="mb-16" />
          

          <div className="bg-void-black rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-b border-border">
              {[
              {
                icon: <Shield size={24} />,
                title: 'Penetration Testing',
                desc: 'Comprehensive testing of web, API, network, mobile, and cloud environments to identify exploitable vulnerabilities.'
              },
              {
                icon: <Target size={24} />,
                title: 'Red Teaming',
                desc: "Full-scope adversary simulation to test your organization's detection and response capabilities against real-world TTPs."
              },
              {
                icon: <AlertTriangle size={24} />,
                title: 'Vulnerability Assessment',
                desc: 'Systematic review of security weaknesses in an information system, providing risk scoring and triage guidance.'
              }].
              map((service, idx) =>
              <div
                key={idx}
                className="p-8 hover:bg-dark-base/50 transition-colors group">
                
                  <div className="text-exploit-red mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-ghost-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-text">{service.desc}</p>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-b border-border">
              {[
              {
                icon: <CloudLightning size={24} />,
                title: 'Cloud Penetration Testing',
                desc: 'Deep-dive assessments of AWS, Azure, and GCP environments focusing on IAM, misconfigurations, and lateral movement.'
              },
              {
                icon: <TerminalSquare size={24} />,
                title: 'Exploit Development',
                desc: 'Custom exploit creation for identified vulnerabilities and zero-day research for critical infrastructure.'
              },
              {
                icon: <Users size={24} />,
                title: 'Purple Teaming',
                desc: 'Collaborative engagements where our red team works directly with your blue team to improve detection engineering.'
              }].
              map((service, idx) =>
              <div
                key={idx}
                className="p-8 hover:bg-dark-base/50 transition-colors group">
                
                  <div className="text-exploit-red mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-ghost-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-text">{service.desc}</p>
                </div>
              )}
            </div>
            <div className="p-8 bg-exploit-red/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-ghost-white mb-1">
                  VXRT Core Platform
                </h3>
                <p className="text-sm text-muted-text">
                  Continuous attack surface management and automated validation.
                </p>
              </div>
              <Link
                to="/solutions"
                className="px-6 py-2 bg-transparent border border-exploit-red text-exploit-red rounded hover:bg-exploit-red hover:text-ghost-white transition-colors whitespace-nowrap">
                
                Explore Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why VXRT */}
      <section className="py-32 bg-void-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                badge="The VXRT Difference"
                title="Built by attackers, for defenders."
                description="We don't just run automated scanners. Our team consists of elite researchers and operators who understand how real threat actors think and operate."
                className="mb-12" />
              
              <Link
                to="/about"
                className="text-exploit-red font-medium hover:text-red-400 transition-colors flex items-center gap-2">
                
                Learn about our methodology <span>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
              {
                title: 'Offensive-first mindset',
                desc: 'We approach every engagement from the perspective of an advanced persistent threat.'
              },
              {
                title: 'Global standard ops',
                desc: 'Methodologies aligned with MITRE ATT&CK, PTES, and OSSTMM frameworks.'
              },
              {
                title: 'Zero-day capability',
                desc: 'In-house vulnerability research team actively discovering and weaponizing new flaws.'
              },
              {
                title: 'Full lifecycle coverage',
                desc: 'From initial reconnaissance to post-exploitation and remediation guidance.'
              }].
              map((feature, idx) =>
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  x: 20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: idx * 0.1
                }}
                className="pl-6 border-l-4 border-exploit-red">
                
                  <div className="flex items-center gap-2 mb-2">
                    <Hexagon size={14} className="text-exploit-red" />
                    <h4 className="font-bold text-ghost-white">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-text">{feature.desc}</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Trusted By - Logo Cloud */}
      <section className="py-20 border-y border-border bg-void-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12">
            <span className="text-sm font-heading font-semibold text-muted-text uppercase tracking-wider">
              Trusted by Industry Leaders
            </span>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-50">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                className="flex items-center justify-center h-16">
                <Building2 className="w-10 h-10 text-muted-text" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Latest Research & CVEs */}
      <section className="py-24 bg-dark-base">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <SectionHeading
              badge="RESEARCH"
              title="Latest Discoveries"
              description="Our team actively discovers and responsibly discloses vulnerabilities across enterprise technologies." />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Bug, title: 'CVE-2025-8492', desc: 'Unauthenticated RCE in Enterprise Secure Gateway', severity: 'Critical', color: 'text-red-500' },
              { icon: Lock, title: 'CVE-2025-7381', desc: 'Privilege escalation in CloudOps Orchestrator', severity: 'High', color: 'text-orange-500' },
              { icon: Search, title: 'CVE-2025-6299', desc: 'Information disclosure in DataVault Pro', severity: 'Medium', color: 'text-yellow-500' }
            ].map((cve, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(192, 57, 43, 0.5)' }}
                className="bg-void-black border border-border rounded-xl p-6 transition-all duration-300 cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-dark-base rounded-lg flex items-center justify-center group-hover:bg-exploit-red/10 transition-colors">
                    <cve.icon className="w-6 h-6 text-exploit-red" />
                  </div>
                  <span className={`text-xs font-mono px-2 py-1 bg-dark-base rounded ${cve.color}`}>{cve.severity}</span>
                </div>
                <h4 className="font-mono font-bold text-ghost-white mb-2">{cve.title}</h4>
                <p className="text-sm text-muted-text mb-4">{cve.desc}</p>
                <div className="flex items-center gap-1 text-sm text-exploit-red group-hover:gap-2 transition-all">
                  Read Advisory <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-10">
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 text-muted-text hover:text-ghost-white transition-colors">
              <FileText className="w-4 h-4" />
              View All Research
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Our Process */}
      <section className="py-24 bg-void-black border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <SectionHeading
              badge="METHODOLOGY"
              title="How We Work"
              description="A battle-tested approach to offensive security that delivers results." />
          </motion.div>

          <div className="mt-16 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-border" />

              {[
                { step: '01', title: 'Scoping', desc: 'Define boundaries and objectives' },
                { step: '02', title: 'Recon', desc: 'Intelligence gathering and mapping' },
                { step: '03', title: 'Attack', desc: 'Controlled exploitation and testing' },
                { step: '04', title: 'Report', desc: 'Detailed findings with proof of concept' },
                { step: '05', title: 'Retest', desc: 'Verify remediation effectiveness' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 mx-auto mb-4 bg-dark-base border-2 border-exploit-red rounded-full flex items-center justify-center relative z-10">
                    <span className="font-heading font-bold text-ghost-white">{item.step}</span>
                  </motion.div>
                  <h4 className="font-heading font-bold text-ghost-white mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-text">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Client Testimonials */}
      <section className="py-24 bg-dark-base">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <SectionHeading
              badge="TESTIMONIALS"
              title="What Clients Say"
              description="Real feedback from organizations we've helped secure." />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { quote: "VXRT found critical vulnerabilities our previous provider missed. Their technical depth is unmatched.", author: "CISO, Fortune 500 Fintech", metric: "3 CVEs Discovered" },
              { quote: "The red team simulation revealed gaps in our detection capabilities we didn't know existed.", author: "Director of Security, Healthcare", metric: "Detection +340%" },
              { quote: "Professional, thorough, and excellent communication throughout the entire engagement.", author: "CTO, Series C Startup", metric: "SOC 2 Certified" }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-void-black border border-border rounded-xl p-6 relative">
                <Quote className="w-8 h-8 text-exploit-red/30 mb-4" />
                <p className="text-ghost-white mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-text">{testimonial.author}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <Award className="w-4 h-4 text-exploit-red" />
                    <span className="text-xs text-exploit-red font-semibold">{testimonial.metric}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Social Proof / Stats */}
      <section className="py-24 bg-dark-base border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
            <AnimatedCounter
              target={100}
              suffix="+"
              label="Vulnerabilities Reported" />
            
            <AnimatedCounter target={15} suffix="+" label="CVEs Published" />
            <AnimatedCounter
              target={30}
              suffix="+"
              label="Hall of Fame Entries" />
            
            <AnimatedCounter
              target={250}
              suffix="K+"
              label="$ Bounties Earned" />
            
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="py-32 bg-void-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-exploit-red/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
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
            }}
            className="max-w-3xl mx-auto">
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-ghost-white mb-6">
              Ready to stress-test your defenses?
            </h2>
            <p className="text-xl text-muted-text mb-10">
              Book a free initial consultation with our red team. No fluff. Just
              results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-exploit-red text-ghost-white px-8 py-4 rounded font-medium hover:bg-red-700 transition-colors">
                
                REQUEST ASSESSMENT →
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-transparent border border-border text-ghost-white px-8 py-4 rounded font-medium hover:bg-dark-base transition-colors">
                
                CONTACT US
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>);
}