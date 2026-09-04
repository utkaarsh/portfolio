import React from "react";
import { Code2, Database, ImageIcon, Layout, Server } from "lucide-react";
import feedantsIcon from "../../src/assets/dark_theme_logo.png";
import devbumbleIcon from "../../src/assets/devBumble.png";
import cinemaGptIcon from "../../src/assets/main-logo-white-transparent.svg";
import cyberiumIcon from "../../src/assets/cyberiums_logo.jpg";
import binatedIcon from "../../src/assets/binated.png";
import imgd1 from "../../src/assets/devBumble/img1.jpeg";
import imgd2 from "../../src/assets/devBumble/img2.jpeg";
import imgd3 from "../../src/assets/devBumble/img3.jpeg";
import imgd4 from "../../src/assets/devBumble/img4.jpeg";
import imgd5 from "../../src/assets/devBumble/img5.jpeg";
import imgc1 from "../../src/assets/cinema-gpt/image1.png";
import imgc2 from "../../src/assets/cinema-gpt/image2.png";
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
      "Node JS",
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
          "Built scalable backend services using Node JS and Express with MongoDB for flexible, document-based data modeling",
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
    link: "https://expo.dev/accounts/utkaarsh/projects/DevBumble/builds/64e4de0e-4d38-478b-b665-c2b04802366d",
    summary:
      "Built a cross-platform social networking application with Expo and React Native. Implemented real-time messaging with Socket.IO, swipe-based profile discovery with paginated data loading, persistent authentication, location synchronization, and Expo push notifications with backend device-token registration. Used React Navigation, Redux Toolkit, TanStack React Query, AsyncStorage, and NativeWind",

    techStack: [
      "React",
      "Node JS",
      "Express",
      "MongoDB",
      "WebSockets",
      "Socket.io",
      "Tailwind CSS",
      "AWS EC2",
      "JWT",
    ],
    images: [imgd5, imgd2, imgd3, imgd4, imgd1],
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
          "Designed and integrated a real-time notification pipeline using FCM, Expo Notifications, Socket IO, and Node Js, handling device registration, token persistence, push delivery, notification state, and real-time in-app updates.",
        ],
      },

      backend: {
        github: "https://github.com",
        points: [
          "Set up the backend architecture from scratch using Node JS, Express and MongoDB",
          "Designed RESTful APIs and routing system with scalable service architecture",
          "Implemented secure authentication using JWT and password encryption",
          "Built a real-time chat system using WebSockets and Socket io with dynamic room management",
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
    images: [
      imgc1,
      "https://github.com/utkaarsh/cinema-gpt/raw/main/searchResults.png",
      imgc2,
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
    description: `
    Built the Proofing System from scratch in React and Laravel — architecting a multi-proof annotation platform with side-by-side compare views, polygon/rect annotation tools, per-reviewer approval state tracking, and real-time UI updates without page reloads. This became Binated's hero product in the design-service and promotional industry, directly contributing to a 30% revenue increase and attracting major enterprise clients.
Developed and maintained multiple  SaaS modules including admin dashboards, client portal, and HRMS recruitment pipeline using React Js, RESTful APIs, and reusable component architecture.
Integrated OpenAI APIs and implemented webhook infrastructure for real-time order status notifications to client systems.

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
  //   {
  //     title: "Smart Genesis",
  //     location: "Pune",
  //     startDate: "May 2022",
  //     endDate: "Aug 2022",
  //     designation: "Software Developer Intern",
  //     description: `Contributed to the frontend development of SinghCoin, a Web3 social media platform, using React and Redux, implementing routing, route protection, and scalable global state management.

  // Built core UI features including an NFT marketplace, NFT cards, social feed, and blog system with engagement functionalities such as likes, comments, shares, and reactions.

  // Translated Figma designs into responsive, pixel-perfect React components, ensuring consistent UI/UX across different screen sizes and devices.

  // Developed and integrated RESTful APIs using Node JS and Express for blog interactions, feed filtering, and paginated data handling.`,
  //     link: "",
  //     icon: "https://smartgenesis.io/images/smart-genesis-logo.png",
  //   },
];

export const skills = [
  "React JS",
  "React Native",
  "Node JS",
  "Express JS",
  "JavaScript (ES6+)",
  "SQL",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "AWS (EC2,S3, SES)",
  "Git",
  "GitHub",
  "TypeScript",
  "Laravel",
];
export const skillTools = [
  "Redux",
  "React Query",
  "Context API",
  "Webpack",
  "Vite",
  "Babel",
  "JWT Authentication",
  "Postman",
  "MongoDB",
  "Axios",
  "WebSockets",
  "MySQL",
  "Jira",
  "Chrome DevTools",
  "Webhooks",
  "NPM",
  "Jest",
];
