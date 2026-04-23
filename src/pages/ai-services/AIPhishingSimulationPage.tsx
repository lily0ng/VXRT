import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot } from 'lucide-react';
import { AIServiceTemplate } from './AIServiceTemplate';
import { aiServices } from '../data/aiServices';

export function AIPhishingSimulationPage() {
  const navigate = useNavigate();
  const service = aiServices['ai-phishing-simulation'];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service) {
      navigate('/');
    }
  }, [service, navigate]);

  if (!service) return null;
  return <AIServiceTemplate service={service} icon={Bot} heroAnimation="orbit" />;
}
