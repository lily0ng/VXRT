import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedGridBackground } from '../../components/shared/AnimatedGridBackground';
import { SectionHeading } from '../../components/shared/SectionHeading';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { 
  Stethoscope,
  ArrowLeft,
  Shield,
  Heart,
  Database,
  Lock,
  FileCheck,
  Activity,
  Server,
  FileText,
  ArrowRight,
  Award,
  Users
} from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'HIPAA Compliance Testing',
    description: 'Comprehensive assessments to ensure PHI protection and HIPAA compliance validation.'
  },
  {
    icon: Heart,
    title: 'Medical Device Security',
    description: 'IoT and medical device penetration testing for connected healthcare equipment.'
  },
  {
    icon: Lock,
    title: 'EHR Security Assessment',
    description: 'Security testing of Electronic Health Records systems and patient portals.'
  },
  {
    icon: Activity,
    title: 'Ransomware Protection',
    description: 'Specialized assessments to prevent and detect ransomware attacks on healthcare infrastructure.'
  }
];

const results = [
  { value: '100%', label: 'HIPAA Compliance Achieved' },
  { value: '200+', label: 'Healthcare Providers' },
  { value: '0', label: 'PHI Breaches Post-Assessment' },
  { value: '50+', label: 'Medical Device Tests' }
];

const testimonials = [
  {
    quote: "VXRT helped us secure our patient data and achieve HIPAA compliance while maintaining operational efficiency in our hospital network.",
    author: 'CISO',
    company: 'Regional Hospital Network'
  },
  {
    quote: "Their medical device testing uncovered vulnerabilities that could have put patient lives at risk. Truly life-saving work.",
    author: 'VP of Technology',
    company: 'Medical Device Manufacturer'
  }
];

export function HealthcareSolutionPage() {
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
                  className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative w-16 h-16 bg-dark-base border border-cyan-500/50 rounded-xl flex items-center justify-center">
                  <Stethoscope className="w-8 h-8 text-cyan-500" />
                </div>
              </div>
              <Badge className="bg-cyan-500/20 text-cyan-500 border-cyan-500/30">
                Healthcare
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-6 max-w-4xl">
              Healthcare Security Solutions
            </h1>
            <p className="text-xl text-muted-gray max-w-3xl mb-8">
              Protect patient data and medical infrastructure with specialized security assessments 
              designed for hospitals, clinics, and healthcare technology providers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-exploit-red hover:bg-exploit-red/90">
                <Shield className="w-4 h-4 mr-2" />
                Request Assessment
              </Button>
              <Button variant="outline" className="border-steel-gray text-ghost-white hover:border-cyan-500">
                <FileText className="w-4 h-4 mr-2" />
                HIPAA Guide
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
            title="Healthcare Security Capabilities"
            description="Protecting what matters most - patient safety and data"
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
                className="bg-dark-base border border-steel-gray rounded-xl p-6 hover:border-cyan-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-void-black rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 transition-colors">
                  <feature.icon className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-lg font-heading font-bold text-ghost-white mb-2 group-hover:text-cyan-500 transition-colors">
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
              Trusted by Healthcare Providers
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
                  className="text-3xl md:text-4xl font-heading font-bold text-cyan-500 mb-2"
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
            title="What Healthcare Clients Say"
            description="Protecting patient data across the healthcare ecosystem"
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
                  <div className="bg-cyan-500 px-3 py-1 rounded text-xs font-bold text-black">
                    <Award className="w-3 h-3 inline mr-1" />
                    Verified Client
                  </div>
                </div>
                <p className="text-ghost-white/80 italic mb-4 mt-2">"{testimonial.quote}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-void-black rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-cyan-500" />
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
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <h2 className="text-3xl font-heading font-bold text-ghost-white mb-4">
              Secure Your Healthcare Organization
            </h2>
            <p className="text-muted-gray mb-8 max-w-2xl mx-auto">
              Join hospitals, clinics, and healthcare technology providers who trust VXRT to protect patient data.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-exploit-red hover:bg-exploit-red/90">
                Schedule Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-steel-gray text-ghost-white hover:border-cyan-500">
                <FileText className="w-4 h-4 mr-2" />
                Download HIPAA Checklist
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default HealthcareSolutionPage;
