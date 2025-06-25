import React from "react";
const AboutPreview = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img src="assets/images/background.jpg" alt="About Us" className="w-full h-84 object-cover rounded-2xl shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold text-green-600 mb-4">About Luxury Interior</h2>
          <p className="text-gray-700 mb-4">
            <b> Luxury Interior Design and Decoration Ltd</b> is a premier interior design and decoration company specializing in creating bespoke, luxurious, and functional spaces for residential, commercial, and hospitality clients. With over a decade of experience, we have built a reputation for delivering exceptional design solutions that reflect our clients unique personalities and lifestyles. Our team of talented designers, architects, and decorators is passionate about transforming spaces into timeless works of art.

            With years of experience, we specialize in crafting spaces that blend comfort with luxury.
            Our team is passionate about design, dedicated to excellence, and driven by creativity.
          </p>
          <a
            href="/about"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-2 px-5 rounded-xl transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
