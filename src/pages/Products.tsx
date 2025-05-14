import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import OrganicPattern from './Patterns';

const treatments = [
  {
    id: 1,
    title: "Laser Treatment",
    description: "Advanced technology for lasting results",
    image: "https://omorfia.s3.eu-north-1.amazonaws.com/lasermen.jpeg",
    linkto: '/laser'
  },
  {
    id: 2,
    title: "Spa Treatments",
    description: "Transformative treatments for complete relaxation and renewal",
    image: "https://viplotusspa.com/wp-content/uploads/2023/09/Choosing-the-Right-Spa-Treatment.jpg",
    linkto: '/spa-treatments'
  },
  {
    id: 3,
    title: "Facials",
    description: "Customized skincare solutions",
    image: "https://omorfia.s3.eu-north-1.amazonaws.com/facesteam.jpg",
    linkto: '/facial'
  },
  {
    id: 4,
    title: "Peels",
    description: "Reveal your natural radiance",
    image: "https://omorfia.s3.eu-north-1.amazonaws.com/peel_mineral.png",
    linkto: '/peels'
  },
  {
    id: 5,
    title: "Permanent Makeup",
    description: "Reveal your natural radiance",
    image: "https://omorfia.s3.eu-north-1.amazonaws.com/lipblush.png",
    linkto: '/permanent-makeup'
  }
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const AUTO_PLAY_INTERVAL = 8000;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + treatments.length) % treatments.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % treatments.length);
  };

  const handleDotNavigation = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  useEffect(() => {
    let autoplayTimer: NodeJS.Timeout | undefined;

    if (isAutoPlaying) {
      autoplayTimer = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % treatments.length);
      }, AUTO_PLAY_INTERVAL);
    }

    return () => {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
      }
    };
  }, [isAutoPlaying]);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[35vh] md:h-[40vh] bg-eerie-black overflow-hidden">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: 'url("https://omorfia.s3.eu-north-1.amazonaws.com/facemassage.jpg")'
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-eerie-black/90 via-eerie-black/80 to-eerie-black/70" />
  </div>

  {/* Pattern Overlay */}
  <OrganicPattern />

  {/* Content */}
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative h-full flex items-center justify-center text-center px-4 pt-12 md:pt-16"
  >
    <div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-magenta text-3xl md:text-5xl lg:text-7xl text-timber-wolf mb-2 md:mb-4"
      >
        Our Services
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="font-bodoni text-base md:text-xl text-timber-wolf/80"
      >
        Discover our range of transformative treatments
      </motion.p>
    </div>
  </motion.div>
</div>

      
      {/* Rest of the carousel content */}
      <div className="flex-1 relative overflow-hidden px-4 md:px-6 lg:px-8">
        {/* ... rest of the existing carousel code ... */}
        <div className="max-w-7xl mx-auto h-full flex items-center justify-center py-8 md:py-12">
          <div className="relative h-full flex flex-col justify-center w-full">
            <div className="absolute top-0 md:top-7 left-0 text-[8rem] md:text-[15rem] font-bold text-timber-wolf/80 leading-none pointer-events-none">
              {String(currentIndex + 1).padStart(2, '0')}
            </div>
  
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="relative z-10 flex-1 flex items-center justify-center w-full"
              >
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full">
                  <div className="text-gray-900 space-y-4 md:space-y-6 order-2 md:order-1">
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-3xl md:text-4xl lg:text-6xl font-magenta text-eerie-black"
                    >
                      {treatments[currentIndex].title}
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl md:text-2xl font-bodoni text-eerie-black"
                    >
                      {treatments[currentIndex].description}
                    </motion.p>
                    <Link to={treatments[currentIndex].linkto}>
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="px-6 md:px-8 py-2 md:py-3 bg-monbatten text-white text-lg md:text-xl font-bodoni rounded-full font-medium hover:bg-lapis-lazuli transition-colors"
                      >
                        View Details
                      </motion.button>
                    </Link>
                  </div>

                  <div className="relative w-full order-1 md:order-2">
                    <motion.img
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      src={treatments[currentIndex].image}
                      alt={treatments[currentIndex].title}
                      className="w-full h-[40vh] md:h-[60vh] object-cover rounded-lg shadow-lg"
                    />

                    {/* Mobile Navigation Controls Overlay */}
                    <div className="absolute inset-x-0 bottom-4 md:hidden flex justify-center space-x-2 z-20">
                      <button
                        onClick={handlePrev}
                        className="p-2 rounded-full bg-monbatten/80 text-white hover:bg-lapis-lazuli transition-colors"
                      >
                        <FaChevronLeft size={20} />
                      </button>
                      <button
                        onClick={handleNext}
                        className="p-2 rounded-full bg-monbatten/80 text-white hover:bg-lapis-lazuli transition-colors"
                      >
                        <FaChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
  
            {/* Desktop Navigation Controls */}
            <div className="hidden md:flex absolute bottom-8 left-0 right-0 justify-between items-center z-20 px-4">
              <div className="flex space-x-4">
                {treatments.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotNavigation(index)}
                    className={`w-12 h-1 rounded-full transition-all cursor-pointer ${
                      index === currentIndex ? 'bg-lapis-lazuli' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-monbatten text-white hover:bg-lapis-lazuli transition-colors"
                >
                  <FaChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-monbatten text-white hover:bg-lapis-lazuli transition-colors"
                >
                  <FaChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Mobile Dot Navigation */}
            <div className="flex md:hidden justify-center mt-4">
              <div className="flex space-x-2">
                {treatments.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotNavigation(index)}
                    className={`w-8 h-1 rounded-full transition-all cursor-pointer ${
                      index === currentIndex ? 'bg-lapis-lazuli' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;