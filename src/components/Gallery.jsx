import React, { useState } from 'react';
import './Gallery.css';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

const Gallery = ({ className, width, height, radius, showThumbs, images }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
   
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
   
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };


  if (!images || images.length === 0) {
    return null; 
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