import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrainCircuit } from 'lucide-react';
import { AIServiceTemplate } from './AIServiceTemplate';
import { aiServices } from '../data/aiServices';

export function AdversarialAITestingPage() {
  const navigate = useNavigate();
  const service = aiServices['adversarial-ai-testing'];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service) {
      navigate('/');
    }
  }, [service, navigate]);

  if (!service) return null;
  return <AIServiceTemplate service={service} icon={BrainCircuit} heroAnimation="radar" />;
}
