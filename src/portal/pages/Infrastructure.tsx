import { motion } from 'framer-motion';
import { 
  Globe, 
  LayoutGrid, 
  Hexagon, 
  Server,
  HardDrive,
  Database,
  Zap,
  Activity,
  Building2,
  Cpu,
  BarChart3,
  Bell,
  ArrowUpRight
} from 'lucide-react';

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

const infraStats = [
  { label: 'Zones', value: '3', icon: Globe, color: 'blue', path: '/portal/zones' },
  { label: 'Pods', value: '12', icon: LayoutGrid, color: 'green', path: '/portal/pods' },
  { label: 'Clusters', value: '8', icon: Hexagon, color: 'purple', path: '/portal/clusters' },
  { label: 'Hosts', value: '24', icon: Server, color: 'cyan', path: '/portal/hosts' },
  { label: 'Primary Storage', value: '45 TB', icon: HardDrive, color: 'orange', path: '/portal/primary-storage' },
  { label: 'Secondary Storage', value: '120 TB', icon: HardDrive, color: 'pink', path: '/portal/secondary-storage' },
  { label: 'Object Storage', value: '500 TB', icon: Database, color: 'indigo', path: '/portal/infra-object-storage' },
  { label: 'System VMs', value: '16', icon: Zap, color: 'yellow', path: '/portal/system-vms' }
];

const quickLinks = [
  { name: 'Virtual Routers', path: '/portal/virtual-routers', icon: Activity },
  { name: 'Internal LB', path: '/portal/internal-lb', icon: Activity },
  { name: 'Management Servers', path: '/portal/management-servers', icon: Building2 },
  { name: 'CPU Sockets', path: '/portal/cpu-sockets', icon: Cpu },
  { name: 'DB/Usage Server', path: '/portal/db-usage-server', icon: BarChart3 },
  { name: 'Alerts', path: '/portal/infra-alerts', icon: Bell }
];

export function Infrastructure() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-6 lg:p-8 space-y-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-heading font-bold text-ghost-white">Infrastructure Summary</h1>
        <p className="text-muted-gray mt-1">Overview of cloud infrastructure resources</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {infraStats.map((stat, index) => (
          <motion.a
            key={index}
            href={stat.path}
            whileHover={{ scale: 1.02 }}
            className="bg-dark-base border border-steel-gray rounded-xl p-4 hover:border-exploit-red/50 transition-colors cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                stat.color === 'blue' ? 'bg-blue-500/10' :
                stat.color === 'green' ? 'bg-green-500/10' :
                stat.color === 'purple' ? 'bg-purple-500/10' :
                stat.color === 'cyan' ? 'bg-cyan-500/10' :
                stat.color === 'orange' ? 'bg-orange-500/10' :
                stat.color === 'pink' ? 'bg-pink-500/10' :
                stat.color === 'indigo' ? 'bg-indigo-500/10' :
                'bg-yellow-500/10'
              }`}>
                <stat.icon className={`w-5 h-5 ${
                  stat.color === 'blue' ? 'text-blue-500' :
                  stat.color === 'green' ? 'text-green-500' :
                  stat.color === 'purple' ? 'text-purple-500' :
                  stat.color === 'cyan' ? 'text-cyan-500' :
                  stat.color === 'orange' ? 'text-orange-500' :
                  stat.color === 'pink' ? 'text-pink-500' :
                  stat.color === 'indigo' ? 'text-indigo-500' :
                  'text-yellow-500'
                }`} />
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-gray" />
            </div>
            <div className="mt-3">
              <p className="text-2xl font-bold text-ghost-white">{stat.value}</p>
              <p className="text-xs text-muted-gray">{stat.label}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Quick Links */}
      <motion.div variants={itemVariants}>
        <h2 className="text-lg font-semibold text-ghost-white mb-3">Quick Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {quickLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.path}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 p-3 bg-dark-base border border-steel-gray rounded-lg hover:border-exploit-red/50 transition-colors"
            >
              <link.icon className="w-5 h-5 text-exploit-red" />
              <span className="text-sm text-ghost-white">{link.name}</span>
              <ArrowUpRight className="w-4 h-4 text-muted-gray ml-auto" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* System Health */}
      <motion.div variants={itemVariants} className="bg-dark-base border border-steel-gray rounded-xl p-5">
        <h2 className="text-lg font-semibold text-ghost-white mb-4">System Health</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-void-black rounded-lg">
            <p className="text-sm text-muted-gray mb-1">Management Servers</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-ghost-white font-medium">3 Online</span>
            </div>
          </div>
          <div className="p-4 bg-void-black rounded-lg">
            <p className="text-sm text-muted-gray mb-1">Database Servers</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-ghost-white font-medium">2 Online</span>
            </div>
          </div>
          <div className="p-4 bg-void-black rounded-lg">
            <p className="text-sm text-muted-gray mb-1">Active Alerts</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <span className="text-ghost-white font-medium">2 Warning</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
