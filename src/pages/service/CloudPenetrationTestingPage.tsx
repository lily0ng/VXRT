import React from 'react';
import { ServicePageTemplate } from '../../components/service/ServicePageTemplate';
import {
  Cloud,
  Key,
  Server,
  Database,
  ShieldAlert,
  FileText } from
'lucide-react';
import { motion } from 'framer-motion';
export function CloudPenetrationTestingPage() {
  const data = {
    name: 'Cloud Penetration Testing',
    description:
    'Attack your cloud infrastructure before adversaries do. We specialize in AWS, Azure, and GCP environments, focusing on IAM misconfigurations, serverless exploitation, and container escapes.',
    tagline: 'Secure your cloud-native environments',
    heroSvg:
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 600"
      className="opacity-40">
      
        <path
        d="M300 300 Q400 200 500 300 T700 300"
        fill="none"
        stroke="#3a3a42"
        strokeWidth="4" />
      
        <motion.circle
        cx="400"
        cy="250"
        r="40"
        fill="#1a1a1e"
        stroke="#c0392b"
        strokeWidth="2"
        animate={{
          y: [0, -20, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity
        }} />
      
        <motion.circle
        cx="600"
        cy="300"
        r="30"
        fill="#1a1a1e"
        stroke="#e8e8ea"
        strokeWidth="2"
        animate={{
          y: [0, 20, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity
        }} />
      
      </svg>,

    phases: [
    {
      number: '01',
      title: 'Cloud Recon',
      description: 'Mapping public buckets, APIs, and endpoints.',
      icon: <Cloud className="w-6 h-6" />
    },
    {
      number: '02',
      title: 'IAM Analysis',
      description: 'Reviewing roles, policies, and trust relationships.',
      icon: <Key className="w-6 h-6" />
    },
    {
      number: '03',
      title: 'Service Exploitation',
      description: 'Attacking serverless functions and containers.',
      icon: <Server className="w-6 h-6" />
    },
    {
      number: '04',
      title: 'Lateral Movement',
      description: 'Pivoting between VPCs and accounts.',
      icon: <Database className="w-6 h-6" />
    },
    {
      number: '05',
      title: 'Data Access',
      description: 'Demonstrating access to sensitive storage.',
      icon: <ShieldAlert className="w-6 h-6" />
    }],

    killChainSvg:
    <svg width="100%" height="100%" viewBox="0 0 800 400">
        <g transform="translate(100, 200)">
          <circle cx="0" cy="0" r="30" fill="#1a1a1e" stroke="#3a3a42" />
          <text x="0" y="50" fill="#e8e8ea" fontSize="12" textAnchor="middle">
            SSRF
          </text>

          <circle cx="200" cy="0" r="30" fill="#1a1a1e" stroke="#3a3a42" />
          <text x="200" y="50" fill="#e8e8ea" fontSize="12" textAnchor="middle">
            IMDSv2
          </text>

          <circle cx="400" cy="0" r="30" fill="#1a1a1e" stroke="#c0392b" />
          <text x="400" y="50" fill="#c0392b" fontSize="12" textAnchor="middle">
            IAM ROLE
          </text>

          <circle cx="600" cy="0" r="30" fill="#1a1a1e" stroke="#c0392b" />
          <text x="600" y="50" fill="#c0392b" fontSize="12" textAnchor="middle">
            S3 BUCKET
          </text>

          <motion.path
          d="M30 0 L170 0"
          stroke="#c0392b"
          strokeWidth="2"
          initial={{
            pathLength: 0
          }}
          whileInView={{
            pathLength: 1
          }} />
        
          <motion.path
          d="M230 0 L370 0"
          stroke="#c0392b"
          strokeWidth="2"
          initial={{
            pathLength: 0
          }}
          whileInView={{
            pathLength: 1
          }} />
        
          <motion.path
          d="M430 0 L570 0"
          stroke="#c0392b"
          strokeWidth="2"
          initial={{
            pathLength: 0
          }}
          whileInView={{
            pathLength: 1
          }} />
        
        </g>
      </svg>,

    deliverables: [
    {
      title: 'Cloud Architecture Review',
      description: 'Design flaw identification.',
      icon: <Cloud className="w-5 h-5" />
    },
    {
      title: 'IAM Policy Audit',
      description: 'Over-privileged role breakdown.',
      icon: <Key className="w-5 h-5" />
    },
    {
      title: 'Exploitation Report',
      description: 'Step-by-step attack paths.',
      icon: <FileText className="w-5 h-5" />
    }],

    caseFiles: [
    {
      client: 'Client Delta',
      industry: 'SaaS',
      scope: 'AWS Production Environment',
      findings:
      'Found an SSRF vulnerability in a PDF generator that allowed access to the EC2 metadata service, leading to IAM credential theft and full account takeover.',
      evidenceSvg:
      <svg viewBox="0 0 400 200" className="w-full h-full">
            <rect
          x="150"
          y="50"
          width="100"
          height="100"
          fill="#1a1a1e"
          stroke="#c0392b"
          strokeDasharray="4" />
        
            <text
          x="200"
          y="105"
          fill="#c0392b"
          fontSize="14"
          textAnchor="middle">
          
              Root Access
            </text>
          </svg>

    }],

    team: [
    {
      initials: 'AW',
      color: '#e8e8ea'
    },
    {
      initials: 'AZ',
      color: '#6b6b72'
    }],

    certs: ['AWS Security', 'AZ-500', 'CKS', 'OSCP']
  };
  return <ServicePageTemplate data={data} />;
}