import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedGridBackground } from '../../components/shared/AnimatedGridBackground';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { 
  Wrench,
  ArrowLeft, 
  Download,
  Github,
  Star,
  Code,
  Terminal,
  ExternalLink,
  Copy,
  Check,
  Clock,
  Package,
  FileCode,
  GitFork,
  BookOpen,
  Shield,
  Cpu
} from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  category: string;
  language: string;
  downloads: number;
  stars: number;
  forks: number;
  version: string;
  lastUpdated: string;
  tags: string[];
  features: string[];
  installation: string;
  usage: string;
  requirements: string[];
  githubUrl: string;
  documentationUrl: string;
  license: string;
  relatedTools: string[];
}

const tools: Record<string, Tool> = {
  '1': {
    id: '1',
    name: 'VXRT-Scanner',
    description: 'Advanced network vulnerability scanner with custom exploit modules and automated reporting.',
    fullDescription: 'VXRT-Scanner is an enterprise-grade network vulnerability scanner designed for comprehensive security assessments. It combines fast port scanning with intelligent vulnerability detection and automated exploitation capabilities.',
    category: 'Scanner',
    language: 'Python',
    downloads: 12456,
    stars: 892,
    forks: 234,
    version: '3.2.1',
    lastUpdated: '2024-03-15',
    tags: ['Network', 'Vulnerability', 'Automation', 'Nmap', 'Metasploit'],
    features: [
      'High-speed port scanning with SYN stealth mode',
      '3000+ vulnerability detection modules',
      'Integrated exploit framework with 200+ verified exploits',
      'Automated PDF and HTML reporting',
      'REST API for CI/CD integration',
      'Custom plugin system',
      'Distributed scanning support'
    ],
    installation: `git clone https://github.com/vxrt/vxrt-scanner.git
cd vxrt-scanner
pip install -r requirements.txt
python setup.py install`,
    usage: `# Basic scan
vxrt-scan -t target.com

# Full scan with exploits
vxrt-scan -t target.com --full --exploit

# Custom port range
vxrt-scan -t target.com -p 1-65535

# Output formats
vxrt-scan -t target.com -o report.pdf`,
    requirements: ['Python 3.8+', 'Nmap 7.80+', 'Masscan (optional)', 'Root privileges'],
    githubUrl: 'https://github.com/vxrt/vxrt-scanner',
    documentationUrl: 'https://docs.vxrt.dev/scanner',
    license: 'MIT',
    relatedTools: ['2', '3', '5']
  },
  '2': {
    id: '2',
    name: 'PayloadForge',
    description: 'Payload generation framework for penetration testing.',
    fullDescription: 'PayloadForge is a modern payload generation framework built for red team operations and penetration testing.',
    category: 'Payload Generator',
    language: 'Go',
    downloads: 8932,
    stars: 634,
    forks: 123,
    version: '2.1.0',
    lastUpdated: '2024-03-10',
    tags: ['Payload', 'Encoder', 'Evasion'],
    features: ['Multi-format payload generation', 'AV evasion techniques', 'Custom encoding'],
    installation: 'go install github.com/vxrt/payload-forge@latest',
    usage: 'payloadforge -f exe -p windows/x64/shell_reverse_tcp',
    requirements: ['Go 1.21+', 'mingw-w64 (Windows payloads)'],
    githubUrl: 'https://github.com/vxrt/payload-forge',
    documentationUrl: 'https://docs.vxrt.dev/payloadforge',
    license: 'GPL-3.0',
    relatedTools: ['1', '4']
  }
};

const languageColors: Record<string, string> = {
  'Python': 'bg-blue-500/20 text-blue-500',
  'Go': 'bg-cyan-500/20 text-cyan-500',
  'PowerShell': 'bg-blue-400/20 text-blue-400',
  'Rust': 'bg-orange-500/20 text-orange-500',
  'JavaScript': 'bg-yellow-500/20 text-yellow-500'
};

