import React from 'react';

import logoImg from '../assets/react.svg'; 

const Logo = () => {
  return (
    
    <img 
      src={logoImg} 
      alt="Logo React Store" 
      style={{ 
        width: 'auto',  // Ou o tamanho que preferires
        height: '40px' 
      }} 
    />
  );
}

export default Logo;