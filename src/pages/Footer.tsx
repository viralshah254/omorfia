import React from 'react';
import { 
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
  FaExternalLinkAlt
} from 'react-icons/fa';

const Footer = () => {
    const bookingNumbers = [
      '+254719 782 642',
      '+254733 782 642'
    ];

    const locationUrl = "https://maps.google.com/?q=67+General+Mathenge+Nairobi+Kenya";
    
    return (
      <footer className="bg-eerie-black border-t border-timber-wolf/10">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="font-bodoni text-lapis-lazuli text-xl flex items-center gap-2">
                <FaPhoneAlt className="w-5 h-5" />
                Booking Contacts
              </h3>
              <div className="space-y-3">
                {bookingNumbers.map((number) => (
                  <a 
                    key={number}
                    href={`tel:${number.replace(/\s+/g, '')}`}
                    className="font-bodoni text-timber-wolf hover:text-lapis-lazuli transition-colors duration-300 flex items-center gap-2"
                  >
                    <span>{number}</span>
                    <FaExternalLinkAlt className="w-3 h-3 inline-block" />
                  </a>
                ))}
              </div>

              <div className="pt-4">
                <a 
                  href={locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bodoni text-timber-wolf hover:text-lapis-lazuli transition-colors duration-300 flex items-start gap-2"
                >
                  <FaMapMarkerAlt className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>67, General Mathenge,<br />Nairobi, Kenya</span>
                  <FaExternalLinkAlt className="w-3 h-3 flex-shrink-0 mt-1" />
                </a>
              </div>

              <div>
                <a 
                  href="mailto:Studioomorfiake@gmail.com"
                  className="font-bodoni text-timber-wolf hover:text-lapis-lazuli transition-colors duration-300 flex items-center gap-2"
                >
                  <FaEnvelope className="w-5 h-5" />
                  <span>Studioomorfiake@gmail.com</span>
                </a>
              </div>
            </div>
  
            {/* Hours */}
            <div className="space-y-6">
              <h3 className="font-bodoni text-lapis-lazuli text-xl flex items-center gap-2">
                <FaClock className="w-5 h-5" />
                Hours
              </h3>
              <div className="font-bodoni text-timber-wolf space-y-3">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 7:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>
  
            {/* Social */}
            <div className="space-y-6">
              <h3 className="font-bodoni text-lapis-lazuli text-xl flex items-center gap-2">
                <FaInstagram className="w-5 h-5" />
                Connect With Us
              </h3>
              <div>
                <a 
                  href="https://www.instagram.com/studio0morfia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-timber-wolf hover:text-lapis-lazuli transition-colors duration-300 font-bodoni"
                >
                  <FaInstagram className="w-5 h-5" />
                  <span>@studio0morfia</span>
                  <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="mt-12 lg:mt-16 pt-8 border-t border-timber-wolf/10 text-center">
            <p className="font-bodoni text-timber-wolf/60 text-sm">
              © {new Date().getFullYear()} Studio Omorfia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;