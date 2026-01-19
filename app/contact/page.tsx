
import { Mail, Send, Github, Linkedin, MessageSquare, Terminal, ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Oliver Palmer for contract or full-time opportunities.",
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-md py-2xl animate-fade-in">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-lg group"
      >
        <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
        Back to Overview
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-start">
        {/* Contact info */}
        <div className="space-y-xl lg:sticky lg:top-24">
          <div className="space-y-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-mono mb-2">
              <Terminal className="size-3" />
              <span>contact.init()</span>
            </div>
            <h1 className="title-lg md:text-6xl text-foreground font-bold italic tracking-tighter">
              Let&apos;s <span className="text-primary">connect</span>.
            </h1>
          </div>

          <div className="space-y-lg">
            <div className="group flex items-start gap-md p-md rounded-xl hover:bg-sidebar/50 border border-transparent hover:border-border transition-all">
              <div className="p-sm bg-primary/10 rounded-lg text-primary mt-1 group-hover:scale-110 transition-transform">
                <Mail className="size-5" />
              </div>
              <div>
                <h2 className="font-bold text-foreground font-mono">_email</h2>
                <a 
                  href="mailto:oliver.palmer10@hotmail.co.uk" 
                  className="text-muted-foreground hover:text-secondary transition-colors break-all"
                >
                  oliver.palmer10@hotmail.co.uk
                </a>
              </div>
            </div>

            <div className="group flex items-start gap-md p-md rounded-xl hover:bg-sidebar/50 border border-transparent hover:border-border transition-all">
              <div className="p-sm bg-secondary/10 rounded-lg text-secondary mt-1 group-hover:scale-110 transition-transform">
                <MessageSquare className="size-5" />
              </div>
              <div>
                <h2 className="font-bold text-foreground font-mono">_socials</h2>
                <div className="flex flex-wrap gap-md mt-sm">
                  <a 
                    href="https://www.linkedin.com/in/palmeroliver" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Linkedin className="size-5" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="relative group">
          {/* Decorative glow */}
          <div className="absolute -inset-1 bg-linear-to-r from-primary via-secondary to-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-card border border-border rounded-2xl p-lg md:p-xl shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 p-lg opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
              <Send className="size-48 -rotate-12 translate-x-12 -translate-y-12" />
            </div>

            <form 
              action="https://formspree.io/f/xjggrwel"
              method="POST"
              className="space-y-xl relative z-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="space-y-sm">
                  <label htmlFor="name" className="text-xs font-mono text-secondary uppercase tracking-wider">const name =</label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    placeholder="&quot;Your name&quot;"
                    className="w-full bg-background/50 border border-border rounded-md px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/30 font-mono text-foreground"
                  />
                </div>

                <div className="space-y-sm">
                  <label htmlFor="email" className="text-xs font-mono text-secondary uppercase tracking-wider">const email =</label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="&quot;your@email.com&quot;"
                    className="w-full bg-background/50 border border-border rounded-md px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/30 font-mono text-foreground"
                  />
                </div>
              </div>

              <div className="space-y-sm">
                <label htmlFor="message" className="text-xs font-mono text-secondary uppercase tracking-wider">const message =</label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="`What's on your mind?`"
                  className="w-full bg-background/50 border border-border rounded-md px-md py-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-muted-foreground/30 font-mono text-foreground resize-none"
                />
              </div>

              <div className="pt-md">
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-bold py-md rounded-md hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-md group/btn shadow-lg shadow-primary/20"
                >
                  <span className="font-mono">send_inquiry()</span>
                  <Send className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p className="mt-4 text-[10px] text-muted-foreground text-center font-mono opacity-40">
                  // submission via formspree.io
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
