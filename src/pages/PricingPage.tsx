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
  Phone,
  Calculator,
  Database,
  Network,
  Cpu,
  HardDrive,
  Cloud,
  Activity,
  Archive,
  Building,
  GitBranch,
  Settings,
  Award
} from 'lucide-react';

const pricingPlans = [
  {
    name: 'Essential',
    description: 'Perfect for startups and small businesses',
    price: 2500,
    annualPrice: 2000,
    period: 'per engagement',
    annualPeriod: 'annual retainer',
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
    price: 7500,
    annualPrice: 6000,
    period: 'per engagement',
    annualPeriod: 'annual retainer',
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
    price: 0,
    annualPrice: 0,
    period: 'annual contract',
    annualPeriod: 'annual contract',
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
                    <span className="text-4xl font-heading font-bold text-ghost-white">
                      {plan.price === 0 ? 'Custom' : billingCycle === 'annual' ? `$${plan.annualPrice.toLocaleString()}` : `$${plan.price.toLocaleString()}`}
                    </span>
                    <span className="text-muted-text text-sm ml-2">
                      {billingCycle === 'annual' ? plan.annualPeriod : plan.period}
                    </span>
                    {billingCycle === 'annual' && plan.price > 0 && (
                      <span className="ml-2 text-xs text-exploit-red line-through">${plan.price.toLocaleString()}</span>
                    )}
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

      {/* Section 7: Product Pricing with Calculator */}
      <section className="py-20 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <SectionHeading
              badge="INFRASTRUCTURE"
              title="Product Pricing"
              description="Secure cloud infrastructure with built-in offensive security monitoring"
              align="center" />
          </motion.div>

          {/* Enhanced Price Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 mb-16 bg-gradient-to-br from-dark-base via-[#111115] to-void-black border border-border rounded-2xl overflow-hidden"
          >
            {/* Calculator Header */}
            <div className="bg-gradient-to-r from-exploit-red/20 via-exploit-red/10 to-transparent border-b border-border p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-exploit-red/20 rounded-xl flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-exploit-red" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-ghost-white">Infrastructure Cost Calculator</h3>
                  <p className="text-sm text-muted-text">Estimate your monthly cloud infrastructure costs</p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* VPS Calculator */}
                <div className="space-y-4 bg-[#111115]/50 rounded-xl p-4 border border-border hover:border-steel-gray transition-colors">
                  <label className="flex items-center gap-2 text-sm font-medium text-ghost-white">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Globe className="w-4 h-4 text-green-500" />
                    </div>
                    VPS Instances
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    defaultValue="2"
                    className="w-full h-2 bg-steel-gray rounded-lg appearance-none cursor-pointer accent-exploit-red"
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      const el = document.getElementById('vps-count');
                      const price = document.getElementById('vps-price');
                      if (el) el.textContent = val.toString();
                      if (price) price.textContent = `$${(val * 49).toLocaleString()}`;
                      window.dispatchEvent(new CustomEvent('priceUpdate'));
                    }}
                  />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-text">Count: <span id="vps-count" className="text-ghost-white font-bold">2</span></span>
                    <span className="text-green-500 font-bold bg-green-500/10 px-2 py-1 rounded" id="vps-price">$98</span>
                  </div>
                </div>

                {/* Compute Calculator */}
                <div className="space-y-4 bg-[#111115]/50 rounded-xl p-4 border border-border hover:border-steel-gray transition-colors">
                  <label className="flex items-center gap-2 text-sm font-medium text-ghost-white">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Server className="w-4 h-4 text-blue-500" />
                    </div>
                    Compute Hours
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    defaultValue="100"
                    className="w-full h-2 bg-steel-gray rounded-lg appearance-none cursor-pointer accent-exploit-red"
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      const el = document.getElementById('compute-count');
                      const price = document.getElementById('compute-price');
                      if (el) el.textContent = val.toString();
                      if (price) price.textContent = `$${(val * 0.015).toFixed(2)}`;
                      window.dispatchEvent(new CustomEvent('priceUpdate'));
                    }}
                  />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-text">Hours: <span id="compute-count" className="text-ghost-white font-bold">100</span></span>
                    <span className="text-blue-500 font-bold bg-blue-500/10 px-2 py-1 rounded" id="compute-price">$1.50</span>
                  </div>
                </div>

                {/* Kubernetes Calculator */}
                <div className="space-y-4 bg-[#111115]/50 rounded-xl p-4 border border-border hover:border-steel-gray transition-colors">
                  <label className="flex items-center gap-2 text-sm font-medium text-ghost-white">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-purple-500" />
                    </div>
                    K8s Clusters
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    defaultValue="1"
                    className="w-full h-2 bg-steel-gray rounded-lg appearance-none cursor-pointer accent-exploit-red"
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      const el = document.getElementById('k8s-count');
                      const price = document.getElementById('k8s-price');
                      if (el) el.textContent = val.toString();
                      if (price) price.textContent = `$${(val * 199).toLocaleString()}`;
                      window.dispatchEvent(new CustomEvent('priceUpdate'));
                    }}
                  />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-text">Clusters: <span id="k8s-count" className="text-ghost-white font-bold">1</span></span>
                    <span className="text-purple-500 font-bold bg-purple-500/10 px-2 py-1 rounded" id="k8s-price">$199</span>
                  </div>
                </div>

                {/* Storage Calculator */}
                <div className="space-y-4 bg-[#111115]/50 rounded-xl p-4 border border-border hover:border-steel-gray transition-colors">
                  <label className="flex items-center gap-2 text-sm font-medium text-ghost-white">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <Lock className="w-4 h-4 text-orange-500" />
                    </div>
                    Storage (GB)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="100"
                    defaultValue="500"
                    className="w-full h-2 bg-steel-gray rounded-lg appearance-none cursor-pointer accent-exploit-red"
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      const el = document.getElementById('storage-count');
                      const price = document.getElementById('storage-price');
                      if (el) el.textContent = val.toLocaleString();
                      if (price) price.textContent = `$${(val * 0.02).toFixed(2)}`;
                      window.dispatchEvent(new CustomEvent('priceUpdate'));
                    }}
                  />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-text">GB: <span id="storage-count" className="text-ghost-white font-bold">500</span></span>
                    <span className="text-orange-500 font-bold bg-orange-500/10 px-2 py-1 rounded" id="storage-price">$10.00</span>
                  </div>
                </div>
              </div>

              {/* Additional Resources */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Database, name: 'Database', price: 29, color: 'text-pink-500', bg: 'bg-pink-500/10' },
                  { icon: Network, name: 'Load Balancer', price: 19, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
                  { icon: Shield, name: 'CDN & WAF', price: 50, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
                  { icon: Activity, name: 'Monitoring', price: 9, color: 'text-violet-500', bg: 'bg-violet-500/10' },
                ].map((resource) => (
                  <div key={resource.name} className="flex items-center justify-between p-3 bg-[#111115]/50 rounded-lg border border-border">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 ${resource.bg} rounded flex items-center justify-center`}>
                        <resource.icon className={`w-3 h-3 ${resource.color}`} />
                      </div>
                      <span className="text-sm text-muted-text">{resource.name}</span>
                    </div>
                    <span className={`text-sm font-semibold ${resource.color}`}>${resource.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Price Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#111115] via-dark-base to-[#111115] border-t border-border p-6"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <p className="text-sm text-muted-text mb-1">Estimated Monthly Cost</p>
                  <motion.p
                    className="text-4xl md:text-5xl font-heading font-bold text-exploit-red"
                    id="total-price"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 0.3 }}
                  >
                    $308.50
                  </motion.p>
                  <p className="text-xs text-muted-text mt-1">*Pricing excludes additional resources and taxes</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="border-steel-gray text-ghost-white hover:bg-steel-gray/20 px-6">
                    <FileText className="w-4 h-4 mr-2" />
                    Download Estimate
                  </Button>
                  <Button className="bg-exploit-red hover:bg-exploit-red/90 text-ghost-white px-8 py-6 text-lg">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                name: 'Compute',
                icon: Server,
                price: '$0.015',
                unit: '/hour',
                description: 'High-performance bare metal servers',
                specs: ['Up to 128 vCPUs', '512 GB RAM', 'NVMe SSD Storage', '10Gbps Network'],
                color: 'from-blue-500/20 to-blue-600/5',
                borderColor: 'border-blue-500/30'
              },
              {
                name: 'VPS',
                icon: Globe,
                price: '$49',
                unit: '/month',
                description: 'Virtual private servers with DDoS protection',
                specs: ['4-32 vCPUs', '8-128 GB RAM', '200GB-2TB SSD', 'DDoS Protection'],
                color: 'from-green-500/20 to-green-600/5',
                borderColor: 'border-green-500/30',
                featured: true
              },
              {
                name: 'Kubernetes',
                icon: Zap,
                price: '$199',
                unit: '/month',
                description: 'Managed K8s with security scanning',
                specs: ['Managed Control Plane', 'Auto-scaling', 'Container Security', '24/7 Support'],
                color: 'from-purple-500/20 to-purple-600/5',
                borderColor: 'border-purple-500/30'
              },
              {
                name: 'Cloud Storage',
                icon: Lock,
                price: '$0.02',
                unit: '/GB',
                description: 'Encrypted object storage with compliance',
                specs: ['AES-256 Encryption', '99.99% Uptime', 'Global CDN', 'SOC 2 Compliant'],
                color: 'from-orange-500/20 to-orange-600/5',
                borderColor: 'border-orange-500/30'
              },
              {
                name: 'Database',
                icon: Database,
                price: '$29',
                unit: '/month',
                description: 'Managed PostgreSQL, MySQL, Redis clusters',
                specs: ['Automated Backups', 'Read Replicas', 'Connection Pooling', 'SSL Encryption'],
                color: 'from-pink-500/20 to-pink-600/5',
                borderColor: 'border-pink-500/30'
              },
              {
                name: 'Load Balancer',
                icon: Network,
                price: '$19',
                unit: '/month',
                description: 'High-availability traffic distribution',
                specs: ['HTTP/HTTPS/TCP', 'Health Checks', 'Auto-scaling', 'DDoS Protection'],
                color: 'from-cyan-500/20 to-cyan-600/5',
                borderColor: 'border-cyan-500/30'
              },
              {
                name: 'CDN & WAF',
                icon: Shield,
                price: '$0.01',
                unit: '/GB',
                description: 'Global content delivery with web firewall',
                specs: ['140+ Edge Locations', 'DDoS Mitigation', 'Bot Protection', 'Real-time Analytics'],
                color: 'from-yellow-500/20 to-yellow-600/5',
                borderColor: 'border-yellow-500/30'
              },
              {
                name: 'GPU Instances',
                icon: Cpu,
                price: '$1.99',
                unit: '/hour',
                description: 'NVIDIA A100, H100, RTX A6000 for AI/ML',
                specs: ['Up to 8x A100', '640 GB GPU Memory', 'NVLink Support', 'CUDA Optimized'],
                color: 'from-indigo-500/20 to-indigo-600/5',
                borderColor: 'border-indigo-500/30'
              },
              {
                name: 'Bare Metal',
                icon: HardDrive,
                price: '$299',
                unit: '/month',
                description: 'Dedicated physical servers with full control',
                specs: ['No Virtualization', 'Full Hardware Access', 'Custom RAID', 'IPMI/KVM'],
                color: 'from-rose-500/20 to-rose-600/5',
                borderColor: 'border-rose-500/30'
              },
              {
                name: 'Private Cloud',
                icon: Cloud,
                price: '$999',
                unit: '/month',
                description: 'Isolated infrastructure for compliance',
                specs: ['Dedicated Hardware', 'Isolated Network', 'Custom Compliance', 'White-glove Support'],
                color: 'from-emerald-500/20 to-emerald-600/5',
                borderColor: 'border-emerald-500/30'
              },
              {
                name: 'Monitoring',
                icon: Activity,
                price: '$9',
                unit: '/month',
                description: 'Infrastructure monitoring and alerting',
                specs: ['Real-time Metrics', 'Custom Dashboards', 'SMS/Email Alerts', 'Log Aggregation'],
                color: 'from-violet-500/20 to-violet-600/5',
                borderColor: 'border-violet-500/30'
              },
              {
                name: 'Backup & DR',
                icon: Archive,
                price: '$0.05',
                unit: '/GB',
                description: 'Automated backups and disaster recovery',
                specs: ['Cross-region Replication', 'Point-in-time Recovery', 'RPO < 1 hour', 'Encrypted Storage'],
                color: 'from-amber-500/20 to-amber-600/5',
                borderColor: 'border-amber-500/30'
              }
            ].map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className={`bg-gradient-to-br ${product.color} border ${product.borderColor} ${product.featured ? 'ring-2 ring-green-500/30' : ''} rounded-xl p-6 relative overflow-hidden group`}>
                
                {product.featured && (
                  <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-0 right-0 bg-green-500 text-void-black text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </motion.div>
                )}
                
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="w-12 h-12 bg-void-black/50 rounded-lg flex items-center justify-center mb-4 transition-transform">
                  <product.icon className="w-6 h-6 text-ghost-white" />
                </motion.div>
                
                <h3 className="text-xl font-heading font-bold text-ghost-white mb-1">{product.name}</h3>
                <p className="text-sm text-muted-text mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <motion.span 
                    className="text-3xl font-heading font-bold text-ghost-white"
                    whileHover={{ color: '#c0392b' }}>
                    {product.price}
                  </motion.span>
                  <span className="text-muted-text text-sm">{product.unit}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec, idx) => (
                    <motion.li 
                      key={spec} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.05 }}
                      className="flex items-center gap-2 text-sm text-muted-text">
                      <Check className="w-4 h-4 text-green-500 shrink-0" />
                      {spec}
                    </motion.li>
                  ))}
                </ul>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="w-full bg-void-black/50 border border-steel-gray hover:bg-exploit-red hover:border-exploit-red text-ghost-white transition-all">
                    Configure
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Compare Infrastructure Plans */}
      <section className="py-20 bg-dark-base border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <SectionHeading
              badge="COMPARE"
              title="Find Your Perfect Setup"
              description="Detailed comparison of all infrastructure options"
              align="center" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-steel-gray">
                  <th className="text-left py-4 px-4 font-heading text-ghost-white">Feature</th>
                  <th className="text-center py-4 px-4 font-heading text-blue-500">Compute</th>
                  <th className="text-center py-4 px-4 font-heading text-green-500">VPS</th>
                  <th className="text-center py-4 px-4 font-heading text-purple-500">Kubernetes</th>
                  <th className="text-center py-4 px-4 font-heading text-orange-500">Storage</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { feature: 'Starting Price', compute: '$0.015/hr', vps: '$49/mo', k8s: '$199/mo', storage: '$0.02/GB' },
                  { feature: 'vCPU Cores', compute: 'Up to 128', vps: '4-32', k8s: 'Auto-scaling', storage: 'N/A' },
                  { feature: 'Memory', compute: 'Up to 512 GB', vps: '8-128 GB', k8s: 'Flexible', storage: 'N/A' },
                  { feature: 'Storage Type', compute: 'NVMe SSD', vps: 'SSD', k8s: 'Persistent Volumes', storage: 'Object' },
                  { feature: 'Network Speed', compute: '10 Gbps', vps: '1 Gbps', k8s: 'Container Network', storage: 'CDN' },
                  { feature: 'DDoS Protection', compute: '✓', vps: '✓', k8s: '✓', storage: '✓' },
                  { feature: 'Backups', compute: 'Optional', vps: 'Daily', k8s: 'Snapshot', storage: 'Versioned' },
                  { feature: 'Support', compute: 'Standard', vps: 'Priority', k8s: '24/7 Dedicated', storage: 'Standard' },
                ].map((row, i) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="border-b border-steel-gray/30 hover:bg-steel-gray/10 transition-colors">
                    <td className="py-3 px-4 text-muted-text">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-ghost-white">{row.compute}</td>
                    <td className="py-3 px-4 text-center text-ghost-white">{row.vps}</td>
                    <td className="py-3 px-4 text-center text-ghost-white">{row.k8s}</td>
                    <td className="py-3 px-4 text-center text-ghost-white">{row.storage}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Section 9: Why Choose VXRT Infrastructure */}
      <section className="py-20 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <SectionHeading
              badge="WHY US"
              title="Why Choose VXRT Infrastructure"
              description="Security-first cloud built by offensive security experts"
              align="center" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: Shield,
                title: 'Attack-Resistant by Design',
                description: 'Every node is hardened using the same techniques we use to break into systems. We know every attack vector because we exploit them daily.'
              },
              {
                icon: Zap,
                title: 'Zero-Day Protection',
                description: 'Our threat intelligence team monitors dark web forums and CVE databases 24/7. Critical patches are applied within hours, not days.'
              },
              {
                icon: Target,
                title: 'Compliance Ready',
                description: 'SOC 2, ISO 27001, PCI-DSS, and HIPAA compliant infrastructure. Audit reports available for enterprise customers.'
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-dark-base to-void-black border border-steel-gray rounded-xl p-6 text-center group hover:border-exploit-red/30 transition-colors">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-exploit-red/10 rounded-full flex items-center justify-center group-hover:bg-exploit-red/20 transition-colors">
                  <item.icon className="w-8 h-8 text-exploit-red" />
                </motion.div>
                <h3 className="text-lg font-heading font-bold text-ghost-white mb-2">{item.title}</h3>
                <p className="text-sm text-muted-text leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: '99.99%', label: 'Uptime SLA' },
              { value: '<50ms', label: 'Avg. Latency' },
              { value: '15+', label: 'Global Regions' },
              { value: '24/7', label: 'Security Ops' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                className="text-center p-4 bg-void-black/50 rounded-lg border border-steel-gray/30">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-2xl md:text-3xl font-heading font-bold text-exploit-red">
                  {stat.value}
                </motion.div>
                <div className="text-xs text-muted-text mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Integration Partners */}
      <section className="py-16 bg-dark-base border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8">
            <p className="text-sm text-muted-text uppercase tracking-widest">Works seamlessly with</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {['Terraform', 'Ansible', 'Kubernetes', 'Docker', 'GitHub Actions', 'GitLab CI', 'AWS CLI', 'Azure CLI'].map((partner, i) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-void-black border border-steel-gray/50 rounded-lg text-sm text-muted-text hover:text-ghost-white hover:border-exploit-red/50 transition-all cursor-default">
                {partner}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 11: Product FAQ */}
      <section className="py-20 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <SectionHeading
              badge="FAQ"
              title="Product & Infrastructure Questions"
              description="Common questions about our cloud infrastructure"
              align="center" />
          </motion.div>

          <div className="max-w-3xl mx-auto mt-12 space-y-4">
            {[
              {
                question: 'How does billing work for compute resources?',
                answer: 'Compute resources are billed by the hour with per-second granularity. You only pay for what you use with no minimum commitments. Billing stops automatically when you delete or power off instances.'
              },
              {
                question: 'Can I migrate my existing workloads to VXRT?',
                answer: 'Yes! We provide migration tools and dedicated support for moving from AWS, Azure, GCP, or on-premises infrastructure. Our team can help plan and execute zero-downtime migrations.'
              },
              {
                question: 'What security monitoring is included?',
                answer: 'All infrastructure includes real-time threat detection, DDoS protection, automated vulnerability scanning, and security event logging. Enterprise plans include 24/7 SOC monitoring.'
              },
              {
                question: 'Do you offer custom hardware configurations?',
                answer: 'Yes, for enterprise customers we can provision custom bare metal configurations including GPU instances, high-memory nodes, and specialized security appliances.'
              },
              {
                question: 'Is there a free tier for testing?',
                answer: 'New accounts receive $100 in credits valid for 30 days. This is perfect for testing our infrastructure before committing to a paid plan.'
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-dark-base border border-steel-gray rounded-xl overflow-hidden hover:border-exploit-red/30 transition-colors">
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-exploit-red/10 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-exploit-red font-bold text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-ghost-white mb-2">{faq.question}</h4>
                      <p className="text-sm text-muted-text leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 12: Enterprise Solutions */}
      <section className="py-20 bg-gradient-to-br from-dark-base via-void-black to-dark-base border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <SectionHeading
              badge="ENTERPRISE"
              title="Enterprise Solutions"
              description="Custom infrastructure for large-scale operations"
              align="center" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: 'Dedicated Infrastructure',
                price: 'Custom',
                icon: Building,
                description: 'Fully isolated hardware and network for maximum security and compliance.',
                features: ['Isolated hardware racks', 'Custom network topology', 'Private cloud options', 'Compliance certifications']
              },
              {
                name: 'Hybrid Cloud',
                price: 'Custom',
                icon: GitBranch,
                description: 'Seamlessly connect on-premise infrastructure with VXRT cloud.',
                features: ['Direct Connect', 'VPN Gateway', 'Multi-cloud orchestration', 'Unified management']
              },
              {
                name: 'Managed Services',
                price: 'Custom',
                icon: Settings,
                description: 'We manage your infrastructure so you can focus on your business.',
                features: ['24/7 monitoring', 'Patch management', 'Security hardening', 'Performance optimization']
              }
            ].map((solution, i) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-dark-base to-void-black border border-steel-gray rounded-2xl p-8 relative overflow-hidden group hover:border-exploit-red/50 transition-all duration-300">
                
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-14 h-14 bg-exploit-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-exploit-red/20 transition-colors">
                  <solution.icon className="w-7 h-7 text-exploit-red" />
                </motion.div>

                <h3 className="text-2xl font-heading font-bold text-ghost-white mb-2">{solution.name}</h3>
                <p className="text-3xl font-heading font-bold text-exploit-red mb-4">{solution.price}</p>
                <p className="text-muted-text mb-6">{solution.description}</p>

                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="flex items-center gap-3 text-sm text-ghost-white/80">
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.div className="mt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="w-full bg-exploit-red/10 border border-exploit-red/50 hover:bg-exploit-red text-ghost-white transition-all">
                    Contact Sales
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 13: Security Certifications & Compliance */}
      <section className="py-20 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <SectionHeading
              badge="TRUST & SECURITY"
              title="Certifications & Compliance"
              description="Enterprise-grade security and compliance standards"
              align="center" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
            {[
              { name: 'SOC 2 Type II', icon: Award },
              { name: 'ISO 27001', icon: Shield },
              { name: 'PCI DSS', icon: CreditCard },
              { name: 'HIPAA', icon: Lock },
              { name: 'GDPR', icon: Globe },
              { name: 'FedRAMP', icon: Building }
            ].map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: 'spring', stiffness: 150 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-4 text-center group hover:border-exploit-red/50 transition-all cursor-pointer">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 mx-auto mb-3 bg-exploit-red/10 rounded-lg flex items-center justify-center group-hover:bg-exploit-red/20 transition-colors">
                  <cert.icon className="w-6 h-6 text-exploit-red" />
                </motion.div>
                <p className="text-sm font-semibold text-ghost-white">{cert.name}</p>
              </motion.div>
            ))}
          </div>

          {/* Security Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 bg-gradient-to-r from-exploit-red/5 to-transparent border border-steel-gray rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { value: '99.99%', label: 'Uptime SLA', sub: 'Guaranteed availability' },
                { value: '0', label: 'Data Breaches', sub: 'Since inception' },
                { value: '<1hr', label: 'Incident Response', sub: 'Average time' },
                { value: '24/7', label: 'SOC Monitoring', sub: 'Always watching' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-center">
                  <div className="text-3xl font-heading font-bold text-exploit-red mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-ghost-white">{stat.label}</div>
                  <div className="text-xs text-muted-text">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 14: Custom Solutions */}
      <section className="py-20 bg-dark-base border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-exploit-red/10 border border-exploit-red/30 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-exploit-red" />
                <span className="text-sm font-medium text-exploit-red">Custom Solutions</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ghost-white mb-4">
                Need something tailored?
              </h2>
              <p className="text-muted-text mb-6 leading-relaxed">
                We understand that every organization has unique security requirements. Our team can design custom offensive security programs, specialized training, and bespoke tools that align with your specific threat model and compliance needs.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Custom exploit development for your tech stack',
                  'Bespoke training programs for your team',
                  'Dedicated red team retainer contracts',
                  'Compliance-specific assessments (PCI-DSS, HIPAA, SOC 2)'
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-exploit-red/10 rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-exploit-red" />
                    </div>
                    <span className="text-ghost-white">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <Link to="/contact">
                <Button className="bg-exploit-red hover:bg-exploit-red/90 text-ghost-white px-8 py-6">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Discuss Your Requirements
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative">
              <div className="bg-void-black border border-steel-gray rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-exploit-red/5 rounded-full blur-3xl" />
                
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  {[
                    { label: 'Custom Projects', value: '150+' },
                    { label: 'Client Retention', value: '94%' },
                    { label: 'Avg. Response Time', value: '<4h' },
                    { label: 'Industries Served', value: '12+' }
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="bg-dark-base border border-steel-gray/50 rounded-xl p-4 text-center">
                      <div className="text-2xl font-heading font-bold text-exploit-red mb-1">{stat.value}</div>
                      <div className="text-xs text-muted-text">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-steel-gray/30">
                  <p className="text-sm text-muted-text text-center">
                    "VXRT built a custom adversary simulation that identified critical gaps our previous assessments missed."
                  </p>
                  <div className="text-center mt-3">
                    <span className="text-sm text-ghost-white">— CISO, Fortune 500 Healthcare</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 9: Trust & Guarantees */}
      <section className="py-16 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Money-Back Guarantee',
                description: 'If we don\'t find any critical or high vulnerabilities during your assessment, we\'ll refund 50% of the engagement fee.'
              },
              {
                icon: Clock,
                title: 'On-Time Delivery',
                description: 'We commit to delivering your report within 5 business days after testing completion, or your retest is free.'
              },
              {
                icon: Lock,
                title: 'NDA & Confidentiality',
                description: 'All engagements are protected by comprehensive NDAs. Your data and findings never leave our secure environment.'
              }
            ].map((guarantee, i) => (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 bg-exploit-red/10 rounded-full flex items-center justify-center mb-4">
                  <guarantee.icon className="w-8 h-8 text-exploit-red" />
                </div>
                <h3 className="text-lg font-heading font-bold text-ghost-white mb-2">{guarantee.title}</h3>
                <p className="text-sm text-muted-text">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: CTA */}
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
