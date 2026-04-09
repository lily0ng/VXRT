import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
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
  ChevronRight,
  Server,
  Cloud,
  Network,
  HardDrive,
  Database,
  Globe,
  Lock,
  Cpu,
  Wifi,
  RefreshCw,
  ArrowUp,
  LogIn,
  Layers,
  Box,
  Terminal,
  Scan,
  Bug,
  Eye,
  ShieldCheck,
  AlertOctagon,
  FileSearch,
  ClipboardList,
  Settings
} from 'lucide-react';
import {
  dashboardStats,
  recentAssessments,
  recentActivity,
  upcomingSchedule,
  systemHealth
} from '../data/mockData';

// Real-time data simulation hook - syncs ALL services from navigation
function useRealTimeData() {
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [isSyncing, setIsSyncing] = useState(false);
  
  // MAIN Dashboard Stats
  const [mainStats, setMainStats] = useState({
    assessments: 12,
    reports: 8,
    teamMembers: 6
  });

  // COMPUTE & INSTANCES
  const [computeData, setComputeData] = useState({
    instances: 4,
    running: 3,
    stopped: 1,
    vps: 4,
    vnfAppliances: 2,
    autoScalingGroups: 1
  });

  // CONTAINERS & ORCHESTRATION
  const [containerData, setContainerData] = useState({
    kubernetesClusters: 2,
    containerApps: 8,
    containerRegistry: 15,
    helmCharts: 6
  });

  // STORAGE
  const [storageData, setStorageData] = useState({
    blockStorage: '1.2 TB',
    objectStorage: '3.5 TB',
    snapshots: 24,
    backups: 12,
    templates: 8,
    volumes: 6
  });

  // NETWORKING
  const [networkData, setNetworkData] = useState({
    networks: 2,
    loadBalancers: 3,
    dnsZones: 5,
    firewalls: 4,
    affinityGroups: 2,
    vpcs: 2
  });

  // SECURITY - OFFENSIVE
  const [offensiveSecurity, setOffensiveSecurity] = useState({
    penetrationTests: 3,
    redTeamOps: 1,
    exploitDev: 2,
    vulnScans: 12
  });

  // SECURITY - DEFENSIVE
  const [defensiveSecurity, setDefensiveSecurity] = useState({
    vulnAssessments: 8,
    cloudSecAudits: 4,
    purpleTeamOps: 2,
    siemAlerts: 3,
    threatIntelFeeds: 5
  });

  // SECURITY - COMPLIANCE
  const [complianceData, setComplianceData] = useState({
    complianceReports: 6,
    auditLogs: 1240,
    soc2Status: 'Compliant',
    pciDssStatus: 'Compliant'
  });

  // INFRASTRUCTURE
  const [infraData, setInfraData] = useState({
    apiKeys: 8,
    sshKeys: 12,
    integrations: 5,
    monitors: 24
  });

  // SYSTEM
  const [systemData, setSystemData] = useState({
    settingsUpdated: '2 hrs ago',
    billingCycle: 'Monthly',
    supportTickets: 1
  });

  // SECURITY OVERVIEW (aggregated)
  const [securityData, setSecurityData] = useState({
    threats: 0,
    alerts: 3,
    scans: 12,
    vulnerabilities: 5,
    complianceScore: 98
  });

  // COST DATA
  const [costData, setCostData] = useState({
    totalMonthly: 247.50,
    compute: 120.00,
    storage: 45.50,
    network: 32.00,
    security: 50.00
  });

  const [activityLogs, setActivityLogs] = useState([
    { id: 1, type: 'login', user: 'admin@vxrt.com', action: 'Logged in', time: '2 min ago', icon: LogIn },
    { id: 2, type: 'compute', user: 'System', action: 'Instance "web-server" started', time: '5 min ago', icon: Server },
    { id: 3, type: 'security', user: 'Security Bot', action: 'Vulnerability scan completed', time: '12 min ago', icon: ShieldCheck },
    { id: 4, type: 'network', user: 'admin@vxrt.com', action: 'Created network "prod-vpc"', time: '15 min ago', icon: Network },
    { id: 5, type: 'storage', user: 'System', action: 'Snapshot created for volume-db', time: '18 min ago', icon: Database },
    { id: 6, type: 'container', user: 'Kubernetes', action: 'Pod scaled to 5 replicas', time: '22 min ago', icon: Cloud },
    { id: 7, type: 'security', user: 'Red Team', action: 'Penetration test initiated', time: '45 min ago', icon: Target },
  ]);

  // Real-time sync simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
      setIsSyncing(true);
      
      // Simulate random updates to various services
      setComputeData(prev => ({
        ...prev,
        running: Math.max(1, prev.running + (Math.random() > 0.7 ? 1 : 0))
      }));
      
      setSecurityData(prev => ({
        ...prev,
        alerts: Math.max(0, prev.alerts + (Math.random() > 0.8 ? 1 : -1))
      }));
      
      setTimeout(() => setIsSyncing(false), 800);
    }, 30000); // Sync every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return { 
    lastUpdate, 
    isSyncing, 
    mainStats,
    computeData, 
    containerData,
    storageData,
    networkData,
    offensiveSecurity,
    defensiveSecurity,
    complianceData,
    infraData,
    systemData,
    securityData, 
    costData,
    activityLogs 
  };
}

