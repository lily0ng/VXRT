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
  Rss,
  Megaphone
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
    title: 'MAIN',
    items: [
      { name: 'Dashboard', path: '/portal', icon: LayoutDashboard },
      { name: 'Assessments', path: '/portal/assessments', icon: Target },
      { name: 'Reports', path: '/portal/reports', icon: FileText },
      { name: 'Team', path: '/portal/team', icon: Users }
    ]
  },
  {
    title: 'COMPUTE & INSTANCES',
    items: [
      { name: 'Compute', path: '/portal/compute', icon: Server },
      { name: 'VPS', path: '/portal/vps', icon: Box },
      { name: 'VNF Appliances', path: '/portal/vnf', icon: Cloud },
      { name: 'Auto Scaling', path: '/portal/autoscaling', icon: Activity }
    ]
  },
  {
    title: 'CONTAINERS & ORCHESTRATION',
    items: [
      { name: 'Kubernetes', path: '/portal/kubernetes', icon: Cloud },
      { name: 'Container Apps', path: '/portal/apps', icon: Box },
      { name: 'Container Registry', path: '/portal/registry', icon: Database },
      { name: 'Helm Charts', path: '/portal/helm', icon: Layers }
    ]
  },
  {
    title: 'STORAGE',
    items: [
      { name: 'Block Storage', path: '/portal/block-storage', icon: HardDrive },
      { name: 'Object Storage', path: '/portal/object-storage', icon: Database },
      { name: 'Snapshots', path: '/portal/snapshots', icon: Camera },
      { name: 'Backups', path: '/portal/backups', icon: Archive },
      { name: 'Templates', path: '/portal/templates', icon: Box },
      { name: 'Volumes', path: '/portal/volumes', icon: HardDrive }
    ]
  },
  {
    title: 'NETWORKING',
    items: [
      { name: 'Networks', path: '/portal/networks', icon: Network },
      { name: 'Load Balancers', path: '/portal/loadbalancers', icon: Share2 },
      { name: 'DNS Management', path: '/portal/dns', icon: Globe },
      { name: 'Firewalls', path: '/portal/firewalls', icon: Lock },
      { name: 'Affinity Groups', path: '/portal/affinity', icon: Layers },
      { name: 'VPC', path: '/portal/vpc', icon: Globe }
    ]
  },
  {
    title: 'SECURITY - OFFENSIVE',
    items: [
      { name: 'Penetration Testing', path: '/portal/pentesting', icon: Target },
      { name: 'Red Teaming', path: '/portal/redteaming', icon: Target },
      { name: 'Exploit Development', path: '/portal/exploitdev', icon: Terminal },
      { name: 'Vulnerability Scan', path: '/portal/vulnscan', icon: ScanLine }
    ]
  },
  {
    title: 'SECURITY - DEFENSIVE',
    items: [
      { name: 'Vulnerability Assessment', path: '/portal/vulnassess', icon: AlertTriangle },
      { name: 'Cloud Security', path: '/portal/cloudsec', icon: CloudLightning },
      { name: 'Purple Teaming', path: '/portal/purpleteam', icon: Users },
      { name: 'SIEM Monitoring', path: '/portal/siem', icon: Eye },
      { name: 'Threat Intel', path: '/portal/threatintel', icon: Terminal }
    ]
  },
  {
    title: 'SECURITY - COMPLIANCE',
    items: [
      { name: 'Compliance Reports', path: '/portal/compliance', icon: CheckCircle },
      { name: 'Audit Logs', path: '/portal/auditlogs', icon: FileText },
      { name: 'SOC 2', path: '/portal/soc2', icon: Shield },
      { name: 'PCI-DSS', path: '/portal/pci', icon: CreditCard }
    ]
  },
  {
    title: 'INFRASTRUCTURE',
    items: [
      { name: 'API Access', path: '/portal/api', icon: Terminal },
      { name: 'SSH Keys', path: '/portal/sshkeys', icon: Lock },
      { name: 'Integrations', path: '/portal/integrations', icon: Share2 },
      { name: 'Monitoring', path: '/portal/monitoring', icon: Activity }
    ]
  },
  {
    title: 'NEWS & CONTENT',
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
    title: 'SYSTEM',
    items: [
      { name: 'Settings', path: '/portal/settings', icon: Settings },
      { name: 'Billing', path: '/portal/billing', icon: CreditCard },
      { name: 'Support', path: '/portal/support', icon: Headphones },
      { name: 'User Management', path: '/portal/users', icon: Users }
    ]
  }
];

// Mock user data
const currentUser = {
  name: 'Admin User',
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
  const location = useLocation();
  const navigate = useNavigate();

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

        {/* Navigation - Scrollable */}
        <nav className="flex-1 p-3 space-y-6 overflow-y-auto overflow-x-hidden">
          {navCategories.map((category) => (
            <div key={category.title}>
              <AnimatePresence>
                {sidebarOpen && (
                  <motion.h4
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="text-xs font-semibold text-muted-gray uppercase tracking-wider mb-2 px-3"
                  >
                    {category.title}
                  </motion.h4>
                )}
              </AnimatePresence>
              <div className="space-y-1">
                {category.items.map((item: NavItem) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`flex items-center ${sidebarOpen ? 'gap-3 px-3' : 'justify-center px-2'} py-2.5 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-exploit-red/10 text-exploit-red'
                          : 'text-ghost-white/70 hover:bg-steel-gray/20 hover:text-ghost-white'
                      }`}
                      title={item.name}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      <AnimatePresence>
                        {sidebarOpen && (
                          <motion.span
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -5 }}
                            transition={{ duration: 0.15 }}
                            className="font-medium text-sm whitespace-nowrap"
                          >
                            {item.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom Section - Stats + User Profile */}
        <div className={`flex-shrink-0 border-t border-steel-gray ${sidebarOpen ? '' : 'px-2'}`}>
          {/* Stats Widget */}
          {sidebarOpen && (
            <div className="px-4 py-3">
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
            </div>
          )}

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

        <nav className="p-4 space-y-6 overflow-y-auto max-h-[calc(100vh-80px)]">
          {navCategories.map((category) => (
            <div key={category.title}>
              <h4 className="text-xs font-semibold text-muted-gray uppercase tracking-wider mb-2 px-4">
                {category.title}
              </h4>
              <div className="space-y-1">
                {category.items.map((item: NavItem) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-exploit-red/10 text-exploit-red'
                          : 'text-ghost-white/70 hover:bg-steel-gray/20'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium text-sm">{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
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
