# Manisha Pabolta — Developer Portfolio

A responsive personal portfolio for **Manisha Pabolta**, a Full Stack Developer and BCA student. The site presents selected projects, technical skills, experience, education, and contact links in an interactive single-page experience.

## Features

- Responsive layout for mobile, tablet, and desktop
- Hero, About, Skills, Projects, Experience, Education, and Contact sections
- Animated transitions and scroll-based effects powered by Framer Motion
- Project cards with image previews, technology tags, and project details
- Expandable Skills and Projects lists
- Sound toggle, custom cursor, loading screen, and back-to-top controls
- Profile, resume, project, and social links managed from one data file

## Tech Stack

- React 18
- Vite
- Tailwind CSS and custom CSS
- Framer Motion
- Lucide React

## Getting Started

### Prerequisites

- Node.js and npm

### Install and run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal (typically `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

The production files are generated in the `dist/` directory. `npm run preview` serves that build locally for verification.

## Project Structure

```text
src/
├── assets/projects/   # Project preview images
├── components/        # Shared UI components
├── hooks/             # Reusable interaction hooks
├── sections/          # Portfolio page sections
├── App.jsx            # Main page composition
├── data.js            # Profile, skills, projects, and experience content
└── index.css          # Global styles
```

## Updating Portfolio Content

Edit [`src/data.js`](./src/data.js) to update the profile, skills, project descriptions, links, experience, or certifications.

Project preview images are stored in `src/assets/projects/` and imported at the top of `src/data.js`. To replace a preview, add the new image to that folder and update the corresponding import. Each project can provide an `image` value; projects without one use the built-in icon visual.

## Contact Form

The contact form currently provides a front-end submission confirmation only. Connect it to an email service or backend endpoint before relying on it to deliver messages.
