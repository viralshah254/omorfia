import React, { useState, useRef, useEffect } from 'react';
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

const DesktopHeader: React.FC<HeaderProps> = ({ location, isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { mainNavItems, menuItems } = NavigationItems;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleNavClick = (path: string) => {
    console.log('Desktop nav clicked:', path);
    setIsMenuOpen(false);
  };

  return (
    <div className="max-w-[1800px] mx-auto px-6 lg:px-24">
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link 
            to="/"
            onClick={() => handleNavClick('/')}
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <img 
              src="https://omorfia.s3.eu-north-1.amazonaws.com/grad_logo.png" 
              alt="Omorfia Logo" 
              className="h-32 w-auto"
            />
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          {/* Phone CTA */}
          <a 
            href="tel:+254114294475" 
            className="flex items-center space-x-2 border-timber-wolf border-2  bg-lapis-lazuli/5 hover:bg-lapis-lazuli text-white px-6 py-2 rounded-full transition-colors duration-300"
          >
            <FaPhone size={14} />
            <span className="font-bodoni text-lg whitespace-nowrap">Call Us</span>
          </a>

          <div className="border-y border-timber-wolf/30">
            <nav className="flex items-center space-x-12 px-8 py-3">
              {mainNavItems.map((item: NavItem) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className="font-bodoni text-lg text-timber-wolf hover:text-white transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="font-bodoni text-lg text-timber-wolf hover:text-white transition-all duration-300"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <IoMdClose size={24} /> : <HiMenu size={24} />}
                </button>

                {isMenuOpen && (
                  <div className="absolute right-0 mt-4 w-56 bg-eerie-black/95 backdrop-blur-sm rounded-md shadow-lg py-2">
                    {menuItems.map((item: NavItem) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => handleNavClick(item.path)}
                        className="block w-full px-4 py-2 text-left font-bodoni text-lg text-timber-wolf hover:text-white hover:bg-eerie-black/50 transition-all duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;