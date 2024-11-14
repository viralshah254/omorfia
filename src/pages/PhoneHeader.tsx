
  // PhoneHeader.tsx
  import React, { useState, useEffect } from 'react';
  import { Link, useLocation } from 'react-router-dom';
  import { HiMenu } from 'react-icons/hi';
  import { IoMdClose } from 'react-icons/io';
  import { NavigationItems } from './NavigationItems';
  
  interface HeaderProps {
    location: ReturnType<typeof useLocation>;
  }
  
  interface NavItem {
    path: string;
    label: string;
  }
  
  const PhoneHeader: React.FC<HeaderProps> = ({ location }) => {
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
      <div className="max-w-[1800px] mx-auto px-6">
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
  
          <button
            className="text-timber-wolf hover:text-white transition-colors duration-200 p-2"
            onClick={() => {
              console.log('Mobile menu toggle clicked');
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? <IoMdClose size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
  
        {isMenuOpen && (
          <nav className="fixed left-0 right-0 top-[96px] bg-eerie-black/95 backdrop-blur-sm max-h-[calc(100vh-96px)] overflow-y-auto">
            <div className="px-4 py-4 flex flex-col">
              {mainNavItems.map((item: NavItem) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className="block w-full py-2 text-left font-bodoni text-lg text-timber-wolf hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px w-full bg-timber-wolf/20 my-4" />
              {menuItems.map((item: NavItem) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className="block w-full py-2 text-left font-bodoni text-lg text-timber-wolf hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    );
  };
  
  export default PhoneHeader;