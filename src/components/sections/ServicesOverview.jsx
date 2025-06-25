import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaShoppingBag, FaPencilRuler, FaLightbulb, FaChair } from 'react-icons/fa';
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Residential Design",
    description: "Transform your home into a luxurious sanctuary that reflects your personal style and enhances your lifestyle.",
    icon: <FaHome className="text-4xl" />,
    link: "/services#residential"
  },
  {
    id: 2,
    title: "Commercial Spaces",
    description: "Create impressive commercial environments that boost productivity and leave lasting impressions on clients.",
    icon: <FaBuilding className="text-4xl" />,
    link: "/services#commercial"
  },
  {
    id: 3,
    title: "Retail Design",
    description: "Design captivating retail spaces that enhance the shopping experience and increase customer engagement.",
    icon: <FaShoppingBag className="text-4xl" />,
    link: "/services#retail"
  },
  {
    id: 4,
    title: "Space Planning",
    description: "Optimize your space for functionality and flow with our expert space planning and layout services.",
    icon: <FaPencilRuler className="text-4xl" />,
    link: "/services#planning"
  },
  {
    id: 5,
    title: "Concept Development",
    description: "Bring your vision to life with innovative concept development tailored to your specific needs and preferences.",
    icon: <FaLightbulb className="text-4xl" />,
    link: "/services#concept"
  },
  {
    id: 6,
    title: "Custom Furniture",
    description: "Elevate your space with bespoke furniture pieces designed specifically for your unique requirements.",
    icon: <FaChair className="text-4xl" />,
    link: "/services#furniture"
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-stone-300 font-medium"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4 text-green-400"
          >
            Comprehensive Design Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-20 h-1 bg-secondary mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            From concept to completion, we provide end-to-end interior design solutions tailored to your unique vision and requirements.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-all duration-300">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center text-secondary font-medium hover:text-secondary-dark transition-all duration-300"
              >
                Learn More
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full transition-all duration-300"
          >
            View All Services
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;