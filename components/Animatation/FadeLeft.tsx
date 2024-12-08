"use client";
import { useRef } from "react";
import { motion, Variants } from "framer-motion";

const fadeUpVariant: Variants = {
  offscreen: {
    x: -100,
    opacity: 0.2,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.5,
    },
  },
};

export default function FadeUpAnimation({ children, className, key }: any) {
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
}
