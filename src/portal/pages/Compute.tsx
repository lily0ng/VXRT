import { motion } from 'framer-motion';
import { Server, Plus, ArrowUpRight } from 'lucide-react';

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

export function Compute() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-6 lg:p-8 space-y-8"
    >
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Compute</h1>
          <p className="text-muted-gray mt-1">High-performance bare metal and virtual machines</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors">
          <Plus className="w-5 h-5" />
          Deploy Instance
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
          <Server className="w-10 h-10 text-exploit-red mb-4" />
          <h3 className="text-lg font-semibold text-ghost-white mb-2">Bare Metal</h3>
          <p className="text-muted-gray text-sm">Dedicated physical servers with 100% resource allocation</p>
        </div>
        <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
          <Server className="w-10 h-10 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold text-ghost-white mb-2">Virtual Machines</h3>
          <p className="text-muted-gray text-sm">Flexible VMs with NVMe storage and DDoS protection</p>
        </div>
        <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
          <ArrowUpRight className="w-10 h-10 text-green-500 mb-4" />
          <h3 className="text-lg font-semibold text-ghost-white mb-2">GPU Instances</h3>
          <p className="text-muted-gray text-sm">GPU-powered instances for ML and cracking operations</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
