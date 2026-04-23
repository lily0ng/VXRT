import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Network } from 'lucide-react';
import { AIServiceTemplate } from './AIServiceTemplate';
import { aiServices } from '../data/aiServices';

export function AIInferenceInfraPage() {
  const navigate = useNavigate();
  const service = aiServices['ai-inference-infra'];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service) {
      navigate('/');
    }
  }, [service, navigate]);

  if (!service) return null;
  return <AIServiceTemplate service={service} icon={Network} heroAnimation="orbit" />;
}
