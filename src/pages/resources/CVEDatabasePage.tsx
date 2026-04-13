import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedGridBackground } from '../../components/shared/AnimatedGridBackground';
import { SectionHeading } from '../../components/shared/SectionHeading';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { 
  Database, 
  Search, 
  Calendar, 
  Shield,
  ArrowRight,
  Filter,
  AlertTriangle,
  Bug,
  Lock,
  Server,
  Globe,
  Terminal,
  Cpu
} from 'lucide-react';

interface CVEEntry {
  id: string;
  cveId: string;
  title: string;
  description: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  cvssScore: number;
  publishedDate: string;
  affectedProducts: string[];
  category: string;
  exploitAvailable: boolean;
  patchAvailable: boolean;
  tags: string[];
}

const cveEntries: CVEEntry[] = [
  {
    id: '1',
    cveId: 'CVE-2024-21626',
    title: 'runc Container Escape via /proc Handling',
    description: 'A vulnerability in runc that allows container escape through file descriptor mishandling in /proc/self/exe, enabling attackers to gain host-level access.',
    severity: 'Critical',
    cvssScore: 9.8,
    publishedDate: '2024-01-31',
    affectedProducts: ['runc <= 1.1.11', 'Docker', 'containerd'],
    category: 'Container',
    exploitAvailable: true,
    patchAvailable: true,
    tags: ['Container Escape', 'runc', 'Docker', 'Privilege Escalation']
  },
  {
    id: '2',
    cveId: 'CVE-2024-21413',
    title: 'Microsoft Outlook Remote Code Execution',
    description: 'Microsoft Outlook contains a vulnerability in the handling of hyperlinks that allows remote code execution without user interaction.',
    severity: 'Critical',
    cvssScore: 9.8,
    publishedDate: '2024-02-13',
    affectedProducts: ['Microsoft Outlook 2016', 'Microsoft 365 Apps', 'Office 2021'],
    category: 'Email Client',
    exploitAvailable: true,
    patchAvailable: true,
    tags: ['RCE', 'Outlook', 'MonikerLink', 'Microsoft']
  },
  {
    id: '3',
    cveId: 'CVE-2024-21762',
    title: 'Fortinet FortiOS SSL VPN Buffer Overflow',
    description: 'A heap-based buffer overflow in Fortinet FortiOS SSL VPN component allows remote attackers to execute arbitrary code via crafted requests.',
    severity: 'Critical',
    cvssScore: 9.6,
    publishedDate: '2024-02-08',
    affectedProducts: ['FortiOS 7.4.0 - 7.4.2', 'FortiOS 7.2.0 - 7.2.6'],
    category: 'Network Security',
    exploitAvailable: true,
    patchAvailable: true,
    tags: ['VPN', 'Fortinet', 'Buffer Overflow', 'SSL VPN']
  },
  {
    id: '4',
    cveId: 'CVE-2024-23334',
    title: 'Node.js Path Traversal in serve-static',
    description: 'The serve-static middleware for Node.js is vulnerable to path traversal attacks, allowing attackers to read arbitrary files.',
    severity: 'High',
    cvssScore: 7.5,
    publishedDate: '2024-01-16',
    affectedProducts: ['serve-static < 1.15.0', 'Node.js 18.x', 'Node.js 20.x'],
    category: 'Web Framework',
    exploitAvailable: true,
    patchAvailable: true,
    tags: ['Path Traversal', 'Node.js', 'Web Server', 'File Disclosure']
  },
  {
    id: '5',
    cveId: 'CVE-2024-23897',
    title: 'Jenkins Arbitrary File Read via CLI',
    description: 'Jenkins CLI allows attackers with Overall/Read permission to read arbitrary files on the Jenkins controller file system.',
    severity: 'High',
    cvssScore: 7.5,
    publishedDate: '2024-01-24',
    affectedProducts: ['Jenkins <= 2.441', 'Jenkins LTS <= 2.426.3'],
    category: 'CI/CD',
    exploitAvailable: true,
    patchAvailable: true,
    tags: ['Jenkins', 'File Read', 'CLI', 'Arbitrary File Access']
  },
  {
    id: '6',
    cveId: 'CVE-2024-21645',
    title: 'Kubernetes kube-apiserver Privilege Escalation',
    description: 'A vulnerability in Kubernetes kube-apiserver allows authenticated users to escalate privileges through crafted requests.',
    severity: 'High',
    cvssScore: 8.8,
    publishedDate: '2024-01-18',
    affectedProducts: ['Kubernetes <= 1.28.5', 'Kubernetes 1.27.x', 'Kubernetes 1.26.x'],
    category: 'Container Orchestration',
    exploitAvailable: false,
    patchAvailable: true,
    tags: ['Kubernetes', 'Privilege Escalation', 'API Server', 'Auth Bypass']
  }
];

const categories = ['All', 'Container', 'Email Client', 'Network Security', 'Web Framework', 'CI/CD', 'Container Orchestration'];
const severities = ['All', 'Critical', 'High', 'Medium', 'Low'];

