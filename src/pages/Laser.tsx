import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCheck, 
  FaClock, 
  FaRegLightbulb, 
  FaRegQuestionCircle,
  FaRegUser
} from 'react-icons/fa';

import OrganicPattern from './Patterns';

const Laser = () => {
    // Animation variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[50vh] bg-eerie-black overflow-hidden">
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
                    className="relative h-full flex items-center justify-center text-center px-4"
                >
                    <div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="font-magenta text-4xl md:text-6xl lg:text-7xl text-timber-wolf mb-4"
                        >
                            Advanced Laser Treatments
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="font-bodoni text-xl md:text-2xl text-timber-wolf/80"
                        >
                            Precision technology for lasting results
                        </motion.p>
                    </div>
                </motion.div>
            </div>

            {/* Main Content */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto px-4 py-16 md:py-24"
            >
                {/* Laser Hair Removal Section */}
                <motion.section variants={itemVariants} className="mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-6">
                                Laser Hair Removal
                            </h2>
                            <p className="text-eerie-black/80 mb-6">
                                A non-invasive cosmetic procedure using concentrated light energy to target and destroy hair follicles, providing long-lasting hair reduction.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {['Legs', 'Underarms', 'Bikini line', 'Face', 'Back', 'Chest'].map((area) => (
                                    <div key={area} className="flex items-center gap-2">
                                        <FaCheck className="text-lapis-lazuli" />
                                        <span className="text-eerie-black/80">{area}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="aspect-[4/3] bg-timber-wolf/10">
                            <img 
                                src="https://omorfia.s3.eu-north-1.amazonaws.com/laser2d.png" 
                                alt="Laser Hair Removal"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Process Steps */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {[
                            {
                                title: "Consultation",
                                icon: FaRegUser,
                                description: "Evaluation of skin type, hair color, and treatment goals for a personalized plan."
                            },
                            {
                                title: "Preparation",
                                icon: FaRegLightbulb,
                                description: "Area cleaning, gel application, and protective eyewear provided."
                            },
                            {
                                title: "Treatment",
                                icon: FaClock,
                                description: "Controlled light pulses target hair follicles with minimal discomfort."
                            },
                            {
                                title: "Post-Care",
                                icon: FaRegQuestionCircle,
                                description: "Application of soothing products and aftercare instructions."
                            }
                        ].map((step) => (
                            <div key={step.title} className="text-center p-6 border border-timber-wolf/20">
                                <step.icon className="w-8 h-8 text-lapis-lazuli mx-auto mb-4" />
                                <h3 className="font-bodoni text-xl text-eerie-black mb-2">{step.title}</h3>
                                <p className="text-eerie-black/70">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* IPL Section */}
                <motion.section variants={itemVariants} className="mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 aspect-[4/3] bg-timber-wolf/10">
                            <img 
                                src="https://omorfia.s3.eu-north-1.amazonaws.com/ipl.png" 
                                alt="IPL Treatment"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-6">
                                IPL Laser Treatment
                            </h2>
                            <p className="text-eerie-black/80 mb-6">
                                Intense Pulsed Light therapy uses broad-spectrum light to address multiple skin concerns simultaneously, promoting skin rejuvenation and clarity.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Sun damage',
                                    'Age spots',
                                    'Acne and acne scars',
                                    'Vascular lesions',
                                    'Skin rejuvenation'
                                ].map((benefit) => (
                                    <li key={benefit} className="flex items-center gap-2">
                                        <FaCheck className="text-lapis-lazuli flex-shrink-0" />
                                        <span className="text-eerie-black/80">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Diode Laser Section */}
                <motion.section variants={itemVariants}>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-6">
                                Diode Laser Treatment
                            </h2>
                            <p className="text-eerie-black/80 mb-6">
                                Advanced technology operating at 800-810 nanometers for precise targeting and optimal results across various skin types.
                            </p>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bodoni text-xl text-eerie-black mb-2">Key Benefits</h3>
                                    <ul className="space-y-3">
                                        {[
                                            'Long-term hair reduction',
                                            'Precise targeting',
                                            'Minimal discomfort',
                                            'Built-in cooling system'
                                        ].map((benefit) => (
                                            <li key={benefit} className="flex items-center gap-2">
                                                <FaCheck className="text-lapis-lazuli flex-shrink-0" />
                                                <span className="text-eerie-black/80">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-[4/3] bg-timber-wolf/10">
                            <img 
                                src="https://omorfia.s3.eu-north-1.amazonaws.com/diodelaser.png" 
                                alt="Diode Laser Treatment"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.section>
            </motion.div>
        </div>
    );
};

export default Laser;