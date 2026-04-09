import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/shared/SectionHeading';
import {
  Calendar,
  Lock,
  Mail,
  MessageSquare,
  Shield,
  ChevronDown } from
'lucide-react';
const faqs = [
{
  q: "What's the typical response time?",
  a: 'We aim to respond to all inquiries within 24 hours during business days. For emergency incident response, existing clients have access to our 24/7 hotline.'
},
{
  q: 'Do you offer emergency assessments?',
  a: 'Yes, we can expedite assessments for critical situations (e.g., post-breach validation or urgent compliance needs), subject to availability and an expediting fee.'
},
{
  q: 'How do we share sensitive information securely?',
  a: 'We use PGP for email communications and offer secure, self-hosted file sharing platforms. We can also communicate via Signal or Wire for sensitive operational details.'
},
{
  q: "What's the onboarding process?",
  a: 'After initial contact, we sign an NDA, conduct a scoping call, provide a formal proposal and Statement of Work (SOW), and then schedule the engagement kickoff.'
},
{
  q: 'Can we start with a small engagement?',
  a: 'Absolutely. We often start with targeted assessments (e.g., a single web application or external network perimeter) to demonstrate our value before moving to larger scopes.'
},
{
  q: 'Do you sign NDAs?',
  a: 'Yes, we require a mutually agreed Non-Disclosure Agreement before discussing any specific details about your environment or security posture.'
},
{
  q: 'What time zones do you operate in?',
  a: 'We are a remote-first, global team. We can accommodate testing schedules in any time zone, including off-hours testing to minimize potential disruption.'
},
{
  q: 'How do we receive deliverables?',
  a: 'Reports are delivered via our secure client portal or encrypted email, depending on your preference. We also schedule a debrief call to walk your team through the findings.'
}];

