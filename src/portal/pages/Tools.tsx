import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  FileText, 
  ArrowLeftRight, 
  HardDrive, 
  Webhook,
  Plus,
  Search,
  Filter,
  Settings,
  Play,
  History
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

const tools = [
  {
    id: 'comments',
    name: 'Comments',
    description: 'Manage user comments and feedback',
    icon: MessageSquare,
    color: 'blue',
    path: '/portal/comments',
    count: 23,
    lastUsed: '2 hours ago'
  },
  {
    id: 'usage',
    name: 'Usage',
    description: 'View resource usage statistics',
    icon: FileText,
    color: 'green',
    path: '/portal/usage',
    count: null,
    lastUsed: '1 day ago'
  },
  {
    id: 'import-export',
    name: 'Import-Export Instances',
    description: 'Import or export VM instances',
    icon: ArrowLeftRight,
    color: 'purple',
    path: '/portal/import-export',
    count: 5,
    lastUsed: '3 days ago'
  },
  {
    id: 'import-volumes',
    name: 'Import Data Volumes',
    description: 'Import external data volumes',
    icon: HardDrive,
    color: 'orange',
    path: '/portal/import-volumes',
    count: 2,
    lastUsed: '1 week ago'
  },
  {
    id: 'webhooks',
    name: 'Webhooks',
    description: 'Configure webhook integrations',
    icon: Webhook,
    color: 'cyan',
    path: '/portal/webhooks',
    count: 8,
    lastUsed: '2 weeks ago'
  }
];

export function Tools() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = tools.filter(tool => {
    return tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           tool.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const getColorClass = (color: string) => {
    const colors: Record<string, { bg: string, text: string }> = {
      blue: { bg: 'bg-blue-500/10', text: 'text-blue-500' },
      green: { bg: 'bg-green-500/10', text: 'text-green-500' },
      purple: { bg: 'bg-purple-500/10', text: 'text-purple-500' },
      orange: { bg: 'bg-orange-500/10', text: 'text-orange-500' },
      cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-500' }
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
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Tools</h1>
          <p className="text-muted-gray mt-1">Utility tools and management functions</p>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-gray" />
          <input
            type="text"
            placeholder="Search tools..."
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

      {/* Tools Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTools.map((tool) => {
          const colorClass = getColorClass(tool.color);
          return (
            <motion.a
              key={tool.id}
              href={tool.path}
              whileHover={{ scale: 1.02 }}
              className="bg-dark-base border border-steel-gray rounded-xl p-5 hover:border-exploit-red/30 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClass.bg}`}>
                  <tool.icon className={`w-6 h-6 ${colorClass.text}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-ghost-white">{tool.name}</h3>
                    {tool.count !== null && (
                      <span className="px-2 py-0.5 bg-steel-gray text-ghost-white text-xs rounded-full">
                        {tool.count}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-gray">{tool.description}</p>
                  <div className="flex items-center gap-4 mt-3 pt-3 border-t border-steel-gray/50">
                    <span className="flex items-center gap-1 text-xs text-muted-gray">
                      <History className="w-3.5 h-3.5" />
                      {tool.lastUsed}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors text-sm font-medium">
                  <Play className="w-4 h-4" />
                  Open
                </button>
                <button className="p-2 bg-steel-gray/30 rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants}>
        <h2 className="text-lg font-semibold text-ghost-white mb-3">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-dark-base border border-steel-gray rounded-lg text-ghost-white hover:border-exploit-red/50 transition-colors">
            <Plus className="w-4 h-4" />
            New Webhook
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-dark-base border border-steel-gray rounded-lg text-ghost-white hover:border-exploit-red/50 transition-colors">
            <ArrowLeftRight className="w-4 h-4" />
            Import Instance
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-dark-base border border-steel-gray rounded-lg text-ghost-white hover:border-exploit-red/50 transition-colors">
            <HardDrive className="w-4 h-4" />
            Import Volume
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
