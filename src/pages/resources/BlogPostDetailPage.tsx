import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedGridBackground } from '../../components/shared/AnimatedGridBackground';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { 
  BookOpen,
  ArrowLeft, 
  Calendar, 
  User,
  Clock,
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  Twitter,
  Linkedin,
  Facebook,
  ArrowRight
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  authorBio: string;
  publishedDate: string;
  readTime: string;
  category: string;
  tags: string[];
  likes: number;
  comments: number;
  relatedPosts: string[];
}

const blogPosts: Record<string, BlogPost> = {
  '1': {
    id: '1',
    title: 'Breaking Down the Latest Ransomware Tactics: What You Need to Know',
    excerpt: 'An analysis of emerging ransomware techniques including double extortion, data auctioning, and supply chain compromise.',
    content: `
## The Evolution of Ransomware

Ransomware has evolved significantly over the past decade. What began as simple file-encryption malware has transformed into sophisticated, multi-stage attacks that can bring entire organizations to their knees.

### The Double Extortion Model

The most significant development in recent years is the "double extortion" technique. Attackers no longer simply encrypt files and demand ransom - they also exfiltrate sensitive data before encryption.

This approach gives criminals two leverage points:
1. The immediate operational impact of encrypted systems
2. The long-term reputational damage of data exposure

### Data Auctioning

Some threat actors have taken extortion further by establishing "data leak sites" where they auction stolen data to the highest bidder. This creates additional pressure on victims to pay quickly.

### Supply Chain Compromise

Recent attacks have demonstrated that ransomware groups are increasingly targeting managed service providers (MSPs) and software vendors to gain access to multiple organizations simultaneously.

## Defensive Recommendations

Organizations should implement:

- **Offline Backups**: Ensure critical data is backed up to isolated systems
- **Network Segmentation**: Limit lateral movement through proper segmentation
- **EDR Solutions**: Deploy endpoint detection and response tools
- **User Training**: Educate employees about phishing and social engineering

## Conclusion

The ransomware threat landscape continues to evolve. Organizations must adopt defense-in-depth strategies and maintain vigilance against these ever-changing threats.
    `,
    author: 'Dr. Sarah Chen',
    authorRole: 'Lead Threat Researcher',
    authorBio: 'Dr. Sarah Chen leads the Threat Intelligence team at VXRT, with over 15 years of experience in malware analysis and threat hunting.',
    publishedDate: '2024-03-20',
    readTime: '8 min',
    category: 'Ransomware',
    tags: ['Ransomware', 'Threat Intel', 'Analysis', 'Double Extortion'],
    likes: 234,
    comments: 18,
    relatedPosts: ['2', '3', '5']
  },
  '2': {
    id: '2',
    title: 'Kubernetes Security: 10 Common Misconfigurations to Avoid',
    excerpt: 'A practical guide to securing Kubernetes clusters.',
    content: 'Full content would be here...',
    author: 'Marcus Rodriguez',
    authorRole: 'Cloud Security Engineer',
    authorBio: 'Marcus specializes in cloud security and Kubernetes hardening.',
    publishedDate: '2024-03-18',
    readTime: '12 min',
    category: 'Cloud Security',
    tags: ['Kubernetes', 'Cloud', 'DevSecOps'],
    likes: 189,
    comments: 24,
    relatedPosts: ['1', '3']
  }
};

export function BlogPostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPosts[id] : null;

  if (!post) {
    return (
      <div className="w-full bg-void-black min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <BookOpen className="w-16 h-16 text-steel-gray mx-auto mb-4" />
          <h2 className="text-2xl font-heading font-bold text-ghost-white mb-2">Article Not Found</h2>
          <p className="text-muted-gray mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/resources/blog">
            <Button className="bg-exploit-red hover:bg-exploit-red/90">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full bg-void-black min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <AnimatedGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/resources/blog">
              <Button variant="ghost" className="text-muted-gray hover:text-ghost-white mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Security Blog
              </Button>
            </Link>

            <Badge className="bg-steel-gray/50 text-muted-gray mb-4">
              {post.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl font-heading font-bold text-ghost-white mb-6 max-w-4xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-gray mb-8">
              <span className="flex items-center gap-2">
                <div className="w-8 h-8 bg-exploit-red/20 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-exploit-red" />
                </div>
                <div>
                  <p className="text-ghost-white font-medium">{post.author}</p>
                  <p className="text-xs">{post.authorRole}</p>
                </div>
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.publishedDate}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} read
              </span>
              <span className="flex items-center gap-2">
                <ThumbsUp className="w-4 h-4" />
                {post.likes} likes
              </span>
            </div>

            {/* Share Buttons */}
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="border-steel-gray text-ghost-white hover:border-exploit-red">
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="border-steel-gray text-ghost-white hover:border-exploit-red">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="border-steel-gray text-ghost-white hover:border-exploit-red">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-steel-gray text-ghost-white hover:border-exploit-red">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-dark-base border border-steel-gray rounded-2xl p-8">
                {/* Article Content */}
                <div className="prose prose-invert max-w-none">
                  <div className="text-muted-gray leading-relaxed whitespace-pre-line">
                    {post.content}
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-steel-gray/30">
                  <h3 className="text-sm font-semibold text-ghost-white mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-void-black border border-steel-gray rounded-full text-sm text-muted-gray hover:border-exploit-red/50 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Engagement */}
                <div className="mt-8 pt-8 border-t border-steel-gray/30 flex items-center justify-between">
                  <Button className="bg-exploit-red hover:bg-exploit-red/90">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    Like this article
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-muted-gray">
                    <MessageSquare className="w-4 h-4" />
                    {post.comments} comments
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Author Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-6"
              >
                <h3 className="text-sm font-semibold text-ghost-white mb-4">About the Author</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-exploit-red/20 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-exploit-red" />
                  </div>
                  <div>
                    <p className="text-ghost-white font-medium">{post.author}</p>
                    <p className="text-xs text-muted-gray">{post.authorRole}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-gray">{post.authorBio}</p>
              </motion.div>

              {/* Related Posts */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-6"
              >
                <h3 className="text-sm font-semibold text-ghost-white mb-4">Related Articles</h3>
                <div className="space-y-3">
                  {post.relatedPosts.map((relatedId) => {
                    const related = blogPosts[relatedId];
                    if (!related) return null;
                    return (
                      <Link
                        key={relatedId}
                        to={`/resources/blog/${relatedId}`}
                        className="block group"
                      >
                        <div className="p-3 bg-void-black rounded-lg hover:border-exploit-red/30 border border-transparent transition-all">
                          <p className="text-sm text-ghost-white group-hover:text-exploit-red transition-colors line-clamp-2">
                            {related.title}
                          </p>
                          <p className="text-xs text-muted-gray mt-1">{related.category}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPostDetailPage;
