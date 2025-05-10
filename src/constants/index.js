
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    lockheed,
    arka,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Fullstack Developer",
      icon: web,
    },
    {
      title: "AI/ML Engineer",
      icon: mobile,
    },
    {
      title: "HPC Engineer",
      icon: creator,
    },
    {
      title: "Quantum Computing",
      icon: backend,
    },
  ];
  
  const technologies = [

    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "AI/ML Intern",
      company_name: "Lockheed Martin",
      icon: lockheed,
      iconBg: "#383E56",
      date: "May 2022 - August 2022",
      points: [
        "Developed Computer Vision Model that utilized satellite images to determine fire hazards in the case of wildfires",
        "Finetuned ImageNet to achieve a 91% accuracy.",
        "Achieved 1st place in Lockheed Martin's AI/ML competition.",
      ],
    },
    {
      title: "HPC Engineer",
      company_name: "Lockheed Martin",
      icon: lockheed,
      iconBg: "#383E56",
      date: "June 2023 - March 2025",
      points: [
        "Developing and maintaining real time/multi processing applications using OpenMPI, C++, and Cuda",
        "Collaborating with cross-functional teams including system engineers, product managers, and other developers to create high-quality products.",
        "Wrote test tools in C++ to mimic real time conditions and validate software",
        "Wrote post analysis scripts in Python to validate hundreds of gigabytes of real time data during software demo.",
      ],
    },
    {
      title: "Senior AI/ML Engineer",
      company_name: "ARKA Group",
      icon: arka,
      iconBg: "#383E56",
      date: "April 2025 - Present",
      points: [
        "Developing Computer Vision models to reduce false positives generated in detection models(Yolo, DETR, etc).",
        "Implemented Graph Neural Networks with PyGeo (SageConv, GATv2, etc)",
        "Incorporated ResNet feature maps to improve model performance",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };