"use client";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

export default function ExperienceViewer({ experiences }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left sidebar - Company list */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 text-left font-mono text-sm whitespace-nowrap transition-all ${
                activeIndex === index
                  ? "text-background bg-accent border-l-2 md:border-l-0 md:border-b-0 border-b-2 border-accent"
                  : "text-text hover:text-background hover:bg-accent hover:bg-opacity-50"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Right content area */}
        <div className="flex-1 min-h-[400px]">
          <div className="space-y-4">
            {/* Header */}
            <div>
              <h3 className="text-2xl font-bold text-text">
                {experiences[activeIndex].role}{" "}
                <span className="text-accent">@ {experiences[activeIndex].company}</span>
              </h3>
              <p className="text-sm text-gray-400 font-mono mt-1">
                {experiences[activeIndex].period}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {experiences[activeIndex].location}
              </p>
            </div>

            {/* Description bullets */}
            <ul className="space-y-3 mt-6">
              {experiences[activeIndex].description.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-400">
                  <span className="text-accent mr-3 mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Technologies used */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-2">
                {experiences[activeIndex].technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-mono bg-accent bg-opacity-10 text-background border border-accent rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links section */}
            {experiences[activeIndex].links && experiences[activeIndex].links.length > 0 && (
              <div className="mt-8">
                <div className="flex flex-wrap gap-3">
                    <div>
                        {experiences[activeIndex].links.map((link, idx) => (
                            <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-sm font-mono border border-accent text-accent hover:bg-accent hover:text-background transition-all group"
                            >
                            {link.name}
                            <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        ))}    
                    </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}