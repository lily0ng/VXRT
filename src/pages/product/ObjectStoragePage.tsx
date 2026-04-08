import React from 'react';
import { motion } from 'framer-motion';
import { ProductPageTemplate } from '../../components/product/ProductPageTemplate';
import { FolderOpen, Upload, Download, Lock } from 'lucide-react';
function ObjectStorageHeroSVG() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full max-w-md"
      xmlns="http://www.w3.org/2000/svg">
      
      {/* Buckets */}
      {[0, 1, 2].map((bucket) =>
      <motion.g
        key={bucket}
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: bucket * 0.2,
          duration: 0.5
        }}>
        
          <rect
          x={50 + bucket * 110}
          y="100"
          width="90"
          height="120"
          fill="#1a1a1e"
          stroke={bucket === 1 ? '#c0392b' : '#3a3a42'}
          strokeWidth={bucket === 1 ? '2' : '1'}
          rx="4" />
        
          <text
          x={95 + bucket * 110}
          y="125"
          textAnchor="middle"
          fill="#6b6b72"
          fontSize="10"
          fontFamily="JetBrains Mono">
          
            Bucket {bucket + 1}
          </text>

          {/* Objects in bucket */}
          {[0, 1, 2].map((obj) =>
        <rect
          key={obj}
          x={60 + bucket * 110}
          y={145 + obj * 20}
          width="70"
          height="15"
          fill="#0d0d0f"
          stroke="#3a3a42"
          strokeWidth="1"
          rx="2" />

        )}
        </motion.g>
      )}

      {/* Access Flow Arrows */}
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
        
        {/* Upload */}
        <path
          d="M 95 80 L 95 100"
          stroke="#c0392b"
          strokeWidth="2"
          markerEnd="url(#arrowred)" />
        
        <text
          x="95"
          y="70"
          textAnchor="middle"
          fill="#6b6b72"
          fontSize="10"
          fontFamily="JetBrains Mono">
          
          PUT
        </text>

        {/* Download */}
        <path
          d="M 205 240 L 205 220"
          stroke="#c0392b"
          strokeWidth="2"
          markerEnd="url(#arrowred)" />
        
        <text
          x="205"
          y="260"
          textAnchor="middle"
          fill="#6b6b72"
          fontSize="10"
          fontFamily="JetBrains Mono">
          
          GET
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
function ObjectStorageArchitectureSVG() {
  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full max-w-3xl"
      xmlns="http://www.w3.org/2000/svg">
      
      {/* Application */}
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
        
        Application
      </text>

      {/* Object Storage */}
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
        
        Object Storage
      </text>

      {/* CDN */}
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
        
        CDN
      </text>

      {/* Connections */}
      <path d="M 170 200 L 240 200" stroke="#c0392b" strokeWidth="2" />
      <text
        x="205"
        y="190"
        textAnchor="middle"
        fill="#6b6b72"
        fontSize="10"
        fontFamily="JetBrains Mono">
        
        S3 API
      </text>
      <path d="M 360 200 L 430 200" stroke="#3a3a42" strokeWidth="2" />
    </svg>);

}
export function ObjectStoragePage() {
  const productData = {
    name: 'Object Storage',
    tagline: 'S3-compatible storage for artifacts and payloads',
    description:
    'Scalable object storage with S3-compatible API. Host payloads, store exfiltrated data, manage engagement artifacts, and share files with your team using industry-standard protocols.',
    heroSvg: <ObjectStorageHeroSVG />,
    scenarios: [
    {
      icon: <Upload className="w-8 h-8" />,
      title: 'Payload Hosting',
      description:
      'Host malware, exploits, and payloads with custom access controls and expiration.'
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: 'Exfil Staging',
      description:
      'Stage exfiltrated data with versioning and lifecycle policies for evidence.'
    },
    {
      icon: <FolderOpen className="w-8 h-8" />,
      title: 'Report Storage',
      description:
      'Store engagement reports, screenshots, and documentation with team access.'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Shared Artifacts',
      description:
      'Share tools, wordlists, and resources across your security team securely.'
    }],

    technicalTabs: [
    {
      name: 'Performance',
      specs: [
      {
        label: 'Storage',
        value: 'Unlimited capacity'
      },
      {
        label: 'Object Size',
        value: 'Up to 5TB per object'
      },
      {
        label: 'Throughput',
        value: 'Multi-Gbps per bucket'
      },
      {
        label: 'Latency',
        value: '<100ms first byte'
      },
      {
        label: 'Durability',
        value: '99.999999999%'
      }]

    },
    {
      name: 'Networking',
      specs: [
      {
        label: 'API',
        value: 'S3-compatible'
      },
      {
        label: 'Transfer',
        value: 'TLS 1.3 encryption'
      },
      {
        label: 'CDN',
        value: 'Optional CDN integration'
      },
      {
        label: 'Bandwidth',
        value: 'Unlimited egress'
      },
      {
        label: 'Multipart',
        value: 'Multipart uploads'
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
        label: 'Versioning',
        value: 'Object versioning'
      },
      {
        label: 'Lifecycle',
        value: 'Auto-expiration rules'
      },
      {
        label: 'Access Control',
        value: 'IAM & bucket policies'
      },
      {
        label: 'Presigned URLs',
        value: 'Temporary access'
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
        value: 'Cross-region replication'
      },
      {
        label: 'Availability',
        value: '99.99% SLA'
      },
      {
        label: 'Compliance',
        value: 'SOC 2, GDPR'
      },
      {
        label: 'Backup',
        value: 'Automated backups'
      }]

    }],

    architectureSvg: <ObjectStorageArchitectureSVG />,
    architectureDescription:
    'S3-compatible object storage with optional CDN distribution',
    features: [
    {
      title: 'Offensive Workflows',
      items: [
      'Payload delivery infrastructure',
      'Exfil data staging',
      'Evidence archival',
      'Tool distribution',
      'Team collaboration']

    },
    {
      title: 'OPSEC & Isolation',
      items: [
      'Private buckets',
      'Presigned URL expiration',
      'No access logging',
      'Encrypted storage',
      'Instant deletion']

    },
    {
      title: 'API & Automation',
      items: [
      'S3 SDK support',
      'CLI tools (s3cmd, aws-cli)',
      'Lifecycle automation',
      'Event notifications',
      'Terraform provider']

    }],

    pricingStarting: '$0.02',
    pricingDescription: 'Per GB/month with free egress to VXRT services'
  };
  return <ProductPageTemplate data={productData} />;
}