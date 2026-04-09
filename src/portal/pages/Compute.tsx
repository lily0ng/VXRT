import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Server, 
  Plus, 
  Search,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Terminal,
  Cpu,
  HardDrive,
  Activity,
  Power,
  Copy,
  Check,
  Globe,
  Clock,
  Filter,
  Grid3X3,
  List,
  X,
  ChevronDown,
  Shield,
  Database,
  Key,
  Box,
  Cloud,
  Folder,
  RefreshCw,
  Info,
  Network
} from 'lucide-react';

// Types
interface NetworkData {
  id: string;
  name: string;
  type: 'isolated' | 'vpc' | 'l2';
  networkType: string;
  region: string;
  cidr: string;
  subnet: string;
  isDefault: boolean;
  createdAt: string;
  description: string;
}
interface Instance {
  id: string;
  name: string;
  status: 'running' | 'stopped' | 'error' | 'provisioning';
  region: string;
  datacenter: string;
  project: string;
  os: string;
  version: string;
  plan: string;
  vcpu: number;
  memory: number;
  disk: number;
  ipv4: string;
  createdAt: string;
  uptime: string;
  cost: number;
}

// Mock Data
const mockInstances: Instance[] = [
  {
    id: 'srv-001',
    name: 'lab',
    status: 'running',
    region: 'Asia Pacific',
    datacenter: 'YGN-AZ01',
    project: 'DevOps',
    os: 'Ubuntu',
    version: '24.04',
    plan: 's-2vcpu-4gb',
    vcpu: 2,
    memory: 4,
    disk: 80,
    ipv4: '103.112.61.215',
    createdAt: '2025-04-04T05:36:00Z',
    uptime: '12d 4h',
    cost: 24
  },
  {
    id: 'srv-002',
    name: 'Student Instance',
    status: 'running',
    region: 'Asia Pacific',
    datacenter: 'YGN-AZ01',
    project: 'DevOps',
    os: 'Ubuntu',
    version: '24.04',
    plan: 's-4vcpu-8gb',
    vcpu: 4,
    memory: 8,
    disk: 160,
    ipv4: '103.112.61.218',
    createdAt: '2025-04-03T12:55:00Z',
    uptime: '2d 8h',
    cost: 48
  }
];

// Regions with flags
const regions = [
  { id: 'nyc', name: 'New York', flag: '🇺🇸', country: 'US' },
  { id: 'sfo', name: 'San Francisco', flag: '🇺🇸', country: 'US' },
  { id: 'ams', name: 'Amsterdam', flag: '🇳🇱', country: 'NL' },
  { id: 'sgp', name: 'Singapore', flag: '🇸🇬', country: 'SG' },
  { id: 'lon', name: 'London', flag: '🇬🇧', country: 'GB' },
  { id: 'fra', name: 'Frankfurt', flag: '🇩🇪', country: 'DE' },
  { id: 'tor', name: 'Toronto', flag: '🇨🇦', country: 'CA' },
  { id: 'blr', name: 'Bangalore', flag: '🇮🇳', country: 'IN' },
];

// OS Distributions
const osDistributions = [
  { id: 'ubuntu', name: 'Ubuntu', icon: Box, color: 'bg-orange-500', versions: ['24.04 (LTS) x64', '22.04 (LTS) x64', '20.04 (LTS) x64'] },
  { id: 'debian', name: 'Debian', icon: Box, color: 'bg-red-500', versions: ['12 x64', '11 x64', '10 x64'] },
  { id: 'centos', name: 'CentOS', icon: Box, color: 'bg-blue-500', versions: ['9 Stream x64', '8 Stream x64'] },
  { id: 'rocky', name: 'Rocky Linux', icon: Box, color: 'bg-green-500', versions: ['9 x64', '8 x64'] },
  { id: 'almalinux', name: 'AlmaLinux', icon: Box, color: 'bg-blue-400', versions: ['9 x64', '8 x64'] },
  { id: 'fedora', name: 'Fedora', icon: Box, color: 'bg-purple-500', versions: ['40 x64', '39 x64'] },
];

// Plans
const dropletPlans = [
  {
    category: 'Basic',
    description: 'Shared CPU, flexible configurations',
    plans: [
      { id: 's-1vcpu-512mb', vcpu: 1, memory: 0.5, disk: 10, transfer: 0.5, price: 4 },
      { id: 's-1vcpu-1gb', vcpu: 1, memory: 1, disk: 25, transfer: 1, price: 6 },
      { id: 's-1vcpu-2gb', vcpu: 1, memory: 2, disk: 50, transfer: 2, price: 12 },
      { id: 's-2vcpu-2gb', vcpu: 2, memory: 2, disk: 60, transfer: 3, price: 18 },
      { id: 's-2vcpu-4gb', vcpu: 2, memory: 4, disk: 80, transfer: 4, price: 24 },
      { id: 's-4vcpu-8gb', vcpu: 4, memory: 8, disk: 160, transfer: 5, price: 48 },
      { id: 's-4vcpu-16gb', vcpu: 4, memory: 16, disk: 320, transfer: 6, price: 96 },
      { id: 's-8vcpu-16gb', vcpu: 8, memory: 16, disk: 320, transfer: 7, price: 144 },
    ]
  },
  {
    category: 'General Purpose',
    description: 'Dedicated CPU for production workloads',
    plans: [
      { id: 'g-2vcpu-8gb', vcpu: 2, memory: 8, disk: 25, transfer: 4, price: 42 },
      { id: 'g-4vcpu-16gb', vcpu: 4, memory: 16, disk: 50, transfer: 5, price: 84 },
      { id: 'g-8vcpu-32gb', vcpu: 8, memory: 32, disk: 100, transfer: 6, price: 168 },
      { id: 'g-16vcpu-64gb', vcpu: 16, memory: 64, disk: 200, transfer: 7, price: 336 },
    ]
  },
  {
    category: 'CPU-Optimized',
    description: 'High compute power for intensive tasks',
    plans: [
      { id: 'c-2vcpu-4gb', vcpu: 2, memory: 4, disk: 25, transfer: 4, price: 36 },
      { id: 'c-4vcpu-8gb', vcpu: 4, memory: 8, disk: 50, transfer: 5, price: 72 },
      { id: 'c-8vcpu-16gb', vcpu: 8, memory: 16, disk: 100, transfer: 6, price: 144 },
      { id: 'c-16vcpu-32gb', vcpu: 16, memory: 32, disk: 200, transfer: 7, price: 288 },
    ]
  },
  {
    category: 'Memory-Optimized',
    description: 'High RAM for databases and caching',
    plans: [
      { id: 'm-2vcpu-16gb', vcpu: 2, memory: 16, disk: 50, transfer: 4, price: 60 },
      { id: 'm-4vcpu-32gb', vcpu: 4, memory: 32, disk: 100, transfer: 5, price: 120 },
      { id: 'm-8vcpu-64gb', vcpu: 8, memory: 64, disk: 200, transfer: 6, price: 240 },
    ]
  },
];

