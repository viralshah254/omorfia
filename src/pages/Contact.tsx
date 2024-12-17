import React from 'react';
import { motion } from 'framer-motion';
import OrganicPattern from './Patterns';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Welcome Message */}
      <div className="relative bg-eerie-black overflow-hidden">
        <div className="absolute inset-0">
          <OrganicPattern />
        </div>
       
        
        <div className="relative max-w-4xl mx-auto px-4 pt-32 pb-24 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            
            <h1 className="font-magenta text-4xl md:text-5xl lg:text-6xl text-timber-wolf mb-6">
              Why <span className="text-[#9EB384]">hello</span> there...
            </h1>
            <p className="font-bodoni text-xl text-timber-wolf/90 max-w-2xl mx-auto leading-relaxed">
              Ready to take a leap into the world of pure relaxation? Whether you have questions, want to join the Omorfia family, or are simply dreaming of some self-care, we'd love to hear from you. Share your thoughts, and we'll be delighted to help you find your way to pure bliss.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative background pattern */}
      <div className="relative bg-gradient-to-b from-timber-wolf/20 to-white">
        <div className="absolute inset-0">
          <svg className="absolute w-full h-full" style={{ filter: 'opacity(0.2)' }}>
            <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor" className="text-lapis-lazuli/40" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
          
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-lapis-lazuli/5 rounded-full mix-blend-multiply blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#9EB384]/5 rounded-full mix-blend-multiply blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Form Section */}
        <div className="relative max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-timber-wolf/20"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-lapis-lazuli">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full border-timber-wolf rounded-md shadow-sm focus:ring-lapis-lazuli focus:border-lapis-lazuli sm:text-sm py-3 px-4 bg-white/70"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-lapis-lazuli">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full border-timber-wolf rounded-md shadow-sm focus:ring-lapis-lazuli focus:border-lapis-lazuli sm:text-sm py-3 px-4 bg-white/70"
                  />
                </div>

                {/* Reason for Contact */}
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-lapis-lazuli">
                    Reason for contacting us
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    required
                    className="mt-1 block w-full border-timber-wolf rounded-md shadow-sm focus:ring-lapis-lazuli focus:border-lapis-lazuli sm:text-sm py-3 px-4 bg-white/70"
                  >
                    <option value="">Please select...</option>
                    <option value="booking">Book an Appointment</option>
                    <option value="question">General Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="career">Career Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Services Interest */}
                <div>
                  <label htmlFor="services" className="block text-sm font-medium text-lapis-lazuli">
                    Which services are you interested in?
                  </label>
                  <textarea
                    id="services"
                    name="services"
                    rows={3}
                    className="mt-1 block w-full border-timber-wolf rounded-md shadow-sm focus:ring-lapis-lazuli focus:border-lapis-lazuli sm:text-sm py-3 px-4 bg-white/70"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-lapis-lazuli">
                    Tell us more about what we can help you with
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-1 block w-full border-timber-wolf rounded-md shadow-sm focus:ring-lapis-lazuli focus:border-lapis-lazuli sm:text-sm py-3 px-4 bg-white/70"
                  />
                </div>
              </div>

              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-lapis-lazuli hover:bg-lapis-lazuli/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lapis-lazuli transition-colors"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;