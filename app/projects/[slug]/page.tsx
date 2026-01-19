
import { projects } from "@/src/content/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Globe, ExternalLink } from "lucide-react";

import { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description.substring(0, 160) + "...",
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Oliver Palmer`,
      description: project.description,
      type: "article",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Oliver Palmer`,
      description: project.description.substring(0, 160) + "...",
      images: ["/og-image.png"],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-2xl px-md">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-lg group"
      >
        <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
        Back to Overview
      </Link>

      <div className="space-y-xl">
        <header className="space-y-md border-b border-border pb-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
            <div>
              <h1 className="title-lg text-primary">{project.title}</h1>
              <h2 className="title-sm text-secondary mt-xs">{project.role}</h2>
            </div>
            <div className="flex flex-col md:items-end gap-xs">
              <div className="self-start text-xs font-mono text-function border-function/30 bg-function/5 px-sm py-xs rounded border">
                {project.period}
              </div>
              <div className="text-xs font-mono text-primary/80 px-sm">
                {project.location}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-sm pt-sm">
            {project.tech.map((tech) => {
              const techLower = tech.toLowerCase();
              let colorClass = "text-function border-function/30 bg-function/5";
              
              if (techLower.includes("react") || techLower.includes("next") || techLower.includes("typescript")) {
                colorClass = "text-interface border-interface/30 bg-interface/5";
              } else if (techLower.includes("aws") || techLower.includes("azure") || techLower.includes("vercel") || techLower.includes("terraform") || techLower.includes("go")) {
                colorClass = "text-variable border-variable/30 bg-variable/5";
              } else if (techLower.includes("tailwind") || techLower.includes("chakra") || techLower.includes("ui") || techLower.includes("css")) {
                colorClass = "text-highlight border-highlight/30 bg-highlight/5";
              } else if (techLower.includes("contentful") || techLower.includes("cms") || techLower.includes("github")) {
                colorClass = "text-keyword border-keyword/30 bg-keyword/5";
              }

              return (
                <span 
                  key={tech} 
                  className={`px-sm py-xs rounded text-xs font-mono border ${colorClass}`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </header>

        <section className="space-y-lg">
          <div className="prose prose-invert max-w-none">
            <p className="body-lg text-foreground/90 leading-relaxed italic border-l-4 border-accent pl-md py-xs bg-accent/5">
              &quot;{project.description}&quot;
            </p>
          </div>

          <div className="space-y-md">
            <h3 className="title-md text-highlight">Key Highlights</h3>
            <ul className="grid grid-cols-1 gap-md">
              {project.highlights.map((highlight, index) => (
                <li 
                  key={index} 
                  className="flex gap-md p-md bg-sidebar/30 rounded-lg border border-border/50 hover:border-border transition-colors items-start"
                >
                  <div className="size-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    {index + 1}
                  </div>
                  <p className="body-md">{highlight}</p>
                </li>
              ))}
            </ul>
          </div>

          {project.website && (
            <div className="pt-xl flex gap-md">
                <a 
                    href={project.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-lg py-sm bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity"
                >
                    <Globe className="size-4" aria-hidden="true" />
                    Visit Website
                    <ExternalLink className="size-3" aria-hidden="true" />
                </a>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
