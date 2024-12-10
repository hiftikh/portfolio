"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  dirX?: number;
  dirY?: number;
}

export default function SlideOnScrollAnimation({
  children,
  className,
  delay = 0,
  dirX = 0,
  dirY = 0,
}: AnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  const variants = {
    hidden: { opacity: 0, translateX: dirX, translateY: dirY },
    visible: {
      opacity: 1,
      translateY: 0,
      translateX: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      className={className}
      variants={variants}
      transition={{
        type: "spring",
        duration: 0.2,
        damping: 10,
        delay: delay,
        stiffness: 100,
      }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
