import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "CRM Dashboard",
    description: "A client relationship management tool built with React and Firebase.",
    tech: ["React", "Firebase", "Tailwind"],
    link: "https://github.com/your-username/crm-dashboard"
  },
  {
    title: "IoT Gas Sensor UI",
    description: "Live dashboard for gas sensor data using Vite + Firebase.",
    tech: ["React", "Framer Motion", "Firebase"],
    link: "https://github.com/your-username/gas-sensor-ui"
  },
  {
    title: "Job Apply Automation",
    description: "Tool to auto-apply jobs by parsing resume and scraping job sites.",
    tech: ["Node.js", "Puppeteer", "React"],
    link: "https://github.com/your-username/job-apply-bot"
  }
];

const Projects = () => {
   
  return (
    <div className="min-h-screen border-2 !py-10 !px-6">
      <h2 className="text-3xl font-bold text-center text-white !mb-10">My Projects</h2>
      <div className="grid bg-white border-2 gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {projects.map((project, index) => {
         return <ProjectCard key={index} {...project} />
         
})}
      </div>
    </div>
  );
};

export default Projects;
