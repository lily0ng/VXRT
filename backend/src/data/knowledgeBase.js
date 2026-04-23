const knowledgeBase = {
  company: {
    name: 'VXRT Offensive Security',
    tagline: 'Exploit everything. Leave nothing.',
    description: 'VXRT is a cloud platform built for offensive security operations, offering high-performance compute, managed security services, and a comprehensive resource center.',
    contact: {
      email: 'support@vxrt.io',
      discord: 'Join 10K+ members on our Discord server',
      github: 'https://github.com/vxrt',
      twitter: 'https://twitter.com/vxrt',
      linkedin: 'https://linkedin.com/company/vxrt'
    }
  },
  products: [
    {
      name: 'Compute',
      slug: 'compute',
      description: 'Raw compute power for security operations. High-performance bare metal and virtual machines for offensive tooling, brute-force ops, and large-scale scanning.',
      features: ['Dedicated Cores', 'NVMe Storage', 'DDoS Protection', 'Custom ISOs', 'API Access', 'Global Regions'],
      specs: ['Up to 128 Cores (AMD EPYC / Intel Xeon)', 'Up to 2TB ECC DDR4/DDR5', 'Local NVMe SSDs (Up to 30TB)', '10Gbps - 40Gbps Unmetered', '99.99% Guaranteed Uptime', '< 60 seconds provisioning'],
      pricing: 'Starting at $5/mo',
      useCases: ['Large-Scale Scanning', 'Password Cracking', 'C2 Infrastructure']
    },
    {
      name: 'VPS',
      slug: 'vps',
      description: 'Virtual private servers built for red teams. Isolated VPS instances with full root access, custom OS support, and rapid deployment.',
      features: ['Full Root Access', 'SSD Storage', 'Snapshot Backups', 'Custom Firewall', 'IPv6 Support', '99.99% Uptime'],
      specs: ['1 to 32 vCPU Cores', '1GB to 128GB RAM', '25GB to 2TB NVMe SSD', '1TB to 10TB Bandwidth', '1Gbps to 10Gbps Network', 'Kali, Parrot, Ubuntu, Debian, Custom OS'],
      pricing: 'Starting at $5/mo',
      useCases: ['Phishing Campaigns', 'Proxy Nodes', 'Tool Hosting']
    },
    {
      name: 'Load Balancer',
      slug: 'load-balancer',
      description: 'Distribute attack traffic intelligently. Layer 4/7 load balancing with SSL termination, health checks, and sticky sessions.',
      features: ['L4/L7 Balancing', 'SSL Termination', 'Health Checks', 'Sticky Sessions', 'WebSocket Support', 'Auto-Failover'],
      specs: ['Up to 100Gbps throughput', '1M+ Concurrent Connections', 'HTTP, HTTPS, TCP, UDP, HTTP/2', 'TLS 1.2, TLS 1.3', 'Round Robin, Least Conn, IP Hash', 'L3/L4 DDoS Mitigation included'],
      pricing: 'Starting at $15/mo',
      useCases: ['C2 Resiliency', 'Distributed Scanning', 'Traffic Obfuscation']
    },
    {
      name: 'Kubernetes',
      slug: 'kubernetes',
      description: 'Container orchestration for security pipelines. Managed K8s clusters for deploying scanning tools, C2 frameworks, and automated security pipelines.',
      features: ['Managed Control Plane', 'Auto-Scaling', 'Persistent Volumes', 'RBAC', 'Helm Support', 'Multi-Region'],
      specs: ['Latest upstream Kubernetes', 'Standard, CPU-Optimized, Memory-Optimized nodes', 'Cilium, Calico, Flannel CNI', 'Nginx, Traefik, HAProxy ingress', 'Integrated Prometheus & Grafana', '99.95% Control Plane Uptime'],
      pricing: 'Starting at $20/mo (free control plane, pay for worker nodes)',
      useCases: ['Automated Pipelines', 'Ephemeral Environments', 'Microservices C2']
    },
    {
      name: 'Block Storage',
      slug: 'block-storage',
      description: 'High-speed volumes for critical data. SSD-backed block storage volumes attachable to any compute instance.',
      features: ['SSD-Backed', 'Snapshots', 'Encryption at Rest', 'Live Resize', 'Multi-Attach', '10Gbps Throughput'],
      specs: ['10GB to 16TB per volume', 'Up to 100,000 IOPS', 'Up to 1,000 MB/s throughput', 'Sub-millisecond latency', 'AES-256 Encryption', '99.999% Data Durability'],
      pricing: '$0.10/GB/mo',
      useCases: ['Vulnerability Databases', 'Wordlist Storage', 'Log Aggregation']
    },
    {
      name: 'Auto Scaling',
      slug: 'auto-scaling',
      description: 'Scale offensive operations dynamically. Automatic horizontal scaling based on CPU, memory, or custom metrics.',
      features: ['CPU/Memory Triggers', 'Scheduled Scaling', 'Cooldown Periods', 'Health-Based Scaling', 'API Control', 'Cost Optimization'],
      specs: ['< 60 seconds per instance', '1,000+ Max Group Size', '1-minute metrics resolution', 'Custom Metrics via API/Agent', 'Automatic LB registration', 'Oldest, Newest, Custom termination policies'],
      pricing: 'Free (only pay for instances used)',
      useCases: ['Burst Scanning', 'DDoS Simulation', 'Responsive C2']
    },
    {
      name: 'DNS Management',
      slug: 'dns-management',
      description: 'Stealth DNS for covert operations. Full DNS management with DNSSEC, geo-routing, and fast propagation.',
      features: ['DNSSEC Support', 'Geo-Routing', 'Fast Propagation', 'Wildcard Records', 'API Management', '100% Uptime SLA'],
      specs: ['Global Anycast (30+ PoPs)', '< 15ms Global Average Query Speed', 'A, AAAA, CNAME, MX, TXT, SRV, CAA, ALIAS', '30 seconds minimum TTL', '1000 API requests/minute', 'DNS-specific DDoS Mitigation'],
      pricing: 'Starting at $2/zone/mo',
      useCases: ['Domain Fronting', 'Phishing Infrastructure', 'Fast Flux']
    },
    {
      name: 'Object Storage',
      slug: 'object-storage',
      description: 'S3-compatible storage for exfil and archives. Scalable object storage with S3-compatible API for logs, reports, and data archives.',
      features: ['S3-Compatible API', 'Versioning', 'Lifecycle Policies', 'CDN Integration', 'Encryption', 'Unlimited Scale'],
      specs: ['AWS S3 v4 Signatures', '5TB Max Object Size (Multipart)', '99.999999999% Durability', '99.99% SLA', 'Bucket Policies, ACLs, Pre-signed URLs', 'Cross-Region Replication available'],
      pricing: '$0.02/GB/mo (zero egress fees)',
      useCases: ['Data Exfiltration', 'Payload Hosting', 'Evidence Archival']
    },
    {
      name: 'Bare Metal',
      slug: 'bare-metal',
      description: 'Dedicated physical servers with no virtualization overhead for maximum performance.',
      pricing: 'Contact for pricing'
    },
    {
      name: 'Database',
      slug: 'database',
      description: 'Managed PostgreSQL, MySQL, and Redis instances with automated backups and high availability.',
      pricing: 'Contact for pricing'
    },
    {
      name: 'CDN',
      slug: 'cdn',
      description: 'Global content delivery network for fast distribution of payloads, tools, and assets.',
      pricing: 'Contact for pricing'
    },
    {
      name: 'Message Queue',
      slug: 'message-queue',
      description: 'Managed Kafka, RabbitMQ, and Redis Streams for event-driven security architectures.',
      pricing: 'Contact for pricing'
    }
  ],
  services: [
    {
      name: 'Penetration Testing',
      slug: 'penetration-testing',
      description: 'Comprehensive penetration testing across all attack surfaces: Web, API, network, mobile, and cloud.',
      stats: ['500+ Assessments Completed', '15+ Industries Served', '100% Manual Validation'],
      certifications: ['OSCP', 'OSWE', 'CPTS', 'CREST', 'GWAPT'],
      pricing: 'Contact for quote'
    },
    {
      name: 'Red Teaming',
      slug: 'red-teaming',
      description: 'Full adversary simulation with real-world TTPs. Simulating advanced persistent threats to test detection and response capabilities.',
      stats: ['50+ Simulations Executed', '90% Initial Access Success', 'Custom Malware Development'],
      certifications: ['OSCE', 'CRTO', 'CRTE', 'OSEP'],
      pricing: 'Contact for quote'
    },
    {
      name: 'Vulnerability Assessment',
      slug: 'vulnerability-assessment',
      description: 'Systematic risk identification and prioritization with CVSS scoring.',
      stats: ['1M+ Assets Scanned', '0 False Positives Reported', '24/7 Continuous Options'],
      certifications: ['CEH', 'CompTIA Security+', 'CISM'],
      pricing: 'Contact for quote'
    },
    {
      name: 'Cloud Penetration Testing',
      slug: 'cloud-penetration-testing',
      description: 'Full-scope AWS, Azure, and GCP security assessment.',
      stats: ['3 Major Clouds Supported', '200+ Cloud Audits', '100% Cloud-Native Focus'],
      certifications: ['AWS Security Specialty', 'Azure Security Engineer', 'GCP Security Engineer'],
      pricing: 'Contact for quote'
    },
    {
      name: 'Exploit Development',
      slug: 'exploit-development',
      description: 'Custom exploit research and zero-day development for critical infrastructure and software.',
      stats: ['40+ CVEs Published', '10+ 0-Days Discovered', '100% Custom Research'],
      certifications: ['OSCE3', 'OSEE', 'GXPN'],
      pricing: 'Contact for quote'
    },
    {
      name: 'Purple Teaming',
      slug: 'purple-teaming',
      description: 'Offensive-focused collaborative security improvement. Joint red/blue team exercises.',
      stats: ['300% Avg. Detection Increase', '100+ TTPs Tested', 'Real-time Collaboration'],
      certifications: ['GCIH', 'GCFA', 'Blue Team Level 1/2'],
      pricing: 'Contact for quote'
    },
    {
      name: 'Web Application Testing',
      slug: 'web-app-testing',
      description: 'Deep-dive security assessment of web applications for OWASP Top 10, business logic flaws, and authentication weaknesses.',
      stats: ['1000+ Apps Tested', '95% Vulnerability Coverage', 'OWASP Top 10 Focus'],
      certifications: ['OSCP', 'OSWE', 'GWAPT', 'Burp Suite Certified'],
      pricing: 'Contact for quote'
    },
    {
      name: 'Mobile Application Testing',
      slug: 'mobile-app-testing',
      description: 'iOS and Android security assessment including reverse engineering, runtime analysis, and API testing.',
      stats: ['500+ Mobile Apps Tested', 'iOS/Android Both Platforms', 'MSTG Compliant Testing'],
      certifications: ['OSCP', 'GMOB', 'OWASP MASVS'],
      pricing: 'Contact for quote'
    },
    {
      name: 'Incident Response',
      slug: 'incident-response',
      description: '24/7 emergency incident response to contain breaches, eradicate threats, and restore operations.',
      stats: ['< 1 Hour Response Time', '24/7 Availability', '500+ Incidents Handled'],
      certifications: ['GCIH', 'GCFA', 'GCFE', 'EnCE'],
      pricing: 'Retainer-based'
    },
    {
      name: 'Security Audit',
      slug: 'security-audit',
      description: 'Comprehensive compliance and security assessments for ISO 27001, SOC 2, PCI-DSS, and HIPAA.',
      stats: ['100% Audit Success Rate', '10+ Frameworks Covered', '50+ Audits Completed'],
      certifications: ['CISA', 'CISM', 'CISSP', 'ISO 27001 Lead Auditor'],
      pricing: 'Contact for quote'
    }
  ],
  solutions: [
    { name: 'Enterprise', slug: 'enterprise', description: 'Comprehensive security solutions for large enterprises.' },
    { name: 'Financial Services', slug: 'financial-services', description: 'Tailored security for banks, fintech, and insurance.' },
    { name: 'Healthcare', slug: 'healthcare', description: 'HIPAA-compliant security assessments for healthcare providers.' },
    { name: 'Government & Defense', slug: 'government-defense', description: 'Security cleared for government and defense contractors.' },
    { name: 'E-Commerce', slug: 'e-commerce', description: 'Secure payment flows and customer data protection.' },
    { name: 'Manufacturing', slug: 'manufacturing', description: 'OT and ICS security for industrial environments.' },
    { name: 'Energy & Utilities', slug: 'energy-utilities', description: 'Critical infrastructure security assessments.' },
    { name: 'Technology', slug: 'technology', description: 'Security for SaaS, PaaS, and technology companies.' }
  ],
  resources: {
    researchPapers: '142 papers',
    cveDatabase: '500+ entries',
    zeroDayReports: '28 active',
    pdfLibrary: '85 docs',
    securityBlog: '200+ posts',
    toolsAndScripts: '45 tools'
  },
  pricing: {
    note: 'Visit /pricing for detailed pricing information. Cloud products start at $5/mo. Security services are quoted based on scope.'
  },
  support: {
    channels: ['Discord community (10K+ members)', 'Email support', 'Portal ticket system', '24/7 Incident Response (retainer clients)'],
    portal: 'Access your dashboard at /portal after signing in.'
  },
  commonQuestions: {
    'how do i sign up': 'You can sign up by visiting the Sign Up page at /signup. It takes less than 2 minutes to create an account.',
    'how do i sign in': 'You can sign in at /signin using your email and password.',
    'what is vxrt': 'VXRT is a cloud platform built for offensive security operations. We provide high-performance compute infrastructure and elite security services.',
    'do you offer free tier': 'We offer competitive pricing starting at $5/mo for VPS and Compute instances. Visit /pricing for full details.',
    'what os are supported': 'We support Kali Linux, Parrot OS, Ubuntu, Debian, and custom ISO uploads for most compute products.',
    'where are your data centers': 'We operate 15+ global regions for compute deployment. Regions can be selected during instance creation in the portal.',
    'how do i contact support': 'You can reach us via Discord (10K+ members), email at support@vxrt.io, or through the portal ticket system after signing in.',
    'what certifications do your team have': 'Our team holds OSCP, OSWE, OSCE3, OSEE, CREST, GXPN, GCIH, GCFA, CISSP, CISA, and many more industry-leading certifications.',
    'do you have a portal': 'Yes, sign in at /signin to access the VXRT Portal where you can manage infrastructure, view reports, and access security tools.',
    'can i get a quote': 'Absolutely. Visit /contact or /pricing to request a custom quote for security services or enterprise infrastructure.'
  }
};

module.exports = knowledgeBase;
