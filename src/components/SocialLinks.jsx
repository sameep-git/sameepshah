"use client";
import { Github, Linkedin, Twitter, X } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="fixed bottom-0 right-7 z-40 hidden lg:block">
      <div className="flex flex-col items-center gap-6">
        {/* GitHub */}
        <a
          href="https://github.com/sameep-git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text hover:text-accent transition-all hover:-translate-y-1 duration-300"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sameepshah-"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text hover:text-accent transition-all hover:-translate-y-1 duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>

        {/* Twitter/X */}
        <a
          href="https://x.com/sameeepshah"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text hover:text-accent transition-all hover:translate-y-1 duration-300"
          aria-label="X"
        >
          <Twitter size={24} />
        </a>

        {/* Vertical line */}
        <div className="w-px h-24 bg-text"></div>
      </div>
    </div>
  );
}