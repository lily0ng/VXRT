import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  LayoutDashboard,
  Target,
  FileText,
  Users,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
  ChevronDown,
  ChevronRight,
  Zap,
  AlertTriangle,
  CheckCircle,
  Clock,
  Server,
  Cloud,
  Database,
  Layers,
  Box,
  HardDrive,
  Network,
  Share2,
  Globe,
  Lock,
  Eye,
  ScanLine,
  Activity,
  Terminal,
  Camera,
  Archive,
  CloudLightning,
  CreditCard,
  Headphones,
  Newspaper,
  BookOpen,
  PenTool,
  Folder,
  FolderOpen,
  Rss,
  Megaphone,
  Cpu,
  Copy,
  KeyRound,
  FileCode,
  Settings2,
  Group,
  Upload,
  Files,
  Wifi,
  MapPin,
  List,
  RefreshCw,
  Hash,
  Grid3X3,
  Image,
  LayoutGrid,
  Hexagon,
  BarChart3,
  Building2,
  Inbox,
  Cog,
  Disc,
  UploadCloud,
  UsersRound,
  ArrowLeftRight,
  Table2,
  Laptop,
  Plug,
  Monitor,
  Wrench,
  MessageSquare,
  Webhook,
  PieChart,
  Mail,
  Calendar,
  FolderKanban,
  UserCog,
  Plus
} from 'lucide-react';

interface PortalLayoutProps {
  children: React.ReactNode;
}

interface NavItem {
  name: string;
  path: string;
  icon: React.ElementType;
}

interface NavCategory {
  title: string;
  items: NavItem[];
}

