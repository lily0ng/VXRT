import {
  Server,
  HardDrive,
  Network,
  Box,
  Database,
  Activity,
  Globe,
  Layers } from
'lucide-react';

export const products = {
  compute: {
    name: 'Compute',
    icon: Server,
    powerStatement: 'Raw compute power for security operations',
    description:
    'High-performance bare metal and virtual machines for offensive tooling, brute-force ops, and large-scale scanning.',
    features: [
    {
      title: 'Dedicated Cores',
      description:
      '100% dedicated CPU resources for sustained high-load operations without throttling.'
    },
    {
      title: 'NVMe Storage',
      description:
      'Ultra-fast local NVMe storage for rapid read/write during intensive scanning.'
    },
    {
      title: 'DDoS Protection',
      description:
      'Enterprise-grade L3/L4 DDoS mitigation to keep your infrastructure online.'
    },
    {
      title: 'Custom ISOs',
      description:
      'Upload and boot from custom ISOs for specialized offensive environments.'
    },
    {
      title: 'API Access',
      description:
      'Full REST API for automated provisioning and infrastructure as code.'
    },
    {
      title: 'Global Regions',
      description:
      'Deploy in 15+ global regions for localized testing and compliance.'
    }],

    specs: [
    { label: 'CPU', value: 'Up to 128 Cores (AMD EPYC / Intel Xeon)' },
    { label: 'RAM', value: 'Up to 2TB ECC DDR4/DDR5' },
    { label: 'Storage', value: 'Local NVMe SSDs (Up to 30TB)' },
    { label: 'Network', value: '10Gbps - 40Gbps Unmetered' },
    { label: 'Uptime SLA', value: '99.99% Guaranteed' },
    {
      label: 'Provisioning',
      value: '< 60 seconds (VMs), < 15 mins (Bare Metal)'
    }],

    useCases: [
    {
      title: 'Large-Scale Scanning',
      description:
      'Deploy distributed scanning nodes across multiple regions to map external attack surfaces rapidly.'
    },
    {
      title: 'Password Cracking',
      description:
      'Utilize high-core-count bare metal instances for intensive hash cracking operations.'
    },
    {
      title: 'C2 Infrastructure',
      description:
      'Host resilient Command and Control infrastructure with dedicated resources and high bandwidth.'
    }],

    integrations: ['Linux', 'Docker', 'Terraform', 'Ansible', 'Kubernetes'],
    pricing: {
      startPrice: '$5',
      period: '/mo',
      valueProp: 'Start small, scale to enterprise bare metal instantly.'
    }
  },
  vps: {
    name: 'VPS',
    icon: Box,
    powerStatement: 'Virtual private servers built for red teams',
    description:
    'Isolated VPS instances with full root access, custom OS support, and rapid deployment.',
    features: [
    {
      title: 'Full Root Access',
      description:
      'Complete control over your environment with unrestricted root privileges.'
    },
    {
      title: 'SSD Storage',
      description:
      'Enterprise-grade SSD storage for reliable and fast data access.'
    },
    {
      title: 'Snapshot Backups',
      description:
      'Instant point-in-time snapshots for quick rollback and cloning.'
    },
    {
      title: 'Custom Firewall',
      description:
      'Granular network control with custom security group rules.'
    },
    {
      title: 'IPv6 Support',
      description:
      'Native IPv6 support for modern network testing and evasion.'
    },
    {
      title: '99.99% Uptime',
      description:
      'Highly available infrastructure backed by our strict SLA.'
    }],

    specs: [
    { label: 'vCPU', value: '1 to 32 Cores' },
    { label: 'RAM', value: '1GB to 128GB' },
    { label: 'Storage', value: '25GB to 2TB NVMe SSD' },
    { label: 'Bandwidth', value: '1TB to 10TB Included' },
    { label: 'Network Port', value: '1Gbps to 10Gbps' },
    { label: 'OS Options', value: 'Kali, Parrot, Ubuntu, Debian, Custom' }],

    useCases: [
    {
      title: 'Phishing Campaigns',
      description:
      'Quickly spin up and tear down isolated instances for targeted social engineering engagements.'
    },
    {
      title: 'Proxy Nodes',
      description:
      'Deploy a global network of proxy nodes to obfuscate origin traffic during assessments.'
    },
    {
      title: 'Tool Hosting',
      description:
      'Host collaborative offensive tools and dashboards for distributed red teams.'
    }],

    integrations: ['Linux', 'Docker', 'Terraform', 'Ansible', 'Cloud-Init'],
    pricing: {
      startPrice: '$5',
      period: '/mo',
      valueProp: 'Deploy a secure, isolated instance in under 60 seconds.'
    }
  },
  'load-balancer': {
    name: 'Load Balancer',
    icon: Network,
    powerStatement: 'Distribute attack traffic intelligently',
    description:
    'Layer 4/7 load balancing with SSL termination, health checks, and sticky sessions.',
    features: [
    {
      title: 'L4/L7 Balancing',
      description:
      'Route traffic at the transport (TCP/UDP) or application (HTTP/HTTPS) layer.'
    },
    {
      title: 'SSL Termination',
      description:
      'Centralized SSL/TLS management to offload encryption overhead.'
    },
    {
      title: 'Health Checks',
      description:
      'Automated monitoring to route traffic only to healthy backend nodes.'
    },
    {
      title: 'Sticky Sessions',
      description:
      'Maintain client state by routing requests to the same backend instance.'
    },
    {
      title: 'WebSocket Support',
      description: 'Native support for persistent WebSocket connections.'
    },
    {
      title: 'Auto-Failover',
      description: 'Instant traffic rerouting in the event of node failure.'
    }],

    specs: [
    { label: 'Throughput', value: 'Up to 100Gbps per LB' },
    { label: 'Connections', value: '1M+ Concurrent Connections' },
    { label: 'Protocols', value: 'HTTP, HTTPS, TCP, UDP, HTTP/2' },
    { label: 'SSL/TLS', value: 'TLS 1.2, TLS 1.3, Custom Certs' },
    { label: 'Algorithms', value: 'Round Robin, Least Conn, IP Hash' },
    { label: 'DDoS Protection', value: 'Included L3/L4 Mitigation' }],

    useCases: [
    {
      title: 'C2 Resiliency',
      description:
      'Front your Command and Control infrastructure to ensure high availability and hide backend IPs.'
    },
    {
      title: 'Distributed Scanning',
      description:
      'Distribute outbound scanning traffic across a pool of proxy nodes.'
    },
    {
      title: 'Traffic Obfuscation',
      description:
      'Use complex routing rules to blend offensive traffic with legitimate patterns.'
    }],

    integrations: ['Kubernetes', 'Terraform', "Let's Encrypt", 'Prometheus'],
    pricing: {
      startPrice: '$15',
      period: '/mo',
      valueProp: 'Enterprise-grade traffic distribution for critical ops.'
    }
  },
  kubernetes: {
    name: 'Kubernetes',
    icon: Layers,
    powerStatement: 'Container orchestration for security pipelines',
    description:
    'Managed K8s clusters for deploying scanning tools, C2 frameworks, and automated security pipelines.',
    features: [
    {
      title: 'Managed Control Plane',
      description:
      'Zero-maintenance, highly available Kubernetes control plane.'
    },
    {
      title: 'Auto-Scaling',
      description:
      'Dynamically scale worker nodes based on resource demands.'
    },
    {
      title: 'Persistent Volumes',
      description:
      'Seamless integration with block storage for stateful workloads.'
    },
    {
      title: 'RBAC',
      description:
      'Granular Role-Based Access Control for team collaboration.'
    },
    {
      title: 'Helm Support',
      description:
      'Native support for Helm charts to deploy complex toolchains.'
    },
    {
      title: 'Multi-Region',
      description: 'Deploy clusters across multiple geographic regions.'
    }],

    specs: [
    { label: 'Version', value: 'Latest upstream Kubernetes' },
    {
      label: 'Node Types',
      value: 'Standard, CPU-Optimized, Memory-Optimized'
    },
    { label: 'CNI', value: 'Cilium, Calico, Flannel' },
    { label: 'Ingress', value: 'Nginx, Traefik, HAProxy' },
    { label: 'Monitoring', value: 'Integrated Prometheus & Grafana' },
    { label: 'SLA', value: '99.95% Control Plane Uptime' }],

    useCases: [
    {
      title: 'Automated Pipelines',
      description:
      'Run continuous security scanning pipelines integrated with CI/CD workflows.'
    },
    {
      title: 'Ephemeral Environments',
      description:
      'Spin up isolated, disposable environments for malware analysis or exploit testing.'
    },
    {
      title: 'Microservices C2',
      description:
      'Deploy modern, microservices-based Command and Control architectures.'
    }],

    integrations: ['Docker', 'Helm', 'Terraform', 'Prometheus', 'GitLab CI'],
    pricing: {
      startPrice: '$20',
      period: '/mo',
      valueProp: 'Free control plane. Only pay for the worker nodes you use.'
    }
  },
  'block-storage': {
    name: 'Block Storage',
    icon: HardDrive,
    powerStatement: 'High-speed volumes for critical data',
    description:
    'SSD-backed block storage volumes attachable to any compute instance.',
    features: [
    {
      title: 'SSD-Backed',
      description: 'High-IOPS NVMe SSD storage for demanding workloads.'
    },
    {
      title: 'Snapshots',
      description: 'Instant, incremental snapshots for data protection.'
    },
    {
      title: 'Encryption at Rest',
      description: 'AES-256 encryption for all data stored on the volume.'
    },
    {
      title: 'Live Resize',
      description: 'Increase volume size on the fly without downtime.'
    },
    {
      title: 'Multi-Attach',
      description:
      'Attach a single volume to multiple instances concurrently.'
    },
    {
      title: '10Gbps Throughput',
      description: 'High-speed network backend for rapid data transfer.'
    }],

    specs: [
    { label: 'Volume Size', value: '10GB to 16TB per volume' },
    { label: 'Max IOPS', value: 'Up to 100,000 IOPS per volume' },
    { label: 'Throughput', value: 'Up to 1,000 MB/s' },
    { label: 'Latency', value: 'Sub-millisecond' },
    {
      label: 'Encryption',
      value: 'AES-256 (Customer Managed Keys available)'
    },
    { label: 'Durability', value: '99.999% Data Durability' }],

    useCases: [
    {
      title: 'Vulnerability Databases',
      description:
      'Store massive vulnerability databases and scan results with high-speed read access.'
    },
    {
      title: 'Wordlist Storage',
      description:
      'Host multi-terabyte wordlists and rainbow tables for cracking operations.'
    },
    {
      title: 'Log Aggregation',
      description:
      'Centralize logs from distributed red team infrastructure for analysis.'
    }],

    integrations: ['Linux', 'Kubernetes CSI', 'Terraform', 'Ansible'],
    pricing: {
      startPrice: '$0.10',
      period: '/GB/mo',
      valueProp: 'High-performance storage that scales with your data.'
    }
  },
  'auto-scaling': {
    name: 'Auto Scaling',
    icon: Activity,
    powerStatement: 'Scale offensive operations dynamically',
    description:
    'Automatic horizontal scaling based on CPU, memory, or custom metrics.',
    features: [
    {
      title: 'CPU/Memory Triggers',
      description:
      'Scale automatically based on standard resource utilization metrics.'
    },
    {
      title: 'Scheduled Scaling',
      description:
      'Pre-scale infrastructure for planned engagements or specific time windows.'
    },
    {
      title: 'Cooldown Periods',
      description:
      'Prevent rapid fluctuation with configurable cooldown timers.'
    },
    {
      title: 'Health-Based Scaling',
      description:
      'Automatically replace unhealthy or unresponsive instances.'
    },
    {
      title: 'API Control',
      description:
      'Trigger scaling events programmatically via our REST API.'
    },
    {
      title: 'Cost Optimization',
      description:
      'Scale down during off-hours to minimize infrastructure costs.'
    }],

    specs: [
    { label: 'Scaling Speed', value: '< 60 seconds per instance' },
    { label: 'Max Group Size', value: '1,000+ Instances' },
    { label: 'Metrics Resolution', value: '1-minute intervals' },
    { label: 'Custom Metrics', value: 'Supported via API/Agent' },
    {
      label: 'Load Balancer Integration',
      value: 'Automatic registration/deregistration'
    },
    { label: 'Termination Policies', value: 'Oldest, Newest, Custom' }],

    useCases: [
    {
      title: 'Burst Scanning',
      description:
      'Automatically spin up hundreds of nodes for a massive scan, then spin down when complete.'
    },
    {
      title: 'DDoS Simulation',
      description:
      'Scale up traffic generation nodes dynamically to test client mitigation strategies.'
    },
    {
      title: 'Responsive C2',
      description:
      'Scale backend infrastructure automatically as the number of compromised endpoints grows.'
    }],

    integrations: ['Load Balancer', 'Terraform', 'Prometheus', 'Datadog'],
    pricing: {
      startPrice: '$0',
      period: '',
      valueProp:
      'Auto Scaling is included free. Only pay for the instances you use.'
    }
  },
  'dns-management': {
    name: 'DNS Management',
    icon: Globe,
    powerStatement: 'Stealth DNS for covert operations',
    description:
    'Full DNS management with DNSSEC, geo-routing, and fast propagation.',
    features: [
    {
      title: 'DNSSEC Support',
      description:
      'Cryptographic authentication of DNS records to prevent spoofing.'
    },
    {
      title: 'Geo-Routing',
      description:
      'Route traffic based on the geographic location of the requester.'
    },
    {
      title: 'Fast Propagation',
      description:
      'Global Anycast network ensures sub-minute record propagation.'
    },
    {
      title: 'Wildcard Records',
      description:
      'Support for wildcard subdomains for dynamic infrastructure.'
    },
    {
      title: 'API Management',
      description: 'Automate record creation and updates via REST API.'
    },
    {
      title: '100% Uptime SLA',
      description:
      'Mission-critical reliability backed by a 100% uptime guarantee.'
    }],

    specs: [
    { label: 'Network', value: 'Global Anycast (30+ PoPs)' },
    { label: 'Query Speed', value: '< 15ms Global Average' },
    {
      label: 'Record Types',
      value: 'A, AAAA, CNAME, MX, TXT, SRV, CAA, ALIAS'
    },
    { label: 'TTL Minimum', value: '30 seconds' },
    { label: 'API Limits', value: '1000 requests/minute' },
    { label: 'DDoS Mitigation', value: 'Always-on DNS-specific protection' }],

    useCases: [
    {
      title: 'Domain Fronting',
      description:
      'Manage complex DNS configurations required for domain fronting and C2 obfuscation.'
    },
    {
      title: 'Phishing Infrastructure',
      description:
      'Rapidly provision and rotate DNS records for social engineering campaigns.'
    },
    {
      title: 'Fast Flux',
      description:
      'Utilize low TTLs and API automation to implement fast flux DNS techniques.'
    }],

    integrations: ['Terraform', "Let's Encrypt", 'Certbot', 'ExternalDNS'],
    pricing: {
      startPrice: '$2',
      period: '/zone/mo',
      valueProp: 'Enterprise-grade DNS resolution for critical domains.'
    }
  },
  'object-storage': {
    name: 'Object Storage',
    icon: Database,
    powerStatement: 'S3-compatible storage for exfil and archives',
    description:
    'Scalable object storage with S3-compatible API for logs, reports, and data archives.',
    features: [
    {
      title: 'S3-Compatible API',
      description:
      'Drop-in replacement for AWS S3, compatible with existing tools.'
    },
    {
      title: 'Versioning',
      description:
      'Keep multiple variants of an object to protect against accidental deletion.'
    },
    {
      title: 'Lifecycle Policies',
      description: 'Automate data transition and expiration based on rules.'
    },
    {
      title: 'CDN Integration',
      description:
      'Built-in Content Delivery Network for fast global access.'
    },
    {
      title: 'Encryption',
      description: 'Server-side encryption with customer-managed keys.'
    },
    {
      title: 'Unlimited Scale',
      description:
      'Store petabytes of data without provisioning storage upfront.'
    }],

    specs: [
    { label: 'API Compatibility', value: 'AWS S3 v4 Signatures' },
    { label: 'Max Object Size', value: '5TB (via Multipart Upload)' },
    { label: 'Durability', value: '99.999999999% (11 9s)' },
    { label: 'Availability', value: '99.99% SLA' },
    {
      label: 'Access Control',
      value: 'Bucket Policies, ACLs, Pre-signed URLs'
    },
    { label: 'Replication', value: 'Cross-Region Replication available' }],

    useCases: [
    {
      title: 'Data Exfiltration',
      description:
      'Securely store and organize data exfiltrated during red team engagements.'
    },
    {
      title: 'Payload Hosting',
      description:
      'Host initial access payloads and secondary stages with high availability.'
    },
    {
      title: 'Evidence Archival',
      description:
      'Long-term, immutable storage for engagement evidence and final reports.'
    }],

    integrations: ['AWS CLI', 'Terraform', 'Rclone', 'Cyberduck', 'Boto3'],
    pricing: {
      startPrice: '$0.02',
      period: '/GB/mo',
      valueProp: 'Secure, scalable storage with zero egress fees.'
    }
  }
};