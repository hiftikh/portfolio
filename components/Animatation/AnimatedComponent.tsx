"use client";
import { motion, Variants } from "framer-motion";
import { useRef } from "react";

const fadeUpVariant: Variants = {
  offscreen: {
    y: 100,
    opacity: 0.2,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.5,
    },
  },
};

const FadeUpAnimation = ({ children, className, key }: any) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariant}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className={className}
      key={key}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpAnimation;
