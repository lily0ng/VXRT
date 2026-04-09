import { motion } from 'framer-motion';
import { Users, Plus, Search, Filter, UserCheck, UserX, Clock, RefreshCw, MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

const accounts = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Administrator', status: 'active', lastSync: '2 minutes ago', type: 'local' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Power User', status: 'active', lastSync: '5 minutes ago', type: 'ldap' },
  { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Standard User', status: 'inactive', lastSync: '1 hour ago', type: 'local' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Standard User', status: 'active', lastSync: '15 minutes ago', type: 'oauth' },
  { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Read Only', status: 'active', lastSync: '30 minutes ago', type: 'local' }
];

export function Accounts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [syncStatus, setSyncStatus] = useState('idle');
  const [lastSyncTime, setLastSyncTime] = useState('2 minutes ago');

  const handleSync = () => {
    setSyncStatus('syncing');
    setTimeout(() => {
      setSyncStatus('idle');
      setLastSyncTime('Just now');
    }, 2000);
  };

  // Auto sync simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLastSyncTime(prev => {
        if (prev === 'Just now') return '1 minute ago';
        const match = prev.match(/(\d+)\s*minute/);
        if (match) {
          return `${parseInt(match[1]) + 1} minutes ago`;
        }
        return prev;
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="p-6 lg:p-8 space-y-6">
      <motion.div variants={itemVariants} className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Accounts</h1>
          <p className="text-muted-gray mt-1">User account management with auto-sync</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={handleSync} disabled={syncStatus === 'syncing'} className="flex items-center gap-2 px-4 py-2.5 bg-steel-gray text-ghost-white rounded-lg hover:bg-steel-gray/80 transition-colors font-medium disabled:opacity-50">
            <RefreshCw className={`w-5 h-5 ${syncStatus === 'syncing' ? 'animate-spin' : ''}`} />
            {syncStatus === 'syncing' ? 'Syncing...' : 'Sync Now'}
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors font-medium">
            <Plus className="w-5 h-5" />
            Add Account
          </button>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Accounts', value: '70', icon: Users, color: 'blue' },
          { label: 'Active', value: '58', icon: UserCheck, color: 'green' },
          { label: 'Inactive', value: '12', icon: UserX, color: 'red' },
          { label: 'Last Sync', value: lastSyncTime, icon: Clock, color: 'purple' }
        ].map((stat, index) => (
          <div key={index} className="bg-dark-base border border-steel-gray rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${stat.color}-500/10`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-500`} />
              </div>
              <div>
                <p className="text-lg font-bold text-ghost-white">{stat.value}</p>
                <p className="text-xs text-muted-gray">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-gray" />
          <input type="text" placeholder="Search accounts..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-ghost-white placeholder:text-muted-gray focus:outline-none focus:border-exploit-red" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
          <Filter className="w-5 h-5" />
          Filter
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="grid gap-4">
        {accounts.map((account) => (
          <div key={account.id} className="bg-dark-base border border-steel-gray rounded-xl p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold text-ghost-white">{account.name}</h3>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${account.status === 'active' ? 'bg-green-500/10 text-green-500' : 'bg-gray-500/10 text-gray-500'}`}>{account.status}</span>
                    <span className="px-2 py-0.5 bg-steel-gray/50 text-ghost-white text-xs rounded-full uppercase">{account.type}</span>
                  </div>
                  <p className="text-sm text-muted-gray">{account.email}</p>
                  <div className="flex items-center gap-4 mt-3 text-sm text-muted-gray">
                    <span>Role: {account.role}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Synced {account.lastSync}</span>
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
