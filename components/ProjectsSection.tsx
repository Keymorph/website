import { useState } from "react";
import { motion } from "framer-motion";
import { wrap } from "popmotion";
import ProjectCard from "./ProjectsSection/ProjectCard";
import { spring } from "../styles/transitions";

const projects = [
  {
    actionText: "Visit",
    projectName: "Notes",
    projectURL: "https://jotfoxdev.vercel.app",
    imageURL: "/images/project-jotfox.png",
    technologies: [
      "NextJS",
      "CosmosDB",
      "Vercel",
      "Material Design",
      "Framer Motion",
    ],
  },
  {
    actionText: "Visit",
    projectName: "Homepage",
    projectURL: "https://example.com",
    imageURL: "/images/project-homepage.png",
    technologies: ["NextJS", "Vercel", "TailwindCSS", "Framer Motion"],
  },
];

export default function ProjectsSection() {
  const [[current, direction], setCurrent] = useState([0, 1]);

  const projectIndex = wrap(0, projects.length, current);

  console.log("direction", direction);

  return (
    <motion.section
      transition={spring}
      initial={{ opacity: 0, x: 100 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { ...spring, delay: 0.3 },
      }}
      className="p-8 self-center"
    >
      <ProjectCard
        actionText={projects[projectIndex].actionText}
        projectName={projects[projectIndex].projectName}
        projectURL={projects[projectIndex].projectURL}
        imageURL={projects[projectIndex].imageURL}
        technologies={projects[projectIndex].technologies}
        direction={direction}
        current={current}
        setCurrent={setCurrent}
      />
    </motion.section>
  );
}
