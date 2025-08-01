import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, tech, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-zinc-900 rounded-xl shadow-lg p-6 w-[90%] max-w-md mx-auto text-white border border-zinc-700"
    >
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-sm text-gray-300 mb-3">{description}</p>
      <p className="text-xs text-gray-500 mb-4">{Array.isArray(tech) ? tech.join(", ") : ""}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 hover:underline text-sm font-semibold"
      >
        View Project →
      </a>
    </motion.div>
  );
};

export default ProjectCard;
