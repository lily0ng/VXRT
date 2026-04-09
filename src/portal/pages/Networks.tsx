import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Network, Plus, Globe, Shield, X, Check, MoreVertical, Trash2, Edit2, Radio } from 'lucide-react';

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
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }
  }
};

// Network Types
export interface NetworkData {
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

const generateNetworkId = () => `d-net-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`;

export function Networks() {
  const [networks, setNetworks] = useState<NetworkData[]>(() => {
    const saved = localStorage.getItem('vxrt_networks');
    return saved ? JSON.parse(saved) : [];
  });
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingNetwork, setEditingNetwork] = useState<NetworkData | null>(null);

  // Save to localStorage whenever networks change
  useEffect(() => {
    localStorage.setItem('vxrt_networks', JSON.stringify(networks));
  }, [networks]);

  const handleCreateNetwork = (network: Omit<NetworkData, 'id' | 'createdAt'>) => {
    const newNetwork: NetworkData = {
      ...network,
      id: generateNetworkId(),
      createdAt: new Date().toISOString(),
    };
    setNetworks([...networks, newNetwork]);
    setShowCreateModal(false);
  };

  const handleUpdateNetwork = (updated: NetworkData) => {
    setNetworks(networks.map(n => n.id === updated.id ? updated : n));
    setEditingNetwork(null);
  };

  const handleDeleteNetwork = (id: string) => {
    setNetworks(networks.filter(n => n.id !== id));
  };

