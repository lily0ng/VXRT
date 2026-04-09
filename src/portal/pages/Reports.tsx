import { motion } from 'framer-motion';
import { FileText, Plus, Search, Download } from 'lucide-react';

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

export function Reports() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-6 lg:p-8 space-y-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Reports</h1>
          <p className="text-muted-gray mt-1">Generate and manage security reports</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-steel-gray text-ghost-white rounded-lg hover:bg-steel-gray/20 transition-colors">
            <Download className="w-5 h-5" />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors">
            <Plus className="w-5 h-5" />
            New Report
          </button>
        </div>
      </motion.div>

      {/* Content Placeholder */}
      <motion.div variants={itemVariants} className="bg-dark-base border border-steel-gray rounded-xl p-12 text-center">
        <FileText className="w-16 h-16 text-exploit-red/30 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-ghost-white mb-2">No Reports Generated</h3>
        <p className="text-muted-gray max-w-md mx-auto">
          Create comprehensive security reports from your assessments
        </p>
      </motion.div>
    </motion.div>
  );
}
