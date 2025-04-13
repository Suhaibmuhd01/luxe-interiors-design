import {motion} from "framer-motion";
const PageBanner = ({ title, subtitle, background }) => {
  return (
    <section 
      className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden"
      style={{ 
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        objectFit: "fill"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
        >
          {title}
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-white/90">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageBanner;