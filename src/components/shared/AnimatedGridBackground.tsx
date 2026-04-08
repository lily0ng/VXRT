import React from 'react';
import { motion } from 'framer-motion';
export function AnimatedGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(58, 58, 66, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(58, 58, 66, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '40px 40px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }} />
      
      <div
        className="absolute inset-0"
        style={{
          background:
          'radial-gradient(circle at 50% 50%, rgba(192, 57, 43, 0.03) 0%, transparent 50%)'
        }} />
      
    </div>);

}