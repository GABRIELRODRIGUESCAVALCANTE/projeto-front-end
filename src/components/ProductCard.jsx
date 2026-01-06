import React from 'react';
import { Link } from 'react-router-dom'; 
import './ProductCard.css';

const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
   
    <Link to="/produto/1" className="product-card">
      
      <div className="card-image-container">
        <img src={image} alt={name} className="product-image" />
      </div>

      <div className="card-info">
        <p className="product-category">Tênis</p>
        <h3 className="product-name">{name}</h3>
        
        <div className="price-container">
            {priceDiscount ? (
                <>
                    <span className="price-old">${price}</span>
                    <span className="price-discount">${priceDiscount}</span>
                </>
            ) : (
                <span className="price-regular">${price}</span>
            )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;