import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div>
      <li
        className="max-w-md rounded-md card project-card md:w-full border-thin ring-vis-0"
        whileHover={{ scale: 1.03, transition: { duration: 0.1 } }}
      ></li>
      <div className="w-full shadow-md">
        <img width="1440" height="792" src={project.thumbnail} />
      </div>
    </div>
  );
};

export default ProjectCard;
