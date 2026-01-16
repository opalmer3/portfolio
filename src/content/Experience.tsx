
import React from "react";
import MarkdownFile from "@/src/components/markdown-file";

interface ExperienceContentProps {
  slug: string;
}

const experiences: Record<string, { title: string; role: string; period: string; tech: string[]; content: React.ReactNode }> = {
  diageo: {
    title: "Diageo",
    role: "Frontend Engineer (Contract)",
    period: "Feb 2024 - Jul 2025",
    tech: ["React", "Next.js", "TypeScript", "Contentful", "Vercel", "Tailwind"],
    content: (
      <div className="space-y-md">
        <p className="body-lg">
          Working with Diageo was an incredible opportunity to impact a massive digital transformation project. I was a key team member in the migration of flagship sites like <a href="https://www.johnniewalker.com" target="_blank" rel="noopener noreferrer" className="text-highlight">Johnnie Walker</a> to a modern Next.js stack, focusing heavily on performance and consistently hitting 90+ Lighthouse scores.
        </p>
        <p className="body-lg">
          A major highlight was contributing to <span className="text-highlight">"Bedrock"</span>, the core library suite defining engineering standards for the entire organization. I collaborated with designers to define the design system, extending <span className="text-highlight">"shadcn/ui"</span> with custom tokens and automating synchronization with Figma using Supernova.
        </p>
        <ul className="list-disc list-inside space-y-sm text-foreground text-lg">
          <li>Migrated legacy sites to Next.js & Contentful, vastly improving SEO and speed.</li>
          <li>Built a scalable component library used by 200+ global brands.</li>
          <li>Championed accessibility (WCAG) and performance best practices across the team.</li>
        </ul>
      </div>
    ),
  },
  appbar: {
    title: "App Bar",
    role: "Senior Frontend Engineer",
    period: "Apr 2023 - Dec 2023",
    tech: ["React", "React Native", "TypeScript", "AWS", "Azure", "Code Push"],
    content: (
      <div className="space-y-md">
        <p className="body-lg">
          At App Bar, I wore many hats, constantly shifting between React Native for mobile apps and Next.js for web platforms. I really enjoyed the variety, one day I'd be optimizing a CMS, and the next I'd be debugging a native module for iOS.
        </p>
        <p className="body-lg">
          A standout project was developing HR employee engagement apps for <span className="text-highlight">AIA</span>. I was solely responsible for the frontend delivery end-to-end, building minigames, an appreciation wall, a photo collage generator, and a QR code scanner for their annual employee dinner.
        </p>
        <p className="body-lg">
          One of my highlights was building projects from scratch and owning the entire lifecycle, all the way to deployment on the App Store and Play Store.
        </p>
        <ul className="list-disc list-inside space-y-sm text-foreground text-lg">
          <li>Shipped cross-platform React Native apps to both iOS and Android stores.</li>
          <li>Took full ownership of projects, delivering high-quality solutions from scratch.</li>
          <li>Mentored junior developers, sharing knowledge on patterns and best practices.</li>
        </ul>
      </div>
    ),
  },
  cryptocom: {
    title: "Crypto.com",
    role: "Frontend Engineer",
    period: "Dec 2021 - Feb 2023",
    tech: ["React", "TypeScript", "Next.js", "ChakraUI"],
    content: (
      <div className="space-y-md">
        <p className="body-lg">
          My time at Crypto.com was fast-paced and strictly focused on their high-traffic core data platforms. I collaborated closely with the design team to refresh the UI for the <a href="https://crypto.com/price" target="_blank" rel="noopener noreferrer" className="text-highlight">Price</a> and <a href="https://crypto.com/nft" target="_blank" rel="noopener noreferrer" className="text-highlight">NFT</a> products, which we found significantly improved user session times.
        </p>
        <ul className="list-disc list-inside space-y-sm text-foreground text-lg">
          <li>Designed and implemented a site-wide UI refresh, boosting engagement by 23%.</li>
          <li>Built a custom rich text editor used across multiple internal tools.</li>
          <li>Integrated analytics dashboards to help management make data-driven decisions.</li>
        </ul>
      </div>
    ),
  },
  shamaazi: {
    title: "Shamaazi",
    role: "Full Stack Engineer",
    period: "Jan 2021 - Dec 2021",
    tech: ["React", "TypeScript", "AWS", "Go", "Lambda", "DynamoDB", "Terraform", "SQS", "Github Actions"],
    content: (
      <div className="space-y-md">
        <p className="body-lg">
          At Shamaazi, I dove deep into serverless architectures for a "Fin-tech for Good" mission. I'm particularly proud of fixing a critical billing bug that managed millions in transactions, it was a high-pressure situation, but solving it was incredibly rewarding.
        </p>
        <ul className="list-disc list-inside space-y-sm text-foreground text-lg">
          <li>Architected complex serverless solutions using AWS Lambda, DynamoDB, and SQS.</li>
          <li>Secured billing processes, ensuring 100% accuracy for $21M+ in payments.</li>
          <li>Integrated Apple & Google Pay, increasing checkout conversions by 20%.</li>
        </ul>
      </div>
    ),
  },
};

export default function ExperienceContent({ slug }: ExperienceContentProps) {
  const experience = experiences[slug];

  if (!experience) {
    return <div>Experience not found</div>;
  }

  return (
    <MarkdownFile filename={`${slug}.mdx`}>
      <div className="space-y-lg animate-fade-in">
        <div className="border-b border-border pb-md">
          <h1 className="title-lg text-primary">{experience.title}</h1>
          <div className="flex justify-between items-center mt-sm">
            <h2 className="title-sm text-secondary">{experience.role}</h2>
            <span className="text-sm text-foreground font-mono bg-secondary/20 px-sm py-xs rounded border border-secondary/30">
                // {experience.period}
            </span>
          </div>
        </div>
        
        <div>
            {experience.content}
        </div>

        <div className="pt-md border-t border-border">
            <h3 className="text-sm font-semibold text-muted-foreground mb-sm">Tech Stack:</h3>
            <div className="flex flex-wrap gap-sm">
                {experience.tech.map((tech) => (
                    <span key={tech} className="px-sm py-xs bg-sidebar text-xs text-secondary rounded border border-border">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </MarkdownFile>
  );
}
