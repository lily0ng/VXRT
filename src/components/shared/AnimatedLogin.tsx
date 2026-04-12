import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Shield,
  AlertTriangle,
  ArrowRight,
  Fingerprint,
  Key,
  User,
  X
} from 'lucide-react';
import { Button } from '../ui/button';

interface AnimatedLoginProps {
  onClose?: () => void;
  redirectPath?: string;
}

export function AnimatedLogin({ onClose, redirectPath = '/portal' }: AnimatedLoginProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'login' | '2fa'>('login');
  const [twoFactorCode, setTwoFactorCode] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (email === 'admin@example.com') {
      setActiveTab('2fa');
      setIsLoading(false);
    } else {
      setIsLoading(false);
      navigate(redirectPath);
    }
  };

  const handle2FA = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    navigate(redirectPath);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(192, 57, 43, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(192, 57, 43, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Animated Circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-exploit-red/20"
            style={{
              width: 300 + i * 200,
              height: 300 + i * 200,
              left: '50%',
              top: '50%',
              marginLeft: -(150 + i * 100),
              marginTop: -(150 + i * 100),
            }}
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{
              rotate: { duration: 20 + i * 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c]" />
      </div>

      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-muted-text hover:text-ghost-white transition-colors z-20"
        >
          <X className="w-6 h-6" />
        </button>
      )}

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Card Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-exploit-red/20 via-transparent to-exploit-red/20 rounded-2xl blur-xl opacity-50" />

        <div className="relative bg-gradient-to-br from-dark-base via-[#111115] to-void-black border border-border rounded-2xl overflow-hidden">
          {/* Header Decoration */}
          <div className="h-2 bg-gradient-to-r from-exploit-red via-red-500 to-exploit-red" />

          <div className="p-8">
            {/* Logo */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <div className="relative w-20 h-20">
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-exploit-red/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-exploit-red" />
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-2xl font-heading font-bold text-ghost-white mb-1">
                {activeTab === 'login' ? 'Secure Access' : 'Two-Factor Authentication'}
              </h1>
              <p className="text-sm text-muted-text">
                {activeTab === 'login'
                  ? 'Enter your credentials to continue'
                  : 'Enter the 6-digit code from your authenticator app'
                }
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              {activeTab === 'login' ? (
                <motion.form
                  key="login"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleLogin}
                  className="space-y-5"
                >
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ghost-white flex items-center gap-2">
                      <Mail className="w-4 h-4 text-exploit-red" />
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="admin@vxrt.io"
                        className="w-full bg-[#111115] border border-border rounded-lg px-4 py-3 pl-11 text-ghost-white placeholder:text-muted-text/50 focus:border-exploit-red focus:outline-none transition-all"
                        required
                      />
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-text" />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ghost-white flex items-center gap-2">
                      <Lock className="w-4 h-4 text-exploit-red" />
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full bg-[#111115] border border-border rounded-lg px-4 py-3 pl-11 pr-11 text-ghost-white placeholder:text-muted-text/50 focus:border-exploit-red focus:outline-none transition-all"
                        required
                      />
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-text" />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-text hover:text-ghost-white transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Options */}
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-muted-text hover:text-ghost-white cursor-pointer transition-colors">
                      <input type="checkbox" className="rounded border-border bg-[#111115] text-exploit-red focus:ring-exploit-red" />
                      Remember me
                    </label>
                    <Link to="/forgot-password" className="text-exploit-red hover:text-white transition-colors">
                      Forgot password?
                    </Link>
                  </div>

                  {/* Error Message */}
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2 p-3 bg-exploit-red/10 border border-exploit-red/30 rounded-lg text-sm text-exploit-red"
                      >
                        <AlertTriangle className="w-4 h-4" />
                        {error}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-exploit-red hover:bg-exploit-red/90 text-ghost-white py-4 text-base font-semibold relative overflow-hidden"
                  >
                    <motion.span
                      className="flex items-center justify-center gap-2"
                      animate={isLoading ? { opacity: 0 } : { opacity: 1 }}
                    >
                      Sign In <ArrowRight className="w-4 h-4" />
                    </motion.span>
                    {isLoading && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                    )}
                  </Button>
                </motion.form>
              ) : (
                <motion.form
                  key="2fa"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handle2FA}
                  className="space-y-5"
                >
                  {/* 2FA Icon */}
                  <div className="flex justify-center mb-4">
                    <motion.div
                      className="w-16 h-16 bg-exploit-red/20 rounded-full flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Fingerprint className="w-8 h-8 text-exploit-red" />
                    </motion.div>
                  </div>

                  {/* 2FA Code Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ghost-white flex items-center gap-2">
                      <Key className="w-4 h-4 text-exploit-red" />
                      Authentication Code
                    </label>
                    <div className="flex gap-2 justify-center">
                      {[...Array(6)].map((_, i) => (
                        <motion.input
                          key={i}
                          type="text"
                          maxLength={1}
                          className="w-12 h-14 bg-[#111115] border border-border rounded-lg text-center text-xl font-mono text-ghost-white focus:border-exploit-red focus:outline-none transition-all"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-exploit-red hover:bg-exploit-red/90 text-ghost-white py-4 text-base font-semibold relative overflow-hidden"
                  >
                    <motion.span
                      className="flex items-center justify-center gap-2"
                      animate={isLoading ? { opacity: 0 } : { opacity: 1 }}
                    >
                      Verify & Continue <ArrowRight className="w-4 h-4" />
                    </motion.span>
                    {isLoading && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                    )}
                  </Button>

                  {/* Back Button */}
                  <button
                    type="button"
                    onClick={() => setActiveTab('login')}
                    className="w-full text-sm text-muted-text hover:text-ghost-white transition-colors"
                  >
                    ← Back to login
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#111115] px-2 text-muted-text">Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 p-3 bg-[#111115] border border-border rounded-lg text-sm text-ghost-white hover:border-steel-gray transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 p-3 bg-[#111115] border border-border rounded-lg text-sm text-ghost-white hover:border-steel-gray transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </motion.button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-muted-text mt-6">
              Don't have an account?{' '}
              <Link to="/signup" className="text-exploit-red hover:text-white transition-colors font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Security Badge */}
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2 text-xs text-muted-text/50 bg-[#111115]/50 px-4 py-2 rounded-full border border-border">
            <Lock className="w-3 h-3" />
            <span>End-to-end encryption</span>
            <span className="w-1 h-1 bg-green-500 rounded-full" />
            <span>256-bit SSL</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
