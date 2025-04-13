// src/hooks/useScrollAnimation.jsx
import { useState, useEffect } from 'react';

/**
 * Custom hook to detect when an element should be animated based on scroll position
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Percentage of element visible before triggering (0-1)
 * @param {boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {Array} [ref, isVisible] - Ref to attach to element and visibility state
 */
const useScrollAnimation = ({ threshold = 0.1, triggerOnce = true } = {}) => {
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, threshold, triggerOnce]);

  return [setRef, isVisible];
};

export default useScrollAnimation;