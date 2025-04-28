import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Navigation links
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Team', path: '/team' },
    { title: 'Contact', path: '/contact' },
  ];
  
  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container flex items-center justify-between px-4 mx-auto">
        {/* Logo */}
        <Link to="/public/logo.jpg" className="text-2xl font-bold text-primary">
          Luxury Interior Design And Decorations LTD
        </Link>
        
        {/* Desktop Navigation */}
        <div className="items-center hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`transition-all duration-300 hover:text-primary ${location.pathname === link.path ? 'text-primary font-medium' : 'text-gray-700 dark:text-gray-300'}`}
            >
              {link.title}
            </Link>
          ))}
          
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="text-gray-800 md:hidden dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white md:hidden dark:bg-gray-900"
          >
            <div className="container flex flex-col px-4 py-6 mx-auto space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`transition-all duration-300 py-2 ${location.pathname === link.path ? 'text-primary font-medium' : 'text-gray-700 dark:text-gray-300'}`}
                >
                  {link.title}
                </Link>
              ))}
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;