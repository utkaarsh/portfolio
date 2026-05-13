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
    icon: <ImageIconComponent src={feedantsIcon} />,
    title: "Feedants",
    link: "https://feedants.com",
    summary:
      "A full-stack skill-oriented competition platform where users participate in contests, submit performance entries, get evaluated by expert judges, and compete for top rankings — built across web, mobile, and backend.",

    techStack: [
      "React",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "FFmpeg",
    ],

    details: {
      backend: {
        github: "https://github.com",
        points: [
          "Architected a modular REST API system handling event lifecycle — from listings and submissions to judge reviews and automated result declarations",
          "Built scalable backend services using Node.js and Express with MongoDB for flexible, document-based data modeling",
          "Integrated FFmpeg for server-side video processing, enabling compressed and optimized media submissions at scale",
          "Implemented JWT authentication with role-based access control across performer, judge, and admin roles",
          "Engineered real-time dashboard analytics for live competition tracking and performance insights",
        ],
      },

      mobile: {
        github: "https://github.com",
        points: [
          "Developed a dedicated judge panel mobile application using React Native, optimized for smooth submission reviews and structured scoring workflows",
          "Ensured consistent, responsive UI/UX across both Android and iOS platforms",
          "Integrated RESTful APIs via Axios with secure JWT-based authentication and seamless data flow",
          "Optimized rendering performance for media-heavy submission feeds, reducing load friction for judges",
        ],
      },
    },
  },

  ,
  {
    id: "2",
    icon: <ImageIconComponent src={devbumbleIcon} />,
    title: "Dev Bumble",
    link: "https://web-dev-bumble.vercel.app",
    summary:
      "A full-stack developer social connection platform enabling users to discover, connect, and chat in real-time with other developers — built with a swipe-based feed, rich profiles, and live messaging.",

    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "WebSockets",
      "Socket.io",
      "Tailwind CSS",
      "AWS EC2",
      "JWT",
    ],

    details: {
      // frontend: {
      //   github: "https://github.com",
      //   points: [
      //     "Built a dynamic home feed page with swipe-style like/dislike match interactions, delivering a smooth and intuitive developer discovery experience",
      //     "Developed a profile section allowing users to view and edit their developer profile with real-time form validation and clean UX",
      //     "Implemented a real-time chat interface for matched developers using WebSockets and Socket.io with dynamic room management",
      //     "Architected reusable React components across feed, profile, and chat modules following clean code principles and consistent design patterns",
      //   ],
      // },
      mobile: {
        github: "https://github.com",
        points: [
          "Built DevBumble, a cross-platform developer networking app using React Native and Expo",
          "Implemented authentication, profile discovery, swipe-based matching, and user interaction flows",
          "Integrated REST APIs using Axios with JWT authentication, interceptors, and secure storage via Expo SecureStore",
          "Managed server state with TanStack React Query including pagination, caching, and infinite scrolling",
          "Developed mobile-first UX features such as debounced search, pull-to-refresh, and smooth swipe gestures using Animated and PanResponder",
          "Utilized Expo Location API to handle permissions, fetch user coordinates, and enable location-based discovery",
          "Designed reusable and responsive UI components optimized for performance across devices",
        ],
      },

      backend: {
        github: "https://github.com",
        points: [
          "Set up the backend architecture from scratch using Node.js, Express and MongoDB",
          "Designed RESTful APIs and routing system with scalable service architecture",
          "Implemented secure authentication using JWT and password encryption",
          "Built a real-time chat system using WebSockets and Socket.io with dynamic room management",
          "Optimized feed performance using pagination and MongoDB compound indexes",
        ],
      },

      devops: {
        github: "https://github.com",
        points: [
          "Deployed production environment using AWS EC2",
          "Configured custom domain and SSL certificates",
          "Managed scalable infrastructure and API availability",
        ],
      },
    },
  },

  ,
  {
    id: "3",
    icon: <ImageIconComponent src={cinemaGptIcon} />,
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
      "Tailwind CSS",
    ],

    details: {
      frontend: {
        github: "https://github.com",
        points: [
          "Built a responsive React application with mobile-first design principles",
          "Used Redux Toolkit for efficient state management and predictable data flow",
          "Integrated Gemini AI API to power GPT based movie search and recommendations",
          "Implemented form validation and UI state management using Formik",
          "Designed responsive UI components optimized for mobile and desktop",
        ],
      },

      backend: {
        github: "https://github.com",
        points: [
          "Integrated Firebase authentication for signup, login and logout flows",
          "Connected Gemini developer API to process user movie queries",
          "Managed secure API communication between frontend and AI services",
        ],
      },
    },
  },
];

