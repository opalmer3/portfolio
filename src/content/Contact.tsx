
"use client";

import React from "react";
import MarkdownFile from "@/src/components/markdown-file";
import { ExternalLink, Mail } from "lucide-react";

export default function ContactContent() {
  return (
    <MarkdownFile filename="contact.mdx">
      <div className="max-w-3xl animate-fade-in">
        <span className="text-sm text-foreground font-mono bg-secondary/20 px-sm py-xs rounded border border-secondary/30  italic">
           // Direct contact channels
        </span>

        <div className="space-y-lg mt-lg">
            
            {/* LinkedIn */}
            <div className="group">
                <div className="flex items-center gap-sm mb-xs font-mono text-sm">
                    <span className="text-keyword">const</span> 
                    <span className="text-variable">linkedIn</span> 
                    <span className="text-foreground">=</span>
                </div>
                <a 
                    href="https://www.linkedin.com/in/palmeroliver" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-sm p-md border border-border bg-card/50 rounded hover:border-primary/50 transition-colors group-hover:bg-primary/5 cursor-pointer text-left"
                >
                    <ExternalLink className="size-5 text-secondary shrink-0" />
                    <span className="text-highlight break-all font-mono">"https://www.linkedin.com/in/palmeroliver"</span>
                </a>
            </div>

            {/* Email */}
            <div className="group">
                 <div className="flex items-center gap-sm mb-xs font-mono text-sm">
                    <span className="text-keyword">const</span> 
                    <span className="text-variable">email</span> 
                    <span className="text-foreground">=</span>
                </div>
                <a 
                    href="mailto:oliver.palmer10@hotmail.co.uk" 
                    className="flex items-center gap-sm p-md border border-border bg-card/50 rounded hover:border-primary/50 transition-colors group-hover:bg-primary/5 cursor-pointer text-left"
                >
                    <Mail className="size-5 text-secondary shrink-0" />
                    <span className="text-highlight break-all font-mono">"oliver.palmer10@hotmail.co.uk"</span>
                </a>
            </div>

        </div>
      </div>
    </MarkdownFile>
  );
}
