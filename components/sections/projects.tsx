"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "../project-card";

const projects = [
  {
    title: "TradeWithChun",
    description: "A stock trading platform with real-time market data, copy-trading, portfolio management, and social trading features.",
    image: "/copytr.png",
    demoLink: "https://copytrading-company-62q6.vercel.app/",
    githubLink: "https://github.com/Emmz07/copytradingCompany",
    tags: ["Next.js", "Tailwind", "TypeScript"]
  },
  {
    title: "Nyroesreign",
    description: "Clothing store with a modern design, advanced filtering and sorting options, and seamless checkout process.",
    image: "/nyo.png",
    demoLink: "https://tasks-demo.com",
    githubLink: "https://github.com/Emmz07/Nyroesreign",
    tags: ["Next.js", "Tailwind", "TypeScript"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 mt-9">
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Initial fade-in and slide-up
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible state
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
      >
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }} // Initial state with slight zoom-out and slide-up
              whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate to visible state
              transition={{
                duration: 0.6,
                delay: index * 0.2, // Stagger animation for each project
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}