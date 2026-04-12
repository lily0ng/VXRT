import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Check, ArrowRight, Shield, Globe, Smartphone, Siren, ClipboardCheck, Clock, Users, Server, Zap, X } from 'lucide-react';
import { Button } from '../ui/button';

interface ServiceOption {
  id: string;
  name: string;
  icon: React.ElementType;
  basePrice: number;
  description: string;
}

interface ScopeOption {
  id: string;
  label: string;
  multiplier: number;
  description: string;
}

interface UrgencyOption {
  id: string;
  label: string;
  multiplier: number;
  icon: React.ElementType;
}

const services: ServiceOption[] = [
  { id: 'pentest', name: 'Penetration Testing', icon: Shield, basePrice: 2500, description: 'Web, API, Network, Mobile' },
  { id: 'redteam', name: 'Red Teaming', icon: Zap, basePrice: 15000, description: 'Full adversary simulation' },
  { id: 'webapp', name: 'Web App Testing', icon: Globe, basePrice: 3500, description: 'OWASP Top 10 assessment' },
  { id: 'mobile', name: 'Mobile App Testing', icon: Smartphone, basePrice: 4500, description: 'iOS & Android security' },
  { id: 'incident', name: 'Incident Response', icon: Siren, basePrice: 5000, description: 'Emergency response & forensics' },
  { id: 'audit', name: 'Security Audit', icon: ClipboardCheck, basePrice: 8000, description: 'Compliance assessment' },
];

const scopeOptions: ScopeOption[] = [
  { id: 'small', label: 'Small', multiplier: 1, description: '1-10 assets / 1-5 apps' },
  { id: 'medium', label: 'Medium', multiplier: 1.5, description: '11-50 assets / 6-20 apps' },
  { id: 'large', label: 'Large', multiplier: 2.5, description: '51-200 assets / 21-50 apps' },
  { id: 'enterprise', label: 'Enterprise', multiplier: 4, description: '200+ assets / 50+ apps' },
];

const urgencyOptions: UrgencyOption[] = [
  { id: 'standard', label: 'Standard (2-3 weeks)', multiplier: 1, icon: Clock },
  { id: 'expedited', label: 'Expedited (1 week)', multiplier: 1.3, icon: Zap },
  { id: 'emergency', label: 'Emergency (24-48 hrs)', multiplier: 2, icon: Siren },
];

const addons = [
  { id: 'retest', label: '30-Day Retest', price: 500 },
  { id: 'report', label: 'Executive Report', price: 750 },
  { id: 'workshop', label: 'Remediation Workshop', price: 1500 },
  { id: 'support', label: '30-Day Support', price: 1000 },
];

