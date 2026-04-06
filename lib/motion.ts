export const EASING = {
  // A custom cubic-bezier that gives a smooth, highly premium ease-out feel
  premium: [0.16, 1, 0.3, 1] as [number, number, number, number],
  // Snappy but smooth
  snappy: [0.23, 1, 0.32, 1] as [number, number, number, number],
  // Smooth ease-in-out
  smooth: [0.65, 0, 0.35, 1] as [number, number, number, number],
  // Out-back for subtle bounce
  outBack: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  // Linear ease for precise mechanical feeling
  linear: "linear",
};

export const DURATIONS = {
  vFast: 0.2, // 200ms - Micro-interactions (hover, small UI changes)
  fast: 0.4,   // 400ms - Standard transitions (modal, collapse)
  normal: 0.8, // 800ms - Page entry/Section reveal
  slow: 1.2,   // 1200ms - Complex storyteller animations
  vSlow: 1.6,  // 1600ms - Atmospheric transitions
};

export const MOTION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      transition: {
        duration: DURATIONS.normal,
        ease: EASING.premium,
        delay: custom,
      },
    }),
  },
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: DURATIONS.normal,
        ease: EASING.premium,
        delay: custom,
      },
    }),
  },
  fadeDown: {
    hidden: { opacity: 0, y: -30 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: DURATIONS.normal,
        ease: EASING.premium,
        delay: custom,
      },
    }),
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (custom: number = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: DURATIONS.normal,
        ease: EASING.premium,
        delay: custom,
      },
    }),
  },
  staggerContainer: (stagger = 0.1, delay = 0) => ({
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }),
};
