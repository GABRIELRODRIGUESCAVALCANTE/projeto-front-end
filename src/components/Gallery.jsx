import React, { useState } from 'react';
import './Gallery.css';

// Importando as setas
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

const Gallery = ({ className, width, height, radius, showThumbs, images }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- NOVA LÓGICA DE NAVEGAÇÃO (Carrossel Infinito) ---

  const handlePrev = () => {
    // Se estiver no índice 0 (primeira foto), vai para a última (length - 1).
    // Caso contrário, apenas subtrai 1.
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    // Se estiver na última foto (length - 1), volta para a primeira (0).
    // Caso contrário, apenas soma 1.
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  // NOTA: Removemos as variáveis 'canGoLeft' e 'canGoRight' pois agora
  // as setas funcionam sempre.

  if (!images || images.length === 0) {
    return null; // Proteção caso não haja imagens
  }

  return (
    <div 
        className={`gallery-container ${className || ''}`} 
        style={{ width: width, maxWidth: '100%' }}
    >
      
      {/* --- ÁREA PRINCIPAL --- */}
      <div 
        className="gallery-main" 
        style={{ height: height, borderRadius: radius }}
      >
        {/* Seta Esquerda (sempre ativa agora) */}
        <div className="gallery-arrow gallery-arrow-left" onClick={handlePrev}>
             <img src={arrowLeft} alt="Anterior" />
        </div>

        {/* Imagem Atual */}
        <img 
            src={images[currentIndex].src} 
            alt={`Slide ${currentIndex + 1}`} 
            style={{ borderRadius: radius, width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {/* Seta Direita (sempre ativa agora) */}
        <div className="gallery-arrow gallery-arrow-right" onClick={handleNext}>
            <img src={arrowRight} alt="Próximo" />
        </div>
      </div>

      {/* --- MINIATURAS --- */}
      {showThumbs && (
        <div className="gallery-thumbs">
            {images.map((image, index) => (
                <div 
                    key={index}
                    className={`thumb-item ${index === currentIndex ? 'active' : ''}`}
                    style={{ borderRadius: radius }}
                    onClick={() => setCurrentIndex(index)}
                >
                    <img src={image.src} alt={`Thumbnail ${index}`} />
                </div>
            ))}
        </div>
      )}

    </div>
  );
}

export default Gallery;