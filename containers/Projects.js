import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <main initial="initial" animate="animate" className="py-6 mt-4">
          <article>
            <ul className="grid gap-4 md:grid-cols-2">
              <ProjectCard key={index} project={project} />
            </ul>
          </article>
        </main>
      ))}
    </div>
  );
};

export default Projects;
