import {
  Shield,
  Target,
  AlertTriangle,
  CloudLightning,
  TerminalSquare,
  Users,
  Globe,
  Smartphone,
  Siren,
  ClipboardCheck } from
'lucide-react';

export const services = {
  'penetration-testing': {
    name: 'Penetration Testing',
    icon: Shield,
    powerStatement:
    'Comprehensive penetration testing across all attack surfaces',
    description:
    'Web, API, network, mobile, and cloud pentesting to identify and exploit vulnerabilities before adversaries do.',
    whatWeDo: [
    'Our penetration testing services go beyond automated scanning. We employ manual, creative techniques to uncover complex vulnerabilities that scanners miss.',
    "Whether it's a complex web application, a sprawling internal network, or a proprietary mobile app, our elite team of offensive security engineers will identify critical flaws and provide actionable remediation guidance.",
    'We simulate real-world attacks to demonstrate the true business impact of vulnerabilities, helping you prioritize fixes based on actual risk.'],

    stats: [
    { value: '500+', label: 'Assessments Completed' },
    { value: '15+', label: 'Industries Served' },
    { value: '100%', label: 'Manual Validation' }],

    methodology: [
    {
      title: 'Scoping & Rules of Engagement',
      description:
      'Defining the target environment, testing windows, and acceptable parameters to ensure safe execution.'
    },
    {
      title: 'Reconnaissance & OSINT',
      description:
      'Gathering intelligence on the target to identify exposed assets, leaked credentials, and potential entry points.'
    },
    {
      title: 'Vulnerability Discovery',
      description:
      'Active scanning and manual analysis to identify misconfigurations, outdated software, and logic flaws.'
    },
    {
      title: 'Exploitation',
      description:
      'Safely exploiting identified vulnerabilities to gain access, escalate privileges, and demonstrate impact.'
    },
    {
      title: 'Post-Exploitation',
      description:
      'Pivoting through the network, accessing sensitive data, and establishing persistence (if in scope).'
    },
    {
      title: 'Reporting & Remediation',
      description:
      'Delivering a comprehensive report with technical details, risk ratings, and actionable remediation steps.'
    }],

    deliverables: [
    'Executive Summary for Leadership',
    'Detailed Technical Report',
    'Vulnerability Database (JSON/CSV)',
    'Actionable Remediation Roadmap',
    'Retest Validation (within 90 days)',
    'Compliance Mapping (SOC2, PCI-DSS, HIPAA)'],

    caseStudy: {
      industry: 'Financial Technology (FinTech)',
      challenge:
      'A rapidly growing FinTech startup needed to secure their new payment processing API before a major product launch, facing strict compliance requirements.',
      approach:
      'We conducted a grey-box API penetration test, focusing on business logic flaws, authentication bypasses, and injection vulnerabilities.',
      results:
      'Identified a critical IDOR vulnerability that allowed unauthorized access to user financial data. The client remediated the issue before launch, preventing a potential data breach and passing their compliance audit.'
    },
    certifications: ['OSCP', 'OSWE', 'CPTS', 'CREST', 'GWAPT']
  },
  'red-teaming': {
    name: 'Red Teaming',
    icon: Target,
    powerStatement: 'Full adversary simulation with real-world TTPs',
    description:
    "Simulating advanced persistent threats (APTs) to test your organization's detection and response capabilities.",
    whatWeDo: [
    'Red Teaming is the ultimate test of your security posture. Unlike a penetration test which focuses on finding vulnerabilities, a Red Team engagement focuses on testing how well your people, processes, and technology respond to a targeted attack.',
    'We emulate the Tactics, Techniques, and Procedures (TTPs) of real-world threat actors relevant to your industry, attempting to achieve specific objectives (e.g., exfiltrating sensitive data, compromising the domain controller) while remaining undetected.',
    'This holistic approach provides an accurate assessment of your true defensive capabilities and readiness.'],

    stats: [
    { value: '50+', label: 'Simulations Executed' },
    { value: '90%', label: 'Initial Access Success' },
    { value: 'Custom', label: 'Malware Development' }],

    methodology: [
    {
      title: 'Threat Modeling & Planning',
      description:
      'Identifying critical assets and defining the threat actors and TTPs to emulate.'
    },
    {
      title: 'Initial Access',
      description:
      'Gaining a foothold via spear-phishing, physical intrusion, or exploiting external vulnerabilities.'
    },
    {
      title: 'Execution & Persistence',
      description:
      'Deploying custom C2 infrastructure and establishing stealthy persistence mechanisms.'
    },
    {
      title: 'Privilege Escalation & Lateral Movement',
      description:
      'Moving through the network, bypassing EDR/AV, and acquiring higher privileges.'
    },
    {
      title: 'Objective Completion',
      description:
      'Accessing the defined target data or systems to prove the impact of the compromise.'
    },
    {
      title: 'Debrief & Purple Teaming',
      description:
      'Collaborative review of the attack timeline with the Blue Team to improve detection rules.'
    }],

    deliverables: [
    'Executive Attack Narrative',
    'Detailed Attack Timeline',
    'Detection Gaps Analysis',
    'C2 Infrastructure & IOC Report',
    'Purple Team Recommendations',
    'Strategic Improvement Roadmap'],

    caseStudy: {
      industry: 'Healthcare Provider',
      challenge:
      'A large hospital network wanted to test their newly established SOC and EDR deployment against a ransomware-style attack scenario.',
      approach:
      'We executed a 6-week stealth red team operation, utilizing custom-developed malware to bypass their specific EDR solution and simulate the deployment of ransomware on critical systems.',
      results:
      "Successfully compromised the domain admin within 14 days. The engagement highlighted critical gaps in their SOC's alerting pipeline, leading to a 40% improvement in detection response times post-remediation."
    },
    certifications: ['OSCE', 'CRTO', 'CRTE', 'OSEP']
  },
  'vulnerability-assessment': {
    name: 'Vulnerability Assessment',
    icon: AlertTriangle,
    powerStatement: 'Systematic risk identification and prioritization',
    description:
    'Comprehensive scanning and manual validation with CVSS scoring to maintain a hardened baseline.',
    whatWeDo: [
    'Our Vulnerability Assessment service provides a broad, systematic review of your infrastructure to identify known security weaknesses.',
    'We utilize industry-leading scanning tools combined with manual validation to eliminate false positives and provide accurate risk scoring.',
    'This service is ideal for organizations looking to establish a security baseline, meet compliance requirements, or maintain continuous visibility into their attack surface.'],

    stats: [
    { value: '1M+', label: 'Assets Scanned' },
    { value: '0', label: 'False Positives Reported' },
    { value: '24/7', label: 'Continuous Options' }],

    methodology: [
    {
      title: 'Asset Discovery',
      description:
      'Mapping the external and internal attack surface to ensure comprehensive coverage.'
    },
    {
      title: 'Automated Scanning',
      description:
      'Utilizing authenticated and unauthenticated scans to identify known vulnerabilities.'
    },
    {
      title: 'Manual Validation',
      description:
      'Verifying findings to eliminate false positives and confirm the actual risk.'
    },
    {
      title: 'Risk Scoring',
      description:
      'Assigning CVSS scores and contextual risk ratings based on your specific environment.'
    },
    {
      title: 'Prioritization',
      description:
      'Categorizing vulnerabilities to help your team focus on the most critical issues first.'
    },
    {
      title: 'Reporting',
      description:
      'Delivering clear, actionable reports tailored for both technical teams and management.'
    }],

    deliverables: [
    'Comprehensive Vulnerability Inventory',
    'Risk Heat Map',
    'Validated CVSS Scores',
    'Remediation Priorities List',
    'Compliance Status Report',
    'Quarterly Trend Analysis (for recurring clients)'],

    caseStudy: {
      industry: 'E-commerce Retailer',
      challenge:
      'An e-commerce company needed to meet PCI-DSS compliance requirements and ensure their sprawling infrastructure was free of known vulnerabilities.',
      approach:
      'We performed a comprehensive internal and external vulnerability assessment across 5,000+ assets, followed by manual validation of all high and critical findings.',
      results:
      'Identified and validated 12 critical vulnerabilities, including several unpatched systems vulnerable to remote code execution. The client achieved PCI compliance and established a quarterly assessment cadence.'
    },
    certifications: ['CEH', 'CompTIA Security+', 'CISM']
  },
  'cloud-penetration-testing': {
    name: 'Cloud Penetration Testing',
    icon: CloudLightning,
    powerStatement: 'Full-scope cloud security assessment',
    description:
    'AWS, Azure, and GCP infrastructure and service testing to secure your modern cloud environments.',
    whatWeDo: [
    'Cloud environments present unique security challenges. Misconfigurations, overly permissive IAM roles, and exposed storage buckets are common vectors for compromise.',
    'Our Cloud Penetration Testing service focuses on the specific nuances of AWS, Azure, and GCP. We assess your cloud architecture, identity management, and deployed services.',
    'We go beyond simple configuration checks, actively attempting to exploit misconfigurations to escalate privileges and access sensitive data within your cloud tenant.'],

    stats: [
    { value: '3', label: 'Major Clouds Supported' },
    { value: '200+', label: 'Cloud Audits' },
    { value: '100%', label: 'Cloud-Native Focus' }],

    methodology: [
    {
      title: 'Cloud Enumeration',
      description:
      'Mapping the cloud footprint, identifying exposed services, APIs, and storage containers.'
    },
    {
      title: 'IAM Analysis',
      description:
      'Reviewing Identity and Access Management policies for overly permissive roles and privilege escalation paths.'
    },
    {
      title: 'Service Exploitation',
      description:
      'Targeting specific cloud services (e.g., Lambda, EC2, AKS) for vulnerabilities and misconfigurations.'
    },
    {
      title: 'Data Access Testing',
      description:
      'Attempting to access sensitive data stored in S3, Blob Storage, or managed databases.'
    },
    {
      title: 'Privilege Escalation',
      description:
      'Exploiting IAM flaws or compromised instances to gain administrative control over the cloud environment.'
    },
    {
      title: 'Reporting',
      description:
      'Providing a detailed analysis of cloud-specific risks and remediation guidance.'
    }],

    deliverables: [
    'Cloud Security Posture Report',
    'Detailed IAM Audit',
    'Misconfiguration Inventory',
    'Data Exposure Assessment',
    'Compliance Mapping (CIS Benchmarks)',
    'Cloud Hardening Guide'],

    caseStudy: {
      industry: 'SaaS Provider',
      challenge:
      'A B2B SaaS company migrating to AWS needed assurance that their multi-tenant architecture and IAM policies were secure against cross-tenant data access.',
      approach:
      'We conducted an assumed-breach cloud penetration test, starting with the access level of a standard user within the SaaS application.',
      results:
      'Discovered an IAM role misconfiguration that allowed a standard user to assume a role with read access to the underlying S3 buckets containing data for all tenants. Provided specific IAM policy revisions to enforce strict isolation.'
    },
    certifications: [
    'AWS Security Specialty',
    'Azure Security Engineer',
    'GCP Security Engineer']

  },
  'exploit-development': {
    name: 'Exploit Development',
    icon: TerminalSquare,
    powerStatement: 'Custom exploit research and zero-day development',
    description:
    '0-day research, CVE development, and proof-of-concept creation for critical infrastructure and software.',
    whatWeDo: [
    'Our Exploit Development team operates at the bleeding edge of offensive security. We specialize in discovering unknown vulnerabilities (zero-days) in proprietary software, embedded systems, and critical infrastructure.',
    'We reverse engineer complex applications, identify memory corruption flaws, logic errors, and cryptographic weaknesses, and develop reliable Proof-of-Concept (PoC) exploits.',
    'This service is utilized by organizations needing to understand the true risk of custom software or by vendors seeking to proactively secure their products before release.'],

    stats: [
    { value: '40+', label: 'CVEs Published' },
    { value: '10+', label: '0-Days Discovered' },
    { value: '100%', label: 'Custom Research' }],

    methodology: [
    {
      title: 'Target Analysis',
      description:
      'Deep dive into the target software architecture, dependencies, and attack surface.'
    },
    {
      title: 'Reverse Engineering',
      description:
      'Decompiling and analyzing binaries to understand the underlying logic and execution flow.'
    },
    {
      title: 'Vulnerability Discovery',
      description:
      'Fuzzing, symbolic execution, and manual code review to identify exploitable conditions.'
    },
    {
      title: 'Exploit Development',
      description:
      'Crafting reliable exploits, bypassing modern mitigations (ASLR, DEP, CFG).'
    },
    {
      title: 'Weaponization',
      description:
      'Packaging the exploit into a usable format or integrating it into testing frameworks.'
    },
    {
      title: 'Responsible Disclosure',
      description:
      'Coordinating with vendors to ensure vulnerabilities are patched before public release.'
    }],

    deliverables: [
    'Reliable Exploit Code (PoC)',
    'In-depth Technical Writeup',
    'CVE Submission Support',
    'Vendor Advisory Draft',
    'Mitigation & Patching Guidance',
    'Custom Detection Signatures (YARA/Snort)'],

    caseStudy: {
      industry: 'Industrial Control Systems (ICS)',
      challenge:
      'An ICS manufacturer needed to ensure their new proprietary SCADA controller was resilient against targeted attacks before deployment in critical infrastructure.',
      approach:
      "We performed a 3-month reverse engineering and vulnerability research engagement on the controller's firmware and communication protocols.",
      results:
      'Discovered three zero-day vulnerabilities, including an unauthenticated remote code execution (RCE) flaw. We developed a reliable PoC and worked with the vendor to implement robust patches before the product launch.'
    },
    certifications: ['OSCE3', 'OSEE', 'GXPN']
  },
  'purple-teaming': {
    name: 'Purple Teaming',
    icon: Users,
    powerStatement: 'Offensive-focused collaborative security improvement',
    description:
    'Joint red/blue team exercises to improve detection, response capabilities, and overall security posture.',
    whatWeDo: [
    'Purple Teaming bridges the gap between offensive (Red) and defensive (Blue) security teams. It is a collaborative, open-book exercise designed to maximize learning and improve detection engineering.',
    'We work side-by-side with your SOC and incident response teams. As we execute specific attacks, we immediately verify if the activity was logged, alerted on, and responded to appropriately.',
    'This iterative process rapidly matures your defensive capabilities, ensuring your security investments are actually effective against real-world threats.'],

    stats: [
    { value: '300%', label: 'Avg. Detection Increase' },
    { value: '100+', label: 'TTPs Tested' },
    { value: 'Real-time', label: 'Collaboration' }],

    methodology: [
    {
      title: 'Baseline Assessment',
      description:
      'Reviewing current detection capabilities and selecting specific MITRE ATT&CK techniques to test.'
    },
    {
      title: 'Attack Simulation',
      description:
      'Executing the selected techniques in a controlled manner while the Blue Team monitors.'
    },
    {
      title: 'Detection Tuning',
      description:
      'Collaboratively analyzing logs and tuning SIEM/EDR rules to catch the simulated activity.'
    },
    {
      title: 'Gap Analysis',
      description:
      'Identifying blind spots where logging is insufficient or alerts are missing.'
    },
    {
      title: 'Improvement Implementation',
      description:
      'Deploying new detection logic and updating incident response playbooks.'
    },
    {
      title: 'Validation',
      description:
      'Re-executing the attacks to confirm the new detections are effective and tuned correctly.'
    }],

    deliverables: [
    'Detection Coverage Matrix',
    'MITRE ATT&CK Mapping',
    'SOC Improvement Plan',
    'Incident Response Playbook Updates',
    'Tool Configuration Guides',
    'Progress & Maturity Metrics'],

    caseStudy: {
      industry: 'Technology Enterprise',
      challenge:
      'A large tech company had invested heavily in a new SIEM and EDR solution but lacked confidence in their actual ability to detect advanced threats.',
      approach:
      'We conducted a 2-week Purple Team exercise, focusing on lateral movement and credential dumping techniques commonly used by ransomware operators.',
      results:
      'Increased their detection coverage for tested techniques from 25% to 85%. Created 40 new high-fidelity SIEM alerts and tuned existing rules to reduce false positives by 60%.'
    },
    certifications: ['GCIH', 'GCFA', 'Blue Team Level 1/2']
  },
  'web-app-testing': {
    name: 'Web Application Testing',
    icon: Globe,
    powerStatement: 'Deep-dive security assessment of web applications',
    description:
    'Comprehensive testing of web applications to identify OWASP Top 10 vulnerabilities, business logic flaws, and authentication weaknesses.',
    whatWeDo: [
    'Our Web Application Testing service provides a thorough security assessment of your web applications, APIs, and backend systems.',
    'We identify vulnerabilities ranging from SQL injection and XSS to complex business logic flaws that could lead to unauthorized access or data breaches.',
    'Using a combination of automated tools and manual testing, we provide actionable recommendations to secure your web applications before attackers can exploit them.'
    ],
    stats: [
    { value: '1000+', label: 'Apps Tested' },
    { value: '95%', label: 'Vulnerability Coverage' },
    { value: 'OWASP', label: 'Top 10 Focus' }
    ],
    methodology: [
    {
      title: 'Reconnaissance',
      description:
      'Mapping the application structure, identifying entry points, and understanding the technology stack.'
    },
    {
      title: 'Authentication Testing',
      description:
      'Testing login mechanisms, session management, and multi-factor authentication implementations.'
    },
    {
      title: 'Input Validation',
      description:
      'Testing for SQL injection, XSS, command injection, and other input-based vulnerabilities.'
    },
    {
      title: 'Business Logic',
      description:
      'Identifying flaws in application workflows that could be abused for unauthorized actions.'
    },
    {
      title: 'API Testing',
      description:
      'Testing REST and GraphQL APIs for authentication bypasses and data exposure.'
    },
    {
      title: 'Reporting',
      description:
      'Providing detailed vulnerability reports with proof-of-concept and remediation steps.'
    }
    ],
    deliverables: [
    'Executive Summary Report',
    'Technical Vulnerability Details',
    'OWASP Top 10 Mapping',
    'Business Logic Flaw Analysis',
    'API Security Assessment',
    'Remediation Roadmap'
    ],
    caseStudy: {
      industry: 'E-commerce Platform',
      challenge:
      'A major e-commerce platform needed to secure their checkout process and customer portal before peak holiday season traffic.',
      approach:
      'We conducted comprehensive web application testing focusing on payment flows, user account management, and API endpoints.',
      results:
      'Discovered a critical vulnerability in the payment flow that could have allowed fraudulent transactions. Remediated before peak season, ensuring secure customer transactions worth millions.'
    },
    certifications: ['OSCP', 'OSWE', 'GWAPT', 'Burp Suite Certified']
  },
  'mobile-app-testing': {
    name: 'Mobile Application Testing',
    icon: Smartphone,
    powerStatement: 'iOS and Android security assessment',
    description:
    'Comprehensive security testing of mobile applications to identify vulnerabilities in client-side code, APIs, and backend integration.',
    whatWeDo: [
    'Our Mobile Application Testing service covers both iOS and Android platforms, assessing client-side security, network communication, and backend API interactions.',
    'We reverse engineer mobile apps to identify hardcoded credentials, insecure data storage, and weak cryptographic implementations.',
    'Testing includes both static analysis and dynamic runtime testing to uncover vulnerabilities that could expose user data or compromise the application.'
    ],
    stats: [
    { value: '500+', label: 'Mobile Apps Tested' },
    { value: 'iOS/Android', label: 'Both Platforms' },
    { value: 'MSTG', label: 'Compliant Testing' }
    ],
    methodology: [
    {
      title: 'Static Analysis',
      description:
      'Reverse engineering the application to identify hardcoded secrets and insecure code patterns.'
    },
    {
      title: 'Dynamic Testing',
      description:
      'Runtime analysis using instrumentation to identify runtime vulnerabilities and data leakage.'
    },
    {
      title: 'Network Analysis',
      description:
      'Intercepting and analyzing network traffic for insecure communication and API vulnerabilities.'
    },
    {
      title: 'Storage Assessment',
      description:
      'Testing local data storage for sensitive data exposure and weak encryption.'
    },
    {
      title: 'Anti-Tampering',
      description:
      'Assessing the application\'s resilience to modification and repackaging attacks.'
    },
    {
      title: 'Reporting',
      description:
      'Delivering platform-specific recommendations for securing mobile applications.'
    }
    ],
    deliverables: [
    'iOS & Android Security Report',
    'Reverse Engineering Findings',
    'API Security Assessment',
    'Data Storage Analysis',
    'Network Security Report',
    'Remediation Guidelines'
    ],
    caseStudy: {
      industry: 'FinTech Mobile Banking',
      challenge:
      'A mobile banking app needed to meet strict financial regulations and ensure customer data protection on both iOS and Android.',
      approach:
      'We performed comprehensive mobile app testing including jailbreak/root detection bypass, runtime manipulation, and cryptographic implementation review.',
      results:
      'Identified critical vulnerabilities in the certificate pinning implementation and insecure key storage. Fixed issues helped the app pass compliance audits and achieve banking certification.'
    },
    certifications: ['OSCP', 'GMOB', 'OWASP MASVS']
  },
  'incident-response': {
    name: 'Incident Response',
    icon: Siren,
    powerStatement: 'Rapid response to security incidents and breaches',
    description:
    '24/7 emergency incident response services to contain breaches, eradicate threats, and restore operations quickly.',
    whatWeDo: [
    'Our Incident Response team provides rapid, expert assistance when security incidents occur. We help contain the threat, preserve evidence, and restore normal operations.',
    'We specialize in ransomware response, data breach investigations, and advanced persistent threat (APT) remediation.',
    'Our retainer-based service ensures immediate response when minutes matter, with pre-established protocols and direct access to our senior responders.'
    ],
    stats: [
    { value: '< 1 Hour', label: 'Response Time' },
    { value: '24/7', label: 'Availability' },
    { value: '500+', label: 'Incidents Handled' }
    ],
    methodology: [
    {
      title: 'Immediate Response',
      description:
      'Rapid deployment of incident responders to assess the situation and begin containment.'
    },
    {
      title: 'Containment',
      description:
      'Isolating affected systems to prevent further spread and preserve evidence.'
    },
    {
      title: 'Investigation',
      description:
      'Forensic analysis to determine the scope, timeline, and impact of the incident.'
    },
    {
      title: 'Eradication',
      description:
      'Removing threat actor presence, backdoors, and malware from the environment.'
    },
    {
      title: 'Recovery',
      description:
      'Restoring systems and verifying integrity before returning to normal operations.'
    },
    {
      title: 'Post-Incident',
      description:
      'Detailed reporting and recommendations to prevent future incidents.'
    }
    ],
    deliverables: [
    'Incident Timeline & Analysis',
    'Threat Actor Assessment',
    'Forensic Evidence Report',
    'Recovery Documentation',
    'Security Improvement Plan',
    'Executive Briefing'
    ],
    caseStudy: {
      industry: 'Healthcare Provider',
      challenge:
      'A hospital discovered ransomware had encrypted critical patient data and systems, threatening patient care and requiring immediate response.',
      approach:
      'Our incident response team deployed within 2 hours, isolated affected networks, and coordinated with the client\'s IT team to restore critical systems.',
      results:
      'Contained the ransomware within 6 hours and restored critical patient care systems within 24 hours. No patient data was exfiltrated, and the hospital avoided regulatory penalties.'
    },
    certifications: ['GCIH', 'GCFA', 'GCFE', 'EnCE']
  },
  'security-audit': {
    name: 'Security Audit',
    icon: ClipboardCheck,
    powerStatement: 'Comprehensive compliance and security assessments',
    description:
    'In-depth security audits for compliance frameworks including ISO 27001, SOC 2, PCI-DSS, and HIPAA.',
    whatWeDo: [
    'Our Security Audit services provide comprehensive assessments against industry standards and regulatory frameworks.',
    'We help organizations prepare for certification, maintain compliance, and identify gaps in their security posture.',
    'From policy reviews to technical testing, we provide a complete picture of your security compliance status.'
    ],
    stats: [
    { value: '100%', label: 'Audit Success Rate' },
    { value: '10+', label: 'Frameworks Covered' },
    { value: '50+', label: 'Audits Completed' }
    ],
    methodology: [
    {
      title: 'Planning',
      description:
      'Defining the audit scope, criteria, and requirements based on the target framework.'
    },
    {
      title: 'Documentation Review',
      description:
      'Reviewing policies, procedures, and evidence to assess compliance documentation.'
    },
    {
      title: 'Technical Testing',
      description:
      'Performing vulnerability assessments and configuration reviews of systems.'
    },
    {
      title: 'Interviews',
      description:
      'Conducting staff interviews to verify understanding and implementation of controls.'
    },
    {
      title: 'Gap Analysis',
      description:
      'Identifying gaps between current state and framework requirements.'
    },
    {
      title: 'Reporting',
      description:
      'Providing detailed audit reports with findings and remediation recommendations.'
    }
    ],
    deliverables: [
    'Audit Findings Report',
    'Compliance Scorecard',
    'Gap Analysis',
    'Remediation Plan',
    'Policy Recommendations',
    'Executive Summary'
    ],
    caseStudy: {
      industry: 'SaaS Provider',
      challenge:
      'A growing SaaS company needed to achieve SOC 2 Type II certification to meet enterprise customer requirements and demonstrate security maturity.',
      approach:
      'We conducted a comprehensive security audit covering all five Trust Services Criteria, from security policies to technical implementations.',
      results:
      'Identified and helped remediate 15 gaps before the formal audit. The client successfully achieved SOC 2 Type II certification on their first attempt, enabling enterprise sales.'
    },
    certifications: ['CISA', 'CISM', 'CISSP', 'ISO 27001 Lead Auditor']
  }
};