import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
'../components/ui/accordion';
import { AnimatedGridBackground } from '../components/shared/AnimatedGridBackground';
import { AnimatedCounter } from '../components/shared/AnimatedCounter';
import {
  MessageSquare,
  Trophy,
  Users,
  Shield,
  Mail,
  Clock,
  Flame,
  CheckCircle,
  AlertTriangle,
  Lock,
  Target,
  X } from
'lucide-react';
import { useState } from 'react';

export function CommunityPage() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teamName: '',
    discord: ''
  });

  const handleRegister = (event: any) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration:', { event: selectedEvent, ...formData });
    setIsModalOpen(false);
    setFormData({ name: '', email: '', teamName: '', discord: '' });
  };

  return (
    <div className="w-full bg-void-black min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <AnimatedGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-exploit-red/10 border border-exploit-red/30 rounded-full text-sm font-mono text-exploit-red uppercase tracking-wider">
                Community
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-ghost-white mb-6 leading-tight">
              Connect. Compete.
              <span className="block text-exploit-red">Collaborate.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-text max-w-3xl mx-auto mb-12">
              Join thousands of offensive security professionals sharing knowledge, tools, and techniques.
            </p>
          </motion.div>
          
          {/* Animated Hero Elements */}
          <div className="flex justify-center gap-6 md:gap-10 mt-8">
            {[
              { icon: MessageSquare, label: 'Discord', count: '10K+', color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-500/10' },
              { icon: Trophy, label: 'CTFs', count: '500+', color: 'from-yellow-500 to-orange-500', bg: 'bg-yellow-500/10' },
              { icon: Users, label: 'Members', count: '10K+', color: 'from-purple-500 to-pink-500', bg: 'bg-purple-500/10' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.15, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="flex flex-col items-center gap-4 bg-gradient-to-br from-[#1a1a20] to-[#0f0f12] border border-border/50 rounded-2xl p-6 cursor-pointer hover:border-exploit-red/50 transition-all duration-300 shadow-lg hover:shadow-exploit-red/20 group min-w-[140px]"
              >
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="w-7 h-7 text-ghost-white" />
                </motion.div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-ghost-white block mb-1">{item.count}</span>
                  <span className="text-sm text-muted-text font-medium">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discord Highlight */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <Card className="bg-gradient-to-br from-[#1e1f22] to-[#2b2d31] border-[#5865F2]/30 overflow-hidden relative">
              {/* Animated Background Glow */}
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-[#5865F2]/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#5865F2] to-[#4752C4]" />
              <CardContent className="p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-grow text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center justify-center lg:justify-start gap-3 mb-4"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-10 h-10 bg-[#5865F2]/20 rounded-xl flex items-center justify-center"
                    >
                      <MessageSquare className="w-6 h-6 text-[#5865F2]" fill="currentColor" />
                    </motion.div>
                    <h2 className="text-3xl font-heading font-bold text-white">
                      Join the VXRT Community
                    </h2>
                  </motion.div>
                  <p className="text-[#b5bac1] font-body text-lg mb-6">
                    Join 10,000+ security professionals discussing exploit dev,
                    red teaming, and participating in exclusive CTFs.
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 bg-[#2b2d31] px-4 py-2 rounded-lg"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-3 h-3 rounded-full bg-green-500"
                      />
                      <span className="text-[#b5bac1] font-mono text-sm">2,401 Online</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 bg-[#2b2d31] px-4 py-2 rounded-lg"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="w-3 h-3 rounded-full bg-gray-500"
                      />
                      <span className="text-[#b5bac1] font-mono text-sm">10,892 Members</span>
                    </motion.div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold px-8 py-6 text-lg w-full lg:w-auto shadow-lg shadow-[#5865F2]/30">
                      Join Discord Server
                    </Button>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="w-full lg:w-80 bg-[#2b2d31] rounded-xl p-5 flex-shrink-0 border border-[#1e1f22]"
                >
                  <h4 className="text-[#80848e] font-bold text-xs uppercase mb-4 px-2 flex items-center gap-2">
                    <Flame className="w-4 h-4 text-exploit-red" />
                    Popular Channels
                  </h4>
                  <div className="space-y-2">
                    {[
                      { name: 'general', icon: MessageSquare },
                      { name: 'ctf-challenges', icon: Trophy },
                      { name: 'exploit-dev', icon: Shield },
                      { name: 'job-board', icon: Users },
                      { name: 'tool-sharing', icon: Mail }
                    ].map((channel, i) => (
                      <motion.div
                        key={channel.name}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        whileHover={{ x: 5, backgroundColor: '#35373c' }}
                        className="flex items-center gap-3 text-[#949ba4] hover:text-[#dbdee1] p-3 rounded-lg cursor-pointer transition-all"
                      >
                        <channel.icon className="w-4 h-4" />
                        <span className="font-medium">#{channel.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 border-y border-steel-gray/30 bg-gradient-to-b from-dark-base/30 to-void-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { target: 10, suffix: 'K+', label: 'Members', icon: Users, color: 'text-blue-400' },
              { target: 500, suffix: '+', label: 'CTF Challenges', icon: Trophy, color: 'text-yellow-400' },
              { target: 50, suffix: '+', label: 'Research Groups', icon: Shield, color: 'text-purple-400' },
              { target: 1, suffix: 'K+', label: 'Tools Shared', icon: Mail, color: 'text-green-400' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto mb-4 bg-[#1a1a20] border border-border/50 rounded-2xl flex items-center justify-center group-hover:border-exploit-red/50 transition-all"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </motion.div>
                <div className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-2">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} label={stat.label} />
                </div>
                <p className="text-muted-gray font-mono text-sm uppercase tracking-wider group-hover:text-exploit-red transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTF Events */}
      <section className="py-20 bg-gradient-to-b from-void-black to-[#0a0a0e]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-heading font-bold text-ghost-white mb-4">
              Upcoming CTF Events
            </h3>
            <p className="text-muted-text max-w-2xl mx-auto">
              Compete with security professionals worldwide. Test your skills, learn new techniques, and win prizes.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'VXRT Monthly CTF',
                date: 'Nov 15, 2025',
                time: '14:00 UTC',
                diff: 'Intermediate',
                diffColor: 'from-yellow-500 to-orange-500',
                diffBg: 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20',
                prize: '$1,000 Pool',
                players: '450 Registered',
                icon: Flame,
                spots: 50,
                duration: '24 Hours',
                accent: 'yellow'
              },
              {
                name: 'Red vs Blue Challenge',
                date: 'Dec 01, 2025',
                time: '10:00 UTC',
                diff: 'Advanced',
                diffColor: 'from-red-500 to-pink-500',
                diffBg: 'bg-gradient-to-r from-red-500/20 to-pink-500/20',
                prize: 'Exclusive Swag',
                players: '120 Teams',
                icon: Shield,
                spots: 30,
                duration: '48 Hours',
                accent: 'red'
              },
              {
                name: 'Cloud Hacking Championship',
                date: 'Jan 10, 2026',
                time: '09:00 UTC',
                diff: 'Advanced',
                diffColor: 'from-purple-500 to-indigo-500',
                diffBg: 'bg-gradient-to-r from-purple-500/20 to-indigo-500/20',
                prize: '$5,000 Pool',
                players: '85 Registered',
                icon: Users,
                spots: 100,
                duration: '72 Hours',
                accent: 'purple'
              },
              {
                name: 'Zero-Day Hunt',
                date: 'Ongoing',
                time: 'Anytime',
                diff: 'Beginner',
                diffColor: 'from-green-500 to-emerald-500',
                diffBg: 'bg-gradient-to-r from-green-500/20 to-emerald-500/20',
                prize: 'Badges',
                players: '1.2k Players',
                icon: Clock,
                spots: 999,
                duration: 'Unlimited',
                accent: 'green'
              }
            ].
            map((event, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group"
            >
              <Card className="relative bg-[#0f0f12] border border-border/30 hover:border-exploit-red/50 transition-all duration-500 shadow-2xl hover:shadow-exploit-red/20 h-full overflow-hidden">
                {/* Gradient Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${event.diffColor} opacity-80 group-hover:opacity-100 transition-opacity`} />
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(192,57,43,0.1),transparent_50%)]" />
                </div>
                
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -top-20 -right-20 w-32 h-32 bg-${event.accent}-500/10 rounded-full blur-3xl`}
                  animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                />
                
                <CardContent className="p-6 relative z-10">
                  {/* Difficulty Badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold text-white bg-gradient-to-r ${event.diffColor} mb-5 shadow-lg`}>
                    <event.icon className="w-3.5 h-3.5" />
                    {event.diff}
                  </div>
                  
                  {/* Event Name */}
                  <h4 className="text-xl font-heading font-bold text-ghost-white mb-3 group-hover:text-exploit-red transition-colors duration-300">
                    {event.name}
                  </h4>
                  
                  {/* Date & Time */}
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2.5 text-sm text-muted-text">
                      <div className="w-8 h-8 bg-[#1a1a20] rounded-lg flex items-center justify-center">
                        <Clock className="w-4 h-4 text-exploit-red" />
                      </div>
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-muted-text">
                      <div className="w-8 h-8 bg-[#1a1a20] rounded-lg flex items-center justify-center">
                        <Clock className="w-4 h-4 text-exploit-red" />
                      </div>
                      <span className="font-medium">{event.time}</span>
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className={`bg-gradient-to-br ${event.diffBg} rounded-xl p-3 text-center border border-white/5`}>
                      <p className="text-xs text-muted-text mb-1 uppercase tracking-wider">Duration</p>
                      <p className="text-sm font-bold text-ghost-white">{event.duration}</p>
                    </div>
                    <div className={`bg-gradient-to-br ${event.diffBg} rounded-xl p-3 text-center border border-white/5`}>
                      <p className="text-xs text-muted-text mb-1 uppercase tracking-wider">Spots Left</p>
                      <p className="text-sm font-bold text-ghost-white">{event.spots}</p>
                    </div>
                  </div>
                  
                  {/* Prize */}
                  <div className="flex items-center gap-2.5 mb-4 p-3 bg-[#1a1a20] rounded-xl">
                    <div className="w-8 h-8 bg-exploit-red/20 rounded-lg flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-exploit-red" />
                    </div>
                    <span className="text-sm font-medium text-ghost-white">{event.prize}</span>
                  </div>
                  
                  {/* Players */}
                  <div className="flex items-center gap-2.5 mb-5 p-3 bg-[#1a1a20] rounded-xl">
                    <div className="w-8 h-8 bg-exploit-red/20 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-exploit-red" />
                    </div>
                    <span className="text-sm font-medium text-ghost-white">{event.players}</span>
                  </div>
                  
                  {/* Register Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      onClick={() => handleRegister(event)}
                      className="w-full bg-gradient-to-r from-exploit-red to-red-700 hover:from-red-600 hover:to-red-800 text-ghost-white font-bold py-3 transition-all shadow-lg shadow-exploit-red/30 hover:shadow-exploit-red/50"
                    >
                      Register Now
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Rules & Newsletter */}
      <section className="py-20 border-t border-steel-gray/30 bg-gradient-to-b from-[#0a0a0e] to-void-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Rules Accordion */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-12 h-12 bg-exploit-red/10 rounded-xl flex items-center justify-center"
                >
                  <Shield className="w-7 h-7 text-exploit-red" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-ghost-white">
                    Code of Conduct
                  </h3>
                  <p className="text-sm text-muted-text mt-1">Community guidelines for everyone</p>
                </div>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {[
                  { 
                    q: 'Responsible Disclosure', 
                    a: 'Do not share unpatched 0-days or exploit code for active vulnerabilities without following responsible disclosure guidelines.',
                    icon: CheckCircle,
                    color: 'text-green-400 border-green-400/30 bg-green-400/10'
                  },
                  { 
                    q: 'No Illegal Activity', 
                    a: 'Discussion of illegal activities, including attacking targets without explicit permission, is strictly prohibited and will result in an immediate ban.',
                    icon: AlertTriangle,
                    color: 'text-red-400 border-red-400/30 bg-red-400/10'
                  },
                  { 
                    q: 'Respect & Professionalism', 
                    a: 'Treat all members with respect. Harassment, discrimination, or toxic behavior will not be tolerated.',
                    icon: Shield,
                    color: 'text-blue-400 border-blue-400/30 bg-blue-400/10'
                  },
                  { 
                    q: 'Sharing Guidelines', 
                    a: 'When sharing tools or scripts, ensure they are properly documented and do not contain malicious backdoors.',
                    icon: Lock,
                    color: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10'
                  },
                  { 
                    q: 'CTF Integrity', 
                    a: 'Do not share flags or solutions for active CTF challenges. Collaboration is encouraged, but outright cheating ruins the experience for everyone.',
                    icon: Target,
                    color: 'text-purple-400 border-purple-400/30 bg-purple-400/10'
                  }
                ].
                map((item, i) =>
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-steel-gray/50 bg-[#1a1a20] rounded-xl overflow-hidden hover:border-exploit-red/30 transition-all"
                >
                  <AccordionTrigger className="text-ghost-white hover:text-exploit-red font-heading px-4 py-4 hover:bg-[#25252a] transition-colors">
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.color}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="text-left">{item.q}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-gray font-body leading-relaxed px-4 pb-4 pt-0">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
                )}
              </Accordion>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-[#1a1a20] to-[#0f0f12] border border-border/50 h-full relative overflow-hidden">
                {/* Animated Gradient Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-exploit-red via-purple-500 to-exploit-red opacity-80" />
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(192,57,43,0.15),transparent_50%)]" />
                </div>
                
                {/* Glow Effects */}
                <motion.div
                  className="absolute -top-16 -right-16 w-32 h-32 bg-exploit-red/10 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-16 -left-16 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                />
                
                <CardContent className="p-8 md:p-12 flex flex-col justify-center h-full text-center relative z-10">
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-20 h-20 bg-gradient-to-br from-exploit-red/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-exploit-red/30 shadow-lg shadow-exploit-red/20"
                  >
                    <Mail className="w-10 h-10 text-exploit-red" />
                  </motion.div>
                  
                  <h3 className="text-3xl font-heading font-bold text-ghost-white mb-3">
                    Weekly Intelligence
                  </h3>
                  <p className="text-muted-text font-body mb-8 leading-relaxed">
                    Get weekly security intelligence, new tool releases, and
                    exclusive CTF invites delivered straight to your inbox. No
                    spam, just shells.
                  </p>
                  
                  <form
                    className="flex flex-col sm:flex-row gap-3"
                    onSubmit={(e) => e.preventDefault()}>
                    <div className="flex-grow relative">
                      <Input
                        type="email"
                        placeholder="operator@domain.com"
                        className="bg-[#0a0a0e] border-steel-gray text-ghost-white focus-visible:ring-exploit-red focus:border-exploit-red flex-grow h-12 pl-4 pr-12 rounded-xl"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <Mail className="w-4 h-4 text-muted-text" />
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="sm:w-auto"
                    >
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-exploit-red to-red-700 hover:from-red-600 hover:to-red-800 text-ghost-white font-bold h-12 px-8 rounded-xl shadow-lg shadow-exploit-red/30 hover:shadow-exploit-red/50 transition-all whitespace-nowrap"
                      >
                        Subscribe
                      </Button>
                    </motion.div>
                  </form>
                  
                  <div className="flex items-center justify-center gap-2 mt-6">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <p className="text-xs text-muted-text font-mono">
                      Unsubscribe at any time. No spam, ever.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-[#1a1a20] to-[#0f0f12] border border-border/50 rounded-2xl p-8 max-w-md w-full relative"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-[#0a0a0e] rounded-lg flex items-center justify-center hover:bg-exploit-red/20 transition-colors"
            >
              <X className="w-4 h-4 text-muted-text" />
            </button>

            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold text-ghost-white mb-2">
                Register for {selectedEvent?.name}
              </h3>
              <p className="text-sm text-muted-text">
                {selectedEvent?.date} • {selectedEvent?.time}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-ghost-white mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="bg-void-black border-steel-gray text-ghost-white focus-visible:ring-exploit-red focus:border-exploit-red"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ghost-white mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="operator@domain.com"
                  className="bg-void-black border-steel-gray text-ghost-white focus-visible:ring-exploit-red focus:border-exploit-red"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ghost-white mb-2">
                  Team Name (Optional)
                </label>
                <Input
                  type="text"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  placeholder="Team ZeroDay"
                  className="bg-void-black border-steel-gray text-ghost-white focus-visible:ring-exploit-red focus:border-exploit-red"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ghost-white mb-2">
                  Discord Username (Optional)
                </label>
                <Input
                  type="text"
                  value={formData.discord}
                  onChange={(e) => setFormData({ ...formData, discord: e.target.value })}
                  placeholder="user#1234"
                  className="bg-void-black border-steel-gray text-ghost-white focus-visible:ring-exploit-red focus:border-exploit-red"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1"
                >
                  <Button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    variant="outline"
                    className="w-full border-steel-gray text-ghost-white hover:bg-steel-gray/30"
                  >
                    Cancel
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1"
                >
                  <Button
                    type="submit"
                    className="w-full bg-exploit-red hover:bg-red-700 text-ghost-white"
                  >
                    Register
                  </Button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>);

}