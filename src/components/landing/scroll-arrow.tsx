"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface Props {
  className?: string;
}

export default function ScrollArrow({ className }: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      aria-hidden="true"
      animate={reduced ? undefined : { y: [0, 8, 0] }}
      transition={
        reduced
          ? undefined
          : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
      }
    >
      <Image
        src="/images/backgrounds/scroll-arrow.svg"
        alt=""
        width={12}
        height={7}
      />
    </motion.div>
  );
}
