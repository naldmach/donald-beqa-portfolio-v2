import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {year} Donald's Dev Quest
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-transform duration-200 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-transform duration-200 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
