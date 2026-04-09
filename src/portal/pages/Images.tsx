import { motion } from 'framer-motion';
import { 
  Image, 
  Plus, 
  Search, 
  Filter,
  Box,
  HardDrive,
  Cloud,
  MoreHorizontal,
  Clock,
  Tag,
  Eye,
  Download,
  Trash2
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

const mockImages = [
  {
    id: 1,
    name: 'Ubuntu 22.04 LTS',
    type: 'template',
    size: '2.4 GB',
    version: '22.04.3',
    createdAt: '2024-01-10',
    status: 'active',
    downloads: 1240,
    icon: Box
  },
  {
    id: 2,
    name: 'CentOS 9 Stream',
    type: 'template',
    size: '1.8 GB',
    version: '9.0',
    createdAt: '2024-01-08',
    status: 'active',
    downloads: 890,
    icon: Box
  },
  {
    id: 3,
    name: 'Windows Server 2022',
    type: 'iso',
    size: '5.2 GB',
    version: '2022 Standard',
    createdAt: '2023-12-15',
    status: 'active',
    downloads: 450,
    icon: HardDrive
  },
  {
    id: 4,
    name: 'K8s Ubuntu 22.04',
    type: 'k8s-iso',
    size: '3.1 GB',
    version: '1.28.0',
    createdAt: '2024-01-12',
    status: 'active',
    downloads: 320,
    icon: Cloud
  },
  {
    id: 5,
    name: 'Debian 12 (Bookworm)',
    type: 'template',
    size: '1.2 GB',
    version: '12.0',
    createdAt: '2024-01-05',
    status: 'draft',
    downloads: 0,
    icon: Box
  }
];

export function Images() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  const filteredImages = mockImages.filter(image => {
    const matchesSearch = image.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || image.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const getTypeBadge = (type: string) => {
    const styles = {
      template: 'bg-blue-500/10 text-blue-500',
      iso: 'bg-purple-500/10 text-purple-500',
      'k8s-iso': 'bg-green-500/10 text-green-500'
    };
    const labels = {
      template: 'Template',
      iso: 'ISO',
      'k8s-iso': 'K8s ISO'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[type as keyof typeof styles]}`}>
        {labels[type as keyof typeof labels]}
      </span>
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'template': return Box;
      case 'iso': return HardDrive;
      case 'k8s-iso': return Cloud;
      default: return Image;
    }
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
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Images</h1>
          <p className="text-muted-gray mt-1">Manage VM templates, ISOs, and Kubernetes images</p>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2.5 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors font-medium"
          >
            <Plus className="w-5 h-5" />
            Upload Image
          </motion.button>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Images', value: '24', icon: Image, color: 'blue' },
          { label: 'Templates', value: '12', icon: Box, color: 'green' },
          { label: 'ISOs', value: '8', icon: HardDrive, color: 'purple' },
          { label: 'K8s ISOs', value: '4', icon: Cloud, color: 'cyan' }
        ].map((stat, index) => (
          <div key={index} className="bg-dark-base border border-steel-gray rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                stat.color === 'blue' ? 'bg-blue-500/10' :
                stat.color === 'green' ? 'bg-green-500/10' :
                stat.color === 'purple' ? 'bg-purple-500/10' :
                'bg-cyan-500/10'
              }`}>
                <stat.icon className={`w-5 h-5 ${
                  stat.color === 'blue' ? 'text-blue-500' :
                  stat.color === 'green' ? 'text-green-500' :
                  stat.color === 'purple' ? 'text-purple-500' :
                  'text-cyan-500'
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
            placeholder="Search images..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-ghost-white placeholder:text-muted-gray focus:outline-none focus:border-exploit-red"
          />
        </div>
        <div className="flex gap-3">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-ghost-white focus:outline-none focus:border-exploit-red"
          >
            <option value="all">All Types</option>
            <option value="template">Templates</option>
            <option value="iso">ISOs</option>
            <option value="k8s-iso">Kubernetes ISOs</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Images Grid */}
      <motion.div variants={itemVariants} className="grid gap-4">
        {filteredImages.map((image) => {
          const TypeIcon = getTypeIcon(image.type);
          return (
            <motion.div
              key={image.id}
              className="bg-dark-base border border-steel-gray rounded-xl p-5 hover:border-exploit-red/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    image.type === 'template' ? 'bg-blue-500/10' :
                    image.type === 'iso' ? 'bg-purple-500/10' :
                    'bg-green-500/10'
                  }`}>
                    <TypeIcon className={`w-6 h-6 ${
                      image.type === 'template' ? 'text-blue-500' :
                      image.type === 'iso' ? 'text-purple-500' :
                      'text-green-500'
                    }`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-semibold text-ghost-white">{image.name}</h3>
                      {getTypeBadge(image.type)}
                      {image.status === 'draft' && (
                        <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-500 text-xs rounded">
                          Draft
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-gray">
                      <span className="flex items-center gap-1">
                        <Tag className="w-3.5 h-3.5" />
                        {image.version}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {image.createdAt}
                      </span>
                      <span>{image.size}</span>
                      {image.status === 'active' && (
                        <span className="flex items-center gap-1">
                          <Download className="w-3.5 h-3.5" />
                          {image.downloads} downloads
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-2 hover:bg-steel-gray/30 rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-steel-gray/30 rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-red-500/10 rounded-lg text-muted-gray hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
