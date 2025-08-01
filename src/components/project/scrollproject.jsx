"use client"

import { animate, motion, useMotionValue, useMotionValueEvent, useScroll } from "motion/react"
import { useRef, useState } from "react"
import { ExternalLink, Github, Calendar, Code, Database, BarChart, Globe } from "lucide-react"

const projects = [

  {
    id: 1,
    title: "Penny AI Landing Page",
    description: "A responsive landing page for a virtual reality company, showcasing immersive visuals and engaging sections using React and Tailwind CSS.",
    color: "#7c3aed",
    icon: <Globe className="w-6 h-6" />, // Use any relevant icon, e.g., Globe from lucide-react>
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://pennyai.netlify.app/#testimonials", // Replace with actual deployed URL if available
    githubUrl: "https://github.com/your-username/penny-ai-landing", // Replace with your actual GitHub repo
    date: "2025-08-01",
    category: "Frontend",
  },
  {
    id: 2,
    title: "CRM Dashboard (Under Progress)",
    description: "A client relationship management tool built with React and Firebase.",
    color: "#ff0088",
    icon: <BarChart className="w-6 h-6" />,
    tags: ["React", "Firebase", "Tailwind"],
    liveUrl: "https://github.com/parth25j",
    githubUrl: "https://github.com/parth25j",
    date: "2024-01-15",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Job Apply Automation (UnderProgress)",
    description: "Tool to auto-apply jobs by parsing resume and scraping job sites.",
    color: "#9911ff",
    icon: <Code className="w-6 h-6" />,
    tags: ["Node.js", "Puppeteer", "React"],
    liveUrl: "https://github.com/parth25j",
    githubUrl: "https://github.com/parth25j",
    date: "2023-11-20",
    category: "Automation",
  },
]

export default function ScrollLinkedProjects() {
  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })
  const maskImage = useScrollOverflowMask(scrollXProgress)
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="min-h-screen !mb-[200px] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center !p-6" id="projects">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center !mb-8"
        >
          <h1 className="text-4xl font-bold text-white !mb-4">My Project Portfolio</h1>
          <p className="text-slate-300 !mb-20">Scroll through my projects • Each color represents a different project</p>
        </motion.div>

        <div id="example" className="relative  !mb-8">
          <svg id="progress" width="80" height="80" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle cx="50" cy="50" r="30" className="indicator" style={{ pathLength: scrollXProgress }} />
          </svg>

          <motion.ul ref={ref} style={{ maskImage }} className="project-scroll">
            {projects.map((project) => (
              <motion.li
                key={project.id}
                style={{ background: project.color }}
                className="project-color-block cursor-pointer relative overflow-hidden"
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white/80 hover:text-white transition-colors">
                  {project.icon}
                </div>
                <div className="absolute bottom-2 left-2 right-2 text-white/90 text-xs font-medium text-center">
                  {project.title.split(" ")[0]}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl  !mx-auto"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isSelected={selectedProject === project.id}
              onSelect={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            />
          ))}
        </motion.div>
      </div>
      <StyleSheet />
    </div>
  )
}

function ProjectCard({ project, index, isSelected, onSelect }) {
  if (!project || !project.tags) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group  relative cursor-pointer transition-all duration-300 ${isSelected ? "scale-105 z-10" : "hover:scale-102"}`}
      onClick={onSelect}
    >
      <div
        className={`bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border-2  transition-all duration-300 ${isSelected ? "border-white/60 shadow-2xl" : "border-white/20 hover:border-white/40"}`}
        style={{ boxShadow: isSelected ? `0 20px 40px ${project.color}40` : undefined }}
      >
        <div className="p-6 text-white relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${project.color}80, ${project.color}40)` }}>
          <div className="flex items-center gap-3 !mb-3">
            <div className="!p-2 rounded-lg bg-white/20" style={{ color: project.color }}>
              {project.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold">{project.title}</h3>
              <span className="text-xs opacity-80">{project.category}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm opacity-80">
            <Calendar className="w-4 h-4" />
            {new Date(project.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
          </div>
        </div>

        <div className="p-6">
          <p className="text-slate-300 text-sm leading-relaxed !mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 !mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="!px-2 !py-1 text-xs rounded-full border"
                style={{ backgroundColor: `${project.color}20`, borderColor: `${project.color}40`, color: project.color }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 !px-4 !py-2 text-white text-sm font-medium rounded-lg"
              style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}80)` }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 !px-4 !py-2 bg-white/10 text-white text-sm font-medium rounded-lg border border-white/20"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function useScrollOverflowMask(scrollXProgress) {
  const maskImage = useMotionValue(`linear-gradient(90deg, #000, #000 0%, #000 80%, #0000)`)

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(maskImage, `linear-gradient(90deg, #000, #000 0%, #000 80%, #0000)`)
    } else if (value === 1) {
      animate(maskImage, `linear-gradient(90deg, #0000, #000 20%, #000 100%, #000)`)
    } else if (scrollXProgress.getPrevious() === 0 || scrollXProgress.getPrevious() === 1) {
      animate(maskImage, `linear-gradient(90deg, #0000, #000 20%, #000 80%, #0000)`)
    }
  })

  return maskImage
}

function StyleSheet() {
  return (
    <style>{`
      #example {
        width: 100%;
        max-width: 600px;
        position: relative;
        margin: 0 auto;
      }
      #example #progress {
        position: absolute;
        top: -65px;
        left: 50%;
        transform: translateX(-50%) rotate(-90deg);
        z-index: 10;
      }
      #example .bg {
        stroke: #0b1011;
      }
      #example #progress circle {
        stroke-dashoffset: 0;
        stroke-width: 8%;
        fill: none;
      }
      #progress .indicator {
        stroke: #83e6f7;
      }
      .project-scroll {
        display: flex;
        list-style: none;
        height: 180px;
        overflow-x: scroll;
        padding: 20px 0;
        margin: 0;
        gap: 20px;
        scroll-behavior: smooth;
      }
      .project-color-block {
        flex: 0 0 160px;
        border-radius: 12px;
        position: relative;
        transition: all 0.3s ease;
      }
      .project-scroll::-webkit-scrollbar {
        height: 6px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
      }
      .project-scroll::-webkit-scrollbar-thumb {
        background: #83e6f7;
        border-radius: 3px;
      }
      .project-scroll::-webkit-scrollbar-corner {
        background: rgba(255, 255, 255, 0.1);
      }
    `}</style>
  )
}
