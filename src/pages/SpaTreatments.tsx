import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaCheck, 
    FaLeaf, 
    FaHandSparkles,
    FaRegUser,
    FaRegLightbulb 
} from 'react-icons/fa';
import OrganicPattern from './Patterns';

const SpaTreatments = () => {
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

    const commonEssentialOils = [
        { name: 'Lavender', benefits: 'Calming, stress-reducing, sleep-promoting' },
        { name: 'Peppermint', benefits: 'Headaches, digestion, energy boosting' },
        { name: 'Eucalyptus', benefits: 'Respiratory issues, antiseptic properties' },
        { name: 'Tea Tree', benefits: 'Skin conditions, antiseptic properties' },
        { name: 'Frankincense', benefits: 'Stress reduction, emotional balance' },
        { name: 'Lemon', benefits: 'Mood boosting, focus improvement' },
        { name: 'Chamomile', benefits: 'Anxiety, insomnia, skin irritations' },
        { name: 'Bergamot', benefits: 'Uplifting, mood-enhancing' },
        { name: 'Rosemary', benefits: 'Mental clarity, concentration' },
        { name: 'Ginger', benefits: 'Nausea, digestion, muscle pain' }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[30vh] md:h-[40vh] bg-eerie-black overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${encodeURI("https://waridi.online/wp-content/uploads/2022/10/A-collection-of-essential-oils-300x300.jpg")})` }}
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
                            Spa Treatments
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="font-bodoni text-sm md:text-xl text-timber-wolf/80"
                        >
                            Relaxation and wellness for body and mind
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
                {/* Foot Reflexology Section */}
                <motion.section variants={itemVariants} className="mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-6">
                                Foot Reflexology
                            </h2>
                            <p className="text-eerie-black/80 mb-6">
                                A therapeutic technique involving precise pressure application to specific points on the feet, corresponding to different body systems and organs to promote healing and balance.
                            </p>
                            <h3 className="font-bodoni text-xl text-lapis-lazuli mb-4">Conditions Treated:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {[
                                    'Chronic Pain',
                                    'Digestive Issues',
                                    'Hormonal Imbalances',
                                    'Headaches and Migraines',
                                    'Stress and Anxiety',
                                    'Sleep Disorders',
                                    'Poor Circulation',
                                    'Fertility Support'
                                ].map((condition) => (
                                    <div key={condition} className="flex items-center gap-2">
                                        <FaCheck className="text-lapis-lazuli flex-shrink-0" />
                                        <span className="text-eerie-black/80">{condition}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="aspect-[4/3] bg-timber-wolf/10">
                            <img 
                                src="https://naturveda.fr/cdn/shop/articles/backup-article-605525246238_ec2e1f38-52ba-4722-91c2-80324eebbdfa.webp?crop=center&height=480&v=1717588627&width=640"
                                alt="Foot Reflexology"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </motion.section>

                {/* Aromatherapy Massage Section */}
                <motion.section variants={itemVariants} className="mb-20">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                        <div className="order-2 md:order-1 aspect-[4/3] bg-timber-wolf/10">
                            <img 
                                src="https://www.sport-tec.com/$WS/sport-tec/websale8_shop-sport-tec/produkte/medien/bilder/normal-webp/36209_1.webp"
                                alt="Aromatherapy Massage"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-6">
                                Aromatherapy Massage
                            </h2>
                            <p className="text-eerie-black/80 mb-6">
                                A therapeutic massage combining traditional techniques with essential oils to enhance physical, emotional, and mental well-being.
                            </p>
                            <div className="space-y-3">
                                {[
                                    'Stress relief and relaxation',
                                    'Enhanced mood and emotional balance',
                                    'Improved circulation',
                                    'Pain and tension relief',
                                    'Better sleep quality'
                                ].map((benefit) => (
                                    <div key={benefit} className="flex items-center gap-2">
                                        <FaLeaf className="text-lapis-lazuli flex-shrink-0" />
                                        <span className="text-eerie-black/80">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Essential Oils Grid */}
                    <div className="bg-timber-wolf/10 p-6 rounded-lg">
                        <h3 className="font-bodoni text-2xl text-lapis-lazuli mb-6 text-center">
                            Essential Oils & Their Benefits
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <img 
                                src="https://waridi.online/wp-content/uploads/2022/10/A-collection-of-essential-oils-300x300.jpg"
                                alt="Essential Oils Collection"
                                className="w-full h-64 object-cover rounded-lg"
                            />
                            <img 
                                src="https://transcendentherbals.com/cdn/shop/products/EssentialOils2_720x.jpg?v=1632942732"
                                alt="Essential Oils Variety"
                                className="w-full h-64 object-cover rounded-lg"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {commonEssentialOils.map((oil) => (
                                <div key={oil.name} className="p-4 bg-white/50 rounded">
                                    <h4 className="font-bodoni text-lg text-lapis-lazuli mb-2">{oil.name}</h4>
                                    <p className="text-eerie-black/80 text-sm">{oil.benefits}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Massage Comparison Section */}
                <motion.section variants={itemVariants} className="mb-20">
                    <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-12 text-center">
                        Massage Types Comparison
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Swedish Massage */}
                        <div className="p-6 bg-timber-wolf/10 rounded-lg">
                            <h3 className="font-bodoni text-2xl text-lapis-lazuli mb-4">Swedish Massage</h3>
                            <div className="space-y-3">
                                <p className="text-eerie-black/80">
                                    Gentle and relaxing massage technique perfect for first-time clients and those seeking stress relief.
                                </p>
                                <div className="space-y-2">
                                    {[
                                        'Gentle pressure',
                                        'Overall relaxation',
                                        'Stress reduction',
                                        'Improved circulation'
                                    ].map((feature) => (
                                        <div key={feature} className="flex items-center gap-2">
                                            <FaHandSparkles className="text-lapis-lazuli flex-shrink-0" />
                                            <span className="text-eerie-black/80">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Deep Tissue Massage */}
                        <div className="p-6 bg-timber-wolf/10 rounded-lg">
                            <h3 className="font-bodoni text-2xl text-lapis-lazuli mb-4">Deep Tissue Massage</h3>
                            <div className="space-y-3">
                                <p className="text-eerie-black/80">
                                    Intensive massage focusing on deeper muscle layers to address chronic tension and injuries.
                                </p>
                                <div className="space-y-2">
                                    {[
                                        'Intense pressure',
                                        'Targets muscle knots',
                                        'Chronic pain relief',
                                        'Injury recovery'
                                    ].map((feature) => (
                                        <div key={feature} className="flex items-center gap-2">
                                            <FaHandSparkles className="text-lapis-lazuli flex-shrink-0" />
                                            <span className="text-eerie-black/80">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </motion.div>
        </div>
    );
};

export default SpaTreatments;