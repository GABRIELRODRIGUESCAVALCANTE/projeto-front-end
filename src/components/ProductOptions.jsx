import React, { useState } from 'react';
import './ProductOptions.css';

const ProductOptions = ({ options, radius, shape, type }) => {
  // Estado para guardar qual opção foi clicada
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="options-container">
      {options.map((option, index) => (
        <div
          key={index}
          className={`option-item ${shape === 'circle' ? 'option-circle' : 'option-square'} ${selectedOption === index ? 'selected' : ''}`}
          style={{
            borderRadius: shape === 'circle' ? '50%' : radius,
            backgroundColor: type === 'color' ? option : 'transparent' 
          }}
          onClick={() => setSelectedOption(index)}
        >
          {type === 'text' && option}
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;