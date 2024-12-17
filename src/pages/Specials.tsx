import React from 'react';
import { motion } from 'framer-motion';
import OrganicPattern from './Patterns';

const Specials = () => {
  return (
    <div className="min-h-screen bg-eerie-black">
      {/* Main content section with background image */}
      <div className="relative min-h-screen">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://img1.wsimg.com/isteam/stock/WV8rgKj/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280')`
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-eerie-black/90 via-eerie-black/80 to-transparent" />
          
          {/* Organic pattern overlay with reduced opacity */}
          <div className="absolute inset-0 opacity-20">
            <OrganicPattern />
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-end">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="max-w-xl"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-magenta text-4xl md:text-5xl lg:text-6xl text-timber-wolf mb-6"
              >
                Good things are <br />
                <span className="text-[#9EB384]">worth the wait!</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="font-bodoni text-xl text-timber-wolf/90 leading-relaxed"
              >
                Our exclusive specials are coming soon. Check back soon to treat yourself to a little extra pampering.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specials;