import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft,
  User,
  Mail,
  Phone,
  Shield,
  Calendar,
  Clock,
  MapPin,
  Edit,
  Save,
  X,
  CheckCircle,
  XCircle,
  Key,
  LogOut,
  Activity,
  FileText,
  Tag,
  Newspaper,
  ChevronRight,
  MoreHorizontal,
  Lock,
  Unlock,
  AlertTriangle
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

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

// User roles
const userRoles = [
  { id: 'super_admin', name: 'Super Admin', color: 'red', description: 'Full system access' },
  { id: 'admin', name: 'Administrator', color: 'orange', description: 'Manage users and settings' },
  { id: 'news_admin', name: 'News Category Admin', color: 'blue', description: 'Manage news categories & content' },
  { id: 'editor', name: 'Editor', color: 'green', description: 'Create and edit content' },
  { id: 'author', name: 'Author', color: 'purple', description: 'Create content only' },
  { id: 'viewer', name: 'Viewer', color: 'gray', description: 'Read-only access' }
];

// Mock user data
const mockUserData = {
  id: 2,
  name: 'Sarah Johnson',
  email: 'sarah.j@vxrt.com',
  role: 'news_admin',
  status: 'active',
  department: 'Content Management',
  phone: '+1 (555) 234-5678',
  lastLogin: '2024-01-15 08:45 AM',
  createdAt: '2023-08-15',
  updatedAt: '2024-01-10',
  avatar: 'https://i.pravatar.cc/150?u=2',
  twoFA: true,
  bio: 'Experienced content manager with expertise in cybersecurity news and digital media.',
  location: 'New York, USA',
  timezone: 'EST (UTC-5)',
  newsCategories: ['Security News', 'Product Updates', 'Industry Insights'],
  permissions: [
    'Create News Articles',
    'Edit News Articles',
    'Delete News Articles',
    'Publish News Articles',
    'Manage Categories',
    'Assign Authors'
  ]
};

// Mock activity log
const mockActivityLog = [
  { id: 1, action: 'Published article', target: 'New Security Features Released', type: 'content', time: '2 hours ago' },
  { id: 2, action: 'Updated category', target: 'Security News', type: 'category', time: '5 hours ago' },
  { id: 3, action: 'Assigned author', target: 'Mike Chen to article', type: 'user', time: '1 day ago' },
  { id: 4, action: 'Logged in', target: 'Chrome on macOS', type: 'login', time: '1 day ago' },
  { id: 5, action: 'Edited article', target: 'Cloud Security Best Practices', type: 'content', time: '2 days ago' },
  { id: 6, action: 'Created category', target: 'Industry Insights', type: 'category', time: '3 days ago' },
];

// Mock news articles managed
const mockArticles = [
  { id: 1, title: 'New Security Features Released', category: 'Security News', status: 'published', views: 1240, date: '2024-01-15' },
  { id: 2, title: 'Cloud Security Best Practices', category: 'Security News', status: 'published', views: 890, date: '2024-01-12' },
  { id: 3, title: 'Product Update: Q1 2024', category: 'Product Updates', status: 'draft', views: 0, date: '2024-01-10' },
  { id: 4, title: 'Industry Trends in 2024', category: 'Industry Insights', status: 'published', views: 2150, date: '2024-01-08' },
];

