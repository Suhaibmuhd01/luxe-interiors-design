import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/shared/SEO';
import PageBanner from '../components/shared/PageBanner';
import AnimatedSection from '../components/shared/AnimatedSection';
import ContactForm from '../components/ui/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visit Us",
      content: "No 18 Zaria road, gyadi-gyadi, kano state",
      link: "https://maps.google.com",
      linkText: "Get Directions"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      content: "+234 8022121271",
      link: "tel:+2348022121271",
      linkText: "Call Now"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      content: "info@luxuryinterior.com",
      link: "mailto:info@luxuryinterior.com",
      linkText: "Send Email"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Working Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM",
      secondaryContent: "Saturday: 10:00 AM - 2:00 PM",
      link: null,
      linkText: null
    }
  ];

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Luxury Interior Design & Decoration Limited. Contact us to discuss your project or schedule a consultation."
        keywords="contact interior designer, luxury design consultation, interior design inquiry"
      />

      <PageBanner
        title="Contact Us"
        subtitle="Let's Discuss Your Project"
        background="assets/images/contact.webp"
      />

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedSection>
              <span className="text-primary font-medium">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4 text-green-400">Contact Information</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Have questions or ready to start your project? Contact us today to schedule a consultation with our design experts.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <AnimatedSection
                key={index}
                delay={0.1 * index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-elegant text-center hover:shadow-elegant-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{info.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{info.content}</p>
                {info.secondaryContent && (
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{info.secondaryContent}</p>
                )}
                {info.link && (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? "_blank" : "_self"}
                    rel={info.link.startsWith('http') ? "noopener noreferrer" : ""}
                    className="text-secondary hover:text-secondary-dark transition-colors duration-300"
                  >
                    {info.linkText}
                  </a>
                )}
              </AnimatedSection>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <h3 className="text-2xl font-bold mb-6 text-green-400 dark:text-white">Send Us a Message</h3>
              <ContactForm />
            </AnimatedSection>

            {/* Map */}
            <AnimatedSection delay={0.4}>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Visit Our Studio</h3>
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-elegant h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1627309375661!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Luxury Interior Design & Decoration Location"
                ></iframe>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedSection>
              <span className="text-primary font-medium">Have Questions?</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4 text-green-400">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Find answers to common questions about our design process, services, and working with our team.
              </p>
            </AnimatedSection>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What is the typical process for working with your design firm?",
                answer: "Our process typically begins with an initial consultation to understand your needs and vision. We then develop concepts, present design plans, and once approved, proceed with implementation and installation. Throughout the process, we maintain clear communication and provide regular updates to ensure your vision is being realized."
              },
              {
                question: "How are your design fees structured?",
                answer: "We offer flexible fee structures depending on the scope and requirements of each project. This may include hourly rates, flat fees for specific services, or a percentage of the total project budget. During our initial consultation, we'll discuss your project needs and provide a clear outline of our fee structure and an estimate for your specific project."
              },
              {
                question: "How long does a typical interior design project take?",
                answer: "The timeline varies based on the scope of work, size of the space, and complexity of the design. Small room makeovers might take 6-8 weeks, while complete home renovations can take 6-12 months. Custom builds and extensive commercial projects may require longer timeframes. We'll provide a detailed timeline estimate during the planning phase of your specific project."
              },
              {
                question: "Do you work with clients remotely?",
                answer: "Yes, we offer remote design services for clients outside our local area. Using video conferencing, digital design tools, and detailed documentation, we can successfully manage projects without in-person meetings. While we prefer in-person consultations for local projects, our process is adaptable to meet the needs of clients regardless of location."
              },
              {
                question: "Can you work with my existing furniture and decor?",
                answer: "Absolutely! We're happy to incorporate existing pieces that you love into your new design. During our initial consultation, we'll discuss which items you'd like to keep and how they can be integrated with new elements to create a cohesive, refreshed space that honors your personal history while achieving your design goals."
              }
            ].map((faq, index) => (
              <AnimatedSection
                key={index}
                delay={0.1 * index}
                className="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-elegant overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-6">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">{faq.question}</h3>
                    <span className="relative flex-shrink-0 ml-4 w-4 h-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="absolute inset-0 w-4 h-4 transition-transform duration-300 group-open:rotate-180 text-primary"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-serif font-bold mb-6 text-green-400">Connect With Us</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Follow us on social media for design inspiration, project updates, and insights into the world of luxury interior design.
            </p>
            <div className="flex justify-center space-x-6">
              {[
                { name: "Facebook", icon: "facebook", url: "https://facebook.com" },
                { name: "Instagram", icon: "instagram", url: "https://instagram.com/@LuxeInteriorsDecor" },
                { name: "Pinterest", icon: "pinterest", url: "https://pinterest.com/Luxury Interior Designs and Decoration Ltd" },
                { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/Luxury Interior Design and Decoration Ltd" },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center transition-colors duration-300"
                  whileHover={{ y: -5 }}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </motion.a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Contact;