"use client";


import { Sidebar } from "@/components/sidebar";
import { Hero } from "@/components/sections/hero";
import { Contact } from "@/components/sections/contact";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Testimonials } from "@/components/sections/testimonials";
import { Experience } from "@/components/sections/experience";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="div">
      <main className="flex-1 p-8 ml-[300px] main-content">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      </div>
      
    </div>
    );
  }
