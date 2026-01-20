
"use client";

import Link from "next/link";
import { Linkedin, Download, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "light") {
        document.documentElement.classList.add("light");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-md h-16 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-size-[200%_auto] bg-position-[0%_50%] transition-all duration-700 group-hover:bg-position-[100%_50%] group-hover:drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]">
            _oliverPalmer
          </span>
        </Link>

        <div className="flex items-center gap-md lg:gap-lg">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-accent/10 text-muted-foreground hover:text-primary transition-all flex items-center justify-center cursor-pointer"
            aria-label="Toggle theme"
          >
            {!mounted ? (
              <div className="size-5" />
            ) : theme === "dark" ? (
              <Sun className="size-5 animate-in fade-in zoom-in duration-300" />
            ) : (
              <Moon className="size-5 animate-in fade-in zoom-in duration-300" />
            )}
          </button>

          <Link 
            href="/contact"
            className="hidden sm:flex text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
          >
            Contact
          </Link>

          <a 
            href="https://www.linkedin.com/in/palmeroliver" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="size-4" aria-hidden="true" />
            <span className="hidden md:inline">LinkedIn</span>
          </a>
          
          <a
            href="/Oliver%20Palmer%20CV.pdf"
            download="Oliver_Palmer_CV.pdf"
            className="flex items-center gap-2 px-md py-sm bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-md text-sm font-medium transition-all group/cv"
            aria-label="Download CV"
          >
            <Download className="size-4 group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
            <span className="hidden sm:inline">Download CV</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
