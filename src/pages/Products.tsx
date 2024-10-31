import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const treatments = [
  {
    id: 1,
    title: "Laser Treatment",
    description: "Advanced technology for lasting results",
    image: "https://omorfia.s3.eu-north-1.amazonaws.com/lasermen.jpeg"
  },
  {
    id: 2,
    title: "Aromatherapy",
    description: "Therapeutic healing through essential oils",
    image: "https://omorfia.s3.eu-north-1.amazonaws.com/aromatherapy.jpg"
  },
  {
    id: 3,
    title: "Reflexology",
    description: "Holistic pressure point therapy",
    image: "https://omorfia.s3.eu-north-1.amazonaws.com/reflexology.jpg"
  },
  {
    id: 4,
    title: "Facials",
    description: "Customized skincare solutions",
    image: "https://omorfia.s3.eu-north-1.amazonaws.com/facesteam.jpg"
  },
  {
    id: 5,
    title: "Peels",
    description: "Reveal your natural radiance",
    image: "https://omorfia.s3.eu-north-1.amazonaws.com/face+peel.jpg"
  },
  {
    id: 5,
    title: "Permanent Tatoo",
    description: "Reveal your natural radiance",
    image: "https://omorfia.s3.eu-north-1.amazonaws.com/pexels-mart-production-8801081.jpg"
  }
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const AUTOPLAY_DELAY = 10000;
  const PAUSE_DURATION = 10000;

  type NavigationAction = 'prev' | 'next' | number;

  const handleManualInteraction = (action: NavigationAction) => {
    setAutoplayPaused(true);
    
    if (action === 'prev') {
      setCurrentIndex((prev) => (prev - 1 + treatments.length) % treatments.length);
    } else if (action === 'next') {
      setCurrentIndex((prev) => (prev + 1) % treatments.length);
    } else if (typeof action === 'number') {
      setCurrentIndex(action);
    }
  };

  useEffect(() => {
    let autoplayInterval: NodeJS.Timeout | undefined;
    let pauseTimeout: NodeJS.Timeout | undefined;

    if (!autoplayPaused) {
      autoplayInterval = setInterval(() => {
        handleManualInteraction('next');
      }, AUTOPLAY_DELAY);
    }

    if (autoplayPaused) {
      pauseTimeout = setTimeout(() => {
        setAutoplayPaused(false);
      }, PAUSE_DURATION);
    }

    return () => {
      if (autoplayInterval) clearInterval(autoplayInterval);
      if (pauseTimeout) clearTimeout(pauseTimeout);
    };
  }, [autoplayPaused]);

    



  return (
    <div className="bg-white h-screen flex flex-col">
      <div className="h-[15vh] bg-eerie-black"></div>
      <div className="flex-1 relative">
        <div className="max-w-7xl mx-auto px-4 h-full">
          <div className="relative h-full flex flex-col">
            <div className="absolute top-0 left-0 text-[15rem] font-bold text-gray-200/50 leading-none">
              {String(currentIndex + 1).padStart(2, '0')}
            </div>
  
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="relative z-10 flex-1 flex items-center"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="text-gray-900 space-y-6">
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl md:text-6xl font-bold"
                    >
                      {treatments[currentIndex].title}
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl text-gray-800"
                    >
                      {treatments[currentIndex].description}
                    </motion.p>
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </motion.button>
                  </div>
                  <div className="relative">
                    <motion.img
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                      src={treatments[currentIndex].image}
                      alt={treatments[currentIndex].title}
                      className="w-full h-[50vh] object-cover rounded-lg"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
  
            <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center">
              <div className="flex space-x-4">
                {treatments.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleManualInteraction(index)}
                    className={`w-12 h-1 rounded-full transition-all ${
                      index === currentIndex ? 'bg-lapis-lazuli' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleManualInteraction('prev')}
                  className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  <FaChevronLeft size={24} />
                </button>
                <button
                  onClick={() => handleManualInteraction('next')}
                  className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
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