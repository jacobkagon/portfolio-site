import React from "react";
import Image from "next/image";
import { SiGithub, SiYoutube } from "react-icons/si";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div>
      <header className="flex justify-between">
        <h4>
          <span>{project.name}</span>
        </h4>
        <Link target="_blank" href={project.github}>
          <a>
            <SiGithub />
          </a>
        </Link>
        <SiYoutube />
      </header>
      <li
        className="max-w-md rounded-md card project-card md:w-full border-thin ring-vis-0"
        whileHover={{ scale: 1.03, transition: { duration: 0.1 } }}
      ></li>
      <div className="w-full shadow-md">
        <img width="1100" src={project.thumbnail} />
      </div>
    </div>
  );
};

export default ProjectCard;
