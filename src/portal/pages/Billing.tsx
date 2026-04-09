import { motion } from 'framer-motion';
import { CreditCard, Plus, FileText, Download } from 'lucide-react';

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

export function Billing() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-6 lg:p-8 space-y-8"
    >
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Billing</h1>
          <p className="text-muted-gray mt-1">Manage payments and subscriptions</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors">
          <Plus className="w-5 h-5" />
          Add Payment Method
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-dark-base border border-steel-gray rounded-xl p-6 text-center">
          <p className="text-sm text-muted-gray mb-1">Current Balance</p>
          <p className="text-2xl font-bold text-ghost-white">$0.00</p>
        </div>
        <div className="bg-dark-base border border-steel-gray rounded-xl p-6 text-center">
          <p className="text-sm text-muted-gray mb-1">This Month</p>
          <p className="text-2xl font-bold text-ghost-white">$0.00</p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-dark-base border border-steel-gray rounded-xl p-12 text-center">
        <FileText className="w-16 h-16 text-exploit-red/30 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-ghost-white mb-2">No Invoices</h3>
        <p className="text-muted-gray max-w-md mx-auto">
          Your billing history will appear here
        </p>
      </motion.div>
    </motion.div>
  );
}
