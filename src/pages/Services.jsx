import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/shared/SEO';
import PageBanner from '../components/shared/PageBanner';
import AnimatedSection from '../components/shared/AnimatedSection';
import { allServices } from "../data/services.js";
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'consulting', name: 'Consulting' },
  ];

  const filteredServices = activeTab === 'all'
    ? allServices
    : allServices.filter(service => service.category === activeTab);

  return (
    <>
      <SEO
        title="Our Services"
        description="Explore our comprehensive range of luxury interior design services for residential and commercial spaces."
        keywords="interior design services, luxury decoration, residential design, commercial interiors"
      />

      <PageBanner
        title="Our Services"
        subtitle="Tailored Design Solutions"
        background="assets/images/services.jpg"
      />

      {/* Services Overview */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <AnimatedSection>
              <span className="font-medium text-gray-200">What We Offer</span>
              <h2 className="mt-2 mb-4 font-serif text-3xl font-bold md:text-4xl text-green-400">Comprehensive Design Solutions</h2>
              <div className="w-20 h-1 mx-auto mb-6 bg-secondary"></div>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                We provide a full spectrum of interior design services tailored to meet your specific needs and bring your vision to life.
              </p>
            </AnimatedSection>
          </div>

          {/* Service Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${activeTab === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => (
              <AnimatedSection
                key={service.id}
                delay={0.1 * index}
                className="overflow-hidden transition-all duration-300 bg-white rounded-lg dark:bg-gray-800 shadow-elegant hover:shadow-elegant-lg group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-6 text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 dark:bg-primary/20 text-primary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button
                    className="flex items-center font-medium transition-all duration-300 text-secondary group-hover:text-secondary-dark"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                    <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <AnimatedSection>
              <span className="font-medium">How We Work</span>
              <h2 className="mt-2 mb-4 font-serif text-3xl font-bold md:text-4xl text-green-300">Our Design Process</h2>
              <div className="w-20 h-1 mx-auto mb-6 bg-secondary"></div>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Our systematic approach ensures a smooth journey from concept to completion, delivering exceptional results that exceed expectations.
              </p>
            </AnimatedSection>
          </div>

          <div className="relative">
            {/* Process Timeline Line */}
            <div className="absolute top-0 bottom-0 hidden w-1 -translate-x-1/2 md:block left-1/2 bg-primary/20"></div>

            {/* Process Steps */}
            <div className="relative space-y-12 md:space-y-0">
              {[
                {
                  step: 1,
                  title: "Initial Consultation",
                  description: "We begin by understanding your vision, requirements, and budget. This foundational step allows us to align our expertise with your expectations.",
                },
                {
                  step: 2,
                  title: "Concept Development",
                  description: "Our designers create a comprehensive concept, including mood boards, color schemes, and preliminary layouts that capture your desired aesthetic.",
                },
                {
                  step: 3,
                  title: "Design Presentation",
                  description: "We present detailed design plans, 3D visualizations, material samples, and cost estimates for your review and approval.",
                },
                {
                  step: 4,
                  title: "Implementation",
                  description: "Once approved, we coordinate with contractors, craftsmen, and suppliers to bring the design to life, managing every detail of the execution.",
                },
                {
                  step: 5,
                  title: "Final Styling & Handover",
                  description: "We add finishing touches, styling elements, and conduct a final quality inspection before presenting you with your transformed space.",
                },
              ].map((process, index) => (
                <div
                  key={process.step}
                  className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="p-4 md:w-1/2"
                  >
                    <div className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-elegant ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="flex items-center mb-4">
                        <div className="flex items-center justify-center w-10 h-10 mr-4 font-bold text-white rounded-full bg-primary">
                          {process.step}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{process.title}</h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{process.description}</p>
                    </div>
                  </motion.div>
                  <div className="hidden w-1/2 md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-primary/5 dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <svg className="w-12 h-12 mx-auto text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </div>
            <blockquote className="mb-6 font-serif text-xl italic text-gray-700 md:text-2xl dark:text-gray-300">
              "Working with Luxury Interior Design was an exceptional experience from start to finish. Their team's creativity, professionalism, and attention to detail transformed our home into a stunning space that perfectly reflects our lifestyle and taste."
            </blockquote>
            <div className="flex items-center justify-center">
              <img
                src="assets/images/client4.webp"
                alt="Client"
                className="object-cover w-12 h-12 mr-4 rounded-full"
              />
              <div className="text-left">
                <h4 className="font-bold text-gray-800 dark:text-white">Mukhtar Muhammad</h4>
                <p className="text-gray-600 dark:text-gray-400">Residential Client</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <AnimatedSection className="overflow-hidden bg-primary rounded-xl shadow-elegant-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex items-center p-8 md:p-12">
                <div>
                  <h2 className="mb-6 font-serif text-3xl font-bold text-white md:text-4xl">Ready to Transform Your Space?</h2>
                  <p className="mb-8 text-lg text-white/90">
                    Contact us today to schedule a consultation and discuss how we can bring your vision to life.
                  </p>
                  <a
                    href="/contact"
                    className="inline-block px-8 py-3 font-medium transition-all duration-300 bg- text-gray-300 rounded-full hover:bg-green-300"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              <div className="hidden lg:block relative h-full min-h-[300px]">
                <img
                  src="assets/images/transform.jpg"
                  alt="Luxury Interior"
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Services;