import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
  red: boolean;
}

export function NotFound() {
  const bgCanvasRef = useRef<HTMLCanvasElement>(null);
  const pCanvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [showContent, setShowContent] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showData, setShowData] = useState(false);
  const [showCorners, setShowCorners] = useState(false);
  const [dataValues, setDataValues] = useState(['---', '---', '---', '---']);
  const [animationKey, setAnimationKey] = useState(0);

  // Data strip values
  const dataSeq = [
    { label: 'STATUS', val: 'OFFLINE' },
    { label: 'MODE', val: '404' },
    { label: 'TARGET', val: 'MISSING' },
    { label: 'ERROR', val: 'NOT FOUND' },
  ];

  // Grid background
  useEffect(() => {
    const canvas = bgCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawGrid = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = 'rgba(30, 30, 34, 0.8)';
      ctx.lineWidth = 0.5;
      const gs = 40;
      for (let x = 0; x < W; x += gs) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y < H; y += gs) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drawGrid();
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // Particle animation
  useEffect(() => {
    const canvas = pCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Particle[] = [];
    for (let i = 0; i < 38; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.3,
        a: Math.random() * 0.5 + 0.1,
        red: Math.random() > 0.75,
      });
    }

    const animate = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.red
          ? `rgba(192, 57, 43, ${p.a})`
          : `rgba(100, 100, 110, ${p.a * 0.5})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Intro animation sequence
  useEffect(() => {
    // Reset states
    setShowContent(false);
    setShowTagline(false);
    setShowData(false);
    setShowCorners(false);
    setDataValues(['---', '---', '---', '---']);

    // Animation sequence
    const timers: NodeJS.Timeout[] = [];

    timers.push(
      setTimeout(() => setShowCorners(true), 600),
      setTimeout(() => setShowContent(true), 1400),
      setTimeout(() => setShowTagline(true), 2000),
      setTimeout(() => setShowData(true), 1800)
    );

    // Scramble effect for data values
    dataSeq.forEach((item, i) => {
      timers.push(
        setTimeout(() => {
          const chars = '0123456789ABCDEF#@!%';
          let count = 0;
          const scramble = setInterval(() => {
            setDataValues((prev) => {
              const newValues = [...prev];
              newValues[i] = Array.from({ length: item.val.length }, () =>
                chars[Math.floor(Math.random() * chars.length)]
              ).join('');
              return newValues;
            });
            count++;
            if (count > 8) {
              clearInterval(scramble);
              setDataValues((prev) => {
                const newValues = [...prev];
                newValues[i] = item.val;
                return newValues;
              });
            }
          }, 50);
        }, 1800 + i * 200)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [animationKey]);

  const handleReplay = () => {
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <div className="w-full min-h-screen bg-[#0a0a0c] relative overflow-hidden font-mono">
      {/* Grid Background */}
      <canvas
        ref={bgCanvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Particle Canvas */}
      <canvas
        ref={pCanvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Corner Brackets */}
      <div
        className={`absolute top-4 left-4 w-5 h-5 border-l border-t border-[rgba(192,57,43,0.4)] transition-opacity duration-500 ${
          showCorners ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute top-4 right-4 w-5 h-5 border-r border-t border-[rgba(192,57,43,0.4)] transition-opacity duration-500 ${
          showCorners ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute bottom-4 left-4 w-5 h-5 border-l border-b border-[rgba(192,57,43,0.4)] transition-opacity duration-500 ${
          showCorners ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute bottom-4 right-4 w-5 h-5 border-r border-b border-[rgba(192,57,43,0.4)] transition-opacity duration-500 ${
          showCorners ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Hex Logo Container */}
        <div className="relative w-40 h-40 flex items-center justify-center mb-8">
          {/* Animated Rings */}
          <div className="absolute -top-5 -left-5 w-[200px] h-[200px] rounded-full border border-[rgba(192,57,43,0.18)] animate-[ringPulse_3s_ease-in-out_infinite]" />
          <div
            className="absolute -top-[50px] -left-[50px] w-[260px] h-[260px] rounded-full border border-[rgba(192,57,43,0.18)] animate-[ringPulse_3s_ease-in-out_infinite]"
            style={{ animationDelay: '0.6s' }}
          />
          <div
            className="absolute -top-20 -left-20 w-[320px] h-[320px] rounded-full border border-[rgba(192,57,43,0.18)] animate-[ringPulse_3s_ease-in-out_infinite]"
            style={{ animationDelay: '1.2s' }}
          />

          {/* Scan Line */}
          <div className="absolute -left-20 -right-20 h-px bg-[rgba(192,57,43,0.5)] animate-[scanLine_2.4s_ease-in-out_infinite]" />

          {/* SVG Hexagon */}
          <svg
            viewBox="0 0 100 100"
            fill="none"
            className="w-40 h-40 overflow-visible"
            key={`hex-${animationKey}`}
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
            <circle cx="50" cy="50" r="3" fill="#0a0a0c" opacity="0" className="animate-[fadeIn_0.3s_ease_1.3s_forwards]" />
          </svg>
        </div>

        {/* 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="text-[80px] md:text-[120px] font-bold tracking-wider text-[#e8e8ea] leading-none">
            4<span className="text-[#c0392b]">0</span>4
          </h1>
          <div className="text-xs tracking-[0.32em] text-[#c0392b] mt-2">
            PAGE NOT FOUND
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={showTagline ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-xs tracking-[0.12em] text-[#4a4a52] mt-6"
        >
          THE PAGE YOU&apos;RE LOOKING FOR DOESN&apos;T EXIST.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showTagline ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 bg-[#c0392b] text-[#e8e8ea] rounded-lg hover:bg-[#c0392b]/90 transition-colors font-medium"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 border border-[#2a2a2e] text-[#e8e8ea] rounded-lg hover:border-[#c0392b] hover:text-[#c0392b] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </motion.div>
      </div>

      {/* Data Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={showData ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute bottom-6 left-0 right-0 flex justify-center gap-8 md:gap-12"
      >
        {dataSeq.map((item, i) => (
          <div key={item.label} className="text-center">
            <div className="text-xs md:text-sm text-[#c0392b] tracking-wider">
              {dataValues[i]}
            </div>
            <div className="text-[9px] text-[#3a3a42] tracking-[0.18em] mt-1">
              {item.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Replay Button */}
      <button
        onClick={handleReplay}
        className="absolute bottom-3 right-4 text-[9px] tracking-[0.14em] text-[#3a3a42] border border-[#2a2a2e] px-3 py-1 rounded hover:text-[#c0392b] hover:border-[#c0392b] transition-colors"
      >
        REPLAY
      </button>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes ringPulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(1.03); }
        }
        @keyframes scanLine {
          0% { top: -80px; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 240px; opacity: 0; }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
