import React from "react";
import Image from "next/image";
import { SiGithub, SiYoutube } from "react-icons/si";
import Link from "next/link";

import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.li
      className="max-w-md p-6 m-1 border-2 rounded-md md:w-full"
      whileHover={{ scale: 1.03, transition: { duration: 0.1 } }}
    >
      <header className="flex justify-between">
        <h4 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-2xl dark:text-white">
          <span>{project.name}</span>
        </h4>
        <div className="flex space-x-2">
          <Link
            className="inline-flex items-center content-end justify-end rounded-sm ring-vis"
            href={project.github}
          >
            <a>
              <SiGithub />
            </a>
          </Link>
          {project.youtube ? (
            <Link
              className="inline-flex items-center content-end justify-end rounded-sm ring-vis"
              href={project.youtube}
            >
              <a>
                <SiYoutube />
              </a>
            </Link>
          ) : null}
        </div>
      </header>

      <Link href={project.link}>
        <div className="cursor-pointer">
          <p className="mb-8 leading-6 prose text-gray-600 dark:text-gray-200">
            {project.description}
          </p>
          <div className="w-full shadow-md">
            <img width="1100" src={project.thumbnail} />
          </div>

          <p className="inline-block mt-4 font-medium view hover:underline">
            View Site
          </p>
        </div>
      </Link>
    </motion.li>
  );
};

export default ProjectCard;
