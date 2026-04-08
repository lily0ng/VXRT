import React from 'react';
import { motion } from 'framer-motion';
import { ProductPageTemplate } from '../../components/product/ProductPageTemplate';
import { Trash2, RefreshCw, Lock } from 'lucide-react';
function VPSHeroSVG() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full max-w-md"
      xmlns="http://www.w3.org/2000/svg">
      
      {/* Stacked Containers */}
      {[0, 1, 2, 3, 4].map((index) =>
      <motion.g
        key={index}
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: index * 0.15,
          duration: 0.5
        }}>
        
          <rect
          x="100"
          y={60 + index * 45}
          width="200"
          height="35"
          fill="#1a1a1e"
          stroke={index === 2 ? '#c0392b' : '#3a3a42'}
          strokeWidth={index === 2 ? '3' : '2'}
          rx="4" />
        
          <text
          x="200"
          y={82 + index * 45}
          textAnchor="middle"
          fill={index === 2 ? '#c0392b' : '#6b6b72'}
          fontSize="12"
          fontFamily="JetBrains Mono">
          
            VPS-{index + 1}
          </text>
        </motion.g>
      )}

      {/* Isolation Boundaries */}
      <motion.rect
        x="80"
        y="40"
        width="240"
        height="240"
        fill="none"
        stroke="#c0392b"
        strokeWidth="1"
        strokeDasharray="5 5"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 0.3
        }}
        transition={{
          delay: 1,
          duration: 0.8
        }} />
      
    </svg>);

}
function VPSArchitectureSVG() {
  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full max-w-3xl"
      xmlns="http://www.w3.org/2000/svg">
      
      {/* VPS Pool */}
      <rect
        x="50"
        y="100"
        width="150"
        height="200"
        fill="#1a1a1e"
        stroke="#c0392b"
        strokeWidth="2"
        rx="4" />
      
      <text
        x="125"
        y="130"
        textAnchor="middle"
        fill="#e8e8ea"
        fontSize="14"
        fontFamily="JetBrains Mono">
        
        VPS Pool
      </text>
      {[0, 1, 2].map((i) =>
      <rect
        key={i}
        x="70"
        y={150 + i * 40}
        width="110"
        height="30"
        fill="#0d0d0f"
        stroke="#3a3a42"
        strokeWidth="1"
        rx="2" />

      )}

      {/* Load Balancer */}
      <rect
        x="275"
        y="175"
        width="120"
        height="80"
        fill="#1a1a1e"
        stroke="#3a3a42"
        strokeWidth="2"
        rx="4" />
      
      <text
        x="335"
        y="220"
        textAnchor="middle"
        fill="#e8e8ea"
        fontSize="14"
        fontFamily="JetBrains Mono">
        
        Load Balancer
      </text>

      {/* Target Network */}
      <rect
        x="470"
        y="150"
        width="100"
        height="120"
        fill="#1a1a1e"
        stroke="#3a3a42"
        strokeWidth="2"
        rx="4" />
      
      <text
        x="520"
        y="215"
        textAnchor="middle"
        fill="#e8e8ea"
        fontSize="14"
        fontFamily="JetBrains Mono">
        
        Target
      </text>

      {/* Connections */}
      <path d="M 200 200 L 275 215" stroke="#c0392b" strokeWidth="2" />
      <path d="M 395 215 L 470 215" stroke="#3a3a42" strokeWidth="2" />
    </svg>);

}
export function VPSPage() {
  const productData = {
    name: 'VXRT VPS',
    tagline: 'Disposable virtual private servers for covert operations',
    description:
    'Spin up and tear down virtual private servers in seconds. Perfect for short-lived attack infrastructure, phishing campaigns, and operations requiring rapid deployment and disposal.',
    heroSvg: <VPSHeroSVG />,
    scenarios: [
    {
      icon: <div className="w-8 h-8" />,
      title: 'Disposable Attack Boxes',
      description:
      'Deploy, exploit, destroy. No traces left behind with instant provisioning.'
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'Phishing Infrastructure',
      description:
      'Rapidly rotate phishing servers to evade detection and blocklists.'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Pivot Hosts',
      description:
      'Establish pivot points in target networks with isolated VPS instances.'
    },
    {
      icon: <Trash2 className="w-8 h-8" />,
      title: 'Recon Platforms',
      description:
      'Distributed reconnaissance from multiple geographic locations simultaneously.'
    }],

    technicalTabs: [
    {
      name: 'Performance',
      specs: [
      {
        label: 'vCPU',
        value: '1 - 16 cores'
      },
      {
        label: 'RAM',
        value: '512MB - 64GB'
      },
      {
        label: 'Storage',
        value: 'SSD 10GB - 500GB'
      },
      {
        label: 'Provisioning',
        value: '<60 seconds'
      },
      {
        label: 'OS Options',
        value: '20+ distributions'
      }]

    },
    {
      name: 'Networking',
      specs: [
      {
        label: 'Bandwidth',
        value: '1TB - Unlimited'
      },
      {
        label: 'IPv4',
        value: 'Dedicated IP included'
      },
      {
        label: 'IPv6',
        value: '/64 subnet'
      },
      {
        label: 'Port Speed',
        value: '1Gbps shared'
      },
      {
        label: 'Firewall',
        value: 'Stateful firewall'
      }]

    },
    {
      name: 'Security',
      specs: [
      {
        label: 'Isolation',
        value: 'KVM virtualization'
      },
      {
        label: 'Root Access',
        value: 'Full SSH access'
      },
      {
        label: 'Snapshots',
        value: 'Instant snapshots'
      },
      {
        label: 'Backups',
        value: 'Optional automated'
      },
      {
        label: 'Encryption',
        value: 'Encrypted volumes'
      }]

    },
    {
      name: 'Regions',
      specs: [
      {
        label: 'Global',
        value: '15+ datacenters'
      },
      {
        label: 'Americas',
        value: 'US, CA, BR'
      },
      {
        label: 'Europe',
        value: 'UK, DE, NL, FR'
      },
      {
        label: 'Asia',
        value: 'SG, JP, IN'
      },
      {
        label: 'Oceania',
        value: 'AU, NZ'
      }]

    }],

    architectureSvg: <VPSArchitectureSVG />,
    architectureDescription:
    'VPS instances behind load balancers for distributed operations',
    features: [
    {
      title: 'Offensive Workflows',
      items: [
      'One-click Kali/Parrot deployment',
      'Pre-configured C2 templates',
      'Automated tool installation',
      'Custom ISO support',
      'Rapid cloning']

    },
    {
      title: 'OPSEC & Isolation',
      items: [
      'Anonymous registration',
      'Cryptocurrency payments',
      'No activity logging',
      'Instant destruction',
      'Geographic diversity']

    },
    {
      title: 'API & Automation',
      items: [
      'Full API control',
      'Mass deployment scripts',
      'Auto-scaling groups',
      'Lifecycle automation',
      'Webhook integrations']

    }],

    pricingStarting: '$5',
    pricingDescription: 'Pay-as-you-go with hourly billing. No commitments.'
  };
  return <ProductPageTemplate data={productData} />;
}