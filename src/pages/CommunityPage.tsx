import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../components/ui/badge';
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
import { SectionHeading } from '../components/shared/SectionHeading';
import { AnimatedCounter } from '../components/shared/AnimatedCounter';
import {
  MessageSquare,
  Trophy,
  Users,
  Terminal,
  ArrowRight,
  Shield,
  Mail } from
'lucide-react';
export function CommunityPage() {
  return (
    <div className="w-full bg-void-black min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <AnimatedGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            badge="COMMUNITY"
            title="Connect. Compete. Collaborate."
            description="Join thousands of offensive security professionals sharing knowledge, tools, and techniques." />
          
        </div>
      </section>

      {/* Discord Highlight */}
      <section className="py-12">
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
            
            <Card className="bg-[#1e1f22] border-[#2b2d31] overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#5865F2]" />
              <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-grow text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    <MessageSquare
                      className="w-8 h-8 text-[#5865F2]"
                      fill="currentColor" />
                    
                    <h2 className="text-3xl font-heading font-bold text-white">
                      Join the VXRT Community
                    </h2>
                  </div>
                  <p className="text-[#b5bac1] font-body text-lg mb-6">
                    Join 10,000+ security professionals discussing exploit dev,
                    red teaming, and participating in exclusive CTFs.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-[#b5bac1] font-mono text-sm">
                        2,401 Online
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-500" />
                      <span className="text-[#b5bac1] font-mono text-sm">
                        10,892 Members
                      </span>
                    </div>
                  </div>
                  <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold px-8 py-6 text-lg w-full md:w-auto">
                    Join Discord Server
                  </Button>
                </div>

                <div className="w-full md:w-72 bg-[#2b2d31] rounded-lg p-4 flex-shrink-0 border border-[#1e1f22]">
                  <h4 className="text-[#80848e] font-bold text-xs uppercase mb-3 px-2">
                    Popular Channels
                  </h4>
                  <div className="space-y-1">
                    {[
                    'general',
                    'ctf-challenges',
                    'exploit-dev',
                    'job-board',
                    'tool-sharing'].
                    map((channel) =>
                    <div
                      key={channel}
                      className="flex items-center gap-2 text-[#949ba4] hover:bg-[#35373c] hover:text-[#dbdee1] p-2 rounded cursor-pointer transition-colors">
                      
                        <span className="text-xl leading-none opacity-50">
                          #
                        </span>
                        <span className="font-medium">{channel}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 border-y border-steel-gray/30 bg-dark-base/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-2">
                <AnimatedCounter target={10} suffix="K+" />
              </div>
              <p className="text-muted-gray font-mono text-sm uppercase tracking-wider">
                Members
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-2">
                <AnimatedCounter target={500} suffix="+" />
              </div>
              <p className="text-muted-gray font-mono text-sm uppercase tracking-wider">
                CTF Challenges
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-2">
                <AnimatedCounter target={50} suffix="+" />
              </div>
              <p className="text-muted-gray font-mono text-sm uppercase tracking-wider">
                Research Groups
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-2">
                <AnimatedCounter target={1} suffix="K+" />
              </div>
              <p className="text-muted-gray font-mono text-sm uppercase tracking-wider">
                Tools Shared
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTF Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-heading font-bold text-ghost-white">
              Upcoming CTF Events
            </h3>
            <Button
              variant="outline"
              className="border-steel-gray text-ghost-white hidden md:flex">
              
              View Leaderboard <Trophy className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
            {
              name: 'VXRT Monthly CTF',
              date: 'Nov 15, 2025',
              diff: 'Intermediate',
              diffColor: 'text-yellow-500 border-yellow-500/50',
              prize: '$1,000 Pool',
              players: '450 Registered'
            },
            {
              name: 'Red vs Blue Challenge',
              date: 'Dec 01, 2025',
              diff: 'Advanced',
              diffColor: 'text-red-500 border-red-500/50',
              prize: 'Exclusive Swag',
              players: '120 Teams'
            },
            {
              name: 'Cloud Hacking Championship',
              date: 'Jan 10, 2026',
              diff: 'Advanced',
              diffColor: 'text-red-500 border-red-500/50',
              prize: '$5,000 Pool',
              players: '85 Registered'
            },
            {
              name: 'Zero-Day Hunt (Beginner)',
              date: 'Ongoing',
              diff: 'Beginner',
              diffColor: 'text-green-500 border-green-500/50',
              prize: 'Badges',
              players: '1.2k Players'
            }].
            map((event, i) =>
            <Card
              key={i}
              className="bg-dark-base border-steel-gray hover:border-exploit-red/50 transition-colors">
              
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge
                    variant="outline"
                    className={`font-mono text-xs ${event.diffColor}`}>
                    
                      {event.diff}
                    </Badge>
                    <span className="text-sm font-mono text-muted-gray">
                      {event.date}
                    </span>
                  </div>
                  <h4 className="text-xl font-heading font-bold text-ghost-white mb-4">
                    {event.name}
                  </h4>
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-gray">
                      <Trophy className="w-4 h-4 text-exploit-red" />{' '}
                      {event.prize}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-gray">
                      <Users className="w-4 h-4 text-exploit-red" />{' '}
                      {event.players}
                    </div>
                  </div>
                  <Button className="w-full bg-steel-gray hover:bg-exploit-red text-ghost-white transition-colors">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Rules & Newsletter */}
      <section className="py-20 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Rules Accordion */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Shield className="w-6 h-6 text-exploit-red" />
                <h3 className="text-2xl font-heading font-bold text-ghost-white">
                  Code of Conduct
                </h3>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {[
                {
                  q: 'Responsible Disclosure',
                  a: 'Do not share unpatched 0-days or exploit code for active vulnerabilities without following responsible disclosure guidelines.'
                },
                {
                  q: 'No Illegal Activity',
                  a: 'Discussion of illegal activities, including attacking targets without explicit permission, is strictly prohibited and will result in an immediate ban.'
                },
                {
                  q: 'Respect & Professionalism',
                  a: 'Treat all members with respect. Harassment, discrimination, or toxic behavior will not be tolerated.'
                },
                {
                  q: 'Sharing Guidelines',
                  a: 'When sharing tools or scripts, ensure they are properly documented and do not contain malicious backdoors.'
                },
                {
                  q: 'CTF Integrity',
                  a: 'Do not share flags or solutions for active CTF challenges. Collaboration is encouraged, but outright cheating ruins the experience for everyone.'
                }].
                map((item, i) =>
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-steel-gray">
                  
                    <AccordionTrigger className="text-ghost-white hover:text-exploit-red font-heading">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-gray font-body leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            </div>

            {/* Newsletter */}
            <div>
              <Card className="bg-dark-base border-steel-gray h-full">
                <CardContent className="p-8 md:p-12 flex flex-col justify-center h-full text-center">
                  <Mail className="w-12 h-12 text-exploit-red mx-auto mb-6" />
                  <h3 className="text-2xl font-heading font-bold text-ghost-white mb-4">
                    Weekly Intelligence
                  </h3>
                  <p className="text-muted-gray font-body mb-8">
                    Get weekly security intelligence, new tool releases, and
                    exclusive CTF invites delivered straight to your inbox. No
                    spam, just shells.
                  </p>
                  <form
                    className="flex flex-col sm:flex-row gap-3"
                    onSubmit={(e) => e.preventDefault()}>
                    
                    <Input
                      type="email"
                      placeholder="operator@domain.com"
                      className="bg-void-black border-steel-gray text-ghost-white focus-visible:ring-exploit-red flex-grow" />
                    
                    <Button
                      type="submit"
                      className="bg-exploit-red hover:bg-exploit-red/90 text-ghost-white whitespace-nowrap">
                      
                      Subscribe
                    </Button>
                  </form>
                  <p className="text-xs text-muted-gray mt-4 font-mono">
                    Unsubscribe at any time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>);

}