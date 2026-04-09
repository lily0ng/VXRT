import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  AlertTriangle
} from 'lucide-react';

export function SignInPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic
    console.log('Sign in:', formData);
    // Redirect to portal dashboard
    navigate('/portal');
  };

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
                Welcome back
              </h1>
              <p className="text-muted-gray">
                Sign in to access your security dashboard
              </p>
            </motion.div>

            {/* Social Sign In */}
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
              <span className="text-xs text-muted-gray uppercase">Or continue with</span>
              <div className="h-px flex-1 bg-steel-gray/50" />
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onSubmit={handleSubmit}
              className="space-y-5">
              
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
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-steel-gray bg-dark-base text-exploit-red focus:ring-exploit-red" />
                  <span className="text-sm text-muted-gray">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-exploit-red hover:text-exploit-red/80 transition-colors">
                  Forgot password?
                </Link>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-exploit-red hover:bg-exploit-red/90 text-ghost-white py-6 text-lg font-semibold">
                  Sign In
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </motion.form>

            {/* Sign Up Link */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-center text-muted-gray">
              Don't have an account?{' '}
              <Link to="/signup" className="text-exploit-red hover:text-exploit-red/80 font-medium transition-colors">
                Sign up
              </Link>
            </motion.p>

            {/* Security Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex items-center gap-3 p-4 bg-exploit-red/5 border border-exploit-red/20 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-exploit-red shrink-0" />
              <p className="text-xs text-muted-gray">
                This is a secure connection. All authentication attempts are logged and monitored.
              </p>
            </motion.div>
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
              Secure Access Portal
            </h2>
            <p className="text-muted-gray max-w-md mx-auto leading-relaxed">
              Access your offensive security dashboards, vulnerability reports, and team collaboration tools.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              {[
                { value: '256-bit', label: 'Encryption' },
                { value: 'MFA', label: 'Enabled' },
                { value: 'SOC 2', label: 'Compliant' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="p-4 bg-dark-base/50 border border-steel-gray/30 rounded-lg">
                  <div className="text-lg font-heading font-bold text-exploit-red">{stat.value}</div>
                  <div className="text-xs text-muted-gray">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
