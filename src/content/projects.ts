
export interface Project {
  slug: string;
  title: string;
  role: string;
  period: string;
  location: string;
  tech: string[];
  description: string;
  highlights: string[];
  website?: string;
}

export const projects: Project[] = [
  {
    slug: "diageo",
    title: "Diageo",
    role: "Frontend Engineer (Contract)",
    period: "Feb 2024 - Jul 2025",
    location: "UK",
    tech: ["React", "Next.js", "TypeScript", "Contentful", "Vercel", "Tailwind"],
    description: "Working with Diageo was an incredible opportunity to impact a massive digital transformation project. I was a key team member in the migration of flagship sites like Johnnie Walker to a modern Next.js stack, focusing heavily on performance and consistently hitting 90+ Lighthouse scores. A major highlight was contributing to 'Bedrock', the core library suite defining engineering standards for the entire organization. I collaborated with designers to define the design system, extending 'shadcn/ui' with custom tokens and automating synchronization with Figma using Supernova.",
    highlights: [
      "Migrated legacy sites to Next.js & Contentful, vastly improving SEO and speed.",
      "Built a scalable component library used by 200+ global brands.",
      "Championed accessibility (WCAG) and performance best practices across the team."
    ],
    website: "https://www.johnniewalker.com"
  },
  {
    slug: "app-bar",
    title: "App Bar",
    role: "Senior Frontend Engineer",
    period: "Apr 2023 - Dec 2023",
    location: "Hong Kong",
    tech: ["React", "React Native", "TypeScript", "AWS", "Azure", "Code Push"],
    description: "At App Bar, I wore many hats, constantly shifting between React Native for mobile apps and Next.js for web platforms. I really enjoyed the variety, one day I'd be optimizing a CMS, and the next I'd be debugging a native module for iOS. A standout project was developing HR employee engagement apps for AIA. I was solely responsible for the frontend delivery end-to-end, building minigames, an appreciation wall, a photo collage generator, and a QR code scanner for their annual employee dinner.",
    highlights: [
      "Shipped cross-platform React Native apps to both iOS and Android stores.",
      "Took full ownership of projects, delivering high-quality solutions from scratch.",
      "Mentored junior developers, sharing knowledge on patterns and best practices."
    ]
  },
  {
    slug: "crypto-com",
    title: "Crypto.com",
    role: "Frontend Engineer",
    period: "Dec 2021 - Feb 2023",
    location: "Hong Kong",
    tech: ["React", "TypeScript", "Next.js", "ChakraUI"],
    description: "My time at Crypto.com was fast-paced and strictly focused on their high-traffic core data platforms. I collaborated closely with the design team to refresh the UI for the Price and NFT products, which we found significantly improved user session times.",
    highlights: [
      "Designed and implemented a site-wide UI refresh, boosting engagement by 23%.",
      "Built a custom rich text editor used across multiple internal tools.",
      "Integrated analytics dashboards to help management make data-driven decisions."
    ],
    website: "https://crypto.com/price"
  },
  {
    slug: "shamaazi",
    title: "Shamaazi",
    role: "Full Stack Engineer",
    period: "Jan 2021 - Dec 2021",
    location: "UK",
    tech: ["React", "TypeScript", "AWS", "Go", "Lambda", "DynamoDB", "Terraform", "SQS", "Github Actions"],
    description: "At Shamaazi, I dove deep into serverless architectures for a 'Fin-tech for Good' mission. I'm particularly proud of fixing a critical billing bug that managed millions in transactions, it was a high-pressure situation, but solving it was incredibly rewarding.",
    highlights: [
      "Architected complex serverless solutions using AWS Lambda, DynamoDB, and SQS.",
      "Secured billing processes, ensuring 100% accuracy for $21M+ in payments.",
      "Integrated Apple & Google Pay, increasing checkout conversions by 20%."
    ],
    website: "https://mytennights.com"
  }
];