const navCategories: NavCategory[] = [
  {
    title: 'Main',
    items: [
      { name: 'Dashboard', path: '/portal', icon: LayoutDashboard },
      { name: 'Assessments', path: '/portal/assessments', icon: Target },
      { name: 'Reports', path: '/portal/reports', icon: FileText },
      { name: 'Team', path: '/portal/team', icon: Users }
    ]
  },
  {
    title: 'Compute',
    items: [
      { name: 'Instances', path: '/portal/compute', icon: Server },
      { name: 'Instance Snapshots', path: '/portal/snapshots', icon: Camera },
      { name: 'Kubernetes', path: '/portal/kubernetes', icon: Cloud },
      { name: 'AutoScaling Groups', path: '/portal/autoscaling', icon: Activity },
      { name: 'Instance Groups', path: '/portal/instance-groups', icon: Group },
      { name: 'SSH Key Pairs', path: '/portal/sshkeys', icon: KeyRound },
      { name: 'User Data Library', path: '/portal/user-data', icon: FileCode },
      { name: 'CNI Configuration', path: '/portal/cni', icon: Settings2 },
      { name: 'Affinity Groups', path: '/portal/affinity', icon: Copy }
    ]
  },
  {
    title: 'Orcehestration',
    items: [
      { name: 'Kubernetes', path: '/portal/kubernetes', icon: Cloud },
      { name: 'Container Apps', path: '/portal/apps', icon: Box },
      { name: 'Container Registry', path: '/portal/registry', icon: Database },
      { name: 'Helm Charts', path: '/portal/helm', icon: Layers }
    ]
  },
  {
    title: 'Images',
    items: [
      { name: 'Templates', path: '/portal/templates', icon: Box },
      { name: 'ISOs', path: '/portal/isos', icon: HardDrive },
      { name: 'Kubernetes ISOs', path: '/portal/k8s-isos', icon: Cloud }
    ]
  },
  {
    title: 'Storage',
    items: [
      { name: 'Volumes', path: '/portal/volumes', icon: HardDrive },
      { name: 'Volume Snapshots', path: '/portal/snapshots', icon: Camera },
      { name: 'Backups', path: '/portal/backups', icon: Upload },
      { name: 'Buckets', path: '/portal/object-storage', icon: Database },
      { name: 'Shared FileSystems', path: '/portal/block-storage', icon: Files }
    ]
  },
  {
    title: 'Networking',
    items: [
      { name: 'Guest Networks', path: '/portal/networks', icon: Wifi },
      { name: 'VPC', path: '/portal/vpc', icon: Network },
      { name: 'Security Groups', path: '/portal/firewalls', icon: Shield },
      { name: 'VNF Appliances', path: '/portal/vnf', icon: Box },
      { name: 'Public IP Addresses', path: '/portal/public-ips', icon: MapPin },
      { name: 'AS Numbers', path: '/portal/as-numbers', icon: Hash },
      { name: 'Site-to-site VPN', path: '/portal/vpn-site', icon: Lock },
      { name: 'VPN Connections', path: '/portal/vpn-connections', icon: RefreshCw },
      { name: 'Network ACLs', path: '/portal/acls', icon: List },
      { name: 'VPN Users', path: '/portal/vpn-users', icon: Users },
      { name: 'VPN Customer Gateway', path: '/portal/vpn-gateway', icon: Globe },
      { name: 'Tungsten Fabric', path: '/portal/tungsten', icon: Grid3X3 },
      { name: 'Guest VLAN', path: '/portal/vlan', icon: Folder },
      { name: 'IPv4 Subnets', path: '/portal/subnets', icon: Layers }
    ]
  },
  {
    title: 'Offensive',
    items: [
      { name: 'Penetration Testing', path: '/portal/pentesting', icon: Target },
      { name: 'Red Teaming', path: '/portal/redteaming', icon: Target },
      { name: 'Exploit Development', path: '/portal/exploitdev', icon: Terminal },
      { name: 'Vulnerability Scan', path: '/portal/vulnscan', icon: ScanLine }
    ]
  },
  {
    title: 'Defensive',
    items: [
      { name: 'Vulnerability Assessment', path: '/portal/vulnassess', icon: AlertTriangle },
      { name: 'Cloud Security', path: '/portal/cloudsec', icon: CloudLightning },
      { name: 'Purple Teaming', path: '/portal/purpleteam', icon: Users },
      { name: 'SIEM Monitoring', path: '/portal/siem', icon: Eye },
      { name: 'Threat Intel', path: '/portal/threatintel', icon: Terminal }
    ]
  },
  {
    title: 'Compliance',
    items: [
      { name: 'Compliance Reports', path: '/portal/compliance', icon: CheckCircle },
      { name: 'Audit Logs', path: '/portal/auditlogs', icon: FileText },
      { name: 'SOC 2', path: '/portal/soc2', icon: Shield },
      { name: 'PCI-DSS', path: '/portal/pci', icon: CreditCard }
    ]
  },
  {
    title: 'Infrastructure',
    items: [
      { name: 'Summary', path: '/portal/infrastructure', icon: BookOpen },
      { name: 'Zones', path: '/portal/zones', icon: Globe },
      { name: 'Pods', path: '/portal/pods', icon: LayoutGrid },
      { name: 'Clusters', path: '/portal/clusters', icon: Hexagon },
      { name: 'Hosts', path: '/portal/hosts', icon: Server },
      { name: 'Primary Storage', path: '/portal/primary-storage', icon: HardDrive },
      { name: 'Secondary Storage', path: '/portal/secondary-storage', icon: Image },
      { name: 'Object Storage', path: '/portal/infra-object-storage', icon: Database },
      { name: 'System VMs', path: '/portal/system-vms', icon: Zap },
      { name: 'Virtual Routers', path: '/portal/virtual-routers', icon: Share2 },
      { name: 'Internal LB', path: '/portal/internal-lb', icon: Activity },
      { name: 'Management Servers', path: '/portal/management-servers', icon: Building2 },
      { name: 'CPU Sockets', path: '/portal/cpu-sockets', icon: Cpu },
      { name: 'DB/Usage Server', path: '/portal/db-usage-server', icon: BarChart3 },
      { name: 'Alerts', path: '/portal/infra-alerts', icon: Bell }
    ]
  },
  {
    title: 'Service Offerings',
    items: [
      { name: 'Compute Offerings', path: '/portal/compute-offerings', icon: Cloud },
      { name: 'System Offerings', path: '/portal/system-offerings', icon: Cog },
      { name: 'Disk Offerings', path: '/portal/disk-offerings', icon: Disc },
      { name: 'Backup Offerings', path: '/portal/backup-offerings', icon: UploadCloud },
      { name: 'Network Offerings', path: '/portal/network-offerings', icon: Wifi },
      { name: 'VPC Offerings', path: '/portal/vpc-offerings', icon: Network }
    ]
  },
  {
    title: 'Images',
    items: [
      { name: 'Templates', path: '/portal/templates', icon: Box },
      { name: 'ISOs', path: '/portal/isos', icon: HardDrive },
      { name: 'Kubernetes ISOs', path: '/portal/k8s-isos', icon: Cloud }
    ]
  },
  {
    title: 'News & Content',
    items: [
      { name: 'All Articles', path: '/portal/articles', icon: Newspaper },
      { name: 'Categories', path: '/portal/categories', icon: Folder },
      { name: 'Authors', path: '/portal/authors', icon: PenTool },
      { name: 'Newsletters', path: '/portal/newsletters', icon: Megaphone },
      { name: 'RSS Feeds', path: '/portal/rss', icon: Rss },
      { name: 'Media Library', path: '/portal/media', icon: BookOpen }
    ]
  },
  {
    title: 'System',
    items: [
      { name: 'Events', path: '/portal/events', icon: Calendar },
      { name: 'Projects', path: '/portal/projects', icon: FolderKanban },
      { name: 'Roles', path: '/portal/roles', icon: UserCog },
      { name: 'Accounts', path: '/portal/accounts', icon: Building2 },
      { name: 'Domains', path: '/portal/domains', icon: Globe },
      { name: 'Extensions', path: '/portal/extensions', icon: Plus },
      { name: 'Settings', path: '/portal/settings', icon: Settings },
      { name: 'Billing', path: '/portal/billing', icon: CreditCard },
      { name: 'Support', path: '/portal/support', icon: Headphones }
    ]
  },
  {
    title: 'Quota',
    items: [
      { name: 'Summary', path: '/portal/quota-summary', icon: List },
      { name: 'Tariff', path: '/portal/tariff', icon: CreditCard },
      { name: 'Template type', path: '/portal/template-type', icon: Mail }
    ]
  },
  {
    title: 'Tools',
    items: [
      { name: 'Comments', path: '/portal/comments', icon: MessageSquare },
      { name: 'Usage', path: '/portal/usage', icon: FileText },
      { name: 'Import-Export Instances', path: '/portal/import-export', icon: ArrowLeftRight },
      { name: 'Import Data Volumes', path: '/portal/import-volumes', icon: HardDrive },
      { name: 'Webhooks', path: '/portal/webhooks', icon: Webhook }
    ]
  },
  {
    title: 'Configuration',
    items: [
      { name: 'Global Settings', path: '/portal/global-settings', icon: Cog },
      { name: 'LDAP Configuration', path: '/portal/ldap', icon: UsersRound },
      { name: 'OAuth Configuration', path: '/portal/oauth', icon: ArrowLeftRight },
      { name: 'Backup Repository', path: '/portal/backup-repo', icon: Inbox },
      { name: 'Hypervisor Capabilities', path: '/portal/hypervisor', icon: Server },
      { name: 'Guest OS Categories', path: '/portal/os-categories', icon: Table2 },
      { name: 'Guest OS', path: '/portal/guest-os', icon: Laptop },
      { name: 'Guest OS mappings', path: '/portal/os-mappings', icon: Plug },
      { name: 'GPU Card Types', path: '/portal/gpu-types', icon: Monitor }
    ]
  },
  {
    title: 'Administrator',
    items: [
      { name: 'User Management', path: '/portal/users', icon: Users },
      { name: 'Role Permissions', path: '/portal/roles', icon: Shield },
      { name: 'System Logs', path: '/portal/logs', icon: FileText },
      { name: 'Audit Trail', path: '/portal/audit', icon: CheckCircle },
      { name: 'Global Settings', path: '/portal/settings', icon: Settings }
    ]
  }
];

