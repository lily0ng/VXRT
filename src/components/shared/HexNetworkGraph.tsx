import { motion } from 'framer-motion';

export function HexNetworkGraph() {
  // Calculate hexagon points
  const hexRadius = 140;
  const innerRadius = 80;
  const center = { x: 200, y: 200 };

  const getHexPoint = (radius: number, index: number) => {
    const angle = (index * Math.PI) / 3 - Math.PI / 2;
    return {
      x: center.x + radius * Math.cos(angle),
      y: center.y + radius * Math.sin(angle)
    };
  };

  const outerPoints = Array.from({ length: 6 }, (_, i) => getHexPoint(hexRadius, i));
  const innerPoints = Array.from({ length: 6 }, (_, i) => getHexPoint(innerRadius, i));

  // Connecting lines between outer and inner hexagons
  const connectingLines = outerPoints.map((outer, i) => ({
    x1: outer.x,
    y1: outer.y,
    x2: innerPoints[i].x,
    y2: innerPoints[i].y
  }));

  // Additional scattered small dots
  const scatteredDots = [
    { x: 120, y: 100, delay: 0 },
    { x: 280, y: 120, delay: 0.5 },
    { x: 150, y: 300, delay: 1 },
    { x: 300, y: 280, delay: 1.5 },
    { x: 100, y: 200, delay: 2 },
    { x: 320, y: 180, delay: 2.5 }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full max-w-[400px] max-h-[400px]"
      >
        {/* Definitions for glow effects */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer hexagon wireframe */}
        <motion.polygon
          points={outerPoints.map(p => `${p.x},${p.y}`).join(' ')}
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Inner hexagon wireframe */}
        <motion.polygon
          points={innerPoints.map(p => `${p.x},${p.y}`).join(' ')}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
        />

        {/* Connecting lines between hexagons */}
        {connectingLines.map((line, i) => (
          <motion.line
            key={`connect-${i}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
          />
        ))}

        {/* Crosshair lines through center */}
        <motion.line
          x1={center.x - 30}
          y1={center.y}
          x2={center.x + 30}
          y2={center.y}
          stroke="#C53030"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
        <motion.line
          x1={center.x}
          y1={center.y - 30}
          x2={center.x}
          y2={center.y + 30}
          stroke="#C53030"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        />

        {/* Central red node */}
        <motion.circle
          cx={center.x}
          cy={center.y}
          r="8"
          fill="#C53030"
          filter="url(#glow)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />

        {/* Central pulse animation */}
        <motion.circle
          cx={center.x}
          cy={center.y}
          r="8"
          fill="none"
          stroke="#C53030"
          strokeWidth="2"
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: [1, 2, 2.5], opacity: [0.8, 0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />

        {/* Outer nodes (white circles) */}
        {outerPoints.map((point, i) => (
          <motion.g key={`outer-node-${i}`}>
            <motion.circle
              cx={point.x}
              cy={point.y}
              r="5"
              fill="#E8E8EA"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
            />
          </motion.g>
        ))}

        {/* Inner nodes (smaller white circles) */}
        {innerPoints.map((point, i) => (
          <motion.circle
            key={`inner-node-${i}`}
            cx={point.x}
            cy={point.y}
            r="3"
            fill="rgba(232,232,234,0.6)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 + i * 0.08 }}
          />
        ))}

        {/* Scattered red dots with pulse */}
        {scatteredDots.map((dot, i) => (
          <motion.g key={`scattered-${i}`}>
            <motion.circle
              cx={dot.x}
              cy={dot.y}
              r="3"
              fill="#C53030"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: [0.4, 1, 0.4] }}
              transition={{
                scale: { duration: 0.3, delay: 1.5 + i * 0.1 },
                opacity: { duration: 2, repeat: Infinity, delay: dot.delay }
              }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
