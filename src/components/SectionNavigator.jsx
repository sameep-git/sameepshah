"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SectionNavigator() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex items-center">
      {/* Vertical line running through all circles */}
      <div className="absolute w-px h-10/12 mt-6 bg-text opacity-20 left-1/2 -translate-x-1/2" />

      <div className="flex flex-col items-center relative">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="relative flex items-center justify-center group"
            style={{ height: index === sections.length - 1 ? 'auto' : '60px' }}
          >
            {/* Label - appears on hover to the left */}
            <div className="absolute right-8 whitespace-nowrap pointer-events-none">
              <span
                className={`text-text text-sm font-mono transition-all duration-300 bg-background px-3 py-1 rounded border border-accent ${
                  activeSection === section.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                {section.label}
              </span>
            </div>

            {/* Circle button */}
            <button
              onClick={() => scrollToSection(section.id)}
              className="relative z-10 transition-transform hover:scale-125"
              aria-label={`Navigate to ${section.label}`}
            >
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeSection === section.id
                    ? "w-4 h-4 border-accent bg-accent"
                    : "border-text bg-background hover:border-accent"
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}