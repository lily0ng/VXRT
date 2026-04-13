import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedGridBackground } from '../components/shared/AnimatedGridBackground';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  ArrowLeft, 
  Github, 
  Linkedin, 
  Twitter, 
  Globe, 
  Mail, 
  MapPin, 
  Calendar,
  Award,
  Target,
  Shield,
  Zap,
  Clock,
  FileText,
  Bug,
  Terminal,
  ExternalLink,
  Share2,
  MessageSquare,
  ThumbsUp,
  CheckCircle,
  Star,
  Trophy
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  handle: string;
  role: string;
  department: string;
  bio: string;
  avatar: string;
  location: string;
  joinedDate: string;
  email: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  certifications: string[];
  skills: string[];
  achievements: {
    value: string;
    label: string;
  }[];
  expertise: string[];
  recentActivity: {
    type: 'cve' | 'report' | 'tool' | 'cert';
    title: string;
    date: string;
  }[];
  stats: {
    engagements: number;
    vulnsFound: number;
    reports: number;
    tools: number;
  };
}

const teamMembers: Record<string, TeamMember> = {
  'sarah-chen': {
    id: '1',
    name: 'Sarah Chen',
    handle: 'sarahchen',
    role: 'Head of Red Team Ops',
    department: 'Offensive Operations',
    bio: 'Sarah leads the red team operations unit with over 8 years of experience in adversary simulation and advanced persistent threat (APT) emulation. She specializes in cloud infrastructure attacks and has discovered critical vulnerabilities in Fortune 500 companies.',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=3b82f6&color=fff',
    location: 'San Francisco, CA',
    joinedDate: '2019-03-15',
    email: 'sarah.chen@vxrt.io',
    social: {
      github: 'https://github.com/sarahchen',
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen'
    },
    certifications: ['OSCP', 'OSWE', 'CRTO', 'CCIE', 'AWS-SA'],
    skills: ['Red Teaming', 'Cloud Security', 'Infrastructure', 'Python', 'Go', 'AWS', 'Azure'],
    achievements: [
      { value: '150+', label: 'Red Team Engagements' },
      { value: '45', label: 'Critical Findings' },
      { value: '12', label: 'Hall of Fames' },
      { value: '8', label: 'Years Experience' }
    ],
    expertise: ['Cloud Infrastructure', 'Container Escape', 'Kubernetes Security', 'AWS/Azure'],
    recentActivity: [
      { type: 'cve', title: 'CVE-2024-2156 - AWS EKS Privilege Escalation', date: '2024-03-10' },
      { type: 'report', title: 'Fortune 50 Cloud Infrastructure Assessment', date: '2024-02-28' },
      { type: 'tool', title: 'CloudSniper v2.0 Release', date: '2024-02-15' },
      { type: 'cert', title: 'AWS Solutions Architect Pro', date: '2024-01-20' }
    ],
    stats: {
      engagements: 156,
      vulnsFound: 342,
      reports: 89,
      tools: 12
    }
  },
  'marcus-webb': {
    id: '2',
    name: 'Marcus Webb',
    handle: 'mwebb',
    role: 'Lead Exploit Developer',
    department: 'Research & Development',
    bio: 'Marcus is an elite exploit developer with expertise in Windows kernel internals and browser security. He has developed zero-day exploits for multiple APT groups and contributes to exploit mitigation research.',
    avatar: 'https://ui-avatars.com/api/?name=Marcus+Webb&background=ef4444&color=fff',
    location: 'London, UK',
    joinedDate: '2020-01-10',
    email: 'marcus.webb@vxrt.io',
    social: {
      github: 'https://github.com/mwebb',
      twitter: 'https://twitter.com/mwebb_sec'
    },
    certifications: ['OSCE', 'OSWE', 'OSEP', 'CRTO', 'GXPN'],
    skills: ['Exploit Dev', 'Windows Internals', 'Browser Security', 'C++', 'Rust', 'Assembly'],
    achievements: [
      { value: '25', label: 'Zero-Days Developed' },
      { value: '40+', label: 'Exploits Published' },
      { value: '15', label: 'CVEs Assigned' },
      { value: '6', label: 'Years Experience' }
    ],
    expertise: ['Kernel Exploits', 'Browser RCE', 'Sandbox Escape', 'ROP Chains'],
    recentActivity: [
      { type: 'cve', title: 'Chrome V8 Type Confusion RCE', date: '2024-03-05' },
      { type: 'tool', title: 'PayloadForge v3.0', date: '2024-02-20' },
      { type: 'report', title: 'Windows 11 Kernel Security Analysis', date: '2024-01-15' }
    ],
    stats: {
      engagements: 89,
      vulnsFound: 156,
      reports: 67,
      tools: 8
    }
  },
  'yuki-tanaka': {
    id: '3',
    name: 'Yuki Tanaka',
    handle: 'yukitanaka',
    role: 'Cloud Security Researcher',
    department: 'Cloud Security',
    bio: 'Yuki specializes in cloud-native security with a focus on Kubernetes, container orchestration, and multi-cloud environments. She has discovered critical vulnerabilities in major cloud platforms.',
    avatar: 'https://ui-avatars.com/api/?name=Yuki+Tanaka&background=a855f7&color=fff',
    location: 'Tokyo, Japan',
    joinedDate: '2021-06-20',
    email: 'yuki.tanaka@vxrt.io',
    social: {
      github: 'https://github.com/yukitanaka',
      linkedin: 'https://linkedin.com/in/yukitanaka'
    },
    certifications: ['CKA', 'CKAD', 'AWS-SA', 'AZ-104', 'CCSP'],
    skills: ['Kubernetes', 'Container Security', 'Terraform', 'Go', 'Python', 'AWS', 'GCP'],
    achievements: [
      { value: '80+', label: 'Cloud Audits' },
      { value: '30', label: 'K8s Escapes' },
      { value: '10', label: 'Cloud CVEs' },
      { value: '5', label: 'Years Experience' }
    ],
    expertise: ['Kubernetes Security', 'Container Escape', 'IaC Security', 'Cloud Architecture'],
    recentActivity: [
      { type: 'cve', title: 'CVE-2024-21626 - runc Container Escape', date: '2024-02-28' },
      { type: 'report', title: 'Multi-Cloud Security Assessment', date: '2024-02-10' },
      { type: 'tool', title: 'KubeHunter Enhanced', date: '2024-01-25' }
    ],
    stats: {
      engagements: 124,
      vulnsFound: 267,
      reports: 45,
      tools: 6
    }
  }
};

