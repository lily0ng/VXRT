import React from 'react';
import { motion } from 'framer-motion';
import { ProductPageTemplate } from '../../components/product/ProductPageTemplate';
import { Server, Cpu, Zap, Shield } from 'lucide-react';
function ComputeHeroSVG() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full max-w-md"
      xmlns="http://www.w3.org/2000/svg">
      
      {/* Server Racks */}
      <motion.g
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 0.8
        }}>
        
        <rect
          x="50"
          y="80"
          width="80"
          height="140"
          fill="#1a1a1e"
          stroke="#3a3a42"
          strokeWidth="2" />
        
        <rect
          x="160"
          y="80"
          width="80"
          height="140"
          fill="#1a1a1e"
          stroke="#3a3a42"
          strokeWidth="2" />
        
        <rect
          x="270"
          y="80"
          width="80"
          height="140"
          fill="#1a1a1e"
          stroke="#3a3a42"
          strokeWidth="2" />
        
      </motion.g>

      {/* CPU Cores */}
      {[0, 1, 2].map((rack) =>
      [0, 1, 2, 3].map((core) =>
      <motion.circle
        key={`${rack}-${core}`}
        cx={90 + rack * 110}
        cy={100 + core * 30}
        r="8"
        fill="#c0392b"
        initial={{
          scale: 0
        }}
        animate={{
          scale: [0, 1.2, 1]
        }}
        transition={{
          delay: 0.5 + rack * 0.1 + core * 0.05,
          duration: 0.4
        }} />

      )
      )}

      {/* Connection Lines */}
      <motion.g
        initial={{
          pathLength: 0
        }}
        animate={{
          pathLength: 1
        }}
        transition={{
          duration: 1.5,
          delay: 1
        }}>
        
        <motion.path
          d="M 130 150 L 160 150"
          stroke="#c0392b"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 4" />
        
        <motion.path
          d="M 240 150 L 270 150"
          stroke="#c0392b"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 4" />
        
      </motion.g>

      {/* Central Node */}
      <motion.circle
        cx="200"
        cy="40"
        r="20"
        fill="#c0392b"
        initial={{
          scale: 0
        }}
        animate={{
          scale: [0, 1.2, 1]
        }}
        transition={{
          delay: 1.5,
          duration: 0.5
        }} />
      
      <motion.text
        x="200"
        y="45"
        textAnchor="middle"
        fill="#e8e8ea"
        fontSize="12"
        fontFamily="JetBrains Mono"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 2
        }}>
        
        VXRT
      </motion.text>
    </svg>);

}
function ComputeArchitectureSVG() {
  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full max-w-3xl"
      xmlns="http://www.w3.org/2000/svg">
      
      {/* Compute Nodes */}
      <rect
        x="50"
        y="150"
        width="120"
        height="100"
        fill="#1a1a1e"
        stroke="#c0392b"
        strokeWidth="2"
        rx="4" />
      
      <text
        x="110"
        y="205"
        textAnchor="middle"
        fill="#e8e8ea"
        fontSize="14"
        fontFamily="JetBrains Mono">
        
        Compute
      </text>

      {/* Storage */}
      <rect
        x="240"
        y="150"
        width="120"
        height="100"
        fill="#1a1a1e"
        stroke="#3a3a42"
        strokeWidth="2"
        rx="4" />
      
      <text
        x="300"
        y="205"
        textAnchor="middle"
        fill="#e8e8ea"
        fontSize="14"
        fontFamily="JetBrains Mono">
        
        Storage
      </text>

      {/* DNS */}
      <rect
        x="430"
        y="150"
        width="120"
        height="100"
        fill="#1a1a1e"
        stroke="#3a3a42"
        strokeWidth="2"
        rx="4" />
      
      <text
        x="490"
        y="205"
        textAnchor="middle"
        fill="#e8e8ea"
        fontSize="14"
        fontFamily="JetBrains Mono">
        
        DNS
      </text>

      {/* Connection Lines */}
      <path
        d="M 170 200 L 240 200"
        stroke="#c0392b"
        strokeWidth="2"
        markerEnd="url(#arrowred)" />
      
      <path
        d="M 360 200 L 430 200"
        stroke="#3a3a42"
        strokeWidth="2"
        markerEnd="url(#arrow)" />
      

      {/* Arrow Markers */}
      <defs>
        <marker
          id="arrowred"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth">
          
          <path d="M0,0 L0,6 L9,3 z" fill="#c0392b" />
        </marker>
        <marker
          id="arrow"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth">
          
          <path d="M0,0 L0,6 L9,3 z" fill="#3a3a42" />
        </marker>
      </defs>
    </svg>);

}
export function ComputePage() {
  const productData = {
    name: 'VXRT Compute',
    tagline: 'Bare metal & VMs tuned for offensive operations',
    description:
    'High-performance compute infrastructure designed for security teams. Deploy dedicated servers and virtual machines optimized for penetration testing, red team operations, and security research.',
    heroSvg: <ComputeHeroSVG />,
    scenarios: [
    {
      icon: <Server className="w-8 h-8" />,
      title: 'C2 Infrastructure',
      description:
      'Deploy command and control servers with dedicated resources and network isolation.'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Brute-force Clusters',
      description:
      'Massive parallel processing power for password cracking and hash computation.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Malware Analysis',
      description:
      'Isolated sandboxes for safe malware detonation and reverse engineering.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Red Team Jump Boxes',
      description:
      'Persistent attack infrastructure with full root access and custom tooling.'
    }],

    technicalTabs: [
    {
      name: 'Performance',
      specs: [
      {
        label: 'CPU',
        value: 'AMD EPYC 7003 Series'
      },
      {
        label: 'Cores',
        value: '4 - 64 vCPU'
      },
      {
        label: 'RAM',
        value: '8GB - 512GB DDR4'
      },
      {
        label: 'Storage',
        value: 'NVMe SSD up to 4TB'
      },
      {
        label: 'Network',
        value: '10Gbps dedicated'
      }]

    },
    {
      name: 'Networking',
      specs: [
      {
        label: 'Bandwidth',
        value: 'Unmetered 10Gbps'
      },
      {
        label: 'IPv4',
        value: '/29 block included'
      },
      {
        label: 'IPv6',
        value: '/64 block included'
      },
      {
        label: 'DDoS Protection',
        value: 'Layer 3/4 included'
      },
      {
        label: 'Private Network',
        value: 'VLAN isolation'
      }]

    },
    {
      name: 'Security',
      specs: [
      {
        label: 'Root Access',
        value: 'Full SSH access'
      },
      {
        label: 'Firewall',
        value: 'Customizable iptables'
      },
      {
        label: 'Encryption',
        value: 'AES-256 at rest'
      },
      {
        label: 'Compliance',
        value: 'SOC 2 Type II'
      },
      {
        label: 'Backups',
        value: 'Daily snapshots'
      }]

    },
    {
      name: 'Regions',
      specs: [
      {
        label: 'North America',
        value: 'US-East, US-West'
      },
      {
        label: 'Europe',
        value: 'EU-Central, EU-West'
      },
      {
        label: 'Asia Pacific',
        value: 'AP-Southeast'
      },
      {
        label: 'Latency',
        value: '<5ms intra-region'
      },
      {
        label: 'Availability',
        value: '99.99% SLA'
      }]

    }],

    architectureSvg: <ComputeArchitectureSVG />,
    architectureDescription:
    'How VXRT Compute integrates with storage and DNS services',
    features: [
    {
      title: 'Offensive Workflows',
      items: [
      'Pre-installed offensive toolkits',
      'Custom kernel modules support',
      'GPU acceleration for cracking',
      'Automated deployment scripts',
      'Team collaboration features']

    },
    {
      title: 'OPSEC & Isolation',
      items: [
      'Dedicated hardware options',
      'Network segmentation',
      'Anonymous payment methods',
      'No logging policy',
      'Instant teardown']

    },
    {
      title: 'API & Automation',
      items: [
      'RESTful API access',
      'Terraform provider',
      'Ansible playbooks',
      'CI/CD integration',
      'Webhook notifications']

    }],

    pricingStarting: '$49',
    pricingDescription:
    'Scale from single VMs to dedicated bare metal clusters'
  };
  return <ProductPageTemplate data={productData} />;
}