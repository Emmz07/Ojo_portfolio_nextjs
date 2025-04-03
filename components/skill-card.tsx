import { Card } from "@/components/ui/card";
import {
  SiReact,
  SiChakraui,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiMysql,
  SiTailwindcss,
  SiSass,
  SiMongodb,
  SiNodedotjs,
  SiGithub,
  SiGit,
  
} from "react-icons/si";

// Define available icons in an object
const icons = {
  react: SiReact,
  chakraUi: SiChakraui,
  next: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html: SiHtml5,
  mysql: SiMysql,
  tailwind: SiTailwindcss,
  sass: SiSass,
  mongodb: SiMongodb,
  node: SiNodedotjs,
  github: SiGithub,
  git: SiGit,
};

interface SkillCardProps {
  name: string;
  icon: keyof typeof icons; // Restrict icon prop to valid keys in `icons`
}

export function SkillCard({ name, icon }: SkillCardProps) {
  const Icon = icons[icon];

  // Check if the Icon exists to avoid rendering undefined
 if (!Icon) return null;

  return (
    <Card className="p-6 flex flex-col items-center justify-center gap-4 hover:bg-accent hover:text-accent-foreground transition-colors">
      <Icon className="h-8 w-8" aria-label={`${name} icon`} />
      <span className="font-medium">{name}</span>
    </Card>
  );
}
