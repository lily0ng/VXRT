import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedGridBackground } from '../../components/shared/AnimatedGridBackground';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { 
  FileText, 
  ArrowLeft, 
  Calendar, 
  User, 
  Download, 
  Share2,
  BookOpen,
  Clock,
  Eye,
  Quote,
  Bookmark,
  Printer,
  ExternalLink,
  CheckCircle
} from 'lucide-react';

interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  publishedDate: string;
  category: string;
  abstract: string;
  fullContent: string;
  tags: string[];
  downloadCount: number;
  viewCount: number;
  readTime: string;
  citations: number;
  pdfUrl: string;
  relatedPapers: string[];
}

const researchPapers: Record<string, ResearchPaper> = {
  '1': {
    id: '1',
    title: 'Advanced Persistent Threats in Cloud Infrastructure: A Comprehensive Analysis',
    authors: ['Dr. Sarah Chen', 'Marcus Rodriguez'],
    publishedDate: '2024-03-15',
    category: 'Cloud Security',
    abstract: 'This paper presents a detailed analysis of APT tactics targeting multi-cloud environments, with focus on lateral movement techniques and defense strategies.',
    fullContent: `
## Executive Summary

Cloud infrastructure has become the primary target for advanced persistent threat (APT) actors seeking to compromise enterprise data and establish long-term presence within organizational networks. This comprehensive study analyzes 127 documented APT incidents targeting cloud environments across AWS, Azure, and GCP platforms between 2022-2024.

## Introduction

The migration to cloud infrastructure has fundamentally altered the attack surface available to threat actors. Traditional perimeter-based security models prove insufficient in distributed cloud environments where resources span multiple regions and service models.

## Key Findings

### 1. Lateral Movement Techniques

APT actors have developed sophisticated methods for moving between cloud tenants and services:

- **Cross-Account Role Assumption**: 68% of incidents involved compromised IAM credentials used to assume roles across organizational boundaries
- **Metadata Service Exploitation**: SSRF vulnerabilities in cloud metadata services enabled token theft in 43% of cases
- **Serverless Function Abuse**: Lambda/Azure Functions used as pivot points for privilege escalation

### 2. Persistence Mechanisms

Threat actors maintain access through:

- **Shadow Admin Accounts**: Creation of backup administrative accounts in separate cloud regions
- **Malicious Infrastructure as Code**: Terraform/CloudFormation templates with embedded backdoors
- **Container Registry Poisoning**: Compromised base images deployed across CI/CD pipelines

### 3. Data Exfiltration Patterns

Analysis reveals three primary exfiltration methods:

1. **Direct API Extraction**: Using compromised service accounts to access S3 Buckets, Blob Storage
2. **Covert Channel Communication**: DNS tunneling and HTTPS blending for C2 communications
3. **Snapshot Sharing**: Cross-account snapshot sharing for stealthy data duplication

## Defense Recommendations

### Immediate Actions

- Implement service control policies (SCPs) restricting cross-account access
- Enable CloudTrail/Activity Log monitoring with anomaly detection
- Deploy network segmentation between cloud accounts using VPC peering controls

### Strategic Initiatives

- Adopt zero-trust architecture for cloud resource access
- Implement continuous compliance monitoring with automated remediation
- Establish threat hunting programs focused on cloud-native indicators of compromise

## Conclusion

APT threats to cloud infrastructure require a paradigm shift in defensive strategy. Organizations must move beyond traditional perimeter defense to implement continuous monitoring, least-privilege access, and automated response capabilities.

## References

1. AWS Security Incident Response Guide (2024)
2. MITRE ATT&CK Cloud Matrix v13
3. NIST SP 800-144: Guidelines on Security and Privacy in Public Cloud Computing
    `,
    tags: ['APT', 'Cloud', 'Lateral Movement', 'AWS', 'Azure', 'IAM', 'Security'],
    downloadCount: 2847,
    viewCount: 8932,
    readTime: '25 min',
    citations: 156,
    pdfUrl: '/papers/apt-cloud-infrastructure.pdf',
    relatedPapers: ['2', '6', '4']
  },
  '2': {
    id: '2',
    title: 'Zero-Day Exploitation in Modern Web Browsers: Chromium Architecture Analysis',
    authors: ['James Park', 'Dr. Elena Volkov'],
    publishedDate: '2024-02-28',
    category: 'Browser Security',
    abstract: 'An in-depth technical analysis of recent zero-day vulnerabilities in Chromium-based browsers, including sandbox escape techniques.',
    fullContent: 'Full paper content would be here...',
    tags: ['Zero-Day', 'Browser', 'Chromium', 'Sandbox', 'RCE', 'V8'],
    downloadCount: 3421,
    viewCount: 10234,
    readTime: '32 min',
    citations: 203,
    pdfUrl: '/papers/chromium-zero-day.pdf',
    relatedPapers: ['1', '5']
  }
};

