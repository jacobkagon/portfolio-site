import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <main initial="initial" animate="animate" className="pt-2 pb-16">
      <article className="space-y-2 layout">
        <ul className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ul>
      </article>
      <div id="about"></div>
    </main>
  );
};

export default Projects;