// Components
const StatusBadge = ({ status }: { status: Instance['status'] }) => {
  const colors = {
    running: 'bg-green-500/20 text-green-500',
    stopped: 'bg-amber-500/20 text-amber-500',
    error: 'bg-red-500/20 text-red-500',
    provisioning: 'bg-blue-500/20 text-blue-500'
  };
  
  return (
    <span className={`flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${colors[status]}`}>
      <span className={`w-2 h-2 rounded-full ${status === 'running' ? 'bg-green-500 animate-pulse' : 'bg-current'}`} />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

// Instances List View
const InstancesList = ({ instances, onSelect, onCreate }: { instances: Instance[]; onSelect: (i: Instance) => void; onCreate: () => void }) => {
  const [search, setSearch] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  
  const filtered = instances.filter(i => 
    i.name.toLowerCase().includes(search.toLowerCase()) ||
    i.ipv4.includes(search) ||
    i.project.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-ghost-white">Instances</h1>
        <button 
          onClick={onCreate}
          className="flex items-center gap-2 px-4 py-2 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90"
        >
          <Plus className="w-4 h-4" /> Create Server
        </button>
      </div>

      {/* Stats & Search */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 bg-dark-base border border-steel-gray rounded-lg px-3 py-2 flex-1 max-w-md">
          <Search className="w-4 h-4 text-muted-gray" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search instances..."
            className="bg-transparent border-none outline-none text-ghost-white text-sm w-full"
          />
        </div>
        
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-gray">{filtered.length} Total</span>
          <span className="text-green-500">• {instances.filter(i => i.status === 'running').length} Running</span>
          <span className="text-amber-500">• {instances.filter(i => i.status === 'stopped').length} Stopped</span>
          <span className="text-red-500">• {instances.filter(i => i.status === 'error').length} Error</span>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button className="p-2 hover:bg-steel-gray/20 rounded-lg"><Filter className="w-4 h-4 text-muted-gray" /></button>
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-exploit-red/20 text-exploit-red' : 'hover:bg-steel-gray/20'}`}
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-exploit-red/20 text-exploit-red' : 'hover:bg-steel-gray/20'}`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* List View */}
      {viewMode === 'list' ? (
        <div className="space-y-3">
          {filtered.map((instance) => (
            <div
              key={instance.id}
              onClick={() => onSelect(instance)}
              className="flex items-center gap-6 p-4 bg-dark-base border border-steel-gray rounded-xl hover:border-exploit-red/50 cursor-pointer transition-all"
            >
              <div className="flex items-center gap-3 flex-1">
                <StatusBadge status={instance.status} />
                <div>
                  <p className="font-medium text-ghost-white">{instance.name}</p>
                  <p className="text-xs text-muted-gray">{instance.createdAt}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Cloud className="w-4 h-4 text-blue-400" />
                <span className="text-muted-gray">{instance.datacenter}</span>
                <span className="text-muted-gray">({instance.region})</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Folder className="w-4 h-4 text-amber-400" />
                <span className="text-muted-gray">{instance.project}</span>
              </div>

              <div className="flex items-center gap-2">
                <Box className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-muted-gray">{instance.os} {instance.version}</span>
              </div>

              <div className="text-sm">
                <span className="text-ghost-white font-medium">{instance.ipv4}</span>
                <button className="ml-2 p-1 hover:bg-steel-gray/20 rounded" onClick={(e) => { e.stopPropagation(); navigator.clipboard.writeText(instance.ipv4); }}>
                  <Copy className="w-3 h-3 text-muted-gray" />
                </button>
              </div>

              <div className="text-sm text-muted-gray">
                {instance.vcpu} CORE / {instance.memory} GB / {instance.disk}.0 GB
              </div>

              <button className="p-2 hover:bg-steel-gray/20 rounded-lg">
                <MoreVertical className="w-4 h-4 text-muted-gray" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        // Grid View
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((instance) => (
            <div
              key={instance.id}
              onClick={() => onSelect(instance)}
              className="p-4 bg-dark-base border border-steel-gray rounded-xl hover:border-exploit-red/50 cursor-pointer transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <StatusBadge status={instance.status} />
                <button className="p-1 hover:bg-steel-gray/20 rounded">
                  <MoreVertical className="w-4 h-4 text-muted-gray" />
                </button>
              </div>
              
              <h3 className="font-medium text-ghost-white mb-1">{instance.name}</h3>
              <p className="text-xs text-muted-gray mb-4">{instance.ipv4}</p>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-void-black rounded">
                  <p className="text-muted-gray">Region</p>
                  <p className="text-ghost-white">{instance.datacenter}</p>
                </div>
                <div className="p-2 bg-void-black rounded">
                  <p className="text-muted-gray">OS</p>
                  <p className="text-ghost-white">{instance.os}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center text-sm text-muted-gray">
        Showing {filtered.length} of {instances.length} rows
      </div>
    </div>
  );
};

// Instance Detail View
const InstanceDetail = ({ instance, onBack, onDelete }: { instance: Instance; onBack: () => void; onDelete: (id: string) => void }) => {
  const [copied, setCopied] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  
  const copyIP = () => {
    navigator.clipboard.writeText(instance.ipv4);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDelete = () => {
    // Remove from localStorage
    const saved = localStorage.getItem('vxrt_instances');
    if (saved) {
      const instances = JSON.parse(saved);
      const updated = instances.filter((i: Instance) => i.id !== instance.id);
      localStorage.setItem('vxrt_instances', JSON.stringify(updated));
    }
    onDelete(instance.id);
    setShowDeleteConfirm(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 hover:bg-steel-gray/20 rounded-lg">
          <ChevronLeft className="w-5 h-5 text-muted-gray" />
        </button>
        <div>
          <h1 className="text-2xl font-semibold text-ghost-white">{instance.name}</h1>
          <div className="flex items-center gap-2 text-sm">
            <StatusBadge status={instance.status} />
            <span className="text-muted-gray">{instance.id}</span>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-steel-gray rounded-lg hover:bg-steel-gray/20">
            <Power className="w-4 h-4" /> Power
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90">
            <Terminal className="w-4 h-4" /> Console
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-dark-base border border-steel-gray rounded-xl">
          <p className="text-sm text-muted-gray mb-1">IP Address</p>
          <div className="flex items-center gap-2">
            <span className="font-medium text-ghost-white">{instance.ipv4}</span>
            <button onClick={copyIP} className="p-1 hover:bg-steel-gray/20 rounded">
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-muted-gray" />}
            </button>
          </div>
        </div>
        <div className="p-4 bg-dark-base border border-steel-gray rounded-xl">
          <p className="text-sm text-muted-gray mb-1">Region</p>
          <p className="font-medium text-ghost-white">{instance.datacenter}</p>
        </div>
        <div className="p-4 bg-dark-base border border-steel-gray rounded-xl">
          <p className="text-sm text-muted-gray mb-1">OS</p>
          <p className="font-medium text-ghost-white">{instance.os} {instance.version}</p>
        </div>
        <div className="p-4 bg-dark-base border border-steel-gray rounded-xl">
          <p className="text-sm text-muted-gray mb-1">Created</p>
          <p className="font-medium text-ghost-white">{new Date(instance.createdAt).toLocaleDateString()}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-steel-gray">
        <div className="flex gap-6">
          {['Overview', 'Metrics', 'Networking', 'Storage', 'Backups', 'Settings'].map((tab, i) => (
            <button
              key={tab}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                i === 0 ? 'border-exploit-red text-ghost-white' : 'border-transparent text-muted-gray hover:text-ghost-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Specs */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-lg font-medium text-ghost-white">Specifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-dark-base border border-steel-gray rounded-xl text-center">
              <Cpu className="w-6 h-6 text-exploit-red mx-auto mb-2" />
              <p className="text-2xl font-semibold text-ghost-white">{instance.vcpu}</p>
              <p className="text-xs text-muted-gray">vCPU</p>
            </div>
            <div className="p-4 bg-dark-base border border-steel-gray rounded-xl text-center">
              <Database className="w-6 h-6 text-exploit-red mx-auto mb-2" />
              <p className="text-2xl font-semibold text-ghost-white">{instance.memory}</p>
              <p className="text-xs text-muted-gray">GB RAM</p>
            </div>
            <div className="p-4 bg-dark-base border border-steel-gray rounded-xl text-center">
              <HardDrive className="w-6 h-6 text-exploit-red mx-auto mb-2" />
              <p className="text-2xl font-semibold text-ghost-white">{instance.disk}</p>
              <p className="text-xs text-muted-gray">GB SSD</p>
            </div>
            <div className="p-4 bg-dark-base border border-steel-gray rounded-xl text-center">
              <Activity className="w-6 h-6 text-exploit-red mx-auto mb-2" />
              <p className="text-2xl font-semibold text-ghost-white">{instance.uptime}</p>
              <p className="text-xs text-muted-gray">Uptime</p>
            </div>
          </div>

          {/* Graph Placeholder */}
          <div className="p-6 bg-dark-base border border-steel-gray rounded-xl">
            <h4 className="text-sm font-medium text-ghost-white mb-4">CPU Usage</h4>
            <div className="h-48 bg-void-black rounded-lg flex items-center justify-center">
              <Activity className="w-12 h-12 text-steel-gray" />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="p-4 bg-dark-base border border-steel-gray rounded-xl">
            <h4 className="text-sm font-medium text-ghost-white mb-4">Actions</h4>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 p-2 hover:bg-steel-gray/20 rounded text-left text-sm text-ghost-white">
                <Power className="w-4 h-4" /> Reboot
              </button>
              <button className="w-full flex items-center gap-2 p-2 hover:bg-steel-gray/20 rounded text-left text-sm text-ghost-white">
                <Server className="w-4 h-4" /> Resize
              </button>
              <button className="w-full flex items-center gap-2 p-2 hover:bg-steel-gray/20 rounded text-left text-sm text-ghost-white">
                <Database className="w-4 h-4" /> Snapshot
              </button>
              <button 
                onClick={() => setShowDeleteConfirm(true)}
                className="w-full flex items-center gap-2 p-2 hover:bg-red-500/20 rounded text-left text-sm text-red-400"
              >
                <X className="w-4 h-4" /> Destroy
              </button>
            </div>
          </div>

          <div className="p-4 bg-dark-base border border-steel-gray rounded-xl">
            <h4 className="text-sm font-medium text-ghost-white mb-2">Monthly Cost</h4>
            <p className="text-2xl font-semibold text-ghost-white">${instance.cost}<span className="text-sm text-muted-gray">/mo</span></p>
            <p className="text-xs text-muted-gray mt-1">${(instance.cost / 730).toFixed(3)}/hour</p>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-dark-base border border-steel-gray rounded-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-ghost-white mb-2">Destroy Instance?</h3>
            <p className="text-sm text-muted-gray mb-4">
              Are you sure you want to destroy <span className="text-ghost-white font-medium">{instance.name}</span>? 
              This action cannot be undone and all data will be permanently deleted.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 py-2 border border-steel-gray text-ghost-white rounded-lg hover:bg-steel-gray/20"
              >
                Cancel
              </button>
              <button 
                onClick={handleDelete}
                className="flex-1 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Destroy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Create Instance Form
const CreateInstance = ({ onCreated, onCancel }: { onCreated: (instance?: Instance) => void; onCancel: () => void }) => {
  const [selectedRegion, setSelectedRegion] = useState('nyc');
  const [imageTab, setImageTab] = useState<'os' | 'marketplace' | 'custom'>('os');
  const [selectedDistro, setSelectedDistro] = useState('ubuntu');
  const [selectedVersion, setSelectedVersion] = useState('24.04 (LTS) x64');
  const [selectedCategory, setSelectedCategory] = useState('Basic');
  const [selectedPlan, setSelectedPlan] = useState('s-2vcpu-4gb');
  const [backupFrequency, setBackupFrequency] = useState<'disable' | 'weekly' | 'monthly' | 'yearly'>('disable');
  const [authMethod, setAuthMethod] = useState<'ssh' | 'password'>('password');
  const [hostname, setHostname] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [billingCycle, setBillingCycle] = useState<'hourly' | 'monthly'>('hourly');
  const [ipv6, setIpv6] = useState(false);
  const [monitoring, setMonitoring] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [createdInstance, setCreatedInstance] = useState<Instance | null>(null);
  
  // Network selection
  const [networkType, setNetworkType] = useState<'isolated' | 'vpc' | 'l2'>('isolated');
  const [selectedNetwork, setSelectedNetwork] = useState<string>('');
  const [publicIP, setPublicIP] = useState(true);
  const [networks, setNetworks] = useState<NetworkData[]>([]);

  // Load networks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('vxrt_networks');
    if (saved) {
      const parsed = JSON.parse(saved);
      setNetworks(parsed);
      // Select default network if exists
      const defaultNet = parsed.find((n: NetworkData) => n.isDefault);
      if (defaultNet) {
        setSelectedNetwork(defaultNet.id);
        setNetworkType(defaultNet.type);
      }
    }
  }, []);

  const currentPlan = dropletPlans
    .find(c => c.category === selectedCategory)
    ?.plans.find(p => p.id === selectedPlan);

  const distro = osDistributions.find(d => d.id === selectedDistro);

  // Calculate backup multiplier
  const backupMultiplier = {
    disable: 0,
    weekly: 0.15,
    monthly: 0.05,
    yearly: 0.02
  }[backupFrequency];

  const handleCreate = async () => {
    if (!hostname.trim()) return;
    setIsCreating(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('vxrt_instances') || '[]');
    const newInstances = Array.from({ length: quantity }, (_, i) => ({
      id: `srv-${Date.now()}-${i}`,
      name: quantity === 1 ? hostname : `${hostname}-${i + 1}`,
      status: 'running' as const,
      region: regions.find(r => r.id === selectedRegion)?.name || '',
      datacenter: 'DC1',
      project: 'DevOps',
      os: distro?.name || '',
      version: selectedVersion.split(' ')[0],
      plan: selectedPlan,
      vcpu: currentPlan?.vcpu || 2,
      memory: currentPlan?.memory || 4,
      disk: currentPlan?.disk || 80,
      ipv4: `103.112.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 254) + 1}`,
      createdAt: new Date().toISOString(),
      uptime: '0d 0h',
      cost: ((currentPlan?.price || 24) + ((currentPlan?.price || 24) * backupMultiplier)) * quantity
    }));
    
    localStorage.setItem('vxrt_instances', JSON.stringify([...newInstances, ...existing]));
    setIsCreating(false);
    onCreated();
  };

  // Calculate total price
  const basePrice = (currentPlan?.price || 0) * quantity;
  const backupCost = basePrice * backupMultiplier;
  const monthlyPrice = basePrice + backupCost;
  const hourlyPrice = monthlyPrice / 730;

  if (isCreating) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 border-4 border-steel-gray border-t-exploit-red rounded-full mb-6"
        />
        <h3 className="text-xl font-semibold text-ghost-white mb-2">Creating Droplets...</h3>
        <p className="text-muted-gray">Provisioning your servers</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={onCancel} className="p-2 hover:bg-steel-gray/20 rounded-lg">
          <ChevronLeft className="w-5 h-5 text-muted-gray" />
        </button>
        <h1 className="text-2xl font-semibold text-ghost-white">Create Droplets</h1>
        <div className="ml-auto text-right">
          <p className="text-xs text-muted-gray">Estimated cost</p>
          <p className="text-xl font-bold text-ghost-white">${monthlyPrice.toFixed(2)}<span className="text-sm font-normal">/mo</span></p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-8">
          {/* Step 1: Region */}
          <div>
            <h2 className="text-lg font-semibold text-ghost-white mb-4">Choose Region</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
                    selectedRegion === region.id
                      ? 'border-exploit-red bg-exploit-red/10'
                      : 'border-steel-gray hover:border-steel-gray/60'
                  }`}
                >
                  <span className="text-xl">{region.flag}</span>
                  <span className="text-sm text-ghost-white">{region.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: OS Image */}
          <div>
            <h2 className="text-lg font-semibold text-ghost-white mb-4">Choose an Image</h2>
            {/* Image Tabs */}
            <div className="flex gap-2 mb-4 border-b border-steel-gray">
              <button 
                onClick={() => setImageTab('os')}
                className={`px-4 py-2 text-sm font-medium transition-all ${
                  imageTab === 'os'
                    ? 'text-ghost-white border-b-2 border-exploit-red'
                    : 'text-muted-gray hover:text-ghost-white'
                }`}
              >
                OS
              </button>
              <button 
                onClick={() => setImageTab('marketplace')}
                className={`px-4 py-2 text-sm font-medium transition-all ${
                  imageTab === 'marketplace'
                    ? 'text-ghost-white border-b-2 border-exploit-red'
                    : 'text-muted-gray hover:text-ghost-white'
                }`}
              >
                Marketplace
              </button>
              <button 
                onClick={() => setImageTab('custom')}
                className={`px-4 py-2 text-sm font-medium transition-all ${
                  imageTab === 'custom'
                    ? 'text-ghost-white border-b-2 border-exploit-red'
                    : 'text-muted-gray hover:text-ghost-white'
                }`}
              >
                Custom images
              </button>
            </div>

            {/* OS Tab Content */}
            {imageTab === 'os' && (
              <>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                  {osDistributions.map((os) => {
                    const Icon = os.icon;
                    return (
                      <button
                        key={os.id}
                        onClick={() => {
                          setSelectedDistro(os.id);
                          setSelectedVersion(os.versions[0]);
                        }}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          selectedDistro === os.id
                            ? 'border-exploit-red bg-exploit-red/10'
                            : 'border-steel-gray hover:border-steel-gray/60'
                        }`}
                      >
                        <div className={`w-10 h-10 ${os.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <p className="text-sm text-ghost-white text-center">{os.name}</p>
                      </button>
                    );
                  })}
                </div>

                <div className="relative">
                  <label className="text-sm text-muted-gray mb-2 block">Version</label>
                  <select
                    value={selectedVersion}
                    onChange={(e) => setSelectedVersion(e.target.value)}
                    className="w-full px-4 py-3 bg-void-black border border-steel-gray rounded-lg text-ghost-white appearance-none"
                  >
                    {distro?.versions.map((v) => (
                      <option key={v} value={v}>{v}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-9 w-5 h-5 text-muted-gray pointer-events-none" />
                </div>
              </>
            )}

            {/* Marketplace Tab Content */}
            {imageTab === 'marketplace' && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { id: 'docker', name: 'Docker', desc: 'Container Platform', icon: Box },
                  { id: 'wordpress', name: 'WordPress', desc: 'Blog & CMS', icon: Globe },
                  { id: 'lamp', name: 'LAMP Stack', desc: 'Apache, MySQL, PHP', icon: Server },
                  { id: 'nodejs', name: 'NodeJS', desc: 'JavaScript Runtime', icon: Server },
                  { id: 'mongodb', name: 'MongoDB', desc: 'NoSQL Database', icon: Database },
                  { id: 'postgres', name: 'PostgreSQL', desc: 'SQL Database', icon: Database },
                  { id: 'nginx', name: 'Nginx', desc: 'Web Server', icon: Globe },
                  { id: 'redis', name: 'Redis', desc: 'In-Memory Store', icon: Database },
                ].map((app) => {
                  const Icon = app.icon;
                  return (
                    <button
                      key={app.id}
                      className="p-4 rounded-xl border-2 border-steel-gray hover:border-exploit-red/50 transition-all text-left"
                    >
                      <div className="w-10 h-10 bg-exploit-red/20 rounded-lg flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-exploit-red" />
                      </div>
                      <p className="font-medium text-ghost-white">{app.name}</p>
                      <p className="text-xs text-muted-gray">{app.desc}</p>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Custom Images Tab Content */}
            {imageTab === 'custom' && (
              <div className="p-8 bg-void-black rounded-xl border border-steel-gray border-dashed text-center">
                <Server className="w-12 h-12 text-steel-gray mx-auto mb-4" />
                <p className="text-ghost-white font-medium mb-2">No custom images yet</p>
                <p className="text-sm text-muted-gray mb-4">Upload your own OS images for custom deployments</p>
                <button className="px-4 py-2 bg-exploit-red text-white rounded-lg text-sm hover:bg-exploit-red/90">
                  Upload Image
                </button>
              </div>
            )}
          </div>

          {/* Step 3: Size */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-ghost-white">Choose Size</h2>
              <a href="#" className="text-sm text-exploit-red hover:underline">Help me choose</a>
            </div>

            {/* CPU Type Tabs */}
            <div className="flex mb-4 bg-void-black rounded-lg p-1">
              <div className="flex-1 text-center py-2 text-xs text-muted-gray">SHARED CPU</div>
              <div className="flex-1 text-center py-2 text-xs text-ghost-white bg-steel-gray/20 rounded">DEDICATED CPU</div>
            </div>

            {/* Plan Category Tabs */}
            <div className="flex gap-2 mb-4 overflow-x-auto">
              {dropletPlans.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => {
                    setSelectedCategory(cat.category);
                    setSelectedPlan(cat.plans[0].id);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat.category
                      ? 'bg-exploit-red text-white'
                      : 'bg-dark-base border border-steel-gray text-muted-gray hover:text-ghost-white'
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            <p className="text-sm text-muted-gray mb-4">
              {dropletPlans.find(c => c.category === selectedCategory)?.description}
            </p>

            {/* Plan Cards - Horizontal Scroll */}
            <div className="flex gap-4 overflow-x-auto pb-2 mb-8">
              {dropletPlans
                .find(c => c.category === selectedCategory)
                ?.plans.map((plan) => (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`flex-shrink-0 w-48 p-4 rounded-xl border-2 text-left transition-all ${
                      selectedPlan === plan.id
                        ? 'border-exploit-red bg-exploit-red/10'
                        : 'border-steel-gray hover:border-steel-gray/60'
                    }`}
                  >
                    <div className="text-center mb-3">
                      <span className="text-2xl font-bold text-ghost-white">${plan.price}</span>
                      <span className="text-sm text-muted-gray">/mo</span>
                      <p className="text-xs text-muted-gray">${(plan.price / 730).toFixed(3)}/hr</p>
                    </div>
                    <div className="space-y-1 text-center text-sm">
                      <p className="text-muted-gray">{plan.memory} GB / {plan.vcpu} vCPU</p>
                      <p className="text-muted-gray">{plan.disk} GB NVMe SSDs</p>
                      <p className="text-muted-gray">{plan.transfer} TB transfer</p>
                    </div>
                  </button>
                ))}
            </div>

            {/* Automatic Backups Section */}
            <div className="mb-8">
              <h3 className="text-base font-semibold text-ghost-white mb-4">Automatic Backups</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { id: 'disable', name: 'Disable', desc: 'No automatic backups', multiplier: 0 },
                  { id: 'weekly', name: 'Weekly', desc: 'Every 7 days', multiplier: 0.15 },
                  { id: 'monthly', name: 'Monthly', desc: 'Every 30 days', multiplier: 0.05 },
                  { id: 'yearly', name: 'Yearly', desc: 'Every 365 days', multiplier: 0.02 },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setBackupFrequency(option.id as any)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      backupFrequency === option.id
                        ? 'border-exploit-red bg-exploit-red/10'
                        : 'border-steel-gray hover:border-steel-gray/60'
                    }`}
                  >
                    <p className="font-medium text-ghost-white">{option.name}</p>
                    <p className="text-xs text-muted-gray">{option.desc}</p>
                    {option.multiplier > 0 && (
                      <p className="text-xs text-exploit-red mt-2">+{(option.multiplier * 100).toFixed(0)}% cost</p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 4: Choose Network */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold text-ghost-white">Choose Network</h2>
              <button className="p-2 hover:bg-steel-gray/20 rounded-lg">
                <RefreshCw className="w-4 h-4 text-muted-gray" />
              </button>
            </div>
            <p className="text-sm text-muted-gray mb-4">
              Set up or choose a network for your server. This can be an isolated private network, or you can create an elastic network to connect multiple regions.
            </p>

            {/* Warning Banner */}
            <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl mb-6">
              <p className="text-sm text-amber-400 flex items-center gap-2">
                <Info className="w-4 h-4" />
                Note: Bandwidth will be charged at $0.01/GB/Month.
              </p>
            </div>

            {/* Network Type Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <button
                onClick={() => setNetworkType('isolated')}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  networkType === 'isolated'
                    ? 'border-exploit-red bg-exploit-red/10'
                    : 'border-steel-gray hover:border-steel-gray/60'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium text-ghost-white">Isolated Network</span>
                  <Info className="w-4 h-4 text-muted-gray" />
                </div>
                <p className="text-xs text-muted-gray">
                  A simple, pre-configured network that includes built-in cloud firewall protection, port forwarding, and remote access VPNs for easy external connectivity.
                </p>
              </button>

              <button
                onClick={() => setNetworkType('vpc')}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  networkType === 'vpc'
                    ? 'border-exploit-red bg-exploit-red/10'
                    : 'border-steel-gray hover:border-steel-gray/60'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium text-ghost-white">VPC Network</span>
                  <Info className="w-4 h-4 text-muted-gray" />
                </div>
                <p className="text-xs text-muted-gray">
                  An advanced network option offering full control over traffic routing, VPN gateways, site-to-site VPN connections, and traffic segregation for enhanced security.
                </p>
              </button>

              <button
                onClick={() => setNetworkType('l2')}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  networkType === 'l2'
                    ? 'border-exploit-red bg-exploit-red/10'
                    : 'border-steel-gray hover:border-steel-gray/60'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium text-ghost-white">L2 Network</span>
                </div>
                <p className="text-xs text-muted-gray">
                  Create a default L2 Network under selected region.
                </p>
              </button>
            </div>

            {/* Existing Networks Table */}
            {networks.length > 0 && (
              <div className="mb-8">
                <p className="text-sm text-ghost-white mb-4">
                  If you want to attach the VM to an existing network, choose one below.
                </p>
                <div className="bg-dark-base border border-steel-gray rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-steel-gray bg-void-black">
                          <th className="px-4 py-3 text-left text-xs font-medium text-muted-gray uppercase">Networks</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-muted-gray uppercase">Network type</th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-muted-gray uppercase">Created At</th>
                        </tr>
                      </thead>
                      <tbody>
                        {networks.map((network) => (
                          <tr 
                            key={network.id} 
                            onClick={() => setSelectedNetwork(network.id)}
                            className={`border-b border-steel-gray/50 cursor-pointer transition-colors ${
                              selectedNetwork === network.id ? 'bg-exploit-red/10' : 'hover:bg-steel-gray/10'
                            }`}
                          >
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-3">
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                  selectedNetwork === network.id ? 'border-exploit-red bg-exploit-red' : 'border-steel-gray'
                                }`}>
                                  {selectedNetwork === network.id && <Check className="w-3 h-3 text-white" />}
                                </div>
                                <span className="text-sm text-exploit-red">{network.name}</span>
                                <span className="text-xs text-muted-gray">{network.id}</span>
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm text-muted-gray">{network.networkType}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm text-muted-gray">
                                {new Date(network.createdAt).toLocaleString('en-GB', {
                                  day: '2-digit',
                                  month: '2-digit',
                                  year: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                }).replace(',', '')}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Public IP Section */}
            <div className="p-4 bg-dark-base border border-steel-gray rounded-xl">
              <h3 className="text-base font-semibold text-ghost-white mb-2">Public IP</h3>
              <p className="text-sm text-muted-gray mb-4">
                Choose whether you want your server to have a public IPv4 address. This allows external access to the machine over the internet.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setPublicIP(!publicIP)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${publicIP ? 'bg-exploit-red' : 'bg-steel-gray'}`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-all ${publicIP ? 'left-6' : 'left-0.5'}`} />
                </button>
                <span className="text-sm text-ghost-white">Enable public IPv4 address</span>
              </div>
            </div>
          </div>

          {/* Step 5: Authentication */}
          <div>
            <h2 className="text-lg font-semibold text-ghost-white mb-4">Choose Authentication Method</h2>
            <div className="flex gap-4 mb-4">
              <button
                onClick={() => setAuthMethod('ssh')}
                className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                  authMethod === 'ssh'
                    ? 'border-exploit-red bg-exploit-red/10'
                    : 'border-steel-gray hover:border-steel-gray/60'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Key className="w-5 h-5 text-exploit-red" />
                  <span className="font-medium text-ghost-white">SSH Key</span>
                </div>
                <p className="text-sm text-muted-gray">Connect to your Droplet with an SSH key pair</p>
              </button>
              <button
                onClick={() => setAuthMethod('password')}
                className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                  authMethod === 'password'
                    ? 'border-exploit-red bg-exploit-red/10'
                    : 'border-steel-gray hover:border-steel-gray/60'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-exploit-red" />
                  <span className="font-medium text-ghost-white">Password</span>
                </div>
                <p className="text-sm text-muted-gray">Connect as the root user via password</p>
              </button>
            </div>

            {authMethod === 'password' && (
              <div className="p-4 bg-void-black rounded-xl border border-steel-gray">
                <label className="text-sm text-ghost-white mb-2 block">Create root password *</label>
                <input
                  type="password"
                  placeholder="Enter password..."
                  className="w-full px-4 py-3 bg-dark-base border border-steel-gray rounded-lg text-ghost-white placeholder:text-muted-gray"
                />
                <div className="mt-4 text-xs text-muted-gray space-y-1">
                  <p className="font-medium">PASSWORD REQUIREMENTS</p>
                  <p>• Must be at least 10 characters long</p>
                  <p>• Must contain 1 uppercase letter</p>
                  <p>• Must contain at least 1 number</p>
                </div>
              </div>
            )}
          </div>

          {/* Step 5: Finalize */}
          <div>
            <h2 className="text-lg font-semibold text-ghost-white mb-4">Finalize and Create</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm text-muted-gray mb-2 block">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg bg-void-black border border-steel-gray text-ghost-white hover:border-exploit-red"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold text-ghost-white w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    className="w-10 h-10 rounded-lg bg-void-black border border-steel-gray text-ghost-white hover:border-exploit-red"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-gray mb-2 block">Hostname</label>
                <input
                  type="text"
                  value={hostname}
                  onChange={(e) => setHostname(e.target.value)}
                  placeholder="ubuntu-server-01"
                  className="w-full px-4 py-3 bg-void-black border border-steel-gray rounded-lg text-ghost-white placeholder:text-muted-gray"
                />
              </div>
            </div>

            {/* Add-ons */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-4 bg-void-black rounded-xl border border-steel-gray">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="font-medium text-ghost-white">IPv6</p>
                    <p className="text-sm text-muted-gray">Free IPv6 address</p>
                  </div>
                </div>
                <button
                  onClick={() => setIpv6(!ipv6)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${ipv6 ? 'bg-exploit-red' : 'bg-steel-gray'}`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-all ${ipv6 ? 'left-6' : 'left-0.5'}`} />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-void-black rounded-xl border border-steel-gray">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="font-medium text-ghost-white">Monitoring</p>
                    <p className="text-sm text-muted-gray">Enhanced metrics and alerting</p>
                  </div>
                </div>
                <button
                  onClick={() => setMonitoring(!monitoring)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${monitoring ? 'bg-exploit-red' : 'bg-steel-gray'}`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-all ${monitoring ? 'left-6' : 'left-0.5'}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Create Button - Old location, will be replaced by floating footer */}
        </div>

        {/* No Sidebar Summary - moved to Review Modal */}
      </div>

      {/* Floating Footer with Billing & Deploy */}
      <div className="fixed bottom-0 left-0 right-0 bg-dark-base border-t border-steel-gray p-4 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Billing Cycle */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-gray" />
              <span className="text-sm text-ghost-white">Billing Cycle</span>
            </div>
            <div className="relative">
              <select
                value={billingCycle}
                onChange={(e) => setBillingCycle(e.target.value as 'hourly' | 'monthly')}
                className="px-4 py-2 bg-void-black border border-steel-gray rounded-lg text-ghost-white text-sm appearance-none pr-10"
              >
                <option value="hourly">Hourly</option>
                <option value="monthly">Monthly</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-gray pointer-events-none" />
            </div>
          </div>

          {/* Price Summary */}
          <div className="flex items-center gap-8">
            <div className="text-right">
              <p className="text-xs text-muted-gray">Price Summary</p>
              <p className="text-2xl font-bold text-ghost-white">
                {billingCycle === 'hourly' ? `$${hourlyPrice.toFixed(3)}` : `$${monthlyPrice.toFixed(2)}`}
                <span className="text-sm font-normal text-muted-gray">/{billingCycle}</span>
              </p>
            </div>
            <button
              onClick={() => setShowReviewModal(true)}
              disabled={!hostname.trim()}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                hostname.trim()
                  ? 'bg-exploit-red text-white hover:bg-exploit-red/90'
                  : 'bg-steel-gray text-muted-gray cursor-not-allowed'
              }`}
            >
              Review & Deploy
            </button>
          </div>
        </div>
      </div>

      {/* Review & Deploy Modal */}
      <AnimatePresence>
        {showReviewModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowReviewModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-dark-base border border-steel-gray rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 border-b border-steel-gray">
                <h2 className="text-2xl font-semibold text-ghost-white">Review & Deploy</h2>
                <p className="text-sm text-muted-gray">Review your configuration before deployment</p>
              </div>

              <div className="p-6 space-y-4">
                {/* Configuration Summary */}
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-steel-gray/50">
                    <span className="text-muted-gray">Region</span>
                    <span className="text-ghost-white">{regions.find(r => r.id === selectedRegion)?.name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-steel-gray/50">
                    <span className="text-muted-gray">Image</span>
                    <span className="text-ghost-white">{distro?.name} {selectedVersion}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-steel-gray/50">
                    <span className="text-muted-gray">Plan</span>
                    <span className="text-ghost-white">{currentPlan?.vcpu} vCPU / {currentPlan?.memory} GB RAM / {currentPlan?.disk} GB SSD</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-steel-gray/50">
                    <span className="text-muted-gray">Backups</span>
                    <span className="text-ghost-white capitalize">{backupFrequency}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-steel-gray/50">
                    <span className="text-muted-gray">Network</span>
                    <span className="text-ghost-white capitalize">{networkType} {selectedNetwork ? `(${networks.find(n => n.id === selectedNetwork)?.name})` : ''}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-steel-gray/50">
                    <span className="text-muted-gray">Public IP</span>
                    <span className="text-ghost-white">{publicIP ? 'Enabled' : 'Disabled'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-steel-gray/50">
                    <span className="text-muted-gray">Authentication</span>
                    <span className="text-ghost-white capitalize">{authMethod}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-steel-gray/50">
                    <span className="text-muted-gray">Hostname</span>
                    <span className="text-ghost-white">{hostname}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-steel-gray/50">
                    <span className="text-muted-gray">Quantity</span>
                    <span className="text-ghost-white">{quantity}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="p-4 bg-void-black rounded-xl">
                  <div className="flex items-baseline justify-between">
                    <span className="text-muted-gray">Total Cost</span>
                    <span className="text-3xl font-bold text-ghost-white">${monthlyPrice.toFixed(2)}<span className="text-lg text-muted-gray">/mo</span></span>
                  </div>
                  <p className="text-xs text-muted-gray text-right">${hourlyPrice.toFixed(3)}/hour</p>
                </div>
              </div>

              <div className="p-6 border-t border-steel-gray flex gap-3">
                <button
                  onClick={() => setShowReviewModal(false)}
                  className="flex-1 py-3 border border-steel-gray text-ghost-white rounded-lg hover:bg-steel-gray/20"
                >
                  Back to Edit
                </button>
                <button
                  onClick={async () => {
                    setShowReviewModal(false);
                    setIsCreating(true);
                    
                    // 30 second deployment simulation
                    await new Promise(resolve => setTimeout(resolve, 30000));
                    
                    // Create the instance
                    const newInstance: Instance = {
                      id: `srv-${Date.now()}`,
                      name: hostname,
                      status: 'running',
                      region: regions.find(r => r.id === selectedRegion)?.name || '',
                      datacenter: 'DC1',
                      project: 'DevOps',
                      os: distro?.name || '',
                      version: selectedVersion.split(' ')[0],
                      plan: selectedPlan,
                      vcpu: currentPlan?.vcpu || 2,
                      memory: currentPlan?.memory || 4,
                      disk: currentPlan?.disk || 80,
                      ipv4: `103.112.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 254) + 1}`,
                      createdAt: new Date().toISOString(),
                      uptime: '0d 0h',
                      cost: monthlyPrice
                    };
                    
                    // Save to localStorage
                    const existing = JSON.parse(localStorage.getItem('vxrt_instances') || '[]');
                    localStorage.setItem('vxrt_instances', JSON.stringify([newInstance, ...existing]));
                    
                    setCreatedInstance(newInstance);
                    setIsCreating(false);
                    
                    // Show notification and redirect to instance details
                    setTimeout(() => {
                      onCreated(newInstance);
                    }, 2000);
                  }}
                  className="flex-1 py-3 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 font-semibold"
                >
                  Deploy Server
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Deployment Loading Overlay */}
      <AnimatePresence>
        {isCreating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-20 border-4 border-steel-gray border-t-exploit-red rounded-full mx-auto mb-6"
              />
              <h3 className="text-2xl font-semibold text-ghost-white mb-2">Deploying Server...</h3>
              <p className="text-muted-gray">This may take up to 30 seconds</p>
              <div className="mt-6 w-64 h-2 bg-steel-gray rounded-full overflow-hidden mx-auto">
                <motion.div
                  animate={{ width: ['0%', '100%'] }}
                  transition={{ duration: 30, ease: 'linear' }}
                  className="h-full bg-exploit-red"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Notification */}
      <AnimatePresence>
        {createdInstance && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-6 right-6 z-50 bg-dark-base border border-green-500/30 rounded-xl p-4 shadow-xl"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="font-semibold text-ghost-white">Server Created Successfully!</p>
                <p className="text-sm text-muted-gray">{createdInstance.name} is now running</p>
                <p className="text-xs text-muted-gray mt-1">Redirecting to instance details...</p>
              </div>
              <button 
                onClick={() => setCreatedInstance(null)}
                className="p-1 hover:bg-steel-gray/20 rounded"
              >
                <X className="w-4 h-4 text-muted-gray" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Widget */}
      <div className="fixed bottom-24 right-6 z-40">
        <button
          onClick={() => setShowChat(!showChat)}
          className="w-14 h-14 bg-exploit-red rounded-full flex items-center justify-center shadow-lg hover:bg-exploit-red/90 transition-all"
        >
          <span className="text-2xl">💬</span>
        </button>
        
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-16 right-0 w-80 bg-dark-base border border-steel-gray rounded-xl shadow-xl overflow-hidden"
          >
            <div className="p-4 bg-exploit-red">
              <h4 className="font-semibold text-white">Support Chat</h4>
              <p className="text-xs text-white/80">We typically reply within minutes</p>
            </div>
            <div className="p-4 h-64 overflow-y-auto space-y-3">
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-exploit-red rounded-full flex items-center justify-center text-xs text-white">S</div>
                <div className="bg-void-black rounded-lg p-3 max-w-[200px]">
                  <p className="text-sm text-ghost-white">Hi! How can we help you with your server deployment today?</p>
                </div>
              </div>
            </div>
            <div className="p-3 border-t border-steel-gray flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 bg-void-black border border-steel-gray rounded-lg text-ghost-white text-sm"
              />
              <button className="p-2 bg-exploit-red rounded-lg">
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Spacer for fixed footer */}
      <div className="h-20" />
    </div>
  );
};

// Main Component
export function Compute() {
  const [view, setView] = useState<'list' | 'detail' | 'create'>('list');
  const [selectedInstance, setSelectedInstance] = useState<Instance | null>(null);
  const [instances, setInstances] = useState<Instance[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('vxrt_instances');
    if (saved) {
      setInstances(JSON.parse(saved));
    } else {
      setInstances(mockInstances);
    }
  }, []);

  const handleSelectInstance = (instance: Instance) => {
    setSelectedInstance(instance);
    setView('detail');
  };

  const handleCreate = () => {
    setView('create');
  };

  const handleDeleteInstance = (id: string) => {
    // Update instances list after deletion
    const saved = localStorage.getItem('vxrt_instances');
    if (saved) {
      setInstances(JSON.parse(saved));
    } else {
      setInstances(prev => prev.filter(i => i.id !== id));
    }
    // Go back to list view
    setView('list');
    setSelectedInstance(null);
  };

  const handleCreated = (instance?: Instance) => {
    const saved = localStorage.getItem('vxrt_instances');
    if (saved) {
      setInstances(JSON.parse(saved));
    }
    if (instance) {
      setSelectedInstance(instance);
      setView('detail');
    } else {
      setView('list');
    }
  };

  const handleBack = () => {
    setView('list');
    setSelectedInstance(null);
  };

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto min-h-screen">
      <AnimatePresence mode="wait">
        {view === 'list' && (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-heading font-bold text-ghost-white">Compute</h1>
              <button 
                onClick={handleCreate}
                className="flex items-center gap-2 px-6 py-3 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors font-medium"
              >
                <Plus className="w-5 h-5" />
                Create Server
              </button>
            </div>
            <InstancesList 
              instances={instances} 
              onSelect={handleSelectInstance}
              onCreate={handleCreate}
            />
          </motion.div>
        )}

        {view === 'detail' && selectedInstance && (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <InstanceDetail 
              instance={selectedInstance} 
              onBack={handleBack}
              onDelete={handleDeleteInstance}
            />
          </motion.div>
        )}

        {view === 'create' && (
          <motion.div
            key="create"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <CreateInstance 
              onCreated={handleCreated} 
              onCancel={handleBack}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
