import { motion } from 'framer-motion';
import { 
  Newspaper, 
  Plus, 
  Search, 
  Filter,
  Edit,
  Trash2,
  Eye,
  Calendar,
  Tag,
  User,
  CheckCircle,
  Clock,
  MoreHorizontal
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

const mockArticles = [
  {
    id: 1,
    title: 'New Security Features Released',
    excerpt: 'Introducing advanced threat detection and automated response capabilities...',
    category: 'Security News',
    author: 'Sarah Johnson',
    status: 'published',
    publishedAt: '2024-01-15',
    views: 1240,
    featured: true
  },
  {
    id: 2,
    title: 'Cloud Security Best Practices',
    excerpt: 'Essential guidelines for securing your cloud infrastructure...',
    category: 'Security News',
    author: 'Mike Chen',
    status: 'published',
    publishedAt: '2024-01-12',
    views: 890,
    featured: false
  },
  {
    id: 3,
    title: 'Product Update: Q1 2024',
    excerpt: 'New features and improvements coming this quarter...',
    category: 'Product Updates',
    author: 'Sarah Johnson',
    status: 'draft',
    publishedAt: null,
    views: 0,
    featured: false
  },
  {
    id: 4,
    title: 'Industry Trends in 2024',
    excerpt: 'Analysis of emerging cybersecurity trends...',
    category: 'Industry Insights',
    author: 'Emily Davis',
    status: 'published',
    publishedAt: '2024-01-08',
    views: 2150,
    featured: true
  },
  {
    id: 5,
    title: 'Kubernetes Security Guide',
    excerpt: 'Comprehensive guide to securing Kubernetes clusters...',
    category: 'Tutorials',
    author: 'Robert Wilson',
    status: 'review',
    publishedAt: null,
    views: 0,
    featured: false
  }
];

export function Articles() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredArticles = mockArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || article.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      published: 'bg-green-500/10 text-green-500',
      draft: 'bg-yellow-500/10 text-yellow-500',
      review: 'bg-blue-500/10 text-blue-500'
    };
    const labels = {
      published: 'Published',
      draft: 'Draft',
      review: 'In Review'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
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
          <h1 className="text-3xl font-heading font-bold text-ghost-white">All Articles</h1>
          <p className="text-muted-gray mt-1">Manage and publish news articles</p>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2.5 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors font-medium"
          >
            <Plus className="w-5 h-5" />
            New Article
          </motion.button>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Articles', value: '24', icon: Newspaper, color: 'blue' },
          { label: 'Published', value: '18', icon: CheckCircle, color: 'green' },
          { label: 'Drafts', value: '4', icon: Clock, color: 'yellow' },
          { label: 'In Review', value: '2', icon: Eye, color: 'purple' }
        ].map((stat, index) => (
          <div key={index} className="bg-dark-base border border-steel-gray rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                stat.color === 'blue' ? 'bg-blue-500/10' :
                stat.color === 'green' ? 'bg-green-500/10' :
                stat.color === 'yellow' ? 'bg-yellow-500/10' :
                'bg-purple-500/10'
              }`}>
                <stat.icon className={`w-5 h-5 ${
                  stat.color === 'blue' ? 'text-blue-500' :
                  stat.color === 'green' ? 'text-green-500' :
                  stat.color === 'yellow' ? 'text-yellow-500' :
                  'text-purple-500'
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
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-ghost-white placeholder:text-muted-gray focus:outline-none focus:border-exploit-red"
          />
        </div>
        <div className="flex gap-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-ghost-white focus:outline-none focus:border-exploit-red"
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="review">In Review</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Articles Grid */}
      <motion.div variants={itemVariants} className="grid gap-4">
        {filteredArticles.map((article) => (
          <motion.div
            key={article.id}
            className="bg-dark-base border border-steel-gray rounded-xl p-5 hover:border-exploit-red/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-ghost-white">{article.title}</h3>
                  {article.featured && (
                    <span className="px-2 py-0.5 bg-exploit-red/10 text-exploit-red text-xs rounded">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-gray mb-3">{article.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-gray">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" />
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    {article.author}
                  </span>
                  {article.publishedAt && (
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.publishedAt}
                    </span>
                  )}
                  {article.status === 'published' && (
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {article.views} views
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-end gap-3">
                {getStatusBadge(article.status)}
                <div className="flex items-center gap-1">
                  <button className="p-2 hover:bg-steel-gray/30 rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-steel-gray/30 rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-red-500/10 rounded-lg text-muted-gray hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
