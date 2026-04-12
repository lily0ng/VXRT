import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/button';
import {
  Shield,
  Mail,
  Lock,
  ArrowRight,
  ArrowLeft,
  Check,
  AlertCircle,
  Key,
  Eye,
  EyeOff,
  Fingerprint
} from 'lucide-react';

export function ForgotPasswordPage() {
  const [step, setStep] = useState<'email' | 'verify' | 'reset' | 'success'>('email');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setStep('verify');
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const code = verificationCode.join('');
    
    if (code.length !== 6) {
      setError('Please enter the full 6-digit code');
      return;
    }
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setStep('reset');
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (newPassword.length < 12) {
      setError('Password must be at least 12 characters');
      return;
    }
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setStep('success');
  };

  const updateVerificationCode = (index: number, value: string) => {
    if (value.length > 1) return;
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);
    
    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const passwordStrength = () => {
    let score = 0;
    if (newPassword.length >= 12) score++;
    if (/[A-Z]/.test(newPassword)) score++;
    if (/[0-9]/.test(newPassword)) score++;
    if (/[^A-Za-z0-9]/.test(newPassword)) score++;
    return score;
  };

  const getStrengthColor = (score: number) => {
    const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500'];
    return colors[score - 1] || 'bg-[#111115]';
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
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

      {/* Main Card Container */}
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
            {/* Back Button */}
            {step !== 'success' && step !== 'email' && (
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => setStep(step === 'verify' ? 'email' : 'verify')}
                className="flex items-center gap-2 text-sm text-muted-text hover:text-ghost-white transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </motion.button>
            )}

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
                  {step === 'success' ? (
                    <Check className="w-10 h-10 text-green-500" />
                  ) : step === 'reset' ? (
                    <Lock className="w-10 h-10 text-exploit-red" />
                  ) : step === 'verify' ? (
                    <Key className="w-10 h-10 text-exploit-red" />
                  ) : (
                    <Shield className="w-10 h-10 text-exploit-red" />
                  )}
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
              <h1 className="text-2xl font-heading font-bold text-ghost-white mb-2">
                {step === 'success' && 'Password Reset!'}
                {step === 'reset' && 'Create New Password'}
                {step === 'verify' && 'Enter Verification Code'}
                {step === 'email' && 'Reset Password'}
              </h1>
              <p className="text-sm text-muted-text">
                {step === 'success' && 'Your password has been updated successfully'}
                {step === 'reset' && 'Enter your new secure password below'}
                {step === 'verify' && `Enter the 6-digit code sent to ${email}`}
                {step === 'email' && 'Enter your email to receive a reset code'}
              </p>
            </motion.div>

            {/* Step Indicator */}
            {step !== 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 mb-6"
              >
                {['email', 'verify', 'reset'].map((s, idx) => {
                  const isActive = step === s;
                  const isCompleted = 
                    (step === 'verify' && s === 'email') ||
                    (step === 'reset' && (s === 'email' || s === 'verify')) ||
                    false;
                  
                  return (
                    <div key={s} className="flex items-center flex-1">
                      <motion.div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                          isActive || isCompleted
                            ? 'bg-exploit-red text-white'
                            : 'bg-[#111115] text-muted-text border border-border'
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.1, type: "spring" }}
                      >
                        {isCompleted ? <Check className="w-4 h-4" /> : idx + 1}
                      </motion.div>
                      {idx < 2 && (
                        <div className={`flex-1 h-0.5 mx-2 ${
                          isCompleted ? 'bg-exploit-red' : 'bg-border'
                        }`} />
                      )}
                    </div>
                  );
                })}
              </motion.div>
            )}

            <AnimatePresence mode="wait">
              {/* Success State */}
              {step === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center"
                >
                  <p className="text-muted-text mb-6">
                    Your password has been successfully reset. You can now sign in with your new password.
                  </p>
                  <Link to="/signin">
                    <Button className="w-full bg-exploit-red hover:bg-exploit-red/90 text-ghost-white py-4">
                      Sign In
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              )}

              {/* Email Form */}
              {step === 'email' && (
                <motion.form
                  key="email"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSendCode}
                  className="space-y-5"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ghost-white flex items-center gap-2">
                      <Mail className="w-4 h-4 text-exploit-red" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ops@vxrt.io"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#111115] border border-border rounded-lg px-4 py-3 text-ghost-white placeholder:text-muted-text/50 focus:border-exploit-red focus:outline-none transition-all"
                    />
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-exploit-red/5 border border-exploit-red/20 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-exploit-red shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-text">
                      We'll send a 6-digit verification code to this email address. The code expires in 10 minutes.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-exploit-red hover:bg-exploit-red/90 text-ghost-white py-4 text-base font-semibold relative overflow-hidden"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Reset Code
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm text-muted-text">
                    Remember your password?{' '}
                    <Link to="/signin" className="text-exploit-red hover:text-white transition-colors font-semibold">
                      Sign in
                    </Link>
                  </p>
                </motion.form>
              )}

              {/* Verification Code Form */}
              {step === 'verify' && (
                <motion.form
                  key="verify"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleVerify}
                  className="space-y-5"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ghost-white flex items-center gap-2">
                      <Key className="w-4 h-4 text-exploit-red" />
                      Verification Code
                    </label>
                    <div className="flex gap-2 justify-center">
                      {verificationCode.map((digit, i) => (
                        <motion.input
                          key={i}
                          id={`code-${i}`}
                          type="text"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => updateVerificationCode(i, e.target.value)}
                          className="w-12 h-14 bg-[#111115] border border-border rounded-lg text-center text-xl font-mono text-ghost-white focus:border-exploit-red focus:outline-none transition-all"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                        />
                      ))}
                    </div>
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-sm text-red-500"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoading || verificationCode.join('').length !== 6}
                    className="w-full bg-exploit-red hover:bg-exploit-red/90 text-ghost-white py-4 text-base font-semibold"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Verifying...
                      </span>
                    ) : (
                      <>
                        Verify Code
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setStep('email')}
                      className="text-sm text-muted-text hover:text-exploit-red transition-colors"
                    >
                      Didn't receive the code? Resend
                    </button>
                  </div>
                </motion.form>
              )}

              {/* New Password Form */}
              {step === 'reset' && (
                <motion.form
                  key="reset"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleReset}
                  className="space-y-5"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ghost-white flex items-center gap-2">
                      <Lock className="w-4 h-4 text-exploit-red" />
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        minLength={12}
                        placeholder="••••••••••••"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full bg-[#111115] border border-border rounded-lg px-4 py-3 pr-11 text-ghost-white placeholder:text-muted-text/50 focus:border-exploit-red focus:outline-none transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-text hover:text-ghost-white transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    
                    {/* Password Strength */}
                    <div className="space-y-1">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4].map((level) => (
                          <motion.div
                            key={level}
                            className={`h-1.5 flex-1 rounded-full transition-colors ${
                              passwordStrength() >= level ? getStrengthColor(passwordStrength()) : 'bg-[#111115]'
                            }`}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: level * 0.05 }}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-muted-text">
                        {passwordStrength() === 0 && 'Min 12 characters with uppercase, number, and special char'}
                        {passwordStrength() === 1 && 'Weak - Add uppercase letters'}
                        {passwordStrength() === 2 && 'Fair - Add numbers'}
                        {passwordStrength() === 3 && 'Good - Add special characters'}
                        {passwordStrength() === 4 && 'Strong password!'}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-ghost-white flex items-center gap-2">
                      <Lock className="w-4 h-4 text-exploit-red" />
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        placeholder="••••••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`w-full bg-[#111115] border rounded-lg px-4 py-3 pr-11 text-ghost-white placeholder:text-muted-text/50 focus:outline-none transition-all ${
                          confirmPassword && newPassword !== confirmPassword
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-border focus:border-exploit-red'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-text hover:text-ghost-white transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {confirmPassword && newPassword !== confirmPassword && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-red-500"
                      >
                        Passwords do not match
                      </motion.p>
                    )}
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-sm text-red-500"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {error}
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoading || newPassword !== confirmPassword || newPassword.length < 12}
                    className="w-full bg-exploit-red hover:bg-exploit-red/90 text-ghost-white py-4 text-base font-semibold"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Updating...
                      </span>
                    ) : (
                      <>
                        Reset Password
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Security Badge */}
        {step !== 'success' && (
          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2 text-xs text-muted-text/50 bg-[#111115]/50 px-4 py-2 rounded-full border border-border">
              <Fingerprint className="w-3 h-3" />
              <span>Secure password reset</span>
              <span className="w-1 h-1 bg-green-500 rounded-full" />
              <span>256-bit SSL</span>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default ForgotPasswordPage;
