import project1 from "./assets/img/mock-1.png";
import project2 from "./assets/img/mock-2.png";
import project3 from "./assets/img/mock-3.png";
import project4 from "./assets/img/mock-4.png";
import project5 from "./assets/img/mock-5.png";
import project6 from "./assets/img/mock-6.png";

import physics from "./assets/img/physics.svg";
import githubIcon from "./assets/img/github.svg";
import api from "./assets/img/api.svg";
import ui from "./assets/img/ui.svg";
import figma from "./assets/img/figma.svg";
import html from "./assets/img/html.svg";
import css from "./assets/img/css.svg";
import gsap from "./assets/img/gsap.svg";


import certificate1 from "./assets/certificates/certificate1.png";
import certificate2 from "./assets/certificates/certificate2.png";
import certificate3 from "./assets/certificates/certificate3.png";
import certificate4 from "./assets/certificates/certificate4.png";

// ===== Проекты =====
export const projects = [
  {
    title: "Recipe App",
    description:
      "React web app for searching recipes by keywords (ingredients or dish name) using the Edamam Recipe API.",
    imgUrl: project1,
    tags: ["React", "Edamam Recipe API", "JavaScript (ES6+)", "CSS"],
    github: "https://github.com/91Helen/recipe-for-netlify",
    netlify: "https://recipe-portfolio-my-project.netlify.app/",
  },
  {
    title: "Nutrition Analysis App",
    description:
      "The app uses the Edamam Recipe API and displays a list of recipes with calories, images, and ingredients.",
    imgUrl: project2,
    tags: ["React", "JavaScript (ES6+)", "API Ninjas Nutrition", "CSS"],
    github: "https://github.com/91Helen/api-ninjas-mine",
    netlify: "https://nutrition-analysis-ninjas.netlify.app/",
  },
  {
    title: "Weekly Meal Plan Ideas",
    description:
      "The app allows users to create, update, and manage weekly meal plans with ingredients. An example of building an interactive, user-friendly interface with real-world use cases.",
    imgUrl: project3,
    tags: ["React", "Hooks", "LocalStorage", "UI library", "uuid", "Git + GitHub"],
    github: "https://github.com/91Helen/meal-plan-thirteen",
    netlify: "https://weekly-meal-plan-ideas-project.netlify.app/",
  },
  {
    title: "Online Clothing Store",
    description:
      "An online clothing store with category filtering (Dresses, Pants, Skirts, Shoes, Shirts).",
    imgUrl: project4,
    tags: ["React", "JavaScript (ES6+)", "CSS", "Git + GitHub", "SweetAlert2"],
    github: "https://github.com/91Helen/seventh-module-store-for-portfolio",
    netlify: "https://online-store-filtering-project.netlify.app/",
  },
  {
    title: "Speech therapy center FENIKS",
    description: "A responsive, modern landing page for a speech therapy center.",
    imgUrl: project5,
    tags: ["JavaScript (ES6+)", "CSS", "Git + GitHub", "SEO", "AOS + GSAP"],
    github: "https://github.com/91Helen/feniks-logoped",
    netlify: "https://feniks-logo.kz/",
  },
  {
    title: "Psychologist Landing Page",
    description: "Ready, fully functional, responsive Psychologist Landing Page.",
    imgUrl: project6,
    tags: ["JavaScript (ES6+)", "SEO", "CSS", "GSAP", "Swiper.js slider"],
    github: "https://github.com/91Helen/Psychologist-landing-page",
    netlify: "https://psycholog-aliya.kz/",
  },
];

// ===== Скиллы =====
export const skillsData = [
  { img: physics, title: "React Js" },
  { img: githubIcon, title: "Git/GitHub" },
  { img: api, title: "API/Fetch/Axios" },
  { img: physics, title: "React Hooks" },
  { img: ui, title: "UI" }, 
  { img: figma, title: "FIGMA" },
  { img: html, title: "HTML" },
  { img: css, title: "CSS" },
  { img: gsap, title: "GSAP" },

];

// ===== Сертификаты =====
export const certificates = [
  { img: certificate1, title: "Certificate 1" },
  { img: certificate2, title: "Certificate 2" },
  { img: certificate3, title: "Certificate 3" },
  { img: certificate4, title: "Certificate 4" },
];
