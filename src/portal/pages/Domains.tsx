import { motion } from 'framer-motion';
import { Globe, Plus, Search, Filter, CheckCircle, XCircle, MoreHorizontal, Edit, Trash2, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

const domains = [
  { id: 1, name: 'vxrt.cloud', status: 'active', ssl: 'valid', records: 12, expiresAt: '2025-12-31' },
  { id: 2, name: 'api.vxrt.cloud', status: 'active', ssl: 'valid', records: 8, expiresAt: '2025-12-31' },
  { id: 3, name: 'portal.vxrt.cloud', status: 'active', ssl: 'valid', records: 6, expiresAt: '2025-12-31' },
  { id: 4, name: 'staging.vxrt.cloud', status: 'inactive', ssl: 'expired', records: 4, expiresAt: '2024-06-30' },
  { id: 5, name: 'test.example.com', status: 'pending', ssl: 'none', records: 2, expiresAt: 'N/A' }
];

export function Domains() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="p-6 lg:p-8 space-y-6">
      <motion.div variants={itemVariants} className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Domains</h1>
          <p className="text-muted-gray mt-1">Manage DNS domains and SSL certificates</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors font-medium">
          <Plus className="w-5 h-5" />
          Add Domain
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Domains', value: '5', icon: Globe, color: 'blue' },
          { label: 'Active', value: '3', icon: CheckCircle, color: 'green' },
          { label: 'SSL Valid', value: '3', icon: CheckCircle, color: 'cyan' },
          { label: 'Expired', value: '2', icon: XCircle, color: 'red' }
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
          <input type="text" placeholder="Search domains..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-ghost-white placeholder:text-muted-gray focus:outline-none focus:border-exploit-red" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
          <Filter className="w-5 h-5" />
          Filter
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="grid gap-4">
        {domains.map((domain) => (
          <div key={domain.id} className="bg-dark-base border border-steel-gray rounded-xl p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold text-ghost-white">{domain.name}</h3>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      domain.status === 'active' ? 'bg-green-500/10 text-green-500' :
                      domain.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500' :
                      'bg-gray-500/10 text-gray-500'
                    }`}>{domain.status}</span>
                  </div>
                  <p className="text-sm text-muted-gray">{domain.records} DNS records</p>
                  <div className="flex items-center gap-4 mt-3 text-sm text-muted-gray">
                    <span className={`flex items-center gap-1 ${domain.ssl === 'valid' ? 'text-green-500' : domain.ssl === 'expired' ? 'text-red-500' : 'text-gray-500'}`}>
                      <CheckCircle className="w-4 h-4" /> SSL: {domain.ssl}
                    </span>
                    <span>Expires: {domain.expiresAt}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 hover:bg-steel-gray/30 rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
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