export function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="w-full bg-void-black min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Section 1: Hero */}
        <section className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-ghost-white mb-6">
            
            Get in touch
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
              delay: 0.1
            }}
            className="text-lg text-muted-text">
            
            Ready to strengthen your security posture? Reach out for a free
            consultation with our offensive security experts.
          </motion.p>
        </section>

        {/* Section 2: Contact Form */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-dark-base border border-steel-gray rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-ghost-white mb-6">
                Send us a message
              </h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-ghost-white">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-void-black border border-steel-gray rounded-lg px-4 py-3 text-ghost-white focus:outline-none focus:border-exploit-red transition-colors"
                      placeholder="John Doe" />
                    
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-ghost-white">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-void-black border border-steel-gray rounded-lg px-4 py-3 text-ghost-white focus:outline-none focus:border-exploit-red transition-colors"
                      placeholder="john@company.com" />
                    
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-ghost-white">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full bg-void-black border border-steel-gray rounded-lg px-4 py-3 text-ghost-white focus:outline-none focus:border-exploit-red transition-colors"
                      placeholder="Company Inc." />
                    
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-ghost-white">
                      Service Interest
                    </label>
                    <select className="w-full bg-void-black border border-steel-gray rounded-lg px-4 py-3 text-ghost-white focus:outline-none focus:border-exploit-red transition-colors appearance-none">
                      <option>Penetration Testing</option>
                      <option>Red Teaming</option>
                      <option>Vulnerability Assessment</option>
                      <option>Cloud Testing</option>
                      <option>Exploit Development</option>
                      <option>Purple Teaming</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-ghost-white">
                    Budget Range
                  </label>
                  <select className="w-full bg-void-black border border-steel-gray rounded-lg px-4 py-3 text-ghost-white focus:outline-none focus:border-exploit-red transition-colors appearance-none">
                    <option>&lt;$10K</option>
                    <option>$10-25K</option>
                    <option>$25-50K</option>
                    <option>$50-100K</option>
                    <option>$100K+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-ghost-white">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-void-black border border-steel-gray rounded-lg px-4 py-3 text-ghost-white focus:outline-none focus:border-exploit-red transition-colors resize-none"
                    placeholder="Tell us about your security needs...">
                  </textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-exploit-red hover:bg-red-700 text-ghost-white font-bold rounded-lg transition-colors">
                  
                  Send Message →
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-void-black rounded-lg flex items-center justify-center text-exploit-red">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ghost-white">Email Us</h3>
                    <p className="text-sm text-muted-text">contact@vxrt.io</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-void-black rounded-lg flex items-center justify-center text-exploit-red">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ghost-white">
                      Response Time
                    </h3>
                    <p className="text-sm text-muted-text">&lt; 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-void-black rounded-lg flex items-center justify-center text-exploit-red">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ghost-white">Secure Comms</h3>
                    <p className="text-sm text-muted-text">
                      Signal / Wire available
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#111115] border border-steel-gray rounded-xl p-6">
                <h3 className="font-bold text-ghost-white mb-2 flex items-center gap-2">
                  <Lock size={16} className="text-exploit-red" /> PGP
                  Fingerprint
                </h3>
                <p className="text-xs font-mono text-muted-text break-all bg-void-black p-3 rounded border border-steel-gray">
                  4A9C 8B2E 1F7D 563A 90B1
                  <br />
                  C4E2 7D8F 3A1B 5C9E 2F4A
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Booking Calendar */}
        <section className="mb-32">
          <div className="bg-dark-base border border-steel-gray rounded-2xl p-8 max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto bg-void-black border border-steel-gray rounded-full flex items-center justify-center text-exploit-red mb-6">
              <Calendar size={32} />
            </div>
            <h2 className="text-3xl font-heading font-bold text-ghost-white mb-4">
              Schedule a Call
            </h2>
            <p className="text-muted-text mb-8">
              Book a 30-minute consultation with our team to discuss your
              security requirements.
            </p>

            {/* Fake Calendar Grid */}
            <div className="max-w-md mx-auto bg-void-black border border-steel-gray rounded-xl p-6 mb-8">
              <div className="flex justify-between items-center mb-4 text-ghost-white font-bold">
                <span>&lt;</span>
                <span>October 2024</span>
                <span>&gt;</span>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2 text-muted-text">
                <div>Su</div>
                <div>Mo</div>
                <div>Tu</div>
                <div>We</div>
                <div>Th</div>
                <div>Fr</div>
                <div>Sa</div>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {Array.from({
                  length: 31
                }).map((_, i) => {
                  const isAvailable = [12, 14, 15, 19, 21, 22].includes(i + 1);
                  return (
                    <div
                      key={i}
                      className={`p-2 rounded ${isAvailable ? 'bg-exploit-red/20 text-exploit-red font-bold cursor-pointer hover:bg-exploit-red hover:text-white' : 'text-muted-text'}`}>
                      
                      {i + 1}
                    </div>);

                })}
              </div>
            </div>

            <button className="px-8 py-3 bg-exploit-red hover:bg-red-700 text-ghost-white font-bold rounded-lg transition-colors">
              Book a Time →
            </button>
          </div>
        </section>

        {/* Section 4: FAQ */}
        <section className="mb-32 max-w-3xl mx-auto">
          <SectionHeading title="FAQ" description="Common Questions" />
          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) =>
            <div
              key={i}
              className="bg-dark-base border border-steel-gray rounded-lg overflow-hidden">
              
                <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none">
                
                  <span className="font-bold text-ghost-white">{faq.q}</span>
                  <ChevronDown
                  size={20}
                  className={`text-muted-text transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                
                </button>
                <AnimatePresence>
                  {openFaq === i &&
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0
                  }}
                  animate={{
                    height: 'auto',
                    opacity: 1
                  }}
                  exit={{
                    height: 0,
                    opacity: 0
                  }}
                  transition={{
                    duration: 0.3
                  }}>
                  
                      <div className="px-6 pb-4 text-muted-text border-t border-steel-gray/50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                }
                </AnimatePresence>
              </div>
            )}
          </div>
        </section>

        {/* Section 5: Trusted By / Clients */}
        <section className="mb-32">
          <div className="bg-dark-base border border-steel-gray rounded-2xl p-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-heading font-bold text-ghost-white mb-3">
                Trusted by Industry Leaders
              </h2>
              <p className="text-muted-text max-w-xl mx-auto">
                We have worked with organizations across finance, healthcare, technology, and critical infrastructure sectors.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Fortune 500', count: '15+' },
                { name: 'Startups', count: '50+' },
                { name: 'Gov Agencies', count: '8+' },
                { name: 'Non-Profits', count: '12+' }
              ].map((client, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-void-black border border-steel-gray rounded-xl p-6 text-center hover:border-exploit-red/50 transition-colors"
                >
                  <div className="text-3xl font-heading font-bold text-exploit-red mb-1">
                    {client.count}
                  </div>
                  <div className="text-sm text-muted-text">{client.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Quick Resources */}
        <section className="mb-32">
          <div className="bg-dark-base border border-steel-gray rounded-2xl p-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-heading font-bold text-ghost-white mb-3">
                Before You Reach Out
              </h2>
              <p className="text-muted-text max-w-xl mx-auto">
                Quick resources to help you understand our process and prepare for engagement.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Service Guide',
                  desc: 'Detailed breakdown of our offerings and methodologies.',
                  link: '/services'
                },
                {
                  title: 'Pricing Calculator',
                  desc: 'Estimate costs based on scope and requirements.',
                  link: '/pricing'
                },
                {
                  title: 'Sample Report',
                  desc: 'See an example of our deliverables and reporting format.',
                  link: '/resources'
                }
              ].map((resource, i) => (
                <motion.a
                  key={i}
                  href={resource.link}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="block bg-void-black border border-steel-gray rounded-xl p-6 hover:border-exploit-red transition-all group"
                >
                  <h3 className="font-bold text-ghost-white mb-2 group-hover:text-exploit-red transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-text mb-4">{resource.desc}</p>
                  <span className="text-sm text-exploit-red flex items-center gap-1">
                    View <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Office / Remote Info */}
        <section className="text-center max-w-2xl mx-auto border-t border-steel-gray pt-16">
          <h2 className="text-2xl font-heading font-bold text-ghost-white mb-4">
            Global Operations
          </h2>
          <p className="text-muted-text mb-6">
            VXRT is a remote-first organization with operators distributed
            worldwide. This allows us to provide 24/7 coverage and localized
            expertise for global engagements.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-base border border-steel-gray rounded-full text-sm text-ghost-white">
            <Lock size={14} className="text-exploit-red" /> Warrant Canary:{' '}
            <span className="text-green-500 font-bold">Intact</span> (Updated
            Oct 1, 2024)
          </div>
        </section>
      </div>
    </div>);

}