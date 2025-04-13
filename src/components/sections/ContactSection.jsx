import { useState, useRef, useEffect } from "react"; 
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import 'aos/dist/aos.css';
import AOS from 'aos';

const ContactSection = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [status, setStatus] = useState({ success: null, message: "" });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { user_name, user_email, message } = formData;

    if (!user_name || !user_email || !message) {
      setStatus({ success: false, message: "All fields are required!" });
      return;
    }

    emailjs
      .sendForm(
        "service_0sxrzkp",
        "template_mwmwt9s",
        formRef.current,
        "UX0ocpYkMlDAWjzlh"
      )
      .then(
        () => {
          setStatus({ success: true, message: "Message sent successfully!" });
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          setStatus({ success: false, message: "Failed to send message. Please try again." });
        }
      );
  };

  return (
    <section
      id="contact"
      className="px-6 py-16 bg-gradient-to-r from-white via-gray-100 to-gray-200 md:px-12"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="mb-6 text-4xl font-bold text-green-700">Contact Us</h1>
        <p className="mb-12 text-gray-600">We'd love to hear from you!</p>

        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="p-8 space-y-6 bg-white border shadow-lg rounded-2xl"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={formData.user_email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white transition-colors duration-300 bg-green-600 shadow-md hover:bg-orange-500 rounded-xl"
          >
            Send Message
          </button>
        </motion.form>

        {status.message && (
          <motion.div
            className={`mt-6 px-6 py-4 rounded-xl shadow-md relative max-w-xl mx-auto ${
              status.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <button
              onClick={() => setStatus({ success: null, message: "" })}
              className="absolute text-xl font-bold top-2 right-3"
            >
              ×
            </button>
            <p>{status.message}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
