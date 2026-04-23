import { motion } from 'framer-motion';
import { Users, Plus, Shield, Award, Globe, Target } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }
  }
};

export function Team() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-6 lg:p-8 space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Team</h1>
          <p className="text-muted-gray mt-1">Manage team members and permissions</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors">
          <Plus className="w-5 h-5" />
          Invite Member
        </button>
      </motion.div>

      {/* Founder Section */}
      <motion.div variants={itemVariants} className="bg-gradient-to-br from-[#1a1a20] to-[#0f0f12] border border-[#2a2a30] rounded-2xl p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0 mx-auto md:mx-0">
            <div className="absolute inset-0 border-2 border-exploit-red/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-1 rounded-full overflow-hidden border-2 border-exploit-red/50">
              <img
                src="https://avatars.githubusercontent.com/u/264521594?v=4"
                alt="0xff"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-heading font-bold text-ghost-white">0xff</h2>
            <p className="text-exploit-red font-mono text-sm mb-2">Founder & CEO</p>
            <p className="text-muted-gray text-sm mb-3">
              Senior Offensive Security Engineer · Zero Day Researcher · Red Teamer · Exploit Developer · Cloud Security Engineer · Senior Software Engineer · Cloud Infra System Engineer · AI Agent Systems Architect · Farmer
            </p>
            <div className="border-l-2 border-exploit-red/50 pl-4 my-3">
              <p className="text-ghost-white/80 italic text-sm">
                "The quieter you become, the more you are able to hear." — Kali Linux
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              {[
                { value: '15+', label: 'CVEs', icon: Shield },
                { value: '$250K+', label: 'Bounties', icon: Award },
                { value: '15+', label: 'Certs', icon: Target },
                { value: '10+', label: 'Platforms', icon: Globe }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <stat.icon className="w-4 h-4 text-exploit-red mx-auto mb-1" />
                  <p className="text-lg font-bold text-ghost-white">{stat.value}</p>
                  <p className="text-xs text-muted-gray">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div variants={itemVariants} className="bg-dark-base border border-steel-gray rounded-xl p-6">
        <h3 className="text-lg font-semibold text-ghost-white mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
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
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-[#1f1f24] border border-[#2a2a30] rounded-lg text-xs text-ghost-white font-medium hover:bg-exploit-red/20 hover:border-exploit-red/50 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Content Placeholder */}
      <motion.div variants={itemVariants} className="bg-dark-base border border-steel-gray rounded-xl p-12 text-center">
        <Users className="w-16 h-16 text-exploit-red/30 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-ghost-white mb-2">Team Management</h3>
        <p className="text-muted-gray max-w-md mx-auto">
          Invite team members and manage their access levels
        </p>
      </motion.div>
    </motion.div>
  );
}
