"use client";
import { useState, useEffect } from "react";

export default function ImageCarousel() {
  const images = [
    "/profile1.jpeg",
    "/profile2.jpeg",
    "/profile3.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; // Don't auto-advance when hovered

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const handleHover = () => {
    setIsHovered(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex justify-center md:justify-end">
      <div className="relative max-w-sm w-full">
        {/* Accent border effect - moves on hover */}
        <div 
          className={`absolute -inset-2 border-2 border-accent transition-transform duration-300 ${
            isHovered ? "translate-x-4 translate-y-4" : "translate-x-7 translate-y-7"
          }`}
        ></div>
        
        {/* Image container with fixed aspect ratio */}
        <div 
          className="relative overflow-hidden bg-red-100 aspect-[3/4]"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Sameep Shah"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 mix-blend-multiply ${
                isHovered ? "mix-blend-normal" : ""
              } ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}