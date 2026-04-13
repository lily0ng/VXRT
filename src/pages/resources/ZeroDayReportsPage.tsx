import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedGridBackground } from '../../components/shared/AnimatedGridBackground';
import { SectionHeading } from '../../components/shared/SectionHeading';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { 
  AlertTriangle, 
  Search, 
  Calendar, 
  Shield,
  ArrowRight,
  Filter,
  Eye,
  Lock,
  Unlock,
  Clock,
  FileWarning,
  Target,
  Zap,
  Bug
} from 'lucide-react';

interface ZeroDayReport {
  id: string;
  title: string;
  vendor: string;
  product: string;
  severity: 'Critical' | 'High' | 'Medium';
  status: 'Active' | 'Patched' | 'Under Review';
  discoveryDate: string;
  disclosureDate?: string;
  cveId?: string;
  attackVector: string;
  impact: string;
  description: string;
  affectedVersions: string[];
  tags: string[];
  vxrtVerified: boolean;
}

const zeroDayReports: ZeroDayReport[] = [
  {
    id: '1',
    title: 'Critical RCE in Enterprise VPN Appliance',
    vendor: 'Palo Alto Networks',
    product: 'GlobalProtect',
    severity: 'Critical',
    status: 'Active',
    discoveryDate: '2024-03-10',
    attackVector: 'Network - Unauthenticated',
    impact: 'Remote Code Execution, Data Exfiltration',
    description: 'A pre-auth command injection vulnerability in the GlobalProtect portal allows unauthenticated attackers to execute arbitrary code with root privileges.',
    affectedVersions: ['GlobalProtect < 6.2.1', 'PAN-OS < 11.1.0'],
    tags: ['RCE', 'VPN', 'Command Injection', 'Pre-auth'],
    vxrtVerified: true
  },
  {
    id: '2',
    title: 'Privilege Escalation in Container Runtime',
    vendor: 'Docker',
    product: 'Docker Engine',
    severity: 'High',
    status: 'Patched',
    discoveryDate: '2024-02-15',
    disclosureDate: '2024-02-28',
    cveId: 'CVE-2024-24557',
    attackVector: 'Local - Low Privilege',
    impact: 'Container Escape, Host Access',
    description: 'A race condition in Docker Engine allows attackers with container access to escape to the host and gain root privileges.',
    affectedVersions: ['Docker Engine < 25.0.2', 'docker-ce < 5:25.0.2'],
    tags: ['Container Escape', 'Race Condition', 'Privilege Escalation'],
    vxrtVerified: true
  },
  {
    id: '3',
    title: 'SSRF in Cloud Management Console',
    vendor: 'AWS',
    product: 'Systems Manager',
    severity: 'High',
    status: 'Patched',
    discoveryDate: '2024-01-20',
    disclosureDate: '2024-02-05',
    attackVector: 'Network - Authenticated',
    impact: 'Metadata Service Access, Credential Theft',
    description: 'Server-Side Request Forgery vulnerability in AWS Systems Manager agent allows attackers to access EC2 instance metadata service.',
    affectedVersions: ['SSM Agent < 3.2.0.0'],
    tags: ['SSRF', 'AWS', 'Metadata', 'Cloud'],
    vxrtVerified: true
  },
  {
    id: '4',
    title: 'Memory Corruption in Web Browser Engine',
    vendor: 'Google',
    product: 'Chromium V8',
    severity: 'Critical',
    status: 'Under Review',
    discoveryDate: '2024-03-05',
    attackVector: 'Network - User Interaction',
    impact: 'Sandbox Escape, RCE',
    description: 'Type confusion vulnerability in V8 JavaScript engine leading to out-of-bounds memory access and potential sandbox escape.',
    affectedVersions: ['Chrome < 122.0.6261.94', 'Edge < 122.0.2365.63'],
    tags: ['V8', 'Type Confusion', 'Memory Corruption', 'Browser'],
    vxrtVerified: false
  },
  {
    id: '5',
    title: 'Authentication Bypass in Identity Provider',
    vendor: 'Okta',
    product: 'Identity Cloud',
    severity: 'Critical',
    status: 'Patched',
    discoveryDate: '2024-01-10',
    disclosureDate: '2024-01-18',
    cveId: 'CVE-2024-20225',
    attackVector: 'Network - Unauthenticated',
    impact: 'Account Takeover, Data Access',
    description: 'Logic flaw in authentication flow allows attackers to bypass MFA and gain access to any user account.',
    affectedVersions: ['Okta Identity Cloud < 2024.01.0'],
    tags: ['Auth Bypass', 'MFA Bypass', 'Logic Flaw', 'IdP'],
    vxrtVerified: true
  },
  {
    id: '6',
    title: 'SQL Injection in Database Management Tool',
    vendor: 'phpMyAdmin',
    product: 'phpMyAdmin',
    severity: 'High',
    status: 'Active',
    discoveryDate: '2024-02-28',
    attackVector: 'Network - Authenticated',
    impact: 'Data Breach, Database Compromise',
    description: 'Blind SQL injection vulnerability in the SQL query execution feature allows authenticated users to extract arbitrary data.',
    affectedVersions: ['phpMyAdmin < 5.2.2', 'phpMyAdmin 4.9.13'],
    tags: ['SQL Injection', 'Database', 'Data Extraction'],
    vxrtVerified: true
  }
];

const statuses = ['All', 'Active', 'Patched', 'Under Review'];
const severities = ['All', 'Critical', 'High', 'Medium'];

