import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu } from 'lucide-react';
import { AIServiceTemplate } from './AIServiceTemplate';
import { aiServices } from '../data/aiServices';

export function MLOpsSecurityPage() {
  const navigate = useNavigate();
  const service = aiServices['mlops-security'];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service) {
      navigate('/');
    }
  }, [service, navigate]);

  if (!service) return null;
  return <AIServiceTemplate service={service} icon={Cpu} heroAnimation="radar" />;
}
