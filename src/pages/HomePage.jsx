import React from 'react';
import './HomePage.css';
import PageLayout from './PageLayout'; 
import Section from '../components/Section'; 
import ProductListing from '../components/ProductListing'; 
import Gallery from '../components/Gallery'; 
import { Link } from 'react-router-dom';

// 1. NOVO: Importar o componente que criámos
import SpecialOffer from '../components/SpecialOffer';

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
    { name: "K-Swiss V8 - Masculino", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e4c6334a-f7cc-41b0-8060-d72c31a2335a/NIKE+COURT+VISION+LO.png", price: 699.90 },
    { name: "K-Swiss V8 - Masculino", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-2.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-4.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/product-thumb-5.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://th.bing.com/th/id/OIP.VRwF76bH1feNOJyMLQjl1gAAAA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://tse1.mm.bing.net/th/id/OIP.U7h96qIENaN1K7DnW94mTAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", price: 211},
    { name: "K-Swiss V8 - Masculino", image: "https://th.bing.com/th/id/OIP.1uOmFlK_vDRhVN08t3hk6QHaHa?w=221&h=220&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", price: 299.99},
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

          <div className="hero-content-overlay">
              <span className="hero-subtitle">Melhores ofertas personalizadas</span>
              <h1 className="hero-title">Queima de estoque imperdivel 🔥</h1>
              <p className="hero-description">
                  Chegou a hora de renovar seu estilo com preços imperdíveis! Nossa queima de estoque de sapatos está recheada de modelos incríveis.
              </p>
              <Link to="/produtos" className="btn-hero">Ver Ofertas</Link>
          </div>

      </div>

      <div className="home-content-container" style={{ padding: '0 100px 40px 100px' }}>
        
        {/* 5.2 - Coleções em Destaque (3 Banners) */}
        <Section title="Coleções em destaque" titleAlign="left">
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
                {/* ... (Outros ícones mantidos iguais) ... */}
                <div className="icon-item">
                     <div className="icon-circle">
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/C92071/trousers.png" alt="trousers"/>
                     </div>
                     <span className="icon-label">Calças</span>
                </div>
                <div className="icon-item">
                     <div className="icon-circle">
                       <img width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/C92071/cap--v2.png" alt="cap--v2"/>
                     </div>
                     <span className="icon-label">Bonés</span>
                </div>
                <div className="icon-item">
                     <div className="icon-circle">
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/C92071/headphones.png" alt="headphones"/>
                     </div>
                     <span className="icon-label">Headphones</span>
                </div>
                <div className="icon-item">
                     <div className="icon-circle">
                        <img width="50" height="50" src="https://img.icons8.com/ios/50/C92071/trainers.png" alt="trainers"/>
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

        {/* 2. NOVO: AQUI entra a nova seção de Oferta Especial */}
        <SpecialOffer />

      </div>
    </PageLayout>
  );
}

export default HomePage;