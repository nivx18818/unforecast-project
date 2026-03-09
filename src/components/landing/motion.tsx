"use client";

/**
 * Reusable Framer Motion animation primitives for the landing page.
 * All components respect `prefers-reduced-motion` via the `useReducedMotion` hook.
 */

import { type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

// ── Shared constants ────────────────────────────────────────────────────

const EASE_OUT = [0.25, 0.46, 0.45, 0.94] as const;
const VIEWPORT = { once: true, margin: "-80px" } as const;

// ── Variants ─────────────────────────────────────────────────────────────

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const scaleFadeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

// ── Shared type ──────────────────────────────────────────────────────────

interface AnimProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

// ── FadeUp (scroll-triggered) ────────────────────────────────────────────

export function FadeUp({
  children,
  className,
  delay = 0,
  duration = 0.55,
}: AnimProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: EASE_OUT,
      }}
    >
      {children}
    </motion.div>
  );
}

// ── FadeUpMount (mount-triggered, for above-the-fold elements) ────────────

export function FadeUpMount({
  children,
  className,
  delay = 0,
  duration = 0.6,
}: AnimProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      transition={{
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: EASE_OUT,
      }}
    >
      {children}
    </motion.div>
  );
}

// ── FadeIn (scroll-triggered, no Y offset) ──────────────────────────────

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.7,
}: AnimProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: EASE_OUT,
      }}
    >
      {children}
    </motion.div>
  );
}

// ── SlideIn (from left or right, scroll-triggered) ───────────────────────

interface SlideInProps extends AnimProps {
  direction: "left" | "right";
}

export function SlideIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction,
}: SlideInProps) {
  const reduced = useReducedMotion();
  const variants =
    direction === "left" ? slideLeftVariants : slideRightVariants;
  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: EASE_OUT,
      }}
    >
      {children}
    </motion.div>
  );
}

// ── ScaleFade (scroll-triggered, slight scale from below 1) ─────────────

export function ScaleFade({
  children,
  className,
  delay = 0,
  duration = 0.6,
}: AnimProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      variants={scaleFadeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: EASE_OUT,
      }}
    >
      {children}
    </motion.div>
  );
}

// ── StaggerContainer ──────────────────────────────────────────────────────

export function StaggerContainer({
  children,
  className,
}: Pick<AnimProps, "children" | "className">) {
  return (
    <motion.div
      className={cn(className)}
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

// ── StaggerItem ───────────────────────────────────────────────────────────

export function StaggerItem({
  children,
  className,
  duration = 0.5,
}: AnimProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      variants={staggerItemVariants}
      transition={{
        duration: reduced ? 0 : duration,
        ease: EASE_OUT,
      }}
    >
      {children}
    </motion.div>
  );
}

// ── SlideDownMount (for header on mount) ─────────────────────────────────

export function SlideDownMount({
  children,
  className,
  delay = 0,
  duration = 0.5,
}: AnimProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduced ? 0 : duration,
        delay: reduced ? 0 : delay,
        ease: EASE_OUT,
      }}
    >
      {children}
    </motion.div>
  );
}
