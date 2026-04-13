import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedGridBackground } from '../../components/shared/AnimatedGridBackground';
import { SectionHeading } from '../../components/shared/SectionHeading';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { 
  Building2,
  ArrowLeft,
  Shield,
  Target,
  Zap,
  CheckCircle,
  Globe,
  Users,
  Lock,
  Network,
  Server,
  FileText,
  ArrowRight,
  Award,
  TrendingUp
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Comprehensive Security Assessments',
    description: 'End-to-end evaluation of your enterprise infrastructure, from perimeter defenses to internal networks.'
  },
  {
    icon: Target,
    title: 'Adversary Simulation',
    description: 'Real-world attack scenarios modeled after APT groups targeting Fortune 500 companies.'
  },
  {
    icon: Network,
    title: 'Network Security Architecture',
    description: 'Design and validation of secure network segmentation and zero-trust implementations.'
  },
  {
    icon: Lock,
    title: 'Identity & Access Management',
    description: 'Testing and hardening of IAM systems, SSO, and privileged access controls.'
  }
];

const results = [
  { value: '85%', label: 'Reduction in Critical Vulnerabilities' },
  { value: '3x', label: 'Faster Threat Detection' },
  { value: '60%', label: 'Decrease in Incident Response Time' },
  { value: '99.9%', label: 'Security Posture Improvement' }
];

const testimonials = [
  {
    quote: "VXRT's red team exercise exposed vulnerabilities we didn't know existed. Their detailed recommendations transformed our security posture.",
    author: 'CISO',
    company: 'Fortune 100 Financial Institution'
  },
  {
    quote: "The depth of their analysis and the professionalism of their team made all the difference in our compliance journey.",
    author: 'VP of Security',
    company: 'Global Retail Corporation'
  }
];

export function EnterpriseSolutionPage() {
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
                  className="absolute inset-0 bg-exploit-red/20 rounded-xl blur-xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative w-16 h-16 bg-dark-base border border-exploit-red/50 rounded-xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-exploit-red" />
                </div>
              </div>
              <Badge className="bg-exploit-red/20 text-exploit-red border-exploit-red/30">
                Enterprise Solutions
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-6 max-w-4xl">
              Enterprise Security Solutions
            </h1>
            <p className="text-xl text-muted-gray max-w-3xl mb-8">
              Comprehensive offensive security services designed for large-scale enterprise environments. 
              Protect your critical assets with battle-tested methodologies trusted by Fortune 500 companies.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-exploit-red hover:bg-exploit-red/90">
                <Shield className="w-4 h-4 mr-2" />
                Request Assessment
              </Button>
              <Button variant="outline" className="border-steel-gray text-ghost-white hover:border-exploit-red">
                <FileText className="w-4 h-4 mr-2" />
                Download Datasheet
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
            title="Enterprise Security Capabilities"
            description="Tailored solutions for complex enterprise environments"
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
                className="bg-dark-base border border-steel-gray rounded-xl p-6 hover:border-exploit-red/50 transition-all group"
              >
                <div className="w-12 h-12 bg-void-black rounded-lg flex items-center justify-center mb-4 group-hover:bg-exploit-red/10 transition-colors">
                  <feature.icon className="w-6 h-6 text-exploit-red" />
                </div>
                <h3 className="text-lg font-heading font-bold text-ghost-white mb-2 group-hover:text-exploit-red transition-colors">
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
              Proven Results for Enterprise Clients
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
                  className="text-3xl md:text-4xl font-heading font-bold text-exploit-red mb-2"
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
            title="What Enterprise Clients Say"
            description="Trusted by industry leaders worldwide"
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
                  <div className="bg-exploit-red px-3 py-1 rounded text-xs font-bold text-white">
                    <Award className="w-3 h-3 inline mr-1" />
                    Verified Client
                  </div>
                </div>
                <p className="text-ghost-white/80 italic mb-4 mt-2">"{testimonial.quote}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-void-black rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-exploit-red" />
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
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-exploit-red to-transparent" />
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-exploit-red/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <h2 className="text-3xl font-heading font-bold text-ghost-white mb-4">
              Secure Your Enterprise Today
            </h2>
            <p className="text-muted-gray mb-8 max-w-2xl mx-auto">
              Join hundreds of enterprise clients who trust VXRT to protect their critical assets and infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-exploit-red hover:bg-exploit-red/90">
                Schedule Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-steel-gray text-ghost-white hover:border-exploit-red">
                <Globe className="w-4 h-4 mr-2" />
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default EnterpriseSolutionPage;
