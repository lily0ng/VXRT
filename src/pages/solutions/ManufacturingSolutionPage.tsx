import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedGridBackground } from '../../components/shared/AnimatedGridBackground';
import { SectionHeading } from '../../components/shared/SectionHeading';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { 
  Factory,
  ArrowLeft,
  Shield,
  Cpu,
  Cog,
  Wifi,
  Lock,
  FileText,
  ArrowRight,
  Award
} from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'ICS/SCADA Security',
    description: 'Industrial control system assessments for manufacturing floors and production lines.'
  },
  {
    icon: Cog,
    title: 'OT Network Testing',
    description: 'Operational technology security assessments for factory networks and machinery.'
  },
  {
    icon: Wifi,
    title: 'IoT Device Security',
    description: 'Security testing of connected sensors, actuators, and industrial IoT devices.'
  },
  {
    icon: Lock,
    title: 'Supply Chain Security',
    description: 'Assessment of vendor access and third-party integration risks in manufacturing.'
  }
];

const results = [
  { value: '100+', label: 'Manufacturing Sites' },
  { value: '50+', label: 'ICS Assessments' },
  { value: '0', label: 'Production Disruptions' },
  { value: '99.9%', label: 'OT Uptime Maintained' }
];

export function ManufacturingSolutionPage() {
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
                <motion.div className="absolute inset-0 bg-slate-500/20 rounded-xl blur-xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 3, repeat: Infinity }} />
                <div className="relative w-16 h-16 bg-dark-base border border-slate-500/50 rounded-xl flex items-center justify-center">
                  <Factory className="w-8 h-8 text-slate-500" />
                </div>
              </div>
              <Badge className="bg-slate-500/20 text-slate-500 border-slate-500/30">Manufacturing</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-6">Manufacturing Security</h1>
            <p className="text-xl text-muted-gray max-w-3xl mb-8">Protect industrial control systems and operational technology with specialized OT security assessments for smart factories and manufacturing environments.</p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-exploit-red hover:bg-exploit-red/90"><Shield className="w-4 h-4 mr-2" /> Request Assessment</Button>
              <Button variant="outline" className="border-steel-gray text-ghost-white hover:border-slate-500"><FileText className="w-4 h-4 mr-2" /> OT Security Guide</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <SectionHeading badge="CAPABILITIES" title="Manufacturing Security Solutions" description="Securing Industry 4.0 and smart factories" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }} className="bg-dark-base border border-steel-gray rounded-xl p-6 hover:border-slate-500/50 transition-all group">
                <div className="w-12 h-12 bg-void-black rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-500/10 transition-colors">
                  <feature.icon className="w-6 h-6 text-slate-500" />
                </div>
                <h3 className="text-lg font-heading font-bold text-ghost-white mb-2 group-hover:text-slate-500 transition-colors">{feature.title}</h3>
                <p className="text-muted-gray text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-dark-base border-y border-steel-gray/30">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-2xl font-heading font-bold text-ghost-white mb-4">Trusted by Manufacturers</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {results.map((result, i) => (
              <motion.div key={result.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, type: 'spring' }} className="text-center">
                <motion.p className="text-3xl md:text-4xl font-heading font-bold text-slate-500 mb-2" whileHover={{ scale: 1.1 }}>{result.value}</motion.p>
                <p className="text-sm text-muted-gray">{result.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-dark-base to-void-black border border-steel-gray rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-500 to-transparent" />
            <motion.div className="absolute -top-20 -right-20 w-40 h-40 bg-slate-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity }} />
            <h2 className="text-3xl font-heading font-bold text-ghost-white mb-4">Secure Your Manufacturing Operations</h2>
            <p className="text-muted-gray mb-8 max-w-2xl mx-auto">Join smart manufacturers who trust VXRT to protect their industrial systems without disrupting production.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-exploit-red hover:bg-exploit-red/90">Schedule Consultation <ArrowRight className="w-4 h-4 ml-2" /></Button>
              <Button variant="outline" className="border-steel-gray text-ghost-white hover:border-slate-500"><Award className="w-4 h-4 mr-2" /> View Case Studies</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ManufacturingSolutionPage;
