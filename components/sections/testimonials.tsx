"use client";

import { motion } from "framer-motion";
import { TestimonialCard } from "../testimonial-card";

const testimonials = [
  {
    content: "Emmanuel is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
    author: "Taiwo M.O",
    role: "CEO at McG Technologies",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    content: "Working with Emmanuel was a great experience. He brings both technical expertise and creative solutions to every project. He is a true asset to any team.",
    author: "Ojo G.O",
    role: "Product Manager at InnovateTech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-16 mt-9">
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Fade-in and slide-up for the section
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // Stagger animation for child elements
              },
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 }, // Initial state
                visible: { opacity: 1, scale: 1, y: 0 }, // Final state
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}