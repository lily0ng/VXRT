import { motion } from 'framer-motion';
import { 
  Target,
  Rocket,
  Shield,
  Users,
  Globe,
  Zap,
  Code,
  CheckCircle,
  Calendar,
  Heart,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Cpu,
  Eye,
  Lightbulb,
  Handshake,
  Trophy
} from 'lucide-react';

export function AboutPages() {
  return (
    <div className="w-full bg-void-black min-h-screen">
      {/* Hero Section - About VXRT */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-exploit-red/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-exploit-red/10 border border-exploit-red/30 rounded-full text-sm font-mono text-exploit-red uppercase tracking-wider">
                About VXRT
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-ghost-white mb-6 leading-tight">
              Pioneering the Future of
              <span className="block text-exploit-red">Offensive Security</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-text max-w-3xl mx-auto mb-12">
              VXRT is a next-generation offensive security platform built for red teams, penetration testers, and security researchers. We provide the tools, infrastructure, and intelligence needed to stay ahead of threats.
            </p>
            <div className="flex justify-center gap-8">
              {[
                { value: '500+', label: 'Enterprise Clients' },
                { value: '10K+', label: 'Security Pros' },
                { value: '50+', label: 'Countries' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-ghost-white mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-text">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 border-b border-border/30 bg-gradient-to-b from-void-black to-[#0a0a0e] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-exploit-red to-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-exploit-red/30">
                <Eye className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-heading font-bold text-ghost-white mb-8 text-center"
            >
              Our Vision
            </motion.h2>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-muted-text leading-relaxed text-center"
            >
              To become the <span className="text-exploit-red font-bold">global standard</span> for offensive security infrastructure, empowering organizations to proactively identify and neutralize threats before they become breaches.
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
            >
              <span className="inline-block px-6 py-3 bg-exploit-red/10 border border-exploit-red/30 rounded-full text-lg text-exploit-red font-medium">
                Security is proactive, not reactive
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 border-b border-border/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(239,68,68,0.05),transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-exploit-red to-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-exploit-red/30">
                <Target className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-heading font-bold text-ghost-white mb-8 text-center"
            >
              Our Mission
            </motion.h2>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-muted-text leading-relaxed text-center mb-16"
            >
              Delivering <span className="text-exploit-red font-bold">cutting-edge offensive security</span> tools, infrastructure, and intelligence
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: 'Protect', desc: 'Defend organizations through proactive security testing', color: 'from-red-500 to-orange-500' },
                { icon: Zap, title: 'Empower', desc: 'Equip security teams with advanced offensive capabilities', color: 'from-yellow-500 to-amber-500' },
                { icon: Globe, title: 'Connect', desc: 'Build a global community of security professionals', color: 'from-blue-500 to-cyan-500' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  whileHover={{ y: -12, scale: 1.05 }}
                  className="bg-gradient-to-br from-[#1a1a20] to-[#0f0f12] border border-border/50 rounded-3xl p-10 text-center hover:border-exploit-red/50 transition-all group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <item.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-ghost-white mb-3 group-hover:text-exploit-red transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-text leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Founder Section */}
      <section className="py-24 border-b border-border/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-exploit-red/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-border/50">
                  <Users className="w-32 h-32 text-exploit-red" />
                </div>
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-exploit-red/10 rounded-full blur-2xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-heading font-bold text-ghost-white mb-6">
                  About the Founder
                </h2>
                <h3 className="text-2xl font-bold text-exploit-red mb-4">0xff</h3>
                <p className="text-muted-text mb-6 leading-relaxed">
                  0xff is a veteran offensive security researcher with over 15 years of experience in penetration testing, exploit development, and red teaming. Formerly a security consultant for Fortune 500 companies, 0xff founded VXRT with a vision to democratize access to enterprise-grade offensive security infrastructure.
                </p>
                <p className="text-muted-text mb-8 leading-relaxed">
                  Recognized for discovering multiple critical vulnerabilities in enterprise software and contributing to the security community through open-source tools and research publications.
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: Linkedin, label: 'LinkedIn' },
                    { icon: Twitter, label: 'Twitter' },
                    { icon: Github, label: 'GitHub' }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-[#1a1a20] border border-border/50 rounded-xl flex items-center justify-center hover:border-exploit-red/50 transition-colors"
                    >
                      <social.icon className="w-5 h-5 text-muted-text hover:text-exploit-red" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Team Section - Organization Chart */}
      <section className="py-24 border-b border-border/30 bg-gradient-to-b from-void-black to-[#0a0a0e]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Users className="w-16 h-16 text-exploit-red mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-4">
              Our Team
            </h2>
            <p className="text-muted-text max-w-2xl mx-auto">
              Meet the experts powering VXRT's offensive security platform
            </p>
          </motion.div>

          {/* Organization Chart */}
          <div className="max-w-6xl mx-auto">
            {/* CEO/Founder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center mb-8"
            >
              <div className="bg-gradient-to-br from-exploit-red/20 to-red-600/20 border-2 border-exploit-red rounded-2xl p-6 text-center min-w-[280px]">
                <div className="w-20 h-20 bg-exploit-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-ghost-white mb-1">0xff</h3>
                <p className="text-sm text-exploit-red font-medium">Founder & CEO</p>
              </div>
            </motion.div>

            {/* Connecting Line */}
            <div className="flex justify-center mb-8">
              <div className="w-0.5 h-8 bg-gradient-to-b from-exploit-red to-transparent" />
            </div>

            {/* Department Heads */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            >
              {[
                { name: 'Priya Sharma', role: 'Head of Research', icon: Shield, color: 'from-purple-500 to-indigo-500' },
                { name: 'Marcus Webb', role: 'Head of Red Team', icon: Target, color: 'from-red-500 to-orange-500' },
                { name: 'Sarah Kovacs', role: 'Head of Engineering', icon: Code, color: 'from-blue-500 to-cyan-500' }
              ].map((head, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="bg-gradient-to-br from-[#1a1a20] to-[#0f0f12] border border-border/50 rounded-2xl p-6 text-center hover:border-exploit-red/50 transition-all group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${head.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <head.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-ghost-white mb-1 group-hover:text-exploit-red transition-colors">
                    {head.name}
                  </h3>
                  <p className="text-sm text-muted-text">{head.role}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Team Members Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12"
            >
              {[
                { name: 'Yuki Tanaka', role: 'Exploit Developer', dept: 'Research' },
                { name: 'James Wilson', role: 'Security Researcher', dept: 'Research' },
                { name: 'Emily Chen', role: 'ML Engineer', dept: 'Research' },
                { name: 'David Kim', role: 'Senior Red Teamer', dept: 'Red Team' },
                { name: 'Lisa Thompson', role: 'Red Team Lead', dept: 'Red Team' },
                { name: 'Robert Garcia', role: 'Penetration Tester', dept: 'Red Team' },
                { name: 'Amanda Foster', role: 'Full Stack Dev', dept: 'Engineering' },
                { name: 'Michael Roberts', role: 'Backend Engineer', dept: 'Engineering' },
                { name: 'Jennifer Lee', role: 'DevOps Engineer', dept: 'Engineering' },
                { name: 'Chris Martinez', role: 'Frontend Dev', dept: 'Engineering' },
                { name: 'Alex Johnson', role: 'QA Engineer', dept: 'Engineering' },
                { name: 'Taylor Brown', role: 'Security Analyst', dept: 'Red Team' }
              ].map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.05 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="bg-[#1a1a20] border border-border/50 rounded-xl p-4 text-center hover:border-exploit-red/50 transition-all group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-exploit-red/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-exploit-red/20 transition-colors">
                    <Users className="w-6 h-6 text-exploit-red" />
                  </div>
                  <h4 className="text-sm font-bold text-ghost-white mb-1 group-hover:text-exploit-red transition-colors truncate">
                    {member.name}
                  </h4>
                  <p className="text-xs text-muted-text truncate">{member.role}</p>
                  <span className="text-[10px] text-exploit-red/60 mt-1 block">{member.dept}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Total Team Count */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="text-center mt-12"
            >
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-exploit-red/20 to-purple-500/20 border border-exploit-red/30 rounded-2xl px-8 py-6">
                <Users className="w-8 h-8 text-exploit-red" />
                <div className="text-left">
                  <div className="text-3xl font-bold text-ghost-white">50+</div>
                  <div className="text-sm text-muted-text">Total Team Members</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 border-b border-border/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Heart className="w-16 h-16 text-exploit-red mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-4">
              Core Values
            </h2>
            <p className="text-muted-text max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Security First', desc: 'Every decision prioritizes security and privacy' },
              { icon: Lightbulb, title: 'Innovation', desc: 'Continuously pushing boundaries in offensive security' },
              { icon: Users, title: 'Community', desc: 'Building and supporting the security community' },
              { icon: CheckCircle, title: 'Excellence', desc: 'Delivering quality in every product and service' },
              { icon: Handshake, title: 'Integrity', desc: 'Transparent and ethical in all our dealings' },
              { icon: Rocket, title: 'Agility', desc: 'Fast response to emerging threats and needs' }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-[#1a1a20] to-[#0f0f12] border border-border/50 rounded-2xl p-8 hover:border-exploit-red/50 transition-all"
              >
                <value.icon className="w-12 h-12 text-exploit-red mb-4" />
                <h3 className="text-xl font-bold text-ghost-white mb-3">{value.title}</h3>
                <p className="text-muted-text">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-24 border-b border-border/30 bg-gradient-to-b from-void-black to-[#0a0a0e]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Calendar className="w-16 h-16 text-exploit-red mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-4">
              Our Journey
            </h2>
            <p className="text-muted-text max-w-2xl mx-auto">
              Key milestones in VXRT's growth
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            {[
              { year: '2020', title: 'Foundation', desc: 'VXRT founded with a vision to democratize offensive security' },
              { year: '2021', title: 'Platform Launch', desc: 'Released first version of offensive security platform' },
              { year: '2022', title: 'Global Expansion', desc: 'Expanded to 20+ countries with 100+ enterprise clients' },
              { year: '2023', title: 'AI Integration', desc: 'Launched AI-powered security tools and services' },
              { year: '2024', title: 'Series A Funding', desc: 'Secured $50M to accelerate product development' },
              { year: '2025', title: 'Market Leader', desc: 'Became leading offensive security platform globally' }
            ].map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-exploit-red/10 border-2 border-exploit-red rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-exploit-red">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-r from-[#1a1a20] to-[#0f0f12] border border-border/50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-ghost-white mb-2">{milestone.title}</h3>
                  <p className="text-muted-text">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 border-b border-border/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Handshake className="w-16 h-16 text-exploit-red mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-4">
              Trusted Partners
            </h2>
            <p className="text-muted-text max-w-2xl mx-auto">
              Collaborating with industry leaders to advance security
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { name: 'AWS', logo: <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.048.08.064.16.064.232 0 .128-.08.208-.24.208-.064 0-.16-.032-.272-.096-.112-.064-.24-.152-.384-.264-.48-.424-.912-.76-1.28-1.008-.368-.248-.816-.376-1.344-.376-.632 0-1.184.12-1.648.36-.464.24-.856.576-1.168.992-.312.416-.544.912-.696 1.472-.152.56-.232 1.184-.232 1.856 0 .72.08 1.36.232 1.92.152.56.384 1.04.696 1.44.312.4.704.72 1.168.952.464.232 1.016.352 1.648.352.544 0 1-.12 1.368-.36.368-.24.8-.568 1.28-.984.144-.12.272-.216.384-.272.112-.056.2-.08.272-.08.16 0 .24.088.24.224 0 .08-.016.168-.064.256-.048.088-.128.184-.232.28-.312.312-.712.568-1.184.76-.472.192-1.04.288-1.696.288-.816 0-1.544-.144-2.176-.432-.632-.288-1.168-.688-1.6-1.184-.432-.496-.76-1.088-.976-1.76-.216-.672-.328-1.416-.328-2.216 0-.816.112-1.568.328-2.248.216-.68.544-1.272.976-1.76.432-.488.968-.872 1.6-1.152.632-.28 1.36-.424 2.176-.424.664 0 1.232.096 1.696.288.464.192.872.456 1.2.784.104.096.184.192.232.272.048.08.072.16.072.232zm4.64 5.24c0 .48.048.872.144 1.168.096.296.224.544.384.736.16.192.352.328.568.408.216.08.456.12.712.12.264 0 .504-.04.72-.12.216-.08.408-.216.568-.408.16-.192.288-.44.384-.736.096-.296.144-.688.144-1.168 0-.48-.048-.872-.144-1.168-.096-.296-.224-.544-.384-.736-.16-.192-.352-.328-.568-.408-.216-.08-.456-.12-.72-.12-.256 0-.496.04-.712.12-.216.08-.408.216-.568.408-.16.192-.288.44-.384.736-.096.296-.144.688-.144 1.168zm-1.6 0c0-.632.088-1.2.264-1.696.176-.496.424-.92.736-1.264.312-.344.688-.608 1.12-.792.432-.184.912-.272 1.432-.272.528 0 1.008.088 1.44.272.432.184.8.448 1.112.792.312.344.56.768.736 1.264.176.496.264 1.064.264 1.696 0 .632-.088 1.2-.264 1.696-.176.496-.424.92-.736 1.264-.312.344-.688.608-1.12.792-.432.184-.912.272-1.44.272-.52 0-1-.088-1.432-.272-.432-.184-.8-.448-1.112-.792-.312-.344-.56-.768-.736-1.264-.176-.496-.264-1.064-.264-1.696zm8.232-3.776v1.472c.16-.24.336-.456.528-.648.192-.192.4-.352.624-.48.224-.128.464-.224.72-.288.256-.064.52-.096.792-.096.544 0 1.016.12 1.408.36.392.24.712.568.952.984.24.416.416.904.528 1.456.112.552.168 1.152.168 1.792v3.6h-1.6v-3.36c0-.424-.032-.8-.096-1.12-.064-.32-.168-.592-.304-.808-.136-.216-.312-.384-.52-.496-.208-.112-.456-.168-.744-.168-.288 0-.552.056-.792.168-.24.112-.448.28-.624.504-.176.224-.312.504-.408.84-.096.336-.144.728-.144 1.168v3.28h-1.6v-7.6h1.6zm9.28 0v1.472c.16-.24.336-.456.528-.648.192-.192.4-.352.624-.48.224-.128.464-.224.72-.288.256-.064.52-.096.792-.096.544 0 1.016.12 1.408.36.392.24.712.568.952.984.24.416.416.904.528 1.456.112.552.168 1.152.168 1.792v3.6h-1.6v-3.36c0-.424-.032-.8-.096-1.12-.064-.32-.168-.592-.304-.808-.136-.216-.312-.384-.52-.496-.208-.112-.456-.168-.744-.168-.288 0-.552.056-.792.168-.24.112-.448.28-.624.504-.176.224-.312.504-.408.84-.096.336-.144.728-.144 1.168v3.28h-1.6v-7.6h1.6z"/></svg> },
              { name: 'Anthropic', logo: <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg> },
              { name: 'Google Cloud', logo: <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg> },
              { name: 'Microsoft', logo: <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16"><path d="M1 1h10v10H1V1zm12 0h10v10H13V1zM1 13h10v10H1V13zm12 0h10v10H13V13z"/></svg> },
              { name: 'OpenAI', logo: <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16"><circle cx="12" cy="12" r="10"/></svg> },
              { name: 'Meta', logo: <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/></svg> },
              { name: 'NVIDIA', logo: <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> },
              { name: 'Cisco', logo: <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg> },
              { name: 'Palo Alto', logo: <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16"><path d="M12 2L2 22h20L12 2zm0 4l6 14H6l6-14z"/></svg> },
              { name: 'CrowdStrike', logo: <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg> }
            ].map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-gradient-to-br from-[#1a1a20] to-[#0f0f12] border border-border/50 rounded-2xl p-8 hover:border-exploit-red/50 transition-all group flex items-center justify-center"
              >
                <div className="text-muted-text group-hover:text-ghost-white transition-colors">
                  {partner.logo}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      {/* Careers Section */}
      <section className="py-24 border-b border-border/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Users className="w-16 h-16 text-exploit-red mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-4">
              Join Our Team
            </h2>
            <p className="text-muted-text max-w-2xl mx-auto">
              Build the future of offensive security with us
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Senior Red Teamer', location: 'Remote', type: 'Full-time', icon: Target },
              { title: 'ML Security Engineer', location: 'San Francisco', type: 'Full-time', icon: Cpu },
              { title: 'Security Researcher', location: 'Remote', type: 'Full-time', icon: Shield },
              { title: 'Full Stack Developer', location: 'New York', type: 'Full-time', icon: Code },
              { title: 'Product Manager', location: 'Remote', type: 'Full-time', icon: Zap },
              { title: 'Sales Engineer', location: 'London', type: 'Full-time', icon: Globe }
            ].map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-[#1a1a20] to-[#0f0f12] border border-border/50 rounded-2xl p-6 hover:border-exploit-red/50 transition-all group"
              >
                <job.icon className="w-10 h-10 text-exploit-red mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-ghost-white mb-2 group-hover:text-exploit-red transition-colors">
                  {job.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-text mb-4">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#0a0a0e] text-ghost-white font-medium py-2 rounded-lg border border-border/50 hover:border-exploit-red/50 transition-colors"
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-text mb-4">Don't see a role that fits?</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-exploit-red text-ghost-white font-bold px-8 py-3 rounded-xl hover:bg-red-700 transition-colors"
            >
              Send General Application
            </motion.button>
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-void-black to-[#0a0a0e]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Trophy className="w-16 h-16 text-exploit-red mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-6">
              Ready to Elevate Your Security?
            </h2>
            <p className="text-xl text-muted-text mb-12">
              Join thousands of security professionals who trust VXRT for their offensive security needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-exploit-red text-ghost-white font-bold px-8 py-4 rounded-xl hover:bg-red-700 transition-colors"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1a1a20] text-ghost-white font-bold px-8 py-4 rounded-xl border border-border/50 hover:border-exploit-red/50 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
