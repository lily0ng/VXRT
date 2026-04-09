import { motion } from 'framer-motion';
import {
  Target,
  FileText,
  AlertTriangle,
  Shield,
  TrendingUp,
  Users,
  Clock,
  Zap,
  CheckCircle,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Calendar,
  ChevronRight
} from 'lucide-react';
import {
  dashboardStats,
  recentAssessments,
  recentActivity,
  upcomingSchedule,
  systemHealth
} from '../data/mockData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
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

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Dashboard</h1>
          <p className="text-muted-gray">Welcome back, Admin. Here's your security overview.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-gray">Last updated: Just now</span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-exploit-red text-ghost-white rounded-lg text-sm font-medium"
          >
            <Activity className="w-4 h-4" />
            Refresh
          </motion.button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {[
          {
            title: 'Active Assessments',
            value: dashboardStats.activeAssessments,
            change: '+3',
            trend: 'up',
            icon: Target,
            color: 'blue'
          },
          {
            title: 'Critical Findings',
            value: dashboardStats.criticalFindings,
            change: '+1',
            trend: 'up',
            icon: AlertTriangle,
            color: 'red'
          },
          {
            title: 'Completed This Month',
            value: dashboardStats.completedThisMonth,
            change: '+12%',
            trend: 'up',
            icon: CheckCircle,
            color: 'green'
          },
          {
            title: 'Compliance Score',
            value: `${dashboardStats.complianceScore}%`,
            change: '+2%',
            trend: 'up',
            icon: Shield,
            color: 'purple'
          }
        ].map((stat) => (
          <motion.div
            key={stat.title}
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-dark-base border border-steel-gray rounded-xl p-6 group hover:border-exploit-red/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                stat.color === 'red' ? 'bg-red-500/10' :
                stat.color === 'green' ? 'bg-green-500/10' :
                stat.color === 'blue' ? 'bg-blue-500/10' :
                'bg-purple-500/10'
              }`}>
                <stat.icon className={`w-6 h-6 ${
                  stat.color === 'red' ? 'text-red-500' :
                  stat.color === 'green' ? 'text-green-500' :
                  stat.color === 'blue' ? 'text-blue-500' :
                  'text-purple-500'
                }`} />
              </div>
              <div className={`flex items-center gap-1 text-sm ${
                stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {stat.change}
              </div>
            </div>
            <h3 className="text-2xl font-heading font-bold text-ghost-white">{stat.value}</h3>
            <p className="text-sm text-muted-gray mt-1">{stat.title}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Assessments - Takes 2 columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-dark-base border border-steel-gray rounded-xl overflow-hidden"
        >
          <div className="p-6 border-b border-steel-gray flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-exploit-red" />
              <h2 className="text-lg font-heading font-bold text-ghost-white">Active Assessments</h2>
            </div>
            <button className="text-sm text-exploit-red hover:text-exploit-red/80 flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="divide-y divide-steel-gray/50">
            {recentAssessments.map((assessment, i) => (
              <motion.div
                key={assessment.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ backgroundColor: 'rgba(192, 57, 43, 0.05)' }}
                className="p-4 flex items-center justify-between group cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-12 rounded-full ${
                    assessment.status === 'In Progress' ? 'bg-blue-500' :
                    assessment.status === 'Completed' ? 'bg-green-500' :
                    assessment.status === 'Report Delivery' ? 'bg-yellow-500' :
                    'bg-steel-gray'
                  }`} />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-ghost-white group-hover:text-exploit-red transition-colors">
                        {assessment.name}
                      </h4>
                      <span className="text-xs text-muted-gray">{assessment.id}</span>
                    </div>
                    <div className="flex items-center gap-3 mt-1 text-sm text-muted-gray">
                      <span>{assessment.client}</span>
                      <span className="w-1 h-1 rounded-full bg-steel-gray" />
                      <span>{assessment.type}</span>
                      <span className="w-1 h-1 rounded-full bg-steel-gray" />
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {assessment.operators.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      {assessment.criticalFindings > 0 && (
                        <span className="px-2 py-0.5 bg-red-500/10 text-red-500 text-xs rounded">
                          {assessment.criticalFindings} Critical
                        </span>
                      )}
                      {assessment.highFindings > 0 && (
                        <span className="px-2 py-0.5 bg-orange-500/10 text-orange-500 text-xs rounded">
                          {assessment.highFindings} High
                        </span>
                      )}
                    </div>
                    <span className={`text-xs ${
                      assessment.status === 'Completed' ? 'text-green-500' :
                      assessment.status === 'In Progress' ? 'text-blue-500' :
                      'text-yellow-500'
                    }`}>
                      {assessment.status}
                    </span>
                  </div>

                  <div className="w-24">
                    <div className="flex justify-between text-xs text-muted-gray mb-1">
                      <span>Progress</span>
                      <span>{assessment.progress}%</span>
                    </div>
                    <div className="h-2 bg-steel-gray/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${assessment.progress}%` }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                        className={`h-full rounded-full ${
                          assessment.progress === 100 ? 'bg-green-500' :
                          assessment.progress > 50 ? 'bg-blue-500' :
                          'bg-exploit-red'
                        }`}
                      />
                    </div>
                  </div>

                  <MoreHorizontal className="w-5 h-5 text-muted-gray opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sidebar Content */}
        <div className="space-y-6">
          {/* Upcoming Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-dark-base border border-steel-gray rounded-xl overflow-hidden"
          >
            <div className="p-4 border-b border-steel-gray flex items-center gap-3">
              <Calendar className="w-5 h-5 text-exploit-red" />
              <h2 className="font-heading font-bold text-ghost-white">Upcoming</h2>
            </div>
            <div className="p-4 space-y-3">
              {upcomingSchedule.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-steel-gray/10 transition-colors cursor-pointer"
                >
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    event.type === 'deadline' ? 'bg-red-500' :
                    event.type === 'meeting' ? 'bg-blue-500' :
                    'bg-green-500'
                  }`} />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-ghost-white">{event.title}</h4>
                    <div className="flex items-center gap-2 mt-1 text-xs text-muted-gray">
                      <Clock className="w-3 h-3" />
                      {event.time}
                      <span className="w-1 h-1 rounded-full bg-steel-gray" />
                      {event.date}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* System Health */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-dark-base border border-steel-gray rounded-xl overflow-hidden"
          >
            <div className="p-4 border-b border-steel-gray flex items-center gap-3">
              <Zap className="w-5 h-5 text-exploit-red" />
              <h2 className="font-heading font-bold text-ghost-white">System Health</h2>
            </div>
            <div className="p-4 space-y-3">
              {Object.entries(systemHealth).map(([name, data], i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + i * 0.05 }}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm text-muted-gray capitalize">
                    {name.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      data.status === 'online' ? 'bg-green-500 animate-pulse' :
                      data.status === 'warning' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`} />
                    <span className={`text-xs ${
                      data.status === 'online' ? 'text-green-500' :
                      data.status === 'warning' ? 'text-yellow-500' :
                      'text-red-500'
                    }`}>
                      {data.uptime}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Activity & Findings Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="lg:col-span-2 bg-dark-base border border-steel-gray rounded-xl overflow-hidden"
        >
          <div className="p-6 border-b border-steel-gray flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-exploit-red" />
              <h2 className="text-lg font-heading font-bold text-ghost-white">Recent Activity</h2>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {recentActivity.map((activity, i) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-steel-gray/10 transition-colors"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  activity.severity === 'critical' ? 'bg-red-500/10' :
                  activity.severity === 'high' ? 'bg-orange-500/10' :
                  activity.severity === 'warning' ? 'bg-yellow-500/10' :
                  'bg-blue-500/10'
                }`}>
                  {activity.severity === 'critical' ? <AlertTriangle className="w-5 h-5 text-red-500" /> :
                   activity.severity === 'high' ? <TrendingUp className="w-5 h-5 text-orange-500" /> :
                   activity.severity === 'warning' ? <Zap className="w-5 h-5 text-yellow-500" /> :
                   <FileText className="w-5 h-5 text-blue-500" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-ghost-white">{activity.message}</p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-gray">
                    <span>{activity.user}</span>
                    <span className="w-1 h-1 rounded-full bg-steel-gray" />
                    <span>{new Date(activity.timestamp).toLocaleTimeString()}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-dark-base border border-steel-gray rounded-xl overflow-hidden"
        >
          <div className="p-4 border-b border-steel-gray">
            <h2 className="font-heading font-bold text-ghost-white">Quick Actions</h2>
          </div>
          <div className="p-4 space-y-3">
            {[
              { icon: Target, label: 'Start Assessment', desc: 'Begin new engagement' },
              { icon: FileText, label: 'Generate Report', desc: 'Create client report' },
              { icon: Users, label: 'Add Operator', desc: 'Invite team member' },
              { icon: Shield, label: 'Run Vuln Scan', desc: 'Quick security scan' }
            ].map((action, i) => (
              <motion.button
                key={action.label}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="w-full flex items-center gap-3 p-3 rounded-lg bg-void-black border border-steel-gray hover:border-exploit-red/50 hover:bg-exploit-red/5 transition-all text-left"
              >
                <div className="w-10 h-10 bg-exploit-red/10 rounded-lg flex items-center justify-center">
                  <action.icon className="w-5 h-5 text-exploit-red" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-ghost-white">{action.label}</h4>
                  <p className="text-xs text-muted-gray">{action.desc}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
