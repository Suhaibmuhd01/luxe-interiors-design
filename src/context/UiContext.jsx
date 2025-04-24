import { createContext, useContext, useState, useEffect } from 'react';

const UiContext = createContext();

export const UiProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Initialize dark mode based on system preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    // Listen for changes in system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setIsDarkMode(e.matches);
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };
  
  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  const value = {
    isDarkMode,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu
  };
  
  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};

export const useUi = () => useContext(UiContext);