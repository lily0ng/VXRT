import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Shield, 
  Mail,
  Phone,
  Calendar,
  CheckCircle,
  XCircle,
  Edit,
  Trash2,
  UserCheck,
  UserX,
  Key,
  Newspaper,
  Tag,
  FileText,
  Clock,
  ChevronDown,
  ChevronRight,
  Eye
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

// User roles including News Category Administrator
const userRoles = [
  { id: 'super_admin', name: 'Super Admin', color: 'red', description: 'Full system access' },
  { id: 'admin', name: 'Administrator', color: 'orange', description: 'Manage users and settings' },
  { id: 'news_admin', name: 'News Category Admin', color: 'blue', description: 'Manage news categories & content' },
  { id: 'editor', name: 'Editor', color: 'green', description: 'Create and edit content' },
  { id: 'author', name: 'Author', color: 'purple', description: 'Create content only' },
  { id: 'viewer', name: 'Viewer', color: 'gray', description: 'Read-only access' }
];

// Mock users data
const mockUsers = [
  { 
    id: 1, 
    name: 'John Smith', 
    email: 'john.smith@vxrt.com', 
    role: 'super_admin',
    status: 'active',
    department: 'IT Security',
    phone: '+1 (555) 123-4567',
    lastLogin: '2024-01-15 09:30 AM',
    createdAt: '2023-06-01',
    avatar: 'https://i.pravatar.cc/150?u=1',
    twoFA: true,
    newsCategories: ['All']
  },
  { 
    id: 2, 
    name: 'Sarah Johnson', 
    email: 'sarah.j@vxrt.com', 
    role: 'news_admin',
    status: 'active',
    department: 'Content Management',
    phone: '+1 (555) 234-5678',
    lastLogin: '2024-01-15 08:45 AM',
    createdAt: '2023-08-15',
    avatar: 'https://i.pravatar.cc/150?u=2',
    twoFA: true,
    newsCategories: ['Security News', 'Product Updates', 'Industry Insights']
  },
  { 
    id: 3, 
    name: 'Mike Chen', 
    email: 'mike.chen@vxrt.com', 
    role: 'editor',
    status: 'active',
    department: 'Marketing',
    phone: '+1 (555) 345-6789',
    lastLogin: '2024-01-14 04:20 PM',
    createdAt: '2023-09-20',
    avatar: 'https://i.pravatar.cc/150?u=3',
    twoFA: false,
    newsCategories: ['Security News']
  },
  { 
    id: 4, 
    name: 'Emily Davis', 
    email: 'emily.d@vxrt.com', 
    role: 'author',
    status: 'inactive',
    department: 'Content',
    phone: '+1 (555) 456-7890',
    lastLogin: '2024-01-10 11:15 AM',
    createdAt: '2023-10-05',
    avatar: 'https://i.pravatar.cc/150?u=4',
    twoFA: false,
    newsCategories: ['Product Updates']
  },
  { 
    id: 5, 
    name: 'Robert Wilson', 
    email: 'robert.w@vxrt.com', 
    role: 'admin',
    status: 'active',
    department: 'Operations',
    phone: '+1 (555) 567-8901',
    lastLogin: '2024-01-15 07:50 AM',
    createdAt: '2023-07-12',
    avatar: 'https://i.pravatar.cc/150?u=5',
    twoFA: true,
    newsCategories: []
  },
  { 
    id: 6, 
    name: 'Lisa Anderson', 
    email: 'lisa.a@vxrt.com', 
    role: 'viewer',
    status: 'active',
    department: 'Sales',
    phone: '+1 (555) 678-9012',
    lastLogin: '2024-01-14 02:30 PM',
    createdAt: '2023-11-01',
    avatar: 'https://i.pravatar.cc/150?u=6',
    twoFA: false,
    newsCategories: []
  }
];

// News categories for assignment
const newsCategories = [
  { id: 'security', name: 'Security News', count: 24 },
  { id: 'product', name: 'Product Updates', count: 18 },
  { id: 'industry', name: 'Industry Insights', count: 32 },
  { id: 'company', name: 'Company News', count: 12 },
  { id: 'events', name: 'Events & Webinars', count: 8 },
  { id: 'tutorials', name: 'Tutorials & Guides', count: 15 }
];

