import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaLink } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-lg shadow-elegant"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="aspect-square md:aspect-[4/3] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0.6 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <h3 className="text-white font-serif text-xl md:text-2xl mb-2">{project.title}</h3>
          <p className="text-white/80 text-sm mb-4">{project.category}</p>
          
          <motion.div 
            className="flex space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <button 
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white transition-all hover:bg-primary-dark"
              aria-label="View project details"
            >
              <FaPlus />
            </button>
            <button 
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary transition-all hover:bg-gray-100"
              aria-label="View project link"
            >
              <FaLink />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;