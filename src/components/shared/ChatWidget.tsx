import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

function formatTime(date: Date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function parseMarkdown(text: string): React.ReactNode {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-ghost-white">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

function normalizeText(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
}

// --- Client-side knowledge base ---
const KB = {
  products: [
    {
      name: 'Compute',
      slug: 'compute',
      description: 'Raw compute power for security operations. High-performance bare metal and virtual machines for offensive tooling, brute-force ops, and large-scale scanning.',
      features: ['Dedicated Cores', 'NVMe Storage', 'DDoS Protection', 'Custom ISOs', 'API Access', 'Global Regions'],
      pricing: 'Starting at $5/mo',
      useCases: ['Large-Scale Scanning', 'Password Cracking', 'C2 Infrastructure']
    },
    {
      name: 'VPS',
      slug: 'vps',
      description: 'Virtual private servers built for red teams. Isolated VPS instances with full root access, custom OS support, and rapid deployment.',
      features: ['Full Root Access', 'SSD Storage', 'Snapshot Backups', 'Custom Firewall', 'IPv6 Support', '99.99% Uptime'],
      pricing: 'Starting at $5/mo',
      useCases: ['Phishing Campaigns', 'Proxy Nodes', 'Tool Hosting']
    },
    {
      name: 'Load Balancer',
      slug: 'load-balancer',
      description: 'Distribute attack traffic intelligently. Layer 4/7 load balancing with SSL termination, health checks, and sticky sessions.',
      features: ['L4/L7 Balancing', 'SSL Termination', 'Health Checks', 'Sticky Sessions', 'WebSocket Support', 'Auto-Failover'],
      pricing: 'Starting at $15/mo',
      useCases: ['C2 Resiliency', 'Distributed Scanning', 'Traffic Obfuscation']
    },
    {
      name: 'Kubernetes',
      slug: 'kubernetes',
      description: 'Container orchestration for security pipelines. Managed K8s clusters for deploying scanning tools, C2 frameworks, and automated security pipelines.',
      features: ['Managed Control Plane', 'Auto-Scaling', 'Persistent Volumes', 'RBAC', 'Helm Support', 'Multi-Region'],
      pricing: 'Starting at $20/mo (free control plane, pay for worker nodes)',
      useCases: ['Automated Pipelines', 'Ephemeral Environments', 'Microservices C2']
    },
    {
      name: 'Block Storage',
      slug: 'block-storage',
      description: 'High-speed volumes for critical data. SSD-backed block storage volumes attachable to any compute instance.',
      features: ['SSD-Backed', 'Snapshots', 'Encryption at Rest', 'Live Resize', 'Multi-Attach', '10Gbps Throughput'],
      pricing: '$0.10/GB/mo',
      useCases: ['Vulnerability Databases', 'Wordlist Storage', 'Log Aggregation']
    },
    {
      name: 'Auto Scaling',
      slug: 'auto-scaling',
      description: 'Scale offensive operations dynamically. Automatic horizontal scaling based on CPU, memory, or custom metrics.',
      features: ['CPU/Memory Triggers', 'Scheduled Scaling', 'Cooldown Periods', 'Health-Based Scaling', 'API Control', 'Cost Optimization'],
      pricing: 'Free (only pay for instances used)',
      useCases: ['Burst Scanning', 'DDoS Simulation', 'Responsive C2']
    },
    {
      name: 'DNS Management',
      slug: 'dns-management',
      description: 'Stealth DNS for covert operations. Full DNS management with DNSSEC, geo-routing, and fast propagation.',
      features: ['DNSSEC Support', 'Geo-Routing', 'Fast Propagation', 'Wildcard Records', 'API Management', '100% Uptime SLA'],
      pricing: 'Starting at $2/zone/mo',
      useCases: ['Domain Fronting', 'Phishing Infrastructure', 'Fast Flux']
    },
    {
      name: 'Object Storage',
      slug: 'object-storage',
      description: 'S3-compatible storage for exfil and archives. Scalable object storage with S3-compatible API for logs, reports, and data archives.',
      features: ['S3-Compatible API', 'Versioning', 'Lifecycle Policies', 'CDN Integration', 'Encryption', 'Unlimited Scale'],
      pricing: '$0.02/GB/mo (zero egress fees)',
      useCases: ['Data Exfiltration', 'Payload Hosting', 'Evidence Archival']
    },
    { name: 'Bare Metal', slug: 'bare-metal', description: 'Dedicated physical servers with no virtualization overhead for maximum performance.', pricing: 'Contact for pricing' },
    { name: 'Database', slug: 'database', description: 'Managed PostgreSQL, MySQL, and Redis instances with automated backups and high availability.', pricing: 'Contact for pricing' },
    { name: 'CDN', slug: 'cdn', description: 'Global content delivery network for fast distribution of payloads, tools, and assets.', pricing: 'Contact for pricing' },
    { name: 'Message Queue', slug: 'message-queue', description: 'Managed Kafka, RabbitMQ, and Redis Streams for event-driven security architectures.', pricing: 'Contact for pricing' }
  ],
  services: [
    { name: 'Penetration Testing', slug: 'penetration-testing', description: 'Comprehensive penetration testing across all attack surfaces: Web, API, network, mobile, and cloud.', stats: ['500+ Assessments Completed', '15+ Industries Served', '100% Manual Validation'], certifications: ['OSCP', 'OSWE', 'CPTS', 'CREST', 'GWAPT'], pricing: 'Contact for quote' },
    { name: 'Red Teaming', slug: 'red-teaming', description: 'Full adversary simulation with real-world TTPs. Simulating advanced persistent threats to test detection and response capabilities.', stats: ['50+ Simulations Executed', '90% Initial Access Success', 'Custom Malware Development'], certifications: ['OSCE', 'CRTO', 'CRTE', 'OSEP'], pricing: 'Contact for quote' },
    { name: 'Vulnerability Assessment', slug: 'vulnerability-assessment', description: 'Systematic risk identification and prioritization with CVSS scoring.', stats: ['1M+ Assets Scanned', '0 False Positives Reported', '24/7 Continuous Options'], certifications: ['CEH', 'CompTIA Security+', 'CISM'], pricing: 'Contact for quote' },
    { name: 'Cloud Penetration Testing', slug: 'cloud-penetration-testing', description: 'Full-scope AWS, Azure, and GCP security assessment.', stats: ['3 Major Clouds Supported', '200+ Cloud Audits', '100% Cloud-Native Focus'], certifications: ['AWS Security Specialty', 'Azure Security Engineer', 'GCP Security Engineer'], pricing: 'Contact for quote' },
    { name: 'Exploit Development', slug: 'exploit-development', description: 'Custom exploit research and zero-day development for critical infrastructure and software.', stats: ['40+ CVEs Published', '10+ 0-Days Discovered', '100% Custom Research'], certifications: ['OSCE3', 'OSEE', 'GXPN'], pricing: 'Contact for quote' },
    { name: 'Purple Teaming', slug: 'purple-teaming', description: 'Offensive-focused collaborative security improvement. Joint red/blue team exercises.', stats: ['300% Avg. Detection Increase', '100+ TTPs Tested', 'Real-time Collaboration'], certifications: ['GCIH', 'GCFA', 'Blue Team Level 1/2'], pricing: 'Contact for quote' },
    { name: 'Web Application Testing', slug: 'web-app-testing', description: 'Deep-dive security assessment of web applications for OWASP Top 10, business logic flaws, and authentication weaknesses.', stats: ['1000+ Apps Tested', '95% Vulnerability Coverage', 'OWASP Top 10 Focus'], certifications: ['OSCP', 'OSWE', 'GWAPT', 'Burp Suite Certified'], pricing: 'Contact for quote' },
    { name: 'Mobile Application Testing', slug: 'mobile-app-testing', description: 'iOS and Android security assessment including reverse engineering, runtime analysis, and API testing.', stats: ['500+ Mobile Apps Tested', 'iOS/Android Both Platforms', 'MSTG Compliant Testing'], certifications: ['OSCP', 'GMOB', 'OWASP MASVS'], pricing: 'Contact for quote' },
    { name: 'Incident Response', slug: 'incident-response', description: '24/7 emergency incident response to contain breaches, eradicate threats, and restore operations.', stats: ['< 1 Hour Response Time', '24/7 Availability', '500+ Incidents Handled'], certifications: ['GCIH', 'GCFA', 'GCFE', 'EnCE'], pricing: 'Retainer-based' },
    { name: 'Security Audit', slug: 'security-audit', description: 'Comprehensive compliance and security assessments for ISO 27001, SOC 2, PCI-DSS, and HIPAA.', stats: ['100% Audit Success Rate', '10+ Frameworks Covered', '50+ Audits Completed'], certifications: ['CISA', 'CISM', 'CISSP', 'ISO 27001 Lead Auditor'], pricing: 'Contact for quote' },
    { name: 'AI Phishing Simulation', slug: 'ai-phishing-simulation', description: 'Hyper-realistic AI-generated phishing campaigns that bypass traditional filters using LLM-crafted spear-phishing.', stats: ['94% Bypass Rate vs Legacy', '10K+ Simulations', '3x More Convincing'], certifications: ['OSCP', 'OSWE', 'AI Security Certified'], pricing: 'Contact for quote' },
    { name: 'Adversarial AI Testing', slug: 'adversarial-ai-testing', description: 'Exploit vulnerabilities in AI/ML models through adversarial attacks, model inversion, and data poisoning.', stats: ['50+ ML Models Tested', '12 Attack Categories', '100% Custom Per Model'], certifications: ['OSCP', 'GXPN', 'AI Security Certified'], pricing: 'Contact for quote' },
    { name: 'AI Social Engineering', slug: 'ai-social-engineering', description: 'Synthetic voice, video, and persona campaigns using deepfake technology to test human resilience.', stats: ['85% Voice Clone Acceptance', 'Real-time Deepfake', '30+ Day Personas'], certifications: ['OSCP', 'Social Engineering Expert', 'AI Security Certified'], pricing: 'Contact for quote' },
    { name: 'AI Cyber Deception', slug: 'ai-cyber-deception', description: 'Adaptive AI honeypots that learn attacker behavior in real-time and extract maximum intelligence.', stats: ['12x Longer Dwell Time', '98% Attacker Deception', 'Real-time Adaptive'], certifications: ['GCIH', 'GCFA', 'AI Security Certified'], pricing: 'Contact for quote' },
    { name: 'AI Model Hardening', slug: 'ai-model-hardening', description: 'Secure ML models from training to inference with defense-in-depth including encryption and TEE.', stats: ['100% Pipeline Coverage', '15+ Defense Layers', 'Zero Extraction Risk'], certifications: ['CISSP', 'CISA', 'AI Security Certified'], pricing: 'Contact for quote' },
    { name: 'MLOps Security', slug: 'mlops-security', description: 'End-to-end security for ML pipelines covering code repos, feature stores, model registries, and deployment.', stats: ['100% Pipeline Coverage', '40+ MLOps Tools', '24h Avg Remediation'], certifications: ['CISSP', 'CISM', 'AI Security Certified'], pricing: 'Contact for quote' },
    { name: 'AI Inference Infra', slug: 'ai-inference-infra', description: 'Harden model serving endpoints against abuse, extraction, DDoS, and prompt injection attacks.', stats: ['99.99% Uptime', '10M+ Reqs/Sec', 'Zero Extraction Success'], certifications: ['OSCP', 'AWS Security Specialty', 'AI Security Certified'], pricing: 'Contact for quote' },
    { name: 'LLM Security Guardrails', slug: 'llm-security-guardrails', description: 'Multi-layer guardrails for LLM deployments: input filtering, output sanitization, PII detection, and compliance.', stats: ['99.7% Harmful Blocked', '50+ Policies', 'Zero PII Leakage'], certifications: ['CISSP', 'CISM', 'AI Security Certified'], pricing: 'Contact for quote' }
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
  faq: {
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

function findAnswer(message: string): string {
  const normalized = normalizeText(message);
  const words = normalized.split(' ');

  // 1. FAQ exact match
  for (const [question, answer] of Object.entries(KB.faq)) {
    const qNorm = normalizeText(question);
    if (normalized.includes(qNorm) || qNorm.includes(normalized)) {
      return answer;
    }
  }

  // 2. Product search
  for (const product of KB.products) {
    const productWords = product.name.toLowerCase().split(' ');
    const slugMatch = words.some(w => w === product.slug || product.slug.includes(w));
    const nameMatch = productWords.some(pw => words.includes(pw));
    if (slugMatch || nameMatch) {
      let answer = `**${product.name}**\n\n${product.description}\n\n`;
      if (product.features) answer += `**Features:** ${product.features.join(', ')}\n\n`;
      answer += `**Pricing:** ${product.pricing}`;
      return answer;
    }
  }

  // 3. Service search
  for (const service of KB.services) {
    const serviceWords = service.name.toLowerCase().split(' ');
    const slugMatch = words.some(w => w === service.slug || service.slug.includes(w));
    const nameMatch = serviceWords.some(sw => words.includes(sw));
    if (slugMatch || nameMatch) {
      let answer = `**${service.name}**\n\n${service.description}\n\n`;
      if (service.stats) answer += `**Stats:** ${service.stats.join(' | ')}\n\n`;
      if (service.certifications) answer += `**Certifications:** ${service.certifications.join(', ')}\n\n`;
      answer += `**Pricing:** ${service.pricing}`;
      return answer;
    }
  }

  // 4. Solution search
  for (const solution of KB.solutions) {
    const solutionWords = solution.name.toLowerCase().split(' ');
    const slugMatch = words.some(w => w === solution.slug || solution.slug.includes(w));
    const nameMatch = solutionWords.some(sw => words.includes(sw));
    if (slugMatch || nameMatch) {
      return `**${solution.name} Solution**\n\n${solution.description}\n\nLearn more at /solutions/${solution.slug}.`;
    }
  }

  // 5. Intent-based
  const intents = [
    {
      keywords: ['price', 'cost', 'how much', 'pricing', 'plan', 'subscription', 'bill'],
      response: '**Pricing**\n\nCloud products start at $5/mo. Security services are quoted based on scope. Visit /pricing for detailed pricing information.'
    },
    {
      keywords: ['contact', 'email', 'reach', 'support', 'help', 'talk', 'chat', 'call'],
      response: '**Support & Contact**\n\n- Email: support@vxrt.io\n- Discord: Join 10K+ members on our Discord server\n- Portal tickets available after sign-in\n- 24/7 Incident Response for retainer clients'
    },
    {
      keywords: ['resource', 'blog', 'paper', 'cve', 'tool', 'script', 'pdf', 'research', 'zero day'],
      response: '**Resources**\n\n- Research Papers: 142 papers\n- CVE Database: 500+ entries\n- Zero-Day Reports: 28 active\n- PDF Library: 85 docs\n- Security Blog: 200+ posts\n- Tools & Scripts: 45 tools\n\nVisit /resources to explore.'
    },
    {
      keywords: ['product', 'compute', 'vps', 'server', 'cloud', 'storage', 'infra', 'infrastructure', 'instance', 'vm'],
      response: '**Products**\n\nWe offer: Compute, VPS, Load Balancer, Kubernetes, Block Storage, Auto Scaling, DNS Management, Object Storage, Bare Metal, Database, CDN, and Message Queue.\n\nVisit /product/compute or /pricing for more details. All products start at $5/mo.'
    },
    {
      keywords: ['service', 'pentest', 'penetration', 'red team', 'audit', 'assessment', 'security test', 'exploit', 'vulnerability'],
      response: '**Security Services**\n\nWe offer: Penetration Testing, Red Teaming, Vulnerability Assessment, Cloud Penetration Testing, Exploit Development, Purple Teaming, Web App Testing, Mobile App Testing, Incident Response, and Security Audit.\n\nContact us at /contact for a custom quote.'
    },
    {
      keywords: ['portal', 'dashboard', 'login', 'signin', 'account', 'manage'],
      response: '**Portal**\n\nAccess your dashboard at /portal after signing in at /signin. The portal lets you manage infrastructure, view reports, access security tools, and open support tickets.'
    },
    {
      keywords: ['solution', 'industry', 'enterprise', 'fintech', 'healthcare', 'government', 'ecommerce'],
      response: '**Industry Solutions**\n\nWe offer tailored solutions for: Enterprise, Financial Services, Healthcare, Government & Defense, E-Commerce, Manufacturing, Energy & Utilities, and Technology sectors.\n\nVisit /solutions to learn more.'
    },
    {
      keywords: ['team', 'about', 'who', 'company', 'vxrt', 'people', 'engineer'],
      response: '**About VXRT**\n\nVXRT is a cloud platform built for offensive security operations. We provide high-performance compute infrastructure and elite security services.\n\nOur team holds industry-leading certifications including OSCP, OSWE, OSCE3, GXPN, CISSP, CISA, and more. Visit /team to meet the crew.\n\nExploit everything. Leave nothing.'
    },
    {
      keywords: ['certification', 'cert', 'oscp', 'cissp', 'qualification', 'credential'],
      response: '**Team Certifications**\n\nOur offensive security engineers hold certifications such as OSCP, OSWE, CPTS, CREST, GWAPT, OSCE, CRTO, CRTE, OSEP, OSCE3, OSEE, GXPN, GCIH, GCFA, GCFE, EnCE, CEH, CompTIA Security+, CISM, CISA, CISSP, and ISO 27001 Lead Auditor.'
    },
    {
      keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'llm', 'deepfake', 'adversarial', 'model', 'guardrail', 'honeypot', 'phishing', 'inference', 'mlops', 'prompt injection'],
      response: '**AI Security Services**\n\n**Red Team AI:**\n- AI Phishing Simulation (LLM-crafted spear-phishing)\n- Adversarial AI Testing (exploit ML model vulnerabilities)\n- AI Social Engineering (deepfake voice & video attacks)\n- AI Cyber Deception (adaptive AI honeypots)\n\n**AI Infrastructure:**\n- AI Model Hardening (defense-in-depth for ML models)\n- MLOps Security (secure ML pipelines & CI/CD)\n- AI Inference Infra (harden model serving endpoints)\n- LLM Security Guardrails (multi-layer LLM protections)\n\nVisit the AI Services dropdown in the navbar or /contact for a quote.'
    }
  ];

  for (const intent of intents) {
    if (intent.keywords.some(kw => normalized.includes(kw))) {
      return intent.response;
    }
  }

  // 6. Greeting
  if (['hello', 'hi', 'hey', 'howdy', 'greetings'].some(g => normalized.includes(g))) {
    return `Hello! I'm the VXRT assistant. I can help you with:\n\n- Products & Pricing\n- Security Services\n- Resources & Research\n- Support & Contact\n- Portal access\n\nWhat would you like to know about?`;
  }

  // 7. Fallback
  return `I'm not sure I understand. I can help you with:\n\n- Our cloud products (Compute, VPS, Kubernetes, Storage, etc.)\n- Security services (Penetration Testing, Red Teaming, etc.)\n- Pricing and quotes\n- Resources and research\n- Support and contact info\n- Portal access\n\nWhat would you like to explore?`;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: generateId(),
      role: 'assistant',
      content: "Hello! I'm the VXRT assistant. Ask me about our products, security services, pricing, or resources.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  function handleSend() {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: generateId(),
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Simulate a brief thinking delay, then respond using local knowledge base
    setTimeout(() => {
      const reply = findAnswer(text);
      const assistantMsg: ChatMessage = {
        id: generateId(),
        role: 'assistant',
        content: reply,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMsg]);
      setIsLoading(false);
    }, 600);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <>
      {/* Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-exploit-red text-ghost-white shadow-lg shadow-exploit-red/30 flex items-center justify-center hover:bg-red-700 transition-colors"
            aria-label="Open chat"
          >
            <MessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] flex flex-col rounded-xl border border-steel-gray bg-dark-base shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-steel-gray bg-void-black">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-exploit-red/20 flex items-center justify-center">
                  <Bot size={18} className="text-exploit-red" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ghost-white font-heading">VXRT Assistant</h3>
                  <p className="text-[10px] text-muted-gray">VXRT Customer Support</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-gray hover:text-ghost-white transition-colors p-1"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.role === 'user'
                      ? 'bg-steel-gray text-ghost-white'
                      : 'bg-exploit-red/20 text-exploit-red'
                  }`}>
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                    msg.role === 'user'
                      ? 'bg-steel-gray text-ghost-white'
                      : 'bg-void-black text-muted-gray border border-steel-gray'
                  }`}>
                    <div className="whitespace-pre-wrap leading-relaxed">
                      {parseMarkdown(msg.content)}
                    </div>
                    <span className={`text-[10px] mt-1 block ${
                      msg.role === 'user' ? 'text-muted-gray' : 'text-muted-gray/60'
                    }`}>
                      {formatTime(msg.timestamp)}
                    </span>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-exploit-red/20 text-exploit-red flex items-center justify-center flex-shrink-0">
                    <Bot size={14} />
                  </div>
                  <div className="bg-void-black border border-steel-gray rounded-lg px-3 py-2 flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin text-exploit-red" />
                    <span className="text-xs text-muted-gray">Thinking...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-steel-gray p-3 bg-void-black">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about products, services, pricing..."
                  className="flex-1 bg-dark-base border border-steel-gray rounded-lg px-3 py-2 text-sm text-ghost-white placeholder-muted-gray focus:outline-none focus:border-exploit-red transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="bg-exploit-red text-ghost-white rounded-lg px-3 py-2 hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

