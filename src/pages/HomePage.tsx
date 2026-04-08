import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { AnimatedCounter } from '../components/shared/AnimatedCounter';
import { AnimatedGridBackground } from '../components/shared/AnimatedGridBackground';
import { SectionHeading } from '../components/shared/SectionHeading';
import {
  Server,
  Network,
  Database,
  Shield,
  Target,
  Search,
  CloudCog,
  Code,
  Users,
  Zap,
  Lock,
  Activity,
  Globe,
  BoxIcon } from
'lucide-react';
export function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <AnimatedGridBackground />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6
              }}
              className="space-y-6">
              
              <Badge
                variant="outline"
                className="border-exploit-red text-exploit-red font-mono">
                
                ELITE OFFENSIVE SECURITY OPERATIONS
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-ghost-white leading-tight">
                Attack first.
                <br />
                Defend always.
              </h1>
              <p className="text-lg md:text-xl text-muted-gray font-body max-w-xl">
                Real-world adversary simulation. Zero-day research. Red-team
                operations that expose your blind spots before attackers do.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-exploit-red hover:bg-exploit-red/90 text-ghost-white font-heading">
                  
                  GET ASSESSMENT →
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-steel-gray text-ghost-white hover:text-exploit-red font-heading">
                  
                  VIEW RESEARCH
                </Button>
              </div>
            </motion.div>

            {/* Right: Animated SVG */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              className="relative h-[500px] flex items-center justify-center">
              
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Central VXRT Node */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="40"
                  fill="#c0392b"
                  initial={{
                    scale: 0
                  }}
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }} />
                
                <text
                  x="200"
                  y="205"
                  textAnchor="middle"
                  fill="#e8e8ea"
                  fontSize="14"
                  fontFamily="JetBrains Mono"
                  fontWeight="bold">
                  
                  VXRT
                </text>

                {/* Surrounding Nodes */}
                {[
                {
                  x: 200,
                  y: 80,
                  label: 'Cloud',
                  angle: 0
                },
                {
                  x: 320,
                  y: 200,
                  label: 'On-Prem',
                  angle: 90
                },
                {
                  x: 200,
                  y: 320,
                  label: 'Endpoints',
                  angle: 180
                },
                {
                  x: 80,
                  y: 200,
                  label: 'Network',
                  angle: 270
                }].
                map((node, i) =>
                <g key={i}>
                    <motion.line
                    x1="200"
                    y1="200"
                    x2={node.x}
                    y2={node.y}
                    stroke="#c0392b"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{
                      pathLength: 0
                    }}
                    animate={{
                      pathLength: 1
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2
                    }} />
                  
                    <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r="25"
                    fill="#1a1a1e"
                    stroke="#3a3a42"
                    strokeWidth="2"
                    initial={{
                      scale: 0
                    }}
                    animate={{
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity
                    }} />
                  
                    <text
                    x={node.x}
                    y={node.y + 4}
                    textAnchor="middle"
                    fill="#6b6b72"
                    fontSize="11"
                    fontFamily="JetBrains Mono">
                    
                      {node.label}
                    </text>
                  </g>
                )}

                {/* Attack Path Indicators */}
                {[45, 135, 225, 315].map((angle, i) => {
                  const rad = angle * Math.PI / 180;
                  const x = 200 + Math.cos(rad) * 100;
                  const y = 200 + Math.sin(rad) * 100;
                  return (
                    <motion.circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="#c0392b"
                      initial={{
                        opacity: 0
                      }}
                      animate={{
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity
                      }} />);


                })}
              </svg>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.4
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-steel-gray">
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-exploit-red mb-1">
                200+
              </div>
              <div className="text-sm text-muted-gray font-body">
                Engagements
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-exploit-red mb-1">
                98%
              </div>
              <div className="text-sm text-muted-gray font-body">
                Success Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-exploit-red mb-1">
                40+
              </div>
              <div className="text-sm text-muted-gray font-body">
                CVEs Found
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-exploit-red mb-1">
                15+
              </div>
              <div className="text-sm text-muted-gray font-body">
                Certifications
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-20 bg-void-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Infrastructure built for security teams"
            description="Enterprise-grade compute, networking, and storage designed for offensive operations"
            className="mb-12" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            {
              icon: Server,
              title: 'Compute',
              desc: 'High-performance VMs and bare metal',
              href: '/product/compute'
            },
            {
              icon: Network,
              title: 'Networking',
              desc: 'Global load balancing and DNS',
              href: '/product/load-balancer'
            },
            {
              icon: Database,
              title: 'Storage',
              desc: 'Block and object storage solutions',
              href: '/product/block-storage'
            },
            {
              icon: BoxIcon,
              title: 'Orchestration',
              desc: 'Kubernetes and auto-scaling',
              href: '/product/kubernetes'
            }].
            map((item, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1
              }}>
              
                <Link to={item.href}>
                  <Card className="h-full hover:border-exploit-red transition-all group cursor-pointer">
                    <CardContent className="p-6">
                      <item.icon className="w-10 h-10 text-exploit-red mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-heading font-bold text-ghost-white mb-2 group-hover:text-exploit-red transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-gray font-body text-sm">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-dark-base">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Offensive security services"
            description="Comprehensive testing and adversary simulation"
            className="mb-12" />
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
            {
              icon: Shield,
              title: 'Penetration Testing',
              desc: 'Comprehensive security assessments across all attack surfaces',
              href: '/services/penetration-testing'
            },
            {
              icon: Target,
              title: 'Red Teaming',
              desc: 'Full-spectrum adversary simulation exercises',
              href: '/services/red-teaming'
            },
            {
              icon: Search,
              title: 'Vulnerability Assessment',
              desc: 'Systematic discovery and classification of vulnerabilities',
              href: '/services/vulnerability-assessment'
            },
            {
              icon: CloudCog,
              title: 'Cloud Penetration Testing',
              desc: 'Cloud-native security testing for AWS, Azure, GCP',
              href: '/services/cloud-penetration-testing'
            },
            {
              icon: Code,
              title: 'Exploit Development',
              desc: 'Custom exploit creation and weaponization',
              href: '/services/exploit-development'
            },
            {
              icon: Users,
              title: 'Purple Teaming',
              desc: 'Collaborative defense improvement programs',
              href: '/services/purple-teaming'
            }].
            map((item, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1
              }}>
              
                <Link to={item.href}>
                  <Card className="h-full hover:border-exploit-red transition-all group cursor-pointer bg-void-black">
                    <CardContent className="p-6 flex items-start gap-4">
                      <item.icon className="w-8 h-8 text-exploit-red flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <h3 className="text-lg font-heading font-bold text-ghost-white mb-2 group-hover:text-exploit-red transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-gray font-body text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )}
          </div>

          {/* VXRT Core Platform */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.6
            }}
            className="mt-6 max-w-5xl mx-auto">
            
            <Card className="border-exploit-red bg-gradient-to-r from-exploit-red/10 to-transparent">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-6 h-6 text-exploit-red" />
                  <h3 className="text-xl font-heading font-bold text-ghost-white">
                    VXRT Core Platform
                  </h3>
                  <Badge className="bg-exploit-red text-ghost-white">
                    Featured
                  </Badge>
                </div>
                <p className="text-muted-gray font-body">
                  Complete offensive security platform with integrated
                  infrastructure, tooling, and collaboration features for
                  security teams.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Why VXRT Section */}
      <section className="py-20 bg-void-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why choose VXRT"
            description="Built by operators, for operators"
            className="mb-12" />
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
            {
              icon: Lock,
              title: 'Real-World Adversaries',
              desc: 'We think like attackers because we are attackers. Our team includes active bug bounty hunters and exploit developers.'
            },
            {
              icon: Activity,
              title: 'Continuous Innovation',
              desc: 'Active zero-day research, CVE discoveries, and tool development. We stay ahead of the threat landscape.'
            },
            {
              icon: Globe,
              title: 'Global Infrastructure',
              desc: 'Distributed infrastructure across 15+ regions for realistic attack simulation from anywhere in the world.'
            },
            {
              icon: Zap,
              title: 'Rapid Deployment',
              desc: 'Spin up offensive infrastructure in minutes. API-first design for automation and integration.'
            }].
            map((item, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1
              }}>
              
                <Card className="h-full border-l-2 border-exploit-red hover:bg-dark-base transition-all">
                  <CardContent className="p-6">
                    <item.icon className="w-8 h-8 text-exploit-red mb-4" />
                    <h3 className="text-lg font-heading font-bold text-ghost-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-gray font-body text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Social Proof / Stats Section */}
      <section className="py-20 bg-dark-base">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Trusted by security teams worldwide"
            className="mb-16" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <AnimatedCounter target={100} suffix="+" label="Clients" />
            <AnimatedCounter target={15} suffix="+" label="Zero-Days" />
            <AnimatedCounter target={30} suffix="+" label="Team Members" />
            <AnimatedCounter target={250} suffix="K+" label="Bug Bounties" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-void-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="max-w-3xl mx-auto text-center space-y-6">
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white">
              Ready to stress-test your defenses?
            </h2>
            <p className="text-lg text-muted-gray font-body">
              Book a free initial consultation with our team. We'll discuss your
              security posture, threat model, and how VXRT can help identify
              your blind spots.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-exploit-red hover:bg-exploit-red/90 text-ghost-white font-heading">
                
                REQUEST ASSESSMENT →
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-steel-gray text-ghost-white hover:text-exploit-red font-heading">
                
                CONTACT US
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>);

}