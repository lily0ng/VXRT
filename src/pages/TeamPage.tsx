import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/shared/SectionHeading';
import {
  Hexagon,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Briefcase,
  Globe,
  Award,
  Target,
  Zap,
  Shield,
  Users,
  BookOpen,
  Heart,
  Trophy,
  Star,
  Building2 } from
'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  certs: string[];
  initials: string;
  color: string;
  avatar?: string;
}

const teamMembers: TeamMember[] = [
{
  name: 'Sarah Chen',
  title: 'Head of Red Team Ops',
  certs: ['OSCP', 'CRTO'],
  initials: 'SC',
  color: 'bg-blue-900/50 text-blue-400'
},
{
  name: 'Marcus Webb',
  title: 'Lead Exploit Developer',
  certs: ['OSCE', 'OSWE'],
  initials: 'MW',
  color: 'bg-red-900/50 text-red-400'
},
{
  name: 'Yuki Tanaka',
  title: 'Cloud Security Researcher',
  certs: ['AWS SA', 'CCSP'],
  initials: 'YT',
  color: 'bg-purple-900/50 text-purple-400'
},
{
  name: 'David Okafor',
  title: 'Senior Penetration Tester',
  certs: ['OSCP', 'CPTS'],
  initials: 'DO',
  color: 'bg-green-900/50 text-green-400'
},
{
  name: 'Elena Volkov',
  title: 'Malware Analyst',
  certs: ['GREM', 'GCFA'],
  initials: 'EV',
  color: 'bg-yellow-900/50 text-yellow-400'
},
{
  name: 'James Liu',
  title: 'Infrastructure Engineer',
  certs: ['CKA', 'AWS DevOps'],
  initials: 'JL',
  color: 'bg-orange-900/50 text-orange-400'
},
{
  name: 'Amara Diallo',
  title: 'Threat Intelligence Lead',
  certs: ['GCTI', 'CTIA'],
  initials: 'AD',
  color: 'bg-teal-900/50 text-teal-400'
},
{
  name: "Ryan O'Sullivan",
  title: 'Purple Team Specialist',
  certs: ['OSCP', 'CDSA'],
  initials: 'RO',
  color: 'bg-indigo-900/50 text-indigo-400'
}];

const openings = [
'Senior Pentester',
'Exploit Developer',
'Cloud Security Engineer',
'Red Team Operator'];

