import { motion } from 'framer-motion';
import { Cloud, Plus, Server, Boxes } from 'lucide-react';

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

export function Kubernetes() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-6 lg:p-8 space-y-8"
    >
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Kubernetes</h1>
          <p className="text-muted-gray mt-1">Managed K8s clusters for security pipelines</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors">
          <Plus className="w-5 h-5" />
          Create Cluster
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
          <Cloud className="w-10 h-10 text-exploit-red mb-4" />
          <h3 className="text-lg font-semibold text-ghost-white mb-2">Managed Control Plane</h3>
          <p className="text-muted-gray text-sm">Zero-maintenance, highly available control plane</p>
        </div>
        <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
          <Server className="w-10 h-10 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold text-ghost-white mb-2">Worker Nodes</h3>
          <p className="text-muted-gray text-sm">Auto-scaling worker pools with GPU support</p>
        </div>
        <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
          <Boxes className="w-10 h-10 text-green-500 mb-4" />
          <h3 className="text-lg font-semibold text-ghost-white mb-2">Namespaces</h3>
          <p className="text-muted-gray text-sm">Multi-tenant isolation and RBAC support</p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-dark-base border border-steel-gray rounded-xl p-12 text-center">
        <Boxes className="w-16 h-16 text-exploit-red/30 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-ghost-white mb-2">No Clusters</h3>
        <p className="text-muted-gray max-w-md mx-auto">
          Deploy Kubernetes clusters for automated security pipelines
        </p>
      </motion.div>
    </motion.div>
  );
}
