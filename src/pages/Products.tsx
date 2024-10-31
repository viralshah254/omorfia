import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
    title: "Aromatherapy",
    description: "Therapeutic healing through essential oils",
    image: "https://omorfia.s3.eu-north-1.amazonaws.com/aromatherapy.jpg",
    linkto: '/spa-treatments'
  },
  {
    id: 3,
    title: "Reflexology",
    description: "Holistic pressure point therapy",
    image: "https://omorfia.s3.eu-north-1.amazonaws.com/reflexology.jpg",
    linkto: '/spatreatments'
  },
  {
    id: 4,
    title: "Facials",
    description: "Customized skincare solutions",
    image: "https://omorfia.s3.eu-north-1.amazonaws.com/facesteam.jpg",
    linkto: '/facial'
  },
  {
    id: 5,
    title: "Peels",
    description: "Reveal your natural radiance",
    image: "https://omorfia.s3.eu-north-1.amazonaws.com/face+peel.jpg",
    linkto: '/peels'
  },
  {
    id: 6,
    title: "Permanent Tatoo",
    description: "Reveal your natural radiance",
    image: "https://omorfia.s3.eu-north-1.amazonaws.com/pexels-mart-production-8801081.jpg",
    linkto: '/permanent-tattoo'
  }
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const AUTO_PLAY_INTERVAL = 8000;
  
  // Handle moving to previous slide
  const handlePrev = () => {
    console.log('Prev button clicked');
    setIsAutoPlaying(false);
    const newIndex = (currentIndex - 1 + treatments.length) % treatments.length;
    console.log('Moving from index', currentIndex, 'to', newIndex);
    setCurrentIndex(newIndex);
  };

  // Handle moving to next slide
  const handleNext = () => {
    console.log('Next button clicked');
    setIsAutoPlaying(false);
    const newIndex = (currentIndex + 1) % treatments.length;
    console.log('Moving from index', currentIndex, 'to', newIndex);
    setCurrentIndex(newIndex);
  };

  // Handle dot navigation
  const handleDotNavigation = (index: number) => {
    console.log('Dot clicked, moving to index:', index);
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Handle autoplay
  useEffect(() => {
    let autoplayTimer: NodeJS.Timeout | undefined;

    if (isAutoPlaying) {
      console.log('Starting autoplay');
      autoplayTimer = setInterval(() => {
        setCurrentIndex(prevIndex => {
          const nextIndex = (prevIndex + 1) % treatments.length;
          console.log('Autoplay moving from', prevIndex, 'to', nextIndex);
          return nextIndex;
        });
      }, AUTO_PLAY_INTERVAL);
    }

    return () => {
      if (autoplayTimer) {
        console.log('Cleaning up autoplay timer');
        clearInterval(autoplayTimer);
      }
    };
  }, [isAutoPlaying]);

  return (
    <div className="bg-white h-screen flex flex-col">
      <div className="h-[15vh] bg-eerie-black"></div>
      <div className="flex-1 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-center">
          <div className="relative h-full flex flex-col justify-center w-full">
            <div className="absolute top-7 left-0 text-[15rem] font-bold text-timber-wolf/80 leading-none pointer-events-none">
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
                <div className="grid md:grid-cols-2 gap-16 items-center w-full">
                  <div className="text-gray-900 space-y-6">
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl md:text-6xl font-magenta text-eerie-black"
                    >
                      {treatments[currentIndex].title}
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl font-bodoni text-eerie-black"
                    >
                      {treatments[currentIndex].description}
                    </motion.p>
                    <Link to={treatments[currentIndex].linkto}>
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="px-8 py-3 bg-monbatten text-white text-xl font-bodoni rounded-full font-medium hover:bg-lapis-lazuli transition-colors"
                      >
                        View Details
                      </motion.button>
                    </Link>
                  </div>
                  <div className="relative w-full">
                    <motion.img
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      src={treatments[currentIndex].image}
                      alt={treatments[currentIndex].title}
                      className="w-full h-[60vh] object-cover rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
  
            <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center z-20">
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
                  className="p-2 rounded-full bg-monbatten text-white hover:bg-lapis-lazuli transition-colors cursor-pointer"
                >
                  <FaChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-monbatten text-white hover:bg-lapis-lazuli transition-colors cursor-pointer"
                >
                  <FaChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;