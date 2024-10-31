import React from 'react';
import { motion } from 'framer-motion';

// Geometric Pattern SVG
const GeometricPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="geometric" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path 
          d="M20 1L1 20M20 1L39 20M1 20L20 39M20 39L39 20" 
          stroke="white" 
          strokeWidth="0.5" 
          fill="none"
        />
        <circle cx="20" cy="20" r="1" fill="white" />
        <circle cx="1" cy="20" r="1" fill="white" />
        <circle cx="39" cy="20" r="1" fill="white" />
        <circle cx="20" cy="1" r="1" fill="white" />
        <circle cx="20" cy="39" r="1" fill="white" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#geometric)" />
  </svg>
);

// Organic Pattern SVG
const OrganicPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="organic" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path
          d="M50 10C60 10 70 20 70 30C70 40 60 50 50 50C40 50 30 40 30 30C30 20 40 10 50 10Z"
          stroke="white"
          strokeWidth="0.5"
          fill="none"
        />
        <path
          d="M50 50C60 50 70 60 70 70C70 80 60 90 50 90C40 90 30 80 30 70C30 60 40 50 50 50Z"
          stroke="white"
          strokeWidth="0.5"
          fill="none"
        />
        <circle cx="50" cy="30" r="2" fill="white" fillOpacity="0.2" />
        <circle cx="50" cy="70" r="2" fill="white" fillOpacity="0.2" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#organic)" />
  </svg>
);

export default OrganicPattern;