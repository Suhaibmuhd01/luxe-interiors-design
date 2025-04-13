// src/hooks/useMediaQuery.jsx
import { useState, useEffect } from 'react';

/**
 * Custom hook to check if a media query matches
 * @param {string} query - Media query to check, e.g. '(min-width: 768px)'
 * @returns {boolean} - Whether the media query matches
 */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = (event) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;