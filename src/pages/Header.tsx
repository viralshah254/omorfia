import React from 'react';
import { useLocation } from 'react-router-dom';
import DesktopHeader from './DesktopHeader';
import PhoneHeader from './PhoneHeader';

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerProps = {
    isScrolled,
    location
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 top-0 ${
        isScrolled ? 'bg-eerie-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="hidden md:block pt-6">
        <DesktopHeader {...headerProps} />
      </div>
      <div className="block md:hidden pt-6">
        <PhoneHeader {...headerProps} />
      </div>
    </header>
  );
};

export default Header;