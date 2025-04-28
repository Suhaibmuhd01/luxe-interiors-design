import { Link } from 'react-router-dom';
import SEO from '../components/shared/SEO';
// import motion from 'framer-motion'

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
        robots="noindex, nofollow"
      />

      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-8xl font-bold text-primary mb-6"
          >
            404
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
          >
            Page Not Found
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto"
          >
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              to="/" 
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full inline-block transition-colors duration-300"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound;