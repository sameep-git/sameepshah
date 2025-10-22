"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const links = ["About", "Experience", "Projects", "Contact"];
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  
  const scrollToSection = (id, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id.toLowerCase()}`);
    }
    
    // Close mobile menu after clicking
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="flex justify-between items-center py-4 md:py-6 px-4 md:px-8 lg:px-12 bg-background border-b border-accent fixed top-0 w-full z-50 backdrop-blur-sm bg-opacity-95"
      >
        <Link
          className="text-text text-lg md:text-xl font-bold hover:text-accent cursor-pointer font-sans transition-colors"
          href="/"
        >
          Sameep Shah
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {links.map((link, index) => (
            <button
              type="button"
              key={link}
              onClick={(e) => scrollToSection(link, e)}
              className="text-text text-sm font-medium hover:text-accent transition-colors font-mono group"
            >
              <span className="text-accent mr-1">{"#" + (index + 1)}.</span>
              <span className="group-hover:underline underline-offset-4">{link}</span>
            </button>
          ))}
          
          <a 
            href="/Sameep%20Shah%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-accent text-accent font-mono text-sm hover:bg-accent hover:text-background transition-all"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center group"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? 45 : 0,
              y: isMobileMenuOpen ? 8 : 0,
            }}
            className="w-6 h-0.5 bg-accent transition-all"
          />
          <motion.span
            animate={{
              opacity: isMobileMenuOpen ? 0 : 1,
            }}
            className="w-6 h-0.5 bg-accent transition-all"
          />
          <motion.span
            animate={{
              rotate: isMobileMenuOpen ? -45 : 0,
              y: isMobileMenuOpen ? -8 : 0,
            }}
            className="w-6 h-0.5 bg-accent transition-all"
          />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-background border-l border-accent z-40 pt-24 px-8 backdrop-blur-lg"
          >
            <div className="flex flex-col gap-6">
              {links.map((link, index) => (
                <button
                  type="button"
                  key={link}
                  onClick={(e) => scrollToSection(link, e)}
                  className="text-text text-lg font-medium hover:text-accent transition-colors font-mono text-left"
                >
                  <span className="text-accent mr-2">{"#" + (index + 1)}.</span>
                  <span>{link}</span>
                </button>
              ))}
              
              <a 
                href="/Sameep%20Shah%20Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-3 border border-accent text-accent font-mono text-sm hover:bg-accent hover:text-background transition-all w-full text-center"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          />
        )}
      </AnimatePresence>
    </>
  );
}