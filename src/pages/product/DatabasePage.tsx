import { motion } from 'framer-motion';
import { ProductPageTemplate } from '../../components/product/ProductPageTemplate';
import { Database, Server, Shield, Zap, Activity, Clock } from 'lucide-react';

function DatabaseHeroSVG() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full max-w-md"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Database Cylinder Stack */}
      <motion.g
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Cylinder Base */}
        <ellipse cx="200" cy="240" rx="80" ry="20" fill="#1a1a1e" stroke="#c0392b" strokeWidth="3" />
        <ellipse cx="200" cy="180" rx="80" ry="20" fill="#0d0d0f" stroke="#c0392b" strokeWidth="2" />
        <ellipse cx="200" cy="120" rx="80" ry="20" fill="#0d0d0f" stroke="#c0392b" strokeWidth="2" />
        <ellipse cx="200" cy="60" rx="80" ry="20" fill="#0d0d0f" stroke="#c0392b" strokeWidth="2" />

        {/* Cylinder Sides */}
        <rect x="120" y="60" width="160" height="180" fill="#0d0d0f" />
        <line x1="120" y1="60" x2="120" y2="240" stroke="#c0392b" strokeWidth="2" />
        <line x1="280" y1="60" x2="280" y2="240" stroke="#c0392b" strokeWidth="2" />

        {/* Top Cover */}
        <ellipse cx="200" cy="60" rx="80" ry="20" fill="#1a1a1e" stroke="#c0392b" strokeWidth="3" />

        {/* Data Rows */}
        {[0, 1, 2, 3].map((row) => (
          <motion.g key={row} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + row * 0.2 }}>
            {[0, 1, 2, 3].map((col) => (
              <rect
                key={col}
                x={140 + col * 35}
                y={75 + row * 40}
                width="25"
                height="8"
                rx="2"
                fill={col === 0 ? '#c0392b' : '#3a3a42'}
              />
            ))}
          </motion.g>
        ))}
      </motion.g>

      {/* Connection Nodes */}
      <motion.circle cx="50" cy="150" r="20" fill="#1a1a1e" stroke="#3b82f6" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} />
      <motion.circle cx="350" cy="150" r="20" fill="#1a1a1e" stroke="#22c55e" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 }} />

      {/* Connection Lines */}
      <motion.path d="M 70 150 L 120 150" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.6 }} />
      <motion.path d="M 280 150 L 330 150" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.8 }} />

      {/* Active Indicator */}
      <motion.circle cx="200" cy="150" r="5" fill="#c0392b" initial={{ scale: 0 }} animate={{ scale: [1, 1.5, 1] }} transition={{ delay: 2, duration: 1.5, repeat: Infinity }} />
    </svg>
  );
}

function DatabaseArchitectureSVG() {
  return (
    <svg viewBox="0 0 600 400" className="w-full max-w-3xl" xmlns="http://www.w3.org/2000/svg">
      {/* Primary Database */}
      <rect x="200" y="80" width="200" height="120" fill="#1a1a1e" stroke="#c0392b" strokeWidth="2" rx="8" />
      <text x="300" y="110" textAnchor="middle" fill="#e8e8ea" fontSize="14" fontFamily="JetBrains Mono">Primary Node</text>
      <ellipse cx="220" cy="100" rx="6" ry="6" fill="#22c55e" />

      {/* Replica Nodes */}
      <rect x="50" y="220" width="140" height="100" fill="#0d0d0f" stroke="#3b82f6" strokeWidth="2" rx="8" />
      <text x="120" y="250" textAnchor="middle" fill="#3b82f6" fontSize="12" fontFamily="JetBrains Mono">Read Replica 1</text>
      <ellipse cx="70" cy="240" rx="6" ry="6" fill="#22c55e" />

      <rect x="230" y="220" width="140" height="100" fill="#0d0d0f" stroke="#3b82f6" strokeWidth="2" rx="8" />
      <text x="300" y="250" textAnchor="middle" fill="#3b82f6" fontSize="12" fontFamily="JetBrains Mono">Read Replica 2</text>
      <ellipse cx="250" cy="240" rx="6" ry="6" fill="#22c55e" />

      <rect x="410" y="220" width="140" height="100" fill="#0d0d0f" stroke="#3b82f6" strokeWidth="2" rx="8" />
      <text x="480" y="250" textAnchor="middle" fill="#3b82f6" fontSize="12" fontFamily="JetBrains Mono">Read Replica 3</text>
      <ellipse cx="430" cy="240" rx="6" ry="6" fill="#22c55e" />

      {/* Connection Lines */}
      <path d="M 200 140 L 120 220" stroke="#3a3a42" strokeWidth="2" strokeDasharray="5 5" />
      <path d="M 300 200 L 300 220" stroke="#3a3a42" strokeWidth="2" strokeDasharray="5 5" />
      <path d="M 400 140 L 480 220" stroke="#3a3a42" strokeWidth="2" strokeDasharray="5 5" />

      {/* Backup Storage */}
      <rect x="230" y="340" width="140" height="40" fill="#0d0d0f" stroke="#f59e0b" strokeWidth="2" rx="4" />
      <text x="300" y="365" textAnchor="middle" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono">Automated Backups</text>
    </svg>
  );
}

