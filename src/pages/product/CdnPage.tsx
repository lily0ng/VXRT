import { motion } from 'framer-motion';
import { ProductPageTemplate } from '../../components/product/ProductPageTemplate';
import { Globe, Zap, Shield, Activity, Server, Lock } from 'lucide-react';

function CdnHeroSVG() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full max-w-md"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Globe */}
      <motion.circle
        cx="200"
        cy="150"
        r="80"
        fill="#1a1a1e"
        stroke="#c0392b"
        strokeWidth="3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Grid Lines */}
      <motion.ellipse
        cx="200"
        cy="150"
        rx="80"
        ry="30"
        fill="none"
        stroke="#3a3a42"
        strokeWidth="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      />
      <motion.ellipse
        cx="200"
        cy="150"
        rx="30"
        ry="80"
        fill="none"
        stroke="#3a3a42"
        strokeWidth="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      />
      <motion.line x1="120" y1="150" x2="280" y2="150" stroke="#3a3a42" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
      <motion.line x1="200" y1="70" x2="200" y2="230" stroke="#3a3a42" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />

      {/* CDN Nodes */}
      {[
        { x: 50, y: 50, delay: 0.6 },
        { x: 330, y: 50, delay: 0.7 },
        { x: 50, y: 230, delay: 0.8 },
        { x: 330, y: 230, delay: 0.9 },
        { x: 200, y: 30, delay: 1.0 },
        { x: 200, y: 260, delay: 1.1 },
      ].map((node, i) => (
        <motion.g key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: node.delay }}>
          <circle cx={node.x} cy={node.y} r="15" fill="#0d0d0f" stroke="#3b82f6" strokeWidth="2" />
          <circle cx={node.x} cy={node.y} r="8" fill="#3b82f6" opacity="0.5" />
        </motion.g>
      ))}

      {/* Connection Lines from Center */}
      <motion.path d="M 200 150 L 50 50" stroke="#c0392b" strokeWidth="1" strokeDasharray="3 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2 }} />
      <motion.path d="M 200 150 L 330 50" stroke="#c0392b" strokeWidth="1" strokeDasharray="3 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.3 }} />
      <motion.path d="M 200 150 L 50 230" stroke="#c0392b" strokeWidth="1" strokeDasharray="3 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.4 }} />
      <motion.path d="M 200 150 L 330 230" stroke="#c0392b" strokeWidth="1" strokeDasharray="3 3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.5 }} />

      {/* Pulse Animation */}
      <motion.circle cx="200" cy="150" r="85" fill="none" stroke="#c0392b" strokeWidth="2" opacity="0.3" initial={{ scale: 1 }} animate={{ scale: 1.2, opacity: 0 }} transition={{ delay: 1.6, duration: 1.5, repeat: Infinity }} />
    </svg>
  );
}

function CdnArchitectureSVG() {
  return (
    <svg viewBox="0 0 600 400" className="w-full max-w-3xl" xmlns="http://www.w3.org/2000/svg">
      {/* Origin Server */}
      <rect x="250" y="300" width="100" height="80" fill="#1a1a1e" stroke="#c0392b" strokeWidth="2" rx="4" />
      <text x="300" y="340" textAnchor="middle" fill="#e8e8ea" fontSize="12" fontFamily="JetBrains Mono">Origin</text>

      {/* Edge Locations */}
      {[
        { x: 30, y: 50, label: 'NYC' },
        { x: 130, y: 50, label: 'LON' },
        { x: 230, y: 50, label: 'FRA' },
        { x: 330, y: 50, label: 'SIN' },
        { x: 430, y: 50, label: 'TYO' },
        { x: 530, y: 50, label: 'SYD' },
      ].map((loc, i) => (
        <g key={i}>
          <rect x={loc.x} y={loc.y} width="60" height="60" fill="#0d0d0f" stroke="#3b82f6" strokeWidth="2" rx="4" />
          <text x={loc.x + 30} y={loc.y + 35} textAnchor="middle" fill="#3b82f6" fontSize="10" fontFamily="JetBrains Mono">{loc.label}</text>
        </g>
      ))}

      {/* Connection Lines */}
      <path d="M 60 110 L 300 300" stroke="#3a3a42" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M 160 110 L 300 300" stroke="#3a3a42" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M 260 110 L 300 300" stroke="#3a3a42" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M 360 110 L 300 300" stroke="#3a3a42" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M 460 110 L 300 300" stroke="#3a3a42" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M 560 110 L 300 300" stroke="#3a3a42" strokeWidth="1" strokeDasharray="4 4" />

      {/* Load Balancer */}
      <rect x="225" y="200" width="150" height="40" fill="#1a1a1e" stroke="#f59e0b" strokeWidth="2" rx="4" />
      <text x="300" y="225" textAnchor="middle" fill="#f59e0b" fontSize="10" fontFamily="JetBrains Mono">Global Load Balancer</text>
    </svg>
  );
}

