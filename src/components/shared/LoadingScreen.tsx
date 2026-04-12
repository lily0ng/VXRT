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
        {/* Hero-Style Animated Logo Container */}
        <div className="relative w-40 h-40 flex items-center justify-center mb-8">
          {/* Animated Rings - Hero Style */}
          <motion.div 
            className="absolute -top-5 -left-5 w-[200px] h-[200px] rounded-full border border-[rgba(192,57,43,0.18)]"
            animate={{ 
              scale: [1, 1.03, 1],
              opacity: [0.15, 0.45, 0.15]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -top-[50px] -left-[50px] w-[260px] h-[260px] rounded-full border border-[rgba(192,57,43,0.18)]"
            animate={{ 
              scale: [1, 1.03, 1],
              opacity: [0.15, 0.45, 0.15]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
          <motion.div 
            className="absolute -top-20 -left-20 w-[320px] h-[320px] rounded-full border border-[rgba(192,57,43,0.18)]"
            animate={{ 
              scale: [1, 1.03, 1],
              opacity: [0.15, 0.45, 0.15]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          />

          {/* Scan Line */}
          <motion.div 
            className="absolute -left-20 -right-20 h-px bg-[rgba(192,57,43,0.5)]"
            animate={{ 
              top: ['-80px', '240px'],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* SVG Hexagon - Hero Style */}
          <svg
            viewBox="0 0 100 100"
            fill="none"
            className="w-40 h-40 overflow-visible"
          >
            <motion.polygon
              points="50,6 88,28 88,72 50,94 12,72 12,28"
              fill="#0d0d10"
              stroke="#c0392b"
              strokeWidth="1.5"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
            <motion.polygon
              points="50,18 76,33 76,67 50,82 24,67 24,33"
              fill="none"
              stroke="#2a2a32"
              strokeWidth="0.8"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
            />
            <motion.line
              x1="50"
              y1="6"
              x2="50"
              y2="94"
              stroke="#c0392b"
              strokeWidth="0.6"
              opacity="0.4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
            />
            <motion.line
              x1="12"
              y1="28"
              x2="88"
              y2="72"
              stroke="#c0392b"
              strokeWidth="0.6"
              opacity="0.4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
            />
            <motion.line
              x1="88"
              y1="28"
              x2="12"
              y2="72"
              stroke="#c0392b"
              strokeWidth="0.6"
              opacity="0.4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="8"
              fill="#c0392b"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 1.2 }}
            />
            <motion.circle 
              cx="50" 
              cy="50" 
              r="3" 
              fill="#0a0a0c" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.3 }}
            />
          </svg>
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
