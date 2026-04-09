import { motion } from 'framer-motion';
import { 
  Cloud, 
  Cog, 
  Disc, 
  UploadCloud, 
  Wifi, 
  Network,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  MoreHorizontal,
  Cpu,
  HardDrive,
  ArrowUpRight
} from 'lucide-react';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

const offerings = [
  {
    id: 1,
    name: 'Standard Compute',
    type: 'compute',
    description: 'General purpose compute instances',
    specs: '2 vCPU, 4GB RAM',
    price: '$0.05/hour',
    status: 'active',
    icon: Cloud
  },
  {
    id: 2,
    name: 'High Memory',
    type: 'compute',
    description: 'Memory optimized instances',
    specs: '4 vCPU, 16GB RAM',
    price: '$0.12/hour',
    status: 'active',
    icon: Cloud
  },
  {
    id: 3,
    name: 'System Offering Small',
    type: 'system',
    description: 'Small system VMs',
    specs: '1 vCPU, 2GB RAM',
    price: '$0.03/hour',
    status: 'active',
    icon: Cog
  },
  {
    id: 4,
    name: 'Premium Disk',
    type: 'disk',
    description: 'High performance SSD storage',
    specs: '100GB SSD',
    price: '$0.10/GB/month',
    status: 'active',
    icon: Disc
  },
  {
    id: 5,
    name: 'Standard Backup',
    type: 'backup',
    description: 'Daily backup service',
    specs: 'Automated daily backups',
    price: '$0.05/GB/month',
    status: 'active',
    icon: UploadCloud
  },
  {
    id: 6,
    name: 'Basic Network',
    type: 'network',
    description: 'Standard network offering',
    specs: '100 Mbps',
    price: '$0.02/hour',
    status: 'active',
    icon: Wifi
  },
  {
    id: 7,
    name: 'VPC Standard',
    type: 'vpc',
    description: 'Virtual private cloud',
    specs: 'Isolated network environment',
    price: '$0.05/hour',
    status: 'draft',
    icon: Network
  }
];

const quickLinks = [
  { name: 'Compute Offerings', path: '/portal/compute-offerings', icon: Cloud, color: 'blue' },
  { name: 'System Offerings', path: '/portal/system-offerings', icon: Cog, color: 'green' },
  { name: 'Disk Offerings', path: '/portal/disk-offerings', icon: Disc, color: 'purple' },
  { name: 'Backup Offerings', path: '/portal/backup-offerings', icon: UploadCloud, color: 'orange' },
  { name: 'Network Offerings', path: '/portal/network-offerings', icon: Wifi, color: 'cyan' },
  { name: 'VPC Offerings', path: '/portal/vpc-offerings', icon: Network, color: 'pink' }
];

export function ServiceOfferings() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  const filteredOfferings = offerings.filter(offering => {
    const matchesSearch = offering.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         offering.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || offering.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const getTypeBadge = (type: string) => {
    const styles = {
      compute: 'bg-blue-500/10 text-blue-500',
      system: 'bg-green-500/10 text-green-500',
      disk: 'bg-purple-500/10 text-purple-500',
      backup: 'bg-orange-500/10 text-orange-500',
      network: 'bg-cyan-500/10 text-cyan-500',
      vpc: 'bg-pink-500/10 text-pink-500'
    };
    const labels = {
      compute: 'Compute',
      system: 'System',
      disk: 'Disk',
      backup: 'Backup',
      network: 'Network',
      vpc: 'VPC'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[type as keyof typeof styles]}`}>
        {labels[type as keyof typeof labels]}
      </span>
    );
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-6 lg:p-8 space-y-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Service Offerings</h1>
          <p className="text-muted-gray mt-1">Manage compute, storage, and network service offerings</p>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2.5 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors font-medium"
          >
            <Plus className="w-5 h-5" />
            New Offering
          </motion.button>
        </div>
      </motion.div>

      {/* Quick Links */}
      <motion.div variants={itemVariants}>
        <h2 className="text-sm font-semibold text-muted-gray uppercase tracking-wider mb-3">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {quickLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.path}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 p-3 bg-dark-base border border-steel-gray rounded-lg hover:border-exploit-red/50 transition-colors"
            >
              <link.icon className={`w-5 h-5 ${
                link.color === 'blue' ? 'text-blue-500' :
                link.color === 'green' ? 'text-green-500' :
                link.color === 'purple' ? 'text-purple-500' :
                link.color === 'orange' ? 'text-orange-500' :
                link.color === 'cyan' ? 'text-cyan-500' :
                'text-pink-500'
              }`} />
              <span className="text-sm text-ghost-white">{link.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-gray" />
          <input
            type="text"
            placeholder="Search offerings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-ghost-white placeholder:text-muted-gray focus:outline-none focus:border-exploit-red"
          />
        </div>
        <div className="flex gap-3">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-ghost-white focus:outline-none focus:border-exploit-red"
          >
            <option value="all">All Types</option>
            <option value="compute">Compute</option>
            <option value="system">System</option>
            <option value="disk">Disk</option>
            <option value="backup">Backup</option>
            <option value="network">Network</option>
            <option value="vpc">VPC</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Offerings Grid */}
      <motion.div variants={itemVariants} className="grid gap-4">
        {filteredOfferings.map((offering) => (
          <motion.div
            key={offering.id}
            className="bg-dark-base border border-steel-gray rounded-xl p-5 hover:border-exploit-red/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  offering.type === 'compute' ? 'bg-blue-500/10' :
                  offering.type === 'system' ? 'bg-green-500/10' :
                  offering.type === 'disk' ? 'bg-purple-500/10' :
                  offering.type === 'backup' ? 'bg-orange-500/10' :
                  offering.type === 'network' ? 'bg-cyan-500/10' :
                  'bg-pink-500/10'
                }`}>
                  <offering.icon className={`w-6 h-6 ${
                    offering.type === 'compute' ? 'text-blue-500' :
                    offering.type === 'system' ? 'text-green-500' :
                    offering.type === 'disk' ? 'text-purple-500' :
                    offering.type === 'backup' ? 'text-orange-500' :
                    offering.type === 'network' ? 'text-cyan-500' :
                    'text-pink-500'
                  }`} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold text-ghost-white">{offering.name}</h3>
                    {getTypeBadge(offering.type)}
                    {offering.status === 'draft' && (
                      <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-500 text-xs rounded">
                        Draft
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-gray mb-2">{offering.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-gray">
                    <span className="flex items-center gap-1">
                      {offering.type === 'compute' && <Cpu className="w-3.5 h-3.5" />}
                      {offering.type === 'disk' && <HardDrive className="w-3.5 h-3.5" />}
                      {offering.specs}
                    </span>
                    <span className="text-exploit-red font-medium">{offering.price}</span>
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
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
