import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeart, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white text-center">Luxury Interior Design</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Transforming spaces into extraordinary environments that inspire, comfort, and reflect the unique personalities of our clients.
            </p>
            <div className="flex space-x-4">
              
            {[
  { icon: <FaFacebookF />, url: 'https://facebook.com/profile.php?id=61567135902792&mibextid=ZbWKwL', label: 'Facebook', color: 'text-blue-200' },
  { icon: <FaTwitter />, url: 'https://twitter.com/luxury57258?s=09', label: 'Twitter', color: 'text-sky-200' },
  { icon: <FaInstagram />, url: 'https://www.instagram.com/luxuryinteriodesign01?igsh=eG90cWlsdHF3NWNr', label: 'Instagram', color: 'text-pink-200' },
  { icon: <FaTiktok />, url: 'https://tiktok.com/@luxury.interior?_t=ZM-8tCiQmKUM57&_r=1', label: 'Tiktok', color: 'text-purple-200' },
].map((social, index) => (
  <motion.a
    key={index}
    href={social.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={social.label}
    className={`w-10 h-10 rounded-full bg-transparent ${social.color} flex items-center justify-center hover:opacity-80 transition-opacity duration-300`}
    whileHover={{ y: -3 }}
  >
    {social.icon}
  </motion.a>
))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Team', path: '/team' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'Residential Design', path: '/services#residential' },
                { name: 'Commercial Spaces', path: '/services#commercial' },
                { name: 'Space Planning', path: '/services#planning' },
                { name: 'Custom Furniture', path: '/services#furniture' },
                { name: 'Color Consultation', path: '/services#color' },
                { name: 'Project Management', path: '/services#management' }
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 id='contact' className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <span className="text-primary mr-3">•</span>
                <span className="text-gray-600 dark:text-gray-300">No 18 Zaria road, gyadi-gyadi, kano state</span>
              </li>
              <li className="flex">
                <span className="text-primary mr-3">•</span>
                <a href="tel:+2348022121271" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300">
                  +2348022121271
                </a>
              </li>
              <li className="flex">
                <span className="text-primary mr-3">•</span>
                <a href="mailto:info@luxuryinterior.com" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300">
                  info@luxuryinterior.com
                </a>
              </li>
              <li className="flex">
                <span className="text-primary mr-3">•</span>
                <span className="text-gray-600 dark:text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex">
                <span className="text-primary mr-3">•</span>
                <span className="text-gray-600 dark:text-gray-300">Sat: 10:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-center md:text-left mb-4 md:mb-0">
              © {currentYear} Luxury Interior Design & Decoration Limited. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-center md:text-right">
              Made with <FaHeart className="inline text-primary mx-1" /> by MTC WORLD
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;