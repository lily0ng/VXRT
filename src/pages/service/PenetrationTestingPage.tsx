import React from 'react';
import { ServicePageTemplate } from '../../components/service/ServicePageTemplate';
import {
  Search,
  ShieldAlert,
  Terminal,
  FileText,
  CheckCircle,
  Code,
  Headset } from
'lucide-react';
import { motion } from 'framer-motion';
export function PenetrationTestingPage() {
  const data = {
    name: 'Penetration Testing',
    tagline: 'Systematic exploitation of your attack surface',
    description:
    'We simulate real-world attacks against your applications and infrastructure to identify vulnerabilities before malicious actors do. Our manual, intelligence-led approach goes far beyond automated scanning.',
    heroSvg:
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 600"
      className="opacity-40">
      
        <motion.path
        d="M400 100 L400 500 M200 300 L600 300 M300 200 L500 400 M300 400 L500 200"
        stroke="#c0392b"
        strokeWidth="2"
        fill="none"
        initial={{
          pathLength: 0
        }}
        animate={{
          pathLength: 1
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse'
        }} />
      
        <circle
        cx="400"
        cy="300"
        r="50"
        fill="#1a1a1e"
        stroke="#c0392b"
        strokeWidth="4" />
      
        <circle cx="400" cy="300" r="20" fill="#c0392b" />
      </svg>,

    phases: [
    {
      number: '01',
      title: 'Scoping',
      description: 'Defining rules of engagement and target boundaries.',
      icon: <Search className="w-6 h-6" />
    },
    {
      number: '02',
      title: 'Reconnaissance',
      description: 'OSINT and active enumeration of the target surface.',
      icon: <Terminal className="w-6 h-6" />
    },
    {
      number: '03',
      title: 'Exploitation',
      description: 'Manual exploitation of identified vulnerabilities.',
      icon: <ShieldAlert className="w-6 h-6" />
    },
    {
      number: '04',
      title: 'Post-Exploitation',
      description: 'Pivoting and demonstrating business impact.',
      icon: <Code className="w-6 h-6" />
    },
    {
      number: '05',
      title: 'Reporting',
      description: 'Detailed technical and executive deliverables.',
      icon: <FileText className="w-6 h-6" />
    }],

    killChainSvg:
    <svg width="100%" height="100%" viewBox="0 0 800 400">
        <g transform="translate(50, 200)">
          {/* Nodes */}
          {[0, 1, 2, 3, 4].map((i) =>
        <g key={i} transform={`translate(${i * 150}, 0)`}>
              <circle
            cx="0"
            cy="0"
            r="30"
            fill="#1a1a1e"
            stroke="#3a3a42"
            strokeWidth="3" />
          
              <text
            x="0"
            y="50"
            fill="#e8e8ea"
            fontSize="12"
            textAnchor="middle"
            fontFamily="monospace">
            
                {['RECON', 'SCAN', 'EXPLOIT', 'PIVOT', 'IMPACT'][i]}
              </text>
            </g>
        )}
          {/* Paths */}
          <motion.path
          d="M30 0 L120 0 M180 0 L270 0 M330 0 L420 0 M480 0 L570 0"
          stroke="#c0392b"
          strokeWidth="3"
          strokeDasharray="5,5"
          fill="none"
          initial={{
            pathLength: 0
          }}
          whileInView={{
            pathLength: 1
          }}
          transition={{
            duration: 2
          }} />
        
        </g>
      </svg>,

    deliverables: [
    {
      title: 'Executive Summary',
      description: 'High-level risk overview for leadership.',
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: 'Technical Report',
      description: 'Detailed reproduction steps and CVSS scores.',
      icon: <Terminal className="w-5 h-5" />
    },
    {
      title: 'PoC Code',
      description: 'Custom exploit scripts used during the engagement.',
      icon: <Code className="w-5 h-5" />
    },
    {
      title: 'Remediation Guide',
      description: 'Actionable steps to fix identified issues.',
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: 'Debrief Call',
      description: 'Walkthrough of findings with your engineering team.',
      icon: <Headset className="w-5 h-5" />
    }],

    caseFiles: [
    {
      client: 'Client Alpha',
      industry: 'Financial Services',
      scope: 'External Web Application & API',
      findings:
      'Discovered an authentication bypass chain leading to blind SQL injection, allowing full database exfiltration without credentials.',
      evidenceSvg:
      <svg viewBox="0 0 400 200" className="w-full h-full">
            <rect
          x="50"
          y="80"
          width="80"
          height="40"
          rx="4"
          fill="#1a1a1e"
          stroke="#3a3a42" />
        
            <text
          x="90"
          y="105"
          fill="#6b6b72"
          fontSize="12"
          textAnchor="middle">
          
              API GW
            </text>

            <rect
          x="250"
          y="80"
          width="80"
          height="40"
          rx="4"
          fill="#1a1a1e"
          stroke="#c0392b" />
        
            <text
          x="290"
          y="105"
          fill="#c0392b"
          fontSize="12"
          textAnchor="middle">
          
              DB
            </text>

            <motion.path
          d="M130 100 Q190 50 250 100"
          stroke="#c0392b"
          strokeWidth="2"
          fill="none"
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
          x="190"
          y="65"
          fill="#e8e8ea"
          fontSize="10"
          textAnchor="middle">
          
              Auth Bypass + SQLi
            </text>
          </svg>

    }],

    team: [
    {
      initials: 'JD',
      color: '#e8e8ea'
    },
    {
      initials: 'AK',
      color: '#6b6b72'
    },
    {
      initials: 'MR',
      color: '#c0392b'
    },
    {
      initials: 'SL',
      color: '#3a3a42'
    }],

    certs: ['OSCP', 'OSWE', 'BSCP', 'eWPTX', 'GPEN']
  };
  return <ServicePageTemplate data={data} />;
}