const activityIcons = {
  cve: Bug,
  report: FileText,
  tool: Terminal,
  cert: Award
};

const activityColors = {
  cve: 'bg-red-500/20 text-red-500',
  report: 'bg-blue-500/20 text-blue-500',
  tool: 'bg-green-500/20 text-green-500',
  cert: 'bg-yellow-500/20 text-yellow-500'
};

export function TeamMemberDetailPage() {
  const { id } = useParams<{ id: string }>();
  const member = id ? teamMembers[id] : null;

  if (!member) {
    return (
      <div className="w-full bg-void-black min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Shield className="w-16 h-16 text-steel-gray mx-auto mb-4" />
          <h2 className="text-2xl font-heading font-bold text-ghost-white mb-2">Member Not Found</h2>
          <p className="text-muted-gray mb-6">The team member you're looking for doesn't exist.</p>
          <Link to="/team">
            <Button className="bg-exploit-red hover:bg-exploit-red/90">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Team
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
            <Link to="/team">
              <Button variant="ghost" className="text-muted-gray hover:text-ghost-white mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Team
              </Button>
            </Link>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative shrink-0 mx-auto md:mx-0"
              >
                <div className="relative w-36 h-36 md:w-44 md:h-44">
                  {/* Animated rings */}
                  <motion.div
                    className="absolute inset-0 border-2 border-exploit-red/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-2 border border-exploit-red/20 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Avatar */}
                  <div className="absolute inset-3 rounded-full overflow-hidden border-2 border-exploit-red shadow-lg shadow-exploit-red/20">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Status dot */}
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-void-black flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CheckCircle className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Info Section */}
              <div className="flex-1 text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
                    <Badge className="bg-exploit-red/20 text-exploit-red border-exploit-red/30">
                      {member.department}
                    </Badge>
                    <Badge variant="outline" className="border-steel-gray text-muted-gray">
                      {member.role}
                    </Badge>
                  </div>

                  <h1 className="text-3xl md:text-4xl font-heading font-bold text-ghost-white mb-2">
                    {member.name}
                  </h1>
                  <p className="text-exploit-red font-mono text-sm mb-4">@{member.handle}</p>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-gray mb-6">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {member.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Joined {member.joinedDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {member.email}
                    </span>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                    {member.social.github && (
                      <motion.a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-dark-base border border-steel-gray rounded-lg flex items-center justify-center text-muted-gray hover:text-exploit-red hover:border-exploit-red/50 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {member.social.linkedin && (
                      <motion.a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-dark-base border border-steel-gray rounded-lg flex items-center justify-center text-muted-gray hover:text-blue-500 hover:border-blue-500/50 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                    )}
                    {member.social.twitter && (
                      <motion.a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-dark-base border border-steel-gray rounded-lg flex items-center justify-center text-muted-gray hover:text-sky-500 hover:border-sky-500/50 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.a>
                    )}
                    {member.social.website && (
                      <motion.a
                        href={member.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-dark-base border border-steel-gray rounded-lg flex items-center justify-center text-muted-gray hover:text-green-500 hover:border-green-500/50 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Globe className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <Button className="bg-exploit-red hover:bg-exploit-red/90">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="outline" className="border-steel-gray text-ghost-white hover:border-exploit-red">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Profile
                    </Button>
                  </div>
                </motion.div>
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
              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-dark-base border border-steel-gray rounded-2xl p-6"
              >
                <h2 className="text-xl font-heading font-bold text-ghost-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-exploit-red" />
                  About
                </h2>
                <p className="text-muted-gray leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>

              {/* Expertise */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-dark-base border border-steel-gray rounded-2xl p-6"
              >
                <h2 className="text-xl font-heading font-bold text-ghost-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-exploit-red" />
                  Areas of Expertise
                </h2>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((area, i) => (
                    <motion.span
                      key={area}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.05 }}
                      className="px-4 py-2 bg-exploit-red/10 border border-exploit-red/30 rounded-lg text-sm text-ghost-white hover:bg-exploit-red/20 transition-colors cursor-default"
                    >
                      {area}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-dark-base border border-steel-gray rounded-2xl p-6"
              >
                <h2 className="text-xl font-heading font-bold text-ghost-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-exploit-red" />
                  Skills & Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-void-black border border-steel-gray rounded-lg text-xs text-muted-gray hover:border-exploit-red/50 hover:text-ghost-white transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Recent Activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-dark-base border border-steel-gray rounded-2xl p-6"
              >
                <h2 className="text-xl font-heading font-bold text-ghost-white mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-exploit-red" />
                  Recent Activity
                </h2>
                <div className="space-y-3">
                  {member.recentActivity.map((activity, i) => {
                    const Icon = activityIcons[activity.type];
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className="flex items-center gap-4 p-3 bg-void-black rounded-lg hover:bg-void-black/80 transition-colors group cursor-pointer"
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${activityColors[activity.type]}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-ghost-white group-hover:text-exploit-red transition-colors">{activity.title}</p>
                          <p className="text-xs text-muted-text">{activity.date}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-text opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-dark-base border border-steel-gray rounded-2xl p-6"
              >
                <h3 className="text-sm font-semibold text-ghost-white mb-4">Performance Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-void-black rounded-lg">
                    <p className="text-2xl font-heading font-bold text-exploit-red">{member.stats.engagements}</p>
                    <p className="text-xs text-muted-text">Engagements</p>
                  </div>
                  <div className="text-center p-3 bg-void-black rounded-lg">
                    <p className="text-2xl font-heading font-bold text-exploit-red">{member.stats.vulnsFound}</p>
                    <p className="text-xs text-muted-text">Vulns Found</p>
                  </div>
                  <div className="text-center p-3 bg-void-black rounded-lg">
                    <p className="text-2xl font-heading font-bold text-exploit-red">{member.stats.reports}</p>
                    <p className="text-xs text-muted-text">Reports</p>
                  </div>
                  <div className="text-center p-3 bg-void-black rounded-lg">
                    <p className="text-2xl font-heading font-bold text-exploit-red">{member.stats.tools}</p>
                    <p className="text-xs text-muted-text">Tools</p>
                  </div>
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-dark-base border border-steel-gray rounded-2xl p-6"
              >
                <h3 className="text-sm font-semibold text-ghost-white mb-4 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-exploit-red" />
                  Achievements
                </h3>
                <div className="space-y-3">
                  {member.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-muted-text">{achievement.label}</span>
                      <span className="text-lg font-heading font-bold text-ghost-white">{achievement.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-dark-base border border-steel-gray rounded-2xl p-6"
              >
                <h3 className="text-sm font-semibold text-ghost-white mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-exploit-red" />
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1.5 bg-exploit-red/10 border border-exploit-red/30 rounded-lg text-xs text-exploit-red font-medium hover:bg-exploit-red/20 transition-colors cursor-default"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="space-y-3"
              >
                <Button className="w-full bg-exploit-red hover:bg-exploit-red/90">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Endorse Skills
                </Button>
                <Button variant="outline" className="w-full border-steel-gray text-ghost-white hover:border-exploit-red">
                  <Star className="w-4 h-4 mr-2" />
                  Add to Favorites
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamMemberDetailPage;
