// Mock data for Portal Dashboard
// Default credentials: admin@vxrt.com / admin

export const currentUser = {
  id: '1',
  name: 'Admin User',
  email: 'admin@vxrt.com',
  role: 'Security Administrator',
  avatar: 'https://avatars.githubusercontent.com/u/264521594?v=4',
  department: 'Offensive Security',
  lastLogin: '2025-04-09T02:30:00Z',
  mfaEnabled: true
};

export const dashboardStats = {
  activeAssessments: 12,
  completedThisMonth: 28,
  criticalFindings: 3,
  highFindings: 18,
  mediumFindings: 47,
  lowFindings: 92,
  totalSystems: 156,
  complianceScore: 94
};

export const recentAssessments = [
  {
    id: 'AST-2025-0042',
    name: 'Acme Corp External Pentest',
    client: 'Acme Corporation',
    type: 'External Network',
    status: 'In Progress',
    progress: 65,
    startDate: '2025-04-01',
    endDate: '2025-04-15',
    operators: ['0xff', 'Sarah Chen'],
    criticalFindings: 1,
    highFindings: 4
  },
  {
    id: 'AST-2025-0041',
    name: 'FinTech API Security Review',
    client: 'SecureBank Inc',
    type: 'API Testing',
    status: 'Report Delivery',
    progress: 90,
    startDate: '2025-03-20',
    endDate: '2025-04-05',
    operators: ['Marcus Webb', 'Yuki Tanaka'],
    criticalFindings: 0,
    highFindings: 2
  },
  {
    id: 'AST-2025-0040',
    name: 'Healthcare Red Team',
    client: 'MediCare Systems',
    type: 'Red Team',
    status: 'Completed',
    progress: 100,
    startDate: '2025-03-10',
    endDate: '2025-03-28',
    operators: ['0xff', 'James Liu', 'Amara Diallo'],
    criticalFindings: 2,
    highFindings: 7
  },
  {
    id: 'AST-2025-0039',
    name: 'Cloud Infrastructure Review',
    client: 'CloudScale Tech',
    type: 'Cloud Security',
    status: 'In Progress',
    progress: 45,
    startDate: '2025-04-05',
    endDate: '2025-04-20',
    operators: ['David Okafor'],
    criticalFindings: 0,
    highFindings: 1
  },
  {
    id: 'AST-2025-0038',
    name: 'Mobile App Pentest',
    client: 'AppVenture Labs',
    type: 'Mobile Testing',
    status: 'Scoping',
    progress: 15,
    startDate: '2025-04-08',
    endDate: '2025-04-22',
    operators: ['Elena Volkov'],
    criticalFindings: 0,
    highFindings: 0
  }
];

export const vulnerabilityTrends = [
  { month: 'Jan', critical: 2, high: 8, medium: 15, low: 32 },
  { month: 'Feb', critical: 1, high: 12, medium: 22, low: 28 },
  { month: 'Mar', critical: 3, high: 6, medium: 18, low: 35 },
  { month: 'Apr', critical: 3, high: 18, medium: 47, low: 92 }
];

export const recentActivity = [
  {
    id: 1,
    type: 'finding',
    message: 'Critical SQL injection vulnerability discovered in AST-2025-0042',
    user: '0xff',
    timestamp: '2025-04-09T03:15:00Z',
    severity: 'critical'
  },
  {
    id: 2,
    type: 'report',
    message: 'Report submitted for AST-2025-0041',
    user: 'Marcus Webb',
    timestamp: '2025-04-09T02:45:00Z',
    severity: 'info'
  },
  {
    id: 3,
    type: 'assessment',
    message: 'New assessment started: AST-2025-0038',
    user: 'System',
    timestamp: '2025-04-09T01:30:00Z',
    severity: 'info'
  },
  {
    id: 4,
    type: 'finding',
    message: 'Privilege escalation path identified in AST-2025-0040',
    user: 'James Liu',
    timestamp: '2025-04-08T22:10:00Z',
    severity: 'high'
  },
  {
    id: 5,
    type: 'system',
    message: 'Weekly security scan completed - 3 new findings',
    user: 'System',
    timestamp: '2025-04-08T18:00:00Z',
    severity: 'warning'
  }
];

export const teamPerformance = [
  { name: '0xff', assessments: 12, findings: 45, efficiency: 98 },
  { name: 'Sarah Chen', assessments: 8, findings: 32, efficiency: 96 },
  { name: 'Marcus Webb', assessments: 10, findings: 38, efficiency: 94 },
  { name: 'James Liu', assessments: 7, findings: 28, efficiency: 95 }
];

export const upcomingSchedule = [
  {
    id: 1,
    title: 'Client Debrief - Acme Corp',
    time: '10:00 AM',
    date: 'Today',
    type: 'meeting'
  },
  {
    id: 2,
    title: 'Report Deadline - AST-2025-0041',
    time: '2:00 PM',
    date: 'Today',
    type: 'deadline'
  },
  {
    id: 3,
    title: 'Internal Red Team Exercise',
    time: '9:00 AM',
    date: 'Tomorrow',
    type: 'assessment'
  },
  {
    id: 4,
    title: 'Quarterly Security Review',
    time: '3:00 PM',
    date: 'Apr 12',
    type: 'meeting'
  }
];

export const systemHealth = {
  scanners: { status: 'online', uptime: '99.9%' },
  c2Infrastructure: { status: 'online', uptime: '99.8%' },
  reportGenerator: { status: 'online', uptime: '100%' },
  database: { status: 'online', uptime: '99.99%' },
  fileStorage: { status: 'warning', uptime: '98.5%' }
};