export function UserManagement() {
  const navigate = useNavigate();
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState(false);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getRoleBadge = (roleId: string) => {
    const role = userRoles.find(r => r.id === roleId);
    if (!role) return null;
    
    const colorClasses = {
      red: 'bg-red-500/10 text-red-500 border-red-500/20',
      orange: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
      blue: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      green: 'bg-green-500/10 text-green-500 border-green-500/20',
      purple: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      gray: 'bg-gray-500/10 text-gray-500 border-gray-500/20'
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${colorClasses[role.color as keyof typeof colorClasses]}`}>
        {role.name}
      </span>
    );
  };

  const toggleUserSelection = (userId: number) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const selectAllUsers = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map(u => u.id));
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
          <h1 className="text-3xl font-heading font-bold text-ghost-white">User Management</h1>
          <p className="text-muted-gray mt-1">Manage users, roles, and news category permissions</p>
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors font-medium"
          >
            <Plus className="w-5 h-5" />
            Add User
          </motion.button>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Users', value: users.length, icon: Users, color: 'blue' },
          { label: 'Active Users', value: users.filter(u => u.status === 'active').length, icon: UserCheck, color: 'green' },
          { label: 'News Admins', value: users.filter(u => u.role === 'news_admin').length, icon: Newspaper, color: 'orange' },
          { label: 'Inactive', value: users.filter(u => u.status === 'inactive').length, icon: UserX, color: 'red' }
        ].map((stat, index) => (
          <div key={index} className="bg-dark-base border border-steel-gray rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                stat.color === 'blue' ? 'bg-blue-500/10' :
                stat.color === 'green' ? 'bg-green-500/10' :
                stat.color === 'orange' ? 'bg-orange-500/10' :
                'bg-red-500/10'
              }`}>
                <stat.icon className={`w-5 h-5 ${
                  stat.color === 'blue' ? 'text-blue-500' :
                  stat.color === 'green' ? 'text-green-500' :
                  stat.color === 'orange' ? 'text-orange-500' :
                  'text-red-500'
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

      {/* News Category Admin Section */}
      <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-500/20 rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <Newspaper className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ghost-white">News Category Administration</h3>
              <p className="text-sm text-muted-gray">Manage content categories and assigned administrators</p>
            </div>
          </div>
          <button 
            onClick={() => setExpandedCategories(!expandedCategories)}
            className="flex items-center gap-1 text-sm text-blue-500 hover:text-blue-400"
          >
            {expandedCategories ? 'Collapse' : 'Expand'}
            {expandedCategories ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {newsCategories.map((category) => (
            <div 
              key={category.id}
              className="bg-dark-base border border-steel-gray rounded-lg p-3 hover:border-blue-500/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-2">
                <Tag className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-ghost-white truncate">{category.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-gray">{category.count} articles</span>
                <span className="text-xs text-blue-500">
                  {users.filter(u => u.newsCategories.includes(category.name) || u.newsCategories.includes('All')).length} admins
                </span>
              </div>
            </div>
          ))}
        </div>

        {expandedCategories && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 pt-4 border-t border-steel-gray/50"
          >
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-3 py-2 bg-blue-500/10 text-blue-500 rounded-lg text-sm hover:bg-blue-500/20 transition-colors">
                <Plus className="w-4 h-4" />
                Add Category
              </button>
              <button className="flex items-center gap-2 px-3 py-2 bg-steel-gray/30 text-muted-gray rounded-lg text-sm hover:bg-steel-gray/50 transition-colors">
                <Shield className="w-4 h-4" />
                Manage Permissions
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Filters */}
      <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-gray" />
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-ghost-white placeholder:text-muted-gray focus:outline-none focus:border-exploit-red"
          />
        </div>
        <div className="flex gap-3">
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-ghost-white focus:outline-none focus:border-exploit-red"
          >
            <option value="all">All Roles</option>
            {userRoles.map(role => (
              <option key={role.id} value={role.id}>{role.name}</option>
            ))}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-ghost-white focus:outline-none focus:border-exploit-red"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Bulk Actions */}
      {selectedUsers.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 p-3 bg-exploit-red/10 border border-exploit-red/30 rounded-lg"
        >
          <span className="text-sm text-ghost-white">{selectedUsers.length} users selected</span>
          <div className="flex-1" />
          <button className="flex items-center gap-2 px-3 py-1.5 bg-dark-base rounded-lg text-sm text-ghost-white hover:bg-steel-gray/50">
            <CheckCircle className="w-4 h-4" />
            Activate
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-dark-base rounded-lg text-sm text-ghost-white hover:bg-steel-gray/50">
            <XCircle className="w-4 h-4" />
            Deactivate
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 rounded-lg text-sm text-red-500 hover:bg-red-500/20">
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </motion.div>
      )}

      {/* Users Table */}
      <motion.div variants={itemVariants} className="bg-dark-base border border-steel-gray rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-steel-gray bg-void-black/50">
                <th className="px-4 py-3 text-left">
                  <input 
                    type="checkbox" 
                    checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                    onChange={selectAllUsers}
                    className="rounded border-steel-gray bg-dark-base text-exploit-red focus:ring-exploit-red"
                  />
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-gray">User</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-gray">Role</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-gray">Department</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-gray">News Categories</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-gray">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-gray">Last Login</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-gray">2FA</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-muted-gray">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr 
                  key={user.id} 
                  className="border-b border-steel-gray/50 hover:bg-steel-gray/10 transition-colors"
                >
                  <td className="px-4 py-4">
                    <input 
                      type="checkbox" 
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => toggleUserSelection(user.id)}
                      className="rounded border-steel-gray bg-dark-base text-exploit-red focus:ring-exploit-red"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={user.avatar} 
                        alt={user.name}
                        className="w-10 h-10 rounded-full bg-steel-gray"
                      />
                      <div>
                        <p 
                          className="text-sm font-medium text-ghost-white cursor-pointer hover:text-exploit-red"
                          onClick={() => navigate(`/portal/users/${user.id}`)}
                        >
                          {user.name}
                        </p>
                        <p className="text-xs text-muted-gray">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    {getRoleBadge(user.role)}
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-muted-gray">{user.department}</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-1">
                      {user.newsCategories.length > 0 ? (
                        user.newsCategories.slice(0, 2).map((cat, idx) => (
                          <span key={idx} className="text-xs px-2 py-0.5 bg-blue-500/10 text-blue-500 rounded">
                            {cat}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-muted-gray">-</span>
                      )}
                      {user.newsCategories.length > 2 && (
                        <span className="text-xs px-2 py-0.5 bg-steel-gray/30 text-muted-gray rounded">
                          +{user.newsCategories.length - 2}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs ${
                      user.status === 'active' 
                        ? 'bg-green-500/10 text-green-500' 
                        : 'bg-red-500/10 text-red-500'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`} />
                      {user.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1.5 text-sm text-muted-gray">
                      <Clock className="w-3.5 h-3.5" />
                      {user.lastLogin}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    {user.twoFA ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-muted-gray" />
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => navigate(`/portal/users/${user.id}`)}
                        className="p-2 hover:bg-steel-gray/30 rounded-lg text-muted-gray hover:text-ghost-white transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-steel-gray/30 rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-red-500/10 rounded-lg text-muted-gray hover:text-red-500 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Add User Modal Placeholder */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-dark-base border border-steel-gray rounded-xl w-full max-w-lg p-6"
          >
            <h2 className="text-xl font-semibold text-ghost-white mb-4">Add New User</h2>
            <p className="text-muted-gray mb-6">Create a new user account with role and permissions.</p>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name"
                className="w-full px-4 py-2.5 bg-void-black border border-steel-gray rounded-lg text-ghost-white placeholder:text-muted-gray focus:outline-none focus:border-exploit-red"
              />
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full px-4 py-2.5 bg-void-black border border-steel-gray rounded-lg text-ghost-white placeholder:text-muted-gray focus:outline-none focus:border-exploit-red"
              />
              <select className="w-full px-4 py-2.5 bg-void-black border border-steel-gray rounded-lg text-ghost-white focus:outline-none focus:border-exploit-red">
                <option value="">Select Role</option>
                {userRoles.map(role => (
                  <option key={role.id} value={role.id}>{role.name}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2.5 border border-steel-gray rounded-lg text-muted-gray hover:text-ghost-white transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2.5 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors"
              >
                Create User
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
