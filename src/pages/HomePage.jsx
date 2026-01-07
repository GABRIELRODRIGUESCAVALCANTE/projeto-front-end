import React from 'react';
import './HomePage.css';
import PageLayout from './PageLayout'; 
import Section from '../components/Section'; 
import ProductListing from '../components/ProductListing'; 
import Gallery from '../components/Gallery'; 
import { Link } from 'react-router-dom';

const HomePage = () => {
  
  // 5.1 - Slides da Galeria Principal
  const heroImages = [
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-2.jpeg" },
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-1.jpeg" },
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-3.jpeg" },
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-4.jpeg" },
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-5.jpeg" },
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-6.jpeg" },
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-7.jpeg" },
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-8.jpeg" },
  ];

  // 5.3 - Lista de 8 Produtos
  const productList = [
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/154c105f9b1a127fb30ca797a224a9a301439ed5/public/produc-image-1.jpeg?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-2.jpeg?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-4.jpeg?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/154c105f9b1a127fb30ca797a224a9a301439ed5/public/product-thumb-5.jpeg?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://tse1.mm.bing.net/th/id/OIP.dQBJB2nJWcgMwkPv0qqAvgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://th.bing.com/th/id/OIP.Gcd8ISF12IwpXzv1Iu55cwHaE8?w=300&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://th.bing.com/th/id/OIP.1uOmFlK_vDRhVN08t3hk6QHaHa?w=221&h=220&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", price: 200, priceDiscount: 149.9 },
  ];

  return (
    <PageLayout>
      
      {/* 5.1 - Slide de Imagens + Texto Overlay */}
      <div className="hero-gallery">
          
          <Gallery 
            images={heroImages}
            width="100%"   
            height="681px" 
            radius="0px"   
          />

          {/* NOVO: Conteúdo de Texto flutuante sobre a imagem */}
          <div className="hero-content-overlay">
              <span className="hero-subtitle">Melhores ofertas personalizadas</span>
              <h1 className="hero-title">Queima de estoque imperdivel 🔥</h1>
              <p className="hero-description">
                  Chegou a hora de renovar seu estilo com preços imperdíveis! Nossa queima de estoque de sapatos está recheada de modelos incríveis, conforto garantido e aquele design que você ama. Mas atenção: são últimas unidades e os descontos estão de tirar o fôlego.

              </p>
              <Link to="/produtos" className="btn-hero">Ver Ofertas</Link>
          </div>

      </div>

      <div className="home-content-container" style={{ padding: '0 100px 40px 100px' }}>
        
        {/* 5.2 - Coleções em Destaque (3 Banners) */}
        <Section 
            title="Coleções em destaque" 
            titleAlign="left" 
        >
           <div className="collection-grid">
              
              {/* CARD 1 */}
              <div className="collection-card">
                  <span className="discount-pill">30% OFF</span>
                  <h3>Novo drop Supreme</h3>
                  <button className="btn-collection">Comprar</button>
                  <img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/collection-1.png" className="collection-img" alt="Supreme" />
              </div>

              {/* CARD 2 */}
              <div className="collection-card">
                  <span className="discount-pill">30% OFF</span>
                  <h3>Coleção Adidas</h3>
                  <button className="btn-collection">Comprar</button>
                  <img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/collection-2.png" className="collection-img" alt="Adidas" />
              </div>

              {/* CARD 3 */}
              <div className="collection-card">
                  <span className="discount-pill">30% OFF</span>
                  <h3>Novo Beats Bass</h3>
                  <button className="btn-collection">Comprar</button>
                  <img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/collection-3.png" className="collection-img" alt="Beats" />
              </div>

           </div>
        </Section>

        {/* 5.2 (Parte 2) - Coleções em Destaque (Ícones) */}
        <Section title="Coleções em destaque" titleAlign="center">
            <div className="icons-container">
                <div className="icon-item">
                    <div className="icon-circle">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C92071" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"/></svg>
                    </div>
                    <span className="icon-label">Camisetas</span>
                </div>
                <div className="icon-item">
                    <div className="icon-circle">
                       <img width="50" height="50" src="https://img.icons8.com/ios/50/C92071/trousers.png" alt="trousers"/>
                    </div>
                    <span className="icon-label">Calças</span>
                </div>
                 <div className="icon-item">
                    <div className="icon-circle">
                       <img 
                        width="64" 
                        height="64" 
                        src="https://img.icons8.com/pastel-glyph/64/C92071/cap--v1.png" 
                        alt="cap--v1"
                        />
                    </div>
                    <span className="icon-label">Bonés</span>
                </div>
                <div className="icon-item">
                    <div className="icon-circle">
                         <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C92071" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
                    </div>
                    <span className="icon-label">Headphones</span>
                </div>
                <div className="icon-item">
                    <div className="icon-circle">
                       <img 
                        width="50" 
                        height="50" 
                        src="https://img.icons8.com/ios/50/C92071/trainers.png" 
                        alt="trainers"
                        />
                    </div>
                    <span className="icon-label">Tênis</span>
                </div>
            </div>
        </Section>

        {/* 5.3 - Produtos em Alta (8 Produtos) */}
        <Section 
            title="Produtos em alta" 
            titleAlign="left" 
            link={{ text: "Ver todos", href: "/produtos" }}
        >
            <ProductListing products={productList} />
        </Section>

      </div>
    </PageLayout>
  );
}

export default HomePage;