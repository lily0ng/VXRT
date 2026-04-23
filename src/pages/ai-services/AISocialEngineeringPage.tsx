import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScanFace } from 'lucide-react';
import { AIServiceTemplate } from './AIServiceTemplate';
import { aiServices } from '../data/aiServices';

export function AISocialEngineeringPage() {
  const navigate = useNavigate();
  const service = aiServices['ai-social-engineering'];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service) {
      navigate('/');
    }
  }, [service, navigate]);

  if (!service) return null;
  return <AIServiceTemplate service={service} icon={ScanFace} heroAnimation="pulse" />;
}
