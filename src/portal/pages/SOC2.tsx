import { motion } from 'framer-motion';
import { Shield, FileText, CheckCircle, Clock } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }
  }
};

export function SOC2() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-6 lg:p-8 space-y-8"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-heading font-bold text-ghost-white">SOC 2 Compliance</h1>
        <p className="text-muted-gray mt-1">Service Organization Control 2 reports</p>
      </motion.div>

      <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
          <Shield className="w-10 h-10 text-exploit-red mb-4" />
          <h3 className="text-lg font-semibold text-ghost-white mb-2">Security</h3>
          <p className="text-muted-gray text-sm">Protection of system resources</p>
        </div>
        <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
          <CheckCircle className="w-10 h-10 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold text-ghost-white mb-2">Availability</h3>
          <p className="text-muted-gray text-sm">System uptime and accessibility</p>
        </div>
        <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
          <FileText className="w-10 h-10 text-green-500 mb-4" />
          <h3 className="text-lg font-semibold text-ghost-white mb-2">Processing</h3>
          <p className="text-muted-gray text-sm">Data processing integrity</p>
        </div>
        <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
          <Clock className="w-10 h-10 text-yellow-500 mb-4" />
          <h3 className="text-lg font-semibold text-ghost-white mb-2">Confidentiality</h3>
          <p className="text-muted-gray text-sm">Protection of sensitive data</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
