import { motion } from 'framer-motion';
import { Shield, Plus, Search, Filter, Users, CheckCircle, XCircle, MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

const roles = [
  { id: 1, name: 'Administrator', description: 'Full system access and management', users: 3, permissions: 48, status: 'active' },
  { id: 2, name: 'Power User', description: 'Extended user permissions', users: 12, permissions: 24, status: 'active' },
  { id: 3, name: 'Standard User', description: 'Basic user permissions', users: 45, permissions: 12, status: 'active' },
  { id: 4, name: 'Read Only', description: 'View-only access', users: 8, permissions: 6, status: 'active' },
  { id: 5, name: 'Guest', description: 'Limited temporary access', users: 2, permissions: 3, status: 'inactive' }
];

export function Roles() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="p-6 lg:p-8 space-y-6">
      <motion.div variants={itemVariants} className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Roles</h1>
          <p className="text-muted-gray mt-1">Manage user roles and permissions</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors font-medium">
          <Plus className="w-5 h-5" />
          Create Role
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Roles', value: '5', icon: Shield, color: 'blue' },
          { label: 'Active', value: '4', icon: CheckCircle, color: 'green' },
          { label: 'Inactive', value: '1', icon: XCircle, color: 'red' },
          { label: 'Total Users', value: '70', icon: Users, color: 'purple' }
        ].map((stat, index) => (
          <div key={index} className="bg-dark-base border border-steel-gray rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${stat.color}-500/10`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-500`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-ghost-white">{stat.value}</p>
                <p className="text-xs text-muted-gray">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-gray" />
          <input type="text" placeholder="Search roles..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-ghost-white placeholder:text-muted-gray focus:outline-none focus:border-exploit-red" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
          <Filter className="w-5 h-5" />
          Filter
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="grid gap-4">
        {roles.map((role) => (
          <div key={role.id} className="bg-dark-base border border-steel-gray rounded-xl p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold text-ghost-white">{role.name}</h3>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${role.status === 'active' ? 'bg-green-500/10 text-green-500' : 'bg-gray-500/10 text-gray-500'}`}>{role.status}</span>
                  </div>
                  <p className="text-sm text-muted-gray">{role.description}</p>
                  <div className="flex items-center gap-4 mt-3 text-sm text-muted-gray">
                    <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {role.users} users</span>
                    <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> {role.permissions} permissions</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 hover:bg-steel-gray/30 rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-steel-gray/30 rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-red-500/10 rounded-lg text-muted-gray hover:text-red-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
