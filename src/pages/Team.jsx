import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/shared/SEO';
import PageBanner from '../components/shared/PageBanner';
import AnimatedSection from '../components/shared/AnimatedSection';
import { teamMembers } from '../data/team';
import { FaLinkedin, FaEnvelope, FaTimes } from 'react-icons/fa';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedMember, setSelectedMember] = useState(null);

  const handleOpenModal = (member) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <SEO
        title="Our Team"
        description="Meet the talented team behind Luxury Interior Design & Decoration Limited. Experts in creating beautiful, functional spaces."
        keywords="interior design team, luxury designers, design experts, interior decorators"
      />

      <PageBanner
        title="Our Team"
        subtitle="The Creative Minds Behind Our Designs"
        background="assets/images/team.jpg"
      />

      {/* Team Overview */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <AnimatedSection>
              <span className="font-medium text-primary">Meet Our Experts</span>
              <h2 className="mt-2 mb-4 font-serif text-3xl font-bold md:text-4xl text-green-400">The Talent Behind Our Success</h2>
              <div className="w-20 h-1 mx-auto mb-6 bg-secondary"></div>
              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                Our team of skilled designers, architects, and project managers brings diverse expertise and a shared commitment to excellence to every project.
              </p>
            </AnimatedSection>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <AnimatedSection
                key={member.id}
                delay={0.1 * index}
                className="overflow-hidden transition-all duration-300 bg-white rounded-lg dark:bg-gray-800 shadow-elegant hover:shadow-elegant-lg group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover object-center w-full transition-transform duration-500 aspect-square group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end justify-center transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-100">
                    <div className="flex gap-3 p-4 mb-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-white rounded-full text-primary hover:bg-primary hover:text-white"
                        aria-label={`Email ${member.name}`}
                      >
                        <FaEnvelope />
                      </a>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-white rounded-full text-primary hover:bg-primary hover:text-white"
                          aria-label={`LinkedIn profile of ${member.name}`}
                        >
                          <FaLinkedin />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{member.name}</h3>
                  <p className="mb-4 text-primary">{member.position}</p>
                  <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-3">
                    {member.bio}
                  </p>
                  <button
                    onClick={() => handleOpenModal(member)}
                    className="font-medium transition-colors duration-300 text-secondary hover:text-secondary-dark"
                  >
                    Read More
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="assets/images/team2.webp"
                alt="Team Collaboration"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </motion.div>

            <div>
              <AnimatedSection delay={0.2}>
                <span className="font-medium">Our Approach</span>
                <h2 className="mt-2 mb-6 font-serif text-3xl font-bold md:text-4xl text-green-400">Collaborative Excellence</h2>
                <div className="w-20 h-1 mb-6 bg-secondary"></div>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  At Luxury Interior Design & Decoration, we believe that the best results come from collaborative efforts that leverage the diverse talents and perspectives of our team members.
                </p>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Each project brings together specialists from different design disciplines, ensuring a comprehensive approach that addresses all aspects of interior design, from spatial planning and architectural details to color schemes and custom furnishings.
                </p>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Our designers stay at the forefront of industry trends and technologies through continuous education and professional development, bringing fresh ideas and innovative solutions to every project.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  This collaborative spirit extends to our relationships with clients, contractors, and artisans, creating a synergy that elevates each project beyond expectations.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <AnimatedSection className="p-8 text-center bg-white rounded-lg dark:bg-gray-800 md:p-12 shadow-elegant">
            <h2 className="mb-6 font-serif text-3xl font-bold md:text-4xl text-green-400">Join Our Team</h2>
            <p className="max-w-3xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
              We're always looking for talented designers, project managers, and support staff who share our passion for exceptional interior design and our commitment to client satisfaction.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 font-medium text-white transition-all duration-300 rounded-full bg-primary hover:bg-primary-dark"
            >
              View Open Positions
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={handleCloseModal}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={handleCloseModal}
                className="absolute z-10 flex items-center justify-center w-10 h-10 text-gray-800 transition-colors duration-300 rounded-full top-4 right-4 bg-white/80 hover:bg-primary hover:text-white"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
              <div className="h-64 bg-gray-200 sm:h-80">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h2 className="mb-2 text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">{selectedMember.name}</h2>
              <p className="mb-6 font-medium text-primary">{selectedMember.position}</p>

              <div className="mb-6">
                <h3 className="mb-2 text-lg font-bold text-gray-800 dark:text-white">Biography</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{selectedMember.bio}</p>
                <p className="text-gray-600 dark:text-gray-300">{selectedMember.extendedBio}</p>
              </div>

              <div className="mb-6">
                <h3 className="mb-2 text-lg font-bold text-gray-800 dark:text-white">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="inline-flex items-center px-4 py-2 text-white transition-colors duration-300 rounded-full bg-primary hover:bg-primary-dark"
                >
                  <FaEnvelope className="mr-2" />
                  Contact
                </a>
                {selectedMember.linkedin && (
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#0077b5] hover:bg-[#005582] text-white px-4 py-2 rounded-full transition-colors duration-300"
                  >
                    <FaLinkedin className="mr-2" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Team;