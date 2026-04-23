import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { AIServiceTemplate } from './AIServiceTemplate';
import { aiServices } from '../data/aiServices';

export function LLMSecurityGuardrailsPage() {
  const navigate = useNavigate();
  const service = aiServices['llm-security-guardrails'];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service) {
      navigate('/');
    }
  }, [service, navigate]);

  if (!service) return null;
  return <AIServiceTemplate service={service} icon={Lock} heroAnimation="pulse" />;
}
