import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { AIServiceTemplate } from './AIServiceTemplate';
import { aiServices } from '../data/aiServices';

export function AIModelHardeningPage() {
  const navigate = useNavigate();
  const service = aiServices['ai-model-hardening'];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service) {
      navigate('/');
    }
  }, [service, navigate]);

  if (!service) return null;
  return <AIServiceTemplate service={service} icon={ShieldCheck} heroAnimation="network" />;
}
