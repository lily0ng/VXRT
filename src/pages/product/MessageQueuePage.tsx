import { motion } from 'framer-motion';
import { ProductPageTemplate } from '../../components/product/ProductPageTemplate';
import { MessageSquare, Zap, Layers, Activity, Clock, Shield } from 'lucide-react';

function MessageQueueHeroSVG() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full max-w-md"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Queue Container */}
      <motion.rect
        x="150"
        y="50"
        width="100"
        height="200"
        fill="#1a1a1e"
        stroke="#c0392b"
        strokeWidth="3"
        rx="8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* Messages in Queue */}
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.rect
          key={index}
          x="165"
          y={70 + index * 30}
          width="70"
          height="20"
          rx="4"
          fill="#0d0d0f"
          stroke="#3a3a42"
          strokeWidth="1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + index * 0.15, duration: 0.4 }}
        />
      ))}

      {/* Producer */}
      <motion.g initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
        <rect x="30" y="100" width="80" height="50" fill="#0d0d0f" stroke="#3b82f6" strokeWidth="2" rx="4" />
        <text x="70" y="130" textAnchor="middle" fill="#3b82f6" fontSize="10" fontFamily="JetBrains Mono">Producer</text>
      </motion.g>

      {/* Consumer */}
      <motion.g initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
        <rect x="290" y="100" width="80" height="50" fill="#0d0d0f" stroke="#22c55e" strokeWidth="2" rx="4" />
        <text x="330" y="130" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="JetBrains Mono">Consumer</text>
      </motion.g>

      {/* Connection Arrows */}
      <motion.path
        d="M 110 125 L 150 90"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowhead)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.0 }}
      />
      <motion.path
        d="M 250 90 L 290 125"
        stroke="#22c55e"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowhead)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.1 }}
      />

      {/* Multiple Consumers */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        <rect x="290" y="160" width="80" height="50" fill="#0d0d0f" stroke="#22c55e" strokeWidth="2" rx="4" />
        <text x="330" y="190" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="JetBrains Mono">Consumer 2</text>
        <path d="M 250 150 L 290 185" stroke="#22c55e" strokeWidth="2" strokeDasharray="3 3" fill="none" />
      </motion.g>

      {/* Arrow Marker */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#3a3a42" />
        </marker>
      </defs>
    </svg>
  );
}

function MessageQueueArchitectureSVG() {
  return (
    <svg viewBox="0 0 600 400" className="w-full max-w-3xl" xmlns="http://www.w3.org/2000/svg">
      {/* Producers */}
      {[
        { x: 50, y: 80, label: 'Web App' },
        { x: 50, y: 180, label: 'Mobile' },
        { x: 50, y: 280, label: 'IoT' },
      ].map((prod, i) => (
        <g key={i}>
          <rect x={prod.x} y={prod.y} width="100" height="60" fill="#0d0d0f" stroke="#3b82f6" strokeWidth="2" rx="4" />
          <text x={prod.x + 50} y={prod.y + 35} textAnchor="middle" fill="#3b82f6" fontSize="12" fontFamily="JetBrains Mono">{prod.label}</text>
        </g>
      ))}

      {/* Queue Cluster */}
      <rect x="250" y="100" width="100" height="200" fill="#1a1a1e" stroke="#c0392b" strokeWidth="2" rx="8" />
      <text x="300" y="130" textAnchor="middle" fill="#e8e8ea" fontSize="12" fontFamily="JetBrains Mono">Queue</text>
      <text x="300" y="150" textAnchor="middle" fill="#c0392b" fontSize="10" fontFamily="JetBrains Mono">Cluster</text>

      {/* Queue Nodes */}
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="265" y={170 + i * 25} width="70" height="15" fill="#0d0d0f" stroke="#3a3a42" strokeWidth="1" rx="2" />
      ))}

      {/* Consumers */}
      {[
        { x: 450, y: 80, label: 'Worker 1' },
        { x: 450, y: 180, label: 'Worker 2' },
        { x: 450, y: 280, label: 'Worker 3' },
      ].map((cons, i) => (
        <g key={i}>
          <rect x={cons.x} y={cons.y} width="100" height="60" fill="#0d0d0f" stroke="#22c55e" strokeWidth="2" rx="4" />
          <text x={cons.x + 50} y={cons.y + 35} textAnchor="middle" fill="#22c55e" fontSize="12" fontFamily="JetBrains Mono">{cons.label}</text>
        </g>
      ))}

      {/* Connection Lines */}
      <path d="M 150 110 L 250 140" stroke="#3a3a42" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M 150 210 L 250 180" stroke="#3a3a42" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M 150 310 L 250 240" stroke="#3a3a42" strokeWidth="1" strokeDasharray="4 4" />

      <path d="M 350 140 L 450 110" stroke="#3a3a42" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M 350 200 L 450 210" stroke="#3a3a42" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M 350 260 L 450 310" stroke="#3a3a42" strokeWidth="1" strokeDasharray="4 4" />
    </svg>
  );
}

