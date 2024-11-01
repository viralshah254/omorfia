import React from 'react';
import { motion } from 'framer-motion';
import OrganicPattern from './Patterns';

const AboutUs = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-eerie-black overflow-hidden">
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

        {/* Hero Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative h-full flex items-center justify-center text-center px-4"
        >
          <div className="max-w-4xl">
            <motion.h1 
              variants={fadeInUp}
              className="font-magenta text-5xl md:text-7xl text-timber-wolf mb-6"
            >
              Unveil Your Inner Radiance
            </motion.h1>
            <motion.div 
              variants={fadeInUp}
              className="w-24 h-1 bg-timber-wolf mx-auto mb-6"
            />
            <motion.p 
              variants={fadeInUp}
              className="font-bodoni text-xl md:text-2xl text-timber-wolf/80"
            >
              Where Beauty Meets Expertise
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Mission Statement Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-24"
        >
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-4">Our Mission</h2>
            <div className="w-16 h-0.5 bg-lapis-lazuli mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={fadeInUp}
              className="aspect-[4/3]"
            >
              <img 
                src="/api/placeholder/800/600"
                alt="Spa Treatment"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="space-y-6"
            >
              <p className="text-eerie-black/80 leading-relaxed">
                At Studio Omorfia, our mission is to enhance the natural beauty and well-being of our clients through personalized care and expert services. Our founder and owner takes pride in understanding your skin and identifying an individualized treatment that will best suit your skin.
              </p>
              <p className="text-eerie-black/80 leading-relaxed">
                We are dedicated to providing a tranquil and inviting environment where clients can relax and rejuvenate. Our skilled professionals prioritize safety, effectiveness, and client satisfaction, empowering each individual to look and feel their best.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Vision Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-timber-wolf/5 py-16 px-8 rounded-2xl"
        >
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-bodoni text-3xl md:text-4xl text-lapis-lazuli mb-4">Our Vision</h2>
            <div className="w-16 h-0.5 bg-lapis-lazuli mx-auto" />
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-eerie-black/80 text-lg leading-relaxed">
              Our goal is to be a trusted leader in skin care by identifying each individual skin type and identifying the best treatment that suits your skin so that you can walk away hair free, feeling beautiful, radiant, satisfied, confident and relaxed.
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            {[
              { title: "Personalized Care", description: "Tailored treatments for your unique needs" },
              { title: "Expert Service", description: "Skilled professionals dedicated to excellence" },
              { title: "Safe Environment", description: "Priority on safety and comfort" },
              { title: "Results Driven", description: "Committed to your satisfaction" }
            ].map((value) => (
              <motion.div 
                key={value.title}
                variants={fadeInUp}
                className="text-center p-6 bg-white rounded-lg shadow-sm"
              >
                <h3 className="font-bodoni text-xl text-lapis-lazuli mb-3">{value.title}</h3>
                <p className="text-eerie-black/70">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutUs;