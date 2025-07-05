import { motion } from 'framer-motion';
import SEO from '../components/shared/SEO';
import PageBanner from '../components/shared/PageBanner';
import AnimatedSection from '../components/shared/AnimatedSection';
import React from 'react'

const Products = () => {
    const products = [
        { id: 1, name: "Elegant Storage Boxes on Marble Table", image: "/assets/images/product1.jpg", description: "A plush, handcrafted sofa that brings elegance and comfort to any living room." },
        { id: 2, name: "Modern Dining chair", image: "/assets/images/product2.jpg", description: "A stylish table and chair with a contemporary design, perfect for eating food." },
        { id: 3, name: "Dining Ensemble with Red Velvet Chairs", image: "/assets/images/product3.jpg", description: "A centerpiece dining set made from premium metal and marble." },
        { id: 4, name: "Elegant Storage Boxes on Marble Table", image: "/assets/images/product4.jpg", description: " Add a touch of refinement to your space with the Luxe Storage Trays, crafted with premium leather and gold accents. Displayed on a marble-topped table, these versatile trays offer stylish organization for any upscale living area or office." },
        { id: 5, name: "Classic watch", image: "/assets/images/product5.jpg", description: "Infuse classic charm with the Timeless Wall Clock Ensemble, showcasing a curated selection of vintage-inspired clocks with gold and black finishes. Perfect for adding a sophisticated focal point to your luxury interior design." },
        { id: 6, name: "Decorative Gold Planters", image: "/assets/images/product6.jpg", description: "Transform your interior with the Regal Gold Planters, featuring intricate diamond-patterned designs in a luxurious gold finish. Ideal for showcasing lush greenery or as standalone statement pieces, these planters bring a regal ambiance to any luxury setting." },
        { id: 7, name: "watches", image: "/assets/images/product7.jpg", description: "A modern watch that combines style and functionality." },
        { id: 8, name: "Divine Calligraphy Decor", image: "/assets/images/product8.jpg", description: "Enhance your interior with the Divine Calligraphy Decor, featuring elegant Arabic script in gold on a white background with ornate gold frames. This luxurious wall art adds cultural depth and sophistication to your design project." },
        { id: 9, name: "flower vas", image: "/assets/images/product9.jpg", description: "Add a touch of timeless elegance to your space with the Elegant Floral Vase, crafted from premium glass with a subtle gold rim. Perfect for showcasing fresh blooms or standing alone as a luxurious accent, this vase enhances any luxury interior with its refined design and delicate craftsmanship." },
        { id: 10, name: "Velvet Haven Sofa Set", image: "/assets/images/product10.jpg", description: "Unwind in style with the Velvet Haven Sofa Set, featuring plush beige velvet upholstery and gold-trimmed frames. This luxurious living room ensemble adds warmth and sophistication to any high-end interior." },
        { id: 11, name: "dining", image: "/assets/images/product11.jpg", description: "Experience modern luxury with the Serenity Dining Collection, featuring a glossy white table and cushioned chairs with sleek lines. This set offers a serene yet opulent dining solution for contemporary luxury homes" },
    ];


    return (
        <>
            <SEO
                title="Our Products"
                // to be edited later
                description="Explore our comprehensive range of luxury interior design services for residential and commercial spaces."
                keywords="interior design services, luxury decoration, residential design, commercial interiors"
            />

            <PageBanner
                title="Our Products"
                subtitle="Tailored Products"
                background="assets/images/product11.jpg"
            />

            {/* products */}
            <section className="py-16 bg-gray-900 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">Our Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {products.map(product => (
                            <div
                                key={product.id}
                                className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                            >
                                <div className="relative group">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col p-5">
                                    <h3 className="text-lg font-semibold text-orange-400 mb-2 text-center">{product.name}</h3>
                                    <p className="text-gray-300 text-sm mb-4 text-center">{product.description}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* video section */}
            <section className="py-16 bg-gray-800 dark:bg-gray-950">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <video
                            src="assets/videos/products-video.mp4"
                            controls
                            poster="/assets/images/bg-6.jpg"
                            className="w-full h-[340px] object-cover bg-black"
                            style={{ backgroundColor: "#111827" }}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mt-8 text-center"
                    >
                        <h3 className="text-2xl font-bold text-green-300 mb-2">Watch Our Product Showcase</h3>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Explore our exclusive collection in action. This video highlights the craftsmanship, elegance, and versatility of our luxury products, designed to elevate your living spaces.
                        </p>
                    </motion.div>
                </div>
            </section>


        </>

    )
}

export default Products