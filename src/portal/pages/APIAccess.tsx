import { motion } from 'framer-motion';
import { Terminal, Plus, Key, Webhook } from 'lucide-react';

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

export function APIAccess() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-6 lg:p-8 space-y-8"
    >
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-ghost-white">API Access</h1>
          <p className="text-muted-gray mt-1">Manage API keys and access tokens</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors">
          <Plus className="w-5 h-5" />
          New API Key
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
        <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
          <Key className="w-10 h-10 text-exploit-red mb-4" />
          <h3 className="text-lg font-semibold text-ghost-white mb-2">API Keys</h3>
          <p className="text-muted-gray text-sm">Manage access credentials</p>
        </div>
        <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
          <Webhook className="w-10 h-10 text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold text-ghost-white mb-2">Webhooks</h3>
          <p className="text-muted-gray text-sm">Configure event notifications</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
