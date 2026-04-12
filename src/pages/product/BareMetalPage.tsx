import { motion } from 'framer-motion';
import { ProductPageTemplate } from '../../components/product/ProductPageTemplate';
import { Server, Cpu, HardDrive, Shield, Zap, Lock } from 'lucide-react';

function BareMetalHeroSVG() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full max-w-md"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Server Chassis */}
      <motion.rect
        x="100"
        y="30"
        width="200"
        height="240"
        fill="#1a1a1e"
        stroke="#c0392b"
        strokeWidth="3"
        rx="8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* Drive Bays */}
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <motion.rect
          key={index}
          x="120"
          y={50 + index * 35}
          width="160"
          height="25"
          fill="#0d0d0f"
          stroke="#3a3a42"
          strokeWidth="1"
          rx="3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
        />
      ))}

      {/* Status Panel */}
      <motion.rect
        x="310"
        y="50"
        width="70"
        height="200"
        fill="#0d0d0f"
        stroke="#3a3a42"
        strokeWidth="1"
        rx="4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      />

      {/* Status LEDs */}
      {['#22c55e', '#22c55e', '#3b82f6', '#f59e0b', '#c0392b'].map((color, i) => (
        <motion.circle
          key={i}
          cx="345"
          cy={70 + i * 35}
          r="6"
          fill={color}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
        />
      ))}

      {/* Power Symbol */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
      >
        <circle cx="345" cy="230" r="12" fill="none" stroke="#c0392b" strokeWidth="2" />
        <path
          d="M345 220 L345 235"
          stroke="#c0392b"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>

      {/* Network Connection */}
      <motion.path
        d="M 200 270 L 200 290 L 350 290"
        stroke="#c0392b"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />

      <motion.circle
        cx="350"
        cy="290"
        r="8"
        fill="#1a1a1e"
        stroke="#c0392b"
        strokeWidth="2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.8, duration: 0.4 }}
      />
    </svg>
  );
}

function BareMetalArchitectureSVG() {
  return (
    <svg
      viewBox="0 0 600 400"
      className="w-full max-w-3xl"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Data Center */}
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
        VXRT Bare Metal Infrastructure
      </text>

      {/* Server Racks */}
      {[
        { x: 80, label: 'General Purpose', color: '#3b82f6' },
        { x: 180, label: 'GPU Compute', color: '#22c55e' },
        { x: 280, label: 'Storage', color: '#f59e0b' },
        { x: 380, label: 'High Memory', color: '#c0392b' },
        { x: 480, label: 'Network', color: '#8b5cf6' },
      ].map((rack, i) => (
        <g key={i}>
          <rect
            x={rack.x}
            y="110"
            width="60"
            height="180"
            fill="#0d0d0f"
            stroke={rack.color}
            strokeWidth="2"
            rx="4"
          />
          <text
            x={rack.x + 30}
            y="310"
            textAnchor="middle"
            fill={rack.color}
            fontSize="9"
            fontFamily="JetBrains Mono"
          >
            {rack.label}
          </text>
          {/* Server units */}
          {[0, 1, 2, 3, 4].map((u) => (
            <rect
              key={u}
              x={rack.x + 5}
              y={120 + u * 32}
              width="50"
              height="25"
              fill="#1a1a1e"
              stroke="#3a3a42"
              strokeWidth="1"
              rx="2"
            />
          ))}
        </g>
      ))}

      {/* Network Spine */}
      <rect x="50" y="330" width="500" height="30" fill="#0d0d0f" stroke="#3a3a42" strokeWidth="1" rx="4" />
      <text x="300" y="350" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontFamily="JetBrains Mono">
        High-Speed Network Fabric (100 Gbps)
      </text>
    </svg>
  );
}

const bareMetalData = {
  name: "Bare Metal",
  tagline: "Dedicated physical servers with no virtualization overhead",
  description:
    "Get complete control over dedicated physical servers. No hypervisor, no noisy neighbors—just raw performance for your most demanding workloads. Perfect for high-performance computing, large databases, and latency-sensitive applications.",
  heroSvg: <BareMetalHeroSVG />,
  scenarios: [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High-Performance Computing",
      description:
        "Run scientific simulations, rendering farms, and data processing at maximum performance.",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "GPU Workloads",
      description:
        "Dedicated GPU servers for AI/ML training, inference, and graphics-intensive applications.",
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Large Databases",
      description:
        "Run high-performance databases with direct access to NVMe storage and maximum IOPS.",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Compliance & Security",
      description:
        "Single-tenant infrastructure for the strictest compliance and security requirements.",
    },
  ],
  technicalTabs: [
    {
      name: "General",
      specs: [
        { label: "CPU", value: "Intel Xeon / AMD EPYC" },
        { label: "Cores", value: "8 - 64 physical cores" },
        { label: "Memory", value: "64 - 512 GB DDR4" },
        { label: "Storage", value: "2 - 12 NVMe SSDs" },
        { label: "Network", value: "10 - 100 Gbps" },
      ],
    },
    {
      name: "GPU",
      specs: [
        { label: "GPU", value: "NVIDIA A100 / H100 / RTX A6000" },
        { label: "GPU Memory", value: "24 - 80 GB HBM" },
        { label: "CPU", value: "AMD EPYC / Intel Xeon" },
        { label: "System RAM", value: "256 - 2048 GB" },
        { label: "Network", value: "100 Gbps RDMA" },
      ],
    },
    {
      name: "Storage",
      specs: [
        { label: "CPU", value: "Intel Xeon" },
        { label: "Cores", value: "16 - 32 cores" },
        { label: "Memory", value: "128 - 512 GB" },
        { label: "Storage", value: "24 - 72 TB NVMe" },
        { label: "Network", value: "25 - 100 Gbps" },
      ],
    },
    {
      name: "Memory-Opt",
      specs: [
        { label: "CPU", value: "Intel Xeon" },
        { label: "Cores", value: "32 - 64 cores" },
        { label: "Memory", value: "1 - 4 TB DDR4" },
        { label: "Storage", value: "4 - 16 NVMe SSDs" },
        { label: "Best for", value: "In-memory analytics" },
      ],
    },
  ],
  architectureSvg: <BareMetalArchitectureSVG />,
  architectureDescription:
    "Dedicated physical servers connected via high-speed network fabric with complete hardware isolation.",
  features: [
    {
      title: "No Virtualization",
      items: [
        "Direct hardware access",
        "Zero hypervisor overhead",
        "Predictable performance",
        "Custom kernel support",
      ],
    },
    {
      title: "Full Control",
      items: [
        "IPMI/KVM remote access",
        "Custom OS installation",
        "BIOS configuration",
        "Hardware monitoring",
      ],
    },
    {
      title: "Enterprise Grade",
      items: [
        "99.99% uptime SLA",
        "Redundant power & cooling",
        "DDoS protection included",
        "24/7 technical support",
      ],
    },
  ],
  pricingStarting: "$299",
  pricingDescription:
    "Monthly billing with no long-term contracts. Upgrade or downgrade anytime.",
};

export function BareMetalPage() {
  return <ProductPageTemplate data={bareMetalData} />;
}
