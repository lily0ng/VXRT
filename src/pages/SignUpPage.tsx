import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { AnimatedGridBackground } from '../components/shared/AnimatedGridBackground';
import {
  Shield,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Github,
  Twitter,
  ArrowRight,
  User,
  Building,
  Check,
  AlertCircle
} from 'lucide-react';

export function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic
    console.log('Sign up:', formData);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="w-full bg-void-black min-h-screen">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Side - Form */}
        <div className="relative flex items-center justify-center p-6 lg:p-12">
          <AnimatedGridBackground />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full max-w-md relative z-10">
            
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
              className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-exploit-red/10 border border-exploit-red/30 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-exploit-red" />
              </div>
              <span className="text-2xl font-heading font-bold text-ghost-white">VXRT</span>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8">
              <h1 className="text-3xl font-heading font-bold text-ghost-white mb-2">
                Create your account
              </h1>
              <p className="text-muted-gray">
                Join the offensive security elite
              </p>
            </motion.div>

            {/* Social Sign Up */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4 mb-6">
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-dark-base border border-steel-gray rounded-lg text-ghost-white hover:border-exploit-red/50 hover:bg-exploit-red/5 transition-all duration-300">
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-dark-base border border-steel-gray rounded-lg text-ghost-white hover:border-exploit-red/50 hover:bg-exploit-red/5 transition-all duration-300">
                <Twitter className="w-5 h-5" />
                <span className="text-sm">Twitter</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-steel-gray/50" />
              <span className="text-xs text-muted-gray uppercase">Or sign up with email</span>
              <div className="h-px flex-1 bg-steel-gray/50" />
            </motion.div>

            {/* Step Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 mb-6">
              {[1, 2].map((s) => (
                <div
                  key={s}
                  className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                    s <= step ? 'bg-exploit-red' : 'bg-steel-gray/30'
                  }`}
                />
              ))}
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              onSubmit={handleSubmit}
              className="space-y-5">
              
              {step === 1 ? (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-ghost-white">First Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-gray" />
                        <Input
                          type="text"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="pl-10 bg-dark-base border-steel-gray text-ghost-white placeholder:text-muted-gray focus:border-exploit-red focus:ring-exploit-red/20"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-ghost-white">Last Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-gray" />
                        <Input
                          type="text"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="pl-10 bg-dark-base border-steel-gray text-ghost-white placeholder:text-muted-gray focus:border-exploit-red focus:ring-exploit-red/20"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ghost-white">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-gray" />
                      <Input
                        type="email"
                        placeholder="ops@vxrt.io"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pl-10 bg-dark-base border-steel-gray text-ghost-white placeholder:text-muted-gray focus:border-exploit-red focus:ring-exploit-red/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ghost-white">Company</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-gray" />
                      <Input
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="pl-10 bg-dark-base border-steel-gray text-ghost-white placeholder:text-muted-gray focus:border-exploit-red focus:ring-exploit-red/20"
                      />
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="w-full bg-exploit-red hover:bg-exploit-red/90 text-ghost-white py-6 text-lg font-semibold">
                      Continue
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </motion.div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ghost-white">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-gray" />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="pl-10 pr-10 bg-dark-base border-steel-gray text-ghost-white placeholder:text-muted-gray focus:border-exploit-red focus:ring-exploit-red/20"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-gray hover:text-ghost-white transition-colors">
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    
                    {/* Password Strength */}
                    <div className="flex gap-1 mt-2">
                      {[1, 2, 3, 4].map((level) => (
                        <div
                          key={level}
                          className={`h-1 flex-1 rounded-full transition-colors ${
                            formData.password.length >= level * 3 ? 'bg-exploit-red' : 'bg-steel-gray/30'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-muted-gray">
                      Must be at least 12 characters with uppercase, number, and special character
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ghost-white">Confirm Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-gray" />
                      <Input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="pl-10 pr-10 bg-dark-base border-steel-gray text-ghost-white placeholder:text-muted-gray focus:border-exploit-red focus:ring-exploit-red/20"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-gray hover:text-ghost-white transition-colors">
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-exploit-red/5 border border-exploit-red/20 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-exploit-red shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="text-ghost-white font-medium mb-1">Security Notice</p>
                      <p className="text-muted-gray">
                        By creating an account, you agree to our security policies and acknowledge that all activity is logged for compliance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 px-6 py-3 border border-steel-gray rounded-lg text-ghost-white hover:border-exploit-red/50 transition-all">
                      Back
                    </button>
                    <motion.div className="flex-[2]" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-exploit-red hover:bg-exploit-red/90 text-ghost-white py-6 text-lg font-semibold">
                        Create Account
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </motion.div>
                  </div>
                </>
              )}
            </motion.form>

            {/* Sign In Link */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-center text-muted-gray">
              Already have an account?{' '}
              <Link to="/signin" className="text-exploit-red hover:text-exploit-red/80 font-medium transition-colors">
                Sign in
              </Link>
            </motion.p>
          </motion.div>
        </div>

        {/* Right Side - Visual */}
        <div className="hidden lg:flex relative bg-gradient-to-br from-dark-base to-void-black items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative z-10 text-center px-12">
            
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-32 h-32 mx-auto mb-8 bg-exploit-red/10 border border-exploit-red/30 rounded-2xl flex items-center justify-center">
              <Shield className="w-16 h-16 text-exploit-red" />
            </motion.div>
            
            <h2 className="text-3xl font-heading font-bold text-ghost-white mb-4">
              Join the Offensive
            </h2>
            <p className="text-muted-gray max-w-md mx-auto leading-relaxed">
              Get access to exclusive vulnerability research, tools, and a community of elite security professionals.
            </p>

            <div className="mt-12 space-y-4">
              {[
                { icon: Check, text: 'Access to VXRT research database' },
                { icon: Check, text: 'Exclusive exploit releases' },
                { icon: Check, text: 'Community Discord access' },
                { icon: Check, text: 'Early beta tool access' }
              ].map((benefit, i) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-3 text-ghost-white/80">
                  <div className="w-6 h-6 bg-exploit-red/20 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-4 h-4 text-exploit-red" />
                  </div>
                  <span className="text-sm">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
