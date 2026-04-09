import { motion } from 'framer-motion';
import { 
  List, 
  CreditCard, 
  Mail,
  PieChart,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
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

const quotaItems = [
  {
    id: 'summary',
    name: 'Summary',
    description: 'Overview of quota usage and limits',
    icon: List,
    color: 'blue',
    path: '/portal/quota-summary',
    usage: '75%',
    limit: '1000 VMs',
    status: 'normal'
  },
  {
    id: 'tariff',
    name: 'Tariff',
    description: 'Pricing and billing plans',
    icon: CreditCard,
    color: 'green',
    path: '/portal/tariff',
    usage: 'Pro Plan',
    limit: '$500/month',
    status: 'active'
  },
  {
    id: 'template-type',
    name: 'Template type',
    description: 'VM template configurations',
    icon: Mail,
    color: 'purple',
    path: '/portal/template-type',
    usage: '12 types',
    limit: '50 types',
    status: 'normal'
  }
];

export function Quota() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-6 lg:p-8 space-y-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-heading font-bold text-ghost-white">Quota</h1>
        <p className="text-muted-gray mt-1">Manage resource quotas and billing</p>
      </motion.div>

      {/* Stats */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Usage', value: '75%', icon: PieChart, color: 'blue' },
          { label: 'VMs Used', value: '750', icon: TrendingUp, color: 'green' },
          { label: 'VM Limit', value: '1000', icon: CheckCircle, color: 'purple' },
          { label: 'Alerts', value: '2', icon: AlertTriangle, color: 'orange' }
        ].map((stat, index) => (
          <div key={index} className="bg-dark-base border border-steel-gray rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                stat.color === 'blue' ? 'bg-blue-500/10' :
                stat.color === 'green' ? 'bg-green-500/10' :
                stat.color === 'purple' ? 'bg-purple-500/10' :
                'bg-orange-500/10'
              }`}>
                <stat.icon className={`w-5 h-5 ${
                  stat.color === 'blue' ? 'text-blue-500' :
                  stat.color === 'green' ? 'text-green-500' :
                  stat.color === 'purple' ? 'text-purple-500' :
                  'text-orange-500'
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

      {/* Quota Sections */}
      <motion.div variants={itemVariants} className="grid gap-4">
        {quotaItems.map((item) => {
          const colorClasses = {
            blue: { bg: 'bg-blue-500/10', text: 'text-blue-500' },
            green: { bg: 'bg-green-500/10', text: 'text-green-500' },
            purple: { bg: 'bg-purple-500/10', text: 'text-purple-500' }
          };
          const colorClass = colorClasses[item.color as keyof typeof colorClasses];
          
          return (
            <motion.a
              key={item.id}
              href={item.path}
              whileHover={{ scale: 1.01 }}
              className="bg-dark-base border border-steel-gray rounded-xl p-5 hover:border-exploit-red/30 transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClass.bg}`}>
                    <item.icon className={`w-6 h-6 ${colorClass.text}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-semibold text-ghost-white">{item.name}</h3>
                      <span className={`px-2 py-0.5 text-xs rounded-full ${
                        item.status === 'normal' ? 'bg-green-500/10 text-green-500' :
                        item.status === 'active' ? 'bg-blue-500/10 text-blue-500' :
                        'bg-yellow-500/10 text-yellow-500'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-gray">{item.description}</p>
                    <div className="flex items-center gap-6 mt-3">
                      <div>
                        <p className="text-xs text-muted-gray">Current Usage</p>
                        <p className="text-lg font-semibold text-ghost-white">{item.usage}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-gray">Limit</p>
                        <p className="text-lg font-semibold text-ghost-white">{item.limit}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-gray" />
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
