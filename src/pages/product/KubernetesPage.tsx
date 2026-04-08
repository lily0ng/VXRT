import React from 'react';
import { motion } from 'framer-motion';
import { ProductPageTemplate } from '../../components/product/ProductPageTemplate';
import { Layers, Cpu, Network } from 'lucide-react';
function KubernetesHeroSVG() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full max-w-md"
      xmlns="http://www.w3.org/2000/svg">
      
      {/* Control Plane */}
      <motion.rect
        x="150"
        y="30"
        width="100"
        height="40"
        fill="#1a1a1e"
        stroke="#c0392b"
        strokeWidth="3"
        rx="4"
        initial={{
          opacity: 0,
          y: -20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.6
        }} />
      
      <text
        x="200"
        y="55"
        textAnchor="middle"
        fill="#c0392b"
        fontSize="12"
        fontFamily="JetBrains Mono">
        
        Control Plane
      </text>

      {/* Worker Nodes */}
      {[0, 1, 2].map((node) =>
      <motion.g
        key={node}
        initial={{
          opacity: 0,
          scale: 0
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          delay: 0.4 + node * 0.2,
          duration: 0.5
        }}>
        
          <rect
          x={50 + node * 120}
          y="120"
          width="100"
          height="140"
          fill="#1a1a1e"
          stroke="#3a3a42"
          strokeWidth="2"
          rx="4" />
        
          <text
          x={100 + node * 120}
          y="145"
          textAnchor="middle"
          fill="#6b6b72"
          fontSize="10"
          fontFamily="JetBrains Mono">
          
            Node {node + 1}
          </text>

          {/* Pods */}
          {[0, 1, 2].map((pod) =>
        <rect
          key={pod}
          x={60 + node * 120}
          y={160 + pod * 30}
          width="80"
          height="20"
          fill="#0d0d0f"
          stroke="#c0392b"
          strokeWidth="1"
          rx="2" />

        )}
        </motion.g>
      )}

      {/* Connection Lines */}
      {[0, 1, 2].map((node) =>
      <motion.path
        key={node}
        d={`M 200 70 L ${100 + node * 120} 120`}
        stroke="#c0392b"
        strokeWidth="1"
        strokeDasharray="3 3"
        fill="none"
        initial={{
          pathLength: 0
        }}
        animate={{
          pathLength: 1
        }}
        transition={{
          delay: 1 + node * 0.1,
          duration: 0.6
        }} />

      )}
    </svg>);

}
function KubernetesArchitectureSVG() {
  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full max-w-3xl"
      xmlns="http://www.w3.org/2000/svg">
      
      {/* K8s Cluster */}
      <rect
        x="50"
        y="100"
        width="200"
        height="200"
        fill="#1a1a1e"
        stroke="#c0392b"
        strokeWidth="2"
        rx="4" />
      
      <text
        x="150"
        y="130"
        textAnchor="middle"
        fill="#e8e8ea"
        fontSize="14"
        fontFamily="JetBrains Mono">
        
        K8s Cluster
      </text>

      {/* Storage */}
      <rect
        x="320"
        y="150"
        width="120"
        height="80"
        fill="#1a1a1e"
        stroke="#3a3a42"
        strokeWidth="2"
        rx="4" />
      
      <text
        x="380"
        y="195"
        textAnchor="middle"
        fill="#e8e8ea"
        fontSize="14"
        fontFamily="JetBrains Mono">
        
        Storage
      </text>

      {/* Registry */}
      <rect
        x="320"
        y="250"
        width="120"
        height="80"
        fill="#1a1a1e"
        stroke="#3a3a42"
        strokeWidth="2"
        rx="4" />
      
      <text
        x="380"
        y="295"
        textAnchor="middle"
        fill="#e8e8ea"
        fontSize="14"
        fontFamily="JetBrains Mono">
        
        Registry
      </text>

      {/* Connections */}
      <path d="M 250 190 L 320 190" stroke="#3a3a42" strokeWidth="2" />
      <path d="M 250 240 L 320 290" stroke="#3a3a42" strokeWidth="2" />
    </svg>);

}
export function KubernetesPage() {
  const productData = {
    name: 'Kubernetes',
    tagline: 'Container orchestration for scalable offensive tooling',
    description:
    'Deploy and scale offensive security tools with Kubernetes. Managed clusters optimized for security operations, automated exploit pipelines, and distributed scanning infrastructure.',
    heroSvg: <KubernetesHeroSVG />,
    scenarios: [
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Scalable Scanning',
      description:
      'Deploy distributed scanners that auto-scale based on target scope and workload.'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Exploit Pipelines',
      description:
      'Automated CI/CD pipelines for exploit development, testing, and deployment.'
    },
    {
      icon: <div className="w-8 h-8" />,
      title: 'CTF Platforms',
      description:
      'Host capture-the-flag competitions with isolated challenge containers.'
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Tool Deployment',
      description:
      'Package and deploy offensive tools as containers with version control.'
    }],

    technicalTabs: [
    {
      name: 'Performance',
      specs: [
      {
        label: 'Control Plane',
        value: 'Managed & HA'
      },
      {
        label: 'Node Pools',
        value: 'Auto-scaling groups'
      },
      {
        label: 'Node Sizes',
        value: '2-64 vCPU per node'
      },
      {
        label: 'Max Nodes',
        value: 'Up to 100 nodes'
      },
      {
        label: 'Pod Density',
        value: '110 pods/node'
      }]

    },
    {
      name: 'Networking',
      specs: [
      {
        label: 'CNI',
        value: 'Calico, Cilium'
      },
      {
        label: 'Service Mesh',
        value: 'Istio optional'
      },
      {
        label: 'Load Balancer',
        value: 'Integrated LB'
      },
      {
        label: 'Ingress',
        value: 'NGINX, Traefik'
      },
      {
        label: 'Network Policy',
        value: 'Full support'
      }]

    },
    {
      name: 'Security',
      specs: [
      {
        label: 'RBAC',
        value: 'Role-based access'
      },
      {
        label: 'Secrets',
        value: 'Encrypted at rest'
      },
      {
        label: 'Pod Security',
        value: 'PSP/PSA enabled'
      },
      {
        label: 'Image Scanning',
        value: 'Trivy integration'
      },
      {
        label: 'Audit Logs',
        value: 'Optional logging'
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
        label: 'Multi-AZ',
        value: 'High availability'
      },
      {
        label: 'Version',
        value: 'Latest stable K8s'
      },
      {
        label: 'Upgrades',
        value: 'Automated upgrades'
      },
      {
        label: 'SLA',
        value: '99.95% uptime'
      }]

    }],

    architectureSvg: <KubernetesArchitectureSVG />,
    architectureDescription:
    'Kubernetes cluster with integrated storage and container registry',
    features: [
    {
      title: 'Offensive Workflows',
      items: [
      'Pre-built security tool images',
      'Automated scanning jobs',
      'Exploit testing pipelines',
      'Distributed brute-forcing',
      'Multi-tenant isolation']

    },
    {
      title: 'OPSEC & Isolation',
      items: [
      'Network policy enforcement',
      'Pod security standards',
      'Encrypted etcd',
      'Private registries',
      'Namespace isolation']

    },
    {
      title: 'API & Automation',
      items: [
      'kubectl access',
      'Helm chart support',
      'GitOps workflows',
      'Prometheus metrics',
      'Custom operators']

    }],

    pricingStarting: '$75',
    pricingDescription: 'Managed control plane with flexible node pool pricing'
  };
  return <ProductPageTemplate data={productData} />;
}