import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedGridBackground } from '../../components/shared/AnimatedGridBackground';
import { SectionHeading } from '../../components/shared/SectionHeading';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { 
  Zap,
  ArrowLeft,
  Shield,
  Power,
  Radio,
  AlertTriangle,
  Lock,
  FileText,
  ArrowRight,
  Award
} from 'lucide-react';

const features = [
  {
    icon: Power,
    title: 'Grid Infrastructure Security',
    description: 'Security assessments for electrical grid operations and smart grid technologies.'
  },
  {
    icon: Radio,
    title: 'SCADA/EMS Protection',
    description: 'Energy Management System and SCADA security testing for critical infrastructure.'
  },
  {
    icon: AlertTriangle,
    title: 'NERC CIP Compliance',
    description: 'North American Electric Reliability Corporation compliance validation and testing.'
  },
  {
    icon: Lock,
    title: 'Nuclear & Critical Sites',
    description: 'Specialized security assessments for nuclear facilities and critical generation sites.'
  }
];

const results = [
  { value: '100%', label: 'NERC CIP Compliance' },
  { value: '75+', label: 'Utility Clients' },
  { value: '50GW+', label: 'Generation Protected' },
  { value: '0', label: 'Grid Disruptions' }
];

export function EnergyUtilitiesSolutionPage() {
  return (
    <div className="w-full bg-void-black min-h-screen pb-24">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <AnimatedGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/solutions">
              <Button variant="ghost" className="text-muted-gray hover:text-ghost-white mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Solutions
              </Button>
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <motion.div className="absolute inset-0 bg-yellow-500/20 rounded-xl blur-xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 3, repeat: Infinity }} />
                <div className="relative w-16 h-16 bg-dark-base border border-yellow-500/50 rounded-xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-yellow-500" />
                </div>
              </div>
              <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">Energy & Utilities</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-6">Energy & Utilities Security</h1>
            <p className="text-xl text-muted-gray max-w-3xl mb-8">Critical infrastructure protection for power generation, transmission, and distribution systems. NERC CIP compliance and grid security assessments.</p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-exploit-red hover:bg-exploit-red/90"><Shield className="w-4 h-4 mr-2" /> Request Assessment</Button>
              <Button variant="outline" className="border-steel-gray text-ghost-white hover:border-yellow-500"><FileText className="w-4 h-4 mr-2" /> NERC CIP Guide</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <SectionHeading badge="CAPABILITIES" title="Energy Sector Security Solutions" description="Protecting critical infrastructure nationwide" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }} className="bg-dark-base border border-steel-gray rounded-xl p-6 hover:border-yellow-500/50 transition-all group">
                <div className="w-12 h-12 bg-void-black rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/10 transition-colors">
                  <feature.icon className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="text-lg font-heading font-bold text-ghost-white mb-2 group-hover:text-yellow-500 transition-colors">{feature.title}</h3>
                <p className="text-muted-gray text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-base border-y border-steel-gray/30">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-2xl font-heading font-bold text-ghost-white mb-4">Trusted by Utilities</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {results.map((result, i) => (
              <motion.div key={result.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, type: 'spring' }} className="text-center">
                <motion.p className="text-3xl md:text-4xl font-heading font-bold text-yellow-500 mb-2" whileHover={{ scale: 1.1 }}>{result.value}</motion.p>
                <p className="text-sm text-muted-gray">{result.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-dark-base to-void-black border border-steel-gray rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
            <motion.div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity }} />
            <h2 className="text-3xl font-heading font-bold text-ghost-white mb-4">Secure Your Critical Infrastructure</h2>
            <p className="text-muted-gray mb-8 max-w-2xl mx-auto">Join utilities and energy providers who trust VXRT to protect the power grid and critical generation assets.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-exploit-red hover:bg-exploit-red/90">Schedule Consultation <ArrowRight className="w-4 h-4 ml-2" /></Button>
              <Button variant="outline" className="border-steel-gray text-ghost-white hover:border-yellow-500"><Award className="w-4 h-4 mr-2" /> View Case Studies</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default EnergyUtilitiesSolutionPage;
