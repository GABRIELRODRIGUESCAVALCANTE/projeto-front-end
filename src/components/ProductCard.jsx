import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
    <div className="product-card">
      
      {/* Imagem (292x321) */}
      <div className="card-image-container">
        <img src={image} alt={name} className="product-image" />
      </div>

      {/* Informações */}
      <div className="card-info">
        <p className="product-category">Tênis</p> {/* Categoria fixa ou via prop se quiseres */}
        <h3 className="product-name">{name}</h3>
        
        <div className="price-container">
            {/* LÓGICA DO PREÇO CONFORME README */}
            {priceDiscount ? (
                // Se TEM desconto:
                <>
                    <span className="price-old">${price}</span>
                    <span className="price-discount">${priceDiscount}</span>
                </>
            ) : (
                // Se NÃO TEM desconto:
                <span className="price-regular">${price}</span>
            )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;