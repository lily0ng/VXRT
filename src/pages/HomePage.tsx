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
  ChevronRight,
  Database,
  Cpu,
  Zap,
  BrainCircuit,
  Activity,
  Globe,
  CheckCircle,
  Wrench } from
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

      {/* Section 5: Trusted By - Logo Cloud with Horizontal Loop */}
      <section className="py-20 border-y border-border bg-void-black overflow-hidden">
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

          {/* Horizontal Scrolling Icons */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-16"
              animate={{
                x: [0, -1200]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, color: '#c0392b' }}
                  className="flex items-center justify-center w-16 h-16 shrink-0"
                >
                  <Building2 className="w-10 h-10 text-muted-text transition-colors" />
                </motion.div>
              ))}
              {/* Duplicate for seamless loop */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`dup-${i}`}
                  whileHover={{ scale: 1.2, color: '#c0392b' }}
                  className="flex items-center justify-center w-16 h-16 shrink-0"
                >
                  <Building2 className="w-10 h-10 text-muted-text transition-colors" />
                </motion.div>
              ))}
            </motion.div>
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
      <section className="py-24 bg-gradient-to-b from-void-black to-[#0a0a0e] border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <SectionHeading
              badge="METHODOLOGY"
              title="How We Work"
              description="A comprehensive battle-tested approach to offensive security that delivers results." />
          </motion.div>

          <div className="mt-16 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Initial Assessment', desc: 'Evaluate security posture and identify priorities', icon: Target, color: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/40' },
                { step: '02', title: 'Scoping', desc: 'Define boundaries, rules of engagement', icon: Shield, color: 'from-purple-500/20 to-purple-600/10', border: 'border-purple-500/40' },
                { step: '03', title: 'Reconnaissance', desc: 'Intelligence gathering and attack surface mapping', icon: Search, color: 'from-green-500/20 to-green-600/10', border: 'border-green-500/40' },
                { step: '04', title: 'Vulnerability Analysis', desc: 'Deep dive into potential attack vectors', icon: Bug, color: 'from-yellow-500/20 to-yellow-600/10', border: 'border-yellow-500/40' },
                { step: '05', title: 'Exploitation', desc: 'Controlled security testing and validation', icon: Zap, color: 'from-red-500/20 to-red-600/10', border: 'border-red-500/40' },
                { step: '06', title: 'Reporting', desc: 'Detailed findings with PoC and remediation', icon: FileText, color: 'from-orange-500/20 to-orange-600/10', border: 'border-orange-500/40' },
                { step: '07', title: 'Remediation Support', desc: 'Guidance on fixing identified issues', icon: Wrench, color: 'from-cyan-500/20 to-cyan-600/10', border: 'border-cyan-500/40' },
                { step: '08', title: 'Retesting', desc: 'Verify remediation effectiveness', icon: CheckCircle, color: 'from-emerald-500/20 to-emerald-600/10', border: 'border-emerald-500/40' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="relative text-center group">
                  {/* Card */}
                  <div className={`relative bg-gradient-to-br ${item.color} border ${item.border} rounded-2xl p-5 hover:border-exploit-red/50 transition-all duration-300 shadow-lg hover:shadow-exploit-red/20 h-full`}>
                    {/* Animated Glow */}
                    <motion.div
                      className="absolute -top-8 -right-8 w-16 h-16 bg-exploit-red/10 rounded-full blur-2xl"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                    />
                    
                    {/* Step Number */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="absolute top-4 right-4 text-xs font-mono text-exploit-red/70 font-bold"
                    >
                      {item.step}
                    </motion.div>
                    
                    {/* Icon Circle */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-14 h-14 mx-auto mb-4 bg-[#0a0a0e] border-2 border-exploit-red/30 rounded-xl flex items-center justify-center shadow-lg">
                      <item.icon className="w-6 h-6 text-exploit-red" />
                    </motion.div>
                    
                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <h4 className="font-heading font-bold text-ghost-white mb-2 group-hover:text-exploit-red transition-colors text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-text leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </div>
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

      {/* Section 10: Data Center Infrastructure */}
      <section className="py-32 bg-void-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              badge="INFRASTRUCTURE"
              title="Global Data Center Network"
              description="Tier-4 certified data centers across 6 continents providing 99.999% uptime for your critical operations."
              align="center"
              className="mb-16" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Network Devices Visualization */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#050508] via-[#0a0a0e] to-[#111115] border border-border/50 rounded-3xl p-6 relative h-[520px] overflow-hidden shadow-2xl shadow-black/50">
                {/* Animated Background with Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(192, 57, 43, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(192, 57, 43, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }} />
                </div>
                
                {/* Animated Particles */}
                <div className="absolute inset-0">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      animate={{
                        y: [0, -150, -300],
                        x: [0, Math.sin(i * 0.5) * 50, 0],
                        opacity: [0, 0.8, 0],
                        scale: [1, 1.5, 0.5]
                      }}
                      transition={{
                        duration: 5,
                        delay: i * 0.4,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: 'easeInOut'
                      }}
                      style={{
                        left: `${10 + i * 6}%`,
                        top: '100%'
                      }}
                    />
                  ))}
                </div>

                {/* Network Topology Diagram */}
                <div className="relative z-10 h-full flex flex-col space-y-3">
                  {/* Top Layer - Internet Gateway with Glow Effect */}
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
                    whileHover={{ scale: 1.02, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                    className="bg-gradient-to-r from-[#1a1a25] to-[#0f0f15] border-2 border-blue-500/30 rounded-2xl p-4 w-full shadow-lg shadow-blue-500/10 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                            <Globe className="w-6 h-6 text-blue-400" />
                          </div>
                          <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl"
                          />
                        </div>
                        <div>
                          <p className="text-base font-bold text-ghost-white">Internet Gateway</p>
                          <div className="flex items-center gap-2 mt-1">
                            <motion.div
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="flex items-center gap-1"
                            >
                              <div className="w-2 h-2 bg-green-500 rounded-full" />
                              <span className="text-xs text-green-400">100Gbps Uplink</span>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-[#0a0a0e] rounded-lg px-3 py-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs font-medium text-green-400">Online</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Connection Lines with Animated Flow */}
                  <div className="grid grid-cols-2 gap-6">
                    {[...Array(2)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1, type: 'spring' }}
                        className="relative"
                      >
                        <div className="w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 mx-auto" style={{ height: '25px' }} />
                        <motion.div
                          animate={{ y: [0, 25, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                          className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Layer 2 - Firewalls & Load Balancers with Enhanced Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'Firewall Cluster', type: 'FW', color: 'from-red-500/20 to-red-600/10', border: 'border-red-500/40', icon: Shield, status: 'Active', throughput: '40Gbps' },
                      { name: 'Load Balancer', type: 'LB', color: 'from-purple-500/20 to-purple-600/10', border: 'border-purple-500/40', icon: Activity, status: 'Active', throughput: '60Gbps' }
                    ].map((device, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className={`bg-gradient-to-br ${device.color} border-2 ${device.border} rounded-2xl p-4 cursor-pointer shadow-lg transition-all`}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="relative">
                            <div className="w-10 h-10 bg-[#0a0a0e] rounded-xl flex items-center justify-center">
                              <device.icon className="w-5 h-5 text-exploit-red" />
                            </div>
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                              className="absolute inset-0 bg-exploit-red/20 rounded-xl blur-md"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-bold text-ghost-white">{device.name}</p>
                            <p className="text-xs text-muted-text">{device.type}</p>
                          </div>
                          <div className="bg-[#0a0a0e] rounded-lg px-2 py-1">
                            <motion.span
                              animate={{ opacity: [0.6, 1, 0.6] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                              className="text-[10px] font-medium text-green-400"
                            >
                              {device.status}
                            </motion.span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-[10px] text-muted-text">
                          <span>Throughput</span>
                          <span className="font-medium text-white">{device.throughput}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Connection Lines */}
                  <div className="grid grid-cols-4 gap-3">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.08, type: 'spring' }}
                        className="relative"
                      >
                        <div className="w-1 bg-gradient-to-b from-purple-500 via-green-500 to-yellow-500 mx-auto" style={{ height: '20px' }} />
                        <motion.div
                          animate={{ y: [0, 20, 0] }}
                          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                          className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Layer 3 - Core Switches with Modern Design */}
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { name: 'Core SW 1', port: '48x10G', color: 'from-green-500/20 to-green-600/10', border: 'border-green-500/40', icon: Network },
                      { name: 'Core SW 2', port: '48x10G', color: 'from-green-500/20 to-green-600/10', border: 'border-green-500/40', icon: Network },
                      { name: 'Core SW 3', port: '48x10G', color: 'from-green-500/20 to-green-600/10', border: 'border-green-500/40', icon: Network },
                      { name: 'Core SW 4', port: '48x10G', color: 'from-green-500/20 to-green-600/10', border: 'border-green-500/40', icon: Network }
                    ].map((sw, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.06, type: 'spring' }}
                        whileHover={{ scale: 1.08, y: -3 }}
                        className={`bg-gradient-to-br ${sw.color} border ${sw.border} rounded-xl p-3 cursor-pointer shadow-md transition-all`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-7 h-7 bg-[#0a0a0e] rounded-lg flex items-center justify-center">
                            <sw.icon className="w-3.5 h-3.5 text-exploit-red" />
                          </div>
                          <span className="text-[10px] font-bold text-ghost-white">{sw.name}</span>
                        </div>
                        <motion.div
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                          className="text-[9px] text-green-400 text-center font-medium"
                        >
                          {sw.port}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Connection Lines */}
                  <div className="grid grid-cols-4 gap-3">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.08, type: 'spring' }}
                        className="relative"
                      >
                        <div className="w-1 bg-gradient-to-b from-green-500 via-yellow-500 to-orange-500 mx-auto" style={{ height: '20px' }} />
                        <motion.div
                          animate={{ y: [0, 20, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                          className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/50"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Layer 4 - Access Switches */}
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { name: 'Access SW 1', type: 'L2', color: 'from-yellow-500/20 to-yellow-600/10', border: 'border-yellow-500/40' },
                      { name: 'Access SW 2', type: 'L2', color: 'from-yellow-500/20 to-yellow-600/10', border: 'border-yellow-500/40' },
                      { name: 'Access SW 3', type: 'L2', color: 'from-yellow-500/20 to-yellow-600/10', border: 'border-yellow-500/40' },
                      { name: 'Access SW 4', type: 'L2', color: 'from-yellow-500/20 to-yellow-600/10', border: 'border-yellow-500/40' }
                    ].map((sw, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + i * 0.06, type: 'spring' }}
                        whileHover={{ scale: 1.08, y: -3 }}
                        className={`bg-gradient-to-br ${sw.color} border ${sw.border} rounded-xl p-3 cursor-pointer shadow-md transition-all`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Network className="w-3 h-3 text-exploit-red" />
                          <span className="text-[10px] font-bold text-ghost-white">{sw.name}</span>
                        </div>
                        <motion.div
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.18 }}
                          className="text-[9px] text-yellow-400 text-center font-medium"
                        >
                          {sw.type}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced Stats Bar with Gradient */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, type: 'spring' }}
                    className="bg-gradient-to-r from-[#1a1a25] via-[#0f0f15] to-[#1a1a25] border border-border/50 rounded-2xl p-4 shadow-lg"
                  >
                    <div className="grid grid-cols-4 gap-3 text-center">
                      {[
                        { label: 'Total Devices', value: '10+', color: 'text-blue-400', bg: 'bg-blue-500/10' },
                        { label: 'Bandwidth', value: '100Gbps', color: 'text-purple-400', bg: 'bg-purple-500/10' },
                        { label: 'Uptime', value: '99.999%', color: 'text-green-400', bg: 'bg-green-500/10' },
                        { label: 'Latency', value: '<1ms', color: 'text-yellow-400', bg: 'bg-yellow-500/10' }
                      ].map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.85 + i * 0.08, type: 'spring' }}
                          whileHover={{ scale: 1.1, y: -3 }}
                          className={`${stat.bg} rounded-xl p-3 cursor-pointer transition-all`}
                        >
                          <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                          <p className="text-[10px] text-muted-text mt-1">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Enhanced Network Flow Animation */}
                  <div className="bg-gradient-to-r from-[#0a0a0e] via-[#0f0f15] to-[#0a0a0e] border border-border/50 rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <motion.div
                        animate={{ x: [0, 120, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50"
                      />
                      <div className="flex-1 h-1 mx-4 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full" />
                      <motion.div
                        animate={{ x: [0, -120, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-3 h-3 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full shadow-lg shadow-green-500/50"
                      />
                    </div>
                    <p className="text-[10px] text-center text-muted-text font-medium">Network Traffic Flow</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats & Features */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Database, label: 'Storage', value: '50PB+', desc: 'Encrypted NVMe storage', color: 'from-blue-500/20 to-blue-500/5' },
                  { icon: Cpu, label: 'Compute', value: '100K+', desc: 'vCPUs available', color: 'from-purple-500/20 to-purple-500/5' },
                  { icon: Network, label: 'Bandwidth', value: '10Tbps', desc: 'Global backbone', color: 'from-green-500/20 to-green-500/5' },
                  { icon: Shield, label: 'Security', value: 'Tier-4', desc: 'Certified data centers', color: 'from-red-500/20 to-red-500/5' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5, borderColor: 'rgba(192, 57, 43, 0.5)' }}
                    className="bg-gradient-to-br from-[#111115] to-void-black border border-border rounded-xl p-5 transition-all cursor-pointer"
                    style={{ background: `linear-gradient(135deg, ${stat.color})` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-exploit-red/10 rounded-xl flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-exploit-red" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-ghost-white">{stat.label}</p>
                        <p className="text-2xl font-heading font-bold text-white">{stat.value}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-text">{stat.desc}</p>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 11: IaaS Cloud Platform */}
      <section className="py-32 bg-dark-base border-y border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              badge="CLOUD PLATFORM"
              title="Infrastructure as a Service"
              description="Deploy, scale, and manage your infrastructure with our enterprise-grade IaaS platform."
              align="center"
              className="mb-16" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Cloud Visualization */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0a0a0e] to-[#111115] border border-border rounded-2xl p-8 relative h-[500px] overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
                      animate={{
                        y: [0, -100, -200],
                        opacity: [0, 1, 0],
                        scale: [1, 0.5, 0]
                      }}
                      transition={{
                        duration: 4,
                        delay: i * 0.3,
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: '100%'
                      }}
                    />
                  ))}
                </div>

                {/* Multi-Data Center Diagram */}
                <div className="relative z-10 h-full flex flex-col space-y-4">
                  {/* Global Load Balancer */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-[#1a1a20] border border-border rounded-xl p-3 w-full"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Globe className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-ghost-white">Global Load Balancer</p>
                        <motion.p
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-[10px] text-green-400"
                        >
                          Active - Routing to 4 DCs
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Connection Lines to DCs */}
                  <div className="grid grid-cols-4 gap-2">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        className="w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 mx-auto"
                        style={{ height: '20px' }}
                      />
                    ))}
                  </div>

                  {/* 4 Data Centers */}
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { name: 'DC-US-East', location: 'Virginia', color: 'border-blue-500/50' },
                      { name: 'DC-EU-West', location: 'Frankfurt', color: 'border-green-500/50' },
                      { name: 'DC-Asia-Pacific', location: 'Singapore', color: 'border-purple-500/50' },
                      { name: 'DC-US-West', location: 'Oregon', color: 'border-yellow-500/50' }
                    ].map((dc, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.08 }}
                        whileHover={{ scale: 1.05 }}
                        className={`bg-[#1a1a20] border ${dc.color} rounded-xl p-2 cursor-pointer`}
                      >
                        <div className="text-center mb-2">
                          <div className="w-6 h-6 bg-exploit-red/10 rounded-lg flex items-center justify-center mx-auto mb-1">
                            <Server className="w-3 h-3 text-exploit-red" />
                          </div>
                          <p className="text-[8px] font-bold text-ghost-white">{dc.name}</p>
                          <p className="text-[6px] text-muted-text">{dc.location}</p>
                        </div>
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                          className="text-[6px] text-green-400 text-center"
                        >
                          2 Racks
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Connection Lines to Racks */}
                  <div className="grid grid-cols-4 gap-3">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                        className="w-0.5 bg-gradient-to-b from-purple-500 to-green-500 mx-auto"
                        style={{ height: '15px' }}
                      />
                    ))}
                  </div>

                  {/* 8 Infrastructure Racks */}
                  <div className="grid grid-cols-4 gap-2">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.05 }}
                        whileHover={{ scale: 1.05, borderColor: 'rgba(192, 57, 43, 0.5)' }}
                        className="bg-[#0a0a0e] border border-border rounded-lg p-2 cursor-pointer"
                      >
                        <div className="flex items-center gap-1 mb-1">
                          <Cpu className="w-3 h-3 text-exploit-red" />
                          <span className="text-[8px] font-medium text-ghost-white">Rack {i + 1}</span>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(4)].map((_, j) => (
                            <motion.div
                              key={j}
                              animate={{
                                backgroundColor: ['#1a1a20', '#22c55e', '#1a1a20']
                              }}
                              transition={{
                                duration: 1.5,
                                delay: (i * 0.1) + (j * 0.15),
                                repeat: Infinity,
                                repeatDelay: 2
                              }}
                              className="h-1 flex-1 rounded-full"
                            />
                          ))}
                        </div>
                        <motion.p
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                          className="text-[6px] text-green-400 mt-1"
                        >
                          Active
                        </motion.p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Layer - Services */}
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { name: 'Compute', icon: Cpu },
                      { name: 'Storage', icon: Database },
                      { name: 'Network', icon: Network },
                      { name: 'Security', icon: Shield }
                    ].map((service, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.08 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#1a1a20] border border-border rounded-lg p-2 cursor-pointer hover:border-exploit-red/30 transition-colors"
                      >
                        <div className="flex items-center gap-1 justify-center">
                          <service.icon className="w-3 h-3 text-exploit-red" />
                          <span className="text-[8px] text-ghost-white">{service.name}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {[
                { icon: Zap, title: 'Instant Deploy', desc: 'Provision resources in seconds with our global edge network', color: 'from-yellow-500/20 to-yellow-500/5' },
                { icon: Globe, title: 'Global CDN', desc: 'Content delivery across 200+ PoPs worldwide', color: 'from-blue-500/20 to-blue-500/5' },
                { icon: Activity, title: 'Auto Scaling', desc: 'Automatic scaling based on real-time demand', color: 'from-purple-500/20 to-purple-500/5' },
                { icon: Shield, title: 'DDoS Protection', desc: 'Built-in mitigation against Layer 3-7 attacks', color: 'from-red-500/20 to-red-500/5' },
                { icon: Database, title: 'Managed DB', desc: 'PostgreSQL, MySQL, Redis with automated backups', color: 'from-green-500/20 to-green-500/5' },
                { icon: Cpu, title: 'GPU Instances', desc: 'NVIDIA A100/H100 for AI/ML workloads', color: 'from-cyan-500/20 to-cyan-500/5' }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="bg-gradient-to-br from-[#111115] to-void-black border border-border rounded-xl p-5 cursor-pointer transition-all hover:border-exploit-red/50"
                  style={{ background: `linear-gradient(135deg, ${feature.color})` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-exploit-red/10 rounded-xl flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-exploit-red" />
                    </div>
                    <div>
                      <h4 className="font-bold text-ghost-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-text">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: AI Infrastructure */}
      <section className="py-32 bg-void-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              badge="AI INFRASTRUCTURE"
              title="AI-Powered Security Infrastructure"
              description="Deploy AI models at scale with our purpose-built infrastructure for machine learning and neural networks."
              align="center"
              className="mb-16" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* AI Infrastructure Visualization */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#0a0a0e] to-[#111115] border border-border rounded-2xl p-8 relative h-[500px] overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                  {[...Array(25)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.2, 0.6, 0.2]
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatDelay: 1.5
                      }}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                      }}
                    />
                  ))}
                </div>

                {/* AI Infrastructure Diagram */}
                <div className="relative z-10 h-full flex flex-col space-y-3">
                  {/* Top Layer - AI Model Gateway */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-[#1a1a20] border border-border rounded-xl p-3 w-full"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <BrainCircuit className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-ghost-white">AI Model Gateway</p>
                        <motion.p
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-[10px] text-green-400"
                        >
                          Processing 1M+ requests/sec
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Connection Lines */}
                  <div className="grid grid-cols-4 gap-2">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        className="w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 mx-auto"
                        style={{ height: '15px' }}
                      />
                    ))}
                  </div>

                  {/* GPU Clusters */}
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { name: 'GPU Cluster 1', gpus: '8x A100', status: 'Training' },
                      { name: 'GPU Cluster 2', gpus: '8x H100', status: 'Inference' },
                      { name: 'GPU Cluster 3', gpus: '4x A100', status: 'Training' },
                      { name: 'GPU Cluster 4', gpus: '4x H100', status: 'Inference' }
                    ].map((cluster, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.08 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#1a1a20] border border-purple-500/50 rounded-xl p-2 cursor-pointer"
                      >
                        <div className="text-center mb-1">
                          <div className="w-6 h-6 bg-exploit-red/10 rounded-lg flex items-center justify-center mx-auto mb-1">
                            <Cpu className="w-3 h-3 text-exploit-red" />
                          </div>
                          <p className="text-[8px] font-bold text-ghost-white">{cluster.name}</p>
                          <p className="text-[6px] text-muted-text">{cluster.gpus}</p>
                        </div>
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                          className="text-[6px] text-purple-400 text-center"
                        >
                          {cluster.status}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Connection Lines */}
                  <div className="grid grid-cols-4 gap-2">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                        className="w-0.5 bg-gradient-to-b from-blue-500 to-green-500 mx-auto"
                        style={{ height: '15px' }}
                      />
                    ))}
                  </div>

                  {/* Vector Database Layer */}
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { name: 'Vector DB 1', vectors: '10M', color: 'border-blue-500/50' },
                      { name: 'Vector DB 2', vectors: '10M', color: 'border-blue-500/50' },
                      { name: 'Vector DB 3', vectors: '5M', color: 'border-green-500/50' },
                      { name: 'Vector DB 4', vectors: '5M', color: 'border-green-500/50' }
                    ].map((db, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.08 }}
                        whileHover={{ scale: 1.05 }}
                        className={`bg-[#0a0a0e] border ${db.color} rounded-lg p-2 cursor-pointer`}
                      >
                        <div className="flex items-center gap-1 mb-1">
                          <Database className="w-3 h-3 text-exploit-red" />
                          <span className="text-[8px] font-medium text-ghost-white">{db.name}</span>
                        </div>
                        <motion.p
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                          className="text-[6px] text-blue-400 text-center"
                        >
                          {db.vectors} vectors
                        </motion.p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Connection Lines */}
                  <div className="grid grid-cols-4 gap-2">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.05 }}
                        className="w-0.5 bg-gradient-to-b from-green-500 to-red-500 mx-auto"
                        style={{ height: '15px' }}
                      />
                    ))}
                  </div>

                  {/* Security Layer */}
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { name: 'Adversarial', icon: Shield },
                      { name: 'Encryption', icon: Lock },
                      { name: 'Audit', icon: FileText },
                      { name: 'Compliance', icon: CheckCircle }
                    ].map((sec, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + i * 0.08 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#1a1a20] border border-border rounded-lg p-2 cursor-pointer hover:border-exploit-red/30 transition-colors"
                      >
                        <div className="flex items-center gap-1 justify-center">
                          <sec.icon className="w-3 h-3 text-exploit-red" />
                          <span className="text-[8px] text-ghost-white">{sec.name}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Neural Network Visualization - Mini */}
                  <div className="bg-[#0a0a0e] border border-border rounded-lg p-3 mt-2">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                            className="w-3 h-3 bg-green-500/50 rounded-full"
                          />
                        ))}
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
                            className="w-3 h-3 bg-blue-500/50 rounded-full"
                          />
                        ))}
                      </div>
                      <div className="flex gap-1">
                        {[...Array(2)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                            className="w-3 h-3 bg-red-500/50 rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-[8px] text-center text-muted-text mt-2">Neural Network Layers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Features */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                {[
                  { icon: BrainCircuit, title: 'Neural Network Training', desc: 'Train models on distributed GPU clusters with up to 8x A100 nodes', color: 'from-purple-500/20 to-purple-500/5' },
                  { icon: Zap, title: 'Real-time Inference', desc: 'Sub-millisecond latency for AI-powered threat detection', color: 'from-yellow-500/20 to-yellow-500/5' },
                  { icon: Database, title: 'Vector Database', desc: 'Purpose-built for embeddings and similarity search at scale', color: 'from-blue-500/20 to-blue-500/5' },
                  { icon: Shield, title: 'AI Model Security', desc: 'Model hardening and adversarial attack protection', color: 'from-red-500/20 to-red-500/5' }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="bg-gradient-to-br from-[#111115] to-void-black border border-border rounded-xl p-5 cursor-pointer transition-all hover:border-exploit-red/50"
                    style={{ background: `linear-gradient(135deg, ${feature.color})` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-exploit-red/10 rounded-xl flex items-center justify-center shrink-0">
                        <feature.icon className="w-6 h-6 text-exploit-red" />
                      </div>
                      <div>
                        <h4 className="font-bold text-ghost-white mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-text">{feature.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-exploit-red/10 to-transparent border border-exploit-red/30 rounded-xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  >
                    <Activity className="w-6 h-6 text-exploit-red" />
                  </motion.div>
                  <h4 className="font-bold text-ghost-white">Real-time AI Processing</h4>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer"
                  >
                    <p className="text-2xl font-bold text-white">1M+</p>
                    <p className="text-xs text-muted-text">Inferences/sec</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer"
                  >
                    <p className="text-2xl font-bold text-white">&lt;1ms</p>
                    <p className="text-xs text-muted-text">Latency</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer"
                  >
                    <p className="text-2xl font-bold text-white">99.9%</p>
                    <p className="text-xs text-muted-text">Accuracy</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
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