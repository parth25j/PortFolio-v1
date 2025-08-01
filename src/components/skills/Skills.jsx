// import React from 'react'
// import {content} from './SkillsContent'
// import { motion, useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { Database, Palette, Settings } from 'lucide-react';



// const SkillBar = ({ index, categoryIndex }) => {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true, amount: 0.3 });
  
//     return (
//       <motion.div
//         ref={ref}
//         initial={{ opacity: 0, x: -30 }}
//         animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
//         transition={{ duration: 0.5, delay: categoryIndex * 0.1 + index * 0.1 }}
//         className="!mb-4"
//       >
//         <div className="flex justify-between items-center !mb-2">
//           <span className="t text-black font-medium">{content.name}</span>
//           <span className="text-muted-foreground text-sm">{content.level}%</span>
//         </div>
//         <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
//           <motion.div
//             initial={{ width: 0 }}
//             animate={isInView ? { width: `${content.level}%` } : { width: 0 }}
//             transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.1 + 0.3 }}
//             className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
//           />
//         </div>
//       </motion.div>
//     );
//   };

//   const SkillCategory = ({ category, index }) => {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true, amount: 0.2 });
//     const IconComponent = category.icon;
  
//     return (
//       <motion.div
//         ref={ref}
//         initial={{ opacity: 0, y: 50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//         transition={{ duration: 0.6, delay: index * 0.2 }}
//         whileHover={{ y: -5 }}
//         className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg !p-6 shadow-elevation hover:shadow-glow hover:border-primary/30 transition-all duration-300"
//       >
//         <div className="flex items-center gap-3 !mb-6">
//           <motion.div
//             initial={{ scale: 0, rotate: -180 }}
//             animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
//             transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
//             className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
//           >
//             <IconComponent className="w-6 h-6 text-black" />
//           </motion.div>
//           <h3 className="text-xl font-bold ">{category.title}</h3>
//         </div>
        
//         <div className="space-y-4">
//           {/* {content.skills.map((skill, skillIndex) => (
//             <SkillBar 
//               key={skill.name} 
//               skill={skill} 
//               index={skillIndex} 
//               categoryIndex={index}
//             />
//           ))} */}

        
// <div className="space-y-4">
//   {category.skills.map((skill, skillIndex) => (
//     <SkillBar
//       key={skill.name}
//       skill={skill}
//       index={skillIndex}
//       categoryIndex={index}
//     />
//   ))}
// </div>
//         </div>
//       </motion.div>
//     );
//   };
  


// const Skills = () => {
//     const headerRef = useRef(null);
//     const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
//   return (
//     <section className="!py-20 !px-4 max-w-6xl !mx-auto">
//     {/* Section Header */}
//     <motion.div
//       ref={headerRef}
//       initial={{ opacity: 0, y: 30 }}
//       animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//       transition={{ duration: 0.6 }}
//       className="text-center !mb-16"
//     >
//       <h2 className="text-4xl md:text-5xl font-bold !mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//         Skills & Expertise
//       </h2>
//       <motion.div
//         initial={{ width: 0 }}
//         animate={isHeaderInView ? { width: '100%' } : { width: 0 }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//         className="h-1 bg-gradient-to-r from-primary to-accent rounded-full max-w-24 !mx-auto !mb-6"
//       />
//       <p className="text-lg text-muted-foreground max-w-2xl !mx-auto leading-relaxed">
//         A comprehensive overview of my technical skills and proficiency levels 
//         across various technologies and development areas.
//       </p>
//     </motion.div>

//     {/* Skills Grid */}
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//     {content.map((category, index) => (
//         <SkillCategory
//           key={category.id}
//           category={category}
//           index={index}
//         />
//       ))}
//     </div>
//   </section>
//   )
// }


// const SkillsSection = () => {
//     const headerRef = useRef(null);
//     const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
  
//     return (
//       <section className="py-20 px-4 max-w-6xl mx-auto">
//         {/* Section Header */}
//         <motion.div
//           ref={headerRef}
//           initial={{ opacity: 0, y: 30 }}
//           animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//             Skills & Expertise
//           </h2>
//           <motion.div
//             initial={{ width: 0 }}
//             animate={isHeaderInView ? { width: '100%' } : { width: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="h-1 bg-gradient-to-r from-primary to-accent rounded-full max-w-24 mx-auto mb-6"
//           />
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//             A comprehensive overview of my technical skills and proficiency levels 
//             across various technologies and development areas.
//           </p>
//         </motion.div>
  
//         {/* Skills Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {skillCategories.map((category, index) => (
//             <SkillCategory
//               key={category.id}
//               category={category}
//               index={index}
//             />
//           ))}
//         </div>
//       </section>
//     );
//   };

// export default Skills






import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Palette, Settings } from 'lucide-react';

const skillCategories = [
  {
    id: 1,
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React", level: 80 },
      { name: "JavaScript", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Next.js", level: 80 },

    ]
  },
  {
    id: 2,
    title: "Backend Development",
    icon: Database,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "MySQL", level: 65 }
    ]
  },
  {
    id: 3,
    title: "Design & UI/UX",
    icon: Palette,
    skills: [
      { name: "Figma", level: 50 },
      { name: "Framer Motion", level: 65 },
      { name: "CSS Animations", level: 60 },
      { name: "Responsive Design", level: 95 }
    ]
  },
  {
    id: 4,
    title: "Tools & Technologies",
    icon: Settings,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "AWS", level: 65 },
      { name: "Jest", level: 75 },
      { name: "Webpack", level: 70 }
    ]
  }
];

const SkillBar = ({ skill, index, categoryIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + index * 0.1 }}
      className="!mb-4"
    >
      <div className="flex justify-between items-center !mb-2">
        <span className="text-foreground font-medium">{skill.name}</span>
        <span className="text-black text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.1 + 0.3 }}
          className="h-full bg-gradient-to-r from-yellow-300 to-accent rounded-full"
        />
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ category, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const IconComponent = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -5 }}
      className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg p-6 shadow-elevation hover:shadow-glow hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-center gap-3 !mb-6">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"
        >
          <IconComponent className="w-6 h-6 text-primary" />
        </motion.div>
        <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
      </div>
      
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar 
            key={skill.name} 
            skill={skill} 
            index={skillIndex} 
            categoryIndex={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  return (
    <section className="!py-20 !px-4 max-w-6xl !mx-auto" id='skills'>
      {/* Section Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center !mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold !mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <motion.div
          initial={{ width: 0 }}
          animate={isHeaderInView ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-primary to-accent rounded-full max-w-24 !mx-auto !mb-6"
        />
        <p className="text-lg text-muted-foreground max-w-2xl !mx-auto leading-relaxed">
          A comprehensive overview of my technical skills and proficiency levels 
          across various technologies and development areas.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={category.id}
            category={category}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;