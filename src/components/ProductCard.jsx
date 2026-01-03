import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, category, price, priceDiscount }) => {
  
  // Lógica simples: Se tiver desconto, calcula o valor novo. Se não, usa o preço normal.
  const priceNumber = parseFloat(price);
  const finalPrice = priceDiscount 
      ? priceNumber - (priceNumber * (priceDiscount / 100)) 
      : priceNumber;

  return (
    <div className="product-card">
      
      {/* Imagem do Produto */}
      <div className="card-image-container">
        {/* Se tiver desconto, mostra a etiqueta amarela */}
        {priceDiscount && (
            <span className="discount-badge">{priceDiscount}% OFF</span>
        )}
        <img src={image} alt={name} className="product-image" />
      </div>

      {/* Informações do Produto */}
      <div className="card-info">
        <span className="product-category">{category}</span>
        <h3 className="product-name">{name}</h3>
        
        <div className="price-container">
            {/* Se tiver desconto, mostra o preço antigo riscado */}
            {priceDiscount && (
                <span className="old-price">${price}</span>
            )}
            
            {/* Preço Final (Calculado) */}
            <span className="current-price">
                ${finalPrice.toFixed(2)}
            </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;