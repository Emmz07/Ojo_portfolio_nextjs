"use client";

import { motion } from "framer-motion";
import { SkillCard } from "../skill-card";

const skills = [
  { name: "React.js", icon: "react" },
  { name: "Chakra UI", icon: "chakraUi" },
  { name: "Next.js", icon: "next" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "HTML/CSS", icon: "html" },
  { name: "MySql", icon: "mysql" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "SCSS", icon: "scss" },
  { name: "Sass", icon: "sass" },
  { name: "Mongodb", icon: "mongodb" },
  { name: "Nodejs", icon: "node" },
  { name: "Github", icon: "github" },
  { name: "Git", icon: "git" }
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 mt-9">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1, // Stagger animation for each skill
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              <SkillCard
                {...skill}
                icon={
                  skill.icon as
                    | "react"
                    | "chakraUi"
                    | "next"
                    | "typescript"
                    | "javascript"
                    | "html"
                    | "mysql"
                    | "tailwind"
                    | "sass"
                    | "mongodb"
                    | "node"
                    | "github"
                    | "git"
                }
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}