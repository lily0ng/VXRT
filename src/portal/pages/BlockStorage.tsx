import { motion } from 'framer-motion';
import { HardDrive, Plus, Zap, Shield } from 'lucide-react';

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

export function BlockStorage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-6 lg:p-8 space-y-8"
    >
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Block Storage</h1>
          <p className="text-muted-gray mt-1">High-speed volumes for critical data</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors">
          <Plus className="w-5 h-5" />
          Create Volume
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
          <Zap className="w-10 h-10 text-exploit-red mb-4" />
          <h3 className="text-lg font-semibold text-ghost-white mb-2">NVMe SSD</h3>
          <p className="text-muted-gray text-sm">Ultra-fast NVMe storage for demanding workloads</p>
        </div>
        <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
          <Shield className="w-10 h-10 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold text-ghost-white mb-2">Encrypted</h3>
          <p className="text-muted-gray text-sm">AES-256 encryption at rest for all volumes</p>
        </div>
        <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
          <HardDrive className="w-10 h-10 text-green-500 mb-4" />
          <h3 className="text-lg font-semibold text-ghost-white mb-2">Multi-Attach</h3>
          <p className="text-muted-gray text-sm">Attach volumes to multiple instances</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
