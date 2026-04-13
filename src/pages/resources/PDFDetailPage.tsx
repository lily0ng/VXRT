import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedGridBackground } from '../../components/shared/AnimatedGridBackground';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { 
  FileText,
  ArrowLeft, 
  Calendar, 
  Download,
  Share2,
  Eye,
  Clock,
  HardDrive,
  File,
  CheckCircle,
  ExternalLink,
  Printer,
  Bookmark
} from 'lucide-react';

interface PDFDocument {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  fileSize: string;
  pages: number;
  uploadDate: string;
  downloadCount: number;
  viewCount: number;
  tags: string[];
  author: string;
  tableOfContents: string[];
  relatedDocuments: string[];
  fileUrl: string;
}

const pdfDocuments: Record<string, PDFDocument> = {
  '1': {
    id: '1',
    title: 'VXRT 2024 Threat Landscape Report',
    description: 'Comprehensive analysis of emerging threats, attack trends, and defensive strategies for the year ahead.',
    fullDescription: 'The VXRT 2024 Threat Landscape Report provides an in-depth analysis of the current cybersecurity threat environment. Based on data from over 500 penetration tests, red team exercises, and incident response engagements conducted throughout 2023, this report identifies key threat trends and provides actionable recommendations for organizations.',
    category: 'Reports',
    fileSize: '12.4 MB',
    pages: 142,
    uploadDate: '2024-01-15',
    downloadCount: 3247,
    viewCount: 8932,
    tags: ['Threat Intel', 'Annual Report', 'Trends', 'APT', 'Ransomware'],
    author: 'VXRT Threat Intelligence Team',
    tableOfContents: [
      'Executive Summary',
      'Global Threat Landscape Overview',
      'APT Group Activity Analysis',
      'Ransomware Trends and Evolution',
      'Cloud Security Threats',
      'Supply Chain Attack Patterns',
      'Emerging Vulnerability Classes',
      'Industry-Specific Threat Analysis',
      'Defensive Recommendations',
      'Appendix: IOC Collections'
    ],
    relatedDocuments: ['2', '3', '5'],
    fileUrl: '/documents/vxrt-threat-landscape-2024.pdf'
  },
  '2': {
    id: '2',
    title: 'Red Team Operations Playbook',
    description: 'Internal methodology guide for conducting adversary simulation exercises.',
    fullDescription: 'This comprehensive playbook documents VXRT\'s red team methodologies, tools, and procedures for conducting advanced adversary simulation exercises.',
    category: 'Playbooks',
    fileSize: '8.7 MB',
    pages: 89,
    uploadDate: '2024-02-01',
    downloadCount: 2156,
    viewCount: 5432,
    tags: ['Red Team', 'Methodology', 'Internal', 'Adversary Simulation'],
    author: 'VXRT Red Team Unit',
    tableOfContents: ['Introduction', 'Pre-Engagement', 'Reconnaissance', 'Initial Access', 'Persistence'],
    relatedDocuments: ['1', '4'],
    fileUrl: '/documents/red-team-playbook.pdf'
  }
};

export function PDFDetailPage() {
  const { id } = useParams<{ id: string }>();
  const pdf = id ? pdfDocuments[id] : null;

  if (!pdf) {
    return (
      <div className="w-full bg-void-black min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <File className="w-16 h-16 text-steel-gray mx-auto mb-4" />
          <h2 className="text-2xl font-heading font-bold text-ghost-white mb-2">Document Not Found</h2>
          <p className="text-muted-gray mb-6">The PDF document you're looking for doesn't exist.</p>
          <Link to="/resources/pdf">
            <Button className="bg-exploit-red hover:bg-exploit-red/90">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Library
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
            <Link to="/resources/pdf">
              <Button variant="ghost" className="text-muted-gray hover:text-ghost-white mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to PDF Library
              </Button>
            </Link>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* PDF Preview Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative w-32 h-40 shrink-0 mx-auto md:mx-0"
              >
                <div className="absolute inset-0 bg-exploit-red/20 rounded-lg blur-xl" />
                <div className="absolute inset-0 bg-dark-base border-2 border-exploit-red/30 rounded-lg flex items-center justify-center">
                  <FileText className="w-16 h-16 text-exploit-red" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-exploit-red text-white text-sm px-3 py-1 rounded">
                  PDF
                </div>
              </motion.div>

              <div className="flex-1">
                <Badge className="bg-steel-gray/50 text-muted-gray mb-4">
                  {pdf.category}
                </Badge>

                <h1 className="text-3xl md:text-4xl font-heading font-bold text-ghost-white mb-4">
                  {pdf.title}
                </h1>

                <p className="text-lg text-muted-gray mb-6">
                  {pdf.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-gray mb-8">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {pdf.uploadDate}
                  </span>
                  <span className="flex items-center gap-2">
                    <HardDrive className="w-4 h-4" />
                    {pdf.fileSize}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {pdf.pages} pages
                  </span>
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    {pdf.downloadCount.toLocaleString()} downloads
                  </span>
                  <span className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    {pdf.viewCount.toLocaleString()} views
                  </span>
                </div>

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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-dark-base border border-steel-gray rounded-2xl p-6"
              >
                <h2 className="text-xl font-heading font-bold text-ghost-white mb-4">About this Document</h2>
                <p className="text-muted-gray leading-relaxed">
                  {pdf.fullDescription}
                </p>

                <div className="mt-6 pt-6 border-t border-steel-gray/30">
                  <p className="text-sm text-muted-gray mb-2">Author</p>
                  <p className="text-ghost-white font-medium">{pdf.author}</p>
                </div>
              </motion.div>

              {/* Table of Contents */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-dark-base border border-steel-gray rounded-2xl p-6"
              >
                <h2 className="text-xl font-heading font-bold text-ghost-white mb-4">Table of Contents</h2>
                <div className="space-y-2">
                  {pdf.tableOfContents.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 hover:bg-void-black rounded-lg transition-colors cursor-pointer">
                      <span className="text-sm text-muted-gray w-6">{i + 1}.</span>
                      <span className="text-sm text-ghost-white">{item}</span>
                    </div>
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
                  {pdf.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-void-black border border-steel-gray rounded-full text-xs text-muted-gray hover:border-exploit-red/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* File Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-dark-base border border-steel-gray rounded-xl p-6"
              >
                <h3 className="text-sm font-semibold text-ghost-white mb-4">File Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-gray">Format</span>
                    <span className="text-ghost-white">PDF</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-gray">Size</span>
                    <span className="text-ghost-white">{pdf.fileSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-gray">Pages</span>
                    <span className="text-ghost-white">{pdf.pages}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-gray">Uploaded</span>
                    <span className="text-ghost-white">{pdf.uploadDate}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PDFDetailPage;
