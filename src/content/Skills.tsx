
import React from "react";
import MarkdownFile from "@/src/components/markdown-file";

export default function SkillsContent() {
  const skills = {
    Frontend: ["React", "Next.js", "React Native", "TypeScript", "JavaScript", "CSS3", "GraphQL"],
    Backend: ["Node.js", "AWS", "Contentful", "REST APIs"],
    Tools: ["Git", "CI/CD", "Automated Testing", "Performance Optimization", "Accessibility (WCAG)"],
  };

  return (
    <MarkdownFile filename="skills.mdx">
      <div className="space-y-lg animate-fade-in">
        <div className="text-muted-foreground mb-lg italic">
          <p>// Tech Stack & Skills</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-sm p-md border border-border rounded-lg bg-card/50">
              <h3 className="title-md text-function">{category}</h3>
              <div className="flex flex-wrap gap-sm">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-sm py-xs bg-secondary/10 text-secondary rounded text-sm hover:bg-secondary/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </MarkdownFile>
  );
}
