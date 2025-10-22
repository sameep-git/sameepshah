"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const roles = [
    "Software Engineer.",
    "Problem Solver.",
    "Leader.",
    "Sports Enthusiast.",
    "Yapper."
  ];
  
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000); // Change every 3 seconds
    
    return () => clearInterval(interval);
  }, [roles.length]); // Fixed: Added roles.length

  return (
    <>
      <Navbar />
      <main
        id="home"
        className="flex flex-col items-start justify-center h-screen px-8 md:px-16 lg:px-32 max-w-7xl mx-auto pt-20 md:pt-0"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent text-lg mb-4 font-mono"
        >
          Hi there, I am
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-text"
        >
          Sameep Shah.
        </motion.h1>
        
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 flex items-center h-24">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-500 mr-4"
          >
            I am a
          </motion.span>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-accent"
            >
              {roles[currentRole]}
            </motion.span>
          </AnimatePresence>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl space-y-4 text-gray-400 text-lg"
        >
          <p>
            I am a senior Computer Science & Economics double major at Texas Christian University (TCU) graduating in May 2026. 
            I am looking for new grad opportunities in Software Engineering.
            I specialize in AI engineering with a focus on Agentic solutions, and I have a keen interest in distributed and low-level systems.
          </p>
          <p>
            I enjoy sports (especially hockey), rock music and endurance running.
          </p>
        </motion.div>
        
        <motion.a
          href="/Sameep%20Shah%20Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 px-8 py-4 border-2 border-accent text-accent hover:text-background font-mono hover:bg-accent transition-all"
        >
          View Resume
        </motion.a>
      </main>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center px-8 md:px-16 lg:px-32"
      >
        <p className="text-text text-lg font-medium font-mono">
          <span className="text-accent mr-2">{"#1"}.</span>
          <span>About Me</span>
        </p>
        <p className="max-w-xl text-gray-700">
          WIP.
        </p>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex flex-col items-center justify-center px-8 md:px-16 lg:px-32"
      >
        <p className="text-text text-lg font-medium font-mono">
          <span className="text-accent mr-2">{"#2"}.</span>
          <span>Experience</span>
        </p>
        <p className="max-w-xl text-gray-700">
          WIP.
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center px-8 md:px-16 lg:px-32"
      >
        <p className="text-text text-lg font-medium font-mono">
          <span className="text-accent mr-2">{"#3"}.</span>
          <span>Projects</span>
        </p>
        <p className="max-w-xl text-gray-700">WIP.</p>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center px-8 md:px-16 lg:px-32"
      >
        <p className="text-text text-lg font-medium font-mono">
          <span className="text-accent mr-2">{"#4"}.</span>
          <span>Contact</span>
        </p>
        <p className="max-w-xl pt-8 text-text text-center text-xl">
          I am always open to a chat, and would love to connect with you! Send me an email or connect with me on LinkedIn.
        </p>
        <div className="flex flex-row items-center justify-center px-8 md:px-16 lg:px-32">
          <motion.a
            href="mailto:sameepshah384@gmail.com"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="my-12 mx-8 px-8 py-4 border-2 border-accent text-accent hover:text-background font-mono hover:bg-accent transition-all"
          >
            Send Email
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sameepshah-"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="my-12 mx-8 px-8 py-4 border-2 border-accent text-accent hover:text-background font-mono hover:bg-accent transition-all"
          >
            LinkedIn
          </motion.a>
        </div>
      </section>
    </>
  );
}