const messageQueueData = {
  name: "Message Queue",
  tagline: "Managed messaging for distributed applications",
  description:
    "Reliable message queuing for decoupling services and building scalable distributed systems. Support for Apache Kafka, RabbitMQ, and Redis Streams with automated scaling and monitoring.",
  heroSvg: <MessageQueueHeroSVG />,
  scenarios: [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Microservices",
      description:
        "Decouple services with asynchronous messaging for better scalability and fault tolerance.",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Event Streaming",
      description:
        "Process real-time event streams for analytics, monitoring, and reactive applications.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Background Jobs",
      description:
        "Queue long-running tasks for background processing with retry and dead-letter handling.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Load Leveling",
      description:
        "Absorb traffic spikes by queuing requests and processing at a steady rate.",
    },
  ],
  technicalTabs: [
    {
      name: "Kafka",
      specs: [
        { label: "Version", value: "3.6.x" },
        { label: "Partitions", value: "Unlimited" },
        { label: "Retention", value: "Up to 30 days" },
        { label: "Throughput", value: "100 MB/s" },
        { label: "Replicas", value: "3 per topic" },
      ],
    },
    {
      name: "RabbitMQ",
      specs: [
        { label: "Version", value: "3.12.x" },
        { label: "Queues", value: "Unlimited" },
        { label: "Messages", value: "Unlimited" },
        { label: "Protocols", value: "AMQP, MQTT, STOMP" },
        { label: "Cluster", value: "3 nodes min" },
      ],
    },
    {
      name: "Redis",
      specs: [
        { label: "Version", value: "7.x" },
        { label: "Memory", value: "Up to 64 GB" },
        { label: "Streams", value: "Unlimited" },
        { label: "Consumer Groups", value: "Unlimited" },
        { label: "HA", value: "Multi-zone" },
      ],
    },
    {
      name: "SQS-Compatible",
      specs: [
        { label: "API", value: "AWS SQS compatible" },
        { label: "Visibility", value: "Up to 12 hours" },
        { label: "Delay", value: "Up to 15 minutes" },
        { label: "FIFO", value: "Supported" },
        { label: "DLQ", value: "Built-in" },
      ],
    },
  ],
  architectureSvg: <MessageQueueArchitectureSVG />,
  architectureDescription:
    "Distributed queue cluster with multiple producers and consumers for high-throughput messaging.",
  features: [
    {
      title: "Reliability",
      items: [
        "Message persistence",
        "At-least-once delivery",
        "Dead letter queues",
        "Automatic retries",
      ],
    },
    {
      title: "Scalability",
      items: [
        "Auto-scaling partitions",
        "Horizontal scaling",
        "Load balancing",
        "Consumer groups",
      ],
    },
    {
      title: "Observability",
      items: [
        "Message throughput metrics",
        "Consumer lag monitoring",
        "Dead letter tracking",
        "Alerting integration",
      ],
    },
  ],
  pricingStarting: "$25",
  pricingDescription:
    "Per cluster hour. Messages and storage billed separately based on usage.",
};

export function MessageQueuePage() {
  return <ProductPageTemplate data={messageQueueData} />;
}