const databaseData = {
  name: "Database",
  tagline: "Managed databases for PostgreSQL, MySQL, and more",
  description:
    "Fully managed database clusters with automated backups, high availability, and read replicas. Focus on your application while we handle maintenance, patching, and scaling. Support for PostgreSQL, MySQL, Redis, and MongoDB.",
  heroSvg: <DatabaseHeroSVG />,
  scenarios: [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Application Backend",
      description:
        "Reliable SQL databases for web applications with automated failover and point-in-time recovery.",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description:
        "Read replicas for analytics workloads without impacting production performance.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Caching Layer",
      description:
        "Managed Redis clusters for session storage, caching, and real-time data processing.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time-Series Data",
      description:
        "Optimized storage and querying for metrics, logs, and IoT data streams.",
    },
  ],
  technicalTabs: [
    {
      name: "PostgreSQL",
      specs: [
        { label: "Version", value: "15.x, 16.x" },
        { label: "Storage", value: "10 GB - 10 TB" },
        { label: "vCPU", value: "Shared - 32 cores" },
        { label: "Memory", value: "1 - 128 GB" },
        { label: "Replicas", value: "Up to 5 read replicas" },
      ],
    },
    {
      name: "MySQL",
      specs: [
        { label: "Version", value: "8.0.x" },
        { label: "Storage", value: "10 GB - 10 TB" },
        { label: "vCPU", value: "Shared - 32 cores" },
        { label: "Memory", value: "1 - 128 GB" },
        { label: "Replicas", value: "Up to 5 read replicas" },
      ],
    },
    {
      name: "Redis",
      specs: [
        { label: "Version", value: "7.x" },
        { label: "Memory", value: "250 MB - 64 GB" },
        { label: "Cluster", value: "Up to 6 shards" },
        { label: "Persistence", value: "AOF + RDB" },
        { label: "HA", value: "Multi-zone replicas" },
      ],
    },
    {
      name: "MongoDB",
      specs: [
        { label: "Version", value: "6.x, 7.x" },
        { label: "Storage", value: "10 GB - 10 TB" },
        { label: "RAM", value: "1 - 128 GB" },
        { label: "Sharding", value: "Automatic" },
        { label: "Replicas", value: "3-node minimum" },
      ],
    },
  ],
  architectureSvg: <DatabaseArchitectureSVG />,
  architectureDescription:
    "High-availability database clusters with primary-replica topology and automated failover.",
  features: [
    {
      title: "Managed Operations",
      items: [
        "Automated backups",
        "Patching & updates",
        "Performance monitoring",
        "Query optimization",
      ],
    },
    {
      title: "High Availability",
      items: [
        "Multi-zone deployment",
        "Automatic failover",
        "Read replicas",
        "Point-in-time recovery",
      ],
    },
    {
      title: "Security",
      items: [
        "Encryption at rest",
        "SSL/TLS connections",
        "Private networking",
        "Access controls",
      ],
    },
  ],
  pricingStarting: "$15",
  pricingDescription:
    "Hourly billing based on compute and storage. Backups and bandwidth included.",
};

export function DatabasePage() {
  return <ProductPageTemplate data={databaseData} />;
}
