import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedGridBackground } from '../../components/shared/AnimatedGridBackground';
import { SectionHeading } from '../../components/shared/SectionHeading';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { 
  FileText, 
  Search, 
  Calendar, 
  User, 
  Download, 
  ArrowRight,
  Filter,
  BookOpen,
  ExternalLink,
  Clock
} from 'lucide-react';

interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  publishedDate: string;
  category: string;
  abstract: string;
  tags: string[];
  downloadCount: number;
  readTime: string;
  pdfUrl: string;
}

const researchPapers: ResearchPaper[] = [
  {
    id: '1',
    title: 'Advanced Persistent Threats in Cloud Infrastructure: A Comprehensive Analysis',
    authors: ['Dr. Sarah Chen', 'Marcus Rodriguez'],
    publishedDate: '2024-03-15',
    category: 'Cloud Security',
    abstract: 'This paper presents a detailed analysis of APT tactics targeting multi-cloud environments, with focus on lateral movement techniques and defense strategies.',
    tags: ['APT', 'Cloud', 'Lateral Movement', 'AWS', 'Azure'],
    downloadCount: 2847,
    readTime: '25 min',
    pdfUrl: '/papers/apt-cloud-infrastructure.pdf'
  },
  {
    id: '2',
    title: 'Zero-Day Exploitation in Modern Web Browsers: Chromium Architecture Analysis',
    authors: ['James Park', 'Dr. Elena Volkov'],
    publishedDate: '2024-02-28',
    category: 'Browser Security',
    abstract: 'An in-depth technical analysis of recent zero-day vulnerabilities in Chromium-based browsers, including sandbox escape techniques.',
    tags: ['Zero-Day', 'Browser', 'Chromium', 'Sandbox', 'RCE'],
    downloadCount: 3421,
    readTime: '32 min',
    pdfUrl: '/papers/chromium-zero-day.pdf'
  },
  {
    id: '3',
    title: 'Industrial Control Systems: Securing SCADA Networks Against State-Level Threats',
    authors: ['Michael Torres', 'Dr. Lisa Zhang'],
    publishedDate: '2024-01-20',
    category: 'ICS/OT Security',
    abstract: 'Comprehensive study of attack vectors targeting critical infrastructure SCADA systems and proposed defense frameworks.',
    tags: ['SCADA', 'ICS', 'Critical Infrastructure', 'OT Security'],
    downloadCount: 1923,
    readTime: '28 min',
    pdfUrl: '/papers/scada-security.pdf'
  },
  {
    id: '4',
    title: 'Machine Learning in Offensive Security: Automated Vulnerability Discovery',
    authors: ['Alex Kumar', 'Dr. Robert Hayes'],
    publishedDate: '2024-01-10',
    category: 'AI/ML Security',
    abstract: 'Exploration of machine learning techniques for automated vulnerability detection and exploit generation in modern applications.',
    tags: ['Machine Learning', 'AI', 'Automation', 'Vulnerability Discovery'],
    downloadCount: 4156,
    readTime: '35 min',
    pdfUrl: '/papers/ml-offensive-security.pdf'
  },
  {
    id: '5',
    title: 'Post-Quantum Cryptography: Preparing for the Quantum Threat',
    authors: ['Dr. Amanda Foster', 'David Kim'],
    publishedDate: '2023-12-15',
    category: 'Cryptography',
    abstract: 'Analysis of quantum computing threats to current cryptographic systems and migration strategies for post-quantum algorithms.',
    tags: ['Quantum', 'Cryptography', 'PQC', 'NIST', 'Encryption'],
    downloadCount: 2156,
    readTime: '30 min',
    pdfUrl: '/papers/post-quantum-crypto.pdf'
  },
  {
    id: '6',
    title: 'Kubernetes Security: Container Escape Techniques and Mitigations',
    authors: ['Chris Martinez', 'Dr. Sophia Lee'],
    publishedDate: '2023-11-22',
    category: 'Container Security',
    abstract: 'Technical deep-dive into container escape vulnerabilities in Kubernetes environments with practical exploitation scenarios.',
    tags: ['Kubernetes', 'Containers', 'Docker', 'Escape', 'CVE'],
    downloadCount: 3829,
    readTime: '27 min',
    pdfUrl: '/papers/kubernetes-security.pdf'
  }
];

const categories = ['All', 'Cloud Security', 'Browser Security', 'ICS/OT Security', 'AI/ML Security', 'Cryptography', 'Container Security'];

export function ResearchPapersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPapers = researchPapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full bg-void-black min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <AnimatedGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            badge="RESEARCH"
            title="Research Papers"
            description="142 peer-reviewed papers on cutting-edge offensive security research, vulnerability analysis, and threat intelligence."
          />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
          >
            {[
              { value: '142', label: 'Total Papers' },
              { value: '50+', label: 'Researchers' },
              { value: '15K+', label: 'Downloads' },
              { value: '28', label: 'This Month' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-4 text-center"
              >
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
                placeholder="Search papers by title, tags, or content..."
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
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
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

      {/* Papers Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {filteredPapers.map((paper, i) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/resources/research/${paper.id}`}>
                  <div className="bg-dark-base border border-steel-gray rounded-2xl p-6 hover:border-exploit-red/50 transition-all group h-full">
                    <div className="flex items-start gap-4">
                      {/* Animated Icon */}
                      <div className="relative w-14 h-14 shrink-0">
                        <motion.div
                          className="absolute inset-0 bg-exploit-red/20 rounded-xl blur-lg"
                          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.div
                          className="absolute inset-0 border-2 border-exploit-red/30 rounded-xl"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center"
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <FileText className="w-7 h-7 text-exploit-red" />
                        </motion.div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-exploit-red/10 text-exploit-red border-exploit-red/30 text-xs">
                            {paper.category}
                          </Badge>
                          <span className="text-xs text-muted-gray flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {paper.readTime}
                          </span>
                        </div>

                        <h3 className="text-lg font-heading font-bold text-ghost-white mb-2 group-hover:text-exploit-red transition-colors line-clamp-2">
                          {paper.title}
                        </h3>

                        <div className="flex items-center gap-4 text-sm text-muted-gray mb-3">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {paper.authors.join(', ')}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {paper.publishedDate}
                          </span>
                        </div>

                        <p className="text-sm text-muted-gray line-clamp-2 mb-4">
                          {paper.abstract}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {paper.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="text-xs text-muted-gray bg-void-black px-2 py-1 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="text-xs text-muted-gray flex items-center gap-1">
                              <Download className="w-4 h-4" />
                              {paper.downloadCount.toLocaleString()}
                            </span>
                            <ArrowRight className="w-5 h-5 text-exploit-red opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPapers.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <BookOpen className="w-16 h-16 text-steel-gray mx-auto mb-4" />
              <h3 className="text-xl font-heading text-ghost-white mb-2">No papers found</h3>
              <p className="text-muted-gray">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ResearchPapersPage;
