
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-md animate-fade-in">
      <div className="max-w-5xl space-y-lg">
        <h1 className="title-lg text-primary animate-fade-in-up">
          Oliver Palmer
        </h1>
        <h2 className="title-md text-secondary animate-fade-in-up animation-delay-200">
          React / Next.js Specialist
        </h2>
        <p className="body-lg animate-fade-in-up animation-delay-400">
          I build high-performance, accessible user interfaces with React & Next.js. Capable of architecting and delivering robust full-stack solutions.
        </p>

        <div className="text-primary font-mono animate-fade-in-up animation-delay-800">
          <p className="text-function title-sm">Start by exploring the file tree on the left.</p>
        </div>
      </div>
    </div>
  );
}
