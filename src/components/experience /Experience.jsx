import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { content } from "./ExperienceContent";

const ExperienceCard = ({ experience = content, index, side }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-zinc-900 border border-zinc-700 !p-6 rounded-2xl shadow-md w-full md:w-1/2 !mx-auto !my-6 z-0"
    >
      <h3 className="text-xl font-semibold text-white !mb-2">
        {experience.title}
      </h3>

      <p className="text-sm text-gray-400 italic !mb-1">{experience.date}</p>

      <p className="text-sm text-gray-300 !mb-2">
        <span className="font-semibold text-white">Tech Stack:</span>{" "}
        {experience.techStack}
      </p>

      <p className="text-gray-300 leading-relaxed">{experience.discription}</p>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  return (
    <section className="!py-20 !px-4 sm:!px-6 md:!px-8 max-w-6xl !mx-auto z-0 " id="experience">
      {/* Section Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center !mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold !mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Work Experience
        </h2>
        <motion.div
          initial={{ width: 0 }}
          animate={isHeaderInView ? { width: "100%" } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-primary to-accent rounded-full max-w-24 !mx-auto !mb-6"
        />
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl !mx-auto leading-relaxed">
          A journey through my professional development, showcasing the roles
          and responsibilities that have shaped my expertise in modern web
          development.
        </p>
      </motion.div>

      {/* Timeline Grid */}
      <div className="relative lg:grid  gap-12 z-0">
        {/* Vertical line */}
        <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-border -translate-x-1/2" />

        {content.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            index={index}
            side={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
