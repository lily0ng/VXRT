import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
'../components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
'../components/ui/accordion';
import { AnimatedGridBackground } from '../components/shared/AnimatedGridBackground';
import { SectionHeading } from '../components/shared/SectionHeading';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
  Shield,
  Key,
  MessageSquare } from
'lucide-react';
export function ContactPage() {
  return (
    <div className="w-full bg-void-black min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <AnimatedGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            badge="CONTACT"
            title="Start the conversation."
            description="Ready to stress-test your defenses? Reach out to our team to scope your next offensive engagement." />
          
        </div>
      </section>

      {/* Primary Contact */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="bg-dark-base border-steel-gray">
                <CardContent className="p-8">
                  <form
                    className="space-y-6"
                    onSubmit={(e) => e.preventDefault()}>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-mono text-ghost-white">
                          Full Name *
                        </label>
                        <Input
                          className="bg-void-black border-steel-gray text-ghost-white focus-visible:ring-exploit-red"
                          placeholder="John Doe"
                          required />
                        
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-mono text-ghost-white">
                          Work Email *
                        </label>
                        <Input
                          type="email"
                          className="bg-void-black border-steel-gray text-ghost-white focus-visible:ring-exploit-red"
                          placeholder="john@company.com"
                          required />
                        
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-mono text-ghost-white">
                          Company
                        </label>
                        <Input
                          className="bg-void-black border-steel-gray text-ghost-white focus-visible:ring-exploit-red"
                          placeholder="Company Inc." />
                        
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-mono text-ghost-white">
                          Service Interest
                        </label>
                        <Select>
                          <SelectTrigger className="bg-void-black border-steel-gray text-ghost-white focus:ring-exploit-red">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-dark-base border-steel-gray text-ghost-white">
                            <SelectItem value="pentest">
                              Penetration Testing
                            </SelectItem>
                            <SelectItem value="redteam">Red Teaming</SelectItem>
                            <SelectItem value="cloud">
                              Cloud Assessment
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-mono text-ghost-white">
                        Message *
                      </label>
                      <Textarea
                        className="bg-void-black border-steel-gray text-ghost-white focus-visible:ring-exploit-red min-h-[150px]"
                        placeholder="Briefly describe your target scope and objectives..."
                        required />
                      
                    </div>

                    {/* Honeypot */}
                    <div className="hidden">
                      <input
                        type="text"
                        name="website_url"
                        tabIndex={-1}
                        autoComplete="off" />
                      
                    </div>

                    <Button
                      type="submit"
                      className="w-full md:w-auto bg-exploit-red hover:bg-exploit-red/90 text-ghost-white px-8">
                      
                      Send Message <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              <Card className="bg-dark-base border-steel-gray">
                <CardContent className="p-6 flex items-start gap-4">
                  <Mail className="w-6 h-6 text-exploit-red flex-shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-ghost-white mb-1">
                      Email
                    </h4>
                    <p className="text-muted-gray font-mono text-sm">
                      contact@vxrt.io
                    </p>
                    <p className="text-muted-gray font-mono text-sm">
                      sales@vxrt.io
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-dark-base border-steel-gray">
                <CardContent className="p-6 flex items-start gap-4">
                  <Phone className="w-6 h-6 text-exploit-red flex-shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-ghost-white mb-1">
                      Phone
                    </h4>
                    <p className="text-muted-gray font-mono text-sm">
                      +1 (800) 555-VXRT
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-dark-base border-steel-gray">
                <CardContent className="p-6 flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-exploit-red flex-shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-ghost-white mb-1">
                      Location
                    </h4>
                    <p className="text-muted-gray text-sm">
                      Remote-first, Global Operations
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-dark-base border-steel-gray">
                <CardContent className="p-6 flex items-start gap-4">
                  <Clock className="w-6 h-6 text-exploit-red flex-shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-ghost-white mb-1">
                      Response Time
                    </h4>
                    <p className="text-muted-gray text-sm">
                      &lt; 24 hours for new inquiries
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Calendar & Secure Comms */}
      <section className="py-16 border-t border-steel-gray/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calendar */}
            <Card className="bg-dark-base border-steel-gray">
              <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full min-h-[300px]">
                <Calendar className="w-12 h-12 text-exploit-red mb-6" />
                <h3 className="text-2xl font-heading font-bold text-ghost-white mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-muted-gray font-body mb-8 max-w-md">
                  Skip the emails. Book a 30-minute scoping call directly with
                  one of our lead operators to discuss your requirements.
                </p>
                <Button className="bg-steel-gray hover:bg-exploit-red text-ghost-white transition-colors">
                  Book via Calendly
                </Button>
              </CardContent>
            </Card>

            {/* Secure Comms */}
            <Card className="bg-dark-base border-steel-gray">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-exploit-red" />
                  <h3 className="text-2xl font-heading font-bold text-ghost-white">
                    Secure Communications
                  </h3>
                </div>
                <p className="text-muted-gray font-body mb-8">
                  For highly sensitive inquiries, zero-day disclosure, or
                  incident response, please use our encrypted channels.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-void-black rounded border border-steel-gray">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-5 h-5 text-muted-gray" />
                      <span className="font-heading text-ghost-white">
                        Signal
                      </span>
                    </div>
                    <span className="font-mono text-sm text-exploit-red">
                      +1 (800) 555-0199
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-void-black rounded border border-steel-gray">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-muted-gray" />
                      <span className="font-heading text-ghost-white">
                        ProtonMail
                      </span>
                    </div>
                    <span className="font-mono text-sm text-exploit-red">
                      vxrt.ops@proton.me
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-void-black rounded border border-steel-gray">
                    <div className="flex items-center gap-3">
                      <Key className="w-5 h-5 text-muted-gray" />
                      <span className="font-heading text-ghost-white">
                        PGP Fingerprint
                      </span>
                    </div>
                    <span className="font-mono text-xs text-muted-gray">
                      A1B2 C3D4 E5F6 7890
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-steel-gray/30 bg-dark-base/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-2xl font-heading font-bold text-ghost-white text-center mb-10">
            Common Questions
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {[
            {
              q: 'Do you sign NDAs before scoping?',
              a: 'Yes. We can provide our mutual NDA or review yours before any sensitive information is shared.'
            },
            {
              q: 'How quickly can an engagement start?',
              a: 'Standard engagements typically have a 2-3 week lead time. Emergency assessments or incident response can begin within 24 hours.'
            },
            {
              q: 'What information do you need for a quote?',
              a: 'We need high-level details about the target scope (e.g., number of IPs, web apps, user roles, cloud environments) to provide an accurate estimate.'
            },
            {
              q: 'Do you offer retainer options?',
              a: 'Yes, we offer continuous testing retainers that allow you to draw down hours for various offensive security needs throughout the year.'
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