import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/shared/SectionHeading';
import { AnimatedGridBackground } from '../components/shared/AnimatedGridBackground';
import { Button } from '../components/ui/button';
import {
  Check,
  X,
  Zap,
  Shield,
  Target,
  Users,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Server,
  Clock,
  Globe,
  Lock,
  CreditCard,
  MessageSquare,
  Sparkles,
  FileText,
  Headphones,
  Mail,
  Phone
} from 'lucide-react';

const pricingPlans = [
  {
    name: 'Essential',
    description: 'Perfect for startups and small businesses',
    price: '$2,500',
    period: 'per engagement',
    icon: Shield,
    color: 'border-steel-gray',
    featured: false,
    features: [
      'External Network Penetration Test',
      'Vulnerability Assessment',
      '10 IPs / 5 Web Applications',
      'PDF Report with Findings',
      'Remediation Guidance',
      '30-day Retest',
      'Email Support'
    ],
    excluded: [
      'Red Team Operations',
      'Source Code Review',
      'Social Engineering',
      'Dedicated Account Manager'
    ]
  },
  {
    name: 'Professional',
    description: 'Comprehensive security for growing companies',
    price: '$7,500',
    period: 'per engagement',
    icon: Target,
    color: 'border-exploit-red',
    featured: true,
    badge: 'MOST POPULAR',
    features: [
      'Internal & External Pentest',
      'Web Application Testing',
      'API Security Assessment',
      'Cloud Configuration Review',
      '50 IPs / 15 Web Applications',
      'Executive Summary + Technical Report',
      'Threat Modeling',
      '60-day Retest',
      'Priority Support',
      'Quarterly Check-ins'
    ],
    excluded: [
      'Red Team Operations',
      'Dedicated Account Manager'
    ]
  },
  {
    name: 'Enterprise',
    description: 'Full-scale offensive security program',
    price: 'Custom',
    period: 'annual contract',
    icon: Zap,
    color: 'border-yellow-500',
    featured: false,
    features: [
      'Red Team Operations',
      'Purple Team Exercises',
      'Unlimited Scope',
      'Continuous Testing',
      'Full Adversary Simulation',
      'Physical Security Testing',
      'Social Engineering Campaigns',
      'Source Code Review',
      'Dedicated Security Team',
      'Dedicated Account Manager',
      '24/7 Emergency Response',
      'Custom Tool Development'
    ],
    excluded: []
  }
];

const serviceAddOns = [
  {
    name: 'Cloud Security Assessment',
    description: 'AWS, Azure, GCP configuration review',
    price: '$1,500',
    icon: Server,
    popular: true
  },
  {
    name: 'Social Engineering',
    description: 'Phishing & pretexting campaigns',
    price: '$2,000',
    icon: Users,
    popular: false
  },
  {
    name: 'Wireless Network Test',
    description: 'WiFi & RF security assessment',
    price: '$1,200',
    icon: Globe,
    popular: false
  },
  {
    name: 'Physical Security Test',
    description: 'On-site penetration testing',
    price: '$3,500',
    icon: Lock,
    popular: false
  },
  {
    name: 'Incident Response Retainer',
    description: '24/7 emergency response',
    price: '$5,000/year',
    icon: Clock,
    popular: true
  },
  {
    name: 'Security Training',
    description: 'Custom workshops for your team',
    price: '$500/day',
    icon: Sparkles,
    popular: false
  }
];

const comparisonFeatures = [
  { name: 'External Penetration Testing', essential: true, professional: true, enterprise: true },
  { name: 'Internal Network Testing', essential: false, professional: true, enterprise: true },
  { name: 'Web Application Testing', essential: 'Limited', professional: true, enterprise: true },
  { name: 'API Security Assessment', essential: false, professional: true, enterprise: true },
  { name: 'Cloud Configuration Review', essential: false, professional: true, enterprise: true },
  { name: 'Red Team Operations', essential: false, professional: false, enterprise: true },
  { name: 'Purple Team Exercises', essential: false, professional: false, enterprise: true },
  { name: 'Social Engineering', essential: false, professional: false, enterprise: true },
  { name: 'Physical Security Testing', essential: false, professional: false, enterprise: true },
  { name: 'Source Code Review', essential: false, professional: false, enterprise: true },
  { name: 'Continuous Testing', essential: false, professional: false, enterprise: true },
  { name: 'Dedicated Account Manager', essential: false, professional: false, enterprise: true },
  { name: '24/7 Emergency Response', essential: false, professional: false, enterprise: true },
  { name: 'Custom Report Branding', essential: false, professional: true, enterprise: true },
  { name: 'Quarterly Reviews', essential: false, professional: true, enterprise: true },
  { name: 'Priority Support', essential: false, professional: true, enterprise: true }
];

