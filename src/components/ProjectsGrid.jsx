"use client";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group relative bg-background border border-text border-opacity-10 overflow-hidden transition-all duration-200 hover:border-accent hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2"
        >
          {/* Background Image with Overlay */}
          {project.image && (
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-background opacity-90 group-hover:opacity-80 transition-opacity duration-300" />
            </div>
          )}

          {/* Content */}
          <div className="relative p-6 flex flex-col h-full min-h-[320px]">
            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-4 right-4 px-2 py-1 bg-accent text-background text-xs font-mono">
                Featured
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-bold text-text mb-3 group-hover:text-accent transition-colors duration-200">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4 flex-grow">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links - appear on hover */}
            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-200">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-text hover:text-accent transition-colors duration-150"
                  aria-label="GitHub Repository"
                >
                  <Github size={20} />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-text hover:text-accent transition-colors duration-150"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Click overlay */}
          {(project.github || project.demo) && (
            <a
              href={project.github || project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-0"
              aria-label={`View ${project.title}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}