import React from "react";

const testimonials = [
  {
    name: "Zainab Umar",
    feedback:
      "Luxury Interior transformed my living room into a paradise. The colors, furniture, and overall vibe were just perfect!",
    image: "/images/testimonials/zainab.jpg",
  },
  {
    name: "Ahmed Bello",
    feedback:
      "Professional, creative, and timely service. I couldn't have asked for a better interior design partner.",
    image: "/images/testimonials/ahmed.jpg",
  },
  {
    name: "Fatima Yusuf",
    feedback:
      "From design to execution, their team was supportive and skilled. Highly recommend them for premium interior design!",
    image: "/images/testimonials/fatima.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-4">"{testimonial.feedback}"</p>
              <h4 className="font-semibold text-orange-500">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