const faqs = [
  {
    question: 'How long does a penetration test typically take?',
    answer: 'The duration depends on the scope and complexity. A standard external penetration test typically takes 5-10 business days, including testing time and report generation. Internal network assessments may take 10-15 days, while comprehensive red team operations can span several weeks. We\'ll provide a detailed timeline during the scoping phase.'
  },
  {
    question: 'What is included in the final report?',
    answer: 'Our reports include: Executive Summary for leadership, Technical Findings with detailed vulnerability descriptions, Proof of Concept evidence, Risk Ratings based on CVSS and business context, Step-by-step Remediation Guidance, and Retesting results. Professional and Enterprise plans include custom report branding and threat modeling documentation.'
  },
  {
    question: 'Do you offer retesting after vulnerabilities are fixed?',
    answer: 'Yes! All our plans include retesting to verify that vulnerabilities have been properly remediated. Essential includes 30-day retest, Professional includes 60-day retest with priority scheduling, and Enterprise offers unlimited retesting throughout the contract period.'
  },
  {
    question: 'Are your penetration testers certified?',
    answer: 'Absolutely. Our team holds industry-leading certifications including OSCP, OSCE, OSWE, CREST CRT/CCT, GPEN, GXPN, and cloud certifications (AWS/Azure Security). Many of our researchers also have CVE discoveries and conference speaking experience at events like Black Hat and DEF CON.'
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We work across all industries including finance, healthcare, technology, manufacturing, and government. Our team includes specialists with deep experience in compliance requirements like PCI-DSS, HIPAA, SOC 2, ISO 27001, and NIST frameworks. We customize our approach based on your industry\'s unique threat landscape.'
  },
  {
    question: 'How do we get started?',
    answer: 'Simply click "Get Started" on any plan or contact us directly. We\'ll schedule a scoping call to understand your requirements, define the testing boundaries, and provide a detailed proposal. Once approved, we typically begin testing within 1-2 weeks depending on scope complexity.'
  }
];