export function ToolDetailPage() {
  const { id } = useParams<{ id: string }>();
  const tool = id ? tools[id] : null;

  if (!tool) {
    return (
      <div className="w-full bg-void-black min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Wrench className="w-16 h-16 text-steel-gray mx-auto mb-4" />
          <h2 className="text-2xl font-heading font-bold text-ghost-white mb-2">Tool Not Found</h2>
          <p className="text-muted-gray mb-6">The tool you're looking for doesn't exist.</p>
          <Link to="/resources/tools">
            <Button className="bg-exploit-red hover:bg-exploit-red/90">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tools
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
            <Link to="/resources/tools">
              <Button variant="ghost" className="text-muted-gray hover:text-ghost-white mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Tools
              </Button>
            </Link>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Tool Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative w-24 h-24 shrink-0 mx-auto md:mx-0"
              >
                <div className="absolute inset-0 bg-exploit-red/20 rounded-2xl blur-xl" />
                <div className="absolute inset-0 bg-dark-base border-2 border-exploit-red/30 rounded-2xl flex items-center justify-center">
                  <Terminal className="w-12 h-12 text-exploit-red" />
                </div>
              </motion.div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                  <Badge className={`${languageColors[tool.language]}`}>
                    {tool.language}
                  </Badge>
                  <Badge className="bg-steel-gray/50 text-muted-gray">
                    {tool.category}
                  </Badge>
                  <span className="text-sm text-muted-gray">v{tool.version}</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-heading font-bold text-ghost-white mb-4">
                  {tool.name}
                </h1>

                <p className="text-lg text-muted-gray mb-6">
                  {tool.description}
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-muted-gray mb-8">
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    {tool.downloads.toLocaleString()} downloads
                  </span>
                  <span className="flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    {tool.stars} stars
                  </span>
                  <span className="flex items-center gap-2">
                    <GitFork className="w-4 h-4" />
                    {tool.forks} forks
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Updated {tool.lastUpdated}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <a href={tool.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-exploit-red hover:bg-exploit-red/90">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                  </a>
                  <a href={tool.documentationUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-steel-gray text-ghost-white hover:border-exploit-red">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Documentation
                    </Button>
                  </a>
                  <Button variant="outline" className="border-steel-gray text-ghost-white hover:border-exploit-red">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* About */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-dark-base border border-steel-gray rounded-2xl p-6"
              >
                <h2 className="text-xl font-heading font-bold text-ghost-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-exploit-red" />
                  About
                </h2>
                <p className="text-muted-gray leading-relaxed">
                  {tool.fullDescription}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-dark-base border border-steel-gray rounded-2xl p-6"
              >
                <h2 className="text-xl font-heading font-bold text-ghost-white mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-exploit-red" />
                  Features
                </h2>
                <ul className="space-y-3">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-gray">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Installation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-dark-base border border-steel-gray rounded-2xl overflow-hidden"
              >
                <div className="flex items-center justify-between px-6 py-4 border-b border-steel-gray">
                  <h2 className="text-xl font-heading font-bold text-ghost-white flex items-center gap-2">
                    <Package className="w-5 h-5 text-exploit-red" />
                    Installation
                  </h2>
                  <Button variant="outline" size="sm" className="border-steel-gray text-muted-gray">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                </div>
                <div className="p-6 overflow-x-auto">
                  <pre className="text-sm font-mono text-muted-gray">
                    <code>{tool.installation}</code>
                  </pre>
                </div>
              </motion.div>

              {/* Usage */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-dark-base border border-steel-gray rounded-2xl overflow-hidden"
              >
                <div className="flex items-center justify-between px-6 py-4 border-b border-steel-gray">
                  <h2 className="text-xl font-heading font-bold text-ghost-white flex items-center gap-2">
                    <Terminal className="w-5 h-5 text-exploit-red" />
                    Usage Examples
                  </h2>
                  <Button variant="outline" size="sm" className="border-steel-gray text-muted-gray">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                </div>
                <div className="p-6 overflow-x-auto">
                  <pre className="text-sm font-mono text-muted-gray">
                    <code>{tool.usage}</code>
                  </pre>
                </div>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-dark-base border border-steel-gray rounded-2xl p-6"
              >
                <h2 className="text-xl font-heading font-bold text-ghost-white mb-4">Requirements</h2>
                <div className="flex flex-wrap gap-2">
                  {tool.requirements.map((req, i) => (
                    <span key={i} className="px-3 py-1 bg-void-black border border-steel-gray rounded-full text-sm text-muted-gray">
                      {req}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-6"
              >
                <h3 className="text-sm font-semibold text-ghost-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-void-black border border-steel-gray rounded-full text-xs text-muted-gray hover:border-exploit-red/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* License */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-6"
              >
                <h3 className="text-sm font-semibold text-ghost-white mb-4">License</h3>
                <p className="text-sm text-muted-gray">{tool.license}</p>
              </motion.div>

              {/* Links */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-6"
              >
                <h3 className="text-sm font-semibold text-ghost-white mb-4">Links</h3>
                <div className="space-y-3">
                  <a
                    href={tool.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-gray hover:text-exploit-red transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub Repository
                  </a>
                  <a
                    href={tool.documentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-gray hover:text-exploit-red transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    Documentation
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ToolDetailPage;
