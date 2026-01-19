
"use client";

import Link from "next/link";
import { Linkedin, Download } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-md h-16 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-size-[200%_auto] bg-position-[0%_50%] transition-all duration-700 group-hover:bg-position-[100%_50%] group-hover:drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]">
            _oliverPalmer
          </span>
        </Link>

        <div className="flex items-center gap-md lg:gap-lg">
          <a 
            href="https://www.linkedin.com/in/palmeroliver" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="size-4" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          
          <a
            href="/Oliver%20Palmer%20CV.pdf"
            download="Oliver_Palmer_CV.pdf"
            className="flex items-center gap-2 px-md py-sm bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-md text-sm font-medium transition-all group/cv"
          >
            <Download className="size-4 group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
