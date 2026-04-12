import { motion } from 'framer-motion';
import { ProductPageTemplate } from '../../components/product/ProductPageTemplate';
import { Server, Cpu, HardDrive, Shield } from 'lucide-react';

function ComputeHeroSVG() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full max-w-md"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main Server Rack */}
      <motion.rect
        x="120"
        y="40"
        width="160"
        height="220"
        fill="#1a1a1e"
        stroke="#c0392b"
        strokeWidth="3"
        rx="8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* Server Units */}
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.g
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.15, duration: 0.4 }}
        >
          <rect
            x="135"
            y={55 + index * 40}
            width="130"
            height="30"
            fill="#0d0d0f"
            stroke="#3a3a42"
            strokeWidth="1"
            rx="4"
          />
          {/* Status LEDs */}
          <circle
            cx="150"
            cy={70 + index * 40}
            r="3"
            fill={index === 0 ? "#c0392b" : "#22c55e"}
          />
          <circle
            cx="160"
            cy={70 + index * 40}
            r="3"
            fill="#3b82f6"
          />
          {/* Drive indicators */}
          <rect
            x="250"
            y={65 + index * 40}
            width="8"
            height="10"
            fill="#3a3a42"
            rx="1"
          />
        </motion.g>
      ))}

      {/* Connection lines */}
      <motion.path
        d="M 200 260 L 200 280 L 100 280"
        stroke="#c0392b"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      />
      <motion.path
        d="M 200 280 L 300 280"
        stroke="#c0392b"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />

      {/* Network indicator */}
      <motion.circle
        cx="100"
        cy="280"
        r="8"
        fill="#1a1a1e"
        stroke="#c0392b"
        strokeWidth="2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.4, duration: 0.4 }}
      />
      <motion.circle
        cx="300"
        cy="280"
        r="8"
        fill="#1a1a1e"
        stroke="#c0392b"
        strokeWidth="2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
      />
    </svg>
  );
}

