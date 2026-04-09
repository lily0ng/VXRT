import { motion } from 'framer-motion';
import { CloudLightning, Plus, Cloud, Shield } from 'lucide-react';

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

export function CloudSecurity() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-6 lg:p-8 space-y-8"
    >
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Cloud Security</h1>
          <p className="text-muted-gray mt-1">AWS, Azure, and GCP security assessments</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors">
          <Plus className="w-5 h-5" />
          New Audit
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
        <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
          <Cloud className="w-10 h-10 text-orange-500 mb-4" />
          <h3 className="text-lg font-semibold text-ghost-white mb-2">AWS</h3>
          <p className="text-muted-gray text-sm">Amazon Web Services audit</p>
        </div>
        <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
          <Cloud className="w-10 h-10 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold text-ghost-white mb-2">Azure</h3>
          <p className="text-muted-gray text-sm">Microsoft Azure audit</p>
        </div>
        <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
          <Cloud className="w-10 h-10 text-green-500 mb-4" />
          <h3 className="text-lg font-semibold text-ghost-white mb-2">GCP</h3>
          <p className="text-muted-gray text-sm">Google Cloud Platform audit</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
