import { motion } from 'framer-motion';
import { Target, Plus, Search, Filter } from 'lucide-react';

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

export function Assessments() {
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
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Assessments</h1>
          <p className="text-muted-gray mt-1">Manage security assessments and penetration tests</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors">
          <Plus className="w-5 h-5" />
          New Assessment
        </button>
      </motion.div>

      {/* Filters */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-gray" />
          <input
            type="text"
            placeholder="Search assessments..."
            className="w-full pl-10 pr-4 py-2 bg-dark-base border border-steel-gray rounded-lg text-ghost-white placeholder:text-muted-gray focus:outline-none focus:border-exploit-red"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-steel-gray text-ghost-white rounded-lg hover:bg-steel-gray/20 transition-colors">
          <Filter className="w-5 h-5" />
          Filters
        </button>
      </motion.div>

      {/* Content Placeholder */}
      <motion.div variants={itemVariants} className="bg-dark-base border border-steel-gray rounded-xl p-12 text-center">
        <Target className="w-16 h-16 text-exploit-red/30 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-ghost-white mb-2">No Active Assessments</h3>
        <p className="text-muted-gray max-w-md mx-auto">
          Start a new security assessment to begin testing your infrastructure
        </p>
      </motion.div>
    </motion.div>
  );
}
