import React from 'react';
import { motion } from 'framer-motion';

const OurTeam = () => {
    const teamMembers = [
        {
            name: "Sarah Anderson",
            role: "Creative Director",
            expertise: "Color Specialist & Style Consultant",
            quote: "Beauty begins the moment you decide to be yourself"
        },
        {
            name: "Michael Chen",
            role: "Senior Stylist",
            expertise: "Hair Architecture & Transformation",
            quote: "Every client is a canvas for creativity"
        },
        {
            name: "Elena Rodriguez",
            role: "Beauty Expert",
            expertise: "Makeup Artist & Skincare Specialist",
            quote: "True beauty reflects the soul within"
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-16 bg-gradient-to-b from-white to-timber-wolf/10">
       

             {/*  

            
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        
                        <div className="w-12 h-[1px] bg-lapis-lazuli transform rotate-45" />
                        <h2 className="font-bodoni text-lapis-lazuli text-4xl md:text-5xl lg:text-6xl">
                            Meet The Team
                        </h2>
                        <div className="w-12 h-[1px] bg-lapis-lazuli transform -rotate-45" />
                    </div>
                    <p className="font-bodoni text-eerie-black/70 text-lg md:text-xl max-w-2xl mx-auto">
                        A team of dedicated professionals committed to bringing out your natural beauty
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group relative"
                        >
                     
                            <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                               
                                <div className="aspect-[3/4] bg-timber-wolf/10 relative overflow-hidden">
                                    <img 
                                        src={`/api/placeholder/400/533`} 
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                  
                                    <div className="absolute inset-0 bg-gradient-to-t from-eerie-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                              
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="font-bodoni text-2xl mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="font-bodoni text-lg text-timber-wolf">
                                        {member.role}
                                    </p>
                                    <p className="font-bodoni text-sm text-timber-wolf/80 mt-1">
                                        {member.expertise}
                                    </p>
                                    <p className="font-bodoni text-sm italic text-timber-wolf/90 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        "{member.quote}"
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

             
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-16 text-center"
                >
                    <div className="h-px w-24 bg-lapis-lazuli mx-auto" />
                    <p className="font-bodoni text-eerie-black/60 mt-4 text-lg">
                        Expertise meets artistry
                    </p>
                </motion.div>
            </div>
            */}
        </div>
    );
};

export default OurTeam;