import React from "react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
