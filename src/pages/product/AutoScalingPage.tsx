import React from 'react';
import { motion } from 'framer-motion';
import { ProductPageTemplate } from '../../components/product/ProductPageTemplate';
import { TrendingUp, TrendingDown, Activity, Zap } from 'lucide-react';
function AutoScalingHeroSVG() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full max-w-md"
      xmlns="http://www.w3.org/2000/svg">
      
      {/* Graph Background */}
      <motion.g
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 0.6
        }}>
        
        <path d="M 50 250 L 350 250" stroke="#3a3a42" strokeWidth="1" />
        <path d="M 50 50 L 50 250" stroke="#3a3a42" strokeWidth="1" />
      </motion.g>

      {/* Instance Count Line */}
      <motion.path
        d="M 50 200 L 100 180 L 150 120 L 200 100 L 250 140 L 300 180 L 350 200"
        stroke="#c0392b"
        strokeWidth="3"
        fill="none"
        initial={{
          pathLength: 0
        }}
        animate={{
          pathLength: 1
        }}
        transition={{
          duration: 2,
          delay: 0.5
        }} />
      

      {/* Scaling Events */}
      {[
      {
        x: 150,
        y: 120,
        type: 'up'
      },
      {
        x: 250,
        y: 140,
        type: 'down'
      }].
      map((event, index) =>
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
          delay: 1.5 + index * 0.3,
          duration: 0.4
        }}>
        
          <circle cx={event.x} cy={event.y} r="6" fill="#c0392b" />
          {event.type === 'up' ?
        <path
          d={`M ${event.x} ${event.y - 20} L ${event.x} ${event.y - 10}`}
          stroke="#c0392b"
          strokeWidth="2"
          markerEnd="url(#arrowup)" /> :


        <path
          d={`M ${event.x} ${event.y + 20} L ${event.x} ${event.y + 10}`}
          stroke="#6b6b72"
          strokeWidth="2"
          markerEnd="url(#arrowdown)" />

        }
        </motion.g>
      )}

      {/* Axis Labels */}
      <text
        x="200"
        y="275"
        textAnchor="middle"
        fill="#6b6b72"
        fontSize="12"
        fontFamily="JetBrains Mono">
        
        Time
      </text>
      <text
        x="30"
        y="150"
        textAnchor="middle"
        fill="#6b6b72"
        fontSize="12"
        fontFamily="JetBrains Mono"
        transform="rotate(-90 30 150)">
        
        Instances
      </text>

      <defs>
        <marker
          id="arrowup"
          markerWidth="10"
          markerHeight="10"
          refX="5"
          refY="5"
          orient="auto">
          
          <path
            d="M0,5 L5,0 L10,5"
            fill="none"
            stroke="#c0392b"
            strokeWidth="2" />
          
        </marker>
        <marker
          id="arrowdown"
          markerWidth="10"
          markerHeight="10"
          refX="5"
          refY="5"
          orient="auto">
          
          <path
            d="M0,5 L5,10 L10,5"
            fill="none"
            stroke="#6b6b72"
            strokeWidth="2" />
          
        </marker>
      </defs>
    </svg>);

}
function AutoScalingArchitectureSVG() {
  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full max-w-3xl"
      xmlns="http://www.w3.org/2000/svg">
      
      {/* Metrics */}
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
        
        Metrics
      </text>

      {/* Auto Scaler */}
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
        
        Auto Scaler
      </text>

      {/* Instance Pool */}
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
        
        Instances
      </text>

      {/* Connections */}
      <path d="M 170 200 L 240 200" stroke="#3a3a42" strokeWidth="2" />
      <path d="M 360 200 L 430 200" stroke="#c0392b" strokeWidth="2" />
    </svg>);

}
export function AutoScalingPage() {
  const productData = {
    name: 'Auto Scaling',
    tagline: 'Scale infrastructure dynamically based on operation demands',
    description:
    'Intelligent auto-scaling for offensive operations. Automatically scale compute resources up during active engagements and down during idle periods to optimize costs and performance.',
    heroSvg: <AutoScalingHeroSVG />,
    scenarios: [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Burst Scanning',
      description:
      'Scale up scanner instances during reconnaissance phases, scale down after completion.'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Campaign Peak Handling',
      description:
      'Handle traffic spikes during phishing campaigns with automatic capacity adjustment.'
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: 'Cost Optimization',
      description:
      'Reduce costs by automatically scaling down infrastructure during off-hours.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automated Teardown',
      description:
      'Automatically destroy resources after engagement completion for OPSEC.'
    }],

    technicalTabs: [
    {
      name: 'Performance',
      specs: [
      {
        label: 'Scale Up Time',
        value: '<60 seconds'
      },
      {
        label: 'Scale Down Time',
        value: '<30 seconds'
      },
      {
        label: 'Min Instances',
        value: '0 (zero-scale)'
      },
      {
        label: 'Max Instances',
        value: 'Up to 100'
      },
      {
        label: 'Cooldown',
        value: 'Configurable'
      }]

    },
    {
      name: 'Networking',
      specs: [
      {
        label: 'Load Balancer',
        value: 'Auto-registration'
      },
      {
        label: 'Health Checks',
        value: 'Automated checks'
      },
      {
        label: 'Warm Pool',
        value: 'Pre-warmed instances'
      },
      {
        label: 'Lifecycle Hooks',
        value: 'Custom hooks'
      },
      {
        label: 'Multi-AZ',
        value: 'Cross-AZ scaling'
      }]

    },
    {
      name: 'Security',
      specs: [
      {
        label: 'Metrics',
        value: 'CPU, RAM, Network, Custom'
      },
      {
        label: 'Triggers',
        value: 'Threshold-based'
      },
      {
        label: 'Scheduled',
        value: 'Time-based scaling'
      },
      {
        label: 'Predictive',
        value: 'ML-based forecasting'
      },
      {
        label: 'Manual',
        value: 'API override'
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
        label: 'Multi-Region',
        value: 'Cross-region groups'
      },
      {
        label: 'Failover',
        value: 'Automatic failover'
      },
      {
        label: 'Monitoring',
        value: 'Real-time metrics'
      },
      {
        label: 'Alerts',
        value: 'Webhook notifications'
      }]

    }],

    architectureSvg: <AutoScalingArchitectureSVG />,
    architectureDescription:
    'Auto scaler monitoring metrics and adjusting instance pool size',
    features: [
    {
      title: 'Offensive Workflows',
      items: [
      'Burst scanning automation',
      'Campaign traffic handling',
      'Resource optimization',
      'Scheduled operations',
      'Zero-scale idle periods']

    },
    {
      title: 'OPSEC & Isolation',
      items: [
      'Automatic cleanup',
      'Ephemeral infrastructure',
      'No persistent state',
      'Rapid teardown',
      'Cost containment']

    },
    {
      title: 'API & Automation',
      items: [
      'Policy API',
      'Metric integration',
      'Terraform support',
      'Webhook triggers',
      'Custom metrics']

    }],

    pricingStarting: '$10',
    pricingDescription: 'Pay only for running instances, no scaling fees'
  };
  return <ProductPageTemplate data={productData} />;
}