export function UserDetails() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(mockUserData);

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
      <span className={`px-3 py-1.5 rounded-full text-sm font-medium border ${colorClasses[role.color as keyof typeof colorClasses]}`}>
        {role.name}
      </span>
    );
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'content': return <FileText className="w-4 h-4 text-blue-500" />;
      case 'category': return <Tag className="w-4 h-4 text-green-500" />;
      case 'user': return <User className="w-4 h-4 text-purple-500" />;
      case 'login': return <Lock className="w-4 h-4 text-orange-500" />;
      default: return <Activity className="w-4 h-4 text-muted-gray" />;
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
      <motion.div variants={itemVariants} className="flex items-center gap-4">
        <button 
          onClick={() => navigate('/portal/users')}
          className="p-2 hover:bg-steel-gray/30 rounded-lg text-muted-gray hover:text-ghost-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <h1 className="text-2xl font-heading font-bold text-ghost-white">User Details</h1>
          <p className="text-sm text-muted-gray">View and manage user information</p>
        </div>
        <div className="flex items-center gap-3">
          {isEditing ? (
            <>
              <button 
                onClick={() => setIsEditing(false)}
                className="flex items-center gap-2 px-4 py-2 border border-steel-gray rounded-lg text-muted-gray hover:text-ghost-white transition-colors"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
              <button 
                onClick={() => setIsEditing(false)}
                className="flex items-center gap-2 px-4 py-2 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </>
          ) : (
            <button 
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 bg-steel-gray/30 text-ghost-white rounded-lg hover:bg-steel-gray/50 transition-colors"
            >
              <Edit className="w-4 h-4" />
              Edit Profile
            </button>
          )}
        </div>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Card */}
        <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
          {/* Profile Card */}
          <div className="bg-dark-base border border-steel-gray rounded-xl p-6 text-center">
            <div className="relative inline-block">
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-24 h-24 rounded-full mx-auto bg-steel-gray border-2 border-steel-gray"
              />
              <span className={`absolute bottom-0 right-0 w-6 h-6 rounded-full border-2 border-dark-base ${
                user.status === 'active' ? 'bg-green-500' : 'bg-red-500'
              }`} />
            </div>
            <h2 className="text-xl font-semibold text-ghost-white mt-4">{user.name}</h2>
            <p className="text-sm text-muted-gray">{user.email}</p>
            <div className="mt-4 flex justify-center">
              {getRoleBadge(user.role)}
            </div>
            <div className="mt-4 pt-4 border-t border-steel-gray/50">
              <p className="text-sm text-muted-gray">{user.bio}</p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-4 text-sm text-muted-gray">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {user.location}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {user.timezone}
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
            <h3 className="text-sm font-semibold text-ghost-white mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-gray" />
                <span className="text-sm text-ghost-white">{user.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-muted-gray" />
                <span className="text-sm text-ghost-white">{user.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-muted-gray" />
                <span className="text-sm text-ghost-white">{user.department}</span>
              </div>
            </div>
          </div>

          {/* Account Status */}
          <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
            <h3 className="text-sm font-semibold text-ghost-white mb-4">Account Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-gray">Status</span>
                <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs ${
                  user.status === 'active' 
                    ? 'bg-green-500/10 text-green-500' 
                    : 'bg-red-500/10 text-red-500'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`} />
                  {user.status === 'active' ? 'Active' : 'Inactive'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-gray">2FA Enabled</span>
                {user.twoFA ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-muted-gray" />
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-gray">Created</span>
                <span className="text-sm text-ghost-white">{user.createdAt}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-gray">Last Updated</span>
                <span className="text-sm text-ghost-white">{user.updatedAt}</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
            <h3 className="text-sm font-semibold text-ghost-white mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 p-2.5 hover:bg-steel-gray/30 rounded-lg text-sm text-ghost-white transition-colors">
                <Key className="w-4 h-4 text-muted-gray" />
                Reset Password
              </button>
              <button className="w-full flex items-center gap-3 p-2.5 hover:bg-steel-gray/30 rounded-lg text-sm text-ghost-white transition-colors">
                <Mail className="w-4 h-4 text-muted-gray" />
                Send Email
              </button>
              <button className="w-full flex items-center gap-3 p-2.5 hover:bg-orange-500/10 rounded-lg text-sm text-orange-500 transition-colors">
                <Unlock className="w-4 h-4" />
                Disable 2FA
              </button>
              <button className="w-full flex items-center gap-3 p-2.5 hover:bg-red-500/10 rounded-lg text-sm text-red-500 transition-colors">
                <LogOut className="w-4 h-4" />
                Deactivate Account
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Tabs Content */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          {/* Tabs */}
          <div className="bg-dark-base border border-steel-gray rounded-xl overflow-hidden">
            <div className="flex border-b border-steel-gray">
              {[
                { id: 'overview', label: 'Overview', icon: User },
                { id: 'activity', label: 'Activity Log', icon: Activity },
                { id: 'articles', label: 'News Articles', icon: Newspaper },
                { id: 'permissions', label: 'Permissions', icon: Shield }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id 
                      ? 'border-exploit-red text-exploit-red' 
                      : 'border-transparent text-muted-gray hover:text-ghost-white'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="p-6">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* News Categories Section */}
                  <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-blue-500/20 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <Newspaper className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-ghost-white">News Category Administration</h3>
                        <p className="text-sm text-muted-gray">Categories this user can manage</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {user.newsCategories.map((category, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-blue-500/10 text-blue-500 rounded-lg text-sm flex items-center gap-2">
                          <Tag className="w-3.5 h-3.5" />
                          {category}
                        </span>
                      ))}
                      <button className="px-3 py-1.5 border border-dashed border-steel-gray text-muted-gray rounded-lg text-sm hover:border-blue-500 hover:text-blue-500 transition-colors">
                        + Add Category
                      </button>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'Articles Published', value: '12', icon: FileText, color: 'blue' },
                      { label: 'Categories Managed', value: '3', icon: Tag, color: 'green' },
                      { label: 'Total Views', value: '4,280', icon: Activity, color: 'purple' },
                      { label: 'Last Active', value: '2h ago', icon: Clock, color: 'orange' }
                    ].map((stat, index) => (
                      <div key={index} className="bg-void-black/50 border border-steel-gray/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <stat.icon className={`w-4 h-4 ${
                            stat.color === 'blue' ? 'text-blue-500' :
                            stat.color === 'green' ? 'text-green-500' :
                            stat.color === 'purple' ? 'text-purple-500' :
                            'text-orange-500'
                          }`} />
                          <span className="text-xs text-muted-gray">{stat.label}</span>
                        </div>
                        <p className="text-xl font-bold text-ghost-white">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Recent Activity Preview */}
                  <div>
                    <h3 className="text-sm font-semibold text-ghost-white mb-3">Recent Activity</h3>
                    <div className="space-y-2">
                      {mockActivityLog.slice(0, 3).map((activity) => (
                        <div key={activity.id} className="flex items-center gap-3 p-3 bg-void-black/30 rounded-lg">
                          <div className="w-8 h-8 rounded-lg bg-steel-gray/30 flex items-center justify-center">
                            {getActivityIcon(activity.type)}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-ghost-white">{activity.action}</p>
                            <p className="text-xs text-muted-gray">{activity.target}</p>
                          </div>
                          <span className="text-xs text-muted-gray">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => setActiveTab('activity')}
                      className="mt-3 text-sm text-exploit-red hover:text-exploit-red/80 flex items-center gap-1"
                    >
                      View all activity
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Activity Log Tab */}
              {activeTab === 'activity' && (
                <div className="space-y-3">
                  {mockActivityLog.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3 p-4 bg-void-black/30 rounded-lg hover:bg-steel-gray/10 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-steel-gray/30 flex items-center justify-center flex-shrink-0">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-ghost-white">{activity.action}</p>
                          <span className="text-xs text-muted-gray">{activity.time}</span>
                        </div>
                        <p className="text-sm text-muted-gray mt-1">{activity.target}</p>
                        <span className="inline-block mt-2 text-xs px-2 py-0.5 bg-steel-gray/30 text-muted-gray rounded">
                          {activity.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Articles Tab */}
              {activeTab === 'articles' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-muted-gray">Manage articles created by this user</p>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-exploit-red/10 text-exploit-red rounded-lg text-sm hover:bg-exploit-red/20 transition-colors">
                      <FileText className="w-4 h-4" />
                      New Article
                    </button>
                  </div>
                  {mockArticles.map((article) => (
                    <div key={article.id} className="flex items-center gap-4 p-4 bg-void-black/30 rounded-lg hover:bg-steel-gray/10 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-blue-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-ghost-white truncate">{article.title}</p>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            article.status === 'published' 
                              ? 'bg-green-500/10 text-green-500' 
                              : 'bg-yellow-500/10 text-yellow-500'
                          }`}>
                            {article.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mt-1 text-xs text-muted-gray">
                          <span className="flex items-center gap-1">
                            <Tag className="w-3 h-3" />
                            {article.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {article.date}
                          </span>
                          {article.status === 'published' && (
                            <span className="flex items-center gap-1">
                              <Activity className="w-3 h-3" />
                              {article.views} views
                            </span>
                          )}
                        </div>
                      </div>
                      <button className="p-2 hover:bg-steel-gray/30 rounded-lg text-muted-gray hover:text-ghost-white">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Permissions Tab */}
              {activeTab === 'permissions' && (
                <div className="space-y-4">
                  <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-ghost-white">Role-Based Permissions</p>
                        <p className="text-sm text-muted-gray mt-1">
                          This user has the <span className="text-yellow-500">{userRoles.find(r => r.id === user.role)?.name}</span> role, 
                          which grants the following permissions:
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {user.permissions.map((permission, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-void-black/30 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-ghost-white">{permission}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-steel-gray/50">
                    <button className="flex items-center gap-2 px-4 py-2 bg-steel-gray/30 text-ghost-white rounded-lg text-sm hover:bg-steel-gray/50 transition-colors">
                      <Shield className="w-4 h-4" />
                      Manage Advanced Permissions
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
