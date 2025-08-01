import { Code } from "lucide-react";
import { Database, Palette, Settings } from 'lucide-react';
const content = [
    {
      id: 1,
      title: "Frontend Development",
      icon: Code,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      id: 2,
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "GraphQL", level: 65 }
      ]
    },
    {
      id: 3,
      title: "Design & UI/UX",
      icon: Palette,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 80 },
        { name: "Framer Motion", level: 85 },
        { name: "CSS Animations", level: 80 },
        { name: "Responsive Design", level: 95 }
      ]
    },
    {
      id: 4,
      title: "Tools & Technologies",
      icon: Settings,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Jest", level: 75 },
        { name: "Webpack", level: 70 }
      ]
    }
  ];
  export {content} 