import React from 'react';
import './ProductListingPage.css';
import PageLayout from './PageLayout';
import ProductListing from '../components/ProductListing';
import Section from '../components/Section';
import FilterGroup from '../components/FilterGroup';

const ProductListingPage = () => {
  
  // Lista de produtos para simular o resultado da busca
  const products = [
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-1.png?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-2.png?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-3.png?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-4.png?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-5.png?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-1.png?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-2.png?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-3.png?raw=true", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/product-thumb-4.png?raw=true", price: 200, priceDiscount: 149.9 },
  ];

  return (
    <PageLayout>
      <div className="product-listing-page">
        
        {/* --- 6.1 e 6.2: SIDEBAR (ESQUERDA) --- */}
        <aside className="filter-sidebar-container">
            
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

        {/* --- 6.3: CONTEÚDO PRINCIPAL (DIREITA) --- */}
        <main className="product-listing-content">
            {/* A Section recebe o título com a contagem de produtos 
               e o alinhamento à esquerda conforme requisito.
            */}
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