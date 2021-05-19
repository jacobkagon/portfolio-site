import Link from "next/link";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 transition hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-8">
      <hr className="w-full mb-8 border-gray-200 border-1 dark:border-gray-800" />

      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-2">
        <div className="flex flex-col items-center space-y-4">
          <Link href="#home">
            <a className="text-gray-500 transition hover:text-gray-600">Home</a>
          </Link>
          <Link href="#projects">
            <a className="text-gray-500 transition hover:text-gray-600">
              Projects
            </a>
          </Link>
          <Link href="#about">
            <a className="text-gray-500 transition hover:text-gray-600">
              About
            </a>
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <ExternalLink href="https://twitter.com/jacob_kagon">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/jacobkagon">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/jacobkagon/">
            LinkedIn
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
