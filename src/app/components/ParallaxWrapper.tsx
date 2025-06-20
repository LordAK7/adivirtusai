"use client";

import React, { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxWrapperProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({ 
  children, 
  offset = 50, 
  className = '' 
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

  return (
    <motion.div 
      ref={ref} 
      style={{ y }} 
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxWrapper; 