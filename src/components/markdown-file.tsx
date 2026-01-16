
import React from "react";

interface MarkdownFileProps {
  filename: string;
  children: React.ReactNode;
}

export default function MarkdownFile({ filename, children }: MarkdownFileProps) {
  return (
    <div className="flex flex-col h-full w-full font-mono text-sm">    
      <div className="flex-1 overflow-auto p-md relative bg-background">
         <div className="max-w-4xl mx-auto">
             {children}
         </div>
      </div>
    </div>
  );
}
