import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

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
