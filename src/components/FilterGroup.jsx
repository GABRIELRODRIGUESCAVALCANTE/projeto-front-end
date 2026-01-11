import React from 'react';
import './FilterGroup.css';

const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="filter-group-container">
      <h3 className="filter-title">{title}</h3>
      
      <div className="filter-options-list">
        {options.map((option, index) => (
          <label key={index} className="filter-option-label">
            <input 
              type={inputType} 
              name={title} 
              value={option.value || option.text} 
              className="filter-input"
            />
            <span className="text-label">{option.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default FilterGroup;