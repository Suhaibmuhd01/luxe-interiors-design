import { useEffect } from 'react';
// import { motion } from 'framer-motion';
import SEO from '../components/shared/SEO';
import Hero from '../components/sections/Hero';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import ServicesOverview from '../components/sections/ServicesOverview';
import AboutPreview from '../components/sections/AboutPreview';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Luxury Interior Design & Decoration"
        description="Transform your space with premium interior design services. Luxury Interior Design & Decoration Limited offers bespoke solutions for residential and commercial spaces."
        keywords="luxury interior design, premium decoration, bespoke interiors, high-end interior design"
      />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Preview */}
      <AboutPreview />
      
      {/* Services Overview */}
      <ServicesOverview />
      
      {/* Featured Projects */}
      <FeaturedProjects />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Contact CTA */}
      <ContactSection />
    </>
  );
};

export default Home;