function ComputeArchitectureSVG() {
  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full max-w-3xl"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Datacenter Region */}
      <rect
        x="50"
        y="50"
        width="500"
        height="300"
        fill="#1a1a1e"
        stroke="#c0392b"
        strokeWidth="2"
        rx="8"
      />
      <text
        x="300"
        y="80"
        textAnchor="middle"
        fill="#e8e8ea"
        fontSize="16"
        fontFamily="JetBrains Mono"
      >
        VXRT Compute Infrastructure
      </text>

      {/* Compute Pools */}
      {[
        { x: 80, y: 110, label: "General Purpose", color: "#3b82f6" },
        { x: 230, y: 110, label: "CPU Optimized", color: "#c0392b" },
        { x: 380, y: 110, label: "Memory Optimized", color: "#22c55e" },
      ].map((pool, i) => (
        <g key={i}>
          <rect
            x={pool.x}
            y={pool.y}
            width="120"
            height="150"
            fill="#0d0d0f"
            stroke={pool.color}
            strokeWidth="2"
            rx="4"
          />
          <text
            x={pool.x + 60}
            y={pool.y + 20}
            textAnchor="middle"
            fill={pool.color}
            fontSize="10"
            fontFamily="JetBrains Mono"
          >
            {pool.label}
          </text>
          {/* Server icons */}
          {[0, 1, 2].map((row) => (
            <g key={row}>
              <rect
                x={pool.x + 15}
                y={pool.y + 40 + row * 35}
                width="90"
                height="25"
                fill="#1a1a1e"
                stroke="#3a3a42"
                strokeWidth="1"
                rx="2"
              />
              <circle
                cx={pool.x + 25}
                cy={pool.y + 52 + row * 35}
                r="2"
                fill={pool.color}
              />
            </g>
          ))}
        </g>
      ))}

      {/* Load Balancer */}
      <rect
        x="200"
        y="280"
        width="200"
        height="40"
        fill="#1a1a1e"
        stroke="#f59e0b"
        strokeWidth="2"
        rx="4"
      />
      <text
        x="300"
        y="305"
        textAnchor="middle"
        fill="#f59e0b"
        fontSize="12"
        fontFamily="JetBrains Mono"
      >
        Global Load Balancer
      </text>

      {/* Connection lines */}
      <path
        d="M 140 260 L 140 280 L 200 280"
        stroke="#3a3a42"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M 290 260 L 290 280"
        stroke="#3a3a42"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M 440 260 L 440 280 L 400 280"
        stroke="#3a3a42"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

const computeData = {
  name: "Compute",
  tagline: "High-performance virtual machines for any workload",
  description:
    "Deploy and scale virtual machines in seconds. Choose from flexible configurations optimized for general purpose, CPU-intensive, or memory-intensive workloads. Built for reliability with enterprise-grade hardware and global availability.",
  heroSvg: <ComputeHeroSVG />,
  scenarios: [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Web Applications",
      description:
        "Host websites, APIs, and microservices with flexible scaling and high availability.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Compute-Intensive Workloads",
      description:
        "Run batch processing, analytics, and rendering jobs on dedicated CPU-optimized instances.",
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Databases & Storage",
      description:
        "Deploy high-memory instances for databases, caches, and in-memory analytics workloads.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Testing",
      description:
        "Isolated environments for penetration testing, malware analysis, and security research.",
    },
  ],
  technicalTabs: [
    {
      name: "Basic",
      specs: [
        { label: "vCPU", value: "Shared" },
        { label: "Memory", value: "512 MB - 16 GB" },
        { label: "Storage", value: "10 - 320 GB SSD" },
        { label: "Network", value: "Up to 2 Gbps" },
        { label: "Best for", value: "Development, small apps" },
      ],
    },
    {
      name: "General",
      specs: [
        { label: "vCPU", value: "Dedicated 2 - 16 cores" },
        { label: "Memory", value: "8 - 64 GB" },
        { label: "Storage", value: "25 - 200 GB NVMe" },
        { label: "Network", value: "Up to 10 Gbps" },
        { label: "Best for", value: "Production workloads" },
      ],
    },
    {
      name: "CPU-Opt",
      specs: [
        { label: "vCPU", value: "Dedicated 2 - 32 cores" },
        { label: "Memory", value: "4 - 64 GB" },
        { label: "Storage", value: "25 - 400 GB NVMe" },
        { label: "Network", value: "Up to 10 Gbps" },
        { label: "Best for", value: "Video encoding, CI/CD" },
      ],
    },
    {
      name: "Memory-Opt",
      specs: [
        { label: "vCPU", value: "Dedicated 2 - 16 cores" },
        { label: "Memory", value: "16 - 128 GB" },
        { label: "Storage", value: "50 - 500 GB NVMe" },
        { label: "Network", value: "Up to 10 Gbps" },
        { label: "Best for", value: "Databases, caching" },
      ],
    },
  ],
  architectureSvg: <ComputeArchitectureSVG />,
  architectureDescription:
    "Distributed compute infrastructure across global regions with automated failover and load balancing.",
  features: [
    {
      title: "Flexible Scaling",
      items: [
        "Vertical scaling up to 32 vCPUs",
        "Horizontal scaling with auto-scaling groups",
        "Resize without downtime",
        "Burstable performance options",
      ],
    },
    {
      title: "Enterprise Security",
      items: [
        "Isolated virtual machines",
        "Private networking (VPC)",
        "Cloud firewall protection",
        "DDoS mitigation included",
      ],
    },
    {
      title: "Global Infrastructure",
      items: [
        "8+ regions worldwide",
        "99.99% uptime SLA",
        "SSD storage standard",
        "Private networking between regions",
      ],
    },
  ],
  pricingStarting: "$4",
  pricingDescription:
    "Pay only for what you use. Flexible hourly billing with no long-term contracts required.",
};

export function ComputePage() {
  return <ProductPageTemplate data={computeData} />;
}
