import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const sampleImages = [
  'assets/images/bg-1.webp',
  'assets/images/bg-2.webp',
  'assets/images/bg-3.webp',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&q=85&w=1920&h=1080',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&q=85&w=1920&h=1080',
];

const heroSlides = [
  {
    id: 1,
    title: "Transform Your Space",
    subtitle: "Luxury Interior Design Solutions",
    image: sampleImages[1],
    description: "Creating timeless elegance through bespoke interior design"
  },
  {
    id: 2,
    title: "Elevate Your Lifestyle",
    subtitle: "Premium Decoration Services",
    image: sampleImages[3],
    description: "Crafting spaces that reflect your unique personality and taste"
  },
  {
    id: 3,
    title: "Exceptional Craftsmanship",
    subtitle: "Attention to Every Detail",
    image: sampleImages[4],
    description: "Merging functionality with exquisite aesthetic appeal"
  }
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const swiperRef = useRef(null);

  // Content animations
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.2,
        ease: "easeOut"
      }
    }),
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}" style="width: 12px; height: 12px; background: rgba(255, 255, 255, 0.5); opacity: 1;"></span>`;
          },
        }}
        className="h-full w-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setIsAnimating(true);
          setTimeout(() => {
            setActiveIndex(swiper.activeIndex);
            setIsAnimating(false);
          }, 300); // Match this with fade transition duration
        }}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id} className='h-full w-full'>
            <div
              className="h-full w-full bg-cover bg-center relative flex items-stretch transition-opacity duration-800"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                <AnimatePresence mode="wait">
                  {activeIndex === index && !isAnimating && (
                    <motion.div
                      key={`content-${slide.id}`}
                      className="max-w-3xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.h2
                        variants={fadeInUpVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        custom={1}
                        className="text-white font-serif text-4xl md:text-6xl mb-4"
                      >
                        {slide.title}
                      </motion.h2>

                      <motion.h3
                        variants={fadeInUpVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        custom={2}
                        className="text-luxury-gold font-light text-xl md:text-2xl mb-6"
                      >
                        {slide.subtitle}
                      </motion.h3>

                      <motion.p
                        variants={fadeInUpVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        custom={3}
                        className="text-white/90 text-lg mb-8"
                      >
                        {slide.description}
                      </motion.p>

                      <motion.div
                        variants={fadeInUpVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        custom={4}
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;