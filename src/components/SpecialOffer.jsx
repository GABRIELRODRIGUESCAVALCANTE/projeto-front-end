import React from 'react';
import { Link } from 'react-router-dom'; // Importamos o Link para navegar
import './SpecialOffer.css'; // Vamos criar este CSS no passo 2

export default function SpecialOffer() {
  return (
    <section className="special-offer-container">
      
      {/* Lado Esquerdo: Imagem */}
      <div className="offer-image-wrapper">
       
        <img 
            src="https://th.bing.com/th/id/R.974793089af1a8eb0529a745ef240f94?rik=IWNToBBee1%2fuNg&pid=ImgRaw&r=0" 
            alt="Air Jordan Edição de Colecionador" 
            className="offer-img"
        />
      </div>

      {/* Lado Direito: Texto */}
      <div className="offer-content">
        <span className="offer-subtitle">Oferta especial</span>
        
        <h2 className="offer-title">
          Air Jordan edição de colecionador
        </h2>
        
        <p className="offer-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>

        {/* O Botão que leva aos produtos */}
        <Link to="/produtos">
            <button className="offer-button">Ver Oferta</button>
        </Link>
      </div>

    </section>
  );
}