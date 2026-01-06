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
            // Se for quadrado, usa o radius passado. Se for círculo, ignora.
            borderRadius: shape === 'circle' ? '50%' : radius,
            // Se for tipo "color", o valor da opção vira a cor de fundo
            backgroundColor: type === 'color' ? option : 'transparent' 
          }}
          onClick={() => setSelectedOption(index)}
        >
          {/* Se for texto, exibe o valor (ex: "39") */}
          {type === 'text' && option}
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;