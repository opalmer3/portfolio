import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Sidebar from "@/src/components/sidebar";
import "./theme.css";
import "./theme.css";
import "./globals.css";
import { TabsProvider } from "@/src/lib/tabs-context";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${firaCode.variable} body-md antialiased min-h-screen flex`}
      >
        <TabsProvider>
            <Sidebar />
            <main className="flex-1 overflow-auto bg-background">{children}</main>
        </TabsProvider>
      </body>
    </html>
  );
}