export function TeamPage() {
  return (
    <div className="w-full bg-void-black min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Section 1: Hero */}
        <section className="mb-24 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="inline-flex items-center gap-2 mb-6 bg-dark-base/50 border border-border rounded-full px-4 py-1.5">
            
            <div className="w-2 h-2 rounded-full bg-exploit-red animate-pulse" />
            <span className="text-xs font-heading font-semibold text-exploit-red tracking-widest uppercase">
              The minds behind the exploits
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
              delay: 0.1
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-ghost-white mb-6">
            
            World-class offensive security researchers.
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
              delay: 0.2
            }}
            className="text-lg text-muted-text">
            
            Exploit developers, and red team operators dedicated to uncovering
            critical vulnerabilities before adversaries do.
          </motion.p>
        </section>

        {/* Section 2: Interactive Org Chart */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <SectionHeading
              badge="ORGANIZATION"
              title="Command Structure"
              description="Operational Hierarchy" />
          </motion.div>
          
          <div className="mt-16 relative w-full overflow-x-auto pb-8">
            <div className="min-w-[1000px] flex flex-col items-center px-4">
              
              {/* LEVEL 1: FOUNDER */}
              <motion.div
                initial={{ opacity: 0, y: -30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative bg-dark-base border-2 border-exploit-red rounded-xl p-5 min-w-[220px] text-center shadow-lg shadow-exploit-red/20 cursor-pointer group mb-8">
                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0 bg-exploit-red/5 rounded-xl blur-xl -z-10"
                  animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                {/* Avatar with ring animation */}
                <div className="relative w-16 h-16 mx-auto mb-3">
                  <motion.div
                    className="absolute inset-0 border-2 border-exploit-red/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-exploit-red">
                    <img 
                      src="https://avatars.githubusercontent.com/u/264521594?v=4" 
                      alt="0xff" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-ghost-white group-hover:text-exploit-red transition-colors">0xff</h3>
                <p className="text-xs text-exploit-red font-mono mt-1">Founder & CEO</p>
                <p className="mt-2 text-[10px] text-muted-text">Offensive Security Lead</p>
              </motion.div>

              {/* CONNECTING LINE: Level 1 to 2 */}
              <svg className="w-full h-16 overflow-visible" style={{ maxWidth: '800px' }}>
                <motion.line
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  x1="50%" y1="0" x2="50%" y2="50%"
                  stroke="#c0392b" strokeWidth="2" />
                <motion.line
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  x1="12.5%" y1="50%" x2="87.5%" y2="50%"
                  stroke="#3a3a42" strokeWidth="2" />
                {/* Vertical lines to each department */}
                {[12.5, 37.5, 62.5, 87.5].map((x, i) => (
                  <motion.line
                    key={i}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
                    x1={`${x}%`} y1="50%" x2={`${x}%`} y2="100%"
                    stroke="#3a3a42" strokeWidth="2" />
                ))}
              </svg>

              {/* LEVEL 2: DEPARTMENT HEADS */}
              <div className="flex justify-center w-full max-w-6xl gap-6 mb-8">
                {[
                  { name: 'Sarah Chen', role: 'Offensive Ops Director', icon: Target, color: 'text-red-400' },
                  { name: 'Marcus Webb', role: 'Research Director', icon: Shield, color: 'text-blue-400' },
                  { name: 'James Liu', role: 'Engineering Lead', icon: Hexagon, color: 'text-orange-400' },
                  { name: 'Amara Diallo', role: 'Operations Lead', icon: Users, color: 'text-teal-400' }
                ].map((person, i) => (
                  <motion.div
                    key={person.name}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.12, type: 'spring', stiffness: 100 }}
                    whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}
                    className="bg-dark-base border border-steel-gray/50 rounded-lg p-5 min-w-[200px] text-center cursor-pointer group hover:border-exploit-red/50 transition-all duration-300 relative overflow-hidden">
                    {/* Hover glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-exploit-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="relative w-12 h-12 mx-auto mb-3 bg-void-black rounded-full flex items-center justify-center border border-steel-gray group-hover:border-exploit-red/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-exploit-red/20">
                      <person.icon className={`w-6 h-6 text-muted-text group-hover:${person.color} transition-colors duration-300`} />
                    </div>
                    <h4 className="relative font-heading font-bold text-ghost-white text-sm group-hover:text-exploit-red transition-colors duration-300">{person.name}</h4>
                    <p className="relative text-[11px] text-muted-text mt-2 group-hover:text-ghost-white/70 transition-colors">{person.role}</p>
                  </motion.div>
                ))}
              </div>

              {/* CONNECTING LINES: Level 2 to 3 */}
              <svg className="w-full h-12 overflow-visible" style={{ maxWidth: '1000px' }}>
                {/* Horizontal connector */}
                <motion.line
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  x1="10%" y1="0" x2="90%" y2="0"
                  stroke="#3a3a42" strokeWidth="2" />
                {/* Vertical lines to teams */}
                {[10, 30, 50, 70, 90].map((x, i) => (
                  <motion.line
                    key={i}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1.1 + i * 0.08 }}
                    x1={`${x}%`} y1="0" x2={`${x}%`} y2="100%"
                    stroke="#3a3a42" strokeWidth="2" />
                ))}
              </svg>

              {/* LEVEL 3: TEAMS */}
              <div className="grid grid-cols-5 gap-4 w-full max-w-6xl">
                {[
                  { name: 'Red Team', members: '8 Operators', bg: 'bg-red-900/20', border: 'border-red-900/30', hover: 'hover:border-red-500/50' },
                  { name: 'Penetration Testing', members: '12 Testers', bg: 'bg-orange-900/20', border: 'border-orange-900/30', hover: 'hover:border-orange-500/50' },
                  { name: 'Exploit Dev', members: '6 Researchers', bg: 'bg-purple-900/20', border: 'border-purple-900/30', hover: 'hover:border-purple-500/50' },
                  { name: 'Cloud Security', members: '5 Engineers', bg: 'bg-blue-900/20', border: 'border-blue-900/30', hover: 'hover:border-blue-500/50' },
                  { name: 'Threat Intel', members: '4 Analysts', bg: 'bg-teal-900/20', border: 'border-teal-900/30', hover: 'hover:border-teal-500/50' }
                ].map((team, i) => (
                  <motion.div
                    key={team.name}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 + i * 0.1, type: 'spring', stiffness: 100 }}
                    whileHover={{ scale: 1.03, y: -3, transition: { duration: 0.2 } }}
                    className={`${team.bg} ${team.border} ${team.hover} border rounded-lg p-4 text-center cursor-pointer transition-all duration-300 relative overflow-hidden group`}>
                    <motion.div
                      className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <h5 className="relative font-heading font-semibold text-ghost-white text-xs mb-2 group-hover:text-white transition-colors">{team.name}</h5>
                    <p className="relative text-[10px] text-muted-text group-hover:text-white/70 transition-colors">{team.members}</p>
                  </motion.div>
                ))}
              </div>

              {/* LEVEL 4: SPECIALISTS / CERTIFICATIONS */}
              <div className="mt-8 grid grid-cols-6 gap-3 w-full max-w-4xl">
                {[
                  { cert: 'OSCP', color: 'border-red-500/30 hover:border-red-500/60' },
                  { cert: 'OSCE', color: 'border-orange-500/30 hover:border-orange-500/60' },
                  { cert: 'OSWE', color: 'border-blue-500/30 hover:border-blue-500/60' },
                  { cert: 'CRTO', color: 'border-purple-500/30 hover:border-purple-500/60' },
                  { cert: 'GXPN', color: 'border-yellow-500/30 hover:border-yellow-500/60' },
                  { cert: 'AWS-SA', color: 'border-cyan-500/30 hover:border-cyan-500/60' }
                ].map((item, i) => (
                  <motion.div
                    key={item.cert}
                    initial={{ opacity: 0, y: 15, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4 + i * 0.08, type: 'spring', stiffness: 100 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`bg-void-black border ${item.color} rounded-lg px-3 py-2 text-center cursor-pointer transition-all duration-300 group`}>
                    <span className="text-[11px] font-mono text-muted-text group-hover:text-ghost-white transition-colors">{item.cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Founder Spotlight Card */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-[#1a1a20] to-[#0f0f12] border border-[#2a2a30] rounded-2xl overflow-hidden">
              {/* Top Red Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-exploit-red to-transparent" />
              
              {/* Background Glow */}
              <motion.div
                className="absolute -top-40 -right-40 w-80 h-80 bg-exploit-red/5 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              <div className="relative p-8 md:p-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Avatar */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative shrink-0 mx-auto md:mx-0"
                  >
                    <div className="relative w-32 h-32 md:w-40 md:h-40">
                      {/* Animated Ring */}
                      <motion.div
                        className="absolute inset-0 border-2 border-exploit-red/30 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                      <motion.div
                        className="absolute inset-1 border border-exploit-red/20 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      />
                      {/* Avatar Image */}
                      <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-exploit-red/50">
                        <img
                          src="https://avatars.githubusercontent.com/u/264521594?v=4"
                          alt="0xff"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Pulsing Dot */}
                      <motion.div
                        className="absolute -bottom-1 -right-1 w-6 h-6 bg-exploit-red rounded-full border-2 border-[#1a1a20]"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>

                  {/* Info Section */}
                  <div className="flex-1 text-center md:text-left">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <h2 className="text-3xl md:text-4xl font-heading font-bold text-ghost-white mb-1">0xff</h2>
                      <p className="text-exploit-red font-mono text-sm mb-3">Founder & CEO</p>
                      <p className="text-muted-text text-sm mb-4">
                        Senior Offensive Security Engineer · Zero Day Researcher · Red Teamer · Exploit Developer · Cloud Security Engineer · Senior Software Engineer · Cloud Infra System Engineer · AI Agent Systems Architect · Farmer
                      </p>
                      
                      {/* Quote */}
                      <div className="border-l-2 border-exploit-red/50 pl-4 my-4">
                        <p className="text-ghost-white/80 italic text-sm">
                          "The quieter you become, the more you are able to hear." — Kali Linux
                        </p>
                      </div>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center justify-center md:justify-start gap-3 mt-4"
                    >
                      {[
                        { icon: Github, href: '#' },
                        { icon: Twitter, href: '#' },
                        { icon: Linkedin, href: '#' },
                        { icon: Globe, href: '#' }
                      ].map((social, i) => (
                        <motion.a
                          key={i}
                          href={social.href}
                          className="w-9 h-9 bg-[#2a2a30] hover:bg-exploit-red/20 border border-[#3a3a40] hover:border-exploit-red/50 rounded-lg flex items-center justify-center transition-all duration-300"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <social.icon className="w-4 h-4 text-muted-text hover:text-exploit-red" />
                        </motion.a>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-steel-gray/50 to-transparent my-8" />

                {/* Achievements Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-xs font-mono text-muted-text uppercase tracking-widest mb-4 text-center">Achievements</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { value: '100+', label: 'Vulnerabilities' },
                      { value: '15+', label: 'CVEs' },
                      { value: '30+', label: 'Hall of Fame' },
                      { value: '$250K+', label: 'Bounties' }
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="text-center"
                      >
                        <motion.p
                          className="text-2xl md:text-3xl font-heading font-bold text-ghost-white"
                          whileHover={{ scale: 1.1, color: '#c0392b' }}
                          transition={{ duration: 0.2 }}
                        >
                          {stat.value}
                        </motion.p>
                        <p className="text-xs text-muted-text mt-1">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-steel-gray/50 to-transparent my-8" />

                {/* Certifications Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className="text-xs font-mono text-muted-text uppercase tracking-widest mb-4 text-center">Certifications</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      'OSCP', 'OSWE', 'OSEP', 'OSED', 'CRTP', 'CRTO', 'BSCP', 
                      'eWPTX', 'AWS Security', 'AZ-500', 'CKS', 'GPEN/GXPN'
                    ].map((cert, i) => (
                      <motion.span
                        key={cert}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + i * 0.05 }}
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: 'rgba(192, 57, 43, 0.2)',
                          borderColor: 'rgba(192, 57, 43, 0.5)'
                        }}
                        className="px-3 py-1.5 bg-[#1f1f24] border border-[#2a2a30] rounded-lg text-xs text-ghost-white font-medium cursor-default transition-all duration-300"
                      >
                        {cert}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-steel-gray/50 to-transparent my-8" />

                {/* Skills Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1 }}
                >
                  <h3 className="text-xs font-mono text-muted-text uppercase tracking-widest mb-4 text-center">Skills</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      // Hacking & Security
                      'Offensive Security', 'Penetration Testing', 'Red Teaming', 'Exploit Development',
                      'Zero Day Research', 'Vulnerability Research', 'Bug Bounty Hunting', 'Malware Analysis',
                      'Reverse Engineering', 'Binary Exploitation', 'Buffer Overflow', 'ROP Chains',
                      'Shellcode Development', 'Kernel Exploitation', 'Firmware Analysis', 'IoT Security',
                      'Web Application Security', 'API Security', 'Mobile Security', 'Wireless Security',
                      'Network Security', 'Threat Intelligence', 'Security Operations', 'Incident Response',
                      // Programming & Development
                      'Python', 'C/C++', 'Assembly (x86/x64/ARM)', 'Rust', 'Go', 'JavaScript/TypeScript',
                      'Bash/Shell Scripting', 'PowerShell', 'SQL',
                      'Software Engineering', 'System Programming', 'Kernel Programming',
                      // AI & Machine Learning
                      'AI Systems Architecture', 'Machine Learning', 'Deep Learning', 'Neural Networks',
                      'Natural Language Processing', 'Large Language Models', 'AI Agent Development', 'Prompt Engineering',
                      'TensorFlow', 'PyTorch', 'Hugging Face',
                      // Cloud & Infrastructure
                      'Cloud Security', 'AWS Security', 'Azure Security', 'GCP Security',
                      'Infrastructure Engineering', 'Kubernetes', 'Docker', 'Terraform',
                      'DevSecOps', 'Linux System Administration', 'Windows Internals',
                      // Tools & Frameworks
                      'Metasploit', 'Burp Suite', 'Wireshark', 'Nmap', 'IDA Pro', 'Ghidra',
                      'GDB', 'WinDbg', 'Frida', 'Git', 'GitHub Actions',
                      // Methodologies
                      'MITRE ATT&CK', 'OWASP Top 10', 'PTES', 'OSSTMM', 'NIST Framework'
                    ].map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2 + i * 0.03 }}
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: 'rgba(192, 57, 43, 0.2)',
                          borderColor: 'rgba(192, 57, 43, 0.5)'
                        }}
                        className="px-3 py-1.5 bg-[#1f1f24] border border-[#2a2a30] rounded-lg text-xs text-ghost-white font-medium cursor-default transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-steel-gray/50 to-transparent my-8" />

                {/* Platforms Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                >
                  <h3 className="text-xs font-mono text-muted-text uppercase tracking-widest mb-4 text-center">Platforms</h3>
                  <motion.p 
                    className="text-center text-sm text-muted-text"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                  >
                    HackerOne · Bugcrowd · Synack Red Team · Intigriti · HTB · TryHackMe · PortSwigger · ExploitDB · VulnHub · CTFtime · GitHub Security Lab
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 4: Team Grid - Custom Card Design */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <SectionHeading title="The Operators" description="Elite Talent" />
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {teamMembers.map((member, idx) =>
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <Link to={`/team/${member.name.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                  {/* Card Container */}
                  <div className="relative bg-gradient-to-br from-[#1a1a20] via-[#0f0f12] to-[#0a0a0e] border border-border/50 rounded-2xl overflow-hidden">
                    {/* Top Gradient Border */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-exploit-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Animated Glow Effect */}
                    <motion.div
                      className="absolute -top-20 -right-20 w-40 h-40 bg-exploit-red/5 rounded-full blur-3xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    
                    {/* Content */}
                    <div className="relative p-6">
                      {/* Avatar Section */}
                      <div className="relative w-20 h-20 mx-auto mb-4">
                        <motion.div
                          className="absolute inset-0 border-2 border-exploit-red/30 rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-exploit-red/50">
                          <img
                            src={member.avatar || `https://ui-avatars.com/api/?name=${member.initials}&background=random&color=fff`}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Status Indicator */}
                        <motion.div
                          className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#1a1a20]"
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                      
                      {/* Name & Title */}
                      <div className="text-center mb-4">
                        <h3 className="text-lg font-heading font-bold text-ghost-white group-hover:text-exploit-red transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-sm text-muted-text mt-1">{member.title}</p>
                      </div>
                      
                      {/* Certifications */}
                      <div className="flex flex-wrap justify-center gap-1.5 mb-4">
                        {member.certs.slice(0, 3).map((cert, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-[#0a0a0e] border border-border/50 rounded-md text-[10px] text-muted-text group-hover:border-exploit-red/30 group-hover:text-ghost-white/80 transition-all"
                          >
                            {cert}
                          </span>
                        ))}
                        {member.certs.length > 3 && (
                          <span className="px-2 py-1 bg-exploit-red/10 border border-exploit-red/30 rounded-md text-[10px] text-exploit-red">
                            +{member.certs.length - 3}
                          </span>
                        )}
                      </div>
                      
                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent mb-4" />
                      
                      {/* Action Button */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-exploit-red/10 border border-exploit-red/30 rounded-lg text-sm font-medium text-exploit-red group-hover:bg-exploit-red group-hover:text-white transition-all duration-300"
                      >
                        <span>View Profile</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}
          </div>
        </section>

        {/* Section 6: Join the Team CTA */}
        <section className="bg-dark-base rounded-2xl p-8 md:p-12 text-center border border-steel-gray relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-exploit-red to-transparent opacity-50" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ghost-white mb-4">
            Join the offensive
          </h2>
          <p className="text-muted-text mb-8 max-w-2xl mx-auto">
            We're always looking for elite security professionals. If you have a
            passion for breaking things and building exploits, we want to talk.
          </p>
            
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {openings.map((role, i) =>
            <motion.div
              key={role}
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: i * 0.1
              }}
              className="flex items-center gap-2 px-4 py-2 bg-void-black border border-steel-gray rounded-lg text-sm text-ghost-white">
              
                <Briefcase size={14} className="text-exploit-red" />
                {role}
              </motion.div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-6 py-3 bg-exploit-red hover:bg-red-700 text-ghost-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
              View Open Positions <ArrowRight size={18} />
            </button>
            <button className="w-full sm:w-auto px-6 py-3 bg-transparent border border-steel-gray hover:bg-steel-gray/30 text-ghost-white font-semibold rounded-lg transition-colors">
              Send Resume
            </button>
          </div>
        </section>

        {/* Section 7: Team Culture & Values */}
        <section className="py-20 border-t border-steel-gray/30 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <SectionHeading
              badge="OUR CULTURE"
              title="What Makes Us Different"
              description="A culture built on curiosity, collaboration, and the relentless pursuit of breaking things responsibly." />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Target, title: 'Mission First', desc: 'Every engagement is about making our clients more secure, not just finding bugs.', color: 'text-red-400' },
              { icon: Zap, title: 'Move Fast', desc: 'Zero bureaucracy. Decisions are made by the engineers doing the work.', color: 'text-yellow-400' },
              { icon: Shield, title: 'Ethical by Default', desc: 'We only use our skills for defense. Full stop. No exceptions.', color: 'text-blue-400' },
              { icon: Users, title: 'Collective Growth', desc: 'Knowledge sharing is mandatory. Internal workshops every Friday.', color: 'text-green-400' }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group">
                <div className="bg-dark-base border border-steel-gray rounded-xl p-6 h-full hover:border-exploit-red/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-void-black rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <value.icon className={`w-6 h-6 ${value.color}`} />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-ghost-white mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-text">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Perks Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-dark-base to-void-black border border-steel-gray rounded-xl p-8 relative overflow-hidden group">
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-exploit-red/10 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }} />
              <Heart className="w-10 h-10 text-exploit-red mb-4" />
              <h4 className="text-xl font-heading font-bold text-ghost-white mb-2">Health & Wellness</h4>
              <p className="text-muted-text text-sm mb-4">Premium health insurance, mental health support, and unlimited PTO. Your wellbeing comes first.</p>
              <div className="flex flex-wrap gap-2">
                {['100% Coverage', 'Therapy', 'Gym'].map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-exploit-red/10 text-exploit-red rounded">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-dark-base to-void-black border border-steel-gray rounded-xl p-8 relative overflow-hidden group">
              <motion.div
                className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 5, repeat: Infinity }} />
              <BookOpen className="w-10 h-10 text-blue-400 mb-4" />
              <h4 className="text-xl font-heading font-bold text-ghost-white mb-2">Learning Budget</h4>
              <p className="text-muted-text text-sm mb-4">$5,000 annual budget for conferences, certifications, courses, and research materials.</p>
              <div className="flex flex-wrap gap-2">
                {['Certifications', 'Conferences', 'Hardware'].map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded">{tag}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-dark-base to-void-black border border-steel-gray rounded-xl p-8 relative overflow-hidden group">
              <motion.div
                className="absolute -top-20 -left-20 w-40 h-40 bg-green-500/10 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }} />
              <Globe className="w-10 h-10 text-green-400 mb-4" />
              <h4 className="text-xl font-heading font-bold text-ghost-white mb-2">Remote First</h4>
              <p className="text-muted-text text-sm mb-4">Work from anywhere. Quarterly team retreats in locations like Iceland, Tokyo, and Dubai.</p>
              <div className="flex flex-wrap gap-2">
                {['Remote', 'Retreats', 'Flexible'].map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-green-500/10 text-green-400 rounded">{tag}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 7: Achievements & Impact */}
        <section className="py-20 border-t border-steel-gray/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <SectionHeading
              badge="IMPACT"
              title="Our Track Record"
              description="Numbers that reflect our commitment to offensive security excellence." />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: '150+', label: 'CVEs Discovered', icon: Award, color: 'text-red-400' },
              { value: '$2M+', label: 'Bug Bounties', icon: Trophy, color: 'text-yellow-400' },
              { value: '500+', label: 'Clients Assessed', icon: Shield, color: 'text-blue-400' },
              { value: '12', label: 'Zero-Days', icon: Star, color: 'text-purple-400' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-6 text-center group hover:border-exploit-red/50 transition-all duration-300">
                <div className={`w-12 h-12 mx-auto mb-4 bg-void-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-ghost-white mb-1">{stat.value}</div>
                <div className="text-sm text-muted-text">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Timeline of Notable Achievements */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h4 className="text-xl font-heading font-bold text-ghost-white mb-8 text-center">Notable Milestones</h4>
            <div className="space-y-6 relative before:absolute before:left-4 md:before:left-1/2 md:before:-translate-x-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-steel-gray">
              {[
                { year: '2025', title: 'VXRT CTF Championship', desc: 'Hosted largest CTF in Africa with 5,000+ participants' },
                { year: '2024', title: 'Zero-Day Discovery', desc: 'Discovered critical RCE in widely-used VPN appliance' },
                { year: '2023', title: 'Team Expansion', desc: 'Grew to 50+ elite researchers across 4 continents' },
                { year: '2022', title: 'Company Founded', desc: 'VXRT was born with a mission to revolutionize offensive security' }
              ].map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`relative flex items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:justify-center`}>
                  <div className={`hidden md:block w-5/12 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-dark-base border border-steel-gray rounded-xl p-4 hover:border-exploit-red/50 transition-colors">
                      <span className="text-exploit-red font-mono text-sm">{milestone.year}</span>
                      <h5 className="font-heading font-bold text-ghost-white mt-1">{milestone.title}</h5>
                      <p className="text-sm text-muted-text mt-1">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-dark-base border-2 border-exploit-red rounded-full flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-exploit-red rounded-full" />
                  </div>
                  <div className={`md:hidden w-full ml-12`}>
                    <div className="bg-dark-base border border-steel-gray rounded-xl p-4">
                      <span className="text-exploit-red font-mono text-sm">{milestone.year}</span>
                      <h5 className="font-heading font-bold text-ghost-white mt-1">{milestone.title}</h5>
                      <p className="text-sm text-muted-text mt-1">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Partners & Collaborations */}
        <section className="py-20 border-t border-steel-gray/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <SectionHeading
              badge="PARTNERSHIPS"
              title="Our Network"
              description="We collaborate with leading organizations, universities, and security communities worldwide." />
          </motion.div>

          {/* Partner Logos Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {['Academic Partners', 'Security Vendors', 'Bug Bounty Platforms', 'Industry Alliances'].map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(192, 57, 43, 0.5)' }}
                className="bg-dark-base border border-steel-gray rounded-xl p-6 flex flex-col items-center justify-center gap-3 h-32 cursor-pointer transition-all duration-300">
                <Building2 className="w-8 h-8 text-muted-text" />
                <span className="text-sm font-medium text-ghost-white text-center">{type}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Academic & Research Partners */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-dark-base border border-steel-gray rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-exploit-red/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-exploit-red" />
                </div>
                <h4 className="font-heading font-bold text-ghost-white">Academic Research</h4>
              </div>
              <p className="text-muted-text text-sm mb-4">Collaborating with top universities on cutting-edge security research. Our researchers regularly publish at conferences like Black Hat, DEF CON, and Usenix.</p>
              <div className="flex flex-wrap gap-2">
                {['Black Hat', 'DEF CON', 'Usenix', 'CCS'].map((conf) => (
                  <span key={conf} className="text-xs px-3 py-1 bg-void-black border border-steel-gray text-muted-text rounded-full">{conf}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-dark-base border border-steel-gray rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="font-heading font-bold text-ghost-white">Community Events</h4>
              </div>
              <p className="text-muted-text text-sm mb-4">Hosting monthly meetups, workshops, and mentorship programs. We believe in giving back to the security community that made us who we are.</p>
              <div className="flex flex-wrap gap-2">
                {['Meetups', 'Workshops', 'Mentorship', 'Open Source'].map((item) => (
                  <span key={item} className="text-xs px-3 py-1 bg-void-black border border-steel-gray text-muted-text rounded-full">{item}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>);

}