const testimonials = [
  {
    quote: "VXRT found critical vulnerabilities our previous provider missed. Their technical depth is unmatched.",
    author: "CISO, Fortune 500 Fintech",
    metric: "3 Critical CVEs Discovered"
  },
  {
    quote: "The red team simulation revealed gaps in our detection capabilities we didn't know existed.",
    author: "Director of Security, Healthcare Provider",
    metric: "Detection Improved 340%"
  },
  {
    quote: "Professional, thorough, and excellent communication throughout the engagement.",
    author: "CTO, Series C SaaS Startup",
    metric: "SOC 2 Type II Certified"
  }
];

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full bg-void-black min-h-screen pb-24">
      {/* Section 1: Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <AnimatedGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-dark-base/50 border border-border rounded-full text-sm font-heading font-semibold text-exploit-red">
              <CreditCard size={16} /> Transparent Pricing
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-ghost-white mb-6">
              Offensive Security Pricing
            </h1>
            <p className="text-xl text-muted-text mb-8">
              Choose the engagement level that fits your security needs. All plans include our elite team of researchers and actionable results.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm ${billingCycle === 'monthly' ? 'text-ghost-white' : 'text-muted-text'}`}>
                Per Engagement
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className="relative w-14 h-7 bg-dark-base border border-border rounded-full transition-colors">
                <motion.div
                  className="absolute top-1 w-5 h-5 bg-exploit-red rounded-full"
                  animate={{ left: billingCycle === 'annual' ? '28px' : '4px' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
              <span className={`text-sm ${billingCycle === 'annual' ? 'text-ghost-white' : 'text-muted-text'}`}>
                Annual Retainer
                <span className="ml-2 text-xs text-exploit-red">Save 20%</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative bg-dark-base rounded-2xl border-2 ${plan.color} ${plan.featured ? 'md:-mt-4 md:mb-4' : ''} overflow-hidden`}>
                {plan.featured && (
                  <div className="absolute top-0 left-0 right-0 bg-exploit-red text-ghost-white text-center py-2 text-sm font-heading font-semibold">
                    {plan.badge}
                  </div>
                )}
                <div className={`p-6 ${plan.featured ? 'pt-12' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-void-black rounded-lg flex items-center justify-center">
                      <plan.icon className="w-5 h-5 text-exploit-red" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-ghost-white">{plan.name}</h3>
                      <p className="text-xs text-muted-text">{plan.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-heading font-bold text-ghost-white">{plan.price}</span>
                    <span className="text-muted-text text-sm ml-2">{plan.period}</span>
                  </div>

                  <Button className={`w-full mb-6 ${plan.featured ? 'bg-exploit-red hover:bg-exploit-red/90' : 'bg-void-black border border-steel-gray hover:border-exploit-red'}`}>
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-ghost-white mb-2">What's included:</p>
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-text">{feature}</span>
                      </div>
                    ))}
                    {plan.excluded.length > 0 && (
                      <>
                        <div className="border-t border-steel-gray my-3" />
                        {plan.excluded.map((excluded, k) => (
                          <div key={k} className="flex items-start gap-2">
                            <X className="w-4 h-4 text-muted-text/50 mt-0.5 shrink-0" />
                            <span className="text-sm text-muted-text/50">{excluded}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Service Add-ons */}
      <section className="py-20 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <SectionHeading
              badge="ADD-ONS"
              title="Customize Your Engagement"
              description="Enhance your security assessment with specialized testing services." />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 max-w-5xl mx-auto">
            {serviceAddOns.map((addon, i) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ borderColor: 'rgba(192, 57, 43, 0.5)' }}
                className="bg-dark-base border border-steel-gray rounded-xl p-5 cursor-pointer transition-all duration-300 relative">
                {addon.popular && (
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-exploit-red text-ghost-white text-xs rounded-full font-semibold">
                    POPULAR
                  </span>
                )}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-void-black rounded-lg flex items-center justify-center shrink-0">
                    <addon.icon className="w-5 h-5 text-exploit-red" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-heading font-bold text-ghost-white">{addon.name}</h4>
                      <span className="text-sm font-semibold text-exploit-red">{addon.price}</span>
                    </div>
                    <p className="text-xs text-muted-text">{addon.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Feature Comparison */}
      <section className="py-20 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <SectionHeading
              badge="COMPARE"
              title="Feature Comparison"
              description="Detailed breakdown of what's included in each plan." />
          </motion.div>

          <div className="mt-12 max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-steel-gray">
                  <th className="text-left py-4 px-4 font-heading font-bold text-ghost-white">Feature</th>
                  <th className="text-center py-4 px-4 font-heading font-bold text-muted-text">Essential</th>
                  <th className="text-center py-4 px-4 font-heading font-bold text-exploit-red">Professional</th>
                  <th className="text-center py-4 px-4 font-heading font-bold text-yellow-500">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <motion.tr
                    key={feature.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.02 }}
                    className="border-b border-steel-gray/30 hover:bg-dark-base/50 transition-colors">
                    <td className="py-3 px-4 text-sm text-ghost-white">{feature.name}</td>
                    <td className="text-center py-3 px-4">
                      {feature.essential === true ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : feature.essential === false ? (
                        <X className="w-5 h-5 text-muted-text/30 mx-auto" />
                      ) : (
                        <span className="text-sm text-muted-text">{feature.essential}</span>
                      )}
                    </td>
                    <td className="text-center py-3 px-4">
                      {feature.professional === true ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : feature.professional === false ? (
                        <X className="w-5 h-5 text-muted-text/30 mx-auto" />
                      ) : (
                        <span className="text-sm text-muted-text">{feature.professional}</span>
                      )}
                    </td>
                    <td className="text-center py-3 px-4">
                      {feature.enterprise === true ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-muted-text/30 mx-auto" />
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section className="py-20 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <SectionHeading
              badge="TESTIMONIALS"
              title="Trusted by Security Leaders"
              description="See what industry professionals say about working with VXRT." />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-6 hover:border-exploit-red/30 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Sparkles key={j} className="w-4 h-4 text-yellow-500" />
                  ))}
                </div>
                <p className="text-ghost-white mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t border-steel-gray pt-4">
                  <p className="text-sm text-muted-text">{testimonial.author}</p>
                  <p className="text-xs text-exploit-red font-semibold mt-1">{testimonial.metric}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section className="py-20 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <SectionHeading
              badge="FAQ"
              title="Frequently Asked Questions"
              description="Everything you need to know about our pricing and services." />
          </motion.div>

          <div className="max-w-3xl mx-auto mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-dark-base border border-steel-gray rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-void-black/50 transition-colors">
                  <span className="font-heading font-semibold text-ghost-white pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-exploit-red shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-text shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden">
                      <p className="px-5 pb-5 text-muted-text leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section className="py-20 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-dark-base to-void-black border border-steel-gray rounded-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Animated background elements */}
              <motion.div
                className="absolute -top-20 -right-20 w-64 h-64 bg-exploit-red/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }} />
              <motion.div
                className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 5, repeat: Infinity }} />

              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="w-20 h-20 mx-auto mb-6 bg-exploit-red/10 rounded-full flex items-center justify-center border border-exploit-red/30">
                  <Headphones className="w-10 h-10 text-exploit-red" />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-heading font-bold text-ghost-white mb-4">
                  Not sure which plan is right for you?
                </h2>
                <p className="text-muted-text mb-8 max-w-2xl mx-auto">
                  Schedule a free consultation with our security advisors. We'll help you understand your risks and recommend the right engagement scope for your organization.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/contact">
                    <Button className="bg-exploit-red hover:bg-exploit-red/90 text-ghost-white px-8 py-6 text-lg">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Schedule Free Consultation
                    </Button>
                  </Link>
                  <a href="mailto:sales@vxrt.io" className="flex items-center gap-2 text-muted-text hover:text-ghost-white transition-colors">
                    <Mail className="w-4 h-4" />
                    sales@vxrt.io
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-steel-gray/30 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-text">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Free scoping call</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
