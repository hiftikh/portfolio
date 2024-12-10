"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  dirX?: number;
  dirY?: number;
  repeat?: number;
}

export default function SlideAnimation({
  children,
  className,
  delay = 0,
  dirX = 0,
  dirY = 0,
  repeat = 0,
}: AnimationProps) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: dirX, y: dirY }}
      animate={{
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.2,
          damping: 10,
          delay: delay,
          stiffness: 100,
          repeat: repeat,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
