import React from 'react';
import { motion } from 'framer-motion';
import { ProductPageTemplate } from '../../components/product/ProductPageTemplate';
import { Network, Shuffle, BarChart3, Shield } from 'lucide-react';
function LoadBalancerHeroSVG() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full max-w-md"
      xmlns="http://www.w3.org/2000/svg">
      
      {/* Client */}
      <motion.circle
        cx="50"
        cy="150"
        r="20"
        fill="#3a3a42"
        stroke="#6b6b72"
        strokeWidth="2"
        initial={{
          scale: 0
        }}
        animate={{
          scale: 1
        }}
        transition={{
          duration: 0.5
        }} />
      
      <text
        x="50"
        y="155"
        textAnchor="middle"
        fill="#e8e8ea"
        fontSize="10"
        fontFamily="JetBrains Mono">
        
        Client
      </text>

      {/* Load Balancer */}
      <motion.rect
        x="150"
        y="120"
        width="100"
        height="60"
        fill="#1a1a1e"
        stroke="#c0392b"
        strokeWidth="3"
        rx="4"
        initial={{
          scale: 0
        }}
        animate={{
          scale: 1
        }}
        transition={{
          delay: 0.3,
          duration: 0.5
        }} />
      
      <text
        x="200"
        y="155"
        textAnchor="middle"
        fill="#c0392b"
        fontSize="12"
        fontFamily="JetBrains Mono">
        
        LB
      </text>

      {/* Backend Nodes */}
      {[0, 1, 2].map((index) =>
      <motion.circle
        key={index}
        cx="330"
        cy={80 + index * 70}
        r="20"
        fill="#1a1a1e"
        stroke="#3a3a42"
        strokeWidth="2"
        initial={{
          scale: 0
        }}
        animate={{
          scale: 1
        }}
        transition={{
          delay: 0.6 + index * 0.1,
          duration: 0.5
        }} />

      )}

      {/* Traffic Arrows */}
      <motion.path
        d="M 70 150 L 150 150"
        stroke="#c0392b"
        strokeWidth="2"
        fill="none"
        initial={{
          pathLength: 0
        }}
        animate={{
          pathLength: 1
        }}
        transition={{
          delay: 1,
          duration: 0.8
        }}
        markerEnd="url(#arrowred)" />
      
      {[0, 1, 2].map((index) =>
      <motion.path
        key={index}
        d={`M 250 150 L 310 ${80 + index * 70}`}
        stroke="#3a3a42"
        strokeWidth="2"
        fill="none"
        initial={{
          pathLength: 0
        }}
        animate={{
          pathLength: 1
        }}
        transition={{
          delay: 1.5 + index * 0.2,
          duration: 0.6
        }}
        markerEnd="url(#arrow)" />

      )}

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
        <marker
          id="arrow"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto">
          
          <path d="M0,0 L0,6 L9,3 z" fill="#3a3a42" />
        </marker>
      </defs>
    </svg>);

}
function LoadBalancerArchitectureSVG() {
  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full max-w-3xl"
      xmlns="http://www.w3.org/2000/svg">
      
      {/* Internet */}
      <ellipse
        cx="100"
        cy="200"
        rx="60"
        ry="40"
        fill="#1a1a1e"
        stroke="#3a3a42"
        strokeWidth="2" />
      
      <text
        x="100"
        y="205"
        textAnchor="middle"
        fill="#e8e8ea"
        fontSize="14"
        fontFamily="JetBrains Mono">
        
        Internet
      </text>

      {/* Load Balancer */}
      <rect
        x="220"
        y="170"
        width="120"
        height="60"
        fill="#1a1a1e"
        stroke="#c0392b"
        strokeWidth="3"
        rx="4" />
      
      <text
        x="280"
        y="205"
        textAnchor="middle"
        fill="#c0392b"
        fontSize="14"
        fontFamily="JetBrains Mono">
        
        Load Balancer
      </text>

      {/* VPS Pool */}
      <rect
        x="420"
        y="120"
        width="140"
        height="160"
        fill="#1a1a1e"
        stroke="#3a3a42"
        strokeWidth="2"
        rx="4" />
      
      <text
        x="490"
        y="150"
        textAnchor="middle"
        fill="#e8e8ea"
        fontSize="14"
        fontFamily="JetBrains Mono">
        
        VPS Pool
      </text>
      {[0, 1, 2].map((i) =>
      <rect
        key={i}
        x="440"
        y={170 + i * 35}
        width="100"
        height="25"
        fill="#0d0d0f"
        stroke="#3a3a42"
        strokeWidth="1"
        rx="2" />

      )}

      {/* Connections */}
      <path d="M 160 200 L 220 200" stroke="#c0392b" strokeWidth="2" />
      <path d="M 340 200 L 420 200" stroke="#3a3a42" strokeWidth="2" />
    </svg>);

}
export function LoadBalancerPage() {
  const productData = {
    name: 'Load Balancer',
    tagline: 'Distribute attack traffic across multiple nodes',
    description:
    'Intelligent traffic distribution for offensive operations. Route C2 traffic, balance phishing campaigns, and simulate distributed attacks with enterprise-grade load balancing.',
    heroSvg: <LoadBalancerHeroSVG />,
    scenarios: [
    {
      icon: <Network className="w-8 h-8" />,
      title: 'C2 Traffic Distribution',
      description:
      'Distribute command and control traffic across multiple backend servers for resilience.'
    },
    {
      icon: <Shuffle className="w-8 h-8" />,
      title: 'Phishing Load Balancing',
      description:
      'Balance phishing campaign traffic to avoid detection and maximize delivery rates.'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'DDoS Simulation',
      description:
      'Coordinate distributed denial of service testing with traffic orchestration.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Multi-Region Operations',
      description:
      'Route traffic intelligently across geographic regions for global campaigns.'
    }],

    technicalTabs: [
    {
      name: 'Performance',
      specs: [
      {
        label: 'Throughput',
        value: 'Up to 10Gbps'
      },
      {
        label: 'Connections/sec',
        value: '100K+ new connections'
      },
      {
        label: 'Concurrent',
        value: '1M+ connections'
      },
      {
        label: 'Latency',
        value: '<1ms overhead'
      },
      {
        label: 'Algorithms',
        value: 'Round Robin, Least Conn, IP Hash'
      }]

    },
    {
      name: 'Networking',
      specs: [
      {
        label: 'Layer 4',
        value: 'TCP/UDP balancing'
      },
      {
        label: 'Layer 7',
        value: 'HTTP/HTTPS balancing'
      },
      {
        label: 'SSL/TLS',
        value: 'Termination & passthrough'
      },
      {
        label: 'IPv6',
        value: 'Full support'
      },
      {
        label: 'DDoS Protection',
        value: 'Built-in mitigation'
      }]

    },
    {
      name: 'Security',
      specs: [
      {
        label: 'Health Checks',
        value: 'Active monitoring'
      },
      {
        label: 'Sticky Sessions',
        value: 'Cookie & IP-based'
      },
      {
        label: 'Rate Limiting',
        value: 'Configurable limits'
      },
      {
        label: 'Access Control',
        value: 'IP whitelisting'
      },
      {
        label: 'Logging',
        value: 'Optional access logs'
      }]

    },
    {
      name: 'Regions',
      specs: [
      {
        label: 'Availability',
        value: 'All VXRT regions'
      },
      {
        label: 'Failover',
        value: 'Automatic failover'
      },
      {
        label: 'Geo-routing',
        value: 'Location-based'
      },
      {
        label: 'Multi-region',
        value: 'Cross-region support'
      },
      {
        label: 'Uptime SLA',
        value: '99.99%'
      }]

    }],

    architectureSvg: <LoadBalancerArchitectureSVG />,
    architectureDescription:
    'Load balancer distributing traffic from internet to VPS pool',
    features: [
    {
      title: 'Offensive Workflows',
      items: [
      'C2 traffic distribution',
      'Campaign traffic balancing',
      'Multi-stage attack routing',
      'Payload delivery optimization',
      'Traffic obfuscation']

    },
    {
      title: 'OPSEC & Isolation',
      items: [
      'No connection logging',
      'Encrypted backend traffic',
      'Anonymous frontend IPs',
      'Rapid reconfiguration',
      'Zero-downtime updates']

    },
    {
      title: 'API & Automation',
      items: [
      'Dynamic backend updates',
      'Health check automation',
      'Traffic policy API',
      'Metrics & monitoring',
      'Terraform integration']

    }],

    pricingStarting: '$15',
    pricingDescription: 'Scale from small campaigns to enterprise operations'
  };
  return <ProductPageTemplate data={productData} />;
}