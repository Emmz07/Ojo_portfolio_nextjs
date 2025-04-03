"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Import Next.js Link component

export function Hero() {
  return (
    <motion.section
      id="home"
      className="min-h-[calc(100vh-4rem)] flex items-center"
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      whileInView={{ opacity: 1, y: 0 }} // Animation when in view
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true, amount: 0.2 }} // Trigger animation once when 20% of the section is in view
    >
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-bold mb-6">
          Hi, I'm{" "}
          <span className="text-primary">Ojo Emmanuel</span>
        </h1>
        <h2 className="text-3xl text-muted-foreground mb-8">Frontend Engineer</h2>
        <p className="text-xl leading-relaxed mb-8">
          A passionate software engineer with over 4 years of experience in building modern web applications.
          Specialized in frontend development with expertise in React, Next.js, and TypeScript.
          Currently focused on creating scalable solutions and improving developer experience at MobileKings.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="https://github.com/Emmz07/resume/blob/master/resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </motion.div>
    </motion.section>
  );
}