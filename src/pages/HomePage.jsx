import React from 'react';
import './HomePage.css';
import PageLayout from './PageLayout'; // Ajuste o caminho conforme sua pasta
import Section from '../components/Section'; // Ajuste o caminho
import ProductListing from '../components/ProductListing'; // Ajuste o caminho
import Gallery from '../components/Gallery'; // Ajuste o caminho

const HomePage = () => {
  
  // 5.1 - Slides da Galeria Principal
  const heroImages = [
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-1.jpeg" },
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-2.jpeg" },
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-3.jpeg" },
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-4.jpeg" },
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-5.jpeg" },
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-6.jpeg" },
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-7.jpeg" },
    { src: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-8.jpeg" },
  ];

  // 5.3 - Lista de 8 Produtos
  const productList = [
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-1.png?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-2.png?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-3.png?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-4.png?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-5.png?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-1.png?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-2.png?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-3.png?raw=true", price: 200, priceDiscount: 149.9 },
  ];

  return (
    <PageLayout>
      
      {/* 5.1 - Slide de Imagens */}
      <div className="hero-gallery">
          <Gallery 
            images={heroImages}
            width="100%"   
            height="681px" 
            radius="0px"   
          />
      </div>

      <div className="home-content-container" style={{ padding: '0 100px 40px 100px' }}>
        
        {/* 5.2 - Coleções em Destaque (3 Banners) */}
        <Section 
            title="Coleções em destaque" 
            titleAlign="left" // No Figma parece Left, mas o readme pede Center. Podes ajustar aqui.
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

        {/* 5.2 (Parte 2) - Coleções em Destaque (Ícones) - Conforme Figma */}
        <Section title="Coleções em destaque" titleAlign="center">
            <div className="icons-container">
                <div className="icon-item">
                    <div className="icon-circle">
                        {/* Ícone SVG Camiseta */}
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C92071" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"/></svg>
                    </div>
                    <span className="icon-label">Camisetas</span>
                </div>
                <div className="icon-item">
                    <div className="icon-circle">
                        {/* Ícone SVG Calça */}
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C92071" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-8a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v8"/><path d="M17 4v3a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4"/><path d="M7 4h10"/></svg>
                    </div>
                    <span className="icon-label">Calças</span>
                </div>
                 <div className="icon-item">
                    <div className="icon-circle">
                         {/* Ícone SVG Boné */}
                         <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C92071" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M7 12a5 5 0 0 1 10 0"/><path d="M12 7V4"/></svg>
                    </div>
                    <span className="icon-label">Bonés</span>
                </div>
                <div className="icon-item">
                    <div className="icon-circle">
                         {/* Ícone SVG Headphones */}
                         <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C92071" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
                    </div>
                    <span className="icon-label">Headphones</span>
                </div>
                <div className="icon-item">
                    <div className="icon-circle">
                         {/* Ícone SVG Tênis */}
                         <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C92071" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M16 6l-4-4-4 4"/></svg>
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