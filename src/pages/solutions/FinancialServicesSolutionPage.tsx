import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedGridBackground } from '../../components/shared/AnimatedGridBackground';
import { SectionHeading } from '../../components/shared/SectionHeading';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { 
  Landmark,
  ArrowLeft,
  Shield,
  CreditCard,
  Lock,
  FileCheck,
  Eye,
  AlertTriangle,
  Server,
  FileText,
  ArrowRight,
  Award,
  TrendingUp
} from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Payment Security Testing',
    description: 'Comprehensive PCI-DSS compliance validation and payment infrastructure security assessments.'
  },
  {
    icon: Eye,
    title: 'Fraud Detection Systems',
    description: 'Security validation of anti-fraud platforms and transaction monitoring systems.'
  },
  {
    icon: Lock,
    title: 'Core Banking Security',
    description: 'Deep-dive assessments of SWIFT, core banking platforms, and financial messaging systems.'
  },
  {
    icon: FileCheck,
    title: 'Regulatory Compliance',
    description: 'SOX, PCI-DSS, GDPR, and financial services compliance testing and validation.'
  }
];

const results = [
  { value: '100%', label: 'PCI-DSS Compliance Rate' },
  { value: '50+', label: 'Financial Institutions Served' },
  { value: '0', label: 'Data Breaches Post-Assessment' },
  { value: '24/7', label: 'Continuous Monitoring' }
];

const testimonials = [
  {
    quote: "VXRT helped us achieve and maintain PCI-DSS Level 1 compliance while identifying critical gaps in our payment processing infrastructure.",
    author: 'Head of Security',
    company: 'Global Payment Processor'
  },
  {
    quote: "Their understanding of banking regulations combined with technical expertise made them an invaluable partner for our security transformation.",
    author: 'CISO',
    company: 'Tier 1 Investment Bank'
  }
];

export function FinancialServicesSolutionPage() {
  return (
    <div className="w-full bg-void-black min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <AnimatedGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/solutions">
              <Button variant="ghost" className="text-muted-gray hover:text-ghost-white mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Solutions
              </Button>
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-green-500/20 rounded-xl blur-xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative w-16 h-16 bg-dark-base border border-green-500/50 rounded-xl flex items-center justify-center">
                  <Landmark className="w-8 h-8 text-green-500" />
                </div>
              </div>
              <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
                Financial Services
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-6 max-w-4xl">
              Financial Services Security
            </h1>
            <p className="text-xl text-muted-gray max-w-3xl mb-8">
              Specialized offensive security for banks, payment processors, and fintech companies. 
              Meet regulatory requirements while protecting your most sensitive financial data.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-exploit-red hover:bg-exploit-red/90">
                <Shield className="w-4 h-4 mr-2" />
                Request Assessment
              </Button>
              <Button variant="outline" className="border-steel-gray text-ghost-white hover:border-exploit-red">
                <FileText className="w-4 h-4 mr-2" />
                Compliance Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="CAPABILITIES"
            title="Financial Security Solutions"
            description="Purpose-built for the financial sector's unique challenges"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-6 hover:border-green-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-void-black rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/10 transition-colors">
                  <feature.icon className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-heading font-bold text-ghost-white mb-2 group-hover:text-green-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-gray text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-dark-base border-y border-steel-gray/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-heading font-bold text-ghost-white mb-4">
              Trusted by Financial Leaders
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {results.map((result, i) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring' }}
                className="text-center"
              >
                <motion.p
                  className="text-3xl md:text-4xl font-heading font-bold text-green-500 mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {result.value}
                </motion.p>
                <p className="text-sm text-muted-gray">{result.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="TESTIMONIALS"
            title="What Financial Clients Say"
            description="Protecting trillions in assets worldwide"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-6 relative"
              >
                <div className="absolute -top-3 left-6">
                  <div className="bg-green-500 px-3 py-1 rounded text-xs font-bold text-black">
                    <Award className="w-3 h-3 inline mr-1" />
                    Verified Client
                  </div>
                </div>
                <p className="text-ghost-white/80 italic mb-4 mt-2">"{testimonial.quote}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-void-black rounded-full flex items-center justify-center">
                    <Landmark className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ghost-white">{testimonial.author}</p>
                    <p className="text-xs text-muted-gray">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-dark-base to-void-black border border-steel-gray rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <h2 className="text-3xl font-heading font-bold text-ghost-white mb-4">
              Secure Your Financial Institution
            </h2>
            <p className="text-muted-gray mb-8 max-w-2xl mx-auto">
              Join leading banks, payment processors, and fintech companies who trust VXRT for their security needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-exploit-red hover:bg-exploit-red/90">
                Schedule Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-steel-gray text-ghost-white hover:border-green-500">
                <FileText className="w-4 h-4 mr-2" />
                Download PCI Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default FinancialServicesSolutionPage;
