import { motion } from 'framer-motion';
import { Plus, Search, Filter, CheckCircle, XCircle, MoreHorizontal, Settings, Download, Package } from 'lucide-react';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

const extensions = [
  { id: 1, name: 'Kubernetes Plugin', description: 'Container orchestration management', version: '1.5.2', status: 'active', author: 'VXRT Team', installs: 1250 },
  { id: 2, name: 'Monitoring Dashboard', description: 'Real-time monitoring and alerts', version: '2.1.0', status: 'active', author: 'VXRT Team', installs: 890 },
  { id: 3, name: 'Backup Automator', description: 'Automated backup scheduling', version: '1.2.1', status: 'active', author: 'Community', installs: 567 },
  { id: 4, name: 'Cost Analyzer', description: 'Resource cost analysis and reporting', version: '0.9.5', status: 'beta', author: 'VXRT Team', installs: 234 },
  { id: 5, name: 'Network Visualizer', description: 'Network topology visualization', version: '1.0.0', status: 'inactive', author: 'Community', installs: 89 }
];

export function Extensions() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="p-6 lg:p-8 space-y-6">
      <motion.div variants={itemVariants} className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Extensions</h1>
          <p className="text-muted-gray mt-1">Manage system extensions and plugins</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-steel-gray text-ghost-white rounded-lg hover:bg-steel-gray/80 transition-colors font-medium">
            <Download className="w-5 h-5" />
            Install from File
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors font-medium">
            <Plus className="w-5 h-5" />
            Browse Marketplace
          </button>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Extensions', value: '5', icon: Package, color: 'blue' },
          { label: 'Active', value: '3', icon: CheckCircle, color: 'green' },
          { label: 'Beta', value: '1', icon: Package, color: 'yellow' },
          { label: 'Inactive', value: '1', icon: XCircle, color: 'gray' }
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
          <input type="text" placeholder="Search extensions..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-ghost-white placeholder:text-muted-gray focus:outline-none focus:border-exploit-red" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
          <Filter className="w-5 h-5" />
          Filter
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="grid gap-4">
        {extensions.map((ext) => (
          <div key={ext.id} className="bg-dark-base border border-steel-gray rounded-xl p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Package className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold text-ghost-white">{ext.name}</h3>
                    <span className="px-2 py-0.5 bg-steel-gray text-ghost-white text-xs rounded-full">v{ext.version}</span>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      ext.status === 'active' ? 'bg-green-500/10 text-green-500' :
                      ext.status === 'beta' ? 'bg-yellow-500/10 text-yellow-500' :
                      'bg-gray-500/10 text-gray-500'
                    }`}>{ext.status}</span>
                  </div>
                  <p className="text-sm text-muted-gray">{ext.description}</p>
                  <div className="flex items-center gap-4 mt-3 text-sm text-muted-gray">
                    <span>By {ext.author}</span>
                    <span>{ext.installs.toLocaleString()} installs</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 hover:bg-steel-gray/30 rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
                  <Settings className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-steel-gray/30 rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-red-500/10 rounded-lg text-muted-gray hover:text-red-500 transition-colors">
                  <XCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