export function ServicePriceCalculator() {
  const [selectedService, setSelectedService] = useState<ServiceOption>(services[0]);
  const [selectedScope, setSelectedScope] = useState<ScopeOption>(scopeOptions[1]);
  const [selectedUrgency, setSelectedUrgency] = useState<UrgencyOption>(urgencyOptions[0]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const totalPrice = useMemo(() => {
    const basePrice = selectedService.basePrice;
    const scopeMultiplier = selectedScope.multiplier;
    const urgencyMultiplier = selectedUrgency.multiplier;
    const addonsPrice = selectedAddons.reduce((sum, addonId) => {
      const addon = addons.find(a => a.id === addonId);
      return sum + (addon?.price || 0);
    }, 0);

    return Math.round(basePrice * scopeMultiplier * urgencyMultiplier + addonsPrice);
  }, [selectedService, selectedScope, selectedUrgency, selectedAddons]);

  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev =>
      prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]
    );
  };

  return (
    <div className="w-full">
      {/* Main Calculator Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-dark-base via-[#111115] to-void-black border border-border rounded-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-exploit-red/20 via-exploit-red/10 to-transparent border-b border-border p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-exploit-red/20 rounded-xl flex items-center justify-center">
              <Calculator className="w-6 h-6 text-exploit-red" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold text-ghost-white">Service Price Calculator</h3>
              <p className="text-sm text-muted-text">Get an instant estimate for your security assessment</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Service Selection */}
          <div className="space-y-3">
            <label className="text-sm font-heading font-bold text-ghost-white uppercase tracking-wider flex items-center gap-2">
              <Shield className="w-4 h-4 text-exploit-red" />
              Select Service
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {services.map((service) => {
                const Icon = service.icon;
                const isSelected = selectedService.id === service.id;
                return (
                  <motion.button
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 rounded-xl border transition-all text-left ${
                      isSelected
                        ? 'bg-exploit-red/20 border-exploit-red'
                        : 'bg-[#111115] border-border hover:border-steel-gray'
                    }`}
                  >
                    <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-exploit-red' : 'text-muted-text'}`} />
                    <p className={`text-sm font-semibold ${isSelected ? 'text-ghost-white' : 'text-muted-text'}`}>
                      {service.name}
                    </p>
                    <p className="text-xs text-muted-text mt-1">{service.description}</p>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Scope Selection */}
          <div className="space-y-3">
            <label className="text-sm font-heading font-bold text-ghost-white uppercase tracking-wider flex items-center gap-2">
              <Server className="w-4 h-4 text-exploit-red" />
              Scope Size
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {scopeOptions.map((scope) => {
                const isSelected = selectedScope.id === scope.id;
                return (
                  <motion.button
                    key={scope.id}
                    onClick={() => setSelectedScope(scope)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-3 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-exploit-red/20 border-exploit-red'
                        : 'bg-[#111115] border-border hover:border-steel-gray'
                    }`}
                  >
                    <p className={`text-sm font-semibold ${isSelected ? 'text-ghost-white' : 'text-muted-text'}`}>
                      {scope.label}
                    </p>
                    <p className="text-xs text-muted-text mt-1">{scope.description}</p>
                    <p className={`text-xs mt-1 ${isSelected ? 'text-exploit-red' : 'text-muted-text'}`}>
                      ×{scope.multiplier}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Urgency Selection */}
          <div className="space-y-3">
            <label className="text-sm font-heading font-bold text-ghost-white uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-exploit-red" />
              Timeline
            </label>
            <div className="flex flex-wrap gap-3">
              {urgencyOptions.map((urgency) => {
                const Icon = urgency.icon;
                const isSelected = selectedUrgency.id === urgency.id;
                return (
                  <motion.button
                    key={urgency.id}
                    onClick={() => setSelectedUrgency(urgency)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-exploit-red/20 border-exploit-red'
                        : 'bg-[#111115] border-border hover:border-steel-gray'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-exploit-red' : 'text-muted-text'}`} />
                    <span className={`text-sm font-medium ${isSelected ? 'text-ghost-white' : 'text-muted-text'}`}>
                      {urgency.label}
                    </span>
                    <span className={`text-xs ${isSelected ? 'text-exploit-red' : 'text-muted-text'}`}>
                      ×{urgency.multiplier}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Add-ons */}
          <div className="space-y-3">
            <label className="text-sm font-heading font-bold text-ghost-white uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-exploit-red" />
              Add-ons (Optional)
            </label>
            <div className="grid grid-cols-2 gap-3">
              {addons.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <motion.button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                      isSelected
                        ? 'bg-exploit-red/10 border-exploit-red'
                        : 'bg-[#111115] border-border hover:border-steel-gray'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                        isSelected ? 'bg-exploit-red border-exploit-red' : 'border-steel-gray'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className={`text-sm ${isSelected ? 'text-ghost-white' : 'text-muted-text'}`}>
                        {addon.label}
                      </span>
                    </div>
                    <span className={`text-sm font-semibold ${isSelected ? 'text-exploit-red' : 'text-muted-text'}`}>
                      +${addon.price.toLocaleString()}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Price Display & CTA */}
        <div className="bg-gradient-to-r from-[#111115] via-dark-base to-[#111115] border-t border-border p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-text mb-1">Estimated Investment</p>
              <motion.div
                key={totalPrice}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-baseline gap-1"
              >
                <span className="text-4xl md:text-5xl font-heading font-bold text-exploit-red">
                  ${totalPrice.toLocaleString()}
                </span>
                <span className="text-muted-text">USD</span>
              </motion.div>
              <p className="text-xs text-muted-text mt-2">
                *Final pricing may vary based on specific requirements
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                className="border-steel-gray text-ghost-white hover:bg-steel-gray/20 px-6"
                onClick={() => setShowQuoteForm(true)}
              >
                <Users className="w-4 h-4 mr-2" />
                Get Detailed Quote
              </Button>
              <Button className="bg-exploit-red hover:bg-exploit-red/90 text-ghost-white px-8">
                Book Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowQuoteForm(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-dark-base border border-border rounded-2xl max-w-lg w-full p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-heading font-bold text-ghost-white">Request Detailed Quote</h3>
              <button
                onClick={() => setShowQuoteForm(false)}
                className="text-muted-text hover:text-ghost-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-text mb-1 block">Selected Service</label>
                <div className="flex items-center gap-2 p-3 bg-[#111115] rounded-lg border border-border">
                  <selectedService.icon className="w-5 h-5 text-exploit-red" />
                  <span className="text-ghost-white font-medium">{selectedService.name}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-text mb-1 block">Estimated Price</label>
                  <p className="text-2xl font-heading font-bold text-exploit-red">${totalPrice.toLocaleString()}</p>
                </div>
                <div>
                  <label className="text-sm text-muted-text mb-1 block">Timeline</label>
                  <p className="text-ghost-white">{selectedUrgency.label}</p>
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-text mb-1 block">Email</label>
                <input
                  type="email"
                  placeholder="your@company.com"
                  className="w-full bg-[#111115] border border-border rounded-lg px-4 py-3 text-ghost-white placeholder:text-muted-text focus:border-exploit-red focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-sm text-muted-text mb-1 block">Additional Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Describe your specific needs..."
                  className="w-full bg-[#111115] border border-border rounded-lg px-4 py-3 text-ghost-white placeholder:text-muted-text focus:border-exploit-red focus:outline-none transition-colors resize-none"
                />
              </div>

              <Button className="w-full bg-exploit-red hover:bg-exploit-red/90 text-ghost-white py-4">
                Send Quote Request
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
