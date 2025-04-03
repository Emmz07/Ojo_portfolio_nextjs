"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export function ExperienceCard({
  title,
  company,
  period,
  responsibilities,
}: ExperienceCardProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Card className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-primary">{company}</p>
          <p className="text-sm text-muted-foreground">{period}</p>
        </div>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}
