import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleDown, FaSpa, FaCut, FaBolt, FaRegGem, FaMagic } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import OrganicPattern from './Patterns';

type PriceItem = {
  name: string;
  duration?: string;
  price: number | string;
  isRange?: boolean;
};

type LaserCategory = {
  title: string;
  items: PriceItem[];
};

type Category = {
  icon: IconType;
  title: string;
  subtitle?: string;
  items: PriceItem[];
  laserCategories?: {
    diode: LaserCategory;
    ipl: LaserCategory;
  };
};

type Categories = {
  [key: string]: Category;
};

const PriceList = () => {
  const [activeCategory, setActiveCategory] = useState<string>('facials');
  const [activeLaserType, setActiveLaserType] = useState<'diode' | 'ipl'>('diode');

  const categories: Categories = {
    facials: {
      icon: FaSpa,
      title: "Facials",
      items: [
        { name: "The Omorfia Signature Facial", duration: "75 mins", price: 8500 },
        { name: "Pore Refining Facial", duration: "60 mins", price: 5500 },
        { name: "Aromatic Facial", duration: "60 mins", price: 6500 },
        { name: "Oxygenating Facial", duration: "60 mins", price: 6000 },
        { name: "Cathiodermie Facial", duration: "75 mins", price: 8500 },
        { name: "Diamond Micro-dermabrasion", duration: "75 mins", price: 7500 },
        { name: "A-Lift (Non Surgical Face Lift)", duration: "75 mins", price: 6500 },
        { name: "Radio Frequency", duration: "45 min", price: 5000 },
        { name: "Collagen Booster", price: 10500 },
        { name: "Microneedling", price: 18000 }
      ]
    },
    peels: {
      icon: FaMagic,
      title: "Peels",
      subtitle: "Consultation required prior to treatment (+1000 extra for neck)",
      items: [
        { name: "Saycylic Peel", duration: "30-60 mins", price: 15000 },
        { name: "Glycolic Peel", duration: "30-60 mins", price: 15000 },
        { name: "Mineral Peel", duration: "30-60 mins", price: 8000 },
        { name: "Vitamin C Peel", duration: "30-60 mins", price: 16000 },
        { name: "TCA Peel (1/2 Back)", duration: "30-60 mins", price: 15000 }
      ]
    },
    laser: {
      icon: FaBolt,
      title: "Laser Hair Removal (IPL/DIODE)",
      subtitle: "Price adjusted mildly by circumference area",
      items: [],
      laserCategories: {
        diode: {
          title: "DIODE",
          items: [
            { name: "Half Face", price: 5500 },
            { name: "Full Face", price: 6500 },
            { name: "Upper Lip", price: 2500 },
            { name: "Side Burns", price: 4000 },
            { name: "Chin", price: 3000 },
            { name: "Breasts", price: 5000 },
            { name: "Chest", price: 6500 },
            { name: "Abdomen", price: 6000 },
            { name: "Bikini Line", price: 5000 },
            { name: "Full Bikini", price: 10000 },
            { name: "Full Legs", price: 20000 },
            { name: "Half Legs", price: 10000 },
            { name: "Full Arms", price: 10000 },
            { name: "Half Arms", price: 6000 },
            { name: "Under Arms", price: 5000 },
            { name: "Butt", price: 5000 },
            { name: "Back/Front", price: 10000 },
            { name: "Nipple Area", price: 4000 },
            { name: "Full Body", price: 50000 }
          ]
        },
        ipl: {
          title: "IPL",
          items: [
            { name: "Half Face", price: 4000 },
            { name: "Full Face", price: 5000 },
            { name: "Upper Lip", price: 1500 },
            { name: "Side Burns", price: 3000 },
            { name: "Chin", price: 2500 },
            { name: "Breasts", price: 4500 },
            { name: "Chest", price: 5500 },
            { name: "Abdomen", price: 5000 },
            { name: "Bikini Line", price: 4500 },
            { name: "Full Bikini", price: 10000 },
            { name: "Full Legs", price: 17000 },
            { name: "Half Legs", price: 8500 },
            { name: "Full Arms", price: 8500 },
            { name: "Half Arms", price: 5000 },
            { name: "Under Arms", price: 4000 },
            { name: "Butt", price: 4500 },
            { name: "Back/Front", price: 8500 },
            { name: "Nipple Area", price: 3500 },
            { name: "Full Body", price: 45000 }
          ]
        }
      }
    },
    spa: {
      icon: FaRegGem,
      title: "Spa Treatments",
      items: [
        { name: "Foot Pressure Massage", duration: "30 mins", price: 1800 },
        { name: "Reflexology", duration: "45 mins", price: 4500 },
        { name: "Aromatherapy", duration: "60 mins", price: 6000 },
        { name: "Swedish Massage", duration: "60 mins", price: 4000 },
        { name: "Deep Tissue Massage", duration: "60 mins", price: 4800 },
        { name: "Body Scrub", duration: "60 mins", price: 4000 }
      ]
    },
    permanent: {
      icon: FaCut,
      title: "Permanent Make-up",
      items: [
        { name: "Eyebrow Microblading", price: 18000 },
        { name: "Eye Liner", price: 18000 },
        { name: "Under Eye", price: 18000 },
        { name: "Lip Shading", price: 15000 }
      ]
    }
  };

  const renderLaserContent = () => {
    if (!categories.laser.laserCategories) return null;

    return (
      <div>
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveLaserType('diode')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeLaserType === 'diode'
                ? 'bg-lapis-lazuli text-white'
                : 'bg-timber-wolf text-lapis-lazuli hover:bg-lapis-lazuli/10'
            }`}
          >
            DIODE
          </button>
          <button
            onClick={() => setActiveLaserType('ipl')}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeLaserType === 'ipl'
                ? 'bg-lapis-lazuli text-white'
                : 'bg-timber-wolf text-lapis-lazuli hover:bg-lapis-lazuli/10'
            }`}
          >
            IPL
          </button>
        </div>
        <div className="grid gap-4">
          {categories.laser.laserCategories[activeLaserType].items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div>
                <h3 className="font-medium text-gray-900">{item.name}</h3>
                {item.duration && (
                  <p className="text-sm text-gray-500">{item.duration}</p>
                )}
              </div>
              <div className="text-right">
                <span className="text-lg font-medium text-lapis-lazuli">
                  KES {typeof item.price === 'number' ? item.price.toLocaleString() : item.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[35vh] md:h-[40vh] bg-eerie-black overflow-hidden">
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: 'url("/api/placeholder/1920/1080")'
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-eerie-black/90 via-eerie-black/80 to-eerie-black/70" />
  </div>

  <OrganicPattern />

  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative h-full flex items-center justify-center text-center px-4 pt-12 md:pt-16"
  >
    <div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-magenta text-3xl md:text-5xl lg:text-7xl text-timber-wolf mb-2 md:mb-4"
      >
        Services & Pricing
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="font-bodoni text-base md:text-xl text-timber-wolf/80"
      >
        Luxury treatments for every need
      </motion.p>
    </div>
  </motion.div>
</div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-20 px-4 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`p-4 rounded-lg transition-all ${
                activeCategory === key
                  ? 'bg-lapis-lazuli text-white'
                  : 'bg-timber-wolf text-lapis-lazuli hover:bg-lapis-lazuli/10'
              }`}
            >
              <category.icon className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-medium block text-center">
                {category.title}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bodoni text-lapis-lazuli mb-2">
                {categories[activeCategory].title}
              </h2>
              {categories[activeCategory].subtitle && (
                <p className="text-sm text-gray-600 italic">
                  {categories[activeCategory].subtitle}
                </p>
              )}
            </div>

            {activeCategory === 'laser' ? (
              renderLaserContent()
            ) : (
              <div className="grid gap-4">
                {categories[activeCategory].items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      {item.duration && (
                        <p className="text-sm text-gray-500">{item.duration}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-medium text-lapis-lazuli">
                        KES {typeof item.price === 'number' ? item.price.toLocaleString() : item.price}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PriceList;