const severityColors = {
  'Critical': 'bg-red-500/20 text-red-500 border-red-500/50',
  'High': 'bg-orange-500/20 text-orange-500 border-orange-500/50',
  'Medium': 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50',
  'Low': 'bg-blue-500/20 text-blue-500 border-blue-500/50'
};

export function CVEDatabasePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSeverity, setSelectedSeverity] = useState('All');

  const filteredCVEs = cveEntries.filter(cve => {
    const matchesSearch = cve.cveId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cve.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cve.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cve.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || cve.category === selectedCategory;
    const matchesSeverity = selectedSeverity === 'All' || cve.severity === selectedSeverity;
    return matchesSearch && matchesCategory && matchesSeverity;
  });

  const criticalCount = cveEntries.filter(c => c.severity === 'Critical').length;
  const highCount = cveEntries.filter(c => c.severity === 'High').length;
  const withExploitCount = cveEntries.filter(c => c.exploitAvailable).length;

  return (
    <div className="w-full bg-void-black min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <AnimatedGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            badge="VULNERABILITIES"
            title="CVE Database"
            description="500+ curated vulnerability entries with CVSS scores, exploit availability, and detailed technical analysis."
          />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
          >
            {[
              { value: '500+', label: 'Total CVEs', icon: Database },
              { value: criticalCount.toString(), label: 'Critical', icon: AlertTriangle, color: 'text-red-500' },
              { value: highCount.toString(), label: 'High Severity', icon: Shield, color: 'text-orange-500' },
              { value: withExploitCount.toString(), label: 'With Exploits', icon: Bug, color: 'text-exploit-red' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-4 text-center"
              >
                <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color || 'text-exploit-red'}`} />
                <p className={`text-2xl font-heading font-bold ${stat.color || 'text-exploit-red'}`}>{stat.value}</p>
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
                placeholder="Search CVE ID, title, description, or tags..."
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

              {/* Severity Filter */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                <span className="text-sm text-muted-gray shrink-0">Severity:</span>
                {severities.map((severity) => (
                  <button
                    key={severity}
                    onClick={() => setSelectedSeverity(severity)}
                    className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-all ${
                      selectedSeverity === severity
                        ? 'bg-exploit-red text-white'
                        : 'bg-dark-base border border-steel-gray text-muted-gray hover:text-ghost-white'
                    }`}
                  >
                    {severity}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CVE Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 max-w-5xl mx-auto">
            {filteredCVEs.map((cve, i) => (
              <motion.div
                key={cve.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={`/resources/cve/${cve.id}`}>
                  <div className="bg-dark-base border border-steel-gray rounded-xl p-6 hover:border-exploit-red/50 transition-all group">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      {/* Severity Badge */}
                      <div className="shrink-0">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border ${severityColors[cve.severity]}`}>
                          <AlertTriangle className="w-4 h-4" />
                          <span className="font-bold">{cve.cvssScore}</span>
                          <span className="text-xs uppercase">{cve.severity}</span>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <code className="text-sm font-mono text-exploit-red bg-exploit-red/10 px-2 py-1 rounded">
                            {cve.cveId}
                          </code>
                          <Badge variant="outline" className="border-steel-gray text-muted-gray text-xs">
                            {cve.category}
                          </Badge>
                          {cve.exploitAvailable && (
                            <Badge className="bg-green-500/20 text-green-500 border-green-500/30 text-xs">
                              <Bug className="w-3 h-3 mr-1" />
                              Exploit Available
                            </Badge>
                          )}
                        </div>

                        <h3 className="text-lg font-heading font-bold text-ghost-white mb-2 group-hover:text-exploit-red transition-colors">
                          {cve.title}
                        </h3>

                        <p className="text-sm text-muted-gray line-clamp-2 mb-3">
                          {cve.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <span className="text-muted-gray flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {cve.publishedDate}
                          </span>
                          
                          <div className="flex items-center gap-1 text-muted-gray">
                            <Server className="w-4 h-4" />
                            <span className="truncate max-w-[200px]">
                              {cve.affectedProducts.slice(0, 2).join(', ')}
                              {cve.affectedProducts.length > 2 && '...'}
                            </span>
                          </div>

                          {cve.patchAvailable ? (
                            <span className="text-green-500 flex items-center gap-1">
                              <Lock className="w-4 h-4" />
                              Patched
                            </span>
                          ) : (
                            <span className="text-orange-500 flex items-center gap-1">
                              <AlertTriangle className="w-4 h-4" />
                              Unpatched
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-2 mt-3">
                          {cve.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-muted-gray bg-void-black px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <ArrowRight className="w-5 h-5 text-exploit-red opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredCVEs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Database className="w-16 h-16 text-steel-gray mx-auto mb-4" />
              <h3 className="text-xl font-heading text-ghost-white mb-2">No CVEs found</h3>
              <p className="text-muted-gray">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

export default CVEDatabasePage;
