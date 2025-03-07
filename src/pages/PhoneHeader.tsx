import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa';
import { NavigationItems } from './NavigationItems';

interface HeaderProps {
  location: ReturnType<typeof useLocation>;
  isScrolled: boolean;
}

interface NavItem {
  path: string;
  label: string;
}

const PhoneHeader: React.FC<HeaderProps> = ({ location, isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mainNavItems, menuItems } = NavigationItems;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleNavClick = (path: string) => {
    console.log('Mobile nav clicked:', path);
    setIsMenuOpen(false);
  };

  return (
    <div className="max-w-[1800px] mx-auto px-4">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link 
            to="/"
            onClick={() => handleNavClick('/')}
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <img 
              src="https://omorfia.s3.eu-north-1.amazonaws.com/grad_logo.png" 
              alt="Omorfia Logo" 
              className="h-20 w-auto" 
            />
          </Link>
        </div>

        {/* Phone CTA and Menu Button */}
        <div className="flex items-center space-x-2">
          <a 
            href="tel:+254114294475" 
            className="flex items-center space-x-1 border-timber-wolf border text-white px-2 py-1 rounded-full transition-colors duration-300 bg-lapis-lazuli/5 hover:bg-lapis-lazuli"
          >
            <FaPhone size={12} className="animate-pulse" />
            <span className="font-bodoni text-xs">Call</span>
          </a>
          <button
            className="text-timber-wolf hover:text-white transition-colors duration-200 p-1"
            onClick={() => {
              console.log('Mobile menu toggle clicked');
              setIsMenuOpen(!isMenuOpen);
            }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoMdClose size={20} /> : <HiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className={`
          fixed left-0 right-0 top-[72px] 
          ${isScrolled ? 'bg-eerie-black/90' : 'bg-eerie-black/95'} 
          backdrop-blur-sm 
          max-h-[calc(100vh-72px)] 
          overflow-y-auto 
          z-50
        `}>
          <div className="px-4 py-4 flex flex-col">
            {/* Main Navigation Items */}
            {mainNavItems.map((item: NavItem) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className="block w-full py-2 text-left font-bodoni text-lg text-timber-wolf hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}

            {/* Divider */}
            <div className="h-px w-full bg-timber-wolf/20 my-4" />

            {/* Sub Menu Items */}
            {menuItems.map((item: NavItem) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className="block w-full py-2 text-left font-bodoni text-lg text-timber-wolf hover:text-white transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}

            {/* Phone CTA in Menu */}
            <div className="mt-6 pt-4 border-t border-timber-wolf/20">
              <a 
                href="tel:+254 719 782 642" 
                className="flex items-center justify-center space-x-2 bg-monbatten hover:bg-lapis-lazuli text-white py-3 rounded-lg transition-colors duration-300"
              >
                <FaPhone size={16} />
                <span className="font-bodoni text-lg">+254 719 782 642</span>
              </a>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default PhoneHeader;