// Mock user data
const currentUser = {
  name: '0xff 0day',
  email: 'admin@vxrt.com',
  role: 'Security Administrator',
  avatar: 'https://avatars.githubusercontent.com/u/264521594?v=4',
  notifications: 3
};

export function PortalLayout({ children }: PortalLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [headerProfileOpen, setHeaderProfileOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'Main': true,
    'Compute': false,
    'Orcehestration': false,
    'Images': false,
    'Storage': false,
    'Networking': false,
    'Offensive': false,
    'Defensive': false,
    'Compliance': false,
    'Infrastructure': false,
    'Service Offerings': false,
    'News & Content': false,
    'System': false,
    'Quota': false,
    'Tools': false,
    'Configuration': false,
    'Administrator': false
  });
  const location = useLocation();
  const navigate = useNavigate();

  const toggleCategory = (title: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const handleLogout = () => {
    navigate('/signin');
  };

  return (
    <div className="min-h-screen bg-void-black flex">
      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ width: 288 }}
        animate={{ width: sidebarOpen ? 288 : 80 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed lg:static inset-y-0 left-0 z-40 bg-dark-base border-r border-steel-gray hidden lg:block flex flex-col overflow-hidden"
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-steel-gray flex-shrink-0">
          <Link to="/portal" className="flex items-center gap-3">
            <img
              src="/VXRT_Icon_Dark_1080x1080.png"
              alt="VXRT"
              className="h-8 w-8 object-contain flex-shrink-0"
            />
            <AnimatePresence>
              {sidebarOpen && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col overflow-hidden"
                >
                  <span className="font-heading font-bold text-ghost-white text-lg leading-none tracking-wider whitespace-nowrap">
                    VXRT
                  </span>
                  <span className="font-sans text-[8px] text-exploit-red font-bold tracking-widest leading-none mt-[2px] whitespace-nowrap">
                    OFFENSIVE SECURITY
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
        </div>

        {/* Navigation - Scrollable with Collapsible Directories */}
        <nav className="flex-1 min-h-0 p-3 space-y-2 overflow-y-auto overflow-x-hidden">
          {navCategories.map((category) => {
            const isExpanded = expandedCategories[category.title];
            const hasActiveItem = category.items.some(item => location.pathname === item.path);
            
            return (
              <div key={category.title} className="space-y-1">
                {/* Category Header / Folder */}
                <button
                  onClick={() => sidebarOpen && toggleCategory(category.title)}
                  className={`w-full flex items-center ${sidebarOpen ? 'gap-3 px-3' : 'justify-center px-2'} py-2.5 rounded-lg transition-all duration-200 ${
                    hasActiveItem 
                      ? 'bg-exploit-red/5 text-exploit-red' 
                      : 'text-ghost-white/70 hover:bg-steel-gray/20 hover:text-ghost-white'
                  } ${!sidebarOpen ? 'cursor-default' : 'cursor-pointer'}`}
                  title={category.title}
                  disabled={!sidebarOpen}
                >
                  {/* Folder Icon */}
                  <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {isExpanded ? (
                        <motion.div
                          key="open"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          <FolderOpen className="w-5 h-5 text-exploit-red" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="closed"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          <Folder className={`w-5 h-5 ${hasActiveItem ? 'text-exploit-red' : 'text-muted-gray'}`} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <AnimatePresence>
                    {sidebarOpen && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex-1 flex items-center justify-between min-w-0"
                      >
                        <span className="font-medium text-sm whitespace-nowrap">
                          {category.title}
                        </span>
                        <motion.div
                          animate={{ rotate: isExpanded ? 90 : 0 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                        >
                          <ChevronRight className={`w-4 h-4 ${hasActiveItem ? 'text-exploit-red' : 'text-muted-gray'}`} />
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                {/* Expandable Items Container */}
                <AnimatePresence>
                  {sidebarOpen && isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-1 pl-4 border-l-2 border-steel-gray/30 ml-4">
                        {category.items.map((item: NavItem, index: number) => {
                          const isActive = location.pathname === item.path;
                          return (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05, duration: 0.2 }}
                            >
                              <Link
                                to={item.path}
                                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                                  isActive
                                    ? 'bg-exploit-red/10 text-exploit-red'
                                    : 'text-ghost-white/60 hover:bg-steel-gray/20 hover:text-ghost-white'
                                }`}
                                title={item.name}
                              >
                                <item.icon className="w-4 h-4 flex-shrink-0" />
                                <span className="font-medium text-sm whitespace-nowrap">
                                  {item.name}
                                </span>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Bottom Section - Stats + User Profile - Always Fixed at Bottom */}
        <div className={`flex-shrink-0 border-t border-steel-gray bg-dark-base ${sidebarOpen ? '' : 'px-2'}`}>
          {/* Stats Widget - Shows in both expanded and collapsed modes */}
          <AnimatePresence mode="wait">
            {sidebarOpen ? (
              <motion.div
                key="expanded"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-3"
              >
                <div className="bg-void-black border border-steel-gray rounded-xl p-3">
                  <h4 className="text-sm font-semibold text-ghost-white mb-2">Security Status</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-gray">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Systems Online
                      </div>
                      <span className="text-xs text-green-500">98%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-gray">
                        <AlertTriangle className="w-4 h-4 text-yellow-500" />
                        Active Alerts
                      </div>
                      <span className="text-xs text-yellow-500">3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-gray">
                        <Clock className="w-4 h-4 text-blue-500" />
                        Last Scan
                      </div>
                      <span className="text-xs text-blue-500">2h ago</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="collapsed"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="px-2 py-3 flex justify-center"
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-void-black border border-steel-gray rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full text-[8px] flex items-center justify-center text-void-black font-bold">
                    98
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* User Profile */}
          <div className={`${sidebarOpen ? 'px-4 pb-4' : 'px-2 py-3'}`}>
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className={`flex items-center ${sidebarOpen ? 'gap-3 w-full p-3' : 'justify-center w-12 h-12'} rounded-lg hover:bg-steel-gray/20 transition-colors`}
              >
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-10 h-10 rounded-lg object-cover border border-steel-gray flex-shrink-0"
                />
                <AnimatePresence>
                  {sidebarOpen && (
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-3 flex-1"
                    >
                      <div className="flex-1 text-left overflow-hidden">
                        <p className="text-sm font-medium text-ghost-white truncate">{currentUser.name}</p>
                        <p className="text-xs text-muted-gray truncate">{currentUser.role}</p>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-muted-gray transition-transform flex-shrink-0 ${profileOpen ? 'rotate-180' : ''}`} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              <AnimatePresence>
                {profileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-full left-0 right-0 mb-2 bg-dark-base border border-steel-gray rounded-xl overflow-hidden shadow-xl"
                  >
                    <div className="p-3 border-b border-steel-gray">
                      <p className="text-sm text-muted-gray">Signed in as</p>
                      <p className="text-sm font-medium text-ghost-white">{currentUser.email}</p>
                    </div>
                    <div className="p-2 space-y-1">
                      <button
                        onClick={() => { setProfileOpen(false); navigate('/portal/settings'); }}
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-ghost-white hover:bg-steel-gray/20 rounded-lg transition-colors"
                      >
                        <Users className="w-4 h-4" />
                        Profile
                      </button>
                      <button
                        onClick={() => { setProfileOpen(false); navigate('/portal/settings'); }}
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-ghost-white hover:bg-steel-gray/20 rounded-lg transition-colors"
                      >
                        <Settings className="w-4 h-4" />
                        Settings
                      </button>
                      <button
                        onClick={() => { setProfileOpen(false); navigate('/portal/settings'); }}
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-ghost-white hover:bg-steel-gray/20 rounded-lg transition-colors"
                      >
                        <Zap className="w-4 h-4" />
                        Appearance
                      </button>
                      <button
                        onClick={() => { setProfileOpen(false); navigate('/portal/assessments'); }}
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-exploit-red hover:bg-exploit-red/10 rounded-lg transition-colors"
                      >
                        <Zap className="w-4 h-4" />
                        New Assessment
                      </button>
                    </div>
                    <div className="border-t border-steel-gray p-2">
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: mobileMenuOpen ? 0 : -280 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-y-0 left-0 z-50 w-72 bg-dark-base border-r border-steel-gray lg:hidden"
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-steel-gray">
          <Link to="/portal" className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-exploit-red" />
            <span className="text-xl font-heading font-bold text-ghost-white">VXRT</span>
          </Link>
          <button onClick={() => setMobileMenuOpen(false)}>
            <X className="w-6 h-6 text-ghost-white" />
          </button>
        </div>

        <nav className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-80px)]">
          {navCategories.map((category) => {
            const isExpanded = expandedCategories[category.title];
            const hasActiveItem = category.items.some(item => location.pathname === item.path);
            
            return (
              <div key={category.title} className="space-y-1">
                {/* Category Header / Folder */}
                <button
                  onClick={() => toggleCategory(category.title)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                    hasActiveItem 
                      ? 'bg-exploit-red/5 text-exploit-red' 
                      : 'text-ghost-white/70 hover:bg-steel-gray/20 hover:text-ghost-white'
                  }`}
                >
                  {/* Folder Icon */}
                  <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {isExpanded ? (
                        <motion.div
                          key="open"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          <FolderOpen className="w-5 h-5 text-exploit-red" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="closed"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          <Folder className={`w-5 h-5 ${hasActiveItem ? 'text-exploit-red' : 'text-muted-gray'}`} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <span className="flex-1 font-medium text-sm text-left">
                    {category.title}
                  </span>
                  
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                  >
                    <ChevronRight className={`w-4 h-4 ${hasActiveItem ? 'text-exploit-red' : 'text-muted-gray'}`} />
                  </motion.div>
                </button>

                {/* Expandable Items Container */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-1 pl-4 border-l-2 border-steel-gray/30 ml-4">
                        {category.items.map((item: NavItem, index: number) => {
                          const isActive = location.pathname === item.path;
                          return (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05, duration: 0.2 }}
                            >
                              <Link
                                to={item.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                                  isActive
                                    ? 'bg-exploit-red/10 text-exploit-red'
                                    : 'text-ghost-white/60 hover:bg-steel-gray/20'
                                }`}
                              >
                                <item.icon className="w-4 h-4" />
                                <span className="font-medium text-sm">{item.name}</span>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-dark-base/50 backdrop-blur border-b border-steel-gray flex items-center justify-between px-4 lg:px-6 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden lg:flex items-center justify-center w-10 h-10 rounded-lg hover:bg-steel-gray/20 transition-colors"
            >
              <Menu className="w-5 h-5 text-ghost-white" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-steel-gray/20 transition-colors"
            >
              <Menu className="w-5 h-5 text-ghost-white" />
            </button>

            {/* Search */}
            <div className="hidden md:flex items-center relative">
              <Search className="absolute left-3 w-4 h-4 text-muted-gray" />
              <input
                type="text"
                placeholder="Search assessments, reports..."
                className="pl-10 pr-4 py-2 w-80 bg-void-black border border-steel-gray rounded-lg text-sm text-ghost-white placeholder:text-muted-gray focus:border-exploit-red focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="relative p-2 rounded-lg hover:bg-steel-gray/20 transition-colors">
              <Bell className="w-5 h-5 text-ghost-white" />
              {currentUser.notifications > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-exploit-red text-ghost-white text-xs rounded-full flex items-center justify-center">
                  {currentUser.notifications}
                </span>
              )}
            </button>

            {/* Header Profile */}
            <div className="relative">
              <button
                onClick={() => setHeaderProfileOpen(!headerProfileOpen)}
                className="flex items-center gap-2 p-1 rounded-full hover:bg-steel-gray/20 transition-colors"
              >
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-8 h-8 rounded-full object-cover border border-steel-gray"
                />
              </button>

              <AnimatePresence>
                {headerProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-full mt-2 w-48 bg-dark-base border border-steel-gray rounded-xl overflow-hidden shadow-xl z-50"
                  >
                    <div className="p-3 border-b border-steel-gray">
                      <p className="text-sm font-medium text-ghost-white">{currentUser.name}</p>
                      <p className="text-xs text-muted-gray">{currentUser.email}</p>
                    </div>
                    <div className="p-2 space-y-1">
                      <button
                        onClick={() => { setHeaderProfileOpen(false); navigate('/portal/settings'); }}
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-ghost-white hover:bg-steel-gray/20 rounded-lg transition-colors"
                      >
                        <Users className="w-4 h-4" />
                        Profile
                      </button>
                      <button
                        onClick={() => { setHeaderProfileOpen(false); navigate('/portal/settings'); }}
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-ghost-white hover:bg-steel-gray/20 rounded-lg transition-colors"
                      >
                        <Settings className="w-4 h-4" />
                        Settings
                      </button>
                    </div>
                    <div className="border-t border-steel-gray p-2">
                      <button
                        onClick={() => { setHeaderProfileOpen(false); handleLogout(); }}
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
