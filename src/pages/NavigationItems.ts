// src/pages/NavigationItems.ts
export interface NavItem {
    path: string;
    label: string;
  }
  
  interface NavigationData {
    mainNavItems: NavItem[];
    menuItems: NavItem[];
  }
  
  export const NavigationItems: NavigationData = {
    mainNavItems: [
      { path: '/', label: 'Home' },
      { path: '/products', label: 'Services' },
      { path: '/price-list', label: 'Price List' },
      { path: '/contact', label: 'Contact' },
    ],
    menuItems: [
      { path: '/laser', label: 'Laser' },
      { path: '/facial', label: 'Facial' },
      { path: '/peels', label: 'Peels' },
      { path: '/spa-treatments', label: 'Spa Treatments' },
      { path: '/permanent-makeup', label: 'Permanent Makeup' },     
      { path: '/price-list', label: 'Price List' },
      { path: '/products', label: 'Products' },
      { path: '/specials', label: 'Specials' },
    ]
  };