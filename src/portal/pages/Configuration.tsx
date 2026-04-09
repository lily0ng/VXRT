import { motion } from 'framer-motion';
import { 
  Cog, 
  UsersRound, 
  ArrowLeftRight, 
  Inbox, 
  Server, 
  Table2, 
  Laptop, 
  Plug, 
  Monitor,
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  MoreHorizontal,
  Save,
  RotateCcw
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

const configSections = [
  {
    id: 'global',
    name: 'Global Settings',
    description: 'System-wide configuration settings',
    icon: Cog,
    color: 'blue',
    path: '/portal/global-settings',
    status: 'configured',
    lastUpdated: '2 hours ago'
  },
  {
    id: 'ldap',
    name: 'LDAP Configuration',
    description: 'Directory service integration',
    icon: UsersRound,
    color: 'green',
    path: '/portal/ldap',
    status: 'not-configured',
    lastUpdated: 'Never'
  },
  {
    id: 'oauth',
    name: 'OAuth Configuration',
    description: 'Single sign-on providers',
    icon: ArrowLeftRight,
    color: 'purple',
    path: '/portal/oauth',
    status: 'configured',
    lastUpdated: '1 day ago'
  },
  {
    id: 'backup',
    name: 'Backup Repository',
    description: 'Backup storage settings',
    icon: Inbox,
    color: 'orange',
    path: '/portal/backup-repo',
    status: 'configured',
    lastUpdated: '3 days ago'
  },
  {
    id: 'hypervisor',
    name: 'Hypervisor Capabilities',
    description: 'Hypervisor feature settings',
    icon: Server,
    color: 'cyan',
    path: '/portal/hypervisor',
    status: 'configured',
    lastUpdated: '1 week ago'
  },
  {
    id: 'os-categories',
    name: 'Guest OS Categories',
    description: 'Operating system categories',
    icon: Table2,
    color: 'pink',
    path: '/portal/os-categories',
    status: 'configured',
    lastUpdated: '2 weeks ago'
  },
  {
    id: 'guest-os',
    name: 'Guest OS',
    description: 'Supported guest operating systems',
    icon: Laptop,
    color: 'indigo',
    path: '/portal/guest-os',
    status: 'configured',
    lastUpdated: '2 weeks ago'
  },
  {
    id: 'os-mappings',
    name: 'Guest OS Mappings',
    description: 'OS template mappings',
    icon: Plug,
    color: 'yellow',
    path: '/portal/os-mappings',
    status: 'configured',
    lastUpdated: '2 weeks ago'
  },
  {
    id: 'gpu',
    name: 'GPU Card Types',
    description: 'GPU hardware definitions',
    icon: Monitor,
    color: 'red',
    path: '/portal/gpu-types',
    status: 'configured',
    lastUpdated: '1 month ago'
  }
];

export function Configuration() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSections = configSections.filter(section => {
    return section.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           section.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const getStatusBadge = (status: string) => {
    if (status === 'configured') {
      return (
        <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded-full font-medium">
          Configured
        </span>
      );
    }
    return (
      <span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 text-xs rounded-full font-medium">
        Not Configured
      </span>
    );
  };

  const getColorClass = (color: string) => {
    const colors: Record<string, { bg: string, text: string }> = {
      blue: { bg: 'bg-blue-500/10', text: 'text-blue-500' },
      green: { bg: 'bg-green-500/10', text: 'text-green-500' },
      purple: { bg: 'bg-purple-500/10', text: 'text-purple-500' },
      orange: { bg: 'bg-orange-500/10', text: 'text-orange-500' },
      cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-500' },
      pink: { bg: 'bg-pink-500/10', text: 'text-pink-500' },
      indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-500' },
      yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-500' },
      red: { bg: 'bg-red-500/10', text: 'text-red-500' }
    };
    return colors[color] || colors.blue;
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
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Configuration</h1>
          <p className="text-muted-gray mt-1">Manage system configuration and settings</p>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2.5 bg-steel-gray text-ghost-white rounded-lg hover:bg-steel-gray/80 transition-colors font-medium"
          >
            <RotateCcw className="w-5 h-5" />
            Reset All
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2.5 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors font-medium"
          >
            <Save className="w-5 h-5" />
            Save Changes
          </motion.button>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Configs', value: '9', icon: Cog, color: 'blue' },
          { label: 'Configured', value: '8', icon: Server, color: 'green' },
          { label: 'Pending', value: '1', icon: Cog, color: 'yellow' },
          { label: 'Last Updated', value: '2h', icon: RotateCcw, color: 'purple' }
        ].map((stat, index) => (
          <div key={index} className="bg-dark-base border border-steel-gray rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                stat.color === 'blue' ? 'bg-blue-500/10' :
                stat.color === 'green' ? 'bg-green-500/10' :
                stat.color === 'yellow' ? 'bg-yellow-500/10' :
                'bg-purple-500/10'
              }`}>
                <stat.icon className={`w-5 h-5 ${
                  stat.color === 'blue' ? 'text-blue-500' :
                  stat.color === 'green' ? 'text-green-500' :
                  stat.color === 'yellow' ? 'text-yellow-500' :
                  'text-purple-500'
                }`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-ghost-white">{stat.value}</p>
                <p className="text-xs text-muted-gray">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Filters */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-gray" />
          <input
            type="text"
            placeholder="Search configuration sections..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-ghost-white placeholder:text-muted-gray focus:outline-none focus:border-exploit-red"
          />
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
            <Filter className="w-5 h-5" />
            Filter
          </button>
        </div>
      </motion.div>

      {/* Configuration Sections */}
      <motion.div variants={itemVariants} className="grid gap-4">
        {filteredSections.map((section) => {
          const colorClass = getColorClass(section.color);
          return (
            <motion.a
              key={section.id}
              href={section.path}
              whileHover={{ scale: 1.01 }}
              className="bg-dark-base border border-steel-gray rounded-xl p-5 hover:border-exploit-red/30 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClass.bg}`}>
                    <section.icon className={`w-6 h-6 ${colorClass.text}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-semibold text-ghost-white">{section.name}</h3>
                      {getStatusBadge(section.status)}
                    </div>
                    <p className="text-sm text-muted-gray">{section.description}</p>
                    <p className="text-xs text-muted-gray mt-2">Last updated: {section.lastUpdated}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-2 hover:bg-steel-gray/30 rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-steel-gray/30 rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