const severityColors = {
  'Critical': 'bg-red-500/20 text-red-500 border-red-500/50',
  'High': 'bg-orange-500/20 text-orange-500 border-orange-500/50',
  'Medium': 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50'
};

const statusColors = {
  'Active': 'bg-red-500/20 text-red-500',
  'Patched': 'bg-green-500/20 text-green-500',
  'Under Review': 'bg-yellow-500/20 text-yellow-500'
};

export function ZeroDayReportsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedSeverity, setSelectedSeverity] = useState('All');

  const filteredReports = zeroDayReports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         report.vendor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         report.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         report.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = selectedStatus === 'All' || report.status === selectedStatus;
    const matchesSeverity = selectedSeverity === 'All' || report.severity === selectedSeverity;
    return matchesSearch && matchesStatus && matchesSeverity;
  });

  const activeCount = zeroDayReports.filter(r => r.status === 'Active').length;
  const criticalCount = zeroDayReports.filter(r => r.severity === 'Critical').length;
  const verifiedCount = zeroDayReports.filter(r => r.vxrtVerified).length;

  return (
    <div className="w-full bg-void-black min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <AnimatedGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            badge="ZERO-DAY"
            title="Zero-Day Reports"
            description="28 active zero-day vulnerabilities discovered by VXRT researchers, complete with technical analysis and exploitation guidance."
          />

          {/* Alert Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-exploit-red/10 border border-exploit-red/30 rounded-xl p-4 mb-8 max-w-4xl mx-auto flex items-start gap-3"
          >
            <AlertTriangle className="w-5 h-5 text-exploit-red shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-ghost-white font-semibold">Responsible Disclosure Policy</p>
              <p className="text-sm text-muted-gray">
                All zero-day vulnerabilities are reported to vendors following responsible disclosure practices. 
                Active vulnerabilities are shared with affected customers under NDA before public disclosure.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { value: '28', label: 'Active Reports', icon: AlertTriangle, color: 'text-red-500' },
              { value: criticalCount.toString(), label: 'Critical Severity', icon: Zap, color: 'text-orange-500' },
              { value: verifiedCount.toString(), label: 'VXRT Verified', icon: Shield, color: 'text-green-500' },
              { value: '12', label: 'This Quarter', icon: Clock, color: 'text-exploit-red' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-4 text-center"
              >
                <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                <p className={`text-2xl font-heading font-bold ${stat.color}`}>{stat.value}</p>
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
                placeholder="Search by vendor, product, or vulnerability type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-dark-base border-steel-gray text-ghost-white placeholder:text-muted-gray w-full"
              />
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              {/* Status Filter */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                <Filter className="w-5 h-5 text-muted-gray shrink-0" />
                <span className="text-sm text-muted-gray shrink-0">Status:</span>
                {statuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-all ${
                      selectedStatus === status
                        ? 'bg-exploit-red text-white'
                        : 'bg-dark-base border border-steel-gray text-muted-gray hover:text-ghost-white'
                    }`}
                  >
                    {status}
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

      {/* Reports Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 max-w-5xl mx-auto">
            {filteredReports.map((report, i) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={`/resources/zero-day/${report.id}`}>
                  <div className="bg-dark-base border border-steel-gray rounded-xl p-6 hover:border-exploit-red/50 transition-all group">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      {/* Severity Badge */}
                      <div className="shrink-0">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border ${severityColors[report.severity]}`}>
                          <Zap className="w-4 h-4" />
                          <span className="font-bold">{report.severity}</span>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <Badge className={`${statusColors[report.status]}`}>
                            {report.status === 'Active' && <Unlock className="w-3 h-3 mr-1" />}
                            {report.status === 'Patched' && <Lock className="w-3 h-3 mr-1" />}
                            {report.status === 'Under Review' && <Clock className="w-3 h-3 mr-1" />}
                            {report.status}
                          </Badge>
                          
                          {report.vxrtVerified && (
                            <Badge className="bg-exploit-red/20 text-exploit-red border-exploit-red/30">
                              <Shield className="w-3 h-3 mr-1" />
                              VXRT Verified
                            </Badge>
                          )}

                          {report.cveId && (
                            <code className="text-xs font-mono text-muted-gray bg-void-black px-2 py-1 rounded">
                              {report.cveId}
                            </code>
                          )}
                        </div>

                        <h3 className="text-lg font-heading font-bold text-ghost-white mb-2 group-hover:text-exploit-red transition-colors">
                          {report.title}
                        </h3>

                        <div className="flex items-center gap-4 text-sm text-muted-gray mb-3">
                          <span className="font-medium text-ghost-white">{report.vendor}</span>
                          <span>/</span>
                          <span>{report.product}</span>
                        </div>

                        <p className="text-sm text-muted-gray line-clamp-2 mb-3">
                          {report.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <span className="text-muted-gray flex items-center gap-1">
                            <Target className="w-4 h-4" />
                            {report.attackVector}
                          </span>
                          <span className="text-muted-gray flex items-center gap-1">
                            <Bug className="w-4 h-4" />
                            {report.impact}
                          </span>
                          <span className="text-muted-gray flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Discovered: {report.discoveryDate}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-3">
                          {report.tags.map((tag) => (
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

          {filteredReports.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <FileWarning className="w-16 h-16 text-steel-gray mx-auto mb-4" />
              <h3 className="text-xl font-heading text-ghost-white mb-2">No reports found</h3>
              <p className="text-muted-gray">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ZeroDayReportsPage;
