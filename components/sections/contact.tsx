"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Card } from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 mt-9">
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Initial fade-in and slide-up
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible state
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
      >
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }} // Slide in from the left
            whileInView={{ opacity: 1, x: 0 }} // Animate to visible state
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }} // Slide in from the right
            whileInView={{ opacity: 1, x: 0 }} // Animate to visible state
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <motion.a
                  href="https://github.com/Emmz07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }} // Hover animation
                  whileTap={{ scale: 0.95 }} // Tap animation
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/ojo-emmanuel-86782a25a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </motion.a>
                <motion.a
                  href="https://x.com/Emmanue87766227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="h-5 w-5" />
                  Twitter
                </motion.a>
                <motion.a
                  href="mailto:ojoemmanueltiwalade@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5" />
                  Email
                </motion.a>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}