export function ResearchPaperDetailPage() {
  const { id } = useParams<{ id: string }>();
  const paper = id ? researchPapers[id] : null;

  if (!paper) {
    return (
      <div className="w-full bg-void-black min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <FileText className="w-16 h-16 text-steel-gray mx-auto mb-4" />
          <h2 className="text-2xl font-heading font-bold text-ghost-white mb-2">Paper Not Found</h2>
          <p className="text-muted-gray mb-6">The research paper you're looking for doesn't exist.</p>
          <Link to="/resources/research">
            <Button className="bg-exploit-red hover:bg-exploit-red/90">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Papers
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
            <Link to="/resources/research">
              <Button variant="ghost" className="text-muted-gray hover:text-ghost-white mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Research Papers
              </Button>
            </Link>

            <Badge className="bg-exploit-red/10 text-exploit-red border-exploit-red/30 mb-4">
              {paper.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl font-heading font-bold text-ghost-white mb-6 max-w-4xl">
              {paper.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-gray mb-8">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {paper.authors.join(', ')}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {paper.publishedDate}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {paper.readTime} read
              </span>
              <span className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                {paper.viewCount.toLocaleString()} views
              </span>
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                {paper.downloadCount.toLocaleString()} downloads
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button className="bg-exploit-red hover:bg-exploit-red/90">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" className="border-steel-gray text-ghost-white hover:border-exploit-red">
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" className="border-steel-gray text-ghost-white hover:border-exploit-red">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" className="border-steel-gray text-ghost-white hover:border-exploit-red">
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-dark-base border border-steel-gray rounded-2xl p-8">
                {/* Abstract */}
                <div className="mb-8 pb-8 border-b border-steel-gray/30">
                  <h2 className="text-xl font-heading font-bold text-ghost-white mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-exploit-red" />
                    Abstract
                  </h2>
                  <p className="text-muted-gray leading-relaxed text-lg">
                    {paper.abstract}
                  </p>
                </div>

                {/* Full Content */}
                <div className="prose prose-invert max-w-none">
                  <div className="text-muted-gray leading-relaxed whitespace-pre-line">
                    {paper.fullContent}
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-steel-gray/30">
                  <h3 className="text-sm font-semibold text-ghost-white mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-void-black border border-steel-gray rounded-full text-sm text-muted-gray hover:border-exploit-red/50 hover:text-exploit-red transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Citation */}
                <div className="mt-8 p-4 bg-exploit-red/5 border border-exploit-red/20 rounded-xl">
                  <h3 className="text-sm font-semibold text-ghost-white mb-2 flex items-center gap-2">
                    <Quote className="w-4 h-4 text-exploit-red" />
                    Cite this paper
                  </h3>
                  <p className="text-sm text-muted-gray font-mono">
                    {paper.authors.join(', ')}. "{paper.title}." VXRT Research, {paper.publishedDate}.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Stats Card */}
              <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
                <h3 className="text-sm font-semibold text-ghost-white mb-4">Paper Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-gray">Citations</span>
                    <span className="text-lg font-bold text-exploit-red">{paper.citations}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-gray">Downloads</span>
                    <span className="text-lg font-bold text-ghost-white">{paper.downloadCount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-gray">Views</span>
                    <span className="text-lg font-bold text-ghost-white">{paper.viewCount.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Authors Card */}
              <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
                <h3 className="text-sm font-semibold text-ghost-white mb-4">Authors</h3>
                <div className="space-y-3">
                  {paper.authors.map((author) => (
                    <div key={author} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-exploit-red/10 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-exploit-red" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-ghost-white">{author}</p>
                        <p className="text-xs text-muted-gray">VXRT Research Team</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Papers */}
              <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
                <h3 className="text-sm font-semibold text-ghost-white mb-4">Related Papers</h3>
                <div className="space-y-3">
                  {paper.relatedPapers.map((relatedId) => {
                    const related = researchPapers[relatedId];
                    if (!related) return null;
                    return (
                      <Link
                        key={relatedId}
                        to={`/resources/research/${relatedId}`}
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
              </div>

              {/* DOI */}
              <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
                <h3 className="text-sm font-semibold text-ghost-white mb-2">DOI</h3>
                <code className="text-xs text-muted-gray block break-all">
                  10.2595/vxrt.{paper.id}.{paper.publishedDate.replace(/-/g, '')}
                </code>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResearchPaperDetailPage;
