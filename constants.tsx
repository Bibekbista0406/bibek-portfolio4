import React from 'react';
import { Project, Skill, Service, Testimonial } from './types';
import { CodeIcon, DesignIcon, SecurityIcon, VideoIcon, DumbbellIcon, FullStackIcon } from './components/icons/Icons';

export const BIBEK_INFO = {
  name: "Bibek Bista",
  title: "Full Stack Developer & UI/UX Designer",
  location: "Nepalgunj-4, Banke, Nepal",
  school: "DMV School, 11th Class",
  bio: "I am a highly skilled and ambitious 16-year-old student with a passion for technology and creating innovative solutions. As a freelancer, I specialize in full-stack development, UI/UX design, and even venture into ethical hacking and video editing. My goal is to build amazing digital experiences that are both functional and visually stunning. I am also a dedicated calisthenics athlete, which teaches me discipline and perseverance.",
  resumeUrl: "#", // Placeholder for resume download link
};

export const PROJECTS: Project[] = [
  {
    title: "DCA Course Platform",
    description: "A complete e-learning platform for the Diploma in Computer Application (DCA) course, featuring user authentication, course progression, and video lectures.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveDemo: "#",
    github: "#",
  },
  {
    title: "NYFC NEPALGUNJ",
    description: "A dynamic fitness-based website for a local calisthenics community, including workout routines, member profiles, and event calendars.",
    tags: ["Next.js", "Firebase", "Framer Motion", "UI/UX"],
    liveDemo: "#",
    github: "#",
  },
  {
    title: "AnimeZone",
    description: "A full-featured anime streaming web application with a vast library, search functionality, and user watchlists, built for performance and a great user experience.",
    tags: ["React", "API Integration", "State Management", "CSS Modules"],
    liveDemo: "#",
    github: "#",
  },
];

export const SKILLS: Skill[] = [
  { name: "React", icon: <FullStackIcon /> },
  { name: "Next.js", icon: <FullStackIcon /> },
  { name: "Node.js", icon: <FullStackIcon /> },
  { name: "TypeScript", icon: <CodeIcon /> },
  { name: "JavaScript", icon: <CodeIcon /> },
  { name: "Python", icon: <CodeIcon /> },
  { name: "Tailwind CSS", icon: <DesignIcon /> },
  { name: "Figma", icon: <DesignIcon /> },
  { name: "Ethical Hacking", icon: <SecurityIcon /> },
  { name: "Video Editing", icon: <VideoIcon /> },
  { name: "Calisthenics", icon: <DumbbellIcon /> },
  { name: "UI/UX Design", icon: <DesignIcon /> },
];

export const SERVICES: Service[] = [
    {
        title: "Full Stack Development",
        description: "Building complete, scalable web applications from front-end to back-end with modern technologies.",
        icon: <FullStackIcon className="w-10 h-10 text-sky-400" />
    },
    {
        title: "UI/UX Design",
        description: "Creating intuitive, user-friendly, and visually stunning interfaces that enhance user experience.",
        icon: <DesignIcon className="w-10 h-10 text-sky-400" />
    },
    {
        title: "Cyber Security",
        description: "Providing ethical hacking and security analysis to identify and patch vulnerabilities in systems.",
        icon: <SecurityIcon className="w-10 h-10 text-sky-400" />
    },
    {
        title: "Video Editing",
        description: "Producing high-quality, engaging video content for various platforms and purposes.",
        icon: <VideoIcon className="w-10 h-10 text-sky-400" />
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "Bibek's ability to quickly grasp complex concepts and deliver high-quality code is truly impressive for his age. A future star in the making.",
        author: "Jane Doe",
        company: "Tech Solutions Inc."
    },
    {
        quote: "An incredibly talented and dedicated developer. Bibek delivered a sleek, functional UI/UX design that exceeded all our expectations.",
        author: "John Smith",
        company: "Creative Minds Co."
    },
    {
        quote: "Working with Bibek was a breeze. His professionalism, communication, and technical skills are top-notch. Highly recommended!",
        author: "Emily White",
        company: "Innovate Forward"
    }
];

export const FORMSPREE_URL = "https://formspree.io/f/YOUR_UNIQUE_ID"; // IMPORTANT: Replace with your Formspree form ID

export const SYSTEM_INSTRUCTION = `You are a friendly and professional AI assistant for Bibek Bista's portfolio website. Your purpose is to answer questions about Bibek, his skills, projects, and experience.

Use the following information to answer questions:
- Name: Bibek Bista
- Age: 16 years old
- Grade: 11th Class at DMV School
- Location: Nepalgunj-4, Banke, Nepal
- Roles: Freelancer, Full Stack Developer, UI/UX Designer, Ethical Hacker, Video Editor, Calisthenics Athlete.
- Key Skills: React, Next.js, Node.js, TypeScript, Python, Tailwind CSS, Figma, Ethical Hacking, Video Editing.
- Projects:
  1. DCA Course Platform: An e-learning site for a computer diploma.
  2. NYFC NEPALGUNJ: A fitness community website.
  3. AnimeZone: An anime streaming app.
- Personality: Ambitious, passionate about technology, disciplined, creative.

Guidelines:
- Be concise and helpful.
- If asked a question you cannot answer from the provided information, politely state that you don't have that information but can talk about Bibek's skills and projects.
- Do not make up information.
- Keep the tone futuristic and slightly cyberpunk, in line with the website's theme.
- Do not mention that you are a language model. You are Bibek's personal AI assistant.
`;