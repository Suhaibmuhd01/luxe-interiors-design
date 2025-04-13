import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SEO from '../components/shared/SEO';
import PageBanner from '../components/shared/PageBanner';
import AnimatedSection from '../components/shared/AnimatedSection';
import { projects } from '../data/projects';
import {motion} from 'framer-motion';
import { FaSearch, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Extract unique categories from projects
  const categories = ['all', ...new Set(projects.map(project => project.category))];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    } else {
      // Loop to the last image
      setCurrentImageIndex(selectedProject.gallery.length - 1);
    }
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (currentImageIndex < selectedProject.gallery.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    } else {
      // Loop to the first image
      setCurrentImageIndex(0);
    }
  };

  return (
    <>
      <SEO
        title="Project Gallery"
        description="Explore our portfolio of luxury interior design projects. See how we transform residential and commercial spaces into stunning environments."
        keywords="interior design portfolio, luxury projects, interior design gallery, design case studies"
      />

      <PageBanner
        title="Our Portfolio"
        subtitle="Showcasing Our Finest Work"
        background="/src/assets/images/gallery-banner.jpg"
      />

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <AnimatedSection>
              <span className="font-medium text-primary">Our Work</span>
              <h2 className="mt-2 mb-4 font-serif text-3xl font-bold md:text-4xl">Featured Projects</h2>
              <div className="w-20 h-1 mx-auto mb-6 bg-secondary"></div>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Browse our portfolio of completed projects, showcasing the diverse range of spaces we've transformed for our clients.
              </p>
            </AnimatedSection>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 capitalize ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden transition-all duration-300 bg-white rounded-lg cursor-pointer dark:bg-gray-800 shadow-elegant hover:shadow-elegant-lg group"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.featured_image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/30 group-hover:opacity-100">
                      <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full text-primary">
                        <FaSearch />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
                    <p className="mb-4 capitalize text-primary">{project.category}</p>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" 
          onClick={handleCloseModal}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={handleCloseModal}
              className="absolute z-20 flex items-center justify-center w-10 h-10 text-white transition-colors duration-300 rounded-full top-4 right-4 bg-white/20 hover:bg-white/40"
              aria-label="Close modal"
            >
              <FaTimes size={20} />
            </button>
            
            {/* Navigation Arrows */}
            {selectedProject.gallery.length > 1 && (
              <>
                <button 
                  onClick={handlePrevImage}
                  className="absolute z-20 flex items-center justify-center w-12 h-12 text-white transition-colors duration-300 -translate-y-1/2 rounded-full left-4 top-1/2 bg-white/20 hover:bg-white/40"
                  aria-label="Previous image"
                >
                  <FaArrowLeft size={20} />
                </button>
                <button 
                  onClick={handleNextImage}
                  className="absolute z-20 flex items-center justify-center w-12 h-12 text-white transition-colors duration-300 -translate-y-1/2 rounded-full right-4 top-1/2 bg-white/20 hover:bg-white/40"
                  aria-label="Next image"
                >
                  <FaArrowRight size={20} />
                </button>
              </>
            )}
            
            {/* Image */}
            <div className="w-full h-[70vh] bg-gray-900 flex items-center justify-center">
              <img 
                src={selectedProject.gallery[currentImageIndex]} 
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`} 
                className="object-contain max-w-full max-h-full" 
              />
            </div>
            
            {/* Project Info */}
            <div className="p-6 bg-white dark:bg-gray-800">
              <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">{selectedProject.title}</h2>
              <p className="mb-4 capitalize text-primary">{selectedProject.category}</p>
              <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
                <div>
                  <h3 className="mb-2 font-bold text-gray-800 dark:text-white">Client</h3>
                  <p className="text-gray-600 dark:text-gray-300">{selectedProject.client}</p>
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-gray-800 dark:text-white">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">{selectedProject.location}</p>
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-gray-800 dark:text-white">Year</h3>
                  <p className="text-gray-600 dark:text-gray-300">{selectedProject.year}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {selectedProject.full_description || selectedProject.description}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Gallery;