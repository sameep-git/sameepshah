"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import SectionNavigator from "@/components/SectionNavigator";
import ImageCarousel from "@/components/ImageCarousel";
import SocialLinks from "@/components/SocialLinks";
import ExperienceViewer from "@/components/ExperienceViewer";
import ProjectsGrid from "@/components/ProjectsGrid";

export default function Home() {
  const roles = [
    "Software Engineer.",
    "Problem Solver.",
    "Leader.",
    "Sports Enthusiast.",
    "Communicator."
  ];

  const aboutBullets = [
    "Software Engineering Intern at CBRE (Fortune 150 company), developed scalable solutions for an AI team serving 20,000+ monthly users.",
    "AI/ML Research Assistant, built Agentic + RAG applications and improved report accuracy by 18%.",
    "Published 4 peer-reviewed papers in healthcare AI and public health, and received a Best Paper Award.",
    "I am an active leader on campus - Dining Services Chair representing 13,000 students, Resident Assistant serving 290+ students, and CSE Representative in Student Government."
  ];

  const skills = [
    "Python",
    "Golang",
    "C/C++",
    "Java",
    "Rust",
    "SQL",
    "JavaScript",
    "HTML/CSS",
    "Spring Boot",
    "LangChain",
    "ReactJS",
    "VueJS",
    "AngularJS",
    "MySQL",
    "TailwindCSS",
    "PyTorch",
    "NumPy",
    "MongoDB",
    "AWS",
    "Google Cloud",
    "Git",
    "Docker",
    "Jenkins",
    "Firebase",
    "Qdrant"
  ];

  const experiences = [
    {
      role: "Software Engineering Intern",
      company: "CBRE",
      location: "Richardson, TX",
      period: "Jun 2025 - Aug 2025",
      description: [
        "Developed scalable solutions using AngularJS, Python, and Golang, to support an AI team serving over 20,000 monthly users across the company, deploying on AWS using Jenkins.",
        "Engineered a Semantic Kernel powered agent, improving API performance and creating a chart-generation tool to enhance data visualization capabilities.",
        "Developed real-time speech-to-text input and text-to-speech output functionalities, leveraging WebSockets, Google Cloud API for efficient and accurate communication."
      ],
      technologies: ["AngularJS", "Python", "Golang", "AWS", "Jenkins", "WebSockets", "Google Cloud API"],
      links: []
    },
    {
      role: "AI/ML Research Assistant",
      company: "HealthLit Research Lab",
      location: "Fort Worth, TX",
      period: "May 2024 - May 2025",
      description: [
        "Built a Retrieval-Augmented Generation (RAG) application using large language models (LLMs) to generate detailed audit reports on health literacy practices.",
        "Engineered responsive user interfaces using React and TailwindCSS for the RAG-based application, which were deployed using Firebase.",
        "Implemented a vector database with Qdrant and LangChain to retrieve relevant information for RAG, improving the accuracy of reports by 18%.",
        "Co-authored two peer-reviewed research papers, presented research at IEEE/ACM CHASE 2025 conference and received Best Paper Award at IMNS 2025."
      ],
      technologies: ["React", "TailwindCSS", "Firebase", "Qdrant", "LangChain", "Python", "PyTorch"],
      links: [
        {
          name: "IEEE/ACM CHASE 2025 Paper",
          url: "https://doi.org/10.1145/3721201.3725519"
        },
      ]
    },
    {
      role: "AI/ML Research",
      company: "NextGen AI Research Lab",
      location: "Fort Worth, TX",
      period: "Jan 2025 - May 2025",
      description: [
        "Built custom agentic framework routing 7 intent categories using LLM classification with fuzzy matching to intelligently answer 100+ student queries across lectures, homework, and syllabus",
        "Engineered production RAG system with FAISS vector search and HuggingFace embeddings, processing 1,500-token document chunks from 15+ course materials with 95%+ relevance accuracy",
        "Extended LangChain framework with 3 custom classes enabling dynamic document filtering, conversation memory management, and multi-chain routing for pedagogically-optimized responses without direct answers"
      ],
      technologies: ["LangChain",
        "Ollama",
        "FAISS",
        "HuggingFace",
        "Streamlit",
        "Python",
        "Pandas",
        "NumPy",
        "PyTorch",
        "Transformers"
      ],
      links: []
    },
    {
      role: "Undergraduate Teaching Assistant",
      company: "TCU CS Department",
      location: "Fort Worth, TX",
      period: "Aug 2023 - Dec 2023",
      description: [
        "Mentored over 60 students in Java programming, data structures, and algorithmic problem-solving by conducting weekly office hours, which led to a 20% improvement in student performance on coding assignments."
      ],
      technologies: ["Java", "Data Structures", "Algorithms"],
      links: []
    },
    {
      role: "Dining Services Chair",
      company: "Sodexo",
      location: "Fort Worth, TX",
      period: "Aug 2025 - Present",
      description: [
        "Lead a 10 people committee within Student Government, acting as the primary liaison between 13,000 students, university administration, and dining partners to improve on-campus dining services.",
        "Spearhead initiatives by collecting student feedback, presenting proposals to administration, and serving as the main point of contact for dining-related issues."
      ],
      technologies: ["Leadership", "Communication", "Project Management"],
      links: []
    },
    {
      role: "Resident Assistant",
      company: "TCU Housing",
      location: "Fort Worth, TX",
      period: "Aug 2024 - Present",
      description: [
        "Collaborate with a team of 10 RAs to organize over 50 community events and respond to over 35 emergency situations, developing strong leadership, communication, and crisis management skills."
      ],
      technologies: ["Leadership", "Crisis Management", "Event Planning"],
      links: []
    }
  ];

  const projects = [
    {
      title: "MPC-Plus",
      description: "Working with CenterTX, developing a system for real time Machine Performance Check (MPC) data collection, analysis and visualization to reduce redundant QA tasks for radiation therapists.",
      image: "",
      technologies: ["Python", "C#", ".NET", "React", "TailwindCSS", "PostgreSQL", "Docker"],
      github: "https://github.com/sameep-git/MPC-Plus",
      demo: null,
      featured: true
    },
    {
      title: "Virtual TA",
      description: "AI-powered teaching assistant with custom agentic framework that classifies student questions with 95% accuracy using RAG pipeline.",
      image: "", 
      technologies: ["Ollama",
        "FAISS",
        "HuggingFace",
        "Streamlit",
        "Python",
        "Pandas",
        "NumPy",
        "PyTorch",
        "Transformers"
      ],
      github: "https://github.com/sameep-git/virtualTA",
      demo: null,
      featured: true
    },
    {
      title: "HealthLit",
      description: "RAG powered app to make clinicians' lives easier and improving patient outcomes. Worked in conjunction with HealthLit Research Lab & Children's Health.",
      image: "",
      technologies: ["React", "TailwindCSS", "Firebase", "Qdrant", "LangChain", "Python", "PyTorch"],
      github: "https://github.com/sameep-git/HealthLitPro-RAG",
      demo: null,
      featured: true
    },
    {
      title: "ExRx AI",
      description: "Working with UT Southwestern researchers, developing an AI powered exercise prescription generator for physical therapists to create personalized exercise plans for patients with heart conditions. (Currently in prototype phase)",
      image: "", 
      technologies: ["React", "Gemini API"],
      github: "https://github.com/sameep-git/ExRxAI",
      demo: "https://ex-rx-ai.vercel.app/",
      featured: false
    },
    {
      title: "Chip-8 Emulator",
      description: "Emulated Chip-8 programming language using 35 operation codes to run and render games with real-time rendering using OpenGL.",
      image: "",
      technologies: ["Rust", "SDL2", "OpenGL", "Typescript"],
      github: "https://github.com/sameep-git/chip8",
      demo: null,
      featured: false
    },
    {
      title: "DNS Resolver",
      description: "Built a DNS resolver implementing DNS protocol to construct and parse queries and responses, behaving like standard Linux functions dig and nslookup.",
      image: "",
      technologies: ["C++", "Networking", "Linux"],
      github: "https://github.com/sameep-git/dns-resolver",
      demo: null,
      featured: false
    },
    {
      title: "Quiz Android App",
      description: "Created an interactive quiz application for Android devices using Kotlin, featuring multiple-choice questions, score tracking, and a user-friendly interface.",
      image: "",
      technologies: ["Kotlin", "Android Studio"],
      github: "https://github.com/sameep-git/QuizApp",
      demo: null,
      featured: false
    },
    {
      title: "Paint Android App",
      description: "Built a simple paint application for Android using Kotlin, allowing users to draw on the screen with various colors and brush sizes.",
      image: "",
      technologies: ["Kotlin", "Android Studio"],
      github: "https://github.com/sameep-git/PaintApp",
      demo: null,
      featured: false
    },
    {
      title: "Weather Android App",
      description: "Developed an Android application using Kotlin that fetches real-time weather data from a public API and displays it with an intuitive user interface.",
      image: "",
      technologies: ["Kotlin", "Android Studio", "REST APIs"],
      github: "https://github.com/sameep-git/Weather",
      demo: null,
      featured: false
    },
  ];
  
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <>
      <Navbar />
      <SectionNavigator />
      <SocialLinks />
      
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
        className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-32 max-w-7xl mx-auto pt-20"
      >
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text font-mono flex items-center">
            <span className="text-accent mr-3">#1.</span>
            <span>About Me</span>
            <span className="ml-6 h-px bg-accent flex-grow max-w-xs opacity-30"></span>
          </h2>
        </div>
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text */}
          <div className="space-y-4 text-gray-400 text-base md:text-lg">
            
            <ul className="space-y-3 list-none">
              {aboutBullets.map((bullet, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-3 mt-1">#</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            
            <p className="pt-4">
              Here are some of my technical skills:
            </p>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm font-mono pt-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-accent mr-2">#</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <ImageCarousel />
        </div>
      </section>  

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-32 max-w-7xl mx-auto pt-20"
      >
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text font-mono flex items-center">
            <span className="text-accent mr-3">#2.</span>
            <span>Experience</span>
            <span className="ml-6 h-px bg-accent flex-grow max-w-xs opacity-30"></span>
          </h2>
        </div>

        <ExperienceViewer experiences={experiences} />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-32 max-w-7xl mx-auto pt-20 pb-20"
      >
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text font-mono flex items-center">
            <span className="text-accent mr-3">#3.</span>
            <span>Projects</span>
            <span className="ml-6 h-px bg-accent flex-grow max-w-xs opacity-30"></span>
          </h2>
        </div>

        <ProjectsGrid projects={projects} />
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