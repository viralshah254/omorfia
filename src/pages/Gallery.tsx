import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import OrganicPattern from './Patterns';

// Define TypeScript interfaces
interface GalleryItem {
    id: number;
    category: 'laser' | 'facial';
    title: string;
    description: string;
    beforeImage: string;
    afterImage: string;
    treatment: string;
}

const Gallery = () => {
    // State with proper typing
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
    const [activeCategory, setActiveCategory] = useState<'all' | 'laser' | 'facial'>('all');

    // Sample gallery data with proper typing
    const galleryItems: GalleryItem[] = [
        {
            id: 1,
            category: 'laser',
            title: 'Laser Hair Removal',
            description: 'Results after 6 sessions',
            beforeImage: '/api/placeholder/600/400',
            afterImage: '/api/placeholder/600/400',
            treatment: 'Full Body Laser Treatment'
        },
        {
            id: 2,
            category: 'facial',
            title: 'Hydrating Facial',
            description: 'After 3 monthly sessions',
            beforeImage: '/api/placeholder/600/400',
            afterImage: '/api/placeholder/600/400',
            treatment: 'Aromatic Facial Treatment'
        },
        {
            id: 3,
            category: 'laser',
            title: 'IPL Treatment',
            description: 'Sun damage reduction',
            beforeImage: 'https://omorfia.s3.eu-north-1.amazonaws.com/beforeipl.png',
            afterImage: 'https://omorfia.s3.eu-north-1.amazonaws.com/afteripl.png',
            treatment: 'IPL Therapy'
        },
    ];

    // Filter items based on active category
    const filteredItems = activeCategory === 'all' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === activeCategory);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                        backgroundImage: 'url("https://omorfia.s3.eu-north-1.amazonaws.com/facemassage.jpg")'
                    }}
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
                            Treatment Gallery
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="font-bodoni text-xl md:text-2xl text-timber-wolf/80"
                        >
                            Real Results, Real Transformations
                        </motion.p>
                    </div>
                </motion.div>
            </div>

            {/* Gallery Content */}
            <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
                {/* Category Filter */}
                <div className="flex justify-center mb-12 space-x-4">
                    {['all', 'laser', 'facial'].map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category as 'all' | 'laser' | 'facial')}
                            className={`px-6 py-2 rounded-full transition-all duration-300 ${
                                activeCategory === category
                                    ? 'bg-lapis-lazuli text-white'
                                    : 'bg-timber-wolf/10 text-eerie-black hover:bg-timber-wolf/20'
                            }`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 gap-8"
                >
                    {filteredItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                            onClick={() => setSelectedImage(item)}
                        >
                            <div className="p-4">
                                <h3 className="font-bodoni text-2xl text-lapis-lazuli mb-2">{item.title}</h3>
                                <p className="text-eerie-black/70 mb-4">{item.description}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 p-4">
                                <div className="space-y-2">
                                    <div className="aspect-[4/3] bg-timber-wolf/10">
                                        <img 
                                            src={item.beforeImage}
                                            alt={`Before ${item.title}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-center text-eerie-black/70">Before</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="aspect-[4/3] bg-timber-wolf/10">
                                        <img 
                                            src={item.afterImage}
                                            alt={`After ${item.title}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-center text-eerie-black/70">After</p>
                                </div>
                            </div>
                            <div className="p-4 bg-timber-wolf/5">
                                <p className="text-sm text-eerie-black/60">{item.treatment}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal for enlarged view */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-eerie-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="max-w-6xl w-full bg-white rounded-lg p-4" onClick={e => e.stopPropagation()}>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <img 
                                    src={selectedImage.beforeImage}
                                    alt={`Before ${selectedImage.title}`}
                                    className="w-full aspect-[4/3] object-cover rounded"
                                />
                                <p className="text-center font-bodoni text-lg">Before</p>
                            </div>
                            <div className="space-y-4">
                                <img 
                                    src={selectedImage.afterImage}
                                    alt={`After ${selectedImage.title}`}
                                    className="w-full aspect-[4/3] object-cover rounded"
                                />
                                <p className="text-center font-bodoni text-lg">After</p>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <h3 className="font-bodoni text-2xl text-lapis-lazuli mb-2">{selectedImage.title}</h3>
                            <p className="text-eerie-black/70">{selectedImage.description}</p>
                            <p className="mt-2 text-eerie-black/60">{selectedImage.treatment}</p>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Gallery;