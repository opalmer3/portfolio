
import { projects } from "@/src/content/projects";
import ProjectCard from "@/src/components/project-card";
import { Github, Linkedin, ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center space-y-lg min-h-[calc(100vh-64px)] animate-fade-in max-w-5xl mx-auto px-md w-full">
        <div className="space-y-md">
          <p className="text-primary font-mono text-sm tracking-widest uppercase animate-slide-in-up">
            Available for fully remote, contract or full-time opportunities
          </p>
          <h1 className="title-lg md:text-6xl text-foreground font-bold animate-slide-in-up [animation-delay:200ms]">
            Oliver Palmer
          </h1>
          <p className="title-md md:text-3xl text-secondary animate-slide-in-up [animation-delay:400ms]">
            React / Next.js Specialist
          </p>
        </div>
        
        <p className="body-lg text-muted-foreground animate-slide-in-up [animation-delay:600ms]">
          I build high-performance, accessible user interfaces with a focus on modern developer experience and scalable architecture.
        </p>

        <div className="flex gap-md pt-md animate-slide-in-up [animation-delay:800ms]">
          <a href="#projects" className="px-lg py-sm bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
            View My Work
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
          <div className="flex items-center gap-md border-l border-border pl-md ml-xs">
             <a 
              href="https://www.linkedin.com/in/palmeroliver" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
                <Linkedin className="size-6" aria-hidden="true" />
             </a>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-md space-y-2xl w-full">
        {/* Projects Grid */}
        <section id="projects" className="space-y-xl pt-lg">
          <div className="flex items-center gap-4">
            <h2 className="title-md text-highlight shrink-0">Featured Projects</h2>
            <div className="h-px w-full bg-border" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* About & Skills Summary */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-2xl pt-xl pb-2xl">
          <div className="lg:col-span-2 space-y-md">
            <h2 className="title-md text-keyword">_background</h2>
            <div className="space-y-md text-muted-foreground body-md">
              <p>
                Hi! I&apos;m Oli, a UK-based frontend specialist who loves building polished digital experiences. I&apos;ve spent the last few years helping global brands build scalable, accessible web applications that users actually enjoy using.
              </p>
              <p>
                While I&apos;m comfortable working across the full stack, my true passion lies in the frontend ecosystem. I specialize in crafting high-performance interfaces using React and Next.js, always keeping user experience and accessibility at the forefront.
              </p>
            </div>
          </div>
          
          <div className="space-y-md">
              <h2 className="title-md text-function">_skills</h2>
              <div className="flex flex-wrap gap-sm">
                  {["React", "Next.js", "TypeScript", "React Native", "Tailwind", "Vercel", "AWS", "Contentful", "Git", "WCAG", "Performance"].map((skill) => (
                      <span 
                          key={skill}
                          className="px-sm py-xs bg-sidebar rounded text-sm font-mono text-secondary border border-border"
                      >
                          {skill}
                      </span>
                  ))}
              </div>
          </div>
        </section>

        <footer className="text-center py-2xl border-t border-border mt-2xl text-muted-foreground text-sm font-mono">
          &copy; {new Date().getFullYear()} Oliver Palmer. Built with Next.js & Tailwind.
        </footer>
      </div>
    </div>
  );
}
