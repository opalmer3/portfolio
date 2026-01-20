
export interface Project {
  slug: string;
  title: string;
  role: string;
  period: string;
  location: string;
  tech: string[];
  description: string;
  longDescription: string;
  challenges: string[];
  impact: string[];
  image?: string;
  mobileImage?: string;
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
    tech: ["React", "Next.js", "TypeScript", "Contentful", "Vercel", "Tailwind", "Auth0"],
    image: "/diageo_real.png",
    mobileImage: "/diageo_mobile.png",
    description: "Played a key role in a massive digital transformation for Diageo, migrating flagship sites like Johnnie Walker to a modern Next.js stack with global scale.",
    longDescription: "Working with Diageo was an incredible opportunity to impact a massive digital transformation project. One of the most complex frontend challenges I’ve faced was migrating johnniewalker.com from a legacy Umbraco stack to Next.js and Contentful, supporting 43 locales under very tight deadlines. It wasn’t just a rewrite, we had to improve performance, a11y, and SEO, whilst maintaining feature parity.\n\nOn top of that, the platform relied on complex SaaS integrations, including Auth0 for authentication, analytics, and other third-party services. Each integration had its own quirks, so we had to work closely with each team to ensure smooth integration.",
    challenges: [
      "Migrating 43 global locales from Umbraco to Next.js under tight deadlines.",
      "Ensuring seamless integration with Auth0 and multiple third-party analytics services.",
      "Maintaining a shared component library used by 200+ global brands without introducing breaking changes.",
      "Optimising caching with tag-based validation to keep build times low."
    ],
    impact: [
      "Achieved 90+ Lighthouse scores across flagship sites.",
      "Optimised global traffic handling with optimized SSR/SSG strategies.",
      "Streamlined editor workflows, allowing for real-time content updates without disruption.",
      "Contributed to the 'Bedrock' library, a shared code repository designed to maintain best practices and accelerate delivery, adopted organization-wide by 200+ brands."
    ],  
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
    description: "Developed engaging HR employee engagement apps for AIA, delivering full-stack mobile experiences from scratch.",
    longDescription: "At App Bar, I wore many hats, constantly shifting between React Native for mobile apps and Next.js for web platforms. I really enjoyed the variety, one day I'd be optimizing a CMS, and the next I'd be debugging a native module for iOS. A standout project was developing HR employee engagement apps for AIA. I was solely responsible for the frontend delivery end-to-end, building minigames, an appreciation wall, a photo collage generator, and a QR code scanner for their annual employee dinner.",
    challenges: [
      "Debugging native iOS/Android modules within a React Native environment.",
      "Taking full ownership of end-to-end frontend delivery for high-stakes corporate events.",
      "Building complex interactive features like custom mini-games and real-time photo collages."
    ],
    impact: [
      "Successfully shipped cross-platform apps to both iOS and Android stores.",
      "Improved employee engagement for AIA through interactive features.",
      "Mentored junior developers on production-grade React Native patterns."
    ],
    highlights: [
      "Developed cross-platform mobile apps with custom native module integrations for iOS/Android.",
      "Built high-engagement interactive features including real-time photo collages and QR scanners.",
      "Implemented automated CI/CD pipelines with CodePush for rapid, over-the-air updates."
    ]
  },
  {
    slug: "crypto-com",
    title: "Crypto.com",
    role: "Frontend Engineer",
    period: "Dec 2021 - Feb 2023",
    location: "Hong Kong",
    tech: ["React", "TypeScript", "Next.js", "ChakraUI", "WebSockets"],
    image: "/crypto_real.png",
    mobileImage: "/crypto_mobile.png",
    description: "Focused on high-traffic data platforms, delivering complex features like site-wide omnisearch and real-time trackers.",
    longDescription: "My time at Crypto.com was fast-paced and strictly focused on their high-traffic core data platforms. I was mainly focused on new feature development delivering complex features such as a site-wide omnisearch querying multiple microservice backends and aggregating the results and a live ticker which showed what other users are searching built with WebSockets.",
    challenges: [
      "Aggregating data from multiple microservice backends into a single, performant omnisearch feature.",
      "Implementing real-time WebSocket communication for live search tickers at scale.",
      "Maintaining high performance on high-traffic pages with complex UI components."
    ],
    impact: [
      "Drove a 23% increase in user engagement through a comprehensive site-wide UI modernization.",
      "Significantly improved user session duration on core Price and NFT product interfaces.",
      "Enabled data-driven decision making for leadership through real-time internal analytics."
    ],
    highlights: [
      "Engineered a site-wide omnisearch system aggregating data from multiple microservice backends.",
      "Implemented a high-performance live search ticker using WebSockets for real-time activity.",
      "Developed a bespoke rich text editor (RTE) used across several internal content tools."
    ],
    website: "https://crypto.com/price"
  },
  {
    slug: "shamaazi",
    title: "Shamaazi",
    role: "Full Stack Engineer",
    period: "Jan 2021 - Dec 2021",
    location: "UK",
    tech: ["React", "TypeScript", "AWS", "Go", "Lambda", "DynamoDB", "Terraform", "SQS", "Stripe"],
    description: "Architected serverless 'Fin-tech for Good' solutions, including complex analytics dashboards for global charities.",
    longDescription: "At Shamaazi, I dove deep into serverless architectures for a 'Fin-tech for Good' mission. I architected a complex analytics dashboard which synced data from Stripe to data in our backend, presenting a visually appealing analytics dashboard to give charities more insights into the donations they were receiving.",
    challenges: [
      "Synchronizing and aggregating large volumes of financial data from Stripe in real-time.",
      "Designing complex serverless architectures using AWS Lambda, SQS, and DynamoDB.",
      "Fixing critical billing bugs in a high-pressure environment managing millions in transactions."
    ],
    impact: [
      "Enabled charities to maximize fundraising efficiency through real-time donation analytics.",
      "Ensured 100% financial accuracy for $21M+ in transactions by resolving complex billing edge cases.",
      "Drove a 20% uplift in successful donations by modernizing the checkout experience."
    ],
    highlights: [
      "Architected a highly resilient serverless infrastructure using Go, AWS Lambda, and DynamoDB.",
      "Integrated Apple Pay and Google Pay via Stripe to streamline global donation flows.",
      "Implemented robust event-driven architecture using SQS for asynchronous financial reporting."
    ],
    website: "https://mytennights.com"
  }
];
