import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser'; // Import EmailJS

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().matches(/^[0-9+\-\s()]+$/, 'Invalid phone number'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
    }),
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);

      try {
        // Send form data using EmailJS
        const response = await emailjs.send(
          'service_0sxrzkp',
          'template_xenx50c',
          {
            name: values.name,
            email: values.email,
            phone: values.phone,
            subject: values.subject,
            message: values.message
          },
          'UX0ocpYkMlDAWjzlh'
        );

        console.log('Email sent successfully:', response);
        setSubmitStatus('success');
        resetForm();

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } catch (error) {
        console.error('Error sending email:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    }
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Get in Touch</h3>
      
      {submitStatus === 'success' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6"
        >
          Thank you for your message! We'll get back to you soon.
        </motion.div>
      )}
      
      {submitStatus === 'error' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6"
        >
          Sorry, there was a problem sending your message. Please try again.
        </motion.div>
      )}
      
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {/* Form fields remain unchanged */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              
              /* className={`w-full px-4 py-2 border rounded-md text-base focus:ring-2 focus:outline-none ${
                formik.touched.name && formik.errors.name 
                  ? 'border-red-500 focus:ring-red-200' 
                  : 'border-gray-300 focus:ring-primary/20 focus:border-primary'
              }`} */
              className={`w-full px-4 py-2 border rounded-md text-base text-gray-900 focus:ring-2 focus:outline-none ${
                formik.touched.name && formik.errors.name 
                  ? 'border-red-500 focus:ring-red-200' 
                  : 'border-gray-300 focus:ring-primary/20 focus:border-primary'
              }`}
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.name}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              /* className={`w-full px-4 py-2 border rounded-md text-base focus:ring-2 focus:outline-none ${
                formik.touched.email && formik.errors.email 
                  ? 'border-red-500 focus:ring-red-200' 
                  : 'border-gray-300 focus:ring-primary/20 focus:border-primary'
              }`} */
              className={`w-full px-4 py-2 border rounded-md text-base text-gray-900 focus:ring-2 focus:outline-none ${
                formik.touched.name && formik.errors.name 
                  ? 'border-red-500 focus:ring-red-200' 
                  : 'border-gray-300 focus:ring-primary/20 focus:border-primary'
              }`}
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
           /*    className={`w-full px-4 py-2 border rounded-md text-base focus:ring-2 focus:outline-none ${
                formik.touched.phone && formik.errors.phone 
                  ? 'border-red-500 focus:ring-red-200' 
                  : 'border-gray-300 focus:ring-primary/20 focus:border-primary'
              }`} */
              className={`w-full px-4 py-2 border rounded-md text-base text-gray-900 focus:ring-2 focus:outline-none ${
                formik.touched.name && formik.errors.name 
                  ? 'border-red-500 focus:ring-red-200' 
                  : 'border-gray-300 focus:ring-primary/20 focus:border-primary'
              }`}
              {...formik.getFieldProps('phone')}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.phone}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Subject *
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className={`w-full px-4 py-2 border rounded-md text-base text-gray-900 focus:ring-2 focus:outline-none ${
                formik.touched.name && formik.errors.name 
                  ? 'border-red-500 focus:ring-red-200' 
                  : 'border-gray-300 focus:ring-primary/20 focus:border-primary'
              }`}
              {...formik.getFieldProps('subject')}
            />
            {formik.touched.subject && formik.errors.subject && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.subject}</p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
           /*  className={`w-full px-4 py-2 border rounded-md text-base focus:ring-2 focus:outline-none ${
              formik.touched.message && formik.errors.message 
                ? 'border-red-500 focus:ring-red-200' 
                : 'border-gray-300 focus:ring-primary/20 focus:border-primary'
            }`} */
            className={`w-full px-4 py-2 border rounded-md text-base text-gray-900 focus:ring-2 focus:outline-none ${
              formik.touched.name && formik.errors.name 
                ? 'border-red-500 focus:ring-red-200' 
                : 'border-gray-300 focus:ring-primary/20 focus:border-primary'
            }`}
            {...formik.getFieldProps('message')}
          />
          {formik.touched.message && formik.errors.message && (
            <p className="mt-1 text-sm text-red-500">{formik.errors.message}</p>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-medium flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-70"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              <>
                <span>Send Message</span>
                <FaPaperPlane />
              </>
            )}
          </motion.button>
          
          <motion.button
            type="button"
            onClick={() => formik.resetForm()}
            className="px-8 py-3 bg-green border text-luxury-dark hover:bg-secondary/5 rounded-full font-medium transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Reset
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;