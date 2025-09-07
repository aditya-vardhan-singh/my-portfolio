export type projectsType = {
  name: string;
  type: string;
  details: {
    description: string[];
    services: string;
    stack: string;
  };
  images?: string[];
  videos?: string[];
};

export const projects: projectsType[] = [
  {
    name: "V Editor",
    type: "C Prog",
    details: {
      description: [
        "A custom text editor like vi that can edit simple text on the terminal.",
      ],
      services: "Text Editing, Native, Customizable",
      stack: "C, Makefile, GCC compiler",
    },
    images: [
      "https://avs-my-portfolio.s3.ap-south-1.amazonaws.com/VEditor/284602263-b2f4d606-b905-4656-8adb-a162435b18d4.png",
      "https://avs-my-portfolio.s3.ap-south-1.amazonaws.com/VEditor/284602430-11cb17fc-3ff9-4034-9532-3d37c31b3b87.png",
      "https://avs-my-portfolio.s3.ap-south-1.amazonaws.com/VEditor/284602442-7a2afdbe-9374-4eea-9bf6-2122bb9ff3ae.png",
      "https://avs-my-portfolio.s3.ap-south-1.amazonaws.com/VEditor/284602454-94dcaabe-a5d5-434d-b926-560e2e5b5a85.png",
      "https://avs-my-portfolio.s3.ap-south-1.amazonaws.com/VEditor/284602515-7dc3807a-2a8f-44da-ae76-affb5710d10d.png",
    ],
    videos: [
      "https://avs-my-portfolio.s3.ap-south-1.amazonaws.com/VEditor/284598119-4c7b231b-0d89-44dd-9a7e-2f71d2e64c5d.webm",
    ],
  },
  {
    name: "PRISM",
    type: "Web2",
    details: {
      description: [
        "The official website for college tech fest.",
        "url: https://www.prism2025.tech/",
      ],
      services: "User registration, event participation",
      stack: "TypeScript, PostgreSQL, PRISMA, React",
    },
    images: [
      "https://avs-my-portfolio.s3.ap-south-1.amazonaws.com/Prism/Screenshot+2025-09-08+014823.png",
      "https://avs-my-portfolio.s3.ap-south-1.amazonaws.com/Prism/Screenshot+2025-09-08+015352.png",
      "https://avs-my-portfolio.s3.ap-south-1.amazonaws.com/Prism/Screenshot+2025-09-08+015410.png",
      "https://avs-my-portfolio.s3.ap-south-1.amazonaws.com/Prism/Screenshot+2025-09-08+015436.png",
      "https://avs-my-portfolio.s3.ap-south-1.amazonaws.com/Prism/Screenshot+2025-09-08+015445.png",
    ],
    videos: [
      "https://avs-my-portfolio.s3.ap-south-1.amazonaws.com/Prism/Screen+Recording+2025-09-08+015946.mp4",
    ],
  },
  {
    name: "Maidaan",
    type: "Startup",
    details: {
      description: ["The official website for college tech fest."],
      services: "User registration, event participation",
      stack: "TypeScript, PostgreSQL, PRISMA, React",
    },
    images: [
      "https://avs-my-portfolio.s3.ap-south-1.amazonaws.com/VEditor/284602263-b2f4d606-b905-4656-8adb-a162435b18d4.png",
    ],
  },
  {
    name: "CMS Port",
    type: "Web2",
    details: {
      description: ["The official website for college tech fest."],
      services: "User registration, event participation",
      stack: "TypeScript, PostgreSQL, PRISMA, React",
    },
    images: [
      "https://avs-my-portfolio.s3.ap-south-1.amazonaws.com/VEditor/284602263-b2f4d606-b905-4656-8adb-a162435b18d4.png",
    ],
  },
  {
    name: "Hel Dash",
    type: "Web2",
    details: {
      description: ["The official website for college tech fest."],
      services: "User registration, event participation",
      stack: "TypeScript, PostgreSQL, PRISMA, React",
    },
    images: [
      "https://avs-my-portfolio.s3.ap-south-1.amazonaws.com/VEditor/284602263-b2f4d606-b905-4656-8adb-a162435b18d4.png",
    ],
  },
  {
    name: "Port V1",
    type: "Web2",
    details: {
      description: ["The official website for college tech fest."],
      services: "User registration, event participation",
      stack: "TypeScript, PostgreSQL, PRISMA, React",
    },
    images: [
      "https://avs-my-portfolio.s3.ap-south-1.amazonaws.com/VEditor/284602263-b2f4d606-b905-4656-8adb-a162435b18d4.png",
    ],
  },
];
