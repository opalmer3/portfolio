
import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm py-12">
      <div className="max-w-6xl mx-auto px-md flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-lg font-bold tracking-tighter hover:opacity-80 transition-opacity">
            _oliverPalmer
          </Link>
          <p className="text-xs text-muted-foreground font-mono">
            &copy; {new Date().getFullYear()} &mdash; Built with Next.js & TypeScript
          </p>
        </div>
        
        <div className="flex items-center gap-8 sm:hidden">
          <Link 
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            <span className="size-1.5 rounded-full bg-primary/40" />
            Contact
          </Link>

          <a 
            href="https://www.linkedin.com/in/palmeroliver" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="size-4" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="hidden sm:flex items-center gap-8">
          <a 
            href="https://github.com/opalmer3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono uppercase tracking-widest"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/palmeroliver" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono uppercase tracking-widest"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
