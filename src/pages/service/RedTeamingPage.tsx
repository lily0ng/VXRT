import React from 'react';
import { ServicePageTemplate } from '../../components/service/ServicePageTemplate';
import { Target, Crosshair, Network, Key, Flag, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
export function RedTeamingPage() {
  const data = {
    name: 'Red Teaming',
    tagline: 'Full-scope adversary simulation',
    description:
    'We emulate advanced persistent threats (APTs) to test your detection and response capabilities. This is a stealthy, objective-based assessment targeting your people, processes, and technology.',
    heroSvg:
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 600"
      className="opacity-40">
      
        <motion.circle
        cx="400"
        cy="300"
        r="150"
        stroke="#c0392b"
        strokeWidth="1"
        fill="none"
        strokeDasharray="4 4"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }} />
      
        <motion.circle
        cx="400"
        cy="300"
        r="100"
        stroke="#3a3a42"
        strokeWidth="2"
        fill="none" />
      
        <circle cx="400" cy="300" r="10" fill="#c0392b" />
        <motion.path
        d="M400 300 L500 200"
        stroke="#c0392b"
        strokeWidth="2"
        initial={{
          pathLength: 0
        }}
        animate={{
          pathLength: 1
        }}
        transition={{
          duration: 1,
          repeat: Infinity
        }} />
      
      </svg>,

    phases: [
    {
      number: '01',
      title: 'Threat Modeling',
      description: 'Defining adversary profiles and objectives.',
      icon: <Target className="w-6 h-6" />
    },
    {
      number: '02',
      title: 'Initial Access',
      description: 'Phishing, physical, or external compromise.',
      icon: <Crosshair className="w-6 h-6" />
    },
    {
      number: '03',
      title: 'Persistence & C2',
      description: 'Establishing covert communication channels.',
      icon: <Network className="w-6 h-6" />
    },
    {
      number: '04',
      title: 'Lateral Movement',
      description: 'Navigating the internal network stealthily.',
      icon: <Key className="w-6 h-6" />
    },
    {
      number: '05',
      title: 'Objective Execution',
      description: 'Capturing the flag (data exfil, domain admin).',
      icon: <Flag className="w-6 h-6" />
    }],

    killChainSvg:
    <svg width="100%" height="100%" viewBox="0 0 800 400">
        <g transform="translate(100, 200)">
          <circle
          cx="0"
          cy="0"
          r="40"
          fill="#1a1a1e"
          stroke="#3a3a42"
          strokeWidth="2" />
        
          <text x="0" y="5" fill="#e8e8ea" fontSize="12" textAnchor="middle">
            EXTERNAL
          </text>

          <circle
          cx="300"
          cy="0"
          r="60"
          fill="#1a1a1e"
          stroke="#3a3a42"
          strokeWidth="2" />
        
          <text x="300" y="5" fill="#e8e8ea" fontSize="12" textAnchor="middle">
            INTERNAL
          </text>

          <circle
          cx="600"
          cy="0"
          r="40"
          fill="#1a1a1e"
          stroke="#c0392b"
          strokeWidth="2" />
        
          <text x="600" y="5" fill="#c0392b" fontSize="12" textAnchor="middle">
            DOMAIN ADMIN
          </text>

          <motion.path
          d="M40 0 L240 0"
          stroke="#c0392b"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{
            pathLength: 0
          }}
          whileInView={{
            pathLength: 1
          }}
          transition={{
            duration: 1
          }} />
        
          <text
          x="140"
          y="-10"
          fill="#6b6b72"
          fontSize="10"
          textAnchor="middle">
          
            Phishing / Initial Access
          </text>

          <motion.path
          d="M360 0 L560 0"
          stroke="#c0392b"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{
            pathLength: 0
          }}
          whileInView={{
            pathLength: 1
          }}
          transition={{
            duration: 1,
            delay: 1
          }} />
        
          <text
          x="460"
          y="-10"
          fill="#6b6b72"
          fontSize="10"
          textAnchor="middle">
          
            Kerberoasting / PrivEsc
          </text>
        </g>
      </svg>,

    deliverables: [
    {
      title: 'Attack Narrative',
      description: 'Step-by-step timeline of the operation.',
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: 'Detection Gap Analysis',
      description: 'Where your SOC missed the activity.',
      icon: <Target className="w-5 h-5" />
    },
    {
      title: 'IOC List',
      description: 'Indicators of compromise for tuning.',
      icon: <Network className="w-5 h-5" />
    },
    {
      title: 'Remediation Roadmap',
      description: 'Strategic fixes for systemic issues.',
      icon: <Key className="w-5 h-5" />
    }],

    caseFiles: [
    {
      client: 'Client Beta',
      industry: 'Enterprise Tech',
      scope: 'Global Corporate Network',
      findings:
      'Achieved Domain Admin in 72 hours via a targeted spear-phishing campaign leading to Kerberoasting and lateral movement across trusted domains.',
      evidenceSvg:
      <svg viewBox="0 0 400 200" className="w-full h-full">
            <path
          d="M50 100 L150 50 L250 100 L150 150 Z"
          fill="#1a1a1e"
          stroke="#3a3a42" />
        
            <path
          d="M200 100 L300 50 L350 100 L300 150 Z"
          fill="#1a1a1e"
          stroke="#c0392b" />
        
            <motion.path
          d="M150 100 L300 100"
          stroke="#c0392b"
          strokeWidth="3"
          initial={{
            pathLength: 0
          }}
          whileInView={{
            pathLength: 1
          }} />
        
            <text
          x="225"
          y="90"
          fill="#e8e8ea"
          fontSize="10"
          textAnchor="middle">
          
              Trust Exploitation
            </text>
          </svg>

    }],

    team: [
    {
      initials: 'RT',
      color: '#c0392b'
    },
    {
      initials: 'VX',
      color: '#e8e8ea'
    },
    {
      initials: 'OP',
      color: '#6b6b72'
    }],

    certs: ['OSEP', 'CRTP', 'CRTO', 'GXPN']
  };
  return <ServicePageTemplate data={data} />;
}