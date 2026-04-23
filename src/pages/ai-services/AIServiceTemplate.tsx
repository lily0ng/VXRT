import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { Check, ArrowRight, ShieldAlert, BadgeCheck, type LucideIcon } from 'lucide-react';
import { SectionHeading } from '../../components/shared/SectionHeading';

export interface AIServiceData {
  name: string;
  slug: string;
  category: 'red-team' | 'ai-infra';
  categoryLabel: string;
  powerStatement: string;
  description: string;
  whatWeDo: string[];
  stats: { value: string; label: string }[];
  methodology: { title: string; description: string }[];
  deliverables: string[];
  caseStudy: {
    industry: string;
    challenge: string;
    approach: string;
    results: string;
  };
  certifications: string[];
}

interface Props {
  service: AIServiceData;
  icon: LucideIcon;
  heroAnimation: 'pulse' | 'orbit' | 'radar' | 'network';
  colorAccent?: string;
}

function getHeroVisual(icon: LucideIcon, animation: string, accent: string) {
  const Icon = icon;
  if (animation === 'orbit') {
    return (
      <div className="w-full max-w-md aspect-square rounded-full border border-border/50 relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-exploit-red/20 animate-[spin_60s_linear_infinite]" />
        <div className="absolute inset-8 rounded-full border border-border/50 animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute inset-16 rounded-full border border-exploit-red/10 animate-[spin_20s_linear_infinite]" />
        <div className="w-32 h-32 bg-dark-base rounded-full border border-border flex items-center justify-center text-exploit-red shadow-[0_0_50px_rgba(192,57,43,0.2)]">
          <Icon size={48} strokeWidth={1} />
        </div>
      </div>
    );
  }
  if (animation === 'radar') {
    return (
      <div className="w-full max-w-md aspect-square relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-border/30" />
        <div className="absolute inset-4 rounded-full border border-exploit-red/10 animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute inset-12 rounded-full border border-border/20" />
        <div className="absolute inset-20 rounded-full border border-exploit-red/15 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="w-28 h-28 bg-dark-base rounded-full border border-border flex items-center justify-center text-exploit-red shadow-[0_0_60px_rgba(192,57,43,0.15)] z-10">
          <Icon size={44} strokeWidth={1} />
        </div>
      </div>
    );
  }
  if (animation === 'network') {
    return (
      <div className="w-full max-w-md aspect-square relative flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 200 200">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke={accent} strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#grid)" />
        </svg>
        <div className="absolute top-8 left-8 w-12 h-12 rounded-lg bg-dark-base border border-border flex items-center justify-center text-muted-gray">
          <Icon size={20} />
        </div>
        <div className="absolute top-12 right-12 w-10 h-10 rounded-lg bg-dark-base border border-border flex items-center justify-center text-muted-gray" />
        <div className="absolute bottom-16 left-16 w-10 h-10 rounded-lg bg-dark-base border border-border flex items-center justify-center text-muted-gray" />
        <div className="absolute bottom-10 right-20 w-12 h-12 rounded-lg bg-dark-base border border-border flex items-center justify-center text-muted-gray" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-dark-base rounded-xl border border-exploit-red/30 flex items-center justify-center text-exploit-red shadow-[0_0_40px_rgba(192,57,43,0.2)] z-10">
          <Icon size={52} strokeWidth={1} />
        </div>
      </div>
    );
  }
  // pulse default
  return (
    <div className="w-full max-w-md aspect-square relative flex items-center justify-center">
      <div className="absolute inset-0 rounded-2xl bg-exploit-red/5 animate-pulse" />
      <div className="absolute inset-4 rounded-2xl border border-exploit-red/10 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute inset-8 rounded-2xl border border-exploit-red/15 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="w-40 h-40 bg-dark-base rounded-2xl border border-border flex items-center justify-center text-exploit-red shadow-[0_0_50px_rgba(192,57,43,0.2)] z-10">
        <Icon size={56} strokeWidth={1} />
      </div>
    </div>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 }
};

const flipIn: Variants = {
  hidden: { opacity: 0, rotateX: 45, y: 30 },
  visible: { opacity: 1, rotateX: 0, y: 0 }
};

