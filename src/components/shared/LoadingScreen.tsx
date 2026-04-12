import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete?: () => void;
  minDuration?: number;
}

export function LoadingScreen({ onComplete, minDuration = 2500 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing');

  const statusMessages = [
    'Initializing',
    'Loading assets',
    'Establishing secure connection',
    'Verifying integrity',
    'Access granted'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete?.(), 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const messageIndex = Math.min(
      Math.floor((progress / 100) * statusMessages.length),
      statusMessages.length - 1
    );
    setStatusText(statusMessages[messageIndex]);
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-[#0a0a0c] z-[100] flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(192, 57, 43, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(192, 57, 43, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-exploit-red/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Logo Container */}
        <div className="relative w-32 h-32 mb-8">
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-exploit-red/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-exploit-red rounded-full" />
          </motion.div>

          {/* Middle Ring */}
          <motion.div
            className="absolute inset-4 rounded-full border-2 border-exploit-red/50"
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-exploit-red/70 rounded-full" />
          </motion.div>

          {/* Inner Ring */}
          <motion.div
            className="absolute inset-8 rounded-full border-2 border-exploit-red/70"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-exploit-red rounded-full" />
          </motion.div>

          {/* Center Logo */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <svg viewBox="0 0 100 100" className="w-16 h-16">
              <motion.polygon
                points="50,10 90,30 90,70 50,90 10,70 10,30"
                fill="none"
                stroke="#c0392b"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.circle
                cx="50"
                cy="50"
                r="8"
                fill="#c0392b"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5, delay: 1 }}
              />
            </svg>
          </motion.div>

          {/* Pulse Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-exploit-red/20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Brand Name */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl font-heading font-bold tracking-wider">
            <span className="text-ghost-white">VX</span>
            <span className="text-exploit-red">RT</span>
          </h1>
          <p className="text-sm text-muted-text tracking-[0.3em] mt-2 uppercase">
            Offensive Security
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-64 mb-4">
          <div className="h-1 bg-steel-gray/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-exploit-red to-red-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Status Text */}
        <div className="flex items-center gap-2">
          <motion.span
            className="text-sm text-muted-text font-mono"
            key={statusText}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
          >
            {statusText}
          </motion.span>
          <motion.span
            className="text-exploit-red font-mono text-sm"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            _
          </motion.span>
        </div>

        {/* Progress Percentage */}
        <motion.span
          className="text-xs text-muted-text/50 mt-2 font-mono"
        >
          {Math.round(progress)}%
        </motion.span>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-exploit-red/30" />
      <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-exploit-red/30" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-exploit-red/30" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-exploit-red/30" />

      {/* Bottom Status Bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/30 py-3 px-6">
        <div className="flex justify-between items-center text-xs text-muted-text/50 font-mono">
          <span>v2.4.1-stable</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            SYSTEM OPERATIONAL
          </span>
          <span>SECURE CONNECTION</span>
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
}
