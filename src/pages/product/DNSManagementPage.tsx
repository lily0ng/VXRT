import React from 'react';
import { motion } from 'framer-motion';
import { ProductPageTemplate } from '../../components/product/ProductPageTemplate';
import { Globe, Shield, Shuffle, MapPin } from 'lucide-react';
function DNSHeroSVG() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full max-w-md"
      xmlns="http://www.w3.org/2000/svg">
      
      {/* Globe */}
      <motion.circle
        cx="200"
        cy="150"
        r="80"
        fill="none"
        stroke="#3a3a42"
        strokeWidth="2"
        initial={{
          scale: 0
        }}
        animate={{
          scale: 1
        }}
        transition={{
          duration: 0.6
        }} />
      
      <motion.ellipse
        cx="200"
        cy="150"
        rx="80"
        ry="30"
        fill="none"
        stroke="#3a3a42"
        strokeWidth="1"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 0.3,
          duration: 0.6
        }} />
      
      <motion.path
        d="M 200 70 L 200 230"
        stroke="#3a3a42"
        strokeWidth="1"
        initial={{
          pathLength: 0
        }}
        animate={{
          pathLength: 1
        }}
        transition={{
          delay: 0.5,
          duration: 0.6
        }} />
      

      {/* DNS Records pointing to services */}
      {[
      {
        angle: 0,
        label: 'A'
      },
      {
        angle: 72,
        label: 'AAAA'
      },
      {
        angle: 144,
        label: 'CNAME'
      },
      {
        angle: 216,
        label: 'MX'
      },
      {
        angle: 288,
        label: 'TXT'
      }].
      map((record, index) => {
        const x = 200 + Math.cos(record.angle * Math.PI / 180) * 120;
        const y = 150 + Math.sin(record.angle * Math.PI / 180) * 120;
        return (
          <motion.g
            key={index}
            initial={{
              opacity: 0,
              scale: 0
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              delay: 0.8 + index * 0.1,
              duration: 0.4
            }}>
            
            <circle
              cx={x}
              cy={y}
              r="15"
              fill="#1a1a1e"
              stroke="#c0392b"
              strokeWidth="2" />
            
            <text
              x={x}
              y={y + 5}
              textAnchor="middle"
              fill="#c0392b"
              fontSize="10"
              fontFamily="JetBrains Mono">
              
              {record.label}
            </text>
            <motion.path
              d={`M 200 150 L ${x} ${y}`}
              stroke="#c0392b"
              strokeWidth="1"
              strokeDasharray="3 3"
              initial={{
                pathLength: 0
              }}
              animate={{
                pathLength: 1
              }}
              transition={{
                delay: 1.2 + index * 0.1,
                duration: 0.5
              }} />
            
          </motion.g>);

      })}
    </svg>);

}
function DNSArchitectureSVG() {
  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full max-w-3xl"
      xmlns="http://www.w3.org/2000/svg">
      
      {/* Client */}
      <rect
        x="50"
        y="175"
        width="100"
        height="50"
        fill="#1a1a1e"
        stroke="#3a3a42"
        strokeWidth="2"
        rx="4" />
      
      <text
        x="100"
        y="205"
        textAnchor="middle"
        fill="#e8e8ea"
        fontSize="14"
        fontFamily="JetBrains Mono">
        
        Client
      </text>

      {/* DNS Server */}
      <rect
        x="220"
        y="175"
        width="100"
        height="50"
        fill="#1a1a1e"
        stroke="#c0392b"
        strokeWidth="2"
        rx="4" />
      
      <text
        x="270"
        y="205"
        textAnchor="middle"
        fill="#c0392b"
        fontSize="14"
        fontFamily="JetBrains Mono">
        
        DNS
      </text>

      {/* Services */}
      <rect
        x="390"
        y="100"
        width="100"
        height="50"
        fill="#1a1a1e"
        stroke="#3a3a42"
        strokeWidth="2"
        rx="4" />
      
      <text
        x="440"
        y="130"
        textAnchor="middle"
        fill="#e8e8ea"
        fontSize="12"
        fontFamily="JetBrains Mono">
        
        Service A
      </text>
      <rect
        x="390"
        y="175"
        width="100"
        height="50"
        fill="#1a1a1e"
        stroke="#3a3a42"
        strokeWidth="2"
        rx="4" />
      
      <text
        x="440"
        y="205"
        textAnchor="middle"
        fill="#e8e8ea"
        fontSize="12"
        fontFamily="JetBrains Mono">
        
        Service B
      </text>
      <rect
        x="390"
        y="250"
        width="100"
        height="50"
        fill="#1a1a1e"
        stroke="#3a3a42"
        strokeWidth="2"
        rx="4" />
      
      <text
        x="440"
        y="280"
        textAnchor="middle"
        fill="#e8e8ea"
        fontSize="12"
        fontFamily="JetBrains Mono">
        
        Service C
      </text>

      {/* Connections */}
      <path d="M 150 200 L 220 200" stroke="#3a3a42" strokeWidth="2" />
      <path d="M 320 200 L 390 125" stroke="#c0392b" strokeWidth="2" />
      <path d="M 320 200 L 390 200" stroke="#c0392b" strokeWidth="2" />
      <path d="M 320 200 L 390 275" stroke="#c0392b" strokeWidth="2" />
    </svg>);

}
export function DNSManagementPage() {
  const productData = {
    name: 'DNS Management',
    tagline: 'Secure DNS infrastructure for operational domains',
    description:
    'Enterprise DNS management built for offensive security. Configure domain fronting, fast-flux DNS, and manage campaign domains with advanced routing and OPSEC-focused features.',
    heroSvg: <DNSHeroSVG />,
    scenarios: [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Domain Fronting',
      description:
      'Configure domain fronting for C2 traffic obfuscation and censorship evasion.'
    },
    {
      icon: <Shuffle className="w-8 h-8" />,
      title: 'Fast-Flux DNS',
      description:
      'Rapidly rotate IP addresses to evade detection and blocklists.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Campaign Domains',
      description:
      'Manage hundreds of phishing and campaign domains from a single interface.'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'OPSEC DNS',
      description:
      'Privacy-focused DNS with no logging and anonymous registration support.'
    }],

    technicalTabs: [
    {
      name: 'Performance',
      specs: [
      {
        label: 'Query Speed',
        value: '<20ms global avg'
      },
      {
        label: 'Propagation',
        value: '<60 seconds'
      },
      {
        label: 'TTL Range',
        value: '1s - 86400s'
      },
      {
        label: 'Zones',
        value: 'Unlimited domains'
      },
      {
        label: 'Records/Zone',
        value: 'Up to 10,000'
      }]

    },
    {
      name: 'Networking',
      specs: [
      {
        label: 'Anycast',
        value: 'Global anycast network'
      },
      {
        label: 'DDoS Protection',
        value: 'Built-in mitigation'
      },
      {
        label: 'IPv6',
        value: 'Full AAAA support'
      },
      {
        label: 'DNSSEC',
        value: 'Optional signing'
      },
      {
        label: 'GeoDNS',
        value: 'Location-based routing'
      }]

    },
    {
      name: 'Security',
      specs: [
      {
        label: 'Record Types',
        value: 'A, AAAA, CNAME, MX, TXT, SRV, CAA'
      },
      {
        label: 'Wildcard',
        value: 'Wildcard records'
      },
      {
        label: 'ALIAS',
        value: 'ALIAS/ANAME support'
      },
      {
        label: 'Dynamic DNS',
        value: 'API-based updates'
      },
      {
        label: 'Access Control',
        value: 'Zone transfer ACLs'
      }]

    },
    {
      name: 'Regions',
      specs: [
      {
        label: 'PoPs',
        value: '200+ global PoPs'
      },
      {
        label: 'Uptime',
        value: '100% SLA'
      },
      {
        label: 'Redundancy',
        value: 'Multi-provider'
      },
      {
        label: 'Failover',
        value: 'Health-based failover'
      },
      {
        label: 'Monitoring',
        value: 'Real-time query logs'
      }]

    }],

    architectureSvg: <DNSArchitectureSVG />,
    architectureDescription:
    'DNS server routing clients to multiple backend services',
    features: [
    {
      title: 'Offensive Workflows',
      items: [
      'Domain fronting setup',
      'Fast-flux configuration',
      'Bulk domain management',
      'Campaign rotation',
      'Subdomain generation']

    },
    {
      title: 'OPSEC & Isolation',
      items: [
      'No query logging',
      'Anonymous registration',
      'Privacy-focused',
      'Instant deletion',
      'Whois protection']

    },
    {
      title: 'API & Automation',
      items: [
      'RESTful DNS API',
      'Terraform provider',
      'Bulk operations',
      'Webhook notifications',
      'Import/export zones']

    }],

    pricingStarting: '$2',
    pricingDescription: 'Per hosted zone with unlimited queries'
  };
  return <ProductPageTemplate data={productData} />;
}