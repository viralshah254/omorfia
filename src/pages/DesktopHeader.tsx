import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

// Define types for our navigation items
interface NavItem {
  path: string;
  label: string;
}

interface HeaderProps {
  location: ReturnType<typeof useLocation>;
}

// Export this to a separate types file if you prefer
export const NavigationItems = {
  mainNavItems: [
    { path: '/', label: 'Home' },
    { path: '/team', label: 'Team' },
    { path: '/products', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ] as NavItem[],
  menuItems: [
    { path: '/laser', label: 'Laser' },
    { path: '/facial', label: 'Facial' },
    { path: '/peels', label: 'Peels' },
    { path: '/permanent-makeup', label: 'Permanent Makeup' },
    { path: '/spa-treatments', label: 'Spa Treatments' },
    { path: '/price-list', label: 'Price List' },
    { path: '/products', label: 'Products' },
    { path: '/specials', label: 'Specials' },
  ] as NavItem[],
};

const DesktopHeader: React.FC<HeaderProps> = ({ location }) => {
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
              className="h-24 w-auto"
            />
          </Link>
        </div>

        <div className="flex items-center">
          <div className="border-y border-timber-wolf/30">
            <nav className="flex items-center space-x-12 px-8 py-4">
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