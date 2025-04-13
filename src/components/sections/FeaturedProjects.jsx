import React from "react";

const projects = [
  {
    id: 1,
    title: "Modern Living Room",
    description: "A stylish and comfortable living space with neutral tones and green accents.",
    image: "/images/living-room.jpg", // Make sure this image exists in public/images
  },
  {
    id: 2,
    title: "Elegant Bedroom",
    description: "Minimalist design featuring white and grey with warm orange lighting.",
    image: "/images/bedroom.jpg",
  },
  {
    id: 3,
    title: "Contemporary Office",
    description: "A productivity-enhancing space with a sleek grey palette and green decor.",
    image: "/images/office.jpg",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-12 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-orange-500 mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
