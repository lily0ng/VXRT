import {
  Bot,
  BrainCircuit,
  Fingerprint,
  ScanFace,
  ShieldCheck,
  Cpu,
  Network,
  Lock
} from 'lucide-react';
import type { AIServiceData } from '../ai-services/AIServiceTemplate';

export const aiServices: Record<string, AIServiceData & { icon: typeof Bot }> = {
  'ai-phishing-simulation': {
    name: 'AI-Driven Phishing Simulation',
    slug: 'ai-phishing-simulation',
    category: 'red-team',
    categoryLabel: 'Red Team AI',
    icon: Bot,
    powerStatement: 'Hyper-realistic AI-generated phishing campaigns that bypass traditional filters',
    description: 'We leverage large language models to craft personalized, context-aware phishing emails that mimic real-world social engineering at scale. Test your human firewall against the next generation of AI-powered attacks.',
    whatWeDo: [
      'Our AI Phishing Simulation service uses state-of-the-art LLMs to analyze publicly available data about your organization and employees, then crafts highly convincing spear-phishing emails that traditional spam filters cannot detect.',
      'Unlike static templates, our AI adapts in real-time to the target\'s role, communication style, and organizational context. This mirrors the tactics used by advanced threat actors who now weaponize AI for social engineering.',
      'Each engagement delivers actionable metrics on click rates, credential submission rates, and employee awareness gaps, enabling targeted security awareness training.'
    ],
    stats: [
      { value: '94%', label: 'Bypass Rate vs Legacy Filters' },
      { value: '10K+', label: 'Simulations Per Campaign' },
      { value: '3x', label: 'More Convincing Than Manual' }
    ],
    methodology: [
      { title: 'OSINT & Target Profiling', description: 'Aggregate public data from LinkedIn, GitHub, company websites, and breach databases to build detailed target profiles.' },
      { title: 'AI Content Generation', description: 'Use fine-tuned LLMs to generate contextually relevant emails that match the target\'s writing style and organizational tone.' },
      { title: 'Payload Engineering', description: 'Craft benign but realistic payloads (credential harvesters, QR codes, attachments) to measure actual susceptibility.' },
      { title: 'Campaign Execution', description: 'Deploy at scale with randomized timing, sender spoofing, and domain mimicry to avoid detection.' },
      { title: 'Behavioral Analysis', description: 'Track open rates, click-through rates, time-to-click, and form submission with granular analytics.' },
      { title: 'Remediation Roadmap', description: 'Deliver personalized training recommendations based on individual susceptibility scores.' }
    ],
    deliverables: [
      'Executive Risk Summary Report',
      'Per-Employee Susceptibility Scorecard',
      'AI-Generated Email Sample Library',
      'Filter Bypass Analysis',
      'Security Awareness Training Plan',
      'Quarterly Re-Test Validation'
    ],
    caseStudy: {
      industry: 'Global Financial Institution',
      challenge: 'A major bank needed to test its 40,000-employee workforce against AI-generated phishing after experiencing a real AI-powered attack that bypassed all existing controls.',
      approach: 'We deployed a 3-week campaign using custom fine-tuned models trained on the bank\'s internal communications, generating 5 variants per employee persona.',
      results: 'Achieved a 34% click-through rate on the first wave (vs 8% with traditional phishing). After targeted training, the re-test rate dropped to 4%, demonstrating the effectiveness of AI-aware training.'
    },
    certifications: ['OSCP', 'OSWE', 'Social Engineering Expert', 'AI Security Certified']
  },

  'adversarial-ai-testing': {
    name: 'Adversarial AI & ML Testing',
    slug: 'adversarial-ai-testing',
    category: 'red-team',
    categoryLabel: 'Red Team AI',
    icon: BrainCircuit,
    powerStatement: 'Exploit vulnerabilities in AI/ML models through adversarial attacks',
    description: 'We subject your machine learning models to adversarial perturbations, model inversion, membership inference, and data poisoning attacks to uncover vulnerabilities before malicious actors do.',
    whatWeDo: [
      'Our Adversarial AI Testing team performs systematic attacks against your deployed ML models, from computer vision systems to NLP pipelines and fraud detection algorithms.',
      'We implement cutting-edge research in adversarial machine learning, including gradient-based attacks, transfer attacks, and black-box query optimization to find the smallest perturbations that cause model misclassification.',
      'Beyond model-level attacks, we also assess the entire ML supply chain: training data integrity, model serialization vulnerabilities, and inference API abuse vectors.'
    ],
    stats: [
      { value: '50+', label: 'ML Models Tested' },
      { value: '12', label: 'Attack Categories' },
      { value: '100%', label: 'Custom Per Model' }
    ],
    methodology: [
      { title: 'Model Architecture Analysis', description: 'Reverse-engineer model architecture, input formats, and output structures through API probing and documentation review.' },
      { title: 'Adversarial Perturbation Testing', description: 'Apply FGSM, PGD, Carlini-Wagner, and AutoAttack to find minimal input perturbations that flip predictions.' },
      { title: 'Model Extraction & Inversion', description: 'Attempt to extract model weights or reconstruct training data through carefully crafted queries.' },
      { title: 'Data Poisoning Simulation', description: 'Inject malicious training samples to evaluate susceptibility to backdoor and poisoning attacks.' },
      { title: 'Supply Chain Assessment', description: 'Audit dependencies, serialization formats (pickle, ONNX), and third-party model sources for injection vectors.' },
      { title: 'Defense Hardening', description: 'Implement adversarial training, input sanitization, and detection layers based on findings.' }
    ],
    deliverables: [
      'Model Vulnerability Report',
      'Adversarial Sample Dataset',
      'Attack Success Rate Matrix',
      'Defense Recommendation Guide',
      'Reproducible Attack Code',
      'Executive Briefing Deck'
    ],
    caseStudy: {
      industry: 'Autonomous Vehicle Manufacturer',
      challenge: 'An EV company needed assurance that their vision-based lane-detection model could not be fooled by adversarial stickers or projected patterns on road surfaces.',
      approach: 'We performed black-box adversarial testing against their deployed perception stack, crafting physical adversarial patches that could be printed and placed on roads.',
      results: 'Discovered that a 20x20cm printed pattern could cause lane departure misclassification at 30m distance. The findings led to a complete redesign of their input validation pipeline and integration of adversarial training.'
    },
    certifications: ['OSCP', 'GXPN', 'AI Security Certified', 'TensorFlow Security']
  },

  'ai-social-engineering': {
    name: 'AI-Powered Social Engineering',
    slug: 'ai-social-engineering',
    category: 'red-team',
    categoryLabel: 'Red Team AI',
    icon: ScanFace,
    powerStatement: 'Synthetic voice, video, and persona campaigns to test human resilience',
    description: 'We deploy deepfake voice calls, synthetic video conferences, and AI-generated social media personas to test your organization\'s resilience against next-generation social engineering attacks.',
    whatWeDo: [
      'Our AI Social Engineering service simulates the most advanced social engineering techniques currently available to threat actors, including real-time voice cloning, deepfake video injection, and persistent AI-generated personas.',
      'Using state-of-the-art generative models, we can clone executive voices from public speeches, generate synthetic video conference participants, and maintain long-term believable social media personas that interact with your employees.',
      'This service is essential for organizations in high-risk sectors who need to understand how vulnerable their human attack surface is to AI-augmented manipulation.'
    ],
    stats: [
      { value: '85%', label: 'Voice Clone Acceptance' },
      { value: 'Real-time', label: 'Deepfake Injection' },
      { value: '30+', label: 'Days Persistent Personas' }
    ],
    methodology: [
      { title: 'Voice Sample Harvesting', description: 'Collect 3-5 minutes of audio from public sources (podcasts, earnings calls, YouTube) for voice cloning.' },
      { title: 'Voice Clone Validation', description: 'Test cloned voices against biometric authentication systems and human ear detection.' },
      { title: 'Scenario Design', description: 'Create realistic social engineering scenarios: wire transfer requests, IT helpdesk impersonation, supplier verification.' },
      { title: 'Live Campaign Execution', description: 'Conduct real-time phone calls and video conferences with targets using synthesized media.' },
      { title: 'Digital Persona Deployment', description: 'Create and maintain LinkedIn/Twitter personas that engage with employees over weeks.' },
      { title: 'Resilience Report', description: 'Document which controls failed, which succeeded, and provide human-focused remediation guidance.' }
    ],
    deliverables: [
      'Synthetic Media Sample Library',
      'Call/Video Transcript Analysis',
      'Biometric Bypass Report',
      'Social Media Engagement Timeline',
      'Employee Resilience Scorecard',
      'Counter-Social-Engineering Playbook'
    ],
    caseStudy: {
      industry: 'Fortune 500 Tech Company',
      challenge: 'A technology firm wanted to test if employees would comply with urgent wire transfer requests when the \'CFO\' called via a cloned voice during a known acquisition period.',
      approach: 'We cloned the CFO\'s voice from 4 minutes of earnings call audio and conducted 20 live calls to finance team members, using real company context from public filings.',
      results: '3 out of 20 employees initiated the wire transfer process before catching the anomaly. The engagement led to implementation of out-of-band verification protocols for all financial transactions over $50K.'
    },
    certifications: ['OSCP', 'Social Engineering Expert', 'Digital Forensics', 'AI Security Certified']
  },

  'ai-cyber-deception': {
    name: 'AI Cyber Deception & Honeypots',
    slug: 'ai-cyber-deception',
    category: 'red-team',
    categoryLabel: 'Red Team AI',
    icon: Fingerprint,
    powerStatement: 'Adaptive AI honeypots that learn attacker behavior in real-time',
    description: 'Deploy intelligent deception grids powered by AI that dynamically adapt to attacker TTPs, prolong engagement, and extract maximum intelligence from intrusion attempts.',
    whatWeDo: [
      'Our AI Cyber Deception service deploys a network of adaptive honeypots, honeytokens, and decoy assets that use reinforcement learning to maximize attacker dwell time and intelligence extraction.',
      'Unlike static honeypots, our AI decoys learn from each interaction, generating increasingly convincing but harmless responses that keep attackers engaged while your SOC observes and fingerprints their behavior.',
      'We integrate with your existing SIEM and EDR platforms to provide real-time deception telemetry, automatically generating IOCs and behavioral profiles for active defense.'
    ],
    stats: [
      { value: '12x', label: 'Longer Dwell Time' },
      { value: '98%', label: 'Attacker Deception Rate' },
      { value: 'Real-time', label: 'Adaptive Responses' }
    ],
    methodology: [
      { title: 'Deception Grid Design', description: 'Map your network topology and design a grid of decoy hosts, services, and credentials that blend with real infrastructure.' },
      { title: 'AI Response Engine Training', description: 'Train reinforcement learning models on attacker behavior datasets to generate convincing but non-harmful system responses.' },
      { title: 'Honeytoken Deployment', description: 'Plant AI-generated fake credentials, API keys, and documents across endpoints, code repos, and cloud storage.' },
      { title: 'Live Engagement Monitoring', description: 'Observe attacker interactions in real-time through a dedicated deception dashboard with automated alert generation.' },
      { title: 'Behavioral Fingerprinting', description: 'Use AI to cluster attacker behavior, extract TTPs, and generate MITRE ATT&CK mappings automatically.' },
      { title: 'Intelligence Export', description: 'Export IOCs, behavioral profiles, and attack timelines to your SIEM, SOAR, and threat intel platforms.' }
    ],
    deliverables: [
      'Deception Grid Architecture Document',
      'AI Response Engine Configuration',
      'Attacker Engagement Timeline',
      'Behavioral Fingerprint Report',
      'IOC & TTP Export Package',
      'Active Defense Playbook'
    ],
    caseStudy: {
      industry: 'Critical Infrastructure Provider',
      challenge: 'A power utility needed to detect and delay APT actors who had repeatedly bypassed their perimeter defenses, buying time for incident response.',
      approach: 'We deployed 50+ adaptive decoy VMs across their OT/IT boundary, trained on real ICS protocols, that learned to mimic actual SCADA responses to attacker commands.',
      results: 'The deception grid engaged the APT for 47 days before detection, compared to 4 hours on real systems. Extracted 200+ unique TTPs, 15 custom malware samples, and attribution indicators that were shared with national CERT.'
    },
    certifications: ['GCIH', 'GCFA', 'Blue Team Level 2', 'AI Security Certified']
  },

  'ai-model-hardening': {
    name: 'AI Model Security Hardening',
    slug: 'ai-model-hardening',
    category: 'ai-infra',
    categoryLabel: 'AI Infrastructure',
    icon: ShieldCheck,
    powerStatement: 'Secure your ML models from training to inference with defense-in-depth',
    description: 'Comprehensive security hardening for machine learning pipelines, covering model encryption, secure inference, input validation, and runtime protection against extraction and evasion.',
    whatWeDo: [
      'Our AI Model Hardening service secures every stage of your ML lifecycle: from protecting training data and model weights, to implementing encrypted inference and tamper-resistant runtime environments.',
      'We implement differential privacy, federated learning security controls, model watermarking, and cryptographic verification to ensure model integrity and confidentiality throughout deployment.',
      'For organizations deploying models in regulated environments, we provide compliance-mapped hardening that satisfies SOC 2, ISO 27001, and emerging AI governance frameworks.'
    ],
    stats: [
      { value: '100%', label: 'Pipeline Coverage' },
      { value: '15+', label: 'Defense Layers' },
      { value: 'Zero', label: 'Model Extraction Risk' }
    ],
    methodology: [
      { title: 'Threat Model & Asset Inventory', description: 'Identify all ML assets: models, datasets, feature stores, training environments, and inference endpoints.' },
      { title: 'Training Data Protection', description: 'Implement differential privacy, k-anonymity, and secure multi-party computation for sensitive training data.' },
      { title: 'Model Encryption & Watermarking', description: 'Encrypt model weights at rest, apply cryptographic watermarking for ownership verification.' },
      { title: 'Secure Inference Architecture', description: 'Design Trusted Execution Environments (TEE), enclaves, or confidential computing for inference endpoints.' },
      { title: 'Input Sanitization & Detection', description: 'Deploy adversarial input detectors, anomaly filters, and strict input schema validation at the API layer.' },
      { title: 'Runtime Integrity Monitoring', description: 'Continuously monitor model behavior drift, weight tampering, and unauthorized API access patterns.' }
    ],
    deliverables: [
      'ML Threat Model Document',
      'Hardened Model Configuration',
      'Encrypted Inference Blueprint',
      'Input Validation Rule Set',
      'Runtime Monitoring Dashboard',
      'Compliance Mapping Report'
    ],
    caseStudy: {
      industry: 'Healthcare AI Provider',
      challenge: 'A medical imaging AI company needed to protect their diagnostic model weights and patient training data under HIPAA while deploying to hospital edge devices.',
      approach: 'We implemented differential privacy for the training pipeline, hardware-backed TEE for edge inference, and cryptographic model attestation for all deployed devices.',
      results: 'Achieved HIPAA-compliant model deployment with epsilon-differential privacy guarantees. Zero successful extraction attempts during 6-month red team validation. Model attestation detected 2 tampered devices in the field within 24 hours.'
    },
    certifications: ['CISSP', 'CISA', 'AI Security Certified', 'ISO 27001 Lead Auditor']
  },

  'mlops-security': {
    name: 'MLOps Pipeline Security',
    slug: 'mlops-security',
    category: 'ai-infra',
    categoryLabel: 'AI Infrastructure',
    icon: Cpu,
    powerStatement: 'Secure your CI/CD for machine learning from code to production',
    description: 'End-to-end security assessment and hardening of MLOps pipelines, covering code repositories, feature stores, model registries, deployment automation, and observability.',
    whatWeDo: [
      'Our MLOps Pipeline Security service audits the entire ML engineering lifecycle for security vulnerabilities that are unique to machine learning workflows: poisoned feature stores, compromised model registries, and insecure experiment tracking.',
      'We assess pipeline configurations for secrets leakage, insecure dependency management, and overly permissive access controls that could allow an insider to backdoor a production model.',
      'The engagement includes automated scanning of Jupyter notebooks, training scripts, and container images, plus manual review of pipeline architecture for architecture-level weaknesses.'
    ],
    stats: [
      { value: '100%', label: 'Pipeline Coverage' },
      { value: '40+', label: 'MLOps Tools Audited' },
      { value: '24h', label: 'Avg. Remediation Time' }
    ],
    methodology: [
      { title: 'Pipeline Architecture Review', description: 'Map the end-to-end MLOps flow from data ingestion through training, validation, registry, and deployment.' },
      { title: 'Secrets & Credential Audit', description: 'Scan for hardcoded API keys, cloud credentials, and database passwords in notebooks, configs, and container layers.' },
      { title: 'Access Control Assessment', description: 'Review RBAC configurations in MLflow, Kubeflow, Weights & Biases, and cloud ML platforms for privilege escalation paths.' },
      { title: 'Supply Chain Scanning', description: 'Audit Python dependencies, base images, and model serialization formats for known vulnerabilities and malicious packages.' },
      { title: 'Feature Store Security', description: 'Validate data lineage integrity, feature freshness controls, and poisoning detection for online/offline feature stores.' },
      { title: 'Deployment Hardening', description: 'Secure model serving endpoints with rate limiting, authentication, and canary deployment rollback mechanisms.' }
    ],
    deliverables: [
      'MLOps Architecture Diagram',
      'Secrets Inventory & Remediation',
      'Dependency Vulnerability Report',
      'Access Control Gap Analysis',
      'Feature Store Security Guide',
      'Secure MLOps Runbook'
    ],
    caseStudy: {
      industry: 'SaaS ML Platform',
      challenge: 'A B2B machine learning platform discovered that a compromised engineer could push a poisoned model to production without any approval gates, potentially affecting 200+ enterprise customers.',
      approach: 'We performed a full MLOps pipeline audit, including code review of their custom orchestration layer, secrets scanning across 150 repos, and RBAC testing in their multi-tenant ML platform.',
      results: 'Identified 23 critical gaps including a direct push-to-production path, unencrypted model artifacts in S3, and overprivileged service accounts. After remediation, they achieved SOC 2 Type II certification on their first audit attempt.'
    },
    certifications: ['CISSP', 'CISM', 'AI Security Certified', 'AWS Security Specialty']
  },

  'ai-inference-infra': {
    name: 'AI Inference Infrastructure Security',
    slug: 'ai-inference-infra',
    category: 'ai-infra',
    categoryLabel: 'AI Infrastructure',
    icon: Network,
    powerStatement: 'Harden your model serving endpoints against abuse, extraction, and DDoS',
    description: 'Security assessment and hardening of model serving infrastructure including API gateways, load balancers, GPU clusters, edge deployments, and serverless inference functions.',
    whatWeDo: [
      'Our AI Inference Infrastructure Security service protects the runtime environment where your models are exposed to the world. We assess API abuse vectors, model extraction risks, and resource exhaustion attacks unique to inference endpoints.',
      'We evaluate your serving architecture for prompt injection vulnerabilities, rate-limiting bypasses, and side-channel attacks that could leak model weights or training data through timing analysis.',
      'For GPU-based inference clusters, we assess container isolation, NVIDIA driver vulnerabilities, and multi-tenant GPU sharing risks that could allow cross-tenant model weight access.'
    ],
    stats: [
      { value: '99.99%', label: 'Uptime Protected' },
      { value: '10M+', label: 'Reqs/Sec Tested' },
      { value: 'Zero', label: 'Extraction Success' }
    ],
    methodology: [
      { title: 'Endpoint Enumeration', description: 'Discover all inference endpoints, model versions, and undocumented APIs through reconnaissance and documentation review.' },
      { title: 'Prompt Injection Testing', description: 'Test LLM endpoints for jailbreaks, prompt leaking, and indirect prompt injection through untrusted inputs.' },
      { title: 'Rate Limit & DDoS Testing', description: 'Assess resilience against high-volume inference requests, adversarial query flooding, and resource exhaustion attacks.' },
      { title: 'Model Extraction Assessment', description: 'Attempt to reconstruct model weights or training data through carefully crafted query sequences and side-channel analysis.' },
      { title: 'GPU Cluster Security', description: 'Audit container runtime isolation, NVIDIA vGPU configurations, and multi-tenant GPU memory sharing for data leakage.' },
      { title: 'Edge Deployment Review', description: 'Assess security of on-device models including weight encryption, tamper detection, and local API authentication.' }
    ],
    deliverables: [
      'Inference Endpoint Security Report',
      'Prompt Injection Test Results',
      'DDoS Resilience Benchmark',
      'GPU Isolation Audit',
      'Edge Security Assessment',
      'Hardened Architecture Blueprint'
    ],
    caseStudy: {
      industry: 'Conversational AI Startup',
      challenge: 'A popular LLM API provider experienced model extraction attempts and prompt injection attacks that bypassed their content filters, exposing sensitive system prompts.',
      approach: 'We conducted a comprehensive inference security assessment, including automated prompt injection testing with 500+ jailbreak variants, side-channel analysis for model size inference, and GPU cluster isolation testing.',
      results: 'Discovered 12 unique prompt injection vectors that exposed system instructions. Identified a GPU memory isolation flaw allowing cross-tenant weight leakage. All findings were patched within 72 hours, and the provider published a responsible disclosure bounty program.'
    },
    certifications: ['OSCP', 'AWS Security Specialty', 'AI Security Certified', 'Kubernetes Security']
  },

  'llm-security-guardrails': {
    name: 'LLM Security & Guardrails',
    slug: 'llm-security-guardrails',
    category: 'ai-infra',
    categoryLabel: 'AI Infrastructure',
    icon: Lock,
    powerStatement: 'Implement robust guardrails for safe and compliant LLM deployments',
    description: 'Design, test, and deploy multi-layer guardrails for large language models including input filtering, output sanitization, PII detection, content moderation, and compliance enforcement.',
    whatWeDo: [
      'Our LLM Security & Guardrails service builds defense-in-depth around your language model deployments, ensuring they cannot be abused for generating harmful content, leaking sensitive data, or violating regulatory requirements.',
      'We implement and test multiple guardrail layers: input classifiers, system prompt hardening, output filtering, PII redaction, toxicity detection, and compliance rule engines that enforce industry-specific constraints.',
      'Each guardrail is rigorously red-teamed using automated jailbreak generation, adversarial prompt fuzzing, and manual creative bypass attempts to ensure robustness before production deployment.'
    ],
    stats: [
      { value: '99.7%', label: 'Harmful Output Blocked' },
      { value: '50+', label: 'Guardrail Policies' },
      { value: 'Zero', label: 'PII Leakage' }
    ],
    methodology: [
      { title: 'Use Case & Risk Profiling', description: 'Document intended LLM use cases, data sensitivity levels, and compliance requirements (HIPAA, GDPR, SOC 2).' },
      { title: 'Jailbreak & Bypass Testing', description: 'Generate hundreds of adversarial prompts using automated fuzzing and manual red team creativity to find guardrail gaps.' },
      { title: 'Guardrail Architecture Design', description: 'Design multi-layer defense: input filtering, system prompt isolation, output moderation, PII detection, and compliance enforcement.' },
      { title: 'Policy Engine Implementation', description: 'Implement dynamic policy rules that adapt to user role, data classification, and geographic jurisdiction.' },
      { title: 'Red Team Validation', description: 'Re-test the hardened deployment with an expanded attack surface including multi-turn conversations and indirect injection.' },
      { title: 'Monitoring & Alerting', description: 'Deploy real-time monitoring for guardrail trigger rates, bypass attempts, and anomalous usage patterns.' }
    ],
    deliverables: [
      'Guardrail Architecture Document',
      'Jailbreak Test Report',
      'Policy Configuration Package',
      'PII Detection Benchmark',
      'Compliance Mapping Matrix',
      'Guardrail Monitoring Dashboard'
    ],
    caseStudy: {
      industry: 'Enterprise HR Tech Platform',
      challenge: 'An HR platform deploying an LLM for resume screening needed to ensure zero PII leakage, zero bias in outputs, and full GDPR compliance across EU and US deployments.',
      approach: 'We designed a 5-layer guardrail architecture including PII detection with 99.8% recall, bias-mitigation prompts, geographic data routing rules, and full audit logging for every LLM interaction.',
      results: 'Successfully blocked 100% of PII extraction attempts during red team testing. Passed external GDPR audit with zero findings. The guardrail framework is now a core product feature offered to enterprise customers.'
    },
    certifications: ['CISSP', 'CISM', 'AI Security Certified', 'GDPR Practitioner']
  }
};
