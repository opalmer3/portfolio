import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
import "./theme.css";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Oliver Palmer | React & Next.js Specialist",
    template: "%s | Oliver Palmer"
  },
  description: "Web Developer Portfolio of Oliver Palmer, specializing in high-performance React and Next.js applications.",
  keywords: ["React", "Next.js", "TypeScript", "Frontend Developer", "Oliver Palmer", "Portfolio"],
  authors: [{ name: "Oliver Palmer" }],
  creator: "Oliver Palmer",
  metadataBase: new URL("https://oliver-palmer.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://oliver-palmer.vercel.app",
    title: "Oliver Palmer | React & Next.js Specialist",
    description: "Web Developer Portfolio of Oliver Palmer, specializing in high-performance React and Next.js applications.",
    siteName: "Oliver Palmer Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oliver Palmer | React & Next.js Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oliver Palmer | React & Next.js Specialist",
    description: "Web Developer Portfolio of Oliver Palmer, specializing in high-performance React and Next.js applications.",
    creator: "@oliverpalmer",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'light') {
                  document.documentElement.classList.add('light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${firaCode.variable} font-mono antialiased min-h-screen bg-background text-foreground`}
      >
        <Navbar />
        <main className="pt-16 min-h-[calc(100vh-64px)]">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Oliver Palmer",
              url: "https://oliver-palmer.vercel.app",
              jobTitle: "React / Next.js Specialist",
              sameAs: [
                "https://www.linkedin.com/in/palmeroliver",
                "https://github.com/opalmer3",
              ],
              description: "Web Developer Portfolio of Oliver Palmer, specializing in high-performance React and Next.js applications.",
            }),
          }}
        />
      </body>
    </html>
  );
}