export const experienceData = [
  {
    title: "Binated",
    location: "Pune",
    startDate: "July 2025",
    endDate: "Mar 2026",
    designation: "Software Developer",
    description: `Owned end-to-end development of a deep-zoom image annotation platform using OpenSeadragon and Annotorious, enabling high-resolution asset review with synchronized compare views and performance-optimized rendering, contributing to a 30% revenue increase.
Engineered a full-cycle recruitment management system, building multi-step application forms with strict data validation using Formik and Yup, and architecting reusable form components that significantly reduced technical debt and improved overall project structure.
Developed an applicant tracking dashboard with real-time analytics across candidate pipeline stages (Invited, Waiting, Hold, Selected), implementing advanced filtering by date range, status, and search to streamline recruiter workflows.
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
    description: ` Led a team of two junior developers in architecting and delivering an end-to-end online dance competition platform, defining the component conventions and custom reusable hooks for REST API integration to ensure consistency and reduce onboarding friction.
Contributed to the development of a React Native mobile application, implementing code splitting and lazy loading to optimize bundle size and enhance user experience, helping scale downloads from 500 to 10,000+ users.
Architected a judging evaluation system with a structured scoring UI, integrating custom algorithms for result computation and a job scheduler for automated winner declaration and real-time push notifications to top 3 performers.
Implemented secure authentication and role-based access control using JWT, protecting API endpoints and enforcing permission-based workflows across performer, judge, and admin roles.
`,
    link: "https://www.linkedin.com/company/blaccsckull-platform-private-limited/about/",
    icon: feedantsIcon,
  },
  {
    title: "Mantrna (formerly Cyberium)",
    location: "Pune",
    startDate: "Sept 2022",
    endDate: "Apr 2023",
    designation: "Web Developer",
    description: `Participated in Agile/Scrum ceremonies including sprint planning and code reviews, maintaining task visibility on Jira.
Translated Figma designs into pixel-perfect React components using Tailwind CSS, ensuring design fidelity and responsive layouts across multiple production projects.
Built a blog feed UI with reusable post card, image gallery, and comment section components in React and TypeScript, following component-driven architecture patterns.
Developed an admin analytics dashboard integrating Recharts and D3 for data visualizations including graphs and charts, contributing to data-driven decision making for internal stakeholders.


`,
    link: "https://www.linkedin.com/company/cyberiums/",
    icon: cyberiumIcon,
  },
  {
    title: "Smart Genesis",
    location: "Pune",
    startDate: "Feb 2022",
    endDate: "Aug 2022",
    designation: "Junior Software Developer",
    description: `Contributed to the frontend development of SinghCoin, a Web3 social media platform, using React and Redux, implementing routing, route protection, and scalable global state management.

Built core UI features including an NFT marketplace, NFT cards, social feed, and blog system with engagement functionalities such as likes, comments, shares, and reactions.

Translated Figma designs into responsive, pixel-perfect React components, ensuring consistent UI/UX across different screen sizes and devices.

Developed and integrated RESTful APIs using Node.js and Express for blog interactions, feed filtering, and paginated data handling.`,
    link: "",
    icon: "https://smartgenesis.io/images/smart-genesis-logo.png",
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
    skillIcon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
  },
  {
    title: "Laravel",
    subtitle: "A PHP Framework",
    skillIcon: "https://cdn.flyonui.com/fy-assets/icons/laravel-icon.png",
  },
];

export const skillTools = [
  {
    title: "Redux",
    subtitle: "State management for complex React apps",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/redux.svg",
  },
  {
    title: "React Query",
    subtitle: "Data fetching and caching for React",
    skillIcon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
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
    skillIcon:
      "https://files.cdn.prismic.io/files/f4b68c81-d6f9-4f2b-855e-aac0c168eff2_webhooks-logo-png-transparent.svg?fit=max&w=3840",
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
