# UX/UI Designer Portfolio


A clean, single-page **React + Vite + TailwindCSS** portfolio site designed to showcase UX/UI design projects, prototypes, and web work. It focuses on clarity, responsiveness, and quick access to project details like live demos, repositories, and Figma files.


---


## ✨ Features
- Built with **React + Vite** for speed and simplicity.
- Styled using **TailwindCSS** for rapid design iteration.
- Easy to update: all projects are managed in one file (`src/data/projects.js`).
- Fully responsive layout optimized for desktop and mobile.
- Smooth scroll navigation between sections (Hero, About, Projects, Contact).


---


## 🧩 Structure
```
src/
components/
Hero.jsx
About.jsx
ProjectCard.jsx
Projects.jsx
Contact.jsx
data/
projects.js
App.jsx
main.jsx
```


---


## 🚀 Getting Started


1. **Clone the repository:**
```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
```


2. **Install dependencies:**
```bash
npm install
```


3. **Run locally:**
```bash
npm run dev
```


4. **Build for production:**
```bash
npm run build
```


5. **Deploy on Cloudflare Pages:**
- Connect your GitHub repository.
- Set build command to `npm run build`.
- Output directory: `dist`.


---


## 🖼 Adding Projects
Edit `src/data/projects.js` and add your projects as objects:


```js
export const projects = [
{
title: "E-Commerce UI",
description: "A responsive shopping site prototype built in Figma and React.",
image: "/images/ecommerce.png",
tags: ["Figma", "React"],
links: {
live: "https://example.com",
repo: "https://github.com/you/ecommerce",
figma: "https://figma.com/file/xyz",
},
},
MIT License © YOUR_NAME