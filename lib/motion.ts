export const EASING = {
  // A custom cubic-bezier that gives a smooth, highly premium ease-out feel
  premium: [0.16, 1, 0.3, 1] as [number, number, number, number],
  // Snappy but smooth
  snappy: [0.23, 1, 0.32, 1],
  // Linear ease for precise mechanical feeling
  linear: "linear",
};

export const DURATIONS = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.8,
  verySlow: 1.2,
};

// Common animation presets
export const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: DURATIONS.slow,
      ease: EASING.premium
    }
  }
};

export const FADE_IN = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: DURATIONS.normal,
      ease: EASING.premium
    }
  }
};

export const STAGGER_CONTAINER = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};
