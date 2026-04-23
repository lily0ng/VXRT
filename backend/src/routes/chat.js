const express = require('express');
const router = express.Router();
const knowledgeBase = require('../data/knowledgeBase');

function normalizeText(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
}

function findBestAnswer(message) {
  const normalized = normalizeText(message);
  const words = normalized.split(' ');

  // 1. Check exact/common question matches
  for (const [question, answer] of Object.entries(knowledgeBase.commonQuestions)) {
    const qNorm = normalizeText(question);
    if (normalized.includes(qNorm) || qNorm.includes(normalized)) {
      return { answer, source: 'faq' };
    }
  }

  // 2. Product search
  for (const product of knowledgeBase.products) {
    const productWords = product.name.toLowerCase().split(' ');
    const slugMatch = words.some(w => w === product.slug || product.slug.includes(w));
    const nameMatch = productWords.some(pw => words.includes(pw));
    if (slugMatch || nameMatch) {
      let answer = `**${product.name}**\n\n${product.description}\n\n`;
      if (product.features) {
        answer += `**Features:** ${product.features.join(', ')}\n\n`;
      }
      if (product.pricing) {
        answer += `**Pricing:** ${product.pricing}`;
      }
      return { answer: answer.trim(), source: 'product' };
    }
  }

  // 3. Service search
  for (const service of knowledgeBase.services) {
    const serviceWords = service.name.toLowerCase().split(' ');
    const slugMatch = words.some(w => w === service.slug || service.slug.includes(w));
    const nameMatch = serviceWords.some(sw => words.includes(sw));
    if (slugMatch || nameMatch) {
      let answer = `**${service.name}**\n\n${service.description}\n\n`;
      if (service.stats) {
        answer += `**Stats:** ${service.stats.join(' | ')}\n\n`;
      }
      if (service.certifications) {
        answer += `**Certifications:** ${service.certifications.join(', ')}\n\n`;
      }
      answer += `**Pricing:** ${service.pricing}`;
      return { answer: answer.trim(), source: 'service' };
    }
  }

  // 4. Solution search
  for (const solution of knowledgeBase.solutions) {
    const solutionWords = solution.name.toLowerCase().split(' ');
    const slugMatch = words.some(w => w === solution.slug || solution.slug.includes(w));
    const nameMatch = solutionWords.some(sw => words.includes(sw));
    if (slugMatch || nameMatch) {
      return {
        answer: `**${solution.name} Solution**\n\n${solution.description}\n\nLearn more at /solutions/${solution.slug}.`,
        source: 'solution'
      };
    }
  }

  // 5. Intent-based matching
  const intents = [
    {
      keywords: ['price', 'cost', 'how much', 'pricing', 'plan', 'subscription', 'bill'],
      response: `**Pricing**\n\n${knowledgeBase.pricing.note}`
    },
    {
      keywords: ['contact', 'email', 'reach', 'support', 'help', 'talk', 'chat', 'call'],
      response: `**Support & Contact**\n\n- Email: ${knowledgeBase.company.contact.email}\n- Discord: ${knowledgeBase.company.contact.discord}\n- Portal tickets available after sign-in.\n- 24/7 Incident Response for retainer clients.`
    },
    {
      keywords: ['resource', 'blog', 'paper', 'cve', 'tool', 'script', 'pdf', 'research', 'zero day'],
      response: `**Resources**\n\n- Research Papers: ${knowledgeBase.resources.researchPapers}\n- CVE Database: ${knowledgeBase.resources.cveDatabase}\n- Zero-Day Reports: ${knowledgeBase.resources.zeroDayReports}\n- PDF Library: ${knowledgeBase.resources.pdfLibrary}\n- Security Blog: ${knowledgeBase.resources.securityBlog}\n- Tools & Scripts: ${knowledgeBase.resources.toolsAndScripts}\n\nVisit /resources to explore.`
    },
    {
      keywords: ['product', 'compute', 'vps', 'server', 'cloud', 'storage', 'infra', 'infrastructure', 'instance', 'vm'],
      response: `**Products**\n\nWe offer: Compute, VPS, Load Balancer, Kubernetes, Block Storage, Auto Scaling, DNS Management, Object Storage, Bare Metal, Database, CDN, and Message Queue.\n\nVisit /product/compute or /pricing for more details. All products start at $5/mo.`
    },
    {
      keywords: ['service', 'pentest', 'penetration', 'red team', 'audit', 'assessment', 'security test', 'exploit', 'vulnerability'],
      response: `**Security Services**\n\nWe offer: Penetration Testing, Red Teaming, Vulnerability Assessment, Cloud Penetration Testing, Exploit Development, Purple Teaming, Web App Testing, Mobile App Testing, Incident Response, and Security Audit.\n\nContact us at /contact for a custom quote.`
    },
    {
      keywords: ['portal', 'dashboard', 'login', 'signin', 'account', 'manage'],
      response: `**Portal**\n\nAccess your dashboard at /portal after signing in at /signin. The portal lets you manage infrastructure, view reports, access security tools, and open support tickets.`
    },
    {
      keywords: ['solution', 'industry', 'enterprise', 'fintech', 'healthcare', 'government', 'ecommerce'],
      response: `**Industry Solutions**\n\nWe offer tailored solutions for: Enterprise, Financial Services, Healthcare, Government & Defense, E-Commerce, Manufacturing, Energy & Utilities, and Technology sectors.\n\nVisit /solutions to learn more.`
    },
    {
      keywords: ['team', 'about', 'who', 'company', 'vxrt', 'people', 'engineer'],
      response: `**About VXRT**\n\n${knowledgeBase.company.description}\n\nOur team holds industry-leading certifications including OSCP, OSWE, OSCE3, GXPN, CISSP, CISA, and more. Visit /team to meet the crew.\n\n${knowledgeBase.company.tagline}`
    },
    {
      keywords: ['certification', 'cert', 'oscp', 'cissp', 'qualification', 'credential'],
      response: `**Team Certifications**\n\nOur offensive security engineers hold certifications such as OSCP, OSWE, CPTS, CREST, GWAPT, OSCE, CRTO, CRTE, OSEP, OSCE3, OSEE, GXPN, GCIH, GCFA, GCFE, EnCE, CEH, CompTIA Security+, CISM, CISA, CISSP, and ISO 27001 Lead Auditor.`
    }
  ];

  for (const intent of intents) {
    if (intent.keywords.some(kw => normalized.includes(kw))) {
      return { answer: intent.response, source: 'intent' };
    }
  }

  // 6. Greeting
  if (['hello', 'hi', 'hey', 'howdy', 'greetings'].some(g => normalized.includes(g))) {
    return {
      answer: `Hello! I'm the VXRT assistant. I can help you with:\n\n- Products & Pricing\n- Security Services\n- Resources & Research\n- Support & Contact\n- Portal access\n\nWhat would you like to know about?`,
      source: 'greeting'
    };
  }

  // 7. Fallback
  return {
    answer: `I'm not sure I understand. I can help you with:\n\n- Our cloud products (Compute, VPS, Kubernetes, Storage, etc.)\n- Security services (Penetration Testing, Red Teaming, etc.)\n- Pricing and quotes\n- Resources and research\n- Support and contact info\n- Portal access\n\nWhat would you like to explore?`,
    source: 'fallback'
  };
}

router.post('/', (req, res) => {
  try {
    const { message, history = [] } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const { answer, source } = findBestAnswer(message);

    res.json({
      reply: answer,
      source,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Failed to process message' });
  }
});

module.exports = router;
