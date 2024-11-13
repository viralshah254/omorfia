import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaFlask, FaStar, FaRegLightbulb } from 'react-icons/fa';
import OrganicPattern from './Patterns';

const Peels = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
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
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/api/placeholder/1200/600")' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-eerie-black/90 via-eerie-black/80 to-eerie-black/70" />
                </div>

                <OrganicPattern />

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
                            Chemical Peels
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="font-bodoni text-xl md:text-2xl text-timber-wolf/80"
                        >
                            Transformative treatments for skin renewal
                        </motion.p>
                    </div>
                </motion.div>
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto px-4 py-16 md:py-24"
            >
                {/* Navigation Links */}
                <div className="flex flex-wrap gap-4 mb-12">
                    {[
                        { id: 'salicylic', name: 'Salicylic Peel' },
                        { id: 'glycolic', name: 'Glycolic Peel' },
                        { id: 'mineral', name: 'Mineral Peel' },
                        { id: 'vitamin-c', name: 'Vitamin C Peel' },
                        { id: 'tca', name: 'TCA Peel' }
                    ].map((peel) => (
                        <a
                            key={peel.id}
                            href={`#${peel.id}`}
                            className="font-bodoni text-lapis-lazuli hover:text-eerie-black transition-colors"
                        >
                            {peel.name}
                        </a>
                    ))}
                </div>

                {/* Main Image Section */}
                <motion.section variants={itemVariants} className="mb-20">
                    <div className="aspect-[16/9] bg-timber-wolf/10 max-w-4xl mx-auto">
                        <img 
                            src="https://omorfia.s3.eu-north-1.amazonaws.com/Peel1.jpg"
                            alt="Chemical Peel Treatment"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </motion.section>

                {/* Salicylic Peel Section - Text Only */}
                <motion.section id="salicylic" variants={itemVariants} className="mb-20 max-w-3xl mx-auto">
                    <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-6">
                        Salicylic Peel
                    </h2>
                    <p className="text-eerie-black/80 mb-6">
                        A powerful BHA treatment that penetrates deep into pores, perfect for addressing acne and oil-related concerns.
                    </p>
                    <div className="space-y-3">
                        {[
                            'Deep pore penetration',
                            'Anti-inflammatory properties',
                            'Acne treatment',
                            'Oil control',
                            'Blackhead reduction'
                        ].map((benefit) => (
                            <div key={benefit} className="flex items-center gap-2">
                                <FaCheck className="text-lapis-lazuli flex-shrink-0" />
                                <span className="text-eerie-black/80">{benefit}</span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-eerie-black/70 italic">
                        Best For: Oily, acne-prone skin, and clogged pores
                    </p>
                </motion.section>

                {/* Glycolic Peel Section - Text Only */}
                <motion.section id="glycolic" variants={itemVariants} className="mb-20 max-w-3xl mx-auto">
                    <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-6">
                        Glycolic Peel
                    </h2>
                    <p className="text-eerie-black/80 mb-6">
                        An AHA treatment that exfoliates the outer layer of skin, revealing smoother, more radiant skin underneath.
                    </p>
                    <div className="space-y-3">
                        {[
                            'Promotes collagen production',
                            'Reduces fine lines and wrinkles',
                            'Improves pigmentation',
                            'Evens skin tone',
                            'Enhanced skin texture'
                        ].map((benefit) => (
                            <div key={benefit} className="flex items-center gap-2">
                                <FaCheck className="text-lapis-lazuli flex-shrink-0" />
                                <span className="text-eerie-black/80">{benefit}</span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-eerie-black/70 italic">
                        Best For: All skin types, particularly dry or sun-damaged skin
                    </p>
                </motion.section>

                {/* Mineral Peel Section */}
                <motion.section id="mineral" variants={itemVariants} className="mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-6">
                                Mineral Peel
                            </h2>
                            <p className="text-eerie-black/80 mb-6">
                                A gentle, natural treatment using mineral-based exfoliants for safe and effective skin renewal.
                            </p>
                            <div className="space-y-3">
                                {[
                                    'Gentle exfoliation',
                                    'Natural minerals',
                                    'Minimal downtime',
                                    'Suitable for sensitive skin',
                                    'Enhanced cell renewal'
                                ].map((benefit) => (
                                    <div key={benefit} className="flex items-center gap-2">
                                        <FaCheck className="text-lapis-lazuli flex-shrink-0" />
                                        <span className="text-eerie-black/80">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-eerie-black/70 italic">
                                Best For: Sensitive or irritated skin
                            </p>
                        </div>
                        <div className="aspect-[4/3] bg-timber-wolf/10">
                            <img 
                                src="https://omorfia.s3.eu-north-1.amazonaws.com/peel_mineral.png"
                                alt="Mineral Peel Treatment"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.section>

                {/* Vitamin C Peel Section */}
                <motion.section id="vitamin-c" variants={itemVariants} className="mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 aspect-[4/3] bg-timber-wolf/10">
                            <img 
                                src="https://omorfia.s3.eu-north-1.amazonaws.com/vitCpeel.png"
                                alt="Vitamin C Peel Treatment"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-6">
                                Vitamin C Peel
                            </h2>
                            <p className="text-eerie-black/80 mb-6">
                                A powerful antioxidant treatment that brightens skin and fights free radical damage.
                            </p>
                            <div className="space-y-3">
                                {[
                                    'Brightens complexion',
                                    'Reduces hyperpigmentation',
                                    'Promotes collagen synthesis',
                                    'Anti-aging properties',
                                    'Protection against free radicals'
                                ].map((benefit) => (
                                    <div key={benefit} className="flex items-center gap-2">
                                        <FaCheck className="text-lapis-lazuli flex-shrink-0" />
                                        <span className="text-eerie-black/80">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-eerie-black/70 italic">
                                Best For: Dull skin, uneven tone, and aging concerns
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* TCA Peel Section */}
                <motion.section id="tca" variants={itemVariants} className="mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-6">
                                TCA Peel
                            </h2>
                            <p className="text-eerie-black/80 mb-6">
                                A medium to deep peel using Trichloroacetic Acid for dramatic skin transformation.
                            </p>
                            <div className="space-y-3">
                                {[
                                    'Intensive exfoliation',
                                    'Improves deep wrinkles',
                                    'Treats acne scars',
                                    'Reduces sun damage',
                                    'Customizable strength'
                                ].map((benefit) => (
                                    <div key={benefit} className="flex items-center gap-2">
                                        <FaCheck className="text-lapis-lazuli flex-shrink-0" />
                                        <span className="text-eerie-black/80">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-eerie-black/70 italic">
                                Best For: Mature skin, deep scars, dramatic results
                            </p>
                        </div>
                        <div className="aspect-[4/3] bg-timber-wolf/10">
                            <img 
                                src="https://omorfia.s3.eu-north-1.amazonaws.com/tca_peel.png"
                                alt="TCA Peel Treatment"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.section>

                {/* Consultation Note */}
                <motion.div 
                    variants={itemVariants}
                    className="mt-20 p-6 bg-timber-wolf/10 rounded-lg text-center"
                >
                    <p className="font-bodoni text-xl text-lapis-lazuli">
                        Please note: Our skin specialist will assess your skin and recommend the most suitable treatment for your specific needs.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Peels;