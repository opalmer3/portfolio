
import Link from "next/link";
import { Project } from "@/src/content/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link 
      href={`/projects/${project.slug}`}
      className="group block p-lg bg-sidebar/20 rounded-xl border border-border hover:border-primary/50 transition-all hover:bg-sidebar/40 relative overflow-hidden"
    >
      <div className="flex justify-between items-start mb-md">
        <div>
          <h3 className="title-md text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-secondary text-sm font-mono mt-xs">{project.role} | {project.location}</p>
        </div>
        <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" aria-hidden="true" />
      </div>
      
      <p className="body-sm line-clamp-2 mb-md text-muted-foreground group-hover:text-foreground transition-colors">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-xs">
        {project.tech.slice(0, 4).map((tech) => {
          const techLower = tech.toLowerCase();
          let colorClass = "text-function border-function/30 bg-function/5"; // Yellow (Default)
          
          if (techLower.includes("react") || techLower.includes("next") || techLower.includes("typescript")) {
            colorClass = "text-interface border-interface/30 bg-interface/5"; // Blue
          } else if (techLower.includes("aws") || techLower.includes("azure") || techLower.includes("vercel") || techLower.includes("terraform") || techLower.includes("go")) {
            colorClass = "text-variable border-variable/30 bg-variable/5"; // Orange
          } else if (techLower.includes("tailwind") || techLower.includes("chakra") || techLower.includes("ui") || techLower.includes("css")) {
            colorClass = "text-highlight border-highlight/30 bg-highlight/5"; // Green
          } else if (techLower.includes("contentful") || techLower.includes("cms") || techLower.includes("github")) {
            colorClass = "text-keyword border-keyword/30 bg-keyword/5"; // Pink
          }

          return (
            <span 
              key={tech} 
              className={`px-xs py-0.5 rounded text-[10px] font-mono border ${colorClass} transition-colors`}
            >
              {tech}
            </span>
          );
        })}
        {project.tech.length > 4 && (
          <span className="text-[10px] font-mono text-muted-foreground self-center px-xs">
            +{project.tech.length - 4} more
          </span>
        )}
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500" />
    </Link>
  );
}
