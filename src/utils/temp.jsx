import React from "react";
import { Code2, Database, ImageIcon, Layout, Server } from "lucide-react";
import feedantsIcon from "../../src/assets/dark_theme_logo.png";
import devbumbleIcon from "../../src/assets/devBumble.png";
import cinemaGptIcon from "../../src/assets/main-logo-white-transparent.svg";
import cyberiumIcon from "../../src/assets/cyberiums_logo.jpg";
import binatedIcon from "../../src/assets/binated.png";
import { ImageIconComponent } from "./helper";



export const projects = [
  {
    id: "1",
    icon: <ImageIconComponent src={feedantsIcon}/>,
    title: "Feedants",
    link: "https://feedants.com",
    summary:
      "A skill-oriented competition and social media platform where users participate in contests, submit entries, and get judged by experts.",

    techStack: [
      "React",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "FFmpeg"
    ],

    details: {
      frontend: {
        github: "https://github.com",
        points: [
          "Implemented reusable component libraries using Tailwind CSS with Hooks and Context API for consistent UI",
          "Built responsive and cross-browser compatible UI across devices",
          "Developed the competition dashboard with React.js for event and submission management",
          "Integrated RESTful APIs with Axios enabling secure JWT based authentication and data flow"
        ]
      },

      backend: {
        github: "https://github.com",
        points: [
          "Designed modular API architecture for event listings, submissions, judge reviews and result declarations",
          "Built scalable backend services using Node.js and Express",
          "Implemented JWT authentication and secure role-based access control",
          "Handled real-time dashboard updates and analytics processing"
        ]
      },

      mobile: {
        github: "https://github.com",
        points: [
          "Developed judge panel mobile application using React Native",
          "Optimized mobile performance for submission reviews and scoring",
          "Implemented secure authentication and seamless API integrations",
          "Ensured consistent UI/UX across Android and iOS platforms"
        ]
      }
    }
  },

  {
    id: "2",
    icon: <ImageIconComponent src={devbumbleIcon}/>,
    title: "Dev Bumble",
    link: "https://github.com/utkaarsh/devBumble-backend",
    summary:
      "A developer social connection platform enabling users to discover, connect and chat in real-time with other developers.",

    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "WebSockets",
      "Socket.io",
      "AWS EC2",
      "JWT"
    ],

    details: {
      backend: {
        github: "https://github.com",
        points: [
          "Set up the backend architecture from scratch using Node.js, Express and MongoDB",
          "Designed RESTful APIs and routing system with scalable service architecture",
          "Implemented secure authentication using JWT and password encryption",
          "Built a real-time chat system using WebSockets and Socket.io with dynamic room management",
          "Optimized feed performance using pagination and MongoDB compound indexes"
        ]
      },

      devops: {
        github: "https://github.com",
        points: [
          "Deployed production environment using AWS EC2",
          "Configured custom domain and SSL certificates",
          "Managed scalable infrastructure and API availability"
        ]
      }
    }
  },

  {
    id: "3",
    icon: <ImageIconComponent src={cinemaGptIcon}/>,
    title: "Cinema GPT",
    link: "https://github.com/utkaarsh/cinema-gpt",
    summary:
      "A movie recommendation web app powered by Gemini AI that provides intelligent movie suggestions and search.",

    techStack: [
      "React",
      "Redux Toolkit",
      "Firebase",
      "Gemini API",
      "Formik",
      "Tailwind CSS"
    ],

    details: {
      frontend: {
        github: "https://github.com",
        points: [
          "Built a responsive React application with mobile-first design principles",
          "Used Redux Toolkit for efficient state management and predictable data flow",
          "Integrated Gemini AI API to power GPT based movie search and recommendations",
          "Implemented form validation and UI state management using Formik",
          "Designed responsive UI components optimized for mobile and desktop"
        ]
      },

      backend: {
        github: "https://github.com",
        points: [
          "Integrated Firebase authentication for signup, login and logout flows",
          "Connected Gemini developer API to process user movie queries",
          "Managed secure API communication between frontend and AI services"
        ]
      }
    }
  }
];

