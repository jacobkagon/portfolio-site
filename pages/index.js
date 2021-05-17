import Head from "next/head";
import styles from "../styles/Home.module.css";
import Container from "../components/Container";
import Link from "next/link";
import Projects from "../containers/Projects";
import About from "../components/about";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Hey, I’m Jacob
        </h1>
        <h2 className="mb-16 prose text-gray-600 dark:text-gray-400">
          I’m a developer who loves to learn new technologies and make everyday
          life easier and more enjoyable. Feel free to reach out if you want to
          collaborate or chat about tech. &nbsp;
        </h2>
        <h3 className="mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          My Projects
        </h3>
        <div className="py-6 mt-4 ">
          <Projects />
        </div>

        <About />
      </div>
    </Container>
  );
}
