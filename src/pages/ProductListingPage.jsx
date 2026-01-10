import React, { useState } from 'react';
import './ProductListingPage.css';
import PageLayout from './PageLayout';
import ProductListing from '../components/ProductListing';
import Section from '../components/Section';
import FilterGroup from '../components/FilterGroup';

const ProductListingPage = () => {
  
  // Estado para controlar a visibilidade do filtro no mobile
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Lista de produtos simulada
  const products = [
    { name: "K-9 V8 - Masculino", image: "https://media.istockphoto.com/id/1337191336/pt/foto/black-fashion-sport-shoe-on-white-background.jpg?s=1024x1024&w=is&k=20&c=c3hNgnXIvdSPXHkYDsky_B_SeF5X3ieMBJkk9QO3py4=", price: 200 },
    { name: "Tênis-Mega - Masculino", image: "https://media.istockphoto.com/id/1170287367/pt/foto/sneakers-sports-shoes-side-view-on-a-white-background.jpg?s=1024x1024&w=is&k=20&c=65v_RdA4OSFYGzKUkmjTKnVuztdtMO43AidugxuMQzE=", price: 289.99, priceDiscount: 199.99 },
    { name: "Tênis-Aura - Masculino", image: "https://media.istockphoto.com/id/1170287326/pt/foto/sneakers-sports-shoes-side-view-on-a-white-background.jpg?s=1024x1024&w=is&k=20&c=M3-SJq-4KVDKw9W-BsP5LfRHmE3PXKsxCQYzBE1Y4UQ=", price: 200, priceDiscount: 149.9 },
    { name: "Tênis-Ego - Masculino", image: "https://media.istockphoto.com/id/688329122/pt/foto/sport-shoes-on-a-white-background.jpg?s=1024x1024&w=is&k=20&c=jbPapSz0FtI06L8uRC13rm8gadhjfGki_ESiFZ6vMTE=", price: 200, priceDiscount: 149.9 },
    { name: "sapatênis - Unissex", image: "https://media.istockphoto.com/id/1170291435/pt/foto/sneakers-sports-shoes-side-view-on-a-white-background-blue-slippers.jpg?s=1024x1024&w=is&k=20&c=UEwW8Sd-QOhVsmx1QQFuP-yyLV6mIBBWgRgiMN1QWg4=", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V6 - Masculino", image: "https://media.istockphoto.com/id/1170289483/pt/foto/sneakers-green-with-gray-on-a-white-background-sport-shoes.jpg?s=1024x1024&w=is&k=20&c=SukHyMl3mBZS8uMNcNmgZeXy9winpB-TrYIXZkl7NRU=", price: 200, priceDiscount: 149.9 },
    { name: "Tênis-alto - Masculino", image: "https://media.istockphoto.com/id/1459060021/pt/foto/blue-unisex-sneakers-with-a-thick-sole-from-a-combined-fabric-on-a-white-background.jpg?s=1024x1024&w=is&k=20&c=8ngrmOI6piQYZf6yG7IVQKfIBxvlw1qIKLNsUZWIzFU=", price: 200 },
    { name: "Tênis-Azul- Masculino", image: "https://media.istockphoto.com/id/960307450/pt/foto/female-blue-sport-shoes-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=tMB_A_9GF32d45F8WeJahDa_u4c-9cKK3pyNb3Pxq20=", price: 200, priceDiscount: 149.9 },
    { name: "wd-40 - Masculino", image: "https://media.istockphoto.com/id/2159589630/pt/foto/sports-sneakers-comfortable-with-soft-sole-childrens-shoes-casual-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=jrBnhPWvYhUUOKYP8xhCEIZ5grCl1pcWdU6J7e9kxiA=", price: 200, priceDiscount: 149.9 },
  ];

  return (
    <PageLayout>
      <div className="product-listing-page">
        
        {/* --- MOBILE: Botão para abrir o menu de filtros --- */}
        <div className="mobile-filter-header">
           <button className="filter-toggle-btn" onClick={() => setIsFilterOpen(true)}>
              {/* Ícone de Filtro (SVG) */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '8px'}}>
                <path d="M4 6H20" stroke="#474747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 12H17" stroke="#474747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 18H14" stroke="#474747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Filtrar
           </button>
        </div>

        {/* --- SIDEBAR (FILTROS) --- */}
        {/* A classe 'open' é adicionada quando isFilterOpen é true */}
        <aside className={`filter-sidebar-container ${isFilterOpen ? 'open' : ''}`}>
            
            {/* MOBILE: Cabeçalho interno do menu com botão fechar */}
            <div className="mobile-filter-close">
              <span className="mobile-filter-title">Filtrar por</span>
              <button className="close-btn" onClick={() => setIsFilterOpen(false)}>✖</button>
            </div>
            
            {/* Bloco de Ordenação */}
            <div className="sort-container">
                <label className="sort-label">Ordenar por</label>
                <select className="sort-select">
                    <option value="relevancia">Mais relevantes</option>
                    <option value="menor_preco">Menor preço</option>
                    <option value="maior_preco">Maior preço</option>
                </select>
            </div>

            {/* Bloco de Filtros */}
            <div className="filter-container">
                <h3 className="filter-main-title">Filtrar por</h3>
                
                <FilterGroup 
                    title="Marca"
                    inputType="checkbox"
                    options={[
                        { text: "Adidas", value: "adidas" },
                        { text: "Calenciaga", value: "calenciaga" },
                        { text: "K-Swiss", value: "kswiss" },
                        { text: "Nike", value: "nike" },
                        { text: "Puma", value: "puma" }
                    ]}
                />

                <FilterGroup 
                    title="Categoria"
                    inputType="checkbox"
                    options={[
                        { text: "Esporte e lazer", value: "esporte" },
                        { text: "Casual", value: "casual" },
                        { text: "Utilitário", value: "utilitario" },
                        { text: "Corrida", value: "corrida" }
                    ]}
                />

                <FilterGroup 
                    title="Gênero"
                    inputType="checkbox"
                    options={[
                        { text: "Masculino", value: "masculino" },
                        { text: "Feminino", value: "feminino" },
                        { text: "Unisex", value: "unisex" }
                    ]}
                />

                 <FilterGroup 
                    title="Estado"
                    inputType="radio"
                    options={[
                        { text: "Novo", value: "novo" },
                        { text: "Usado", value: "usado" }
                    ]}
                />
            </div>
        </aside>

        {/* MOBILE: Overlay (Fundo escuro atrás do menu quando aberto) */}
        {isFilterOpen && (
            <div className="overlay" onClick={() => setIsFilterOpen(false)}></div>
        )}

        {/* --- CONTEÚDO PRINCIPAL (DIREITA) --- */}
        <main className="product-listing-content">
            <Section 
                title={`Resultados para Tênis - ${products.length} produtos`} 
                titleAlign="left"
            >
                <ProductListing products={products} />
            </Section>
        </main>

      </div>
    </PageLayout>
  );
}

export default ProductListingPage;