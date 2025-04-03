"use client";

import { motion } from "framer-motion";
import { ExperienceCard } from "../experience-card";

const experiences = [
  {
    title: "Senior Frontend Engineer",
    company: "MobileKings",
    period: "October 2023 – Present",
    responsibilities: [
      "Component Libraries: Built and maintained reusable, scalable, and customizable components using design systems like Material-UI, TailwindCSS, or Chakra UI.",
      "Performance Optimization: Enhanced application performance by analyzing and improving load times, memory usage, and responsiveness.",
      "Collaboration: Worked closely with cross-functional teams, including backend engineers, designers, and product managers, to deliver seamless user experiences.",
    ],
  },
  {
    title: "Frontend Developer Intern and Freelancer",
    company: "McG Technologies",
    period: "January 2020 - March 2023",
    responsibilities: [
      "Gained foundational and intermediate frontend development skills.",
      "Code Reviews: Conducted code reviews to ensure high-quality, maintainable, and bug-free code adhering to industry best practices.",
      "Involved in testing and debugging during site revamp.",
      "Worked as a freelancer to gain personal experience.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 mt-9">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Alternate slide-in from left and right
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2, // Stagger animation for each card
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <ExperienceCard {...experience} />
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          className="mt-10 ml-5 mb-10"
          initial={{ opacity: 0, y: 20 }} // Slide up for achievements section
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8">Achievements</h3>
          <motion.ul
            className="list-disc list-inside space-y-2 text-muted-foreground"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }} // Stagger animation for list items
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.li variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Migrated legacy codebase to a modern React/TypeScript stack, resulting in a 35% performance boost and easier maintainability.
            </motion.li>
            <motion.li variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Implemented a dark mode feature that aligned with user preferences, enhancing user experience and increasing retention by 15%.
            </motion.li>
            <motion.li variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Reduced page load times by 40% through code splitting, lazy loading, and advanced caching strategies.
            </motion.li>
            <motion.li variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Contributed to the design and rollout of a robust component library, which decreased development time by 30% across teams.
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mt-10 ml-5"
          initial={{ opacity: 0, y: 20 }} // Slide up for education section
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8">Education</h3>
          <motion.div
            className="p-6 bg-background border rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold">National Diploma, Mechatronics Engineering</h4>
            <p className="text-muted-foreground">The Federal Polytechnic Ilaro, Ogun State</p>
            <p className="text-muted-foreground">2021 - 2024</p>
            <p className="text-primary font-medium mt-2">Graduated with Distinction</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}