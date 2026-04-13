import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedGridBackground } from '../../components/shared/AnimatedGridBackground';
import { SectionHeading } from '../../components/shared/SectionHeading';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { 
  BookOpen, 
  Search, 
  Calendar, 
  User,
  Clock,
  ArrowRight,
  Filter,
  Tag,
  TrendingUp,
  MessageSquare,
  ThumbsUp
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishedDate: string;
  readTime: string;
  category: string;
  tags: string[];
  likes: number;
  comments: number;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Breaking Down the Latest Ransomware Tactics: What You Need to Know',
    excerpt: 'An analysis of emerging ransomware techniques including double extortion, data auctioning, and supply chain compromise.',
    content: 'Full content here...',
    author: 'Dr. Sarah Chen',
    authorRole: 'Lead Threat Researcher',
    publishedDate: '2024-03-20',
    readTime: '8 min',
    category: 'Ransomware',
    tags: ['Ransomware', 'Threat Intel', 'Analysis'],
    likes: 234,
    comments: 18,
    featured: true
  },
  {
    id: '2',
    title: 'Kubernetes Security: 10 Common Misconfigurations to Avoid',
    excerpt: 'A practical guide to securing Kubernetes clusters, covering RBAC, network policies, and secrets management.',
    content: 'Full content here...',
    author: 'Marcus Rodriguez',
    authorRole: 'Cloud Security Engineer',
    publishedDate: '2024-03-18',
    readTime: '12 min',
    category: 'Cloud Security',
    tags: ['Kubernetes', 'Cloud', 'DevSecOps'],
    likes: 189,
    comments: 24
  },
  {
    id: '3',
    title: 'Zero Trust Architecture: Implementation Lessons Learned',
    excerpt: 'Real-world insights from implementing zero trust networks in enterprise environments.',
    content: 'Full content here...',
    author: 'Alex Kumar',
    authorRole: 'Senior Security Architect',
    publishedDate: '2024-03-15',
    readTime: '15 min',
    category: 'Architecture',
    tags: ['Zero Trust', 'Architecture', 'Enterprise'],
    likes: 156,
    comments: 12
  },
  {
    id: '4',
    title: 'Exploiting LLM APIs: A New Attack Surface',
    excerpt: 'How attackers are leveraging AI models to bypass security controls and extract sensitive data.',
    content: 'Full content here...',
    author: 'James Park',
    authorRole: 'AI Security Researcher',
    publishedDate: '4-03-12',
    readTime: '10 min',
    category: 'AI/ML',
    tags: ['AI', 'LLM', 'API Security', 'Prompt Injection'],
    likes: 312,
    comments: 45,
    featured: true
  },
  {
    id: '5',
    title: 'The Art of Active Directory Enumeration',
    excerpt: 'Advanced techniques for mapping AD environments without triggering security alerts.',
    content: 'Full content here...',
    author: 'Elena Volkov',
    authorRole: 'Red Team Operator',
    publishedDate: '2024-03-10',
    readTime: '20 min',
    category: 'Active Directory',
    tags: ['AD', 'Enumeration', 'Red Team'],
    likes: 278,
    comments: 31
  },
  {
    id: '6',
    title: 'Building a Detection Engineering Program',
    excerpt: 'Step-by-step guide to establishing a detection engineering practice in your SOC.',
    content: 'Full content here...',
    author: 'Michael Torres',
    authorRole: 'Detection Engineer',
    publishedDate: '2024-03-08',
    readTime: '14 min',
    category: 'Blue Team',
    tags: ['Detection', 'SOC', 'Engineering'],
    likes: 145,
    comments: 8
  }
];

const categories = ['All', 'Ransomware', 'Cloud Security', 'Architecture', 'AI/ML', 'Active Directory', 'Blue Team'];

export function SecurityBlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured);

  return (
    <div className="w-full bg-void-black min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <AnimatedGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            badge="BLOG"
            title="Security Blog"
            description="200+ articles on offensive security, threat intelligence, and defensive strategies from VXRT researchers."
          />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
          >
            {[
              { value: '200+', label: 'Articles', icon: BookOpen },
              { value: '50+', label: 'Authors', icon: User },
              { value: '15K+', label: 'Monthly Views', icon: TrendingUp },
              { value: '2.3K', label: 'Comments', icon: MessageSquare }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-4 text-center"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-exploit-red" />
                <p className="text-2xl font-heading font-bold text-exploit-red">{stat.value}</p>
                <p className="text-sm text-muted-gray">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 border-t border-steel-gray/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-gray" />
              <Input
                type="text"
                placeholder="Search articles by title, content, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-dark-base border-steel-gray text-ghost-white placeholder:text-muted-gray w-full"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="w-5 h-5 text-muted-gray shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-exploit-red text-white'
                      : 'bg-dark-base border border-steel-gray text-muted-gray hover:text-ghost-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-heading font-bold text-ghost-white mb-6 max-w-6xl mx-auto flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-exploit-red" />
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {featuredPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={`/resources/blog/${post.id}`}>
                    <div className="bg-dark-base border border-steel-gray rounded-2xl p-6 hover:border-exploit-red/50 transition-all group">
                      <Badge className="bg-exploit-red/20 text-exploit-red border-exploit-red/30 mb-3">
                        Featured
                      </Badge>
                      <h3 className="text-xl font-heading font-bold text-ghost-white mb-3 group-hover:text-exploit-red transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-gray mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-gray">
                        <span className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {post.publishedDate}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-heading font-bold text-ghost-white mb-6 max-w-6xl mx-auto">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {regularPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={`/resources/blog/${post.id}`}>
                  <div className="bg-dark-base border border-steel-gray rounded-2xl p-6 hover:border-exploit-red/50 transition-all group h-full flex flex-col">
                    <Badge className="bg-steel-gray/50 text-muted-gray text-xs mb-3 self-start">
                      {post.category}
                    </Badge>

                    <h3 className="text-lg font-heading font-bold text-ghost-white mb-3 group-hover:text-exploit-red transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-gray mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-gray pt-4 border-t border-steel-gray/30">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="w-3 h-3" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          {post.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <BookOpen className="w-16 h-16 text-steel-gray mx-auto mb-4" />
              <h3 className="text-xl font-heading text-ghost-white mb-2">No articles found</h3>
              <p className="text-muted-gray">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

export default SecurityBlogPage;
