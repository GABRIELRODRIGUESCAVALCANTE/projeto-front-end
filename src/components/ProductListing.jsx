import React from 'react';
import './ProductListing.css';
import ProductCard from './ProductCard';

const ProductListing = ({ products }) => {
  return (
    <div className="product-listing">
      {products.map((product, index) => (
        <ProductCard
          key={index} // O React precisa de uma chave única para listas
          image={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
}

export default ProductListing;