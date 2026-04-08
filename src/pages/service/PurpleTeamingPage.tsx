import React from 'react';
import { ServicePageTemplate } from '../../components/service/ServicePageTemplate';
import {
  Activity,
  Target,
  ShieldAlert,
  RefreshCw,
  CheckCircle,
  FileText,
  Search,
  Code } from
'lucide-react';
import { motion } from 'framer-motion';
export function PurpleTeamingPage() {
  const data = {
    name: 'Purple Teaming',
    tagline: 'Collaborative attack and defense optimization',
    description:
    'An open-book engagement where our offensive operators work directly alongside your SOC/Blue Team to execute attacks, verify detection, and tune alerts in real-time.',
    heroSvg:
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 600"
      className="opacity-40">
      
        <motion.circle
        cx="350"
        cy="300"
        r="100"
        fill="none"
        stroke="#c0392b"
        strokeWidth="4"
        initial={{
          x: -50
        }}
        animate={{
          x: 0
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse'
        }} />
      
        <motion.circle
        cx="450"
        cy="300"
        r="100"
        fill="none"
        stroke="#3a3a42"
        strokeWidth="4"
        initial={{
          x: 50
        }}
        animate={{
          x: 0
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse'
        }} />
      
        <circle cx="400" cy="300" r="40" fill="#c0392b" opacity="0.5" />
      </svg>,

    phases: [
    {
      number: '01',
      title: 'Baseline Assessment',
      description: 'Reviewing current detection capabilities.',
      icon: <Activity className="w-6 h-6" />
    },
    {
      number: '02',
      title: 'Attack Simulation',
      description: 'Executing specific TTPs from MITRE ATT&CK.',
      icon: <Target className="w-6 h-6" />
    },
    {
      number: '03',
      title: 'Detection Eval',
      description: 'Checking SIEM/EDR for alerts.',
      icon: <Search className="w-6 h-6" />
    },
    {
      number: '04',
      title: 'Gap Remediation',
      description: 'Tuning rules to catch the attack.',
      icon: <ShieldAlert className="w-6 h-6" />
    },
    {
      number: '05',
      title: 'Validation',
      description: 'Re-running the attack to confirm detection.',
      icon: <RefreshCw className="w-6 h-6" />
    }],

    killChainSvg:
    <svg width="100%" height="100%" viewBox="0 0 800 400">
        <g transform="translate(400, 200)">
          <motion.path
          d="M-100 0 A100 100 0 1 1 100 0 A100 100 0 1 1 -100 0"
          fill="none"
          stroke="#c0392b"
          strokeWidth="4"
          strokeDasharray="10,10"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear'
          }} />
        
          <text x="0" y="-120" fill="#c0392b" fontSize="14" textAnchor="middle">
            ATTACK
          </text>
          <text x="0" y="130" fill="#6b6b72" fontSize="14" textAnchor="middle">
            DETECT
          </text>
          <text x="-130" y="5" fill="#e8e8ea" fontSize="14" textAnchor="middle">
            TUNE
          </text>
          <text x="130" y="5" fill="#e8e8ea" fontSize="14" textAnchor="middle">
            VALIDATE
          </text>
        </g>
      </svg>,

    deliverables: [
    {
      title: 'Detection Matrix',
      description: 'Coverage map against MITRE ATT&CK.',
      icon: <Target className="w-5 h-5" />
    },
    {
      title: 'SIEM Rules',
      description: 'Custom Sigma/Yara rules for your environment.',
      icon: <Code className="w-5 h-5" />
    },
    {
      title: 'Execution Logs',
      description: 'Raw logs of all executed attacks.',
      icon: <FileText className="w-5 h-5" />
    }],

    caseFiles: [
    {
      client: 'Client Zeta',
      industry: 'Banking',
      scope: 'Internal SOC & EDR',
      findings:
      'Improved overall detection rate of APT-style lateral movement from 34% to 89% over a 6-week iterative engagement.',
      evidenceSvg:
      <svg viewBox="0 0 400 200" className="w-full h-full">
            <rect x="50" y="100" width="50" height="50" fill="#3a3a42" />
            <text
          x="75"
          y="90"
          fill="#6b6b72"
          fontSize="12"
          textAnchor="middle">
          
              34%
            </text>

            <motion.rect
          x="150"
          y="20"
          width="50"
          height="130"
          fill="#c0392b"
          initial={{
            height: 0,
            y: 150
          }}
          whileInView={{
            height: 130,
            y: 20
          }} />
        
            <text
          x="175"
          y="10"
          fill="#c0392b"
          fontSize="12"
          textAnchor="middle">
          
              89%
            </text>
          </svg>

    }],

    team: [
    {
      initials: 'PT',
      color: '#c0392b'
    },
    {
      initials: 'BT',
      color: '#6b6b72'
    }],

    certs: ['OSCP', 'CRTP', 'CRTO', 'GPEN', 'GXPN']
  };
  return <ServicePageTemplate data={data} />;
}