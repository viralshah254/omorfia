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
            />
            
            {/* Content Container */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 pr-40 pt-20 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center"
            >
                {/* Left Content - Now Right Aligned */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="space-y-8 md:w-2/3 flex flex-col items-end pr-40 pt-20" // Added flex and items-end for right alignment
                >
                    {/* Main Titles */}
                    <div className="space-y-2 text-right"> {/* Added text-right */}
                        <motion.h1 
                            className="font-magenta text-5xl md:text-7xl lg:text-8xl text-timber-wolf tracking-wider text-right"
                        >
                            Studio,
                        </motion.h1>
                        <motion.h2 
                            className="font-magenta text-6xl md:text-8xl lg:text-9xl text-timber-wolf -mt-2 md:-mt-4 text-right"
                        >
                            Omorfia
                        </motion.h2>
                    </div>
                    
                    {/* Taglines */}
                    <div className="space-y-4 text-right"> {/* Added text-right */}
                        <p className="font-magenta text-xl md:text-2xl text-timber-wolf text-right">
                            Unveiling Your Inner Grace and Natural Beauty,
                        </p>
                        <p className="font-magenta text-xl md:text-2xl text-timber-wolf text-right">
                            Through Expert Artistry and Timeless Elegance
                        </p>
                    </div>

                    {/* Book Appointment Button */}
                    <div className="mt-8">
                        <Link 
                            to="/booking"
                            className="group relative inline-flex items-center justify-center"
                        >
                            <div className="absolute inset-0 border border-timber-wolf/30 rounded transform transition-transform duration-300 group-hover:scale-105"></div>
                            <div className="relative px-8 py-4 border border-timber-wolf/60 rounded bg-eerie-black/20 backdrop-blur-sm transform transition-all duration-300 group-hover:bg-eerie-black/40 group-hover:border-timber-wolf">
                                <span className="font-bodoni text-lg md:text-xl text-timber-wolf group-hover:text-white transition-colors duration-300">
                                    Book an Appointment
                                </span>
                            </div>
                        </Link>
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-8 md:mt-0 md:w-1/3 text-right"
                >
                    <div className="space-y-2 pr-20">
                        <p className="font-bodoni text-7xl md:text-8xl lg:text-9xl text-timber-wolf">
                            67
                        </p>
                        <p className="font-magenta text-2xl md:text-3xl text-timber-wolf">
                            The Place
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;