// Scroll to top button component
function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-exploit-red text-white rounded-full shadow-lg flex items-center justify-center hover:bg-exploit-red/90 transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
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
  const navigate = useNavigate();
  const { 
    lastUpdate, 
    isSyncing, 
    mainStats,
    computeData, 
    containerData,
    storageData,
    networkData,
    offensiveSecurity,
    defensiveSecurity,
    complianceData,
    infraData,
    systemData,
    securityData, 
    costData,
    activityLogs 
  } = useRealTimeData();

  // Last login info
  const lastLogin = {
    time: 'Today at 09:42 AM',
    ip: '103.112.132.124',
    location: 'New York, USA',
    device: 'Chrome on macOS'
  };

  return (
    <div className="space-y-6 relative pb-20">
      <ScrollToTop />
      
      {/* Modern Header with Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-base border border-steel-gray rounded-2xl p-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-exploit-red/20 to-exploit-red/5 border border-exploit-red/30 rounded-xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-exploit-red" />
            </div>
            <div>
              <h1 className="text-2xl font-heading font-bold text-ghost-white">Dashboard Overview</h1>
              <div className="flex items-center gap-2 text-sm text-muted-gray mt-1">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  All systems operational
                </span>
                <span className="w-1 h-1 rounded-full bg-steel-gray" />
                <span>Last login: {lastLogin.time} from {lastLogin.location}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-void-black rounded-lg border border-steel-gray">
              <div className="text-right">
                <p className="text-xs text-muted-gray">Monthly Spend</p>
                <p className="text-lg font-bold text-ghost-white">${costData.totalMonthly}</p>
              </div>
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 px-4 py-3 bg-exploit-red text-ghost-white rounded-lg text-sm font-medium hover:bg-exploit-red/90 transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
              {isSyncing ? 'Syncing...' : 'Sync Data'}
            </motion.button>
          </div>
        </div>

        {/* Quick Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-steel-gray/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <Server className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <p className="text-xl font-bold text-ghost-white">{computeData.running}</p>
              <p className="text-xs text-muted-gray">Running VMs</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <Network className="w-5 h-5 text-purple-500" />
            </div>
            <div>
              <p className="text-xl font-bold text-ghost-white">{networkData.networks}</p>
              <p className="text-xs text-muted-gray">Active Networks</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <p className="text-xl font-bold text-ghost-white">{containerData.kubernetesClusters}</p>
              <p className="text-xs text-muted-gray">K8s Clusters</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <p className="text-xl font-bold text-ghost-white">{securityData.alerts}</p>
              <p className="text-xs text-muted-gray">Security Alerts</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Grid - 8 Category Cards */}
      <div>
        <h2 className="text-lg font-heading font-bold text-ghost-white mb-4">Services Overview</h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { 
              title: 'Compute & Instances', 
              count: computeData.instances, 
              subtext: `${computeData.running} active`, 
              icon: Server, 
              color: 'blue',
              items: ['VPS', 'VNF', 'Auto Scaling'],
              path: '/portal/compute'
            },
            { 
              title: 'Containers', 
              count: containerData.containerApps, 
              subtext: `${containerData.kubernetesClusters} K8s clusters`, 
              icon: Cloud, 
              color: 'cyan',
              items: ['Kubernetes', 'Registry', 'Helm'],
              path: '/portal/kubernetes'
            },
            { 
              title: 'Storage', 
              count: storageData.volumes, 
              subtext: storageData.blockStorage, 
              icon: HardDrive, 
              color: 'green',
              items: ['Block', 'Object', 'Snapshots'],
              path: '/portal/block-storage'
            },
            { 
              title: 'Networking', 
              count: networkData.networks, 
              subtext: `${networkData.loadBalancers} load balancers`, 
              icon: Network, 
              color: 'purple',
              items: ['VPC', 'DNS', 'Firewalls'],
              path: '/portal/networks'
            },
            { 
              title: 'Security - Offensive', 
              count: offensiveSecurity.penetrationTests, 
              subtext: `${offensiveSecurity.vulnScans} scans`, 
              icon: Target, 
              color: 'red',
              items: ['PenTest', 'Red Team', 'Exploits'],
              path: '/portal/pentesting'
            },
            { 
              title: 'Security - Defensive', 
              count: defensiveSecurity.vulnAssessments, 
              subtext: `${defensiveSecurity.siemAlerts} alerts`, 
              icon: Shield, 
              color: 'orange',
              items: ['SIEM', 'CloudSec', 'Threat Intel'],
              path: '/portal/siem'
            },
            { 
              title: 'Compliance', 
              count: complianceData.complianceReports, 
              subtext: `SOC2: ${complianceData.soc2Status}`, 
              icon: ClipboardList, 
              color: 'pink',
              items: ['SOC2', 'PCI-DSS', 'Audit'],
              path: '/portal/compliance'
            },
            { 
              title: 'Infrastructure', 
              count: infraData.integrations, 
              subtext: `${infraData.sshKeys} SSH keys`, 
              icon: Layers, 
              color: 'indigo',
              items: ['API', 'SSH', 'Monitoring'],
              path: '/portal/integrations'
            },
          ].map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              onClick={() => navigate(service.path)}
              className="group bg-dark-base border border-steel-gray rounded-xl p-5 cursor-pointer hover:border-exploit-red/50 hover:shadow-lg hover:shadow-exploit-red/5 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  service.color === 'blue' ? 'bg-blue-500/10' :
                  service.color === 'purple' ? 'bg-purple-500/10' :
                  service.color === 'cyan' ? 'bg-cyan-500/10' :
                  service.color === 'green' ? 'bg-green-500/10' :
                  service.color === 'orange' ? 'bg-orange-500/10' :
                  service.color === 'pink' ? 'bg-pink-500/10' :
                  service.color === 'indigo' ? 'bg-indigo-500/10' :
                  'bg-red-500/10'
                }`}>
                  <service.icon className={`w-6 h-6 ${
                    service.color === 'blue' ? 'text-blue-500' :
                    service.color === 'purple' ? 'text-purple-500' :
                    service.color === 'cyan' ? 'text-cyan-500' :
                    service.color === 'green' ? 'text-green-500' :
                    service.color === 'orange' ? 'text-orange-500' :
                    service.color === 'pink' ? 'text-pink-500' :
                    service.color === 'indigo' ? 'text-indigo-500' :
                    'text-red-500'
                  }`} />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-gray opacity-0 group-hover:opacity-100 group-hover:text-exploit-red transition-all" />
              </div>
              <h3 className="text-2xl font-bold text-ghost-white">{service.count}</h3>
              <p className="text-sm font-medium text-ghost-white mt-1">{service.title}</p>
              <p className="text-xs text-muted-gray mt-1">{service.subtext}</p>
              <div className="flex flex-wrap gap-1 mt-3">
                {service.items.map((item) => (
                  <span key={item} className="text-[10px] px-2 py-0.5 bg-steel-gray/30 text-muted-gray rounded">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Security Status & Real-time Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Security Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-dark-base border border-steel-gray rounded-xl overflow-hidden"
        >
          <div className="p-4 border-b border-steel-gray flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-exploit-red" />
              <h2 className="font-heading font-bold text-ghost-white">Security Status</h2>
            </div>
            <span className="flex items-center gap-1.5 px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Protected
            </span>
          </div>
          <div className="p-4 grid grid-cols-2 gap-4">
            <div className="p-3 bg-void-black rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Bug className="w-4 h-4 text-red-500" />
                <span className="text-xs text-muted-gray">Threats</span>
              </div>
              <p className="text-2xl font-bold text-ghost-white">{securityData.threats}</p>
              <p className="text-xs text-green-500">No active threats</p>
            </div>
            <div className="p-3 bg-void-black rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertOctagon className="w-4 h-4 text-yellow-500" />
                <span className="text-xs text-muted-gray">Alerts</span>
              </div>
              <p className="text-2xl font-bold text-ghost-white">{securityData.alerts}</p>
              <p className="text-xs text-yellow-500">Requires attention</p>
            </div>
            <div className="p-3 bg-void-black rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Scan className="w-4 h-4 text-blue-500" />
                <span className="text-xs text-muted-gray">Scans</span>
              </div>
              <p className="text-2xl font-bold text-ghost-white">{securityData.scans}</p>
              <p className="text-xs text-muted-gray">This month</p>
            </div>
            <div className="p-3 bg-void-black rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-4 h-4 text-purple-500" />
                <span className="text-xs text-muted-gray">Vulns</span>
              </div>
              <p className="text-2xl font-bold text-ghost-white">{securityData.vulnerabilities}</p>
              <p className="text-xs text-orange-500">Medium risk</p>
            </div>
          </div>
        </motion.div>

        {/* Real-time Monitoring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-dark-base border border-steel-gray rounded-xl overflow-hidden"
        >
          <div className="p-4 border-b border-steel-gray flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-exploit-red" />
              <h2 className="font-heading font-bold text-ghost-white">Real-time Monitoring</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-xs text-muted-gray">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Live
              </span>
              <span className="text-xs text-muted-gray">Updated: {lastUpdate.toLocaleTimeString()}</span>
            </div>
          </div>
          <div className="p-4">
            {/* CPU, Memory, Network Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="p-3 bg-void-black rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="w-4 h-4 text-blue-500" />
                  <span className="text-xs text-muted-gray">CPU Usage</span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-ghost-white">42%</span>
                  <span className="text-xs text-green-500 mb-1">Normal</span>
                </div>
                <div className="mt-2 h-1.5 bg-steel-gray/30 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: ['42%', '45%', '40%', '42%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-full bg-blue-500 rounded-full"
                  />
                </div>
              </div>
              <div className="p-3 bg-void-black rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="w-4 h-4 text-purple-500" />
                  <span className="text-xs text-muted-gray">Memory</span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-ghost-white">68%</span>
                  <span className="text-xs text-yellow-500 mb-1">High</span>
                </div>
                <div className="mt-2 h-1.5 bg-steel-gray/30 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: ['68%', '70%', '65%', '68%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-full bg-purple-500 rounded-full"
                  />
                </div>
              </div>
              <div className="p-3 bg-void-black rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Wifi className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-muted-gray">Network</span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-ghost-white">2.4</span>
                  <span className="text-xs text-muted-gray mb-1">GB/s</span>
                </div>
                <div className="mt-2 flex items-center gap-1">
                  <div className="flex-1 h-1 bg-green-500/30 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ width: ['30%', '80%', '50%', '70%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="h-full bg-green-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Mini Chart */}
            <div className="p-3 bg-void-black rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-gray">Traffic (Last 24h)</span>
                <span className="text-xs text-green-500">+12.5%</span>
              </div>
              <div className="h-20 flex items-end gap-1">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className="flex-1 bg-exploit-red/30 rounded-sm hover:bg-exploit-red/50 transition-colors"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Activity Logs & System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Logs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-dark-base border border-steel-gray rounded-xl overflow-hidden"
        >
          <div className="p-4 border-b border-steel-gray flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ClipboardList className="w-5 h-5 text-exploit-red" />
              <h2 className="font-heading font-bold text-ghost-white">Activity Logs</h2>
            </div>
            <button className="text-sm text-exploit-red hover:text-exploit-red/80">View All</button>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {activityLogs.map((log, i) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="p-4 flex items-start gap-3 border-b border-steel-gray/50 hover:bg-steel-gray/10 transition-colors"
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  log.type === 'login' ? 'bg-green-500/10' :
                  log.type === 'security' ? 'bg-red-500/10' :
                  log.type === 'compute' ? 'bg-blue-500/10' :
                  'bg-purple-500/10'
                }`}>
                  <log.icon className={`w-4 h-4 ${
                    log.type === 'login' ? 'text-green-500' :
                    log.type === 'security' ? 'text-red-500' :
                    log.type === 'compute' ? 'text-blue-500' :
                    'text-purple-500'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-ghost-white truncate">{log.action}</p>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-gray">
                    <span className="truncate">{log.user}</span>
                    <span className="w-1 h-1 rounded-full bg-steel-gray flex-shrink-0" />
                    <span className="flex-shrink-0">{log.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Last Login Info & Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-6"
        >
          {/* Last Login Card */}
          <div className="bg-dark-base border border-steel-gray rounded-xl overflow-hidden">
            <div className="p-4 border-b border-steel-gray flex items-center gap-3">
              <LogIn className="w-5 h-5 text-exploit-red" />
              <h2 className="font-heading font-bold text-ghost-white">Last Login</h2>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-gray">Time</span>
                <span className="text-sm text-ghost-white">{lastLogin.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-gray">IP Address</span>
                <span className="text-sm text-ghost-white font-mono">{lastLogin.ip}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-gray">Location</span>
                <span className="text-sm text-ghost-white">{lastLogin.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-gray">Device</span>
                <span className="text-sm text-ghost-white">{lastLogin.device}</span>
              </div>
            </div>
          </div>

          {/* Product Management Overview */}
          <div className="bg-dark-base border border-steel-gray rounded-xl overflow-hidden">
            <div className="p-4 border-b border-steel-gray flex items-center gap-3">
              <Layers className="w-5 h-5 text-exploit-red" />
              <h2 className="font-heading font-bold text-ghost-white">Product Management</h2>
            </div>
            <div className="p-4 grid grid-cols-2 gap-3">
              <button 
                onClick={() => navigate('/portal/compute')}
                className="p-3 bg-void-black rounded-lg hover:bg-steel-gray/20 transition-colors text-left"
              >
                <Server className="w-5 h-5 text-blue-500 mb-2" />
                <p className="text-sm font-medium text-ghost-white">Compute</p>
                <p className="text-xs text-muted-gray">4 instances active</p>
              </button>
              <button 
                onClick={() => navigate('/portal/networks')}
                className="p-3 bg-void-black rounded-lg hover:bg-steel-gray/20 transition-colors text-left"
              >
                <Network className="w-5 h-5 text-purple-500 mb-2" />
                <p className="text-sm font-medium text-ghost-white">Networks</p>
                <p className="text-xs text-muted-gray">2 VPCs configured</p>
              </button>
              <button 
                onClick={() => navigate('/portal/storage')}
                className="p-3 bg-void-black rounded-lg hover:bg-steel-gray/20 transition-colors text-left"
              >
                <HardDrive className="w-5 h-5 text-green-500 mb-2" />
                <p className="text-sm font-medium text-ghost-white">Storage</p>
                <p className="text-xs text-muted-gray">2.4 TB used</p>
              </button>
              <button 
                onClick={() => navigate('/portal/security')}
                className="p-3 bg-void-black rounded-lg hover:bg-steel-gray/20 transition-colors text-left"
              >
                <ShieldCheck className="w-5 h-5 text-red-500 mb-2" />
                <p className="text-sm font-medium text-ghost-white">Security</p>
                <p className="text-xs text-muted-gray">3 alerts pending</p>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Active Assessments - Security Portal Feature */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-dark-base border border-steel-gray rounded-xl overflow-hidden"
      >
        <div className="p-6 border-b border-steel-gray flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Target className="w-5 h-5 text-exploit-red" />
            <h2 className="text-lg font-heading font-bold text-ghost-white">Active Security Assessments</h2>
          </div>
          <button 
            onClick={() => navigate('/portal/assessments')}
            className="text-sm text-exploit-red hover:text-exploit-red/80 flex items-center gap-1"
          >
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="divide-y divide-steel-gray/50">
          {recentAssessments.slice(0, 3).map((assessment, i) => (
            <motion.div
              key={assessment.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="p-4 flex items-center justify-between group cursor-pointer hover:bg-steel-gray/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`w-2 h-12 rounded-full ${
                  assessment.status === 'In Progress' ? 'bg-blue-500' :
                  assessment.status === 'Completed' ? 'bg-green-500' :
                  'bg-yellow-500'
                }`} />
                <div>
                  <h4 className="font-medium text-ghost-white">{assessment.name}</h4>
                  <div className="flex items-center gap-3 mt-1 text-sm text-muted-gray">
                    <span>{assessment.client}</span>
                    <span className="w-1 h-1 rounded-full bg-steel-gray" />
                    <span>{assessment.type}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className={`text-xs ${
                    assessment.status === 'Completed' ? 'text-green-500' :
                    assessment.status === 'In Progress' ? 'text-blue-500' :
                    'text-yellow-500'
                  }`}>
                    {assessment.status}
                  </span>
                  <div className="text-xs text-muted-gray mt-1">{assessment.progress}% complete</div>
                </div>
                <div className="w-24">
                  <div className="h-2 bg-steel-gray/30 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        assessment.progress === 100 ? 'bg-green-500' :
                        assessment.progress > 50 ? 'bg-blue-500' :
                        'bg-exploit-red'
                      }`}
                      style={{ width: `${assessment.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Real-time Sync Status Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex items-center justify-between px-4 py-3 bg-dark-base border border-steel-gray rounded-xl"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-muted-gray">All Systems Operational</span>
            </div>
          </div>
          <div className="h-4 w-px bg-steel-gray" />
          <div className="flex items-center gap-4 text-xs text-muted-gray">
            <span className="flex items-center gap-1">
              <Cloud className="w-3 h-3" /> Cloud: Connected
            </span>
            <span className="flex items-center gap-1">
              <Database className="w-3 h-3" /> DB: Synced
            </span>
            <span className="flex items-center gap-1">
              <Globe className="w-3 h-3" /> API: Online
            </span>
          </div>
        </div>
        <div className="text-xs text-muted-gray">
          Last synced: {lastUpdate.toLocaleTimeString()}
        </div>
      </motion.div>
    </div>
  );
}
