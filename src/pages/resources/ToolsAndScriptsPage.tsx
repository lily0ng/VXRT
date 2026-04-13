import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedGridBackground } from '../../components/shared/AnimatedGridBackground';
import { SectionHeading } from '../../components/shared/SectionHeading';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { 
  Wrench, 
  Search, 
  Download,
  ArrowRight,
  Filter,
  Github,
  Star,
  Code,
  Terminal,
  Package,
  Zap,
  Shield,
  Globe,
  Cpu,
  FileCode,
  GitFork
} from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  language: string;
  downloads: number;
  stars: number;
  version: string;
  lastUpdated: string;
  tags: string[];
  githubUrl?: string;
  documentationUrl?: string;
}

const tools: Tool[] = [
  {
    id: '1',
    name: 'VXRT-Scanner',
    description: 'Advanced network vulnerability scanner with custom exploit modules and automated reporting.',
    category: 'Scanner',
    language: 'Python',
    downloads: 12456,
    stars: 892,
    version: '3.2.1',
    lastUpdated: '2024-03-15',
    tags: ['Network', 'Vulnerability', 'Automation'],
    githubUrl: 'https://github.com/vxrt/vxrt-scanner'
  },
  {
    id: '2',
    name: 'PayloadForge',
    description: 'Payload generation framework for penetration testing with encoding and evasion techniques.',
    category: 'Payload Generator',
    language: 'Go',
    downloads: 8932,
    stars: 634,
    version: '2.1.0',
    lastUpdated: '2024-03-10',
    tags: ['Payload', 'Encoder', 'Evasion'],
    githubUrl: 'https://github.com/vxrt/payload-forge'
  },
  {
    id: '3',
    name: 'CloudSniper',
    description: 'Cloud security assessment tool for AWS, Azure, and GCP with automated remediation suggestions.',
    category: 'Cloud Security',
    language: 'Python',
    downloads: 6789,
    stars: 521,
    version: '1.5.2',
    lastUpdated: '2024-03-08',
    tags: ['Cloud', 'AWS', 'Azure', 'GCP'],
    githubUrl: 'https://github.com/vxrt/cloud-sniper'
  },
  {
    id: '4',
    name: 'AD-Recon',
    description: 'Active Directory reconnaissance and enumeration toolkit with stealth capabilities.',
    category: 'Active Directory',
    language: 'PowerShell',
    downloads: 15432,
    stars: 1203,
    version: '4.0.1',
    lastUpdated: '2024-03-12',
    tags: ['AD', 'Reconnaissance', 'Windows'],
    githubUrl: 'https://github.com/vxrt/ad-recon'
  },
  {
    id: '5',
    name: 'WebExploit-Kit',
    description: 'Web application exploitation framework with modules for common vulnerabilities.',
    category: 'Web Security',
    language: 'Python',
    downloads: 9876,
    stars: 745,
    version: '2.3.0',
    lastUpdated: '2024-03-05',
    tags: ['Web', 'Exploitation', 'OWASP'],
    githubUrl: 'https://github.com/vxrt/web-exploit-kit'
  },
  {
    id: '6',
    name: 'MalwareLab',
    description: 'Malware analysis automation platform with sandbox integration and IOC extraction.',
    category: 'Malware Analysis',
    language: 'Python',
    downloads: 4321,
    stars: 398,
    version: '1.2.0',
    lastUpdated: '2024-02-28',
    tags: ['Malware', 'Analysis', 'Sandbox'],
    githubUrl: 'https://github.com/vxrt/malware-lab'
  }
];

const categories = ['All', 'Scanner', 'Payload Generator', 'Cloud Security', 'Active Directory', 'Web Security', 'Malware Analysis'];
const languages = ['All', 'Python', 'Go', 'PowerShell', 'Rust', 'JavaScript'];

const languageColors: Record<string, string> = {
  'Python': 'bg-blue-500/20 text-blue-500',
  'Go': 'bg-cyan-500/20 text-cyan-500',
  'PowerShell': 'bg-blue-400/20 text-blue-400',
  'Rust': 'bg-orange-500/20 text-orange-500',
  'JavaScript': 'bg-yellow-500/20 text-yellow-500'
};

export function ToolsAndScriptsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    const matchesLanguage = selectedLanguage === 'All' || tool.language === selectedLanguage;
    return matchesSearch && matchesCategory && matchesLanguage;
  });

  const totalDownloads = tools.reduce((acc, tool) => acc + tool.downloads, 0);
  const totalStars = tools.reduce((acc, tool) => acc + tool.stars, 0);

  return (
    <div className="w-full bg-void-black min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <AnimatedGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            badge="TOOLS"
            title="Tools & Scripts"
            description="45 open-source security tools developed by VXRT researchers for penetration testing, red teaming, and defensive operations."
          />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
          >
            {[
              { value: '45', label: 'Tools', icon: Wrench },
              { value: totalDownloads.toLocaleString(), label: 'Downloads', icon: Download },
              { value: totalStars.toLocaleString(), label: 'GitHub Stars', icon: Star },
              { value: '12', label: 'Languages', icon: Code }
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
          <div className="flex flex-col gap-4 max-w-5xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-gray" />
              <Input
                type="text"
                placeholder="Search tools by name, description, or functionality..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-dark-base border-steel-gray text-ghost-white placeholder:text-muted-gray w-full"
              />
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              {/* Category Filter */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                <Filter className="w-5 h-5 text-muted-gray shrink-0" />
                <span className="text-sm text-muted-gray shrink-0">Category:</span>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-all ${
                      selectedCategory === category
                        ? 'bg-exploit-red text-white'
                        : 'bg-dark-base border border-steel-gray text-muted-gray hover:text-ghost-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Language Filter */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                <Code className="w-5 h-5 text-muted-gray shrink-0" />
                <span className="text-sm text-muted-gray shrink-0">Language:</span>
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-all ${
                      selectedLanguage === lang
                        ? 'bg-exploit-red text-white'
                        : 'bg-dark-base border border-steel-gray text-muted-gray hover:text-ghost-white'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredTools.map((tool, i) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={`/resources/tools/${tool.id}`}>
                  <div className="bg-dark-base border border-steel-gray rounded-2xl p-6 hover:border-exploit-red/50 transition-all group h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="relative w-12 h-12">
                        <motion.div
                          className="absolute inset-0 bg-exploit-red/20 rounded-xl blur-lg"
                          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-void-black border-2 border-exploit-red/30 rounded-xl">
                          <Terminal className="w-6 h-6 text-exploit-red" />
                        </div>
                      </div>
                      <Badge className={`${languageColors[tool.language]} text-xs`}>
                        {tool.language}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-ghost-white mb-2 group-hover:text-exploit-red transition-colors">
                      {tool.name}
                    </h3>

                    <p className="text-sm text-muted-gray mb-4 line-clamp-2">
                      {tool.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-muted-gray mb-4">
                      <span className="bg-steel-gray/30 px-2 py-1 rounded">{tool.category}</span>
                      <span>v{tool.version}</span>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-steel-gray/30">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1 text-muted-gray">
                          <Download className="w-4 h-4" />
                          {tool.downloads.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1 text-muted-gray">
                          <Star className="w-4 h-4" />
                          {tool.stars}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-exploit-red opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mt-4">
                      {tool.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] text-muted-gray bg-void-black px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Wrench className="w-16 h-16 text-steel-gray mx-auto mb-4" />
              <h3 className="text-xl font-heading text-ghost-white mb-2">No tools found</h3>
              <p className="text-muted-gray">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ToolsAndScriptsPage;
