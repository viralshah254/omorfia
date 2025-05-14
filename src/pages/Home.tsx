import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div 
            className="flex flex-col items-center justify-center min-h-[100vh] relative overflow-hidden"
            style={{
                backgroundImage: 'url("https://omorfia.s3.eu-north-1.amazonaws.com/facemassage.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Enhanced gradient overlay */}
            <div 
                className="absolute inset-0 bg-gradient-to-b from-eerie-black/90 via-eerie-black/70 to-eerie-black/40"
            >
                
          
            </div>
            
            {/* Content Container */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-start md:items-center"
            >
                {/* Left Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="w-full md:w-2/3 flex flex-col items-end text-right pt-32 md:pt-20 md:pr-8 lg:pr-16"
                >
                    {/* Main Titles */}
                    <div className="w-full space-y-2">
                        <motion.h1 
                            className="font-magenta text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-timber-wolf tracking-wider"
                        >
                            Studio,
                        </motion.h1>
                        <motion.h2 
                            className="font-magenta text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-timber-wolf -mt-2 md:-mt-4"
                        >
                            Omorfia
                        </motion.h2>
                    </div>
                    
                    {/* Taglines */}
                    <div className="w-full space-y-4 mt-6">
                        <p className="font-magenta text-lg sm:text-xl md:text-2xl text-timber-wolf">
                            Unveiling Your Inner Beauty,
                        </p>
                        <p className="font-magenta text-lg sm:text-xl md:text-2xl text-timber-wolf">
                       And brighten your true radiance 
                        </p>
                    </div>

                    
                </motion.div>

                {/* Right Content */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="w-full md:w-1/3 mt-12 md:mt-0 text-right pr-4 md:pr-0"
                >
                    <div className="space-y-2">
                        <p className="font-bodoni text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-timber-wolf">
                            67
                        </p>
                        <p className="font-magenta text-xl sm:text-2xl md:text-3xl text-timber-wolf">
                            The Place
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;