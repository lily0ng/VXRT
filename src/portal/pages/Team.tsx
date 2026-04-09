import { motion } from 'framer-motion';
import { Users, Plus, Search, Mail } from 'lucide-react';

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

export function Team() {
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
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Team</h1>
          <p className="text-muted-gray mt-1">Manage team members and permissions</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors">
          <Plus className="w-5 h-5" />
          Invite Member
        </button>
      </motion.div>

      {/* Content Placeholder */}
      <motion.div variants={itemVariants} className="bg-dark-base border border-steel-gray rounded-xl p-12 text-center">
        <Users className="w-16 h-16 text-exploit-red/30 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-ghost-white mb-2">Team Management</h3>
        <p className="text-muted-gray max-w-md mx-auto">
          Invite team members and manage their access levels
        </p>
      </motion.div>
    </motion.div>
  );
}