const cdnData = {
  name: "CDN",
  tagline: "Global content delivery with edge caching and DDoS protection",
  description:
    "Accelerate your content delivery with a global network of edge locations. Cache static and dynamic content close to your users for faster load times and reduced origin load. Built-in DDoS protection and WAF keep your content secure.",
  heroSvg: <CdnHeroSVG />,
  scenarios: [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Acceleration",
      description:
        "Deliver static assets, images, and scripts from edge locations for faster page loads.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "API Caching",
      description:
        "Cache API responses at the edge to reduce origin load and improve response times.",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Live Streaming",
      description:
        "Low-latency video delivery with adaptive bitrate streaming for global audiences.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "DDoS Protection",
      description:
        "Absorb and mitigate DDoS attacks at the edge before they reach your origin.",
    },
  ],
  technicalTabs: [
    {
      name: "Standard",
      specs: [
        { label: "Edge Locations", value: "50+ worldwide" },
        { label: "Cache Storage", value: "Up to 500 GB" },
        { label: "Bandwidth", value: "Up to 10 Gbps" },
        { label: "HTTP/2", value: "Supported" },
        { label: "SSL/TLS", value: "Free certificates" },
      ],
    },
    {
      name: "Pro",
      specs: [
        { label: "Edge Locations", value: "100+ worldwide" },
        { label: "Cache Storage", value: "Up to 2 TB" },
        { label: "Bandwidth", value: "Up to 50 Gbps" },
        { label: "HTTP/3", value: "Supported" },
        { label: "WAF", value: "Included" },
      ],
    },
    {
      name: "Enterprise",
      specs: [
        { label: "Edge Locations", value: "200+ worldwide" },
        { label: "Cache Storage", value: "Unlimited" },
        { label: "Bandwidth", value: "Unlimited" },
        { label: "Private PoPs", value: "Available" },
        { label: "Dedicated IP", value: "Included" },
      ],
    },
    {
      name: "Streaming",
      specs: [
        { label: "Protocol", value: "HLS, DASH" },
        { label: "Latency", value: "< 3 seconds" },
        { label: "Transcoding", value: "On-the-fly" },
        { label: "DRM", value: "Widevine, FairPlay" },
        { label: "Analytics", value: "Real-time" },
      ],
    },
  ],
  architectureSvg: <CdnArchitectureSVG />,
  architectureDescription:
    "Global network of edge locations that cache and deliver content from the closest point to your users.",
  features: [
    {
      title: "Global Network",
      items: [
        "50+ edge locations",
        "Anycast routing",
        "Smart cache revalidation",
        "Real-time purge",
      ],
    },
    {
      title: "Security",
      items: [
        "DDoS protection",
        "Web Application Firewall",
        "Bot management",
        "Rate limiting",
      ],
    },
    {
      title: "Optimization",
      items: [
        "Brotli/Gzip compression",
        "Image optimization",
        "Lazy loading",
        "Prefetching",
      ],
    },
  ],
  pricingStarting: "$0.05",
  pricingDescription:
    "Pay per GB delivered. First 100 GB free every month.",
};

export function CdnPage() {
  return <ProductPageTemplate data={cdnData} />;
}
