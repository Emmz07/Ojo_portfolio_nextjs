"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: "#hero", id: "hero", label: "Home" },
    { href: "#experience", id: "experience", label: "Experience" },
    { href: "#projects", id: "projects", label: "Projects" },
    { href: "#skills", id: "skills", label: "Skills" },
    { href: "#testimonials", id: "testimonials", label: "Testimonials" },
    { href: "#contact", id: "contact", label: "Contact" },
  ];

  // Use IntersectionObserver to track the active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(menuItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile Navigation */}
      <div className="relative">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden fixed top-4 left-4 z-50">
            <Button variant="outline" size="icon">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <SheetTitle className="text-lg font-semibold mb-4">Navigation Menu</SheetTitle>
              <ScrollArea className="h-full py-8">
                <nav className="flex flex-col space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "px-4 py-2 hover:bg-accent rounded-md transition-colors",
                          activeSection === item.id && "bg-accent text-primary"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </ScrollArea>
            </motion.div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="sidebar">
        <motion.aside
          className="fixed left-0 top-0 h-screen w-[300px] bg-background border-r p-8 hidden lg:block"
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <motion.div
              className="flex justify-between items-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mr-4">
                <Image
                  src="/emmz.jpg"
                  alt="Ojo Emmanuel"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Ojo Emmanuel</h3>
                <p className="text-muted-foreground">Software Engineer</p>
              </div>
              <ThemeToggle />
            </motion.div>

            {/* Navigation */}
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-left",
                      activeSection === item.id && "bg-accent text-primary"
                    )}
                    onClick={() => handleClick(item.id)}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </nav>

            {/* Footer */}
            <motion.div
              className="mt-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Ojo Emmanuel
              </p>
            </motion.div>
          </div>
        </motion.aside>
      </div>
    </>
  );
}