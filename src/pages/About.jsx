import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/shared/SEO';
import PageBanner from '../components/shared/PageBanner';
import AnimatedSection from '../components/shared/AnimatedSection';
import { FaTrophy, FaUserTie, FaCheckCircle, FaBuilding } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { id: 1, count: '10+', label: 'Years Experience', icon: <FaTrophy /> },
    { id: 2, count: '250+', label: 'Projects Completed', icon: <FaBuilding /> },
    { id: 3, count: '50+', label: 'Expert Designers', icon: <FaUserTie /> },
    { id: 4, count: '98%', label: 'Satisfied Clients', icon: <FaCheckCircle /> },
  ];

  const coreValues = [
    {
      id: 1,
      title: 'Client-Centered Design',
      description: 'We put our clients first, ensuring their vision, needs, and lifestyle are at the center of every project.',
    },
    {
      id: 2,
      title: 'Innovative Approach',
      description: 'We bring fresh ideas and innovative solutions to each project, pushing the boundaries of conventional design.',
    },
    {
      id: 3,
      title: 'Attention to Detail',
      description: 'We believe that perfection lies in the details, ensuring every element of a space is thoughtfully considered.',
    },
    {
      id: 4,
      title: 'Sustainable Practices',
      description: 'We are committed to environmentally conscious design, choosing sustainable materials and energy-efficient solutions.',
    },
  ];

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Luxury Interior Design & Decoration Limited. Our story, mission, and vision for transforming spaces into exceptional environments."
        keywords="luxury interior design company, interior design about us, design philosophy, luxury designers"
      />

      <PageBanner
        title="About Us"
        subtitle="Our Story and Vision"
        background="/src/assets/images/background.jpg"
      />

      {/* Company Overview */}
      <section id="about"className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/src/assets/images/about-company.jpg"
                alt="Luxury Interior Design Team"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </motion.div>

            <div>
              <AnimatedSection delay={0.2}>
                <span className="font-medium text-primary">Our Journey</span>
                <h2 className="mt-2 mb-6 font-serif text-3xl font-bold md:text-4xl">Transforming Spaces Since 2012</h2>
                <div className="w-20 h-1 mb-6 bg-secondary"></div>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Luxury Interior Design & Decoration Limited was founded with a singular vision: to create extraordinary living and working environments that inspire, comfort, and reflect the unique personalities of our clients.
                </p>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  What began as a small design studio has evolved into a full-service interior design firm with a reputation for excellence. Our team of talented designers brings diverse expertise and perspectives, united by a shared commitment to exceptional design.
                </p>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  We approach each project as a collaborative journey, working closely with clients to understand their needs, preferences, and aspirations. This client-centered approach, combined with our design expertise and attention to detail, enables us to create spaces that exceed expectations.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5 dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-white rounded-full shadow-md dark:bg-gray-700 text-primary">
                  {stat.icon}
                </div>
                <h3 className="mb-2 text-4xl font-bold text-primary">{stat.count}</h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <AnimatedSection>
              <span className="font-medium text-primary">Our Philosophy</span>
              <h2 className="mt-2 mb-4 font-serif text-3xl font-bold md:text-4xl">Mission & Vision</h2>
              <div className="w-20 h-1 mx-auto mb-6 bg-secondary"></div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <AnimatedSection delay={0.2} className="p-8 bg-white rounded-lg dark:bg-gray-800 shadow-elegant">
              <h3 className="mb-4 text-2xl font-bold text-secondary">Our Mission</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                To redefine interior spaces by blending creativity, functionality, and elegance, ensuring every project exceeds our clients expectations. We strive to create environments that inspire,comfort, and elevate the human experience.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We strive to exceed client expectations by delivering personalized designs that perfectly balance aesthetics, functionality, and comfort while reflecting each client's unique personality and lifestyle.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="p-8 bg-white rounded-lg dark:bg-gray-800 shadow-elegant">
              <h3 className="mb-4 text-2xl font-bold text-primary">Our Vision</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                 To be the leading interior design firm globally, recognized for innovation, craftsmanship, and unparalleled client satisfaction.
              </p>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                To be the premier interior design firm known for creating spaces that inspire and transform, setting new standards of excellence in the design industry.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We aim to lead through innovation, sustainability, and exceptional service, fostering long-term relationships with clients who trust us to bring their visions to life in ways that exceed their imagination.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <AnimatedSection>
              <span className="font-medium text-primary">What We Believe</span>
              <h2 className="mt-2 mb-4 font-serif text-3xl font-bold md:text-4xl">Our Core Values</h2>
              <div className="w-20 h-1 mx-auto mb-6 bg-secondary"></div>
              <p className="max-w-2xl text-left mx-auto text-gray-600 dark:text-gray-300">
                <b>1. Creativity</b>: We push boundaries to deliver unique and innovative designs.
              </p>
              <p className="max-w-2xl text-left mx-auto text-gray-600 dark:text-gray-300">
                <b>2. Quality</b>: We  use the finest materials and craftmanship to ensure lasting beauty.
              </p>
              <p className="max-w-2xl text-left mx-auto text-gray-600 dark:text-gray-300">
                <b>3. Client-centric Approach</b>: We listen, collaborate, and tailored our servicves to meet the standard of corporate and individual needs. 
              </p>
              <p className="max-w-2xl text-left mx-auto text-gray-600 dark:text-gray-300">
                <b>4. Sustainability</b>: We incorporate eco-friendly practices and materials into our designs.
              </p>
              <p className="max-w-2xl text-left mx-auto text-gray-600 dark:text-gray-300">
                <b>5. Integrity</b>: We maintain transparency, honesty, and professionalism in alll our dealings.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {coreValues.map((value, index) => (
              <AnimatedSection
                key={value.id}
                delay={0.2 * index}
                className="p-8 transition-all duration-300 bg-white border-l-4 rounded-lg dark:bg-gray-800 shadow-elegant hover:shadow-elegant-lg border-primary"
              >
                <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <AnimatedSection delay={0.2}>
                <span className="font-medium text-primary">Leadership</span>
                <h2 className="mt-2 mb-6 font-serif text-3xl font-bold md:text-4xl">Meet Our CEO</h2>
                <div className="w-20 h-1 mb-6 bg-secondary"></div>
                <h3 className="mb-2 text-2xl font-bold">Sarah Richardson</h3>
                <p className="mb-6 font-medium text-primary">Founder & Chief Executive Officer</p>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  With over 20 years of experience in interior design and architecture, Sarah has established herself as a visionary leader in the luxury design industry. Her passion for creating exceptional spaces began early in her career, working with renowned design firms across Europe before founding Luxury Interior Design & Decoration Limited in 2012.
                </p>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Sarah's design philosophy centers on the belief that great design should be both beautiful and functional, enhancing the way people live and work. Her innovative approach and commitment to excellence have earned the company numerous industry awards and a reputation for creating distinctive, sophisticated interiors.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Under Sarah's leadership, the company has grown from a small design studio to a full-service firm with a portfolio of high-profile residential and commercial projects worldwide. She continues to be actively involved in key projects, bringing her unique vision and expertise to every design.
                </p>
              </AnimatedSection>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-first lg:order-last"
            >
              <img
                src="/src/assets/images/ceo-portrait.jpg"
                alt="Sarah Richardson - CEO"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;