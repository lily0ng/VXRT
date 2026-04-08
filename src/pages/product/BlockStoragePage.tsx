import React from 'react';
import { motion } from 'framer-motion';
import { ProductPageTemplate } from '../../components/product/ProductPageTemplate';
import { HardDrive, Database, Lock, Archive } from 'lucide-react';
function BlockStorageHeroSVG() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full max-w-md"
      xmlns="http://www.w3.org/2000/svg">
      
      {/* Disk Layers */}
      {[0, 1, 2, 3, 4].map((layer) =>
      <motion.g
        key={layer}
        initial={{
          opacity: 0,
          x: -20
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        transition={{
          delay: layer * 0.15,
          duration: 0.5
        }}>
        
          <rect
          x="80"
          y={80 + layer * 35}
          width="240"
          height="25"
          fill="#1a1a1e"
          stroke={layer === 2 ? '#c0392b' : '#3a3a42'}
          strokeWidth={layer === 2 ? '2' : '1'}
          rx="2" />
        
          <rect
          x="90"
          y={85 + layer * 35}
          width={180 - layer * 20}
          height="15"
          fill={layer === 2 ? '#c0392b' : '#3a3a42'}
          opacity="0.3"
          rx="1" />
        
        </motion.g>
      )}

      {/* I/O Arrows */}
      <motion.g
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1,
          duration: 0.8
        }}>
        
        <path
          d="M 40 150 L 80 150"
          stroke="#c0392b"
          strokeWidth="2"
          markerEnd="url(#arrowred)" />
        
        <path
          d="M 320 150 L 360 150"
          stroke="#c0392b"
          strokeWidth="2"
          markerEnd="url(#arrowred)" />
        
        <text
          x="50"
          y="140"
          fill="#6b6b72"
          fontSize="10"
          fontFamily="JetBrains Mono">
          
          Write
        </text>
        <text
          x="330"
          y="140"
          fill="#6b6b72"
          fontSize="10"
          fontFamily="JetBrains Mono">
          
          Read
        </text>
      </motion.g>

      <defs>
        <marker
          id="arrowred"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto">
          
          <path d="M0,0 L0,6 L9,3 z" fill="#c0392b" />
        </marker>
      </defs>
    </svg>);

}
function BlockStorageArchitectureSVG() {
  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full max-w-3xl"
      xmlns="http://www.w3.org/2000/svg">
      
      {/* Compute Instance */}
      <rect
        x="50"
        y="150"
        width="120"
        height="100"
        fill="#1a1a1e"
        stroke="#3a3a42"
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

      {/* Block Storage */}
      <rect
        x="240"
        y="150"
        width="120"
        height="100"
        fill="#1a1a1e"
        stroke="#c0392b"
        strokeWidth="2"
        rx="4" />
      
      <text
        x="300"
        y="205"
        textAnchor="middle"
        fill="#c0392b"
        fontSize="14"
        fontFamily="JetBrains Mono">
        
        Block Storage
      </text>

      {/* Snapshots */}
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
        
        Snapshots
      </text>

      {/* Connections */}
      <path
        d="M 170 200 L 240 200"
        stroke="#c0392b"
        strokeWidth="2"
        strokeDasharray="5 5" />
      
      <path d="M 360 200 L 430 200" stroke="#3a3a42" strokeWidth="2" />
    </svg>);

}
export function BlockStoragePage() {
  const productData = {
    name: 'Block Storage',
    tagline: 'High-performance persistent storage for operations data',
    description:
    'Enterprise-grade block storage for security operations. Store evidence, maintain loot databases, and preserve operational data with high-performance SSD volumes and instant snapshots.',
    heroSvg: <BlockStorageHeroSVG />,
    scenarios: [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Evidence Storage',
      description:
      'Securely store engagement evidence, screenshots, and forensic artifacts.'
    },
    {
      icon: <Archive className="w-8 h-8" />,
      title: 'Loot Databases',
      description:
      'Maintain databases of credentials, hashes, and extracted data from operations.'
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: 'Tool Repositories',
      description:
      'Host custom tool repositories and exploit databases with version control.'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Backup & Recovery',
      description:
      'Automated backups and point-in-time recovery for critical operational data.'
    }],

    technicalTabs: [
    {
      name: 'Performance',
      specs: [
      {
        label: 'Volume Size',
        value: '10GB - 10TB'
      },
      {
        label: 'IOPS',
        value: 'Up to 64,000 IOPS'
      },
      {
        label: 'Throughput',
        value: 'Up to 1,000 MB/s'
      },
      {
        label: 'Latency',
        value: 'Sub-millisecond'
      },
      {
        label: 'Type',
        value: 'NVMe SSD'
      }]

    },
    {
      name: 'Networking',
      specs: [
      {
        label: 'Attachment',
        value: 'Block device'
      },
      {
        label: 'Protocol',
        value: 'iSCSI, NVMe-oF'
      },
      {
        label: 'Multi-attach',
        value: 'Read-only mode'
      },
      {
        label: 'Network',
        value: 'Private VLAN'
      },
      {
        label: 'Encryption',
        value: 'In-transit TLS'
      }]

    },
    {
      name: 'Security',
      specs: [
      {
        label: 'Encryption',
        value: 'AES-256 at rest'
      },
      {
        label: 'Snapshots',
        value: 'Instant snapshots'
      },
      {
        label: 'Cloning',
        value: 'Fast cloning'
      },
      {
        label: 'Access Control',
        value: 'IAM policies'
      },
      {
        label: 'Compliance',
        value: 'SOC 2, ISO 27001'
      }]

    },
    {
      name: 'Regions',
      specs: [
      {
        label: 'Availability',
        value: 'All regions'
      },
      {
        label: 'Replication',
        value: 'Multi-AZ redundancy'
      },
      {
        label: 'Durability',
        value: '99.999%'
      },
      {
        label: 'Availability',
        value: '99.99% SLA'
      },
      {
        label: 'Backup',
        value: 'Cross-region backup'
      }]

    }],

    architectureSvg: <BlockStorageArchitectureSVG />,
    architectureDescription:
    'Block storage attached to compute with automated snapshot backups',
    features: [
    {
      title: 'Offensive Workflows',
      items: [
      'Evidence chain of custody',
      'Loot database persistence',
      'Tool version management',
      'Engagement data archival',
      'Fast data migration']

    },
    {
      title: 'OPSEC & Isolation',
      items: [
      'Encrypted at rest',
      'Secure deletion',
      'Access logging optional',
      'Private network only',
      'Snapshot encryption']

    },
    {
      title: 'API & Automation',
      items: [
      'Volume lifecycle API',
      'Automated snapshots',
      'Terraform provider',
      'Backup automation',
      'Monitoring & alerts']

    }],

    pricingStarting: '$0.10',
    pricingDescription: 'Per GB/month with flexible IOPS tiers'
  };
  return <ProductPageTemplate data={productData} />;
}