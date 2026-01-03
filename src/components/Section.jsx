import React from 'react';
import { Link } from 'react-router-dom';
import './Section.css';

const Section = ({ title, titleAlign = "left", link, children }) => {
  return (
    <section className="section-container">
      
      {/* Cabeçalho da Seção: Título + Link Opcional */}
      <div className={`section-header align-${titleAlign}`}>
        
        <h2 className="section-title">
            {title}
        </h2>

        {/* Renderiza o link apenas se a prop 'link' existir */}
        {link && (
            <Link to={link.href} className="section-link">
                {link.text} &rarr; {/* Adicionei uma setinha para ficar igual ao wireframe */}
            </Link>
        )}

      </div>

      {/* Conteúdo da Seção (Filhos) */}
      <div className="section-content">
        {children}
      </div>

    </section>
  );
}

export default Section;