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
  Download,
  ArrowRight,
  Filter,
  File,
  Eye,
  Clock,
  BookOpen,
  HardDrive
} from 'lucide-react';

interface PDFDocument {
  id: string;
  title: string;
  description: string;
  category: string;
  fileSize: string;
  pages: number;
  uploadDate: string;
  downloadCount: number;
  tags: string[];
  thumbnail?: string;
}

const pdfDocuments: PDFDocument[] = [
  {
    id: '1',
    title: 'VXRT 2024 Threat Landscape Report',
    description: 'Comprehensive analysis of emerging threats, attack trends, and defensive strategies for the year ahead.',
    category: 'Reports',
    fileSize: '12.4 MB',
    pages: 142,
    uploadDate: '2024-01-15',
    downloadCount: 3247,
    tags: ['Threat Intel', 'Annual Report', 'Trends']
  },
  {
    id: '2',
    title: 'Red Team Operations Playbook',
    description: 'Internal methodology guide for conducting adversary simulation exercises including TTPs and tools.',
    category: 'Playbooks',
    fileSize: '8.7 MB',
    pages: 89,
    uploadDate: '2024-02-01',
    downloadCount: 2156,
    tags: ['Red Team', 'Methodology', 'Internal']
  },
  {
    id: '3',
    title: 'Cloud Security Assessment Framework',
    description: 'Technical framework for evaluating AWS, Azure, and GCP environments against security benchmarks.',
    category: 'Frameworks',
    fileSize: '15.2 MB',
    pages: 112,
    uploadDate: '2024-01-28',
    downloadCount: 1893,
    tags: ['Cloud', 'Assessment', 'Framework']
  },
  {
    id: '4',
    title: 'Incident Response Procedures v3.0',
    description: 'Updated incident response procedures including playbooks for ransomware, data breaches, and APT incidents.',
    category: 'Procedures',
    fileSize: '6.3 MB',
    pages: 67,
    uploadDate: '2024-02-20',
    downloadCount: 4521,
    tags: ['IR', 'Procedures', 'Ransomware']
  },
  {
    id: '5',
    title: 'Penetration Testing Standards Guide',
    description: 'Industry-standard penetration testing methodology aligned with PTES and OWASP frameworks.',
    category: 'Guides',
    fileSize: '9.8 MB',
    pages: 95,
    uploadDate: '2024-01-10',
    downloadCount: 5623,
    tags: ['Pentest', 'Standards', 'OWASP']
  },
  {
    id: '6',
    title: 'Malware Analysis Handbook',
    description: 'Comprehensive guide to static and dynamic malware analysis techniques with real-world samples.',
    category: 'Handbooks',
    fileSize: '22.1 MB',
    pages: 178,
    uploadDate: '2024-03-05',
    downloadCount: 2847,
    tags: ['Malware', 'Reverse Engineering', 'Analysis']
  }
];

const categories = ['All', 'Reports', 'Playbooks', 'Frameworks', 'Procedures', 'Guides', 'Handbooks'];

export function PDFLibraryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPDFs = pdfDocuments.filter(pdf => {
    const matchesSearch = pdf.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pdf.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         pdf.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || pdf.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalSize = "45.5 GB";
  const totalDownloads = pdfDocuments.reduce((acc, pdf) => acc + pdf.downloadCount, 0);

  return (
    <div className="w-full bg-void-black min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <AnimatedGridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            badge="LIBRARY"
            title="PDF Library"
            description="85 technical documents, playbooks, and reference guides for offensive security operations."
          />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
          >
            {[
              { value: '85', label: 'Documents', icon: File },
              { value: totalSize, label: 'Total Size', icon: HardDrive },
              { value: totalDownloads.toLocaleString(), label: 'Downloads', icon: Download },
              { value: '6', label: 'Categories', icon: BookOpen }
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
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-gray" />
              <Input
                type="text"
                placeholder="Search documents by title, description, or tags..."
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
                  className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
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

      {/* PDF Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredPDFs.map((pdf, i) => (
              <motion.div
                key={pdf.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={`/resources/pdf/${pdf.id}`}>
                  <div className="bg-dark-base border border-steel-gray rounded-2xl p-6 hover:border-exploit-red/50 transition-all group h-full">
                    {/* Animated PDF Icon */}
                    <div className="relative w-16 h-20 mb-4 mx-auto">
                      <motion.div
                        className="absolute inset-0 bg-exploit-red/20 rounded-lg blur-lg"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-dark-base border-2 border-exploit-red/30 rounded-lg"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <FileText className="w-8 h-8 text-exploit-red" />
                      </motion.div>
                      <div className="absolute -bottom-1 -right-1 bg-exploit-red text-white text-xs px-2 py-0.5 rounded">
                        PDF
                      </div>
                    </div>

                    <Badge className="bg-steel-gray/50 text-muted-gray text-xs mb-2">
                      {pdf.category}
                    </Badge>

                    <h3 className="text-lg font-heading font-bold text-ghost-white mb-2 group-hover:text-exploit-red transition-colors line-clamp-2">
                      {pdf.title}
                    </h3>

                    <p className="text-sm text-muted-gray line-clamp-2 mb-4">
                      {pdf.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-gray pt-4 border-t border-steel-gray/30">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {pdf.pages} pages
                      </span>
                      <span>{pdf.fileSize}</span>
                      <span className="flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        {pdf.downloadCount.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex flex-wrap gap-1">
                        {pdf.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-[10px] text-muted-gray bg-void-black px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ArrowRight className="w-4 h-4 text-exploit-red opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPDFs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <File className="w-16 h-16 text-steel-gray mx-auto mb-4" />
              <h3 className="text-xl font-heading text-ghost-white mb-2">No documents found</h3>
              <p className="text-muted-gray">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

export default PDFLibraryPage;