  const handleSetDefault = (id: string) => {
    setNetworks(networks.map(n => ({ ...n, isDefault: n.id === id })));
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-6 lg:p-8 space-y-8"
    >
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Networks</h1>
          <p className="text-muted-gray mt-1">Software-defined networking management</p>
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Create Network
        </button>
      </motion.div>

      {networks.length === 0 ? (
        <motion.div variants={itemVariants} className="bg-dark-base border border-steel-gray rounded-xl p-12 text-center">
          <Network className="w-16 h-16 text-exploit-red/30 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-ghost-white mb-2">No Networks</h3>
          <p className="text-muted-gray max-w-md mx-auto mb-6">
            Create isolated networks for your infrastructure
          </p>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="px-6 py-2 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90"
          >
            Create Your First Network
          </button>
        </motion.div>
      ) : (
        <motion.div variants={itemVariants} className="space-y-4">
          {/* Network Type Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-dark-base border border-steel-gray rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Network className="w-5 h-5 text-blue-500" />
                </div>
                <span className="font-medium text-ghost-white">Isolated Networks</span>
              </div>
              <p className="text-2xl font-bold text-ghost-white">
                {networks.filter(n => n.type === 'isolated').length}
              </p>
            </div>
            <div className="p-4 bg-dark-base border border-steel-gray rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-purple-500" />
                </div>
                <span className="font-medium text-ghost-white">VPC Networks</span>
              </div>
              <p className="text-2xl font-bold text-ghost-white">
                {networks.filter(n => n.type === 'vpc').length}
              </p>
            </div>
            <div className="p-4 bg-dark-base border border-steel-gray rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-500" />
                </div>
                <span className="font-medium text-ghost-white">L2 Networks</span>
              </div>
              <p className="text-2xl font-bold text-ghost-white">
                {networks.filter(n => n.type === 'l2').length}
              </p>
            </div>
          </div>

          {/* Networks Table */}
          <div className="bg-dark-base border border-steel-gray rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-steel-gray bg-void-black">
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-gray uppercase">Network</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-gray uppercase">Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-gray uppercase">Region</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-gray uppercase">CIDR</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-gray uppercase">Default</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-gray uppercase">Created</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-gray uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {networks.map((network) => (
                    <tr key={network.id} className="border-b border-steel-gray/50 hover:bg-steel-gray/10">
                      <td className="px-4 py-3">
                        <div>
                          <p className="font-medium text-ghost-white">{network.name}</p>
                          <p className="text-xs text-muted-gray">{network.id}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded text-xs ${
                          network.type === 'isolated' ? 'bg-blue-500/20 text-blue-400' :
                          network.type === 'vpc' ? 'bg-purple-500/20 text-purple-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {network.networkType}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-muted-gray">{network.region}</td>
                      <td className="px-4 py-3 text-sm text-muted-gray">{network.cidr}</td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleSetDefault(network.id)}
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                            network.isDefault ? 'bg-exploit-red border-exploit-red' : 'border-steel-gray'
                          }`}
                        >
                          {network.isDefault && <Check className="w-3 h-3 text-white" />}
                        </button>
                      </td>
                      <td className="px-4 py-3 text-sm text-muted-gray">
                        {new Date(network.createdAt).toLocaleString()}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setEditingNetwork(network)}
                            className="p-2 hover:bg-steel-gray/20 rounded-lg"
                          >
                            <Edit2 className="w-4 h-4 text-muted-gray" />
                          </button>
                          <button
                            onClick={() => handleDeleteNetwork(network.id)}
                            className="p-2 hover:bg-red-500/20 rounded-lg"
                          >
                            <Trash2 className="w-4 h-4 text-red-400" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      )}

      {/* Create/Edit Modal */}
      <AnimatePresence>
        {(showCreateModal || editingNetwork) && (
          <NetworkModal
            network={editingNetwork}
            onClose={() => {
              setShowCreateModal(false);
              setEditingNetwork(null);
            }}
            onSave={editingNetwork ? handleUpdateNetwork : handleCreateNetwork}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Network Modal Component
function NetworkModal({ 
  network, 
  onClose, 
  onSave 
}: { 
  network: NetworkData | null;
  onClose: () => void;
  onSave: (network: any) => void;
}) {
  const [formData, setFormData] = useState({
    name: network?.name || '',
    type: network?.type || 'isolated' as 'isolated' | 'vpc' | 'l2',
    networkType: network?.networkType || 'Public Network',
    region: network?.region || 'Asia Pacific',
    cidr: network?.cidr || '192.168.0.0/16',
    subnet: network?.subnet || '255.255.255.0',
    isDefault: network?.isDefault || false,
    description: network?.description || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (network) {
      onSave({ ...network, ...formData });
    } else {
      onSave(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-dark-base border border-steel-gray rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 border-b border-steel-gray flex items-center justify-between">
          <h2 className="text-xl font-semibold text-ghost-white">
            {network ? 'Edit Network' : 'Create Network'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-steel-gray/20 rounded-lg">
            <X className="w-5 h-5 text-muted-gray" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm text-muted-gray mb-2">Network Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="my-network-01"
              className="w-full px-4 py-3 bg-void-black border border-steel-gray rounded-lg text-ghost-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-muted-gray mb-2">Network Type</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'isolated', name: 'Isolated', desc: 'Simple, pre-configured' },
                { id: 'vpc', name: 'VPC', desc: 'Advanced, full control' },
                { id: 'l2', name: 'L2', desc: 'Layer 2 network' },
              ].map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, type: type.id as any })}
                  className={`p-3 rounded-xl border-2 text-left transition-all ${
                    formData.type === type.id
                      ? 'border-exploit-red bg-exploit-red/10'
                      : 'border-steel-gray hover:border-steel-gray/60'
                  }`}
                >
                  <p className="font-medium text-ghost-white">{type.name}</p>
                  <p className="text-xs text-muted-gray">{type.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-muted-gray mb-2">Region</label>
              <select
                value={formData.region}
                onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                className="w-full px-4 py-3 bg-void-black border border-steel-gray rounded-lg text-ghost-white"
              >
                <option>Asia Pacific</option>
                <option>North America</option>
                <option>Europe</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-muted-gray mb-2">Network Type</label>
              <select
                value={formData.networkType}
                onChange={(e) => setFormData({ ...formData, networkType: e.target.value })}
                className="w-full px-4 py-3 bg-void-black border border-steel-gray rounded-lg text-ghost-white"
              >
                <option>Public Network</option>
                <option>Private Network</option>
                <option>Hybrid Network</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-muted-gray mb-2">CIDR Block</label>
              <input
                type="text"
                value={formData.cidr}
                onChange={(e) => setFormData({ ...formData, cidr: e.target.value })}
                placeholder="192.168.0.0/16"
                className="w-full px-4 py-3 bg-void-black border border-steel-gray rounded-lg text-ghost-white"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-gray mb-2">Subnet Mask</label>
              <input
                type="text"
                value={formData.subnet}
                onChange={(e) => setFormData({ ...formData, subnet: e.target.value })}
                placeholder="255.255.255.0"
                className="w-full px-4 py-3 bg-void-black border border-steel-gray rounded-lg text-ghost-white"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-void-black rounded-xl">
            <input
              type="checkbox"
              id="isDefault"
              checked={formData.isDefault}
              onChange={(e) => setFormData({ ...formData, isDefault: e.target.checked })}
              className="w-4 h-4 rounded border-steel-gray"
            />
            <label htmlFor="isDefault" className="text-sm text-ghost-white">
              Set as default network for new servers
            </label>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 border border-steel-gray text-ghost-white rounded-lg hover:bg-steel-gray/20"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90"
            >
              {network ? 'Update' : 'Create'} Network
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
