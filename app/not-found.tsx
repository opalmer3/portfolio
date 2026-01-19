
import { Metadata } from "next";
import Link from "next/link";
import { FileQuestion, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] px-md text-center space-y-xl animate-fade-in">
      <div className="space-y-md">
        <div className="flex justify-center mb-md">
          <div className="p-lg bg-sidebar/30 rounded-2xl border border-border/50 relative">
            <FileQuestion className="size-16 text-primary animate-pulse" />
            <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-destructive text-destructive-foreground text-[10px] font-bold rounded uppercase tracking-wider">
              Error
            </div>
          </div>
        </div>
        
        <div className="space-y-sm">
          <h1 className="title-lg font-mono text-primary">
            <span className="text-secondary">404:</span> Page Not Found
          </h1>
          <p className="body-lg text-muted-foreground font-mono">
            &lt;FileNotFoundException /&gt;
          </p>
        </div>
      </div>

      <div className="p-lg bg-sidebar/20 rounded-xl border border-border/50 font-mono text-left space-y-sm relative overflow-hidden group">
        <div className="flex gap-2 mb-md border-b border-border/30 pb-md">
          <div className="size-2.5 rounded-full bg-[#FF6188]/40" />
          <div className="size-2.5 rounded-full bg-[#FFD866]/40" />
          <div className="size-2.5 rounded-full bg-[#A9DC76]/40" />
        </div>
        <div className="space-y-xs text-sm md:text-base">
          <p className="text-muted-foreground/60">
            <span className="text-primary">const</span> <span className="text-secondary">currentPath</span> = <span className="text-accent">&quot;the_void&quot;</span>;
          </p>
          <p className="text-muted-foreground/60">
            <span className="text-primary">if</span> (<span className="text-secondary">page</span> === <span className="text-interface">null</span>) &#123;
          </p>
          <p className="pl-md text-muted-foreground/60 border-l border-border/50 ml-xs">
            <span className="text-primary">return</span> (
          </p>
          <p className="pl-2xl text-foreground/90">
             &quot;Something went wrong...&quot;
          </p>
          <p className="pl-md text-muted-foreground/60 border-l border-border/50 ml-xs">
            );
          </p>
          <p className="text-muted-foreground/60">&#125;</p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-2 opacity-5">
            <span className="text-8xl rotate-12 block select-none cursor-default">?</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-md pt-md">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-lg py-sm bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95 group shadow-lg shadow-primary/20"
        >
          <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
          Return to Home
        </Link>
      </div>
    </div>
  );
}
