import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const menuItems = [
    { path: '/laser', label: 'Laser' },
    { path: '/facial', label: 'Facial' },
    { path: '/peels', label: 'Peels' },
    { path: '/permanent-makeup', label: 'Permanent Makeup' },
    { path: '/spa-treatments', label: 'Spa Treatments' },
    { path: '/price-list', label: 'Price List' },
    { path: '/products', label: 'Products' },
    { path: '/specials', label: 'Specials' },
  ];

  const mainNavItems = [
    { path: '/', label: 'Home' },
    { path: '/team', label: 'Team' },
    { path: '/products', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 top-0 ${
      isScrolled ? 'bg-eerie-black/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-[1800px] mx-auto px-6 lg:px-24">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://omorfia.s3.eu-north-1.amazonaws.com/grad_logo.png" 
                alt="Omorfia Logo" 
                className="h-24 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Section */}
          <div className="flex items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="border-y border-timber-wolf/30">
                <nav className="flex items-center space-x-12 px-8 py-4">
                  {mainNavItems.map((item) => (
                    <Link 
                      key={item.path}
                      to={item.path}
                      className="font-bodoni text-lg text-timber-wolf hover:text-white transition-all duration-300"
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  {/* Menu Dropdown */}
                  <div className="relative" ref={menuRef}>
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="font-bodoni text-lg text-timber-wolf hover:text-white transition-all duration-300"
                      aria-label="Toggle menu"
                    >
                      {isMenuOpen ? (
                        <IoMdClose size={24} />
                      ) : (
                        <HiMenu size={24} />
                      )}
                    </button>

                    {/* Dropdown Content */}
                    {isMenuOpen && (
                      <div className="absolute right-0 mt-4 w-56 bg-eerie-black/95 backdrop-blur-sm rounded-md shadow-lg py-2">
                        {menuItems.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block px-4 py-2 font-bodoni text-lg text-timber-wolf hover:text-white hover:bg-eerie-black/50 transition-all duration-200"
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-timber-wolf hover:text-white transition-colors duration-200 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <IoMdClose size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full mt-2 bg-eerie-black/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-2">
              {/* Main Navigation Items */}
              {mainNavItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  className="block py-2 font-bodoni text-lg text-timber-wolf hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Divider */}
              <div className="h-px w-full bg-timber-wolf/20 my-4" />
              
              {/* Menu Items */}
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-2 font-bodoni text-lg text-timber-wolf hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;