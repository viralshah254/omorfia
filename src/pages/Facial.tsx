import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaRegLightbulb, FaRegUser, FaClock } from 'react-icons/fa';
import OrganicPattern from './Patterns';

const Facial = () => {
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
            <div className="relative h-[30vh] md:h-[50vh] bg-eerie-black overflow-hidden">
    <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://omorfia.s3.eu-north-1.amazonaws.com/facemassage.jpg")' }}
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
        <div className="max-w-3xl">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-magenta text-3xl md:text-5xl lg:text-7xl text-timber-wolf mb-2"
            >
                Luxury Facial Treatments
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="font-bodoni text-sm md:text-xl text-timber-wolf/80"
            >
                Rejuvenating therapies for radiant skin
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
                {/* Aromatic Facial Section */}
                <motion.section variants={itemVariants} className="mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-6">
                                Aromatic Facial Treatment
                            </h2>
                            <p className="text-eerie-black/80 mb-6">
                                A rejuvenating skincare treatment that combines the therapeutic benefits of essential oils with traditional facial techniques for enhanced skin appearance and overall well-being.
                            </p>
                            <div className="space-y-3">
                                {[
                                    'Hydration and moisturization',
                                    'Stress reduction through aromatherapy',
                                    'Anti-aging benefits',
                                    'Deep detoxification',
                                    'Customized essential oil blend'
                                ].map((benefit) => (
                                    <div key={benefit} className="flex items-center gap-2">
                                        <FaCheck className="text-lapis-lazuli flex-shrink-0" />
                                        <span className="text-eerie-black/80">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="aspect-[4/3] bg-timber-wolf/10">
                            <img 
                                src="https://omorfia.s3.eu-north-1.amazonaws.com/facials.png" 
                                alt="Aromatic Facial"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.section>

                {/* Oxygenating Facial Section */}
                <motion.section variants={itemVariants} className="mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 aspect-[4/3] bg-timber-wolf/10">
                            <img 
                                src="https://www.modernskintherapyca.com/wp-content/uploads/elementor/thumbs/oxygen-skin-therapy-image-q3zhfbavgwhlq7f4xlfvkt08dovepiiy4nundr359s.jpg" 
                                alt="Oxygenating Facial"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-6">
                                Oxygenating Facial Treatment
                            </h2>
                            <p className="text-eerie-black/80 mb-6">
                                A cutting-edge skincare treatment designed to revitalize and rejuvenate your skin by infusing it with oxygen, promoting cellular renewal and a radiant appearance.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Enhanced oxygen flow',
                                    'Brightening effect',
                                    'Deep detoxification',
                                    'Intense hydration',
                                    'Improved skin elasticity'
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

                {/* Catheoderm Facial Section */}
                <motion.section variants={itemVariants} className="mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-6">
                                Catheodermie Facial Treatment
                            </h2>
                            <p className="text-eerie-black/80 mb-6">
                                An innovative skincare treatment using advanced microcurrent technology combined with targeted skincare products to enhance skin tone, texture, and overall appearance.
                            </p>
                            <div className="space-y-3">
                                {[
                                    'Natural lifting and tightening',
                                    'Enhanced circulation',
                                    'Deep hydration',
                                    'Reduced fine lines',
                                    'Customized treatment approach'
                                ].map((benefit) => (
                                    <div key={benefit} className="flex items-center gap-2">
                                        <FaCheck className="text-lapis-lazuli flex-shrink-0" />
                                        <span className="text-eerie-black/80">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="aspect-[4/3] bg-timber-wolf/10">
                            <img 
                                src="https://i.pinimg.com/736x/34/cc/24/34cc248c97cee1e86ecf998049ae5d21.jpg" 
                                alt="Catheoderm Facial"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.section>

                {/* Diamond Microdermabrasion Section - Centered without image */}
                <motion.section variants={itemVariants} className="mb-20">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-6">
                            Diamond Microdermabrasion Facial
                        </h2>
                        <p className="text-eerie-black/80 mb-6">
                            A non-invasive skincare treatment utilizing diamond-tipped tools to gently exfoliate the skin's surface, revealing a smoother, brighter complexion while promoting cellular renewal.
                        </p>
                        <div className="space-y-3">
                            {[
                                'Deep Exfoliation and unclogged pores',
                                'Enhanced skin tone and clarity',
                                'Reduced fine lines and wrinkles',
                                'Boosted collagen production',
                                'Customizable treatment approach'
                            ].map((benefit) => (
                                <div key={benefit} className="flex items-center gap-2">
                                    <FaCheck className="text-lapis-lazuli flex-shrink-0" />
                                    <span className="text-eerie-black/80">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* A-Lift Facial Section - Centered without image */}
                <motion.section variants={itemVariants} className="mb-20">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-6">
                            A-Lift Anti-Aging Facial
                        </h2>
                        <p className="text-eerie-black/80 mb-6">
                            A non-invasive facial treatment focusing on tightening and lifting the skin using advanced radio frequency technology to reduce the appearance of fine lines and wrinkles.
                        </p>
                        <div className="space-y-3">
                            {[
                                'Advanced RF technology application',
                                'Enhanced collagen production',
                                'Improved skin elasticity',
                                'Natural lifting effect',
                                'Non-surgical facelift alternative'
                            ].map((benefit) => (
                                <div key={benefit} className="flex items-center gap-2">
                                    <FaCheck className="text-lapis-lazuli flex-shrink-0" />
                                    <span className="text-eerie-black/80">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Microneedling Facial Section */}
                <motion.section variants={itemVariants} className="mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 aspect-[4/3] bg-timber-wolf/10">
                            <img 
                                src="https://diaminyaesthetics.com/cdn/shop/articles/microneedling_11_e0a98634-d14b-440e-afe0-affc895c6506.jpg?v=1726133735&width=1200" 
                                alt="Microneedling Facial"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-6">
                                Microneedling Facial Treatment
                            </h2>
                            <p className="text-eerie-black/80 mb-6">
                                A revolutionary skincare treatment using fine needles to create controlled micro-injuries, stimulating your skin's natural healing process and encouraging collagen production for smoother, firmer skin.
                            </p>
                            <div className="space-y-3">
                                {[
                                    'Improved skin texture and reduced pore size',
                                    'Reduced fine lines and wrinkles',
                                    'Diminished acne scarring',
                                    'Even skin tone and reduced hyperpigmentation',
                                    'Enhanced product absorption'
                                ].map((benefit) => (
                                    <div key={benefit} className="flex items-center gap-2">
                                        <FaCheck className="text-lapis-lazuli flex-shrink-0" />
                                        <span className="text-eerie-black/80">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Radio Frequency Section */}
                <motion.section variants={itemVariants} className="mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 aspect-[4/3] bg-timber-wolf/10">
                            <img 
                                src="https://telegrafi.com/wp-content/uploads/2022/03/blog_redsculpt_1a8c61e8-1c9b-43d5-af10-b8868941e837_1200x798.jpg" 
                                alt="Radio Frequency Treatment"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-6">
                                Radio Frequency (RF) Technology
                            </h2>
                            <p className="text-eerie-black/80 mb-6">
                                Radio frequency waves are applied to the skin to promote collagen production and increase skin elasticity by heating the deeper layers of the skin.
                            </p>
                            <div className="space-y-3">
                                {[
                                    'Promotes collagen production',
                                    'Increases skin elasticity',
                                    'Heats deeper skin layers',
                                    'Stimulates natural healing process',
                                    'Helps lift and firm the face over time'
                                ].map((benefit) => (
                                    <div key={benefit} className="flex items-center gap-2">
                                        <FaCheck className="text-lapis-lazuli flex-shrink-0" />
                                        <span className="text-eerie-black/80">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Treatment Process */}
<motion.section variants={itemVariants} className="mt-20">
    <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-12 text-center">
        Our Treatment Process
    </h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
            {
                title: "Consultation",
                icon: FaRegUser,
                description: "Personalized skin analysis and treatment planning."
            },
            {
                title: "Preparation",
                icon: FaRegLightbulb,
                description: "Gentle cleansing and preparation of the skin."
            },
            {
                title: "Treatment",
                icon: FaClock,
                description: "Application of specialized techniques and products."
            },
            {
                title: "After-Care",
                icon: FaCheck,
                description: "Post-treatment care advice and product recommendations."
            }
        ].map((step) => (
            <div 
                key={step.title} 
                className="text-center p-6 border border-timber-wolf/20 hover:border-lapis-lazuli/30 transition-colors duration-300 rounded-lg"
            >
                <step.icon className="w-8 h-8 text-lapis-lazuli mx-auto mb-4" />
                <h3 className="font-bodoni text-xl text-eerie-black mb-2">{step.title}</h3>
                <p className="text-eerie-black/70">{step.description}</p>
            </div>
        ))}
    </div>
</motion.section>
            </motion.div>
        </div>
    );
};

export default Facial;