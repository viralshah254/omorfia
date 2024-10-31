import React from 'react';
import { motion } from 'framer-motion';

const OurTeam = () => {
    const teamMembers = [
        {
            name: "Sarah Anderson",
            role: "Creative Director",
            expertise: "Color Specialist & Style Consultant"
        },
        {
            name: "Michael Chen",
            role: "Senior Stylist",
            expertise: "Hair Architecture & Transformation"
        },
        {
            name: "Elena Rodriguez",
            role: "Beauty Expert",
            expertise: "Makeup Artist & Skincare Specialist"
        }
    ];

    return (
        <div className="bg-white h-screen mb-8">
            <div className="px-4 md:px-8 lg:px-16 py-12">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-bodoni text-lapis-lazuli text-4xl md:text-5xl lg:text-6xl mb-4">
                        Meet The Team
                    </h2>
                    <p className="font-bodoni text-eerie-black/70 text-lg md:text-xl max-w-2xl mx-auto">
                        A team of dedicated professionals committed to bringing out your natural beauty
                    </p>
                </motion.div>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="relative"
                        >
                            {/* Member Card */}
                            <div className="relative">
                                {/* Placeholder Image - Significantly reduced height */}
                                <div className="aspect-[4/3] bg-timber-wolf/10 mb-4">
                                    <img 
                                        src={`/api/placeholder/400/300`} 
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Member Info - Simplified */}
                                <div className="space-y-1">
                                    <h3 className="font-bodoni text-xl md:text-2xl text-eerie-black">
                                        {member.name}
                                    </h3>
                                    <p className="font-bodoni text-lg text-eerie-black/80">
                                        {member.role}
                                    </p>
                                    <p className="font-bodoni text-base text-lapis-lazuli">
                                        {member.expertise}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Flourish */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-12 text-center"
                >
                    <div className="h-px w-24 bg-lapis-lazuli mx-auto" />
                    <p className="font-bodoni text-eerie-black/60 mt-4 text-lg">
                        Expertise meets artistry
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default OurTeam;