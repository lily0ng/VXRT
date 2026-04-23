import { motion } from 'framer-motion';
import { 
  Server, 
  Network, 
  Shield, 
  Database, 
  Globe, 
  Cpu,
  HardDrive,
  Cloud,
  Lock,
  Zap,
  Activity,
  Building2,
  MapPin,
  Router,
  Flame,
  Target,
  CheckCircle,
  ArrowRight,
  ArrowDown,
  Layers,
  Box
} from 'lucide-react';

export function InfraDesing() {
  return (
    <div className="w-full bg-void-black min-h-screen">
      {/* Section 1: IaaS Infrastructure Design */}
      <section className="py-24 border-b border-border/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-2 bg-exploit-red/10 border border-exploit-red/30 rounded-full text-sm font-mono text-exploit-red uppercase tracking-wider mb-4 inline-block">
              Infrastructure
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-4">
              IaaS Infrastructure Design
            </h2>
            <p className="text-muted-text max-w-2xl mx-auto">
              Scalable cloud infrastructure architecture diagram
            </p>
          </motion.div>

          {/* IaaS Diagram */}
          <div className="bg-gradient-to-br from-[#1a1a20] to-[#0f0f12] border border-border/50 rounded-2xl p-8 overflow-hidden">
            <div className="flex flex-col items-center gap-4">
              {/* Load Balancer */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-2xl bg-[#0a0a0e] border-2 border-exploit-red/50 rounded-xl p-6 text-center"
              >
                <div className="flex items-center justify-center gap-4">
                  <Layers className="w-8 h-8 text-exploit-red" />
                  <div>
                    <h3 className="text-lg font-bold text-ghost-white">Load Balancer</h3>
                    <p className="text-sm text-muted-text">Auto-scaling & Traffic Distribution</p>
                  </div>
                </div>
              </motion.div>

              {/* Connection Line */}
              <div className="flex flex-col items-center gap-1">
                <ArrowDown className="w-6 h-6 text-exploit-red" />
                <div className="w-0.5 h-8 bg-gradient-to-b from-exploit-red to-transparent" />
              </div>

              {/* Web Servers Row */}
              <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                <div className="hidden md:flex flex-col items-center gap-1">
                  <ArrowRight className="w-6 h-6 text-blue-400 rotate-90" />
                  <div className="w-0.5 h-12 bg-gradient-to-b from-blue-400 to-transparent" />
                </div>
                <div className="flex-1 grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-[#0a0a0e] border border-blue-500/50 rounded-xl p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Server className="w-6 h-6 text-blue-400" />
                        <h3 className="font-bold text-ghost-white">Web {i}</h3>
                      </div>
                      <div className="space-y-2 text-xs text-muted-text">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>Nginx/Apache</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>SSL Termination</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="hidden md:flex flex-col items-center gap-1">
                  <ArrowRight className="w-6 h-6 text-blue-400 -rotate-90" />
                  <div className="w-0.5 h-12 bg-gradient-to-b from-blue-400 to-transparent" />
                </div>
              </div>

              {/* Connection Line */}
              <div className="flex flex-col items-center gap-1">
                <ArrowDown className="w-6 h-6 text-purple-400" />
                <div className="w-0.5 h-8 bg-gradient-to-b from-purple-400 to-transparent" />
              </div>

              {/* Application Servers Row */}
              <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                <div className="hidden md:flex flex-col items-center gap-1">
                  <ArrowRight className="w-6 h-6 text-purple-400 rotate-90" />
                  <div className="w-0.5 h-12 bg-gradient-to-b from-purple-400 to-transparent" />
                </div>
                <div className="flex-1 grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="bg-[#0a0a0e] border border-purple-500/50 rounded-xl p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Cpu className="w-6 h-6 text-purple-400" />
                        <h3 className="font-bold text-ghost-white">App {i}</h3>
                      </div>
                      <div className="space-y-2 text-xs text-muted-text">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>Node.js/Python</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>Microservices</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="hidden md:flex flex-col items-center gap-1">
                  <ArrowRight className="w-6 h-6 text-purple-400 -rotate-90" />
                  <div className="w-0.5 h-12 bg-gradient-to-b from-purple-400 to-transparent" />
                </div>
              </div>

              {/* Connection Line */}
              <div className="flex flex-col items-center gap-1">
                <ArrowDown className="w-6 h-6 text-green-400" />
                <div className="w-0.5 h-8 bg-gradient-to-b from-green-400 to-transparent" />
              </div>

              {/* Database */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="w-full max-w-2xl bg-[#0a0a0e] border-2 border-green-500/50 rounded-xl p-6 text-center"
              >
                <div className="flex items-center justify-center gap-4">
                  <Database className="w-8 h-8 text-green-400" />
                  <div>
                    <h3 className="text-lg font-bold text-ghost-white">Database Cluster</h3>
                    <p className="text-sm text-muted-text">PostgreSQL / Redis / MongoDB</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: AI Infrastructure Design */}
      <section className="py-24 border-b border-border/30 bg-gradient-to-b from-void-black to-[#0a0a0e]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm font-mono text-purple-400 uppercase tracking-wider mb-4 inline-block">
              AI & ML
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-4">
              AI Infrastructure Design
            </h2>
            <p className="text-muted-text max-w-2xl mx-auto">
              Machine learning infrastructure architecture
            </p>
          </motion.div>

          {/* AI Diagram */}
          <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/30 rounded-2xl p-8">
            <div className="flex flex-col items-center gap-4">
              {/* Data Ingestion */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-md bg-[#0a0a0e] border-2 border-purple-500/50 rounded-xl p-6"
              >
                <Database className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="font-bold text-ghost-white mb-2">Data Ingestion</h3>
                <div className="space-y-1 text-xs text-muted-text">
                  <p>• Streaming Pipeline</p>
                  <p>• Batch Processing</p>
                  <p>• Data Lake</p>
                </div>
              </motion.div>

              {/* Connection Line */}
              <div className="flex flex-col items-center gap-1">
                <ArrowDown className="w-6 h-6 text-purple-400" />
                <div className="w-0.5 h-8 bg-gradient-to-b from-purple-400 to-transparent" />
              </div>

              {/* Training & Model Registry Row */}
              <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                <div className="hidden md:flex flex-col items-center gap-1">
                  <ArrowRight className="w-6 h-6 text-purple-400 rotate-90" />
                  <div className="w-0.5 h-12 bg-gradient-to-b from-purple-400 to-transparent" />
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-[#0a0a0e] border border-purple-500/50 rounded-xl p-6"
                  >
                    <Cpu className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="font-bold text-ghost-white mb-2">Training Cluster</h3>
                    <div className="space-y-1 text-xs text-muted-text">
                      <p>• GPU Nodes (A100/H100)</p>
                      <p>• Distributed Training</p>
                      <p>• Hyperparameter Tuning</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="bg-[#0a0a0e] border border-purple-500/50 rounded-xl p-6"
                  >
                    <Box className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="font-bold text-ghost-white mb-2">Model Registry</h3>
                    <div className="space-y-1 text-xs text-muted-text">
                      <p>• Version Control</p>
                      <p>• Artifacts</p>
                      <p>• Metadata</p>
                    </div>
                  </motion.div>
                </div>
                <div className="hidden md:flex flex-col items-center gap-1">
                  <ArrowRight className="w-6 h-6 text-purple-400 -rotate-90" />
                  <div className="w-0.5 h-12 bg-gradient-to-b from-purple-400 to-transparent" />
                </div>
              </div>

              {/* Connection Line */}
              <div className="flex flex-col items-center gap-1">
                <ArrowDown className="w-6 h-6 text-purple-400" />
                <div className="w-0.5 h-8 bg-gradient-to-b from-purple-400 to-transparent" />
              </div>

              {/* Inference & MLOps Row */}
              <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                <div className="hidden md:flex flex-col items-center gap-1">
                  <ArrowRight className="w-6 h-6 text-purple-400 rotate-90" />
                  <div className="w-0.5 h-12 bg-gradient-to-b from-purple-400 to-transparent" />
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="bg-[#0a0a0e] border border-purple-500/50 rounded-xl p-6"
                  >
                    <Zap className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="font-bold text-ghost-white mb-2">Inference API</h3>
                    <div className="space-y-1 text-xs text-muted-text">
                      <p>• Model Serving</p>
                      <p>• Auto-scaling</p>
                      <p>• Low Latency</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="bg-[#0a0a0e] border border-purple-500/50 rounded-xl p-6"
                  >
                    <Activity className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="font-bold text-ghost-white mb-2">MLOps</h3>
                    <div className="space-y-1 text-xs text-muted-text">
                      <p>• Performance Metrics</p>
                      <p>• Drift Detection</p>
                      <p>• Retraining Pipeline</p>
                    </div>
                  </motion.div>
                </div>
                <div className="hidden md:flex flex-col items-center gap-1">
                  <ArrowRight className="w-6 h-6 text-purple-400 -rotate-90" />
                  <div className="w-0.5 h-12 bg-gradient-to-b from-purple-400 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Full Data Center Design */}
      <section className="py-24 border-b border-border/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm font-mono text-blue-400 uppercase tracking-wider mb-4 inline-block">
              Data Centers
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-4">
              Full Data Center Design
            </h2>
            <p className="text-muted-text max-w-2xl mx-auto">
              Global data center infrastructure across Myanmar regions
            </p>
          </motion.div>

          {/* Data Center Map */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Yangon (YGN)', 
                tier: 'Tier 3+',
                uptime: '99.982%',
                icon: Building2,
                color: 'from-blue-500 to-cyan-500',
                features: ['100Gbps Connectivity', 'Redundant Power', '24/7 Security', 'Climate Control']
              },
              { 
                name: 'Naypyidaw (NPT)', 
                tier: 'Tier 4',
                uptime: '99.995%',
                icon: Server,
                color: 'from-green-500 to-emerald-500',
                features: ['Fault Tolerant', 'Dual Power Feeds', 'Biometric Access', 'Fire Suppression']
              },
              { 
                name: 'Mandalay (MDY)', 
                tier: 'Tier 3',
                uptime: '99.9%',
                icon: HardDrive,
                color: 'from-orange-500 to-red-500',
                features: ['Edge Computing', 'CDN Node', 'Local Peering', 'Backup Site']
              }
            ].map((dc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-[#1a1a20] to-[#0f0f12] border border-border/50 rounded-2xl overflow-hidden group"
              >
                <div className={`h-1 bg-gradient-to-r ${dc.color}`} />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${dc.color} rounded-xl flex items-center justify-center`}>
                      <dc.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-ghost-white">{dc.name}</h3>
                      <p className="text-sm text-muted-text">{dc.tier} • {dc.uptime} Uptime</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {dc.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-muted-text">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Network Design */}
      <section className="py-24 border-b border-border/30 bg-gradient-to-b from-void-black to-[#0a0a0e]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm font-mono text-green-400 uppercase tracking-wider mb-4 inline-block">
              Networking
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-4">
              Network Design Architecture
            </h2>
            <p className="text-muted-text max-w-2xl mx-auto">
              Secure and high-performance network topology
            </p>
          </motion.div>

          {/* Network Diagram */}
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8">
            <div className="flex flex-col items-center gap-4">
              {/* Internet */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-md bg-[#0a0a0e] border-2 border-green-500/50 rounded-xl p-6 text-center"
              >
                <Globe className="w-10 h-10 text-green-400 mx-auto mb-3" />
                <h3 className="font-bold text-ghost-white text-sm">Internet</h3>
              </motion.div>

              {/* Connection Line */}
              <div className="flex flex-col items-center gap-1">
                <ArrowDown className="w-6 h-6 text-green-400" />
                <div className="w-0.5 h-8 bg-gradient-to-b from-green-400 to-transparent" />
              </div>

              {/* Firewall & Load Balancer Row */}
              <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                <div className="hidden md:flex flex-col items-center gap-1">
                  <ArrowRight className="w-6 h-6 text-green-400 rotate-90" />
                  <div className="w-0.5 h-12 bg-gradient-to-b from-green-400 to-transparent" />
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-[#0a0a0e] border border-green-500/50 rounded-xl p-6 text-center"
                  >
                    <Shield className="w-10 h-10 text-green-400 mx-auto mb-3" />
                    <h3 className="font-bold text-ghost-white text-sm">Firewall</h3>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="bg-[#0a0a0e] border border-green-500/50 rounded-xl p-6 text-center"
                  >
                    <Layers className="w-10 h-10 text-green-400 mx-auto mb-3" />
                    <h3 className="font-bold text-ghost-white text-sm">Load Balancer</h3>
                  </motion.div>
                </div>
                <div className="hidden md:flex flex-col items-center gap-1">
                  <ArrowRight className="w-6 h-6 text-green-400 -rotate-90" />
                  <div className="w-0.5 h-12 bg-gradient-to-b from-green-400 to-transparent" />
                </div>
              </div>

              {/* Connection Line */}
              <div className="flex flex-col items-center gap-1">
                <ArrowDown className="w-6 h-6 text-green-400" />
                <div className="w-0.5 h-8 bg-gradient-to-b from-green-400 to-transparent" />
              </div>

              {/* Servers Row */}
              <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                <div className="hidden md:flex flex-col items-center gap-1">
                  <ArrowRight className="w-6 h-6 text-green-400 rotate-90" />
                  <div className="w-0.5 h-12 bg-gradient-to-b from-green-400 to-transparent" />
                </div>
                <div className="flex-1 grid grid-cols-3 gap-4">
                  {[
                    { icon: Server, name: 'Web Servers' },
                    { icon: Database, name: 'DB Cluster' },
                    { icon: Cloud, name: 'App Servers' }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="bg-[#0a0a0e] border border-green-500/50 rounded-xl p-6 text-center"
                    >
                      <item.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                      <h3 className="font-bold text-ghost-white text-sm">{item.name}</h3>
                    </motion.div>
                  ))}
                </div>
                <div className="hidden md:flex flex-col items-center gap-1">
                  <ArrowRight className="w-6 h-6 text-green-400 -rotate-90" />
                  <div className="w-0.5 h-12 bg-gradient-to-b from-green-400 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Firewall & Security */}
      <section className="py-24 border-b border-border/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-sm font-mono text-red-400 uppercase tracking-wider mb-4 inline-block">
              Security
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-4">
              Firewall & Security Layers
            </h2>
            <p className="text-muted-text max-w-2xl mx-auto">
              Multi-layered security architecture diagram
            </p>
          </motion.div>

          {/* Security Layers */}
          <div className="space-y-4">
            {[
              { layer: 1, name: 'DDoS Protection', icon: Shield, desc: 'Global mitigation network', color: 'red' },
              { layer: 2, name: 'WAF', icon: Lock, desc: 'Web application firewall', color: 'orange' },
              { layer: 3, name: 'Next-Gen Firewall', icon: Flame, desc: 'Deep packet inspection', color: 'yellow' },
              { layer: 4, name: 'Network ACL', icon: Network, desc: 'Access control lists', color: 'green' },
              { layer: 5, name: 'Zero Trust', icon: Target, desc: 'Identity-based security', color: 'blue' },
              { layer: 6, name: 'Endpoint Security', icon: CheckCircle, desc: 'Device-level protection', color: 'purple' }
            ].map((security, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 bg-gradient-to-r from-[#1a1a20] to-[#0f0f12] border border-border/50 rounded-xl p-6 hover:border-exploit-red/50 transition-all"
              >
                <div className={`w-12 h-12 bg-${security.color}-500/20 rounded-lg flex items-center justify-center shrink-0`}>
                  <security.icon className={`w-6 h-6 text-${security.color}-400`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono text-muted-text">Layer {security.layer}</span>
                    <h3 className="font-bold text-ghost-white">{security.name}</h3>
                  </div>
                  <p className="text-sm text-muted-text">{security.desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-text" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Storage & Backup */}
      <section className="py-24 border-b border-border/30 bg-gradient-to-b from-void-black to-[#0a0a0e]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm font-mono text-cyan-400 uppercase tracking-wider mb-4 inline-block">
              Storage
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-4">
              Storage & Backup Architecture
            </h2>
            <p className="text-muted-text max-w-2xl mx-auto">
              Redundant storage systems with automated backup
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: HardDrive, title: 'Primary Storage', desc: 'SSD RAID 10 array', capacity: '100TB' },
              { icon: Database, title: 'Backup Storage', desc: 'Object storage (S3 compatible)', capacity: '500TB' },
              { icon: Cloud, title: 'DR Site', desc: 'Geo-redundant backup', capacity: '200TB' }
            ].map((storage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all group"
              >
                <storage.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-heading font-bold text-ghost-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {storage.title}
                </h3>
                <p className="text-sm text-muted-text mb-4">{storage.desc}</p>
                <div className="text-2xl font-bold text-ghost-white">{storage.capacity}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Monitoring & Observability */}
      <section className="py-24 bg-gradient-to-b from-void-black to-[#0a0a0e]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-sm font-mono text-yellow-400 uppercase tracking-wider mb-4 inline-block">
              Observability
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-4">
              Monitoring & Observability Stack
            </h2>
            <p className="text-muted-text max-w-2xl mx-auto">
              Complete visibility into system performance and health
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Activity, title: 'Metrics', tools: 'Prometheus, Grafana' },
              { icon: Database, title: 'Logs', tools: 'ELK Stack, Loki' },
              { icon: Zap, title: 'Traces', tools: 'Jaeger, Tempo' },
              { icon: Flame, title: 'Alerts', tools: 'AlertManager, PagerDuty' }
            ].map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-6 hover:border-yellow-500/50 transition-all group"
              >
                <stack.icon className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="text-lg font-heading font-bold text-ghost-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {stack.title}
                </h3>
                <p className="text-sm text-muted-text">{stack.tools}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
