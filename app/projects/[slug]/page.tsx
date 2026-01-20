
import { projects } from "@/src/content/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Globe, ExternalLink, Shield, Zap, Target, Award, MapPin, Calendar } from "lucide-react";
import ResponsiveImage from "@/src/components/responsive-image";

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
      images: project.image ? [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ] : [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: project.title,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Oliver Palmer`,
      description: project.description.substring(0, 160) + "...",
      images: project.image ? [project.image] : ["/og-image.png"],
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
    <div className="max-w-6xl mx-auto py-2xl px-md space-y-2xl">
      {/* Navigation */}
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group mb-lg"
      >
        <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
        Back to Overview
      </Link>

      {/* Hero Section */}
      <header className="space-y-xl">
        <div className="space-y-md">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-md border-b border-border pb-lg">
                <div>
                    <h1 className="title-lg text-primary">{project.title}</h1>
                    <h2 className="title-sm text-secondary mt-xs">{project.role}</h2>
                </div>
                <div className="flex flex-col md:items-end gap-sm">
                    <div className="flex flex-wrap gap-sm md:justify-end">
                        <div className="inline-flex items-center gap-2 text-xs font-mono text-function border border-function/30 bg-function/5 px-sm py-1.5 rounded-md">
                            <Calendar className="size-3.5" aria-hidden="true" />
                            {project.period}
                        </div>
                        <div className="inline-flex items-center gap-2 text-xs font-mono text-interface border border-interface/30 bg-interface/5 px-sm py-1.5 rounded-md">
                            <MapPin className="size-3.5" aria-hidden="true" />
                            {project.location}
                        </div>
                    </div>
                </div>
            </div>
            <p className="body-lg text-foreground/90 max-w-3xl leading-relaxed">
                {project.description}
            </p>
        </div>

        {/* Project Image Mockup/Real */}
        {project.image && (
          <ResponsiveImage 
            src={project.image}
            mobileSrc={project.mobileImage}
            alt={`${project.title} project view`}
            priority={true}
            containerClassName="w-full rounded-2xl overflow-hidden border border-border/50 bg-sidebar/20 shadow-2xl"
          />
        )}
      </header>

      {/* Main Content Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
        
        {/* Left Column: Narrative */}
        <div className="lg:col-span-8 space-y-2xl">
            {/* The Story */}
            <section className="space-y-md">
                <h3 className="title-md text-highlight flex items-center gap-2">
                    <Zap className="size-5" />
                    The Narrative
                </h3>
                <div className="prose prose-invert max-w-none">
                    {project.longDescription.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="body-md text-foreground/80 leading-relaxed mb-lg">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </section>

            {/* Challenges */}
            <section className="space-y-md">
                <h3 className="title-md text-secondary flex items-center gap-2">
                    <Shield className="size-5" />
                    Key Challenges
                </h3>
                <ul className="grid grid-cols-1 gap-md">
                    {project.challenges.map((challenge, index) => (
                        <li 
                            key={index} 
                            className="p-lg bg-sidebar/20 rounded-xl border border-border/40 hover:border-secondary/30 transition-colors group"
                        >
                            <p className="body-md group-hover:text-foreground transition-colors">{challenge}</p>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Impact */}
            <section className="space-y-md">
                <h3 className="title-md text-interface flex items-center gap-2">
                    <Target className="size-5" />
                    Impact & Outcomes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    {project.impact.map((item, index) => (
                        <div key={index} className="flex gap-md p-md bg-accent/5 rounded-lg border border-accent/10 items-start">
                            <Award className="size-5 text-accent mt-1 shrink-0" />
                            <p className="body-sm text-foreground/90">{item}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>

        {/* Right Column: Sidebar Meta */}
        <aside className="lg:col-span-4 space-y-xl">
            {/* Action Links */}
            {project.website && (
                <div className="p-xl bg-primary/5 rounded-2xl border border-primary/20 space-y-md">
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary">Project Links</p>
                    <a 
                        href={project.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-lg py-sm bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <Globe className="size-4" aria-hidden="true" />
                        Live Site
                        <ExternalLink className="size-3" aria-hidden="true" />
                    </a>
                </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-md">
                <p className="text-sm font-semibold uppercase tracking-wider text-foreground/60 px-sm">Tech Stack</p>
                <div className="flex flex-wrap gap-sm">
                    {project.tech.map((tech, index) => {
                        const colors = [
                            "bg-primary/5 border-primary/20 text-primary/80 hover:bg-primary/10",
                            "bg-secondary/5 border-secondary/20 text-secondary/80 hover:bg-secondary/10",
                            "bg-accent/5 border-accent/20 text-accent/80 hover:bg-accent/10",
                            "bg-interface/5 border-interface/20 text-interface/80 hover:bg-interface/10",
                            "bg-highlight/5 border-highlight/20 text-highlight/80 hover:bg-highlight/10",
                        ];
                        const colorClass = colors[index % colors.length];
                        return (
                            <span 
                                key={tech} 
                                className={`px-sm py-xs rounded border text-xs font-mono transition-colors ${colorClass}`}
                            >
                                {tech}
                            </span>
                        );
                    })}
                </div>
            </div>

            {/* Project Highlights (Briefly) */}
            <div className="space-y-md">
                <p className="text-sm font-semibold uppercase tracking-wider text-foreground/60 px-sm">Core Highlights</p>
                <div className="space-y-sm">
                    {project.highlights.map((h, i) => (
                        <div key={i} className="text-sm text-foreground/80 border-l-2 border-primary/40 bg-primary/5 p-md rounded-r-lg italic">
                            {h}
                        </div>
                    ))}
                </div>
            </div>
        </aside>

      </div>
    </div>
  );
}
