import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { motion} from "framer-motion";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const heroSlides = [
  {
    id: 1,
    title: "Transform Your Space",
    subtitle: "Luxury Interior Design Solutions",
    image: "/src/assets/images/hero1.jpg", // You'll need to add these images
    description: "Creating timeless elegance through bespoke interior design"
  },
  {
    id: 2,
    title: "Elevate Your Lifestyle",
    subtitle: "Premium Decoration Services",
    image: "/src/assets/images/hero2.jpg",
    description: "Crafting spaces that reflect your unique personality and taste"
  },
  {
    id: 3,
    title: "Exceptional Craftsmanship",
    subtitle: "Attention to Every Detail",
    image: "/src/assets/images/hero3.jpg",
    description: "Merging functionality with exquisite aesthetic appeal"
  }
];

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="h-full w-full bg-cover bg-center relative" 
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
              
              {/* Content */}
              <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                <div className="max-w-3xl">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white font-serif text-4xl md:text-6xl mb-4"
                  >
                    {slide.title}
                  </motion.h2>
                  
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-luxury-gold font-light text-xl md:text-2xl mb-6"
                  >
                    {slide.subtitle}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-white/90 text-lg mb-8"
                  >
                    {slide.description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Link 
                      to="/services" 
                      className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full transition-all duration-300 text-center"
                    >
                      Our Services
                    </Link>
                    <Link 
                      to="/gallery" 
                      className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-300 text-center"
                    >
                      View Projects
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;