import React from 'react';
import './Buybox.css';

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
  return (
    <div className="buy-box">
      <h1 className="product-title">{name}</h1>
      <span className="product-ref">Ref: {reference}</span>
      
      <div className="rating-container">
        <div className="stars-box">
            {stars} 
            {/* Ícone de estrela SVG simples (branco) */}
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="white"/></svg>
        </div>
        <span className="rating-total">({rating} avaliações)</span>
      </div>

      <div className="price-box">
          {priceDiscount ? (
              // Se tem desconto: R$ Novo Preço + Preço Antigo
              <div className="price-row">
                 <span className="price-unit">R$ <span className="price-current">{priceDiscount}</span> <span className="price-old">{price}</span></span>
              </div>
          ) : (
              // Se não tem desconto: Apenas R$ Preço Normal
              <span className="price-unit">R$ <span className="price-current">{price}</span></span>
          )}
      </div>

      <p className="product-description">{description}</p>

      {/* Renderiza ProductOptions aqui dentro */}
      {children}

      <button className="btn-buy">Comprar</button>
    </div>
  );
}

export default BuyBox;