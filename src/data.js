import {
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Github,
  Globe2,
  Layers3,
  LayoutTemplate,
  Server,
  Settings2,
  ShieldCheck,
  Terminal,
  Workflow,
} from 'lucide-react'
import skillForgeImage from './assets/projects/Screenshot 2026-10-30 094830.png'
import votingSystemImage from './assets/projects/Screenshot 2026-10-30 094908.png'
import worldRecipeImage from './assets/projects/Screenshot 2026-10-30 094954.png'
import birdShooterImage from './assets/projects/Screenshot 2026-10-30 094715.png'
import calculatorImage from './assets/projects/Screenshot 2026-10-30 095041.png'

export const navItems = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Experience', 'experience'],
  ['Education', 'education'],
  ['Contact', 'contact'],
]

export const profile = {
  name: 'Manisha Pabolta',
  role: 'Full Stack Developer',
  studentLine: '3rd Year BCA Student',
  email: 'manishapabolta24@navgurukul.org',
  github: 'https://github.com/manishapabolta',
  linkedin: 'https://www.linkedin.com/in/manisha-pabolta2413/',
  resumeHref: 'https://drive.google.com/file/d/1J5CjIbc7Ph1KQXKmMoHCjq1KVhGPyQB9/view?usp=sharing',
}

export const skills = [
  { name: 'HTML', level: 94, icon: LayoutTemplate, color: '#f97316' },
  { name: 'CSS', level: 91, icon: Layers3, color: '#38bdf8' },
  { name: 'JavaScript', level: 95, icon: Braces, color: '#facc15' },
  { name: 'React.js', level: 90, icon: Code2, color: '#61dafb' },
  { name: 'Node.js', level: 84, icon: Server, color: '#86efac' },
  { name: 'Express.js', level: 82, icon: Workflow, color: '#cbd5e1' },
  { name: 'MongoDB', level: 79, icon: Database, color: '#4ade80' },
  { name: 'SQL', level: 77, icon: Database, color: '#60a5fa' },
  { name: 'REST APIs', level: 86, icon: Globe2, color: '#a78bfa' },
  { name: 'Git', level: 87, icon: GitBranch, color: '#fb7185' },
  { name: 'GitHub', level: 85, icon: Github, color: '#f8fafc' },
  { name: 'Docker', level: 69, icon: Terminal, color: '#38bdf8' },
  { name: 'AWS', level: 64, icon: Cloud, color: '#fb923c' },
  { name: 'TypeScript', level: 50, icon: Settings2, color: '#60a5fa' },
]

export const projects = [
  {
    number: '01',
    title: 'SkillForge',
    image: skillForgeImage,
    eyebrow: 'Learning platform',
    description:
      'A role-based learning platform built to turn ambitious learning paths into measurable progress and clearer everyday momentum.',
    tags: ['React', 'Node.js', 'MongoDB'],
    accent: '#6d7cff',
    icon: ShieldCheck,
    features: [
      'Role-based learning paths for focused growth',
      'Progress tracking and cleaner learning flow',
      'Responsive UI designed for everyday learners',
    ],
    github: null,
    live: null,
  },
  {
    number: '02',
    title: 'Online Voting System',
    image: votingSystemImage,
    eyebrow: 'Civic technology',
    description:
      'A secure, accessible voting experience with authentication, election logic, candidate management and admin workflows.',
    tags: ['React', 'Express', 'Socket.io'],
    accent: '#a855f7',
    icon: Globe2,
    features: [
      'Protected admin and voter flows',
      'Live election state and candidate management',
      'Accessible interface for a smoother decision process',
    ],
    github: null,
    live: null,
  },
  {
    number: '03',
    title: 'World Recipe App',
    image: worldRecipeImage,
    eyebrow: 'Discovery experience',
    description:
      'A food discovery app that helps users browse recipes by country, category and search preferences with a clean visual interface.',
    tags: ['React', 'Vite', 'TheMealDB API'],
    accent: '#22d3ee',
    icon: Layers3,
    features: [
      'Country and category browsing',
      'Fast search and recipe discovery',
      'Responsive layouts with tidy ingredient views',
    ],
    github: null,
    live: null,
  },
  {
    number: '04',
    title: 'Bird Shooter',
    image: birdShooterImage,
    eyebrow: 'Canvas game',
    description:
      'A responsive browser game built around animation loops, collision detection, power-ups and sound-driven action.',
    tags: ['JavaScript', 'Canvas API'],
    accent: '#fb7185',
    icon: Code2,
    features: [
      'Dynamic animation loops and scoring logic',
      'Keyboard and pointer-friendly gameplay',
      'Polished effects and responsive difficulty tuning',
    ],
    github: null,
    live: null,
  },
  {
    number: '05',
    title: 'Advanced Calculator',
    image: calculatorImage,
    eyebrow: 'Utility product',
    description:
      'A clean scientific calculator with trigonometric functions and a keyboard-friendly interface designed to feel reliable.',
    tags: ['JavaScript', 'UI systems'],
    accent: '#f59e0b',
    icon: Terminal,
    features: [
      'Scientific operation support',
      'Structured keyboard interactions',
      'Readable UI for fast calculations',
    ],
    github: null,
    live: null,
  },
   {
    number: '06',
    title: 'FitnessPro AI',
    eyebrow: 'Fitness & wellness',
    description:
      'Fitness AI is a responsive fitness and wellness web application designed to help users manage their workouts, diet, and fitness activities in one place.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    accent: '#fb7185',
    icon: Code2,
    features: [
      '- 🔐 User Login & Signup',
'- 👤 User Profile',
'- 📊 Fitness Dashboard',
'- 🏋️ Workout Section',
'- 🥗 Diet & Nutrition Section',
'- 🤖 Fitness AI Concept',
'- 📱 Responsive Design',
'- 🎨 Clean and User-Friendly Interface',
'- 🔄 Interactive JavaScript Functionality',
    ],
    github:"https://github.com/ManishaPabolta/fitness-AI-",
    live:"https://manishapabolta.github.io/fitness-AI-/",
  },
]

export const experiences = [
  {
    date: '2026 — 2026',
    role: 'Full Stack Developer Intern',
    company: 'Hex Softwares',
    text: 'Building responsive products and REST APIs with React, Node.js, Express.js and MongoDB while learning to balance product polish and maintainable systems.',
  },
  {
    date: '2026 — 2026',
    role: 'Full Stack Developer Intern',
    company: 'Crixsoft Solution',
    text: 'Shipped responsive web applications and dependable API integrations across the product surface, improving product quality and implementation speed.',
  },
]

export const certifications = [
  { name: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2024' },
  { name: 'Frontend Development', issuer: 'Coursera', year: '2024' },
  { name: 'JavaScript Algorithms', issuer: 'freeCodeCamp', year: '2024' },
]
