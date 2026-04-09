import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ShieldAlert, BadgeCheck } from 'lucide-react';
import { SectionHeading } from '../../components/shared/SectionHeading';
import { services } from '../data/services';

export function RedTeamingPage() {
  const navigate = useNavigate();
  const service = services['red-teaming'];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service) {
      navigate('/');
    }
  }, [service, navigate]);

  if (!service) return null;
  const Icon = service.icon;

  return (
    <div className="w-full bg-void-black min-h-screen pt-20">
      {/* Section 1: Hero */}
      <section className="relative py-24 overflow-hidden bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-void-black/0 via-void-black/80 to-void-black pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-dark-base border border-border rounded-xl flex items-center justify-center text-exploit-red">
                  <Icon size={24} />
                </div>
                <span className="text-sm font-heading font-semibold text-exploit-red tracking-widest uppercase">
                  Offensive Service
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-ghost-white mb-6 leading-tight">
                {service.name}
              </h1>
              <p className="text-xl text-ghost-white font-medium mb-4">
                {service.powerStatement}
              </p>
              <p className="text-lg text-muted-text mb-10">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-exploit-red text-ghost-white font-semibold rounded-md hover:bg-exploit-red/90 transition-colors flex items-center justify-center gap-2">
                  Book Assessment <ArrowRight size={18} />
                </Link>
                <a
                  href="#methodology"
                  className="px-8 py-4 bg-transparent border border-steel-gray text-ghost-white font-semibold rounded-md hover:bg-dark-base transition-colors flex items-center justify-center">
                  View Methodology
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:flex justify-center">
              <div className="w-full max-w-md aspect-square rounded-full border border-border/50 relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-exploit-red/20 animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-8 rounded-full border border-border/50 animate-[spin_40s_linear_infinite_reverse]" />
                <div className="w-32 h-32 bg-dark-base rounded-full border border-border flex items-center justify-center text-exploit-red shadow-[0_0_50px_rgba(192,57,43,0.2)]">
                  <Icon size={48} strokeWidth={1} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Do */}
      <section className="py-24 bg-void-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <SectionHeading
                title="Scope & Approach"
                description="How we execute" />
              <div className="mt-8 space-y-6 text-lg text-muted-text leading-relaxed">
                {service.whatWeDo.map((paragraph, idx) =>
                <p key={idx}>{paragraph}</p>
                )}
              </div>
            </div>
            <div className="bg-[#111115] border border-border rounded-xl p-8 h-fit">
              <h3 className="text-xl font-heading font-bold text-ghost-white mb-6 flex items-center gap-2">
                <ShieldAlert size={20} className="text-exploit-red" />
                Service Metrics
              </h3>
              <div className="space-y-6">
                {service.stats.map((stat, idx) =>
                <div
                  key={idx}
                  className="border-b border-border pb-6 last:border-0 last:pb-0">
                  <div className="text-3xl font-heading font-bold text-ghost-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-text uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Methodology */}
      <section
        id="methodology"
        className="py-24 bg-dark-base/30 border-y border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeading
            title="Our Methodology"
            description="A systematic approach to offensive security" />
          <div className="mt-16 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border">
            {service.methodology.map((step, idx) =>
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-void-black bg-dark-base text-exploit-red font-heading font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_2px_rgba(192,57,43,0.5)] z-10">
                {idx + 1}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#111115] border border-border p-6 rounded-xl hover:border-exploit-red transition-colors">
                <h4 className="text-xl font-heading font-bold text-ghost-white mb-2">
                  {step.title}
                </h4>
                <p className="text-muted-text">{step.description}</p>
              </div>
            </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Section 4: Deliverables */}
      <section className="py-24 bg-void-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionHeading
            title="What You Receive"
            description="Actionable intelligence, not just automated reports" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.deliverables.map((item, idx) =>
            <div
              key={idx}
              className="flex items-start gap-4 p-6 bg-dark-base/50 border border-border rounded-xl">
              <div className="mt-1 w-6 h-6 rounded-full bg-exploit-red/10 flex items-center justify-center text-exploit-red shrink-0">
                <Check size={14} strokeWidth={3} />
              </div>
              <span className="text-lg text-ghost-white font-medium">
                {item}
              </span>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 5: Case Study */}
      <section className="py-24 bg-dark-base/30 border-y border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-[#111115] border border-border rounded-2xl overflow-hidden border-l-4 border-l-exploit-red p-8 md:p-12">
            <div className="flex items-center gap-2 mb-8">
              <span className="px-3 py-1 bg-dark-base border border-border rounded-full text-xs font-heading font-semibold text-ghost-white uppercase tracking-wider">
                Featured Case Study
              </span>
              <span className="text-muted-text text-sm">
                — {service.caseStudy.industry}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h4 className="text-sm font-heading font-bold text-exploit-red uppercase tracking-widest mb-3">
                    The Challenge
                  </h4>
                  <p className="text-ghost-white text-lg leading-relaxed">
                    {service.caseStudy.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-exploit-red uppercase tracking-widest mb-3">
                    Our Approach
                  </h4>
                  <p className="text-muted-text leading-relaxed">
                    {service.caseStudy.approach}
                  </p>
                </div>
              </div>
              <div className="bg-dark-base/50 p-6 rounded-xl border border-border h-fit">
                <h4 className="text-sm font-heading font-bold text-exploit-red uppercase tracking-widest mb-4">
                  The Results
                </h4>
                <p className="text-ghost-white font-medium">
                  {service.caseStudy.results}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Certifications */}
      <section className="py-24 bg-void-black text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-heading font-bold text-ghost-white mb-10">
            Our Engineers Hold Elite Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {service.certifications.map((cert, idx) =>
            <div
              key={idx}
              className="flex items-center gap-2 px-6 py-3 bg-[#111115] border border-border rounded-lg text-ghost-white font-heading font-bold">
              <BadgeCheck size={18} className="text-exploit-red" />
              {cert}
            </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section className="py-32 bg-dark-base/30 border-t border-border relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-6">
            Ready to test your defenses?
          </h2>
          <p className="text-xl text-muted-text mb-10">
            Schedule a scoping call with our lead engineers to discuss your
            specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-exploit-red text-ghost-white font-semibold rounded-md hover:bg-exploit-red/90 transition-colors">
              Book Assessment
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border border-steel-gray text-ghost-white font-semibold rounded-md hover:bg-dark-base transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}