export const experienceData = [
  {
    title: "Binated",
    location: "Pune",
    startDate: "July 2025",
    endDate: "Present",
    designation: "Software Developer",
    description: `Architected a collaborative proofing and annotation platform using React,
designing modular, reusable, and scalable frontend components integrated
with REST APIs.
Led development of a deep-zoom image annotation interface using
OpenSeadragon and Annotorious, implementing synchronized compare
views and responsive UI patterns for complex user interactions.
Implemented workflow-driven permission guards and full annotation
lifecycle management (create/update/delete) with UI-to-server
reconciliation, ensuring reliable multi-user collaboration and data
consistency.
Delivered a high-impact product enhancement that improved collaboration
efficiency and accelerated client approval cycles, contributing to a 30%
increase in company revenue.
Improved application performance by optimizing React rendering with
memoization, efficient state updates, and lazy loading..

`,
    link: "https://www.binated.com",
    icon: binatedIcon,
  },
  {
    title: "Blaccsckull Platforms Pvt Ltd",
    location: "Pune",
    startDate: "Mar 2024",
    endDate: "Mar 2025",
    designation: "Software Development Engineer",
    description: ` Led front-end architecture in React Js, implementing reusable components, reducing tech debt, and enhancing UX consistency.
Developed and maintained scalable RESTful APIs in Node JS, enabling seamless integration between front-end and backend  services, and supporting features like dynamic filtering, authentication, and analytics.
Enhanced mobile application and backend functionalities using React Native and Node Js, driving app downloads from 500 to over 10K.Optimized database queries and implemented pagination to reduce API response times by 25%.Conducted thorough code reviews to ensure adherence to high-quality coding standards.
`,
    link: "https://www.linkedin.com/company/blaccsckull-platform-private-limited/about/",
    icon: feedantsIcon,
  },
  {
    title: "Cyberium",
    location: "Pune",
    startDate: "Sept 2022",
    endDate: "Apr 2023",
    designation: "Web Developer",
    description: `Partnered with designers and architects to shape front-end component APIs and responsive layouts, creating modular  React libraries that delivered secure, reusable, and scalable UI patterns.Built and optimized frontend integrations with RESTful APIs, enabling dynamic data flows and improving application security and accessibility.Drove Agile sprints by delivering features on schedule, improving team velocity and overall productivity by 40%
`,
    link: "https://www.linkedin.com/company/cyberiums/",
    icon: cyberiumIcon,
  },
];

export const skills = [
  {
    title: "React.js",
    subtitle: "Frontend library for building UI",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  {
    title: "React Native",
    subtitle: "Cross-platform mobile app development",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  {
    title: "Node.js",
    subtitle: "JavaScript runtime for backend services",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
  },
  {
    title: "Express.js",
    subtitle: "Minimal backend framework for Node.js",
    skillIcon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR-o387HjdP1tur_1CMjSACuTxAlWoXdvmJw&s",
  },
  {
    title: "JavaScript (ES6+)",
    subtitle: "Modern JavaScript language features",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
  },
  {
    title: "SQL",
    subtitle: "Relational database querying language",
    skillIcon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQc8a_3aix3m_fOzVhaMnuGbfFkgNKt8YBzQ&s",
  },
  {
    title: "HTML5",
    subtitle: "Semantic markup for web structure",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  },
  {
    title: "CSS3",
    subtitle: "Styling and layout for web applications",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
  },
  {
    title: "Tailwind CSS",
    subtitle: "Utility-first CSS framework",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
  },
  {
    title: "AWS",
    subtitle: "Cloud services (EC2, S3, SES)",
    skillIcon:
      "https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg",
  },
  {
    title: "Git",
    subtitle: "Version control system",
    skillIcon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHwO5S7ELqBdjC4yNMGhFGCXXKu7fZwRcg6A&s",
  },
  {
    title: "GitHub",
    subtitle: "Code hosting & collaboration platform",
    skillIcon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGg2RJvvrzmUi4BXEWzpEwLc2XkJndppcgQ&s",
  },
  {
    title: "Typescript",
    subtitle: "A subset of Javascript",
    skillIcon:
      "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
  },
  {
    title: "Laravel",
    subtitle: "A PHP Framework",
    skillIcon:
      "https://cdn.flyonui.com/fy-assets/icons/laravel-icon.png",
  },
];

export const skillTools = [
  {
    title: "Redux",
    subtitle: "State management for complex React apps",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/redux.svg",
  },
  {
    title: "Context API",
    subtitle: "Built-in state sharing for React",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  {
    title: "Webpack",
    subtitle: "Module bundler for modern web apps",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/webpack-icon.svg",
  },
  {
    title: "Vite",
    subtitle: "Fast frontend build tool and dev server",
    skillIcon: "https://vitejs.dev/logo.svg",
  },
  {
    title: "Babel",
    subtitle: "JavaScript compiler for compatibility",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/babel-10.svg",
  },
  {
    title: "JWT Authentication",
    subtitle: "Secure token-based authentication",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg",
  },
  {
    title: "Postman",
    subtitle: "API testing and debugging tool",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/postman.svg",
  },
  {
    title: "MongoDB",
    subtitle: "NoSQL document database",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  {
    title: "Axios",
    subtitle: "Promise-based HTTP client",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/axios.svg",
  },
  {
    title: "Web Sockets",
    subtitle: "Real-time bidirectional communication",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/socket-io.svg",
  },
  {
    title: "MySQL",
    subtitle: "Relational database management system",
    skillIcon: "https://www.fullstackpython.com/img/logos/mysql.png",
  },
  {
    title: "Jira",
    subtitle: "Agile project and issue tracking",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/jira-1.svg",
  },
  {
    title: "Chrome DevTools",
    subtitle: "Browser debugging and performance analysis",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/google-chrome.svg",
  },
  {
    title: "Webhooks",
    subtitle: "Event-driven backend integrations",
    skillIcon: "https://files.cdn.prismic.io/files/f4b68c81-d6f9-4f2b-855e-aac0c168eff2_webhooks-logo-png-transparent.svg?fit=max&w=3840",
  },
  {
    title: "NPM",
    subtitle: "JavaScript package management",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/npm-square-red-1.svg",
  },
  {
    title: "Jest",
    subtitle: "Automated testing for JavaScript apps",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/jest-2.svg",
  },
];