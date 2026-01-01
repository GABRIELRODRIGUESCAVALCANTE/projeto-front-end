import React from 'react';
// Importa o caminho da imagem (pode ser .svg ou .png)
import logoImg from '../assets/react.svg'; 

const Logo = () => {
  return (
    // AQUI ESTÁ O SEGREDO: Usar a tag <img> e passar a variável no src
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