import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaArrowRight } from "react-icons/fa";

const contactDetails = [
	{
		icon: <FaMapMarkerAlt className="text-2xl text-primary" />,
		label: "Address",
		value: "No 18 Zaria road, Gyadi-Gyadi, Kano State, Nigeria",
	},
	{
		icon: <FaPhone className="text-2xl text-primary" />,
		label: "Phone",
		value: "+234 8022121271",
		link: "tel:+2348022121271",
	},
	{
		icon: <FaEnvelope className="text-2xl text-primary" />,
		label: "Email",
		value: "info@luxuryinterior.com",
		link: "mailto:info@luxuryinterior.com",
	},
	{
		icon: <FaClock className="text-2xl text-primary" />,
		label: "Working Hours",
		value: (
			<>
				Mon - Fri: 9:00 AM - 6:00 PM
				<br />
				Sat: 10:00 AM - 2:00 PM
			</>
		),
	},
];

const ContactSection = () => {
	return (
		<section
			id="contact"
			className="px-4 py-16 bg-gradient-to-r from-white via-gray-100 to-gray-200 md:px-12"
		>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7, ease: "easeOut" }}
				className="max-w-3xl mx-auto text-center"
			>
				<h1 className="mb-4 text-4xl font-bold text-green-700">Contact Us</h1>
				<p className="mb-8 text-gray-600 text-lg">
					We&apos;d love to hear from you! Reach out to us for inquiries,
					consultations, or any questions about our luxury interior design
					services.
				</p>
			</motion.div>

			<div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
				{contactDetails.map((item, idx) => (
					<motion.div
						key={item.label}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: idx * 0.1 }}
						className="flex items-start bg-white rounded-lg shadow-elegant p-6 dark:bg-gray-800"
					>
						<div className="mr-4">{item.icon}</div>
						<div className="text-left">
							<div className="font-semibold text-gray-800 dark:text-white mb-1">
								{item.label}
							</div>
							{item.link ? (
								<a
									href={item.link}
									className="text-primary hover:underline break-all"
									target="_blank"
									rel="noopener noreferrer"
								>
									{item.value}
								</a>
							) : (
								<div className="text-gray-600 dark:text-gray-300">
									{item.value}
								</div>
							)}
						</div>
					</motion.div>
				))}
			</div>
			<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.5 }}
  className="mt-12 flex justify-center"
>
  <a
    href="/contact#contact-form"
    className="inline-flex items-center px-8 py-3 bg-white text-gray-900 border-2 border-primary rounded-full shadow-md font-semibold text-lg transition-all duration-300
      hover:bg-gradient-to-r hover:from-white hover:via-gray-100 hover:to-gray-400 focus-visible:bg-primary focus-visible:text-white"
    style={{ boxShadow: '0 4px 24px 0 rgba(34,197,94,0.10)' }}
  >
    <span>Get in Touch</span>
    <FaArrowRight className="w-5 h-5 ml-2" />
  </a>
</motion.div>
		</section>
	);
};

export default ContactSection;