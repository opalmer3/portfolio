
import React from "react";
import MarkdownFile from "@/src/components/markdown-file";

export default function AboutContent() {
  return (
    <MarkdownFile filename="hi.mdx">
      <div className="space-y-lg text-foreground animate-fade-in">
        <div className="space-y-md">
            <h1 className="title-lg text-primary"># Hello World</h1>
            <p className="body-md">
                Hi! I'm Oli, a UK-based frontend specialist who loves building polished digital experiences. I've spent the last few years helping global brands build scalable, accessible web applications that users actually enjoy using.
            </p>
            <p className="body-md">
                While I'm comfortable working across the full stack, my true passion lies in the frontend ecosystem. I specialize in crafting high-performance interfaces using <span className="text-secondary">React</span> and <span className="text-secondary">Next.js</span>, always keeping user experience and accessibility at the forefront.
            </p>
            <p className="body-md">
                I'm currently open to both <span className="text-highlight">full-time</span> and <span className="text-highlight">contract</span> remote roles.
            </p>
        </div>
      </div>

        <div className="mt-xl p-md bg-sidebar/50 rounded border border-border shadow-sm">
             <code className="text-sm font-mono block overflow-x-auto">
                <span className="text-keyword">const</span> <span className="text-function">developer</span>: <span className="text-interface">Developer</span> <span className="text-keyword">=</span> {"{"}
                <br />
                &nbsp;&nbsp;<span className="text-variable">name</span>: <span className="text-highlight">"Oli"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-variable">location</span>: <span className="text-highlight">"York, UK"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-variable">role</span>: <span className="text-highlight">"Frontend Engineer"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-variable">stack</span>: [<span className="text-highlight">"React"</span>, <span className="text-highlight">"Next.js"</span>, <span className="text-highlight">"TypeScript"</span>],
                <br />
                &nbsp;&nbsp;<span className="text-variable">passion</span>: <span className="text-keyword">true</span>,
                <br />
                {"};"}
             </code>
        </div>

    </MarkdownFile>
  );
}
