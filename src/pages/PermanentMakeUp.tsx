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

const PermanentMakeup = () => {
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
            <div className="relative h-[30vh] md:h-[40vh] bg-eerie-black overflow-hidden">
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
        <div className="max-w-3xl">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-magenta text-3xl md:text-5xl lg:text-7xl text-timber-wolf mb-2"
            >
                Permanent Makeup
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="font-bodoni text-sm md:text-xl text-timber-wolf/80"
            >
                Effortless beauty that lasts
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
                {/* Microblading Section */}
                <motion.section variants={itemVariants} className="mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-6">
                                Microblading
                            </h2>
                            <p className="text-eerie-black/80 mb-6">
                                A semi-permanent cosmetic procedure used to enhance the appearance of eyebrows, creating natural, hair-like strokes that mimic the look of real eyebrow hairs.
                            </p>
                            <div className="space-y-3">
                                {[
                                    'Natural-looking results',
                                    'Customized shape and color',
                                    'Semi-permanent solution',
                                    'Enhanced eyebrow fullness',
                                    'Perfect for sparse or thin brows'
                                ].map((benefit) => (
                                    <div key={benefit} className="flex items-center gap-2">
                                        <FaCheck className="text-lapis-lazuli flex-shrink-0" />
                                        <span className="text-eerie-black/80">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-timber-wolf/10">
                            <img 
                                src="https://pmallzone.com.ua/wp-content/uploads/2022/09/permanent-make-up-on-eyebrows_99689-153.jpg"
                                alt="Microblading Treatment"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </motion.section>

                {/* Eyeliner Tattoo Section */}
                <motion.section variants={itemVariants} className="mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                            <div className="bg-timber-wolf/10">
                                <img 
                                    src="https://omorfia.s3.eu-north-1.amazonaws.com/eyeliner1.png"
                                    alt="Permanent Eyeliner Example 1"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="bg-timber-wolf/10">
                                <img 
                                    src="https://omorfia.s3.eu-north-1.amazonaws.com/eyelinerpotrait.png"
                                    alt="Permanent Eyeliner Example 2"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-6">
                                Eyeliner Tattoo
                            </h2>
                            <p className="text-eerie-black/80 mb-6">
                                A long-lasting, smudge-proof alternative to traditional eyeliner, creating a defined and elegant look that requires minimal maintenance.
                            </p>
                            <div className="space-y-3 mb-8">
                                {[
                                    'Smudge-proof results',
                                    'Customizable thickness',
                                    'Long-lasting definition',
                                    'Time-saving solution',
                                    'Perfect for active lifestyles'
                                ].map((benefit) => (
                                    <div key={benefit} className="flex items-center gap-2">
                                        <FaCheck className="text-lapis-lazuli flex-shrink-0" />
                                        <span className="text-eerie-black/80">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                            
                            {/* New Key Details Section */}
                            <div className="bg-timber-wolf/10 p-6 rounded-lg">
                                <h3 className="font-bodoni text-2xl text-lapis-lazuli mb-4">
                                    Key Details About Eyeliner Tattoo
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bodoni text-xl text-lapis-lazuli mb-2">Consultation</h4>
                                        <p className="text-eerie-black/80">
                                            Before getting the procedure, you'll have a consultation with the technician to discuss your preferred style. The technician will measure your eyes and ensure the design complements your eye shape and color.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-bodoni text-xl text-lapis-lazuli mb-2">Numbing</h4>
                                        <p className="text-eerie-black/80">
                                            To minimize discomfort, a topical numbing cream is applied to the eyelid. Some people may experience mild discomfort during the procedure, but it's generally tolerable.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-bodoni text-xl text-lapis-lazuli mb-2">Pigment Application</h4>
                                        <p className="text-eerie-black/80">
                                            The technician uses a tattoo machine or hand-held tool to carefully deposit pigment along the lash line. The procedure can be done on the upper and lower lash lines or just the upper lashes, depending on your preference.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-bodoni text-xl text-lapis-lazuli mb-2">Healing</h4>
                                        <p className="text-eerie-black/80">
                                            Healing typically takes around 7-10 days, but full color retention and final results may take up to 6-8 weeks. Touch-ups are often required after the initial healing phase.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Lip Blushing Section */}
                <motion.section variants={itemVariants} className="mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-6">
                                Lip Blushing
                            </h2>
                            <p className="text-eerie-black/80 mb-6">
                                A semi-permanent cosmetic procedure that enhances the natural color, shape, and definition of your lips, creating a soft, natural, and youthful appearance.
                            </p>
                            <div className="space-y-3">
                                {[
                                    'Enhanced natural lip color',
                                    'Improved lip symmetry',
                                    'Subtle, natural-looking results',
                                    'Correction of uneven pigmentation',
                                    'Fuller, fresher appearance'
                                ].map((benefit) => (
                                    <div key={benefit} className="flex items-center gap-2">
                                        <FaCheck className="text-lapis-lazuli flex-shrink-0" />
                                        <span className="text-eerie-black/80">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-timber-wolf/10">
                            <img 
                                src="https://omorfia.s3.eu-north-1.amazonaws.com/lipblush.png"
                                alt="Lip Blushing Treatment"
                                className="w-full h-auto object-contain"
                            />
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
                                description: "Discuss your preferences and design a treatment plan tailored to your features."
                            },
                            {
                                title: "Preparation",
                                icon: FaRegLightbulb,
                                description: "Application of topical numbing cream for your comfort."
                            },
                            {
                                title: "Treatment",
                                icon: FaClock,
                                description: "Careful application of pigments using specialized techniques."
                            },
                            {
                                title: "Aftercare",
                                icon: FaRegQuestionCircle,
                                description: "Detailed instructions for optimal healing and results."
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

                {/* Healing Note */}
                <motion.div 
                    variants={itemVariants}
                    className="mt-12 p-6 bg-timber-wolf/10 rounded-lg text-center"
                >
                    <p className="font-bodoni text-xl text-lapis-lazuli">
                        Healing typically takes 7-10 days, with final results visible after 6-8 weeks. Touch-ups may be recommended for optimal results.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default PermanentMakeup;