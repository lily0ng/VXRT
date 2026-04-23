import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fingerprint } from 'lucide-react';
import { AIServiceTemplate } from './AIServiceTemplate';
import { aiServices } from '../data/aiServices';

export function AICyberDeceptionPage() {
  const navigate = useNavigate();
  const service = aiServices['ai-cyber-deception'];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service) {
      navigate('/');
    }
  }, [service, navigate]);

  if (!service) return null;
  return <AIServiceTemplate service={service} icon={Fingerprint} heroAnimation="network" />;
}