export function AIServiceTemplate({ service, icon, heroAnimation, colorAccent = '#c0392b' }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Icon = icon;
  const isRedTeam = service.category === 'red-team';
  const heroVariant = isRedTeam ? slideLeft : fadeUp;
  const statsVariant = isRedTeam ? staggerContainer : scaleIn;
  const deliverablesVariant = isRedTeam ? flipIn : fadeUp;
  const caseStudyVariant = isRedTeam ? slideRight : slideLeft;

  return (
    <div className="w-full bg-void-black min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-void-black/0 via-void-black/80 to-void-black pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={heroVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-dark-base border border-border rounded-xl flex items-center justify-center text-exploit-red">
                  <Icon size={24} />
                </div>
                <span className={`text-sm font-heading font-semibold tracking-widest uppercase ${isRedTeam ? 'text-exploit-red' : 'text-blue-400'}`}>
                  {service.categoryLabel}
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
                  className="px-8 py-4 bg-exploit-red text-ghost-white font-semibold rounded-md hover:bg-exploit-red/90 transition-colors flex items-center justify-center gap-2"
                >
                  Book Assessment <ArrowRight size={18} />
                </Link>
                <a
                  href="#methodology"
                  className="px-8 py-4 bg-transparent border border-steel-gray text-ghost-white font-semibold rounded-md hover:bg-dark-base transition-colors flex items-center justify-center"
                >
                  View Methodology
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="hidden lg:flex justify-center"
            >
              {getHeroVisual(icon, heroAnimation, colorAccent)}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scope & Approach */}
      <section className="py-24 bg-void-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <SectionHeading
                title="Scope & Approach"
                description="How we execute"
              />
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 space-y-6 text-lg text-muted-text leading-relaxed"
              >
                {service.whatWeDo.map((paragraph, idx) => (
                  <motion.p key={idx} variants={fadeUp}>
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </div>
            <motion.div
              variants={statsVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#111115] border border-border rounded-xl p-8 h-fit"
            >
              <h3 className="text-xl font-heading font-bold text-ghost-white mb-6 flex items-center gap-2">
                <ShieldAlert size={20} className="text-exploit-red" />
                Service Metrics
              </h3>
              <div className="space-y-6">
                {service.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    variants={isRedTeam ? fadeUp : scaleIn}
                    className="border-b border-border pb-6 last:border-0 last:pb-0"
                  >
                    <div className="text-3xl font-heading font-bold text-ghost-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-text uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-24 bg-dark-base/30 border-y border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <SectionHeading
            title="Our Methodology"
            description="A systematic approach to AI security"
          />
          <div className="mt-16 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border">
            {service.methodology.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isRedTeam ? (idx % 2 === 0 ? -40 : 40) : 0, y: isRedTeam ? 0 : 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 bg-void-black">
        <div className="container mx-auto px-6 max-w-5xl">
          <SectionHeading
            title="What You Receive"
            description="Actionable intelligence, not just automated reports"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {service.deliverables.map((item, idx) => (
              <motion.div
                key={idx}
                variants={deliverablesVariant}
                className="flex items-start gap-4 p-6 bg-dark-base/50 border border-border rounded-xl"
              >
                <div className="mt-1 w-6 h-6 rounded-full bg-exploit-red/10 flex items-center justify-center text-exploit-red shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-lg text-ghost-white font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-dark-base/30 border-y border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            variants={caseStudyVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#111115] border border-border rounded-2xl overflow-hidden border-l-4 border-l-exploit-red p-8 md:p-12"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-void-black text-center">
        <div className="container mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-heading font-bold text-ghost-white mb-10"
          >
            Our Engineers Hold Elite Certifications
          </motion.h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {service.certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                className="flex items-center gap-2 px-6 py-3 bg-[#111115] border border-border rounded-lg text-ghost-white font-heading font-bold"
              >
                <BadgeCheck size={18} className="text-exploit-red" />
                {cert}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-dark-base/30 border-t border-border relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ghost-white mb-6">
              Ready to secure your AI stack?
            </h2>
            <p className="text-xl text-muted-text mb-10">
              Schedule a scoping call with our AI security engineers to discuss your
              specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-exploit-red text-ghost-white font-semibold rounded-md hover:bg-exploit-red/90 transition-colors"
              >
                Book Assessment
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border border-steel-gray text-ghost-white font-semibold rounded-md hover:bg-dark-base transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
