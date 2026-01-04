import React from 'react';
import './FeaturedCollections.css';
import Section from './Section';

const FeaturedCollections = () => {
  
  // Lista de Categorias
  const collections = [
    { name: "Camisetas", icon: "👕" }, // Podes trocar este emoji por uma tag <img src={...} />
    { name: "Calças", icon: "👖" },
    { name: "Bonés", icon: "🧢" },
    { name: "Headphones", icon: "🎧" },
    { name: "Tênis", icon: "👟" },
  ];

  return (
    <div className="featured-collections-container">
        <Section 
            title="Coleções em destaque" 
            titleAlign="center" // Aqui usamos o título centralizado!
        >
            <div className="collections-grid">
                {collections.map((item, index) => (
                    <div key={index} className="collection-item">
                        {/* Círculo do Ícone */}
                        <div className="icon-circle">
                            <span className="icon-emoji">{item.icon}</span>
                        </div>
                        {/* Nome da Categoria */}
                        <span className="collection-name">{item.name}</span>
                    </div>
                ))}
            </div>
        </Section>
    </div>
  );
}

export default FeaturedCollections;